/* ===== مكتبة الحياة (5): العلاقات والتعارف، الإجراءات الحكومية، التعليم، الخدمات الشخصية ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"life-relate", icon:"🤝", group:"academy", title:"العلاقات والتعارف المتقدم", sub:"صداقات، ضيافة، اختلافات، مصارحة، وإدارة العلاقات بلغة ناضجة",
phrases:[
{id:"rlt-01",a:"نسيت اسمك — عذرًا، ذكّرني",i:"Lupa nama kakak, maaf ya, ingetin lagi",it:"لوڤا ناما كاكاك ماؤف يا إنݢيتين لاݢي",t:"Adınızı unuttum, kusura bakmayın, tekrar söyler misiniz?",tt:"آدينيزي أنوتوم كوسورا باكماين",lv:3,p:2,w:"موقف محرج شائع.",n:"الاعتراف بالنسيان أرتب من اللف — بجملة واحدة تحلها بلطف."},
{id:"rlt-02",a:"تصادقنا من أول لقاء — نَفَس واحد",i:"Kita cocok banget dari awal",it:"كيتا تشوتشوق بانݢينݢ داري أول",t:"İlk günden anlaştık biz",tt:"إيلك كوندن أنلاشتق بيز",lv:3,p:3,w:"صداقة جديدة."},
{id:"rlt-03",a:"بيتك بيتي — تعال بلا موعد",i:"Rumah saya rumah kakak, datang kapan saja",it:"رومه سايا رومه كاكاك داتنݢ قاڤان ساچا",t:"Evim evinizdir, habersiz gelin",tt:"إيڤيم إيڤينيزدير حابرسيز كيلين",lv:3,p:2,w:"أعلى دعوة ود."},
{id:"rlt-04",a:"أستأذن — عندي موعد",i:"Permisi ya, saya ada janji",it:"پرميسي يا سايا ادا چانچي",t:"İzninizle, randevum var",tt:"إزنينيزله رانديڤوم ڤار",lv:3,p:2,w:"خروج مهذب من مجلس."},
{id:"rlt-05",a:"لا أريد إحراجك — لكن الحقيقة...",i:"Makasih mau repot, tapi jujur...",it:"ماكاسيه ماو ريڤوت تاڤي جوجور",t:"Sizi kırmak istemem ama açık konuşayım",tt:"سيزي قيرماق إستميم أما آتشيك كونوشايم",lv:3,p:3,w:"مصارحة لطيفة."},
{id:"rlt-06",a:"كلامنا سر — لا يخرج منك",i:"Percakapan ini rahasia ya",it:"برتشاكاڤن إيني راهاسيا يا",t:"Bu konuşma aramızda kalsın",tt:"بو كونوشما آراميزده قالسين",lv:3,p:3,w:"أمانة الحديث."},
{id:"rlt-07",a:"اختلاف الرأي لا يفسد الود",i:"Beda pendapat nggak apa-apa, tetep teman",it:"بينده بنداڤات نݢاك أبا-أبا تيتيڤ تيمان",t:"Fikirler ayrı olsun, dostluk bozulmaz",tt:"فيكلر آيري أولسون دوستلق بوزولماز",lv:3,p:3,w:"خلاف ناضج."},
{id:"rlt-08",a:"سامحني على تجاهلك — كنت مشغول البال",i:"Maaf jarang kabar, banyak pikiran",it:"ماؤف چارنݢ قابار بنياك پيكرن",t:"Haber veremedim, kafam doluydu",tt:"حابر فيرياميديم قافام دولويدي",lv:3,p:3,w:"عودة بعد انقطاع."},
{id:"rlt-09",a:"أنت أول من أخبره الخبر السار",i:"Kakak orang pertama yang saya kabarin",it:"كاكاك أوراڠ بيرتاما ياڠ سايا قابرين",t:"İyi haberi ilk sana söylüyorum",tt:"إيي حابري إيلك صانه سويلويوروم",lv:3,p:3,w:"تقدير صديق."},
{id:"rlt-10",a:"كن عونًا لي — أرجوك",i:"Bantu saya ya, please",it:"بنتو سايا يا",t:"Bana yardım et, rica ederim",tt:"بنه يارديم إت ريتشا إديريم",lv:3,p:2,w:"طلب عون صريح."},
{id:"rlt-11",a:"لا أطلب أكثر من طاقتك",i:"Nggak minta lebih dari kemampuan kakak",it:"نݢاك مينتا لبيه داري كيمامبوان كاكاك",t:"Gücünün üstünü istemiyorum",tt:"كوجونون أوستونو إستميوروم",lv:3,p:3,w:"حدود اللب."},
{id:"rlt-12",a:"شكرًا على صبرك عليّ",i:"Makasih udah sabar sama saya",it:"ماكاسيه أوده صبر ساما سايا",t:"Bana sabrettiğin için sağ ol",tt:"بنه صابرتيكين إيتشين صاؤ أول",lv:3,p:2,w:"امتنان عميق."},
{id:"rlt-13",a:"دعنا نصفّي سوء الفهم هذا اليوم",i:"Hari ini juga kita bereskan miskomunikasinya",it:"هاري إيني يوݢا كيتا بيريسكن ميسكومونيكاسي",t:"Bu yanılgıyı bugün temizleyelim",tt:"بو يانيلݢييي بوكون تيميزلييليم",lv:3,p:3,w:"إصلاح علاقة."},
{id:"rlt-14",a:"أحترم رأيك وإن خالفتني",i:"Saya hargai pendapat kakak",it:"سايا هرݢاي بنداڤات قاكاك",t:"Fikrine saygı duyuyorum",tt:"فيكرينه صايغه دوويوروم",lv:3,p:2,w:"حوار راق."},
{id:"rlt-15",a:"نلتقي أسبوعيًا — موعد ثابت",i:"Kita ketemuan tiap minggu ya",it:"كيتا كتيموان تيiap مينݢو يا",t:"Her hafta buluşalım, sözleşelim",tt:"هير هافتا بولوشاليم سوزليشيليم",lv:3,p:3,w:"علاقة مستمرة."},
{id:"rlt-16",a:"ظروفك فهمتها — بلا تفسير",i:"Saya ngerti kondisinya, nggak usah jelasin",it:"سايا نݢرتي قونديسينيا نݢاك أوساه چلاسين",t:"Durumunu anlıyorum, açıklama gerekmez",tt:"دورومونو أنليوروم آتشيكله كيركماز",lv:3,p:3,w:"تعاطف محترم."},
{id:"rlt-17",a:"كلمة شكر تكفي — لا تريد مقابلا",i:"Cukup bilang makasih, nggak perlu balas",it:"توكوڤ بيلاڠ ماكاسيه نݢاك برلو بالاس",t:"Teşekkür yeter, karşılık beklemem",tt:"تشيكور ييتر قارشيلق بيكليميم",lv:3,p:3,w:"عطاء بلا مقابل."},
{id:"rlt-18",a:"وقتك ثمين — أختصر",i:"Waktu kakak berharga, saya singkat aja",it:"واقتو كاكاك برهاݢيه سايا سينݢكات أجا",t:"Vaktiniz kıymetli, kısaca geçiyorum",tt:"فقتينيز قيميتلي قيساجه كييوروم",lv:3,p:2,w:"أدب اجتماعي."},
{id:"rlt-19",a:"دعني أقدمك لأصدقائي",i:"Perkenalkan, ini teman-teman saya",it:"بركينلكن إيني تيمان-تيمان سايا",t:"Tanıştırayım, arkadaşlarım bunlar",tt:"طانيشتيراييم أركاداشلريم بونلار",lv:3,p:2,w:"توسيع دائرة معارف."},
{id:"rlt-20",a:"علاقتنا تتقوى بالصدق لا بالمداراة",i:"Hubungan kita kuat karena jujur, bukan basa-basi",it:"هوبوڠن كيتا كوات كارينا جوجور بوكان باسه-باسي",t:"İlişkimiz samimiyetle güçlenir, yapmacıkla değil",tt:"إيليشكيميز صاميميتله كوجلينير",lv:4,p:4,w:"فلسفة علاقة.",n:"«basa-basi» = مجاملات حشو — الإندونيسيون يفرقون بين المجاملة اللطيفة والحشو الفارغ؛ تمييز دقيق للمتعلم الناضج."}
]});

DB.chapters.push({
id:"life-gov", icon:"🏛️", group:"academy", title:"الإجراءات الحكومية والوثائق", sub:"هوية، إقامة، تجديد أوراق، بريد، وضرائب — بلغة المكاتب الرسمية",
phrases:[
{id:"gov-01",a:"أريد تجديد إقامتي",i:"Mau perpanjang KITAS saya",it:"ماو برڤنجانݢ كيتاس سايا",t:"Oturma iznimi uzatmak istiyorum",tt:"أوترمه إزنيمي أوواتماق إستيوروم",lv:2,p:2,w:"مكتب الهجرة."},
{id:"gov-02",a:"ما المستندات المطلوبة؟ قائمة كاملة",i:"Dokumen yang dibutuhkan apa saja?",it:"دوكومين ياڠ ديبوتوهكان أبا ساچا",t:"Gerekli evraklar hangileri?",tt:"كيريكلي إڤراقلار هانݢيلري",lv:2,p:1,w:"قبل أي زيارة."},
{id:"gov-03",a:"أخذ رقم وانتظر دوري؟",i:"Ambil nomor antrian dulu ya?",it:"أمبول نومور أنتريان دولو يا",t:"Sıra numarası alayım mı?",tt:"صيرا نوماراسي آلايم مي",lv:2,p:2,w:"دخول أي مكتب."},
{id:"gov-04",a:"الطلب قيد المعالجة — متى الجواب؟",i:"Pengajuan sedang diproses, kapan hasilnya?",it:"پينݢاچوان سيدانݢ ديبروسيس قاڤان هاسيلنيا",t:"Başvurum işlende, sonuç ne zaman?",tt:"باشڤوروم إيشلينده صونوتش نه زمان",lv:2,p:2,w:"متابعة معاملة."},
{id:"gov-05",a:"عندي موعد إلكتروني الساعة العاشرة",i:"Saya punya janji online jam sepuluh",it:"سايا پونيا چانچي أونلاين جام سبولوه",t:"Randevum var saat onda",tt:"رانديڤوم ڤار ساعات أونده",lv:2,p:2,w:"نظام المواعيد."},
{id:"gov-06",a:"أريد تسجيل عنوان سكني جديد",i:"Mau lapor pindah domisili",it:"ماو لاڤور ڤينداه دوميسيلي",t:"Adres kaydımı yenileyeceğim",tt:"أدرس قايديمي يينيلييهچيم",lv:3,p:3,w:"انتقال سكن."},
{id:"gov-07",a:"الرقم الضريبي كيف أستخرجه؟",i:"Cara bikin NPWP gimana?",it:"تشارا بيكين إين-بيه-ويه-بيه كيمانا",t:"Vergi numarası nasıl alınır?",tt:"ڤيرݢي نوماراسي ناسيل آلينير",lv:3,p:4,w:"عمل حر/شركة."},
{id:"gov-08",a:"الفحص الطبي أين مراكزه المعتمدة؟",i:"Medical check-up resmi di mana?",it:"ميديكل تشيك-أوڤ ريسمي دي مانا",t:"Resmi sağlık raporu nereden alınır?",tt:"ريسمي صيحليه راپورو نيريدن آلينير",lv:3,p:4,w:"إجراءات إقامة/عمل."},
{id:"gov-09",a:"شهادة ميلاد ابني أستخرجها من أين؟",i:"Akta kelahiran anak saya ambil di mana?",it:"أقته كيلاهيرن أناك سايا أمبول دي مانا",t:"Oğlumun doğum belgesini nereden alırım?",tt:"أولومون دوݢوم بلكسيني نيريدن آليريم",lv:3,p:3,w:"أوراق عائلية."},
{id:"gov-10",a:"هذه النسخة مصدقة أم أصلية؟",i:"Ini fotokopi legal atau asli?",it:"إيني فوتوقوبي ليݢال أتاو أسلي",t:"Bu onaylı mı, asıl mı?",tt:"بو أونايلي مي أصيل مي",lv:3,p:3,w:"تقديم مستندات."},
{id:"gov-11",a:"الطابور طويل — كم ساعة انتظار تقديري؟",i:"Antriannya panjang, kira-kira berapa jam?",it:"أنترينيا ڤانچنݢ قيرا-قيرا براپا چام",t:"Kuyruk uzun, tahmini kaç saat?",tt:"قويروق أوزون تحميني قاتش ساعات",lv:3,p:3,w:"تخطيط يومك الرسمي."},
{id:"gov-12",a:"يوجد مترجم معتمد داخل المبنى؟",i:"Ada penerjemah resmi di gedung ini?",it:"ادا بينيرجمه ريسمي دي ݢيدوڠ إيني",t:"Binada yeminli tercüman var mı?",tt:"بيناده ييمنلي ترتچومان ڤار مي",lv:3,p:3,w:"حاجز اللغة الرسمي."},
{id:"gov-13",a:"رسوم الخدمة كم وأين أدفعها؟",i:"Biaya layanannya berapa, bayar di mana?",it:"بيايه لايانانيا براپا بايار دي مانا",t:"Harç ne kadar, nereye ödeniyor?",tt:"هارتش نه قادار نيريه أودينيور",lv:2,p:2,w:"إتمام معاملة."},
{id:"gov-14",a:"أريد تقديم شكوى رسمية عن تأخير",i:"Mau komplain resmi soal keterlambatan",it:"ماو قومڤلين ريسمي صوال كيتيرلمباتن",t:"Gecikme için resmi şikayet sunuyorum",tt:"كيكيمه إيتشين ريسمي شيكايت سونويوروم",lv:3,p:3,w:"حقك النظامي."},
{id:"gov-15",a:"استلمت رسالة بريدية — أوقع أين؟",i:"Paket dari pos, tanda tangan di mana?",it:"پاquet داري پوس تاندا تانݢان دي مانا",t:"Postadan geldim, nereye imza atayım?",tt:"بوستادان كيلديم نيريه إيمزا آتايم",lv:3,p:3,w:"مكتب البريد."},
{id:"gov-16",a:"بلاغ إقامتي واجب كل ستة أشهر؟",i:"Lapor diri tiap enam bulan wajib?",it:"لاڤور ديري تيiap إينام بولن واشيب",t:"Altı ayda bir adres bildirmek zorunlu mu?",tt:"ألتي آيدا بير أدرس بيلديرميك زورونلو مي",lv:3,p:4,w:"واجبات مقيم."},
{id:"gov-17",a:"أفقد رقم معاملتي — كيف أتتبعها؟",i:"Nomor registrasi hilang, gimana lacaknya?",it:"نومور ريݢيستراسي هيلانݢ كيمانا لاتشنيا",t:"Dosya numaramı kaybettim, nasıl takip ederim?",tt:"دوسيه نومارامي قايبيتديم",lv:3,p:3,w:"متابعة بلا رقم."},
{id:"gov-18",a:"التصديق الخارجي (أبوستيل) أين؟",i:"Legalisir / apostille di mana?",it:"ليݢاليسير أبوستيل دي مانا",t:"Apostille nereden yapılır?",tt:"أبوستيل نيريدن يابيلير",lv:3,p:4,w:"وثائق للاستخدام الدولي."},
{id:"gov-19",a:"مواعيد الدوام الرسمية؟ الجمعة مغلقة؟",i:"Jam layanan kapan? Jumat tutup?",it:"جام لايانن قاڤان جومعة توتوڤ",t:"Mesai saatleri ne? Cuma kapalı mı?",tt:"ميساي ساعاتلري نه قوما قابالي مي",lv:3,p:3,w:"قبل الذهاب."},
{id:"gov-20",a:"أخيرًا! الطلب اعتُمد — استلمت الوثيقة",i:"Akhirnya disetujui, dokumennya sudah di tangan",it:"أخيرنيا ديسيتوشوي دوكومنيا سوداه دي تانݢن",t:"Sonunda onaylandı, evrak elimde",tt:"سونوندا أونايلاندي إڤراق إليمد",lv:3,p:3,w:"نهاية رحلة رسمية."}
]});

DB.chapters.push({
id:"life-edu", icon:"🎓", group:"academy", title:"التعليم والدراسة", sub:"تسجيل، رسوم، معلمون، امتحانات، ودراسة اللغات",
phrases:[
{id:"edu-01",a:"أريد تسجيل ابني بالمدرسة",i:"Mau daftarin anak ke sekolah",it:"ماو دافتيرين أناك كه سكوله",t:"Oğlumu okula kaydetmek istiyorum",tt:"أولومو أوقوله قايد إتمك إستيوروم",lv:2,p:2,w:"عائلات مقيمة."},
{id:"edu-02",a:"الرسوم الدراسية شهريًا أم سنويًا؟",i:"SPP-nya bulanan atau tahunan?",it:"إس-بيه-بيه-نيا بولنان أتاو تاهونن",t:"Okul ücreti aylık mı, yıllık mı?",tt:"أوقول أوجريتي آيليق مي ييليق مي",lv:2,p:3,w:"ميزانية تعليم."},
{id:"edu-03",a:"هل تقدمون منحًا أو خصم أشقاء؟",i:"Ada beasiswa atau diskon kakak-adik?",it:"ادا بيسيسوا أتاو ديسكون قاقاك-أديك",t:"Burs var mı, kardeş indirimi?",tt:"بورص ڤار مي قارديش إنديريمي",lv:3,p:3,w:"تخفيفات تعليمية."},
{id:"edu-04",a:"أبحث عن معلم لغة خصوصي",i:"Cari guru les bahasa privat",it:"تشاري ݢورو ليس باهاسا بريڤات",t:"Özel dil öğretmeni arıyorum",tt:"أوزيل ديل أوكرتمني آريوروم",lv:3,p:2,w:"تسريع تعلمك."},
{id:"edu-05",a:"الحصة التجريبية مجانية؟",i:"Trial class-nya gratis?",it:"تريال قلاس-نيا كراتيس",t:"Deneme dersi ücretsiz mi?",tt:"دينيمه ديرسي أوكرتسيز مي",lv:3,p:2,w:"اختيار معلم."},
{id:"edu-06",a:"الامتحان النهائي متى؟ خطة المراجعة",i:"Ujian akhir kapan? Jadwal belalarnya?",it:"أوجين أخير قاڤان چادوال بلاچارنيا",t:"Final ne zaman? Çalışma planı?",tt:"فينال نه زمان تشالاشما پلاني",lv:3,p:3,w:"موسم الاختبارات."},
{id:"edu-07",a:"شهادتي تحتاج تصديق وزارة التعليم",i:"Ijazah saya perlu legalisir dinas pendidikan",it:"إيجازه سايا برلو ليݢاليسير ديناس بنديديكان",t:"Diplomam onaylatmam lazım",tt:"ديپلومام أوينايلاتمام لازيم",lv:3,p:4,w:"معادلة شهادات."},
{id:"edu-08",a:"معدلي التراكمي 3.5 من 4",i:"IPK saya tiga koma lima",it:"إي-بيه-قاه سايا تيݢا قوما ليما",t:"Not ortalamam üç buçuk",tt:"نوت أورتالامام أوتش بوتشوق",lv:3,p:3,w:"سيرة ذاتية."},
{id:"edu-09",a:"المنهج باللغة المحلية أم الإنجليزية؟",i:"Kurikulumnya pakai bahasa apa?",it:"قوريقلومنيا پاكاي باهاسا أبا",t:"Müfredat hangi dilde?",tt:"موفريضات هانݢي ديلده",lv:3,p:3,w:"اختيار مدرسة."},
{id:"edu-10",a:"الأنشطة اللاصفية: رياضة وفنون",i:"Ekstrakurikuler ada olahraga dan seni",it:"إكستراكوريقولير ادا أولهرراݢا دان صني",t:"Sosyal etkinlikler: spor ve sanat var",tt:"صولال إتكنليكلر صپور ڤيه صنعت ڤار",lv:3,p:3,w:"تطوير شامل."},
{id:"edu-11",a:"الكتب المدرسية مشمولة بالرسوم؟",i:"Buku pelajarannya termasuk biaya?",it:"بوکو بلاچارنيا تيرماسوق بيايه",t:"Kitaplar ücrete dahil mi?",tt:"قيطابلر أوكرته داهيل مي",lv:3,p:3,w:"تكاليف خفية."},
{id:"edu-12",a:"متابعة واجبات ابني يوميًا",i:"PR anak saya pantau tiap hari",it:"پي-إير أناك سايا پانتاو تيiap هاري",t:"Ödevini her gün takip ediyorum",tt:"أوديڤيني هر كون تقيف إيديوروم",lv:3,p:3,w:"دور الأسرة."},
{id:"edu-13",a:"أستاذ العلوم صارم لكنه ممتاز",i:"Guru IPA-nya galak tapi bagus",it:"ݢورو إي-پيه-اهنيا ݢلاق تاڤي باݢوس",t:"Fen öğretmeni disiplinli ama harika",tt:"فين أوكرتمني ديسيپلينلي أما هاريكة",lv:3,p:3,w:"تقييم معلمين."},
{id:"edu-14",a:"أفكر بمدرسة تقوية مسائية",i:"Mau les malam buat tambahan",it:"ماو ليس مالام بوات تامبهن",t:"Akşam destek kursu düşünüyorum",tt:"آقشام ديستيك قورسو دوشونويوروم",lv:3,p:3,w:"تعليم إضافي."},
{id:"edu-15",a:"القبول الجامعي بالاختبار الوطني؟",i:"Masuk lewat SNBT atau mandiri?",it:"ماسوق ليوات إس-إن-بيه-تيه أتاو مانديري",t:"Üniversiteye sınavla mı giriliyor?",tt:"أونيڤيرسيتهه سيناڤله مي كيريليور",lv:4,p:4,w:"مسارات جامعية."},
{id:"edu-16",a:"أدرس Engineering — سنة ثانية",i:"Saya kuliah teknik, semester empat",it:"سايا كولياه تيكنيك سيميستر إمڤات",t:"Mühendislik okuyorum, ikinci sınıf",tt:"موهنديسليك أوكيوروم إيكينجي صينيف",lv:3,p:3,w:"تعريف جامعي."},
{id:"edu-17",a:"المكتبة مفتوحة حتى منتصف الليل",i:"Perpustakaan buka sampai tengah malam",it:"بربوستقائن بوقا سامپاي تينݢاه مالام",t:"Kütüphane gece yarısına kadar açık",tt:"كوتوبخانه كيتشه ياريسينا قادار آتشيق",lv:3,p:3,w:"موسم الامتحانات."},
{id:"edu-18",a:"التخرج قريب — مشروعي عن التجارة",i:"Sidang skripsi saya sebentar lagi, tema dagang",it:"صيدانݢ سقريپسي سايا سبنتار لاݢي تيما داݢانݢ",t:"Tez savunmam yaklaşıyor, konum ticaret",tt:"تيز صافونمم يقلاشيور قونوم تيچارت",lv:4,p:4,w:"مسيرة أكاديمية."}
]});

DB.chapters.push({
id:"life-personal", icon:"💇", group:"academy", title:"الخدمات الشخصية", sub:"حلاقة، صالون، غسيل، تصليح ساعة، وكل خدمات الحي اليومية",
phrases:[
{id:"prs-01",a:"قصّة شعر عادية — مقصلة فقط",i:"Cukur biasa aja, potongan rapi",it:"تشودق بياسا أجا بوتونݢن رأڤي",t:"Normal traş olsun, düzgün kesin",tt:"نورمال طراش أولسون دورون كيسين",lv:3,p:2,w:"عند الحلاق."},
{id:"prs-02",a:"قصيرًا من الجانبين أطول فوق",i:"Samping tipis, atas agak panjang",it:"سامڤينݢ تيڤيس أتاس أݢاق بانچنݢ",t:"Yanlar kısa, üst biraz uzun",tt:"يانلار قيسا أوست بيراز أوزون",lv:3,p:3,w:"تسريحة محددة."},
{id:"prs-03",a:"لحيتي أحلقها بنفسي — ظبط لي الأداة",i:"Kumis saya cukur sendiri, alatnya ya",it:"قوميس سايا تشودور سنديري ألتنيا يا",t:"Bıyığımı kendim alıyorum, aleti ayarlayın",tt:"بييقيمي كينديم آليوروم",lv:4,p:4,w:"خدمة سريعة."},
{id:"prs-04",a:"الصبغة: درجة أغمق درجة واحدة فقط",i:"Warna rambut lebih gelap satu tingkat aja",it:"وارنا رامبوت لبيه ݢيلاڤ ساتو تينݢݢات أجا",t:"Bir ton koyu olsun sadece",tt:"بير طون قويو أولسون صادجه",lv:3,p:3,w:"صالون."},
{id:"prs-05",a:"غسيل جاف للبدلة — متى تجهز؟",i:"Dry clean jasnya, kapan selesai?",it:"دراي كلين چاسنيا قاڤان سليساي",t:"Takımın kuru temizliği ne zaman biter?",tt:"تاقيمين قورو تيميزليكي نه زمان بيتر",lv:3,p:2,w:"مغسلة."},
{id:"prs-06",a:"بقعة زيت — تزول بالغسيل؟",i:"Noda minyak bisa hilang?",it:"نودا مينياك بيسا هيلانݢ",t:"Yağ lekesi çıkar mı?",tt:"ياغ ليكيشي تشيقر مي",lv:3,p:3,w:"ثقة بخدمة."},
{id:"prs-07",a:"كوي قميصي الثلاثة — نشا مرتب",i:"Setrika tiga kemeja saya, rapi ya",it:"ستريقه تيݢا كيميجا سايا رأڤي يا",t:"Üç gömleğim ütülenecek, düzgün olsun",tt:"أوتش كومليكيم أوتولينجيك",lv:3,p:2,w:"خدمة حي."},
{id:"prs-08",a:"بدّل بطارية ساعتي — بحافظة مقاومة",i:"Ganti baterai jamnya, tahan air ya",it:"ݢانتي باتيراي جامنيا تاهن آير يا",t:"Saatin pili değişsin, su geçirmesin",tt:"صاتين پيلي ديكيلسين صو كيتشيرميسين",lv:3,p:3,w:"تصليح ساعات.",n:"«pili değişsin» = لتُبدَّل البطارية — صيغة الأمر الغائب المهذبة بالمحلات."},
{id:"prs-09",a:"مفتاح نسخة احتياطية اصنع لي",i:"Duplikat kunci satu ya",it:"دوڤليقات كونتشي ساتو يا",t:"Yedek anahtar kopyası yapın",tt:"ييدك أنحتار قوبياسي يابين",lv:3,p:2,w:"أشغال مفاتيح."},
{id:"prs-10",a:"حذائي تلميع وقلي بعض الشيء",i:"Sepatunya poles, kilap dikit",it:"سيباتونيا ڤوليس قيلاڤ ديكيت",t:"Ayakkabılar boyansın, parlasın",tt:"آياقابيلار بوينسين",lv:3,p:3,w:"خدمة إسكافي."},
{id:"prs-11",a:"حقيبتي ممزقة — تخاط مع متانة",i:"Tas saya robek, jahit kuat ya",it:"تاس سايا روبيك چاهيت قوات يا",t:"Çantam yırtıldı, sağlam dikin",tt:"تشنتام ييرتيلدي صاڌلام ديكن",lv:3,p:3,w:"إصلاح جلديات."},
{id:"prs-12",a:"هاتفي نظّفه من الفيروسات",i:"HP-nya dibersihin dari virus",it:"إه-بيه-نيا ديبرسيهين داري ڤيروس",t:"Telefonu virüslerden temizleyin",tt:"تيليفونو ڤيروسليردن تيميزليين",lv:3,p:3,w:"محل صيانة."},
{id:"prs-13",a:"نظارتي عدستها مخدوشة — تصلح؟",i:"Kacamata lecet, bisa diperbaiki?",it:"قاتشاماتا لتشيت بيسا ديبربايكي",t:"Gözlüğüm çizildi, düzeltilebilir mi?",tt:"كوزلوكوم تشيزيلدي",lv:3,p:3,w:"بصريات."},
{id:"prs-14",a:"أطفالي حلقة قص شعر سريعة",i:"Anak-anak cukur cepet ya, nggak duduk lama",it:"أناك-أناك تشودور تشيڤيت يا نݢاكدودوق لاما",t:"Çocukların traşı hızlı olsun",tt:"تشوجوقلارين طراشي هيزلي أولسون",lv:3,p:3,w:"حلاقة أطفال."},
{id:"prs-15",a:"ركّب لي حماية شاشة وشاحنًا جديدًا",i:"Pasang screen protector sama charger baru",it:"پاسوڠ سكرين بروتكتور ساما تشارجر بارو",t:"Ekran koruyucu ve yeni şarj aleti takın",tt:"كران قورويوجو ڤيه ييني شارج آلتي",lv:3,p:3,w:"خدمات هاتف."},
{id:"prs-16",a:"الحلاقة ممتازة — من الآن زبونك",i:"Cukuran bagus, mulai sekarang langganan",it:"تشودورن باݢوس مولاي سيكارانݢ لانݢانن",t:"Traş süper oldu, artık müdaviminiz",tt:"طراش سوبر أولدي آرتيق موداڤيمينيز",lv:3,p:2,w:"ولاء خدمة."}
]});
