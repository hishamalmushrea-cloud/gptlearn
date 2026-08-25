package app.souq.allughah.domain

/**
 * SM-2 معدّل من مشروع learn — Kotlin نقي قابل للاختبار.
 * فشل = إعادة بعد 10 دقائق داخل الجلسة لا تأجيل ليوم كامل.
 */
enum class MasteryState { NEW, LEARNING, WEAK, FORGOTTEN, MASTERED }

data class Sm2State(
    val itemId: String,
    val kind: String,
    val languageCode: String,
    val repetitions: Int = 0,
    val intervalDays: Int = 0,
    val easeFactor: Double = 2.5,
    val dueAt: Long = 0L,
    val lapses: Int = 0,
    val totalReviews: Int = 0,
    val correctReviews: Int = 0,
) {
    val accuracy: Double get() = if (totalReviews == 0) 0.0 else correctReviews.toDouble() / totalReviews
    val mastery: MasteryState
        get() = when {
            totalReviews == 0 -> MasteryState.NEW
            lapses > 0 && repetitions == 0 -> MasteryState.FORGOTTEN
            lapses >= 2 -> MasteryState.WEAK
            totalReviews >= 3 && accuracy < 0.6 -> MasteryState.WEAK
            intervalDays >= 21 && accuracy >= 0.8 -> MasteryState.MASTERED
            else -> MasteryState.LEARNING
        }
}

object Sm2Scheduler {
    private const val DAY = 24L * 60 * 60 * 1000
    const val RELEARN = 10L * 60 * 1000

    fun schedule(state: Sm2State, grade: SrsGrade, now: Long): Sm2State {
        val ease = (state.easeFactor + when (grade) {
            SrsGrade.Again -> -0.20
            SrsGrade.Hard -> -0.15
            SrsGrade.Good -> 0.0
            SrsGrade.Easy -> 0.15
        }).coerceIn(1.3, 2.5)
        val total = state.totalReviews + 1
        val correct = state.correctReviews + if (grade != SrsGrade.Again) 1 else 0
        if (grade == SrsGrade.Again) {
            return state.copy(
                repetitions = 0, intervalDays = 0, easeFactor = ease,
                dueAt = now + RELEARN, lapses = state.lapses + 1,
                totalReviews = total, correctReviews = correct
            )
        }
        val reps = state.repetitions + 1
        val days = when (reps) {
            1 -> 1
            2 -> 6
            else -> {
                val m = when (grade) {
                    SrsGrade.Hard -> 1.2
                    SrsGrade.Easy -> ease * 1.3
                    else -> ease
                }
                (state.intervalDays * m).toInt().coerceAtLeast(state.intervalDays + 1)
            }
        }.coerceAtMost(365)
        return state.copy(
            repetitions = reps, intervalDays = days, easeFactor = ease,
            dueAt = now + days * DAY, totalReviews = total, correctReviews = correct
        )
    }
}

object AnswerEvaluator {
    fun isCorrect(user: String, expected: String): Boolean {
        val u = normalize(user)
        if (u.isEmpty()) return false
        return expected.split('|').any { normalize(it) == u }
    }

    fun normalize(value: String): String =
        value.lowercase()
            .replace(Regex("[^\\p{L}\\p{N}]+"), " ")
            .trim()
            .replace(Regex("\\s+"), " ")
}

data class CoachTask(val type: String, val reason: String, val count: Int)

object DailyCoach {
    fun guide(
        forgotten: Int, weak: Int, due: Int, tracked: Int, debtThreshold: Int = 12
    ): Pair<String, Boolean> {
        if (tracked == 0) return "أهلاً. لم تبدأ بعد — أول درس ثم نبني المراجعة." to true
        if (forgotten == 0 && weak == 0 && due == 0) {
            return "لا ديون مراجعة. يوم مناسب لدرس جديد." to true
        }
        val allowNew = due <= debtThreshold
        val msg = buildString {
            append("لديك ")
            val p = mutableListOf<String>()
            if (forgotten > 0) p += "$forgotten منسيًا"
            if (weak > 0) p += "$weak ضعيفًا"
            if (due > 0) p += "$due مستحقًا"
            append(p.joinToString(" و"))
            append(
                if (!allowNew) ". لن أرسلك لدرس جديد الآن — التثبيت أولًا."
                else ". نراجع ثم نتقدم."
            )
        }
        return msg to allowNew
    }
}
