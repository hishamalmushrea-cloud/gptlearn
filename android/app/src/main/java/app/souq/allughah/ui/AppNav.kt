package app.souq.allughah.ui

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.clickable
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextDirection
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import app.souq.allughah.data.LibDoc
import app.souq.allughah.data.LibraryRepo
import app.souq.allughah.domain.*

@Composable
fun AcademyRoot(vm: AcademyViewModel) {
    val snap by vm.snapshot.collectAsState()
    val nav = rememberNavController()
    if (!snap.onboarded) {
        Onboard(vm)
        return
    }
    Scaffold(
        bottomBar = { BottomBar(nav) }
    ) { pad ->
        NavHost(nav, startDestination = "home", modifier = Modifier.padding(pad)) {
            composable("home") { Home(vm, nav) }
            composable("learn") { LearnHub(vm, nav) }
            composable("chapter/{id}") { entry ->
                NativeChapterScreen(vm, entry.arguments?.getString("id")?.toIntOrNull() ?: 0)
            }
            composable("review") { ReviewScreen(vm) }
            composable("search") { SearchScreen(vm) }
            composable("more") { MoreScreen(vm, nav) }
            composable("vocab") { VocabScreen(vm) }
            composable("grammar") { GrammarScreen(vm) }
            composable("dialogues") { DialogueScreen(vm) }
            composable("travel") { PhraseList(vm, "سفر", "طوارئ", "فندق", "مطعم") }
            composable("sales") { PhraseList(vm, "بيع", "تفاوض", "ترحيب بيع", "عرض", "عملاء", "إغلاق بيع", "دفع", "عرض منتج", "سعر", "خدمة") }
            composable("dict") { DictScreen(vm) }
            composable("progress") { ProgressScreen(vm) }
            composable("settings") { SettingsScreen(vm) }
            composable("culture") { CultureScreen(vm) }
            composable("role") { RoleScreen(vm) }
            composable("compare") { CompareScreen(vm) }
            composable("quiz") { QuizScreen(vm) }
            composable("stories") { StoriesScreen(vm) }
            composable("verbs") { VerbScreen(vm) }
            composable("skills") { SkillMap(vm, nav) }
            composable("five") { FiveMin(vm) }
            composable("forgot") { ForgotInbox(vm) }
            composable("placement") { Placement(vm) }
            composable("shadow") { ShadowScreen(vm) }
            composable("letters") { LetterTrainer() }
            composable("chat") { PhraseList(vm, "دردشة") }
            composable("library") { LibraryScreen(vm) }
        }
    }
}

@Composable
private fun BottomBar(nav: NavHostController) {
    val route = nav.currentBackStackEntryAsState().value?.destination?.route
    NavigationBar {
        listOf(
            Triple("home", "الرئيسية", Icons.Default.Home),
            Triple("learn", "تعلّم", Icons.Default.MenuBook),
            Triple("review", "مراجعة", Icons.Default.Style),
            Triple("search", "بحث", Icons.Default.Search),
            Triple("more", "المزيد", Icons.Default.Apps),
        ).forEach { (r, l, ic) ->
            NavigationBarItem(
                selected = route == r,
                onClick = { nav.navigate(r) { launchSingleTop = true } },
                icon = { Icon(ic, l) },
                label = { Text(l) }
            )
        }
    }
}

