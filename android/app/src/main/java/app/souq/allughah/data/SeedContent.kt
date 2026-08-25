package app.souq.allughah.data

import app.souq.allughah.domain.*

object SeedContent {
    val words: List<Word> = idWords() + trWords()
    val phrases: List<Phrase> = salesPhrases() + lifePhrases() + survivalPhrases()
    val dialogues: List<Dialogue> = dialogues()
    val grammar: List<GrammarRule> = grammar()
    val culture: List<CulturalNote> = culture()
    val lessons: List<Lesson> = lessons()
    val scenarios: List<Scenario> = scenarios()
    val quizzes: List<QuizItem> = quizzes()
    val stories: List<Story> = stories()
    val verbs: List<VerbCard> = verbs()

    private fun w(
        id: String, lang: TargetLang, lemma: String, ph: String, ar: String, pos: String,
        lv: Cefr, ex: String, exAr: String, topic: String, rank: Int
    ) = Word(id, lang, lemma, ph, ar, pos, lv, ex, exAr, topic, rank)

    private fun idWords() = listOf(
        w("id-w-01", TargetLang.ID, "selamat", "سيلامات", "سلام/مبروك (بادئة تحية)", "بادئة", Cefr.A0, "Selamat pagi", "صباح الخير", "تحية", 1),
        w("id-w-02", TargetLang.ID, "tolong", "تولوڠ", "من فضلك / ساعد", "فعل", Cefr.A0, "Tolong bawa ini", "من فضلك احمل هذا", "طلب", 2),
        w("id-w-03", TargetLang.ID, "maaf", "ماؤف", "عذرًا", "اسم", Cefr.A0, "Maaf, kak", "عذرًا", "اعتذار", 3),
        w("id-w-04", TargetLang.ID, "terima kasih", "تريما كاسيه", "شكرًا", "عبارة", Cefr.A0, "Terima kasih banyak", "شكرًا جزيلًا", "تحية", 4),
        w("id-w-05", TargetLang.ID, "silakan", "سيلاكان", "تفضّل", "فعل", Cefr.A0, "Silakan duduk", "تفضل اجلس", "بيع", 5),
        w("id-w-06", TargetLang.ID, "mau", "ماو", "يريد", "فعل", Cefr.A0, "Mau apa?", "ماذا تريد؟", "بيع", 6),
        w("id-w-07", TargetLang.ID, "bisa", "بيسا", "يستطيع", "فعل", Cefr.A0, "Bisa kurang?", "ينقص السعر؟", "تفاوض", 7),
        w("id-w-08", TargetLang.ID, "ada", "ادا", "يوجد", "فعل", Cefr.A0, "Ada yang lain?", "يوجد غيره؟", "بيع", 8),
        w("id-w-09", TargetLang.ID, "beli", "بيلي", "يشتري", "فعل", Cefr.A0, "Mau beli apa?", "ماذا تريد أن تشتري؟", "بيع", 9),
        w("id-w-10", TargetLang.ID, "harga", "هارݢا", "سعر", "اسم", Cefr.A0, "Harga berapa?", "كم السعر؟", "مال", 10),
        w("id-w-11", TargetLang.ID, "murah", "موراه", "رخيص", "صفة", Cefr.A0, "Paling murah", "الأرخص", "بيع", 11),
        w("id-w-12", TargetLang.ID, "mahal", "ماهال", "غالي", "صفة", Cefr.A0, "Mahal banget", "غالي جدًا", "تفاوض", 12),
        w("id-w-13", TargetLang.ID, "uang", "أوڠ", "نقود", "اسم", Cefr.A0, "Uang pas ya", "المبلغ مضبوط", "مال", 13),
        w("id-w-14", TargetLang.ID, "kak", "كاك", "مخاطبة ودودة للنظير", "كنية", Cefr.A0, "Kak, lihat ini", "انظر هذا", "مخاطبة", 14),
        w("id-w-15", TargetLang.ID, "Pak", "پاك", "سيد (محترم)", "كنية", Cefr.A0, "Silakan Pak", "تفضل سيدي", "مخاطبة", 15),
        w("id-w-16", TargetLang.ID, "Bu", "بو", "سيدة", "كنية", Cefr.A0, "Silakan Bu", "تفضلي سيدتي", "مخاطبة", 16),
        w("id-w-17", TargetLang.ID, "tidak", "تيدق", "لا (معياري)", "نفي", Cefr.A0, "Tidak apa-apa", "لا بأس", "نفي", 17),
        w("id-w-18", TargetLang.ID, "nggak", "نݢاك", "لا (يومي)", "نفي", Cefr.A1, "Nggak apa-apa", "ما في مشكلة", "نفي", 18),
        w("id-w-19", TargetLang.ID, "sudah", "سوداه", "قد / تم", "زمن", Cefr.A0, "Sudah lunas", "سُدد", "زمن", 19),
        w("id-w-20", TargetLang.ID, "belum", "بيلوم", "ليس بعد", "زمن", Cefr.A1, "Belum makan", "لم يأكل بعد", "زمن", 20),
        w("id-w-21", TargetLang.ID, "me-", "ميـ", "لاحقة فعل فاعل", "imbuhan", Cefr.A2, "membeli", "يشتري", "قواعد", 80),
        w("id-w-22", TargetLang.ID, "di-", "ديـ", "لاحقة المبني للمجهول", "imbuhan", Cefr.A2, "dibeli", "يُشترى", "قواعد", 81),
        w("id-w-23", TargetLang.ID, "sungkan", "سونݢكان", "يتحشم / يستحي لطفًا", "ثقافة", Cefr.B1, "Jangan sungkan", "لا تتحشم", "ثقافة", 90),
        w("id-w-24", TargetLang.ID, "rezeki", "ريزيقي", "رزق", "اسم", Cefr.B1, "Rezeki hari ini", "رزق اليوم", "ثقافة", 91),
        w("id-w-25", TargetLang.ID, "laris", "لاريس", "رائج البيع", "صفة", Cefr.A2, "Paling laris", "الأكثر مبيعًا", "بيع", 40),
    )

