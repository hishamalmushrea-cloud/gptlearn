/* ===== نواة التطبيق: الراوتر + الأدوات + عرض العبارات ===== */
"use strict";

/* ---------- تهيئة قاعدة البيانات (كل ملفات data تضيف إلى window.DB) ---------- */
window.DB = window.DB || { chapters: [], situations: [], culture: [], analyses: [], trainers: [], basics: {} };

const App = (() => {

  /* ---------- تخزين ---------- */
  const store = {
    get(key, def) { try { const v = localStorage.getItem("gl_" + key); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
    set(key, val) { try { localStorage.setItem("gl_" + key, JSON.stringify(val)); } catch (e) {} }
  };
  let settings = store.get("settings", { lang: "both" });
    let learned = new Set(store.get("learned", []));
  let favs = new Set(store.get("favs", []));

  const saveLearned = () => store.set("learned", [...learned]);
  const saveFavs = () => store.set("favs", [...favs]);

  /* ---------- أدوات ---------- */
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $ = s => document.querySelector(s);

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove("show"), 2200);
  }

  const LV = { 1: ["رسمي", "b1"], 2: ["محايد", "b2"], 3: ["عادي", "b3"], 4: ["عفوي جدًا", "b4"] };
  const lvBadge = lv => lv ? `<span class="badge ${LV[lv][1]}">${LV[lv][0]}</span>` : "";

  /* النطق عبر متصفحك (يعمل دون إنترنت إذا توفر صوت اللغة في الجهاز) */
  function speak(text, code, rate) {
    try {
      if (!("speechSynthesis" in window)) { toast("المتصفح لا يدعم النطق — استعن بالنطق المكتوب 📝"); return; }
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = code; u.rate = rate || 0.9;
      const v = speechSynthesis.getVoices().find(v => v.lang && v.lang.toLowerCase().startsWith(code.slice(0, 2)));
      if (v) u.voice = v;
      speechSynthesis.speak(u);
      if (!v && !speechSynthesis.getVoices().length) setTimeout(() => toast("إن لم تسمع الصوت: لا يوجد صوت " + (code.startsWith("id") ? "إندونيسي" : "تركي") + " مثبت على جهازك — استعن بالنطق المكتوب"), 400);
    } catch (e) { toast("تعذّر تشغيل الصوت"); }
  }

  function copyText(txt) {
    const done = () => toast("تم النسخ ✅");
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done).catch(() => fallback());
    else fallback();
    function fallback() {
      const ta = document.createElement("textarea"); ta.value = txt; document.body.appendChild(ta);
      ta.select(); try { document.execCommand("copy"); done(); } catch (e) { toast("تعذّر النسخ"); }
      ta.remove();
    }
  }

  /* ---------- تجميع العبارات ---------- */
  function allPhrases() {
    const out = [];
    DB.chapters.forEach(c => (c.phrases || []).forEach(p => out.push({ ...p, ch: c.id, chTitle: c.title })));
    const B = DB.basics || {};
    (B.survival || []).forEach(p => out.push({ ...p, ch: "basics", chTitle: "عبارات النجاة" }));
    ((B.numbers || {}).phrases || []).forEach(p => out.push({ ...p, ch: "numbers", chTitle: "الأرقام والأسعار" }));
    return out;
  }
  function bankSorted() {
    return allPhrases().sort((a, b) => (a.p || 5) - (b.p || 5));
  }
  function phraseById(id) { return allPhrases().find(p => p.id === id); }
  function chapter(id) { return DB.chapters.find(c => c.id === id); }

  /* ---------- عرض بطاقة عبارة ---------- */
  function langBlock(p, which) {
    if (which === "id") return `
      <div class="lang-block id">
        <div class="lb-head"><span class="flag">🇮🇩</span><span class="lname">الإندونيسية</span>
          <span class="lb-tools">
            <button class="icon-btn" data-act="speak" data-code="id-ID" data-text="${esc(p.i)}" title="اسمع">🔊</button>
            <button class="icon-btn" data-act="copy" data-text="${esc(p.i)}" title="انسخ">📋</button>
          </span></div>
        <div class="ltext">${esc(p.i)}</div>
        ${p.it ? `<div class="ltrans">النطق: ${esc(p.it)}</div>` : ""}
      </div>`;
    return `
      <div class="lang-block tr">
        <div class="lb-head"><span class="flag">🇹🇷</span><span class="lname">التركية</span>
          <span class="lb-tools">
            <button class="icon-btn" data-act="speak" data-code="tr-TR" data-text="${esc(p.t)}" title="اسمع">🔊</button>
            <button class="icon-btn" data-act="copy" data-text="${esc(p.t)}" title="انسخ">📋</button>
          </span></div>
        <div class="ltext">${esc(p.t)}</div>
        ${p.tt ? `<div class="ltrans">النطق: ${esc(p.tt)}</div>` : ""}
      </div>`;
  }

  function phraseCard(p) {
    const showId = settings.lang !== "tr", showTr = settings.lang !== "id";
    const isL = learned.has(p.id), isF = favs.has(p.id);
    return `
    <div class="phrase-card ${isL ? "learned" : ""}" id="pc-${p.id}">
      <div class="ph-top">
        <div class="ph-ar">${esc(p.a)}</div>
        <button class="icon-btn ${isL ? "done" : ""}" data-act="learn" data-id="${p.id}" title="علّمتها">${isL ? "✓" : "✓"}</button>
        <button class="icon-btn ${isF ? "faved" : ""}" data-act="fav" data-id="${p.id}" title="احفظها">${isF ? "❤️" : "🤍"}</button>
      </div>
      <div class="ph-meta">${lvBadge(p.lv)} ${p.chTitle ? `<span class="tag">${esc(p.chTitle)}</span>` : ""}</div>
      ${showId ? langBlock(p, "id") : ""}
      ${showTr ? langBlock(p, "tr") : ""}
      ${p.lit ? `<div class="ph-note"><span class="lit">حرفيًا:</span> ${esc(p.lit)}</div>` : ""}
      ${p.w ? `<div class="ph-note"><b>متى تستخدمها؟</b> ${esc(p.w)}</div>` : ""}
      ${p.n ? `<div class="ph-note"><b>لماذا هي طبيعية؟</b> ${esc(p.n)}</div>` : ""}
      ${p.alt && p.alt.length ? `<div class="ph-alts">بدائل طبيعية: ${p.alt.map(x => `<span class="alt">${esc(x)}</span>`).join("")}</div>` : ""}
    </div>`;
  }

  function phrasesList(phrases) {
    return phrases.length ? phrases.map(phraseCard).join("") : `<div class="empty"><div class="e">🔍</div>لا توجد نتائج مطابقة</div>`;
  }

  /* جدول عام */
  function table(t) {
    return `<div class="tbl-wrap"><table class="tbl">
      <thead><tr>${(t.head || []).map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead>
      <tbody>${t.rows.map(r => `<tr>${r.map((c, i) => `<td class="${i > 0 ? "ltr" : ""}">${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
    </table></div>`;
  }

  /* ---------- الراوتر ---------- */
  const Views = {};
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, "")) || "home";
    const [name, ...rest] = h.split("/");
    const arg = rest.join("/");
    (Views[name] || Views.home)(arg);
    $("#drawer").classList.remove("open"); $("#scrim").classList.remove("show");
    document.querySelectorAll(".bottom-nav a").forEach(a => a.classList.toggle("act", a.dataset.nav === name));
    document.querySelectorAll("#drawerNav a").forEach(a => a.classList.toggle("act", a.getAttribute("href") === "#/" + h));
    window.scrollTo({ top: 0 });
  }

  /* ---------- الرئيسية ---------- */
  Views.home = function () {
    const total = allPhrases().length, sits = DB.situations.length, trs = DB.trainers.length;
    const view = `
    <div class="hero">
      <h1>🛍️ تعلّم ما تحتاجه فعلًا في السوق، لا في الكتب</h1>
      <p>نظام تدريبي متكامل بالعربية لتعلّم <b>الإندونيسية</b> و<b>التركية</b> كما يتكلمها البائعون والزبائن فعلًا: مواقف كاملة، حوارات حقيقية، مساومة، شكاوى، جملة وتجزئة، واتساب، وتدريب تفاعلي حيث تكون أنت البائع أو الزبون.</p>
      <div class="cta">
        <a class="btn primary" href="#/sales">🛍️ ادخل قسم البيع والزبائن</a>
        <a class="btn light" href="#/train">🎭 ابدأ تدريبًا الآن</a>
      </div>
    </div>
    <div class="stats">
      <div class="stat"><b>${total}</b><span>عبارة موقفية</span></div>
      <div class="stat"><b>${sits}</b><span>حوار كامل</span></div>
      <div class="stat"><b>${DB.chapters.length}</b><span>فصلًا تدريبيًا</span></div>
      <div class="stat"><b>${trs}</b><span>سيناريو تدريبي</span></div>
      <div class="stat"><b>${learned.size}</b><span>جملة أنهيتها ✓</span></div>
    </div>
    <div class="box" id="smartNext" style="border:2px solid var(--brand)"></div>
    <div class="grid-cards">
      <a class="module-card hi" href="#/sales"><span class="cnt">الأهم</span><div class="ic">🛍️</div><h3>البيع والشراء والتعامل مع الزبائن</h3><p>${DB.chapters.filter(c => (c.group || "sales") === "sales").length} فصلًا من دخول الزبون حتى ما بعد البيع: جذب، ترحيب، عرض، إقناع، أسعار، مساومة، شكاوى، جملة، واتساب…</p></a>
      <a class="module-card" href="#/academy"><div class="ic">🎓</div><h3>المنهج العام (الأكاديمية)</h3><p>الضمائر، الأسئلة، الأفعال الذهبية، الوقت، المشاعر، والمفردات الموضوعية + حوارات الحياة اليومية خارج المحل.</p></a>
      <a class="module-card" href="#/survival"><div class="ic">🆘</div><h3>وضع النجاة</h3><p>بلمسة واحدة: مطار، طوارئ، مال، فندق، تاكسي، اتجاهات — الجملة المنقذة فورًا.</p></a>
      <a class="module-card" href="#/stories"><div class="ic">📖</div><h3>قصص متدرجة</h3><p>اقرأ واسمع بسرعتين واختبر فهمك — قصص أصلية A1/A2 باللغتين.</p></a>
      <a class="module-card" href="#/progress"><div class="ic">📈</div><h3>تقدمي</h3><p>هدف يومي، سلسلة أيام، مهارات موثقة، وإنجازات صادقة.</p></a>
      <a class="module-card" href="#/dict"><div class="ic">📖</div><h3>القاموس الأساسي</h3><p>160 كلمة منتقاة: نطق + نوع + مستوى + مثال حي بصوته، ببحث ومفلترة.</p></a>
      <a class="module-card" href="#/packs"><div class="ic">📦</div><h3>حزم المحتوى</h3><p>صدّر كل المحتوى كحزمة JSON مُوقّعة، وتحقق من أي حزمة بأداة الفحص.</p></a>
      <a class="module-card" href="#/verbs"><div class="ic">⚡</div><h3>مدرب الأفعال</h3><p>أهم 16 فعلًا بتصريفاتها وأمثلة حية + تمرين مطابقة سريع.</p></a>
      <a class="module-card" href="#/listen"><div class="ic">🎧</div><h3>تمارين الاستماع</h3><p>اسمع واختر المعنى، واسمع واكتب — بسرعتين عادية وبطيئة 🐢.</p></a>
      <a class="module-card" href="#/grammar"><div class="ic">🧩</div><h3>القواعد والمستويات</h3><p>منهج قواعد كامل للغتين (29 قاعدة بأمثلة سوقية وأخطاء العرب) + مسارات A0→B2.</p></a>
      <a class="module-card" href="#/write"><div class="ic">✍️</div><h3>تمرين الكتابة</h3><p>رتّب الجمل كلمةً كلمة — بناء جمل حقيقي لا مجرد تذكر.</p></a>
      <a class="module-card" href="#/placement"><div class="ic">🎯</div><h3>اختبار تحديد المستوى</h3><p>12 سؤالًا سريعًا تخبرك من أين تبدأ بالضبط — مع خريطة بداية مخصصة لك.</p></a>
      <a class="module-card" href="#/plan"><div class="ic">🗓️</div><h3>خطة 30 يومًا</h3><p>برنامج يومي 20–30 دقيقة من الصفر إلى أول حوار بيع حقيقي — مرتب حسب فصول التطبيق.</p></a>
      <a class="module-card" href="#/situations"><div class="ic">🎬</div><h3>المواقف الكاملة</h3><p>موقف ← حوار كامل ← كلمات مهمة ← قواعد ← لماذا هذه العبارة ← نسخة رسمية وعفوية ← إعادة تمثيل.</p></a>
      <a class="module-card" href="#/bank"><div class="ic">⭐</div><h3>بنك الجمل الجاهزة</h3><p>أهم ${Math.min(50, total)} ← 100 ← 250 ← 500 ← 1000 جملة، مرتبة بالأولوية الحقيقية للسوق.</p></a>
      <a class="module-card" href="#/compare"><div class="ic">🔁</div><h3>المقارنة الثلاثية</h3><p>🇸🇦 كيف أقولها كعربي؟ ثم 🇮🇩 و🇹🇷: الترجمة الطبيعية، الحرفية، الرسمية، ومتى تستخدم كل واحدة.</p></a>
      <a class="module-card" href="#/train"><div class="ic">🎭</div><h3>التدريب التفاعلي</h3><p>اختر: أنا البائع أو أنا الزبون، وردّ على كلام الطرف الآخر — مع تقييم صادق وإجابة أصلية.</p></a>
      <a class="module-card" href="#/cards"><div class="ic">🃏</div><h3>البطاقات والاختبار</h3><p>حفظ بتكرار متباعد (صناديق ليتنر) واختبارات اختيار من متعدد من بياناتك أنت.</p></a>
      <a class="module-card" href="#/basics"><div class="ic">🔤</div><h3>الأساسيات والنطق</h3><p>الحروف والنطق للعرب، التحيات، عبارات النجاة، والقواعد الدنيا التي تحتاجها فعلًا.</p></a>
      <a class="module-card" href="#/numbers"><div class="ic">🔢</div><h3>الأرقام والأسعار</h3><p>الأرقام، عملة الروبية والليرة، وكيف تُقال الأسعار فعلًا في السوق (باختصارات الباعة!).</p></a>
      <a class="module-card" href="#/culture"><div class="ic">💡</div><h3>ثقافة السوق وأسراره</h3><p>ما لا يقوله الكتاب: لغة الجسد، المخاطبات، المساومة، الأخطاء المحرجة التي يقع فيها العرب.</p></a>
    </div>
    <div class="footer-note">يعمل التطبيق دون إنترنت بالكامل — التقدم محفوظ في جهازك 💾</div>`;
    $("#view").innerHTML = view;
    try {
      const n = App.nextBest();
      document.getElementById("smartNext").innerHTML = `
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
          <div style="font-size:2rem">${n.icon}</div>
          <div style="flex:1;min-width:200px"><b>ماذا أتعلم الآن؟</b><p class="mini-note">${n.desc}</p></div>
          <a class="btn primary sm" href="${n.href}">${n.title} ←</a>
        </div>`;
    } catch (e) {}
  };

  /* ---------- صفحة قسم البيع ---------- */
  Views.sales = function () {
    const chapters = DB.chapters.filter(c => (c.group || "sales") === "sales");
    const view = `
    <div class="hero" style="background:linear-gradient(135deg,#7c2d12,#c2410c)">
      <h1>🛍️ البيع والشراء والتعامل مع الزبائن</h1>
      <p>Sales, Shopping & Customer Interaction — من لحظة رؤية الزبون حتى ما بعد إتمام البيع. كل عبارة موثّقة: ماذا يقول البائع <b>فعلًا</b> في إندونيسيا وتركيا، ومستوى رسميتها، ولمن تقال، ولماذا هي طبيعية — لا ترجمة حرفية من العربية.</p>
    </div>
    <div class="section-title">📚 الفصول <span class="line"></span></div>
    <div class="grid-cards">
      ${chapters.map(c => `
        <a class="chapter-card" href="#/chapter/${c.id}">
          <h3>${c.icon || "📄"} ${esc(c.title)}</h3>
          <p>${esc(c.sub || "")}</p>
          <span class="tag">${(c.phrases || []).length} عبارة</span>
          ${(c.tables || []).length ? ` <span class="tag">${c.tables.length} جدول</span>` : ""}
          ${c.guide ? ` <span class="tag">📋 دليل</span>` : ""}
        </a>`).join("")}
    </div>`;
    $("#view").innerHTML = view;
  };

  /* ---------- صفحة المنهج العام (الأكاديمية) ---------- */
  Views.academy = function () {
    const chapters = DB.chapters.filter(c => c.group === "academy");
    const bank = bankSorted();
    $("#view").innerHTML = `
    <div class="hero">
      <h1>🎓 المنهج العام — أكاديمية الإندونيسية والتركية</h1>
      <p>مسارك الأكاديمي الكامل خارج المحل: الضمائر والتعريف، أدوات الأسئلة، الأفعال الذهبية، الوقت، المشاعر، والمفردات الموضوعية الكبرى — ثم طبّقها في حوارات الحياة اليومية (مطعم، مواصلات، فندق، صيدلية، اتجاهات، تعارف، هاتف).</p>
      <div class="cta">
        <a class="btn primary" href="#/placement">🎯 اختبر مستواك الآن</a>
        <a class="btn light" href="#/plan">🗓️ خطة 30 يومًا</a>
      </div>
    </div>
    <div class="section-title">📚 فصول المنهج <span class="line"></span></div>
    <div class="grid-cards">
      ${chapters.map(c => `
        <a class="chapter-card" href="#/chapter/${c.id}">
          <h3>${c.icon || "📄"} ${esc(c.title)}</h3>
          <p>${esc(c.sub || "")}</p>
          <span class="tag">${(c.phrases || []).length} عبارة</span>
          ${(c.tables || []).length ? ` <span class="tag">${c.tables.length} جدول</span>` : ""}
        </a>`).join("")}
      <a class="chapter-card" href="#/basics"><h3>🔤 الأساسيات والنطق</h3><p>الحروف والنطق للمتحدث العربي + عبارات النجاة.</p></a>
      <a class="chapter-card" href="#/numbers"><h3>🔢 الأرقام والأسعار</h3><p>قراءة الأسعار كما يقرؤها الباعة فعلًا.</p></a>
    </div>
    <div class="section-title">🎬 حوارات الحياة اليومية <span class="line"></span></div>
    <div class="grid-cards">
      ${DB.situations.filter(s => s.kind === "daily").map(s => `
        <a class="chapter-card" href="#/situation/${s.id}">
          <h3>${esc(s.title)}</h3><p>${esc(s.sub || "")}</p>
          <span class="tag">${(s.turns || []).length} جولة</span>
        </a>`).join("")}
    </div>
    <div class="box">
      <h3>🧭 أين أنت الآن؟ (توجيه سريع)</h3>
      <ul>
        <li><b>مبتدئ تمامًا:</b> ابدأ بـ<b>الأساسيات والنطق</b> ← فصل <b>الضمائر والتعريف</b> ← <b>عبارات النجاة</b> ← بطاقات «أهم 50».</li>
        <li><b>تعرف الأساسيات:</b> فصول <b>الأسئلة والأفعال الذهبية</b> + حواران يوميان أسبوعيًا + بطاقات 100.</li>
        <li><b>تستطيع التحادث:</b> ادخل <a href="#/sales">🛍️ قسم البيع</a> كاملًا + <a href="#/train">التدريب التفاعلي</a> + المقارنة الثلاثية.</li>
      </ul>
      <p class="mini-note">بنك الجمل الحالي يضم ${bank.length} جملة مرتبة بالأولوية — والبنية تتوسع لـ1000+.</p>
    </div>`;
  };

  /* ---------- صفحة فصل ---------- */
  Views.chapter = function (id) {
    const c = chapter(id);
    if (!c) { Views.home(); return; }
    const related = DB.situations.filter(s => (s.chapters || []).includes(c.id));
    $("#view").innerHTML = `
      <div class="crumbs"><a href="#/sales">🛍️ قسم البيع</a> ‹ ${esc(c.title)}</div>
      <div class="box">
        <h3>${c.icon || "📄"} ${esc(c.title)}</h3>
        <p style="color:var(--sub)">${esc(c.sub || "")}</p>
        ${c.intro ? `<div style="margin-top:8px">${c.intro}</div>` : ""}
      </div>
      ${c.guide ? `<div class="box guide">${c.guide}</div>` : ""}
      ${(c.tables || []).map(t => `<div class="box"><h3>${esc(t.title)}</h3>${table(t)}</div>`).join("")}
      ${related.length ? `<div class="box"><h3>🎬 حوارات كاملة مرتبطة بهذا الفصل</h3>${related.map(s => `<p> <a href="#/situation/${s.id}">▶️ ${esc(s.title)}</a> <span class="mini-note">${esc(s.sub || "")}</span></p>`).join("")}</div>` : ""}
      <div class="chips" id="chFilter">
        <button class="chip on" data-lv="all">الكل (${(c.phrases || []).length})</button>
        <button class="chip" data-lv="1">رسمي ${(c.phrases || []).filter(p => p.lv === 1).length}</button>
        <button class="chip" data-lv="2">محايد ${(c.phrases || []).filter(p => p.lv === 2).length}</button>
        <button class="chip" data-lv="3">عادي ${(c.phrases || []).filter(p => p.lv === 3).length}</button>
        <button class="chip" data-lv="4">عفوي جدًا ${(c.phrases || []).filter(p => p.lv === 4).length}</button>
      </div>
      <div id="chPhrases">${phrasesList(c.phrases || [])}</div>`;
    $("#chFilter").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      document.querySelectorAll("#chFilter .chip").forEach(x => x.classList.remove("on")); b.classList.add("on");
      const lv = b.dataset.lv;
      $("#chPhrases").innerHTML = phrasesList(lv === "all" ? (c.phrases || []) : (c.phrases || []).filter(p => p.lv == lv));
    });
  };

  /* ---------- البحث العام ---------- */
  const norm = s => String(s || "").toLowerCase()
    .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[ًٌٍَُِّْ]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

  Views.search = function (q) {
    const nq = norm(q);
    if (!nq) { Views.home(); return; }
    const phrases = allPhrases().filter(p => norm(p.a).includes(nq) || norm(p.i).includes(nq) || norm(p.t).includes(nq) || norm(p.it).includes(nq) || norm(p.tt).includes(nq));
    const sits = DB.situations.filter(s => norm(s.title + " " + (s.sub || "")).includes(nq) || (s.turns || []).some(t => norm(t.a + " " + t.i + " " + t.t).includes(nq)));
    const cult = DB.culture.filter(x => norm(x.title + " " + x.body).includes(nq));
    $("#view").innerHTML = `
      <div class="crumbs">نتائج البحث عن: «${esc(q)}»</div>
      <div class="stats">
        <div class="stat"><b>${phrases.length}</b><span>عبارة</span></div>
        <div class="stat"><b>${sits.length}</b><span>حوار</span></div>
        <div class="stat"><b>${cult.length}</b><span>مقال ثقافي</span></div>
      </div>
      <div id="resP">${phrasesList(phrases.slice(0, 200))}${phrases.length > 200 ? `<p class="mini-note">تُعرض أول 200 نتيجة…</p>` : ""}</div>
      ${sits.length ? `<div class="section-title">🎬 حوارات <span class="line"></span></div>${sits.map(s => `<p><a href="#/situation/${s.id}">▶️ ${esc(s.title)}</a></p>`).join("")}` : ""}
      ${cult.length ? `<div class="section-title">💡 ثقافة <span class="line"></span></div>${cult.map(x => `<p><a href="#/culture">💡 ${esc(x.title)}</a></p>`).join("")}` : ""}`;
  };

  /* ---------- المفضلة ---------- */
  Views.favs = function () {
    const list = [...favs].map(phraseById).filter(Boolean);
    $("#view").innerHTML = `
      <div class="section-title">❤️ عباراتي المحفوظة <span class="line"></span></div>
      ${list.length ? phrasesList(list) : `<div class="empty"><div class="e">🤍</div>اضغط على القلب في أي عبارة لتحفظها هنا</div>`}`;
  };

  /* ---------- الإعدادات ---------- */
  Views.settings = function () {
    const total = allPhrases().length;
    $("#view").innerHTML = `
      <div class="section-title">⚙️ الإعدادات والتقدم <span class="line"></span></div>
      <div class="box">
        <h3>اللغة المعروضة في بطاقات العبارات</h3>
        <div class="chips" id="setLang">
          <button class="chip ${settings.lang === "both" ? "on" : ""}" data-lang="both">🇮🇩 + 🇹🇷 الاثنتان</button>
          <button class="chip ${settings.lang === "id" ? "on" : ""}" data-lang="id">🇮🇩 الإندونيسية فقط</button>
          <button class="chip ${settings.lang === "tr" ? "on" : ""}" data-lang="tr">🇹🇷 التركية فقط</button>
        </div>
      </div>
      <div class="box">
        <h3>📈 تقدمك</h3>
        <div class="progress"><i style="width:${Math.round(learned.size / Math.max(total, 1) * 100)}%"></i></div>
        <p style="margin-top:8px">أنهيت <b>${learned.size}</b> من <b>${total}</b> عبارة (${Math.round(learned.size / Math.max(total, 1) * 100)}%) — محفوظة في جهازك.</p>
        <div style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn ghost sm" data-act="export">⬇️ صدّر تقدمي (نسخة احتياطية)</button>
          <button class="btn ghost sm" data-act="import">⬆️ استيراد تقدمي</button>
          <button class="btn danger sm" data-act="reset">🗑️ تصفير كل التقدم</button>
        </div>
      </div>
      <div class="box">
        <h3>🔊 اختبار النطق</h3>
        <p>جرّب نطق الجهاز للغتكين (يعتمد على أصوات مثبتة في جهازك — وإن لم تتوفر فهناك النطق المكتوب في كل عبارة):</p>
        <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn ghost sm" data-act="speak" data-code="id-ID" data-text="Selamat datang, silakan dilihat-dilihat">🇮🇩 اسمع عينة</button>
          <button class="btn ghost sm" data-act="speak" data-code="tr-TR" data-text="Hoş geldiniz, buyurun">🇹🇷 اسمع عينة</button>
        </div>
      </div>`;
    $("#setLang").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      settings.lang = b.dataset.lang; store.set("settings", settings); Views.settings(); toast("تم الحفظ ✅");
    });
  };

  /* ---------- عن التطبيق ---------- */
  Views.about = function () {
    $("#view").innerHTML = `
    <div class="section-title">ℹ️ عن التطبيق <span class="line"></span></div>
    <div class="box">
      <h3>الفلسفة</h3>
      <p>هذا ليس تطبيق ترجمة. الهدف أن تصل إلى: <b>«أنا أعرف ماذا أقول، وكيف أقوله، ولمن أقوله، ومتى أقوله، وكيف أقوله بطبيعية»</b>. لذلك كل عبارة مكتوبة كما يقولها المتحدث الأصلي فعلًا في الموقف — لا ترجمة حرفية من العربية — مع توثيق مستوى الرسمية ولمن تقال ومتى تتوقف.</p>
    </div>
    <div class="box">
      <h3>🗺️ خريطة الاستخدام المقترحة</h3>
      <ol>
        <li>غير متأكد من أين تبدأ؟ <a href="#/placement">🎯 اختبر مستواك</a> ثم اتبع <a href="#/plan">🗓️ خطة 30 يومًا</a>.</li>
        <li>ابدأ بـ<b><a href="#/academy">المنهج العام</a></b> (ضمائر، أسئلة، أفعال، مفردات) إن كنت مبتدئًا تمامًا.</li>
        <li>ادخل <b>قسم البيع</b> فصلًا فصلًا — اقرأ العبارة، اسمعها، افهم «لماذا هي طبيعية».</li>
        <li>افتح <b>المواقف الكاملة</b> واقرأ الحوار كاملًا مع ملاحظات «لماذا قلنا هذا».</li>
        <li>أعد تمثيل الحوار من صفحة الموقف: <b>أنا البائع / أنا الزبون</b>.</li>
        <li>ثبّت الجمل في <b>بنك الجمل</b> عبر <b>البطاقات</b> (تكرار متباعد).</li>
        <li>اختبر نفسك في <b>التدريب التفاعلي</b> حيث يردّ عليك التطبيق كزبون حقيقي.</li>
      </ol>
    </div>
    <div class="box">
      <h3>🔧 دليل التوسعة (كيف يكبر البنك إلى 1000+ جملة)</h3>
      <p>البنية مصممة للتوسع: كل بيانات المحتوى ملفات JavaScript في مجلد <code class="k">data/</code> ويمكن إضافة عبارات وحوارات ومواقف جديدة بلا حد:</p>
      <ul>
        <li><code class="k">data/sales/part*.js</code> — فصول قسم البيع (عبارات + جداول + أدلة).</li>
        <li><code class="k">data/sales/situations.js</code> — المواقف الكاملة (حوار + مفردات + قواعد + نسخ رسمي/عفوي).</li>
        <li><code class="k">data/sales/culture.js</code> — مقالات ثقافة السوق.</li>
        <li><code class="k">data/core/analyses.js</code> — التحليل الثلاثي العميق للجمل.</li>
        <li><code class="k">data/train/trainers.js</code> — سيناريوهات التدريب التفاعلي.</li>
      </ul>
      <p>بنية عبارة واحدة: <code class="k">{a: العربية, i: الإندونيسية, it: نطقها بالعربية, t: التركية, tt: نطقها, lv: 1-4 الرسمية, p: 1-5 الأولوية, w: متى, n: لماذا طبيعية, lit: حرفيًا, alt: بدائل}</code></p>
      <p>مستويات الجدية: <span class="badge b1">رسمي</span> مع زبون رسمي/كبير، <span class="badge b2">محايد</span> صالح في كل موقف، <span class="badge b3">عادي</span> الاستخدام اليومي، <span class="badge b4">عففي جدًا</span> فقط مع شباب/أصدقاء. الأولوية <code class="k">p:1</code> تعني من أهم 50 جملة في البنك كله.</p>
      <p class="mini-note">بنك الجمل يرتّب نفسه تلقائيًا حسب الأولوية، لذا أي عبارات تُضاف لاحقًا تنزل في مكانها الصحيح دون تعديل الكود.</p>
    </div>`;
  };

  /* ---------- أحداث عامة (تفويض) ---------- */
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-act]"); if (!b) return;
    const act = b.dataset.act;
    if (act === "speak") speak(b.dataset.text, b.dataset.code, b.dataset.rate ? parseFloat(b.dataset.rate) : (App.slowMode ? 0.65 : undefined));
    else if (act === "copy") copyText(b.dataset.text);
    else if (act === "learn") {
      const id = b.dataset.id;
      if (learned.has(id)) { learned.delete(id); toast("أُزيلت من «أنهيتها»"); }
      else { learned.add(id); toast("أحسنت! سُجّلت كجملة أتممتها ✓"); App.track && App.track("vocab"); }
      saveLearned();
      const card = document.getElementById("pc-" + id);
      if (card) { card.classList.toggle("learned", learned.has(id)); const btn = card.querySelector('[data-act="learn"]'); if (btn) btn.classList.toggle("done", learned.has(id)); }
    }
    else if (act === "fav") {
      const id = b.dataset.id;
      if (favs.has(id)) favs.delete(id); else favs.add(id);
      saveFavs(); b.classList.toggle("faved", favs.has(id)); b.textContent = favs.has(id) ? "❤️" : "🤍";
    }
    else if (act === "export") {
      const data = { learned: [...learned], favs: [...favs], leitner: store.get("leitner", {}), date: new Date().toISOString() };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "gl-progress.json"; a.click();
      toast("تم تصدير ملف تقدمك ⬇️");
    }
    else if (act === "import") {
      const inp = document.createElement("input"); inp.type = "file"; inp.accept = ".json";
      inp.onchange = () => {
        const f = inp.files[0]; if (!f) return;
        const r = new FileReader();
        r.onload = () => { try {
          const d = JSON.parse(r.result);
          learned = new Set([...learned, ...(d.learned || [])]); favs = new Set([...favs, ...(d.favs || [])]);
          saveLearned(); saveFavs();
          if (d.leitner) store.set("leitner", { ...store.get("leitner", {}), ...d.leitner });
          toast("تم الاستيراد بنجاح ✅"); Views.settings();
        } catch (err) { toast("ملف غير صالح"); } };
        r.readAsText(f);
      };
      inp.click();
    }
    else if (act === "reset") {
      if (confirm("هل تريد فعلًا حذف كل التقدم (الجمل المنها، المفضلة، صناديق الحفظ)؟")) {
        learned = new Set(); favs = new Set(); store.set("leitner", {});
        saveLearned(); saveFavs(); toast("تم التصفير"); Views.settings();
      }
    }
  });

  /* ---------- الهيدر: بحث + لغة + قائمة ---------- */
  function bindHeader() {
    const inp = $("#gsearch");
    let t;
    inp.addEventListener("input", () => {
      clearTimeout(t);
      t = setTimeout(() => { if (inp.value.trim().length >= 2) location.hash = "#/search/" + encodeURIComponent(inp.value.trim()); }, 350);
    });
    inp.addEventListener("keydown", e => { if (e.key === "Enter") inp.blur(); });
    $("#langToggle").addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      settings.lang = b.dataset.lang; store.set("settings", settings);
      document.querySelectorAll("#langToggle button").forEach(x => x.classList.toggle("on", x === b));
      route(); toast("تم تغيير اللغة المعروضة");
    });
    document.querySelectorAll("#langToggle button").forEach(x => x.classList.toggle("on", x.dataset.lang === settings.lang));
    $("#burger").addEventListener("click", () => { $("#drawer").classList.add("open"); $("#scrim").classList.add("show"); });
    $("#scrim").addEventListener("click", () => { $("#drawer").classList.remove("open"); $("#scrim").classList.remove("show"); });
    $("#drawerChapters").innerHTML = DB.chapters.filter(c => (c.group || "sales") === "sales").map(c => `<a class="sub" href="#/chapter/${c.id}">${c.icon || "📄"} ${esc(c.title)}</a>`).join("");
    $("#drawerAcademy").innerHTML = DB.chapters.filter(c => c.group === "academy").map(c => `<a class="sub" href="#/chapter/${c.id}">${c.icon || "📄"} ${esc(c.title)}</a>`).join("");
  }

  /* ---------- تشغيل ---------- */
  window.addEventListener("hashchange", route);
  bindHeader();
  route();
  if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  return { esc, $, toast, store, settings, learned, favs, LV, lvBadge, speak, copyText, allPhrases, bankSorted, phraseById, chapter, phraseCard, phrasesList, table, norm, route, Views, refreshSets() { learned = new Set(store.get("learned", [])); favs = new Set(store.get("favs", [])); } };
})();

/* إتاحة الوحدة لكل ملفات التطبيق */
window.App = App;
