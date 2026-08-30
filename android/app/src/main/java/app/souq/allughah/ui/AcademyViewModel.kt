package app.souq.allughah.ui

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import app.souq.allughah.audio.TtsPlayer
import app.souq.allughah.data.SeedContent
import app.souq.allughah.data.UserStore
import app.souq.allughah.domain.*
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

class AcademyViewModel(app: Application) : AndroidViewModel(app) {
    val store = UserStore(app)
    val tts = TtsPlayer(app)
    val snapshot = store.flow.stateIn(viewModelScope, SharingStarted.Eagerly, UserStore.Snapshot())

    val words get() = SeedContent.words
    val phrases get() = SeedContent.phrases
    val lessons get() = SeedContent.lessons
    val grammar get() = SeedContent.grammar
    val dialogues get() = SeedContent.dialogues
    val culture get() = SeedContent.culture
    val scenarios get() = SeedContent.scenarios
    val quizzes get() = SeedContent.quizzes
    val stories get() = SeedContent.stories
    val verbs get() = SeedContent.verbs
    val analyses get() = FullAnalyses.all
    val nativeTrainers get() = FullTrainers.all
    val nativeChapters: List<NativeChapter> by lazy {
        phrases.groupBy { it.topic }.mapIndexed { index, (topic, items) ->
            val parts = topic.split("|", limit = 2)
            NativeChapter(
                id = "native-$index",
                title = parts.last().ifBlank { "عبارات متنوعة" },
                group = parts.firstOrNull().orEmpty(),
                phrases = items
            )
        }
    }

    fun filteredWords(lang: TargetLang) = words.filter { it.lang == lang }
    fun filteredLessons(lang: TargetLang) = lessons.filter { it.lang == lang }
    fun filteredGrammar(lang: TargetLang) = grammar.filter { it.lang == lang }

    fun search(q: String): List<Any> {
        if (q.isBlank()) return emptyList()
        val out = mutableListOf<Any>()
        phrases.filter {
            SearchIndex.fuzzy(q, it.arabic + it.idText + it.trText + it.idPhonetic + it.trPhonetic)
        }.let { out.addAll(it) }
        words.filter {
            SearchIndex.fuzzy(q, it.lemma + it.arabic + it.phoneticAr)
        }.let { out.addAll(it) }
        lessons.filter { SearchIndex.fuzzy(q, it.title + it.unit) }.let { out.addAll(it) }
        grammar.filter { SearchIndex.fuzzy(q, it.title + it.explanation) }.let { out.addAll(it) }
        return out.take(40)
    }

    fun speak(text: String, lang: TargetLang, slow: Boolean = false) {
        tts.speak(text, lang.ttsTag, slow)
    }

    fun parseSrs(): MutableMap<String, ReviewCard> {
        val map = mutableMapOf<String, ReviewCard>()
        snapshot.value.srsRaw.split(";").filter { it.isNotBlank() }.forEach { row ->
            val p = row.split("|")
            if (p.size >= 6) runCatching {
                val card = ReviewCard(
                    itemId = p[0], kind = p[1], box = p[2].toInt().coerceIn(0, 5),
                    dueAt = p[3].toLong(), lapses = p[4].toInt().coerceAtLeast(0), reps = p[5].toInt().coerceAtLeast(0),
                    languageCode = p.getOrNull(6).orEmpty(), direction = p.getOrNull(7) ?: "forward"
                )
                map[srsKey(card.itemId, card.kind, card.languageCode, card.direction)] = card
            }
        }
        return map
    }

    private fun srsKey(id: String, kind: String, language: String, direction: String) =
        listOf(id, kind, language.ifBlank { "legacy" }, direction).joinToString("~")

    private fun saveSrs(map: Map<String, ReviewCard>) {
        val raw = map.values.joinToString(";") {
            "${it.itemId}|${it.kind}|${it.box}|${it.dueAt}|${it.lapses}|${it.reps}|${it.languageCode}|${it.direction}"
        }
        viewModelScope.launch { store.setSrs(raw) }
    }

    fun grade(id: String, kind: String, g: SrsGrade, language: TargetLang = activeLang(), direction: String = "forward") {
        val now = System.currentTimeMillis()
        val map = parseSrs()
        val key = srsKey(id, kind, language.code, direction)
        val cur = map[key] ?: ReviewCard(id, kind, 0, now, 0, 0, language.code, direction)
        // مصدر الحقيقة في APK هو Leitner Native: box يبقى حالة 0..5.
        map[key] = LearningEngine.applyGrade(cur, g, now)
        saveSrs(map)
        viewModelScope.launch {
            store.addXp(snapshot.value.activeLang, if (g == SrsGrade.Again) 1 else 4)
            store.bumpStreak(now / (24 * 60 * 60 * 1000))
            store.addMinutes(1)
        }
        if (g == SrsGrade.Again) markWeak(kind)
    }

    fun markWeak(skill: String) {
        viewModelScope.launch {
            val raw = snapshot.value.weakRaw
            store.setWeak(raw + skill + ",")
        }
    }

    fun clearWeak() = viewModelScope.launch { store.setWeak("") }

    fun weakMap(): Map<String, Int> =
        snapshot.value.weakRaw.split(",").filter { it.isNotBlank() }.groupingBy { it }.eachCount()

    fun dueCount(): Int {
        val now = System.currentTimeMillis()
        return parseSrs().values.count { it.dueAt <= now }
    }

    fun progressOf(lang: TargetLang): Float {
        val xp = if (lang == TargetLang.TR) snapshot.value.xpTr else snapshot.value.xpId
        return (xp / 400f).coerceIn(0f, 0.99f)
    }

    fun activeLang(): TargetLang =
        if (snapshot.value.activeLang == "tr") TargetLang.TR else TargetLang.ID

    fun setActive(lang: TargetLang) = viewModelScope.launch { store.setLang(lang.code) }
    fun setMode(m: String) = viewModelScope.launch { store.setMode(m) }
    fun finishOnboard() = viewModelScope.launch { store.setOnboarded() }
    fun toggleFav(id: String) = viewModelScope.launch { store.toggleFav(id) }
    fun setGoal(n: Int) = viewModelScope.launch { store.setGoal(n) }
    fun setRatio(n: Int) = viewModelScope.launch { store.setRatio(n) }
    fun setHide(v: Boolean) = viewModelScope.launch { store.setHideAr(v) }
    fun setFocus(v: Boolean) = viewModelScope.launch { store.setFocus(v) }
    fun setCefr(lang: TargetLang, v: String) = viewModelScope.launch { store.setCefr(lang.code, v) }
    fun resume(route: String) = viewModelScope.launch { store.setResume(route) }
    fun addForgot(note: String) = viewModelScope.launch {
        store.setInbox(snapshot.value.inbox + "\n• " + note)
    }

    override fun onCleared() {
        tts.shutdown()
        super.onCleared()
    }
}
