/* ===== المواقف الكاملة: حوار → كلمات → قاعدة → لماذا → نسخ رسمي/عفوي → إعادة تمثيل ===== */
"use strict";
window.DB = window.DB || {};
window.DB.situations = window.DB.situations || [];

DB.situations.push({
id:"sit-shop1", kind:"situation", title:"دخول زبونة إلى محل ملابس (إندونيسيا)", sub:"من الترحيب حتى إتمام البيع كاملًا", context:"امرأة شابة (تُخاطَب mbak) تدخل محل ملابس صغيرًا في جاكرتا. أنت البائع.",
chapters:["welcome","needs","products","checkout"],
turns:[
{who:"S",a:"أهلًا وسهلًا! تفضلي شوفي على راحتك.",i:"Selamat datang, mbak! Silakan dilihat-dilihat dulu.",it:"سيلامات داتنݢ مباك! سيلاكان ديليهات-ديليهات دولو",t:"Hoş geldiniz! Rahatça bakabilirsiniz.",tt:"هوش كيلدينيز! راهتتشا باكابيليرسينيز",n:"«dilihat-dilihat dulu» = تفرّجي أولًا بلا التزام — التكرار يليّن الدعوة، وdulu تعطيها «خذي وقتك»."},
{who:"C",a:"شكرًا. أتفرج فقط.",i:"Makasih. Lihat-lihat dulu aja.",it:"ماكاسيه. ليهات-ليهات دولو أجا",t:"Teşekkürler. Önce bir bakayım.",tt:"تشيكورلر. أونجه بير باقايم"},
{who:"S",a:"تمام، لا مشكلة. أنا هنا لو احتجتِ شيئًا.",i:"Tidak apa-apa. Kalau butuh, panggil saja ya.",it:"تيدق أبا-أبا. كالاو بوتيه، بانݢيل ساچا يا",t:"Sorun değil. İhtiyacınız olursa seslenin.",tt:"سورون ديكيل. إحتيياجينيز أولورسا سيسلينين",n:"جملة الانسحاب الذهبي — تعلن توافرك ثم تتركها ترتاح."},
{who:"C",a:"هذا الفستان كم سعره؟",i:"Dress yang ini berapa?",it:"دريس ياڠ إيني براپا",t:"Bu elbise kaç lira?",tt:"بو إلبيسه كاتش ليرا"},
{who:"S",a:"هذا 250 ألفًا. وصل أمس، وموجود بثلاثة ألوان.",i:"Yang ini dua ratus lima puluh, mbak. Baru kemarin datang, ada tiga warna.",it:"ياڠ إيني دوا راتوس ليما پولوه مباك. بارو كيمارين داتنݢ، ادا تيݢا وارنا",t:"Bu iki yüz elli. Dün geldi, üç rengi var.",tt:"بو إيكي يوز إيلي. دون كيلدي، أوتش رينݢي ڤار",n:"لاحظ حذف ribu — الأسلوب الحقيقي للباعة: الرقم المختصر ثم التفاصيل."},
{who:"C",a:"أجرب فيه؟",i:"Boleh dicoba?",it:"بوليه ديتشوبا",t:"Deneyebilir miyim?",tt:"دينيابيلير ميين"},
{who:"S",a:"طبعًا! غرفة القياس هناك. خذي مقاس M أولًا.",i:"Boleh banget! Kamar pas di situ. Ambil ukuran M dulu ya.",it:"بوليه بانݢينݢ! كامر پاس دي سيتو. أمبول أوكوران إيم دولو يا",t:"Tabii! Orada deneme kabini. Önce M bedeni alın.",tt:"تابيي! أوراده دينيمه كابيني. أونجه إيم بيدني آلين",n:"«kamar pas» = غرفة القياس (غرفة المطابقة) — المصطلح الرسمي في محلات إندونيسيا."},
{who:"C",a:"(بعد القياس) المقاس مضبوط لكن اللون…",i:"Pas badannya, tapi warnanya…",it:"پاس بادانيا، تاڤي وارنانيا",t:"Bedenim oldu ama rengi…",tt:"بيدنيم أولدي أما رينݢي"},
{who:"S",a:"عندي نفس الموديل بالأسود — لونكِ الآمن! أجريبه؟",i:"Ada model yang sama warna hitam. Silakan coba sekalian.",it:"ادا مدل ياڠ ساما وارنا هيتام. سيلاكان تشوبا سيكاليان",t:"Aynı modelin siyahı da var, deneyin isterseniz.",tt:"آيني مدلين سيياهي د ڤار، دينيين إسترسينيز",n:"«sekaligus/sekalian» = معه بالمناسبة — رفع السلة بلطف."},
{who:"C",a:"أسود أحسن! آخذه. مع كيس من فضلك.",i:"Hitam lebih bagus. Saya ambil. Kantongnya sekalian ya.",it:"هيتام لبيه باݢوس. سايا أمبول. كانتوڠنيا سيكاليان يا",t:"Siyah daha iyi. Alıyorum. Poşet de alın lütfen.",tt:"سيياه داها إيي. آليوروم. پوشيت د آلين لوتفين"},
{who:"S",a:"ممتاز! نقدًا أم QRIS؟",i:"Sip, mbak! Bayar tunai atau QRIS?",it:"سيڤ مباك! باير توناي أتاو قريس",t:"Harika! Nakit mi, kart mı?",tt:"هاريكة! ناكت مي، كارت مي"},
{who:"C",a:"QRIS. تفضلي.",i:"QRIS ya. Ini.",it:"قريس يا. إيني",t:"Kartla. Buyurun.",tt:"كارتله. بويورون"},
{who:"S",a:"تم الدفع. هذا إيصالك — احتفظي به للاستبدال خلال 3 أيام. تعالي دائمًا!",i:"Sudah lunas. Ini struknya, simpan ya buat tukar tiga hari. Dateng lagi ya, mbak!",it:"سوداه لوناس. إيني ستروكنيا، سيمڤان يا بوات توكار تيݢا هاري. داتنݢ لاݢي يا مباك",t:"Ödeme tamam. Fişiniz buysun, üç gün içinde değişim hakkı. Yine bekleriz!",tt:"أوديمه تامام. فيشينيز بويسون، أوتش كون إيتشيند ديكيلشيم حقي. يينيه بيكليغيز"}
],
vocab:[
["فستان / ملابس","dress / baju","دريس / باجو","elbise","إلبيسه"],
["غرفة القياس","kamar pas","كامر پاس","deneme kabini","دينيمه كابيني"],
["مقاس","ukuran","أوكوران","beden","بيدن"],
["لون","warna","وارنا","renk","رينك"],
["أسود","hitam","هيتام","siyah","سيياه"],
["إيصال","struk","ستروك","fiş","فيش"],
["يُجرَّب","dicoba","ديتشوبا","denemek","دينيميك"],
["استبدال","tukar","توكار","değişim","ديكيلشيم"]
],
grammar:[{t:"🇮🇩 صيغة المبني للمجهول di- (لغة البائع الأولى)",b:"dicoba (يُجرَّب)، dikirim (يُرسَل)، dibungkus (يُغلَّف)، ditukar (يُستبدل) — أضف di- قبل الفعل فيصبح منفذًا مجهولًا بلا فاعل. ستسمعها في كل تعليمات المحل: «Dibungkus ya?» (نغلّفه؟). هذا أبسط مبني للمجهول في أي لغة ستتعلمها."}],
why:`<p>لاحظ مسار الحوار الاحترافي: <b>ترحيب بلا ضغط ← انسحاب مهذب ← إجابة سعر موسعة (وصل أمس + ألوان) ← قياس ← معالجة اعتراض اللون ببديل جاهز ← إغلاق بسؤال دفع محدد</b>. لم يستخدم البائع جملة إقناع واحدة — خدمة ذكية فقط. هذا هو البيع الطبيعي في إندونيسيا.</p>`,
variants:[
{kind:"formal",a:"ترحيب أكثر رسمية لزبونة أنيقة",i:"Selamat siang, Bu. Silakan dilihat-dilihat.",t:"İyi günler hanımefendi, buyurun."},
{kind:"casual",a:"نفس الترحيب لكنة شبابية جدا",i:"Lihat-lihat dulu kak, santai aja!",t:"Bak kardeşim, rahat ol!"}
]
});

