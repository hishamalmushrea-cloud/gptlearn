/* ===== مواقف الحياة الكاملة (الدفعة 1): مطار، مواصلات، مول، سوبرماركت، مقهى، بنك، مستشفى ===== */
"use strict";
window.DB = window.DB || {};
window.DB.situations = window.DB.situations || [];

DB.situations.push({
id:"dly-airport", kind:"daily", title:"في المطار (إندونيسيا)", sub:"تسجيل، أمتعة، بوابة — رحلة سلسة من الدخول للبوابة", context:"أنت مسافر في مطار سوكارنو-هاتا بجاكرتا. تصل كاونتر التسجيل قبل رحلتك بساعتين.",
chapters:["surv-airport","themes"],
turns:[
{who:"S",a:"تفضل سيدي! جواز السفر والتذكرة رجاءً.",i:"Silakan Pak. Paspor sama tiketnya ya.",it:"سيلاكان پاك پاسور ساما تيكيتنيا يا",t:"Buyurun efendim, pasaport ve bilet lütfen.",tt:"بويورون إفنديم پاساپورت ڤيه بيليت لوتفين"},
{who:"C",a:"تفضل — حقيبة واحدة للتسجيل وحقيبة يد.",i:"Ini Pak. Satu bagasi check-in, satu bagasi kabin.",it:"إيني پاك ساتو باآݢاسي تشيك-إين ساتو باآݢاسي كابين",t:"Buyurun. Bir valiz kayıt için, bir el bagajı.",tt:"بويورون بير ڤاليز قايت إيتشين بير إل باݢاجي"},
{who:"S",a:"حسنا. مقعد نافذة أم ممر؟",i:"Oke. Kursi dekat jendela atau dekat gang?",it:"أوكيه كورسي ديكات جيندلا أتاو ديكات ݢانݢ",t:"Pencere mi koridor mu?",tt:"پينجيره مي قوريدور مو"},
{who:"C",a:"نافذة رجاءً. كم كيلو مسموح؟",i:"Dekat jendela ya. Bagasi boleh berapa kilo?",it:"ديكات جيندلا يا باآݢاسي بوليه براپا كيلو",t:"Pencere lütfen. Bagaj limiti kaç kilo?",tt:"پينجيره لوتفين باݢاج ليميتي كاتش كيلو"},
{who:"S",a:"20 كيلو. حقيبتك 18 — تمام. البوابة 7، الصعود 10:20.",i:"Dua puluh kilo. Punya Bapak delapan belas — aman. Gate tujuh, boarding jam sepuluh dua puluh.",it:"دوا پولوه كيلو. پونيا باڤاك ديلابان بيلس أمان كيتيه توجوه بوردينݢ جام سبولوه دوا پولوه",t:"Yirmi kilo. Sizinki on sekiz — sorun yok. Kapı 7, biniş 10.20.",tt:"ييرمي كيلو سيزينكي أون سيكيز سورون يوك قابي ييدي بيينيش أوندا ييرمي",n:"لاحظ الأرقام بالدقائق: jam sepuluh dua puluh / 10.20 — الأرقام ساعة السفر."},
{who:"C",a:"شكرًا! أين البوابة 7؟",i:"Makasih! Gate tujuh di mana ya?",it:"ماكاسيه كيتيه توجوه دي مانا يا",t:"Teşekkürler! Yedi numaralı kapı nerede?",tt:"تشيكورلر ييدي نومارالي قابي نيريدة"},
{who:"S",a:"يمينًا بعد التفتيش، ثم انزل السلم. رحلة موفقة!",i:"Kanan setelah pemeriksaan, terus turun tangga. Selamat jalan Pak!",it:"كانان سيتيلاه بيمريكساءن تيروس تورون تانݢݢا سيلامات جالن پاك",t:"Kontrolten sonra sağda, merdivenlerden inin. İyi uçuşlar!",tt:"كونترولتن سونرا صاغده مرديونليردن إيين إيي أوتشوشلار"}
],
vocab:[
["جواز سفر","paspor","پاسور","pasaport","پاساپورت"],
["تذكرة","tiket","تيكيت","bilet","بيليت"],
["مقعد نافذة/ممر","kursi jendela / gang","كورسي جيندلا / ݢانݢ","pencere / koridor","پينجيره / قوريدور"],
["تفتيش أمني","pemeriksaan","بيمريكساءن","güvenlik kontrolü","كوفينليك كونترولو"],
["سلم","tangga","تانݢݢا","merdiven","مرديوين"],
["الصعود للطائرة","boarding","بوردينݢ","biniş","بيينيش"]
],
grammar:[{t:"🇮🇩 «setelah / sebelum» — قبل وبعد",b:"setelah pemeriksaan = بعد التفتيش، sebelum berangkat = قبل المغادرة. ثنائية زمنية تظهر في كل تعليمات المطار والبنك. التركية: sonra/önce — kontrol**den sonra** (بعد التفتيش)، uçuş**tan önce** (قبل الرحلة)."}],
why:`<p>تسجيل مثالي بثلاثة قرارات: <b>مقعد ← وزن أمتعة ← بوابة ووقت بصيغة رقمية واضحة</b>. كرر رقم البوابة والوقت في سؤالك دائمًا (Gate tujuh… boarding jam sepuluh dua puluh) — التكرار الرقمي يمنع أشهر أخطاء السفر.</p>`,
variants:[{kind:"formal",a:"سؤال رسمي عن الوزن الزائد",i:"Maaf Pak, kalau lebih dari dua puluh kilo, tambahannya berapa?"},{kind:"casual",a:"مع موظف شاب مازح",i:"Bang, kursinya yang paling depan dong, kakaku panjang!"}]
});