    private fun trWords() = listOf(
        w("tr-w-01", TargetLang.TR, "buyurun", "بويورون", "تفضل (دعوة للدخول/الأخذ)", "أمر مهذب", Cefr.A0, "Buyurun hanımefendi", "تفضلي سيدتي", "بيع", 1),
        w("tr-w-02", TargetLang.TR, "hoş geldiniz", "هوش كيلدينيز", "أهلًا وسهلًا", "تحية", Cefr.A0, "Hoş geldiniz!", "أهلًا بكم", "تحية", 2),
        w("tr-w-03", TargetLang.TR, "lütfen", "لوتفين", "من فضلك", "ظرف", Cefr.A0, "Bir çay lütfen", "شاي من فضلك", "طلب", 3),
        w("tr-w-04", TargetLang.TR, "teşekkürler", "تشيكورلر", "شكرًا", "عبارة", Cefr.A0, "Çok teşekkürler", "شكرًا جزيلًا", "تحية", 4),
        w("tr-w-05", TargetLang.TR, "var", "ڤار", "يوجد", "وجود", Cefr.A0, "İndirim var mı?", "يوجد خصم؟", "بيع", 5),
        w("tr-w-06", TargetLang.TR, "yok", "يوك", "لا يوجد", "وجود", Cefr.A0, "Büyük beden yok", "لا يوجد مقاس كبير", "بيع", 6),
        w("tr-w-07", TargetLang.TR, "fiyat", "فيات", "سعر", "اسم", Cefr.A0, "Fiyat ne kadar?", "كم السعر؟", "مال", 7),
        w("tr-w-08", TargetLang.TR, "indirim", "إنديريم", "خصم", "اسم", Cefr.A0, "Biraz indirim", "خصم قليل", "تفاوض", 8),
        w("tr-w-09", TargetLang.TR, "müşteri", "موشتيري", "زبون", "اسم", Cefr.A0, "Müşteri geldi", "جاء زبون", "بيع", 9),
        w("tr-w-10", TargetLang.TR, "abi", "آبي", "أخي (مخاطبة ودودة لرجل)", "كنية", Cefr.A0, "Abi, son fiyat?", "أخي، آخر سعر؟", "مخاطبة", 10),
        w("tr-w-11", TargetLang.TR, "abla", "آبلا", "أختي (ودودة)", "كنية", Cefr.A0, "Abla bakar mısınız?", "أختي تنظرين؟", "مخاطبة", 11),
        w("tr-w-12", TargetLang.TR, "efendim", "إفنديم", "سيدي / نعم تفضل", "كنية", Cefr.A0, "Efendim?", "نعم تفضل؟", "مخاطبة", 12),
        w("tr-w-13", TargetLang.TR, "kolay gelsin", "قولاى كيلسين", "ليكن عملك خفيفًا", "عبارة", Cefr.A0, "Kolay gelsin abi", "الله يعينك", "ثقافة", 13),
        w("tr-w-14", TargetLang.TR, "yine bekleriz", "يينيه بيكليغيز", "ننتظر زيارتكم", "عبارة", Cefr.A0, "Yine bekleriz!", "عودوا لنا", "بيع", 14),
        w("tr-w-15", TargetLang.TR, "tamam", "تامام", "تمام", "عبارة", Cefr.A0, "Tamam, anlaştık", "تمام اتفقنا", "تفاوض", 15),
        w("tr-w-16", TargetLang.TR, "pahalı", "پاهالي", "غالي", "صفة", Cefr.A0, "Biraz pahalı", "غالي بعض الشيء", "تفاوض", 16),
        w("tr-w-17", TargetLang.TR, "ucuz", "أوتشوز", "رخيص", "صفة", Cefr.A0, "Daha ucuzu var", "يوجد أرخص", "بيع", 17),
        w("tr-w-18", TargetLang.TR, "hayırlı olsun", "هايرلي أولسون", "مبروك / ليبارك", "عبارة", Cefr.A1, "Hayırlı olsun!", "مبروك", "ثقافة", 18),
        w("tr-w-19", TargetLang.TR, "geçmiş olsun", "كيتميش أولسون", "سلامتك", "عبارة", Cefr.A1, "Geçmiş olsun", "سلامتك", "صحة", 19),
        w("tr-w-20", TargetLang.TR, "ü harmonisi", "انسجام العلل", "قاعدة انسجام الحركات", "قواعد", Cefr.A1, "evler / odalar", "بيوت / غرف", "قواعد", 70),
        w("tr-w-21", TargetLang.TR, "i harmonisi", "انسجام i", "انسجام العلة الأمامية/الخلفية", "قواعد", Cefr.A1, "geldi / kaldı", "جاء / بقي", "قواعد", 71),
        w("tr-w-22", TargetLang.TR, "lütfen yavaş", "لوتفين ياؤاش", "من فضلك ببطء", "عبارة", Cefr.A1, "Yavaş konuşur musunuz?", "تتكلم أبطأ؟", "سفر", 30),
        w("tr-w-23", TargetLang.TR, "hesap", "حساب", "فاتورة", "اسم", Cefr.A0, "Hesap lütfen", "الحساب من فضلك", "مطعم", 20),
        w("tr-w-24", TargetLang.TR, "acil", "أجيل", "طارئ", "صفة", Cefr.A1, "Acil durum", "حالة طارئة", "طوارئ", 40),
        w("tr-w-25", TargetLang.TR, "teyze", "تييزه", "خالتي (لكبيرة السن بلطف)", "كنية", Cefr.A1, "Buyurun teyze", "تفضلي خالتي", "مخاطبة", 25),
    )