DB.situations.push({
id:"sit-bargain-id", kind:"bargain", title:"مساومة في سوق جاكرتا الشعبي", sub:"«غالي!» ← «كم تدفع؟» ← الاتفاق — الحوار الوطني للبازار", context:"زبون (تخاطبه kak) أمام بسطة حقائب في سوق تقليدي (pasar). الأسعار قابلة للتفاوض (bisa nego).",
chapters:["bargain","prices"],
turns:[
{who:"C",a:"هذه الحقيبة كم؟",i:"Tas yang ini berapa, bang?",it:"تاس ياڠ إيني براپا بانݢ",t:"Bu çanta kaç para abi?",tt:"بو تشانتا كاتش پارا آبي"},
{who:"S",a:"هذه الجلد الأصلي، 300 ألف يا أخي.",i:"Ini kulit asli, bang. Tiga ratus.",it:"إيني كوليت أسلي بانݢ. تيݢا راتوس",t:"Bu hakiki deri, üç yüz abi.",tt:"بو حقيقي ديري، أوتش يوز آبي",n:"دفاع القيمة قبل أي شيء: المادة ثم السعر — ترتيب البائع المحترف."},
{who:"C",a:"300؟! غالي جدًا!",i:"Tiga ratus?! Mahal bang!",it:"تيݢا راتوس؟! ماهال بانݢ",t:"Üç yüz mü? Çok pahalı!",tt:"أوتش يوز مو؟ تشوك پاهالي"},
{who:"S",a:"رخيص أصلًا! انظر للخياطة. كم تعطي؟",i:"Sudah murah itu! Lihat jahitannya. Berani kasih berapa?",it:"سوداه موراه إيتو! ليهات جاهيتانيا. بيراني كاسيه براپا",t:"Ucuz bile diyebilirim, dikişine bakın. Kaç veriyorsunuz?",tt:"أوتش بيله دييني، ديكيليشينه باكين. كاتش فيريورسونوز",n:"«Berani kasih berapa؟» أشهر جملة تفاوض إندونيسية — تقلب الكرة لملعب الزبون فورًا."},
{who:"C",a:"أعطيك 200 ولا زيادة.",i:"Dua ratus, nggak lebih.",it:"دوا راتوس، نݢاك لبيه",t:"İki yüz, daha fazla yok.",tt:"إيكي يوز، داها فازلا يوك"},
{who:"S",a:"200 مؤلم جدًا! أقل شيء 280.",i:"Dua ratus sakit banget, bang! Paling kurang dua ratus delapan puluh.",it:"دوا راتوس ساكيت بانݢينݢ بانݢ! پالينݢ كوراڠ دوا راتوس ديلابان پولوه",t:"İki yüz çok az! En fazla iki yüz seksen inerim.",tt:"إيكي يوز تشوك أز! ين فازلا إيكي يوز سيكسين إينيريم",n:"«sakit» = يؤلم — لغة جسدية ساخرة محبوبة في المساومة الإندونيسية."},
{who:"C",a:"خلّينا نلتقي في المنتصف: 250 وخلصنا.",i:"Ketemu tengahnya aja: dua ratus lima puluh, deal.",it:"كتيمو تينݢهنيا أجا: دوا راتوس ليما پولوه، ديل",t:"Ortada buluşalım: iki yüz elli, tamam mı?",tt:"أورتادا بولوشاليم: إيكي يوز إيلي، تامام مي"},
{who:"S",a:"250؟ حسنًا لكن بشرط — تأخذ المحفظة معها بـ50.",i:"Dua ratus lima puluh? Ya sudah, tapi sekalian dompetnya lima puluh.",it:"دوا راتوس ليما پولوه؟ يا سوداه، تاڤي سيكاليان دومبيتنيا ليما پولوه",t:"İki yüz elli mi? Peki, yanına cüzdanı elli liraya veririm.",tt:"إيكي يوز إيلي مي؟ پيكي، يانينا جوزداني إيلي ليراه فييريم",n:"التنازل المشروط «sekalian» — ربحية أعلى بنفس الخصم الشكلي."},
{who:"C",a:"خلاص، اتفقنا! نقدًا.",i:"Sip, deal bang! Ini uangnya.",it:"سيڤ ديل بانݢ! إيني أوڠنيا",t:"Tamam, anlaştık! Paranız.",tt:"تامام، أنلاشتق! پارانيز"},
{who:"S",a:"صفقة! خذها بالصحة — وعُد تخبرنا برأيك فيها!",i:"Sip! Saya bungkus ya. Makasih banyak, bang! Dateng lagi ya!",it:"سيڤ! سايا بونݢوس يا. ماكاسيه بنياك بانݢ! داتنݢ لاݢي يا",t:"Anlaştık! Paketliyorum. Çok teşekkürler abi, yine bekleriz!",tt:"أنلاشتق! پاكيتليوروم. تشوك تشيكورلر آبي، يينيه بيكليغيز"}
],
vocab:[
["حقيبة","tas","تاس","çanta","تشانتا"],
["جلد أصلي","kulit asli","كوليت أسلي","hakiki deri","حقيقي ديري"],
["خياطة","jahitan","جاهيتان","dikiş","ديكيليش"],
["يؤلمني السعر (مجازًا)","sakit","ساكيت","(fiat) can acıtır","قانات آجيتير"],
["نتفق","deal / sepakat","ديل / سڤاكات","anlaşmak","أنلاشمق"],
["محفظة","dompet","دومبيت","cüzdan","جوزدان"],
["تنازل (ينزل في السعر)","turun","تورون","indirim yapmak","إنديريم يابمق"],
["منتصف/وسط","tengah","تينݢاه","orta","أورتا"]
],
grammar:[{t:"🇮🇩 صيغة المقارنة «lebih» والمبالغة «banget»",b:"lebih murah (أرخص) · lebih bagus (أفضل) · lebih mahal (أغلى) — أداة واحدة لكل المقارنات. وللمبالغة: banget بالعامية (murah banget = رخيص جدًا) وsekali بالفصحى (murah sekali). ستسمع الاثنتين في السوق — استعمل banget لتتحدث مثل أهل البلد."}],
why:`<p>هذه هي رقصة المساومة الإندونيسية الكاملة بأدوارها: <b>دفاع قيمة ← استفسار عرض ← رفض درامي ساخر ← وسط ← تنازل مشروط ← احتفال مشترك</b>. لاحظ أن «sakit banget» (يؤلمني!) تُقال مبتسمة — السخرية الخفيفة وقود المساومة الممتعة. ولم يقل البائع «لا» مطلقًا بل «نعم، لكن...».</p>`,
variants:[
{kind:"formal",a:"لزبون رسمي بدل السخرية",i:"Untuk Bapak, mungkin bisa saya bantu sedikit.",t:"Sizin için elimden geleni yaparım efendim."},
{kind:"casual",a:"نسخة أصدق سوقية بعد 200",i:"Ya ampun bang, modal saja belum segitu!","t":"Yok artık, maliyetimi bile karşılamıyor!"}
]
});

