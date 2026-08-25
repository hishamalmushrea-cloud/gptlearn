/* ===== الحياة اليومية الكاملة: حوارات خارج المتجر — مطعم، مواصلات، فندق، صيدلية، اتجاهات، تعارف، هاتف ===== */
"use strict";
window.DB = window.DB || {};
window.DB.situations = window.DB.situations || [];

DB.situations.push({
id:"dly-resto", kind:"daily", title:"في مطعم شعبي (إندونيسيا)", sub:"اطلب أكلتك وتعامل مع الحار الإندونيسي الأسطوري", context:"جلست في «warung» (مطعم صغير). النادل (mas) يستقبلك. جوعان بعد يوم طويل.",
chapters:["themes","verbs"],
turns:[
{who:"S",a:"تفضل! ماذا تأكل؟",i:"Silakan mas! Mau makan apa?",it:"سيلاكان ماس! ماو ماكان أبا",t:"Buyurun! Ne yemek istersiniz?",tt:"بويورون نه ييميك إسترسينيز"},
{who:"C",a:"ما هو موجود اليوم؟",i:"Hari ini ada apa?",it:"هاري إيني ادا أبا",t:"Bugün ne var?",tt:"بوكون نه ڤار",n:"سؤال «موجود اليوم» — أذكى سؤال في المطاعم الشعبية: ما طبخ اليوم طازج."},
{who:"S",a:"أرز مقلي بالدجاج، وشوربة، ومكرونة غورينغ.",i:"Ada nasi goreng ayam, sayur asem, sama mie goreng.",it:"ادا ناسي ݢورينݢ أيام",t:"Pilav, tavuk çorbası, makarna var.",tt:"پيلاڤ تاڤوك تشورباسي"},
{who:"C",a:"أرز مقلي واحد. لكن غير حار أرجوك!",i:"Nasi goreng satu. Tapi jangan pedas ya mas!",it:"ناسي ݢورينݢ ساتو تاڤي جانڠ بيدس يا ماس",t:"Pilav olsun. Ama acı olmasın lütfen!",tt:"پيلاڤ أولسون أما آشي أولماسين لوتفين",n:"«jangan pedas» = لا تحار — أهم جملة بقائك في إندونيسيا! (pedas أشد من أي حار عربي)."},
{who:"S",a:"تمام! تشرب؟",i:"Oke! Minum apa?",it:"أوكيه مينوم أبا",t:"Tamam! Ne içersiniz?",tt:"تامام نه إيتشيرسينيز"},
{who:"C",a:"شاي بارد واحد وبعيد ذلك لا شيء.",i:"Teh es satu aja.",it:"تيه إيس ساتو أجا",t:"Bir buzlu çay yeter.",tt:"بير بوزلو تشاي ييتر",n:"«teh es» الشاي المثلج الإندونيسي الوطني — حلوتان من الشاي التركي بمراحل!"},
{who:"C",a:"(بعد الأكل) لذيذ جدًا! الحساب من فضلك.",i:"Enak banget! Bayar dong mas.",it:"إيناك بانݢينݢ! باير دونݢ ماس",t:"Çok lezzetliydi! Hesap lütfen.",tt:"تشوك ليزيتليدي حساب لوتفين",n:"«enak banget» = لذيذ جدًا — مجاملة المطعم الوطنية. المدح الصادق يجعل جولتك القادمة أجمل."},
{who:"S",a:"18 ألفًا فقط. أكلت شهيًا!",i:"Delapan belas ribu mas. Makasih ya!",it:"ديلابان بيلس ريبو ماس",t:"On sekiz lira. Afiyet olsun!",tt:"أون سيكيز ليرا آفيت أولسون"}
],
vocab:[
["مطعم صغير","warung","وارونݢ","lokanta","لوقونتا"],
["أرز مقلي","nasi goreng","ناسي ݢورينݢ","pilav","پيلاڤ"],
["حار","pedas","بيدس","acı","آشي"],
["شاي مثلج","teh es","تيه إيس","buzlu çay","بوزلو تشاي"],
["لذيذ","enak","إيناك","lezzetli","ليزيتلي"],
["الحساب/الفاتورة","bon / bayar","بون / باير","hesap","حساب"]
],
grammar:[{t:"🇮🇩 «sama» = و (عامية) و«aja» = فقط",b:"في الكلام اليومي: dan تصبح sama («nasi sama ayam») وcuma/saja تصبح aja («satu aja» = واحد فقط). كلمتا عامية ستسمعان في كل مطعم وحوار إندونيسي — استعملهما تتحدث مثل أهل البلد فورًا."}],
why:`<p>نمط الطلب الذكي: <b>«ما موجود اليوم؟» ← طلب بشرط واضح (غير حار) ← مشروب واحد ← مدح صادق ← حساب</b>. لاحظ أن الشاي البارد «teh es» حلوه افتراضيًا — قل «teh tawar» (شاي سادة) إن أردت بلا سكر.</p>`,
variants:[{kind:"formal",a:"طلب رسمي لضيوف",i:"Kami pesan nasi goreng empat, yang tidak pedas."},{kind:"casual",a:"طلب شابي عفوي",i:"Bang, nasi goreng satu, jangan dibikin pedas ya!"}]
});