    private fun p(
        id: String, a: String, i: String, it: String, t: String, tt: String,
        r: Register, w: String, n: String, lit: String, topic: String, lv: Cefr, c: String = ""
    ) = Phrase(id, a, i, it, t, tt, r, w, n, lit, topic, lv, c)

    private fun salesPhrases() = listOf(
        p("ph-s-01", "تفضل / اتفضل شوف", "Silakan dilihat-dilihat dulu, kak", "سيلاكان ديليهات-ديليهات دولو كاك",
            "Buyurun, bir bakın isterseniz", "بويورون بير باقين إسترسينيز",
            Register.Casual, "زبون يدخل المحل — لا تضغط فورًا", "دعوة للنظر دون إلزام بالشراء",
            "من فضلك يُنظر يُنظر أولًا", "ترحيب بيع", Cefr.A1,
            "في إندونيسيا التكرار dilihat-dilihat يلطف الطلب. في تركيا buyurun أقوى من ترجمة «اتفضل»."),
        p("ph-s-02", "يا هلا، نورتونا", "Selamat datang, kak. Mau cari apa?", "سيلامات داتان كاك ماو تشاري ابا",
            "Hoş geldiniz, ne bakıyordunuz?", "هوش كيلدينيز نه باقيوردونوز",
            Register.Polite, "أول جملة بعد دخول الزبون", "سؤال مفتوح لا يغلق الزبون",
            "أهلًا ماذا تبحث", "ترحيب بيع", Cefr.A1),
        p("ph-s-03", "تعالي شوفي اللي عندنا", "Mbak, coba lihat yang ini dulu", "مباك تشوبا ليهات ياڠ إيني دولو",
            "Abla, şuna bir bakın", "آبلا شونا بير باقين",
            Register.Casual, "زبونة شابة أو ندّك", "kak/mbak و abla ليست ترجمة «دكتورة»",
            "أختي جرّبي انظري هذا", "عرض منتج", Cefr.A1,
            "لا تخاطب غريبة بـ«دكتورة» في الإندونيسية/التركية إلا إن كانت كذلك."),
        p("ph-s-04", "كم السعر؟", "Harganya berapa, Pak?", "هارݢانيا بيراپا پاك",
            "Fiyatı ne kadar acaba?", "فياتي نه قدر أجابا",
            Register.Polite, "سؤال السعر بلطف", "acaba و Pak تلطفان السؤال",
            "سعره كم", "سعر", Cefr.A0),
        p("ph-s-05", "ينقص شوي؟", "Bisa kurang dikit, kak?", "بيسا كورانغ ديكيت كاك",
            "Biraz indirim olur mu?", "بيراز إنديريم أولور مو",
            Register.Casual, "مساومة مهذبة في السوق لا في السوبرماركت ذي السعر الثابت",
            "dikit يومية؛ في تركيا olur mu يفتح باب التفاوض دون مواجهة",
            "يستطيع ينقص قليل", "تفاوض", Cefr.A2),
        p("ph-s-06", "آخر سعر", "Harga pas-nya berapa?", "هارݢا پاسنيا بيراپا",
            "Son fiyat nedir?", "سون فيات نيدير",
            Register.Neutral, "بعد جولة مساومة", "pas = السعر النهائي في السوق الإندونيسي",
            "سعر ثابت كم", "تفاوض", Cefr.A2),
        p("ph-s-07", "غالي عليّ", "Wah, agak mahal buat saya", "واه أݢاق ماهال بوات سايا",
            "Bana biraz pahalı geldi", "بانا بيراز پاهالي كيلدي",
            Register.Casual, "اعتراض لطيف لا اتهام", "جاء غاليًا عليّ لا «أنت تغالي»",
            "غالي لأجلي", "تفاوض", Cefr.A2),
        p("ph-s-08", "خذ هذا كهدية صغيرة", "Saya kasih bonus sedikit, ya", "سايا كاسيه بونوس سيديقيت يا",
            "Bir de ufak hediye vereyim", "بير ده أوفاق هديه ويرييم",
            Register.Casual, "البائع يغلق الصفقة بلطف", "الهدية الصغيرة شائعة ثقافيًا أكثر من الخصم الكبير أحيانًا",
            "أعطيك بونوس قليل", "إغلاق بيع", Cefr.A2),
        p("ph-s-09", "ثبّت المقاس/اللون", "Warna lain ada, ukuran ini pas", "وارنا لاين ادا أوكوران إيني پاس",
            "Başka renk de var, bedeniniz olur", "باشقا رنك ده ڤار بدنينيز أولور",
            Register.Neutral, "عرض بدائل", "pas هنا = يناسب",
            "لون آخر يوجد", "عرض", Cefr.A1),
        p("ph-s-10", "إيصال من فضلك", "Struknya minta, ya", "ستروكنيا مينتا يا",
            "Fiş alabilir miyim?", "فيش ألابيلير مييم",
            Register.Neutral, "بعد الدفع", "struk/fiş كلمتا السوق لا ترجمة «وصل»",
            "الإيصال أطلب", "دفع", Cefr.A1),
        p("ph-s-11", "عميلي الدائم", "Ini langganan kita", "إيني لانݢانان كيتا",
            "Daimi müşterimiz", "دائمي موشتيريميز",
            Register.Professional, "تمييز العميل المتكرر", "لا تترجم «زبون قديم» حرفيًا بسوء",
            "هذا اشتراكنا", "عملاء", Cefr.B1),
        p("ph-s-12", "أبشر، جهزته", "Siap, saya siapkan dulu", "سياپ سايا سياپكان دولو",
            "Hemen hazırlıyorum", "هيمين حاضرليyorum",
            Register.Casual, "تأكيد الطلب", "siap في العامية = حاضر/تم",
            "جاهز أجهّز أولًا", "خدمة", Cefr.A2),
    )