DB.situations.push({
id:"sit-bargain-tr", kind:"bargain", title:"مساومة في البازار التركي (إسطنبول)", sub:"السجادة، الآلة الحاسبة، و«Kaç veriyorsun؟»", context:"زبون أمام دكان سجاد في بازار سياحي. المساومة (pazarlık) متوقعة وممتعة. يُستخدم الحاسبة كثيرًا.",
chapters:["bargain","prices","foreign"],
turns:[
{who:"S",a:"تفضل! أهلًا بك — من إيران؟ من سوريا؟ على أي حال، أهلًا! انظر لهذه.",i:"Silakan! Coba lihat permadani yang ini.",it:"سيلاكان! تشوبا ليهات پيرماداني ياڠ إيني",t:"—",tt:"—",n:"الحوار التركي الأصلي هنا؛السطر الإندونيسي ترجمة تدريبية فقط."},
{who:"C",a:"كم هذه السجادة؟",i:"Permadani ini berapa?",it:"پيرماداني إيني براپا",t:"Bu halı kaç lira?",tt:"بو هالي كاتش ليرا"},
{who:"S",a:"هذه حرير يدوي من كايْسري — 5000 ليرة.",i:"—",it:"—",t:"Bu el işi Kayseri halısı, beş bin lira.",tt:"بو إل إشي كايسري هاليسي، بش بين ليرا",n:"القيمة أولًا (يدوي + منطقة) ثم الرقم — تسلسل تسويقي تركي كلاسيكي."},
{who:"C",a:"5000؟! كثيرة عليّ. أستطيع 3000.",i:"—",it:"—",t:"Beş bin mi? Çok buldum. Üç bin verebilirim.",tt:"بش بين مي؟ تشوك بولدوم. أوتش بين فيريابيليريم",n:"«çok buldum» = وجدتها كثيرة (عليّ) — الرفض التركي المهذب الأنسب."},
{who:"S",a:"3000؟ يا أخي حرير هذا! على الأقل 4500 — انظر العقد.",i:"—",it:"—",t:"Üç bin mi olur abi, ipek bu! En az dört bin beş yüz. Düğümüne bakın.",tt:"أوتش بين مي أولور آبي، إيپيك بو! ين أز دورت بين بش يوز. ديوكونيه باكين"},
{who:"C",a:"ما رأيك: 4000 وآخذ معها الوسادة الصغيرة؟",i:"—",it:"—",t:"Peki: dört bin, bir de yastığı küçüğü beraber.",tt:"پيكي: دورت بين، بير د ياستيݢي كوتشوكي بربر",n:"حزمة (bundle) — طلب إضافة مقابل رفع سعرك: ترفع قيمة الصفقة لا تكسر السعر."},
{who:"S",a:"4000 مع الوسادة؟ استراحة الشاي أولًا! …حسنًا: 4200 مع الوسادة، وأصلي لك القهوة.",i:"—",it:"—",t:"Dört bin ve yastık mı? Çay molası verelim! …Tamam: dört bin iki yüz, yastık da benden, çay da benden.",tt:"دورت بين ڤيه ياستق مي؟ تشاي مولاسي فييريليم! تامام: دورت بين إيكي يوز، ياستق د بيدن، تشاي د بيدن",n:"«...da benden» = و... من عندي — أسلوب الهدية التركي يغلق فجوة السعر بماء الوجه للجميع."},
{who:"C",a:"اتفقنا! 4200 بالبطاقة ممكن؟",i:"—",it:"—",t:"Anlaştık! Kartla olur mu?",tt:"أنلاشتق! كارتله أولور مو"},
{who:"S",a:"بطاقة؟ 4200 نقدي، وبالبطاقة 4400 — العمولة يا صديقي. قهوتك في الطريق!",i:"—",it:"—",t:"Kart mı? Peşin dört bin iki yüz, kartla dört bin dört yüz — komisyon canım. Çayınız geliyor!",tt:"كارت مي؟ يشين دورت بين إيكي يوز، كارتله دورت بين دورت يوز — كوميسيون جانيم. تشاينيز كيليور"},
{who:"C",a:"نقدًا إذن. هذه لك.",i:"—",it:"—",t:"O zaman peşin. Buyurun.",tt:"أو زمان يشين. بويورون"},
{who:"S",a:"مبروك عليك! تستاهل بيتها. استخدمها بالصحة — وعُد تسلّم!",i:"—",it:"—",t:"Hayırlı olsun, evine yakışacak. Güle güle kullanın, yine bekleriz!",tt:"هايرلي أولسون، إڤينه ياقيشاجاق. كوله كوله كولانين، يينيه بيكليغيز"}
],
vocab:[
["سجادة","permadani","پيرماداني","halı","هالي"],
["حرير","sutra","سوترا","ipek","إيپيك"],
["يدوي الصنع","buatan tangan","بواتان تانݢان","el işi","إل إشي"],
["عقدة (في السجاد)","simpul","سيمڤول","düğüm","ديوكون"],
["وسادة","bantal","بانتال","yastık","ياستق"],
["قهوة/شاي","kopi / teh","كوڤي / تيه","çay / kahve","تشاي / قاهڤه"],
["عمولة","komisi","كوميسي","komisyon","كوميسيون"],
["نقدي","tunai","توناي","peşin","يشين"]
],
grammar:[{t:"🇹🇷 «benden» و«de/da» — أدوات الكرم التركية",b:"«benden» = من عندي (ben = أنا + -den): «çay benden» = الشاي عليّ. وأداة «de/da» تعني أيضًا/كذلك وتلتصق بالكلمة: «yastık da» = والوسادة أيضًا. بهما تبني أي عرض هدية تركي: «bu da benden» = وهذه من عندي — جملة الود التركية الخالدة عند الدفع."}],
why:`<p>البازار التركي مسرح كامل: <b>مدح البضاعة ← رفض مهذب (çok buldum) ← وسط ← حزمة إضافات ← هدية إغلاق (çay/يستحق)</b>. لاحظ أن البائع لم يتنازل رقميًا بعد 4200 بل أضاف قيمة (القهوة) — وأصر على فرق البطاقة بصراحة مالية محترمة يفهمها كل مشترٍ. القهوة والشاي جزء من طقوس الصفقة الكبيرة: مجاملة تُغلق ما لا يغلقه الرقم.</p>`,
variants:[
{kind:"formal",a:"نسخة رسمية لزبون أنيق",t:"Efendim, bu halı bizim en kaliteli ürünümüz. Fiyatta anlaşabiliriz."},
{kind:"casual",a:"نسخة عفوية جدا لزبون شاب",t:"Abi sen bilirsin ama bu fiyata kaçarsın! Söz ver, gitme — hadi anlaşalım."}
]
});

DB.situations.push({
id:"sit-complaint-tr", kind:"complaint", title:"زبون غاضب: منتج معيب والاستبدال (تركيا)", sub:"من الغضب إلى الولاء — إدارة شكوى كاملة", context:"زبون يعيد خلاطًا كهربائيًا توقف بعد يومين. الغضب واضح. الفيشت معه.",
chapters:["complaints","checkout"],
turns:[
{who:"C",a:"هذا توقف عن العمل! يومان فقط! لم أدفع لأحصل على خردة!",i:"—",it:"—",t:"Bu bozuldu! Daha iki gün oldu! Hurdaya para vermedim ben!",tt:"بو بوزولدي! داها إيكي كون أولدي! هوردايه پارا فيirmedيم بين",n:"دعه يفرغ — لا تقاطع. هذه أول دمعة من الغضب، وخلفها الموقف الحقيقي."},
{who:"S",a:"أتفهمك تمامًا. من حقك أن تغضب — أنا أسمعك.",i:"—",it:"—",t:"Haklısınız, kesinlikle. Öfkenizi anlıyorum, dinliyorum.",tt:"حقليسينيز، كيسينليك. أوفكينيزي أنليوروم، دينليوروم",n:"«Haklısınız» (صاحب حق) — مفتاح التهدئة التركي الأعظم. لا دفاع بعد الآن."},
{who:"C",a:"الفيشت معي. أريد حقي: جهاز يعمل أو نقودي.",i:"—",it:"—",t:"Fişim de yanımda. Hakkımı istiyorum: çalışan bir makine ya da param.",tt:"فيشيم د يانيمدا. حقيمي إستيوروم: تشاليان بير ماكينه يا دا پاريم"},
{who:"S",a:"تمامًا. لأتأكد فهمت: عمل يومين ثم توقف كليًا؟",i:"—",it:"—",t:"Peki, teyit edeyim: iki gün çalıştı, sonra tamamen durdu, öyle mi?",tt:"پيكي، تييت إدييم: إيكي كون تشالاشتي، سونرا تامامين دوندي، أويه مي",n:"إعادة الصياغة (teyit = تحقيق عربية الأصل!) تثبت الفهم وتكشف أي سوء فهم مبكرًا."},
{who:"C",a:"بالضبط. توقف كليًا.",i:"—",it:"—",t:"Aynen öyle. Tamamen durdu.",tt:"آينين أويه. تامامين دوندي"},
{who:"S",a:"أعتذر بصدق. أمامك خياران، وقرارك أمر: استبدال فوري بجديد، أو استرجاع كامل. أيهما يريحك؟",i:"—",it:"—",t:"Gerçekten özür dileriz. İki seçenek sunuyorum, kararınız: hemen yenisiyle değişim ya da para iadesi. Hangisi size iyi gelir?",tt:"كيركتين أوزور ديليريز. إيكي سيتشينيك سونويوروم، قرارنيز: هيمين يينيسيله ديكيلشيم يا دا پارا آييديسي. هانݢيسي سيزه إيي كيلير"},
{who:"C",a:"…أريد جهازًا جديدًا يعمل. وأريد فحصه أمامي.",i:"—",it:"—",t:"Yenisi olsun, ama gözümün önünde test edelim.",tt:"يينيسي أولسون، أما كوزومون أونونده تست إديلين"},
{who:"S",a:"طلب عادل تمامًا. (يختبره) اسمع المحرك — سليم. سأمدد ضمانك من اليوم أيضًا.",i:"—",it:"—",t:"Çok haklısınız. (test eder) Duyun motoru — sağlam. Garantinizi de bugünden itibaren uzatıyorum.",tt:"تشوك حقليسينيز. دويون موطورو — صاڌلام. كارانتينيزي د بوكوندن إتيبارين أوواتيوروم"},
{who:"C",a:"حسنًا… شكرًا. اعتذرت فأنقذت موقفي.",i:"—",it:"—",t:"Peki… teşekkürler. Özür dileyince mesele kalmadı.",tt:"پيكي تشيكورلر. أوزور ديلييينجه مسيله قالمادي"},
{who:"S",a:"شكرًا لصبرك وسعة صدرك. أنت زبوننا منذ سنوات — وستبقى. مع السلامة، وبالصحة!",i:"—",it:"—",t:"Sabrınız ve anlayışınız için teşekkürler. Yıllardır müşterimizsiniz, öyle kalın. Güle güle, hayırlı olsun!",tt:"صابرنيز ڤيه أنلايشينيز إيتشين تشيكورلر. ييللاردير موشتيريمسينيز، أويه قالين. كوله كوله، هايرلي أولسون"}
],
vocab:[
["تعطل/فسد","rusak","روساك","bozuldu","بوزولدي"],
["خردة","besi tua","بيسي توا","hurda","هوردا"],
["فيشت/إيصال","struk","ستروك","fiş","فيش"],
["حق","hak","هاك","hak","حق"],
["استبدال","tukar barang","توكار باراڠ","değişim","ديكيلشيم"],
["استرجاع المال","uang kembali","أوڠ كمبالي","para iadesi","پارا آييديسي"],
["فحص/اختبار","tes / cek","تيس / تشيك","test etmek","تست إتمك"],
["ضمان (يمدد)","garansi diperpanjang","چارانسي ديبربانجانݢ","garanti uzatmak","كارانتي أوواتمق"]
],
grammar:[{t:"🇹🇷 الفعل الماضي الشاهد «-di» بلا فاعل",b:"«bozuldu» توقف/فسد، «çalıştı» عمل، «durdu» وقف — الفعل الماضي التركي بصيغة الغائب الثالث (di'li geçmiş) يروي الحدث كشاهد. لاحظ الغياب الكامل لأي ضمير: الفعل وحده يحمل كل المعلومة — أجمل ما في التركية الصورية."}],
why:`<p>هذا الحوار تطبيق حرفي لمعادلة الشكوى: <b>استماع كامل ← «صاحب حق» ← إعادة صياغة ← خياران والقرار له ← تنفيذ أمام عينه ← تعويض رمزي (تمديد الضمان) ← إغلاق بالامتنان</b>. لم يقل البائع «لكن» ولا مرة واحدة — كلمة واحدة «Haklısınız» فككت القنبلة كلها.</p>`,
variants:[
{kind:"formal",a:"اعتذار رسمي أشد",t:"Bayimiz adına size en içten özürlerimizi sunarız efendim."},
{kind:"casual",a:"تلطيف عفوي لزبون شاب غاضب",t:"Abi çok özür, başımızın belası oldu bu makine — hallediyoruz şu an, söz."}
]
});

