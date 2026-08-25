plugins {
    id("com.android.application") version "8.5.2" apply false
    id("org.jetbrains.kotlin.android") version "1.9.24" apply false
}

// ===== تشخيص: أي فشل في أي مرحلة يُطبع كـ GitHub annotation =====
buildscript {
    // هذا يلتقط فشل الـ configuration phase (قبل تقييم المشروع)
}
gradle.addBuildListener(object : org.gradle.BuildListener {
    override fun buildStarted(gradle: org.gradle.api.invocation.Gradle) {}
    override fun settingsEvaluated(settings: org.gradle.api.initialization.Settings) {}
    override fun projectsLoaded(gradle: org.gradle.api.invocation.Gradle) {}
    override fun projectsEvaluated(gradle: org.gradle.api.invocation.Gradle) {
        println("::debug ::Projects evaluated OK")
    }
    override fun buildFinished(result: org.gradle.api.BuildResult) {
        if (result.failure != null) {
            val f = result.failure!!
            val msg = buildString {
                appendLine("BUILD FAILED — ${f.message ?: "unknown"}")
                var cause = f.cause
                var depth = 0
                while (cause != null && depth < 3) {
                    appendLine("  ↳ caused by: ${cause.message}")
                    cause = cause.cause
                    depth++
                }
            }.replace("\n", " | ").replace("::", "؛؛").take(300)
            println("::error ::$msg")
        }
    }
})
