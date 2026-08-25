/* ===== مواقف الحياة الكاملة (الدفعة 2): سفارة، شرطة، مقابلة عمل، جامعة، إيجار شقة، إيجار سيارة، أونلاين، دعوة واعتذار ===== */
"use strict";
window.DB = window.DB || {};
window.DB.situations = window.DB.situations || [];

DB.situations.push({
id:"dly-embassy", kind:"daily", title:"في السفارة (تركيا)", sub:"موعد، أوراق، ومتابعة طلب", context:"في سفارة بأنقرة لتقديم طلب (تأشيرة/تصديق أوراق). الموظف يتحدث بتركية رسمية هادئة.",
chapters:["questions","time"],
turns:[
{who:"S",a:"صباح الخير. رقم موعدك؟",t:"Günaydın. Randevu numaranız?",tt:"كُون‌أيدن رانديڤو نومارانيز",i:"Selamat pagi. Nomor antrian appointment?",it:"سيلامات پاݢي نومور أنتريان أپوينتمنت"},
{who:"C",a:"صباح النور — 204. هذا ملفي كاملًا.",t:"Günaydın, iki yüz dört. Dosyam eksiksiz burada.",tt:"كُون‌أيدن إيكي يوز دورت دوسيام إكسكسز بوراده",i:"Nomor dua ratus empat. Berkas saya lengkap.",it:"نومور دوا راتوس إمڤات بيرقاس سايا لنݢكاپ"},
{who:"S",a:"جواز، صور، كشف حساب، دعوة. ينقص شهادة عمل.",t:"Pasaport, foto, banka dökümü, davetiye. Eksik olan iş belgesi.",tt:"پاساپورت فوتو بانقه دوكومو داڤيتيه إكسك أولان إيش بلكسي",i:"Paspor, foto, rekening koran, surat undangan. Kurang surat kerja.",it:"…"},
{who:"C",a:"أحضرتها! معها ترجمة موثقة — تكفي؟",t:"Getirdim! Yeminli tercümesi de var — yeterli mi?",tt:"كيتيرديم ييمنلي ترتچوميسي د ڤار ييترلي مي",i:"Saya bawa! Sama terjemahan tersumpah — cukup?",it:"…"},
{who:"S",a:"تكفي. الرسوم تُدفع عند الشباك 3. المدة 15 يوم عمل.",t:"Yeterli. Harç üç numaralı gişede. Süre on beş iş günü.",tt:"ييترلي هارتش أوتش نومارالي قيشيده سوريه أون بيش إيش كونو",i:"Cukup. Biayanya di loket tiga. Prosesnya lima belas hari kerja.",it:"…"},
{who:"C",a:"كيف أتابع الطلب؟ برسالة؟",t:"Başvuruyu nasıl takip ederim? SMS ile mi?",tt:"باشڤورويو ناسيل تقيف إديريم إس-إم-إس إيلي مي",i:"Gimana cara lacak permohonan? Lewat SMS?",it:"…"},
{who:"S",a:"برسالة للرقم المسجل، أو موقعنا برقم الجواز.",t:"Kayıtlı numaraya SMS, ya da siteden pasaport numarasıyla.",tt:"قاييتلي نوماراه إس-إم-إس يا دا سيتيدن پاساپورت نوماراسييلا",i:"Lewat SMS ke nomor terdaftar, atau cek di situs pakai nomor paspor.",it:"…"},
{who:"C",a:"ممتاز. يومًا سعيدًا، وشكرًا على صبرك.",t:"Harika. İyi günler, sabrınız için teşekkürler.",tt:"هاريكة إيي كونلر صابرنيز إيتشين تشيكورلر",i:"Siap. Sukses ya, makasih sabarnya.",it:"…"}
],
vocab:[
["موعد","janji temu / appointment","جانچي تيمو","randevu","رانديڤو"],
["ملف/أوراق","berkas","بيرقاس","dosya","دوسيه"],
["كشف حساب","rekening koran","رييكينينݢ قوران","banka dökümü","بانقه دوكومو"],
["ترجمة موثقة","terjemahan tersumpah","ترجمانن تيرسومڤه","yeminli tercüme","ييمنلي ترتچومه"],
["رسوم (رسمية)","biaya resmi","بيايه ريسمي","harç","هارتش"],
["شباك/نافذة","loket","لوكيت","gişe","قیشه"]
],
grammar:[{t:"🇹🇷 لاحقة «-sız» = بدون",b:"eksiksiz = بلا نقص (eksik نقص + siz بلا)، «belgesiz» بلا وثيقة، «şekersiz» بلا سكر. أداة النفي للملكية/الوصف — و«sabrınız için» = لصبركم: لاحقة الملكية + لأجل، صيغة شكر رسمية راقية."}],
why:`<p>زيارة سفارة ناجحة بثلاث قواعد ذهبية: <b>ملف مكتمل قبل الدور (اسأل هاتفيًا أولًا!) ← ترجمة موثقة لكل ما ليس بالتركية ← رقم متابعة واضح</b>. لاحظ أن الموظف عدّد الناقص بجملة واحدة — اعرف قائمتك قبلها ولا تجادل: السفارات تعمل بالقوائم لا بالانطباعات.</p>`,
variants:[{kind:"formal",a:"استفسار هاتفي قبل الزيارة",t:"Günaydın, randevu için gerekli evraklar nelerdir?"},{kind:"casual",a:"استفسار عفوي من موظف شاب",t:"Abi bir şey soracağım, evrakta eksik varsa sonra tamamlayabilir miyim?"}]
});

