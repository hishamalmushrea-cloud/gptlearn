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
