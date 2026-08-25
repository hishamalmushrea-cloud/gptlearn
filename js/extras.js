/* ===== وضع النجاة + القصص + أخطائي + صفحة التقدم (مهارات/سلسلة/إنجازات/هدف يومي) ===== */
"use strict";

(function () {
  const esc = App.esc, $ = App.$, toast = App.toast;

  /* ---------- تقدم كل لغة على حدة (R1) ---------- */
  function langStore() { return App.store.get("langprog", { id: [], tr: [] }); }
  App.langTrack = function (lang, id) {
    if (lang !== "id" && lang !== "tr") return;
    const lp = langStore();
    const set = new Set(lp[lang]); set.add(id);
    lp[lang] = [...set]; App.store.set("langprog", lp);
  };
  App.langProgress = function () {
    const lp = langStore(), total = App.allPhrases().length;
    return {
      id: { n: lp.id.length, pct: Math.round(lp.id.length / Math.max(total, 1) * 100) },
      tr: { n: lp.tr.length, pct: Math.round(lp.tr.length / Math.max(total, 1) * 100) },
      total
    };
  };
  App.langLevel = function (lang, lvl) {
    const l = App.store.get("level", {});
    if (lvl) { l[lang] = { lvl, at: Date.now() }; App.store.set("level", l); }
    return l[lang] || null;
  };

  /* ---------- محرك «ماذا أتعلم الآن؟» (R3 — توصية صادقة بقواعد معلنة) ---------- */
  App.nextBest = function () {
    const b = App.store.get("leitner", {}), now = Date.now();
    const due = Object.values(b).filter(x => now >= (x.due || 0)).length;
    const mis = App.store.get("mistakes", []).length;
    const total = App.allPhrases().length, doneN = App.learned.size;
    if (mis >= 5) return { icon: "❌", title: "راجع أخطائك أولًا", desc: mis + " أخطاء متراكمة — المراجعة المبنية على الخطأ أعلى مردود الآن.", href: "#/mistakes" };
    if (due >= 8) return { icon: "🃏", title: "لديك " + due + " بطاقة مستحقة", desc: "المراجعة المجدولة قبل أي جديد — هكذا يثبت القديم.", href: "#/cards" };
    if (doneN < 50) return { icon: "⭐", title: "أكمل أهم 50 جملة", desc: "أنجزت " + doneN + " من 50 — عمود الأساس للسوق.", href: "#/bank" };
    if (due > 0) return { icon: "🃏", title: "بدّد " + due + " بطاقة مستحقة", desc: "ثم افتح تدريبًا جديدًا.", href: "#/cards" };
    return { icon: "🎭", title: "تدرّب كالبائع", desc: "بطاقاتك منضبطة — الوقت الأمثل لمحادثة تفاعلية.", href: "#/train" };
  };


  /* ============ تتبع النشاط والمهارات ============ */
  const KINDS = { vocab: "📚 مفردات", cards: "🃏 مراجعة", quiz: "📝 اختبار", grammar: "🧩 قواعد", conversation: "🎭 محادثة", listening: "🎧 استماع", reading: "📖 قراءة", test: "🎯 اختبار مستوى" };
  App.track = function (kind, n) {
    const d = new Date().toISOString().slice(0, 10);
    const a = App.store.get("activity", {});
    a[d] = a[d] || { n: 0, k: {} };
    a[d].n += (n || 1);
    a[d].k[kind] = (a[d].k[kind] || 0) + (n || 1);
    App.store.set("activity", a);
  };

  /* ============ أخطائي ============ */
  App.addMistake = function (m) {
    const list = App.store.get("mistakes", []);
    if (list.length > 250) list.shift();
    const key = (m.q || "") + "|" + (m.correct || "");
    if (list.some(x => x.key === key)) return;
    list.push({ key, q: m.q, correct: m.correct, why: m.why || "", lang: m.lang || "", source: m.source || "", at: Date.now() });
    App.store.set("mistakes", list);
  };
  App.mistakes = () => App.store.get("mistakes", []);

  App.Views.mistakes = function () {
    const list = [...App.mistakes()].reverse();
    $("#view").innerHTML = `
    <div class="section-title">❌ أخطائي — أثمن مصدر تعلم <span class="line"></span></div>
    <div class="callout tip">كل خطأ في الاختبارات أو التدريب يُسجَّل هنا مع الإجابة الصحيحة وسببها. راجعه قبل أي شيء آخر — هذا هو «المراجعة المبنية على الخطأ» (Error-based review) بأبسط صورها الصادقة.</div>
    ${list.length ? `
    <div class="chips">
      <button class="btn danger sm" id="clrM">🗑️ تفريغ القائمة</button>
    </div>
    ${list.map(m => `
      <div class="phrase-card">
        <div class="ph-top"><div class="ph-ar">${esc(m.source)}: ${esc(m.q)}</div></div>
        <div class="lang-block ${m.lang === "tr" ? "tr" : "id"}">
          <div class="ltext">✅ ${esc(m.correct)}</div>
          ${m.why ? `<div class="ltrans">💡 ${esc(m.why)}</div>` : ""}
        </div>
      </div>`).join("")}` : `<div class="empty"><div class="e">🎉</div>لا أخطاء مسجلة بعد — ابدأ اختبارًا أو تدريبًا وستظهر هنا.</div>`}`;
    const b = document.getElementById("clrM");
    if (b) b.addEventListener("click", () => { if (confirm("تفريغ قائمة الأخطاء؟")) { App.store.set("mistakes", []); toast("تم التفريغ"); App.Views.mistakes(); } });
  };

  /* ============ صفحة التقدم ============ */
  App.Views.progress = function () {
    const a = App.store.get("activity", {});
    const today = new Date().toISOString().slice(0, 10);
    const goal = (App.store.get("settings", { lang: "both" }).goal) || 25;
    const t = a[today] || { n: 0, k: {} };
    // السلسلة
    let streak = 0; const d = new Date();
    for (;;) { const key = d.toISOString().slice(0, 10); if (a[key] && a[key].n > 0) { streak++; d.setDate(d.getDate() - 1); } else break; }
    // مهارات
    const skillTotals = {};
    Object.values(a).forEach(day => Object.entries(day.k || {}).forEach(([k, v]) => skillTotals[k] = (skillTotals[k] || 0) + v));
    const maxSkill = Math.max(1, ...Object.values(skillTotals));
    // إنجازات صادقة
    const total = App.allPhrases().length, done = App.learned.size;
    const trainerDone = Object.values(a).some(x => (x.k || {}).conversation);
    const storiesRead = Object.values(a).some(x => (x.k || {}).reading);
    const ACH = [
      { icon: "🌱", t: "الخطوة الأولى", ok: done >= 1, d: "علّمت أول جملة ✓" },
      { icon: "📗", t: "50 جملة", ok: done >= 50, d: `${done}/50` },
      { icon: "📘", t: "100 جملة", ok: done >= 100, d: `${done}/100` },
      { icon: "📙", t: "250 جملة", ok: done >= 250, d: `${done}/250` },
      { icon: "🔥", t: "3 أيام متتالية", ok: streak >= 3, d: `سلسلتك: ${streak}` },
      { icon: "⚡", t: "7 أيام متتالية", ok: streak >= 7, d: `سلسلتك: ${streak}` },
      { icon: "🎭", t: "أول تدريب محادثة", ok: !!trainerDone, d: "أنا البائع/أنا الزبون" },
      { icon: "📖", t: "أول قصة مقروءة", ok: !!storiesRead, d: "قصص متدرجة" }
    ];
    const lp = App.langProgress();
    const lvI = App.langLevel("id"), lvT = App.langLevel("tr");
    $("#view").innerHTML = `
    <div class="section-title">📈 تقدمي <span class="line"></span></div>
    <div class="box">
      <h3>🌐 تقدم كل لغة على حدة</h3>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div class="compare-block" style="background:var(--id-soft);border:1px solid #f3d8c2">
          <div class="cb-head">🇮🇩 الإندونيسية ${lvI ? `<span class="tag">${lvI.lvl} تقديري</span>` : ""}</div>
          <div class="progress"><i style="width:${lp.id.pct}%"></i></div>
          <p class="mini-note">${lp.id.n} جملة أتممتها بالإندونيسية من ${lp.total} — ${lp.id.pct}%</p>
        </div>
        <div class="compare-block" style="background:var(--tr-soft);border:1px solid #d9dcf5">
          <div class="cb-head">🇹🇷 التركية ${lvT ? `<span class="tag">${lvT.lvl} تقديري</span>` : ""}</div>
          <div class="progress"><i style="width:${lp.tr.pct}%"></i></div>
          <p class="mini-note">${lp.tr.n} جملة أتممتها بالتركية من ${lp.total} — ${lp.tr.pct}%</p>
        </div>
      </div>
      <p class="mini-note">يُحتسب التقدم من بطاقاتك واختباراتك في كل لغة اتجاهًا. ${(!lvI && !lvT) ? '<a href="#/placement">حدّد مستواك التقديري باختبار 12 سؤالًا ←</a>' : ""}</p>
    </div>
    <div class="box">
      <h3>🎯 هدف اليوم</h3>
      <div class="progress"><i style="width:${Math.min(100, Math.round(t.n / goal * 100))}%"></i></div>
      <p style="margin-top:8px">اليوم أنجزت <b>${t.n}</b> من <b>${goal}</b> نشاطًا تعليميًا (بطاقة، سؤال، جولة تدريب، جملة ✓).</p>
      <div class="chips" id="goalChips">${[10, 25, 50, 75, 100].map(g => `<button class="chip ${g === goal ? "on" : ""}" data-g="${g}">${g} / اليوم</button>`).join("")}</div>
    </div>
    <div class="stats">
      <div class="stat"><b>${streak} 🔥</b><span>أيام متتالية</span></div>
      <div class="stat"><b>${done}</b><span>جملة أتممتها</span></div>
      <div class="stat"><b>${Math.round(done / Math.max(total, 1) * 100)}%</b><span>من البنك (${total})</span></div>
      <div class="stat"><b>${App.mistakes().length}</b><span>أخطاء قيد المراجعة</span></div>
    </div>
    <div class="box">
      <h3>🧩 مهاراتي (نشاط فعلي موثَّق)</h3>
      ${Object.keys(KINDS).map(k => `
        <div style="margin:7px 0">
          <div style="display:flex;justify-content:space-between;font-size:.85rem"><span>${KINDS[k]}</span><b>${skillTotals[k] || 0}</b></div>
          <div class="progress"><i style="width:${Math.round((skillTotals[k] || 0) / maxSkill * 100)}%"></i></div>
        </div>`).join("")}
      <p class="mini-note">هذه أعداد أنشطة حقيقية سجلها جهازك — لا تقديرات مزيفة. (الكتابة والاستماع المنهجي قيد الطريق — راجع docs/ROADMAP)</p>
    </div>
    <div class="box">
      <h3>🏅 إنجازات</h3>
      <div class="grid-cards">
        ${ACH.map(x => `<div class="module-card" style="opacity:${x.ok ? 1 : .45};border:${x.ok ? "2px solid var(--brand)" : ""}"><div class="ic">${x.icon}</div><h3>${x.t}</h3><p>${x.ok ? "✅ مُحقق" : x.d}</p></div>`).join("")}
      </div>
    </div>`;
    $("#goalChips").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      const s = App.store.get("settings", { lang: "both" }); s.goal = +b.dataset.g;
      App.store.set("settings", s); toast("تم ضبط الهدف اليومي ✅"); App.Views.progress();
    });
  };

  /* ============ ✍️ تمرين الكتابة (R4) ============ */
  let wr = null;
  App.Views.write = function (modeArg) {
    if (!wr || wr.done || (modeArg && modeArg !== wr.mode)) {
      const pool = App.bankSorted().filter(p => (p.i || "").split(" ").length >= 3).sort(() => Math.random() - .5).slice(0, 10);
      wr = { pool, idx: 0, mode: modeArg || "order", score: 0, done: false };
    }
    renderWrite();
  };
  function renderWrite() {
    if (wr.mode === "type") { renderWriteType(); return; }
    if (wr.idx >= wr.pool.length) {
      App.track("writing", wr.score);
      wr.done = true;
      $("#view").innerHTML = `
      <div class="box" style="text-align:center;padding:30px">
        <div style="font-size:2.6rem">✍️</div>
        <h3>أنهيت جلسة الكتابة: ${wr.score}/${wr.pool.length}</h3>
        <div class="callout tip">${wr.score >= 8 ? "تحكم ممتاز بالترتيب والإملاء 💪" : wr.score >= 5 ? "قاعدة متينة — كرر الجلسة غدًا وتوقف عند الكلمات التي أخطأت بها" : "ابدأ بعدد أقل عبر إتقان «أهم 50» أولًا ثم عد"}</div>
        <div style="margin-top:10px"><button class="btn primary sm" onclick="location.hash='#/write';location.reload()">🔁 جلسة جديدة</button></div>
      </div>`;
      return;
    }
    const p = wr.pool[wr.idx];
    const words = p.i.split(/\s+/).filter(Boolean).sort(() => Math.random() - .5);
    $("#view").innerHTML = `
    <div class="crumbs"><a href="#/cards">🃏 التدريب</a> ‹ ✍️ تمرين الكتابة</div>
    <div class="chips">
      <a class="chip ${wr.mode === "order" ? "on" : ""}" href="#/write/order">🧩 رتب الجملة</a>
      <a class="chip ${wr.mode === "type" ? "on" : ""}" href="#/write/type">⌨️ اكتبها من الذاكرة</a>
    </div>
    <div class="box">
      <div class="tr-progress">${wr.pool.map((_, k) => `<i class="${k < wr.idx ? "done" : k === wr.idx ? "now" : ""}"></i>`).join("")}</div>
      <div class="tr-prompt" style="text-align:center;font-size:1.15rem;font-weight:800">${esc(p.a)}</div>
      <p class="mini-note" style="text-align:center">رتّب الجملة بالإندونيسية (انقر الكلمات بالترتيب):</p>
      <div id="wrBuilt" class="tr-prompt ltr" style="min-height:52px;background:#f6f9fc;font-weight:700"></div>
      <div id="wrPool" style="display:flex;gap:7px;flex-wrap:wrap;justify-content:center;margin-top:10px">
        ${words.map(w => `<button class="chip" style="direction:ltr">${esc(w)}</button>`).join("")}
      </div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;flex-wrap:wrap">
        <button class="btn ghost sm" id="wrUndo">↩️ تراجع</button>
        <button class="btn primary sm" id="wrCheck">تحقق ✓</button>
      </div>
      <div id="wrFb"></div>
    </div>`;
    const built = [];
    const pool = document.getElementById("wrPool"), out = document.getElementById("wrBuilt");
    const draw = () => { out.textContent = built.join(" "); };
    pool.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b || b.disabled) return;
      b.disabled = true; b.style.opacity = .35;
      built.push(b.textContent.trim()); draw();
    });
    document.getElementById("wrUndo").addEventListener("click", () => {
      const last = built.pop(); if (!last) return; draw();
      [...pool.querySelectorAll(".chip")].forEach(c => { if (c.textContent.trim() === last && c.disabled) { c.disabled = false; c.style.opacity = 1; } });
    });
    document.getElementById("wrCheck").addEventListener("click", () => {
      const target = p.i.replace(/[""\.,!?]/g, "").replace(/\s+/g, " ").trim();
      const mine = built.join(" ").replace(/[""\.,!?]/g, "").replace(/\s+/g, " ").trim();
      const okA = App.norm(mine) === App.norm(target);
      if (okA) { wr.score++; App.langTrack("id", p.id); }
      else App.addMistake({ q: "رتّب: " + p.a, correct: p.i, lang: "id", source: "✍️ كتابة", why: p.n || "" });
      App.track("writing", 1);
      document.getElementById("wrFb").innerHTML = `
        <div class="feedback ${okA ? "f3" : "f1"}"><b class="t">${okA ? "🎉 ترتيب صحيح!" : "❌ الترتيب الصحيح:"}</b>
        <div class="ltext">${esc(p.i)}</div>${p.it ? `<div class="ltrans">النطق: ${esc(p.it)}</div>` : ""}</div>
        <div style="text-align:center;margin-top:8px"><button class="btn primary sm" id="wrNext">${wr.idx + 1 < wr.pool.length ? "التالي ←" : "إنهاء 🏁"}</button></div>`;
      document.getElementById("wrNext").addEventListener("click", () => { wr.idx++; renderWrite(); });
    });
  }

  /* ⌨️ كتابة حرة من الذاكرة بتصحيح ضبابي صادق */
  function renderWriteType() {
    if (wr.idx >= wr.pool.length) {
      App.track("writing", wr.score);
      wr.done = true;
      App.$("#view").innerHTML = `
      <div class="box" style="text-align:center;padding:30px">
        <div style="font-size:2.6rem">⌨️</div>
        <h3>أنهيت جلسة الكتابة الحرة: ${wr.score}/${wr.pool.length}</h3>
        <div class="callout tip">${wr.score >= 8 ? "إملاؤك ممتاز — انتقل لبطاقات 250" : "الإملاء يُبنى بالتكرار: كرر غدًا نفس الجلسة"}</div>
        <div style="margin-top:10px"><a class="btn primary sm" href="#/write/type">🔁 جلسة جديدة</a></div>
      </div>`;
      return;
    }
    const p = wr.pool[wr.idx];
    App.$("#view").innerHTML = `
    <div class="crumbs"><a href="#/cards">🃏 التدريب</a> ‹ ⌨️ كتابة من الذاكرة</div>
    <div class="chips">
      <a class="chip" href="#/write/order">🧩 رتب الجملة</a>
      <a class="chip on" href="#/write/type">⌨️ اكتبها من الذاكرة</a>
    </div>
    <div class="box">
      <div class="tr-progress">${wr.pool.map((_, k) => `<i class="${k < wr.idx ? "done" : k === wr.idx ? "now" : ""}"></i>`).join("")}</div>
      <div class="tr-prompt" style="text-align:center;font-size:1.15rem;font-weight:800">${App.esc(p.a)}</div>
      <p class="mini-note" style="text-align:center">اكتبها بالإندونيسية كما تتذكرها (التصحيح يتسامح مع علامات الترقيم):</p>
      <div class="tr-input" style="justify-content:center">
        <input id="wrTypeIn" type="text" dir="ltr" placeholder="Tulis di sini…" autocomplete="off">
        <button class="btn primary" id="wrTypeGo">تحقق ✓</button>
      </div>
      <div id="wrTypeFb"></div>
    </div>`;
    const inp = document.getElementById("wrTypeIn"); inp.focus();
    const check = () => {
      const val = (inp.value || "").trim();
      if (!val) { App.toast("اكتب جوابك أولًا ✍️"); return; }
      const g = App.Trainer.grade(val, { accept: [{ i: p.i }], keysId: p.i.split(" ").filter(w => w.length > 3).slice(0, 4) }, "id");
      const ok = g >= 2;
      if (g === 3) { wr.score++; App.langTrack("id", p.id); }
      else if (!ok) App.addMistake({ q: "اكتب: " + p.a, correct: p.i, lang: "id", source: "⌨️ كتابة حرة", why: p.n || "" });
      App.track("writing", 1);
      document.getElementById("wrTypeFb").innerHTML = `
        <div class="feedback f${g}"><b class="t">${g === 3 ? "🎉 مطابقة تامة!" : g === 2 ? "👍 قريب جدًا — مع أخطاء صغيرة" : g === 1 ? "🛠️ نصف الطريق — قارن" : "❌ النموذج الصحيح:"}</b>
        <div class="ltext">${App.esc(p.i)}</div>
        <div class="ltrans">نطقك: ${App.esc(val)}</div>
        ${p.it ? `<div class="ltrans">النطق الصحيح: ${App.esc(p.it)}</div>` : ""}</div>
        <div style="text-align:center;margin-top:8px"><button class="btn primary sm" id="wrTypeNext">${wr.idx + 1 < wr.pool.length ? "التالي ←" : "إنهاء 🏁"}</button></div>`;
      document.getElementById("wrTypeNext").addEventListener("click", () => { wr.idx++; renderWriteType(); });
    };
    document.getElementById("wrTypeGo").addEventListener("click", check);
    inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
  }

  /* ============ 🎧 تمارين الاستماع ============ */
  let ls = null;
  App.Views.listen = function (tab) {
    if (tab === "type") { App.Views.listenType(); return; }
    if (!ls || ls.done) {
      const pool = App.bankSorted().slice(0, 300).sort(() => Math.random() - .5).slice(0, 10);
      ls = { pool, idx: 0, mode: "choose", score: 0, done: false };
    }
    renderListen();
  };
  function renderListen() {
    if (ls.idx >= ls.pool.length) {
      App.track("listening", ls.score); ls.done = true;
      App.$("#view").innerHTML = `
      <div class="box" style="text-align:center;padding:30px">
        <div style="font-size:2.6rem">🎧</div>
        <h3>أنهيت جلسة الاستماع: ${ls.score}/${ls.pool.length}</h3>
        <div class="callout tip">إن لم تسمع الصوت: صوت ${"اللغة"} غير مثبت على جهازك — استخدم «اسمع واكتب» بالنطق المكتوب أسفل كل جواب، أو ثبّت حزمة أصوات اللغة في إعدادات جهازك.</div>
        <div style="margin-top:10px"><a class="btn primary sm" href="#/listen">🔁 جلسة جديدة</a></div>
      </div>`;
      return;
    }
    const p = ls.pool[ls.idx];
    const others = App.allPhrases().filter(x => x.id !== p.id).sort(() => Math.random() - .5).slice(0, 3);
    const opts = [p, ...others].sort(() => Math.random() - .5);
    App.$("#view").innerHTML = `
    <div class="crumbs"><a href="#/cards">🃏 التدريب</a> ‹ 🎧 تمرين الاستماع</div>
    <div class="chips">
      <button class="chip on">اسمع واختر المعنى</button>
      <a class="chip" href="#/listen/type">⌨️ اسمع واكتب</a>
    </div>
    <div class="box">
      <div class="tr-progress">${ls.pool.map((_, k) => `<i class="${k < ls.idx ? "done" : k === ls.idx ? "now" : ""}"></i>`).join("")}</div>
      <div style="text-align:center;margin:12px 0">
        <button class="icon-btn" style="width:56px;height:56px;font-size:1.6rem" data-act="speak" data-code="id-ID" data-text="${App.esc(p.i)}">🔊</button>
        <button class="icon-btn" style="width:44px;height:44px;font-size:1.1rem" data-act="speak" data-code="id-ID" data-text="${App.esc(p.i)}" data-rate="0.65" title="بطيء">🐢</button>
      </div>
      <p class="mini-note" style="text-align:center">اضغط 🔊 واسمع، ثم اختر المعنى العربي الصحيح (أعد التشغيل بلا حدود)</p>
      <div id="lsOpts">${opts.map(o => `<button class="quiz-opt" data-ok="${o.id === p.id ? 1 : 0}" data-ar="${App.esc(o.a)}">${App.esc(o.a)}</button>`).join("")}</div>
      <div id="lsFb"></div>
    </div>`;
    document.getElementById("lsOpts").addEventListener("click", e => {
      const b = e.target.closest(".quiz-opt"); if (!b || b.disabled) return;
      const ok = b.dataset.ok === "1";
      App.track("listening", 1);
      if (ok) { ls.score++; App.langTrack("id", p.id); }
      else App.addMistake({ q: "🎧 سمعتَ: " + p.i, correct: p.a, lang: "id", source: "🎧 استماع", why: "أعد الاستماع بالسرعة البطيئة 🐢" });
      document.querySelectorAll("#lsOpts .quiz-opt").forEach(x => {
        if (x.dataset.ok === "1") x.classList.add("right"); else if (x === b) x.classList.add("wrong");
        x.disabled = true;
      });
      document.getElementById("lsFb").innerHTML = `
        <div class="feedback ${ok ? "f3" : "f1"}"><b class="t">${ok ? "🎉 سمعك حاد!" : "❌ الصوت كان يعني:"}</b>
        <div class="ltext">${App.esc(p.i)}</div><div class="ltrans">النطق: ${App.esc(p.it || "")}</div></div>
        <div style="text-align:center;margin-top:8px"><button class="btn primary sm" id="lsNext">${ls.idx + 1 < ls.pool.length ? "التالي ←" : "إنهاء 🏁"}</button></div>`;
      document.getElementById("lsNext").addEventListener("click", () => { ls.idx++; renderListen(); });
    });
  }
  /* ⌨️ اسمع واكتب */
  let lst = null;
  App.Views.listenType = function () {
    if (!lst || lst.done) {
      const pool = App.bankSorted().filter(p => (p.i || "").split(" ").length >= 2).sort(() => Math.random() - .5).slice(0, 8);
      lst = { pool, idx: 0, score: 0, done: false };
    }
    if (lst.idx >= lst.pool.length) {
      App.track("listening", lst.score); lst.done = true;
      App.$("#view").innerHTML = `<div class="box" style="text-align:center;padding:30px"><div style="font-size:2.6rem">🎧⌨️</div><h3>أنهيت «اسمع واكتب»: ${lst.score}/${lst.pool.length}</h3><div style="margin-top:10px"><a class="btn primary sm" href="#/listen/type">🔁 جلسة جديدة</a> <a class="btn ghost sm" href="#/listen">🎧 اسمع واختر</a></div></div>`;
      return;
    }
    const p = lst.pool[lst.idx];
    App.$("#view").innerHTML = `
    <div class="crumbs"><a href="#/listen">🎧 الاستماع</a> ‹ ⌨️ اسمع واكتب</div>
    <div class="box">
      <div class="tr-progress">${lst.pool.map((_, k) => `<i class="${k < lst.idx ? "done" : k === lst.idx ? "now" : ""}"></i>`).join("")}</div>
      <div style="text-align:center;margin:12px 0">
        <button class="icon-btn" style="width:56px;height:56px;font-size:1.6rem" data-act="speak" data-code="id-ID" data-text="${App.esc(p.i)}">🔊</button>
        <button class="icon-btn" style="width:44px;height:44px" data-act="speak" data-code="id-ID" data-text="${App.esc(p.i)}" data-rate="0.65">🐢</button>
      </div>
      <p class="mini-note" style="text-align:center">اكتب ما سمعتَه بالإندونيسية (الترقيم لا يُحسب):</p>
      <div class="tr-input" style="justify-content:center">
        <input id="lsTypeIn" type="text" dir="ltr" placeholder="Tulis yang kamu dengar…" autocomplete="off">
        <button class="btn primary" id="lsTypeGo">تحقق ✓</button>
        <button class="btn ghost" id="lsTypeHint">💡 التلميح</button>
      </div>
      <div id="lsTypeFb"></div>
    </div>`;
    const inp = document.getElementById("lsTypeIn"); inp.focus();
    const check = () => {
      const val = (inp.value || "").trim();
      if (!val) { App.toast("اكتب ما سمعته ✍️"); return; }
      const g = App.Trainer.grade(val, { accept: [{ i: p.i }], keysId: p.i.split(" ").filter(w => w.length > 3).slice(0, 4) }, "id");
      if (g === 3) { lst.score++; App.langTrack("id", p.id); }
      else App.addMistake({ q: "🎧 اكتب ما سمعت", correct: p.i, lang: "id", source: "🎧 اسمع واكتب", why: p.n || "" });
      App.track("listening", 1);
      document.getElementById("lsTypeFb").innerHTML = `
        <div class="feedback f${g}"><b class="t">${g === 3 ? "🎉 كتابة مطابقة!" : g === 2 ? "👍 شبه مطابق" : "❌ الصواب:"}</b>
        <div class="ltext">${App.esc(p.i)}</div><div class="ltrans">معناه: ${App.esc(p.a)} · النطق: ${App.esc(p.it || "")}</div></div>
        <div style="text-align:center;margin-top:8px"><button class="btn primary sm" id="lsTypeNext">${lst.idx + 1 < lst.pool.length ? "التالي ←" : "إنهاء 🏁"}</button></div>`;
      document.getElementById("lsTypeNext").addEventListener("click", () => { lst.idx++; App.Views.listenType(); });
    };
    document.getElementById("lsTypeGo").addEventListener("click", check);
    document.getElementById("lsTypeHint").addEventListener("click", () => App.toast("المعنى العربي: " + p.a));
    inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
  }

  /* ============ وضع النجاة ============ */
  App.Views.survival = function () {
    const surv = DB.survival || [];
    App.track && App.track("vocab", 0);
    $("#view").innerHTML = `
    <div class="hero" style="background:linear-gradient(135deg,#0f766e,#14b8a6)">
      <h1>🆘 وضع النجاة — بلمسة واحدة</h1>
      <p>أسرع طريق للجملة التي تنقذ موقفك الآن: مطار، فندق، تاكسي، اتجاهات، مطعم، مال، تسوق، طوارئ، صيدلية. كل جملة بنطقها وصوتها — تعمل دون إنشاء حساب ودون إنترنت.</p>
    </div>
    <div class="grid-cards">
      ${surv.map(c => {
        const ch = c.ch ? DB.chapters.find(x => x.id === c.ch) : null;
        const sit = c.sit ? DB.situations.find(x => x.id === c.sit) : null;
        if (ch) return `<a class="chapter-card" href="#/chapter/${ch.id}"><h3>${c.icon} ${c.title}</h3><p>${esc(ch.sub || "")}</p><span class="tag">${(ch.phrases || []).length} جملة نجاة</span></a>`;
        if (sit) return `<a class="chapter-card" href="#/situation/${sit.id}"><h3>${c.icon} ${c.title}</h3><p>حوار كامل جاهز: ${esc(sit.title)}</p><span class="tag">حوار + إعادة تمثيل</span></a>`;
        return `<a class="chapter-card" href="${c.view || "#/home"}"><h3>${c.icon} ${c.title}</h3><p>${esc(c.note || "")}</p><span class="tag">القسم الكامل</span></a>`;
      }).join("")}
    </div>
    <div class="box" style="margin-top:12px"><h3>🚨 أرقام الطوارئ (احفظها قبل أي جملة)</h3>
      <p>🇮🇩 إندونيسيا: <b>112</b> موحد (شرطة 110 — إسعاف 118) &nbsp;·&nbsp; 🇹🇷 تركيا: <b>112</b> موحد لكل الطوارئ</p>
    </div>`;
  };

  /* ============ القصص المتدرجة ============ */
  App.Views.stories = function () {
    $("#view").innerHTML = `
    <div class="section-title">📖 قصص متدرجة — اقرع واسمع واختبر فهمك <span class="line"></span></div>
    <div class="callout tip">قصص أصلية قصيرة بمستويين (A1/A2): النص باللغة الهدف + استماع بسرعتين (عادي/بطيء) + ترجمة عربية قابلة للإظهار + مفردات + أسئلة فهم. الخطأ في السؤال يُسجَّل في «أخطائي» تلقائيًا.</div>
    <div class="grid-cards">
      ${(DB.stories || []).map(s => `
        <a class="chapter-card" href="#/story/${s.id}">
          <h3>${s.lang === "id" ? "🇮🇩" : "🇹🇷"} ${esc(s.title)}</h3>
          <p>${esc(s.intro || "")}</p>
          <span class="tag">${s.level}</span> <span class="tag">${s.qs.length} أسئلة فهم</span>
        </a>`).join("")}
    </div>`;
  };

  App.Views.story = function (id) {
    const s = (DB.stories || []).find(x => x.id === id);
    if (!s) { App.Views.stories(); return; }
    const code = s.lang === "id" ? "id-ID" : "tr-TR";
    $("#view").innerHTML = `
    <div class="crumbs"><a href="#/stories">📖 القصص</a> ‹ ${esc(s.title)}</div>
    <div class="box">
      <h3>${s.lang === "id" ? "🇮🇩" : "🇹🇷"} ${esc(s.title)} <span class="tag">${s.level}</span></h3>
      <p class="mini-note">${esc(s.intro || "")}</p>
      <div class="ltext" style="font-size:1.12rem;line-height:2.2;background:#f6f9fc;border-radius:12px;padding:14px">${esc(s.text)}</div>
      <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap">
        <button class="btn primary sm" data-act="speak" data-code="${code}" data-text="${esc(s.text)}" data-rate="1">🔊 استماع عادي</button>
        <button class="btn ghost sm" data-act="speak" data-code="${code}" data-text="${esc(s.text)}" data-rate="0.65">🐢 استماع بطيء</button>
      </div>
      <details class="box" style="margin-top:12px;background:#fbfcfe"><summary>🇸🇦 الترجمة العربية (حاول أولًا بدونها)</summary>
        <div class="dbody" style="line-height:2">${esc(s.textAr)}</div></details>
    </div>
    <div class="box"><h3>🔑 مفردات القصة</h3>${App.table({ head: ["العربية", s.lang === "id" ? "🇮🇩" : "🇹🇷", "النطق", s.lang === "id" ? "🇹🇷 المكافئ" : "ملاحظة"], rows: s.vocab.map(v => s.lang === "id" ? [v[0], v[1], v[2] || "", v[3] || ""] : [v[0], v[1], v[2] || "", v[3] === "—" ? "" : (v[3] || "")]) })}</div>
    <div class="box"><h3>🧠 أسئلة الفهم</h3><div id="storyQs"></div></div>`;
    // أسئلة فهم
    let answered = {};
    const qbox = document.getElementById("storyQs");
    qbox.innerHTML = s.qs.map((q, i) => `
      <div class="tr-prompt" style="margin:8px 0"><b>${i + 1}.</b> ${esc(q.q)}</div>
      <div id="sq${i}">${q.opts.map((o, j) => `<button class="quiz-opt" data-q="${i}" data-j="${j}" data-ok="${j === q.ok ? 1 : 0}">${esc(o)}</button>`).join("")}</div>`).join("");
    qbox.addEventListener("click", e => {
      const b = e.target.closest(".quiz-opt"); if (!b) return;
      const qi = +b.dataset.q;
      if (answered[qi]) return;
      answered[qi] = true;
      const q = s.qs[qi], ok = b.dataset.ok === "1";
      if (ok) { App.track("reading"); toast("إجابة صحيحة ✅"); }
      else {
        App.track("reading");
        App.addMistake({ q: s.title + " — " + q.q, correct: q.opts[q.ok], lang: s.lang, source: "📖 قصة", why: "راجع القصة والمفردات ثم أعد المحاولة" });
        toast("الصحيح مضاع — وسُجّل في «أخطائي» للمراجعة");
      }
      document.querySelectorAll(`#sq${qi} .quiz-opt`).forEach(x => {
        if (x.dataset.ok === "1") x.classList.add("right"); else if (x === b) x.classList.add("wrong");
      });
    });
    App.track("reading");
  };
})();