DB.situations.push({
id:"sit-rush-id", kind:"situation", title:"زبون مستعجل (إندونيسيا)", sub:"ثلاث دقائق: بيع سريع دون فوضى", context:"زبون يهب داخل المحل ناظرًا ساعته: يريد قميص هدية عاجلة قبل حفل. الوقت ضيق.",
chapters:["needs","checkout","welcome"],
turns:[
{who:"C",a:"بسرعة رجاءً! عندي 5 دقائق — أريد قميصًا هدية لصديقي.",i:"Cepet ya kak! Lima menit lagi — mau kemeja buat hadiah teman.",it:"تشيڤيت يا كاك! ليما مينيت لاݢي — ماو كيميجا بوات هادية تيمان",t:"Çabuk olur musunuz, beş dakikam var — arkadaşıma hediye gömlek.",tt:"تشابوك أولور موسونوز، بش داقيقام ڤار — أركاداشيمه هيدييه كومليك",n:"الزبون المستعجل يكشف كل معلوماته فورًا — البائع الذكي لا يسأل أسئلة إضافية بل يتصرف."},
{who:"S",a:"فهمت! مقاسه تقريبًا؟ ولونه المفضل؟",i:"Siap! Ukurannya kira-kira? Warna favoritnya?",it:"سياب! أوكورانيا كيرا-كيرا؟ وارنا فاڤوريتنيا",t:"Anladım! Bedeni kaç civarı, rengi ne olsun?",tt:"أنلاديم! بيدني كاتش تشيڤاري، رينݢي نه أولسون",n:"سؤالان فقط، محددان، لا ثالث لهما — كل سؤال زائد يكلفك الصفقة."},
{who:"C",a:"مقاسي تقريبًا. أزرق أو أسود.",i:"Kayak punya saya. Biru atau hitam.",it:"كايك پونيا سايا. بيرو أتاو هيتام",t:"Benimle aynı. Mavi ya da siyah.",tt:"بينيمله آيني. ماڤي يا دا سيياه"},
{who:"S",a:"(يضع خيارين على الطاولة) هذان أسرع مبيعًا لدينا. هذا 180 وهذا 250 — ذاك أجود قماشًا.",i:"Ini dua yang paling laris. Yang ini seratus delapan puluh, yang ini dua ratus lima puluh — bahannya lebih bagus.",it:"إيني دوا ياڠ پالينݢ لاريس. ياڠ إيني سراتوس ديلابان پولوه، ياڠ إيني دوا راتوس ليما پولوه — باهانيا لبيه باݢوس",t:"İki en çok satanımız: bu yüz seksen, şu iki yüz elli — şu daha kaliteli kumaş.",tt:"إيكي ين تشوك ساتانيميز: بو يوز سيكسين، شو إيكي يوز إيلي — شو داها كاليتيلي قوماش",n:"خياران فقط + فرق واضح بجملة واحدة — تسريع القرار بلا حيرة."},
{who:"C",a:"أخذ الأجود. غلاف هدية ممكن؟",i:"Ambil yang bagus. Bungkus kado bisa?",it:"أمبول ياڠ باݢوس. بونݢوس كادو بيسا",t:"Kaliteli olanı alayım. Hediye paketi olur mu?",tt:"كاليتيلي أولاني آلايم. هيدييه پاكيتي أولور مو"},
{who:"S",a:"فورًا! (يغلّف) نقدًا أم بطاقة؟",i:"Bisa! (membungkus) Bayar tunai atau kartu?",it:"بيسا! باير توناي أتاو كارتو",t:"Hemen! (paketler) Nakit mi kart mı?",tt:"هيمين! ناكت مي كارت مي"},
{who:"C",a:"بطاقة. تفضل.",i:"Kartu. Ini.",it:"كارتو. إيني",t:"Kart. Buyurun.",tt:"كارت. بويورون"},
{who:"S",a:"تم! هذا إيصالك والفيشت. وعيد سعيد لصديقك!",i:"Sudah! Ini struknya. Selamat ya buat temannya!",it:"سوداه! إيني ستروكنيا. سيلامات يا بوات تيمانيا",t:"Tamamdır! Fişiniz burada. Arkadaşınız bayramını kutlasın!",tt:"تامامدير! فيشينيز بوراده. أركاداشنيز بيراميني قوتلاسين",n:"لمسة إنسانية أخيرة (تهنيئة بالمناسبة) تحوّل صفقة عجولة إلى ذكرى جميلة — وسبب عودة."},
{who:"C",a:"شكرًا على سرعتك! مثالي.",i:"Makasih cepatnya! Mantap.",it:"ماكاسيه تشيڤيتنيا! مانتاڤ",t:"Hızınız için teşekkürler, mükemmeldi!",tt:"هيزينيز إيتشين تشيكورلر، موكيميلدي"}
],
vocab:[
["سريع!","cepet!","تشيڤيت!","çabuk!","تشابوك!"],
["خمس دقائق","lima menit","ليما مينيت","beş dakika","بش داقيقا"],
["قميص","kemeja","كيميجا","gömlek","كومليك"],
["هدية","hadiah / kado","هادية / كادو","hediye","هيدييه"],
["الأكثر مبيعًا","paling laris","پالينݢ لاريس","en çok satan","ين تشوك ساتان"],
["قماش","bahan","باهان","kumaş","قوماش"],
["يغلّف","bungkus","بونݢوس","paketlemek","پاكيتليمك"],
["ممتاز","mantap","مانتاڤ","mükemmel","موكميل"]
],
grammar:[{t:"🇮🇩 «kayak» و«punya» — عامية توفّر عليك نصف القواعد",b:"«kayak» = مثل (بدل seperti) و«punya saya» = مِلكي/الذي معي. النسخة السوقية للجمل الرسمية: «seperti milik saya» تصبح «kayak punya saya». تعلم هاتين الكلمتين تفهم نصف دردشات إندونيسيا اليومية."}],
why:`<p>الزبون المستعجل اختبار خدمة حقيقي: <b>لا أسئلة استقصائية، خياران لا عشرة، مقارنة بجملة واحدة، غلاف فوري، وختام إنساني</b>. لاحظ أن البائع كرّر المعلومة المهمة (سعر + فرق الجودة) مرة واحدة فقط ثم صمت. السرعة مهارة، وليست عصبية.</p>`,
variants:[
{kind:"formal",a:"نسخة رسمية للترحيب المستعجل",i:"Siap Bapak, langsung saya siapkan. Tunggu dua menit ya."},
{kind:"casual",a:"نسخة ساخرة مع زبون شاب مستعجل",i:"Santai kak, dua menit beres — saya lebih cepat dari kamu!"}
]
});

