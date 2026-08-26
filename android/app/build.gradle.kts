plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "app.souq.allughah"
    compileSdk = 34

    defaultConfig {
        applicationId = "app.souq.allughah"
        minSdk = 24
        targetSdk = 34
        versionCode = 3
        versionName = "2.1.0"
        vectorDrawables.useSupportLibrary = true
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
    buildFeatures { compose = true }
    composeOptions { kotlinCompilerExtensionVersion = "1.5.14" }
    packaging { resources { excludes += "/META-INF/{AL2.0,LGPL2.1}" } }
}

dependencies {
    val composeBom = platform("androidx.compose:compose-bom:2024.06.00")
    implementation(composeBom)
    androidTestImplementation(composeBom)
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.material:material-icons-extended")
    implementation("androidx.activity:activity-compose:1.9.0")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.2")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.8.2")
    implementation("androidx.navigation:navigation-compose:2.7.7")
    implementation("androidx.datastore:datastore-preferences:1.1.1")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.8.1")
    debugImplementation("androidx.compose.ui:ui-tooling")
}

val copyWebAssets by tasks.registering(Copy::class) {
    val repoRoot = rootProject.projectDir.parentFile
    into(layout.projectDirectory.dir("src/main/assets"))
    from(repoRoot) {
        include("index.html", "manifest.json", "sw.js")
    }
    from(repoRoot.resolve("css")) { into("css") }
    from(repoRoot.resolve("js")) { into("js") }
    from(repoRoot.resolve("data")) { into("data") }
    from(repoRoot.resolve("icons")) { into("icons") }
    duplicatesStrategy = DuplicatesStrategy.INCLUDE
}

tasks.named("preBuild") { dependsOn(copyWebAssets) }