DB.situations.push({
id:"dly-police", kind:"daily", title:"في مركز الشرطة (تركيا)", sub:"بلاغ فقدان هاتف — هادئًا ومنظمًا", context:"سرق هاتفك في المواصلات. تذهب لأقرب مركز (karakol) لتقديم بلاغ تحتاجه للتأمين والخط الجديد.",
chapters:["surv-emergency","complaints"],
turns:[
{who:"C",a:"مساء الخير. أريد تقديم بلاغ — سُرق هاتفي في المترو.",t:"İyi akşamlar. Tutnak istiyorum — metroda telefonum çalındı.",tt:"إيي آقشاملار توتناق إستيوروم مترودا تيليفونوم تشاليندي",i:"Selamat malam. Saya mau laporan — HP saya dicuri di kereta.",it:"سيلامات مالام سايا ماو لاپوران إه-بيه سايا ديتشوري دي كيريتا"},
{who:"S",a:"متى وأين بالضبط؟ أي خط؟",t:"Ne zaman, hangi durakta? Hattı hangi operatör?",tt:"نه زمان هانݢي دوراقتاه هاتي هانݢي أوپيراتور",i:"Kapan dan di stasiun mana? Kartunya operator apa?",it:"كاڤان دان دي ستاسيون مانا قارتونيا أوپيراتور أبا"},
{who:"C",a:"حوالي السادسة، محطة تقسيم. رقمي ومحفظتي به.",t:"Saat altı sularında, Taksim durağı. Numaram ve cüzdanım içindeydi.",tt:"ساعات ألتي صولاريندا تقسيم دوراغي نومرام ڤيه جوزدانيم إيتشيندايدي",i:"Jam enam-an, stasiun Taksim. Nomor saya sama dompet di dalam.",it:"جام إينام-أن ستاسيون تقسيم"},
{who:"S",a:"حسنًا. هويتك وجوازك. نحرر بلاغًا رقميًا الآن.",t:"Pekâlâ. Kimlik ve pasaportunuz. Şimdi tutanak tutuyoruz.",tt:"پيقاله كيمليك ڤيه پاساپورتونوز شيمدي توتناق توتويوروز",i:"Oke. KTP sama paspor. Sekarang kami buat laporan resmi.",it:"أوكيه قاطاران ساما پاسور"},
{who:"C",a:"هل أستطيع نسخة للتأمين وشركة الاتصال؟",t:"Sigorta ve operatör için bir kopya alabilir miyim?",tt:"سيݢورتا ڤيه أوپيراتور إيتشين بير قوپييه آلاپيلير ميين",i:"Bisa dapat salinan buat asuransi sama operator?",it:"بيسا داڤات سالينن بوات أسورانسي"},
{who:"S",a:"نعم — نسختان مختومتان. واعرضها للخط الجديد لتحتفظ برقمك.",t:"Evet, iki mühürlü kopya. Yeni hatta numaranızı taşıyabilirsiniz.",tt:"إييت إيكي موهورلو قوپييه ييني هاته نومارانيزي طاشيابيليرسينيز",i:"Bisa, dua lembar cap. Buat kartu baru, nomor lama bisa dipindah.",it:"بيسا دوا ليمبار چاپ"},
{who:"C",a:"شكرًا لاهتمامكم. هل هناك نصيحة؟",t:"İlginiz için teşekkürler. Bir tavsiyeniz var mı?",tt:"إلݢينيز إيتشين تشيكورلر بير تاڤسيينيز ڤار مي",i:"Makasih perhatiannya. Ada saran?",it:"ماكاسيه برهاتيانه ادا ساران"},
{who:"S",a:"المتاجر المزدحمة ونهاية العربات — انتبه، وسجل الهاتف في تطبيق (IMEI).",t:"Kalabalık yerler ve vagon sonları — dikkat edin, IMEI’yi kayıt edin.",tt:"قالاباليق ييرلر ڤيه ڤاݢون سونلاري ديكات إدين إيمي-إيه يي قاييت إدين",i:"Tempat ramai sama ujung gerbong — hati-hati, catat IMEI-nya.",it:"…"}
],
vocab:[
["بلاغ رسمي","laporan resmi","لاپوران ريسمي","tutanak","توتناق"],
["سُرق","dicuri","ديتشوري","çalındı","تشاليندي"],
["هوية","KTP / identitas","قاطاران / إيدنتيتاس","kimlik","كيمليك"],
["نسخة مختومة","salinan bercap","سالينن برچاپ","mühürlü kopya","موهورلو قوبيه"],
["نقل الرقم","pindah nomor","ڤينداه نومور","numara taşımak","نوماره طاشيمق"],
["مزدحم","ramai","راماي","kalabalık","قالاباليق"]
],
grammar:[{t:"🇹🇷 المبني للمجهول «-ıl/in/dı/di/ıl» الشاهد",b:"çalındı = سُرِق (çal- سرق + ındı مبني للمجهول ماضٍ). نفس بناء الإندونيسية di- (dicuri). في البلاغات الرسمية اللغتان تفضلان المبني للمجهول: الحدث موثق بلا تركيز على فاعل مجهول."}],
why:`<p>بلاغ منظم = نتيجة سريعة: <b>زمان/مكان دقيقان ← وثائق ← نسخ مختومة ← طلب نصيحة ختامي</b>. النسخ المختومة (tutanak) هي وثيقتك للتأمين ولنقل رقمك — لا تخرج بدونها. والنصيحة الأمنية الختامية إشارة احترام تركية تكسبك تعاونًا أعمق.</p>`,
variants:[{kind:"formal",a:"بلاغ رسمي مفصل",t:"Saat 17.30 civarı, Taksim yönünde son vagonda meydana geldi."},{kind:"casual",a:"مع ضابط ودود",t:"Beyfendi çaresiz kaldım, numaram iş numaram — ne yapmalıyım?"}]
});

