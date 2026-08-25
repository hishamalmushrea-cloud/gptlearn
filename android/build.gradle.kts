plugins {
    id("com.android.application") version "8.5.2" apply false
    id("org.jetbrains.kotlin.android") version "1.9.24" apply false
}

// ===== تشخيص ذاتي: عند فشل البناء تُطبع رسالة الخطأ كـ GitHub annotation =====
// (::error يلتقطها Actions runner فتظهر في واجهة الـ run بدون فتح السجلات)
gradle.buildFinished {
    val failure = it.failure
    if (failure != null) {
        val msg = (failure.message ?: failure.toString())
            .replace("\n", " ⏎ ")
            .replace("::", "؛؛")
            .take(220)
        println("::error ::BUILD FAILED — $msg")
    }
}
