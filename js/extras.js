App.slowMode = false; /* وضع الصوت البطيء العام (§18) — يُضبط من أزرار الحوار */
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

  /* ---------- محرك «ماذا أتعلم الآن؟» — قواعد معلنة ---------- */
  function nextSalesChapter() {
    for (const id of Engine.SALES_PATH) {
      const c = DB.chapters.find(x => x.id === id);
      if (!c) continue;
      const ph = c.phrases || [];
      const done = ph.filter(p => App.learned.has(p.id)).length;
      if (!ph.length || done < ph.length) return { ch: c, done, total: ph.length };
    }
    return null;
  }
  App.nextBest = function () {
    const b = App.store.get("leitner", {}), now = Date.now();
    const due = Engine.dueCount(b, now);
    const mis = App.store.get("mistakes", []).length;
    const doneN = App.learned.size;
    const sale = nextSalesChapter();
    if (mis >= 5) return { icon: "❌", title: "راجع أخطائك أولًا", desc: mis + " أخطاء متراكمة — المراجعة المبنية على الخطأ أعلى مردود الآن.", href: "#/mistakes" };
    if (due >= 8) return { icon: "🃏", title: "لديك " + due + " بطاقة مستحقة", desc: "المراجعة المجدولة قبل أي جديد — هكذا يثبت القديم.", href: "#/cards" };
    if (doneN < 50) return { icon: "⭐", title: "أكمل أهم 50 جملة", desc: "أنجزت " + doneN + " من 50 — عمود الأساس للسوق.", href: "#/bank" };
    if (due > 0) return { icon: "🃏", title: "بدّد " + due + " بطاقة مستحقة", desc: "ثم افتح تدريبًا جديدًا.", href: "#/cards" };
    if (sale) return { icon: "🛍️", title: sale.ch.title, desc: "الفصل التالي في مسار البيع (" + sale.done + "/" + sale.total + ").", href: "#/chapter/" + sale.ch.id };
    return { icon: "🎭", title: "تدرّب كالبائع", desc: "بطاقاتك منضبطة — الوقت الأمثل لمحادثة تفاعلية.", href: "#/train" };
  };

  App.Views.today = function () {
    const b = App.store.get("leitner", {});
    const due = Engine.dueCount(b);
    const mis = App.store.get("mistakes", []).length;
    const sale = nextSalesChapter();
    const bank = App.bankSorted();
    const done50 = bank.slice(0, 50).filter(p => App.learned.has(p.id)).length;
    const sit = (DB.situations || []).find(s => (s.kind === "situation" || s.kind === "bargain") && (s.chapters || []).some(id => sale && sale.ch.id === id))
      || (DB.situations || []).find(s => s.kind !== "daily") || (DB.situations || [])[0];
    const trainer = (DB.trainers || [])[0];
    const a = App.store.get("activity", {});
    const today = Engine.localDayKey();
    const t = a[today] || { n: 0 };
    const goal = (App.store.get("settings", { lang: "both" }).goal) || 25;
    $("#view").innerHTML = `
    <div class="hero">
      <h1>☀️ ماذا أتعلم اليوم؟</h1>
      <p>جلسة واحدة مرتّبة: ثبّت القديم، راجع أخطاءك، ثم جملة بيع جديدة. مجاني بالكامل — بلا اشتراك.</p>
    </div>
    <div class="box">
      <h3>🎯 هدف اليوم</h3>
      <div class="progress"><i style="width:${Math.min(100, Math.round(t.n / goal * 100))}%"></i></div>
      <p style="margin-top:8px">أنجزت <b>${t.n}</b> من <b>${goal}</b> نشاطًا.</p>
    </div>
    <div class="section-title">الخطوات بالترتيب <span class="line"></span></div>
    <div class="grid-cards">
      <a class="module-card ${mis ? "hi" : ""}" href="#/mistakes"><div class="ic">❌</div><h3>1) أخطائي</h3><p>${mis ? mis + " خطأ بانتظار المراجعة — ابدأ هنا." : "لا أخطاء معلّقة. ممتاز."}</p></a>
      <a class="module-card ${due ? "hi" : ""}" href="#/cards"><div class="ic">🃏</div><h3>2) بطاقات مستحقة</h3><p>${due ? due + " بطاقة حان وقتها." : "لا بطاقات مستحقة الآن."}</p></a>
      <a class="module-card" href="#/bank"><div class="ic">⭐</div><h3>3) أهم 50 جملة</h3><p>أتممت ${done50}/50 من عمود السوق.</p></a>
      <a class="module-card hi" href="${sale ? "#/chapter/" + sale.ch.id : "#/sales"}"><div class="ic">🛍️</div><h3>4) مسار البيع</h3><p>${sale ? esc(sale.ch.title) + " — " + sale.done + "/" + sale.total : "أنهيت مسار البيع — راجع المواقف."}</p></a>
      ${sit ? `<a class="module-card" href="#/situation/${sit.id}"><div class="ic">🎬</div><h3>5) حوار اليوم</h3><p>${esc(sit.title)} — اقرأه ثم أعد تمثيله بائعًا أو زبونًا.</p></a>` : ""}
      ${trainer ? `<a class="module-card" href="#/trainer/${trainer.id}"><div class="ic">🎭</div><h3>6) تدريب تفاعلي</h3><p>${esc(trainer.title)}</p></a>` : ""}
      <a class="module-card" href="#/write"><div class="ic">✍️</div><h3>7) كتابة</h3><p>رتّب أو اكتب — بالإندونيسية أو التركية.</p></a>
      <a class="module-card" href="#/listen"><div class="ic">🎧</div><h3>8) استماع</h3><p>اسمع واختر أو اكتب — باللغتين.</p></a>
    </div>
    <div class="callout tip">القاعدة: لا تفتح فصلًا جديدًا وفي جعبتك 8 بطاقات مستحقة أو 5 أخطاء بلا مراجعة.</div>`;
  };


  /* ============ تتبع النشاط والمهارات ============ */
  const KINDS = { vocab: "📚 مفردات", cards: "🃏 مراجعة", quiz: "📝 اختبار", grammar: "🧩 قواعد", conversation: "🎭 محادثة", listening: "🎧 استماع", reading: "📖 قراءة", writing: "✍️ كتابة", test: "🎯 اختبار مستوى" };
  App.track = function (kind, n) {
    const d = Engine.localDayKey();
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
    const today = Engine.localDayKey();
    const goal = (App.store.get("settings", { lang: "both" }).goal) || 25;
    const t = a[today] || { n: 0, k: {} };
    let streak = 0; const d = new Date();
    for (;;) { const key = Engine.localDayKey(d); if (a[key] && a[key].n > 0) { streak++; d.setDate(d.getDate() - 1); } else break; }
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
      <p class="mini-note">أعداد أنشطة حقيقية على جهازك — لا تقديرات مزيفة. الكتابة والاستماع متاحتان بالإندونيسية والتركية.</p>
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
  function parseDrillArg(arg, fallbackLang, fallbackMode) {
    const parts = String(arg || "").split("/").filter(Boolean);
    let lang = fallbackLang || "id", mode = fallbackMode || "order";
    parts.forEach(p => {
      if (p === "id" || p === "tr") lang = p;
      if (p === "type" || p === "order" || p === "choose") mode = p === "choose" ? "choose" : p;
    });
    return { lang, mode };
  }
  App.Views.write = function (modeArg) {
    const parsed = parseDrillArg(modeArg, (wr && wr.lang) || "id", (wr && wr.mode) || "order");
    if (!wr || wr.done || wr.lang !== parsed.lang || wr.mode !== parsed.mode) {
      const pool = Engine.shuffle(App.bankSorted().filter(p => Engine.targetText(p, parsed.lang).split(/\s+/).filter(Boolean).length >= 3)).slice(0, 10);
      wr = { pool, idx: 0, mode: parsed.mode, lang: parsed.lang, score: 0, done: false };
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
        <div style="margin-top:10px"><a class="btn primary sm" href="#/write/${wr.lang}/${wr.mode}">🔁 جلسة جديدة</a></div>
      </div>`;
      return;
    }
    const p = wr.pool[wr.idx];
    const target = Engine.targetText(p, wr.lang);
    const words = Engine.shuffle(target.split(/\s+/).filter(Boolean));
    $("#view").innerHTML = `
    <div class="crumbs"><a href="#/today">☀️ اليوم</a> ‹ ✍️ تمرين الكتابة</div>
    <div class="chips">
      <a class="chip ${wr.lang === "id" ? "on" : ""}" href="#/write/id/${wr.mode}">🇮🇩 إندونيسية</a>
      <a class="chip ${wr.lang === "tr" ? "on" : ""}" href="#/write/tr/${wr.mode}">🇹🇷 تركية</a>
      <a class="chip ${wr.mode === "order" ? "on" : ""}" href="#/write/${wr.lang}/order">🧩 رتب الجملة</a>
      <a class="chip ${wr.mode === "type" ? "on" : ""}" href="#/write/${wr.lang}/type">⌨️ اكتبها من الذاكرة</a>
    </div>
    <div class="box">
      <div class="tr-progress">${wr.pool.map((_, k) => `<i class="${k < wr.idx ? "done" : k === wr.idx ? "now" : ""}"></i>`).join("")}</div>
      <div class="tr-prompt" style="text-align:center;font-size:1.15rem;font-weight:800">${esc(p.a)}</div>
      <p class="mini-note" style="text-align:center">رتّب الجملة بـ${wr.lang === "tr" ? "التركية" : "الإندونيسية"} (انقر الكلمات بالترتيب):</p>
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
      const targetN = Engine.targetText(p, wr.lang).replace(/[""\.,!?]/g, "").replace(/\s+/g, " ").trim();
      const mine = built.join(" ").replace(/[""\.,!?]/g, "").replace(/\s+/g, " ").trim();
      const okA = App.norm(mine) === App.norm(targetN);
      if (okA) { wr.score++; App.langTrack(wr.lang, p.id); }
      else App.addMistake({ q: "رتّب: " + p.a, correct: Engine.targetText(p, wr.lang), lang: wr.lang, source: "✍️ كتابة", why: p.n || "" });
      App.track("writing", 1);
      const shown = Engine.targetText(p, wr.lang);
      const ph = wr.lang === "tr" ? p.tt : p.it;
      document.getElementById("wrFb").innerHTML = `
        <div class="feedback ${okA ? "f3" : "f1"}"><b class="t">${okA ? "🎉 ترتيب صحيح!" : "❌ الترتيب الصحيح:"}</b>
        <div class="ltext">${esc(shown)}</div>${ph ? `<div class="ltrans">النطق: ${esc(ph)}</div>` : ""}</div>
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
        <div style="margin-top:10px"><a class="btn primary sm" href="#/write/${wr.lang}/type">🔁 جلسة جديدة</a></div>
      </div>`;
      return;
    }
    const p = wr.pool[wr.idx];
    App.$("#view").innerHTML = `
    <div class="crumbs"><a href="#/today">☀️ اليوم</a> ‹ ⌨️ كتابة من الذاكرة</div>
    <div class="chips">
      <a class="chip ${wr.lang === "id" ? "on" : ""}" href="#/write/id/type">🇮🇩 إندونيسية</a>
      <a class="chip ${wr.lang === "tr" ? "on" : ""}" href="#/write/tr/type">🇹🇷 تركية</a>
      <a class="chip" href="#/write/${wr.lang}/order">🧩 رتب الجملة</a>
      <a class="chip on" href="#/write/${wr.lang}/type">⌨️ اكتبها من الذاكرة</a>
    </div>
    <div class="box">
      <div class="tr-progress">${wr.pool.map((_, k) => `<i class="${k < wr.idx ? "done" : k === wr.idx ? "now" : ""}"></i>`).join("")}</div>
      <div class="tr-prompt" style="text-align:center;font-size:1.15rem;font-weight:800">${App.esc(p.a)}</div>
      <p class="mini-note" style="text-align:center">اكتبها بـ${wr.lang === "tr" ? "التركية" : "الإندونيسية"} كما تتذكرها:</p>
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
      const txt = Engine.targetText(p, wr.lang);
      const keys = txt.split(" ").filter(w => w.length > 3).slice(0, 4);
      const g = App.Trainer.grade(val, { accept: wr.lang === "tr" ? { t: [txt] } : { i: [txt] }, keysId: wr.lang === "id" ? keys : [], keysTr: wr.lang === "tr" ? keys : [] }, wr.lang);
      const ok = g >= 2;
      if (g === 3) { wr.score++; App.langTrack(wr.lang, p.id); }
      else if (!ok) App.addMistake({ q: "اكتب: " + p.a, correct: txt, lang: wr.lang, source: "⌨️ كتابة حرة", why: p.n || "" });
      App.track("writing", 1);
      document.getElementById("wrTypeFb").innerHTML = `
        <div class="feedback f${g}"><b class="t">${g === 3 ? "🎉 مطابقة تامة!" : g === 2 ? "👍 قريب جدًا — مع أخطاء صغيرة" : g === 1 ? "🛠️ نصف الطريق — قارن" : "❌ النموذج الصحيح:"}</b>
        <div class="ltext">${App.esc(txt)}</div>
        <div class="ltrans">نطقك: ${App.esc(val)}</div>
        ${(wr.lang === "tr" ? p.tt : p.it) ? `<div class="ltrans">النطق الصحيح: ${App.esc(wr.lang === "tr" ? p.tt : p.it)}</div>` : ""}</div>
        <div style="text-align:center;margin-top:8px"><button class="btn primary sm" id="wrTypeNext">${wr.idx + 1 < wr.pool.length ? "التالي ←" : "إنهاء 🏁"}</button></div>`;
      document.getElementById("wrTypeNext").addEventListener("click", () => { wr.idx++; renderWriteType(); });
    };
    document.getElementById("wrTypeGo").addEventListener("click", check);
    inp.addEventListener("keydown", e => { if (e.key === "Enter") check(); });
  }

  /* ============ 🎧 تمارين الاستماع ============ */
  let ls = null;
  App.Views.listen = function (tab) {
    const parsed = parseDrillArg(tab, (ls && ls.lang) || "id", tab && String(tab).includes("type") ? "type" : "choose");
    if (parsed.mode === "type") { App.Views.listenType(parsed.lang); return; }
    if (!ls || ls.done || ls.lang !== parsed.lang || ls.mode !== "choose") {
      const pool = Engine.shuffle(App.bankSorted().filter(p => Engine.hasLangText(p, parsed.lang)).slice(0, 300)).slice(0, 10);
      ls = { pool, idx: 0, mode: "choose", lang: parsed.lang, score: 0, done: false };
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
        <div class="callout tip">إن لم تسمع الصوت: ثبّت حزمة أصوات اللغة في جهازك أو استعن بالنطق المكتوب.</div>
        <div style="margin-top:10px"><a class="btn primary sm" href="#/listen/${ls.lang}">🔁 جلسة جديدة</a></div>
      </div>`;
      return;
    }
    const p = ls.pool[ls.idx];
    const txt = Engine.targetText(p, ls.lang);
    const code = ls.lang === "tr" ? "tr-TR" : "id-ID";
    const others = Engine.shuffle(App.allPhrases().filter(x => x.id !== p.id && Engine.hasLangText(x, ls.lang))).slice(0, 3);
    const opts = Engine.shuffle([p, ...others]);
    App.$("#view").innerHTML = `
    <div class="crumbs"><a href="#/today">☀️ اليوم</a> ‹ 🎧 تمرين الاستماع</div>
    <div class="chips">
      <a class="chip ${ls.lang === "id" ? "on" : ""}" href="#/listen/id">🇮🇩 إندونيسية</a>
      <a class="chip ${ls.lang === "tr" ? "on" : ""}" href="#/listen/tr">🇹🇷 تركية</a>
      <button class="chip on">اسمع واختر المعنى</button>
      <a class="chip" href="#/listen/${ls.lang}/type">⌨️ اسمع واكتب</a>
    </div>
    <div class="box">
      <div class="tr-progress">${ls.pool.map((_, k) => `<i class="${k < ls.idx ? "done" : k === ls.idx ? "now" : ""}"></i>`).join("")}</div>
      <div style="text-align:center;margin:12px 0">
        <button class="icon-btn" style="width:56px;height:56px;font-size:1.6rem" data-act="speak" data-code="${code}" data-text="${App.esc(txt)}">🔊</button>
        <button class="icon-btn" style="width:44px;height:44px;font-size:1.1rem" data-act="speak" data-code="${code}" data-text="${App.esc(txt)}" data-rate="0.65" title="بطيء">🐢</button>
      </div>
      <p class="mini-note" style="text-align:center">اضغط 🔊 واسمع، ثم اختر المعنى العربي الصحيح (أعد التشغيل بلا حدود)</p>
      <div id="lsOpts">${opts.map(o => `<button class="quiz-opt" data-ok="${o.id === p.id ? 1 : 0}" data-ar="${App.esc(o.a)}">${App.esc(o.a)}</button>`).join("")}</div>
      <div id="lsFb"></div>
    </div>`;
    document.getElementById("lsOpts").addEventListener("click", e => {
      const b = e.target.closest(".quiz-opt"); if (!b || b.disabled) return;
      const ok = b.dataset.ok === "1";
      App.track("listening", 1);
      if (ok) { ls.score++; App.langTrack(ls.lang, p.id); }
      else App.addMistake({ q: "🎧 سمعتَ: " + txt, correct: p.a, lang: ls.lang, source: "🎧 استماع", why: "أعد الاستماع بالسرعة البطيئة 🐢" });
      document.querySelectorAll("#lsOpts .quiz-opt").forEach(x => {
        if (x.dataset.ok === "1") x.classList.add("right"); else if (x === b) x.classList.add("wrong");
        x.disabled = true;
      });
      document.getElementById("lsFb").innerHTML = `
        <div class="feedback ${ok ? "f3" : "f1"}"><b class="t">${ok ? "🎉 سمعك حاد!" : "❌ الصوت كان يعني:"}</b>
        <div class="ltext">${App.esc(txt)}</div><div class="ltrans">النطق: ${App.esc((ls.lang === "tr" ? p.tt : p.it) || "")}</div></div>
        <div style="text-align:center;margin-top:8px"><button class="btn primary sm" id="lsNext">${ls.idx + 1 < ls.pool.length ? "التالي ←" : "إنهاء 🏁"}</button></div>`;
      document.getElementById("lsNext").addEventListener("click", () => { ls.idx++; renderListen(); });
    });
  }
  /* ⌨️ اسمع واكتب */
  let lst = null;
  App.Views.listenType = function (langArg) {
    const lang = (langArg === "tr" || langArg === "id") ? langArg : ((lst && lst.lang) || "id");
    if (!lst || lst.done || lst.lang !== lang) {
      const pool = Engine.shuffle(App.bankSorted().filter(p => Engine.targetText(p, lang).split(/\s+/).filter(Boolean).length >= 2)).slice(0, 8);
      lst = { pool, idx: 0, score: 0, done: false, lang };
    }
    if (lst.idx >= lst.pool.length) {
      App.track("listening", lst.score); lst.done = true;
      App.$("#view").innerHTML = `<div class="box" style="text-align:center;padding:30px"><div style="font-size:2.6rem">🎧⌨️</div><h3>أنهيت «اسمع واكتب»: ${lst.score}/${lst.pool.length}</h3><div style="margin-top:10px"><a class="btn primary sm" href="#/listen/${lst.lang}/type">🔁 جلسة جديدة</a> <a class="btn ghost sm" href="#/listen/${lst.lang}">🎧 اسمع واختر</a></div></div>`;
      return;
    }
    const p = lst.pool[lst.idx];
    const txt = Engine.targetText(p, lst.lang);
    const code = lst.lang === "tr" ? "tr-TR" : "id-ID";
    App.$("#view").innerHTML = `
    <div class="crumbs"><a href="#/listen/${lst.lang}">🎧 الاستماع</a> ‹ ⌨️ اسمع واكتب</div>
    <div class="chips">
      <a class="chip ${lst.lang === "id" ? "on" : ""}" href="#/listen/id/type">🇮🇩 إندونيسية</a>
      <a class="chip ${lst.lang === "tr" ? "on" : ""}" href="#/listen/tr/type">🇹🇷 تركية</a>
    </div>
    <div class="box">
      <div class="tr-progress">${lst.pool.map((_, k) => `<i class="${k < lst.idx ? "done" : k === lst.idx ? "now" : ""}"></i>`).join("")}</div>
      <div style="text-align:center;margin:12px 0">
        <button class="icon-btn" style="width:56px;height:56px;font-size:1.6rem" data-act="speak" data-code="${code}" data-text="${App.esc(txt)}">🔊</button>
        <button class="icon-btn" style="width:44px;height:44px" data-act="speak" data-code="${code}" data-text="${App.esc(txt)}" data-rate="0.65">🐢</button>
      </div>
      <p class="mini-note" style="text-align:center">اكتب ما سمعتَه بـ${lst.lang === "tr" ? "التركية" : "الإندونيسية"} (الترقيم لا يُحسب):</p>
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
      const keys = txt.split(" ").filter(w => w.length > 3).slice(0, 4);
      const g = App.Trainer.grade(val, { accept: lst.lang === "tr" ? { t: [txt] } : { i: [txt] }, keysId: lst.lang === "id" ? keys : [], keysTr: lst.lang === "tr" ? keys : [] }, lst.lang);
      if (g === 3) { lst.score++; App.langTrack(lst.lang, p.id); }
      else App.addMistake({ q: "🎧 اكتب ما سمعت", correct: txt, lang: lst.lang, source: "🎧 اسمع واكتب", why: p.n || "" });
      App.track("listening", 1);
      document.getElementById("lsTypeFb").innerHTML = `
        <div class="feedback f${g}"><b class="t">${g === 3 ? "🎉 كتابة مطابقة!" : g === 2 ? "👍 شبه مطابق" : "❌ الصواب:"}</b>
        <div class="ltext">${App.esc(txt)}</div><div class="ltrans">معناه: ${App.esc(p.a)} · النطق: ${App.esc((lst.lang === "tr" ? p.tt : p.it) || "")}</div></div>
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
    /* لا نشاط وهمي عند مجرد فتح الصفحة */
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
      <div class="ltext" id="storyText" style="font-size:1.12rem;line-height:2.2;background:#f6f9fc;border-radius:12px;padding:14px">${esc(s.text).split(/(\s+)/).map(w => /[A-Za-z\u00c7\u00e7\u011e\u011f\u0130\u0131\u00d6\u00f6\u015e\u015f\u00dc\u00fc-]/.test(w) ? `<span class="wtap" data-w="${w.replace(/[^A-Za-z\u00c7\u00e7\u011e\u011f\u0130\u0131\u00d6\u00f6\u015e\u015f\u00dc\u00fc-]/g, "")}">${w}</span>` : w).join("")}</div>
      <p class="mini-note" style="margin-top:6px">💡 المس أي كلمة في النص لترى معناها من القاموس (§29)</p>
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
    // ===== نقر الكلمات → القاموس (§29) =====
    const st = document.getElementById("storyText");
    if (st) st.addEventListener("click", e => {
      const w = e.target.closest(".wtap"); if (!w) return;
      const raw = w.dataset.w.toLowerCase();
      const code = s.lang === "id" ? "id-ID" : "tr-TR";
      const dict = DB.words[s.lang] || [];
      const hit = dict.find(x => x.w.toLowerCase() === raw) || (raw.length > 3 ? dict.find(x => x.w.toLowerCase().startsWith(raw)) : null);
      const old = document.getElementById("dictPop"); if (old) old.remove();
      const pop = document.createElement("div");
      pop.id = "dictPop";
      pop.innerHTML = hit ? `
        <b class="ltr">${App.esc(hit.w)}</b> <button class="icon-btn" style="width:26px;height:26px;font-size:.8rem" data-act="speak" data-code="${code}" data-text="${App.esc(hit.w)}">🔊</button>
        <div>${App.esc(hit.a)}</div>
        <div class="mini-note">${App.esc(hit.p)} · ${hit.l} · ${App.esc(hit.s)}</div>
        <div class="mini-note ltr">${App.esc(hit.x[0])} — ${App.esc(hit.x[1])}</div>` :
        `<b class="ltr">${App.esc(raw)}</b>
         <div class="mini-note">ليست في القاموس الأساسي — <button class="icon-btn" style="width:26px;height:26px;font-size:.8rem" data-act="speak" data-code="${code}" data-text="${App.esc(raw)}">🔊 اسمعها</button></div>
         <div class="mini-note"><a href="#/dict">افتح القاموس للبحث ↗</a></div>`;
      document.body.appendChild(pop);
      const r = w.getBoundingClientRect();
      pop.style.top = Math.max(10, Math.min(r.bottom + 8, window.innerHeight - 180)) + "px";
      pop.style.left = Math.max(10, Math.min(r.left, window.innerWidth - 330)) + "px";
      setTimeout(() => document.addEventListener("click", function close(ev) { if (!pop.contains(ev.target)) { pop.remove(); document.removeEventListener("click", close); } }), 50);
    });
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

/* ============ 📖 القاموس ============ */
let dc = { lang: "id", q: "", lv: "all" };
App.Views.dict = function () {
  renderDict();
  function list() {
    const nq = App.norm(dc.q);
    return (DB.words[dc.lang] || []).filter(w =>
      (dc.lv === "all" || w.l === dc.lv) &&
      (!nq || App.norm(w.w).includes(nq) || App.norm(w.a).includes(nq) || App.norm(w.p).includes(nq)));
  }
  function renderDict() {
    const lvs = [...new Set((DB.words[dc.lang] || []).map(w => w.l))].sort();
    const rows = list();
    App.$("#view").innerHTML = `
    <div class="section-title">📖 القاموس الأساسي — كلمات الحياة والسوق <span class="line"></span></div>
    <div class="callout tip">${(DB.words.id||[]).length + (DB.words.tr||[]).length} كلمة مختارة بأعلى معايير الاستعمال اليومي: لكل كلمة <b>نطقها بالعربية + نوعها + مستواها + مثال حي بصوته</b>. الكلمات مقصودة العدد — كلمة تعيش معك خير من عشر تُنسى (قاعدة المواصفة §76).</div>
    <div class="chips">
      <a class="chip ${dc.lang === "id" ? "on" : ""}" href="#/dict" data-l="id">🇮🇩 الإندونيسية</a>
      <a class="chip ${dc.lang === "tr" ? "on" : ""}" href="#/dict" data-l="tr">🇹🇷 التركية</a>
    </div>
    <div class="search-wrap" style="max-width:420px;margin:10px 0">
      <input id="dcQ" type="search" placeholder="ابحث بالعربية أو اللغة الهدف…" value="${App.esc(dc.q)}">
    </div>
    <div class="chips" id="dcLv">
      <button class="chip ${dc.lv === "all" ? "on" : ""}" data-lv="all">الكل</button>
      ${lvs.map(l => `<button class="chip ${dc.lv === l ? "on" : ""}" data-lv="${l}">${l}</button>`).join("")}
    </div>
    <div class="tbl-wrap"><table class="tbl">
      <thead><tr><th>الكلمة</th><th>النطق</th><th>المعنى</th><th>النوع</th><th>المستوى</th><th>مثال حي</th></tr></thead>
      <tbody>${rows.map(w => `
        <tr>
          <td class="ltr"><b>${App.esc(w.w)}</b> <button class="icon-btn" style="width:26px;height:26px;font-size:.8rem" data-act="speak" data-code="${dc.lang === "id" ? "id-ID" : "tr-TR"}" data-text="${App.esc(w.w)}">🔊</button></td>
          <td>${App.esc(w.p)}</td><td>${App.esc(w.a)}</td><td><span class="tag">${App.esc(w.s)}</span></td><td><span class="tag">${w.l}</span></td>
          <td class="ltr">${App.esc(w.x[0])} <button class="icon-btn" style="width:26px;height:26px;font-size:.8rem" data-act="speak" data-code="${dc.lang === "id" ? "id-ID" : "tr-TR"}" data-text="${App.esc(w.x[0])}">🔊</button><div class="mini-note">${App.esc(w.x[1])}</div></td>
        </tr>`).join("")}</tbody>
    </table></div>
    <p class="mini-note">النتائج: ${rows.length} — الكلمات هنا تظهر أيضًا تلقائيًا في البحث العام للواجهة ضمن العبارات.</p>`;
    document.getElementById("dcQ").addEventListener("input", e => { dc.q = e.target.value; renderDict(); document.getElementById("dcQ").focus(); const v = document.getElementById("dcQ"); v.setSelectionRange(v.value.length, v.value.length); });
    document.getElementById("dcLv").addEventListener("click", e => { const b = e.target.closest(".chip"); if (!b) return; dc.lv = b.dataset.lv; renderDict(); });
    document.querySelector('.chips [data-l="id"], .chips [data-l="tr"]');
    document.querySelectorAll('.chips a[data-l]').forEach(a => a.addEventListener("click", () => { dc.lang = a.dataset.l; dc.q = ""; }));
  }
};

/* ============ 📦 حزم المحتوى: تصدير والتحقق (§47–48، §67) ============ */
App.Views.packs = function () {
  App.$("#view").innerHTML = `
  <div class="section-title">📦 حزم المحتوى — تصدير والتحقق <span class="line"></span></div>
  <div class="callout tip">المحتوى كله مفتوح وقابل للنقل: صدّره كحزمة JSON موقّعة بالميتاداتا (لغة/مستوى/إصدار/مخطط)، ثم تحقق من أي حزمة (حتى تعديلاتك المستقبلية) بأداة الفحص المدمجة قبل دمجها. هذا جوهر «حزم المحتوى المُصدَّرة» في المواصفة §47.</div>
  <div class="box">
    <h3>⬇️ تصدير الحزمة الحالية</h3>
    <p class="mini-note">تُصدَّر كل البيانات (فصول، مواقف، قصص، قواعد، أفعال، قاموس، تحليلات، تدريب) مع ميتاداتا الحزمة وسكاشن للتقدم غير مشمولة (تقدمك يبقى بجهازك).</p>
    <button class="btn primary sm" id="pkExport">📦 نفّذ التصدير</button>
    <div id="pkInfo" class="mini-note" style="margin-top:8px"></div>
  </div>
  <div class="box">
    <h3>✅ أداة التحقق من حزمة (Upload & Validate)</h3>
    <p class="mini-note">تفحص: البنية، المعرفات الفريدة، الحقول الإلزامية، الإحصاءات — وتعطيك تقريرًا واضحًا (§67: أخطاء مفيدة لا انهيارات).</p>
    <input type="file" id="pkFile" accept=".json" style="margin:8px 0">
    <div id="pkReport"></div>
  </div>`;
  document.getElementById("pkExport").addEventListener("click", () => {
    const pack = {
      contentPack: { id: "gl-full-" + new Date().toISOString().slice(0, 10), name: "سوق اللغة — الحزمة الكاملة", languages: ["id", "tr"], version: 1, schemaVersion: 1, exportedAt: new Date().toISOString(), source: "original", license: "project-proprietary" },
      stats: { chapters: DB.chapters.length, phrases: App.allPhrases().length, situations: DB.situations.length, stories: (DB.stories || []).length, grammar: (DB.grammar || []).reduce((a, g) => a + g.rules.length, 0), words: Object.values(DB.words || {}).reduce((a, l) => a + l.length, 0), culture: DB.culture.length, analyses: DB.analyses.length, trainers: DB.trainers.length },
      content: { chapters: DB.chapters, situations: DB.situations, stories: DB.stories, grammar: DB.grammar, verbs: DB.verbs, words: DB.words, culture: DB.culture, analyses: DB.analyses, trainers: DB.trainers, basics: DB.basics }
    };
    try {
      const blob = new Blob([JSON.stringify(pack, null, 1)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = (window.URL && URL.createObjectURL) ? URL.createObjectURL(blob) : "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pack));
      a.download = pack.contentPack.id + ".json"; a.click();
    } catch (e) { App.toast("تعذّر التصدير في هذه البيئة — جرّب متصفحًا آخر"); }
    document.getElementById("pkInfo").textContent = "تم التصدير ✅ — " + pack.contentPack.id + " (" + Object.keys(pack.content).length + " أقسام محتوى)";
    App.toast("تم تصدير الحزمة ⬇️");
  });
  // ===== تقرير جودة المحتوى الحي (§45) =====
  (function qualityReport(){
    const ph = App.allPhrases();
    const cov = (list, fn) => Math.round(list.filter(fn).length / Math.max(list.length,1) * 100);
    const missingTranslit = ph.filter(p => !p.it || !p.tt).slice(0, 30);
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
      <h3>🔬 تقرير جودة المحتوى الحي</h3>
      <div class="kv" style="grid-template-columns:170px 1fr">
        <b>إجمالي العبارات</b><span>${ph.length}</span>
        <b>تغطية النطق العربي (it/tt)</b><span>${cov(ph, p => p.it && p.tt)}%</span>
        <b>تغطية «متى تستخدمها»</b><span>${cov(ph, p => p.w)}%</span>
        <b>تغطية «لماذا طبيعية»</b><span>${cov(ph, p => p.n)}%</span>
        <b>توزيع الرسمية 1/2/3/4</b><span>${[1,2,3,4].map(l => ph.filter(p=>p.lv===l).length).join(" / ")}</span>
        <b>توزيع الأولوية 1–5</b><span>${[1,2,3,4,5].map(l => ph.filter(p=>p.p===l).length).join(" / ")}</span>
        <b>مقالات ثقافة / تحليلات / حوارات</b><span>${DB.culture.length} / ${DB.analyses.length} / ${DB.situations.length}</span>
        <b>حالة المحتوى (status)</b><span>reviewed — محتوى أصلي 100% كُتب وراجِع للمشروع (license: project-proprietary، contentVersion 2)</span>
      </div>
      ${missingTranslit.length ? `<details class="box"><summary>⚠️ عبارات بلا نطق موثق (${missingTranslit.length}) — قائمة المراجعة</summary><div class="dbody mini-note">${missingTranslit.map(p => App.esc(p.id + " · " + p.a)).join("<br>")}</div></details>` : ""}`;
    App.$("#view").appendChild(box);
  })();

  document.getElementById("pkFile").addEventListener("change", e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = () => {
      const rep = (ok, msg) => document.getElementById("pkReport").innerHTML = `<div class="feedback ${ok ? "f3" : "f1"}"><b class="t">${ok ? "✅ حزمة سليمة" : "❌ فشل التحقق"}</b>${msg}</div>`;
      try {
        const p = JSON.parse(r.result);
        const errs = [], warns = [], stats = [];
        if (!p.contentPack) errs.push("لا توجد contentPack بالميتاداتا (§47)");
        else {
          stats.push("الحزمة: " + (p.contentPack.id || "بلا معرف"));
          if (!p.contentPack.id) errs.push("contentPack بلا id");
          if (!p.contentPack.schemaVersion) warns.push("بلا schemaVersion — ستفشل الترقيات المستقبلية");
        }
        const c = p.content || {};
        const ids = new Set();
        const checkDup = (arr, label) => { (arr || []).forEach(x => { if (x.id) { if (ids.has(x.id)) errs.push("معرف مكرر: " + x.id); ids.add(x.id); } else errs.push(label + " فيه عنصر بلا id"); }); };
        checkDup(c.chapters, "الفصول"); checkDup(c.situations, "المواقف"); checkDup(c.stories, "القصص");
        (c.chapters || []).forEach(ch => (ch.phrases || []).forEach(ph => { if (!ph.a || !ph.i || !ph.t) errs.push("عبارة ناقصة الحقول في " + ch.id); }));
        stats.push("الفصول: " + (c.chapters || []).length + " · العبارات: " + ((c.chapters || []).reduce((a, x) => a + (x.phrases || []).length, 0)) + " · المواقف: " + (c.situations || []).length + " · القصص: " + (c.stories || []).length + " · القواعد: " + ((c.grammar || []).reduce((a, g) => a + (g.rules || []).length, 0)));
        rep(errs.length === 0, (errs.length ? "<div>⚠️ " + errs.slice(0, 8).join("<br>") + "</div>" : "") + (warns.length ? "<div class='mini-note'>" + warns.join("<br>") + "</div>" : "") + "<div class='mini-note'>" + stats.join("<br>") + "</div>");
      } catch (err) { rep(false, "<div>ملف غير صالح JSON: " + App.esc(err.message) + "</div>"); }
    };
    r.readAsText(f);
  });
};
