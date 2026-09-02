package app.souq.allughah.ui

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

/*
 * رموز لونية دلالية مركزية (Material 3 tokens) — لا ألوان خام داخل الشاشات.
 * تباين النص العادي ≥ 4.5:1 في الوضعين معًا (فاتح وداكن):
 * أزواج container/onContainer وs*surface/onSurface مضبوطة يدويًا على ذلك.
 */
private val Dark = darkColorScheme(
    primary = Color(0xFF7DD3A0),
    onPrimary = Color(0xFF06210F),
    primaryContainer = Color(0xFF14532D),
    onPrimaryContainer = Color(0xFFDCFCE7),
    secondary = Color(0xFFE7C27A),
    onSecondary = Color(0xFF3B2F0B),
    secondaryContainer = Color(0xFF4A3A17),
    onSecondaryContainer = Color(0xFFFFF3D6),
    background = Color(0xFF0F172A),
    onBackground = Color(0xFFF1F5F9),
    surface = Color(0xFF1E293B),
    onSurface = Color(0xFFF1F5F9),
    surfaceVariant = Color(0xFF334155),
    onSurfaceVariant = Color(0xFFCBD5E1),
    outline = Color(0xFF64748B),
    error = Color(0xFFF87171),
    onError = Color(0xFF450A0A),
)
private val Light = lightColorScheme(
    primary = Color(0xFF0F766E),
    onPrimary = Color.White,
    primaryContainer = Color(0xFFCCFBEF),
    onPrimaryContainer = Color(0xFF032F2A),
    secondary = Color(0xFFB45309),
    onSecondary = Color.White,
    secondaryContainer = Color(0xFFFFEDD5),
    onSecondaryContainer = Color(0xFF431407),
    background = Color(0xFFF8FAFC),
    onBackground = Color(0xFF0F172A),
    surface = Color.White,
    onSurface = Color(0xFF0F172A),
    surfaceVariant = Color(0xFFE2E8F0),
    onSurfaceVariant = Color(0xFF334155),
    outline = Color(0xFF94A3B8),
    error = Color(0xFFDC2626),
    onError = Color.White,
)

@Composable
fun SouqTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = if (isSystemInDarkTheme()) Dark else Light,
        content = content
    )
}
