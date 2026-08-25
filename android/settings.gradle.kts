pluginManagement {
    repositories {
        google()
        gradlePluginPortal()   // ضروري لحل ملحقات Kotlin (marker artifacts)
        mavenCentral()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
rootProject.name = "SouqAllughah"
include(":app")

// ===== تشخيص في مرحلة الإعدادات (أول ما يُحمّل) =====
gradle.settingsEvaluated {
    println("::group::Settings OK — repositories: ${pluginManagement.repositories.names}")
}
