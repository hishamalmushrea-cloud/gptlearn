# CONTENT_SCHEMA — مخطط المحتوى (v1)

> الحزمة المصدرة من صفحة «📦 حزم المحتوى» تتبع هذا المخطط. أي أداة خارجية تستطيع توليد حزم بالس نفسه والتحقق منها بأداة الفحص المدمجة.

## رأس الحزمة (contentPack)
```json
{ "id": "gl-full-2026-08-25", "name": "...", "languages": ["id","tr"],
  "version": 1, "schemaVersion": 1, "exportedAt": "...",
  "source": "original", "license": "project-proprietary" }
```
- `schemaVersion`: يتغير عند كسر التوافق فقط. `version`: رقم نسخة المحتوى.

## أقسام المحتوى (content)
| القسم | الوحدة | الحقول الإلزامية |
|---|---|---|
| chapters[] | فصل | id, title, group(sales/academy/survival), phrases[] |
| — phrases[] | عبارة | id, a, i, t (+it/tt النطق، lv 1-4، p 1-5، w متى، n لماذا، lit، alt) |
| situations[] | موقف | id, kind, title, turns[] (who,a + i/t), vocab[], grammar[], why, variants[] |
| stories[] | قصة | id, lang, level, title, text, textAr, vocab[], qs[]{q,opts,ok} |
| grammar[] | منهج قواعد | lang, rules[]{id,lv,t,why,form,ex[][],mis} |
| verbs[] | أفعال | lang, list[]{id,ar,inf,pres/past أو forms,ex[][]} |
| words.{id,tr}[] | قاموس | w, p, a, s, l, x[2] |
| culture[] | ثقافة | id, icon, title, body(html) |
| analyses[] | مقارنة | id, a, id{}, tr{} (text,lit,sound,lv,when,natural,better), note |
| trainers[] | تدريب | id, title, role, lang, scenario, turns[]{c,ask,accept{i[]|t[]},keys,model,why} |

## قواعد التحقق المطبقة (أداة الفحص)
1. وجود `contentPack` بمعرف فريد + schemaVersion (وإلا تحذير ترقية).
2. تفرد كل id عبر الفصول/المواقف/القصص.
3. الحقول الإلزامية للعبارة: a (عربي) + i (إندونيسي) + t (تركي).
4. تقرير إحصاءات للمراجعة البشرية.
> القاعدة الذهبية (§46/§67): لا يُدمج محتوى غير مُتحقق منه — والأداة تعطي أخطاء مفيدة لا انهيارًا.

## إضافة لغة جديدة
انسخ بنية `words.<lang>` وحقول i/t في العبارات إلى حقول جديدة — الواجهات محايدة والبنك يلتقط تلقائيًا.
