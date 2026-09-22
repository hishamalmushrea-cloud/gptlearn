/* ===== مكتبة الحياة (4): العمل والمهن، التسوق التفصيلي، الأرقام والمقاييس، الطوارئ ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"life-work", icon:"💼", group:"academy", title:"العمل والمهن — المكتبة الكاملة", sub:"مهن، دوام، راتب، إجازات، زملاء، وأخلاقيات مكان العمل",
phrases:[
{id:"wrk-01",a:"ما مهنتك؟ / أنا تاجر/نجار/مبرمج",i:"Kerjanya apa? Saya dagang / tukang kayu / programmer",it:"كيرچهنيا أبا سايا داݢانݢ توكانݢ قايو",t:"Mesleğin ne? Ben tüccar / marangoz / yazılımcıyım",tt:"مسليغين نه بين توتشار مرانݢوز يازيليمجيليم",lv:3,p:1,w:"تعارف مهني.",n:"«meslek/tukang» — مهن البلدين محترمة باليد: النجارة والخياطة لغة ذهبية."},
{id:"wrk-02",a:"أعمل لحسابي / موظف عند غيري",i:"Saya usaha sendiri / karyawan",it:"سايا أوسها سنديري قاريان",t:"Kendi işimin patronuyum / çalışanıyım",tt:"كيندي إيشيمين پاترونوم تشالاشانييم",lv:3,p:2,w:"وصف وضعك المهني."},
{id:"wrk-03",a:"الدوام من التاسعة للخامسة",i:"Jam kerja dari jam sembilan sampai lima",it:"جام كيرجا داري جام سيمبيلان سامپاي ليما",t:"Mesai dokuzdan beşe",tt:"ميساي دوكوزدن بشه",lv:2,p:2,w:"سؤال ودوام.",n:"«mesai» الميعاد العربية! — كلمة الدوام التركية الوطنية؛ الإندونيسية jam kerja."},
{id:"wrk-04",a:"ساعات إضافية الليلة — بأجر مضاعف؟",i:"Lembur malam ini, upahnya dobel?",it:"لمبور مالام إيني أوڤهنياه دوبل",t:"Bu akşam fazla mesai, ücret nasıl?",tt:"بو آقشام فازلا ميساي أوجريت ناسيل",lv:3,p:3,w:"عرض عمل إضافي.",n:"«lembur/fazla mesai» = إضافي — ثقافة العمل الإضافي حية بالبلدين؛ اسأل عن الأجر دائمًا."},
{id:"wrk-05",a:"راتبي الشهري / أسبوعي / بالمقطوع",i:"Gaji bulanan / mingguan / borongan",it:"ݢاجي بولنان مينݢوانن بورونݢن",t:"Maaşım aylık / haftalık / yevmiye",tt:"ماشيم آيليق هافتاليق ييڤميه",lv:3,p:2,w:"أنماط الأجر."},
{id:"wrk-06",a:"أريد إجازة يومين — أمر عائلي",i:"Mau cuti dua hari, urusan keluarga",it:"ماو توتي دوا هاري أوروسن كيلوارݢا",t:"İki gün izin istiyorum, ailevi durum",tt:"إيكي كون إيزين إستيوروم آيليڤي دوروم",lv:2,p:2,w:"طلب إجازة."},
{id:"wrk-07",a:"متى يُصرف الراتب؟ تأخر هذا الشهر",i:"Gajian tanggal berapa? Bulan ini telat",it:"ݢاجيان تانݢݢال براپا بولن إيني تيلات",t:"Maaş ne zaman yatar? Bu ay gecikti",tt:"ماش نه زمان ياتار بو آي كيكيلدي",lv:3,p:2,w:"أهم تاريخ بالشهر!"},
{id:"wrk-08",a:"عمولة على المبيعات كم؟",i:"Komisi dari penjualan berapa persen?",it:"كوميسي داري بينجولن براپا ڤيرسين",t:"Satıştan komisyon yüzde kaç?",tt:"ساتيشتان كوميسيون يوزده قاتش",lv:2,p:2,w:"وظائف البيع."},
{id:"wrk-09",a:"عندي خبرة ثلاث سنوات بالمجال",i:"Pengalaman tiga tahun di bidang ini",it:"پينݢالمان تيݢا تاهون دي بيدانݢ إيني",t:"Bu alanda üç yıllık tecrübem var",tt:"بو آلانده أوتش ييليق تجروبيم ڤار",lv:3,p:2,w:"مقابلات عمل."},
{id:"wrk-10",a:"أبحث عن عمل جزئي مسائيًا",i:"Cari kerja part-time malam",it:"تشاري كيرچا پارت-تايم مالام",t:"Akşam yarım gün iş arıyorum",tt:"آقشام ياريم كون إيش آريوروم",lv:3,p:2,w:"عمل إضافي."},
{id:"wrk-11",a:"المدير بالجرد الآن — عدّ المخزون",i:"Boss lagi stock opname, hitung gudang",it:"بوس لاݢي ستوق أوڤنيمه هيتوڠ ݢودانݢ",t:"Patron sayımda, depo sayılıyor",tt:"پاترون صايمده ديڤو صاييليور",lv:4,p:4,w:"نهاية الشهر التجاري."},
{id:"wrk-12",a:"اجتماع الفريق الساعة الحادية عشرة",i:"Rapat tim jam sebelas",it:"راڤات تيم جام سبلس",t:"Toplantı on birda",tt:"تولانتي أون بيرده",lv:2,p:3,w:"حياة مكتبية."},
{id:"wrk-13",a:"أرسله على بريدي الرسمي رجاءً",i:"Kirim ke email kantor saya ya",it:"كيريم كه إيميل كنتور سايا يا",t:"İş mailime atın lütfen",tt:"إيش مايليمه آتين لوتفين",lv:2,p:3,w:"تواصل رسمي."},
{id:"wrk-14",a:"عقد العمل: فترة تجريبية شهرين",i:"Kontrak kerja: masa percobaan dua bulan",it:"كونترق كيرچا ماسا ڤيرتشوباءن دوا بولن",t:"İş sözleşmesi: iki ay deneme süresi",tt:"إيش سوزليشميسي إيكي آي دينيمه سوريسي",lv:2,p:3,w:"توقيع عقد."},
{id:"wrk-15",a:"استقلت/طُرحت — أبحث عن جدید",i:"Saya resign / ter-PHK, cari kerja lagi",it:"سايا ريسيݢن تير-ڤيه-ها-كه تشاري كيرچا لاݢي",t:"İstifa ettim / çıkarıldım, yeniden bakıyorum",tt:"إيستيفا إتيم تشيقريلديم يينيدن باكيوروم",lv:3,p:3,w:"تغير وظيفي.",n:"«PHK» (pemutusan hubungan kerja) الطرد الإندونيسي الرسمي؛ التركية «çıkarıldım»."},
{id:"wrk-16",a:"بيئة عمل ممتازة وزملاء أعزاء",i:"Suasana kerjanya enak, rekan-rekan asik",it:"سوأسنا كيرچنيا إيناك ريكان-ريكان أسق",t:"Çalışma ortamı süper, ekip harika",tt:"تشالاشما أورطامي سوبر إيكيب هاريكة",lv:3,p:3,w:"وصف عملك."},
{id:"wrk-17",a:"ترقية هذا العام؟ أستحقها",i:"Tahun ini naik jabatan? Saya berharap",it:"تاهون إيني نايك چاباتن سايا برهارپ",t:"Bu sene terfi var mı acaba?",tt:"بو سينه تيرفي ڤار مي أچابا",lv:3,p:3,w:"طموح مهني."},
{id:"wrk-18",a:"سلامة العمل أولًا — خوذة وقفازات",i:"K3 dulu: helm sama sarung tangan",it:"كاه-كيليه دولو هيلم ساما ساروڠ تانݢن",t:"İş güvenliği önce: baret ve eldiven",tt:"إيش كوفينليكي أونجه باريه ڤيه إليديڤين",lv:3,p:4,w:"مواقع الإنتاج."},
{id:"wrk-19",a:"أشتكي من زميل متعالٍ — بحكمة",i:"Ada rekan yang sombong, gimana hadapi?",it:"ادا ريكان ياڠ سومبونݢ كيمانا هاداپي",t:"Kibirli bir iş arkadaşı var, nasıl davranayım?",tt:"كيبيلي بير إيش أركاداشي ڤار ناسيل دافراناييم",lv:4,p:4,w:"حكمة مهنية."},
{id:"wrk-20",a:"تدريب للموظفين الجدد متى؟",i:"Pelatihan karyawan baru kapan?",it:"بيلاتيهن قاريان بارو قاڤان",t:"Yeni personel eğitimi ne zaman?",tt:"ييني بيرسونيل إييتيمي نه زمان",lv:3,p:3,w:"دمج وظيفي."},
{id:"wrk-21",a:"أعمل عن بُعد يومين أسبوعيًا",i:"WFH dua hari seminggu",it:"دبليو-إف-إيتش دوا هاري سيمينݢو",t:"Haftada iki gün uzaktan çalışıyorum",tt:"هافتاده إيكي كون أوزاقتان تشالاشيوروم",lv:3,p:3,w:"العمل الحديث.",n:"«WFH» (work from home) دخلت الإندونيسية اليومية كما هي!"},
{id:"wrk-22",a:"مديري يقدّر اجتهادي — الحمد لله",i:"Atasan saya menghargai kerja keras",it:"أتسن سايا منݢهارݢاي كيرچا قاراس",t:"Patronum emeğimi taklit ediyor — takdir ediyor",tt:"پاترونوم إيمييمي تقدير إيديور",lv:3,p:3,w:"رضا وظيفي."},
{id:"wrk-23",a:"صاحب العمل صادق في تعاملاته",i:"Pemilik usahanya jujur",it:"بيميليك أوسهنياه جوجور",t:"İşveren dürüst bir adam",tt:"إيشڤيرين دوروست بير آدم",lv:3,p:3,w:"تقييم أصحاب العمل."},
{id:"wrk-24",a:"توازن العمل والحياة أهم من الراتب",i:"Work-life balance lebih penting dari gaji besar",it:"ورك-لايف بالانس لبيه بنتينݢ داري ݢاجي بيسار",t:"İş-yaşam dengesi maaştan önemli",tt:"إيش-ياشام دنكيسي ماشتان أهم",lv:4,p:4,w:"فلسفة مهنية."}
]});

DB.chapters.push({
id:"life-shop2", icon:"🛍️", group:"academy", title:"التسوق التفصيلي — ملابس وأقمشة وأحجام", sub:"قياسات، خامات، تفصيل، خياط، وإرجاع الملابس",
phrases:[
{id:"shp-01",a:"أريد قميصًا قطنيًا 100%",i:"Mau kemeja katun persen seratus",it:"ماو كيميجا قاتون ڤيرسين سراتوس",t:"Yüzde yüz pamuk gömlek istiyorum",tt:"يوزده يوز پاموق كومليك إستيوروم",lv:3,p:2,w:"خامة الجودة."},
{id:"shp-02",a:"مقاسي: قياسي 42 — أو مقاس حر",i:"Ukuran saya empat puluh dua",it:"أوكوران سايا إمڤات پولوه دوا",t:"Bedenim kırk iki",tt:"بيدنيم قيرق إيكي",lv:3,p:1,w:"مقاسك الجاهز."},
{id:"shp-03",a:"الخياط: فصّل لي مثل هذا",i:"Tukang jahit: bikin seperti ini ya",it:"توكانݢ چاهيت بيكين سڤرتي إيني يا",t:"Terzi: bunun aynısını diker misiniz?",tt:"ترزي بونون آينيسيني ديكر ميسينيز",lv:3,p:3,w:"تفصيل خاص.",n:"«terzi/tukang jahit» الخياط — ثقافة التفصيل حية بتركيا أكثر؛ بندرة التجهيز بإندونيسيا."},
{id:"shp-04",a:"أقصر سنتيمترين من هنا",i:"Dipendekkan dua senti dari sini",it:"ديبندككان دوا سينتي داري سيني",t:"Burdan iki santim kısaltın",tt:"بوردن إيكي صانتيم قيصلتين",lv:3,p:3,w:"تعديلات الخياط."},
{id:"shp-05",a:"اللون ثابت أم يبهت بالغسل؟",i:"Warnanya luntur nggak waktu dicuci?",it:"وارنانيا لونتور نݢاك واكتو ديتشوتشي",t:"Renk yıkamada akar mı?",tt:"رينك ياقاماده آقار مي",lv:3,p:2,w:"شراء قماش.",n:"«luntur/akar» = يبهت/يسيل اللون — سؤال الجودة الأم قبل الشراء."},
{id:"shp-06",a:"شرّاك الشغل معيب — استبدله",i:"Resletingnya cacat, tukar yang baru",it:"ريزليتينيا تشاتشات توكار ياڠ بارو",t:"Fermuar hatalı, yenisini verin",tt:"فرموار هاتالي يينيسيني فييرين",lv:3,p:3,w:"عيب خفي."},
{id:"shp-07",a:"جربته أمس — لا يليق، أرجعه",i:"Kemarin saya coba, kurang cocok, mau tukar",it:"كيمارين سايا تشوبا كوراڠ تشوتشوق ماو توكار",t:"Dün denedim, yakışmadı, değişmek istiyorum",tt:"دون دينيديم ياقيشمادي ديكيلشمك إستيوروم",lv:3,p:2,w:"إرجاع بذوق."},
{id:"shp-08",a:"الخصم على قطعتين فقط أم الكل؟",i:"Diskutnya cuma dua item atau semua?",it:"ديسكوتنيا تيوما دوا آيتم أتاو سموا",t:"İndirim sadece ikili mi, hepsi mi?",tt:"إنديريم صادجه إيكيلي مي هيبسي مي",lv:3,p:2,w:"فهم العروض."},
{id:"shp-09",a:"عليه علامة ماركة أصلية؟",i:"Ini merek ori atau KW?",it:"إيني ميريك أوري أتاو ك-و",t:"Bu orijinal marka mı, taklit mi?",tt:"بو أويريجينال مارقه مي تقليت مي",lv:3,p:3,w:"فحص الأصالة.",n:"«KW» (kualitas wall...KW super) درجات التقليد الإندونيسية الشهيرة — ثقافة أسواق محددة الإفصاح!"},
{id:"shp-10",a:"احتفظ به لي عند وصول الجديد",i:"Simpan dulu ya, kalau yang baru datang saya ambil",it:"سيمڤان دولو يا كالاو ياڠ بارو داتنݢ سايا أمبول",t:"Yenisi gelince alırım, şimdilik ayırın",tt:"يينيسي كيلينجه آليريم شيمديليك آيرين",lv:3,p:3,w:"انتظار تشغيلة جديدة."},
{id:"shp-11",a:"هذا ضيق قليلًا — الأوسع موجود؟",i:"Ini agak sempit, ada yang lebih longgar?",it:"إيني أݢاق سيمڤيت ادا ياڠ لبيه لونݢݢار",t:"Bu biraz dar, bolu var mı?",tt:"بو بيراز دار بولو ڤار مي",lv:3,p:2,w:"ملابس راحة."},
{id:"shp-12",a:"احكم لي الحزام درجة",i:"Ikat pinggangnya longgar, dikencangkan",it:"إيقات ڤينݢقانݢنيا لونݢار ديكينتشانݢكان",t:"Kemer gevşek, sıkın lütfen",tt:"كيمر كوفشيك سيقين لوتفين",lv:3,p:4,w:"تعديل مقاسات."},
{id:"shp-13",a:"نصف مقاس أصغر متوفر؟",i:"Ada setengah ukuran lebih kecil?",it:"ادا ستنݢاه أوكوران لبيه كيتشيل",t:"Yarım beden küçüğü var mı?",tt:"ياريم بيدن كوتشوݢو ڤار مي",lv:3,p:3,w:"مقاسات دقيقة."},
{id:"shp-14",a:"التغليف كهدية مع بطاقة صغيرة",i:"Dibungkus kado, tambah kartu kecil ya",it:"ديبونݢوس قادو تامبه قارتو كيتشيل يا",t:"Hediye paketi ve küçük kart olsun",tt:"هيدييه پاكيتي ڤيه كوتشوك قارت أولسون",lv:3,p:2,w:"شراء هدية."},
{id:"shp-15",a:"أريد لونًا آخر غير المعروض",i:"Mau warna lain yang nggak dipajang",it:"ماو وارنا لاين ياڠ نݢاك ديبانڠ",t:"Serilenin dışında renk var mı?",tt:"سيريلينين طيشينده رينك ڤار مي",lv:3,p:3,w:"طلب مخفيون بالمخزن."},
{id:"shp-16",a:"الحذاء جلد طبيعي؟ رائحته تفيد",i:"Sepatunya kulit asli? Baunya kelihatan",it:"سيباتونيا كوليت أسلي باونيا كيليهات",t:"Ayakkabı gerçek deri mi? Kokusundan belli",tt:"آياقابي كيرك ديري مي قوكسوندان بيلي",lv:4,p:4,w:"فحص خبرة."},
{id:"shp-17",a:"الحلق/الساعة عليه ضمان استبدال؟",i:"Liontin / jam-nya ada garansi tukar?",it:"ليونتين جامنيا ادا چارانسي توكار",t:"Kolye/saat değişim garantisi var mı?",tt:"قوليه صاعت ديكيلشيم كارانتيسي ڤار مي",lv:3,p:3,w:"إكسسوارات ثمينة."},
{id:"shp-18",a:"كيس الإرجاع والفيشت محفوظان",i:"Kantong sama struknya saya simpan",it:"كانتوڠ ساما ستروكنيا سايا سيمڤان",t:"Poşet ve fiş duruyor elimde",tt:"پوشيت ڤيه فيش دوريور إليمد",lv:3,p:2,w:"شروط الإرجاع."},
{id:"shp-19",a:"الطول المناسب هكذا — علّم عليه",i:"Panjangnya segini aja, tandain ya",it:"بانجنيا سيݢيني أجا تانداين يا",t:"Boy bu kalsın, işaretleyin",tt:"بوي بو قالسين إيشاريتليين",lv:3,p:3,w:"تدخل الخياط."},
{id:"shp-20",a:"مبيعات نهاية الموسم — أخير خصم 70%",i:"Warehouse sale, diskon sampai tujuh puluh persen",it:"وارهاوس ساليه ديسكون سامپاي توجوه پولوه ڤيرسين",t:"Sezon sonu, yüzde yetmişe kadar indirim",tt:"سيزون سونو يوزده ييتميشه قادار إنديريم",lv:3,p:2,w:"تصفيات كبرى."},
{id:"shp-21",a:"أقساط عبر البطاقة بلا زيادة؟",i:"Cicilan kartu tanpa bunga ya?",it:"تشيتشيلان قارتو تانڤا بونݢا يا",t:"Karta taksit faizsiz mi?",tt:"قارته تقسيت فايزسيز مي",lv:3,p:2,w:"دفع مؤجل ذكي."},
{id:"shp-22",a:"لون فاتح يتسخ بسرعة — أنصحني",i:"Warna putih gampang kotor, saran apa?",it:"وارنا ڤوتيه ݢامڤانݢ قوتور ساران أبا",t:"Açıktır, çabuk kirlenir, öneriniz?",tt:"آتشيقدير تشابوق قيريلينير أونرينيز",lv:3,p:3,w:"استشارة بائع ثقة."},
{id:"shp-23",a:"قطعة عرض آخر لا تُرد",i:"Barang display, nggak bisa ditukar",it:"باراڠ ديسپلاي نݢاك بيسا ديتوكار",t:"Vitrin ürünü, değişimi yok",tt:"ڤيترين أورونو ديكيليشيمي يوك",lv:4,p:3,w:"قواعد المخفض جدًا.",n:"«display/vitrin» قطعة العرض — قانون عالمي: أرخص بشرط بلا إرجاع، والإفصاح واجب."},
{id:"shp-24",a:"اشتريت كثيرًا — خصم كمّية شامل؟",i:"Saya ambil banyak, diskon grosir bisa?",it:"سايا أمبول بنياك ديسكون ݢروسير بيسا",t:"Çok aldım, toplu indirim olur mu?",tt:"تشوك آلديم توپلو إنديريم أولور مو",lv:3,p:2,w:"سلة كبيرة."}
]});

DB.chapters.push({
id:"life-quant", icon:"📐", group:"academy", title:"الأرقام والمقاييس المتقدمة", sub:"أوزان، مساحات، أحجام، نسب، وخصومات مئوية — لغة الكم",
phrases:[
{id:"qnt-01",a:"نصف كيلو / كيلو / كيلوان",i:"Setengah kilo / satu kilo / dua kilo",it:"ستنݢاه كيلو ساتو كيلو دوا كيلو",t:"Yarım kilo / bir kilo / iki kilo",tt:"ياريم كيلو بير كيلو إيكي كيلو",lv:2,p:1,w:"شراء موزون."},
{id:"qnt-02",a:"مئة غرام / رطل (250غ)",i:"Seratus gram / sekwartal",it:"سراتوس ݢرام سيقوارتال",t:"Yüz gram / çeyrek",tt:"يوز ݢرام تشييريك",lv:3,p:3,w:"كميات صغيرة.",n:"«çeyrek» = ربع (كيلو) — وحدة البقالة التركية؛ الإندونيسية «kwartal» من الهولندية."},
{id:"qnt-03",a:"أعطني المزيد قليلًا — فوق الوزن",i:"Tambah dikit lagi, lebih pasaran",it:"تامبه ديكيت لاݢي لبيه باسارن",t:"Biraz üstü tartın lütfen",tt:"بيراز أوستو تارتين لوتفين",lv:4,p:4,w:"إكرامية البائع بالوزن."},
{id:"qnt-04",a:"متر / متران من هذا القماش",i:"Satu meter / dua meter kain ini",it:"ساتو ميتر دوا ميتر قاين إيني",t:"Bir metre / iki metre bu kumaştan",tt:"بير ميتري إيكي ميتري بو قوماشتان",lv:2,p:2,w:"شراء أقمشة."},
{id:"qnt-05",a:"متر مربع كم إيجار المحل؟",i:"Sewa per meter persegi berapa?",it:"سوا بر ميتر ڤيرسيݢي براپا",t:"Metrekaresi kaç lira kira?",tt:"ميتري قاريسي قاتش ليرا قيرا",lv:3,p:4,w:"عقارات تجارية."},
{id:"qnt-06",a:"الخصم عشرون بالمئة = كم صار؟",i:"Diskon dua puluh persen, jadinya berapa?",it:"ديسكون دوا پولوه ڤيرسين چادينيا براپا",t:"Yüzde yirmi indirim, kaç olur?",tt:"يوزده ييرمي إنديريم قاتش أولور",lv:2,p:1,w:"حسبة سريعة."},
{id:"qnt-07",a:"لتر بنزين / خزان ممتلئ",i:"Bensin satu liter / full tank",it:"بينزين ساتو ليتر فول تانك",t:"Bir litre benzin / depo full",tt:"بير ليتره بينزين ديڤو فول",lv:2,p:2,w:"محطة الوقود."},
{id:"qnt-08",a:"عشرين لفة/وحدة من الصنف",i:"Dua puluh bungkus item ini",it:"دوا پولوه بونݢوس آيتم إيني",t:"Yirmi adet bundan",tt:"ييرمي آديت بوندان",lv:2,p:2,w:"جملة صغيرة."},
{id:"qnt-09",a:"الوزن الإجمالي مع التغليف؟",i:"Berat total dengan kemasan?",it:"بيرات توتال دنݢان كيماسن",t:"Paketle birlikte toplam ağırlık?",tt:"پاكيتله بربريچه توپلام آغيرليق",lv:3,p:3,w:"شحن."},
{id:"qnt-10",a:"الطول × العرض = المساحة",i:"Panjang kali lebar = luas",it:"بانجنݢ قالي لبار لواس",t:"En çarpı boy = alan",tt:"ن قارپي بوي آلن",lv:3,p:4,w:"قياس أرض/غرفة."},
{id:"qnt-11",a:"درجة الحرارة كم؟",i:"Suhunya berapa derajat?",it:"سوهنيا براپا دراجة",t:"Sıcaklık kaç derece?",tt:"سيتشقليق قاتش ديريتشه",lv:3,p:2,w:"طقس/مرض/فرن."},
{id:"qnt-12",a:"عندي خمسة وعشرون فقط — يكفي؟",i:"Saya cuma punya dua puluh lima, cukup?",it:"سايا تيوما پونيا دوا پولوه ليما توكوڤ",t:"Bende yirmi beş var, yeter mi?",tt:"بينده ييرمي بش ڤار ييتر مي",lv:3,p:2,w:"ميزانية أخيرة."},
{id:"qnt-13",a:"الكيلو بكم والقطعة بكم؟",i:"Per kilo berapa, per biji berapa?",it:"بر كيلو براپا بر بيچي براپا",t:"Kilosu kaç, tanesi kaç?",tt:"كيلوسو قاتش تانيسي قاتش",lv:3,p:1,w:"مقارنة أسعار الوحدة."},
{id:"qnt-14",a:"نصف الكمية الآن والباقي غدًا",i:"Setengah sekarang, sisanya besok",it:"ستنݢاه سيكارانݢ سيسنيا بيسوك",t:"Yarısı şimdi, kalanı yarın",tt:"ياريسي شيمدي قالاني يارين",lv:3,p:3,w:"طلبيات مجزأة."},
{id:"qnt-15",a:"عشرون بالمئة عربون كافي؟",i:"DP dua puluh persen cukup?",it:"دي-بيه دوا پولوه ڤيرسين توكوڤ",t:"Yüzde yirmi kapora yeter mi?",tt:"يوزده ييرمي قاپوره ييتر مي",lv:3,p:3,w:"تثبيت طلب."},
{id:"qnt-16",a:"كم بقي عليّ من الدين؟",i:"Sisa hutang saya berapa?",it:"سيسا هوتنݢ سايا براپا",t:"Borcumun kalanı ne kadar?",tt:"بورجومون قالاني نه قادار",lv:3,p:3,w:"تقسيط."},
{id:"qnt-17",a:"دفعت ثلاثين والمتبقي عشرون",i:"Saya bayar tiga puluh, sisa dua puluh",it:"سايا باير تيݢا پولوه سيسا دوا پولوه",t:"Otuz ödedim, yirmi kaldı",tt:"أوتوز أوديديم ييرمي قالدي",lv:3,p:2,w:"حساب مفتوح."},
{id:"qnt-18",a:"الحجم: صغير ووسط وكبير جدًا",i:"Ukuran: kecil, sedang, dan jumbo",it:"أوكوران كيتشيل سيدانݢ دان چومبو",t:"Boyut: küçük, orta, mega",tt:"بويوت كوتشوك أورتا ميݢا",lv:2,p:2,w:"عبوات."},
{id:"qnt-19",a:"عشرون قطعة في الكرتون",i:"Isi karton dua puluh pcs",it:"إيسي قارتون دوا پولوه ڤي-سي-إيس",t:"Koli içinde yirmi adet",tt:"قولي إيتشينده ييرمي آديت",lv:2,p:2,w:"جملة."},
{id:"qnt-20",a:"الف التغيير عندك؟ كسر ورقتي",i:"Ada receh seribu? Uang saya pecahan besar",it:"ادا ريتشh سريبو أوڠ سايا بيتشهن بيسار",t:"Binlik bozuk var mı? Büyük param",tt:"بينلك بوزوق ڤار مي بويوك پارم",lv:3,p:2,w:"كسر فئات."}
]});

DB.chapters.push({
id:"life-emerg2", icon:"🚨", group:"academy", title:"الطوارئ والمشاكل — المكتبة الموسعة", sub:"حوادث سير، فقدان أغراض، غرق أوراق، وكل موقف لا ينتظر",
phrases:[
{id:"em2-01",a:"حادث سير! اتصلوا الإسعاف والشرطة",i:"Kecelakaan! Panggil ambulans sama polisi",it:"كيتشيلقائن بانݢيل أمبولانس ساما پوليسي",t:"Kaza oldu! Ambulans ve polisi arayın",tt:"قازه أولدي أمبولانس ڤيه پوليسي آراين",lv:2,p:1,w:"أول دقائق حادث."},
{id:"em2-02",a:"أصابه نزيف — ضغط الجرح بقطعة",i:"Darah keluar, tekan pakai kain",it:"داراه كلوار تيكان پاكاي قاين",t:"Kanama var, bezle bastırın",tt:"قانامه ڤار بيزله باستيرين",lv:2,p:2,w:"إسعاف أولي.",n:"«kanama/darah» النزيف — الإسعاف الأولي بلا لغة يكون إيماء؛ جملة واحدة تكفي لإنقاذ."},
{id:"em2-03",a:"لا تحركوه — رقبته قد انكسرت",i:"Jangan digerakkan, lehernya mungkin patah",it:"جانڠ ديݢيرقكان ليههنيا مونݢكين ڤاته",t:"Kımıldatmayın, boynu kırılabilir",tt:"قيميلاتمايين بونو قيريلابيلير",lv:2,p:3,w:"إسعاف متقدم."},
{id:"em2-04",a:"شهود الحادث أين؟ خذ أرقامهم",i:"Saksi kecelakaan di mana? Minta nomornya",it:"سقسي كيتشيلقائن دي مانا مينتا نومورنيا",t:"Kaza şahitleri kim? Numaralarını alın",tt:"قازه شاهيتليري كيم نومارالاريني آلين",lv:3,p:3,w:"توثيق حادث."},
{id:"em2-05",a:"السيارة تعطلت — أونش مطلوب",i:"Mobil mogok, butuh derek",it:"موبيل موݢوق بوتوه ديريك",t:"Arım bozuldu, çekici lazım",tt:"اريم بوزولدي تشيكيتشي لازيم",lv:3,p:2,w:"طرق سريعة."},
{id:"em2-06",a:"أوراقي الرسمية ضاعت بالكامل!",i:"Dokumen penting saya hilang semua!",it:"دوكومين بنتينݢ سايا هيلانݢ سموا",t:"Tüm evraklarım kayıp!",tt:"توم إڤراقلاريم قاييب",lv:2,p:2,w:"فقدان وثائق."},
{id:"em2-07",a:"أعلّق عن فقدانها فورًا (بلوك)",i:"Segera blokir KTP dan rekening",it:"سيݢيرا بلوكي قاطاران دان رييكينينݢ",t:"Kimlik ve hesabı hemen iptal ettir",tt:"كيمليك ڤيه حسابي هيمين إيپتال إتير",lv:3,p:3,w:"خطوة ما بعد الفقدان."},
{id:"em2-08",a:"طفل تاه — ساعدوه يجد أهله",i:"Anak kecil tersesat, tolong cari orang tuanya",it:"أناك كيتشيل ترسيسات تولوڠ تشاري أورانݢ توانيا",t:"Çocuk kaybolmuş, ailesini bulalım",tt:"تشوجوق قايبولموش آيليسيني بولاليم",lv:2,p:2,w:"مسؤولية اجتماعية."},
{id:"em2-09",a:"حريق صغير بالكهرباء — طفّئوا القاطع",i:"Kebakaran kecil dari listrik, matikan MCB",it:"كباقاران كيتشيل داري ليستريك ماتيكان إم-سي-بيه",t:"Küçük elektrik yangını, sigortayı kapatın",tt:"كوتشوك إليكتريك يانݢيني سيݢورتايي قاباتين",lv:3,p:2,w:"سلامة منزلية."},
{id:"em2-10",a:"انقطع الماء بالحي كله",i:"Air mati satu kampung",it:"أور ماتي ساتو قامڤوڠ",t:"Mahallede su kesildi",tt:"محله ده سو كسيلدي",lv:3,p:3,w:"أعطال عامة."},
{id:"em2-11",a:"انتهى الأكسجين/الدواء الحرج",i:"Obat penting habis, darurat!",it:"أبات بنتينݢ هابيس دارورت",t:"Hayati ilaç bitti, acil!",tt:"هاياتي إيلاش بيتي أجيل",lv:3,p:3,w:"حاجة علاجية عاجلة."},
{id:"em2-12",a:"سقوط من السلم — ألم بالظهر",i:"Jatuh dari tangga, punggung sakit",it:"جاتوه داري تانݢݢا پونݢݢوڠ ساكيت",t:"Merdivenden düştüm, belim ağrıyor",tt:"مرديوندن دوشتوم بيليم آغرييور",lv:3,p:2,w:"وصف إصابة."},
{id:"em2-13",a:"الجار مغلق عليه الباب مع طفل",i:"Tetangga terkunci, anaknya di dalam",it:"تيتانݢا تيركونتشي أناكنيا دي دالم",t:"Komşu kilitli kaldı, çocuğu içeride",tt:"قومشو قيليتلي قالدي تشوجوݢو إيتشيريده",lv:3,p:3,w:"طارئ جيران."},
{id:"em2-14",a:"أمر بالإخلاء — اتبعوا المخارج",i:"Evakuasi! Ikuti pintu darurat",it:"إڤاكواسي إيكوتي بنتو دارورت",t:"Tahliye! Acil çıkışları takip edin",tt:"طاحلييه أجه تشيقيشلاري تقيف إدين",lv:2,p:2,w:"زلازل/حرائق."},
{id:"em2-15",a:"رقم الطوارئ الموحد 112 يعمل هنا؟",i:"Nomor darurat seratus dua belas bisa di sini?",it:"نومور دارورت سراتوس دوا بيلس بيسا دي سيني",t:"Acil 112 buradan çalışıyor mu?",tt:"أجيل بير يوز أون إكي بورادن تشالاشيور مو",lv:2,p:1,w:"قبل أي طارئ."},
{id:"em2-16",a:"سُرقت دراجتي النارية من الموقف",i:"Motor saya dicuri dari parkiran",it:"موتور سايا ديتشوري داري بارقيران",t:"Motorum parktan çalındı",tt:"موتوروم پارقتان تشاليندي",lv:3,p:2,w:"سرقة ممتلكات."},
{id:"em2-17",a:"محفظتي وقعت — من وجدها؟",i:"Dompet saya jatuh, ada yang nemu?",it:"دومبيت سايا چاتوه ادا ياڠ نيمو",t:"Cüzdanım düşmüş, bulan var mı?",tt:"جوزدانيم دوشموش بولان ڤار مي",lv:3,p:2,w:"بحث مفقودات."},
{id:"em2-18",a:"مشاجرة بالسوق — رجوهم الأمن",i:"Ada keributan di pasar, panggil security",it:"ادا كريبتن دي پاسار بانݢيل سيكيوريتي",t:"Pazarda kavga var, güvenliği çağırın",tt:"پازارده قاڤݢا ڤار كوفينليغي تشاغيرين",lv:3,p:3,w:"أمن عام."},
{id:"em2-19",a:"أزمة صدر — لا أستطيع التنفس جيدًا",i:"Sesak napas, susah bernapas",it:"سيسق ناڤاس سوساه برناڤاس",t:"Nefes alamıyorum, göğsüm sıkıştı",tt:"نفيس ألاميوروم كوكسوم سيقيشتي",lv:2,p:1,w:"أعراض قلبية/تنفسية."},
{id:"em2-20",a:"هدوء تام — ساعدونا بمسؤولية",i:"Tenang dulu, tolong dengan tertib",it:"تيننݢ دولو تولوڠ دنݢان تيرتيب",t:"Sakin olalım, yardim düzenli olsun",tt:"ساكين أولاليم يارديم دوزينلي أولسون",lv:3,p:3,w:"قيادة موقف طارئ."}
]});