DB.situations.push({
id:"sit-wholesale", kind:"wholesale", title:"تفاوض مع مورد على سعر جملة (إندونيسيا)", sub:"الحد الأدنى، أشرطة الخصم، الدفع، والتوريد", context:"أنت صاحب محل، تتفاوض مع مورد (pemasok) على توريد 200 قطعة قمصان شهريًا. المحادثة في مكتب المورد.",
chapters:["wholesale","bargain","prices"],
turns:[
{who:"C",a:"أعجبتني عيناتكم. أتكلم عن 200 قطعة شهريًا — دائمة.",i:"Sampelnya bagus. Saya bicara dua ratus potong per bulan — rutin.",it:"سامڤيلنيا باݢوس. سايا بيتشارا دوا راتوس پوتوڠ بر بولن — روتين",t:"—",tt:"—",n:"افتتح بحجمك مباشرة — الجملة تُعلن نفسها قبل أي سعر."},
{who:"S",a:"أهلًا بك شريكًا! سعر الجملة للقطعة 85 ألفًا، والحد الأدنى 100 قطعة.",i:"Selamat datang partner! Harga grosir per potong delapan puluh lima. Minimum seratus potong.",it:"سيلامات داتنݢ پارتنر! هارݢا ݢروسير بر پوتوڠ ديلابان پولوه ليما. مينيموم سراتوس پوتوڠ",t:"—",tt:"—",n:"«partner» — الإندونيسية التجارية تستعمل الإنجليزية للدفء الاستراتيجي."},
{who:"C",a:"85؟ السوق يعرض 78. أستطيع التعامل بكميات أكبر مقابل 75.",i:"Delapan puluh lima? Pasar kasih tujuh puluh delapan. Kalau jumlah lebih besar, saya minta tujuh puluh lima.",it:"ديلابان پولوه ليما؟ پاسار كاسيه توجوه پولوه ديلابان. كالاو جومله لبيه بيسار، سايا مينتا توجوه پولوه ليما",t:"—",tt:"—",n:"ذكر منافس محدد + رقم محدد + شرط كمية — التفاوض الاحترافي الثلاثي."},
{who:"S",a:"75 مستحيل — التكلفة فوقها. لكن عند 200 شهريًا: 80، وأحمل لك التوصيل داخل المدينة.",i:"Tujuh puluh lima tidak mungkin, modal saja lebih. Tapi kalau dua ratus rutin: delapan puluh, ongkir dalam kota saya tanggung.",it:"توجوه پولوه ليما تيدق موڠكين، مدال ساچا لبيه. تاڤي كالاو دوا راتوس روتين: ديلابان پولوه، أونݢكير دالم كوتا سايا تانݢوڠ",t:"—",tt:"—",n:"رفض بالسبب (التكلفة) + تنازل مشروط بقيمة غير سعرية (الشحن) — بوابة الجملة الذهبية."},
{who:"C",a:"أقترح 78 وتدفع أنت التوصيل — وأتعهد بـ250 شهريًا لأربعة أشهر.",i:"Kita sepakat tujuh puluh delapan, ongkir dari kakak. Saya komit dua ratus lima puluh per bulan, empat bulan.",it:"كيتا سڤاكات توجوه پولوه ديلابان، أونݢكير داري كاكاك. سايا كوميت دوا راتوس ليما پولوه بر بولن، إمڤات بولن",t:"—",tt:"—",n:"مقابل مضاد: رقم وسط + التزام طويل — العملة الحقيقية للموردين هي «الثبات»."},
{who:"S",a:"250 لأربعة أشهر… حسنًا: 78. لكن الدفع نصف مقدم ونصف عند الاستلام.",i:"Dua ratus lima puluh empat bulan… ya sudah: tujuh puluh delapan. Tapi bayar setengah DP, setengah waktu barang sampai.",it:"دوا راتوس ليما پولوه إمڤات بولن يا سوداه: توجوه پولوه ديلابان. تاڤي باير ستنݢاه دي بي، ستنݢاه واكتو باراڠ سامپاي",t:"—",tt:"—",n:"قبول مقابل شروط سيولة (50/50) — كل تنازل يُشترى بشيء: هذا عرف الجملة العالمي."},
{who:"C",a:"موافق، بشرط: استبدال أي صنف معيب خلال 14 يومًا.",i:"Sepakat, asal: barang cacat bisa retur empat belas hari.",it:"سڤاكات، أسال: باراڠ تشاتشات بيسا ريتور إمڤات بيلس هاري",t:"—",tt:"—"},
{who:"S",a:"اتفقنا. سأرسل لك الاتفاق والفاتورة واتساب. أول شحنة متى تريدها؟",i:"Deal. Nanti saya kirim perjanjian sama faktur lewat WA. Kiriman pertama mau kapan?",it:"ديل. نانتي سايا كيريم برجانچان ساما فاكتور ليوات وا. كيريمان بيرتاما ماو كاڤان",t:"—",tt:"—",n:"«perjanjian» = اتفاق — التركيز على التوثيق المكتوب ولو بالواتساب يحمي العلاقة التجارية الطويلة."},
{who:"C",a:"الأسبوع القادم. تم التعامل — نتشارك الربح إن شاء الله.",i:"Minggu depan. Deal — semoga kita sama-sama untung.",it:"مينݢو ديبان. ديل — سمواݢا كيتا ساما-ساما أونتوڠ",t:"—",tt:"—",n:"«sama-sama untung» = ربح مشترك للطرفين — الخاتمة الإندونيسية المثالية لأي شراكة جملة."}
],
vocab:[
["عينة","sampel","سامڤيل","numune","نومونه"],
["مورد / مورّد","pemasok","پيماسوق","tedarikçi","تيداريكتشي"],
["سعر الجملة","harga grosir","هارݢا ݢروسير","toptan fiyat","توپتان فيات"],
["الحد الأدنى للطلب","minimum order","مينيموم أوردر","asgari sipariş","أسكاري سيپاريش"],
["التكلفة","modal / harga pokok","مدال","maliyet","ماليت"],
["كمية","jumlah","جومله","miktar","مقتار"],
["التزام ثابت","komitmen rutin","كوميتمين روتين","düzenli taahhüt","دوزينلي تعهود"],
["استبدال المرتجع","retur","ريتور","iade","آييدي"],
["اتفاق مكتوب","perjanjian","برجانچان","sözleşme","سوزليشمة"],
["ربح","untung","أونتوڠ","kâr","كار"]
],
grammar:[{t:"🇮🇩 «per-» و«lewati» — لغة المعاملات",b:"«per bulan» = شهريًا/لكل شهر (per = لكل)، «per potong» = للقطعة. و«lewat WA» = عبر واتساب (lewat = عبر/يمر). أداتان صغيرتان تظهران في كل رسالة تجارية إندونيسية — احفظهما كوحدة واحدة مع ما بعدهما."}],
why:`<p>هذا نموذج التفاوض الاحترافي الكامل: <b>حجم ← أرقام منافسة ← تنازل مشروط ← التزام طويل ← شروط سيولة ← حماية جودة (retur) ← توثيق</b>. كل تنازل اشتُري بمقابل، وكل مقابل حُمّي بشرط. لاحظ النبرة: شريكان يبنيان ربحًا مشتركًا — لا مصارعة أثمان.</p>`,
variants:[
{kind:"formal",a:"فتح رسمي بالمكاتبة",i:"Kepada Yth. Bapak Pemasok, kami bermaksud memesan dua ratus potong per bulan."},
{kind:"casual",a:"فتح عفوي مع مورد قديم",i:"Bang, sample-nya oke nih. Kita gas dua ratus sebulan bisa?"}
]
});

DB.situations.push({
id:"sit-foreign-tr", kind:"situation", title:"زبون أجنبي لا يتكلم التركية جيدًا", sub:"جمل قصيرة، آلة حاسبة، إيماءات — بيع كامل عبر حاجز اللغة", context:"سائح أجنبي في محل هدايا بأنطاليا. تركيته ضعيفة. أنت البائع.",
chapters:["foreign","prices","bargain"],
turns:[
{who:"C",a:"مرحبًا… كم… هذا؟ (يشير لطبق)",i:"—",it:"—",t:"Merhaba… bu… kaç?",tt:"مرحبا بو كاتش",n:"جملة مكسورة بسيطة — البائع المحترف يكافئها ببساطة مقابلة لا بإظهار لغته."},
{who:"S",a:"500 ليرة. (يكتب على الآلة الحاسبة ويدورها له)",i:"—",it:"—",t:"Beş yüz. (hesap makinesine yazıp gösterir)",tt:"بش يوز",n:"الآلة الحاسبة لغة الأسعار العالمية — الرقم المكتوب يلغي كل لبس لفظي."},
{who:"C",a:"كثير؟ ناقص؟ (بحركة يدين متقابلتين)",i:"—",it:"—",t:"Çok mu? İndirim olur mu?",tt:"تشوك مو؟ إنديريم أولور مو",n:"السائح يقلّد المساومة بكلمتين وإشارة — الترجمات الحية أسرع تعليمًا من أي كتاب."},
{who:"S",a:"(يبتسم ويكتب 450) صديقي… 450. آخر سعر.",i:"—",it:"—",t:"(gülümser, 450 yazar) Arkadaşım, dört yüz elli. Son fiyat.",tt:"أركاداشيم، دورت يوز إيلي. سون فيات"},
{who:"C",a:"طبقان… 800؟ (يرفع إصبعين)",i:"—",it:"—",t:"İki tane… sekiz yüz?",tt:"إيكي تانه سيكيز يوز",n:"الزبون تعلّم بنية العرض التركي بسرعة — عدده + رقمه: هذا إنجاز تواصل حقيقي."},
{who:"S",a:"طبقان… 850. جيد جدًا! (يكتبها ويصافح)",i:"—",it:"—",t:"İki tane dört yüz ellişer — sekiz yüz elli. Çok iyi!",tt:"إيكي تانه دورت يوز إليشار — سيكيز يوز إلي. تشوك إيي",n:"«dört yüz ellişer» = 450 لكل واحد — اللاحقة -şer للتوزيع: قاعدة تركية يومية في البيع بالعدّة."},
{who:"C",a:"تمام! نعم. (يخرج بطاقته)",i:"—",it:"—",t:"Tamam, evet. (kartını uzatır)",tt:"تامام، إييت"},
{who:"S",a:"بطاقة ممكن. هذه فتحة البطاقة… نعم هنا. إيصالك — مهم للجمارك!",i:"—",it:"—",t:"Kart olur. Fişiniz — gümrük için önemli!",tt:"كارت أولور. فيشينيز — كومروك إيتشين أهم",n:"معلومة السفر الذكية (الفيشت للجمارك/refund) تُظهر عناية نادرة تُذكر ويحكى عنها."},
{who:"C",a:"شكرًا جزيلًا! وداعًا!",i:"—",it:"—",t:"Çok teşekkürler! Güle güle!",tt:"تشوك تشيكورلر! كوله كوله"},
{who:"S",a:"مع السلامة! سفرك موفقًا!",i:"—",it:"—",t:"Güle güle, iyi yolculuklar!",tt:"كوله كوله، إيي يولقوشلار"}
],
vocab:[
["يكتب على الحاسبة","menulis di kalkulator","منوليس دي كالكولاتور","hesap makinesine yazmak","حساب ماكينيسينه يازمق"],
["يُظهر/يعرض","menunjukkan","منونجوكان","göstermek","كوستيرمك"],
["صديقي","teman saya","تيمان سايا","arkadaşım","أركاداشيم"],
["لكل واحد","per satu","بر ساتو","-şer / tane başı","إليشار / تانه باشي"],
["فتحة البطاقة","tempat kartu","تيمڤات كارتو","kart okuyucu","كارت أوكيوجو"],
["جمارك","bea cukai","بيه تشوكاي","gümrük","كومروك"],
["سفر موفقًا","perjalanan lancar","برجالانن لانتشار","iyi yolculuklar","إيي يولقوشلار"]
],
grammar:[{t:"🇹🇷 اللاحقة الموزعة «-şer»",b:"«dört yüz ellişer» = 450 لكل قطعة، «ikişer» = اثنان لكل واحد، «onar» = عشرة عشرة. لاحقة التوزيع تحول أي رقم إلى «لكل واحد» — تستخدمها في كل عرض كمية: «Üçer tane alırsanız…» (لو أخذت ثلاثًا لكل نوع…)."}],
why:`<p>البيع عبر حاجز اللغة فن مستقل: <b>جملتان كلمتان، آلة حاسبة دائمًا، إيماء مصاحب، تكرار رقم الزبون للتصديق، ومعلومة سفر ذكية في الختام</b>. لم يستعمل البائع كلمة واحدة معقدة — ومع ذلك أتم صفقة وأسعد زبونًا سيحكي القصة في بلده.</p>`,
variants:[
{kind:"formal",a:"بداية أكثر عالمية بالإنجليزية البسيطة",t:"Welcome! Please, look around. I help you."},
{kind:"casual",a:"كسر جليد مبكر بضحكة",t:"Türkçe çok iyi! (gülümser) — Şaka şaka, sorun yok, hallederiz."}
]
});