DB.situations.push({
id:"dly-job", kind:"daily", title:"مقابلة عمل (تركيا)", sub:"قدم نفسك بثقة — قواعد سوق العمل التركي", context:"مقابلة لبائع/أمين مخزن في شركة تجارية بإسطنبول. مدير الموارد البشرية ودود لكنه محترف.",
chapters:["intro","wholesale"],
turns:[
{who:"S",a:"أهلًا. تعرّف بنفسك باختصار.",t:"Hoş geldiniz. Kendinizden kısaca bahsedin.",tt:"هوش كيلدينيز كينديزينيزدن قيساجا بهسيندين",i:"Silakan. Ceritakan singkat tentang diri Bapak.",it:"سيلاكان تشريتاكن سينݢكات tentang ديري باڤاك"},
{who:"C",a:"أحمد، من اليمن. 3 سنوات خبرة مبيعات بالتجزئة، أتحدث العربية والإنجليزية وأتعلم التركية بسرعة.",t:"Ahmed, Yemenliyim. Perakende satışta üç yıl tecrübem var; Arapça ve İngilizce biliyorum, Türkçeyi hızlı öğreniyorum.",tt:"أحمد يمنلييم پيراكيندي ساتيشته أوتش ييل تجروبيم ڤار أرابتشه ڤيه إنݢيليزجه بيليوروم توركچيهي هيزلي أورينيوروم",i:"Ahmad, dari Yaman. Tiga tahun pengalaman jualan eceran, bisa Arab sama Inggris, lagi cepat belajar bahasa Turki.",it:"…"},
{who:"S",a:"لماذا شركتنا تحديدًا؟",t:"Neden özellikle bizim firmamız?",tt:"نيدن أوزيزليكله بيزيم فيرماميز",i:"Kenapa milih tempat kami?",it:"كينابه ميليه تيمڤات كامي"},
{who:"C",a:"تعملون بالجملة مع الشرق الأوسط — لغتي وشبكة علاقاتي تخدم هذا الخط مباشرة.",t:"Orta Doğu ile toptan çalışıyorsunuz — dilim ve ilişkilerim bu hatta doğrudan hizmet eder.",tt:"أورتا دوعو إله توپتان تشالاشيورسونوز ديليم ڤيه إيليشكيلريم بو هاته دوݢرودان خدمات إدير",i:"Kalian main grosir ke Timur Tengah — bahasa sama relasi saya langsung kepake di lini itu.",it:"…"},
{who:"S",a:"نقاط قوتك وضعفك؟",t:"Güçlü ve zayıf yönleriniz?",tt:"كوتشلو ڤيه زايف يونليرينيز",i:"Kekuatan sama kelemahan Bapak apa?",it:"…"},
{who:"C",a:"قوتي: التفاوض وبناء الثقة مع الزبون. وضعفي: تركيتي بعد — أصلحه بدروس مسائية ثلاث مرات أسبوعيًا.",t:"Gücüm: pazarlık ve müşteriyle güven kurmak. Zayıfım: Türkçem henüz — akşam kurslarıyla üç günde bir düzeltiyorum.",tt:"كوتشوم پازارليق ڤيه موشتيريه كوفين قورماق زايفيم توركچم هينوز آقشام قورسلاريله أوتش كونده بير دوزيلتيوروم",i:"Kekuatan: negosiasi sama bangun kepercayaan. Kelemahan: bahasa Turki belum lancar — saya perbaiki les malam.",it:"…"},
{who:"S",a:"صادق وأحببته. الراتب المتوقع؟",t:"Dürüst sevdim. Beklenen maaşınız?",tt:"دوروست سيڤديم بكلينن ماشينيز",i:"Jujur, saya suka. Gaji yang diharapkan?",it:"…"},
{who:"C",a:"بحسب سوق إسطنبول: بين X وY — وأقدّر أن أبدأ أدنى قليلًا مع مراجعة بعد 3 أشهر إثباتًا.",t:"İstanbul piyasasına göre X ile Y arası — kanıtlayınca üç ay sonra gözden geçirilmek üzere biraz altından başlayabilirim.",tt:"إسطنبول پياساسينه كوريه إكس إله واي آراسي قانيتلاينجا أوتش آي سونرا كوزدين كيتشيريلمك أوزره بيراز آلتيندان باشلايابيليريم",i:"Standar Istanbul antara X dan Y — boleh mulai dikit di bawah, review lagi tiga bulan.",it:"…"},
{who:"S",a:"اتفاقنا مبدئيًا. سننتظر مكالمتنا خلال الأسبوع.",t:"Prensipte anlaştık. Bu hafta içinde döneriz.",tt:"برينسيپته أنلاشتق بو هافتا إيتشينده دونريز",i:"Deal awal. Minggu ini kami kabari lagi ya.",it:"…"}
],
vocab:[
["خبرة","pengalaman","پينݢالمان","tecrübe","تجروبه"],
["نقاط قوة/ضعف","kekuatan / kelemahan","ككواتن / كليماهن","güçlü/zayıf yönler","كوتشلو/زايف يونلير"],
["راتب متوقع","gaji yang diharapkan","ݢاجي ياڠ ديهاراپكان","beklenen maaş","بكلينن ماش"],
["مراجعة (الراتب)","review gaji","ريڤيو ݢاجي","maaş gözden geçirmek","ماش كوزدين كيتشيرمك"],
["بالمنتصف/مبدئيًا","—","—","prensipte","برينسيپته"],
["شركة","perusahaan","بيروساهان","firma / şirket","فيرمه / شيركت"]
],
grammar:[{t:"🇹🇷 «-le/ile» = بـ/مع — أداة الوسيلة",b:"«ilişkilerim**le**» = بعلاقاتي، «kurslar**ıyla**» = بدروسي، «müşteri**yle**» = مع الزبون. تلتصق أو تأتي منفصلة — أرقى أدوات الوسيلة التركية، ستسمعها في كل مقابلة عمل."}],
why:`<p>مقابلة ناجحة بهندسة إجابات: <b>قيمة محددة لصاحب العمل (لغتي لخطكم!) ← ضعف صادق + خطة إصلاحه ← راتب بسوق + مرونة بشرط المراجعة</b>. القاعدة الذهبية: اجعل كل إجابة تتحدث عن منفعتهم هم، لا عن سيرتك الذاتية.</p>`,
variants:[{kind:"formal",a:"شكر ختامي رسمي",t:"Değerlendirdiğiniz için teşekkür ederim, iyi günler dilerim."},{kind:"casual",a:"ختام ودود",t:"Çok teşekkürler abi, umarım birlikte çalışacağız!"}]
});