DB.situations.push({
id:"dly-taxi", kind:"daily", title:"تاكسي/مواصلات في تركيا", sub:"وجهتك، العداد، والنزول في المكان الصحيح", context:"أنت في تاكسي بإسطنبول. السائق (abi) سريع اللسان. تريد الوصول لحي كريم أو_baseline (تخيل: مول جواهر).",
chapters:["themes","questions"],
turns:[
{who:"C",a:"مرحبًا! إلى هذا العنوان من فضلك.",t:"Merhaba! Bu adrese lütfen.",tt:"مرحبا بو أدرسه لوتفين",i:"Halo! Ke alamat ini ya pak.",it:"هالو ك ألامت إيني يا پاك",n:"«adrese» = إلى العنوان — لاحقة الاتجاه -e. أرِ العنوان مكتوبًا أفضل من نطقه إن كنت جديدًا."},
{who:"S",a:"حسنًا سيدّي. سأستخدم العداد (taksimetre).",t:"Tamamdır beyefendi. Taksimetreyi açıyorum.",tt:"تامامدير بييفندي تاكسيمتريهي آتشليوروم",i:"Siap pak, saya pakai argo.",it:"سياب پاك سايا پاكاي أرݢو",n:"«argo» العداد الإندونيسي من «argo»? إنه من الهولندية! تأكد دائمًا من العداد: argo/metre أول جملة حماية لك."},
{who:"C",a:"كم يستغرق تقريبًا؟ أنا مستعقل قليلًا.",t:"Ne kadar sürer? Biraz acelem var.",tt:"نه قادار سورير بيراز أجهليم ڤار",i:"Kira-kira berapa lama? Saya agak buru-buru.",it:"كيرا-كيرا براپا لاما سايا أݢاق بورو-بورو",n:"«buru-buru» = استعجال (تكرار!) و«acelem var» = عندي عجلة — صيغة «var» تصف الحالات."},
{who:"S",a:"بعون الله 20 دقيقة. حركة السير خفيفة اليوم.",t:"İnşallah yirmi dakika. Trafik hafif bugün.",tt:"إنشالله ييرمي داقيقا ترافيك هافيف بوكون",i:"Insya Allah dua puluh menit. Macetnya lumayan ringan.",it:"إنشالله دوا پولوه مينيت",n:"«macet» = زحمة سير — كلمة يومية إندونيسية أساسية. «İnşallah» مشتركة بين اللغتين!"},
{who:"C",a:"ممتاز. هنا يمين عند الإشارة من فضلك.",t:"Harika. İşte burada sağa dönün lütfen, ışıkta.",tt:"هاريكة إيسته بوراده صاغه دونون",i:"Bagus. Di lampu merah belok kanan ya pak.",it:"باغوس دي لامبو ميراه بيلوق كانان"},
{who:"S",a:"يمينًا… هذا المبنى الأصفر؟",t:"Sağ mı… bu sarı bina mı?",tt:"صاغ مي بو صاري بينا مي",i:"Kanan ya… yang gedung kuning ini?",it:"كانان يا ياڠ كيدونݢ كونينݢ إيني"},
{who:"C",a:"نعم بالضبط. توقف هنا رجاءً. كم المبلغ؟",t:"Evet aynen. Burada durun lütfen. Kaç oldu?",tt:"إييت آينين بوراده دورون لوتفين كاتش أولدي",i:"Iya betul. Berhenti di sini ya. Berapa totalnya?",it:"إيا بتول برهينتي دي سيني يا براپا توتالنيا"},
{who:"S",a:"145 ليرة. أتعامل معك بصدق.",t:"Yüz kırk beş lira oldu.",tt:"يوز كيرق بش ليرا أولدي",i:"Seratus empat puluh lima ribu.",it:"سراتوس إمڤات پولوه ليما",n:"ادفع وأنت ترى العداد، واطلب الإيصال إن احتجته: «Fiş alabilir miyim?»"},
{who:"C",a:"خذ. زدك للجهد — أعطاك الله الصحة!",t:"Buyurun. Üstü kalsın, kolay gelsin!",tt:"بويورون أوستو قالسين قولاى كيلسين",i:"Ini pak. Kembaliannya simpan aja, terima kasih!",it:"إيني پاك كمبالينيا سيمڤان أجا",n:"«üstü kalsın» = ليكن الفوقي لك — إكرامية تركية مهذبة (اختيارية!). «kolay gelsin» وداع كل عامل."}
],
vocab:[
["عداد الأجرة","argo","أرݢو","taksimetre","تاكسيمتره"],
["زحمة سير","macet","ماچيت","trafik","ترافيك"],
["يميناً/يساراً","belok kanan/kiri","بيلوق كانان/كيري","sağa/sola dönmek","صاغه/صوله دونمك"],
["توقف هنا","berhenti di sini","برهينتي دي سيني","burada dur","بوراده دور"],
["المبلغ كم؟","berapa totalnya","براپا توتالنيا","kaç oldu","كاتش أولدي"],
["الباقي لك (إكرامية)","kembaliannya ambil aja","كيمبالينيا أمبول أجا","üstü kalsın","أوستو قالسين"]
],
grammar:[{t:"🇹🇷 لاحقة الاتجاه -e/-a و«var» الحالية",b:"adres**e** = إلى العنوان، sağ**a** = إلى اليمين، ev**e** = إلى البيت — لاحقة الحركة نحو. و«acelem var» = عندي استعجال: صيغة var تصف ما «لديك» من حالات: işim var (عندي شغل)، vaktim var (عندي وقت)."}],
why:`<p>رحلة التاكسي الآمنة: <b>وجهة واضحة ← تأكيد العداد ← سؤال المدة (إدارة القلق) ← توجيهات مبكرة ← نزول محدد ← دفع شفاف + وداع كريم</b>. «kolay gelsin» و«üstü kalsın» جملتان ترفعانك من راكب غريب إلى شخص يحترمه السائق ويتذكره.</p>`,
variants:[{kind:"formal",a:"صعود رسمي بمكالمات",t:"İyi günler, Kadıköy'e gidiyoruz, metre açık olur mu?"},{kind:"casual",a:"مع سائق ودود مازح",t:"Abi biraz hızlı gidiyoruz, polis görürse sorun olur!"}]
});