DB.situations.push({
id:"sit-hesitant-id", kind:"situation", title:"زبونة مترددة بين خيارين (إندونيسيا)", sub:"«لا أعرف أيهما!» — إزالة التردد بلا ضغط", context:"زبونة تحير بين حقيبتين لونين متقاربين منذ عشر دقائق. تحتاج قائدًا لا بائعًا.",
chapters:["hesitant","persuade","products"],
turns:[
{who:"C",a:"لا أعرف أيهما آخذ… كلاهما جميل.",i:"Bingung mau pilih yang mana… dua-duanya bagus.",it:"بينݢونݢ ماو بيليه ياڠ مانا… دوا-دوانيا باݢوس",t:"Hangisini alsam bilemedim… ikisi de güzel.",tt:"هانݢيسيني آلسام بيلميديم إيكيسي د كوزيل"},
{who:"S",a:"أفهمك! سؤال يساعدك: للأمسيات أم للاستخدام اليومي؟",i:"Saya ngerti! Biar mudah: buat acara malam atau buat harian?",it:"سايا نݢرتي! بيار موداه: بوات آتشارا مالام أتاو بوات هاريان",t:"Sizi anlıyorum! Kolaylaştıralım: akşam için mi, günlük mü?",tt:"سيزه أنليوروم! قولايلاشتيراليم: آقشام إيتشين مي، كونلوك مو",n:"سؤال الاستخدام يفتح معيار القرار الحقيقي — التقنية الأولى لإذابة التردد."},
{who:"C",a:"للاستخدام اليومي غالبًا… مع الجامعة.",i:"Harian sih… ke kampus juga.",it:"هاريان سيه كه كامپوس يوݢا",t:"Genelde günlük… üniversiteye de.",tt:"كينيلده كونلوك أونيڤيرسيتيه د"},
{who:"S",a:"إذن نصيحتي: هذا — جلده أدوم واللون لا يتوسخ بسرعة. ولو كنت مكانك لأخذته.",i:"Berarti saran saya: yang ini. Kulitnya lebih awet, warnanya nggak gampang kotor. Kalau saya sih ambil yang ini.",it:"بيرأرتي ساران سايا: ياڠ إيني. كوليتنيا لبيه أويت، وارنانيا نݢاك ݢامڤانݢ كوتور. كالاو سايا سيه أمبول ياڠ إيني",t:"O zaman önerim bu: derisi daha dayanıklı, rengi kolay kir tutmaz. Ben olsam bunu alırdım.",tt:"أو زمان أونيريم بو: ديريسي داها دايانقلي، رينݢي قولاي قير توتماز. بين أولسام بونو آليرديم",n:"توصية + سببان ملموسان + «لو كنت مكانك» — الثلاثية الكاملة بلا ذر ضغط."},
{who:"C",a:"لكن ذاك أرخص بـ50 ألفًا…",i:"Tapi yang itu lebih murah lima puluh ribu…",it:"تاڤي ياڠ إيتو لبيه موراه ليما پولوه ريبو",t:"Ama öteki elli bin daha ucuz…",tt:"أما أوتيكي إلي بين داها أوتشوز",n:"الصراخ السعري للتردد — الجواب الذكي يعيد التذكير بالقيمة لا بالرقم."},
{who:"S",a:"صحيح. لكن فرق 50 سيدفعه معك أول تنظيف — ذاك يتوسخ بسرعة. على سنة كاملة هذا أوفر.",i:"Betul. Tapi selisih lima puluh itu habis di pencucian pertama — yang itu cepat kotor. Setahun dihitung, yang ini lebih hemat.",it:"بتول. تاڤي سيليسيه ليما پولوه إيتو هابيس دي بنتشوتشان بيرتاما — ياڠ إيتو تشيڤات كوتور. سيتاهون ديهيتوڠ، ياڠ إيني لبيه همات",t:"Doğru, ama farkı ilk temizlemede ödersiniz — öteki çabuk kirlenir. Yıllık hesapta bu daha ekonomik.",tt:"دوݢرو أما فارقي إيلك تيميزليمد أوديرسينيز — أوتيكي تشابوك قيريلينير. ييليق حسابته بو داها إيكونوميك",n:"حساب التكلفة الكاملة (cost of ownership) — أعلى مستويات الإقناع المهني، مقنع لأنه يحسب مصلحة الزبون فعلًا."},
{who:"C",a:"(تضحك) أقنعتني! آخذ الذي نصحت به.",i:"(tertawa) Yaudah, saya ikut saran kakak!",it:"ترتاوا ياوده سايا إيكوت ساران كاكاك",t:"(güler) Pekâlâ, tavsiyenize uyuyorum!",tt:"قلاله تاڤسيينيزه أويوروم"},
{who:"S",a:"اختيار موفق! ولم تعجبي خلال أسبوع نبدله لك — بلا نقاش.",i:"Pilihan tepat! Kalau dalam seminggu kurang cocok, tukar saja — tanpa ribet.",it:"بيليهان تاڤات! كالاو دالم سيمينݢو كوراڠ تشوتشوق، توكار ساچا — تانڤا ريبيت",t:"Doğru seçim! Bir hafta içinde beğenmezseniz değiştiririz, sorunsuz.",tt:"دوݢرو سيتشيم! بير هافتا إيتشيند بيكينميزسينيز ديكيلشتيريريز سورونسز",n:"ضمان ما بعد القرار يمحو آخر ذرة من «خوف الندم» — ويغلق التردد نهائيًا."},
{who:"C",a:"رائع! أدفعه QRIS.",i:"Mantap! Bayar QRIS ya.",it:"مانتاڤ! باير قريس يا",t:"Harika! Kartla ödeyeyim.",tt:"هاريكة! كارتله أودييم"}
],
vocab:[
["حيران","bingung","بينݢونݢ","kararsız","قرارسز"],
["نصيحة","saran","ساران","tavsiye","تاڤسييه"],
["يدوم / متين","awet / kuat","أويت / كوات","dayanıklı","دايانقلي"],
["يتوسخ بسرعة","cepat kotor","تشيڤات كوتور","çabuk kirlenir","تشابوك قيريلينير"],
["فرق السعر","selisih harga","سيليسيه هارݢا","fiyat farkı","ليات فارقي"],
["أوفر / أوفر على المدى","lebih hemat","لبيه همات","daha ekonomik","داها إيكونوميك"],
["بلا تعقيد","tanpa ribet","تانڤا ريبيت","sorunsuz","سورونسز"],
["أطيع/أتبع","ikut","إيكوت","uymak","أويمق"]
],
grammar:[{t:"🇮🇩 «kalau…» بداية كل عرض شرطي",b:"Kalau saya sih… (لو كان بيدي)، Kalau ambil dua… (لو أخذت اثنين)، Kalau kurang cocok… (لو لم يناسبك). «kalau» أداة الشرط اليومية (بدل الفصيحة jika) — تليّن أي اقتراح لأنها تجعله احتمالًا لا أمرًا. ضعها أول كل جملة عرض وستبدو إندونيسيًا فورًا."}],
why:`<p>خطة إذابة التردد كما جرت هنا: <b>سؤال استخدام ← توصية بسببين ← «لو كنت مكانك» ← معالجة فرق السعر بحساب سنة ← ضمان استبدال</b>. خمس خطوات، صفر جملة ضغط — والنتيجة: قرار مطمئن وزبونة ستثق بتوصياتك للأبد (وهذا أغلى رأس مال لبائع).</p>`,
variants:[
{kind:"formal",a:"سؤال الاستخدام بنسخة رسمية",i:"Untuk keperluan apa, Bu? Harian atau acara resmi?"},
{kind:"casual",a:"نسخة صديقة شابة جدًا",i:"Gimana kalau kakak tanya hati? Which one? Yang mana yang kakak pandang terus tadi?"}
]
});

