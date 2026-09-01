package app.souq.allughah

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.lifecycle.viewmodel.compose.viewModel
import app.souq.allughah.ui.AcademyRoot
import app.souq.allughah.ui.AcademyViewModel
import app.souq.allughah.ui.SouqTheme

/**
 * نقطة الدخول الأصلية لتطبيق أندرويد.
 * لا WebView ولا ملفات ويب ولا اتصال شبكة: الواجهة والمحتوى Native Compose.
 */
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            SouqTheme {
                val vm: AcademyViewModel = viewModel()
                AcademyRoot(vm)
            }
        }
    }
}