DB.situations.push({
id:"dly-transport", kind:"daily", title:"المواصلات العامة (باص/مترو تركيا)", sub:"بطاقة، محطة، نزول في المكان الصحيح", context:"أول مرة تستخدم المترو بإسطنبول. تحتاج بطاقة (İstanbulkart) والوصول لحي شيشلي.",
chapters:["themes","surv-money"],
turns:[
{who:"C",a:"عفوًا، أين أشتري بطاقة إسطنبول؟",t:"Afedersiniz, İstanbulkartı nereden alabilirim?",tt:"أفيدرسينيز إسطنبولقارتي نيريدن آلاپيليريم",i:"Permisi, İstanbulkart beli di mana?",it:"پرميسي إسطنبولقارت بيلي دي مانا",n:"İstanbulkart بطاقة موحدة لكل المواصلات — تُشحن من آلات (Biletmatik) عند المدخل."},
{who:"S",a:"هناك آلة صفراء. تريد تشحنها؟",t:"Şurada sarı cihaz var. Yükleme yapmak istiyor musunuz?",tt:"شوراده صاري جهاز ڤار يوكلمه يابماق إستيور موسونوز",i:"Ada mesin kuning di situ. Mau top up?",it:"ادا ميسين كونينݢ دي سيتو ماو توڤ-أوڤ"},
{who:"C",a:"نعم، 50 ليرة. كيف أعرف متى أنزل؟",t:"Evet, elli lira. İnmem gereken durağı nasıl anlarım?",tt:"إييت إلي ليرا إينمش كيريك دوراغي ناسيل أنلاريم",i:"Iya, lima puluh ribu. Berhentinya mana?",it:"إيا ليما پولوه"},
{who:"S",a:"إلى شيشلي: ست محطات، اسمها مكتوب على الشاشة والجدران.",t:"Şişli’ye altı durak. İsmi ekranda ve duvarlarda yazar.",tt:"شيشلييه ألتي دوراق إسمي إكرانده ڤيه دوفارلاردا يازر",i:"Ke Şişli enam stasiun. Namanya ada di layar sama dinding.",it:"كه شيشلي إينام ستاسيون"},
{who:"C",a:"أشكرك — الباب يفتح تلقائيًا؟",t:"Teşekkürler — kapılar otomatik mi açılıyor?",tt:"تشيكورلر قابيلر أوتوماتيك مي آتشيليور",i:"Makasih! Pintunya buka sendiri?",it:"ماكاسيه بنتونيا بوكا سنديري"},
{who:"S",a:"نعم، لكن أسرع — تُغلق سريعًا. «انتبه للأبواب!»",t:"Evet ama hızlı olun, çabuk kapanır. «Kapılara dikkat!»",tt:"إييت أما هيزلي أولون تشابوق قابانير قابيلره ديكات",i:"Iya, tapi cepat ya, pintunya cepet nutup. Hati-hati!",it:"إيا تاڤي تشيڤات يا بنتونيا تشيڤيت نوتوپ"},
{who:"C",a:"(عند الوصول) عفوًا، هذه شيشلي؟",t:"(inerken) Afedersiniz, burası Şişli mi?",tt:"أفيدرسينيز بوراسي شيشلي مي",i:"Permisi, ini Şişli?",it:"پرميسي إيني شيشلي"},
{who:"S",a:"بالضبط — المخرج الأيمن للخروج. مع السلامة!",t:"Aynen öyle — sağ çıkış. İyi günler!",tt:"آينين أويه صاغ تشيقش إيي كونلر",i:"Betul! Keluar pintu kanan. Hati-hati ya!",it:"بتول كيلوار بنتو كانان"}
],
vocab:[
["بطاقة المواصلات","kartu transportasi","قارتو ترانسبورتاسي","İstanbulkart","إسطنبولقارت"],
["يشحن البطاقة","top up / isi ulang","توڤ-أوڤ / إيسي أولانݢ","yüklemek","يوكليمك"],
["محطة","stasiun / halte","ستاسيون / هالتيه","durak","دورق"],
["ينزل (من الباص)","turun","تورون","inmek","إينمك"],
["المخرج","pintu keluar","بنتو كيلوار","çıkış","تشيكيش"],
["انتبه!","hati-hati!","هاتي-هاتي","dikkat!","ديكات"]
],
grammar:[{t:"🇹🇷 «-mesi gereken» = ما يجب فعله",b:"«İnmem gereken durak» = محطتي التي يجب أن أنزل بها (inmek ينزل + mem gereken الواجب). بناء فاخر يسمع كثيرًا في الإرشاد: «İneceğiniz durak» = المحطة التي ستنزلها. بالإندونيسية يكفي السؤال المباشر: Berhentinya mana?"}],
why:`<p>رحلة مواصلات آمنة: <b>بطاقة ← شحن ← عدد المحطات ← علامة النزول ← تأكيد جارٍ + مخرج</b>. «عدد المحطات» (altı durak) أصدق من أسماء الشوارع في المترو — والجملة الختامية «burası Şişli mi?» جملة النجاة عند الشك دومًا.</p>`,
variants:[{kind:"formal",a:"سؤال رسمي لشخص أكبر",t:"Efendim, Şişli’ye kaç durak sonra iniyorum?"},{kind:"casual",a:"مع شاب عفوي",t:"Abi buradan Şişli’ye kaç durak? Kafa karıştı resmen!"}]
});