DB.situations.push({
id:"sit-complaint-id", kind:"complaint", title:"خطأ في طلب موصَّل — الاسترجاع (إندونيسيا)", sub:"«هذا ليس ما طلبته!» — استرجاع كامل بأدب احترافي", context:"زبونة استلمت طردًا فيها قميص رجالي بدل الفستان الذي طلبته عبر واتساب. غاضبة لكن مهذبة. الخطأ من قسم التجهيز.",
chapters:["complaints","messaging"],
turns:[
{who:"C",a:"أختي، هذا ليس طلبي! طلبت فستانًا وأرسلتم قميصًا رجاليًا!",i:"Kak, ini bukan pesanan saya! Saya pesan dress, kok yang datang kemeja cowok!",it:"كاك إيني بوكان بيسانان سايا! سايا بيسان دريس، كوك ياڠ داتنݢ كيميجا تشوووك",t:"Bu benim siparişim değil! Elbise istemiştim, erkek gömleği gelmiş!",tt:"بو بينيم سيپاريشيم ديكيل! إلبيسه إستمشتيم، إرك كومليي كيلمش",n:"الغضب الإندونيسي مهذب عادة — «kak» حتى في الشكوى. ردك أولًا: الاعتراف."},
{who:"S",a:"حقك معي أختي، هذا خطؤنا فعلًا. أعتذر بصدق — دعيني أتأكد من طلبك.",i:"Kakak benar, ini salah kami. Maaf sekali. Saya cek dulu ya pesanannya.",it:"كاكاك بينار، إيني ساله كامي. ماؤف سيكالي. سايا تشيك دولو يا بيسانيا",t:"Haklısınız, bizim hatamız. Çok özür dileriz, siparişinizi kontrol edeyim.",tt:"حقليسينيز بيزيم هاتاميز. تشوك أوزور ديليريز سيپاريشينيزي كونترول إدييم",n:"«Kami salah» (نحن أخطأنا) — جمع المتكلمين يوزع الخطأ على المؤسسة ويحفظ كرامة المتحدث."},
{who:"C",a:"الطلب رقم 1122: فستان أخضر مقاس M. عندي صورة المحادثة.",i:"Pesanan 1122: dress hijau ukuran M. Screenshot chatnya saya simpan.",it:"بيسانان ساتو ساتو دوا دوا: دريس هيجو أوكوران إيم. سكرينشوت تشاتنيا سايا سيمڤان",t:"Sipariş 1122: yeşil elbise, M beden. Yazışmanın ekran görüntüsü bende.",tt:"سيپاريش ساتو ساتو دوا دوا: ييشيل إلبيسه إيم بيدن",n:"رقم الطلب + الدليل — هنا يظهر ثمن التوثيق المكتوب: الحل صار مسألة دقائق."},
{who:"S",a:"صحيح، الخطأ واضح. أمامك خياران: نستبدله اليوم والجديد يصل غدًا، أو نرد مالك كاملًا اليوم. من حقك أيهما.",i:"Betul, jelas salah kami. Ada dua pilihan: saya tukar hari ini, besok pagi sampai. Atau uang kembali hari ini juga. Kakak berhak pilih.",it:"بتول جيلاس ساله كامي. ادا دوا بيليهان: سايا توكار هاري إيني بيسوك پاݢي سامپاي. أتاو أوڠ كمبالي هاري إيني يوݢا. كاكاك برهاق بيليه",t:"Evet, hatayı görüyorum. İki seçenek: bugün değişim, yenisi yarın elinizde; ya da bugün para iadesi. Sizin seçiminiz.",tt:"إييت هاتايي كورويوروم. إيكي سيتشينيك: بوكون ديكيلشيم يينيسي يارين؛ يا دا بوكون پارا آييديسي",n:"خياران فوريان + تسليم الحق في الاختيار — ينهي أغلب الشكاوى في دقيقة."},
{who:"C",a:"لا أريد الانتظار. أرجعوا لي مالي. وتفضلوا باستلام القميص.",i:"Nggak mau nunggu. Uangnya dikembalikan saja. Kemejanya nanti diambil.",it:"نݢاك ماو تونݢݢو. أوڠنيا ديكيمباليكان ساچا. كيميجانيا نانتي ديامبيل",t:"Beklemek istemiyorum. Paramı iade edin, gömleği alın geri.",tt:"بيكليميك إستميوروم. پاريمي آييدي إديين كومليكي ألين كيري",n:"رفض الاستبدال وطلب الاسترجاع — حقه الكامل بشروط الطلب."},
{who:"S",a:"تمام. سأرد 195 ألفًا الآن إلى حسابك، والحمّال يمر على القميص اليوم. عذرًا مرة أخرى على تشويش يومك.",i:"Baik. Seratus sembilan puluh lima saya kembalikan sekarang ke rekening kakak. Kurirnya hari ini ambil kemejanya. Maaf sekali lagi sudah merepotkan.",it:"باءيك. سراتوس سمبيلان پولوه ليما سايا كمباليفكان سيكارانݢ كه رييكينينݢ كاكاك. كوريرنيا هاري إيني أمبول كيميجانيا. ماؤف سيكالي لاݢي سوداه ميريڤوتكان",t:"Peki. İadeyi hemen yapıyorum, kurye bugün gömleği alsın. Tekrar özür dileriz, sizi uğraştırdık.",tt:"پيكي. آييدييه هيمين ياپيوروم كورييه بوكون كومليكي ألسين. تكرار أوزور ديليريز",n:"تنفيذ فوري + جملة «أزعجناك» — الاعتذار عن الإزعاج (bukan عن الخطأ فقط) هو اللمسة الاحترافية."},
{who:"C",a:"وصل المبلغ. شكرًا على سرعة المعالجة — هكذا تُحل المشاكل.",i:"Uangnya sudah masuk. Makasih cepatnya. Begini cara masalah diselesaikan.",it:"أوڠنيا سوداه ماسوق. ماكاسيه تشيڤيتنيا. بيكيني تارا مساله ديسليسايفكان",t:"Para hesaba geçti. Hızınız için teşekkürler, sorun böyle çözülür.",tt:"پارا حسابا كيتشتي. هيزينيز إيتشين تشيكورلر",n:"زبونة راضية رغم الخطأ — لأن العلاج كان أسرع من الغضب."},
{who:"S",a:"شكرًا لتفهمك أختي. وعندك خصم 10% على طلبك القادم عندنا — نستحق فرصة تصحيح الانطباع.",i:"Makasih pengertiannya kak. Ada diskon sepuluh persen buat pesanan kakak berikutnya. Kami berhak diberi kesempatan memperbaiki.",it:"ماكاسيه پينݢرتيانيا كاك. ادا ديسكون سبولوه پيرسين بوات بيسانان كاكاك بيريكوتنيا",t:"Anlayışınız için teşekkürler. Sonraki siparişinize yüzde on indirim — bizi tekrar deneyin lütfen.",tt:"أنلايشينيز إيتشين تشيكورلر. سونراكي سيپاريشينيزه يوزده أون إنديريم",n:"تعويض رمزي مشروط بطلب قادم — يحوّل الشاكي إلى فرصة بيع جديدة إن نطقته بتواضع لا بزبون."}
],
vocab:[
["ليس طلبي","bukan pesanan saya","بوكان بيسانان سايا","siparişim değil","سيپاريشيم ديكيل"],
["خطأ","salah","ساله","hata","هاتا"],
["يُعاد المال","uang dikembalikan","أوڠ ديكيمباليكان","para iadesi","پارا آييديسي"],
["حمّال/مندوب","kurir","كورير","kurye","كورييه"],
["يستلم/يُقبض","sampai / masuk","سامپاي / ماسوق","hesaba geçti","حسابه كيتشتي"],
["تفهم (شكرًا عليه)","pengertian","پينݢرتيان","anlayış","أنلايش"],
["تشويش/إزعاج","merepotkan","ميريڤوتكان","uğraştırmak","أوݢراشترمق"],
["فرصة","kesempatan","كيسمڤاتان","fırsat","فيرصات"]
],
grammar:[{t:"🇮🇩 «kok» — أداة الاستنكار اليومية",b:"«kok yang datang kemeja?» = كيفَ يصل قميص (والطلب فستان)؟! — kok تعبير تعجبي لا يُترجم حرفيًا، يضيف نبرة «كيف حدث هذا؟» بأدب شكوى. ضعها بعد الموضوع المستنكر. سماعها في كل شكوى إندونيسية أمر مضمون."}],
why:`<p>ملاحظة البنية: <b>اعتراف فوري ← تحقق بدليل ← خياران والقرار له ← تنفيذ في الدقيقة ← اعتذار عن الإزعاج (لا عن الخطأ فقط) ← تعويض مشروط بطلب قادم</b>. الشكوى المُدارة بهذا الشكل لا تُفقد زبونًا بل تصنع قصة يرويها: «أخطؤوا فأصلحوا في خمس دقائق» — وهذا أثمن إعلان ممكن.</p>`,
variants:[
{kind:"formal",a:"رد رسمي أول للمؤسسات",i:"Mohon maaf atas kesalahan pengiriman. Segera kami proses pengembalian dana."},
{kind:"casual",a:"رد عفوي دافئ لزبونة دائمة",i:"Aduh kak, maaf banget! Otak kami kemasukan angin nih — hari ini juga beres!"}
]
});

