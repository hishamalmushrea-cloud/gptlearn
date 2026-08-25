package app.souq.allughah.data

import android.content.Context
import androidx.datastore.preferences.core.edit
import androidx.datastore.preferences.core.intPreferencesKey
import androidx.datastore.preferences.core.longPreferencesKey
import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.datastore.preferences.preferencesDataStore
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.map

private val Context.dataStore by preferencesDataStore("souq_prefs")

class UserStore(private val context: Context) {
    private val kLang = stringPreferencesKey("active_lang")
    private val kMode = stringPreferencesKey("learn_mode") // id, tr, both
    private val kOnboard = stringPreferencesKey("onboarded")
    private val kGoal = intPreferencesKey("daily_goal")
    private val kXpId = intPreferencesKey("xp_id")
    private val kXpTr = intPreferencesKey("xp_tr")
    private val kStreak = intPreferencesKey("streak")
    private val kLastDay = longPreferencesKey("last_day")
    private val kMinutes = intPreferencesKey("minutes_today")
    private val kFavs = stringPreferencesKey("favs")
    private val kSrs = stringPreferencesKey("srs")
    private val kWeak = stringPreferencesKey("weak")
    private val kInbox = stringPreferencesKey("forgot_inbox")
    private val kHideAr = stringPreferencesKey("hide_ar")
    private val kFocus = stringPreferencesKey("focus")
    private val kRatio = intPreferencesKey("dual_ratio_id")
    private val kCefrId = stringPreferencesKey("cefr_id")
    private val kCefrTr = stringPreferencesKey("cefr_tr")
    private val kResume = stringPreferencesKey("resume")

    data class Snapshot(
        val activeLang: String = "id",
        val mode: String = "both",
        val onboarded: Boolean = false,
        val dailyGoal: Int = 20,
        val xpId: Int = 0,
        val xpTr: Int = 0,
        val streak: Int = 0,
        val minutesToday: Int = 0,
        val favs: Set<String> = emptySet(),
        val srsRaw: String = "",
        val weakRaw: String = "",
        val inbox: String = "",
        val hideArabic: Boolean = false,
        val focus: Boolean = false,
        val dualRatioId: Int = 50,
        val cefrId: String = "A0",
        val cefrTr: String = "A0",
        val resume: String = "",
    )

    val flow: Flow<Snapshot> = context.dataStore.data.map { p ->
        Snapshot(
            activeLang = p[kLang] ?: "id",
            mode = p[kMode] ?: "both",
            onboarded = p[kOnboard] == "1",
            dailyGoal = p[kGoal] ?: 20,
            xpId = p[kXpId] ?: 0,
            xpTr = p[kXpTr] ?: 0,
            streak = p[kStreak] ?: 0,
            minutesToday = p[kMinutes] ?: 0,
            favs = (p[kFavs] ?: "").split(",").filter { it.isNotBlank() }.toSet(),
            srsRaw = p[kSrs] ?: "",
            weakRaw = p[kWeak] ?: "",
            inbox = p[kInbox] ?: "",
            hideArabic = p[kHideAr] == "1",
            focus = p[kFocus] == "1",
            dualRatioId = p[kRatio] ?: 50,
            cefrId = p[kCefrId] ?: "A0",
            cefrTr = p[kCefrTr] ?: "A0",
            resume = p[kResume] ?: "",
        )
    }

    suspend fun setLang(v: String) = context.dataStore.edit { it[kLang] = v }
    suspend fun setMode(v: String) = context.dataStore.edit { it[kMode] = v }
    suspend fun setOnboarded() = context.dataStore.edit { it[kOnboard] = "1" }
    suspend fun setGoal(v: Int) = context.dataStore.edit { it[kGoal] = v }
    suspend fun addXp(lang: String, n: Int) = context.dataStore.edit {
        if (lang == "tr") it[kXpTr] = (it[kXpTr] ?: 0) + n else it[kXpId] = (it[kXpId] ?: 0) + n
    }
    suspend fun bumpStreak(day: Long) = context.dataStore.edit {
        val last = it[kLastDay] ?: 0
        if (day != last) {
            it[kStreak] = (it[kStreak] ?: 0) + 1
            it[kLastDay] = day
            it[kMinutes] = 0
        }
    }
    suspend fun addMinutes(n: Int) = context.dataStore.edit { it[kMinutes] = (it[kMinutes] ?: 0) + n }
    suspend fun toggleFav(id: String) = context.dataStore.edit {
        val set = (it[kFavs] ?: "").split(",").filter { s -> s.isNotBlank() }.toMutableSet()
        if (!set.add(id)) set.remove(id)
        it[kFavs] = set.joinToString(",")
    }
    suspend fun setSrs(raw: String) = context.dataStore.edit { it[kSrs] = raw }
    suspend fun setWeak(raw: String) = context.dataStore.edit { it[kWeak] = raw }
    suspend fun setInbox(v: String) = context.dataStore.edit { it[kInbox] = v }
    suspend fun setHideAr(v: Boolean) = context.dataStore.edit { it[kHideAr] = if (v) "1" else "0" }
    suspend fun setFocus(v: Boolean) = context.dataStore.edit { it[kFocus] = if (v) "1" else "0" }
    suspend fun setRatio(v: Int) = context.dataStore.edit { it[kRatio] = v }
    suspend fun setCefr(lang: String, v: String) = context.dataStore.edit {
        if (lang == "tr") it[kCefrTr] = v else it[kCefrId] = v
    }
    suspend fun setResume(v: String) = context.dataStore.edit { it[kResume] = v }

    fun export(s: Snapshot): String = buildString {
        appendLine("souq-backup-v1")
        appendLine("xpId=${s.xpId}")
        appendLine("xpTr=${s.xpTr}")
        appendLine("streak=${s.streak}")
        appendLine("favs=${s.favs.joinToString(",")}")
        appendLine("srs=${s.srsRaw}")
        appendLine("cefrId=${s.cefrId}")
        appendLine("cefrTr=${s.cefrTr}")
        appendLine("inbox=${s.inbox}")
    }
}
