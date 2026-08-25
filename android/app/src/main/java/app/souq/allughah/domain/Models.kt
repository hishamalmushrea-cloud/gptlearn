package app.souq.allughah.domain

enum class TargetLang(val code: String, val flag: String, val arName: String, val ttsTag: String) {
    ID("id", "🇮🇩", "الإندونيسية", "id-ID"),
    TR("tr", "🇹🇷", "التركية", "tr-TR");
}

enum class Cefr { A0, A1, A2, B1, B2, C1, C2 }

enum class Register { Formal, Neutral, Casual, Slang, Professional, Polite }

enum class SrsGrade { Again, Hard, Good, Easy }

data class Word(
    val id: String,
    val lang: TargetLang,
    val lemma: String,
    val phoneticAr: String,
    val arabic: String,
    val pos: String,
    val level: Cefr,
    val example: String,
    val exampleAr: String,
    val topic: String,
    val frequencyRank: Int,
)

data class Phrase(
    val id: String,
    val arabic: String,
    val idText: String,
    val idPhonetic: String,
    val trText: String,
    val trPhonetic: String,
    val register: Register,
    val whenTo: String,
    val whyNatural: String,
    val literal: String,
    val topic: String,
    val level: Cefr,
    val cultural: String = "",
)

data class DialogueTurn(val speaker: String, val arabic: String, val idText: String, val trText: String)
data class Dialogue(
    val id: String,
    val title: String,
    val situation: String,
    val level: Cefr,
    val turns: List<DialogueTurn>,
)

data class GrammarRule(
    val id: String,
    val lang: TargetLang,
    val title: String,
    val why: String,
    val explanation: String,
    val examples: List<String>,
    val arabMistake: String,
    val level: Cefr,
)

data class CulturalNote(val id: String, val title: String, val body: String, val caution: Boolean)
data class Lesson(
    val id: String,
    val lang: TargetLang,
    val level: Cefr,
    val unit: String,
    val title: String,
    val minutes: Int,
    val wordIds: List<String>,
    val phraseIds: List<String>,
    val grammarIds: List<String>,
)

data class Scenario(
    val id: String,
    val title: String,
    val objective: String,
    val track: String,
    val prompt: String,
    val choices: List<Choice>,
)

data class Choice(val text: String, val correct: Boolean, val explain: String)

data class QuizItem(
    val id: String,
    val prompt: String,
    val options: List<String>,
    val answerIndex: Int,
    val explain: String,
    val lang: TargetLang,
    val skill: String,
)

data class Story(
    val id: String,
    val title: String,
    val level: Cefr,
    val lang: TargetLang,
    val text: String,
    val arabic: String,
    val questions: List<QuizItem>,
)

data class VerbCard(
    val id: String,
    val lang: TargetLang,
    val infinitive: String,
    val meaning: String,
    val forms: Map<String, String>,
    val example: String,
)

data class ReviewCard(
    val itemId: String,
    val kind: String,
    val box: Int,
    val dueAt: Long,
    val lapses: Int,
    val reps: Int,
)
