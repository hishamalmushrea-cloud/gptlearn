pluginManagement {
    repositories {
        google()
        gradlePluginPortal()   // ضروري لحل ملحق Kotlin
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