DB.situations.push({
id:"dly-pharmacy", kind:"daily", title:"في الصيدلية (إندونيسيا)", sub:"وصف وجعك وخذ دواءك بسلامة", context:"تشعر بصداع وألم حلق منذ يومين. دخلت أقرب apotek.",
chapters:["themes","feelings"],
turns:[
{who:"C",a:"مساء الخير. رأسي يؤلمني منذ أمس، وحلقي قليلًا.",i:"Selamat malam. Kepala saya sakit dari kemarin, tenggorokan agak perih.",it:"سيلامات مالام كيبالا سايا ساكيت داري كيمارين تينݢݢوروكان أݢاق پريه",t:"İyi akşamlar. Dünden beri başım ağrıyor, boğazım biraz yanıyor.",tt:"إيي آقشاملار دوندين بيري باشيم آرييور",n:"وصف الأعراض بالمدة (dari kemarin / dünden beri) — أهم معلومة للصيدلي."},
{who:"S",a:"هل معك حرارة؟ قِستها؟",i:"Demam nggak? Sudah diukur?",it:"ديمان نݢاك؟ سوداه ديأوكون",t:"Ateşiniz var mı, ölçtünüz mü?",tt:"أتيشينيز ڤار مي أولتونوز مي"},
{who:"C",a:"أمس 38 درجة. اليوم لم أقس.",i:"Kemarin tiga puluh delapan. Hari ini belum diukur.",it:"كيمارين تيݢا پولوه ديلابان",t:"Dün otuz sekizdi, bugün ölçmedim.",tt:"دون أوتوز سيكيزدي"},
{who:"S",a:"هذه حبوب للصدأ، وهذا غرغرة للحلق. حار أم لا الحار؟",i:"Ini obat demam, ini obat kumur buat tenggorokan. Mau yang kerasa dingin?",it:"إيني أبات ديمان",t:"Bunlar ateş için, bu gargara boğaz için.",tt:"بونلار أتيش إيتشين"},
{who:"C",a:"طيب. كيف أشربها؟",i:"Baik. Gimana minumnya?",it:"باءيك كيمانا مينومنيا",t:"Peki, nasıl kullanacağım?",tt:"پيكي ناسيل كولاناجايم",n:"«minumnya» = شُربه — البناء الإندونيسي لسؤال الاستخدام: فعل + nya."},
{who:"S",a:"حبة كل ثماني ساعات بعد الأكل. الغرغرة مرتين يوميًا.",i:"Satu tablet tiap delapan jam, sesudah makan. Kumurnya dua kali sehari.",it:"ساتو تابليت تيiap ديلابان جام",t:"Sekiz saatte bir, yemekten sonra. Gargarayı günde iki kez.",tt:"سيكيز ساعاته بير ييميكتين سونرا"},
{who:"C",a:"فهمت. كم المجموع؟",i:"Siap. Semuanya berapa?",it:"سياب سموينيا براپا",t:"Anladım, hepsi kaç lira?",tt:"أنلاديم هيبسي كاتش ليرا"},
{who:"S",a:"25 ألفًا فقط. أسرع بالشفاء! (الله يشفيك)",i:"Dua puluh lima ribu aja. Cepat sembuh ya!",it:"دوا پولوه ليما ريبو أجا تشيڤات سمبوه يا",t:"Yirmi beş lira. Geçmiş olsun!",tt:"ييرمي بش ليرا كيتميش أولسون",n:"«cepat sembuh» و«geçmiş olsun» — تعبيرتا الشفاء الوطنيان. تقال من الصيدلي ومن أي شخص عرف بمرضك."}
],
vocab:[
["صداع / حلق","sakit kepala / tenggorokan","ساكيت كيبالا","baş ağrısı / boğaz","باش آغريسي"],
["حرارة (حمى)","demam","ديمان","ateş","أتيش"],
["دواء / حبوب","obat / tablet","أبات / تابليت","ilaç / hap","إيلاش / هاب"],
["غرغرة","obat kumur","أبات كومور","gargara","ݢارݢارا"],
["قياس الحرارة","mengukur suhu","منوكور سوها","ateş ölçmek","أتيش أولشمك"],
["كل 8 ساعات","tiap delapan jam","تيiap ديلابان جام","sekiz saatte bir","سيكيز ساعاته بير"]
],
grammar:[{t:"🇮🇩 تكرار الأوقات: tiap/setiap + مرة",b:"«tiap delapan jam» = كل 8 ساعات، «dua kali sehari» = مرتين في اليوم (sehari = في اليوم)، «tiga kali seminggu» = ثلاث مرات أسبوعيًا. هذا بناء التكرار الذي يشرح به الأطباء والصيادلة كل شيء — احفظه مرة واحدة يفتح لك الوصفات كلها."}],
why:`<p>زيارة الصيدلية الآمنة: <b>الأعراض + مدتها ← الإجابة عن سؤال الحرارة بدقة ← سؤال «كيف أستخدمه؟» ← تأكيد الجرعة ← تعافٍ مهذب</b>. لاحظ أهم نقطة سلامة: اذكر أنك تناولت أدوية أخرى أو عندك حساسية — «Ada alergi obat» (عندي حساسية دواء).</p>`,
variants:[{kind:"formal",a:"بصيدلية رسمية/مستشفى",i:"Dokternya ada? Saya mau konsultasi sebentar."},{kind:"casual",a:"وصف عفوي ساخر لصداعك",i:"Kepala saya kayak mau pecah, dik!"}]
});

