export interface ProductItem {
  slug: string;
  code: string;
  name: string;
  shortTitle: string;
  category:
    | "arac-takip"
    | "bireysel"
    | "motosiklet"
    | "karavan"
    | "yat-tekne"
    | "bataryali"
    | "kamera"
    | "kurumsal";
  categoryLabel: string;
  badge: string;
  image: string;
  gallery: string[];
  priceLabel: string;
  priceNumeric: number;
  summary: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  idealFor: string[];
  faqs: { question: string; answer: string }[];
}

export const PRODUCTS: ProductItem[] = [
  {
    slug: "lg-100-pro-arac-takip-cihazi",
    code: "LG-100 Pro",
    name: "LifeGO LG-100 Pro 4G LTE Araç Takip Cihazı",
    shortTitle: "LG-100 Pro • 4G Motor Blokajlı",
    category: "arac-takip",
    categoryLabel: "Araç Takip Cihazı",
    badge: "En Çok Tercih Edilen",
    image: "/images/products/lg-100-pro.svg",
    gallery: [
      "/images/products/lg-100-pro.svg",
      "/images/mobile-app-mockup.jpg",
      "/images/blog/motor-blokaj-flow.svg",
    ],
    priceLabel: "2.490 ₺'den başlayan paketler",
    priceNumeric: 2490,
    summary:
      "Bireysel otomobiller ve ticari filolar için 4G LTE destekli, uzaktan motor blokajlı, gizli montaj uyumlu yeni nesil GPS araç takip cihazı.",
    description:
      "LifeGO LG-100 Pro, 9-90V geniş voltaj aralığı sayesinde binek otomobillerden hafif ticari ve ağır vasıta filolarına kadar her araçta güvenle çalışır. 4G LTE Cat-1 modemi ile 2G kapanma riskini tamamen ortadan kaldırır; GPS + GLONASS + Galileo çoklu uydu alıcısıyla 1-2 metre hassasiyetle canlı konum sunar. Akıllı uyku modu araç park halindeyken akü tüketimini minimuma indirir.",
    highlights: [
      "4G LTE Cat-1 yüksek hızlı şebeke desteği",
      "Mobil uygulamadan tek dokunuşla güvenli uzaktan motor blokaj",
      "Çoklu operatör (Turkcell/Vodafone/Türk Telekom uyumlu) M2M data hattı dahil",
      "Akü kesme, çekici, hız aşımı ve bölge (Geofence) alarmları",
      "Dahili yedek batarya ve 10.000+ konum önbelleği",
      "BTK IMEI kayıtlı, 2 yıl birebir değişim garantili",
    ],
    specs: [
      { label: "Şebeke Teknolojisi", value: "4G LTE Cat-1 + 2G Yedek" },
      { label: "Uydu Sistemi", value: "GPS, GLONASS, Galileo, BeiDou" },
      { label: "Konum Hassasiyeti", value: "< 2 Metre CEP" },
      { label: "Çalışma Voltajı", value: "9V – 90V DC (12V/24V Uyumlu)" },
      { label: "Motor Blokaj", value: "Var (Akıllı Hız Kontrollü Röle)" },
      { label: "Dahili Batarya", value: "350 mAh Li-Po (Elektrik Kesilme Alarmı)" },
      { label: "Koruma Sınıfı", value: "IP65 Toz ve Neme Dayanıklı" },
      { label: "Garanti & Kayıt", value: "2 Yıl Resmi Garanti • BTK IMEI Kayıtlı" },
    ],
    idealFor: [
      "Bireysel otomobil güvenliği ve hırsızlık koruması",
      "KOBİ ve kurumsal satış / dağıtım filoları",
      "Rent a car ve filo kiralama işletmeleri",
    ],
    faqs: [
      {
        question: "LG-100 Pro aracın aküsünü bitirir mi?",
        answer:
          "Hayır. Akıllı uyku (deep sleep) modu sayesinde araç kontağı kapandığında cihaz ultra düşük enerji moduna geçer ve aracın aküsünü korumak için voltaj eşiği kontrolü yapar.",
      },
      {
        question: "Montaj aracın elektrik garantisini bozar mı?",
        answer:
          "81 ildeki yetkili teknisyenlerimiz aracın orijinal kablo tesisatına zarar vermeden, izole soket bağlantılarıyla gizli montaj gerçekleştirir.",
      },
    ],
  },
  {
    slug: "lg-110-obd-bireysel-arac-takip-cihazi",
    code: "LG-110 OBD",
    name: "LifeGO LG-110 Tak-Çalıştır Bireysel OBD Araç Takip Cihazı",
    shortTitle: "LG-110 OBD • Montajsız Bireysel",
    category: "bireysel",
    categoryLabel: "Bireysel Araç Takip",
    badge: "10 Saniyede Kurulum",
    image: "/images/products/lg-110-obd.svg",
    gallery: [
      "/images/products/lg-110-obd.svg",
      "/images/blog/obd-install-diagram.svg",
      "/images/mobile-app-mockup.jpg",
    ],
    priceLabel: "2.190 ₺'den başlayan paketler",
    priceNumeric: 2190,
    summary:
      "Kablo kesmeden, servis beklemeden doğrudan aracın OBD-II soketine takılan en pratik bireysel araç takip cihazı.",
    description:
      "Bireysel kullanıcılar, sıfır garanti kapsamındaki otomobiller ve araç değişikliği yapan sürücüler için geliştirilen LifeGO LG-110 OBD, direksiyon altındaki standart OBD-II portuna 10 saniyede takılır. Takıldığı anda 4G üzerinden LifeGO mobil uygulamasında canlı harita, ani hızlanma/fren analizi, arıza kodu (DTC) okuma ve sökülme alarmı aktif hale gelir.",
    highlights: [
      "Sıfır montaj maliyeti — 10 saniyede kendiniz takın",
      "Araç garantisini %100 korur, kablo kesme işlemi yoktur",
      "Cihaz OBD soketinden çıkarıldığında anlık sökülme alarmı",
      "Araç arıza kodlarını (OBD-II DTC) ve akü voltajını telefonda görün",
      "Başka araca saniyeler içinde taşınabilir",
    ],
    specs: [
      { label: "Bağlantı Tipi", value: "Standart 16-Pin OBD-II Soket" },
      { label: "Şebeke", value: "4G LTE + Çoklu Operatör M2M" },
      { label: "Sökülme Alarmı", value: "Dahili Batarya ile Anlık Bildirim" },
      { label: "Araç Telemetri", value: "Akü Voltajı, Devir, Hız, Arıza Kodu" },
      { label: "Boyut", value: "49 x 45 x 22 mm Ultra Kompakt" },
      { label: "Uyumluluk", value: "2004 ve Sonrası Tüm Binek Araçlar" },
    ],
    idealFor: [
      "Sıfır ve garantili bireysel otomobiller",
      "Genç sürücü ve aile güvenliği takibi",
      "Kısa dönem araç değiştiren kullanıcılar",
    ],
    faqs: [
      {
        question: "OBD takip cihazı her araca uyar mı?",
        answer:
          "2004 model ve üzeri tüm benzinli, dizel, hibrit ve pek çok elektrikli otomobilde standart OBD-II soketi bulunur ve LG-110 sorunsuz çalışır.",
      },
      {
        question: "Hırsız cihazı soketten çıkarırsa ne olur?",
        answer:
          "LG-110 dahili yedek bataryası sayesinde soketten çıkarıldığı saniye telefonunuza 'Cihaz Söküldü' acil bildirimi gönderir.",
      },
    ],
  },
  {
    slug: "lg-500-bataryali-miknatisli-gps-takip",
    code: "LG-500 Bataryalı",
    name: "LifeGO LG-500 Mıknatıslı Kablosuz Bataryalı GPS Takip Cihazı",
    shortTitle: "LG-500 • 90 Gün Bataryalı IP67",
    category: "bataryali",
    categoryLabel: "Bataryalı & Kablosuz",
    badge: "90 Gün Bekleme",
    image: "/images/products/lg-500-magnetic.svg",
    gallery: [
      "/images/products/lg-500-magnetic.svg",
      "/images/blog/obd-install-diagram.svg",
      "/images/mobile-app-mockup.jpg",
    ],
    priceLabel: "3.290 ₺'den başlayan paketler",
    priceNumeric: 3290,
    summary:
      "10.000 mAh endüstriyel batarya, güçlü neodimyum mıknatıs ve IP67 su geçirmez kasasıyla kablosuz, montajsız gizli takip çözümü.",
    description:
      "Elektrik bağlantısı olmayan dorseler, konteynerler, iş makineleri veya kablosuz gizli yedek takip arayan bireysel kullanıcılar için tasarlanan LG-500, 6 adet yüksek çekim güçlü neodimyum mıknatıs ile metal yüzeylere saniyeler içinde tutunur. Işık sensörü sayesinde yerinden oynatıldığında anında bildirim gönderir.",
    highlights: [
      "10.000 mAh yüksek kapasiteli şarj edilebilir Li-Ion batarya",
      "Akıllı bekleme modunda 90 güne kadar tek şarjla kullanım",
      "IP67 tam su ve toz geçirmez endüstriyel gövde",
      "Alt yüzey ışık sensörü ile sökülme/düşme alarmı",
      "Araç şasisi, dorse, konteyner ve değerli yük takibine uygun",
    ],
    specs: [
      { label: "Batarya Kapasitesi", value: "10.000 mAh (Type-C Hızlı Şarj)" },
      { label: "Çalışma Süresi", value: "Aktif 20-35 Gün / Bekleme 90 Gün" },
      { label: "Montaj", value: "6x Güçlü Neodimyum Mıknatıs" },
      { label: "Koruma Sınıfı", value: "IP67 Su & Toz Geçirmez" },
      { label: "Sensörler", value: "Işık (Sökülme), Hareket, Titreşim" },
      { label: "Şebeke", value: "4G LTE + GPS/GLONASS" },
    ],
    idealFor: [
      "Kablosuz bireysel yedek güvenlik takibi",
      "Dorse, treyler, konteyner ve paletli yükler",
      "Kiralık iş ekipmanları ve jeneratörler",
    ],
    faqs: [
      {
        question: "Mıknatıs yüksek hızda veya bozuk yolda düşer mi?",
        answer:
          "Hayır, LG-500 üzerinde bulunan endüstriyel neodimyum mıknatıslar 15 kg üzeri tutunma kuvveti sağlar ve titreşime dayanıklıdır.",
      },
    ],
  },
  {
    slug: "lg-200-motosiklet-takip-cihazi",
    code: "LG-200 Moto",
    name: "LifeGO LG-200 IP67 Motosiklet Takip Cihazı",
    shortTitle: "LG-200 Moto • IP67 Su Geçirmez",
    category: "motosiklet",
    categoryLabel: "Motosiklet Takip",
    badge: "Akü Korumalı",
    image: "/images/products/lg-200-moto.svg",
    gallery: [
      "/images/products/lg-200-moto.svg",
      "/images/mobile-app-mockup.jpg",
      "/images/blog/motor-blokaj-flow.svg",
    ],
    priceLabel: "2.390 ₺'den başlayan paketler",
    priceNumeric: 2390,
    summary:
      "Motosiklet, scooter ve ATV'ler için özel ultra düşük akım tüketimli, IP67 su geçirmez, darbe ve eğim sensörlü GPS takip cihazı.",
    description:
      "Motosiklet hırsızlıklarının büyük bölümü aracın kamyonete yüklenmesi veya gidon kilidinin kırılmasıyla gerçekleşir. LifeGO LG-200 Moto, hassas 3 eksenli ivmeölçeri ile motorunuz yerinden oynatıldığı, devrildiği veya darbe aldığı anda telefonunuza yüksek sesli alarm gönderir.",
    highlights: [
      "Motosiklet aküsüne özel ultra düşük uyku akımı (< 3 mA)",
      "IP67 tam su geçirmez — yağmur ve basınçlı yıkamaya dayanıklı",
      "Eğim, devrilme, titreşim ve çekici yükleme alarmı",
      "Uzaktan motor blokaj desteği",
      "Kompakt boyut sayesinde grenaj içine tamamen gizli montaj",
    ],
    specs: [
      { label: "Koruma Sınıfı", value: "IP67 Tam Su Geçirmez" },
      { label: "Uyku Akımı", value: "< 3 mA (Akü Koruma Devreli)" },
      { label: "Sensörler", value: "3-Eksenli İvmeölçer (Eğim/Darbe)" },
      { label: "Voltaj Aralığı", value: "9V – 90V DC (Elektrikli Motor Uyumlu)" },
      { label: "Boyut", value: "74 x 34 x 13 mm Ultra İnce" },
    ],
    idealFor: [
      "Bireysel motosiklet ve maxi scooter sahipleri",
      "Kurye ve paket servis filoları",
      "ATV, UTV ve elektrikli motosikletler",
    ],
    faqs: [
      {
        question: "Kışın motor 1 ay yatarsa aküyü bitirir mi?",
        answer:
          "LG-200 Moto akü voltajı belirlenen güvenli eşiğin altına düştüğünde otomatik uyku korumasına geçer ve size düşük akü bildirimi gönderir.",
      },
    ],
  },
  {
    slug: "lg-600-ai-arac-kamera-sistemi",
    code: "LG-600 AI",
    name: "LifeGO LG-600 4G Yapay Zeka Destekli Çift Lens Araç Kamerası",
    shortTitle: "LG-600 AI • Canlı Video + ADAS/DMS",
    category: "kamera",
    categoryLabel: "Mobil Kamera Sistemleri",
    badge: "Yapay Zeka ADAS/DMS",
    image: "/images/products/lg-600-ai-cam.svg",
    gallery: [
      "/images/products/lg-600-ai-cam.svg",
      "/images/hero-fleet-dashboard.jpg",
      "/images/sector-logistics-fleet.jpg",
    ],
    priceLabel: "6.990 ₺'den başlayan paketler",
    priceNumeric: 6990,
    summary:
      "Yol ve kabin içi çift 1080p Full HD kamera, 4G canlı video izleme, yorgunluk/dikkat dağınıklığı tespiti (DMS) ve çarpışma uyarısı (ADAS).",
    description:
      "Sadece konum değil, araç içi ve yol güvenliğini canlı görüntülerle kontrol altına alın. LG-600 AI; sürücünün telefonla konuşması, emniyet kemeri takmaması, uyuklaması veya şerit ihlali yapması durumunda hem kabin içinde sesli uyarı verir hem de kısa video klibini otomatik buluta yükler.",
    highlights: [
      "1080p Full HD ön yol + kızılötesi gece görüşlü kabin içi kamera",
      "4G LTE üzerinden telefon ve web panelden canlı video izleme",
      "DMS: Uyuklama, esneme, telefon kullanımı ve sigara tespiti",
      "ADAS: Önden çarpışma, takip mesafesi ve şerit terk uyarısı",
      "Kaza anında otomatik şifreli bulut video yedekleme",
    ],
    specs: [
      { label: "Çözünürlük", value: "Çift Kanal 1080p + 720p IR Gece Görüş" },
      { label: "Yapay Zeka", value: "ADAS + DMS Gerçek Zamanlı Analiz" },
      { label: "Bağlantı", value: "4G LTE + Wi-Fi + GPS/GLONASS" },
      { label: "Depolama", value: "256 GB SD Kart + Bulut Olay Kaydı" },
      { label: "Ses", value: "Çift Yönlü Sesli İletişim (Intercom)" },
    ],
    idealFor: [
      "Lojistik, kargo ve ağır vasıta filoları",
      "Öğrenci ve personel servis taşımacılığı",
      "VIP transfer, taksi ve kurumsal makam araçları",
    ],
    faqs: [
      {
        question: "Geçmiş kamera kayıtlarını uzaktan izleyebilir miyim?",
        answer:
          "Evet. SD karttaki geçmiş kayıtlara ve buluta yedeklenen kaza/ihlal kliplerine LifeGO mobil ve web panelinden uzaktan erişebilirsiniz.",
      },
    ],
  },
  {
    slug: "lg-400-akilli-karavan-takip-sistemi",
    code: "LG-400 Karavan",
    name: "LifeGO LG-400 Akıllı Karavan Takip ve Yaşam Aküsü İzleme Sistemi",
    shortTitle: "LG-400 • Karavan & Solar Telemetri",
    category: "karavan",
    categoryLabel: "Karavan Takip",
    badge: "Yaşam Aküsü İzleme",
    image: "/images/products/lg-400-caravan.svg",
    gallery: [
      "/images/products/lg-400-caravan.svg",
      "/images/mobile-app-mockup.jpg",
      "/images/blog/gps-architecture.svg",
    ],
    priceLabel: "3.490 ₺'den başlayan paketler",
    priceNumeric: 3490,
    summary:
      "Motokaravan ve çekme karavanlar için GPS güvenlik, yaşam aküsü/solar voltaj izleme, kapı/hareket sensörü ve Avrupa roaming desteği.",
    description:
      "Karavanınızı kamp dışında park halinde bıraktığınızda veya Avrupa rotalarında seyahat ederken gözünüz arkada kalmasın. LG-400 Karavan; yaşam aküsü voltajını, kabin sıcaklığını, kapı açılma durumunu ve çekme karavanın izinsiz hareketini anlık takip etmenizi sağlar.",
    highlights: [
      "Yaşam aküsü ve araç aküsü çift voltaj izleme",
      "Çekme karavanlar için izinsiz hareket ve eğim alarmı",
      "Opsiyonel kabin sıcaklık, nem ve kapı manyetik sensör desteği",
      "Avrupa ve Balkanlar uluslararası roaming uyumluluğu",
    ],
    specs: [
      { label: "Voltaj İzleme", value: "Çift Kanal (Araç + Yaşam Aküsü)" },
      { label: "Sensör Desteği", value: "BLE Sıcaklık, Nem, Kapı, Gaz Sensörü" },
      { label: "Şebeke", value: "4G LTE (TR + Opsiyonel AB Roaming)" },
      { label: "Dahili Batarya", value: "1.200 mAh Yedek Güvenlik Bataryası" },
    ],
    idealFor: [
      "Motokaravan ve çekme karavan sahipleri",
      "Karavan kiralama filoları",
      "Tiny house ve off-grid yaşam alanları",
    ],
    faqs: [
      {
        question: "Çekme karavanda araç aküsü olmadan çalışır mı?",
        answer:
          "Evet, yaşam aküsüne bağlanabilir veya güneş paneli sistemiyle entegre çalışarak aylarca kesintisiz koruma sağlar.",
      },
    ],
  },
  {
    slug: "lg-300-yat-ve-tekne-takip-cihazi",
    code: "LG-300 Marine",
    name: "LifeGO LG-300 IP68 Yat, Tekne ve Deniz Aracı Takip Sistemi",
    shortTitle: "LG-300 Marine • Demir Tarama Alarmı",
    category: "yat-tekne",
    categoryLabel: "Yat & Tekne Takip",
    badge: "IP68 Deniz Dayanımı",
    image: "/images/products/lg-300-marine.svg",
    gallery: [
      "/images/products/lg-300-marine.svg",
      "/images/mobile-app-mockup.jpg",
      "/images/blog/gps-architecture.svg",
    ],
    priceLabel: "3.890 ₺'den başlayan paketler",
    priceNumeric: 3890,
    summary:
      "Tuzlu su ve neme tam dayanıklı IP68 gövde, akıllı demir tarama alarmı, sintine su sensörü ve akü izleme özellikli deniz takip sistemi.",
    description:
      "Marina dışındaki koylarda veya kışlama döneminde teknenizin güvenliğini 7/24 kontrol altında tutun. Demir tarama (Anchor Guard) özelliği ile tekneniz belirlediğiniz yarıçapın dışına sürüklendiği anda yüksek sesli mobil alarm devreye girer.",
    highlights: [
      "IP68 deniz ortamına tam dayanıklı korozyon korumalı kasa",
      "Tek dokunuşla aktif edilen Demir Tarama (Anchor Guard) çiti",
      "Sintine su seviyesi alarmı ve sahil elektriği kesinti bildirimi",
      "Ege, Akdeniz ve Marmara kıyılarında yüksek kazançlı anten",
    ],
    specs: [
      { label: "Koruma Sınıfı", value: "IP68 Tuzlu Su & Nem Dayanımı" },
      { label: "Özel Alarmlar", value: "Demir Tarama, Sintine, Akü, Sahil Elektriği" },
      { label: "Voltaj", value: "9V – 36V DC Marine Standart" },
      { label: "Rota Kaydı", value: "Deniz Mili (Knot) Hız ve Seyir Defteri" },
    ],
    idealFor: [
      "Motoryat, yelkenli ve gezi tekneleri",
      "Charter tekne kiralama filoları",
      "Balıkçı tekneleri ve su sporları araçları",
    ],
    faqs: [
      {
        question: "Açık denizde GSM çekmezse rota kaybolur mu?",
        answer:
          "Hayır, cihaz GSM kapsaması dışındayken tüm seyir koordinatlarını dahili belleğine kaydeder ve kıyı şebekesine ulaştığı anda haritaya işler.",
      },
    ],
  },
  {
    slug: "lg-700-tir-dorse-filo-takip",
    code: "LG-700 Heavy",
    name: "LifeGO LG-700 Ağır Vasıta, Tır ve Soğuk Zincir Takip Cihazı",
    shortTitle: "LG-700 Heavy • CAN-Bus & Sıcaklık",
    category: "kurumsal",
    categoryLabel: "Lojistik & Ağır Vasıta",
    badge: "CAN-Bus & Yakıt",
    image: "/images/products/lg-700-heavy.svg",
    gallery: [
      "/images/products/lg-700-heavy.svg",
      "/images/sector-logistics-fleet.jpg",
      "/images/blog/pricing-comparison.svg",
    ],
    priceLabel: "Kurumsal Filo Özel Teklif",
    priceNumeric: 3990,
    summary:
      "J1939 CAN-Bus yakıt ve kilometre okuma, soğuk zincir sıcaklık sensörü, kapı sensörü ve uluslararası lojistik roaming desteği.",
    description:
      "Büyük ölçekli lojistik ve soğuk zincir filolarının yakıt giderlerini %22'ye kadar azaltmak için tasarlanan LG-700 Heavy; aracın beyninden anlık yakıt tüketimi, rölanti süresi, motor sıcaklığı ve gerçek kilometre verilerini doğrudan okur.",
    highlights: [
      "J1939 / FMS CAN-Bus üzerinden gerçek yakıt ve kilometre verisi",
      "Kablosuz BLE ve kablolu -40°C / +85°C soğuk zincir sıcaklık takibi",
      "Frigorifik kasa kapı açılma alarmı ve ısı grafiği PDF raporu",
      "Tachograph (takograf) ve ERP/WMS API entegrasyonu",
    ],
    specs: [
      { label: "CAN-Bus", value: "J1939, J1708, FMS, OBD-II" },
      { label: "Sıcaklık Sensörü", value: "4 Kanala Kadar -40°C ~ +85°C" },
      { label: "Sürücü Tanıma", value: "RFID / iButton Sürücü Kimlik" },
      { label: "Roaming", value: "Türkiye + 45 Ülke Uluslararası M2M" },
    ],
    idealFor: [
      "Uluslararası nakliye ve tır filoları",
      "Gıda, ilaç ve soğuk zincir taşımacılığı",
      "Beton mikseri ve ağır iş makineleri",
    ],
    faqs: [
      {
        question: "Yakıt deposundan çalınan yakıtı tespit eder mi?",
        answer:
          "Evet. CAN-Bus ve opsiyonel ultrasonik/kapasitif yakıt seviye sensörü ile ani yakıt düşüşlerinde anlık alarm ve grafik rapor üretir.",
      },
    ],
  },
  {
    slug: "lg-800-uetds-servis-takip-cihazi",
    code: "LG-800 U-ETDS",
    name: "LifeGO LG-800 U-ETDS Entegrasyonlu Servis ve Taşımacılık Cihazı",
    shortTitle: "LG-800 • Bakanlık U-ETDS Uyumlu",
    category: "kurumsal",
    categoryLabel: "U-ETDS & Servis Takip",
    badge: "Resmi U-ETDS Onaylı",
    image: "/images/products/lg-800-uetds.svg",
    gallery: [
      "/images/products/lg-800-uetds.svg",
      "/images/blog/uetds-integration.svg",
      "/images/sector-logistics-fleet.jpg",
    ],
    priceLabel: "2.990 ₺'den başlayan paketler",
    priceNumeric: 2990,
    summary:
      "Ulaştırma ve Altyapı Bakanlığı U-ETDS sistemine otomatik, hatasız ve kesintisiz konum/sefer bildirimi yapan kurumsal takip çözümü.",
    description:
      "Turizm, personel, öğrenci servisi ve tarifesiz yolcu/yük taşımacılığı yapan firmalar için zorunlu olan U-ETDS veri bildirimlerini tamamen otomatikleştirir. Manuel bildirim hatalarından kaynaklanan idari para cezalarını önler.",
    highlights: [
      "Ulaştırma Bakanlığı U-ETDS servisine 7/24 otomatik veri aktarımı",
      "Öğrenci/personel biniş-iniş bildirimi ve güzergah sapma alarmı",
      "RFID sürücü kartı okuma ve koltuk sensörü entegrasyonu",
      "Tek panelden tüm seferlerin U-ETDS aktarım durumu kontrolü",
    ],
    specs: [
      { label: "Mevzuat Uyumu", value: "U-ETDS (Yolcu, Servis, Eşya) %100 Uyumlu" },
      { label: "Veri Aktarımı", value: "Otomatik SSL API Senkronizasyonu" },
      { label: "Sürücü/Yolcu", value: "RFID Kart & Mobil Veli Bildirimi" },
      { label: "Şebeke", value: "4G LTE Çoklu Operatör M2M" },
    ],
    idealFor: [
      "Okul ve personel servis taşımacılığı firmaları",
      "D2 ve B2 belgeli turizm transfer filoları",
      "K1 / C2 belgeli yük taşımacılığı işletmeleri",
    ],
    faqs: [
      {
        question: "U-ETDS entegrasyonu için ek yazılım ücreti var mı?",
        answer:
          "LG-800 paketimizde U-ETDS otomatik veri aktarım modülü standart olarak aktiftir, ek kurulum maliyeti çıkarmaz.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
