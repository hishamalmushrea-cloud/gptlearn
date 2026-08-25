package app.souq.allughah

import android.annotation.SuppressLint
import android.app.Activity
import android.os.Bundle
import android.speech.tts.TextToSpeech
import android.webkit.JavascriptInterface
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.Toast
import androidx.webkit.WebViewAssetLoader
import java.io.File
import java.util.Locale

/**
 * سوق اللغة — غلاف أندرويد أصلي للأكاديمية (أوفلاين 100%)
 *
 * - المحتوى يُقدَّم من assets عبر WebViewAssetLoader (بلا أي صلاحية إنترنت).
 * - النطق عبر محرك Android TTS (جسر JS polyfill لـ speechSynthesis).
 * - تصدير التقدم يُحفظ عبر جسر AndroidFiles إلى مجلد التطبيق.
 */
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
            textZoom = 100
        }

        val loader = WebViewAssetLoader.Builder()
            .setDomain("appassets.androidplatform.net")
            .addPathHandler("/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        web.webViewClient = object : WebViewClient() {
            override fun shouldInterceptUrlRequest(view: WebView, request: WebResourceRequest) =
                loader.shouldIntercept(request.url)

            override fun onPageFinished(view: WebView, url: String) {
                super.onPageFinished(view, url)
                view.evaluateJavascript(TTS_POLYFILL, null)
            }
        }

        web.addJavascriptInterface(Bridge(), "AndroidBridge")
        web.loadUrl("https://appassets.androidplatform.net/index.html")
        setContentView(web)
    }

    /** جسر الجافاسكربت: نطق + حفظ ملفات */
    inner class Bridge {
        @JavascriptInterface
        fun ttsSpeak(text: String, lang: String, rate: Float) {
            if (!ttsReady) {
                runOnUiThread { Toast.makeText(this@MainActivity, "محرك النطق لم يجهز بعد — أعد المحاولة", Toast.LENGTH_SHORT).show() }
                return
            }
            val tts = this@MainActivity.tts ?: return
            val locale = Locale.forLanguageTag(lang)
            val result = tts.setLanguage(locale)
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
            tts.setSpeechRate(rate.coerceIn(0.3f, 1.5f))
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "gl-$rate")
        }

        @JavascriptInterface
        fun ttsStop() {
            tts?.stop()
        }

        @JavascriptInterface
        fun saveText(name: String, content: String) {
            try {
                val dir = getExternalFilesDir(null) ?: filesDir
                val f = File(dir, name.ifBlank { "gl-export.json" })
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
        /** Polyfill يجعل كود الويب (speechSynthesis) يعمل عبر محرك أندرويد دون أي تعديل */
        private const val TTS_POLYFILL = """
window.SpeechSynthesisUtterance = function(t){ this.text = (t==null? '' : String(t)); this.lang='id-ID'; this.rate=1; };
window.speechSynthesis = {
  getVoices: function(){ return []; },
  cancel: function(){ AndroidBridge.ttsStop(); },
  speak: function(u){ AndroidBridge.ttsSpeak(String(u&&u.text||''), String(u&&u.lang||'id-ID'), Number(u&&u.rate||1)); }
};
window.AndroidFiles = { saveText: function(n, c){ AndroidBridge.saveText(String(n), String(c)); } };
        """
    }
}