DB.situations.push({
id:"dly-directions", kind:"daily", title:"السؤال عن الطريق (إندونيسيا)", sub:"يمين، يسار، مستقيم — وصلت لمبتغاك", context:"تسير في حي جاكرتا تبحث عن محل قماش أخبرك عنه صديق. سألت شخصًا ودودًا عند البقالة.",
chapters:["themes","questions"],
turns:[
{who:"C",a:"عفوًا، أين شارع مانديران من هنا؟",i:"Permisi, Jalan Mandiran di mana ya?",it:"پرميسي جالان مانديران دي مانا يا",t:"Afedersiniz, Mandiran sokağı nerede?",tt:"أفيدرسينيز مانديران سوكاغي نيريدة"},
{who:"S",a:"مانديران؟ قريب. مستقيم حتى الإشارة.",i:"Mandiran? Dekat kok. Lurus sampai lampu merah.",it:"مانديران ديكات كوك لوروس سامپاي لامبو ميراه",t:"Mandiran mı? Yakın. Işığa kadar dosdoğru gidin.",tt:"مانديران مي ياقين إيشيغه قادار دوسدوݢرو كيدين",n:"«dekat kok» = قريب أصلًا — «kok» تطمين إندونيسي لطيف."},
{who:"C",a:"حسنًا، ثم؟",i:"Terus?",it:"تروس",t:"Sonra?",tt:"سونرا",n:"«terus؟» = ثم؟ — أقصر متابعة سؤال بالعالم. استخدمها في كل توجيه."},
{who:"S",a:"عند الإشارة يسارًا، بعدها ستAVE المسجد مباشرة.",i:"Di lampu merah belok kiri, habis itu masjidnya langsung kelihatan.",it:"دي لامبو ميراه بيلوق كيري هابيس إيتو مشيدينيا لانݢسونݢ كيليهات",t:"Işıkta sola dönün, hemen camiyi göreceksiniz.",tt:"إيشيقتا صوله دونون هيمين قامييي كورجكسينيز",n:"«habis itu» = بعد ذلك — رابط الخطوات الأول في التوجيه الإندونيسي."},
{who:"C",a:"يسارًا عند الإشارة ثم المسجد… والمحل؟",i:"Belok kiri, terus masjid… tokonya di mana?",it:"بيلوق كيري تروس مشيد توكونيا دي مانا",t:"Cami tamam, peki dükkân?",tt:"قامي تامام پيكي دوككان"},
{who:"S",a:"المحل قبالة المسجد تمامًا، لونه أخضر. إن وصلت للسوق الصغير فقد تجاوزته.",i:"Tokonya seberang masjid, warnanya hijau. Kalau sampai pasar kecil, sudah kelewat.",it:"توكنيا سبرانݢ مشيد وارنانيا هيجو",t:"Caminin karşısı, yeşil bina. Küçük pazara varsanız geçmişsiniz.",tt:"قاميين قارشيسي ييشيل بينا",n:"«seberang» = المقابل، و«kelewat» = تجاوزتَه — علامة النهاية في التوجيه. علامة «تجاوزت» أهم من الوصف نفسه!"},
{who:"C",a:"فهمت تمامًا! هل أستطيع مشيًا؟",i:"Siap! Jalan kaki bisa?",it:"سياب! جالان كاكي بيسا",t:"Anladım! Yürüyerek olur mu?",tt:"أنلاديم يورييرك أولور مو"},
{who:"S",a:"خمس دقائق مشيًا فقط. بالتوفيق!",i:"Lima menit jalan kaki aja. Semoga ketemu!",it:"ليما مينيت جالان كاكي أجا سمواݢا كتيمو",t:"Beş dakika yürürsünüz. Kolay gelsin!",tt:"بش داقيقا يورورسونوز قولاى كيلسين"}
],
vocab:[
["يمشي (على قدميك)","jalan kaki","جالان كاكي","yürümek","يورومك"],
["مستقيم للأمام","lurus","لوروس","dosdoğru","دوسدوݢرو"],
["استدر يميناً/يساراً","belok kanan/kiri","بيلوق كانان/كيري","sağa/sola dönmek","صاغه/صوله دونمك"],
["مقابل / بجانب","seberang / sebelah","سبرانݢ / سبيله","karşı / yanında","قارشي / يانينده"],
["تجاوزت المكان","kelewat","كيليوات","kaçırmak/geçmek","كاتشيرمق"],
["إشارة المرور","lampu merah","لامبو ميراه","ışık","إيشيق"]
],
grammar:[{t:"🇮🇩 «sampai/habis itu/terus» — روابط المسار",b:"«sampai» = حتى (لurus sampai lampu = مستقيم حتى الإشارة)، «habis itu» = بعد ذلك، «terus» = ثم/استمر. ثلاث أدوات تسلسل تصلح لأي توجيهات في إندونيسيا — وكذلك تصلح للحكايات: أولا... habis itu... terus..."}],
why:`<p>التوجيه الجيد بناء طبقات: <b>علامة أولى (إشارة) ← اتجاه (يسار) ← علامة ثانية (مسجد) ← الموضع الدقيق (المقابل، اللون) ← علامة التجاوز + المسافة</b>. طلب «علامة التجاوز» (كيف أعرف أنني أخطأت؟) ذكاء تنقّل حقيقي — نصف التائهين يضلون لغيابها.</p>`,
variants:[{kind:"formal",a:"سؤال رسمي لشخص أكبر منك",i:"Permisi Pak, mohon ditunjukkan jalan ke Jalan Mandiran?"},{kind:"casual",a:"سؤال شاب عفوي جار",i:"Bang, enaknya ke sini naik apa? Jalan kaki jauh nggak?"}]
});

