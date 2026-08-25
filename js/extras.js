/* ===== وضع النجاة + القصص + أخطائي + صفحة التقدم (مهارات/سلسلة/إنجازات/هدف يومي) ===== */
"use strict";

(function () {
  const esc = App.esc, $ = App.$, toast = App.toast;

  /* ============ تتبع النشاط والمهارات ============ */
  const KINDS = { vocab: "📚 مفردات", cards: "🃏 مراجعة", quiz: "📝 اختبار", conversation: "🎭 محادثة", listening: "🎧 استماع", reading: "📖 قراءة", test: "🎯 اختبار مستوى" };
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
    $("#view").innerHTML = `
    <div class="section-title">📈 تقدمي <span class="line"></span></div>
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
