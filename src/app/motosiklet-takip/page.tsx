import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Motosiklet Takip Cihazı | IP67 Su Geçirmez ve Akü Korumalı",
  description:
    "Motosiklet, scooter ve kurye filoları için IP67 su geçirmez, eğim/devrilme sensörlü ve motosiklet aküsünü bitirmeyen 4G GPS takip cihazı.",
  alternates: { canonical: "/motosiklet-takip" },
};

export default function MotosikletTakipPage() {
  const selected = PRODUCTS.filter((p) =>
    ["lg-200-motosiklet-takip-cihazi", "lg-500-bataryali-miknatisli-gps-takip"].includes(p.slug)
  );
  return (
    <CategoryLanding
      slug="motosiklet-takip"
      badge="Motosiklet Takip Sistemi"
      h1="IP67 Su Geçirmez ve Akü Korumalı Motosiklet Takip Cihazı"
      lead="Motosiklet hırsızlıklarına karşı eğim, darbe, kamyonete yükleme alarmı ve uzaktan motor blokaj koruması."
      quickAnswer="LifeGO LG-200 Moto, 3 mA altındaki ultra düşük uyku akımıyla motosiklet aküsünü korur; IP67 tam su geçirmez yapısıyla yağmur ve yıkamadan etkilenmez."
      products={selected}
      defaultQuoteType="Motosiklet / Karavan / Yat"
      features={[
        { title: "3-Eksenli Eğim & Darbe Sensörü", desc: "Motorunuz yerinden oynatıldığında veya devrildiğinde saniyeler içinde acil bildirim." },
        { title: "Motosiklet Akü Koruma Devresi", desc: "Kış aylarında dahi akü voltajını izleyerek akünün bitmesini önler." },
        { title: "Grenaj İçi Tam Gizli Montaj", desc: "Ultra ince gövdesiyle dışarıdan fark edilmez, basınçlı suya dayanıklıdır." },
      ]}
      faqs={[
        { question: "Elektrikli motosiklet ve scooterlarda çalışır mı?", answer: "Evet, 9-90V geniş voltaj desteği sayesinde tüm elektrikli motosiklet ve scooterlara uyumludur." },
      ]}
    />
  );
}