DB.situations.push({
id:"dly-meet", kind:"daily", title:"تعارف ودعوة شاي (تركيا)", sub:"من «tanıştığımıza memnun oldum» إلى صداقة الحي", context:"جارك التركي الجديد (abi) دعاك لشاي في محله الصغير. أول لقاء حقيقي.",
chapters:["intro","feelings"],
turns:[
{who:"S",a:"أهلًا جارنا! تفضل، الشاي على النار.",t:"Hoş geldin komşu! Buyur, çay demleniyor.",tt:"هوش كيلدين قومشو بويورون تشاي ديملينيور",i:"Selamat datang tetangga! Silakan, tehnya lagi dibikin.",it:"سيلامات داتنݢ تيتانݢا"},
{who:"C",a:"أجل معروف — لأول مرة أدخل محلك.",t:"Hoş bulduk! İlk defa geliyorum dükkânına.",tt:"هوش بولديك إيلك ديفة كيليوروم دوككانيينا",i:"Terima kasih! Pertama kali saya ke sini.",it:"تريما كاسي",n:"«Hoş bulduk» الرد الإلزامي على hoş geldin — البروتوكول المقدس."},
{who:"S",a:"من أين أنت يا ابن الحلال؟",t:"Nerelisin gözüm?",tt:"نيريليسين كوزوم",i:"Kakak dari mana?",it:"كاكاك داري مانا",n:"«gözüm» = عيني — مخاطبة ودّية تركية راقية (من الحميم المحترم)."},
{who:"C",a:"من اليمن. أعيش هنا منذ سنة، وأتعلم التركية.",t:"Yemenliyim. Bir yıldır buradayım, Türkçe öğreniyorum.",tt:"يمنلييم بير ييلدير بورادايم توركچه أورينيوروم",i:"Saya dari Yaman. Setahun di sini, lagi belajar bahasa.",it:"سايا داري يامان سيتاهون دي سيني"},
{who:"S",a:"ما شاء الله! تركيتك أحسن من ناس هنا! (يضحك). البيت أم العمل؟",t:"Maşallah! Türkçen bizden iyi neredeyse! Ev mi, iş mi?",tt:"ماشالله توركچن بيزدن إيي نيريديسه إيف مي إيش مي",i:"Subhanallah! Bahasanya enak! Udah kerja atau?",it:"سبحانالله باهاسانيا إيناك",n:"المدح التركي المتفائل maşallah — من العربية ويعيش على كل لسان. اردد أنت أيضًا عند أي مدح."},
{who:"C",a:"عندي محل صغير للبضائع المنزلية. محلك هذا جميل ورثته عن أبيك؟",t:"Küçük bir dükkânım var, ev eşyası. Burası güzelmiş — babandan mı kaldı?",tt:"كوتشوك بير دوككانيم ڤار إيف إيشياسي",i:"Saya ada toko kecil barang rumah tangga. Ini warisan bapak?",it:"سايا ادا توكو كيتشيل"},
{who:"S",a:"أبي وأبي أبي — 40 سنة. اشرب، حدثني عن اليمن… (يصب الشاي)",t:"Babamdan, ondan da babasından — kırk yıldır. İç bakalım, Yemen'i anlat…",tt:"بابامدان أوندان دا باباسيندان قيرق ييلدير",i:"Dari bapak saya, dari kakek. Empat puluh tahun. Minum dulu, cerita tentang Yaman…",it:"داري باپاك سايا داري كاكيك",n:"الشاي التركي (çay) بأكواب صغيرة يُصب أمامك — رفضه رفض للود. «iç bakalım» = اشرب لنرَ."},
{who:"C",a:"بالتأكيد. صديقك أنا من اليوم — ليكن عملنا كله بركة.",t:"Elbette. Bugünden arkadaşımsın — işimiz bereketli olsun.",tt:"إلبيرته بوكوندن أركاداشيمسين إيشيميز بركتلي أولسون",i:"Tentu. Mulai hari ini kita teman. Semoga rezeki kita berkah.",it:"تنتو مولاي هاري إيني كيتا تيمان سمواݢا ريزيقي كيتا بركه",n:"«bereket» البركة العربية — حية في قلب التجارة التركية. خاتمة تعارف بهذه الكلمة تؤسس صداقة تاجر حقيقية."}
],
vocab:[
["جاري","tetangga","تيتانݢا","komşu","قومشو"],
["تشرفنا","senang berkenalan","سننݢ بركينالان","tanıştığımıza memnun oldum","تانشتيميزه ممنون أولديم"],
["من أي بلد","dari mana","داري مانا","nerelisin","نيريليسين"],
["ورثة / ترك إرث","warisan","واريسان","miras kalmak","ميراس قالمق"],
["اسمع خبرًا جميلًا (ف八方)","—","—","işte bu","إيته بو"],
["بركة","berkah","بركه","bereket","بركت"]
],
grammar:[{t:"🇹🇷 «-dır/-dir» منذ مدة و«-mış» السماعي",b:"«Bir yıldır buradayım» = أنا هنا منذ سنة (لاحقة المدة -dır بعد الزمن). و«güzelmiş» = يقال إنه جميل/بان لي جميلًا — صيغة الماضي السماعي -mış: خبر سمعته ولم تره. من أجمل أدوات التركية: «Yorgunmuşsun» = يبدو أنك تعبان! (سمعتُ ذلك)"}],
why:`<p>التعارف التركي الاحترافي: <b>hoş bulduk فورًا ← جواب الجنسية + مدة + حالة التعلم (تفتح كل قلوب) ← مدح متواضع بmaşallah ← سؤال عن أصله (تقدير التاريخ) ← ختام بالبركة</b>. الشاي ليس مشروبًا — إنه طقس بناء الثقة: لا تستعجل موضوعك قبل أن يبرد الشاي مرتين.</p>`,
variants:[{kind:"formal",a:"لقاء رسمي أول",t:"Memnun oldum efendim, komşunuz olduk, iyi günler dilerim."},{kind:"casual",a:"مزاح جيران شباب",t:"Abi çayın şekeri mi çok, sen mi tatlisin? (gülüşme)"}]
});

