/* ===== البطاقات (تكرار متباعد) + الاختبار ===== */
"use strict";

(function () {
  const { esc, $, toast, bankSorted, allPhrases, chapter } = App;
  const BOX_KEY = "leitner"; // id -> {box:1..5, due:ts}
  const BOX_LABELS = { 1: "جديدة", 2: "يتعلّم", 3: "مألوفة", 4: "قوية", 5: "متقنة 💎" }; // §12
  let cfg = { deck: "bank50", dir: "id" };
  let run = null;

  function boxes() { return App.store.get(BOX_KEY, {}); }
  function saveBoxes(b) { App.store.set(BOX_KEY, b); }
  const DAY = 24 * 3600 * 1000;
  const INTERVALS = [0, 1, 2, 4, 8, 16]; // بالأيام حسب الصندوق

  function deckPhrases() {
    const bank = bankSorted();
    if (cfg.deck === "bank50") return bank.slice(0, 50);
    if (cfg.deck === "bank100") return bank.slice(0, 100);
    if (cfg.deck === "bank250") return bank.slice(0, 250);
    if (cfg.deck === "bank500") return bank.slice(0, 500);
    if (cfg.deck === "all") return allPhrases();
    if (cfg.deck === "favs") return [...App.favs].map(id => allPhrases().find(p => p.id === id)).filter(Boolean);
    if (["p1", "p2", "p3"].includes(cfg.deck)) {
      const pool = { p1: bank.slice(0, 50), p2: bank.slice(0, 100), p3: bank.slice(0, 250) }[cfg.deck];
      return pool;
    }
    if (cfg.deck === "todo") return allPhrases().filter(p => !App.learned.has(p.id));
    if (cfg.deck.startsWith("ch:")) { const c = chapter(cfg.deck.slice(3)); return c ? (c.phrases || []) : []; }
    return bank.slice(0, 50);
  }

  /* ---------- صفحة البطاقات ---------- */
  App.Views.cards = function () {
    const b = boxes();
    const dist = [1, 2, 3, 4, 5].map(i => Object.values(b).filter(x => x.box === i).length);
    $("#view").innerHTML = `
    <div class="section-title">🃏 البطاقات والاختبار <span class="line"></span></div>
    <div class="callout tip">نظام <b>التكرار المتباعد</b>: كل بطاقة في صندوق (1←5). «أعرفها» ترفعها لصندوق أعلى فتظهر لاحقًا، و«أعيدها» تُرجعها للصندوق 1 غدًا. هكذا تحفظ آلاف الجمل دون أن تغرق.</div>
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
        <button class="chip ${["p1","p2","p3"].includes(cfg.deck) ? "on" : ""}" data-d="p1">🎯 أهم 50 (استرجاع)</button>
      </div>
      <div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">
        <button class="btn primary" id="startCards">🃏 ابدأ البطاقات</button>
        <button class="btn ghost" id="startQuiz">📝 ابدأ الاختبار (10 أسئلة)</button>
      </div>
      <div class="stats" style="margin-top:14px">
        ${dist.map((n, i) => `<div class="stat"><b>${n}</b><span>${BOX_LABELS[i + 1]}</span></div>`).join("")}
      </div>
      <p class="mini-note">حالات المراجعة (§12): جديدة ← يتعلّم ← مألوفة ← قوية ← متقنة. فواصل موثقة: 1/2/4/8/16 يومًا.</p>
    </div>
    <div class="box">
      <h3>🗂️ أو تدرّب على فصل محدد</h3>
      <div class="chips">
        ${DB.chapters.map(c => `<button class="chip ${cfg.deck === "ch:" + c.id ? "on" : ""}" data-d="ch:${c.id}">${c.icon || "📄"} ${esc(c.title)}</button>`).join("")}
      </div>
    </div>
    <div id="cardsArea"></div>`;
    document.querySelectorAll("#deckChips .chip, .box .chips .chip[data-d]").forEach(btn =>
      btn.addEventListener("click", () => { cfg.deck = btn.dataset.d; App.Views.cards(); }));
    document.querySelectorAll("#dirChips .chip").forEach(btn =>
      btn.addEventListener("click", () => { cfg.dir = btn.dataset.dir; App.Views.cards(); }));
    document.getElementById("startCards").addEventListener("click", startCards);
    document.getElementById("startQuiz").addEventListener("click", () => startQuiz());
  };

  /* ---------- جلسة بطاقات ---------- */
  function dueQueue() {
    const b = boxes(), now = Date.now();
    let list = deckPhrases().filter(p => {
      const e = b[p.id];
      return !e || now >= (e.due || 0);
    });
    if (list.length < 5) list = list.concat(deckPhrases().filter(p => !list.includes(p)).slice(0, 10));
    return list;
  }

  function startCards() {
    const q = dueQueue();
    if (!q.length) { toast("لا توجد بطاقات في هذه المجموعة"); return; }
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
            <div class="mini-note" style="color:#dFF;margin-bottom:6px">${esc(p.chTitle || "")} ${b ? `· ${BOX_LABELS[b.box]}` : ""}</div>
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

  function answerCard(good) {
    const p = run.list[run.idx];
    const b = boxes();
    const cur = b[p.id] || { box: 1, due: 0 };
    App.track && App.track("cards");
    if (good) cur.box = Math.min(5, cur.box + 1); else { cur.box = 1; run.again.push(p); }
    cur.due = Date.now() + INTERVALS[cur.box] * DAY;
    b[p.id] = cur; saveBoxes(b);
    run.idx++; run.flipped = false; renderCard();
  }

  function renderCardsEnd() {
    const mastered = run.list.filter(p => (boxes()[p.id] || {}).box >= 4).length;
    $("#cardsArea").innerHTML = `
    <div class="box" style="text-align:center;padding:30px">
      <div style="font-size:2.6rem">🏅</div>
      <h3>أنهيت ${run.list.length} بطاقة</h3>
      <p>منها ${run.again.length} تحتاج إعادة — ستظهر لك غدًا أولًا.</p>
      <p class="mini-note">وصل ${mastered} بطاقة إلى الصناديق العليا (محفوظة تقريبًا 💎)</p>
      <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn primary" onclick="location.reload()">🃏 جلسة أخرى</button>
        <a class="btn ghost" href="#/bank">⭐ بنك الجمل</a>
      </div>
    </div>`;
  }

  /* ---------- الاختبار ---------- */
  function startQuiz() {
    const pool = deckPhrases();
    if (pool.length < 4) { toast("المجموعة صغيرة على اختبار — اختر مجموعة أكبر"); return; }
    const pick = [];
    const shuffled = [...pool].sort(() => Math.random() - .5);
    for (const p of shuffled) { if (pick.length >= 10) break; pick.push(p); }
    const dir = cfg.dir;
    run = { quiz: { list: pick, idx: 0, score: 0, dir, answered: false } };
    renderQuiz();
  }

  function renderQuiz() {
    const q = run.quiz;
    if (q.idx >= q.list.length) { renderQuizEnd(); return; }
    const p = q.list[q.idx];
    const fwd = q.dir === "id" || q.dir === "tr";
    const correct = fwd ? (q.dir === "id" ? p.i : p.t) : p.a;
    const others = allPhrases().filter(x => x.id !== p.id && (fwd ? (q.dir === "id" ? x.i : x.t) : x.a) !== correct)
      .sort(() => Math.random() - .5).slice(0, 3).map(x => fwd ? (q.dir === "id" ? x.i : x.t) : x.a);
    const opts = [correct, ...others].sort(() => Math.random() - .5);
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
          <div style="margin-top:6px"><button class="icon-btn" data-act="speak" data-code="${q.dir === "id" ? "id-ID" : "tr-TR"}" data-text="${esc(correct)}">🔊</button></div>
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
        <button class="btn primary" onclick="location.reload()">📝 اختبار جديد</button>
        <a class="btn ghost" href="#/cards">🃏 البطاقات</a>
      </div>
    </div>`;
  }
})();
