import fs from "fs";
import vm from "vm";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sandbox = { console };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, "js/engine.js"), "utf8"), sandbox, { filename: "engine.js" });
const E = sandbox.Engine;
let failed = 0;
function eq(name, got, exp) {
  const ok = JSON.stringify(got) === JSON.stringify(exp);
  if (!ok) { failed++; console.error("✗", name, "got", got, "expected", exp); }
  else console.log("✓", name);
}

eq("exact grade 3", E.grade("silakan kak", { accept: { i: ["Silakan kak"] }, keysId: ["silakan"] }, "id"), 3);
eq("empty grade 0", E.grade("  ", { accept: { i: ["Silakan"] } }, "id"), 0);
eq("short substring is not excellent", E.grade("silakan", { accept: { i: ["Silakan dilihat-dilihat dulu ya kak"] }, keysId: [] }, "id") < 3, true);
eq("key hits can be good", E.grade("silakan dilihat", { accept: { i: ["xyz"] }, keysId: ["silakan", "dilihat", "dulu"] }, "id") >= 1, true);

const now = 1_700_000_000_000;
const again = E.applySrs({ box: 4, due: 0, lapses: 0, reps: 2 }, "again", now);
eq("again resets box", again.box, 1);
eq("again flags relearn", again.again, true);
eq("again due in 10 min", again.due, now + E.RELEARN_MS);
eq("again increments lapses", again.lapses, 1);

const good = E.applySrs({ box: 1, due: 0 }, "good", now);
eq("good promotes", good.box, 2);
eq("good due 2 days", good.due, now + 2 * E.DAY);

const easy = E.applySrs({ box: 1, due: 0 }, "easy", now);
eq("easy jumps", easy.box, 3);

const hard = E.applySrs({ box: 4, due: 0 }, "hard", now);
eq("hard caps learning box", hard.box, 2);

eq("imported chapter", E.isImportedChapter("learn-id-daily"), true);
eq("core chapter not imported", E.isImportedChapter("attract"), false);
eq("mono phrase imported", E.isImportedPhrase({ mono: "id", ch: "x" }), true);
eq("dash has no lang", E.hasLangText({ i: "—", t: "Merhaba" }, "id"), false);
eq("tr text present", E.hasLangText({ i: "—", t: "Merhaba" }, "tr"), true);
eq("sales path starts attract", E.SALES_PATH[0], "attract");
eq("shuffle keeps length", E.shuffle([1, 2, 3, 4]).length, 4);
eq("local day key shape", /^\d{4}-\d{2}-\d{2}$/.test(E.localDayKey(new Date("2026-03-05T22:00:00"))), true);

if (failed) { console.error(failed + " failed"); process.exit(1); }
console.log("كل اختبارات المحرك نجحت");