    private fun lifePhrases() = listOf(
        p("ph-l-01", "صباح الخير", "Selamat pagi", "سيلامات پاغي", "Günaydın", "كونايدين",
            Register.Neutral, "صباحًا حتى نحو الساعة 10–11", "selamat + وقت؛ التركية كلمة واحدة",
            "سلام الصباح", "تحية", Cefr.A0),
        p("ph-l-02", "كيف حالك؟", "Apa kabar?", "اپا كابار", "Nasılsınız?", "ناسلسينيز",
            Register.Polite, "بعد التحية", "kabar = خبر؛ الناسيز صيغة جمع/احترام",
            "ما الخبر", "تحية", Cefr.A0),
        p("ph-l-03", "أين الحمام؟", "Permisi, toilet di mana?", "پرميسي تواليت دي مانا",
            "Pardon, tuvalet nerede?", "پاردون تواليت نيريده",
            Register.Polite, "permisi/pardon قبل السؤال", "toilet/tuvalet أدق من ترجمة «حمام بيت»",
            "الحمام أين", "سفر", Cefr.A1),
        p("ph-l-04", "الحساب من فضلك", "Minta bill-nya, Bu", "مينتا بيلنيا بو",
            "Hesap lütfen", "حساب لوتفين",
            Register.Neutral, "في المطعم", "bill شائع في إندونيسيا مع الإنجليزية",
            "أطلب الفاتورة", "مطعم", Cefr.A1),
        p("ph-l-05", "لا أفهم، أبطئ من فضلك", "Maaf, pelan-pelan, saya kurang ngerti", "ماؤف پيلان-پيلان",
            "Anlamadım, yavaş konuşur musunuz?", "أنلاماديم ياؤاش",
            Register.Polite, "مع أي متحدث سريع", "pelan-pelan تكرار تلطيفي",
            "ببطء ببطء", "استماع", Cefr.A1),
        p("ph-l-06", "وينك؟ (دردشة)", "Lo di mana?", "لو دي مانا", "Neredesin?", "نيريديسين",
            Register.Slang, "صديق مقرّب فقط — ليست للزبون", "lo جاكرتا عامية؛ نيريديسين للمفرد العائلي",
            "أنت أين", "دردشة", Cefr.A2),
        p("ph-l-07", "وصلت؟", "Udah sampe?", "أوداه سامپي", "Geldin mi?", "كيلدين مي",
            Register.Casual, "واتساب مع صديق", "udah = sudah مختصرة",
            "قد وصلت", "دردشة", Cefr.A2),
        p("ph-l-08", "إن شاء الله", "Insyaallah", "إن شاء الله", "İnşallah", "إنشالله",
            Register.Neutral, "وعد غير قاطع محترم في الثقافتين", "مشتركة ثقافيًا مع العربية",
            "إن شاء الله", "ثقافة", Cefr.A0),
    )

