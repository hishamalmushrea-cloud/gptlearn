import fs from 'fs';
import vm from 'vm';
const sandbox = {}; sandbox.window = sandbox; // window = global كما في المتصفح
vm.createContext(sandbox);
const files = ['data/core/basics.js','data/core/survival.js','data/core/stories.js','data/core/dictionary.js','data/core/life1.js','data/core/life2.js','data/core/life3.js','data/core/academy1.js','data/core/academy2.js','data/core/analyses.js','data/sales/part1.js','data/sales/part2.js','data/sales/part3.js','data/sales/part4.js','data/sales/part5.js','data/sales/part6.js','data/sales/part7.js','data/sales/part8.js','data/sales/situations.js','data/sales/culture.js','data/daily/dailySituations.js','data/daily/situations2.js','data/daily/situations3.js','data/train/trainers.js','data/grammar/grammar.js','data/grammar/verbs.js'];
for (const f of files) vm.runInContext(fs.readFileSync(f,'utf8'), sandbox, {filename:f});
const DB = sandbox.window.DB;
let phrases = 0, issues = [];
const ids = new Set();
for (const c of DB.chapters) {
  phrases += (c.phrases||[]).length;
  for (const p of c.phrases||[]) {
    if (ids.has(p.id)) issues.push('مكرر id: '+p.id);
    ids.add(p.id);
    if (!p.a || !p.i || !p.t) issues.push('حقل ناقص في: '+p.id);
    if (p.lv<1||p.lv>4) issues.push('lv غير صالح: '+p.id);
    if (!p.p) issues.push('بلا أولوية: '+p.id);
  }
}
const prio = {};
for (const c of DB.chapters) for (const p of c.phrases||[]) prio[p.p]=(prio[p.p]||0)+1;
let surv=0; for (const p of DB.basics.survival||[]) surv++;
let nump=0; for (const p of DB.basics.numbers?.phrases||[]) nump++;
console.log('الفصول:', DB.chapters.length, '| عبارات الفصول:', phrases, '| نجاة:', surv, '| أرقام:', nump);
console.log('توزيع الأولويات:', JSON.stringify(prio));
console.log('المواقف:', DB.situations.length, '| جولاتها:', DB.situations.reduce((a,s)=>a+s.turns.length,0));
console.log('قواعد:', (DB.grammar||[]).reduce((a,g)=>a+g.rules.length,0), 'مسارات مستويات:', (DB.levels||[]).length);
const wc=Object.values(sandbox.window.DB.words||{}).reduce((a,l)=>a+l.length,0);
console.log('قاموس:', wc, 'كلمة');
console.log('قصص:', (DB.stories||[]).length, '| فصول نجاة:', DB.chapters.filter(c=>c.group==='survival').length, '| فئات نجاة:', (DB.survival||[]).length);
console.log('مقالات ثقافة:', DB.culture.length, '| تحليلات مقارنة:', DB.analyses.length, '| سيناريوهات تدريب:', DB.trainers.length, '| جولات تدريب:', DB.trainers.reduce((a,t)=>a+t.turns.length,0));
const bank = phrases + surv + nump;
console.log('إجمالي بنك الجمل:', bank);
console.log(issues.length? '⚠️ مشاكل:\n'+issues.join('\n') : '✅ لا مشاكل');
