/* ===== قصص متدرجة أصلية: قراءة + استماع (بسرعتين) + مفردات + أسئلة فهم ===== */
"use strict";
window.DB = window.DB || {};
window.DB.stories = window.DB.stories || [];

DB.stories.push({
id:"sto-1", lang:"id", level:"A1", title:"صباح في السوق (Pagi di Pasar)",
intro:"قصة قصيرة جدًا للمبتدئ — جمل بسيطة بزمن الحاضر.",
text:"Pagi-pagi Ibu Ahmad pergi ke pasar. Dia mau beli sayur dan ikan. Di pasar ramai sekali. Penjual pertama berkata: \"Silakan, Bu, sayurnya segar!\" Ibu Ahmad bertanya: \"Ikan ini berapa?\" \"Lima puluh ribu, Bu.\" \"Mahal! Empat puluh ya?\" Penjual tersenyum: \"Ya sudah, empat puluh lima.\" Ibu Ahmad senang. Dia pulang dengan ikan dan sayur banyak.",
textAr:"في الصباح الباكر تذهب أم أحمد إلى السوق. تريد شراء خضار وسمك. السوق مزدحم جدًا. البائع الأول يقول: «تفضلي سيدتي، خضارنا طازجة!» تسأل أم أحمد: «هذا السمك بكم؟» «خمسين ألفًا سيدتي.» «غالي! أربعين؟» يبتسم البائع: «حسنًا، خمسة وأربعين.» فرحت أم أحمد وعادت بسمكٍ وخضارٍ كثيرة.",
vocab:[
["يذهب إلى","pergi ke","ڤيرݢي كه","-e gitmek","-يه كيتمك"],
["يشتري","beli","بيلي","almak","آلمق"],
["خضار / سمك","sayur / ikan","سايور / إيكان","sebze / balık","سيبزه / باليق"],
["بائع","penjual","بينجوال","satıcı","ساتيجي"],
["طازج","segar","سيݢار","taze","تازه"],
["يبتسم","tersenyum","ترسينيوم","gülümsemek","كولومسمك"],
["يعود للبيت","pulang","پولانݢ","eve dönmek","إييڤه دونمك"]
],
qs:[
{q:"ماذا أرادت أم أحمد أن تشتري؟", opts:["ملابس جديدة","خضار وسمك","فاكهة فقط"], ok:1},
{q:"كيف ختمت المساومة؟", opts:["اشترت بأربعين","خرجت غاضبة","اشترت بخمسة وأربعين"], ok:2},
{q:"ماذا يعني «ramai sekali»؟", opts:["مزدحم جدًا","هادئ جدًا","رخيص جدًا"], ok:0}
]});

