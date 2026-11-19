import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Yat ve Tekne Takip Sistemi | IP68 Demir Tarama Alarmı",
  description:
    "Motoryat, yelkenli ve charter tekneler için IP68 su geçirmez deniz takip cihazı, demir tarama (Anchor Guard) ve sintine su alarmı.",
  alternates: { canonical: "/yat-ve-tekne-takip" },
};

export default function YatTekneTakipPage() {
  const selected = PRODUCTS.filter((p) =>
    ["lg-300-yat-ve-tekne-takip-cihazi", "lg-500-bataryali-miknatisli-gps-takip"].includes(p.slug)
  );
  return (
    <CategoryLanding
      slug="yat-ve-tekne-takip"
      badge="Yat & Tekne Takip"
      h1="IP68 Deniz Dayanımlı Yat, Tekne ve Charter Takip Sistemi"
      lead="Demir tarama (Anchor Guard), sintine su seviyesi, sahil elektriği kesintisi ve akü izleme tek uygulamada."
      quickAnswer="LifeGO LG-300 Marine, tuzlu suya tam dayanıklı IP68 gövdesi, tek dokunuşla kurulan demir tarama çiti ve deniz mili (knot) bazlı seyir defteriyle teknenizi 7/24 korur."
      products={selected}
      defaultQuoteType="Motosiklet / Karavan / Yat"
      features={[
        { title: "Akıllı Demir Tarama (Anchor Guard)", desc: "Rüzgar veya akıntı nedeniyle tekneniz demir bölgesinden sürüklenirse anında alarm." },
        { title: "Sintine & Sahil Elektriği İzleme", desc: "Kışlama döneminde sintinede su yükseldiğinde veya marina elektriği kesildiğinde bildirim." },
        { title: "Charter Filo Seyir Defteri", desc: "Kiralık teknelerin rota, deniz mili ve hız geçmişini haritada net raporlayın." },
      ]}
      faqs={[
        { question: "Yunan adaları veya açık deniz seyrinde çalışır mı?", answer: "Uluslararası roaming paketiyle kıyı şebekelerinde anlık, açık denizde ise dahili hafıza kaydıyla kesintisiz seyir defteri tutar." },
      ]}
    />
  );
}