DB.situations.push({
id:"dly-campus", kind:"daily", title:"في الجامعة (إندونيسيا)", sub:"استفسار طالب: تسجيل، مكتبة، ومجموعة دراسة", context:"طالب دولي في حرم جامعي بجاكرتا. تسأل موظف الإدارة عن تسجيل الفصل ومصادر التعلم.",
chapters:["questions","time"],
turns:[
{who:"C",a:"عفوًا، متى يفتح تسجيل الفصل القادم؟",i:"Permisi, pendaftaran semester depan kapan dibuka?",it:"پرميسي بيندافتاران سيميستر ديبان كاڤان ديبوقا",t:"Affedersiniz, gelecek dönemin kayıtları ne zaman açılıyor?",tt:"أفيدرسينيز كيليجك دونمين قايتلاري نه زمان آتشيليور"},
{who:"S",a:"الأسبوع القادم عبر النظام — من الاثنين حتى الجمعة.",i:"Minggu depan lewat sistem, dari Senin sampai Jumat.",it:"مينݢو ديبان ليوات سيستم داري سينين سامپاي جومعة",t:"Gelecek hafta online, pazartesiden cumaya kadar.",tt:"كيليجك هافتا أونلاين پازارتييسيدن قوماهه قادار"},
{who:"C",a:"والمكتبة؟ هل تتاح للطلاب الدوليين مساءً؟",i:"Terus perpustakaan? Mahasiswa internasional bisa masuk malam?",it:"تيروس بربوستقائن مهاسيسوا إنترناسيونال بيسا ماسوق مالام",t:"Kütüphane nasıl? Uluslararası öğrenciler akşam girebiliyor mu?",tt:"كوتوبخانه ناسيل أولوسلاراراسي أوكريجلير آقشام كيريبيليور مو"},
{who:"S",a:"حتى التاسعة — بطاقتك الجامعية تفتح البوابات.",i:"Sampai jam sembilan malam. Kartu mahasiswanya bisa buka pintu.",it:"سامپاي جام سيمبيلان مالام قارتو مهاسيسوانيا بيسا بوكا بنتو",t:"Dokuz akşama kadar. Öğrenci kartınız kapıları açıyor.",tt:"دوقوز آقشامه قادار أوگرينجي قارتينيز قابيلاري آتشويور"},
{who:"C",a:"هل توجد مجموعات دراسة لمادة الإحصاء؟",i:"Ada kelompok belajar buat statistik nggak?",it:"ادا كيلومبوك بلاجر بوات ستاتيستيك نݢاك",t:"İstatistik için çalışma grubu var mı?",tt:"إيستاتيستيك إيتشين تشاليشما قروبو ڤار مي"},
{who:"S",a:"اسأل مكتب الطلاب (BEM) — ينظمونها كل فصل. وسيجد زملاءك بلا عناء.",i:"Tanya aja ke BEM. Mereka bikin tiap semester, gampang nemu teman.",it:"تاني أجه كه بي-إي-إم ميريقا بيكين تيiap سيميستر ݢامڤانݢ نيمو تيمان",t:"Öğrenci ofisine sorun — her dönem düzenliyorlar, arkadaş bulmak kolay.",tt:"أوگرينجي أوفيسينيه سورون"},
{who:"C",a:"أخيرًا: أنصحني بشيء واحد لنجاحي هنا؟",i:"Terakhir, satu saran biar sukses di sini?",it:"تيراخير ساتو ساران بييار سوكسيس دي سيني",t:"Son olarak, burada başarılı olmak için bir tavsiye?",tt:"سون أولاراق بوراده باشاريلي أولماق إيتشين بير تاڤسييه"},
{who:"S",a:"السؤال لا ينقص طالبًا — اسأل محاضريك وزملاءك، والشبكة هنا كل شيء.",i:"Bertanya tidak bikin bodoh. Tanya dosen sama teman-teman — di sini jaringan itu segalanya.",it:"بيرتاني تيدق بيكين بودوه تاني دوسن ساما تيمان-تيمان دي سيني چارينݢن إيتو سيݢالانيا",t:"Sormak öğrenciyi küçültmez — hocalarınıza ve arkadaşlarınıza sorun; burada network her şeydir.",tt:"سورماق أوگرينجيه كوتشولتمز"}
],
vocab:[
["فصل دراسي","semester","سيميستر","dönem","دونم"],
["تسجيل","pendaftaran / daftar ulang","بيندافتاران","kayıt","قايت"],
["مكتبة","perpustakaan","بربوستقائن","kütüphane","كوتوبخانه"],
["بطاقة جامعية","kartu mahasiswa","قارتو مهاسيسوا","öğrenci kartı","أوگرينجي قارتي"],
["مجموعة دراسة","kelompok belajar","كيلومبوك بلاجر","çalışma grubu","تشاليشما قروبو"],
["محاضر","dosen","دوسن","hoca / öğretim üyesi","هوجا"]
],
grammar:[{t:"🇮🇩 «biar» = لكي/حتى — أداة الغرض اليومية",b:"biar sukses = لكي تنجح، biar gampang = ليسهل الأمر. أداة الغرض الشعبية الأولى (الفصحى: agar). التركية: «-mak için» — başarılı olmak için = لتنجح: مصدر + لإجل."}],
why:`<p>استفسار جامعي مثمر: <b>موعد نظامي ← مرفق ووقته ← حياة اجتماعية (مجموعات) ← طلب نصيحة ختامي</b>. النصيحة الأخيرة ليست مجاملة — في جامعات إندونيسيا وتركيا الشبكة الاجتماعية نصف التخرج: مجموعات الواتساب للمواد هي القناة الحقيقية للمعلومات.</p>`,
variants:[{kind:"formal",a:"سؤال رسمي لإدارة القبول",i:"Untuk mata kuliah pilihan, apakah perlu persetujuan dosen pembimbing?"},{kind:"casual",a:"مع طالب زميل عفوي",i:"Bro, statistik susah ya? Bareng belajar dong nanti!"}]
});