DB.situations.push({
id:"dly-mall", kind:"daily", title:"في المول التركي (محل + كاشير)", sub:"تسوق بقية أسعار المول: ثابتة، فيشت، أقساط", context:"في مول بإسطنبول تريد شراء سترة. الأسعار ثابتة (pazarlık yok في المولات) لكن الأقساط موجودة.",
chapters:["products","prices"],
turns:[
{who:"S",a:"أهلًا! تفضل، السترات الجديدة هناك.",t:"Hoş geldiniz! Yeni ceketler şurada buyurun.",tt:"هوش كيلدينيز ييني جيكيتلر شوراده بويورون",i:"Selamat datang! Jaket baru di situ kak.",it:"سيلامات داتنݢ جاكيت بارو دي سيتو كاك"},
{who:"C",a:"كم هذه؟ معلى لافتة خصم؟",t:"Bu kaç lira? İndirimde mi?",tt:"بو كاتش ليرا إنديريمده مي",i:"Ini berapa? Lagi diskon?",it:"إيني براپا لاݢي ديسكون"},
{who:"S",a:"900 — خصم 30% من 1290. عرض هذا الأسبوع فقط.",t:"Dokuz yüz. Bin iki yüz doksandan yüzde otuz indirimli, sadece bu hafta.",tt:"دوقوز يوز بين إيكي يوز دوكساندان يوزده أوتوز إنديريملي صادجه بو هافتا",i:"Sembilan ratus. Diskon tiga puluh persen, minggu ini aja.",it:"سيمبيلان راتوس ديسكون تيݢا پولوه پيرسين"},
{who:"C",a:"أقساط ممكنة؟",t:"Taksit yapılıyor mu?",tt:"تقسيت يابيليور مو",i:"Bisa cicilan?",it:"بيسا تشيتشيلان",n:"«taksit» ثقافة المولات التركية — «peşin fiyatına 6 taksit» أشهر عروضها."},
{who:"S",a:"نعم — 9 أقساط بسعر النقدي مع بطاقات الشريك.",t:"Evet, anlaşmalı kartlarla peşin fiyatına dokuz taksit.",tt:"إييت أنلاشمالي قارتلارله يشين فياتينا دوقوز تقسيت",i:"Bisa! Sembilan cicilan tanpa bunga.",it:"بيسا سيمبيلان تشيتشيلان تانڤا بونݢا"},
{who:"C",a:"أجرب مقاس L أولًا.",t:"Önce L bedenini deneyeyim.",tt:"أونجه إيل بيدينيني دينييم",i:"Coba dulu ukuran L ya.",it:"تشوبا دولو أوكوران إيل يا"},
{who:"S",a:"غرف القياس خلفك. إن لم يناسب، عندي XL أيضًا.",t:"Kabin arkanızda. Olmazsa XL de var.",tt:"قابين أركانيزده أولمازسا إكس إيل د ڤار",i:"Kamar pas di belakang. Kalau nggak muat, ada XL.",it:"كامر پاس دي بلاكانݢ كالاو نݢاك موات ادا إكس إيل"},
{who:"C",a:"ممتاز — آخذها. الفيشت رجاءً للضمان.",t:"Süper, alıyorum. Garanti için fişini alayım.",tt:"سوبر آليوروم كارنتي إيتشين فيشيني آلايم",i:"Oke, saya ambil. Struknya sekalian ya buat garansi.",it:"أوكيه سايا أمبول ستروكنيا سيكاليان يا"}
],
vocab:[
["سترة","jaket","جاكيت","ceket","جيكيت"],
["خصم 30%","diskon tiga puluh persen","ديسكون تيݢا پولوه پيرسين","yüzde otuz indirim","يوزده أوتوز إنديريم"],
["أقساط","cicilan","تشيتشيلان","taksit","تقسيت"],
["سعر نقدي","harga tunai","هارݢا توناي","peşin fiyat","يشين فيات"],
["غرفة القياس","kamar pas","كامر پاس","kabin / deneme kabini","قابين"],
["يناسب (مقاس)","muat / pas","موات / پاس","olmak (uygun)","أولماق"]
],
grammar:[{t:"🇹🇷 «peşin fiyatına» — أسلوب عروض المولات",b:"peşin = نقدي، fiyatına = بسعر — «peşin fiyatına taksit» تعني حرفيًا «أقساط بسعر النقدي» أي بلا فائدة. عبارة جاهزة تسمعها في كل مول تركي — احفظها كتعبير واحد."}],
why:`<p>سوق المول مختلف عن البازار: <b>سعر ثابت بلا مساومة + خصم معلن + أقساط + فيشت</b>. لاحظ أن البائع أجاب بالسعر الأصلي والخصم معًا (1290 ← 900) — شفافية المولات — وأن الفيشت للضمان ثقافة رسمية لا خيار.</p>`,
variants:[{kind:"formal",a:"استفسار رسمي بالكاشير",t:"Kredi kartıyla ödeyebilir miyim? Fiş de alabilir miyim?"},{kind:"casual",a:"مزاح مع بائع شاب",t:"Abi yüzde otuz indirim mi? Bana yüzde ellisini yap, her şey yarı fiyatına olsun! (gülüşme)"}]
});

