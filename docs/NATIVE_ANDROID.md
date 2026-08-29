# الأندرويد — التطبيق الأصلي

المسار المعتمد: **Android Native + Jetpack Compose**.

- `MainActivity` يفتح `AcademyRoot` مباشرة، بلا WebView.
- المحتوى الذي يستخدمه APK موجود في `SeedContent.kt` ونماذج Kotlin الأصلية.
- التقدم محلي عبر DataStore، والمراجعة عبر محرك SRS Native.
- النطق عبر Android TextToSpeech.
- المكتبة المرجعية Markdown داخل `app/src/main/assets/library` وتُقرأ Native.
- لا تُنسخ ملفات `index.html` أو `js/` أو `data/` أو `css/` إلى APK.

ملفات PWA في جذر المستودع تاريخية وخارج مسار بناء Android. المرحلة التالية هي نقل المحتوى الكامل إليها تدريجيًا بصيغة Native منظمة وقابلة للتحقق، مع الحفاظ على المعرفات والتقدم.

ما لا ندّعيه: تعرّف الكلام على الجهاز، شهادات رسمية، أو تسجيلات بشرية كاملة.