DB.situations.push({
id:"dly-apartment", kind:"daily", title:"إيجار شقة (تركيا)", sub:"معاينة، سعر، عقد وديعة — بلا مفاجآت", context:"تريد استئجار شقة صغيرة بحي عائلي بإسطنبول. المعلم (صاحب الشقة) يعرضها عليك.",
chapters:["wholesale","prices"],
turns:[
{who:"S",a:"تفضل، الشقة طابق ثالث، جنوبية الإطلالة.",t:"Buyurun, üçüncü kat, cephe güney.",tt:"بويورون أوتشونجي قات جبهه كونيه",i:"Silakan, lantai tiga, arah selatan.",it:"سيلاكان لنتاي تيݢا أراه سلتن"},
{who:"C",a:"جميلة. السخان والمطبخ؟ والفاتورة الشهرية تقريبًا؟",t:"Güzel. Kombi ve mutfak? Aidat ve faturalar ne civarı?",tt:"كوزيل قومبي ڤيه مطفاق آيدات ڤيه فاتورالار نه تشيڤاري",i:"Bagus. Pemanas sama dapur? Iuran bulanan kira-kira berapa?",it:"باغوس بيماناس ساما دابور"},
{who:"S",a:"سخان طبيعي، مطبخ مجهز. الديعة شهران، والإيجار شهريًا 15 ألفًا.",t:"Doğalgaz kombi, eşyalı mutfak. Depozito iki kira, aylık on beş bin.",tt:"دوݢالݢاز قومبي أشيالي مطفاق ديبوزيتو إيكي قيرا آيليق أون بش بين",i:"Pemanas gas, dapur lengkap. Deposit dua bulan, sewa lima belas juta.",it:"…"},
{who:"C",a:"ممكن خصمًا لتعاقد سنتين؟ أنا مستقر عملًا.",t:"İki yıllık sözleşmeye indirim olur mu? İşim stabil.",tt:"إيكي ييليق سوزليشميه إنديريم أولور مو إيشيم صتابيل",i:"Kalau kontrak dua tahun bisa turun? Kerja saya tetap.",it:"…"},
{who:"S",a:"ل سنتين: 14.5 والصيانة البسيطة عليّ.",t:"İki yıla: on dört bin beş yüz, küçük bakımlar benden.",tt:"إيكي ييلا أون دورت بين بش يوز كوتشوك بقيملار بيدن",i:"Kalau dua tahun jadi empat belas setengah, perbaikan kecil saya tanggung.",it:"…"},
{who:"C",a:"جيد. أشترط بالعقد: فاتورة كاملة شهريًا وجرد عدّات موثق.",t:"Makul. Sözleşmeye not düşelim: düzenli fatura ve sayımlı envanter.",tt:"ماقول سوزليشميه نوت دوشيليم دوزينلي فاتورا ڤيه صايملي إنڤانتير",i:"Oke. Di kontrak dicatat: struk rutin sama inventaris lengkap.",it:"…"},
{who:"S",a:"عادل. أحضر مترجمًا للعقد أو أنسخه لك عربيًا.",t:"Adil. Sözleşmeye tercüman getirin ya da size Arapça kopyasını vereyim.",tt:"أديل سوزليشميه ترتچومان كيتيرين يا دا سيزه أرابتشا قوپياسيني فييريم",i:"Adil. Bawa penerjemah buat kontrak, atau saya kasih salinan bahasa Arab.",it:"…"},
{who:"C",a:"متفقون! أول الشهر القادم التسليم. كتبتَ بركة!",t:"Anlaştık! Gelecek ay başında teslim. Hayırlı olsun bize!",tt:"أنلاشتق كيليجك آي باشيندا تسليم هايرلي أولسون بيزيه",i:"Deal! Awal bulan depan serah terima. Semoga berkah ya Pak!",it:"…"}
],
vocab:[
["إطلالة/واجهة","arah / view","أراه","cephe","جبهه"],
["سخان مياه/تدفئة","pemanas (air)","بيماناس","kombi / doğalgaz","قومبي/دوݢالݢاز"],
["رسوم صيانة شهرية","iuran bulanan","إيوران بولنان","aidat","آيدات"],
["وديعة (تأمين)","deposit","ديبوسيت","depozito","ديبوزيتو"],
["عقد إيجار","kontrak sewa","كونترق سوا","kira sözleşmesi","قيرا سوزليشمسي"],
["جرد/حصر","inventaris","إنڤنتاريس","envanter / sayım","إنڤانتير"]
],
grammar:[{t:"🇹🇷 «benden / bana» = من عندي / لي",b:"küçük bakımlar **benden** = الصيانة الصغيرة من عندي (ben أنا + den من). «bu da benden» = وهذه من عندي (هدية). ثنائية الملكية والمصدر التي رأيتها في المساومة تعود هنا بثوب رسمي."}],
why:`<p>عقد إيجار محترف: <b>تشغيل وتكاليف ← إيداع وإيجار واضحان ← خصم مقابل مدة (نفس منطق الجملة!) ← شرطان مكتوبان: فواتير وجرد ← تسليم بموعد</b>. القاعدة الذهبية: كل ما لم يُكتب لم يُقل — وعرض الترجمة العربية للعقد إشارة مالك جدير بالثقة.</p>`,
variants:[{kind:"formal",a:"عبر وسيط عقاري",t:"Emlak komisyonu kim ödüyor, depozito iade şartları neler?"},{kind:"casual",a:"مع مالك عفوي",t:"Abi son fiyatını söyle, iki yıla beraber oturalım, hayırlı olsun."}]
});

