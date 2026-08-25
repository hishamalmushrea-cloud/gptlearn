# 📱 نسخة أندرويد الأصلية — سوق اللغة

تطبيق أندرويد **أوفلاين 100% بلا صلاحية إنترنت** يغلّف الأكاديمية كاملة (1000 جملة، 33 موقفًا، كل الميزات) مع نطق **Android TTS** الأصلي.

## البناء (آلي عبر GitHub Actions)
البناء يحدث في CI (البيئة المحلية للمشروع محجوبة عن مستودعات جوجل):
- أي push يمس `android/**` أو محتوى الويب يشغّل `.github/workflows/android.yml`
- أو تشغيل يدوي: Actions → Android APK → Run workflow
- الناتج: APK debug كـ artifact باسم `souq-allughah-apk`

## البنية
```
android/
  settings.gradle.kts / build.gradle.kts      (AGP 8.5.2 + Kotlin 1.9.24)
  app/build.gradle.kts                        (minSdk 24، بلا أي صلاحية إنترنت)
  app/src/main/java/.../MainActivity.kt       WebViewAssetLoader + جسور JS
  app/src/main/AndroidManifest.xml            لا INTERNET permission
  app/src/main/assets/                        (يُملأ في CI من جذر الويب)
```

## الجسور (JS ↔ Android)
- `speechSynthesis` polyfill → `AndroidBridge.ttsSpeak` (نطق أصلي بصوت اللغة المثبت)
- `AndroidFiles.saveText` → حفظ تصدير التقدم في مجلد التطبيق

## التثبيت
نزّل الـ APK من الـ artifact أو الـ Release وفعّل "مصادر غير معروفة" وثبّت — لا يطلب التطبيق أي إذن.