    private fun survivalPhrases() = listOf(
        p("ph-v-01", "أحتاج مساعدة الآن", "Tolong, saya butuh bantuan", "تولوڠ سايا بوتوه بانتوان",
            "Lütfen yardım eder misiniz?", "لوتفين يارديم",
            Register.Formal, "طوارئ أو ضياع", "واضحة مباشرة", "أريد مساعدة", "طوارئ", Cefr.A1),
        p("ph-v-02", "اطلبوا إسعاف", "Panggil ambulans!", "پانغيل أمبولانس",
            "Ambulans çağırın!", "أمبولانس تشاغيرين",
            Register.Formal, "خطر صحي", "صيغة أمر مقبولة في الطوارئ", "نادِ إسعافًا", "طوارئ", Cefr.A1),
        p("ph-v-03", "ضللت الطريق", "Saya tersesat", "سايا ترسسات",
            "Yolumu kaybettim", "يولومو كايبتيم",
            Register.Neutral, "شارع/مطار", "tersesat أدق من «ضاع» العامة", "أنا تائه", "سفر", Cefr.A2),
        p("ph-v-04", "فندق… أين؟", "Hotel ini di mana?", "هوتيل إيني دي مانا",
            "Bu otel nerede?", "بو أوتيل نيريده",
            Register.Neutral, "تاكسي/استعلامات", "di mana / nerede قالب ثابت", "هذا الفندق أين", "فندق", Cefr.A1),
        p("ph-v-05", "بطاقة أو نقد؟", "Kartu atau tunai?", "كارتو أتاو توناي",
            "Kart mı nakit mi?", "كارت مي ناكت مي",
            Register.Neutral, "كاشير", "tunai/nakit = نقد", "بطاقة أو نقد", "مال", Cefr.A1),
    )

