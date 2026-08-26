/* ===== محرك التعلّم المشترك: SRS + تقييم + تصفية المحتوى (متصفح وNode) ===== */
"use strict";
(function (root) {
  const DAY = 24 * 3600 * 1000;
  const RELEARN_MS = 10 * 60 * 1000;
  /* فواصل الصناديق بعد التقييم الجيد/السهل — بالأيام. الصندوق 1 جديد */
  const INTERVALS = [0, 1, 2, 4, 8, 16];
  const BOX_LABELS = { 1: "جديدة", 2: "يتعلّم", 3: "مألوفة", 4: "قوية", 5: "متقنة" };

  const SALES_PATH = [
    "attract", "welcome", "address", "products", "needs", "persuade",
    "prices", "bargain", "checkout", "reject", "complaints", "hesitant",
    "foreign", "wholesale", "messaging", "courtesy", "smalltalk",
    "moneypool", "life-aftersales"
  ];
  const ACADEMY_CORE = ["intro", "questions", "verbs", "time", "feelings", "themes"];

  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[أإآ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/[ًٌٍَُِّْ]/g, "")
      .replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
  }

  function isDash(s) { return !s || s === "—" || !String(s).trim(); }

  function isImportedChapter(id) {
    return String(id || "").startsWith("learn-");
  }

  function isImportedPhrase(p) {
    if (!p) return false;
    if (p.mono) return true;
    return isImportedChapter(p.ch);
  }

  function hasLangText(p, dir) {
    if (!p) return false;
    if (dir === "tr" || dir === "trr") return !isDash(p.t);
    if (dir === "id" || dir === "idr") return !isDash(p.i);
    return !isDash(p.i) || !isDash(p.t);
  }

  function targetText(p, lang) {
    if (!p) return "";
    return lang === "tr" ? (isDash(p.t) ? "" : p.t) : (isDash(p.i) ? "" : p.i);
  }

  function applySrs(cur, grade, now) {
    const prev = cur || { box: 1, due: 0, lapses: 0, reps: 0 };
    let box = prev.box || 1;
    let lapses = prev.lapses || 0;
    const reps = (prev.reps || 0) + 1;
    let again = false;
    let due;
    if (grade === "again") {
      box = 1;
      lapses += 1;
      again = true;
      due = now + RELEARN_MS;
    } else if (grade === "hard") {
      box = Math.max(1, Math.min(box, 2));
      due = now + DAY;
    } else if (grade === "easy") {
      box = Math.min(5, box + 2);
      due = now + INTERVALS[box] * DAY;
    } else {
      box = Math.min(5, box + 1);
      due = now + INTERVALS[box] * DAY;
    }
    return { box: box, due: due, lapses: lapses, reps: reps, again: again };
  }

  function grade(resp, turn, lang) {
    const acc = (turn && turn.accept) || {};
    const list = Array.isArray(acc)
      ? acc.map(function (x) { return (lang === "id" ? x.i : x.t) || x; })
      : (acc[lang] || acc.i || acc.t || []);
    const keys = (lang === "id" ? (turn && turn.keysId) : (turn && turn.keysTr)) || [];
    const r = norm(resp);
    if (!r) return 0;
    const norms = list.map(norm).filter(Boolean);
    if (norms.some(function (a) { return a === r; })) return 3;
    if (norms.some(function (a) {
      const shorter = a.length <= r.length ? a : r;
      const longer = a.length <= r.length ? r : a;
      return longer.indexOf(shorter) !== -1 && shorter.length >= 8 && shorter.length / longer.length >= 0.75;
    })) return 3;
    let best = 0;
    norms.forEach(function (a) {
      const aT = a.split(" ");
      const rT = {};
      r.split(" ").forEach(function (w) { rT[w] = true; });
      const hit = aT.filter(function (w) { return rT[w]; }).length;
      best = Math.max(best, hit / Math.max(aT.length, 1));
    });
    const keyHits = keys.filter(function (k) { return r.indexOf(norm(k)) !== -1; }).length;
    const keyScore = keys.length ? keyHits / keys.length : 0;
    const score = Math.max(best, keyScore * 0.95);
    if (score >= 0.65) return 3;
    if (score >= 0.4) return 2;
    if (score >= 0.18) return 1;
    return 0;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function localDayKey(d) {
    const x = d || new Date();
    const y = x.getFullYear();
    const m = String(x.getMonth() + 1).padStart(2, "0");
    const day = String(x.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + day;
  }

  function dueCount(leitner, now) {
    const b = leitner || {};
    const t = now || Date.now();
    return Object.keys(b).filter(function (id) { return t >= (b[id].due || 0); }).length;
  }

  root.Engine = {
    DAY: DAY,
    RELEARN_MS: RELEARN_MS,
    INTERVALS: INTERVALS,
    BOX_LABELS: BOX_LABELS,
    SALES_PATH: SALES_PATH,
    ACADEMY_CORE: ACADEMY_CORE,
    norm: norm,
    isDash: isDash,
    isImportedChapter: isImportedChapter,
    isImportedPhrase: isImportedPhrase,
    hasLangText: hasLangText,
    targetText: targetText,
    applySrs: applySrs,
    grade: grade,
    shuffle: shuffle,
    localDayKey: localDayKey,
    dueCount: dueCount
  };
})(typeof window !== "undefined" ? window : globalThis);
