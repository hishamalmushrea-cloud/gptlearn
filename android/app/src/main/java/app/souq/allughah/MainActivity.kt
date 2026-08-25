package app.souq.allughah

import android.annotation.SuppressLint
import android.app.Activity
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import java.util.Locale

class MainActivity : Activity() {

    private lateinit var web: WebView
    private var tts: TextToSpeech? = null
    private var ttsReady = false

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        tts = TextToSpeech(applicationContext) { status ->
            ttsReady = status == TextToSpeech.SUCCESS
        }

        web = WebView(this)
        web.settings.apply {
            javaScriptEnabled = true
            domStorageEnabled = true
            allowFileAccess = true
            allowContentAccess = true
            textZoom = 100
        }

        web.webViewClient = object : WebViewClient() {
            override fun onPageFinished(view: WebView, url: String) {
                super.onPageFinished(view, url)
                view.evaluateJavascript(TTS_POLYFILL, null)
            }
        }

        web.addJavascriptInterface(Bridge(), "AndroidBridge")
        web.loadUrl("file:///android_asset/index.html")
        setContentView(web)
    }

    inner class Bridge {
        @JavascriptInterface
        fun ttsSpeak(text: String, lang: String, rate: Float) {
            val t = tts ?: return
            if (!ttsReady) {
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "محرك النطق لم يجهز — أعد المحاولة", Toast.LENGTH_SHORT).show()
                }
                return
            }
            val locale = Locale.forLanguageTag(lang)
            val result = t.setLanguage(locale)
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                runOnUiThread {
                    Toast.makeText(
                        this@MainActivity,
                        "صوت اللغة ($lang) غير مثبّت على جهازك — ثبّته من إعدادات النطق أو استعن بالنطق المكتوب",
                        Toast.LENGTH_LONG
                    ).show()
                }
                return
            }
            t.setSpeechRate(rate.coerceIn(0.3f, 1.5f))
            t.speak(text, TextToSpeech.QUEUE_FLUSH, null, "gl-tts")
        }

        @JavascriptInterface
        fun ttsStop() {
            tts?.stop()
        }

        @JavascriptInterface
        fun saveText(name: String, content: String) {
            try {
                val dir = getExternalFilesDir(null) ?: filesDir
                val f = java.io.File(dir, name.ifBlank { "gl-export.json" })
                f.writeText(content, Charsets.UTF_8)
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "تم الحفظ: ${f.absolutePath}", Toast.LENGTH_LONG).show()
                }
            } catch (e: Exception) {
                runOnUiThread {
                    Toast.makeText(this@MainActivity, "تعذّر الحفظ: ${e.message}", Toast.LENGTH_LONG).show()
                }
            }
        }

        @JavascriptInterface
        fun toast(msg: String) {
            runOnUiThread { Toast.makeText(this@MainActivity, msg, Toast.LENGTH_SHORT).show() }
        }
    }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if (web.canGoBack()) web.goBack() else super.onBackPressed()
    }

    override fun onDestroy() {
        tts?.stop()
        tts?.shutdown()
        super.onDestroy()
    }

    companion object {
        private val TTS_POLYFILL = """
            window.SpeechSynthesisUtterance = function(t){ this.text = (t==null? '':String(t)); this.lang='id-ID'; this.rate=1; };
            window.speechSynthesis = {
                getVoices: function(){ return []; },
                cancel: function(){ AndroidBridge.ttsStop(); },
                speak: function(u){ AndroidBridge.ttsSpeak(String(u&&u.text||''), String(u&&u.lang||'id-ID'), Number(u&&u.rate||1)); }
            };
            window.AndroidFiles = { saveText: function(n, c){ AndroidBridge.saveText(String(n), String(c)); } };
        """.trimIndent()
    }
}