@Composable
fun Onboard(vm: AcademyViewModel) {
    var step by remember { mutableIntStateOf(0) }
    var scoreId by remember { mutableIntStateOf(0) }
    var scoreTr by remember { mutableIntStateOf(0) }
    Column(Modifier.fillMaxSize().padding(24.dp).verticalScroll(rememberScrollState())) {
        Text("سوق اللغة", fontSize = 28.sp, fontWeight = FontWeight.Bold)
        Text("أكاديمية أوفلاين للإندونيسية والتركية — للمتحدث العربي")
        Spacer(Modifier.height(16.dp))
        when (step) {
            0 -> {
                Text("مرحبًا. تتعلّم لغة حقيقية للسوق والسفر والعمل، لا ترجمة حرفية.")
                Button(onClick = { step = 1 }) { Text("ابدأ") }
            }
            1 -> {
                Text("ماذا تريد أن تتعلم؟")
                Button(onClick = { vm.setMode("id"); vm.setActive(TargetLang.ID); step = 2 }) { Text("🇮🇩 الإندونيسية") }
                Button(onClick = { vm.setMode("tr"); vm.setActive(TargetLang.TR); step = 2 }) { Text("🇹🇷 التركية") }
                Button(onClick = { vm.setMode("both"); step = 2 }) { Text("الاثنتان معًا") }
            }
            2 -> {
                Text("اختبار استرشادي قصير (ليس شهادة رسمية)")
                Text("1) «يوجد» بالتركية؟")
                Row { Button(onClick = { scoreTr++; step = 3 }) { Text("var") }; Button(onClick = { step = 3 }) { Text("yok") } }
            }
            3 -> {
                Text("2) «ليس بعد» بالإندونيسية؟")
                Row { Button(onClick = { scoreId++; step = 4 }) { Text("belum") }; Button(onClick = { step = 4 }) { Text("tidak") } }
            }
            4 -> {
                val id = if (scoreId > 0) "A1" else "A0"
                val tr = if (scoreTr > 0) "A1" else "A0"
                Text("نتيجتك الاسترشادية: إندونيسية $id — تركية $tr")
                Button(onClick = { vm.setCefr(TargetLang.ID, id); vm.setCefr(TargetLang.TR, tr); vm.finishOnboard() }) { Text("ابدأ من هذا المستوى") }
                OutlinedButton(onClick = { vm.setCefr(TargetLang.ID, "A0"); vm.setCefr(TargetLang.TR, "A0"); vm.finishOnboard() }) { Text("أبدأ من الصفر رغم ذلك") }
            }
        }
    }
}

@Composable
fun Home(vm: AcademyViewModel, nav: NavHostController) {
    val s by vm.snapshot.collectAsState()
    val lang = vm.activeLang()
    Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp)) {
        Row(verticalAlignment = Alignment.CenterVertically) {
            Text("مرحبًا 👋", fontSize = 24.sp, fontWeight = FontWeight.Bold, modifier = Modifier.weight(1f))
            FilterChip(selected = lang == TargetLang.ID, onClick = { vm.setActive(TargetLang.ID) }, label = { Text("🇮🇩") })
            Spacer(Modifier.width(6.dp))
            FilterChip(selected = lang == TargetLang.TR, onClick = { vm.setActive(TargetLang.TR) }, label = { Text("🇹🇷") })
        }
        Text("هدف اليوم: ${s.dailyGoal} دقيقة — أنجزت ${s.minutesToday}")
        LinearProgressIndicator(progress = { (s.minutesToday / s.dailyGoal.toFloat()).coerceIn(0f, 1f) }, modifier = Modifier.fillMaxWidth().padding(vertical = 8.dp))
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            AssistChip(onClick = {}, label = { Text("سلسلة ${s.streak} يوم") })
            AssistChip(onClick = { nav.navigate("review") }, label = { Text("مراجعة ${vm.dueCount()}") })
        }
        Card(Modifier.fillMaxWidth().padding(vertical = 8.dp)) {
            Column(Modifier.padding(16.dp)) {
                Text("تابع من حيث توقفت", fontWeight = FontWeight.Bold)
                Text(s.resume.ifBlank { "ابدأ درس اليوم" })
                Button(onClick = { nav.navigate("learn"); vm.resume("learn") }) { Text("ابدأ درس اليوم") }
            }
        }
        Card(Modifier.fillMaxWidth().padding(vertical = 4.dp)) {
            Column(Modifier.padding(16.dp)) {
                Text("🇮🇩 ${s.cefrId} — ${(vm.progressOf(TargetLang.ID) * 100).toInt()}٪")
                LinearProgressIndicator(progress = { vm.progressOf(TargetLang.ID) }, modifier = Modifier.fillMaxWidth())
                Spacer(Modifier.height(8.dp))
                Text("🇹🇷 ${s.cefrTr} — ${(vm.progressOf(TargetLang.TR) * 100).toInt()}٪")
                LinearProgressIndicator(progress = { vm.progressOf(TargetLang.TR) }, modifier = Modifier.fillMaxWidth())
            }
        }
        Text(LearningEngine.recommend(vm.weakMap(), vm.progressOf(TargetLang.ID), vm.progressOf(TargetLang.TR), s.dualRatioId / 100f), modifier = Modifier.padding(vertical = 8.dp))
        FlowButtons(
            listOf(
                "5 دقائق فقط" to { nav.navigate("five") },
                "نطق ظلّي" to { nav.navigate("shadow") },
                "نسيت أقولها" to { nav.navigate("forgot") },
                "محادثة" to { nav.navigate("dialogues") },
                "قاموس" to { nav.navigate("dict") },
                "قواعد" to { nav.navigate("grammar") },
                "اختبار سريع" to { nav.navigate("quiz") },
                "خريطة المهارات" to { nav.navigate("skills") },
            )
        )
    }
}