DB.situations.push({
id:"dly-phone", kind:"daily", title:"مكالمة هاتفية (تركية)", sub:"«Alo! Kim konuşuyor?» — مكالمة واضحة بلا ارتباك", context:"يتصل بك رقم تركي — زبون محتمل سمع عن محلك. المكالمات أصعب من الحوار المباشر (بلا وجوه وإيماءات) — إليك النموذج.",
chapters:["messaging","questions"],
turns:[
{who:"C",a:"ألو؟ مساء الخير، معك مراد. هذا محل الأدوات المنزلية؟",t:"Alo? İyi akşamlar, Murat ben. Ev eşyası dükkânı mı burası?",tt:"ألو إيي آقشاملار مراد بين إيف إيشياسي دوككاني مي بوراسي",i:"Halo? Selamat malam, saya Murat. Ini toko perkakas rumah?",it:"هالو سيلامات مالام سايا مراد"},
{who:"S",a:"ألو، نعم بالضبط! معك أحمد، تفضل كيف أساعدك؟",t:"Alo, evet aynen! Ahmed ben, buyurun nasıl yardımcı olabilirim?",tt:"ألو إييت آينين أحمد بين بويورون ناسيل يارديمجي أولابيليريم",i:"Halo, iya betul! Saya Ahmed. Ada yang bisa saya bantu?",it:"هالو إيا بتول سايا أحمد"},
{who:"C",a:"سمعت عندكم غسالات صغيرة. كم سعرها تقريبًا؟",t:"Duydum ki küçük çamaşır makineleriniz var. Fiyatları ne civarı?",tt:"دويديوم كي كوتشوك تشاماشير ماكينيليرينيز ڤار فياتلاري نه تشيڤاري",i:"Katanya ada mesin cuci kecil. Harganya kira-kira berapa?",it:"كاتانيا ادا ميسين توتشي كيتشيل"},
{who:"S",a:"نعم عندنا. تبدأ من 4500 ليرة. متى تحتاجها؟",t:"Evet var. Dört bin beş yüzden başlıyor. Ne zaman lazım?",tt:"إييت ڤار دورت بين بش يوزدن باشلييور نه زمان لازيم",i:"Ada. Mulai dari empat ribu lima ratus. Kapan butuhnya?",it:"ادا مولاي داري إمڤات ريبو ليما راتوس"},
{who:"C",a:"عندي وقت غدًا. أين موقعكم بالضبط؟",t:"Yarın vaktim var. Adresiniz tam olarak nerede?",tt:"يارين ڤقتيم ڤار أدرسينيز تام أولاراق نيريدة",i:"Besok saya bisa. Alamatnya di mana persisnya?",it:"بيسوك سايا بيسا ألامتيا دي مانا"},
{who:"S",a:"شارع الجمهورية رقم 12، مقابل الصيدلية الخضراء. أعمل حتى الثامنة مساء.",t:"Cumhuriyet Caddesi 12, yeşil eczanenin karşısı. Akşam sekize kadar açığız.",tt:"قومهورييت قادديسي 12 ييشيل إيتشانينين قارشيسي آقشام سيكيزه قادار",i:"Jalan Republik nomor 12, seberang apotek hijau. Buka sampai jam delapan malam.",it:"جالان ريبوبليك نورور 12"},
{who:"C",a:"ممتاز. أحجز لي واحدة غسالة 5000 ليرة بلا صبغة؟",t:"Süper. Beş binlik bir tanesini ayırtır mısınız bana?",tt:"سوبر بش بينليك بير تانيسيني آيرتير ميسينيز بينه",i:"Mantap. Bisa simpan satu yang lima ribu?",it:"مانتاڤ بيسا سيمڤان ساتو ياڠ ليما ريبو"},
{who:"S",a:"حجزتها باسمك! أرسل لي موقعك واتساب أرسل لك الخريطة.",t:"Ayırttım, adınıza! WhatsApp'tan yazın, haritayı atayım.",tt:"آيرتيم آدينيزه ڤاتسآبتان يازين هاريتايي آتايم",i:"Sudah saya simpan atas nama! Chat WA ya, saya kirim lokasi.",it:"سوداه سايا سيمڤان atas ناما"},
{who:"C",a:"شكرًا جزيلًا! غدًا عندك إن شاء الله.",t:"Çok teşekkürler! Yarın görüşürüz inşallah.",tt:"تشوك تشيكورلر يارين كوروشورز إنشالله",i:"Makasih banyak! Besok ketemu ya insya Allah.",it:"ماكاسيه بنياك بيسوك كتيمو يا إنشالله"}
],
vocab:[
["ألو","halo","هالو","alo","ألو"],
["من المتكلم؟","ini siapa?","إيني سيابا","kim konuşuyor?","كيم كونوشويور"],
["سمعت أن/قيل أن","katanya","كاتانيا","duydum ki","دويديوم كي"],
["يبدأ من","mulai dari","مولاي داري","-den başlıyor","دن باشلييور"],
["يحجز (لك)","menyimpan / menahan","منيمڤن","ayırtmak","آيرتمق"],
["نراك/نتقابل غدًا","sampai besok","سامپاي بيسوك","yarın görüşürüz","يارين كوروشورز"]
],
grammar:[{t:"🇹🇷 أرقام الجمع والسعر بأسماء الأعداد",b:"«beş binlik» = التي بـ5000 (لاحقة -lik تحول الرقم لصفة!)، «onluk» = التي بعشرة. هذه الصيغة تسأل بها عن أي فئة سعرية: «İki binlik var mı?» = عندكم فئة الألفين؟ — لغة الأسواق الحقيقية، لا كتبها."}],
why:`<p>المكالمة الناجحة قصيرة ومشدودة: <b>تعريف أول بثوانٍ ← جواب سؤاله + سؤال مضاد (متى تحتاجها؟) ← عنوان بعلامة أوضح من اسم الشارع ← حجز ملموس ← تحويل للواتساب (خريطة + توثيق)</b>. قاعدة الهاتف الذهبية: إن تجاوز التفاصيل ثلاث نقاط — انقلها للرسائل فورًا.</p>`,
variants:[{kind:"formal",a:"رد محل رسمي",t:"Alo, iyi günler. Buyurun efendim, size nasıl yardımcı olabiliriz?"},{kind:"casual",a:"رد سريع عفوي",t:"Alo, buyur abi! Söyle bakalım, ne lazım?"}]
});

