/* ===== البطاقات (تكرار متباعد حقيقي) + الاختبار ===== */
"use strict";

(function () {
  const { esc, $, toast, bankSorted, allPhrases, chapter } = App;
  const BOX_KEY = "leitner";
  const BOX_LABELS = Engine.BOX_LABELS;
  let cfg = { deck: "bank50", dir: "id" };
  let run = null;

  function boxes() { return App.store.get(BOX_KEY, {}); }
  function saveBoxes(b) { App.store.set(BOX_KEY, b); }

  function deckPhrases() {
    const bank = bankSorted();
    let list;
    if (cfg.deck === "bank50") list = bank.slice(0, 50);
    else if (cfg.deck === "bank100") list = bank.slice(0, 100);
    else if (cfg.deck === "bank250") list = bank.slice(0, 250);
    else if (cfg.deck === "bank500") list = bank.slice(0, 500);
    else if (cfg.deck === "all") list = allPhrases();
    else if (cfg.deck === "favs") list = [...App.favs].map(id => App.phraseById(id)).filter(Boolean);
    else if (cfg.deck === "todo") list = allPhrases().filter(p => !App.learned.has(p.id));
    else if (cfg.deck.startsWith("ch:")) { const c = chapter(cfg.deck.slice(3)); list = c ? (c.phrases || []) : []; }
    else list = bank.slice(0, 50);
    return list.filter(p => Engine.hasLangText(p, cfg.dir));
  }

  App.Views.cards = function () {
    const b = boxes();
    const dist = [1, 2, 3, 4, 5].map(i => Object.values(b).filter(x => x.box === i).length);
    const dueN = Engine.dueCount(b);
    $("#view").innerHTML = `
    <div class="section-title">🃏 البطاقات والاختبار <span class="line"></span></div>
    <div class="callout tip">أربعة تقييمات حقيقية: <b>أعدها</b> ترجع الصندوق وتعيدها بعد 10 دقائق، <b>صعبة</b> تبقيها قريبة، <b>جيدة</b> ترفع صندوقًا، <b>سهلة</b> تقفز صندوقين. الفواصل: 1/2/4/8/16 يومًا.</div>
    <div class="box">
      <h3>اختر المجموعة</h3>
      <div class="chips" id="deckChips">
        <button class="chip ${cfg.deck === "bank50" ? "on" : ""}" data-d="bank50">⭐ أهم 50</button>
        <button class="chip ${cfg.deck === "bank100" ? "on" : ""}" data-d="bank100">⭐ أهم 100</button>
        <button class="chip ${cfg.deck === "bank250" ? "on" : ""}" data-d="bank250">⭐ أهم 250</button>
        <button class="chip ${cfg.deck === "bank500" ? "on" : ""}" data-d="bank500">⭐ أهم 500</button>
        <button class="chip ${cfg.deck === "all" ? "on" : ""}" data-d="all">📚 الكل</button>
        <button class="chip ${cfg.deck === "todo" ? "on" : ""}" data-d="todo">🎯 لم أنهها بعد</button>
        <button class="chip ${cfg.deck === "favs" ? "on" : ""}" data-d="favs">❤️ مفضلاتي</button>
      </div>
      <h3 style="margin-top:10px">الاتجاه</h3>
      <div class="chips" id="dirChips">
        <button class="chip ${cfg.dir === "id" ? "on" : ""}" data-dir="id">عربي ← 🇮🇩 إندونيسي</button>
        <button class="chip ${cfg.dir === "tr" ? "on" : ""}" data-dir="tr">عربي ← 🇹🇷 تركي</button>
        <button class="chip ${cfg.dir === "idr" ? "on" : ""}" data-dir="idr">🇮🇩 ← عربي (استرجاع)</button>
        <button class="chip ${cfg.dir === "trr" ? "on" : ""}" data-dir="trr">🇹🇷 ← عربي (استرجاع)</button>
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
        <button class="btn primary" id="startCards">🃏 ابدأ البطاقات المستحقة (${dueN})</button>
        <button class="btn ghost" id="startQuiz">📝 ابدأ الاختبار (10 أسئلة)</button>
      </div>
      <div class="stats" style="margin-top:14px">
        ${dist.map((n, i) => `<div class="stat"><b>${n}</b><span>${BOX_LABELS[i + 1]}</span></div>`).join("")}
      </div>
      <p class="mini-note">المستورد الأحادي خارج هذه المجموعات. العبارات بلا نص للاتجاه المختار تُستبعد تلقائيًا.</p>
    </div>
    <div class="box">
      <h3>🗂️ أو تدرّب على فصل محدد</h3>
      <div class="chips">
        ${DB.chapters.filter(c => !Engine.isImportedChapter(c.id)).map(c => `<button class="chip ${cfg.deck === "ch:" + c.id ? "on" : ""}" data-d="ch:${c.id}">${c.icon || "📄"} ${esc(c.title)}</button>`).join("")}
      </div>
    </div>
    <div id="cardsArea"></div>`;
    document.querySelectorAll("#deckChips .chip, .box .chips .chip[data-d]").forEach(btn =>
      btn.addEventListener("click", () => { cfg.deck = btn.dataset.d; App.Views.cards(); }));
    document.querySelectorAll("#dirChips .chip").forEach(btn =>
      btn.addEventListener("click", () => { if (btn.dataset.dir) { cfg.dir = btn.dataset.dir; App.Views.cards(); } }));
    document.getElementById("startCards").addEventListener("click", startCards);
    document.getElementById("startQuiz").addEventListener("click", () => startQuiz());
  };

  function dueQueue() {
    const b = boxes(), now = Date.now();
    const deck = deckPhrases();
    const due = deck.filter(p => {
      const e = b[p.id];
      return !e || now >= (e.due || 0);
    });
    return due.slice(0, 20);
  }

  function startCards() {
    const q = dueQueue();
    if (!q.length) { toast("لا بطاقات مستحقة الآن — أحسنت. عد لاحقًا أو اختر مجموعة أكبر"); return; }
    run = { list: q, idx: 0, flipped: false, again: [] };
    renderCard();
  }

  function renderCard() {
    if (run.idx >= run.list.length) { renderCardsEnd(); return; }
    const p = run.list[run.idx];
    const b = boxes()[p.id];
    $("#cardsArea").innerHTML = `
    <div class="box">
      <div class="tr-progress">${run.list.map((_, k) => `<i class="${k < run.idx ? "done" : k === run.idx ? "now" : ""}"></i>`).join("")}</div>
      <div class="flip ${run.flipped ? "on" : ""}" id="flipCard">
        <div class="flip-inner">
          <div class="flip-face flip-front">
            <div class="mini-note" style="color:#dFF;margin-bottom:6px">${esc(p.chTitle || "")} ${b ? `· ${BOX_LABELS[b.box] || ""}` : "· جديدة"}</div>
            ${(cfg.dir === "idr" || cfg.dir === "trr") ? `
            <div class="big ltr">${esc(cfg.dir === "idr" ? p.i : p.t)}</div>
            <div class="mini-note" style="margin-top:10px;opacity:.85">${esc(cfg.dir === "idr" ? (p.it || "") : (p.tt || ""))}</div>
            <div style="margin-top:8px"><button class="icon-btn" data-act="speak" data-code="${cfg.dir === "idr" ? "id-ID" : "tr-TR"}" data-text="${esc(cfg.dir === "idr" ? p.i : p.t)}">🔊</button></div>` : `
            <div class="big">${esc(p.a)}</div>`}
            <div class="mini-note" style="margin-top:12px;opacity:.8">اضغط البطاقة لرؤية الجواب</div>
          </div>
          <div class="flip-face flip-back">
            ${(cfg.dir === "idr" || cfg.dir === "trr") ? `
            <div class="big">${esc(p.a)}</div>
            <div class="mini-note" style="margin-top:10px">🇮🇩 ${esc(p.i)}<br>🇹🇷 ${esc(p.t)}</div>` : `
            <div class="lang-block id" style="margin:4px 0"><div class="ltext">${esc(p.i)}</div><div class="ltrans">${esc(p.it || "")}</div></div>
            <div class="lang-block tr" style="margin:4px 0"><div class="ltext">${esc(p.t)}</div><div class="ltrans">${esc(p.tt || "")}</div></div>
            <div>
              <button class="icon-btn" data-act="speak" data-code="id-ID" data-text="${esc(p.i)}">🇮🇩 🔊</button>
              <button class="icon-btn" data-act="speak" data-code="tr-TR" data-text="${esc(p.t)}">🇹🇷 🔊</button>
            </div>`}
          </div>
        </div>
      </div>
      ${run.flipped ? `
      <div style="display:flex;gap:6px;justify-content:center;flex-wrap:wrap">
        <button class="btn danger sm" id="cAgain">😕 أعدها</button>
        <button class="btn ghost sm" id="cHard">😐 صعبة</button>
        <button class="btn primary sm" id="cGood">🙂 جيدة</button>
        <button class="btn ghost sm" id="cEasy">😄 سهلة</button>
      </div>` : `<div style="text-align:center"><button class="btn primary" id="cFlip">👁️ اقلب البطاقة</button></div>`}
    </div>`;
    document.getElementById("flipCard").addEventListener("click", () => { if (!run.flipped) { run.flipped = true; renderCard(); } });
    const f = document.getElementById("cFlip"); if (f) f.addEventListener("click", () => { run.flipped = true; renderCard(); });
    const a = document.getElementById("cAgain"); if (a) a.addEventListener("click", () => answerCard("again"));
    const h = document.getElementById("cHard"); if (h) h.addEventListener("click", () => answerCard("hard"));
    const g = document.getElementById("cGood"); if (g) g.addEventListener("click", () => answerCard("good"));
    const ez = document.getElementById("cEasy"); if (ez) ez.addEventListener("click", () => answerCard("easy"));
  }

  function answerCard(grade) {
    const p = run.list[run.idx];
    const b = boxes();
    const next = Engine.applySrs(b[p.id], grade, Date.now());
    App.track && App.track("cards");
    if (next.again) {
      run.again.push(p);
      if (run.list.length < run.idx + 8) run.list.push(p);
    }
    b[p.id] = { box: next.box, due: next.due, lapses: next.lapses, reps: next.reps };
    saveBoxes(b);
    const lang = (cfg.dir || "id").slice(0, 2);
    if (lang === "id" || lang === "tr") App.langTrack && App.langTrack(lang, p.id);
    run.idx++; run.flipped = false; renderCard();
  }

  function renderCardsEnd() {
    const mastered = run.list.filter(p => (boxes()[p.id] || {}).box >= 4).length;
    $("#cardsArea").innerHTML = `
    <div class="box" style="text-align:center;padding:30px">
      <div style="font-size:2.6rem">🏅</div>
      <h3>أنهيت ${run.idx} بطاقة</h3>
      <p>منها ${run.again.length} أُعيدت للصندوق الأول — ستظهر بعد نحو 10 دقائق.</p>
      <p class="mini-note">وصل ${mastered} بطاقة إلى الصناديق العليا</p>
      <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn primary" id="cAgainSession">🃏 جلسة أخرى</button>
        <a class="btn ghost" href="#/today">☀️ درس اليوم</a>
      </div>
    </div>`;
    const btn = document.getElementById("cAgainSession");
    if (btn) btn.addEventListener("click", () => App.Views.cards());
  }

  function startQuiz() {
    const pool = deckPhrases();
    if (pool.length < 4) { toast("المجموعة صغيرة على اختبار — اختر مجموعة أكبر"); return; }
    const pick = Engine.shuffle(pool).slice(0, 10);
    run = { quiz: { list: pick, idx: 0, score: 0, dir: cfg.dir, answered: false } };
    renderQuiz();
  }

  function renderQuiz() {
    const q = run.quiz;
    if (q.idx >= q.list.length) { renderQuizEnd(); return; }
    const p = q.list[q.idx];
    const fwd = q.dir === "id" || q.dir === "tr";
    const correct = fwd ? (q.dir === "id" ? p.i : p.t) : p.a;
    const others = Engine.shuffle(allPhrases().filter(x =>
      x.id !== p.id && Engine.hasLangText(x, q.dir) &&
      (fwd ? (q.dir === "id" ? x.i : x.t) : x.a) !== correct
    )).slice(0, 3).map(x => fwd ? (q.dir === "id" ? x.i : x.t) : x.a);
    const opts = Engine.shuffle([correct, ...others]);
    $("#cardsArea").innerHTML = `
    <div class="box">
      <div class="tr-progress">${q.list.map((_, k) => `<i class="${k < q.idx ? "done" : k === q.idx ? "now" : ""}"></i>`).join("")}</div>
      <div class="tr-prompt ltr" style="text-align:center;font-size:1.2rem;font-weight:800;margin:10px 0">${esc(fwd ? p.a : (q.dir === "idr" ? p.i : p.t))}</div>
      <p class="mini-note" style="text-align:center">${fwd ? `ما مقولها بـ${q.dir === "id" ? "الإندونيسية 🇮🇩" : "التركية 🇹🇷"}؟` : "ما معناها بالعربية؟ (استرجاع عكسي)"}</p>
      <div id="quizOpts">
        ${opts.map(o => `<button class="quiz-opt" data-ok="${o === correct ? "1" : "0"}">${esc(o)}</button>`).join("")}
      </div>
      <div id="quizFb"></div>
    </div>`;
    document.getElementById("quizOpts").addEventListener("click", e => {
      const b = e.target.closest(".quiz-opt"); if (!b || q.answered) return;
      q.answered = true;
      const ok = b.dataset.ok === "1";
      App.track && App.track("quiz");
      if (!ok) App.addMistake && App.addMistake({ q: p.a, correct, lang: q.dir, source: "📝 اختبار", why: p.n ? "تلميح: " + p.n : "" });
      if (ok) { q.score++; App.langTrack && App.langTrack((q.dir || "id").slice(0, 2), p.id); }
      document.querySelectorAll(".quiz-opt").forEach(x => {
        if (x.dataset.ok === "1") x.classList.add("right");
        else if (x === b) x.classList.add("wrong");
      });
      document.getElementById("quizFb").innerHTML = `
        <div class="feedback ${ok ? "f3" : "f1"}" style="margin-top:10px">
          <b class="t">${ok ? "🎉 صحيح!" : "❌ الصحيح هو:"} </b>
          <div class="ltext">${esc(correct)}</div>
          ${ok ? "" : `<div class="ltrans">${esc(q.dir === "id" ? p.it || "" : p.tt || "")}</div>`}
          <div style="margin-top:6px"><button class="icon-btn" data-act="speak" data-code="${q.dir === "id" || q.dir === "idr" ? "id-ID" : "tr-TR"}" data-text="${esc(correct)}">🔊</button></div>
          <div style="margin-top:8px"><button class="btn primary sm" id="qNext">${q.idx + 1 < q.list.length ? "التالي ←" : "النتيجة 🏁"}</button></div>
        </div>`;
      document.getElementById("qNext").addEventListener("click", () => { q.idx++; q.answered = false; renderQuiz(); });
    });
  }

  function renderQuizEnd() {
    const q = run.quiz;
    const pct = q.score / q.list.length;
    const verdict = pct >= .9 ? "جاهز للسوق 🏪💪" : pct >= .7 ? "ممتاز — ثبّت البقية بالبطاقات 🃏" : pct >= .5 ? "جيد — أعد المجموعة نفسها غدًا 🔁" : "ابدأ بمستوى أصغر (أهم 50) وكرّر يوميًا 🌱";
    $("#cardsArea").innerHTML = `
    <div class="box" style="text-align:center;padding:30px">
      <div style="font-size:2.6rem">📝</div>
      <h3>أجبت بشكل صحيح عن ${q.score} من ${q.list.length}</h3>
      <div class="callout tip" style="max-width:420px;margin:10px auto">${verdict}</div>
      <div style="margin-top:10px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn primary" id="qNew">📝 اختبار جديد</button>
        <a class="btn ghost" href="#/today">☀️ درس اليوم</a>
      </div>
    </div>`;
    const n = document.getElementById("qNew");
    if (n) n.addEventListener("click", () => App.Views.cards());
  }
})();