DB.situations.push({
id:"dly-super", kind:"daily", title:"في السوبرماركت (إندونيسيا)", sub:"ابحث عن صنفك واسأل عن الكاشير والعروض", context:"في سوبرماركت كبير بجاكرتا (Superindo). تبحث عن أرز وأدوات منزلية ثم تدفع.",
chapters:["themes","checkout"],
turns:[
{who:"C",a:"عفوًا، أين أجد الأرز والمكرونة؟",i:"Permisi, beras sama mie di mana ya?",it:"پرميسي بيراس ساما مييه دي مانا يا",t:"Affedersiniz, pirinç ve makarna nerede?",tt:"أفيدرسينيز پيرينتش ڤيه ماقارنه نيريدة"},
{who:"S",a:"الممر 3 للأرز، والمكرونة ممر 4 بجانبه.",i:"Beras di lorong tiga, mie di lorong empat sebelahnya.",it:"بيراس دي لوروڠ تيݢا مييه دي لوروڠ إمڤات سبيلهنيا",t:"Pirinç üçüncü koridorda, makarna yanındaki dördüncüde.",tt:"پيرينتش أوتشونجي قوريدورده"},
{who:"C",a:"وهذه المكانس؟ أرى لافتة خصم.",i:"Terus sapu ini? Ada tulisan diskon.",it:"تيروس ساڤو إيني ادا توليسان ديسكون",t:"Süpürge şurada mı? İndirim etiketi görüyorum.",tt:"سيپوركه شوراده مي إنديريم إتيكيتي كورويوروم"},
{who:"S",a:"نعم — اشترِ واحدة والثانية بنصف السعر. العرض ينتهي غدًا.",i:"Iya, beli satu dapat yang kedua setengah harga. Promo habis besok.",it:"إيا بيلي ساتو داڤات ياڠ كيدوا ستنݢاه هارݢا پرومو هابيس بيسوك",t:"Evet, bir alana ikincisi yarı fiyat. Kampanya yarın bitiyor.",tt:"إييت بير آلانا إيكينجيسي ياري فيات قامپانيا يارين بيتيور",n:"«beli satu gratis satu / setengah harga» — صيغ العروض الإندونيسية الشهيرة (اشترِ واحدًا واحصل…)، تقرأها في كل سوبرماركت."},
{who:"C",a:"أخذ اثنتين إذن. الكاشير أين؟",i:"Ambil dua deh. Kasirnya di mana?",it:"أمبول دوا ديه قاسيرنيا دي مانا",t:"İki alayım o zaman. Kasa nerede?",tt:"إيكي آلايم أو زمان قاسه نيريدة"},
{who:"S",a:"أمامك مباشرة — الصناديق الثلاثة المفتوحة.",i:"Dekpan Bapak, kasir yang tiga terbuka.",it:"ديبـڤان باڤاك قاسير ياڠ تيݢا تيربوقا",t:"Hemen önünüzde, açık üç kasa var.",tt:"هيمين أونونوزده آتشك أوتش قاسه ڤار"},
{who:"S",a:"(عند الكاشير) عضوية معك؟ حقيبة أم كيس؟",i:"(di kasir) Ada kartu member? Mau bawa tas sendiri atau kantong?",it:"ادا قارتو ممبر ماو باوا تاس سنديري أتاو كانتوڠ",t:"(kasada) Kartınız var mı? Poşet ister misiniz?",tt:"قاساده قارتينيز ڤار مي پوشيت إستير ميسينيز",n:"«kantong plastik» مدفوعة بإندونيسيا (قانون بيئي كتركيا) — لذلك السؤال. أحضر حقيبتك وتوفر النقود."},
{who:"C",a:"بدون عضوية، ومعي حقيبة. بطاقة QRIS.",i:"Nggak ada member. Bawa tas sendiri. Bayar QRIS ya.",it:"نݢاك ادا ممبر باوا تاس سنديري باير قريس يا",t:"Kart yok, kendi çantam var. Kartla ödeyeyim.",tt:"قارت يوك كيندي تشانتام ڤار قارتله أودييم"}
],
vocab:[
["أرز (خام)","beras","بيراس","pirinç","پيرينتش"],
["ممر/رواق","lorong","لوروڠ","koridor","قوريدور"],
["مكنسة","sapu","ساڤو","süpürge","سيپوركه"],
["نصف السعر","setengah harga","ستنݢاه هارݢا","yarı fiyat","ياري فيات"],
["كاشير","kasir","قاسير","kasa","قاسه"],
["عضوية","kartu member","قارتو ممبر","üyelik kartı","أويليك قارتي"]
],
grammar:[{t:"🇮🇩 «dapat» = يحصل على (لغة العروض)",b:"beli satu dapat dua = اشترِ واحدة واحصل على اثنتين — «dapat» (يحصل) فعل العروض الأول. بالتركية «bir alana bir hediye» أو «2 al 1 öde» (خذ 2 وادفع 1) — صيغ الحملات (kampanya) الرسمية."}],
why:`<p>سوبرماركت بلا دراما: <b>سؤال ممر ← عرض خصم بتفسير ← كاشير ← قرار بيئي (حقيبة/كيس) ووسيلة دفع</b>. لاحظ ثقافة «member card» — غالبًا الخصم الحقيقي محجوز لحامليها؛ اسأل عنها عند الكاشير دائمًا.</p>`,
variants:[{kind:"formal",a:"سؤال موظف رفوف رسمي",i:"Maaf Pak, kalau minyak goreng ada di mana? Yang promo juga ada?"},{kind:"casual",a:"مع كاشير شابة عفوية",i:"Mbak, ini yang scan-nyaerror, coba cek lagi dong!"}]
});