@Composable
private fun FlowButtons(items: List<Pair<String, () -> Unit>>) {
    Column { items.chunked(2).forEach { row ->
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            row.forEach { (t, a) ->
                OutlinedButton(onClick = a, modifier = Modifier.weight(1f).padding(vertical = 4.dp)) { Text(t) }
            }
            if (row.size == 1) Spacer(Modifier.weight(1f))
        }
    } }
}

@Composable
fun LearnHub(vm: AcademyViewModel, nav: NavHostController) {
    val lang = vm.activeLang()
    Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp)) {
        Text("مسار ${lang.arName}", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        vm.filteredLessons(lang).forEach { ls ->
            Card(Modifier.fillMaxWidth().padding(vertical = 6.dp).clickable { vm.resume(ls.id) }) {
                Column(Modifier.padding(16.dp)) {
                    Text("${ls.level} · ${ls.unit} · ${ls.minutes} د", style = MaterialTheme.typography.labelMedium)
                    Text(ls.title, fontWeight = FontWeight.Bold)
                    Text("${ls.wordIds.size} كلمات · ${ls.phraseIds.size} عبارات")
                }
            }
        }
        Text("فصول المحتوى Native", fontWeight = FontWeight.Bold, fontSize = 20.sp, modifier = Modifier.padding(top = 18.dp))
        Text("كل عبارة ثنائية اللغة متاحة أوفلاين داخل فصولها.")
        vm.nativeChapters.forEachIndexed { index, chapter ->
            Card(
                Modifier.fillMaxWidth().padding(vertical = 4.dp).clickable { nav.navigate("chapter/$index") }
            ) {
                Column(Modifier.padding(14.dp)) {
                    Text(chapter.title, fontWeight = FontWeight.Bold)
                    Text("${chapter.phrases.size} عبارة · ${if (chapter.group == "sales") "بيع" else if (chapter.group == "survival") "نجاة" else "أكاديمية وحياة"}")
                }
            }
        }
        Text("وحدات قصيرة 5–15 دقيقة. دروس أطول في المسار المهني بعد B1.", modifier = Modifier.padding(top = 12.dp))
        Button(onClick = { nav.navigate("vocab") }) { Text("المفردات") }
    }
}

@Composable
fun NativeChapterScreen(vm: AcademyViewModel, index: Int) {
    val s by vm.snapshot.collectAsState()
    val chapter = vm.nativeChapters.getOrNull(index)
    if (chapter == null) {
        Text("الفصل غير موجود", modifier = Modifier.padding(16.dp))
        return
    }
    LazyColumn(Modifier.padding(16.dp)) {
        item {
            Text(chapter.title, fontWeight = FontWeight.Bold, fontSize = 22.sp)
            Text("${chapter.phrases.size} عبارة · يعمل دون اتصال", modifier = Modifier.padding(bottom = 8.dp))
        }
        items(chapter.phrases, key = { it.id }) { phrase ->
            PhraseCard(phrase, vm, s.hideArabic, vm.activeLang())
        }
    }
}

