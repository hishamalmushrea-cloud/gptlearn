/* ===== التدريب التفاعلي: أنا البائع / أنا الزبون ===== */
"use strict";

(function () {
  const { esc, $, toast } = App;
  let filter = { role: "all", lang: "all" };

  /* ---------- قائمة السيناريوهات ---------- */
  App.Views.train = function () {
    const list = DB.trainers.filter(t =>
      (filter.role === "all" || t.role === filter.role) &&
      (filter.lang === "all" || t.lang === filter.lang));
    $("#view").innerHTML = `
    <div class="section-title">🎭 التدريب التفاعلي <span class="line"></span></div>
    <div class="callout tip">اختر دورك — <b>أنا البائع</b> أو <b>أنا الزبون</b> — ثم اكتب ردّك في اللغة الهدف. التطبيق يمثل الطرف الآخر ويقيّم ردّك بتقدير <b>صادق</b>: ممتاز / جيد / يحتاج تحسين — مع الإجابة الطبيعية التي يقولها المتحدث الأصلي فعلًا. لا درجات وهمية.</div>
    <div class="chips" id="roleFilter">
      <button class="chip ${filter.role === "all" ? "on" : ""}" data-r="all">الكل (${DB.trainers.length})</button>
      <button class="chip ${filter.role === "seller" ? "on" : ""}" data-r="seller">🧑‍💼 أنا البائع (${DB.trainers.filter(t => t.role === "seller").length})</button>
      <button class="chip ${filter.role === "customer" ? "on" : ""}" data-r="customer">🛒 أنا الزبون (${DB.trainers.filter(t => t.role === "customer").length})</button>
    </div>
    <div class="chips" id="langFilter">
      <button class="chip ${filter.lang === "all" ? "on" : ""}" data-l="all">كل اللغات</button>
      <button class="chip ${filter.lang === "id" ? "on" : ""}" data-l="id">🇮🇩 الإندونيسية</button>
      <button class="chip ${filter.lang === "tr" ? "on" : ""}" data-l="tr">🇹🇷 التركية</button>
    </div>
    <div class="grid-cards">
      ${list.map(t => `
        <a class="chapter-card" href="#/trainer/${t.id}">
          <h3>${t.role === "seller" ? "🧑‍💼 أنت البائع" : "🛒 أنت الزبون"} — ${esc(t.title)}</h3>
          <p>${esc(t.scenario)}</p>
          <span class="tag">${t.lang === "id" ? "🇮🇩 إندونيسي" : "🇹🇷 تركي"}</span>
          <span class="tag">${t.turns.length} جولات</span>
        </a>`).join("") || `<div class="empty"><div class="e">🎭</div>لا توجد سيناريوهات بهذا الفلتر</div>`}
    </div>
    <div class="box" style="margin-top:14px">
      <h3>🎬 أو تدرّب على حوار كامل من «المواقف»</h3>
      <p>كل حوار في <a href="#/situations">المواقف الكاملة</a> يمكن إعادة تمثيله بدور البائع أو الزبون وبأي من اللغتين — مباشرة من صفحة الحوار.</p>
    </div>`;
    $("#roleFilter").addEventListener("click", e => { const b = e.target.closest(".chip"); if (!b) return; filter.role = b.dataset.r; App.Views.train(); });
    $("#langFilter").addEventListener("click", e => { const b = e.target.closest(".chip"); if (!b) return; filter.lang = b.dataset.l; App.Views.train(); });
  };

  /* ---------- بناء جلسة تدريب ---------- */
  let session = null;

  function startSession(cfg) {
    session = { ...cfg, idx: 0, results: [] };
    renderTurn();
  }

  function feedbackHTML(g, turn) {
    const titles = {
      3: ["🎉 ممتاز — هذا ما يقوله المتحدث الأصلي فعلًا", "f3"],
      2: ["👍 جيد — مفهوم وطبيعي، مع تحسين بسيط", "f2"],
      1: ["🛠️ يحتاج تحسين — رسالتك وصلت بصعوبة أو ناقصة", "f1"],
      0: ["❌ بعيدة عن الطبيعي — احفظ الصيغة التالية", "f0"]
    };
    const [title, cls] = titles[g];
    return `<div class="feedback ${cls}">
      <b class="t">${title}</b>
      <div class="ltext">✅ الطبيعي: <b>${esc(turn.model)}</b></div>
      ${turn.modelT ? `<div class="ltrans">النطق: ${esc(turn.modelT)}</div>` : ""}
      ${turn.why ? `<div class="fb-why">💡 ${esc(turn.why)}</div>` : ""}
      <div style="margin-top:6px"><button class="icon-btn" data-act="speak" data-code="${session.lang === "id" ? "id-ID" : "tr-TR"}" data-text="${esc(turn.model)}">🔊</button></div>
    </div>`;
  }

  function renderTurn() {
    const { title, turns, lang, role, scenario } = session;
    const i = session.idx;
    if (i >= turns.length) { renderEnd(); return; }
    const turn = turns[i];
    const langName = lang === "id" ? "الإندونيسية 🇮🇩" : "التركية 🇹🇷";
    $("#view").innerHTML = `
    <div class="crumbs"><a href="#/train">🎭 التدريب</a> ‹ ${esc(title)}</div>
    <div class="box">
      <h3>${role === "seller" ? "🧑‍💼 أنت البائع" : "🛒 أنت الزبون"} — ${esc(title)}</h3>
      <p class="mini-note">${esc(scenario)}</p>
      <div class="tr-progress">${turns.map((_, k) => `<i class="${k < i ? "done" : k === i ? "now" : ""}"></i>`).join("")}</div>
      ${turn.c ? `
      <div class="bubble ${role === "seller" ? "C" : "S"}">
        <div class="who">${role === "seller" ? "🛒 الزبون يقول:" : "🧑‍💼 البائع يقول:"}</div>
        <div class="ar">${esc(turn.c.a)}</div>
        ${turn.c.i ? `<div class="lang-block id" style="margin:0"><div class="ltext">${esc(turn.c.i)}</div>${turn.c.it ? `<div class="ltrans">النطق: ${esc(turn.c.it)}</div>` : ""}</div>` : ""}
        ${turn.c.t ? `<div class="lang-block tr" style="margin:0"><div class="ltext">${esc(turn.c.t)}</div>${turn.c.tt ? `<div class="ltrans">النطق: ${esc(turn.c.tt)}</div>` : ""}</div>` : ""}
        <div style="margin-top:5px">
          ${turn.c.i ? `<button class="icon-btn" data-act="speak" data-code="id-ID" data-text="${esc(turn.c.i)}" title="اسمع">🔊</button>` : ""}
          ${turn.c.t ? `<button class="icon-btn" data-act="speak" data-code="tr-TR" data-text="${esc(turn.c.t)}" title="اسمع">🔊</button>` : ""}
        </div>
      </div>` : `<div class="tr-prompt">🎬 ${esc(turn.ask)}</div>`}
      <div class="tr-prompt" style="margin-top:10px"><b>ردّ أنت الآن بـ${langName}:</b> ${esc(turn.ask)}</div>
      <div class="tr-input">
        <input id="trAnswer" type="text" placeholder="اكتب ردّك هنا… (بال${langName})" autocomplete="off" dir="ltr">
        <button class="btn primary" id="trSend">أرسل ✓</button>
        <button class="btn ghost" id="trHint">💡 تلميح</button>
        <button class="btn ghost" id="trReveal">أظهر النموذج</button>
      </div>
      <div id="trFeedback">${session.lastFb || ""}</div>
      ${session.done ? `<div style="margin-top:10px"><button class="btn primary" id="trNext">${i + 1 < turns.length ? "التالي ←" : "إنهاء الجلسة 🏁"}</button></div>` : ""}
    </div>`;
    const inp = document.getElementById("trAnswer");
    if (inp) { inp.focus(); inp.addEventListener("keydown", e => { if (e.key === "Enter") grade(); }); }
    document.getElementById("trSend").addEventListener("click", grade);
    document.getElementById("trHint").addEventListener("click", () => {
      toast(turn.hint || "فكّر: ماذا يريح الزبون في هذه اللحظة؟");
    });
    document.getElementById("trReveal").addEventListener("click", () => {
      session.lastFb = feedbackHTML(0, turn); session.done = true; renderTurn();
    });
    if (document.getElementById("trNext")) document.getElementById("trNext").addEventListener("click", () => {
      session.idx++; session.done = false; session.lastFb = ""; renderTurn();
    });

    function grade() {
      if (session.done) return;
      const val = (inp.value || "").trim();
      if (!val) { toast("اكتب ردّك أولًا ✍️"); return; }
      const g = App.Trainer.grade(val, turn, session.lang);
      App.track && App.track("conversation");
      if (g <= 1 && turn.model) App.addMistake && App.addMistake({ q: turn.ask, correct: turn.model, why: turn.why, lang: session.lang, source: "🎭 تدريب" });
      session.results.push(g);
      session.lastFb = feedbackHTML(g, turn);
      session.done = true;
      renderTurn();
    }
  }

  function renderEnd() {
    const r = session.results;
    const c3 = r.filter(x => x === 3).length, c2 = r.filter(x => x === 2).length, c1 = r.filter(x => x <= 1).length;
    const verdict = c3 / r.length >= .7 ? "استعداد حقيقي للسوق 💪" : c3 + c2 >= r.length / 2 ? "أنت في الطريق — كرّر السيناريو وركز على الجمل التي أخطأت فيها 🔁" : "لا بأس — راجع الحوار النموذجي ثم أعد المحاولة، فالتكرار يبني الطلاقة 🌱";
    $("#view").innerHTML = `
    <div class="box" style="text-align:center;padding:34px 18px">
      <div style="font-size:3rem">🏁</div>
      <h3>انتهت الجلسة: ${esc(session.title)}</h3>
      <div class="stats" style="max-width:520px;margin:16px auto">
        <div class="stat"><b>${c3}</b><span>ممتاز</span></div>
        <div class="stat"><b>${c2}</b><span>جيد</span></div>
        <div class="stat"><b>${c1}</b><span>يحتاج تحسين</span></div>
      </div>
      <div class="callout tip" style="text-align:right">${verdict}</div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:14px;flex-wrap:wrap">
        <button class="btn primary" onclick="location.hash='#/trainer/${session.trainerId || ""}'">🔁 أعد الجلسة</button>
        <a class="btn ghost" href="#/train">🎭 سيناريوهات أخرى</a>
      </div>
    </div>`;
  }

  /* ---------- تقييم الرد (تقدير صادق بدون درجات وهمية) ---------- */
  const norm = s => String(s || "").toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

  App.Trainer = {
    grade(resp, turn, lang) { return Engine.grade(resp, turn, lang); },
    startFromTrainer(id) {
      const t = DB.trainers.find(x => x.id === id);
      if (!t) { App.Views.train(); return; }
      startSession({ title: t.title, scenario: t.scenario, turns: t.turns, lang: t.lang, role: t.role, trainerId: t.id });
    },
    /* توليد تدريب تلقائي من أي حوار موقف */
    startFromSituation(sitId, role, lang) {
      const s = DB.situations.find(x => x.id === sitId);
      if (!s) { App.Views.situations(); return; }
      const other = role === "S" ? "C" : "S";
      const turns = [];
      (s.turns || []).forEach((t, i) => {
        if (t.who !== role) return;
        const prev = (s.turns || [])[i - 1];
        turns.push({
          c: prev && prev.who === other ? prev : null,
          ask: `قل: «${t.a}»`,
          accept: [{ i: t.i, t: t.t }],
          keysId: t.i ? t.i.split(" ").filter(w => w.length > 3).slice(0, 4) : [],
          keysTr: t.t ? t.t.split(" ").filter(w => w.length > 3).slice(0, 4) : [],
          model: lang === "id" ? t.i : t.t,
          modelT: lang === "id" ? t.it : t.tt,
          why: t.n || ""
        });
      });
      if (!turns.length) { toast("لا توجد جولات لهذا الدور"); return; }
      startSession({
        title: s.title, scenario: s.context || s.sub || "", turns, lang, role,
        trainerId: ""
      });
    }
  };

  App.Views.trainer = function (id) { App.Trainer.startFromTrainer(id); };
  App.Views.practice = function (param) {
    const [sitId, role, lang] = (param || "").split("/");
    App.Trainer.startFromSituation(sitId, role, lang);
  };
})();