    private fun dialogues() = listOf(
        Dialogue(
            "dlg-market", "في السوق: مساومة خفيفة", "شراء قميص", Cefr.A2,
            listOf(
                DialogueTurn("بائع", "تفضل انظر", "Silakan dilihat, kak", "Buyurun bakın"),
                DialogueTurn("زبون", "هذا حلو، بكم؟", "Yang ini bagus. Harganya berapa?", "Bu güzel, fiyatı ne kadar?"),
                DialogueTurn("بائع", "مئة وخمسون", "Seratus lima puluh ribu", "Yüz elli"),
                DialogueTurn("زبون", "ينقص؟", "Bisa kurang?", "İndirim olur mu?"),
                DialogueTurn("بائع", "مئة وأربعون آخر سعر", "Seratus empat puluh, harga pas", "Yüz kırk, son fiyat"),
            )
        ),
        Dialogue(
            "dlg-hotel", "استقبال الفندق", "تسجيل وصول", Cefr.A1,
            listOf(
                DialogueTurn("موظف", "مساء الخير", "Selamat malam", "İyi akşamlar"),
                DialogueTurn("نزيل", "عندي حجز باسم أحمد", "Saya ada reservasi atas nama Ahmad", "Ahmad adına rezervasyonum var"),
                DialogueTurn("موظف", "جواز السفر من فضلك", "Paspornya, Pak", "Pasaportunuzu alabilir miyim?"),
                DialogueTurn("نزيل", "تفضل", "Ini, terima kasih", "Buyurun, teşekkürler"),
            )
        ),
        Dialogue(
            "dlg-taxi", "تاكسي للمطار", "سعر ووجهة", Cefr.A2,
            listOf(
                DialogueTurn("راكب", "إلى المطار، بالميتر؟", "Ke bandara, pakai argometer ya", "Havaalanına, taksimetre ile lütfen"),
                DialogueTurn("سائق", "حسنًا", "Baik, silakan naik", "Tamam, buyurun binin"),
            )
        ),
        Dialogue(
            "dlg-clinic", "في العيادة", "وصف ألم", Cefr.B1,
            listOf(
                DialogueTurn("طبيب", "ما الذي يؤلمك؟", "Sakitnya di mana?", "Nereniz ağrıyor?"),
                DialogueTurn("مريض", "رأسي منذ أمس", "Kepala saya sakit dari kemarin", "Dünden beri başım ağrıyor"),
                DialogueTurn("طبيب", "حرارة؟", "Demam juga?", "Ateşiniz var mı?"),
            )
        ),
    )

    private fun grammar() = listOf(
        GrammarRule("g-id-1", TargetLang.ID, "لا تصريف فعل حسب الشخص", "الفعل لا يتغير مع أنا/أنت",
            "في الإندونيسية تقول saya makan / kamu makan بنفس الجذر. الزمن يُضاف بكلمات: sudah / sedang / akan.",
            listOf("Saya sudah makan", "Dia akan datang"), "خطأ العرب: تصريف كالفعل العربي (أكلتُ/أكلتَ).", Cefr.A0),
        GrammarRule("g-id-2", TargetLang.ID, "imbuhan: me- و di-", "تفرق الفاعل عن المفعول",
            "membeli = يشتري (فاعل)، dibeli = يُشترى. لا تحفظ القائمة بل لاحظ الزوج في السوق: «siapa yang beli?» مقابل «barang ini dibeli kemarin».",
            listOf("Saya membeli baju", "Baju itu dibeli kemarin"), "ترجمة «اِشْتُرِيَ» حرفيا بجملة عربية ثقيلة.", Cefr.A2),
        GrammarRule("g-id-3", TargetLang.ID, "tidak و bukan و belum", "ثلاثة نفوس ليست «لا» واحدة",
            "tidak للأفعال والصفات، bukan للأسماء، belum = ليس بعد (مهم جدًا ثقافيًا).",
            listOf("Saya tidak mau", "Ini bukan harga pas", "Belum lunas"), "استخدام tidak مع الاسم.", Cefr.A1),
        GrammarRule("g-tr-1", TargetLang.TR, "انسجام العلل (büyük ünlü uyumu)", "اللاحقة تتبع آخر علة في الجذر",
            "علة خلفية (a,ı,o,u) تجلب لاحقة خلفية؛ أمامية (e,i,ö,ü) تجلب أمامية. ev-ler لا ev-lar.",
            listOf("evler", "odalar", "günler"), "لصق جمع عربي بلا انسجام.", Cefr.A1),
        GrammarRule("g-tr-2", TargetLang.TR, "الحالات الإعرابية", "اللاحقة تقوم مقام حرف الجر",
            "ev-e إلى البيت، ev-de في البيت، ev-den من البيت، ev-i المفعول المحدد.",
            listOf("Eve gidiyorum", "Evdeyim", "Evi gördüm"), "ترجمة «في/إلى» ككلمات منفصلة دائمًا.", Cefr.A2),
        GrammarRule("g-tr-3", TargetLang.TR, "صيغة الاحترام -siniz", "الاحترام لاحق لا ضمير منفصل فقط",
            "nasılsın للمقرّب، nasılsınız للاحترام/الجمع. في البيع ابدأ بـ -siniz ثم انزل إن بادلك الزبون.",
            listOf("Nasılsınız?", "Buyurun efendim"), "استخدام nasılsın مع كبير سن فورًا.", Cefr.A1),
    )