DB.situations.push({
id:"dly-hotel", kind:"daily", title:"في فندق (تركيا)", sub:"حجز، غرفة، فطور، والدفع — رحلة عمل مريحة", context:"وصلت أونالان لمدينة عن عمل. في الاستقبال (respsiyon) موظفة ودودة.",
chapters:["themes","time"],
turns:[
{who:"C",a:"مساء الخير. حجزت غرفة باسمي: أحمد، لثلاث ليالٍ.",t:"İyi akşamlar. Rezervasyonum var: Ahmed adına, üç gece.",tt:"إيي آقشاملار ريزيرڤاسيونوم ڤار أحمد آدينا أوتش كيتشه",i:"Selamat malam. Ada reservasi atas nama saya: Ahmad, tiga malam.",it:"سيلامات مالام ادا ريسيرڤاسي atas ناما سايا"},
{who:"S",a:"أهلًا بك أحمد بك. غرفة مفردة بإطلالة؟ جهزناها.",t:"Hoş geldiniz Ahmed Bey. Tek kişilik, manzaralı oda hazır.",tt:"هوش كيلدينيز أحمد بي تيك كيشيليك مانيارالي أودا هازير",i:"Selamat datang Pak Ahmad. Kamar single dengan pemandangan sudah siap.",it:"سيلامات داتنݢ پاك أحمد"},
{who:"C",a:"الإفطار من أي ساعة؟ وهل فيه خيارات حلال نباتية؟",t:"Kahvaltı saat kaçtan? Vejetaryen helal seçenek var mı?",tt:"قهڤالتي ساعات كاتتان ڤيطيتارين حلل سيتشينيك ڤار مي",i:"Sarapan dari jam berapa? Ada menu helal vegetarian?",it:"سرابان داري جام براپا"},
{who:"S",a:"من السابعة حتى العاشرة، بوفيه مفتوح وفيه كل الخيارات.",t:"Yediden ona, açık büfe, her seçenek mevcut.",tt:"ييديدن أونا آتشك بوفيه هر سيتشينيك موجرود",i:"Dari jam tujuh sampai sepuluh, prasmanan, semua pilihan ada.",it:"داري جام توجوه سامپاي سبولوه"},
{who:"C",a:"ممتاز. الواي فاي كلمة السر؟",t:"Süper. WiFi şifresi nedir?",tt:"سوبر ڤاي فاي شيفريسي نيدر",i:"Mantap. Password WiFi-nya apa?",it:"مانتاڤ پاسورد ڤاي-فاي-نيا أبا"},
{who:"S",a:"على البطاقة: «misafir2026». الغرفة 305، المصعد يمينك.",t:"Kartta yazıyor: «misafir2026». Oda 305, asansör sağınızda.",tt:"قارتتا يازيور ميسفير أوتوز بي أسانسور صاغينيزده",i:"Ada di kartu: «misafir2026». Kamar 305, lift di kanan.",it:"ادا دي كارتو"},
{who:"C",a:"شكرًا. الدفع الآن أم عند المغادرة؟",t:"Teşekkürler. Ödeme şimdi mi, çıkışta mı?",tt:"تشيكورلر أوديمه شيمي مي تشيكيشته مي",i:"Makasih. Bayar sekarang atau saat checkout?",it:"ماكاسيه باير سيكارانݢ أتاو ساعات تشيك-أوت"},
{who:"S",a:"كما تحب. إقامتك موفقة! أي شيء أنا بالخدمة.",t:"Nasıl isterseniz. İyi konaklamalar! Bir şey olursa emrinizdeyim.",tt:"ناسيل إسترسينيز إيي كوناقلامالار بير شيه أولورسا أمريند",i:"Terserah kakak. Selamat menginap! Kalau ada apa-apa, panggil saja.",it:"ترسيرا كاك سيلامات مينيناڤ"},
{who:"C",a:"دعني الآن وأدفع عند المغادرة. أعطاك الله العافية.",t:"Çıkışta vereyim o zaman. Kolay gelsin!",tt:"تشيكيشته فييريم أو زمان قولاى كيلسين",i:"Saat checkout nanti saja. Terima kasih ya!",it:"ساعات تشيك-أوت نانتي ساچا"}
],
vocab:[
["حجز","reservasi","ريسيرڤاسي","rezervasyon","ريزيرڤاسيون"],
["غرفة مفردة/مزدوجة","kamar single/double","كامار سينݢل","tek/çift kişilik oda","تك/تشيفت كيشيليك"],
["إفطار","sarapan","سرابان","kahvaltı","قهڤالتي"],
["بوفيه مفتوح","prasmanan","پراسمانان","açık büfe","آتشك بوفيه"],
["المغادرة (الخروج)","checkout / check-out","تشيك-أوت","çıkış","تشيكيش"],
["إقامة سعيدة","selamat menginap","سيلامات مينيناڤ","iyi konaklamalar","إيي كوناقلامالار"]
],
grammar:[{t:"🇹🇷 «-de/-da» للمكان + «-sızde» لديك",b:"sağınızda = على يمينك (sağ + ınız + da)، odada = في الغرفة، kartta = على البطاقة. لاحقة المكان تدور معك في كل جملة تركية — وسماعها يفك لك نصف الجمل: أين يقع كل شيء."}],
why:`<p>دخول الفندق المحترف: <b>الحجز بالاسم والمدة ← سؤال الإفطار والخيارات (قبل الجوع لا بعده) ← الواي فاي فورًا ← توضيح الدفع ← طلب الخدمة بابتسامة</b>. كلمة «misafir» (ضيف) تسمعها كثيرًا بالفنادق التركية — أصلها مُضيف العربية! الضيافة تراث مشترك حي.</p>`,
variants:[{kind:"formal",a:"استقبال رسمي فخم",t:"Hoş geldiniz efendim, rezervasyonunuzu onaylayabilir miyim?"},{kind:"casual",a:"استقبال ودّي ببيت صغير",t:"Hoş geldin kardeşim, hoş buldun bize — odan hazır!"}]
});