@Composable
fun VocabScreen(vm: AcademyViewModel) {
    val lang = vm.activeLang()
    val s by vm.snapshot.collectAsState()
    LazyColumn(Modifier.fillMaxSize().padding(16.dp)) {
        items(vm.filteredWords(lang), key = { it.id }) { w ->
            Card(Modifier.fillMaxWidth().padding(vertical = 6.dp)) {
                Column(Modifier.padding(12.dp)) {
                    Text(w.lemma, fontWeight = FontWeight.Bold, style = TextStyle(textDirection = TextDirection.Ltr, fontSize = 22.sp))
                    if (!s.hideArabic) Text(w.arabic)
                    Text("نطق: ${w.phoneticAr} · ${w.pos} · ${w.level} · #${w.frequencyRank}")
                    Text("${w.example} — ${w.exampleAr}")
                    Row {
                        IconButton(onClick = { vm.speak(w.lemma, lang, false) }) { Icon(Icons.Default.VolumeUp, null) }
                        IconButton(onClick = { vm.speak(w.lemma, lang, true) }) { Icon(Icons.Default.SlowMotionVideo, null) }
                        IconButton(onClick = { vm.toggleFav(w.id) }) { Icon(if (s.favs.contains(w.id)) Icons.Default.Star else Icons.Default.StarBorder, null) }
                        TextButton(onClick = { vm.grade(w.id, "vocab", SrsGrade.Good) }) { Text("أعرفها") }
                    }
                }
            }
        }
    }
}

@Composable
fun PhraseList(vm: AcademyViewModel, vararg topics: String) {
    val s by vm.snapshot.collectAsState()
    val lang = vm.activeLang()
    val list = vm.phrases.filter { phraseMatchesTopic(it, topics.toSet()) }
    LazyColumn(Modifier.padding(16.dp)) {
        item {
            Text("${list.size} عبارة أوفلاين", style = MaterialTheme.typography.titleMedium, modifier = Modifier.padding(bottom = 8.dp))
        }
        items(list, key = { it.id }) { p -> PhraseCard(p, vm, s.hideArabic, lang) }
    }
}

private fun phraseMatchesTopic(p: Phrase, requested: Set<String>): Boolean {
    if (p.topic in requested) return true
    val parts = p.topic.split("|", limit = 2)
    if (parts.size < 2) return false
    val group = parts[0]
    val title = parts[1]
    if (requested.contains("بيع") && group == "sales") return true
    if (requested.contains("سفر") && (title.contains("سفر") || title.contains("مطار") || title.contains("فندق") || title.contains("تاكسي") || title.contains("طريق"))) return true
    if (requested.contains("مطعم") && (title.contains("طعام") || title.contains("مطعم"))) return true
    if (requested.contains("عمل") && (title.contains("عمل") || title.contains("مهن") || title.contains("تجارة"))) return true
    return requested.any { title.contains(it) }
}

@Composable
fun PhraseCard(p: Phrase, vm: AcademyViewModel, hideAr: Boolean, lang: TargetLang) {
    val s by vm.snapshot.collectAsState()
    Card(Modifier.fillMaxWidth().padding(vertical = 6.dp)) {
        Column(Modifier.padding(12.dp)) {
            if (!hideAr) Text(p.arabic, fontWeight = FontWeight.Bold)
            if (lang == TargetLang.ID || s.mode == "both") {
                Text(p.idText, style = TextStyle(textDirection = TextDirection.Ltr, fontSize = 18.sp))
                Text("🇮🇩 ${p.idPhonetic}")
            }
            if (lang == TargetLang.TR || s.mode == "both") {
                Text(p.trText, style = TextStyle(textDirection = TextDirection.Ltr, fontSize = 18.sp))
                Text("🇹🇷 ${p.trPhonetic}")
            }
            Text("رسميّة: ${p.register} · ${p.level}")
            Text("متى: ${p.whenTo}")
            Text("لماذا طبيعية: ${p.whyNatural}")
            if (p.literal.isNotBlank()) Text("حرفيًا (للتعليم فقط): ${p.literal}")
            if (p.cultural.isNotBlank()) Text("ثقافة: ${p.cultural}")
            Row {
                val txt = if (lang == TargetLang.TR) p.trText else p.idText
                IconButton(onClick = { vm.speak(txt, lang, false) }) { Icon(Icons.Default.VolumeUp, null) }
                IconButton(onClick = { vm.speak(txt, lang, true) }) { Icon(Icons.Default.SlowMotionVideo, null) }
                IconButton(onClick = { vm.toggleFav(p.id) }) { Icon(Icons.Default.Favorite, null) }
                TextButton(onClick = { vm.grade(p.id, "phrase", SrsGrade.Good) }) { Text("اختبرني لاحقًا") }
            }
        }
    }
}

