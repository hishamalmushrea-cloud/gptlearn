/* ===== مكتبة الحياة (3): العائلة والمناسبات، الدين والمواسم، المشاعر الشخصية ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"life-family", icon:"👨‍👩‍👧", group:"academy", title:"العائلة والمناسبات والتهاني", sub:"زواج، مولود، عيد، عزاء، وجميع أفراح وأحزان الحياة",
phrases:[
{id:"fam-01",a:"مبروك الزواج! حياة سعيدة",i:"Selamat menikah! Bahagia selalu",it:"سيلامات مينيكاه بهاكيه سيلالو",t:"Hayırlı olsun, ömür boyu mutluluk",tt:"هايرلي أولسون أومور بويو موتلولوق",lv:2,p:1,w:"زفاف صديق.",n:"«bahagia» = سعادة زوجية — الكلمة الوطنية للتهنئة الزوجية؛ التركية «mutluluk»."},
{id:"fam-02",a:"مولود جديد؟ مبروك! ماذا سميتموه؟",i:"Lahir anak? Selamat! Namanya siapa?",it:"لاهير أناك سيلامات نامه سيابا",t:"Bebek mi oldu? Hayırlı olsun, adı ne?",tt:"بيبيك مي أولدي هايرلي أولسون آدي نه",lv:3,p:2,w:"مولود لدى معارف."},
{id:"fam-03",a:"عظّم الله أجركم — أحسن الله عزاءكم",i:"Turut berduka cita, semoga dikuatkan",it:"توروت بردوكا چيتا سمواݢا ديكواتكان",t:"Başınız sağ olsun, sabırlar dilerim",tt:"باشينيز صاؤ أولسون صابيرلار ديليريم",lv:2,p:1,w:"عزاء.",n:"«Başınız sağ olsun» = حفظ الله رأسكم — أعظم تعبير تركي للعزاء؛ لا تجامل أكثر من ذلك."},
{id:"fam-04",a:"مبروك البيت الجديد!",i:"Selamat punya rumah baru!",it:"سيلامات پونيا رومه بارو",t:"Yeni eviniz hayırlı olsun!",tt:"ييني إيڤينيز هايرلي أولسون",lv:2,p:2,w:"انتقال صديق."},
{id:"fam-05",a:"عيد مبارك! تقبل الله منا ومنكم",i:"Selamat Hari Raya! Mohon maaf lahir batin",it:"سيلامات هاري رايا موهون ماؤف لهير باتين",t:"İyi bayramlar! Bayramınız mübarek",tt:"إيي بيراملار بيرامنيز موبارك",lv:2,p:1,w:"الأعياد.",n:"«mohon maaf lahir بatin» = أطلب العفو ظاهرًا وباطنًا — عيد الفطر الإندونيسي بذكرها كل الناس لبعضهم (halal bihalal)!"},
{id:"fam-06",a:"كل عام وأنتم بخير (رأس السنة)",i:"Selamat tahun baru!",it:"سيلامات تاهون بارو",t:"Mutlu yıllar / İyi seneler!",tt:"موطلو ييللار إيي سنيلير",lv:2,p:2,w:"رأس السنة."},
{id:"fam-07",a:"نجحت! مبروك التخرج",i:"Lulus! Selamat wisudanya",it:"لولوس سيلامات ويسودنيا",t:"Mezun oldun, tebrikler!",tt:"ميزون أولدون تبريكلر",lv:3,p:2,w:"نتائج وتخرج."},
{id:"fam-08",a:"بالتوفيق في المقابلة/الاختبار",i:"Semoga sukses ujiannya ya",it:"سمواݢا سوكسيس أوجيهنيا يا",t:"Sınavında başarılar!",tt:"سيناڤينده بشريلار",lv:3,p:2,w:"قبل أي امتحان."},
{id:"fam-09",a:"شفاء عاجلًا — أراك قريبًا",i:"Cepat sembuh ya, saya doain",it:"تشيڤات سمبوه يا سايا دواين",t:"Geçmiş olsun, dualarım seninle",tt:"كيتميش أولسون دوعالاريم سينينله",lv:3,p:2,w:"زيارة مريض.",n:"«doain/sana dua ediyorum» = أدعو لك — من الديع (دعاء) العربية؛ ثقافة دعاء حية بالبلدين."},
{id:"fam-10",a:"تولّى منصبًا جديدًا؟ ألف مبروك",i:"Naik jabatan? Wah, selamat ya!",it:"نايك چاباتن واه سيلامات يا",t:"Terfiş mi aldın? Helal olsun!",tt:"ترفيش مي آلدين حلل أولسون",lv:4,p:3,w:"ترقية زميل.",n:"«helal olsun» = لك حلالًا/تستحقها — تحية تقدير تركية قوية."},
{id:"fam-11",a:"دعوة العرس وصلت — سنحضر بمشيئة الله",i:"Undangan nikahnya udah sampai, insya Allah datang",it:"أوندانݢن نيكهنياه أوده سامپاي إنشالله داتنݢ",t:"Davetiye elimize ulaştı, inşallah geleceğiz",tt:"داڤيتيه إليميزه أولاشتي إنشالله كيليجيغيز",lv:3,p:2,w:"رد دعوة."},
{id:"fam-12",a:"الهدايا: هذا بسيط — قبولكم أغلى",i:"Ini kado sederhana, terima aja ya",it:"إيني قادو سيمپل تريما أجا يا",t:"Basit bir hediye, kabul edin lütfen",tt:"باسيت بير هيدييه قابول إدين لوتفين",lv:3,p:2,w:"تقديم هدية.",n:"تقديم الهدايا بتواضعها ثقافة مشتركة — القبول أهم من القيمة دائمًا."},
{id:"fam-13",a:"أبوكم/أمكم بألف خير؟",i:"Bapak/Ibu sehat saja?",it:"باڤاك إيبو سيهات ساچا",t:"Anneniz babanız iyi mi?",tt:"أنينيز بابانيز إيي مي",lv:3,p:1,w:"سؤال ودّي واجب.",n:"السؤال عن الوالدين قمة الأدب بالبلدين — يفتح قلوب العائلات فورًا."},
{id:"fam-14",a:"أطفالكم كبروا! صاروا شبانًا",i:"Anaknya udah gede semua ya!",it:"أناكنيا أوده ݢيده سموا يا",t:"Çocuklar büyümüş bayağı!",tt:"تشوجقلار بويوموش بائيي",lv:3,p:3,w:"لقاء بعد غياب."},
{id:"fam-15",a:"أقاربك هنا أيضًا؟ عائلة كبيرة",i:"Sanak saudara di sini juga? Keluarga besar",it:"سانق ساودارا دي سيني يوݢا كيلوارݢا بيسار",t:"Akrabalarınız da burada mı? Kalabalık aile",tt:"أقرابالرنيز دا بوراده مي قالاباليق آيله",lv:3,p:3,w:"حديث عائلي."},
{id:"fam-16",a:"سافر ابنكم للدراسة؟ الله يوفقه",i:"Anaknya kuliah di mana? Semoga sukses",it:"أناكنيا كولياه دي مانا سمواݢا سوكسيس",t:"Eğitim için mi gitti? Hayırlı olsun",tt:"إيتيم إيتشين مي كيتي هايرلي أولسون",lv:3,p:3,w:"أبناء الغربة."},
{id:"fam-17",a:"زيارة قصيرة — لا تغيّر برنامجكم",i:"Nitip sebentar aja, jangan repot-repot",it:"نيتيڤ سبنتار أجا جانڠ ريڤوت-ريڤوت",t:"Kısa bir ziyaret, zahmet etmeyin",tt:"قيسا بير زياره زهمت إتميين",lv:3,p:2,w:"أدب الضيافة.",n:"«jangan repot-repot / zahmet etmeyin» = لا تتكلفوا — آداب زيارة متطابقة في اللغتين."},
{id:"fam-18",a:"لبيب الدعوة وصل — الطعام شهي",i:"Makasih undangannya, makanannya luar biasa",it:"ماكاسيه أوندانݢنيا ماكاننيا لوار بياسا",t:"Davetiniz için teşekkürler, yemekler harika",tt:"داڤيتينيز إيتشين تشيكورلر ييمكلر هاريكة",lv:3,p:1,w:"شكر مضيف.",n:"مدح الطعام واجب الضيافة الأولى — قلها قبل أي شيء آخر."},
{id:"fam-19",a:"الحمل بسلامة — الله يسهل ولادتها",i:"Hamilnya sehat semoga persalinannya lancar",it:"هاميلنيا سيهات سمواݢا برسالي نانيا لانتشار",t:"Doğumu kolay olsun inşallah",tt:"دوݢومو قولاى أولسون إنشالله",lv:3,p:3,w:"حامل قريبة."},
{id:"fam-20",a:"عمرك ما تنسى أصلك — العائلة أولًا",i:"Keluarga nomor satu kan",it:"كيلوارݢا نور ساتو كان",t:"Aile her şeyden önce gelir",tt:"آيله هر شيه دن أونجه كيلير",lv:4,p:4,w:"حكمة اجتماعية.",n:"قيمة مشتركة صريحة في البلدين — قولها يبين فهمك لثقافتهم العميقة."}
]});

DB.chapters.push({
id:"life-religion", icon:"🕌", group:"academy", title:"الدين والمواسم الروحية", sub:"صلاة، جمعة، رمضان، زكاة، وآداب المساجد — بلغة الحياة اليومية",
phrases:[
{id:"rel-01",a:"أين المسجد الأقرب؟",i:"Masjid terdekat di mana?",it:"مشيد تيريديكات دي مانا",t:"En yakın cami nerede?",tt:"ين ياقين قامي نيريدة",lv:2,p:1,w:"حاجة أساسية للمسلم المسافر."},
{id:"rel-02",a:"متى صلاة الجمعة هنا؟",i:"Sholat Jumat jam berapa di sini?",it:"شولات جومعة جام براپا دي سيني",t:"Cuma namazı kaçta?",tt:"قوما نمازي قاتشطه",lv:2,p:2,w:"تنظيم عملك بالجمعة.",n:"«Cuma» من الجمعة العربية — والكلمة نفسها يوم الجمعة بالتركية!"},
{id:"rel-03",a:"رمضان كريم — صيامًا مقبولًا",i:"Selamat berpuasa, semoga lancar",it:"سيلامات بورواسا سمواݢا لانتشار",t:"Hayırlı ramazanlar, kolay gelsin",tt:"خايرلي رامازانلار قولاى كيلسين",lv:2,p:1,w:"بداية الشهر الكريم.",n:"«kolay gelsin» للصائمين! — التركية تقول للصائم «ليكن صيامك سهلًا» كأنه عمل شاق يشريف."},
{id:"rel-04",a:"مواعيد الإفطار والسحور هنا؟",i:"Jam berbuka dan sahur di sini?",it:"جام بيربوقا دان ساحور دي سيني",t:"İftar ve sahur saati kaçta burada?",tt:"إيفرار ڤيه صاحور ساعاتي قاتشته بوراده",lv:2,p:2,w:"الشهر الفضيل."},
{id:"rel-05",a:"دعوة إفطار؟ لبيت بفرح",i:"Diundang berbuka? Dengan senang hati!",it:"ديأوندانݢ بيربوقا دنݢان سيننݢ هاتي",t:"İftara davet mi? Memnuniyetle!",tt:"إيفراه داڤيت مي ممنونيتله",lv:3,p:2,w:"كرم رمضاني."},
{id:"rel-06",a:"أين أدفع زكاة الفطر؟",i:"Zakat fitrah dibayar di mana?",it:"زقات فيتره ديبايار دي مانا",t:"Fitre nereye ödeniyor?",tt:"فيتره نيريه أودينيور",lv:3,p:3,w:"آخر رمضان."},
{id:"rel-07",a:"هذا حلال أم مشكوك فيه؟",i:"Ini halal apa ragu-ragu?",it:"إيني حلال أبا راݢو-راݢو",t:"Bu helal mi, şüpheli mi?",tt:"بو حلل مي شوبهيلي مي",lv:3,p:2,w:"طعام وشراء.",n:"«ragu-ragu» = مشكوك — تقوى المستهلك المسلم؛ بتركيا شهادة «helal sertifikası» على المنتج."},
{id:"rel-08",a:"أين أصلي؟ أتيمم أم ماء متوضأ؟",i:"Ada tempat wudhu?",it:"ادا تيمڤات وضوء",t:"Abdest yeri var mı?",tt:"أبديست ييري ڤار مي",lv:3,p:3,w:"دخول المسجد.",n:"«abdest» من الوضوء العربي! — كلمة يومية حية في حياة تركيا كلها."},
{id:"rel-09",a:"عيد الأضحى مبارك — أضحيتكم مقبولة",i:"Selamat Hari Kurban!",it:"سيلامات هاري قربان",t:"Kurban bayramınız mübarek olsun",tt:"قوربان بيرامنيز موبارك أولسون",lv:2,p:2,w:"عيد الأضحى.",n:"«Kurban» من قربان العربية — عيد مشترك باسمه العربي!"},
{id:"rel-10",a:"المولد النبوي عندكم كيف تحتفلون؟",i:"Maulid Nabi di sini dirayakan gimana?",it:"موليد نبيه دي سيني ديرايكان كيمانا",t:"Mevlid kandili nasıl kutlanıyor?",tt:"ميڤليد قنديلي ناسيل قوتلانيور",lv:4,p:4,w:"مناسبات روحية.",n:"«kandil» = الشمعة/الليلة الشريفة — ليالي القناديل التركية الخمس؛ سؤالك عنها يفرح أهل البلد."},
{id:"rel-11",a:"توقف عملهم للصلاة؟ متى يرجعون؟",i:"Mereka sholat dulu, buka lagi jam berapa?",it:"مريقا شولات دولو بوكا لاݢي جام براپا",t:"Namaza mı gittiler, ne zaman dönerler?",tt:"نمازه مي كيتيلير نه زمان دونيرلير",lv:3,p:3,w:"توقيت معاملاتك بالمواسم."},
{id:"rel-12",a:"أقرض لوجه الله — بلا فوائد",i:"Pinjaman tanpa bunga ya, buat kebaikan",it:"ڤينچامن تانڤا بونݢا بوات كيبايكان",t:"Faizsiz borç, hayrına olsun",tt:"فاءيزسيز بورت خيرينه أولسون",lv:3,p:4,w:"معاملات إسلامية.",n:"«faizsiz» = بلا فوائد (من فائدة العربية!) — التمويل الإسلامي التركي الحلال يسمى «faizsiz finans»."},
{id:"rel-13",a:"الجمعة أعطل نصف يوم لدكاني",i:"Jumat toko setengah hari aja",it:"جومعة توكو سيتنݢاه هاري أجا",t:"Cuma günü dükkân yarım gün",tt:"قوما كونو دوككان ياريم كون",lv:3,p:3,w:"دوام الجمعة التجاري."},
{id:"rel-14",a:"كلمة طيبة عن جاره خير من صدقة",i:"Kata baik ke tetangga lebih berkah",it:"قاته باييك كه تيتانݢا لبيه بركه",t:"Komşuya güzel söz sadakadan hayırlı",tt:"قومشوه كوزيل سوز صداقتان خايرلي",lv:4,p:4,w:"حكمة الجوار."},
{id:"rel-15",a:"الله يرزقه من حيث لا يحتسب — دعاء بائع",i:"Semoga rezekinya mengalir terus ya",it:"سمواݢا ريزيقيه منݢالير تيروس يا",t:"Rızkı bereketli olsun, inşallah",tt:"رزقي بركتلي أولسون إنشالله",lv:4,p:3,w:"دعاء تجاري يومي."},
{id:"rel-16",a:"استغفر الله — عدة التسبيح",i:"Astaghfirullah",it:"أستغفرالله",t:"Estağfurullah",tt:"إستاݢفورلله",lv:4,p:3,w:"تعبير يومي حي.",n:"التركية تلفظها «إستاݢفورلله» وتستعملها يوميًا حتى للتأدب في الاعتذار — أصل عربي بروح تركية."},
{id:"rel-17",a:"الحمد لله على كل حال",i:"Alhamdulillah atas segalanya",it:"الحمدلله أتاس سيݢالنيا",t:"Her şeye rağmen elhamdülillah",tt:"هر شيهه راغمن الحمدولله",lv:3,p:2,w:"رضا وشكر."},
{id:"rel-18",a:"ما شاء الله! تبارك الرحمن",i:"Masyaallah, tabarakallah",it:"ماشالله طبركالله",t:"Maşallah, barekallah",tt:"ماشالله بركلله",lv:3,p:2,w:"المدائح الشرعية ضد الحسد.",n:"«maşallah» حية بقوة في اللغتين — تُقال لكل جميل حمايةً من العين؛ ثقافة مشتركة عميقة."},
{id:"rel-19",a:"أعوذ بالله من الشيطان — عند الغضب",i:"Astagfirullah, sabar ya",it:"أستغفيرالله صبر يا",t:"Estağfurullah, sabretmek lazım",tt:"إستاݢفورلله صابرتماك لازيم",lv:4,p:3,w:"ضبط النفس."},
{id:"rel-20",a:"الله يجعلها زهورًا في قلوبكم",i:"Semoga diberi ketabahan",it:"سمواݢا ديبيرى كتبهن",t:"Allah sabır versin",tt:"الله صبر فيرسين",lv:3,p:2,w:"مواساة عزاء.",n:"«Allah sabır versin» = الله يجعلكم صابرين — مواساة تركية دينية نقية تقال للثكالى."}
]});

DB.chapters.push({
id:"life-emotions", icon:"😊", group:"academy", title:"المشاعر والذوق الشخصي", sub:"فرح، غضب، اعتذار، مدح، وامتنان — بلغة القلوب اليومية",
phrases:[
{id:"emo-01",a:"أنا في قمة السعادة اليوم!",i:"Hari ini saya paling happy!",it:"هاري إيني سايا پالينݢ هابي",t:"Bugün çok mutluyum!",tt:"بوكون تشوك موطلويوم",lv:3,p:2,w:"مشاركة فرح."},
{id:"emo-02",a:"هذا أجمل شيء حدث لي",i:"Ini yang paling indah buat saya",it:"إيني ياڠ پالينݢ إنده بوات سايا",t:"Başıma gelen en güzel şey bu",tt:"باشيما كيلين ين كوزيل شيه بو",lv:3,p:3,w:"امتنان عميق."},
{id:"emo-03",a:"أعتذر بصدق — خطئي لا أبرره",i:"Saya minta maaf, ini salah saya",it:"سايا مينتا ماؤف إيني ساله سايا",t:"Özür dilerim, hatamı kabul ediyorum",tt:"أوزور ديليريم هاتامي قابول إيديوروم",lv:2,p:1,w:"اعتذار كامل.",n:"الاعتراف بالخطأ دون تبرير أقوى اعتذار — باللغتين معًا."},
{id:"emo-04",a:"لا أستطيع أن أغضب منك",i:"Nggak bisa marah sama kakak",it:"نݢاك بيسا ماراه ساما قاكاك",t:"Sana kızmak mümkün değil",tt:"صانة قيزماق مومكون ديكيل",lv:4,p:4,w:"تلطيف بعد سوء فهم."},
{id:"emo-05",a:"خذها بروح الرياضة",i:"Sportif aja ya",it:"سڤورتيف أجا يا",t:"Spora vur gitsin",tt:"سڤوره ڤور كيتسين",lv:4,p:4,w:"تخفيف خصومة.",n:"«spora vur» = اطرحها للرياضة — تعبير تركي مرح لطيف لتجاوز الخلاف الصغير."},
{id:"emo-06",a:"كلمتك جرحتني بصدق",i:"Kata-katanya nyakitin saya",it:"قاته-قاتهنياه نيقيقيتين سايا",t:"Lafın gerçekten incitti beni",tt:"لافين كيركتين إينجيتي بيني",lv:3,p:4,w:"حدود واضحة بلطف."},
{id:"emo-07",a:"أنا ممتن لك جدًا — لن أنسى",i:"Saya berterima kasih banyak, nggak akan lupa",it:"سايا برتريما كاسي بنياك نݢاك أكان لوڤا",t:"Minnettarım, unutmayacağım",tt:"مينيتاريم أنوتماياجايم",lv:3,p:2,w:"امتنان دائم."},
{id:"emo-08",a:"تفهمني دون كلام — قلبك حكيم",i:"Kakak ngerti tanpa saya bilang",it:"كاكاك نݢرتي تانڤا سايا بيلاڠ",t:"Ben konuşmadan anlıyorsun",tt:"بين كونوشمدن أنليورسون",lv:4,p:4,w:"صداقة عميقة."},
{id:"emo-09",a:"أفتقدك والله",i:"Kangen parah sama kakak",it:"كانݢين ڤاره ساما كاكاك",t:"Seni çok özledim valla",tt:"سني تشوك أوزليديم ڤاله",lv:4,p:3,w:"فراق صديق."},
{id:"emo-10",a:"عندي يوم ثقيل — سامحني إن قصرت",i:"Hari ini berat, maaf kalau kurang enak",it:"هاري إيني بيرات ماؤف كالاو كوراڠ إيناك",t:"Bugün zor günüm, kusura bakma",tt:"بوكون زور كونوم كوسورا باقما",lv:3,p:2,w:"إدارة مزاجك بلطف.",n:"الإعلان عن اليوم الصعب قبل الخطأ دبلوماسية ذكية — تمنع نصف المشاكل."},
{id:"emo-11",a:"أنت أهل للثقة بنفسي",i:"Kakak orangnya bisa dipercaya",it:"كاكاك أوراڠنيا بيسا ديبيرتشارا",t:"Sen güvenilir birisin",tt:"سين كوفينيلي بيريسين",lv:3,p:3,w:"شهادة صداقة."},
{id:"emo-12",a:"أستحق أفضل من هذا — بلا انفعال",i:"Saya deserve yang lebih baik",it:"سايا ديسيرڤ ياڠ لبيه باييك",t:"Daha iyisini hak ediyorum",tt:"داها إيسيني حاق إيديوروم",lv:3,p:3,w:"احترام الذات المهذب."},
{id:"emo-13",a:"سامحني — لن يتكرر أبدًا",i:"Maafin ya, nggak akan terulang",it:"ماؤفين يا نݢاك أكان تيرأولانݢ",t:"Affet, bir daha olmayacak",tt:"أفت بير داها أولماياجاق",lv:3,p:2,w:"وعد الإصلاح."},
{id:"emo-14",a:"دعني أهدأ ثم نتكلم",i:"Bentar, saya tenangin diri dulu",it:"بنتار سايا تينانݢين ديري دولو",t:"Sakinleşeyim, sonra konuşalım",tt:"ساكينليشيم سونرا كونوشاليم",lv:3,p:2,w:"إدارة خلاف ناضجة."},
{id:"emo-15",a:"ربما أنا أخطأت الفهم — آسف",i:"Mungkin saya salah paham, maaf ya",it:"مونݢكين سايا ساله پاهم ماؤف يا",t:"Ben yanlış anlamışım, kusura bakma",tt:"بين يانليش أنلاميشيم كوسورا باقما",lv:3,p:2,w:"خروج مشرف من سوء فهم."},
{id:"emo-16",a:"قلبي معكم في هذا اليوم",i:"Hati saya bersama kalian hari ini",it:"هاتي سايا برساما كاليان هاري إيني",t:"Kalbim bugün sizinle",tt:"قلبيم بوكون سيزينله",lv:3,p:3,w:"مؤازرة دون كلام كثير."},
{id:"emo-17",a:"ضحكتك دواء يومي",i:"Ketawanya obat buat saya",it:"كتاونيا أبات بوات سايا",t:"Gülüşün bana ilaç gibi",tt:"كولوشون بنه إيلاش كيبي",lv:4,p:4,w:"مجاملة صافية."},
{id:"emo-18",a:"الله يسعد قلبك دائمًا",i:"Semoga hatinya selalu bahagia",it:"سمواݢا هاتينيا سيلالو بهاكيه",t:"Kalbin hep mutlu olsun",tt:"قلبين هيپ موطلو أولسون",lv:4,p:3,w:"دعاء وداع."}
]});
