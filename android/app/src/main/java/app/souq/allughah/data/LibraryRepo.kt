package app.souq.allughah.data

import android.content.Context

data class LibDoc(val name: String, val title: String)

class LibraryRepo(private val context: Context) {
    fun list(lang: String): List<LibDoc> {
        val dir = if (lang == "tr") "library/tr" else "library/id"
        val names = context.assets.list(dir)?.filter { it.endsWith(".md") }?.sorted().orEmpty()
        return names.map { n ->
            val title = runCatching {
                context.assets.open("$dir/$n").bufferedReader().useLines { seq ->
                    seq.firstOrNull { it.trim().startsWith("#") }?.trimStart('#')?.trim()
                }
            }.getOrNull().orEmpty().ifBlank { n.removeSuffix(".md") }
            LibDoc(n, title)
        }
    }

    fun read(lang: String, name: String): String {
        val dir = if (lang == "tr") "library/tr" else "library/id"
        return runCatching {
            context.assets.open("$dir/$name").bufferedReader().use { it.readText() }
        }.getOrDefault("تعذّر فتح الملف.")
    }
}