DB.situations.push({
id:"dly-cafe", kind:"daily", title:"في المقهى (قهوة تركية)", sub:"اطلب مثل الأتراك: şekerli mi sade mi?", context:"مقهى شعبي (kıraathane) بحي إسطنبولي. ترید تجربة القهوة التركية الأصيلة.",
chapters:["themes"],
turns:[
{who:"S",a:"أهلًا! ماذا تشرب؟",t:"Hoş geldin! Ne içersin?",tt:"هوش كيلدين نه إيتشيرسين",i:"Selamat datang! Mau minum apa?",it:"سيلامات داتنݢ ماو مينوم أبا"},
{who:"C",a:"قهوة تركية — لكن كم سكر أضع؟ ماذا تنصح؟",t:"Türk kahvesi ama şekeri nasıl? Ne önerirsin?",tt:"تورك قاهڤيسي أما شيكري ناسيل نه أونريرسين",i:"Kopi Turki. Gulanya berapa? Saran kakak apa?",it:"قوڤي تورقي ݢولانيا براپا ساران كاكاك أبا"},
{who:"S",a:"الأولى لك: «orta» — سكر متوسط. سادة للخبراء!",t:"İlk denemen için «orta» — orta şekerli. Sade ustalara kalır!",tt:"إيلك دينيمنين إيتشين أورتا أورتا شيكيرلي صاديه أوستالاره قالير",n:"مقياس القهوة التركي المقدس: sade (بلا سكر) · az (قليل) · orta (متوسط) · şekerli (حلو) — احفظه تنجُ من أطول سؤال في تركيا."},
{who:"C",a:"إذن orta. ومعها طياب؟",t:"Öyle olsun. Yanına bir şey alsam?",tt:"أويه أولسون يانينا بير شيه آلسام",i:"Oke. Sama camilan apa?",it:"أوكيه ساما چاميلن أبا"},
{who:"S",a:"لقمة (lokma) أو حلاوة طحينية مع القهوة دائمًا.",t:"Lokma ya da tahin helvası iyi gider.",tt:"لوقمه يا دا طحين حلڤاسي إيي كيدير",i:"Cemilan manis cocok sama kopi.",it:"…"},
{who:"C",a:"لقمة إذن. (بعد الشرب) ممتازة! كيف أعرف نهايتها؟",t:"Lokma olsun. (içtikten sonra) Harika! Tabakta nerede bittiğini nasıl anlarım?",tt:"لوقمه أولسون هاريكه طباقتاه نيريدة بيتييكيني ناسيل أنلاريم",i:"Bagus banget! Kopinya sampai mana boleh diminum?",it:"…"},
{who:"S",a:"اشرب حتى تصل للثقل — التفل يبقى. وعليك قراءة فنجانك!",t:"Ağırlaşana kadar iç — telvenin üstü kalır. Bir de fincanını okut!",tt:"آييرلاشانا قادار إيتش تلفوين أوستو قالير بير ده فينجانيني أوقوت",n:"قراءة الفنجان (kahve falı) عادة اجتماعية محببة — طلبها مزاح ودّي، ورفضها مهذب أيضًا."},
{who:"C",a:"هههه لاحقًا! الحساب رجاءً.",t:"Haha, sonra belki! Hesap lütfen.",tt:"هاها سونرا بلكي حساب لوتفين",i:"Nanti aja hehe. Bonnya ya.",it:"…"}
],
vocab:[
["قهوة تركية","kopi Turki","قوڤي تورقي","Türk kahvesi","تورك قاهڤيسي"],
["سادة/متوسطة/حلوة","—","—","sade / orta / şekerli","صاديه / أورتا / شيكيرلي"],
["تفل القهوة","ampas kopi","أمڤاس قوڤي","telve","تلفيه"],
["لقمة (حلوى)","cemilan manis","چاميلن مانيس","lokma","لوقمه"],
["حلاوة طحينية","—","—","tahin helvası","طحين حلڤاسي"],
["قراءة الفنجان","—","—","kahve falı","قاهڤه فالي"]
],
grammar:[{t:"🇹🇷 «iyi gider» = يروق معه/يناسبه",b:"حرفيًا «يمشي جيدًا» — عبارة المطاعم التركية للتوصيلات: çayın yanına kurabiye iyi gider (البسكويت يروق مع الشاي). استعملها تبدُ خبيرًا في المقاهي فورًا."}],
why:`<p>تجربة القهوة التركية الطقسية: <b>مقياس السكر ← توصيلة حلوى ← حد الشرب (الثقل) ← دعابة قراءة الفنجان</b>. القهوة هنا اجتماع قبل أن تكون مشروبًا — لا تستعجل الحساب قبل أن يبرد الحديث مرتين.</p>`,
variants:[{kind:"formal",a:"طلب رسمي في مقهى أنيق",t:"Bir Türk kahvesi orta şekerli ve bir su lütfen."},{kind:"casual",a:"مع صاحب المقهى صديق",t:"Abi bugün sade içeyim, usta oldum artık!"}]
});