/* ============ 🧩 القواعد والمستويات ============ */
App.Views.grammar = function (tab) {
  tab = tab || "id";
  const g = (DB.grammar || []).find(x => x.lang === tab) || DB.grammar[0];
  const lvOrder = ["A0", "A1", "A2", "B1", "B2"];
  App.$("#view").innerHTML = `
  <div class="section-title">🧩 منهج القواعد — بجمل تشتري بها فعلًا <span class="line"></span></div>
  <div class="callout tip">كل قاعدة: <b>مستواها التقديري ← متى تحتاجها ← صورتها ← أمثلة سوقية ← أشهر خطأ عربي فيها</b>. لا تحفظ الجداول؛ اربط كل قاعدة بجملة من السوق تعرفها.</div>
  <div class="chips" id="grTabs">
    ${(DB.grammar || []).map(x => `<button class="chip ${x.lang === g.lang ? "on" : ""}" data-l="${x.lang}">${x.lang === "id" ? "🇮🇩 الإندونيسية" : "🇹🇷 التركية"}</button>`).join("")}
  </div>
  <div id="grList">
  ${[...g.rules].sort((a, b) => lvOrder.indexOf(a.lv) - lvOrder.indexOf(b.lv)).map(r => `
    <details class="box">
      <summary>${App.esc(r.t)} <span class="tag">${r.lv}</span></summary>
      <div class="dbody">
        <div class="callout info"><b>لماذا تحتاجها؟</b> ${App.esc(r.why)}</div>
        <div class="ph-note"><b>الصورة:</b> <code class="k">${App.esc(r.form)}</code></div>
        <div class="tbl-wrap"><table class="tbl"><thead><tr><th>${g.lang === "id" ? "🇮🇩" : "🇹🇷"}</th><th>العربية</th></tr></thead>
        <tbody>${r.ex.map(e => `<tr><td class="ltr">${App.esc(e[0])}</td><td>${App.esc(e[1])}</td></tr>`).join("")}</tbody></table></div>
        <div class="callout warn"><b>⚠️ أشهر خطأ عربي هنا:</b> ${App.esc(r.mis)}</div>
      </div>
    </details>`).join("")}
  </div>
  <div class="section-title">🪜 مسارات المستويات (تقديرية — ليست شهادة) <span class="line"></span></div>
  <div class="grid-cards">
    ${(DB.levels || []).map(l => `
      <div class="chapter-card">
        <h3>${l.lv} — ${App.esc(l.t)}</h3>
        ${l.items.map(i => `<p> <a href="${i[0]}">← ${App.esc(i[1])}</a></p>`).join("")}
      </div>`).join("")}
  </div>`;
  document.getElementById("grTabs").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    location.hash = "#/grammar/" + b.dataset.l;
  });
};

