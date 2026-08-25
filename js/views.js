/* ===== صفحات: المواقف، الثقافة، الأساسيات، الأرقام، البنك، المقارنة ===== */
"use strict";

(function () {
  const { esc, $, LV, lvBadge, phrasesList, phraseCard, table, allPhrases, bankSorted, toast } = App;

  /* ============ المواقف الكاملة ============ */
  App.Views.situations = function () {
    const kinds = { situation: "🎬 موقف", bargain: "🤝 مساومة", complaint: "😤 شكوى", wholesale: "📦 جملة", message: "📱 مراسلة" };
    $("#view").innerHTML = `
    <div class="section-title">🎬 المواقف الكاملة <span class="line"></span></div>
    <div class="callout tip">منهج كل موقف: <b>الموقف ← الحوار الكامل ← الكلمات المهمة ← القاعدة ← النطق ← لماذا هذه العبارة؟ ← نسخة أكثر رسمية وأكثر عفوية ← إعادة تمثيل الحوار</b> (أنت البائع أو الزبون).</div>
    <div class="grid-cards">
      ${DB.situations.map(s => `
        <a class="chapter-card" href="#/situation/${s.id}">
          <h3>${esc(s.title)}</h3><p>${esc(s.sub || "")}</p>
          <span class="tag">${kinds[s.kind] || "🎬"}</span>
          <span class="tag">${(s.turns || []).length} جولة</span>
          <span class="tag">${(s.vocab || []).length} كلمة</span>
        </a>`).join("")}
    </div>`;
  };

  App.Views.situation = function (id) {
    const s = DB.situations.find(x => x.id === id);
    if (!s) { App.Views.situations(); return; }
    const who = { S: "🧑‍💼 البائع", C: "🛒 الزبون" };
    $("#view").innerHTML = `
    <div class="crumbs"><a href="#/situations">🎬 المواقف</a> ‹ ${esc(s.title)}</div>
    <div class="box"><h3>${esc(s.title)}</h3><p style="color:var(--sub)">${esc(s.sub || "")}</p>
      ${s.context ? `<div class="callout info" style="margin-top:8px"><b>الموقف:</b> ${esc(s.context)}</div>` : ""}</div>

    <div class="box"><h3>📜 الحوار الكامل</h3>
      <div class="dlg">
        ${(s.turns || []).map((t, idx) => `
        <div class="bubble ${t.who}">
          <div class="who">${who[t.who] || ""}</div>
          <div class="btools">
            ${t.i ? `<button class="icon-btn" data-act="speak" data-code="id-ID" data-text="${esc(t.i)}" title="اسمع بالإندونيسية">🔊</button>` : ""}
            ${t.t ? `<button class="icon-btn" data-act="speak" data-code="tr-TR" data-text="${esc(t.t)}" title="اسمع بالتركية">🔊</button>` : ""}
          </div>
          <div class="ar">${esc(t.a)}</div>
          ${t.i ? `<div class="lang-block id" style="margin:0"><div class="ltext">${esc(t.i)}</div>${t.it ? `<div class="ltrans">النطق: ${esc(t.it)}</div>` : ""}</div>` : ""}
          ${t.t ? `<div class="lang-block tr" style="margin:0"><div class="ltext">${esc(t.t)}</div>${t.tt ? `<div class="ltrans">النطق: ${esc(t.tt)}</div>` : ""}</div>` : ""}
          ${t.n ? `<div class="why">💡 ${esc(t.n)}</div>` : ""}
        </div>`).join("")}
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">
        <a class="btn primary sm" href="#/practice/${s.id}/S/id">🎭 أعد تمثيله: أنا البائع (🇮🇩)</a>
        <a class="btn primary sm" href="#/practice/${s.id}/S/tr">🎭 أنا البائع (🇹🇷)</a>
        <a class="btn ghost sm" href="#/practice/${s.id}/C/id">🎭 أنا الزبون (🇮🇩)</a>
        <a class="btn ghost sm" href="#/practice/${s.id}/C/tr">🎭 أنا الزبون (🇹🇷)</a>
      </div>
    </div>

    ${(s.vocab || []).length ? `<div class="box"><h3>🔑 الكلمات المهمة في هذا الموقف</h3>${table({ head: ["العربية", "🇮🇩 الإندونيسية", "النطق", "🇹🇷 التركية", "النطق"], rows: s.vocab.map(v => [v.a, v.i, v.it || "", v.t, v.tt || ""]) })}</div>` : ""}

    ${(s.grammar || []).length ? `<div class="box"><h3>🧩 القاعدة التي تحتاجها هنا فقط</h3>${s.grammar.map(g => `<div class="callout info"><b>${esc(g.t)}</b><br>${esc(g.b)}</div>`).join("")}</div>` : ""}

    ${s.why ? `<div class="box guide"><h3>❓ لماذا استخدمنا هذه العبارات؟</h3>${s.why}</div>` : ""}

    ${(s.variants || []).length ? `<div class="box"><h3>🎚️ نسخ أكثر رسمية وأكثر عفوية</h3>${s.variants.map(v => `
      <div class="callout ${v.kind === "formal" ? "info" : "warn"}" style="margin:8px 0">
        <b>${v.kind === "formal" ? "👔 أكثر رسمية:" : v.kind === "casual" ? "😎 أكثر عفوية:" : "العبارة:"}</b> ${esc(v.a)}<br>
        ${v.i ? `<span class="badge" style="background:var(--id-soft);color:var(--id)">🇮🇩</span> <span class="ltr" style="font-weight:700">${esc(v.i)}</span> ${v.it ? `<span class="mini-note">(${esc(v.it)})</span>` : ""}<br>` : ""}
        ${v.t ? `<span class="badge" style="background:var(--tr-soft);color:var(--tr)">🇹🇷</span> <span class="ltr" style="font-weight:700">${esc(v.t)}</span> ${v.tt ? `<span class="mini-note">(${esc(v.tt)})</span>` : ""}` : ""}
      </div>`).join("")}</div>` : ""}`;
  };

  /* ============ ثقافة السوق ============ */
  App.Views.culture = function () {
    $("#view").innerHTML = `
    <div class="section-title">💡 ثقافة السوق وأسراره <span class="line"></span></div>
    <div class="callout tip">اللغة 50% من البيع — والـ50% الباقية: كيف تُخاطب، ومتى تساوم، ولغة الجسد، وما الذي يحرج الزبون أو يفرّحه. هذه خبرة ميدانية لا توجد في الكتب.</div>
    ${DB.culture.map(c => `
      <details class="box" ${c.open ? "open" : ""}>
        <summary>${c.icon || "💡"} ${esc(c.title)}</summary>
        <div class="dbody">${c.body}</div>
      </details>`).join("")}`;
  };

  /* ============ الأساسيات ============ */
  App.Views.basics = function () {
    const B = DB.basics || {};
    $("#view").innerHTML = `
    <div class="section-title">🔤 الأساسيات والنطق <span class="line"></span></div>
    <div class="callout tip">قبل السوق: الحروف وكيف ينطقها العرب دون أخطاء + التحيات + عبارات النجاة. الإندونيسية والتركية أسهل مما تظن — <b>لا جنس ذكر/أنثى في الأفعال ولا تصريف للأزمنة المعقد</b>، وهذه أنباء رائعة لك.</div>
    ${(B.alpha || []).map(a => `
      <details class="box" ${a.open ? "open" : ""}>
        <summary>${a.icon} ${esc(a.title)}</summary>
        <div class="dbody">
          ${a.intro || ""}
          ${table({ head: ["الحرف/الصوت", "النطق بالعربية", "مثال", "معناه"], rows: a.rows.map(r => [r[0], r[1], r[2], r[3]]) })}
          ${a.notes ? `<div class="callout warn"><b>مصائد العرب في هذه اللغة:</b><br>${a.notes}</div>` : ""}
        </div>
      </details>`).join("")}
    ${(B.notes || []).map(n => `<div class="box"><h3>${esc(n.t)}</h3>${n.b}</div>`).join("")}
    ${(B.survival || []).length ? `<div class="section-title">🆘 عبارات النجاة الأساسية <span class="line"></span></div>${phrasesList(B.survival)}` : ""}`;
  };

  /* ============ الأرقام ============ */
  App.Views.numbers = function () {
    const N = (DB.basics || {}).numbers || {};
    $("#view").innerHTML = `
    <div class="section-title">🔢 الأرقام والأسعار <span class="line"></span></div>
    ${N.intro || ""}
    ${(N.tables || []).map(t => `<div class="box"><h3>${esc(t.title)}</h3>${table(t)}${t.note ? `<div class="callout warn" style="margin-top:8px">${t.note}</div>` : ""}</div>`).join("")}
    ${(N.phrases || []).length ? `<div class="section-title">💵 عبارات الأرقام في السوق <span class="line"></span></div>${phrasesList(N.phrases)}` : ""}`;
  };

  /* ============ بنك الجمل ============ */
  const TIERS = [[50, "أهم 50 جملة — عمود الصناعة"], [100, "أهم 100"], [250, "أهم 250"], [500, "أهم 500"], [Infinity, "البنك كله (نحو 1000)"]];
  let bankTier = 0;

  App.Views.bank = function () {
    const bank = bankSorted();
    let cum = [], sizes = [];
    for (const [n] of TIERS) { const slice = bank.slice(0, n); sizes.push(slice.length); cum.push(slice); }
    const t = bankTier, list = cum[t] || bank;
    const doneIn = list.filter(p => App.learned.has(p.id)).length;
    $("#view").innerHTML = `
    <div class="section-title">⭐ بنك الجمل الجاهزة للبائع <span class="line"></span></div>
    <div class="callout tip">كل جمل هذا التطبيق تدخل البنك تلقائيًا وترتّب نفسها بالأولوية (p1 = أهم جملة في السوق). تعلّمها تدريجيًا: أتممت 50؟ انتقل للمئة… وهكذا حتى 1000. اضغط ✓ على كل جملة أنهيتها.</div>
    <div class="chips" id="tierTabs">
      ${TIERS.map(([n, label], i) => `<button class="chip ${i === t ? "on" : ""}" data-t="${i}">${label} <span class="mini-note">(${sizes[i]})</span></button>`).join("")}
    </div>
    <div class="box">
      <div class="progress"><i style="width:${Math.round(doneIn / Math.max(list.length, 1) * 100)}%"></i></div>
      <p style="margin-top:8px">في هذا المستوى: أنهيت <b>${doneIn}</b> من <b>${list.length}</b> — من مجموع بنك يضم <b>${bank.length}</b> جملة ويكبر بإضافة محتوى جديد.</p>
      <a class="btn primary sm" href="#/cards" style="margin-top:6px">🃌 احفظ هذا المستوى بالبطاقات</a>
    </div>
    <div id="bankList">${phrasesList(list)}</div>`;
    $("#tierTabs").addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      bankTier = +b.dataset.t; App.Views.bank();
    });
  };

  /* ============ المقارنة الثلاثية ============ */
  App.Views.compare = function (q) {
    const items = DB.analyses || [];
    const nq = App.norm(q || "");
    const shown = nq ? items.filter(x => App.norm(x.a + " " + x.id?.text + " " + x.tr?.text).includes(nq)) : items;
    $("#view").innerHTML = `
    <div class="section-title">🔁 المقارنة الثلاثية — «كيف أقولها كعربي؟» <span class="line"></span></div>
    <div class="callout tip">اختر جملة عربية يقولها البائع العربي عادةً — ونريك ما يقوله <b>فعلًا</b> البائع الإندونيسي والتركي في نفس اللحظة: الترجمة الطبيعية، والحرفية إن اختلفت، والرسمية، ومتى تُستخدم، وهل تبدو طبيعية، والبديل الأفضل.</div>
    <div class="search-wrap" style="max-width:420px;margin:10px 0">
      <input id="cmpSearch" type="search" placeholder="ابحث في التحليلات…" value="${esc(q || "")}">
    </div>
    <div id="cmpList">
    ${shown.length ? shown.map(x => `
      <div class="phrase-card">
        <div class="ph-top"><div class="ph-ar">🇸🇦 ${esc(x.a)}</div></div>
        <div class="cmp-grid">
          ${x.id ? `
          <div class="compare-block" style="background:var(--id-soft);border:1px solid #f3d8c2">
            <div class="cb-head">🇮🇩 يقول الإندونيسي فعلًا ${lvBadge(x.id.lv)}</div>
            <div class="ltext">${esc(x.id.text)}</div>
            ${x.id.lit ? `<div class="ltrans">حرفيًا: ${esc(x.id.lit)}</div>` : ""}
            ${x.id.sound ? `<div class="ltrans">النطق: ${esc(x.id.sound)}</div>` : ""}
            ${x.id.when ? `<div class="ph-note"><b>متى؟</b> ${esc(x.id.when)}</div>` : ""}
            ${x.id.natural ? `<div class="ph-note"><span class="natural">✓ ${esc(x.id.natural)}</span></div>` : ""}
            ${x.id.better ? `<div class="ph-note"><b>أفضل منها:</b> ${esc(x.id.better)}</div>` : ""}
            <div style="margin-top:6px"><button class="icon-btn" data-act="speak" data-code="id-ID" data-text="${esc(x.id.text)}">🔊</button></div>
          </div>` : ""}
          ${x.tr ? `
          <div class="compare-block" style="background:var(--tr-soft);border:1px solid #d9dcf5">
            <div class="cb-head">🇹🇷 يقول التركي فعلًا ${lvBadge(x.tr.lv)}</div>
            <div class="ltext">${esc(x.tr.text)}</div>
            ${x.tr.lit ? `<div class="ltrans">حرفيًا: ${esc(x.tr.lit)}</div>` : ""}
            ${x.tr.sound ? `<div class="ltrans">النطق: ${esc(x.tr.sound)}</div>` : ""}
            ${x.tr.when ? `<div class="ph-note"><b>متى؟</b> ${esc(x.tr.when)}</div>` : ""}
            ${x.tr.natural ? `<div class="ph-note"><span class="natural">✓ ${esc(x.tr.natural)}</span></div>` : ""}
            ${x.tr.better ? `<div class="ph-note"><b>أفضل منها:</b> ${esc(x.tr.better)}</div>` : ""}
            <div style="margin-top:6px"><button class="icon-btn" data-act="speak" data-code="tr-TR" data-text="${esc(x.tr.text)}">🔊</button></div>
          </div>` : ""}
        </div>
        ${x.note ? `<div class="ph-note" style="margin-top:8px"><b>⚠️ ملاحظة الخبير:</b> ${esc(x.note)}</div>` : ""}
      </div>`).join("") : `<div class="empty"><div class="e">🔍</div>لا توجد تحليلات مطابقة — جرّب كلمة أخرى</div>`}
    </div>`;
    const inp = document.getElementById("cmpSearch");
    if (inp) inp.addEventListener("input", () => {
      clearTimeout(inp._t); inp._t = setTimeout(() => App.Views.compare(inp.value.trim()), 300);
    });
  };
})();
