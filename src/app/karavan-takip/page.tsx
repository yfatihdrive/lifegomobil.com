import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Karavan Takip Cihazı ve Akıllı Yaşam Aküsü İzleme",
  description:
    "Motokaravan ve çekme karavanlar için GPS güvenlik, yaşam aküsü voltaj takibi, solar telemetri ve Avrupa roaming destekli takip sistemi.",
  alternates: { canonical: "/karavan-takip" },
};

export default function KaravanTakipPage() {
  const selected = PRODUCTS.filter((p) =>
    ["lg-400-akilli-karavan-takip-sistemi", "lg-500-bataryali-miknatisli-gps-takip"].includes(p.slug)
  );
  return (
    <CategoryLanding
      slug="karavan-takip"
      badge="Karavan Takip Sistemi"
      h1="Motokaravan ve Çekme Karavanlar İçin Akıllı GPS Takip"
      lead="Konum güvenliği, yaşam aküsü doluluk izleme, kapı/hareket alarmları ve Avrupa rotalarında kesintisiz roaming."
      quickAnswer="LifeGO LG-400 Karavan, hem araç aküsünü hem yaşam aküsünü canlı izler; çekme karavanlarda izinsiz hareket alarmı ve 45+ ülke roaming desteği sunar."
      products={selected}
      defaultQuoteType="Motosiklet / Karavan / Yat"
      features={[
        { title: "Yaşam Aküsü & Solar Telemetri", desc: "Karavanınız uzaktayken bile akü voltajını ve doluluğunu telefonunuzdan takip edin." },
        { title: "Çekme Karavan Hareket Alarmı", desc: "Bağlı olduğu park yerinden oynatıldığı saniye yüksek sesli mobil uyarı." },
        { title: "Avrupa & Balkanlar Roaming", desc: "Yurt dışı seyahatlerinde SIM kart değiştirmeden kesintisiz konum takibi." },
      ]}
      faqs={[
        { question: "Çekme karavanda güneş paneli sistemiyle uyumlu mu?", answer: "Evet, 12V/24V yaşam aküsü ve solar regülatör sistemleriyle tam uyumlu çalışır." },
      ]}
    />
  );
}