/* ============ ⚡ مدرب الأفعال ============ */
let vb = { lang: "tr", verb: null, drill: null };
App.Views.verbs = function (tab) {
  vb.lang = tab === "id" ? "id" : "tr";
  const g = DB.verbs.find(x => x.lang === vb.lang);
  vb.verb = vb.verb && g.list.some(v => v.id === vb.verb.id) && DB.verbs.find(x => x.lang === vb.lang).list.find(v => v.id === vb.verb.id) ? vb.verb : g.list[0];
  vb.drill = null;
  renderVerbs();
};
function renderVerbs() {
  const g = DB.verbs.find(x => x.lang === vb.lang);
  const v = g.list.find(x => x.id === vb.verb.id) || g.list[0];
  const code = vb.lang === "id" ? "id-ID" : "tr-TR";
  const formsTable = v.pres
    ? `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>الضمير</th><th>الحاضر (الآن)</th><th>الماضي</th></tr></thead>
       <tbody>${v.pres.map((row, i) => `<tr><td><b>${row[0]}</b></td><td class="ltr">${row[1]}</td><td class="ltr">${(v.past[i] || [])[1] || ""}</td></tr>`).join("")}</tbody></table></div>`
    : `<div class="tbl-wrap"><table class="tbl"><thead><tr><th>الصورة</th><th>المعنى</th></tr></thead>
       <tbody>${v.forms.map(f => `<tr><td class="ltr">${f[0]}</td><td>${f[1]}</td></tr>`).join("")}</tbody></table></div>`;
  App.$("#view").innerHTML = `
  <div class="section-title">⚡ مدرب الأفعال — أعصاب اللغة <span class="line"></span></div>
  <div class="callout tip">اختر فعلًا: تصريفاته (أو صوره) وأمثلة حية ثم <b>تمرين مطابقة</b> يختبر حفظك. الأفعال هنا ليست حشوًا — كل واحد منها تسمعه كل يوم في السوق.</div>
  <div class="chips" id="vbTabs">
    <a class="chip ${vb.lang === "tr" ? "on" : ""}" href="#/verbs/tr">🇹🇷 التركية</a>
    <a class="chip ${vb.lang === "id" ? "on" : ""}" href="#/verbs/id">🇮🇩 الإندونيسية</a>
  </div>
  <div class="chips" id="vbList">${g.list.map(x => `<button class="chip ${x.id === v.id ? "on" : ""}" data-v="${x.id}">${x.ar}</button>`).join("")}</div>
  <div class="box">
    <h3><span class="ltr">${v.inf}</span> — ${v.ar} <button class="icon-btn" data-act="speak" data-code="${code}" data-text="${App.esc(v.inf)}">🔊</button></h3>
    <p class="mini-note">${App.esc(v.note)}</p>
    ${formsTable}
    ${v.ex.map(e => `<div class="lang-block ${vb.lang === "id" ? "id" : "tr"}"><div class="ltext">${App.esc(e[0])} <button class="icon-btn" data-act="speak" data-code="${code}" data-text="${App.esc(e[0])}">🔊</button></div><div class="ltrans">${App.esc(e[1])}</div></div>`).join("")}
    <div style="margin-top:10px"><button class="btn primary sm" id="vbDrill">🎯 تمرين مطابقة سريع</button></div>
    <div id="vbDrillArea" style="margin-top:10px"></div>
  </div>`;
  document.getElementById("vbList").addEventListener("click", e => {
    const b = e.target.closest(".chip"); if (!b) return;
    vb.verb = g.list.find(x => x.id === b.dataset.v); renderVerbs();
  });
  document.getElementById("vbDrill").addEventListener("click", () => {
    App.track("grammar", 1);
    const rows = (v.pres || v.forms);
    const row = rows[Math.floor(Math.random() * rows.length)];
    const others = rows.filter(r => r !== row).sort(() => Math.random() - .5).slice(0, 2);
    const opts = [row, ...others].sort(() => Math.random() - .5);
    document.getElementById("vbDrillArea").innerHTML = `
      <div class="tr-prompt">ما صيغة «<b>${row[0]}</b>» مع <b>${v.inf}</b>؟</div>
      <div id="vbOpts">${opts.map(o => `<button class="quiz-opt" data-ok="${o === row ? 1 : 0}">${App.esc(o[1])}</button>`).join("")}</div>
      <div id="vbFb"></div>`;
    document.getElementById("vbOpts").addEventListener("click", e => {
      const b = e.target.closest(".quiz-opt"); if (!b) return;
      const ok = b.dataset.ok === "1";
      if (!ok) App.addMistake({ q: `تصريف ${v.inf} مع ${row[0]}`, correct: row[1], lang: vb.lang, source: "⚡ أفعال", why: v.note });
      App.track("grammar", 1);
      document.querySelectorAll("#vbOpts .quiz-opt").forEach(x => {
        if (x.dataset.ok === "1") x.classList.add("right"); else if (x === b) x.classList.add("wrong");
      });
      document.getElementById("vbFb").innerHTML = `<div class="feedback ${ok ? "f3" : "f1"}"><b class="t">${ok ? "🎉 صحيح!" : "❌ الصحيح: " + row[1]}</b></div>`;
    });
  });
}
