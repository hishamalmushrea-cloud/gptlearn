/* ===== وضع النجاة: مطار، طوارئ ومساعدة، مال وبنك (فصول group:"survival") ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"surv-airport", icon:"✈️", group:"survival", title:"المطار والسفر الجوي", sub:"تسجيل، أمتعة، بوابة، وضياع — الضروري فقط",
phrases:[
{id:"air-01",a:"أين مكتب تسجيل الوصول؟",i:"Counter check-in di mana?",it:"كونتر تشيك-إن دي مانا",t:"Check-in kontuğu nerede?",tt:"تشيك-إن قونتوݢو نيريدة",lv:2,p:2,w:"وصولك للمطار أول مرة.",n:"الكلمات الدولية (check-in/counter) مستعملة كما هي في البلدين."},
{id:"air-02",a:"كم كيلو مسموح للأمتعة؟",i:"Bagasi berapa kilo?",it:"باآݢاسي براپا كيلو",t:"Bagaj kaç kilo?",tt:"باݢاج قاتش كيلو",lv:2,p:2,w:"عند الكاونتر.",n:"«bagasi/bagaj» الأمتعة — من الهولندية والفرنسية؛ سماعهما يومي في المطارات."},
{id:"air-03",a:"هذه حقيبة اليد فقط",i:"Ini bagasi kabin aja",it:"إيني باآݢاسي كابين أجا",t:"Sadece el bagajı",tt:"صادجه إل باݢاجي",lv:2,p:3,w:"عند السؤال عن الأمتعة.",n:"«kabin» نفس الكلمة الدولية. aja = فقط — تخفيف إندونيسي معتاد."},
{id:"air-04",a:"من أي بوابة الرحلة؟",i:"Penerbangannya dari gate berapa?",it:"پينربانݢانيا داري كيتيه براپا",t:"Uçuş hangi kapıdan?",tt:"أوتشوش هانݢي قابيدان",lv:2,p:2,w:"بعد التسجيل.",n:"«gate» مستخدمة بإندونيسيا. التركية kapı (باب) = بوابة — نفس منطق «البوابة» العربية!"},
{id:"air-05",a:"تأخرت الرحلة؟ كم ساعة؟",i:"Pesawatnya telat berapa jam?",it:"بيسواتنيا تيلات براپا جام",t:"Uçuş kaç saat rötarlı?",tt:"أوتشوش كاتش ساعات روتارلي",lv:2,p:3,w:"شاشات المغادرة.",n:"«rötar» من الإيطالية ritardo — كلمة المطار اليومية. «telat» = متأخر."},
{id:"air-06",a:"أين استلام الأمتعة؟",i:"Pengambilan bagasi di mana?",it:"پينݢامبيلان باآݢاسي دي مانا",t:"Bagaj teslim nerede?",tt:"باݢاج تسليم نيريدة",lv:2,p:3,w:"بعد الهبوط.",n:"«teslim» التركية من التسليم العربية! كلمات المطارات التركية مليئة بالعربية."},
{id:"air-07",a:"فُقدت حقيبتي — هذه بطاقة الأمتعة",i:"Bagasi saya hilang. Ini tag-nya",it:"باآݢاسي سايا هيلانݢ. إيني تاݢنيا",t:"Bagajım kayıp. Etiketi burada",tt:"باݢاجيم قاييب إتيكيتي بوراده",lv:2,p:3,w:"مكتب الأمتعة المفقودة.",n:"«kayıp» من «القَيْبة/الضياع» العربية! جملة الطوارئ الحقيقية للمطار."},
{id:"air-08",a:"أين التاكسي/القطار للمدينة؟",i:"Taksi atau kereta ke kota di mana?",it:"تاكسي أتاو كيريتا كه كوتا دي مانا",t:"Şehir merkezine taksi/tren nereden?",tt:"شهر ميركيزينه تاكسي ترين نيريدن",lv:2,p:2,w:"خروجك من المطار.",n:"أول قرار لوجستي بعد الهبوط. ke kota = إلى المدينة؛ şehir merkezi = وسط المدينة."}
]});

DB.chapters.push({
id:"surv-emergency", icon:"🆘", group:"survival", title:"الطوارئ والمساعدة", sub:"نجدة، شرطة، إسعاف، ضياع — جمل قصيرة تُفهم فورًا",
phrases:[
{id:"emg-01",a:"ساعدني! / مساعدة!",i:"Tolong!",it:"تولوڠ",t:"İmdat!",tt:"إيمادات",lv:2,p:1,w:"أي طارئ حقيقي.",n:"كلمتا النجدة الوطنيتان — احفظهما قبل أي شيء. بالتركية أيضًا: Yardım edin!"},
{id:"emg-02",a:"اتصلوا بالإسعاف/الشرطة!",i:"Panggil ambulans! / Panggil polisi!",it:"بانݢيل أمبولانس! بانݢيل پوليسي",t:"Ambulans çağırın! / Polisi arayın!",tt:"أمبولانس تشاغيرين پوليسي آراين",lv:2,p:1,w:"طارئ يهدد حياة أو ملك.",n:"الأرقام: إندونيسيا 112 موحد (110 شرطة، 118 إسعاف)؛ تركيا 112 موحد. حفظ الرقم أهم من الجملة."},
{id:"emg-03",a:"لا أفهم — أحتاج مترجمًا عربيًا",i:"Saya tidak paham. Butuh penerjemah bahasa Arab",it:"سايا تيدق پاهم. بوتوه بينيرجمه باهاسا عرب",t:"Anlamıyorum, Arapça tercüman lazım",tt:"أنلاميوروم أرابتشه ترتچومان لازيم",lv:2,p:2,w:"موقف رسمي يتجاوز لغتك.",n:"«tercüman» من الترجمان العربية — طلب المترجم حقك القانوني."},
{id:"emg-04",a:"سرقت محفظتي/هاتفي!",i:"Dompet saya dicuri! / HP saya dicuri!",it:"دومبيت سايا ديتشوري",t:"Cüzdanım çalındı! / Telefonum çalındı!",tt:"جوزدانيم تشاليندي",lv:2,p:2,w:"تقرير سرقة.",n:"«dicuri/çalındı» مبني للمجهول — الصيغة الرسمية للتقرير في اللغتين."},
{id:"emg-05",a:"ضعت — هذا عنوان فندقي",i:"Saya tersesat. Ini alamat hotel saya",it:"سايا ترسيسات. إيني ألامت هوتيل سايا",t:"Kayboldum. Otelin adresi bu",tt:"قايبولديم أوتيلين أدرسي بو",lv:2,p:1,w:"أهم جملة نجاة لسائح.",n:"«kaybolmak» من «القَيْبة» العربية! أرِ الورقة — العنوان المكتوب أنجى من النطق."},
{id:"emg-06",a:"أنا مريض — خذوني للمستشفى",i:"Saya sakit. Bawa ke rumah sakit ya",it:"سايا ساكيت. باوا كه رومه ساكيت يا",t:"Hastayım, hastaneye götürün",tt:"هاستايم هاستانييه كوتورون",lv:2,p:1,w:"حالة صحية عاجلة.",n:"«hasta/hastane» من المريض/المستشفى العربية — التركية الطبية قريبة من قاموسنا."},
{id:"emg-07",a:"حريق!",i:"Kebakar!",it:"كباكار",t:"Yangın var!",tt:"يانݢين ڤار",lv:2,p:3,w:"طارئ حريق.",n:"«yangın» من يانق العربية (yanmak يحترق)! — جذع ناري مشترك بين اللغات."},
{id:"emg-08",a:"أين أقرب مركز شرطة؟",i:"Kantor polisi terdekat di mana?",it:"كانتور پوليسي تيريديكات دي مانا",t:"En yakın polis karakolu nerede?",tt:"ين ياقين پوليس قاراقولو نيريدة",lv:2,p:3,w:"لتقرير رسمي.",n:"«karakol» مصطلح عثماني عريق. كلمات الأمن التركية تقريبًا كلها عربية الأصل."},
{id:"emg-09",a:"تتكلم إنجليزية؟ الأمر عاجل",i:"Bisa bahasa Inggris? Ini darurat",it:"بيسا باهاسا إنݢريس؟ إيني دارورات",t:"İngilizce biliyor musunuz? Acil durum",tt:"إنݢيليزجه بيليور موسونوز أجيل دوروم",lv:2,p:2,w:"إسعاف لغوي حين تعجز لغة الهدف.",n:"«acil durum» = حالة طارئة (لافتة ACİL الرسمية). «darurat» من «الضرورة» العربية!"}
]});

DB.chapters.push({
id:"surv-money", icon:"💳", group:"survival", title:"المال والصرف والبنك", sub:"صراف، صرف، مفكك، وبنك — عبارات النجاة المالية",
phrases:[
{id:"mon-01",a:"أين أقرب صرّاف آلي؟",i:"ATM terdekat di mana?",it:"أ-تي-إم تيريديكات دي مانا",t:"En yakın ATM nerede?",tt:"ين ياقين أ-تي-إم نيريدة",lv:2,p:1,w:"حاجتك الأولى للنقد.",n:"ATM مفهومة عالميًا. بالتركية أيضًا «bankamatik» — الاسم الشعبي."},
{id:"mon-02",a:"أين مكتب صرافة العملة؟",i:"Money changer di mana?",it:"ماني تشينجر دي مانا",t:"Döviz bürosu nerede?",tt:"دوفيز بيوروسو نيريدة",lv:2,p:2,w:"تبديل النقود.",n:"«money changer» إنجليزية رسمية بإندونيسيا. «döviz» التركية — مكاتبها في كل حي."},
{id:"mon-03",a:"كم سعر الدولار اليوم؟",i:"Kurs dolar hari ini berapa?",it:"كورس دولار هاري إيني براپا",t:"Doların kuru bugün ne kadar?",tt:"دولارين كورو بوكون نه قادار",lv:2,p:2,w:"قبل التبديل.",n:"«kurs/kuru» = سعر الصرف. قارن مكتبين قبل التبديل — قاعدة عالمية."},
{id:"mon-04",a:"أعطني فئة صغيرة — هذه ورقة 100",i:"Tolong uang kecil. Ini seratus",it:"تولوڠ أوڠ كيتشيل إيني سراتوس",t:"Bozuk verin lütfen, yüz veriyorum",tt:"بوزوق فييرين لوتفين يوز فييريوروم",lv:2,p:2,w:"أكثر مشكلة نقود يومية.",n:"«uang kecil» و«bozuk» — كلمتا البقاء في المواصلات والدكاكين."},
{id:"mon-05",a:"هل تقبلون البطاقة؟ الجهاز معطل؟",i:"Bisa pakai kartu? Mesinnya error?",it:"بيسا پاكاي كارتو ميسينيا إروور",t:"Kart geçiyor mu? POS çalışmıyor mu?",tt:"كارت كيتشيور مو پوس تشالشميور مو",lv:2,p:2,w:"قبل الدفع في محل صغير.",n:"«kart geçmek» = تمر البطاقة. بإندونيسيا اسأل عن QRIS أيضًا."},
{id:"mon-06",a:"أريد إيداع/سحب مبلغ",i:"Mau setor / tarik uang",it:"ماو سيتور تاريق أوڠ",t:"Para yatırmak / çekmek istiyorum",tt:"پارا ياتيرماق تشيكميك إستيوروم",lv:2,p:3,w:"شباك البنك.",n:"ثنائية yatırmak/çekmek (يودع/يسحب) — من أهم أفعال الحياة المالية التركية."},
{id:"mon-07",a:"كم رسوم التحويل؟",i:"Biaya transfernya berapa?",it:"بيايه ترانسفيرنيا براپا",t:"Havale ücreti ne kadar?",tt:"هاڤاله أوجريتي نه قادار",lv:2,p:3,w:"تحويلات.",n:"«havale» (حوالة!) من الحوالة العربية — مصطلح البنوك اليومي بتركيا."}
]});

/* خرائط وضع النجاة: 9 فئات بلمسة واحدة */
window.DB.survival = [
{id:"sv-airport", icon:"✈️", title:"المطار", ch:"surv-airport"},
{id:"sv-hotel", icon:"🏨", title:"الفندق", sit:"dly-hotel"},
{id:"sv-taxi", icon:"🚕", title:"التاكسي والمواصلات", sit:"dly-taxi"},
{id:"sv-directions", icon:"🧭", title:"الاتجاهات", sit:"dly-directions"},
{id:"sv-restaurant", icon:"🍚", title:"المطعم", sit:"dly-resto"},
{id:"sv-money", icon:"💳", title:"المال والصرف", ch:"surv-money"},
{id:"sv-shopping", icon:"🛍️", title:"التسوق والسوق", view:"#/sales", note:"قسم البيع كاملًا: أسعار، مساومة، خصومات"},
{id:"sv-emergency", icon:"🆘", title:"الطوارئ والمساعدة", ch:"surv-emergency"},
{id:"sv-health", icon:"💊", title:"الصيدلية والطبيب", sit:"dly-pharmacy"}
];
