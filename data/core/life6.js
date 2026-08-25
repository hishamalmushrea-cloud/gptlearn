/* ===== مكتبة الحياة (6): الاجتماعات والعمل المهني، المراسلات الاحترافية، الإدارة والمقابلات ===== */
"use strict";
window.DB = window.DB || {};
window.DB.chapters = window.DB.chapters || [];

DB.chapters.push({
id:"life-meet", icon:"🤵", group:"academy", title:"الاجتماعات والاحترافية المهنية", sub:"عرض، نقاش، اعتراض مهذب، واتخاذ قرار — لغة غرفة الاجتماعات",
phrases:[
{id:"met-01",a:"أعرض عليكم باختصار النقاط الثلاث",i:"Saya jelaskan singkat tiga poin ini",it:"سايا چيلاسكان سينݢكات تيݢا ڤوين إيني",t:"Üç maddeyi kısaca sunayım",tt:"أوتش مددييي قيساجه صونايم",lv:2,p:2,w:"افتتاح عرض."},
{id:"met-02",a:"هل لي أن أضيف نقطة واحدة؟",i:"Boleh nambah satu poin?",it:"بوليه نامبه ساتو ڤوين",t:"Bir şey ekleyebilir miyim?",tt:"بير شيه إكليابيلير ميين",lv:3,p:2,w:"مشاركة مهذبة."},
{id:"met-03",a:"من وجهة نظري — ومع احترامي لرأيكم",i:"Dari sudut pandang saya, dengan hormat",it:"داري سودوت ڤاندانݢ سايا دنݢان هرمة",t:"Bence, saygıdeğer fikrinize rağmen",tt:"بينجه صايغيديكر فيكرينيزه راغمن",lv:3,p:2,w:"اعتراض مهني."},
{id:"met-04",a:"نرجئ القرار للجمعة القادمة",i:"Keputusannya ditunda Jumat depan",it:"كيبوتوسنيا ديتونده جومعة ديبان",t:"Kararı önümüzdeki cumaya bırakalım",tt:"قراري أونوموزكي قوماهه بيرقاليم",lv:3,p:3,w:"تأجيل بديل النزاع."},
{id:"met-05",a:"الملخص: اتفقنا على النقطتين الأولى والثالثة",i:"Kesimpulannya: poin satu dan tiga disepakati",it:"كيسيمبولهنيا ڤوين ساتو دان تيݢا ديسيڤاكاتي",t:"Özet: bir ve üçüncü maddede anlaştık",tt:"أوزيت بير ڤيه أوتشونجي مدديده أنلاشتق",lv:2,p:3,w:"إغلاق اجتماع."},
{id:"met-06",a:"المهمة لمن؟ ومتى التسليم؟",i:"Tugasnya siapa, deadline kapan?",it:"توݢسنياه سيابا ديدلاين قاڤان",t:"Görev kimde, teslim ne zaman?",tt:"كوريف كيمده تسليم نه زمان",lv:3,p:2,w:"توزيع مسؤوليات."},
{id:"met-07",a:"محضر الاجتماع أرسله لكم اليوم",i:"Notulen rapat saya kirim hari ini",it:"نوتولين راڤات سايا كيريم هاري إيني",t:"Toplantı tutanağını bugün yolluyorum",tt:"تولانتي توتاناغيني بوكون يولويوروم",lv:3,p:3,w:"توثيق مهني."},
{id:"met-08",a:"نقطة أخيرة ثم ننهي",i:"Satu poin terakhir, terus kita tutup",it:"ساتو ڤوين تيراخير تيروس كيتا توتوڤ",t:"Son bir madde, sonra kapatıyoruz",tt:"سون بير مدده سونرا قاباتيورز",lv:3,p:3,w:"إدارة الوقت."},
{id:"met-09",a:"بصراحة: التكلفة تتجاوز الميزانية",i:"Jujur, biayanya lebih dari budget",it:"جوجور بياينيا لبيه داري بودجيت",t:"Açıkçası maliyet bütçeyi aşıyor",tt:"آتشيقصاسي ماليت بوتشيهي آشييور",lv:3,p:3,w:"مصارحة مالية."},
{id:"met-10",a:"أقترح حلاً وسطًا يرضي الطرفين",i:"Saya usul jalan tengah",it:"سايا أوسول چالن تينݢاه",t:"Orta yol öneriyorum",tt:"أورطا يول أونرييوروم",lv:3,p:2,w:"وساطة."},
{id:"met-11",a:"أعطني يومًا لأدرس التفاصيل",i:"Kasih satu hari buat saya pelajari",it:"قاسيه ساتو هاري بوات سايا بلاچري",t:"Bir gün düşünme süresi verin",tt:"بير كون دوشونمه سوريسي فييرين",lv:3,p:2,w:"لا تقرر تحت الضغط."},
{id:"met-12",a:"موافق بشرط تعديل البند الثالث",i:"Setuju asal pasal tiga direvisi",it:"ستوشو أسال باصل تيݢا ديريڤيسي",t:"Üçüncü madde düzeltilirse kabul",tt:"أوتشونجي مدده دوزيلتيليرسه قابول",lv:3,p:3,w:"قبول مشروط."},
{id:"met-13",a:"هذا خارج صلاحيتي — أرفعه للإدارة",i:"Ini di luar wewenang saya, saya eskalasi",it:"إيني دي لوار ويويننݢ سايا",t:"Bu benim yetkim dışında, yönetime iletiyorum",tt:"بو بينم يتكيم طيشنده يونيتيمه إيلييوروم",lv:3,p:3,w:"حدود مسؤوليات."},
{id:"met-14",a:"أخبار سارة: العميل وافق على العرض",i:"Kabar baik, klien setuju proposalnya",it:"قابار باءيك كليين ستوشو پروڤوسالنيا",t:"Müjde: müşteri teklifi kabul etti",tt:"موجه موشتيري تقليفي قابول إتدي",lv:3,p:2,w:"نقل بشرى."},
{id:"met-15",a:"نراجع الأداء الشهر الماضي؟ الأرقام",i:"Review bulan lalu gimana angkanya?",it:"ريڤيو بولن لالو كيمانا أنݢكانيا",t:"Geçen ayın performansına bakalım mı?",tt:"كيتشان آيين بيرفورمانسينه باقاليم مي",lv:3,p:3,w:"تقييم دوري."},
{id:"met-16",a:"الهدف القادم: زيادة عشرين بالمئة",i:"Target berikutnya naik dua puluh persen",it:"تارݢيت بيريكونيا نايك دوا پولوه ڤيرسين",t:"Yeni hedef: yüzde yirmi artış",tt:"ييني هديف يوزده ييرمي أرتيش",lv:3,p:3,w:"أهداف كمية."},
{id:"met-17",a:"باسم الفريق أشكر جهودكم",i:"Atas nama tim, terima kasih atas kerja keras",it:"أتاس ناما تيم تريما كاسي أتاس كيرچا قاراس",t:"Ekip adına emeklerinize teşekkürler",tt:"إيكيب آدينه إمكليرينيزه تشيكورلر",lv:3,p:2,w:"شكر قيادي."},
{id:"met-18",a:"سؤال للجميع: أين نقصّر؟",i:"Pertanyaan buat semua: kita kurang di mana?",it:"بيرتانيان بوات سموا كيتا قوراڠ دي مانا",t:"Herkese soruyorum: nerede eksik kalıyoruz?",tt:"هيركيسه صورويوروم نيريدة إكسيك قاليوروز",lv:3,p:3,w:"مراجعة جماعية."},
{id:"met-19",a:"لنؤجل الجانب الفني لمتخصصينا",i:"Bagian teknis kita serahkan ke tim ahli",it:"باݢين تكديس كيتا سيرهكان كه تيم أهلي",t:"Teknik kısmı uzmanlara bırakalım",tt:"تيكنيك قيسمي أوزمانلاره بيرقاليم",lv:3,p:3,w:"توزيع مهني."},
{id:"met-20",a:"أتفق معك تمامًا في هذه النقطة",i:"Saya setuju banget di poin ini",it:"سايا ستوشو بانݢينݢ دي ڤوين إيني",t:"Bu noktada tamamen katılıyorum",tt:"بو نقطاده تامامن قاتيليوروم",lv:3,p:2,w:"تأييد."},
{id:"met-21",a:"دعنا نعود لموضوعنا الأساس",i:"Kembali ke topik utama ya",it:"كمبالي كه توڤيك أوتاما يا",t:"Asıl konuya dönelim",tt:"أصيل قونويه دونيليم",lv:3,p:3,w:"ضبط مسار الاجتماع."},
{id:"met-22",a:"هذه أجندة اليوم — ثلاث نقاط فقط",i:"Agenda hari ini tiga poin aja",it:"أچنده هاري إيني تيݢا ڤوين أجا",t:"Bugünün gündemi: sadece üç madde",tt:"بوكونون كونديمي صادجه أوتش مدده",lv:3,p:3,w:"افتتاح منظم."},
{id:"met-23",a:"أرسل لي التقرير قبل الغد",i:"Laporan dikirim sebelum besok ya",it:"لاڤورن ديكيريم سبيبلوم بيسوك يا",t:"Raporu yarından önce atın",tt:"راپورو ياريدان أونجه آتين",lv:3,p:2,w:"مواعيد داخلية."},
{id:"met-24",a:"اجتماع ممتاز — بنّاء وقصير",i:"Rapatnya bagus, efektif dan singkat",it:"راڤاتنيا باغوس إيفيكتيف دان سينݢكات",t:"Toplantı verimli ve kısa sürdü, güzel",tt:"تولانتي فيريملي ڤه قيسا سوردو",lv:3,p:3,w:"تقييم ختامي."}
]});

