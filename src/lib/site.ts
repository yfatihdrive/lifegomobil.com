export const SITE_CONFIG = {
  name: "LifeGO mobil",
  legalName: "LifeGO Mobil Teknoloji ve Araç Takip Sistemleri A.Ş.",
  domain: "https://www.lifegomobil.com",
  tagline: "Yeni Nesil 4G Araç Takip Cihazı, Bireysel GPS ve Akıllı Filo Yönetimi",
  description:
    "Türkiye geneli 81 ilde yetkili montaj ağıyla 4G LTE araç takip cihazı, bireysel araç takip cihazı, motor blokaj, U-ETDS uyumlu filo yönetimi ve yapay zeka destekli araç kamera sistemleri.",
  phoneDisplay: "0 216 825 10 57",
  phoneHref: "tel:+902168251057",
  whatsappNumber: "902168251087",
  whatsappDisplay: "0 216 825 10 87",
  email: "info@lifegomobil.com",
  supportEmail: "destek@lifegomobil.com",
  address: {
    street: "Teknopark Bulvarı, No: 12/A, Pendik",
    city: "İstanbul",
    region: "TR-34",
    postalCode: "34906",
    country: "TR",
    lat: 40.9128,
    lng: 29.3156,
  },
  logo: "/images/lifegomobil-logo.jpg",
  ogImage: "/images/hero-fleet-dashboard.jpg",
  keywords: [
    "araç takip cihazı",
    "araç takip sistemi",
    "bireysel araç takip cihazı",
    "araç gps takip cihazı",
    "mobil araç takip sistemi",
    "araç takip sistemi fiyatları",
    "araç takip programı",
    "en iyi araç takip sistemi",
    "motor blokajlı araç takip",
    "u-etds araç takip sistemi",
    "obd araç takip cihazı",
    "mıknatıslı bataryalı gps takip",
    "motosiklet takip cihazı",
    "karavan takip cihazı",
    "tekne yat takip sistemi",
  ],
};

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_CONFIG.domain}/#organization`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.domain,
    logo: `${SITE_CONFIG.domain}${SITE_CONFIG.logo}`,
    image: `${SITE_CONFIG.domain}${SITE_CONFIG.ogImage}`,
    description: SITE_CONFIG.description,
    telephone: "+90-216-825-1057",
    email: SITE_CONFIG.email,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: "İstanbul",
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.address.lat,
      longitude: SITE_CONFIG.address.lng,
    },
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:30",
        closes: "19:00",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-216-825-1057",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish", "English"],
    },
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.domain}/#website`,
    url: SITE_CONFIG.domain,
    name: SITE_CONFIG.name,
    inLanguage: "tr-TR",
    publisher: {
      "@id": `${SITE_CONFIG.domain}/#organization`,
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_CONFIG.domain}${item.url}`,
    })),
  };
}

export function getFaqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
