package app.souq.allughah.ui

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val Dark = darkColorScheme(
    primary = Color(0xFF7DD3A0),
    onPrimary = Color(0xFF06210F),
    secondary = Color(0xFFE7C27A),
    background = Color(0xFF0F172A),
    surface = Color(0xFF1E293B),
    onBackground = Color(0xFFF1F5F9),
    onSurface = Color(0xFFF1F5F9),
)
private val Light = lightColorScheme(
    primary = Color(0xFF0F766E),
    onPrimary = Color.White,
    secondary = Color(0xFFB45309),
    background = Color(0xFFF8FAFC),
    surface = Color.White,
    onBackground = Color(0xFF0F172A),
)

@Composable
fun SouqTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = if (isSystemInDarkTheme()) Dark else Light,
        content = content
    )
}
