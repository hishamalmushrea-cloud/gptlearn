# الأندرويد — التطبيق الأصلي (المنتج الوحيد)

المسار المعتمد نهائيًا: **Android Native + Jetpack Compose**.

- `MainActivity` يفتح `AcademyRoot` مباشرة، بلا WebView، وبلا صلاحية إنترنت.
- بنك العبارات الثنائي (1000 عبارة) في `data/FullContent.kt` **مولَّد آليًا** من `data/**` عبر `tools/gen_android_content.mjs` — لا يُعدَّل يدويًا، وCI يفشل البناء إن خرج عن التزامن (`--check`).
- بقية المحتوى (قاموس 160، حوارات 33، قواعد 29، قصص 8، أفعال 16، تحليلات 30، مدربون 8) نُقل كاملًا إلى Kotlin ويُحرَّر هناك مباشرة.
- التقدم محلي عبر DataStore، والمراجعة عبر محركي SRS Native (Leitner + SM‑2) في `domain/` باختبارات JUnit.
- النطق عبر Android TextToSpeech، والمكتبة المرجعية Markdown في `app/src/main/assets/library` تُقرأ Native.
- لا تُنسخ ملفات `index.html` أو `js/` أو `css/` إلى APK — ويب الجذر معاينة تأليف فقط.

دورة تعديل عبارة: عدّل `data/**` ← `node validate.mjs` ← `node tools/gen_android_content.mjs` ← ارفع الملفين معًا.

ما لا ندّعيه: تعرّف الكلام على الجهاز، شهادات رسمية، أو تسجيلات بشرية كاملة.
