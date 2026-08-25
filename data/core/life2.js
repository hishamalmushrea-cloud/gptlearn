/* ===== مكتبة الحياة (2): البيت والإصلاحات، التقنية والاتصال، الطقس والمواسم ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"life-home", icon:"🏠", group:"academy", title:"البيت والإصلاحات — المكتبة الكاملة", sub:"سباك، كهربائي، أثاث، نظافة، وجيران الحي",
phrases:[
{id:"hom-01",a:"المطبخ مسدود — المياه لا تنزل",i:"Wastafel mampet, air nggak turun",it:"واستافيل مامڤيت أوڠ نݢاك تورون",t:"Lavabo tıkalı, su akmıyor",tt:"لاڤابو تقالي سو أقميور",lv:3,p:1,w:"أشهر طوارئ منزلية.",n:"«mampet/tıkalı» = مسدود — كلمة السباك الأولى؛ احفظها توفر ساعة إيماءات."},
{id:"hom-02",a:"أريد سباكًا/كهربائيًا اليوم",i:"Butuh tukang pipa / listrik hari ini",it:"بوتوه توكانگ ڤيڤه ليستريك هاري إيني",t:"Bugün tesisatçı / elektrikçi lazım",tt:"بوكون تيسيساتچي إليكتريكچي لازيم",lv:3,p:1,w:"طلب فني."},
{id:"hom-03",a:"الكهرباء انقطعت — القاطع أين؟",i:"Listrik mati, MCB di mana?",it:"ليستريك ماتي إم-سي-بيه دي مانا",t:"Elektrik kesildi, sigorta nerede?",tt:"إليكتريك كسيلدي سيݢورتا نيريدة",lv:3,p:2,w:"انقطاع عام.",n:"«MCB/sigorta» القاطع — بو تركيا عدّادات الأبناء بالطوابق (saya)."},
{id:"hom-04",a:"الصنبور يقطر — بدّل لي الحلقة",i:"Kran bocor, ganti karetnya ya",it:"كران بوچور ݢانتي قاريتنيا يا",t:"Musluk damlatıyor, contasını değiştirin",tt:"موسلوك داملاتيور قونتاسيني ديكيلشتيرين",lv:3,p:3,w:"تسريب بسيط."},
{id:"hom-05",a:"المكيف لا يبرد — نظّف الفلاتر",i:"AC nggak dingin, cuci filternya dulu",it:"أ-سيه نݢاك دينݢين تشوتشي فيلترنيا دولو",t:"Klima soğutmuyor, önce filtresini temizleyin",tt:"قليما صوݢوتميور أونجه فيلترسيني تيميزليين",lv:3,p:2,w:"قبل الصيف ومعه."},
{id:"hom-06",a:"أريد شراء: رف/كنبة/سجادة",i:"Mau beli rak / sofa / karpet",it:"ماو بيلي راق سوڤا قارڤيت",t:"Raf / koltuk / halı almak istiyorum",tt:"راف قولتق هالي آلمق إستيوروم",lv:2,p:2,w:"تأثيث."},
{id:"hom-07",a:"التوصيل والتركيب شاملان؟",i:"Ongkir sama pasang termasuk?",it:"أونݢكير ساما پاسوڠ تيرماسوق",t:"Teslimat ve montaj dahil mi?",tt:"تسليمات ڤيه مونتاج داهيل مي",lv:2,p:2,w:"شراء أثاث وأجهزة."},
{id:"hom-08",a:"قياس الباب/الجدار أوّلًا",i:"Ukur dulu pintunya / dindingnya",it:"أوكون دولو بنتونيا ديندينݢنيا",t:"Önce kapıyı / duvarı ölçelim",tt:"أونجه قابييي دوڤاريي أولتشيليم",lv:3,p:3,w:"قبل شراء ما لا يُرد."},
{id:"hom-09",a:"من يقوم بالنظافة العميقة؟",i:"Bersih-bersih total siapa yang bisa?",it:"برسيه-برسيه توتال سيابا ياڠ بيسا",t:"Derin temizlik yapacak biri var mı?",tt:"ديرين تيميزليك ياباجاق بيري ڤار مي",lv:3,p:3,w:"خدمة منزلية."},
{id:"hom-10",a:"سلة النفايات تُفرغ متى؟",i:"Sampah diambil jam berapa?",it:"سامڤاه ديامبيل جام براپا",t:"Çöp ne zaman alınıyor?",tt:"تشوب نه زمان ألينيور",lv:3,p:3,w:"نظافة الحي.",n:"بتركيا أكياس النفايات مدفوعة («poşet ücreti») — ثقافة بيئية مشتركة مع إندونيسيا."},
{id:"hom-11",a:"عندي شكوى: ضجيج ليلي فوقي",i:"Ada keluhan: atas ribut malam-malam",it:"ادا كيلواهن أتاس ريبت مالام-مالام",t:"Şikayetim var: üst kat geceleri gürültü",tt:"شيكايتيم ڤار أوست قات كيتشليري كورولتو",lv:3,p:3,w:"إدارة البناء.",n:"«ribut/gürültü» = ضجيج — ابدأ الشكوى بلطف: زيارة ودية أولًا أبلغ من الإنذار."},
{id:"hom-12",a:"أدفع رسوم الصيانة شهريًا؟",i:"Iuran IPL per bulan berapa?",it:"إيوران إي-ڤيه-إيل بر بولن براپا",t:"Aidat ayda ne kadar?",tt:"آيدات آيدا نه قادار",lv:2,p:3,w:"شقة بخدمات.",n:"«IPL» رسوم الصيانة الإندونيسية و«aidat» التركية — قبل استئجار أي شقة اسألها."},
{id:"hom-13",a:"المفتاح ضاع داخلًا — فني أقفال",i:"Kunci hilang, tukang kunci di mana?",it:"كونتشي هيلانݢ توكانݢ كونتشي دي مانا",t:"Anahtar kayboldu, çilingir nerede?",tt:"أنحتار قايپولدي تشيلينݢير نيريدة",lv:3,p:2,w:"حُبست خارج منزلك.",n:"«çilingir» = فني الأقفال — كلمة إنقاذ حقيقية؛ احفظها برقم هاتف!"},
{id:"hom-14",a:"الحمام/الدش ماءه بارد",i:"Air mandinya dingin, pemanas rusak",it:"أور مندينيا دينݢين بيماناس روساك",t:"Duş soğuk akıyor, termosifon bozuk",tt:"دوش صوݢوق أقيور تيرموسيفون بوزوق",lv:3,p:2,w:"سخان معطل."},
{id:"hom-15",a:"الفارة/الصراصير — مبيد آمن؟",i:"Ada tikus / kecoak, semprot yang aman ya",it:"ادا تيكوس كيتشواك سيمڤروت ياڠ أمان يا",t:"Fare / hamamböceği var, güvenli ilaç olur mu?",tt:"فاره همامبوجيي ڤار كوفينلي إيلاج أولور مو",lv:3,p:3,w:"آفات منزلية."},
{id:"hom-16",a:"الغاز انتهى/يقطر رائحته",i:"Gas habis / baunya bocor!",it:"ݢاس هابيس باونيا بوچور",t:"Gaz bitti / gaz kokusu var!",tt:"قاز بيتي قاز قوكسو ڤار",lv:2,p:1,w:"خطر — فورًا.",n:"رائحة الغاز: لا تشعل شيئًا وافتح النوافذ — «gaz kokusu» جملة إنذار لا تقبل التأجيل."},
{id:"hom-17",a:"أستأجر месяцيًا — عقد بسيط",i:"Kontrak bulanan aja, perjanjian sederhana",it:"كونترق بولنان أجا برجانچيان سيمپل",t:"Aylık kiralayayım, basit sözleşme",tt:"آيليق قيرالاييم باسيت سوزليشمة",lv:2,p:3,w:"سكن مؤقت.",n:"«kontrak bulanan» ثقافة إندونيسية قوية للوافدين — مفروشة بلا عقود طويلة."},
{id:"hom-18",a:"شبكة الواي فاي كلمة السر؟",i:"Password WiFi-nya apa?",it:"پاسورد واي-فاي-نيا أبا",t:"WiFi şifresi ne?",tt:"ڤاي-فاي شيفريسي نه",lv:2,p:1,w:"أول وصول لأي مكان."},
{id:"hom-19",a:"السلم/المصعد معطل",i:"Lift rusak, tangga darurat di mana?",it:"ليفت روساك تانݢݢا دارورت دي مانا",t:"Asansör bozuk, acil merdiven nerede?",tt:"أسانسور بوزوق أجه مرديوين نيريدة",lv:3,p:3,w:"سلامة المبنى."},
{id:"hom-20",a:"أبيع أثاثي المستعمل — حالة جيدة",i:"Jual furniture bekas, kondisi bagus",it:"جوال فرنتشر بيكس قونديسي باݢوس",t:"İkinci el eşya satıyorum, temiz",tt:"إيكينجي إل إيشيه ساتيوروم تيميز",lv:3,p:3,w:"انتقال سكن."},
{id:"hom-21",a:"عامل النظافة/البواب أين أجده؟",i:"Pak RT / security di mana?",it:"پاك إر-تيه سيكيوريتي دي مانا",t:"Kapıcı nerede?",tt:"قابيجي نيريدة",lv:3,p:2,w:"خدمات البناء.",n:"«kapıcı» البواب التركي و«Pak RT» رئيس الحي الإندونيسي — مفتاحا أي مشكلة داخلية."},
{id:"hom-22",a:"الفاتورة شهرية: كهرباء ومياه وغاز",i:"Tagihan bulanan: listrik, air, gas",it:"تاݢيهن بولنان ليستريك أوڠ ݢاس",t:"Aylık faturalar: elektrik, su, gaz",tt:"آيليق فاتورالر إليكتريك سو قاز",lv:2,p:2,w:"ميزانية البيت."}
]});

DB.chapters.push({
id:"life-tech", icon:"📱", group:"academy", title:"الهاتف والإنترنت — المكتبة الكاملة", sub:"شريحة، رصيد، باقة، إصلاح جوال، وخدمات رقمية يومية",
phrases:[
{id:"tec-01",a:"أريد شريحة بيانات محلية",i:"Mau beli kartu SIM paket data",it:"ماو بيلي قارتو سيم پاكيت داتا",t:"Yerli veri hattı almak istiyorum",tt:"يرلي ڤيري هاتي آلمق إستيوروم",lv:2,p:1,w:"وصولك الأول لأي بلد.",n:"بإندونيسيا اسأل عن «paket murah» (باقة رخيصة)؛ بتركيا «tarife»."},
{id:"tec-02",a:"رصيدي انتهى — اشحن 10",i:"Pulsa habis, isi sepuluh ribu",it:"ڤولسا هابيس إيسي سبولوه ريبو",t:"Kredim bitti, on lira yükle",tt:"كريديم بيتي أون ليرا يوكله",lv:3,p:2,w:"هاتف مسبق الدفع."},
{id:"tec-03",a:"الشبكة ضعيفة هنا — لا إرسال",i:"Sinyal lemah di sini, nggak ada jaringan",it:"سينيال ليمه دي سيني نݢاك ادا چارينݢن",t:"Burada çekmiyor, sinyal zayıf",tt:"بوراده تشكميور سينيال زايف",lv:3,p:2,w:"مشاكل تغطية.",n:"«çekmek» = يقبض/يمر الإرسال — «çekiyor mu؟» سؤال الشبكة التركي الأول."},
{id:"tec-04",a:"شاشة الجوال تكسرت — كم الإصلاح؟",i:"Layar HP pecah, servis berapa?",it:"لاير إه-بيه ڤيتشاه سيرڤيس براپا",t:"Ekran kırıldı, tamir kaç lira?",tt:"كران قيريلدي تامير قاتش ليرا",lv:3,p:2,w:"محل صيانة."},
{id:"tec-05",a:"البطارية تفرغ سريعًا",i:"Baterai boros sekali",it:"باتيراي بوروس سيكالي",t:"Pil çabuk bitiyor",tt:"پيل تشابوق بيتيور",lv:3,p:3,w:"عطل شائع."},
{id:"tec-06",a:"نسّخ لي الصور/الملفات على هذا",i:"Transfer foto ke flashdisk ya",it:"ترانسفير فوتو كه فلاشديسك يا",t:"Fotoğrafları buraya kopyalayın",tt:"فوتوݢرافلاري بوراهه قوپيالايين",lv:3,p:3,w:"محل خدمات رقمية."},
{id:"tec-07",a:"طباعة مستندات — كم الورقة؟",i:"Print dokumen, per lembar berapa?",it:"ڤرينت دوكومين بر ليمبار براپا",t:"Belge çıktısı, sayfa başı kaç?",tt:"بلكه تشيقتيسي صحه باشي قاتش",lv:3,p:3,w:"مكتب خدمات."},
{id:"tec-08",a:"كلمة سر الواي فاي لا تعمل",i:"Password WiFi-nya nggak bisa",it:"پاسورد واي-فاي-نيا نݢاك بيسا",t:"WiFi şifresi çalışmıyor",tt:"ڤاي-فاي شيفريسي تشالشميور",lv:3,p:3,w:"مقهى/فندق."},
{id:"tec-09",a:"أفقد هاتفي — عطّل الشريحة!",i:"HP saya hilang, blokir kartunya!",it:"إه-بيه سايا هيلانݢ بلوكي قارتونيا",t:"Telefonum kayıp, hattımı kapatın!",tt:"تيليفونوم قاييب هاتيمي قاباتين",lv:2,p:1,w:"فقدان الجوال — عاجل."},
{id:"tec-10",a:"أريد ربطًا برقمي القديم",i:"Mau nomor lama dipindahkan",it:"ماو نومور لاما ديبيندهكان",t:"Eski numaramı taşımak istiyorum",tt:"إيسكي نومارامي طاشيمق إستيوروم",lv:3,p:3,w:"تغيير مشغل وإبقاء رقمك."},
{id:"tec-11",a:"الدفع عبر التطبيق كيف؟ (QRIS/wallet)",i:"Bayar pakai aplikasi gimana caranya?",it:"باير پاكاي أپليكاسي كيمانا تارانيا",t:"Uygulamayla ödeme nasıl yapılıyor?",tt:"أوݢولامهيه أودمه ناسيل يابيليور",lv:3,p:2,w:"اقتصاد رقمي.",n:"«gimana caranya» = كيف طريقته — سؤال الشرح الوطني؛ سيشرحها لك الموظف خطوة خطوة."},
{id:"tec-12",a:"تطبيق التوصيل — سجل لي عنواني",i:"Aplikasi antar, simpan alamat saya ya",it:"أپليكاسي أنتار سيمڤان ألامت سايا يا",t:"Getirme uygulamasına adresimi kaydedin",tt:"كيتيرمه أوݢولاماسينا أدرسيمي قايتيدين",lv:3,p:2,w:"طلب أونلاين أول."},
{id:"tec-13",a:"الطلب وصل خطأ — أبلغه في التطبيق",i:"Pesanan salah, komplain di aplikasi aja",it:"بيسانان ساله قومڤلين دي أپليكاسي أجا",t:"Sipariş yanlış geldi, uygulamadan şikayet",tt:"سيپاريش يانليش كيلدي أوݢولامادن شيكايت",lv:3,p:3,w:"مشكلات توصيل."},
{id:"tec-14",a:"حسابي مقفل/كلمة السر نسيتها",i:"Akun kekunci / lupa password",it:"أكون ككونتشي لوڤا پاسورد",t:"Hesabım kilitlendi / şifremi unuttum",tt:"حسابيم قيليتليشدي شيفريمي أنوتوم",lv:3,p:3,w:"دعم تقني."},
{id:"tec-15",a:"اشحن لي رصيد هاتف صديقي",i:"Bantu isi pulsa nomor ini ya",it:"بنتو إيسي ڤولسا نومور إيني يا",t:"Bu numaraya kontör yükleyin",tt:"بو نومراه كونتور يوكليين",lv:3,p:3,w:"مساعدة رقمية.",n:"«kontör» رصيد تركي من compte النقود — كلمة راسخة قبل العصر الرقمي وما زالت حية."},
{id:"tec-16",a:"بنك التطبيق: تحويل بهذا الرقم",i:"Transfer m-banking ke nomor ini ya",it:"ترانسفير إم-بانكينݢ كه نومور إيني يا",t:"Uygulamadan bu IBAN'a havale",tt:"أوݢولامادن بو إيباناه هاڤاله",lv:2,p:2,w:"دفع رقمي رسمي."},
{id:"tec-17",a:"الإنترنت هنا سريع؟ سرعة الباقة؟",i:"Internetnya kencang? Paketnya berapa Mbps?",it:"إنترنيتنيا كينتانݢ پاكيتنيا براپا",t:"İnternet hızlı mı? Kaç Mbps paket?",tt:"إنترنت هيزلي مي قاتش إم-بي-بي-إيس",lv:3,p:3,w:"اختيار باقة/مكان عمل."},
{id:"tec-18",a:"سأرسل الموقع عبر الواتساب",i:"Lokasi saya kirim lewat WA ya",it:"لوكاسي سايا كيريم ليوات و-آ يا",t:"Konumu WhatsApp'tan atayım",tt:"قونومو ڤاتسآبتان آتايم",lv:3,p:1,w:"توجيه سائق/ضيف.",n:"«kirim lokasi» إرسال الموقع — مهارة رقمية يومية أنقذت الملايين من الضياع."},
{id:"tec-19",a:"احذر: رسالة نصب تحتاج كودًا",i:"Hati-hati penipuan minta kode OTP",it:"هاتي-هاتي ڤنيڤوان مينتا كوده أو-تي-ڤيه",t:"Dolandırıcılık var, kodu kimseye vermeyin",tt:"دولانديريجيليك ڤار كودو كيمسييه فيرميين",lv:2,p:1,w:"أمانك الرقمي.",n:"«OTP/penipuan» نصب إلكتروني — قاعدة ذهبية: الكود لا يُعطى لأحد أبدًا."},
{id:"tec-20",a:"سجل الاتصال توقفت خدمة الاتصال",i:"Paket telepon habis, nggak bisa nelpon",it:"پاكيت تيليبون هابيس نݢاك بيسا نيلڤون",t:"Dakika bitti, arayamıyorum",tt:"داقيقه بيتي آراياميوروم",lv:3,p:3,w:"باقة مكالمات."},
{id:"tec-21",a:"أريد شاحنًا/كابل سريع",i:"Mau beli charger kabel cepat",it:"ماو بيلي تشارجر قابل تشيڤات",t:"Hızlı şarj aleti ve kablo alıyorum",tt:"هيزلي شارج آلتي ڤه قابلو آليوروم",lv:3,p:3,w:"إكسسوارات."},
{id:"tec-22",a:"هل عندكم رخيص أقل من هذا؟",i:"Ada yang lebih murah dari ini?",it:"ادا ياڠ لبيه موراه داري إيني",t:"Bundan daha ucuza var mı?",tt:"بوندان داها أوتشوزه ڤار مي",lv:3,p:2,w:"شراء تقني بذكاء."}
]});

DB.chapters.push({
id:"life-weather", icon:"🌦️", group:"academy", title:"الطقس والمواسم", sub:"حديث الطقس العملي: مطر، حر، رطوبة، ومواسم التجارة",
phrases:[
{id:"wth-01",a:"ستمطر اليوم؟ خذ مظلة",i:"Mau hujan ya? Bawa payung",it:"ماو هوجان يا باوا پايونݢ",t:"Yağmur var, şemsiye alın",tt:"ياغمور ڤار شيمسيه آلين",lv:2,p:1,w:"تخطيط يومك."},
{id:"wth-02",a:"الجو حار/رطب جدًا اليوم",i:"Hari ini panas dan lembap sekali",it:"هاري إيني پاناس دان ليمباڤ سيكالي",t:"Bugün sıcak ve nemli",tt:"بوكون سيتشق ڤيه نيملي",lv:3,p:2,w:"مجاملة صيفية.",n:"«lembap/nemli» = رطب — إندونيسيا رطوبة دائمة، وتركيا جافة — الكلمة تعيش هنا أكثر."},
{id:"wth-03",a:"أمس بَرَد ليلًا",i:"Kemarin malam dingin sekali",it:"كيمارين مالام دينݢين سيكالي",t:"Dün gece çok soğuktu",tt:"دون كيتش تشوك صوݢوقتو",lv:3,p:3,w:"حديث شتوي.",n:"«-tu/-dı» الماضي هنا: soğuk**tu** = كان باردًا — عايش قاعدة الماضي بجملة واحدة."},
{id:"wth-04",a:"موسم الأمطار بدأ — البضاعة تحت سقف",i:"Musim hujan mulai, barang masukkan",it:"موسيم هوجان مولاي باراڠ ماسوقكان",t:"Yağmur mevsimi başladı, eşyaları içeri al",tt:"ياغمور مفسيمي باشلادي إيشيالاري إيتشيري آل",lv:3,p:3,w:"تاجر يستعد للموسم."},
{id:"wth-05",a:"حرارة الجو 35 درجة بالظل!",i:"Suhu 35 derajat!",it:"سوه تيݢا-ليما درجات",t:"Hava 35 derece bulgur — sıcak!",tt:"هاڤه أوتشان بيش ديريتشيه سيتشق",lv:3,p:3,w:"ذروة الصيف."},
{id:"wth-06",a:"نسيم البحر يلطّف الجو مساءً",i:"Angin laut bikin sejuk malam hari",it:"أنݢين لاوت بيكين سوجوق مالام هاري",t:"Akşam deniz serinletiyor",tt:"آقشام دنيز سيرينليتيور",lv:3,p:4,w:"مجاملة ساحلية."},
{id:"wth-07",a:"الطقس يتقلب — خذ سترة",i:"Cuaca suka berubah, bawa jaket",it:"تشواتش سوقا برأوبه باوا چاكيت",t:"Hava değişken, ceket alın",tt:"هاڤه ديكيلشن جيكيت آلين",lv:3,p:3,w:"نصيحة خروج."},
{id:"wth-08",a:"ضباب صباحي على الطريق",i:"Kabut pagi di jalan",it:"قابوت پاݢي دي جالن",t:"Yolda sabah sisi var",tt:"يولده صباح سيسي ڤار",lv:3,p:4,w:"قيادة آمنة."},
{id:"wth-09",a:"العاصفة ألغت رحلتي",i:"Badai, penerbangan dibatalkan",it:"باداي بينربانݢن ديباتلكان",t:"Fırtına yüzünden uçuşum iptal",tt:"فيرتينا يوزوندن أوتشوشوم إيپتال",lv:3,p:3,w:"اضطراب سفر."},
{id:"wth-10",a:"أول أمطار الموسم — بركة تعمّ المزارع",i:"Hujan pertama musim, sawah pada penuh",it:"هوجان بيرتاما موسيم سواه پادا ڤينوه",t:"Mevsimin ilk yağmuru, tarlalar doldu",tt:"مفسيمين إيلك ياغمورو تارلالار دولدي",lv:4,p:4,w:"حديث أرياف."},
{id:"wth-11",a:"الشتاء هنا ثلج أم بارد فقط؟",i:"Di sini musim dingin ada salju nggak?",it:"دي سيني موسيم دينݢين ادا سالجو نݢاك",t:"Burada kış kar yağar mı?",tt:"بوراده قيش قار ياغار مي",lv:3,p:3,w:"توقع مناخ جديد."},
{id:"wth-12",a:"احتمال أمطار 70% — خطط للداخل",i:"Kemungkinan hujan 70 persen, siap-siap dalam ruangan",it:"كيمونݢكينن هوجان توجوه ڤيرسين سياب-سياب دالم روڠن",t:"Yağmur ihtimali yüzde yetmiş, iç plan yap",tt:"ياغمور إحتيمالي يوزده ييتميش إيتش پلان ياب",lv:3,p:4,w:"تنظيم فعالية."},
{id:"wth-13",a:"الجو مثالي للخروج اليوم!",i:"Cuacanya enak banget buat jalan-jalan!",it:"تشواتشنياه إيناك بانݢينݢ بوات جالن-جالن",t:"Hava bugün dışarı çıkmalık!",tt:"هاڤه بوكون طشري تشيقماليق",lv:3,p:2,w:"دعوة خروج."},
{id:"wth-14",a:"نهاية الأسبوع ماذا التوقعات؟",i:"Weekend cuacanya gimana menurut ramalan?",it:"ويك-إند تشواتشنياه كيمانا منوروت رامالن",t:"Hafta sonu hava nasıl olacak?",tt:"هافته سونو هاڤه ناسيل أولاجاق",lv:3,p:3,w:"تخطيط نهاية الأسبوع."},
{id:"wth-15",a:"موسم البرد = موسم الشاي والجلساء",i:"Musim dingin, saatnya ngopi bareng",it:"موسيم دينݢين ساءتنيا نݢوڤي بارينݢ",t:"Kış geldi, çay ve sohbet mevsimi",tt:"قيش كيلدي تشاي ڤيه صوحبت مفسيمي",lv:4,p:4,w:"ثقافة موسمية دافئة."},
{id:"wth-16",a:"الشمس تحرق — تحية صيفية",i:"Matahari terik sekali ya!",it:"ماتاهاري تيريك سيكالي يا",t:"Güneş yakıyor bugün!",tt:"كوينيش ياقيور بوكون",lv:3,p:2,w:"حديث صيف قصير."}
]});