DB.stories.push({
id:"sto-2", lang:"id", level:"A2", title:"زبون جديد (Langganan Baru)",
intro:"قصة أطول بزمن الماضي (sudah) — بائع صادق يبني زبونًا دائمًا.",
text:"Pak Rahman punya toko kecil di kampung. Suatu hari masuk pemuda baru. Dia cuma melihat-lihat. Pak Rahman tidak memaksa. Dia berkata: \"Pelan-pelan saja, kak. Lihat dulu.\" Pemuda itu senang hati. Dia bertanya tentang sepatu hitam. \"Yang ini kualitas bagus, tapi yang itu lebih murah,\" jelas Pak Rahman jujur. Pemuda itu kagum. \"Bapak jujur sekali.\" Akhirnya dia beli sepatu bagus itu. Sejak hari itu, dia jadi langganan. Dia juga mengajak teman-temannya. Toko Pak Rahman makin laris.",
textAr:"يمتلك الرحمن دكانًا صغيرًا في الحي. يومًا دخل شاب جديد كان يتفرج فقط. لم يضغط عليه الرحمن، وقال: «على مهلك، تفرج أولًا.» ارتاح قلب الشاب وسأل عن حذاء أسود. «هذا جودته عالية وذلك أرخص،» شرح الرحمن بصدق. انبهر الشاب: «أنت صادق جدًا يا عمي!» أخيرًا اشترى الحذاء الجيد، وصار منذ ذلك اليوم زبونًا دائمًا، وجلب أصدقاءه معه، وصار دكان الرحمن أكثر رواجًا.",
vocab:[
["يمتلك","punya","پونيا","sahip olmak","صاحيب أولمق"],
["يتفرج فقط","cuma melihat-lihat","توما ميليهات-ليهات","sadece bakınıyor","صادجه باكينيور"],
["يضغط/يجبر","memaksa","ميماكسا","zorlamak","زورلامق"],
["يشرح","menjelaskan","منجلاسكان","açıklamak","آتشيكلامق"],
["صادق / منبهر","jujur / kagum","جوجور / كاݢوم","dürüst / hayran","دوروست / حيرأن"],
["منذ ذلك اليوم","sejak hari itu","سياك هاري إيتو","o günden beri","أو كوندن بيري"],
["زبون دائم","langganan","لانݢانان","müdavim","موداڤيم"],
["رائج","laris","لاريس","rağbet görmek","رغبت كورمك"]
],
qs:[
{q:"لماذا لم يضغط الرحمن على الشاب؟", opts:["لأنه مشغول","لأنه يفهم البيع الصادق","لأن الشاب فقير"], ok:1},
{q:"ماذا فعل الشاب في النهاية؟", opts:["خرج بلا شراء","اشترى الأرخص","اشترى الجيد وصار زبونًا دائمًا"], ok:2},
{q:"«Sejak hari itu» تعني:", opts:["في ذلك اليوم","منذ ذلك اليوم","قبل ذلك اليوم"], ok:1}
]});

DB.stories.push({
id:"sto-3", lang:"tr", level:"A1", title:"دكان العم (Bakkal Amca)",
intro:"جمل قصيرة بزمن الحاضر — يوم في دكان حي تركي.",
text:"Amca'nın bakkalı sabah erken açılır. Mahalleden insanlar gelir. \"Günaydın Amca!\" \"Günaydın komşum, hoş geldin!\" Ekmek, süt ve çay en çok satılan şeyler. Bir çocuk pencereye yaklaşır. \"Amca, bir sakız alabilir miyim?\" \"Tabii oğlum, al bakalım.\" Amca herkese güler yüzle bakar. Akşam dükkân kapanır. Amca tezgâhı siler. \"Yarın yine bekleriz,\" der.",
textAr:"يُفتح دكان العم مبكرًا صباحًا، ويأتي أهل الحي: «صباح الخير يا عم!» «صباح الخير يا جاري، أهلًا بك!» الخبز والحليب والشاي أكثر الأشياء مبيعًا. يقترب طفل من الشباك: «يا عمي، أستطيع أن آخذ علكة؟» «طبعًا يا بني، خذ.» ينظر العم للجميع بوجه بشوش. في المساء يُغلق الدكان ويمسح العم الطاولة قائلًا: «غدًا ننتظركم من جديد.»",
vocab:[
["دكان بقالة","bakkal","باققال (عربية الأصل!)","—","—"],
["الحي","mahalle","محله (عربية الأصل!)","—","—"],
["الأكثر مبيعًا","en çok satılan","ين تشوك ساتيلان","—","—"],
["يقترب / طفل","yaklaşır / çocuk","يقلاشير / تشوجوق","—","—"],
["بوجه بشوش","güler yüzle","كولير يوزله","—","—"],
["يمسح الطاولة","tezgâhı siler","تزّاهي سيلير","—","—"],
["غدًا ننتظركم","yarın yine bekleriz","يارين يينيه بيكليغيز","—","—"]
],
qs:[
{q:"ما أكثر الأشياء مبيعًا في الدكان؟", opts:["الخبز والحليب والشاي","الحلويات","الجرايد"], ok:0},
{q:"ماذا طلب الطفل؟", opts:["حليبًا","علكة","خبزًا"], ok:1},
{q:"ماذا يقول العم عند الإغلاق؟", opts:["«الحمد لله انتهى اليوم»","«غدًا ننتظركم»","«الدكان مغلق للأبد»"], ok:1}
]});