DB.situations.push({
id:"dly-bank", kind:"daily", title:"في البنك (إندونيسيا)", sub:"فتح حساب وتحويل — بلا ارتباك بالمصطلحات", context:"تريد فتح حساب بنكي بجاكرتا لتحويلات عملك. الموظفة تتحدث الإنجليزية المبسطة والإندونيسية.",
chapters:["surv-money","wholesale"],
turns:[
{who:"C",a:"صباح الخير. أريد فتح حساب توفير.",i:"Selamat pagi. Saya mau buka rekening tabungan.",it:"سيلامات پاݢي سايا ماو بوكا رييكينينݢ تابوڠن",t:"Günaydın. Bir tasarruf hesabı açmak istiyorum.",tt:"كُون‌أيدن بير تساروف حسابي آتشماق إستيوروم"},
{who:"S",a:"أهلًا. معك جواز وKITAS/إقامة؟ وصورة شخصية.",i:"Selamat datang. Paspor sama KITAS ada? Foto ukuran paspor juga.",it:"سيلامات داتنݢ پاسور ساما كيتاس ادا فوتو أوكوران پاسور يوݢا",t:"Hoş geldiniz. Pasaport ve ikamet izni var mı? Bir de fotoğraf.",tt:"هوش كيلدينيز پاساپورت ڤيه إيقامت إزني ڤار مي"},
{who:"C",a:"معي كل شيء. هل هناك حد أدنى للإيداع؟",i:"Semua ada. Minimal setoran berapa?",it:"سموا ادا مينيمال سيتوران براپا",t:"Hepsi var. Minimum yatırım tutarı ne kadar?",tt:"هپسي ڤار مينيموم ياتيريم توتاري نه قادار"},
{who:"S",a:"100 ألف روبية. وسنفعّل التطبيق والـm-banking فورًا.",i:"Seratus ribu. Nanti aplikasi sama m-banking langsung aktif.",it:"سراتوس ريبو نانتي أپليكاسي ساما إم-بانكينݢ لانݢسونݢ أكتيف",t:"Yüz bin. Uygulama ve mobil bankaçılık hemen aktif olur.",tt:"يوز بين أوݢولامه ڤيه موپيل بانكتشيليق هيمين أكتيف أولور",n:"«m-banking» — الخدمة المصرفية بالهاتف، وسيلة الحياة الإندونيسية؛ فعّلها فور الفتح."},
{who:"C",a:"ممتاز. وأريد تحويلًا شهريًا آليًا لمورد — الرسوم كم؟",i:"Bagus. Saya mau transfer otomatis tiap bulan ke supplier. Biayanya berapa?",it:"باغوس سايا ماو ترانسفير أوتوماتيس تيiap بولن كه سوپلاير بياينيا براپا",t:"Harika. Her ay otomatik havale istiyorum. Ücreti ne kadar?",tt:"هاريكة هير آي أوتوماتيك هاڤاله إستيوروم أوجريتي نه قادار"},
{who:"S",a:"التحويل المحلي 6.500 بين بنوك نفس الشبكة مجانًا.",i:"Transfer antar bank enam ribu lima ratus, sesama bank gratis.",it:"ترانسفير أنتار بانك إينام ريبو ليما راتوس سيسما بانك كراتيس",t:"Bankalar arası küçük bir ücret, aynı banka ücretsiz.",tt:"بانقلار آراسي كوتشوك بير أوجري آيني بانك أوكرتسيز"},
{who:"C",a:"واضح. وقّع هنا؟ شكرًا جزيلًا!",i:"Jelas. Tanda tangan di sini? Makasih banyak ya!",it:"جيلاس تاندا تانݢان دي سيني ماكاسيه بنياك يا",t:"Anlaşıldı. Buraya imza atıyorum? Çok teşekkürler!",tt:"أنلاشيلدي بوراه إيمزا آتيوروم تشوك تشيكورلر"},
{who:"S",a:"هنا وهنا. بطاقتك بعد أسبوع، والرقم السري عبر الرسالة. دائمًا في خدمتك!",i:"Di sini sama di sini. Kartunya minggu depan, PIN dikirim lewat SMS. Terima kasih!",it:"دي سيني ساما دي سيني قارتونيا مينݢو ديبان بين ديكيريم ليوات إس-إم-إس تريما كاسي",t:"Buradan ve buradan. Kartınız bir hafta sonra, şifre SMS ile. İyi günler!",tt:"بورادان ڤيه بورادان قارتينيز بير هافتا سونرا شيفري إس-إم-إس إيلي"}
],
vocab:[
["حساب توفير","rekening tabungan","رييكينينݢ تابوڠن","tasarruf hesabı","تساروف حسابي"],
["إيداع/حد أدنى","setoran / minimal","سيتوران / مينيمال","yatırım / asgari","ياتيريم / أسكاري"],
["تحويل","transfer","ترانسفير","havale","هاڤاله"],
["رسوم","biaya","بيايه","ücret","أوجريت"],
["رقم سري","PIN / kata sandi","بين / قاته ساندي","şifre","شيفري"],
["توقيع","tanda tangan","تاندا تانݢان","imza","إيمزا"]
],
grammar:[{t:"🇮🇩 «antar / sesama» — بين ومن نفس النوع",b:"transfer antar bank = تحويل بين البنوك (بين = antar)، sesama bank = داخل نفس البنك (sesama = من جنس واحد). كلمتا الخدمات المالية: «biaya admin antar bank» رسوم بين البنوك — اسأل عنهما دائمًا قبل التحويل."}],
why:`<p>زيارة بنك ناجحة: <b>وثائق محضرة ← حد أدنى واضح ← تفعيل m-banking فوري ← رسوم التحويل بدقة (بين/داخل) ← موعد استلام البطاقة</b>. أهم نصيحة واقعية: فعّل m-banking في نفس الزيارة — الطوابير الإندونيسية تحتاج صبر الأنبياء، والتطبيق يغنيك عن 90% منها.</p>`,
variants:[{kind:"formal",a:"بمكتب خدمات الشركات",i:"Untuk pembayaran supplier rutin, adakah layanan autodebet?"},{kind:"casual",a:"مع موظفة مقتربة",i:"Mbak, biar nggak ngantri, lewat aplikasi aja bisa ya?"}]
});