@Composable
fun GrammarScreen(vm: AcademyViewModel) {
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        vm.filteredGrammar(vm.activeLang()).forEach { g ->
            Card(Modifier.fillMaxWidth().padding(vertical = 6.dp)) {
                Column(Modifier.padding(12.dp)) {
                    Text(g.title, fontWeight = FontWeight.Bold)
                    Text("لماذا؟ ${g.why}")
                    Text(g.explanation)
                    g.examples.forEach { Text("· $it", style = TextStyle(textDirection = TextDirection.Ltr)) }
                    Text("خطأ شائع عند العرب: ${g.arabMistake}")
                    Text("لا تحفظ القاعدة فقط — لاحظ كيف يستخدمها الناس في الدروس.")
                }
            }
        }
    }
}

@Composable
fun DialogueScreen(vm: AcademyViewModel) {
    val lang = vm.activeLang()
    val s by vm.snapshot.collectAsState()
    var hideText by remember { mutableStateOf(false) }
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        Row { FilterChip(selected = hideText, onClick = { hideText = !hideText }, label = { Text("إخفاء النص") }) }
        vm.dialogues.forEach { d ->
            Text(d.title, fontWeight = FontWeight.Bold, fontSize = 20.sp)
            Text("${d.situation} · ${d.level}")
            d.turns.forEach { t ->
                val body = if (lang == TargetLang.TR) t.trText else t.idText
                Card(Modifier.fillMaxWidth().padding(vertical = 4.dp)) {
                    Column(Modifier.padding(12.dp)) {
                        Text(t.speaker, fontWeight = FontWeight.Bold)
                        if (!s.hideArabic) Text(t.arabic)
                        if (!hideText) Text(body, style = TextStyle(textDirection = TextDirection.Ltr))
                        Row {
                            IconButton(onClick = { vm.speak(body, lang, false) }) { Icon(Icons.Default.PlayArrow, null) }
                            IconButton(onClick = { vm.speak(body, lang, true) }) { Icon(Icons.Default.SlowMotionVideo, null) }
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun ReviewScreen(vm: AcademyViewModel) {
    val due = remember { vm.parseSrs().values.filter { it.dueAt <= System.currentTimeMillis() } }
    val pool = if (due.isNotEmpty()) due else vm.filteredWords(vm.activeLang()).take(5).map {
        ReviewCard(it.id, "vocab", 0, 0, 0, 0)
    }
    var i by remember { mutableIntStateOf(0) }
    val card = pool.getOrNull(i)
    Column(Modifier.padding(16.dp)) {
        Text("مراجعة متباعدة (SRS)", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        if (card == null) {
            Text("لا بطاقات مستحقة — أحسنت. جرّب 5 دقائق.")
            return
        }
        val w = vm.words.find { it.id == card.itemId }
        val p = vm.phrases.find { it.id == card.itemId }
        Text(LearningEngine.masteryLabel(card.box))
        Text(w?.lemma ?: p?.idText ?: card.itemId, fontSize = 28.sp, style = TextStyle(textDirection = TextDirection.Ltr))
        Text(w?.arabic ?: p?.arabic ?: "")
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.SpaceEvenly) {
            listOf(SrsGrade.Again to "Again", SrsGrade.Hard to "Hard", SrsGrade.Good to "Good", SrsGrade.Easy to "Easy").forEach { (g, l) ->
                Button(onClick = { vm.grade(card.itemId, card.kind, g); i++ }) { Text(l) }
            }
        }
    }
}

@Composable
fun SearchScreen(vm: AcademyViewModel) {
    var q by remember { mutableStateOf("") }
    val results = vm.search(q)
    Column(Modifier.padding(16.dp)) {
        OutlinedTextField(q, { q = it }, label = { Text("بحث عربي / إندونيسي / تركي") }, modifier = Modifier.fillMaxWidth())
        Text("بحث ضبابي أوفلاين — اكتب «كتاب» أو buku أو kitap")
        LazyColumn {
            items(results.size) { idx ->
                when (val r = results[idx]) {
                    is Phrase -> Text("عبارة: ${r.arabic} — ${r.idText} / ${r.trText}", Modifier.padding(8.dp))
                    is Word -> Text("كلمة: ${r.lemma} — ${r.arabic}", Modifier.padding(8.dp))
                    is Lesson -> Text("درس: ${r.title}", Modifier.padding(8.dp))
                    is GrammarRule -> Text("قاعدة: ${r.title}", Modifier.padding(8.dp))
                }
            }
        }
    }
}

@Composable
fun MoreScreen(vm: AcademyViewModel, nav: NavHostController) {
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        listOf(
            "النجاة / السفر" to "travel",
            "البيع والتجارة" to "sales",
            "دردشة واتساب" to "chat",
            "قاموس" to "dict",
            "ثقافة" to "culture",
            "تمثيل أدوار" to "role",
            "قارن اللغتين" to "compare",
            "قصص" to "stories",
            "مدرب الأفعال" to "verbs",
            "المكتبة المرجعية" to "library",
            "تحديد مستوى" to "placement",
            "حروف تركية" to "letters",
            "تقدمي" to "progress",
            "إعدادات" to "settings",
        ).forEach { (t, r) ->
            ListItem(headlineContent = { Text(t) }, modifier = Modifier.clickable { nav.navigate(r) })
            HorizontalDivider()
        }
    }
}

@Composable
fun DictScreen(vm: AcademyViewModel) {
    VocabScreen(vm)
}

@Composable
fun ProgressScreen(vm: AcademyViewModel) {
    val s by vm.snapshot.collectAsState()
    Column(Modifier.padding(16.dp).verticalScroll(rememberScrollState())) {
        Text("ملف التعلم", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        Text("XP إندونيسية ${s.xpId} · تركية ${s.xpTr}")
        Text("سلسلة ${s.streak} · وقت اليوم ${s.minutesToday} د")
        Text("نقاط ضعف: ${vm.weakMap()}")
        Text("الإنجازات الصادقة:")
        if (s.xpId + s.xpTr >= 20) Text("✓ أول جلسة حقيقية")
        if (s.streak >= 3) Text("✓ ثلاثة أيام متتالية")
        if (s.favs.size >= 5) Text("✓ خمس عبارات محفوظة")
        Text("الشهادة الداخلية ليست معادلة لـ TOMER أو اختبار رسمي.")
    }
}

@Composable
fun SettingsScreen(vm: AcademyViewModel) {
    val s by vm.snapshot.collectAsState()
    var backup by remember { mutableStateOf("") }
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        Text("الإعدادات", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        Text("وضع التعلم")
        Row {
            FilterChip(s.mode == "id", { vm.setMode("id") }, label = { Text("🇮🇩") })
            FilterChip(s.mode == "tr", { vm.setMode("tr") }, label = { Text("🇹🇷") })
            FilterChip(s.mode == "both", { vm.setMode("both") }, label = { Text("ازدواج") })
        }
        Text("نسبة الازدواج (إندونيسية ٪): ${s.dualRatioId}")
        Slider(s.dualRatioId.toFloat(), { vm.setRatio(it.toInt()) }, valueRange = 20f..80f)
        Text("هدف يومي")
        Row { listOf(10, 20, 30, 45, 60).forEach { n -> FilterChip(s.dailyGoal == n, { vm.setGoal(n) }, label = { Text("$n د") }) } }
        Row(verticalAlignment = Alignment.CenterVertically) {
            Text("إخفاء العربية (مستويات أعلى)")
            Switch(s.hideArabic, { vm.setHide(it) })
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            Text("وضع تركيز")
            Switch(s.focus, { vm.setFocus(it) })
        }
        Text("الخصوصية: لا شبكة في التعلم، لا تُرفع تسجيلات ولا التقدم.")
        Button(onClick = { backup = vm.store.export(s) }) { Text("تصدير نسخة احتياطية محلية") }
        if (backup.isNotBlank()) Text(backup, style = MaterialTheme.typography.bodySmall)
    }
}

@Composable
fun CultureScreen(vm: AcademyViewModel) {
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        vm.culture.forEach {
            Card(Modifier.padding(vertical = 6.dp).fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text(it.title, fontWeight = FontWeight.Bold)
                    if (it.caution) Text("⚠ تختلف حسب المنطقة والسياق")
                    Text(it.body)
                }
            }
        }
    }
}

@Composable
fun RoleScreen(vm: AcademyViewModel) {
    var i by remember { mutableIntStateOf(0) }
    val sc = vm.scenarios.getOrNull(i) ?: return
    var msg by remember { mutableStateOf("") }
    Column(Modifier.padding(16.dp).verticalScroll(rememberScrollState())) {
        Text(sc.title, fontWeight = FontWeight.Bold)
        Text(sc.objective)
        Text(sc.prompt)
        sc.choices.forEach { c ->
            OutlinedButton(onClick = {
                msg = if (c.correct) "مناسب: ${c.explain}" else "غير مناسب: ${c.explain}"
                if (!c.correct) vm.markWeak("speaking")
            }, modifier = Modifier.fillMaxWidth().padding(4.dp)) { Text(c.text) }
        }
        if (msg.isNotBlank()) Text(msg)
        TextButton(onClick = { i = (i + 1) % vm.scenarios.size; msg = "" }) { Text("سيناريو تالٍ") }
    }
}

@Composable
fun CompareScreen(vm: AcademyViewModel) {
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        Text("قارن اللغات — مفيد لوضع الازدواج", fontWeight = FontWeight.Bold)
        vm.phrases.take(8).forEach { p ->
            Card(Modifier.padding(vertical = 6.dp).fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text("ع: ${p.arabic}")
                    Text("🇮🇩 ${p.idText}", style = TextStyle(textDirection = TextDirection.Ltr))
                    Text("🇹🇷 ${p.trText}", style = TextStyle(textDirection = TextDirection.Ltr))
                    Text("ملاحظة ترتيب الكلمات: الإندونيسية SVO بلا تصريف؛ التركية SOV بلواحق.")
                }
            }
        }
    }
}

@Composable
fun QuizScreen(vm: AcademyViewModel) {
    var i by remember { mutableIntStateOf(0) }
    var score by remember { mutableIntStateOf(0) }
    val q = vm.quizzes.getOrNull(i)
    Column(Modifier.padding(16.dp)) {
        if (q == null) {
            Text("انتهى. النتيجة $score / ${vm.quizzes.size}")
            return
        }
        Text(q.prompt, fontWeight = FontWeight.Bold)
        q.options.forEachIndexed { idx, opt ->
            Button(onClick = {
                if (idx == q.answerIndex) score++ else vm.markWeak(q.skill)
                i++
            }, modifier = Modifier.fillMaxWidth().padding(4.dp)) { Text(opt) }
        }
        Text("بعد الخطأ نشرح السبب في بنك القواعد — ليست كلمة Wrong وحدها.")
    }
}

@Composable
fun StoriesScreen(vm: AcademyViewModel) {
    val lang = vm.activeLang()
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        vm.stories.filter { it.lang == lang }.forEach { st ->
            Text(st.title, fontWeight = FontWeight.Bold)
            Text(st.text, style = TextStyle(textDirection = TextDirection.Ltr))
            Text(st.arabic)
            IconButton(onClick = { vm.speak(st.text, lang, false) }) { Icon(Icons.Default.VolumeUp, null) }
        }
    }
}

@Composable
fun VerbScreen(vm: AcademyViewModel) {
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp)) {
        vm.verbs.filter { it.lang == vm.activeLang() }.forEach { v ->
            Card(Modifier.padding(6.dp).fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text("${v.infinitive} — ${v.meaning}", fontWeight = FontWeight.Bold)
                    v.forms.forEach { (k, va) -> Text("$k: $va") }
                    Text(v.example, style = TextStyle(textDirection = TextDirection.Ltr))
                }
            }
        }
    }
}