DB.stories.push({
id:"sto-5", lang:"id", level:"B1", title:"سوق الليل (Pasar Malam)",
intro:"نص أطول بتراكيب مركبة — ليلة عمل في سوق ليلي بجاكرتا.",
text:"Pasar malam baru saja buka. Lampu-lampu kecil menghiasi kios-kios. Pak Hasan menata buahnya dengan rapi. Di sebelahnya, mbak Rina menjual gorengan yang aromanya membuat semua orang lapar. Pelanggan pertama adalah ibu-ibu yang habis kerja. \"Bang, jeruk mana yang manis?\" tanya salah satunya. \"Semua manis, Bu. Tapi kalau mau yang paling, ambil yang ini. Coba dulu boleh,\" jawab Pak Hasan sambil tersenyum. Ibu itu mencoba, mengangguk, lalu membeli dua kilo. Semalaman Pak Hasan berjualan. Lelah, tapi hatinya senang. Rezeki malam itu cukup untuk sekolah anaknya.",
textAr:"السوق الليلي افتتح للتو. أضواء صغيرة تزين الأكشاك. يرتب حسن فاكهته بعناية. وبجانبه تبيع رينا المقليات التي تجعل الجميع جائعًا من رائحتها. الزبائن الأوائل أمهات خرجن من العمل. «يا عمّ، أي البرتقال حلو؟» سألت إحداهن. «كله حلو يا سيدتي، لكن إن أردت الأحلى فخذ هذا — ذوق أولًا يجوز،» أجاب حسن مبتسمًا. ذاقت السيدة وأومأت ثم اشترت كيلوين. باع حسن طوال الليل. تعب لكن قلبه سعيد: رزق تلك الليلة كفى مدرسة ابنه.",
vocab:[["يزين","menghiasi","منݢهياسي"],["يرتب","menata","مناتا"],["أكشاك","kios-kios","قيوس-قيوس"],["زبائن","pelanggan","پلانݢان"],["يدير رأسه موافقًا","mengangguk","منݢانݢوق"],["تعب","lelah","ليله"],["رزق","rezeki","ريزيقي"]],
qs:[
{q:"كيف تعامل حسن مع سؤال «أيها أحلى؟»", opts:["قال كله سواء","عرض التذوق واقترح الأفضل","رفض الإجابة"], ok:1},
{q:"لماذا كان قلب حسن سعيدًا رغم التعب؟", opts:["أغلق مبكرًا","رزق الليلة كفى مدرسة ابنه","باع أكشاكه"], ok:1},
{q:"«menghiasi» تعني:", opts:["تزين","تشتري","تنظف"], ok:0}
]});

