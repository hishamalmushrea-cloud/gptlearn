/* ===== المسار الأكاديمي العام (1): الضمائر والتعارف، أدوات الأسئلة، الأفعال الذهبية، الوقت، الصفات والمشاعر ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"intro", icon:"🙋", group:"academy", title:"الضمائر والتعريف بالنفس", sub:"أنا، أنت، هو/هي — ثم قدم نفسك كأنك من أهل البلد",
intro:`<p>خبر عظيم يبدأ به كل مسار: <b>لا جنس في الضمائر ولا في الأفعال</b> — «dia» الإندونيسية و«o» التركية تعني هو وهي معًا. ركّز طاقتك على الضمائر السبعة فقط ثم تعلّم «التقديم الذاتي» كما يقدمه أهل البلد فعلًا.</p>`,
tables:[{title:"🗣️ جدول الضمائر (احفظه عموديًا)", head:["العربية","🇮🇩","🇹🇷","ملاحظة"], rows:[
["أنا","saya (رسمي) / aku (عفوي)","ben","aku مع الأصدقاء فقط، saya آمنة دائمًا"],
["أنت","kamu / Anda (رسمي)","sen / siz (رسمي)","siz للغرباء والكبار — القاعدة الذهبية"],
["هو / هي","dia","o","لا فرق ذكر/أنثى إطلاقًا!"],
["نحن (معك)","kita","biz","نحن الشاملة"],
["نحن (بدونك)","kami","biz","التركية لا تفرق — biz للجميع"],
["أنتم / هم","mereka","onlar","siz أيضًا للجمع"]
], note:"الفرق kita/kami الإندونيسي فريد: kita = نحن وأنت معنا، kami = نحن بدونك. التركية تكتفي بـbiz لكل شيء."}],
phrases:[
{id:"int-01",a:"اسمي أحمد",i:"Nama saya Ahmad",it:"ناما سايا أحمد",t:"Benim adım Ahmed",tt:"بينيم آدیم أحمد",lv:2,p:1,w:"التعريف بنفسك أول مرة.",n:"«adım» = اسمي (ad + ملكية). بالإندونيسية nama saya = اسمي — سما ستسمعهما كل يوم."},
{id:"int-02",a:"تشرفت بمعرفتك",i:"Senang berkenalan",it:"سننݢ بركينالان",t:"Memnun oldum",tt:"ممنون أولديم",lv:2,p:1,w:"بعد أي تعارف جديد.",n:"«memnun oldum» حرفيًا: سُررتُ — من memnun (راضٍ، أصل عربي: ممنون!). الشرح: الجملة التركية تسبق أحيانًا بـ«Tanıştığımıza memnun oldum» (سُررت بتعارفنا) في الرسمي."},
{id:"int-03",a:"أنا من اليمن / من السعودية",i:"Saya dari Yaman / dari Arab Saudi",it:"سايا داري يامان",t:"Ben Yemenliyim / Suudi Arabistanlıyım",tt:"بين يمنلييم",lv:2,p:1,w:"سؤال سيسألونه لك دائمًا.",n:"التركية تبني الجنسية بلاحقة -li: Yemen+li. والإندونيسية تستعمل dari (من) — أبسط بناء ممكن."},
{id:"int-04",a:"أعيش في جاكرتا / إسطنبول",i:"Saya tinggal di Jakarta",it:"سايا تينݢال دي جاكرتا",t:"İstanbul'da yaşıyorum",tt:"إسطنبولدا ياشيوروم",lv:2,p:2,w:"متابعة التعريف.",n:"لاحقة المكان: الإندونيسية di قبل المكان، التركية -da/-de ملتصقة. «yaşıyorum» = أعيش (الآن)."},
{id:"int-05",a:"أنا أتعلم الإندونيسية/التركية",i:"Saya sedang belajar bahasa Indonesia",it:"سايا سيدانݢ بلاجر باهاسا إندونيسيا",t:"Türkçe öğreniyorum",tt:"توركچه أورينيوروم",lv:2,p:1,w:"أهم جملة تعريف للمتعلم — تفتح لك كل تسامح لاحق.",n:"هذه الجملة جواز مرورك: من يقولها يبطئ الناس له ويصححونه بفرح. belajar = يتعلم، öğreniyorum = أتعلم الآن."},
{id:"int-06",a:"أفهم قليلًا فقط — تحدث ببطء رجاءً",i:"Saya paham sedikit. Tolong pelan-pelan ya",it:"سايا پاهم سديكيت. تولوڠ پيلان-پيلان يا",t:"Az anlıyorum, lütfen yavaş konuşun",tt:"أز أنليوروم، لوتفين ياؤاش كونوشون",lv:2,p:1,w:"أول حوار مع أي شخص جديد.",n:"«yavaş yavaş» و«pelan-pelan» — نفس أسلوب التكرار التلطيفي في اللغتين."},
{id:"int-07",a:"عمري ثلاثون سنة",i:"Umur saya tiga puluh tahun",it:"أومور سايا تيݢا پولوه تاهون",t:"Otuz yaşımdayım",tt:"أوتوز ياشيمدايم",lv:3,p:3,w:"أسئلة التعارف المتبادلة.",n:"«umur» إندونيسية من العمر العربية! و«yaş» التركية = عمر. سؤالها: Berapa umur kamu? / Kaç yaşındasın?"},
{id:"int-08",a:"أتحدث العربية والإنجليزية",i:"Saya bisa bahasa Arab sama Inggris",it:"سايا بيسا باهاسا عرب ساما إنݢريس",t:"Arapça ve İngilizce biliyorum",tt:"أرابتشه ڤيه إنݢيليزجه بيليوروم",lv:3,p:3,w:"وصف لغاتك.",n:"«bisa» = يستطيع/يجيد، و«biliyorum» = أعرف (معلومات/لغات — بينما biliyorum تستخدم للغات لا konuşabiliyorum للكلام)."},
{id:"int-09",a:"أعمل في التجارة / عندي محل",i:"Saya dagang. Ada toko sedikit",it:"سايا داݢانݢ. ادا توكو سديكيت",t:"Ticaret yapıyorum, bir dükkânım var",tt:"تيجارت يابيوروم بير دوككانيم ڤار",lv:3,p:2,w:"تعريف مهني — سيكرره معك كل بائع وزبون.",n:"«dagang» = يتجر (كلمة سوق المليون!) و«dükkânım var» = عندي دكان — بناء var/yok الذهبي."},
{id:"int-10",a:"أنا متزوج / عندي ثلاثة أطفال",i:"Saya sudah menikah. Anak saya tiga",it:"سايا سوداه مينيكاه. أناك سايا تيݢا",t:"Evliyim, üç çocuğum var",tt:"إيڤليم أوتش تشوجوݢوم ڤار",lv:3,p:4,w:"تعارف أعمق — شائع في ثقافتي البلدين.",n:"«çocuğum var» = عندي أطفال — التركية تعبّر بالملك var، والإندونيسية بترتيب اسم+عدد بعده (anak saya tiga = أطفالي ثلاثة)."},
{id:"int-11",a:"من أين أنت؟ (اسأل أنت)",i:"Kakak dari mana?",it:"كاكاك داري مانا",t:"Nerelisiniz?",tt:"نيريليسينيز",lv:3,p:1,w:"سؤالك أنت عند التعارف.",n:"«nereli» = من أي بلد (نسبة) — سؤال الجنسية التركي الأشهر. والإندونيسية dari mana = من أين مباشرة."},
{id:"int-12",a:"هل أنت من هنا؟",i:"Kakak orang sini?",it:"كاكاك أورانݢ سيني",t:"Buranın mısınız?",tt:"بورانين ميسينيز",lv:3,p:3,w:"للتعرف على جنس محلك أو منطقتك.",n:"«orang sini» = شخص هنا — بناء إندونيسي يومي (orang = شخص). التركية: buranın = من هنا."}
]});

DB.chapters.push({
id:"questions", icon:"❓", group:"academy", title:"أدوات الأسئلة الذهبية", sub:"عشرة أدوات تسأل بها عن أي شيء في الحياة والسوق",
intro:`<p>في الإندونيسية: كلمة السؤال تحل محل الجواب داخل الجملة. وفي التركية: تتصدر الجملة أو تأتي «mi/mı/mu/mü» آخر أسئلة نعم/لا. أتقن الجدول ثم استخدم العبارات — بعدهما تسأل عن أي شيء في الدنيا.</p>`,
tables:[{title:"❓ جدول أدوات الاستفهام الكامل", head:["بالعربية","🇮🇩","🇹🇷","مثال سوقي 🇮🇩 / 🇹🇷"], rows:[
["ماذا؟","Apa?","Ne?","Mau apa? / Ne istersiniz?"],
["من؟","Siapa?","Kim?","Ini punya siapa? / Bu kimin?"],
["متى؟","Kapan?","Ne zaman?","Kapan datang? / Ne zaman gelir?"],
["أين؟ (ثابت)","Di mana?","Nerede?","Di mana kamar pas? / Nerede deneme kabini?"],
["إلى أين؟","Ke mana?","Nereye?","Ke mana? / Nereye gidiyorsunuz?"],
["من أين؟","Dari mana?","Nereden?","Dari mana? / Nereden geliyorsunuz?"],
["كم؟","Berapa?","Kaç?","Berapa harganya? / Kaç lira?"],
["لماذا؟","Kenapa? / Mengapa?","Neden? / Niye?","Kenapa mahal? / Neden pahalı?"],
["كيف؟","Bagaimana? (gimana عامية)","Nasıl?","Bagaimana caranya? / Nasıl yapılır?"],
["أيّها؟","Yang mana?","Hangisi?","Mau yang mana? / Hangisini istersiniz?"],
["هل...؟","(النبرة الصاعدة)","... mı/mi/mu/mü?","Cocok? / Uygun mu?"]
], note:"«gimana» و«kenapa» العامية الإندونيسية اليومية — استخدمهما في السوق، واحفظ bagaimana/mengapa للرسمي. وفي التركية تناغم الحروف يحدد شكل mi: بعد a/ı/u/o → mı، وبعد e/i/ü/ö → mi."}],
phrases:[
{id:"que-01",a:"ما هذا؟ / ماذا تريد؟",i:"Ini apa? / Mau apa?",it:"إيني أبا؟ / ماو أبا",t:"Bu ne? / Ne istersiniz?",tt:"بو نه؟ / نه إسترسينيز",lv:3,p:1,w:"أول سؤالين في أي مكان.",n:"لاحظ بساطة التركيب: الإندونيسية تحذف الفعل كثيرًا (Mau apa = تريد ماذا = ماذا تريد)."},
{id:"que-02",a:"لمن هذا؟ / لمن تعمل؟",i:"Ini punya siapa?",it:"إيني پونيا سيابا",t:"Bu kimin?",tt:"بو كيمين",lv:3,p:3,w:"الاستفسار عن الملكية.",n:"«punya» = يملك — كلمة الملكية الإندونيسية الأم. «kimin» = لمن (kim + ملكية)."},
{id:"que-03",a:"متى يفتح / متى يصل؟",i:"Buka kapan? / Sampai kapan?",it:"بوكا كاڤان؟ / سامپاي كاڤان",t:"Ne zaman açılır? / Ne zaman gelir?",tt:"نه زمان آتشيلير؟ / نه زمان كيلير",lv:3,p:2,w:"دوام المحلات والتوصيل.",n:"التركية بصيغة المبني للمجهول açılır (يُفتَح) — الأنسب للمحلات والدوام."},
{id:"que-04",a:"أين أجد ...؟ (أقرب ...)؟",i:"Di mana ada ...? / Di mana yang terdekat?",it:"دي مانا ادا؟ دي مانا ياڠ تيريديكات",t:"Nerede ... var? / En yakın ... nerede?",tt:"نيریده ڤار؟ / ين ياقين نيريدة",lv:3,p:2,w:"الضياع في مدينة جديدة.",n:"بناء var/yok التركي (يوجد/لا يوجد) + nerede = أين يوجد. بالإندونيسية di mana ada — نفس المنطق معكوس الترتيب."},
{id:"que-05",a:"كيف أفعل هذا؟ / كيف وصلت لهذا السعر؟",i:"Gimana caranya?",it:"كيمانا تارانيا",t:"Nasıl yapılıyor?",tt:"ناسيل يابيليور",lv:3,p:2,w:"طلب شرح الطريقة.",n:"«caranya» = طريقته (cara طريقة + nya) — أشهر صيغة سؤال شرح في إندونيسيا."},
{id:"que-06",a:"لماذا هذا السعر؟ / لماذا غدًا؟",i:"Kenapa harganya begini?",it:"كينابا هارݢانيا بيكيني",t:"Neden bu fiyat? / Niye yarın?",tt:"نيدن بو فيات؟ / نييه يارين",lv:3,p:3,w:"استيضاح بلطف — دبلوماسي.",n:"«niye» التركية أكثر عفوية من neden. نبرة الاستيضاف أهم من الأداة — ارفع نبرة السؤال وابتسم."},
{id:"que-07",a:"أيّهما أفضل؟ / أي واحد تريد؟",i:"Yang mana yang lebih bagus?",it:"ياڠ مانا ياڠ لبيه باݢوس",t:"Hangisi daha iyi?",tt:"هانݢيسي داها إيي",lv:3,p:2,w:"المقارنة والاختيار.",n:"«yang» الإندونيسية = «الذي» — أداة الربط الأولى. «daha» التركية = أكثر — أداة المقارنة الأولى."},
{id:"que-08",a:"هل يمكن...؟ هل ينفع...؟",i:"Bisa...?",it:"بيسا",t:"...olur mu?",tt:"أولور مو",lv:3,p:1,w:"طلب إمكان أي شيء بأدب.",n:"«Bisa?» كلمة واحدة تكفي بإندونيسيا! و«Olur mu؟» كلمة + mi تكفي بتركيا — أقصر طلب مهذب في اللغتين."},
{id:"que-09",a:"ما معنى هذه الكلمة؟",i:"Ini artinya apa?",it:"إيني أرتينيا أبا",t:"Bu kelime ne demek?",tt:"بو كيليمه نه ديمك",lv:3,p:2,w:"تعلّم اللغة باللغة — أهم عادة متعلم.",n:"«demek» = يعني — فعل المعنى التركي. اجعل هذا السؤال سلاحك اليومي: كل كلمة لا تفهمها اسأل عنها فورًا."},
{id:"que-10",a:"قلت ماذا؟ (لم أسمعك)",i:"Maaf, tadi bilang apa?",it:"ماؤف تادي بيلاڠ أبا",t:"Affedersiniz, ne dediniz?",tt:"أفيدرسينيز نه ديدينيز",lv:3,p:1,w:"حل جميع سوء السماع.",n:"«tadi» = قبل قليل — كلمة زمنية إندونيسية يومية. «ne dediniz» = ماذا قلتم (ماضي الرسمي)."}
]});

DB.chapters.push({
id:"verbs", icon:"⚡", group:"academy", title:"الأفعال الذهبية العشرون", sub:"20 فعلاً تبني بها 80% من كلام اليوم — وبناء الجملة في اللغتين",
intro:`<div class="callout tip"><b>🇮🇩 بناء الجملة الإندونيسية:</b> فاعل + فعل + مفعول — بلا تصريف إطلاقًا (الزمن بكلمة: sudah/akan/sedang).<br><b>🇹🇷 بناء الجملة التركية:</b> الفعل آخر الجملة، واللواحق تحمل الشخص: gel+iyor+um = geliyorum (أنا آتٍ الآن).</div>`,
tables:[
{title:"⚡ جدول الأفعال الذهبية", head:["بالعربية","🇮🇩","🇹🇷","مثال حي 🇮🇩"], rows:[
["يريد","mau","istemek","Mau lihat (أريد أن أرى)"],
["يستطيع","bisa","-abilmek / olur","Bisa kurang? (ينقص؟)"],
["يحب","suka","sevmek","Suka warna apa? (أي لون تحب؟)"],
["يملك/عنده","punya / ada","var (يوجد)","Ada ukuran L? (عندكم L؟)"],
["يأخذ/يشتري","ambil / beli","almak","Ambil dua (خذ اثنين)"],
["يعطي","kasih / beri","vermek","Kasih harga (أعطني سعرًا)"],
["يذهب","pergi","gitmek","Pergi ke mana? (إلى أين؟)"],
["يأتي/يصل","datang / sampai","gelmek","Barang sudah datang (البضاعة وصلت)"],
["يعمل","kerja / bikin","yapmak","Dibikin di sini? (يُصنع هنا؟)"],
["ينتظر","tunggu","beklemek","Tunggu sebentar (انتظر لحظة)"],
["يرى/يشاهد","lihat","bakmak/görmek","Coba lihat (انظر)"],
["يسمع/يفهم","dengar / paham","duymak / anlamak","Paham? (فهمت؟)"],
["يتكلم","bilang / bicara","söylemek/konuşmak","Jangan bilang begitu (لاقل هذا)"],
["يأكل / يشرب","makan / minum","yemek / içmek","Makan dulu (كُل أولًا)"],
["يدفع","bayar","ödemek","Bayar di kasir (ادفع بالكاشير)"],
["يفتح/يغلق","buka / tutup","açmak / kapatmak","Toko tutup jam berapa?"],
["يساعد","bantu","yardım etmek","Saya bantu (أساعدك)"],
["يستبدل","tukar","değiştirmek","Bisa tukar? (يتبدل؟)"],
["يحمل/يأخذ معه","bawa","götürmek/getirmek","Bawa ke mobil (خذه للسيارة)"],
["يعود/يرجع","balik / kembali","dönmek","Balik lagi ya (عد ثانية)"]
]},
{title:"🇹🇷 تصريف الفعل التركي في دقيقة (gelmek = يأتي)", head:["الضمير","الآن (geliyorum)","الماضي (geldim)","المستقبل (geleceğim)"], rows:[
["ben أنا","geliyorum","geldim","geleceğim"],
["sen أنت","geliyorsun","geldin","geleceksin"],
["o هو/هي","geliyor","geldi","gelecek"],
["biz نحن","geliyoruz","geldik","geleceğiz"],
["siz أنتم/رسمي","geliyorsunuz","geldiniz","geleceksiniz"],
["onlar هم","geliyorlar","geldiler","gelecekler"]
], note:"هذا الجدول الصغير يغطي 60% من أحاديث السوق التركية — احفظه كما تحفظ جدول الضرب. والنفي: gelmiyorum (لا آتي) / gelmedim (لم آت)."}
],
phrases:[
{id:"ver-01",a:"أريد أن أرى / أريد هذا",i:"Saya mau lihat dulu / Mau yang ini",it:"سايا ماو ليهات دولو",t:"Bakmak istiyorum / Bunu istiyorum",tt:"باكماق إستيوروم",lv:3,p:1,w:"التعبير عن الرغبة — أساس كل شيء.",n:"«istiyorum» = أريد (istemek + الآن) — الفعل الأول في تعلم التركية. بالإندونيسية mau = يريد، بدون تصريف أبدًا."},
{id:"ver-02",a:"عندكم...؟ / يوجد هنا...؟",i:"Ada ... nggak?",it:"ادا نݢاك",t:"... var mı?",tt:"ڤار مي",lv:3,p:1,w:"السؤال عن أي شيء في الوجود.",n:"ثنائية ada/nggak وvar/mı — أعلى تردد في أسواق البلدين. «yok» = لا يوجد: «Büyük beden yok» (لا يوجد مقاس كبير)."},
{id:"ver-03",a:"استطيع أن أدفع بالبطاقة؟",i:"Bisa bayar pakai kartu?",it:"بيسا باير پاكاي كارتو",t:"Kartla ödeyebilir miyim?",tt:"كارتله أوديابيلير ميين",lv:3,p:2,w:"كل عملية دفع.",n:"التركية «-ebilir miyim» = أستطيع...؟ (طلب إذن بالغ اللطف). الإندونيسية bisa تكفي دائمًا."},
{id:"ver-04",a:"ساعدني قليلًا / أساعدك؟",i:"Bantu sebentar ya / Mau saya bantu?",it:"بنتو سبنتار يا",t:"Yardımcı olayım mı?",tt:"يارديمجي أولايم مي",lv:3,p:2,w:"بناء التحالف اليومي.",n:"«olayım mı» = هل أكون...؟ — صيغة العرض التركية المهذبة. بالإندونيسية بنية «Mau saya + فعل؟» تعرض الخدمة بلطف."},
{id:"ver-05",a:"انتظر لحظة من فضلك",i:"Tunggu sebentar ya",it:"تونݢݢ سبنتار يا",t:"Bir dakika bekleyin lütfen",tt:"بير داقيقا بيكليين لوتفين",lv:2,p:1,w:"إشغال أي شخص بلطف.",n:"«ya» الختامية الإندونيسية تحوّل الأمر لتوسل ودي — سحر التلطف الواحد."},
{id:"ver-06",a:"خذ هذا معك / لا تنسَ حاجتك",i:"Bawa barangnya ya / Jangan lupa bawa",it:"باوا باراڠنيا يا",t:"Yanınızda götürün / Almayı unutmayın",tt:"يانينيزده كوتورون",lv:3,p:3,w:"تسليم أغراض.",n:"«götürmek» يأخذ معه، «getirmek» يجيء به — الثنائية التركية الشهيرة (أخذ للهناك/الإتيان لل هنا)."},
{id:"ver-07",a:"سأعود فورًا / رجعت",i:"Bentar ya, saya balik lagi",it:"بنتار يا سايا باليك لاݢي",t:"Hemen dönüyorum / Döndüm",tt:"هيمين دونويوروم",lv:3,p:2,w:"الانصراف المؤقت من المحل.",n:"«balik lagi» = يرجع ثانية — التعبير الإندونيسي المشرق المعتاد. جرب قولها لجار دكانك وسترى الابتسام."},
{id:"ver-08",a:"لا أفهم هذا / فهمت الآن!",i:"Saya nggak paham yang ini / Oh, paham sekarang!",it:"سايا نݢاك پاهم ياڠ إيني",t:"Bunu anlamıyorum / Anladım şimdi!",tt:"بونو أنلاميوروم",lv:3,p:2,w:"لحظات الفهم وسوء الفهم.",n:"«Anladım!» (فهمت!) — كلمة المتعلم التركي اليومية الأولى. صدّق بها تقدمك."},
{id:"ver-09",a:"كُل على مهلك / اشرب وأنت مرتاح",i:"Makan dulu, pelan-pelan",it:"ماكان دولو پيلان-پيلان",t:"Buyurun, afiyet olsun",tt:"بويورون آفيت أولسون",lv:3,p:3,w:"دعوة الطعام — ستسمعها كثيرًا.",n:"«afiyet olsun» = بالعافية — العبارة التركية المقدسة للطعام. اردد عليها «eline sağlık» (ليديك الصحة) عند مضيفك."},
{id:"ver-10",a:"افتح لي هذا من فضلك / أغلقه",i:"Bukain dong / Tutupin ya",it:"بوكاين دونݢ",t:"Şunu açar mısınız? / Kapatır mısınız?",tt:"شونو آتشار ميسينيز",lv:3,p:3,w:"طلب فتح علب وأكياس وعرض بضاعة.",n:"اللاحقة الإندونيسية -in/-kan (bukain/tutupin) = افعل لي — عامية الخدمة اليومية. التركية «-ar mısınız» صيغة الطلب المهذبة القياسية."}
]});

DB.chapters.push({
id:"time", icon:"⏰", group:"academy", title:"الوقت والأيام والتواريخ", sub:"الساعة، أيام الأسبوع، الأمس واليوم وغدًا — بكلمات اللغتين الحية",
tables:[
{title:"📅 أيام الأسبوع", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["الاثنين","Senin","Pazartesi"],
["الثلاثاء","Selasa","Salı"],
["الأربعاء","Rabu","Çarşamba"],
["الخميس","Kamis","Perşembe"],
["الجمعة","Jumat","Cuma"],
["السبت","Sabtu","Cumartesi"],
["الأحد","Minggu","Pazar"]
], note:"«Cuma» التركية من الجمعة العربية! والإندونيسية Jumat كذلك — تراث إسلامي مشترك حي. لاحظ أن أسبوع إندونيسيا يبدأ بالاثنين مثل العرب."},
{title:"⏰ الساعة والتوقيت", head:["الحالة","🇮🇩","🇹🇷"], rows:[
["كم الساعة؟","Jam berapa sekarang?","Saat kaç?"],
["الساعة الثالثة","Jam tiga (ساعة ثلاث)","Saat üç"],
["الثالثة والنصف","Jam setengah empat (نصف الرابعة!)","Üç buçuk"],
["الثالثة إلا ربع","Jam tiga kurang lima belas","Üçe çeyrek var"],
["صباحًا/ظهرًا/ليلًا","pagi / siang / malam","sabah / öğlen / akşam"],
["الآن / لاحقًا","sekarang / nanti","şimdi / sonra"],
["اليوم/غدًا/أمس","hari ini / besok / kemarin","bugün / yarın / dün"],
["بعد غد / أول أمس","lusa / kemarin lusa","öbür gün / evvelsi gün"],
["كل يوم / أسبوعيًا","setiap hari / mingguan","her gün / haftalık"],
["مباشرة/فورًا","langsung","hemen / direkt"]
], note:"⚠️ انتبه لمنطق «النصف» الإندونيسي: 3:30 تُقال «نصف الرابعة» مثل بعض اللهجات العربية القديمة — jam setengah empat! والتركية منطقية: üç buçuk."}],
phrases:[
{id:"tim-01",a:"كم الساعة الآن؟",i:"Jam berapa sekarang?",it:"جام براپا سيكارانݢ",t:"Saat kaç?",tt:"ساعات كاتش",lv:3,p:1,w:"أكثر سؤال زمني في اليوم.",n:"«kaç» = كم — نفس أداة الأرقام. بالإندونيسية jam = ساعة/ساعة زمنية."},
{id:"tim-02",a:"المحل يفتح الثامنة ويغلق العاشرة",i:"Toko buka jam delapan, tutup jam sepuluh malam",it:"توكو بوكا جام ديلابان",t:"Dükkân sekizde açılıyor, onda kapanıyor",tt:"دوككان سيكيزده آتشيليور",lv:3,p:2,w:"إعلام الزبائن بالدوام.",n:"التركية «-de» = في (الساعة): sekiz**de** = في الثامنة. لافتة الدوام: AÇIK (مفتوح) / KAPALI (مغلق)."},
{id:"tim-03",a:"الشحنة تصل غدًا مساءً",i:"Kirimannya besok malam sampai",it:"كيريمانيا بيسوك مالام سامپاي",t:"Kargo yarın akşam gelir",tt:"كارݢو يارين آقشام كيلير",lv:3,p:2,w:"مواعيد التسليم.",n:"ترتيب الإندونيسية هنا حر — المهم الكلمات. التركية تضع الفعل آخرًا دائمًا: yarın akşam gelir."},
{id:"tim-04",a:"اليوم جمعة — المحل مغلق وقت الصلاة",i:"Hari ini Jumat, toko tutup sekitar jam dua belas",it:"هاري إيني جومعة",t:"Bugün cuma, öğlen kapalıyız",tt:"بوكون قوما",lv:3,p:3,w:"إدارة إيقاع الجمعة الديني.",n:"في إندونيسيا وتركيا معًا: الجمعة تخف حركة الأسواق وقت الصلاة — أعلنها لزبائنك بوضوح وكسب ثقتهم."},
{id:"tim-05",a:"بعد ساعة أكون عندك",i:"Satu jam lagi saya kesana",it:"ساتو جام لاݢي سايا كسانا",t:"Bir saat sonra gelirim",tt:"بير ساعات سونرا كيليريم",lv:3,p:2,w:"مواعيد اللقاءات والتوصيل.",n:"«lagi» = بعد/إضافي — كلمة «بعد» السوقية. «sonra» التركية = بعد — أنقى كلمة زمن سوقية."},
{id:"tim-06",a:"كم يومًا يستغرق؟",i:"Berapa lama? / Butuh berapa hari?",it:"براپا لاما",t:"Kaç gün sürüyor?",tt:"كاتش كون سوريور",lv:3,p:2,w:"مهل الطلبات والخدمات.",n:"«sürmek» = يستغرق/يمتد — فعل المدد الزمنية التركي الأول. بالإندونيسية berapa lama = كم المدة."},
{id:"tim-07",a:"عطلة الأسبوع القادم نستلم جديدًا",i:"Minggu depan kami libur / masuk barang baru",it:"مينݢو ديبان كامي ليبور",t:"Gelecek hafta izinliyiz / yeni mal geliyor",tt:"كيليجك هافتا ييزينلييز",lv:3,p:3,w:"تنسيق العطلات.",n:"«libur» إندونيسية من الهولندية، و«izin» التركية من الإذن العربية! — كلمتا العطلة في البلدين من عروق حضارية متصلة."},
{id:"tim-08",a:"في أقرب وقت / فورًا إن أمكن",i:"Secepatnya ya / Semampunya",it:"ستشياتنيا يا",t:"En kısa zamanda / hemen mümkünse",tt:"ين قصا زاماندا",lv:2,p:3,w:"طلبات الاستعجال المهذبة.",n:"«secepatnya» = بأسرع ما يمكن (se- + cepat + -nya) — بناء التفصيل الإندونيسي الأنيق."}
]});

DB.chapters.push({
id:"feelings", icon:"😊", group:"academy", title:"الصفات والمشاعر والمقارنة", sub:"كيف تصف الأشياء وتعبر عن حالتك — وتقارن بين خيارين",
tables:[{title:"🎭 صفات ومشاعر الحياة اليومية", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["كبير / صغير","besar / kecil","büyük / küçük"],
["جيد / سيء","bagus / jelek","iyi / kötü"],
["جديد / قديم","baru / lama","yeni / eski"],
["جميل / قبيح","cantik (للنساء) / jelek","güzel / çirkin"],
["سعيد / حزين","senang / sedih","mutlu / üzgün"],
["غاضب","marah","kızgın / sinirli"],
["تعبان / مريض","capek / sakit","yorgun / hasta"],
["جائع / عطشان","lapar / haus","aç / susamış"],
["ساخن/حار / بارد","panas / dingin","sıcak / soğuk"],
["لذيذ (طعام)","enak","lezzetli"],
["ثقيل / خفيف","berat / ringan","ağır / hafif"],
["نظيف / وسخ","bersih / kotor","temiz / kirli"],
["سريع / بطيء","cepat / lambat","hızlı / yavaş"],
["سهل / صعب","gampang / susah","kolay / zor"],
["ممتاز / عادي","mantap / biasa aja","harika / normal"],
["كافٍ / غير كافٍ","cukup / kurang","yeterli / az"]
], note:"«enak» الإندونيسية تعني لذيذ ومريح وممتع معًا — كلمة متعة شاملة. و«mantap» العامية = متين/ممتاز — أعلى مدح سوقي."}],
phrases:[
{id:"fee-01",a:"كيف حالك؟ / بخير الحمد لله",i:"Apa kabar? / Baik, alhamdulillah",it:"أبا كابر؟ / باءيك الحمدلله",t:"Nasılsınız? / İyiyim, elhamdülillah",tt:"ناسيلسينيز؟ / إييم الحمدولله",lv:2,p:1,w:"التحية الثانية بعد السلام — يومية إلزامية.",n:"«elhamdülillah» التركية من الحمد لله العربية — استعملها ستدمج فورًا. الرد الإندونيسي الدافئ: «Baik-baik aja» (تمام تمام)."},
{id:"fee-02",a:"أنا تعبان اليوم / متعب جدًا",i:"Hari ini saya capek sekali",it:"هاري إيني سايا تشابيك سيكالي",t:"Bugün çok yorgunum",tt:"بوكون تشوك يوركونوم",lv:3,p:2,w:"حالتك مع الجيران والزبائن الدائمين.",n:"«yorgunum» = أنا متعب (yorgun + um) — اللاحقة تحمل أنا. بالإندونيسية capek من العمل، sakit للمرض — فرق دقيق."},
{id:"fee-03",a:"الحمد لله على السلامة! (للمتعافي/العائد)",i:"Syukur sudah sembuh!",it:"شكور سوداه سمبوه",t:"Geçmiş olsun!",tt:"كيتميش أولسون",lv:3,p:2,w:"من مرض أو مصيبة — مجاملة واجبة.",n:"«Geçmiş olsun» = ليكن قد مضى — أعظم عبارة مواساة تركية، تقال للمريض وحتى لمن تعطلت سيارته!"},
{id:"fee-04",a:"هذا أجمل من ذاك / الأفضل على الإطلاق",i:"Ini lebih cantik dari yang itu / Yang paling bagus ini",it:"إيني لبيه تشانتيك",t:"Bu ondan daha güzel / En güzeli bu",tt:"بو أوندان داها كوزيل",lv:3,p:2,w:"المقارنة — لب البيع والاختيار.",n:"ثنائية lebih/paling الإندونيسية وdaha/en التركية — أربع كلمات تفتح لك كل المقارنات في اللغتين."},
{id:"fee-05",a:"لا بأس، خذها ببساطة",i:"Santai aja, kak",it:"سانتاي أجا كاك",t:"Sakin ol, sorun yok",tt:"ساكين أول سورون يوك",lv:3,p:2,w:"تهدئة أي توتر أو استعجال.",n:"«santai» = مرتاح/بارد — روح إندونيسيا في كلمة. «sakin ol» = اهدأ — التهدئة التركية القياسية."},
{id:"fee-06",a:"أنا سعيد بخدمتك / خدمتك تشرّف",i:"Senang bisa bantu kakak",it:"سننݢ بيسا بنتو كاكاك",t:"Size hizmet etmek mutluluk",tt:"سيزه خدمات إتميك موتلولوق",lv:3,p:3,w:"ختام معاملة جميلة.",n:"البائع الذي يقولها مخلصًا يبني ولاءً — ترسل بالرسائل أيضًا كإغلاق راقٍ."},
{id:"fee-07",a:"أنا مشغول الآن — لحظة واحدة",i:"Saya lagi sibuk, bentar ya",it:"سايا لاݢي سيبوك بنتار يا",t:"Şu an meşgulüm, bir saniye",tt:"شو آن مشكولوم بير سانييه",lv:3,p:2,w:"إدارة الازدحام بلطف.",n:"«lagi/lagi» الإندونيسية = الآن (حال مستمر) — «lagi sibuk» = مشغول الآن. «meşgulüm» = أنا مشغول (من المشغول العربية!)."},
{id:"fee-08",a:"الله يعطيك العافية / على بركة الله",i:"Semoga lancar ya!",it:"سمواݢا لانتشار يا",t:"Kolay gelsin! / Hayırlısı olsun",tt:"قولاى كيلسين",lv:3,p:2,w:"دعوات العمل اليومية.",n:"«Kolay gelsin» لمن يعمل و«hayırlısı olsun» = ليكن ذا خير — دعوتان تركيتان تصنعان ودًا فوريًا. والإندونيسية «Semoga lancar» = ليكن سلسًا."},
{id:"fee-09",a:"الحمد لله، الأمور بخير",i:"Alhamdulillah, lancar-lancar aja",it:"الحمدلله لانتشار-لانتشار أجا",t:"İyiyiz, elhamdülillah",tt:"إيييز الحمدولله",lv:3,p:3,w:"جواب «كيف الأعمال؟».",n:"«lancar» = سائل/سلس — وصف الأعمال الجارية بلا عوائق — كلمة سوق إندونيسية محبوبة جدًا."},
{id:"fee-10",a:"لا تقلق / لا تستعجل على نفسك",i:"Jangan khawatir, pelan-pelan",it:"جانڠ خاواتير پيلان-پيلان",t:"Merak etme, acele etme",tt:"مراك إتمه أجهله إتمه",lv:3,p:2,w:"طمأنة زبون أو صديق قلق.",n:"«khawatir» إندونيسية أصلها من القلق العربية عبر الجاوية! التراث العربي حي في كلمات اللغتين أكثر مما تتخيل."}
]});