DB.chapters.push({
id:"life-corresp", icon:"📨", group:"academy", title:"المراسلات الاحترافية", sub:"بريد، متابعات، اعتذارات، تذكير، ورسائل رسمية — بقالب جاهز",
phrases:[
{id:"cor-01",a:"تحية طيبة وبعد،",i:"Yang terhormat, dengan hormat",it:"ياڠ ترهورمة دنݢان هرمة",t:"Saygıdeğer muhatap, iyi günler",tt:"صايغيديكر مظهراط إيي كونلر",lv:2,p:2,w:"افتتاحية رسالة رسمية.",n:"«dengan hormat/Yang terhormat» = باحترام — ترويسة الإيميل الرسمي؛ التركية «Saygılarımla» للختام."},
{id:"cor-02",a:"أكتب إليكم بخصوص طلبنا رقم...",i:"Saya menulis terkait permohonan kami nomor...",it:"سايا مينوليس تيرقاإت بيرموهونن قامي نومور",t:"... numaralı talebimiz hakkında yazıyorum",tt:"نومارالي طالبيميز حقنده يازيوروم",lv:2,p:2,w:"تمهيد موضوع."},
{id:"cor-03",a:"بناءً على محادثتنا الهاتفية",i:"Menindaklanjuti percakapan telepon kita",it:"منيندققلنشودي برتشاكاڤن تيليبون كيتا",t:"Telefon görüşmemizin ardından",tt:"تيليفون كوروشميميزين أرديندان",lv:3,p:3,w:"ربط المراسلات."},
{id:"cor-04",a:"أرفق لكم الملف/الفاتورة",i:"Terlampir saya sertakan file/invoice",it:"ترلامڤير سايا سيرتاكان فايل",t:"Ekte dosya/faturayı iletiyorum",tt:"إكته دوسيه فاتوراهي إيلييوروم",lv:2,p:2,w:"إرفاق مستندات."},
{id:"cor-05",a:"أرجو التكرم بالرد خلال ثلاثة أيام",i:"Mohon balasan dalam tiga hari kerja",it:"موهون بالاسن دالم تيݢا هاري كيرجا",t:"Üç iş günü içinde dönüşünüzü rica ederim",tt:"أوتش إيش كونو إيتشيند دونوشونوزو ريتشا إديريم",lv:2,p:2,w:"مهلة رسمية."},
{id:"cor-06",a:"نشكركم على تعاونكم المستمر",i:"Terima kasih atas kerja sama yang berkelanjutan",it:"تريما كاسي أتاس كيرچا ساما ياڠ بركلنچوتوان",t:"Sürekli işbirliğinize teşekkür ederiz",tt:"سوريكلي إيشبيرليكينيزه تشيكور إديريز",lv:2,p:2,w:"مجاملة اختتام."},
{id:"cor-07",a:"مع خالص التحية والتقدير",i:"Hormat saya, salam",it:"هرمة سايا صلام",t:"Saygılarımla",tt:"صايغيلاريمله",lv:2,p:2,w:"توقيع ختامي.",n:"«Saygılarımla» = باحتراماتي — توقيع التركي الرسمي؛ أما «Hormat saya» فتوقيع الإندونيسي."},
{id:"cor-08",a:"نعتذر عن التأخير في الرد",i:"Mohon maaf atas keterlambatan balasan",it:"موهون ماؤف أتاس كيترلامباتن بالاسن",t:"Gecikmeli dönüş için özür dileriz",tt:"كيكيلملي دونوش إيتشين أوزور ديليريز",lv:2,p:2,w:"اعتذار مهني."},
{id:"cor-09",a:"تذكير ودّي بموعد التسليم",i:"Sekadar mengingatkan jadwal pengiriman",it:"سيقادر منينݢاتكان چادوال پينݢكيريمن",t:"Teslimat hatırlatması yapayım",tt:"تسليمات هاتيرلاتماسي ياپايم",lv:3,p:3,w:"متابعة بلا إلحاح."},
{id:"cor-10",a:"نؤكد استلام رسالتكم المؤرخة...",i:"Kami konfirmasi email Bapak/Ibu tanggal...",it:"قامي كونفيرماسي إيميل باڤاك/إيبو تانݢݢال",t:"... tarihli e-postanızı aldık, teyit ederiz",tt:"تاريخلي إي-بوستانيزي آلديق",lv:2,p:3,w:"إشعار استلام رسمي."},
{id:"cor-11",a:"مرفق عرض السعر المحدّث",i:"Terlampir penawaran harga terbaru",it:"ترلامڤير بينأوارن هارݢا تيريبارو",t:"Güncel fiyat teklifi ektedir",tt:"كونجل فيات تقليفي إكتيدير",lv:2,p:2,w:"عروض رسمية."},
{id:"cor-12",a:"يسعدنا التعاون معكم مستقبلًا",i:"Kami senang bisa bekerja sama ke depannya",it:"قامي سننݢ بيسا بيكيرچا ساما كه ديبانيا",t:"İleride sizinle çalışmaktan memnuniyet duyarız",tt:"إيلريده سيزينله تشالاشمقدن ممنونيت دويارز",lv:2,p:2,w:"بوابة علاقة."},
{id:"cor-13",a:"للاستفسار إضافي أنا في خدمتكم",i:"Ada pertanyaan lain, saya siap membantu",it:"ادا بيرتانيان لاين سايا سياب ميمبنتو",t:"Sorularınız için her zaman hazırım",tt:"صورالرينيز إيتشين هر زمان هازيريم",lv:3,p:2,w:"إغلاق ودود."},
{id:"cor-14",a:"نأسف إبلاغكم برفض الطلب",i:"Dengan menyesal, permohonan ditolak",it:"دنݢان مينييسال بيرموهونن ديتولق",t:"Üzülerek bildiririz, talep reddedildi",tt:"أوزوليرك بيلديريريز طالق ريديديلدي",lv:3,p:4,w:"رفض رسمي مهذب."},
{id:"cor-15",a:"نأمل إعادة النظر في القرار",i:"Kami mohon dipertimbangkan kembali",it:"قامي موهون ديبيرتيمبانݢكان كمبالي",t:"Kararın yeniden değerlendirilmesini umuyoruz",tt:"قرارين يينيدن ديكرلينديريلميسيني أومويورز",lv:3,p:4,w:"استئناف مهني."},
{id:"cor-16",a:"تفاصيل الحساب في المرفقات",i:"Rincian tagihan ada di lampiran",it:"رينتشان تاݢيهن ادا دي لمڤيرن",t:"Fatura detayları ektedir",tt:"فاتوره ديتايللري إكتيدير",lv:2,p:3,w:"مطالبات مالية."},
{id:"cor-17",a:"شكرًا لتفهمكم وحسن تعاونكم",i:"Terima kasih atas pengertian dan kerja sama",it:"تريما كاسي أتاس پينݢرتيان دان كيرچا ساما",t:"Anlayış ve işbirliğiniz için teşekkürler",tt:"أنلايش ڤيه إيشبيرليكينيز إيتشين تشيكورلر",lv:2,p:2,w:"ختام موقف صعب."},
{id:"cor-18",a:"متى يناسبكم اتصال قصير؟",i:"Kapan waktu yang cocok untuk telepon singkat?",it:"قاڤان واقتو ياڠ تشوتشوق أونتوق تيليبون سينݢكات",t:"Kısa bir görüşme için ne zaman uygun?",tt:"قيسا بير كوروشمه إيتشين نه زمان أوݢون",lv:3,p:3,w:"تحويل لمكالمة."},
{id:"cor-19",a:"أرسلت الرسالة مرتين — لم تصلكم؟",i:"Email sudah dua kali saya kirim, belum diterima?",it:"إيميل سوداه دوا قاليه سايا كيريم بيلوم ديتيريما",t:"İki kez yolladım, ulaşmadı mı?",tt:"إيكي كيز يوللاديم أولاشمادي مي",lv:3,p:3,w:"استفسار تقني."},
{id:"cor-20",a:"تحديث حالة الطلب: قيد التجهيز",i:"Update status pesanan: sedang diproses",it:"أوپداته ستاتوس بيسانن سيدانݢ ديبروسيس",t:"Sipariş durumu güncellendi: hazırlanıyor",tt:"سيپاريش دورومو كونجيليندي هازيرلانيور",lv:2,p:2,w:"رسائل متابعة تلقائية الطابع."},
{id:"cor-21",a:"برجاء إفادتنا بالرأي النهائي",i:"Mohon konfirmasi keputusan akhirnya",it:"موهون كونفيرماسي كبوتوسن أخيرنيا",t:"Nihai kararınızı bildirmenizi rica ederiz",tt:"نيهاي قرارينيزي بيلديرمينيزي ريتشا إديريز",lv:2,p:3,w:"إلحاح مهذب."},
{id:"cor-22",a:"نتطلع لرؤيتكم في معرضنا",i:"Kami tunggu kehadiran di expo kami",it:"قامي تونݢݢو كهاديرن دي إكسڤو قامي",t:"Fuarımızda sizi görmeyi dört gözle bekliyoruz",tt:"فوارميزده سيزي كورميي درت كوزله بيكليورز",lv:3,p:4,w:"دعوات أعمال."},
{id:"cor-23",a:"معلومات السداد أدناه للتحويل",i:"Info pembayaran di bawah ini",it:"إينفو بيمبارن دي باوه إيني",t:"Ödeme bilgileri aşağıdadır",tt:"أوديمه بيلجيلري آشاغيدادير",lv:2,p:3,w:"إتمام صفقة رسمية."},
{id:"cor-24",a:"رسالة شكر بعد أول تعامل",i:"Terima kasih atas kepercayaan pertama",it:"تريما كاسي أتاس كيبرتشايان بيرتاما",t:"İlk işimiz için güveninize teşekkürler",tt:"إيلك إيشيميز إيتشين كوفينينيزه تشيكورلر",lv:2,p:2,w:"أدب ما بعد الصفقة."}
]});