    private fun culture() = listOf(
        CulturalNote("c1", "مخاطبة البائع في جاكرتا",
            "kak / mbak / mas شائعة بين الأنداد. Pak/Bu أكثر احترامًا لكبار السن. تختلف جاوة عن سومطرة — راقب ما يُنادى به حولك.", true),
        CulturalNote("c2", "kolay gelsin ليست للتحية العامة",
            "تقال لمن تراه يعمل (بائع، سائق، موظف). ليست بديلًا عن merhaba في كل موقف.", false),
        CulturalNote("c3", "المساومة",
            "في السوق الشعبي متوقعة بلطف. في المول والسلاسل السعر ثابت وغالبًا الإحراج من المساومة. لا تعمم.", true),
        CulturalNote("c4", "sungkan",
            "شعور إندونيسي بالتحرج من إثقال الآخر. «jangan sungkan» دعوة للراحة لا أمرًا.", true),
    )

    private fun lessons() = listOf(
        Lesson("ls-id-a0-1", TargetLang.ID, Cefr.A0, "البداية", "تحية السوق", 8, listOf("id-w-01", "id-w-04", "id-w-05"), listOf("ph-l-01", "ph-s-01"), listOf("g-id-1")),
        Lesson("ls-id-a1-1", TargetLang.ID, Cefr.A1, "البيع", "السعر والطلب", 12, listOf("id-w-06", "id-w-10", "id-w-11"), listOf("ph-s-04", "ph-s-05"), listOf("g-id-3")),
        Lesson("ls-id-a2-1", TargetLang.ID, Cefr.A2, "البيع", "المساومة بلطف", 15, listOf("id-w-12", "id-w-25"), listOf("ph-s-06", "ph-s-07"), listOf("g-id-2")),
        Lesson("ls-tr-a0-1", TargetLang.TR, Cefr.A0, "البداية", "Buyurun والتحية", 8, listOf("tr-w-01", "tr-w-02", "tr-w-04"), listOf("ph-l-01", "ph-s-02"), listOf("g-tr-3")),
        Lesson("ls-tr-a1-1", TargetLang.TR, Cefr.A1, "البيع", "السعر والخصم", 12, listOf("tr-w-07", "tr-w-08"), listOf("ph-s-04", "ph-s-05"), listOf("g-tr-1")),
        Lesson("ls-tr-a2-1", TargetLang.TR, Cefr.A2, "السفر", "تاكسي وفندق", 15, listOf("tr-w-22", "tr-w-23"), listOf("ph-v-04", "ph-l-04"), listOf("g-tr-2")),
        Lesson("ls-tr-b1-1", TargetLang.TR, Cefr.B1, "مهني", "العميل الدائم", 18, listOf("tr-w-09"), listOf("ph-s-11"), emptyList()),
    )

    private fun scenarios() = listOf(
        Scenario(
            "sc-1", "أنت البائع — زبون متردد", "إغلاق لطيف دون ضغط", "sales",
            "الزبون: «غالي شوي… أفكر». ماذا تقول؟",
            listOf(
                Choice("روح إذا ما تبي", false, "عدائي ويخسر البيع والكرامة."),
                Choice("Tidak apa-apa, dilihat dulu saja. Kalau pas, kabari ya.", true, "يزيل الضغط ويبقي الباب مفتوحًا — طبيعي في إندونيسيا."),
                Choice("ترجمة حرفية: أنت غالي التفكير", false, "غير مفهومة ومسيئة."),
            )
        ),
        Scenario(
            "sc-2", "أنت الزبون في إسطنبول", "طلب خصم مهذب", "sales",
            "السعر بدا مرتفعًا. الصيغة الأطبيعية؟",
            listOf(
                Choice("Biraz indirim olur mu?", true, "سؤال إمكان لا أمر."),
                Choice("İndirim yap! şimdi!", false, "أمر فظ."),
                Choice("أنت سارق", false, "إهانة."),
            )
        ),
        Scenario(
            "sc-3", "نسيت ماذا أقول", "إنقاذ المحادثة", "rescue",
            "انقطع عنك اللفظ. الأفضل؟",
            listOf(
                Choice("Maaf, pelan-pelan. Saya cari katanya.", true, "صادق ويطلب إبطاء."),
                Choice("الصمت دقيقة محرجة", false, "يمكن لكن جملة الإنقاذ أفضل."),
                Choice("تتكلم عربي فقط بغضب", false, "يغلق التعاون."),
            )
        ),
    )