DB.situations.push({
id:"dly-smalltalk", kind:"daily", title:"دردشة الجيران والصغائر (إندونيسيا)", sub:"أنت ماشي… «Mau ke mana?» — أشهر دردشة شعبية", context:"في إندونيسيا كل من تقابلها يسألك: «Mau ke mana?» (إلى أين؟). إنه ليس تحقيقًا — إنه تحية! إليك الرقصة الاجتماعية كاملة.",
chapters:["intro","feelings"],
turns:[
{who:"S",a:"أخي! إلى أين؟ (جارك من الشرفة)",i:"Kak! Mau ke mana?",it:"كاك ماو كه مانا",t:"Nereye gidiyorsun kardeşim?",tt:"نيريه كيديورسون كارديشيم",n:"«Mau ke mana؟» التحية الإندونيسية الشاملة — الجواب ليس مهمًا، المهم التفاعل. قل أي اتجاه بابتسامة."},
{who:"C",a:"إلى السوق قليلًا. وأنت؟",i:"Ke pasar sebentar. Kakak sendiri?",it:"كه پاسار سبنتار كاكاك سنديري",t:"Pazara bir şey almaya. Sen nereye?",tt:"پازاره بير شيه آلماه سين نيريه"},
{who:"S",a:"أنا جالس أرتب المحل. هل أكلت؟",i:"Saya nitip toko. Udah makan?",it:"سايا نيتيڤ توكو أوده ماكان",t:"Dükkândayım işte. Yemek yedin mi?",tt:"دوككاندايم يشته ييميك ييدين مي",n:"«Udah makan?» (هل أكلت؟) — التحية الإندونيسية الثانية الكبرى! ليست دعوة عشاء — بل اهتمام صادق. الجواب: «Sudah, makasih» (أكلت، شكرًا) أو «Belum» (بعدها)."},
{who:"C",a:"أكلت الحمد لله. والعمل كيف يدور؟",i:"Udah, alhamdulillah. Jualannya lancar?",it:"أوده الحمدلله جوالنيا لانتشار",t:"Yedim elhamdülillah. İşler nasıl?",tt:"ييديم الحمدولله إيشلر ناسيل"},
{who:"S",a:"بسط الحمد لله، الروبيات تجري هادئة. أطفالك بخير؟",i:"Alhamdulillah lancar aja. Anak-anak sehat?",it:"الحمدلله لانتشار أجا أناك-أناك سيهات",t:"İyidir elhamdülillah. Çocuklar iyi mi?",tt:"إييدير الحمدولله تشوجقلار إيي مي"},
{who:"C",a:"بخير، بدأوا المدرسة. طيب أنا ماشي — سلملي على العائلة!",i:"Sehat, sekolah udah mulai. Ya udah saya duluan ya, salam bu keluarga!",it:"سيهات سكوله أوده مولاي يا أوده سايا دولوان يا سلام بو كيلوارݢا",t:"İyiler, okul başladı. Ben gideyim, aileye selam!",tt:"إيلير أوقول باشلادي بين كيدييم آيليه سلام",n:"«saya duluan» = أنا أولًا (معذرتي للانصراف) — أدب مغادرة الدردشة الإندونيسي. «salam bu keluarga» = سلّم لي على العائلة — ختام ودود مقدس."},
{who:"S",a:"سلامي لهم! حافظ على نفسك يا أخي.",i:"Salam balik! Hati-hati ya kak!",it:"سالم باليك هاتي-هاتي يا كاك",t:"Selm olsun, kendine iyi bak!",tt:"سالم أولسون كيندينه إيي باق"}
],
vocab:[
["إلى أين؟","mau ke mana?","ماو كه مانا","nereye?","نيريه"],
["هل أكلت؟","sudah makan?","سوداه ماكان","yedin mi?","ييدين مي"],
["بعدُ / لم يحدث","belum","بيلوم","henüz değil","هينوز ديكيل"],
["البيع/الأعمال","jualan","جوالن","işler","إيشلر"],
["أنا أولًا (معذرة)","saya duluan","سايا دولوان","ben gideyim","بين كيدييم"],
["سلّم على...","salam bu ...","سالم بو","...ye selam","يه سلام"]
],
grammar:[{t:"🇮🇩 «udah/belum» — ثنائية الحالة اليومية",b:"«sudah» تُختصر udah في الكلام (تم/فعلًا)، وعكسها belum (بعدُ). نصف أسئلة إندونيسيا اليومية تنتهي بهما: Udah makan? Udah pulang? Udah punya? أتقن الردود: Udah! / Belum, nanti. (بعدها، لاحقًا)."}],
why:`<p>هذه ليست حوارات فارغة — إنها زيت العلاقات الاجتماعية الذي تُشح به كل معاملاتك لاحقًا: <b>سؤال المسار (تحية) ← سؤال الأكل (اهتمام) ← سؤال الأعمال (اعتراف) ← سؤال العائلة (قرب) ← ختام بالسلام</b>. من يتقن هذه الرقصة القصيرة يفتح كل باب في الحي — والحي كله زبائنك.</p>`,
variants:[{kind:"formal",a:"دردشة رسمية مع كبير",i:"Pak, mau ke mana? Sehat selalu pak?"},{kind:"casual",a:"مزاح شباب الجيران",i:"Eh kak, bawa pacar mana? Kok sendirian aja! (ngguyu)"}]
});
