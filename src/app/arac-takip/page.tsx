import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Araç Takip Cihazı ve 4G LTE Araç Takip Sistemi",
  description:
    "Türkiye geneli 81 ilde yetkili montajlı 4G LTE araç takip cihazı ve araç takip sistemi. Motor blokaj, canlı harita, yakıt tasarrufu ve 12 ay M2M hat dahil.",
  alternates: { canonical: "/arac-takip" },
};

export default function AracTakipPage() {
  const selected = PRODUCTS.filter((p) =>
    ["lg-100-pro-arac-takip-cihazi", "lg-110-obd-bireysel-arac-takip-cihazi", "lg-700-tir-dorse-filo-takip"].includes(p.slug)
  );
  return (
    <CategoryLanding
      slug="arac-takip"
      badge="Araç Takip Sistemi"
      h1="Yeni Nesil 4G LTE Araç Takip Cihazı ve Akıllı Filo Sistemi"
      lead="Bireysel otomobillerden büyük ticari filolara kadar tüm araçlarınızı 1-2 metre GPS hassasiyeti, uzaktan motor blokaj ve anlık mobil bildirimlerle 7/24 koruyun."
      quickAnswer="LifeGO mobil araç takip cihazları, 4G LTE Cat-1 şebekesi ve çoklu uydu (GPS + GLONASS + Galileo) teknolojisiyle çalışır. İlk 12 ay M2M data hattı ve Türkçe iOS/Android/Web uygulaması pakete dahildir; 81 ilde yetkili montaj ve 2 yıl birebir değişim garantisi sunar."
      products={selected}
      defaultQuoteType="Kurumsal Filo Takip"
      features={[
        { title: "Uzaktan Motor Blokaj", desc: "Hırsızlık veya izinsiz kullanımda telefonunuzdan tek dokunuşla güvenli motor durdurma." },
        { title: "%22'ye Varan Yakıt Tasarrufu", desc: "Rölanti süresi, hız aşımı ve rota analizleriyle filo maliyetlerini ilk aydan düşürün." },
        { title: "81 İl Yetkili Montaj", desc: "Aracın orijinal elektrik tesisatına zarar vermeden gizli ve garantili profesyonel kurulum." },
      ]}
      faqs={[
        { question: "Araç takip sistemi hangi araçlara takılır?", answer: "9-90V geniş voltaj desteği sayesinde tüm binek otomobiller, hafif ticari araçlar, minibüsler, otobüsler ve tır/çekici filolarıyla %100 uyumludur." },
        { question: "Aylık zorunlu taahhüt var mı?", answer: "Hayır, cihaz mülkiyeti tamamen size aittir. İlk yıl data ve yazılım ücretsiz dahildir; sonraki yıllarda uygun yıllık yenileme yapılır." },
      ]}
    />
  );
}