DB.stories.push({
id:"sto-6", lang:"tr", level:"B1", title:"بائع البازار (Pazarcı Hasan)",
intro:"ماضٍ وسماعي (-miş) وشرط — يوم كامل لبائع في بازار إسطنبولي.",
text:"Hasan Usta sabah beşte kalkmış; çünkü pazar günüymüş. Tezgâhını kurmuş, domatesleri dizerken ilk müşteri gelmiş. \"Abi, domatesler yerli mi?\" \"Yerli, Antalya'dan bu sabam geldi. Tatlı tatlı, ekmek arası ye!\" Müşteri gülümsemiş, iki kilo almış. Öğlene doğru fiyatlar düşmüş; çünkü akşamüstü mal bitmek istiyormuş. Hasan Usta seslenmiş: \"Son fiyat! Kalanlar gitsin, yarın taze gelsin!\" Bir kadın yaklaşmış: \"İki kilo alsam indirim olur mu?\" \"Olur mu olmaz mı — üç kilo alırsan olur!\" diye gülmüş. Akşam tezgâh boşalmış. Hasan Usta çayını yudumlarken düşünmüş: \"Yorulduk ama bereket var.\" Ertesi hafta aynı kadın yine gelmiş, bu sefer komşusunu da getirmiş.",
textAr:"يُقال إن حسن أوستا استيقظ الخامسة فجرًا؛ لأن اليوم يوم سوق. نصب طاولته ورتب الطماطم فجاء أول زبون: «يا أخي، طماطمكم محلية؟» «محلية، جاءت من أنطاليا هذا الصباح — حلوة حلوة، كُلها بالخبز!» ابتسم الزبون وأخذ كيلوين. قرب الظهر هبطت الأسعار؛ لأن البضاعة كانت تريد النفاد قبل العصر. نادى حسن: «آخر سعر! ليذهب الباقي ويأتي الطازج غدًا!» اقتربت سيدة: «لو أخذت كيلوين ينفع خصم؟» ضاحكًا: «ينفع ولا لا — لو أخذت ثلاثة ينفع!» المساء: خلت الطاولة، وارتشف حسن شايه مفكرًا: «تعبنا لكن فيها بركة.» الأسبوع التالي عادت السيدة نفسها، وجاءت هذه المرة بجارتها أيضًا.",
vocab:[["نصب طاولته","tezgâhını kurmuş","تزّاهيني قورمش"],["محلي","yerli","يرلي"],["خفض السعر","fiyat düşmüş","ليات دوشموش"],["ينفد","bitmek istiyormuş","بيتمك إستيورموش"],["ارتشف","yudumlamak","يودوملامق"],["بركة","bereket","بركت"]],
qs:[
{q:"لماذا خفض حسن الأسعار قرب الظهر؟", opts:["البضاعة كانت ستنفد قبل العصر","الزبون غاضب","الطماطم فسدت"], ok:0},
{q:"ماذا فعلت السيدة في الأسبوع التالي؟", opts:["لم تعد","عادت وجاءت بجارتها","اشتكت منه"], ok:1},
{q:"«bereket var» تعني:", opts:["فيها خسارة","فيها بركة","فيها زحمة"], ok:1}
]});

DB.stories.push({
id:"sto-4", lang:"tr", level:"A2", title:"السائح التائه (Kaybolan Turist)",
intro:"قصة بالماضي التركي — لقاء إنساني في إسطنبول.",
text:"Dün akşam bir turist sokakta durdu. Kaybolmuştu. Elinde bir harita vardı. Bakkaldaki Amca ona seslendi: \"Hoş geldiniz! Bir sorun mu var?\" Turist üzgün cevap verdi: \"Otelimi bulamıyorum.\" Amca haritaya baktı. \"Oteliniz çok yakın. Şu sokaktan düz gidin, sonra sola dönün. Beş dakika sürer.\" Turist çok mutlu oldu. \"Çok teşekkür ederim!\" \"Rica ederim. İyi tatiller!\" Ertesi gün turist yine geldi. Amcaya çikolata hediye etti. Artık her sabah \"Günaydın Amca!\" der.",
textAr:"أمس مساءً وقف سائح في الشارع وقد ضلّ الطريق، وفي يده خريطة. ناداه العم من الدكان: «أهلًا بك! هل من مشكلة؟» أجاب السائح حزينًا: «لا أجد فندقي.» نظر العم إلى الخريطة: «فندقك قريب جدًا. امشِ مستقيمًا من ذلك الزقاق ثم استدر يسارًا — خمس دقائق.» فرح السائح: «شكرًا جزيلًا!» «العفو، إجازة سعيدة!» في اليوم التالي عاد السائح وأهدى العم شوكولاتة، ومنذها يقول كل صباح: «صباح الخير يا عمي!»",
vocab:[
["ضلّ الطريق","kaybolmak","قايبولماق","—","—"],
["في يده خريطة","elinde harita vardı","إلينده هاريتا ڤاردي","—","—"],
["ناداه","ona seslendi","أونه سيسليندي","—","—"],
["لا أجده","bulamıyorum","بولاميوروم","—","—"],
["امشِ مستقيمًا","düz gidin","دوز كيدين","—","—"],
["استدر يسارًا","sola dönün","صوله دونون","—","—"],
["يستغرق 5 دقائق","beş dakika sürer","بش داقيقا سورير","—","—"],
["أهدى شوكولاتة","çikolata hediye etti","تشيكولاتا هيدييه إتتي","—","—"]
],
qs:[
{q:"لماذا كان السائح حزينًا؟", opts:["فقد نقوده","ضلّ طريق فندقه","تأخرت طائرته"], ok:1},
{q:"ما الاتجاهات التي أعطاها العم؟", opts:["مستقيمًا ثم يسارًا","يمينًا ثم يمينًا","مستقيمًا حتى النهاية"], ok:0},
{q:"ماذا فعل السائح في اليوم التالي؟", opts:["غادر المدينة","اشتكى من العم","عاد بهدية وصار يلقي التحية يوميًا"], ok:2}
]});

