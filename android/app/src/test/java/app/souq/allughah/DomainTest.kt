package app.souq.allughah

import app.souq.allughah.domain.AnswerEvaluator
import app.souq.allughah.domain.DailyCoach
import app.souq.allughah.domain.LearningEngine
import app.souq.allughah.domain.MasteryState
import app.souq.allughah.domain.ReviewCard
import app.souq.allughah.domain.SearchIndex
import app.souq.allughah.domain.Sm2Scheduler
import app.souq.allughah.domain.Sm2State
import app.souq.allughah.domain.SrsGrade
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

/** اختبارات وحدة لمنطق التعلّم النقي (لا أندرويد) — تعمل عبر: gradle -p android testDebugUnitTest */
class Sm2Test {
    private val now = 1_700_000_000_000L
    private fun fresh() = Sm2State(itemId = "x", kind = "phrase", languageCode = "id")

    @Test fun `again reschedules in 10 minutes and lapses`() {
        val s = Sm2Scheduler.schedule(fresh().copy(repetitions = 3, intervalDays = 6), SrsGrade.Again, now)
        assertEquals(now + Sm2Scheduler.RELEARN, s.dueAt)
        assertEquals(0, s.repetitions)
        assertEquals(1, s.lapses)
        assertEquals(1, s.totalReviews)
        assertEquals(0, s.correctReviews)
    }

    @Test fun `good first review is due tomorrow`() {
        val s = Sm2Scheduler.schedule(fresh(), SrsGrade.Good, now)
        assertEquals(1, s.repetitions)
        assertEquals(1, s.intervalDays)
        assertEquals(now + 24L * 3600_000, s.dueAt)
    }

    @Test fun `good second review jumps to six days`() {
        val s1 = Sm2Scheduler.schedule(fresh(), SrsGrade.Good, now)
        val s2 = Sm2Scheduler.schedule(s1, SrsGrade.Good, now)
        assertEquals(2, s2.repetitions)
        assertEquals(6, s2.intervalDays)
    }

    @Test fun `ease factor is clamped between 1_3 and 2_5`() {
        var s = fresh()
        repeat(10) { s = Sm2Scheduler.schedule(s, SrsGrade.Again, now) }
        assertEquals(1.3, s.easeFactor, 0.001)
        var e = fresh()
        repeat(10) { e = Sm2Scheduler.schedule(e, SrsGrade.Easy, now) }
        assertEquals(2.5, e.easeFactor, 0.001)
    }

    @Test fun `hard multiplies interval by 1_2`() {
        val base = fresh().copy(repetitions = 2, intervalDays = 10)
        val s = Sm2Scheduler.schedule(base, SrsGrade.Hard, now)
        assertEquals(12, s.intervalDays)
    }

    @Test fun `mastery states are honest`() {
        assertEquals(MasteryState.NEW, fresh().mastery)
        val mastered = fresh().copy(repetitions = 5, intervalDays = 21, totalReviews = 5, correctReviews = 5)
        assertEquals(MasteryState.MASTERED, mastered.mastery)
        val weak = fresh().copy(lapses = 2, repetitions = 2, totalReviews = 4, correctReviews = 2)
        assertEquals(MasteryState.WEAK, weak.mastery)
    }
}

class LearningEngineTest {
    private val now = 1_700_000_000_000L
    private fun card(box: Int) = ReviewCard("p1", "phrase", box, 0L, 0, 0)

    @Test fun `again drops card to box 0 due in 10 minutes`() {
        val c = LearningEngine.applyGrade(card(4), SrsGrade.Again, now)
        assertEquals(0, c.box)
        assertEquals(now + 10 * 60 * 1000, c.dueAt)
        assertEquals(1, c.lapses)
    }

    @Test fun `good promotes one box with defined interval`() {
        val c = LearningEngine.applyGrade(card(1), SrsGrade.Good, now)
        assertEquals(2, c.box)
        assertEquals(now + 7L * 24 * 3600_000, c.dueAt)
    }

    @Test fun `hard caps box at 2 and due tomorrow`() {
        val c = LearningEngine.applyGrade(card(5), SrsGrade.Hard, now)
        assertEquals(2, c.box)
        assertEquals(now + 24 * 3600_000, c.dueAt)
    }

    @Test fun `easy jumps two boxes capped at 5`() {
        assertEquals(5, LearningEngine.applyGrade(card(4), SrsGrade.Easy, now).box)
        assertEquals(3, LearningEngine.applyGrade(card(1), SrsGrade.Easy, now).box)
    }

    @Test fun `mastery labels cover every box`() {
        for (b in 0..5) assertTrue(LearningEngine.masteryLabel(b).isNotBlank())
    }
}

class EvaluatorSearchTest {
    @Test fun `answer ignores case and punctuation`() {
        assertTrue(AnswerEvaluator.isCorrect("  Merhaba! ", "merhaba"))
        assertTrue(AnswerEvaluator.isCorrect("Selamat pagi.", "selamat pagi"))
    }

    @Test fun `answer accepts any pipe-separated alternative`() {
        assertTrue(AnswerEvaluator.isCorrect("Günaydın", "Günaydın|Merhaba"))
        assertFalse(AnswerEvaluator.isCorrect("Halo", "Günaydın|Merhaba"))
        assertFalse(AnswerEvaluator.isCorrect("   ", "Merhaba"))
    }

    @Test fun `arabic search normalizes alef ta marbuta and diacritics`() {
        assertEquals("مرحبا بالعالمه", SearchIndex.normalize("مَرحبا بالعالمة"))
        assertTrue(SearchIndex.fuzzy("اللغة", "سوق اللغه للجميع"))
    }

    @Test fun `fuzzy tolerates one typo for longer queries`() {
        assertTrue(SearchIndex.fuzzy("merhaba", "merhabx"))
        assertFalse(SearchIndex.fuzzy("", "anything"))
    }
}

class CoachTest {
    @Test fun `brand new learner gets a welcome that allows new lessons`() {
        val (msg, allowNew) = DailyCoach.guide(forgotten = 0, weak = 0, due = 0, tracked = 0)
        assertTrue(msg.contains("لم تبدأ"))
        assertTrue(allowNew)
    }

    @Test fun `clean review deck allows new lesson`() {
        val (_, allowNew) = DailyCoach.guide(0, 0, 0, tracked = 5)
        assertTrue(allowNew)
    }

    @Test fun `review debt above threshold blocks new lessons`() {
        val (_, allowNew) = DailyCoach.guide(forgotten = 0, weak = 0, due = 20, tracked = 5)
        assertFalse(allowNew)
    }
}
