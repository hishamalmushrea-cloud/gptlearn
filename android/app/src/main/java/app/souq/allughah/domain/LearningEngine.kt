package app.souq.allughah.domain

object LearningEngine {
    fun nextDue(cards: List<ReviewCard>, now: Long): List<ReviewCard> =
        cards.filter { it.dueAt <= now }.sortedBy { it.dueAt }

    fun applyGrade(card: ReviewCard, grade: SrsGrade, now: Long): ReviewCard {
        val day = 24L * 60 * 60 * 1000
        return when (grade) {
            SrsGrade.Again -> card.copy(box = 0, dueAt = now + 10 * 60 * 1000, lapses = card.lapses + 1, reps = card.reps + 1)
            SrsGrade.Hard -> card.copy(box = (card.box).coerceAtMost(2), dueAt = now + day, reps = card.reps + 1)
            SrsGrade.Good -> {
                val box = (card.box + 1).coerceAtMost(5)
                val interval = listOf(1, 3, 7, 14, 30, 60)[box]
                card.copy(box = box, dueAt = now + interval * day, reps = card.reps + 1)
            }
            SrsGrade.Easy -> {
                val box = (card.box + 2).coerceAtMost(5)
                val interval = listOf(1, 4, 10, 21, 45, 90)[box]
                card.copy(box = box, dueAt = now + interval * day, reps = card.reps + 1)
            }
        }
    }

    fun masteryLabel(box: Int) = when (box) {
        0 -> "جديدة"
        1 -> "يتعلّم"
        2 -> "مألوفة"
        3 -> "جيدة"
        4 -> "قوية"
        else -> "متقنة"
    }

    fun recommend(
        weakSkills: Map<String, Int>,
        idProgress: Float,
        trProgress: Float,
        dualRatioId: Float
    ): String {
        val weakest = weakSkills.maxByOrNull { it.value }?.key
        return buildString {
            append(
                when {
                    weakest == "listening" -> "أنت أقوى في المفردات من الاستماع — زد تمارين السمع اليوم."
                    weakest == "grammar" -> "راجع القاعدة التي أخطأت فيها قبل درس جديد."
                    weakest == "speaking" -> "وضع الظل (Shadowing): اسمع الجملة وكرر فورًا."
                    else -> "درس قصير ثم مراجعة مستحقة."
                }
            )
            if (kotlin.math.abs(idProgress - trProgress) > 0.25f) {
                append(" التوازن: ")
                append(if (idProgress < trProgress) "زد الإندونيسية قليلًا." else "زد التركية قليلًا.")
            }
            append(" وضع الازدواج الحالي ≈ ${(dualRatioId * 100).toInt()}٪ إندونيسية.")
        }
    }

    fun fiveMinutePlan(lang: TargetLang): List<String> = listOf(
        "3 كلمات عالية التواتر (${lang.arName})",
        "عبارتان جاهزتان",
        "سؤال استماع واحد",
        "مراجعة بطاقة مستحقة",
        "جملة إنقاذ: «نسيت الكلمة»"
    )
}

object SearchIndex {
    fun normalize(s: String): String =
        s.lowercase()
            .replace('أ', 'ا').replace('إ', 'ا').replace('آ', 'ا')
            .replace('ى', 'ي').replace('ة', 'ه')
            .replace(Regex("[ًٌٍَُِّْ]"), "")
            .replace(Regex("\\s+"), " ")
            .trim()

    fun fuzzy(q: String, hay: String): Boolean {
        val nq = normalize(q)
        val nh = normalize(hay)
        if (nq.isBlank()) return false
        if (nh.contains(nq)) return true
        if (nq.length >= 3 && levenshtein(nq.take(12), nh.take(24)) <= 1) return true
        return false
    }

    private fun levenshtein(a: String, b: String): Int {
        val dp = Array(a.length + 1) { IntArray(b.length + 1) }
        for (i in 0..a.length) dp[i][0] = i
        for (j in 0..b.length) dp[0][j] = j
        for (i in 1..a.length) for (j in 1..b.length) {
            val c = if (a[i - 1] == b[j - 1]) 0 else 1
            dp[i][j] = minOf(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + c)
        }
        return dp[a.length][b.length]
    }
}