DB.situations.push({
id:"dly-carrental", kind:"daily", title:"تأجير سيارة (إندونيسيا)", sub:"فحص السيارة، التأمين، والبنود الخفية", context:"تريد استئجار سيارة ليومين لجولة عمل خارج جاكرتا. المكتب صغير والأسعار تتفاوض.",
chapters:["wholesale","prices"],
turns:[
{who:"C",a:"كم يوميًا لسيارة أوتوماتيك؟ وبأي شروط؟",i:"Per hari berapa untuk yang matic? Syaratnya gimana?",it:"بر هاري براپا أونتوق ياڠ ماتيك سيرتنيا كيمانا",t:"Otomatik günlüğü kaç? Şartlar nasıl?",tt:"أوتوماتيك كونلوكو كاتش شارتلار ناسيل"},
{who:"S",a:"350 ألفًا اليومي، بنزين عليك. رخصة وجواز فقط.",i:"Tiga ratus lima puluh per hari, bensin di luar. SIM sama paspor aja.",it:"تيݢا راتوس ليما پولوه بر هاري بينزين دي لوور سيم ساما پاسور أجا",t:"Günlük üç yüz elli, benzin hariç. Sadece ehliyet ve pasaport.",tt:"كونلوك أوتش يوز إيلي بينزين هاريچ صادجه إهلييت ڤيه پاساپورت"},
{who:"C",a:"أفحص السيارة أولًا — أصدّق الخدوش بعدو معك.",i:"Boleh cek dulu? Luka sama baretnya saya foto bareng kakak.",it:"بوليه تشيك دولو لوقا ساما باريتنيا سايا فوتو بارينݢ كاكاك",t:"Aracı kontrol edeyim — çizikleri sizinle fotoğraflayayım.",tt:"آراتشي كونترول إدييم تشيزكلري سيزينله فوتوݢرافلايام"},
{who:"S",a:"عين ملاحظة! خذ وقتك — الشفافية راحتك.",i:"Wah bagus, teliti! Santai aja, transparan itu enak.",it:"واه باغوس تيليتي سانتاي أجا ترانسبارن إيتو إيناك",t:"Dikkatiniz güzel! Acele etmeyin, şeffaflık konfor demektir.",tt:"ديكاتينيز كوزيل أجهله إتميين شفافليق قونفور ديميكتير"},
{who:"C",a:"والتأمين؟ إن وقع حادث ماذا أشمل؟",i:"Kalau kecelakaan gimana? Asuransinya cover apa aja?",it:"كالاو كيتشيلقائن كيمانا أسورانسينيا قوڤير أبا أجا",t:"Kaza olursa? Sigorta neyi kapsıyor?",tt:"قازه أولورسا سيݢورتا نه يي قابسويور"},
{who:"S",a:"تأمين شامل بخصم 500 ألف عند الحادث. الصوارئ مجانية.",i:"Asuransi all risk, tapi kalau kejadian deductible lima ratus. Ban sama kaca sendiri.",it:"أسورانسي أول ريسك تاڤي كالاو كيجاديأن ديديكتور ليما راتوس بان ساما قاتشا سنديري",t:"Kasko var, hasarda eks payı beş yüz bin. Lastik ve cam dahil değil.",tt:"قاسقو ڤار هاصده إكس پايي بش يوز بين لاستيك ڤيه قام داهيل ديكيل"},
{who:"C",a:"واضح وصادق. يومان بـ650 — اتفقنا؟",i:"Jelas dan jujur. Dua hari enam ratus lima puluh — deal?",it:"جيلاس دان جوجور دوا هاري إينام راتوس ليما پولوه ديل",t:"Açık ve dürüst. İki gün altı yüz elli — anlaştık mı?",tt:"آتشيك ڤيه دوروست إيكي كون ألتي يوز إيلي أنلاشتق مي"},
{who:"S",a:"اتفقنا! خريطة الطريق هدية — وسائق بلا عبء لاحقًا.",i:"Deal! Map gratis, kalau mau sewa besok tanpa driver lagi.",it:"ديل ماب كراتيس كالاو ماو سوا بيسوك تانڤا درايڤير لاݢي",t:"Anlaştık! Hediye yol haritası — şoförsüz de gelirsiniz.",tt:"أنلاشتق هيدييه يول هاريتاسي شوفورسوز د كيليرسينيز"}
],
vocab:[
["أوتوماتيك","matic","ماتيك","otomatik vites","أوتوماتيك ڤيتيس"],
["خدش/صدمة خفيفة","baret / luka","باريت / لوقا","çizik / hasar","تشيزيك / هاصار"],
["تأمين شامل","asuransi all risk","أسورانسي أول ريسك","kasko","قاسقو"],
["خصم عند الحادث (مبلغ)","deductible","ديدوكتيبل","eks payı","إكس پايي"],
["رخصة قيادة","SIM","سيم","ehliyet","إهلييت"],
["شفافية","transparan","ترانسباران","şeffaflık","شيفافليق"]
],
grammar:[{t:"🇮🇩 «di luar / di dalam» = خارج/داخل السعر",b:"bensin di luar = البنزين خارج السعر (عليك)، di dalam = شامل. ثنائية التسعير اليومية في كل خدمات التأجير والفعاليات. اسأل دائمًا: «Yang di luar apa aja?» = ما الذي خارج السعر؟"}],
why:`<p>إيجار سيارة آمن بأربع نقط: <b>سعر + مستثنيات مذكورة ← توثيق حالة السيارة بالصور مع المالك ← تأمين وحدوده بصدق ← تسوية نهائية مكتوبة</b>. تصوير الخدوش معًا (bareng) أذكى حماية قانونية للطرفين — والبائع الشفاف يستحق ثقتك وسوقك الدائم.</p>`,
variants:[{kind:"formal",a:"طلب عقد مكتوب رسمي",i:"Boleh dibuat surat perjanjian sewa dua hari ini?"},{kind:"casual",a:"مع مكتب صغير مازح",i:"Bang, bensin-full balikin, saya bensin-full ambil — adil kan?"}]
});

