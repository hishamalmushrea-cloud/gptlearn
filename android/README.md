# 📱 أندرويد — سوق اللغة

تطبيق أندرويد **أوفلاين 100% وبلا صلاحية إنترنت** يغلّف الأكاديمية كاملة (1000 جملة، 33 موقفًا، القصص والقواعد والقاموس وكل الميزات) مع **نطق Android TTS** الأصلي بصوت اللغة المثبت على الجهاز.

## ⚡ خطوة واحدة مطلوبة منك (مالك المستودع)
توكن الوكيل ممنوع من إنشاء ملفات GitHub Actions — لصق الملف بنفسك مرة واحدة:

1. افتح المستودع على GitHub ← فرع `arena/01a036d9-gptlearn`
2. **Add file ← Create new file** واكتب المسار بالضبط: `.github/workflows/android.yml`
3. انسخ فيه محتوى [`android/ci/android.yml`](ci/android.yml) (موجود في المستودع) ← Commit
4. بعد ثوانٍ اكتب للوكيل «ابنِ» — سيشغّل البناء وينزّل الـ APK وينشره كـ Release

## البناء اليدوي (إن كان لديك SDK)
```bash
# انسخ محتوى الويب إلى assets ثم:
cp -r css js data icons index.html manifest.json sw.js android/app/src/main/assets/
cd android && gradle assembleDebug
# الناتج: app/build/outputs/apk/debug/app-debug.apk
```

## البنية
```
android/
  settings.gradle.kts / build.gradle.kts     AGP 8.5.2 + Kotlin 1.9.24
  app/build.gradle.kts                       minSdk 24 — بلا أي صلاحية إنترنت
  app/src/main/java/.../MainActivity.kt      WebViewAssetLoader + جسور JS
  app/src/main/AndroidManifest.xml           لا INTERNET permission
  app/src/main/assets/                        يُملأ وقت البناء من جذر الويب
  ci/android.yml                              ملف CI الجاهز للصق
```

## الجسور (JS ↔ Android)
- `speechSynthesis` (polyfill) → `AndroidBridge.ttsSpeak` — نطق أصلي مع رسائل لطيفة عند غياب صوت اللغة
- `AndroidFiles.saveText` → حفظ تصدير التقدم في مجلد التطبيق (`Android/data/app.souq.allughah/files/`)

## التثبيت
APK واحد صغير (~4MB) — ثبّته بتفعيل «مصادر غير معروفة»، ولن يطلب أي إذن أبدًا.