DB.situations.push({
id:"dly-clinic", kind:"daily", title:"في العيادة/المستشفى (إندونيسيا)", sub:"تسجيل، وصف الأعراض، وصفة الدواء", context:"ألم في الحلق وحمى منذ يومين. ذهبت لعيادة قريبة (klinik) بجوار منزلك.",
chapters:["surv-emergency","themes"],
turns:[
{who:"C",a:"أريد الكشف — حلقي يؤلمني وحمى منذ أمس.",i:"Mau periksa. Tenggorokan sakit, demam dari kemarin.",it:"ماو بيريكسا تينݢݢوروكان ساكيت ديمان داري كيمارين",t:"Muayene olmak istiyorum. Boğazım ağrıyor, dünden beri ateşim var.",tt:"مؤاينه أولماق إستيوروم بوݢازيم آغرييور دوندين بيري أتيشيم ڤار"},
{who:"S",a:"هل هذا أول زيارة؟ سجل بياناتك هنا.",i:"Kunjungan pertama ya? Isi data dulu sini.",it:"كونجونݢن بيرتاما يا إيسي داتا دولو سيني",t:"İlk kez mi geliyorsunuz? Bilgilerinizi buraya yazın.",tt:"إيلك كيز مي كيليورسونوز بيلكيليرينيزي بوراهه يازين"},
{who:"C",a:"تم. كم الانتظار؟ أستطيع الدفع بالبطاقة؟",i:"Sudah. Antri lama? Bayar pakai kartu bisa?",it:"سوداه أنتري لاما باير پاكاي قارتو بيسا",t:"Oldu. Bekleme ne kadar? Kartla ödeyebilir miyim?",tt:"أولدي بيكليمه نه قادار قارتله أوديابيلير ميين"},
{who:"S",a:"طبيب واحد قبلك — 15 دقيقة. نقدي أو QRIS فقط.",i:"Satu lagi sebelum Bapak, lima belas menit. Tunai atau QRIS aja.",it:"ساتو لاݢي سبيلوم باڤاك ليما بيلس مينيت توناي أتاو قريس أجا",t:"Bir kişi önünüzde, on beş dakika. Nakit ya da kart.",tt:"بير كيشي أونونوزده أون بيش داقيقا ناكيت يا دا قارت"},
{who:"S",a:"(الطبيب) قل «آه»… احمرار خفيف. أنفلونزا موسمية.",i:"(dokter) Bilang “aaah”… merah sedikit. Ini flu biasa.",it:"دوكتير بيلاڠ آآح ميراه سديكيت إيني فلو بياسا",t:"(doktor) “Aaa” deyin… hafif kızarıklık. Mevsimsel grip.",tt:"دوكتور آآه دييين هافيف قيراريقليك مفسيمسل قريب"},
{who:"C",a:"أحتاج مضادًا حيويًا؟",i:"Perlu antibiotik?",it:"برلو أنتيبيوتيك",t:"Antibiyotik gerekir mi?",tt:"أنتيپيوتيك كيركير مي",n:"سؤال ذكي — لكن الإجابة الطبية الصحيحة: الأنفلونزا فيروسية والمضاد لا يفيد. سيسألك الطبيب غالبًا عن الحساسية: «Alergi obat ada?»"},
{who:"S",a:"لا — فيروس. خافض حرارة وغرغرة وراحة 3 أيام.",i:"Tidak, ini virus. Obat demam, kumur, istirahat tiga hari.",it:"تيدق إيني ڤيروس أبات ديمان كومور إيستيراهات تيݢا هاري",t:"Hayır, virüs. Ateş düşürücü, gargara ve üç gün dinlenin.",tt:"هاير ڤيروس أتيش دوشوروجو ݢارݢارا ڤيه أوتش كون دينلينين"},
{who:"C",a:"شكرًا يا دكتور. أكتب لي هذا لجهة عملي؟",i:"Makasih Dok. Bisa dibuatkan surat sakit buat kantor?",it:"ماكاسيه دوك بيسا ديبواتكان سورت ساكيت بوات كانتور",t:"Teşekkürler doktor. İşyerine rapor yazabilir misiniz?",tt:"تشيكورلر دوكتور إشييرينه راپور يازاپيلير ميسينيز",n:"«surat sakit / rapor» — التقرير الطبي للعمل: اطلبه دائمًا إن غبت، ثقافة رسمية في البلدين."}
],
vocab:[
["كشف/فحص","periksa / cek","پيريكسي / تشيك","muayene","مؤاينه"],
["انتظار/دور","antri","أنتري","sıra / bekleme","صيرا / بيكليمه"],
["احمرار","merah","ميراه","kızarıklık","قيراريقليق"],
["مضاد حيوي","antibiotik","أنتيبيوتيك","antibiyotik","أنتيپيوتيك"],
["خافض حرارة","obat demam","أبات ديمان","ateş düşürücü","أتيش دوشوروجو"],
["تقرير مرضي","surat sakit","سورت ساكيت","rapor","راپور"]
],
grammar:[{t:"🇮🇩 «dibuatkan» — المبني للمجهول + إلحاق المنفعة",b:"dibuat = يُصنَع، dibuat**kan** = يُصنَع (لأجلك) — اللاحقة -kan تضيف «لأجلك»: «tulis»>«tulis**kan**» اكتب لي، «bawa»>«bawa**kan**» أحضر لي. أرقى صيغة طلب خدمة إندونيسية — استعملها مع الطباخين والصيادلة والموظفين."}],
why:`<p>زيارة عيادة منظمة: <b>وصف الأعراض + مدتها ← تسجيل ← سؤال الدفع ← فحص ← سؤال واعٍ عن الدواء ← إذن الراحة للعمل</b>. لاحظ الذكاء في «Perlu antibiotik?» — المريض المتعلم يسأل ولا يطالب، والطبيب يقدّر ذلك ويثقفك.</p>`,
variants:[{kind:"formal",a:"بمستشفى كبير",i:"Mendaftar ke poli umum, pakai BPJS atau umum?"},{kind:"casual",a:"مع ممرضة ودودة",i:"Sis, antri lama nggak? Boleh minum dulu nggak sambil nunggu?"}]
});
