#!/usr/bin/env node
/* ===== مولّد محتوى أندرويد: data/** (مصدر الحقيقة) → FullContent.kt =====
 *
 * المنصة المنتَجة: تطبيق أندرويد Native (Jetpack Compose). ملفات الويب في
 * الجذر هي استوديو تأليف/معاينة فقط ولا تدخل الـ APK.
 *
 * ما يولّده هذا السكربت: بنك العبارات الثنائي كاملًا
 *   android/app/src/main/java/app/souq/allughah/data/FullContent.kt
 * مصادره:
 *   - كل فصول DB.chapters (عدا المستوردة learn-* والعبارات أحادية اللغة mono)
 *   - DB.basics.survival  →  topic: survival|عبارات النجاة
 *   - DB.basics.numbers   →  topic: survival|الأرقام والأسعار
 *
 * قواعد التحويل (حتمية):
 *   group الناقص في فصول البيع → "sales"
 *   lv 1..4 → Register.Formal / Neutral / Casual / Slang
 *   المستوى Cefr: يُحفَظ من الملف الحالي لكل id (مراجعة يدوية تُحترم)،
 *   وأي عبارة جديدة تأخذ A1 افتراضيًا حتى تُراجَع.
 *
 * الاستخدام:
 *   node tools/gen_android_content.mjs          # يكتب الملف
 *   node tools/gen_android_content.mjs --check  # يفشل إن كان الملف غير متزامن (CI)
 */
import fs from "fs";
import path from "path";
import vm from "vm";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(root, "android/app/src/main/java/app/souq/allughah/data/FullContent.kt");

/* --- تحميل بيانات الويب بنفس ترتيب تحميل index.html (ترتيب الفصول = ترتيب التحميل) --- */
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/src="(data\/[a-z0-9_/]+\.js)"/g)].map(m => m[1]);
if (!files.length) { console.error("❌ لم يُعثر على ملفات بيانات في index.html"); process.exit(2); }

const sandbox = {}; sandbox.window = sandbox; sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of files) {
  vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), sandbox, { filename: f });
}
const DB = sandbox.DB || sandbox.window.DB;
if (!DB || !DB.chapters) { console.error("❌ DB.chapters غير موجود"); process.exit(2); }

/* --- قراءة وسوم Cefr الحالية من الملف المُولَّد سابقًا (تُحفَظ بين التوليدات) --- */
function readExistingLevels() {
  const map = new Map();
  if (!fs.existsSync(OUT)) return map;
  const kt = fs.readFileSync(OUT, "utf8");
  const re = /Phrase\("((?:[^"\\]|\\.)*)"[^]*?Cefr\.(\w+)/g;
  let m;
  while ((m = re.exec(kt))) map.set(m[1], m[2]);
  return map;
}
const levels = readExistingLevels();

/* --- مساعدات --- */
const REG = { 1: "Formal", 2: "Neutral", 3: "Casual", 4: "Slang" };
function kw(s) {
  // تهريب سلسلة Kotlin: \ ثم " ثم $ (قالب) ثم محارف التحكم — الأساس UTF-8 يبقى مقروءًا
  return String(s ?? "")
    .replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\$/g, "\\$")
    .replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t");
}
const dash = s => (s === "—" || s == null ? "" : s); // الشرطة في نص اللغة = نص غائب
function lineFor(p, topic) {
  const reg = REG[p.lv] || "Neutral";
  const cefr = levels.get(p.id) || "A1";
  const lit = p.lit || "";
  const cultural = p.cultural || "";
  let s = `        Phrase("${kw(p.id)}", "${kw(p.a)}", "${kw(dash(p.i))}", "${kw(p.it)}", ` +
    `"${kw(dash(p.t))}", "${kw(p.tt)}", Register.${reg}, "${kw(p.w)}", "${kw(p.n)}", ` +
    `"${kw(lit)}", "${kw(topic)}", Cefr.${cefr}`;
  if (cultural) s += `, "${kw(cultural)}"`;
  return s + "),";
}

/* --- تجميع العبارات بالترتيب نفسه (فصول غير مستوردة ← نجاة ← أرقام) --- */
const lines = [];
let count = 0, skippedMono = 0, skippedImport = 0;
const seen = new Set();
function pushPhrases(list, topic) {
  for (const p of list || []) {
    if (p.mono) { skippedMono++; continue; }
    if (seen.has(p.id)) { console.error("❌ id مكرر: " + p.id); process.exit(1); }
    seen.add(p.id);
    lines.push(lineFor(p, topic));
    count++;
  }
}
for (const c of DB.chapters) {
  if (String(c.id).startsWith("learn-")) {
    skippedImport += (c.phrases || []).length;
    continue;
  }
  pushPhrases(c.phrases, `${c.group || "sales"}|${c.title}`);
}
pushPhrases(DB.basics?.survival, "survival|عبارات النجاة");
pushPhrases(DB.basics?.numbers?.phrases, "survival|الأرقام والأسعار");

/* --- الكتابة بنفس تنسيق الملف الأصلي --- */
const out =
`package app.souq.allughah.data

import app.souq.allughah.domain.Cefr
import app.souq.allughah.domain.Phrase
import app.souq.allughah.domain.Register

/** محتوى Native مولد من البنك المراجع. لا تعدل يدويًا. */
object FullContent {
    val phrases: List<Phrase> by lazy { listOf(
${lines.join("\n")}
    ) }
}
`;

if (process.argv.includes("--check")) {
  const cur = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (cur === out) {
    console.log(`✅ FullContent.kt متزامن مع data/** (${count} عبارة)`);
    process.exit(0);
  }
  const a = cur.split("\n"), b = out.split("\n");
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i] !== b[i]) {
      console.error(`❌ FullContent.kt غير متزامن — أول فرق في السطر ${i + 1}:`);
      console.error("  الملف الحالي: " + (a[i] ?? "<EOF>").slice(0, 160));
      console.error("  المتوقَّع:     " + (b[i] ?? "<EOF>").slice(0, 160));
      break;
    }
  }
  console.error("شغّل: node tools/gen_android_content.mjs  ثم ارفع الملفين معًا.");
  process.exit(1);
}

fs.writeFileSync(OUT, out);
console.log(`✅ كُتب FullContent.kt: ${count} عبارة | استُبعد أحادي mono: ${skippedMono} | مستورد learn-*: ${skippedImport}`);
console.log(`ℹ️ وسوم Cefr محفوظة من الملف السابق: ${levels.size} عبارة معروفة؛ الجديد يأخذ A1 حتى يراجَع.`);