DB.chapters.push({
id:"life-mgmt", icon:"🧭", group:"academy", title:"الإدارة والمقابلات المتقدمة", sub:"توظيف، تدريب، تقييم، وتطوير فريق — لغة من يقود",
phrases:[
{id:"mgm-01",a:"حدثني عن إنجازك الأفخم",i:"Ceritakan prestasi terbesar kakak",it:"تشريتاكان بريستاسي تيربيسر قاكاك",t:"En büyük başarınızı anlatır mısınız?",tt:"ين بويوك باشارينيزي أنلاتير ميسينيز",lv:3,p:3,w:"سؤال مقابلة كلاسيكي."},
{id:"mgm-02",a:"كيف تتعامل مع زميل صعب؟",i:"Gimana cara hadapi rekan yang sulit?",it:"كيمانا تشارا هاداپي ريكان ياڠ صوليت",t:"Zor bir iş arkadaşıyla nasıl baş edersiniz?",tt:"زور بير إيش أركاداشييلا ناسيل باش إديرسينيز",lv:3,p:3,w:"سؤال سلوكي."},
{id:"mgm-03",a:"أين ترى نفسك بعد خمس سنوات؟",i:"Lima tahun lagi kakak jadi apa?",it:"ليما تاهون لاݢي قاكاك چادي أبا",t:"Beş yıl sonra kendinizi nerede görüyorsunuz?",tt:"بش ييل سونرا كيندينيزي نيريدة كورويورسونوز",lv:3,p:3,w:"سؤال الطموح."},
{id:"mgm-04",a:"راتبك الأخير وطموحك القادم؟",i:"Gaji terakhir dan ekspektasi berapa?",it:"ݢاجي تيراخير دان إكسبيكتاسي براپا",t:"Son maaşınız ve beklentiniz?",tt:"سون ماشنيز ڤه بكلنتينيز",lv:3,p:3,w:"تفاوض وظيفي."},
{id:"mgm-05",a:"لماذا تركت عملك السابق بصدق؟",i:"Kenapa berhenti dari kerja lama, jujur ya",it:"كينابه برهينتي داري كيرچا لاما جوجور يا",t:"Neden ayrıldınız, dürüstçe soruyorum",tt:"نيدن آيريلدينيز دوروستچه صورويوروم",lv:3,p:3,w:"سؤال حساس."},
{id:"mgm-06",a:"أعلنك رسميًا: قبلت في الوظيفة!",i:"Selamat, kakak diterima!",it:"سيلامات قاكاك ديتيريمه",t:"Tebrikler, işe alındınız!",tt:"تبريكلر إشه آليندينيز",lv:2,p:2,w:"قبول موظف."},
{id:"mgm-07",a:"فترة التجربة شهران ثم تقييم",i:"Masa percobaan dua bulan, terus evaluasi",it:"ماسا ڤيرتشوباءن دوا بولن تيروس إيڤالواسي",t:"İki ay deneme, sonra değerlendirme",tt:"إيكي آي دينيمه سونرا ديكرلينديرمة",lv:2,p:3,w:"شروط بدء عمل."},
{id:"mgm-08",a:"أداؤك هذا الشهر فاق التوقع",i:"Kinerja bulan ini melebihi target",it:"كينيرچا بولن إيني مليحي تارݢيت",t:"Bu ay performansın hedefi aştı",tt:"بو آي بيرفورمانسين هديفي آشتي",lv:3,p:3,w:"مدح قيادي."},
{id:"mgm-09",a:"أحتاج تحسنًا في التزام المواعيد",i:"Kedisiplinan waktunya perlu ditingkatkan",it:"كيديسيبلينن واقتونيا برلو ديتينݢكاتكان",t:"Zamanlama disiplinine dikkat etmelisin",tt:"زامانلمه ديسيپلينينه ديكات إتمليسين",lv:3,p:3,w:"نقد بناء."},
{id:"mgm-10",a:"دعنا نضع خطة تطوير شخصية لك",i:"Kita susun rencana pengembangan diri",it:"كيتا سوسون رينتشان پينݢمبانݢن ديري",t:"Sana kişisel gelişim planı kuralım",tt:"صانه كيصيصل كيليشيم پلاني قوراليم",lv:3,p:3,w:"تطوير موظف."},
{id:"mgm-11",a:"ترشيحك للترقية مرفوع للإدارة",i:"Usulan kenaikan jabatan sudah saya ajukan",it:"أوسولن قنايكن چاباتن سوداه سايا أچوكان",t:"Terfinizi yönetime ilettim",tt:"ترفينيزي يونيتيمه إيليتيم",lv:3,p:4,w:"مكافأة اجتهاد."},
{id:"mgm-12",a:"الفريق بحاجة لتحفيز لا عقاب",i:"Tim butuh motivasi, bukan hukuman",it:"تيم بوتوه موتيڤاسي بوكان هوقومان",t:"Ekip motivasyon ister, ceza değil",tt:"إيكيب موتيڤاسيون إيستر جيزه ديكيل",lv:3,p:4,w:"فلسفة إدارية."},
{id:"mgm-13",a:"توزيع المهام حسب نقاط القوة",i:"Pembagian tugas sesuai kekuatan masing-masing",it:"بيمبݢين توݢس سيسواي قكواتن ماسينݢ-ماسينݢ",t:"Görevler güçlü yanlara göre dağıtılmalı",tt:"كوريفلر كوتشلو يانلاره كوريه داغيتيلمالي",lv:3,p:4,w:"إدارة ذكية."},
{id:"mgm-14",a:"اجتماع فردي أسبوعي مع كل فرد",i:"One-on-one tiap minggu sama anggota",it:"وان-تو-وان تيiap مينݢو ساما أنݢوتا",t:"Haftada herkesle birebir görüşme",tt:"هافتاده هيركيسله بيريبير كوروشمه",lv:3,p:4,w:"تواصل مستمر."},
{id:"mgm-15",a:"نستأصل المشكلة لا الأعراض",i:"Kita bereskan akar masalahnya",it:"كيتا بيريسكان آقر ماسالهنيا",t:"Sorunun kökünü çözelim",tt:"صورونون كوكوني تشوزيليم",lv:3,p:4,w:"حل جذري."},
{id:"mgm-16",a:"تدريب الدفعة الجديدة عليّ هذا الأسبوع",i:"Training karyawan baru saya yang pegang",it:"ترينينݢ قاريان بارو سايا ياڠ ڤيݢنݢ",t:"Yeni gelenlerin eğitimi bu hafta bende",tt:"ييني كيلينليرين إييتيمي بو هافتا بينده",lv:3,p:3,w:"استلام مسؤولية."},
{id:"mgm-17",a:"أستقيل ببالغ الاحترام — فرصة أعظم",i:"Saya mengundurkan diri dengan hormat, ada kesempatan lebih besar",it:"سايا منݢأوندورقن ديري دنݢان هرمة ادا كسيمڤاتن لبيه بيسار",t:"Saygılarımla istifa ediyorum, daha büyük fırsat var",tt:"صايغيلاريمله إيستيفا إيديوروم",lv:3,p:3,w:"استقالة مهذبة."},
{id:"mgm-18",a:"خبر تركك محزن — نذكرك بالخير",i:"Kabar mundurnya sedih, kami doakan sukses",it:"قابار موندورنيا سديه قامي دواين سوكسيس",t:"Ayrılığınız üzdü, yolun açık olsun",tt:"آيريليغينيز أوزدو يولون آتشيق أولسون",lv:3,p:3,w:"توديع موظف."},
{id:"mgm-19",a:"أوصي به خلفًا أعجل مني",i:"Saya rekomendasikan dia, lebih cepat dari saya",it:"سايا ريکومينداسيكان ديا لبيه تشيڤيت داري سايا",t:"Onu tavsiye ederim, benden hızlı",tt:"أونو تاڤسييه إديريم بيندين هيزلي",lv:3,p:4,w:"تزكية مهنية."},
{id:"mgm-20",a:"شركة تنمي موظفيها تنمو فعلًا",i:"Perusahaan yang bangun karyawannya ikut tumbuh",it:"بيروساهن ياڠ بانݢون قاريانيا إيقوت توامبوه",t:"Çalışanını geliştiren şirket büyür",tt:"تشالاشانيني كيليشتيرن شيركت بويور",lv:4,p:4,w:"حكمة إدارية."},
{id:"mgm-21",a:"عقدي الجديد وقّعته بلا تردد",i:"Kontrak baru langsung saya tanda tangan",it:"كونترق بارو لانݢسونݢ سايا تاندا تانݢن",t:"Yeni sözleşmemi tereddütsüz imzaladım",tt:"ييني سوزليشميمي تيريدوتسوز إيمزالاديم",lv:3,p:3,w:"ولاء مؤسسي."},
{id:"mgm-22",a:"بيئة العمل: بابي مفتوح دائمًا",i:"Kantor saya pintunya selalu terbuka",it:"كنتور سايا بنتونيا سيلالو تيربوقا",t:"Kapım her zaman açık",tt:"قابيم هر زمان آتشيق",lv:3,p:3,w:"إدارة متاحة."},
{id:"mgm-23",a:"نقاط ضعفي أعمل عليها بصدق",i:"Kelemahan saya saya garap dengan jujur",it:"كليمهن سايا سايا ݢارڤ دنݢان جوجور",t:"Zayıf yanlarımın üstüne dürüstçe çalışıyorum",tt:"زاييف يانلاريمين أوستونه دوروستچه تشالاشيوروم",lv:3,p:3,w:"إجابة مقابلة ناضجة."},
{id:"mgm-24",a:"النجاح الأكبر: فريق يعمل بلا مراقبة",i:"Sukses terbesar: tim jalan tanpa diawasi",it:"سوكسيس تيربيسر تيم چالن تانڤا دياواسي",t:"En büyük başarı: gözetimsiz çalışan ekip",tt:"ين بويوك باشاري كوزيتيمسيز تشالان إيكيب",lv:4,p:4,w:"قمة القيادة."}
]});
