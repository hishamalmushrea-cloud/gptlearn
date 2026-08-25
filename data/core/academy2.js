/* ===== المسار الأكاديمي العام (2): المفردات الموضوعية الكبرى — 8 عوالم يومية ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"themes", icon:"📚", group:"academy", title:"المفردات الموضوعية الكبرى", sub:"ثمانية عوالم من الحياة اليومية: العائلة، الطعام، المواصلات، الصحة، البيت، الطقس، الملابس، العمل",
intro:`<p>هذه جودة «جاهزة للحياة»: كل جدول مرتب بالعربية أولًا لتقرأه كقائمة تسوق. اقرأ جدولًا واحدًا كل يوم، ثم استخدم عباراته في حوارات الأكاديمية — لا تحفظ جدولًا كاملًا دفعة واحدة.</p>`,
tables:[
{title:"👨‍👩‍👧 العائلة والناس", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["أب / أم","ayah / ibu (bapak/bu)","baba / anne"],
["ابن / ابنة","anak laki-laki / anak perempuan","oğul / kız"],
["أخ / أخت","kakak (أكبر) / adik (أصغر)","abi / abla (أكبر), kardeş"],
["زوج / زوجة","suami / istri","koca / eş"],
["جد / جدة","kakek / nenek","dede / nine"],
["عائلة / أقارب","keluarga / sanak","aile / akraba"],
["صديق / جار","teman / tetangga","arkadaş / komşu"],
["رجل / امرأة","laki-laki / perempuan","erkek / kadın"],
["طفل / شاب","anak kecil / pemuda","çocuk / genç"],
["اسم / سيدة مفضلة","kak / mbak (نداء)","bey / hanım"]
], note:"الإندونيسية تفرق «أكبر/أصغر» (kakak/adik) لا «ذكر/أنثى» في الأخوة — انعكاس ثقافة احترام السن. التركية تفرق abi/abla/kardeş بدقة إخوة على الطريقة العربية."},
{title:"🍚 الطعام والشراب", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["أرز / خبز","nasi / roti","pilav / ekmek"],
["دجاج / سمك / لحم","ayam / ikan / daging","tavuk / balık / et"],
["بيض / خضار / فواكه","telur / sayur / buah","yumurta / sebze / meyve"],
["ماء / شاي / قهوة","air / teh / kopi","su / çay / kahve"],
["حليب / سكر / ملح","susu / gula / garam","süt / şeker / tuz"],
["حار/بارد (طعام)","pedas / dingin","acı / soğuk"],
["لذيذ / فاسد","enak / basi","lezzetli / bayat"],
["جائع/أكل شبع","lapar / kenyang","aç / tok"],
["فطور/غداء/عشاء","sarapan / makan siang / makan malam","kahvaltı / öğle yemeği / akşam yemeği"],
["الحساب من فضلك","minta bon / bayar","hesap lütfen"]
], note:"«pedas» الحار إندونيسيا زلزال حقيقي — اسأل دائمًا «Pedas nggak?» قبل الأكل! و«kahvaltı» التركية حرفيًا «قبل القهوة» — فطور العالم الأشهر."},
{title:"🚌 المواصلات والسفر", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["سيارة / حافلة","mobil / bis","araba / otobüs"],
["قطار / طائرة","kereta / pesawat","tren / uçak"],
["دراجة نارية (أوجر)","ojek / motor","motor (taksi)"],
["تذكرة / محطة","tiket / stasiun","bilet / gar"],
["يمين / يسار","kanan / kiri","sağ / sol"],
["مستقيم / استدر","lurus / belok","dosdoğru / dön"],
["قريب / بعيد","dekat / jauh","yakın / uzak"],
["توقف هنا من فضلك","berhenti di sini","burada durun lütfen"],
["كم الأجرة؟","berapa ongkosnya","kaç para"],
["بسرعة / بهدوء (للسائق)","cepat dikit / pelan","hızlı / yavaş"]
], note:"«ojek» دراجة الأجر الإندونيسية و«dolmuş» التركية (سيارة الأجر الجماعي) — أداتا تنقل الحيّتين. للمسافة القصيرة بتركيا اطلب taksi ile dolmuş أرخص بكثير."},
{title:"🩺 الصحة والصيدلية", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["أنا مريض / وجع رأس","saya sakit / pusing","hastayım / başım ağrıyor"],
["حمى / كحة / زكام","demam / batuk / pilek","ateş / öksürük / soğuk algınlığı"],
["دواء / وصفة","obat / resep","ilaç / reçete"],
["طبيب / مستشفى","dokter / rumah sakit","doktor / hastane"],
["صيدلية","apotek / apotik","eczane"],
["وجع أسنان / معدة","sakit gigi / perut","dişim ağrıyor / karnım ağrıyor"],
["كمدة / رباط","plester / perban","merhem / bandaj"],
["قبل/بعد الأكل","sebelum / sesudah makan","yemekten önce / sonra"],
["ثلاث مرات يوميًا","tiga kali sehari","günde üç kez"],
["أتمنى لك الشفاء","cepat sembuh ya","geçmiş olsun"]
], note:"«apotek» بتركيا «eczane» — والصيدليات التركية عليها علامة «E» نيون خضراء مضيئة ليلًا. انتبه: «soğuk algınlığı» = زكام حرفيًا «برودة سابقة»."},
{title:"🏠 البيت والأشياء", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["بيت / غرفة","rumah / kamar","ev / oda"],
["مطبخ / حمام","dapur / kamar mandi","mutfak / banyo"],
["باب / نافذة","pintu / jendela","kapı / pencere"],
["سرير / خزانة","kasur / lemari","yatak / dolap"],
["طاولة / كرسي","meja / kursi","masa / sandalye"],
["مفتاح / ضوء","kunci / lampu","anahtar / ışık"],
["مكواة / غسالة","setrika / mesin cuci","ütü / çamaşır makinesi"],
["مروحة / مكيف","kipas / AC","fan / klima"],
["نظيف/غير نظيف","bersih / kotor","temiz / kirli"],
["مكسور / يعمل","rusak / jalan","bozuk / çalışıyor"]
], note:"«rusak/bozuk» = معطل — أهم كلمة إصلاحات في البلدين. «jalan» الإندونيسية تعني طريق ويعمل! — «masih jalan» = ما زال يعمل."},
{title:"🌦️ الطقس والفصول", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["مطر / شمس","hujan / panas (matahari)","yağmur / güneş"],
["غائم / ريح","mendung / angin","bulutlu / rüzgar"],
["حار / بارد","panas / dingin","sıcak / soğuk"],
["دافئ / معتدل","hangat / sejuk","ılık / ılıman"],
["موسم الأمطار/الجفاف","musim hujan / kemarau","yağmurli mevsim / kurak"],
["ربيع/صيف/خريف/شتاء","— (استوائي)","ilkbahar/yaz/sonbahar/kış"],
["تمطر الآن / ستمطر","lagi hujan / mau hujan","yağmur yağıyor / yağacak"],
["أحضر مظلة!","bawa payung!","şemsiye al!"]
], note:"إندونيسيا استوائية: موسمان فقط (مطر وجفاف) وبلا فصول أربعة — لهذا العمود فارغ! تركيا فصولها كاملة وأجمل خريف (sonbahar) في العالم."},
{title:"👕 الملابس والإكسسوارات", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["قميص / سروال","kemeja / celana","gömlek / pantolon"],
["فستان / تنورة","dress / rok","elbise / etek"],
["حذاء / جوارب","sepatu / kaus kaki","ayakkabı / çorap"],
["طاقية/قبعة","peci / topi","takke / şapka"],
["ساعة يد / حزام","jam tangan / ikat pinggang","kol saati / kemer"],
["حقيبة يد / محفظة","tas tangan / dompet","el çantası / cüzdan"],
["غسيل / كي","dicuci / disetrika","yıkanacak / ütülenecek"],
["مقاس/لون/شكل","ukuran / warna / model","beden / renk / model"]
], note:"«peci» الطاقية الإندونيسية من الفاسيّة العربية! والكلمات الهولندية (kemeja من hemd) تكشف تاريخ المنطقة — القاموس أرشيف حضاري."},
{title:"💼 العمل والمعيشة", head:["بالعربية","🇮🇩","🇹🇷"], rows:[
["عمل / وظيفة","kerja / pekerjaan","iş / meslek"],
["راتب / عمولة","gaji / komisi","maaş / komisyon"],
["مدير / موظف","bos / pegawai","patron / çalışan"],
["محل / مستودع","toko / gudang","dükkân / depo"],
["زبون / مورد","pembeli / pemasok","müşteri / tedarikçi"],
["عقد / إيصال","kontrak / struk","sözleşme / fiş"],
["عطلة / إذن","libur / izin","tatil / izin"],
["مواعيد النهاية","tenggat","teslim tarihi"],
["ربح / خسارة","untung / rugi","kâr / zarar"],
["بالتوفيق!","semoga sukses!","kolay gelsin / başarılar!"]
], note:"«gaji» الإندونيسية من الأجر العربية، و«izin» التركية من الإذن — ومعظم مصطلحات المال التركية من اليونانية والإيطالية (kâr فارسية). قاموس التجارة متعدد الأرواح."}
],
phrases:[
{id:"the-01",a:"أريد آكل شيئًا ساخنًا/باردًا",i:"Mau makan yang anget / dingin",it:"ماو ماكان ياڠ أنݢيت",t:"Sıcak/soğuk bir şey yemek istiyorum",tt:"سيتشق بير شيه ييميك إستيوروم",lv:3,p:2,w:"في أي مطعم أو بيت مضيف.",n:"«anget» عامية hangat (دافئ) — كلمة طعام يومية. التركية تبني بترتيب: وصفة + شيء + مصدر + أريد."},
{id:"the-02",a:"وين أقرب صيدلية/مستشفى؟",i:"Apotek terdekat di mana?",it:"أپوتيك تيريديكات دي مانا",t:"En yakın eczane nerede?",tt:"ين ياقين إيتشانه نيريدة",lv:3,p:1,w:"حالات صحية عاجلة.",n:"«en yakın» = الأقرب (en + yakın) — صيغةSuperlative التركية. احفظها مع أي مكان: en yakın banka/otogar."},
{id:"the-03",a:"رأسي يؤلمني منذ أمس",i:"Kepala saya sakit dari kemarin",it:"كيبالا سايا ساكيت داري كيمارين",t:"Dünden beri başım ağrıyor",tt:"دوندن بيري باشيم آرييور",lv:3,p:2,w:"وصف عارض صحي للطبيب/الصيدلي.",n:"«-den beri» = منذ — أداة «منذ» التركية. بالإندونيسية dari = من/منذ معًا — كلمة واحدة لكلا الاستخدامين."},
{id:"the-04",a:"كيف آخذ هذا الدواء؟",i:"Obat ini gimana minumnya?",it:"أبات إيني كيمانا مينومنيا",t:"Bu ilaç nasıl kullanılır?",tt:"بو إيلاتش ناسيل كولانيلير",lv:3,p:2,w:"في الصيدلية — سؤال يهم حياتك.",n:"«minumnya» = شربه (minum + nya) — بناء إندونيسي يشبه «طريقة شربه». التركية kullanılır = يُستعمل (مبني للمجهول رسمي)."},
{id:"the-05",a:"خذني لهذا العنوان من فضلك (تاكسي)",i:"Ke alamat ini ya, pak",it:"كه ألامت إيني يا پاك",t:"Bu adrese lütfen",tt:"بو أدرسه لوتفين",lv:3,p:1,w:"أول جملة توصيل.",n:"«Ke» = إلى (حركة نحو) مقابل «di» (استقرار). التركية adrese = إلى العنوان (-e لاحقة الاتجاه)."},
{id:"the-06",a:"بخطأ المستخدم أقصد يمين لا يسار",i:"Maksud saya kanan, bukan kiri!",it:"مقصود سايا كانان بوكان كيري",t:"Sağ diycektim, sol değil!",tt:"صاغ دييجكتيم",lv:3,p:3,w:"تصحيح اتجاه سريع.",n:"«maksud saya» = قصدي — عبارة التصحيح الإندونيسية الأولى. التركية «-yecek + -ti» = كنت سأقول — ماضٍ مستقبلي أنيق!"},
{id:"the-07",a:"الجو جميل اليوم / تمطر كثيرًا",i:"Hari ini cuacanya bagus / Hujan deras sekali",it:"هاري إيني تشواتشانياباݢوس",t:"Bugün hava güzel / Çok yağmur yağıyor",tt:"بوكون هاڤا كوزيل",lv:3,p:2,w:"دردشة الطقس — فاتحة حديث عالمية.",n:"«hava» التركية = جو/هواء — «hava nasıl?» (كيف الجو؟) فاتحة حديث يومية. بالإندونيسية cuaca = طقس."},
{id:"the-08",a:"الله يوفقك في عملك (وداع نهاري)",i:"Semoga sukses ya!",it:"سمواݢا سوكسيس يا",t:"Kolay gelsin, başarılar!",tt:"قولاى كيلسين بشريلار",lv:3,p:1,w:"وداع أي شخص يعمل.",n:"«Başarılar!» = نجاحات! — وداع الترك المتفائل. أما «Kolay gelsin» فتُقال لمن ترك عمله للتو أو مستمرًا فيه."},
{id:"the-09",a:"أشتقت إليك / زمان عنك!",i:"Kangen nih! Lama nggak ketemu",it:"كانݢين نيه! لاما نݢاك كتيمو",t:"Seni özledim / Uzun oldu görüşmeyeli",tt:"سني أوزليديم",lv:4,p:3,w:"لقاء صديق/زبون دائم غاب طويلًا.",n:"«kangen» الجاوية = شوق — أدفأ كلمة لقاء إندونيسية. «özledim» من özlem (شوق) — التركية تقولها للأصدقاء بلا حرج."},
{id:"the-10",a:"لا أستطيع الآن، عندي التزام عائلي",i:"Nanti dulu deh, ada acara keluarga",it:"نانتي دولو ديه ادا آتشارا كيلوارݢا",t:"Şimdi olmaz, ailevi bir işim var",tt:"شيمي أولماز آيليڤي بير إيشيم ڤار",lv:3,p:3,w:"اعتذار مهذب عن دعوة.",n:"«acara keluarga» = مناسبة عائلية — عذر لا يُرد في إندونيسيا! التركية «işim var» = عندي شغل — الاعتذار المهني المقبول."}
]});