DB.situations.push({
id:"dly-online", kind:"daily", title:"مشكلة طلب أونلاين (إندونيسيا)", sub:"بضاعة ناقصة — استرداد بديل بأدب حازم", context:"وصل طلبك من متجر إلكتروني (Shopee/Tokopedia) ناقصًا قطعة. تتواصل مع البائع عبر محادثة المنصة.",
chapters:["messaging","complaints"],
turns:[
{who:"C",a:"أهلًا. طلبي وصل ناقصًا — العلبة فيها قطعة واحدة بدل اثنتين.",i:"Halo kak. Pesanan saya kurang — di kotak cuma satu, yang saya pesan dua.",it:"هالو كاك بيسانان سايا كورانݢ دي قوتق تيوما ساتو ياڠ سايا بيسان دوا",t:"Merhaba, siparişim eksik geldi — kutuda bir tane var, iki sipariş vermiştim.",tt:"مرحبا سيپاريشيم إكسك كيلدي قوتوده بير تانه ڤار إيكي سيپاريش فيرمشتيم"},
{who:"S",a:"آسف جدًا! أرسل صورة العلبة والملصق.",i:"Maaf banget kak! Foto kotak sama labelnya kirim ya.",it:"ماؤف بانݢينݢ كاك فوتو قوتق ساما لابيلنيا كيريم يا",t:"Çok özür dileriz! Kutu ve etiketin fotoğrafını atın.",tt:"تشوك أوزور ديليريز قوتو ڤيه إتيكيتين فوتوݢرافيني آتين"},
{who:"C",a:"أرسلت الصور مع رقم الطلب. ما الحل عندك؟",i:"Sudah saya kirim beserta nomor pesanan. Solusinya gimana kak?",it:"سوداه سايا كيريم بيسرتا نومور بيسانان صولوسينيا كيمانا كاك",t:"Foto ve sipariş numarası gitti. Çözümünüz ne?",tt:"فوتو ڤيه سيپاريش نوماراسي كيتي تشوزومونوز نه"},
{who:"S",a:"خياران: أرسل القطعة اليوم بسرعة، أو استرد كاملًا.",i:"Dua pilihan: hari ini saya kirim yang kurang pakai kilat, atau uang kembali semua.",it:"دوا بيليهان هاري إيني سايا كيريم ياڠ كورانݢ پاكاي كيلات أتاو أوڠ كمبالي سموا",t:"İki seçenek: eksik parçayı bugün hızlı kargoyla yollayalım ya da tam iade.",tt:"إيكي سيتشينيك إكسك پارتشائيي بوكون هيزلي قارݢويلا يوللاياليم يا دا تام آييدي"},
{who:"C",a:"أرسلها اليوم — وأرجو تعويض شحن أي تعثر. عادل؟",i:"Kirim hari ini ya. Kalau telat, ongkir dikompensasi — adil kan?",it:"كيريم هاري إيني يا كالاو تيلات أونݢكير ديكومبينسي أديل قان",t:"Bugün gönderin, gecikirse kargo bedeli компensasyon — adil mi?",tt:"بوكون كونديرين كيكيكسه قارݢو بيديلي补偿"},
{who:"S",a:"عادل تمامًا — سأتابع الشحنة حتى بابك.",i:"Adil banget. Saya pantau kirimannya sampai depan pintu kak.",it:"أديل بانݢينݢ سايا پانتاو كيريمانيا سامپاي ديبان بنتو كاك",t:"Kesinlikle adil — kargonuzu kapınıza kadar takip edeceğim.",tt:"كسينليكله أديل قارجونوزو قابينيزه قادار تقيف إديجييم"},
{who:"C",a:"شكرًا لسرعة تجاوبك — سأقيّمك خمسًا عند الوصول.",i:"Makasih responnya cepat kak. Bintang lima kalau sampai!",it:"ماكاسيه ريسپوننيا تشيڤات قاك بنتنݢ ليما كالاو سامپاي",t:"Hızlı dönüşünüz için teşekkürler — ulaşınca beş yıldız.",tt:"هيزلي دونوشونوز إيتشين تشيكورلر أولاشينجا بش ييلديز"}
],
vocab:[
["طلب (أونلاين)","pesanan","بيسانان","sipariş","سيپاريش"],
["ناقص","kurang / tidak lengkap","كورانݢ / تيدق لنݢكاپ","eksik","إكسك"],
["ملصق الشحن","label","لابيل","kargo etiketi","قارݢو إتيكيتي"],
["خيارات","pilihan","بيليهان","seçenek","سيتشينيك"],
["شحن سريع","kirim kilat","كيريم كيلات","hızlı kargo","هيزلي قارݢو"],
["تعويض","kompensasi","كومبينيسي","tazminat / telafi","تظمينات"]
],
grammar:[{t:"🇮🇩 «beserta / pakai» الربط والأداة",b:"beserta = مصحوبًا بـ (dengan الرسمية)، pakai = بـ/باستخدام (اليومية). «kirim pakai kilat» = أرسل بالشحن السريع — pakai أداة الوسيلة الشعبية الأولى بعد في الشات التجاري."}],
why:`<p>شكوى أونلاين تُغلق بسعرتين: <b>دليل فوري (صور+رقم) ← خياران والقرار للمشتري ← شرط تعويض عند التعثر ← تقييم مشروط يشجع الأداء</b>. لاحظ التقييم المشروط «بنتنݢ ليما كالاو سامپاي» — حافز أخلاقي أقوى من الغضب في منصات التقييم.</p>`,
variants:[{kind:"formal",a:"تذاكر رسمية عبر المنصة",i:"Saya buka tiket reklamo di aplikasi ya kak, biar tercatat resmi."},{kind:"casual",a:"محادثة صريحة سريعة",i:"Kak jujur aja, ini salah packing kan? Hehe, gas kirim ulang ya!"}]
});