    private fun quizzes() = listOf(
        QuizItem("q1", "ما مقابل «يوجد» اليومي في التركية؟", listOf("var", "bir", "çok", "ve"), 0, "var/yok ثنائي أساسي.", TargetLang.TR, "vocab"),
        QuizItem("q2", "أي نفي يعني «ليس بعد» بالإندونيسية؟", listOf("tidak", "bukan", "belum", "jangan"), 2, "belum زمني.", TargetLang.ID, "grammar"),
        QuizItem("q3", "buyurun أقرب معنى اجتماعي؟", listOf("امشِ", "تفضل/تفضلوا", "ادفع", "اصمت"), 1, "دعوة للتفضل.", TargetLang.TR, "culture"),
        QuizItem("q4", "kak تُستخدم غالبًا مع؟", listOf("رئيس وزراء فقط", "ندّك في السوق", "الأطفال الرضّع حصرًا", "الحيوانات"), 1, "مخاطبة ندّ.", TargetLang.ID, "culture"),
        QuizItem("q5", "صيغة احترام تركية لـ كيف حالك؟", listOf("Nasılsın", "Nasılsınız", "Ne?", "Kim"), 1, "-siniz احترام.", TargetLang.TR, "grammar"),
    )

    private fun stories() = listOf(
        Story(
            "st-id-1", "أول يوم في السوق", Cefr.A1, TargetLang.ID,
            "Ahmad datang ke pasar. Dia mau beli kemeja. Penjual bilang: «Silakan dilihat.» Harganya seratus ribu. Ahmad bilang: «Bisa kurang?» Mereka setuju di sembilan puluh ribu.",
            "أحمد يأتي إلى السوق ليشتري قميصًا. البائع يدعوه للنظر. السعر 100 ألف. يسأل إن كان ينقص. يتفقان على 90 ألف.",
            listOf(
                QuizItem("stq1", "ماذا اشترى أحمد؟", listOf("قميص", "خبز", "تذكرة", "هاتف"), 0, "kemeja = قميص", TargetLang.ID, "reading")
            )
        ),
        Story(
            "st-tr-1", "شاي الصباح", Cefr.A1, TargetLang.TR,
            "Leyla dükkâna girdi. Satıcı «Hoş geldiniz» dedi. Leyla bir çay istedi. Hesap küçük oldu. «Yine bekleriz» dediler.",
            "ليلى دخلت المحل. البائع رحّب. طلبت شايًا. الفاتورة صغيرة. قالوا ننتظر عودتك.",
            listOf(
                QuizItem("stq2", "ماذا طلبت ليلى؟", listOf("قهوة", "شاي", "ماء فقط", "خبز"), 1, "çay = شاي", TargetLang.TR, "reading")
            )
        ),
    )

    private fun verbs() = listOf(
        VerbCard("v-id-1", TargetLang.ID, "makan", "يأكل", mapOf("أنا" to "saya makan", "نفي" to "saya tidak makan", "ماضٍ سياقي" to "sudah makan"), "Sudah makan belum?"),
        VerbCard("v-id-2", TargetLang.ID, "beli", "يشتري", mapOf("me-" to "membeli", "di-" to "dibeli", "أمر لطيف" to "silakan beli"), "Mau beli yang mana?"),
        VerbCard("v-tr-1", TargetLang.TR, "almak", "يأخذ/يشتري", mapOf("أنا" to "alıyorum", "ماضٍ" to "aldım", "مستقبل" to "alacağım", "نفي" to "almıyorum"), "Bunu alayım."),
        VerbCard("v-tr-2", TargetLang.TR, "gelmek", "يأتي", mapOf("أنا" to "geliyorum", "ماضٍ" to "geldim", "أمر" to "gel"), "Yine bekleriz, yine gelin."),
    )
}
