package app.souq.allughah.audio

import android.content.Context
import android.speech.tts.TextToSpeech
import java.util.Locale

class TtsPlayer(context: Context) : TextToSpeech.OnInitListener {
    private var ready = false
    private val tts = TextToSpeech(context.applicationContext, this)
    override fun onInit(status: Int) { ready = status == TextToSpeech.SUCCESS }

    fun speak(text: String, tag: String, slow: Boolean) {
        if (!ready || text.isBlank()) return
        tts.language = Locale.forLanguageTag(tag)
        tts.setSpeechRate(if (slow) 0.55f else 0.95f)
        tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "souq")
    }

    fun stop() { tts.stop() }
    fun shutdown() { tts.stop(); tts.shutdown() }
}