DB.situations.push({
id:"dly-invite", kind:"daily", title:"دعوة عشاء واعتذار (إندونيسيا)", sub:"ادعُ وقبِل واعتذر بذوق — فن الضيافة", context:"جارك الإندونيسي دعاك لعشاء عائلي. تريد قبول الدعوة، وتحتاج أيضًا الاعتذار عن دعوة مقابلة لأصدقاء في وقت متقارب.",
chapters:["feelings","messaging"],
turns:[
{who:"S",a:"أخي أحمد! غدًا مساءً عشاء عائلي بسيط عندنا — نشرّف بك.",i:"Mas Ahmed! Besok malam makan malam keluarga di rumah, sederhana aja. Meri bersama!",it:"ماس أحمد بيسوك مالام ماكان مالام كيلوارݢا دي رومه سيمپل أجا مري برساما",t:"Ahmed kardeşim! Yarın akşam evimizde sade bir aile yemeği — şeref verirsin.",tt:"أحمد كارديشيم يارين آقشام إڤيميزده صاده بير آيله ييميئي شريف فييرسين"},
{who:"C",a:"يشرفني! أحضر معي حلوى عربية — أصلها من بلادي.",i:"Dengan senang hati! Saya bawa kue Arab, dari kampung sendiri.",it:"دنݢان سيننݢ هاتي سايا باوا كويه عرب داري كامڤوڠ سنديري",t:"Memnuniyetle! Yanına Arap tatlısı alırım, memleketimden.",tt:"ممنونيتله يانينا أراب طاتليسي آليريم مملكتيمدن"},
{who:"S",a:"لا تتكلف! يكفي حضورك — هذا أجمل هدية.",i:"Jangan repot-repot! Yang penting dateng — itu sudah hadiah.",it:"جانڠ ريڤوت-ريڤوت ياڠ بنتينݢ داتنݢ إيتو سوداه هاديه",t:"Yorulma diye! Gelmeniz yeter — en güzel hediye bu.",tt:"يورولما ديه كيلمينيز ييتر ين كوزيل هيدييه بو"},
{who:"C",a:"عاداتنا: لا نأتي بيدٍ فارغة أبدًا — اسمح لي.",i:"Tradisi kami: nggak pernah datang tangan kosong. Maklumin ya.",it:"تراديسي كامي نݢاك برنه داتنݢ تانݢان قوسوڠ مقلوين يا",t:"Adetimiz: asla el boş gelmeyiz. Müsaadenizle.",tt:"أديتيميز أسلا إل بوش كيلمييز موسادينيزله"},
{who:"S",a:"بارك الله فيك! الساعة 7 مساءً، مع أسرتك الصغيرة.",i:"Amin! Jam tujuh malam ya, bawa keluarga kecil sekalian.",it:"أمين جام توجوه مالام يا باوا كيلوارݢا كيتشيل سيكاليان",t:"Amin! Saat yedide, küçük ailenizle beraber.",tt:"أمين ساعات ييديده كوتشوك آيلينيزله بربر",n:"«bawa keluarga sekalian» — الدعوة تشمل العائلة تلقائيًا في الثقافتين؛ الحضور فرديًا لأول مرة مقبول لكن اسأل."},
{who:"C",a:"سؤال أخير: أصدقائي دعوني غدًا أيضًا بعد العصر — أعتذر منهم بحضورك. أعذرني؟",i:"Satu lagi: teman-teman ngajak besok sore juga. Saya tolak pelan-pelan karena ke kakak. Boleh kan?",it:"ساتو لاݢي تيمان-تيمان نݢاچاك بيسوك سوري يوݢا سايا تولق پيلان-پيلان قارينا كه كاكاك بوليه قان",t:"Bir şey daha: arkadaşlarım da yarın davet etti. Sizin için nazikçe reddettim — sorun değil dimi?",tt:"بير شيه داها أركاداشلريم دا يارين داڤيت إتتي سيزين إيتشين نازيكچه ريدتيم سورون ديكيل ديمي"},
{who:"S",a:"تشرف الأولوية لي — وأصدقاؤك مدعوون معك للمرة القادمة!",i:"Kakak duluan ya! Lain kali ajak teman-temannya sekalian, saya senang.",it:"كاكاك دولوان يا لاين قالي أجاك تيمان-تيمانيا سيكاليان سايا سننݢ",t:"Öncelik bana ait! Başka sefere arkadaşlarınızı da getirin, sevinirim.",tt:"أونجليق باناه آييت باشقه سيفيره أركاداشلرينيزي ده كيتيرين سيڤينيريم"}
],
vocab:[
["يشرفني","dengan senang hati","دنݢان سيننݢ هاتي","memnuniyetle","ممنونيتله"],
["حلوى/معمول","kue / jajanan","كويه / چاچانن","tatlı","طاتلي"],
["لا تتكلف","jangan repot-repot","جانڠ ريڤوت-ريڤوت","yorulma diye","يورولما ديه"],
["بيد فارغة","tangan kosong","تانݢان قوسوڠ","el boş","إل بوش"],
["يأذن/يسمح","mengizinkan / boleh","مينݢيزينكان / بوليه","müsaade etmek","موساده إتمك"],
["يحضر (مناسب)","hadir","هادير","gelmek / katılmak","كيلمك / قاتيلماق"]
],
grammar:[{t:"🇮🇩 «pelan-pelan» للتلطيف حتى في الرفض",b:"«tolak pelan-pelan» = أرفض برفق — حتى الرفض يُلطف بالتكرار! مثل: «bilang pelan-pelan» قلها برفق. ثقافة إندونيسية صافية: الرفض المباشر الصريح يج rough؛ الصيغة اللينة تحفظ الوجهين. بالتركية: «nazikçe reddettim» (رفضتُ بلطف) — نفس الوظيفة."}],
why:`<p>فن الضيافة ثنائي اللغة: <b>قبول فوري + حمل هدية رغم الاعتذار عنها (عاداتنا!) ← تأكيد موعد وشمول العائلة ← ترتيب أولويات صريح باعتذار مهذب من الطرف الآخر</b>. «لا نأتي بيدين فارغتين» قاعدة عربية-إسلامية تفهمها إندونيسيا وتركيا تمامًا — والتنسيق الصريح بين دعوتين يقيك حرجين معًا.</p>`,
variants:[{kind:"formal",a:"اعتذار رسمي عن دعوة",i:"Mohon maaf sebesar-besarnya, keesokan harinya ada keperluan keluarga."},{kind:"casual",a:"مزاح بين أصدقاء مقربين",i:"Waduh bentrok nih! Gimana kalau dua-duanya, makan dua kali? Haha!"}]
});