@Composable
fun SkillMap(vm: AcademyViewModel, nav: NavHostController) {
    val nodes = listOf("تحية", "تعريف", "أسئلة", "يوميات", "تسوق", "سفر", "عمل", "محادثة متقدمة")
    Column(Modifier.padding(16.dp)) {
        Text("خريطة المهارات", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        nodes.forEachIndexed { i, n ->
            ListItem(headlineContent = { Text(n) }, supportingContent = { Text(if (i < 3) "مفتوح" else "يُفتح بعد الأساسيات") }, modifier = Modifier.clickable { nav.navigate("learn") })
        }
    }
}

@Composable
fun FiveMin(vm: AcademyViewModel) {
    Column(Modifier.padding(16.dp)) {
        Text("وضع 5 دقائق", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        LearningEngine.fiveMinutePlan(vm.activeLang()).forEach { Text("• $it") }
        vm.filteredWords(vm.activeLang()).take(3).forEach {
            Text("${it.lemma} — ${it.arabic}")
            IconButton(onClick = { vm.speak(it.lemma, it.lang, false) }) { Icon(Icons.Default.VolumeUp, null) }
        }
    }
}

@Composable
fun ForgotInbox(vm: AcademyViewModel) {
    val s by vm.snapshot.collectAsState()
    var t by remember { mutableStateOf("") }
    Column(Modifier.padding(16.dp)) {
        Text("نسيت شيئًا؟ اذكره هنا", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        Text("صندوق محلي: عبارة سمعتها، موقف حرج، كلمة أفلتت منك. لا تُرفع للشبكة. نربطها لاحقًا بمحتوى الحزمة.")
        OutlinedTextField(t, { t = it }, label = { Text("مثال: كيف أقول للزبونة انتظري لحظة باحترام") }, modifier = Modifier.fillMaxWidth())
        Button(onClick = { if (t.isNotBlank()) { vm.addForgot(t); t = "" } }) { Text("حفظ أوفلاين") }
        Text("المحفوظ:\n${s.inbox.ifBlank { "لا شيء بعد" }}")
        Text("جمل إنقاذ جاهزة:")
        PhraseCard(vm.phrases.first { it.id == "ph-l-05" }, vm, false, vm.activeLang())
    }
}

@Composable
fun Placement(vm: AcademyViewModel) {
    Onboard(vm)
}

@Composable
fun ShadowScreen(vm: AcademyViewModel) {
    val lang = vm.activeLang()
    val p = vm.phrases.first()
    Column(Modifier.padding(16.dp)) {
        Text("Shadowing — اسمع وكرر فورًا دون توقف طويل", fontWeight = FontWeight.Bold)
        Text(if (lang == TargetLang.TR) p.trText else p.idText, fontSize = 22.sp, style = TextStyle(textDirection = TextDirection.Ltr))
        Button(onClick = { vm.speak(if (lang == TargetLang.TR) p.trText else p.idText, lang, true) }) { Text("🐢 بطيء ثم كرر") }
        Button(onClick = { vm.speak(if (lang == TargetLang.TR) p.trText else p.idText, lang, false) }) { Text("▶ طبيعي") }
        Text("لا نعرض نسبة نطق وهمية. التقييم: هل croرت الإيقاع؟ نعم/يحتاج تدريب.")
    }
}

@Composable
fun LetterTrainer() {
    val letters = listOf("Ç ç", "Ğ ğ", "I ı", "İ i", "Ö ö", "Ş ş", "Ü ü")
    Column(Modifier.padding(16.dp)) {
        Text("مدرب الحروف التركية (لوحة المفاتيح)", fontWeight = FontWeight.Bold, fontSize = 22.sp)
        Text("ميزة لم تُطلب صراحة وهي حاسمة للعرب: التمييز I/ı و İ/i.")
        letters.forEach { Text(it, fontSize = 28.sp, modifier = Modifier.padding(8.dp)) }
        Text("İ صوت [i] منقوطة حتى في الكبيرة. I بدون نقطة صوت [ɯ] مختلف تمامًا.")
    }
}

@Composable
fun LibraryScreen(vm: AcademyViewModel) {
    val context = LocalContext.current
    val repo = remember { LibraryRepo(context) }
    val lang = vm.activeLang().code
    val docs = remember(lang) { repo.list(lang) }
    var open by remember { mutableStateOf<LibDoc?>(null) }
    if (open != null) {
        Column(Modifier.fillMaxSize().verticalScroll(rememberScrollState()).padding(16.dp)) {
            TextButton(onClick = { open = null }) { Text("رجوع") }
            Text(open!!.title, fontWeight = FontWeight.Bold, fontSize = 20.sp)
            Text(repo.read(lang, open!!.name), modifier = Modifier.padding(top = 8.dp))
        }
        return
    }
    LazyColumn(Modifier.fillMaxSize().padding(16.dp)) {
        item { Text("المكتبة المرجعية", fontWeight = FontWeight.Bold, fontSize = 22.sp) }
        items(docs, key = { it.name }) { d ->
            ListItem(headlineContent = { Text(d.title) }, modifier = Modifier.clickable { open = d })
            HorizontalDivider()
        }
    }
}