DB.stories.push({
id:"sto-7", lang:"id", level:"B1", title:"مشكلة مع المورد (Masalah Pemasok)",
intro:"قصة أعمال بمستوى B1 — سوء فهم يتحول لعلاقة أقوى.",
text:"Pak Bowo menelepon pemasoknya sore itu. \"Ibu Sari, pesanan kemarin kok beda warnanya?\" Di ujung telepon, Ibu Sari terdiam sejenak. \"Maaf Pak, tim gudang salah ambil. Saya ganti hari ini juga.\" Pak Bowo menarik napas. Pelanggannya menunggu, tapi dia tetap tenang. \"Baik Ibu, saya percaya. Tapi tolong, besok ada surat jalan yang benar.\" Keesokan harinya, barang yang benar datang lebih pagi dari janji. Di dalamnya ada kartu kecil: \"Terima kasih atas pengertiannya. Diskon 5% untuk pesanan berikutnya.\" Pak Bowo tersenyum. Dia mengerti: kesalahan bisa terjadi, tapi cara memperbaikinya yang menentukan hubungan. Bulan depan, dia justru menambah jumlah pesanannya.",
textAr:"اتصل بوفو بمورّدته عصر ذلك اليوم: «سيدة ساري، طلب الأمس لماذا ألوانه مختلفة؟» صمتت ساري لحظة ثم قالت: «عذرًا، فريق المستودع أخطأ في الالتقاط — أستبدله اليوم نفسه.» تنفّس بوفو: زبونه ينتظر لكنه بقي هادئًا: «حسنًا أثق بكِ، لكن غدًا أريد سند شحن صحيحًا.» في اليوم التالي وصلت البضاعة الصحيحة أبكر من الموعد، وفي داخلها بطاقة صغيرة: «شكرًا لتفهمك — خصم 5% لطلبك القادم.» ابتسم بوفو: الأخطاء تحدث، لكن طريقة إصلاحها هي التي تحدد العلاقة. في الشهر التالي زاد طلبه بدل أن ينقص.",
vocab:[["يتصل","menelepon","منيليبون"],["موردة","pemasok","پيماسوق"],["لحظة صمت","terdiam sejenak","ترديم سيجانق"],["يستبدل","mengganti","منݢانتي"],["سند الشحن","surat jalan","صورات چالن"],["بدلًا من ذلك","sebaliknya","صبالقنيا"]],
qs:[
{q:"كيف ردّ بوفو على خطأ الموردة؟", opts:["بغضب وتهديد","بهدوء مع اشتراط تصحيح موثق","بإلغاء التعامل"], ok:1},
{q:"ماذا فعلت الموردة في اليوم التالي؟", opts:["تجاهلت الطلب","أرسلت البضاعة أبكر مع بطاقة وخصم","طلبت اعتذارًا"], ok:1},
{q:"ما نتيجة معالجة الأزمة بإحسان؟", opts:["قطع العلاقة","زيادة كمية الطلب الشهر التالي","خسارة الزبون"], ok:1}
]});