DB.situations.push({
id:"sit-wa-order", kind:"message", title:"طلب كامل عبر واتساب (إندونيسيا)", sub:"من «Hallo kak» حتى «sudah sampai» — قوالب حية", context:"زبونة دائمة تراسلك على واتساب طالبة فستانين. الرسائل كما تجري فعلًا (اكتبها كما هي!).",
chapters:["messaging","checkout"],
turns:[
{who:"C",a:"مرحبًا! الفستان الأزرق من أسبوع ما زال موجودًا؟",i:"Halo kak! Dress biru yang minggu lalu masih ada?",it:"هالو كاك! دريس بيرو ياڠ مينݢو لالو ماسيه ادا",t:"Merhaba! Geçen haftaki mavi elbise hâlâ duruyor mu?",tt:"مرحبا! كيتشان هافتاكي ماڤي إلبيسه هالي دوريور مو"},
{who:"S",a:"أهلًا بأختنا! موجود — مقاس M وL. أرسل لك صوره الآن.",i:"Wah kak langganan! Masih ada, ukuran M sama L. Fotonya saya kirim sekarang ya.",it:"واه كاك لانݢانان! ماسيه ادا، أوكوران إيم ساما إيل. فوتونيا سايا كيريم سيكارانݢ يا",t:"Hoş geldin! Hâlâ var, M ve L beden. Fotoğrafı şimdi atıyorum.",tt:"هوش كيلدين! هالي ڤار، إيم ڤيه إيل بيدن. فوتوݢرافي شيمدي آتيوروم",n:"«Wah kak langganan!» — الاعتراف بالزبون الدائم بأول رسالة يرفع قيمة المحادثة كلها."},
{who:"C",a:"أريد اثنين: L أزرق وM أسود. السعر مع التوصيل؟",i:"Mau dua kak: L biru sama M hitam. Harga plus ongkir berapa?",it:"ماو دوا كاك: إيل بيرو ساما إيم هيتام. هارݢا ڤلوس أونݢكير براپا",t:"İki istiyorum: L mavi, M siyah. Kargo dahil kaç olur?",tt:"إيكي إستيوروم: إيل ماڤي، إيم سيياه. كارݢو داهيل كاتش أولور"},
{who:"S",a:"الاثنان 400 ألفًا + توصيل 20. مجموع 420. أرسل لك صور الألوان للتأكيد.",i:"Dua-duanya empat ratus, ongkir dua puluh. Total empat ratus dua puluh. Warna saya kirim dulu ya biar jelas.",it:"دوا-دوانيا إمڤات راتوس، أونݢكير دوا پولوه. توتال إمڤات راتوس دوا پولوه. وارنا سايا كيريم دولو يا بييار جيلاس",t:"İkisi dört yüz, kargo yirmi; toplam dört yüz yirmi. Renk fotoğraflarını atayım, net olsun.",tt:"إيكيسي دورت يوز، كارݢو ييرمي؛ توپلام دورت يوز ييرمي. رينك فوتوݢرافلاريني آتايم، نت أولسون",n:"إجمالي واضح + تأكيد بصري قبل الدفع — معيار الاحتراف في البيع عبر الرسائل."},
{who:"C",a:"تمام. عنواني: شارع النخيل 12، منزل أهلي: سارة.",i:"Oke kak. Alamat: Jalan Palma dua belas, rumah Sarah.",it:"أوكيه كاك. ألامت: جالان پالما دوا بيلس، رومه سارة",t:"Tamam. Adres: Palma sokak 12, Sarah.",tt:"تامام. أدرس: پالما سوكاق 12، سارة"},
{who:"S",a:"دوّنت: فستانان، Jalan Palma 12، سارة. صحيح؟ الدفع عبر:",i:"Saya catat: dua dress, Jalan Palma 12, Sarah. Sudah benar? Pembayaran ke BCA 123456789 a.n. Toko Rizki.",it:"سايا تشات: دوا دريس، جالان پالما دوا بيلس، سارة. سوداه بينار؟ بيمباران كه بي سي إي ساتو دوا تيݢا إمڤات ليما إمڤات توجوه ديلابان سيمبيلان إيه إن توكو ريزقي",t:"Not aldım: iki elbise, Palma 12, Sarah. Doğru mu? Ödeme: IBAN TR12 3456 …",tt:"نوت آلديم: إيكي إلبيسه، پالما 12، سارة. دوݢرو مو؟ أوديمه: إيبان تي آر 12 3456",n:"إعادة الطلب للتصديق + بيانات الحساب نصًا — سطران يمنعان 90% من أخطاء الطلبات."},
{who:"C",a:"صحيح! حوّلت 420. هذه صورة الإيصال.",i:"Sudah benar kak! Sudah transfer empat ratus dua puluh. Ini buktinya.",it:"سوداه بينار كاك! سوداه ترانسفير إمڤات راتوس دوا پولوه. إيني بوكتينيا",t:"Doğru! Havaleyi yaptım, dekont burada.",tt:"دوݢرو! هاڤاليهي يابتيم، ديكونت بوراده"},
{who:"S",a:"وصل الدفع، شكرًا! يُشحن غدًا صباحًا وسيصل بإذن الله بعد غد. رقم التتبع أرسله لك.",i:"Pembayaran masuk, makasih kak! Besok pagi saya kirim, kira-kira lusa sampai. Nomor resi nanti saya kirim.",it:"بيمباران ماسوق ماكاسيه كاك! بيسوك پاݢي سايا كيريم، كيرا-كيرا لوسا سامپاي. نومور ريسي نانتي سايا كيريم",t:"Ödeme geldi, teşekkürler! Yarın sabah kargoda, ertesi gün elinizde olur. Takip numarasını atarım.",tt:"أوديمه كيلدي تشيكورلر! يارين صباح كارݢوده، إرتيسي كون إليينيزده أولور. تقيف نوماراسيني آتاريم"},
{who:"C",a:"ممتاز، بانتظارك! شكرًا",i:"Sip kak, ditunggu ya! Makasih",it:"سيڤ كاك، ديتونݢݢو يا! ماكاسيه",t:"Harika, bekliyorum. Teşekkürler!",tt:"هاريكة، بيكليوروم. تشيكورلر"},
{who:"S",a:"على الرحب! (بعد يومين) وصل الطلب؟ نتمنى أنه أعجبك 🌸",i:"Dengan senang hati! (2 hari kemudian) Paketnya sudah sampai kak? Semoga suka ya",it:"دنݢان سينانݢ هاتي! دوا هاري كيمودين. پاكيتنيا سوداه سامپاي كاك؟ سمواݢا سوكا يا",t:"Rica ederim! (2 gün sonra) Paket ulaştı mı? Beğenmenizi umarım",tt:"ريجا إديريم! إيكي كون كيمودين. پاكيت أولاشتي مي؟ بيكينمينيزي أوماريم",n:"متابعة ما بعد الاستلام — رسالة واحدة تكفي: تفتح التقييم وإعادة الطلب وتغلق دائرة الخدمة بأدب."}
],
vocab:[
["زبون دائم","langganan","لانݢانان","müdavim","موداڤيم"],
["توصيل/شحن","ongkir / kirim","أونݢكير / كيريم","kargo","كارݢو"],
["مجموع","total","توتال","toplam","توپلام"],
["إثبات الدفع","bukti transfer","بوكتيل ترانسفير","dekont","ديكونت"],
["سند الشحنة","resi","ريسي","takip numarası","تقيف نوماراسي"],
["بعد غد","lusa","لوسا","ertesi gün","إرتيسي كون"],
["وصل (للمستلم)","sudah sampai","سوداه سامپاي","ulaştı mı","أولاشتي مي"]
],
grammar:[{t:"🇮🇩 «sama» و«plus» — أدوات الربط التجارية",b:"«sama» = مع/و (عامية dari «dan»): M sama L. و«plus» = زائد في الأسعار. رسائل الباعة تختصر القواعد: خبرة الدردشة الإندونيسية أن الجملة القصيرة الموثوقة أفضل من الطويلة الصحيحة."}],
why:`<p>هذه بنية طلب واتساب المثالية: <b>رد فوري ← اعتراف بالزبون ← عرض كامل (سعر+توصيل+صور) ← تصديق عنوان وطلب ← تأكيد دفع ← موعد شحن محدد ← متابعة بعد الاستلام</b>. عشر رسائل أنجزت ما يعجز عنه هاتف مليء بالمكالمات — هذا هو متجرك الرقمي المصغر.</p>`,
variants:[
{kind:"formal",a:"فتح رسمي بمخاطبة Bu",i:"Selamat siang Bu Sarah, ada yang bisa kami bantu?"},
{kind:"casual",a:"فتح شبابي مرح",i:"Halo kak! Yuk, cek yang baru — dress birunya masih nungguin kakak nih!"}
]
});
