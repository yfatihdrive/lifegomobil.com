export interface SectorSolution {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  heroImage: string;
  kpiStat: string;
  kpiLabel: string;
  summary: string;
  benefits: { title: string; desc: string }[];
  recommendedProducts: string[];
  faqs: { question: string; answer: string }[];
}

export const SECTORS: SectorSolution[] = [
  {
    slug: "lojistik-arac-takip",
    title: "Lojistik ve Filo Araç Takip Sistemleri",
    shortTitle: "Lojistik & Nakliye",
    tagline: "Yakıt giderlerini %22'ye kadar düşürün, teslimat hızınızı artırın.",
    heroImage: "/images/sector-logistics-fleet.jpg",
    kpiStat: "%22",
    kpiLabel: "Ortalama Yakıt Tasarrufu",
    summary:
      "Ağır vasıta, dağıtım ve kargo filoları için CAN-Bus yakıt takibi, rota optimizasyonu, rölanti analizi ve ERP/WMS API entegrasyonu.",
    benefits: [
      {
        title: "CAN-Bus Yakıt & Rölanti Kontrolü",
        desc: "Gereksiz rölanti sürelerini ve yakıt kaçağı şüphelerini anlık grafiklerle yakalayın.",
      },
      {
        title: "Sürücü Performans Puanlaması",
        desc: "Ani hızlanma, sert fren ve hız aşımı skorlarıyla bakım ve lastik giderlerini azaltın.",
      },
      {
        title: "Otomatik Müşteri Teslimat Linki",
        desc: "Müşterilerinize sevkiyatlarının canlı harita konumunu tek tıkla paylaşın.",
      },
    ],
    recommendedProducts: ["lg-700-tir-dorse-filo-takip", "lg-100-pro-arac-takip-cihazi", "lg-600-ai-arac-kamera-sistemi"],
    faqs: [
      {
        question: "Filo takip sistemi mevcut ERP yazılımımızla entegre olur mu?",
        answer:
          "Evet. LifeGO REST API ve Webhook altyapısı sayesinde SAP, Logo, Mikro ve özel lojistik yazılımlarıyla anlık veri paylaşımı sağlanır.",
      },
    ],
  },
  {
    slug: "rent-a-car-arac-takip",
    title: "Rent a Car Araç Takip ve Motor Blokaj Sistemleri",
    shortTitle: "Rent a Car & Kiralama",
    tagline: "Kiralık filonuzu izinsiz yurt dışı çıkışı ve suistimallere karşı koruyun.",
    heroImage: "/images/hero-fleet-dashboard.jpg",
    kpiStat: "7/24",
    kpiLabel: "Anlık Motor Blokaj Koruması",
    summary:
      "Oto kiralama firmalarına özel gizli montaj, sınır/bölge ihlali alarmı, kilometre sınırı takibi ve tek dokunuşla güvenli motor blokaj.",
    benefits: [
      {
        title: "Sınır & Şehir Dışı Çıkış Alarmları",
        desc: "Araç belirlediğiniz il veya gümrük sınırına yaklaştığında anında yüksek öncelikli uyarı alın.",
      },
      {
        title: "Sökülme & Çekici Koruma",
        desc: "Akü bağlantısı kesildiğinde dahili batarya devreye girer ve son konumu anında iletir.",
      },
      {
        title: "Sözleşme Kilometre & Bakım Takibi",
        desc: "Kiralama dönüşü yapılan kilometreyi otomatik raporlayın, periyodik bakımları kaçırmayın.",
      },
    ],
    recommendedProducts: ["lg-100-pro-arac-takip-cihazi", "lg-500-bataryali-miknatisli-gps-takip"],
    faqs: [
      {
        question: "Kiralık araçlarda çift cihaz (kablolu + gizli bataryalı) öneriyor musunuz?",
        answer:
          "Evet, yüksek değerli rent a car araçlarında LG-100 Pro + gizli LG-500 Bataryalı ikili güvenlik paketi %99,8 kurtarma başarısı sağlar.",
      },
    ],
  },
  {
    slug: "servis-araclari-takip",
    title: "Öğrenci ve Personel Servis Araçları Takip Sistemi (U-ETDS)",
    shortTitle: "Servis & U-ETDS",
    tagline: "Veli bilgilendirme, zamanında varış analizi ve tam U-ETDS uyumu.",
    heroImage: "/images/blog/uetds-integration.svg",
    kpiStat: "%100",
    kpiLabel: "U-ETDS Mevzuat Uyumu",
    summary:
      "Okul ve fabrika personel servisleri için güzergah takibi, durak varış raporları, yapay zeka destekli kamera ve otomatik U-ETDS bildirimi.",
    benefits: [
      {
        title: "Otomatik U-ETDS Veri Aktarımı",
        desc: "Ulaştırma Bakanlığı bildirimlerini manuel iş yükü olmadan kesintisiz iletin.",
      },
      {
        title: "Güzergah ve Hız Denetimi",
        desc: "Okul bölgesi hız limitleri ve belirlenen rota dışına çıkışlarda anında yönetici bildirimi.",
      },
      {
        title: "Kabin İçi AI Güvenlik Kamerası",
        desc: "Öğrenci unutulma önleme ve sürücü dikkat analiziyle tam güvenlik.",
      },
    ],
    recommendedProducts: ["lg-800-uetds-servis-takip-cihazi", "lg-600-ai-arac-kamera-sistemi"],
    faqs: [
      {
        question: "Servis araçları için kamera ve takip cihazı tek panelde izlenebilir mi?",
        answer:
          "Evet. LifeGO Web ve Mobil platformunda canlı konum, hız ve çift lens kamera görüntüsü aynı ekranda yönetilir.",
      },
    ],
  },
  {
    slug: "soguk-zincir-takip",
    title: "Soğuk Zincir ve Frigorifik Sıcaklık Takip Sistemi",
    shortTitle: "Soğuk Zincir & İlaç",
    tagline: "Gıda ve ilaç taşımacılığında bozulma riskini sıfıra indirin.",
    heroImage: "/images/products/lg-700-heavy.svg",
    kpiStat: "±0.2°C",
    kpiLabel: "Hassas Sıcaklık Ölçümü",
    summary:
      "Frigorifik araç kasalarında 7/24 kablosuz sıcaklık ve nem izleme, kapı açılma alarmları ve denetimlere uygun PDF ısı raporları.",
    benefits: [
      {
        title: "Anlık Isı Eşik Alarmları",
        desc: "Kasa sıcaklığı belirlenen aralığın dışına çıktığında saniyeler içinde SMS ve uygulama uyarısı.",
      },
      {
        title: "Kablosuz BLE Sensör Kolaylığı",
        desc: "Dorse içine kablo çekmeden çoklu bölme sıcaklık ve nem ölçümü.",
      },
      {
        title: "Denetime Hazır Geçmiş Isı Grafiği",
        desc: "İlaç (GDP) ve gıda mevzuatına uygun saatlik/dakikalık PDF & Excel çıktı.",
      },
    ],
    recommendedProducts: ["lg-700-tir-dorse-filo-takip", "lg-500-bataryali-miknatisli-gps-takip"],
    faqs: [
      {
        question: "Sıcaklık sensörleri kalibrasyon sertifikalı mı?",
        answer:
          "Evet, soğuk zincir sensörlerimiz yüksek doğruluklu kalibrasyon belgeleriyle teslim edilir.",
      },
    ],
  },
  {
    slug: "is-makinasi-takip",
    title: "İş Makinesi, Şantiye ve Ekipman Takip Sistemleri",
    shortTitle: "İş Makinesi & Şantiye",
    tagline: "Ekskavatör, vinç ve jeneratörlerinizin çalışma saatini ve yakıtını yönetin.",
    heroImage: "/images/sector-logistics-fleet.jpg",
    kpiStat: "%30",
    kpiLabel: "Atıl Çalışma Azaltımı",
    summary:
      "Zorlu şantiye koşullarına dayanıklı IP67 takip cihazlarıyla gerçek motor çalışma saati, şantiye bölge kontrolü ve mesai dışı kullanım alarmı.",
    benefits: [
      {
        title: "Gerçek Motor Çalışma Saati (Moto-Saat)",
        desc: "Kiralanan iş makinelerinin gerçek çalışma saatlerini faturalandırma için net raporlayın.",
      },
      {
        title: "Mesai Dışı Çalıştırma Alarmı",
        desc: "Gece veya hafta sonu şantiyede izinsiz makine çalıştırıldığında anında haberdar olun.",
      },
      {
        title: "Yüksek Voltaj & Sarsıntı Dayanımı",
        desc: "9-90V geniş voltaj ve IP67 toz/su korumasıyla en ağır koşullarda kesintisiz çalışır.",
      },
    ],
    recommendedProducts: ["lg-700-tir-dorse-filo-takip", "lg-500-bataryali-miknatisli-gps-takip"],
    faqs: [
      {
        question: "Şantiyede elektrik olmayan ekipmanlar takip edilebilir mi?",
        answer:
          "Evet, LG-500 bataryalı mıknatıslı cihazımız ile konteyner, jeneratör ve kırıcı gibi elektrik kaynağı olmayan ekipmanlar aylarca izlenir.",
      },
    ],
  },
  {
    slug: "akilli-karavan-sistemi",
    title: "Akıllı Karavan Takip ve Enerji Yönetim Sistemi",
    shortTitle: "Akıllı Karavan",
    tagline: "Özgürce gezin, karavanınızın güvenliği ve enerjisi cebinizde olsun.",
    heroImage: "/images/products/lg-400-caravan.svg",
    kpiStat: "45 Ülke",
    kpiLabel: "Uluslararası Roaming",
    summary:
      "Motokaravan ve çekme karavanlar için GPS konum takibi, yaşam aküsü voltaj kontrolü, kapı/hareket alarmları ve kabin iklim verisi.",
    benefits: [
      {
        title: "Yaşam Aküsü & Solar İzleme",
        desc: "Karavanınızdan uzaktayken bile akü doluluk oranını canlı kontrol edin.",
      },
      {
        title: "Park Güvenlik Çiti",
        desc: "Çekme karavanınız bağlı olduğu yerden santim oynatıldığında acil uyarı alın.",
      },
      {
        title: "Avrupa Seyahatlerine Hazır",
        desc: "Sınır ötesi gezilerinizde SIM kart değiştirmeden kesintisiz konum takibi.",
      },
    ],
    recommendedProducts: ["lg-400-akilli-karavan-takip-sistemi", "lg-500-bataryali-miknatisli-gps-takip"],
    faqs: [
      {
        question: "Karavan kışın otoparkta dururken çalışır mı?",
        answer:
          "Evet, düşük enerji uyku modu sayesinde karavanınızı kış boyunca güvenle korur.",
      },
    ],
  },
  {
    slug: "akilli-tarim-sistemleri",
    title: "Akıllı Tarım, Traktör ve Tarım Makinesi Takip Sistemi",
    shortTitle: "Akıllı Tarım",
    tagline: "Tarla işleme alanı, traktör yakıtı ve ekipman verimliliğini dijitalleştirin.",
    heroImage: "/images/sector-logistics-fleet.jpg",
    kpiStat: "%18",
    kpiLabel: "Operasyon Verimliliği",
    summary:
      "Traktör, biçerdöver ve tarım filoları için tarla sınır takibi, dönüm/alan işleme haritası, çalışma saati ve yakıt kontrolü.",
    benefits: [
      {
        title: "Tarla Poligon & İşlenen Alan Analizi",
        desc: "Hangi tarlanın ne kadar sürede ve hangi güzergahta işlendiğini haritada görün.",
      },
      {
        title: "Kırsalda Güçlü Çoklu Operatör Çekimi",
        desc: "Zayıf şebekeli kırsal bölgelerde yüksek kazançlı anten ve dahili hafıza güvencesi.",
      },
      {
        title: "Hırsızlığa Karşı Ekipman Koruması",
        desc: "Tarlada bırakılan traktör ve sulama pompaları için gece hareket alarmı.",
      },
    ],
    recommendedProducts: ["lg-100-pro-arac-takip-cihazi", "lg-500-bataryali-miknatisli-gps-takip"],
    faqs: [
      {
        question: "Traktördeki toz ve çamur cihaza zarar verir mi?",
        answer:
          "IP65/IP67 korumalı endüstriyel kasalarımız toz, çamur ve tarımsal yıkama koşullarına tam dayanıklıdır.",
      },
    ],
  },
  {
    slug: "operatorden-bagimsiz-takip",
    title: "Çoklu Operatör M2M Araç Takip (Turkcell, Vodafone, Türk Telekom Uyumlu)",
    shortTitle: "Çoklu Operatör M2M",
    tagline: "Tek operatöre bağlı kalmadan Türkiye'nin her noktasında kesintisiz sinyal.",
    heroImage: "/images/blog/multi-operator-m2m.svg",
    kpiStat: "%99.9",
    kpiLabel: "Kesintisiz Veri Aktarımı",
    summary:
      "Turkcell, Vodafone veya Türk Telekom altyapılarıyla uyumlu endüstriyel M2M data hatları sayesinde en yüksek kapsama ve en ekonomik yıllık yenileme.",
    benefits: [
      {
        title: "Bölgenize En Uygun Operatör Seçimi",
        desc: "Filonuzun yoğun çalıştığı illerde en güçlü çeken şebeke altyapısıyla kurulum.",
      },
      {
        title: "Sürpriz Fatura ve Aşım Yok",
        desc: "M2M paketlerimiz yıllık sabit maliyetlidir; veri aşım ücreti oluşmaz.",
      },
      {
        title: "Taahhütsüz Şeffaf Yenileme",
        desc: "İlk yıl data + yazılım pakete dahildir; sonraki yıllarda uygun yıllık yenileme.",
      },
    ],
    recommendedProducts: ["lg-100-pro-arac-takip-cihazi", "lg-110-obd-bireysel-arac-takip-cihazi"],
    faqs: [
      {
        question: "Kendi operatör hattımı (Turkcell/Vodafone/Türk Telekom) kullanabilir miyim?",
        answer:
          "Evet, dilerseniz LifeGO'nun ekonomik kurumsal M2M hattını kullanabilir, dilerseniz kendi kurumsal data hattınızla cihazları çalıştırabilirsiniz.",
      },
    ],
  },
];

export function getSectorBySlug(slug: string): SectorSolution | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