DB.stories.push({
id:"sto-8", lang:"tr", level:"B1", title:"جمعة في البازار (Bazarda Cuma)",
intro:"يوم الجمعة في بازار أنطاليا — ضيافة تفتح صفقة.",
text:"Cuma sabahı pazar kalabalıktı. Hasan Usta tezgâhını yeni dizmişti ki, Orta Doğu’dan bir aile yaklaştı. \"Hoş geldiniz! Bakın, taze incirler bugün geldi.\" Ailenin babası fiyat sordu, Hasan Usta rakam söyledi. Adam başını salladı ama ikna olmamıştı. O sırna ezan okundu. \"Buyurun,\" dedi Hasan Usta, \"namaz vakti. Dükkânım açık kalır, siz gidin rahatça gelin.\" Aile şaşırdı: \"Kapatmayacak mısınız?\" \"Müşterim kaybolmaz, güvendiğim insanlar geri döner.\" Aile namazdan döndüğünde tezgâh duruyordu, incirlerin en güzeli ayrıca poşetlenmişti. Baba gülümsedi: \"Bizi beklediniz demek?\" \"Ağırlamak bir beyefendi görevidir.\" O gün aile yalnız incir almadı; bir haftalık meyve ihtiyacını da Hasan Usta’dan karşıladı. Ve her cuma aynı tezgâh uğrak yeri oldu.",
textAr:"صباح الجمعة كان البازار مزدحمًا. رتب حسن أوستا طاولته للتو حين اقتربت عائلة من الشرق الأوسط. «أهلًا بكم! تفضلوا، تين طازج وصل اليوم.» سأل الأب عن السعر فذكر حسن رقمًا، فأومأ الرجل غير مقتنع. عندها أذّن المؤذن. قال حسن: «تفضلوا، وقت الصلاة — دكاني يبقى مفتوحًا، اذهبوا وعودوا براحتكم.» تعجبت العائلة: «لن تغلق؟» «زبوني لا يضيع، من أثق به يعود.» حين عادت العائلة من الصلاة كانت الطاولة قائمة، وأجمل التين معبأ على حدة. ابتسم الأب: «انتظرتنا إذن؟» «الضيافة واجب أصيل.» ذلك اليوم لم تشترِ العائلة تينًا فقط، بل قالت حاجتها من الفاكهة لأسبوع كامل من حسن، وصارت كل جمعة مزارًا ثابتًا لطاولته.",
vocab:[["تين طازج","taze incir","تازه إنجير"],["أذّن المؤذن","ezan okundu","إيزان أوكوندو"],["يبقى مفتوحًا","açık kalır","آتشيق قالير"],["معبأ على حدة","ayrıca poşetlenmiş","آيرجا پوشيتلينميش"],["أومأ برأسه","başını salladı","باشيني صالادي"],["مزار/محطة","ugrak yeri","اوغراك يري"]],
qs:[
{q:"ماذا فعل حسن عند الأذان؟", opts:["أغلق وذهب","أبقى الدكان مفتوحًا وطمأنهم","طلب منهم البقاء"], ok:1},
{q:"ماذا فعلت العائلة بعد الصلاة؟", opts:["لم تعد","عادت واشترت حاجتها لأسبوع","اشتكت من الانتظار"], ok:1},
{q:"الدرس التجاري للقصة:", opts:["الضغط يبيع","الثقة والضيافة تبنيان زبونًا دائمًا","الأسعار هي كل شيء"], ok:1}
]});
