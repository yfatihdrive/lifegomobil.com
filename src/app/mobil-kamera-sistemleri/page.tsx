import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "4G Mobil Araç Kamera Sistemleri | Yapay Zeka ADAS & DMS",
  description:
    "Canlı izlemeli 4G araç içi ve yol kamerası. Yapay zeka uyuklama, telefon kullanımı ve şerit ihlali tespiti, bulut kaza kaydı.",
  alternates: { canonical: "/mobil-kamera-sistemleri" },
};

export default function MobilKameraPage() {
  const selected = PRODUCTS.filter((p) =>
    ["lg-600-ai-arac-kamera-sistemi", "lg-800-uetds-servis-takip-cihazi", "lg-700-tir-dorse-filo-takip"].includes(p.slug)
  );
  return (
    <CategoryLanding
      slug="mobil-kamera-sistemleri"
      badge="4G AI Mobil Kamera"
      h1="Yapay Zeka Destekli 4G Canlı İzlemeli Araç Kamera Sistemleri"
      lead="Yol ve kabin içi çift 1080p Full HD kayıt, sürücü yorgunluk analizi (DMS), çarpışma uyarısı (ADAS) ve anlık uzaktan canlı video."
      quickAnswer="LifeGO LG-600 AI araç kamerası; GPS takip cihazı ve çift lens Full HD kamerayı tek gövdede birleştirir. Kaza ve kural ihlallerini otomatik buluta yedekler."
      products={selected}
      defaultQuoteType="4G AI Araç Kamerası"
      features={[
        { title: "DMS Sürücü Dikkat Analizi", desc: "Uyuklama, esneme, telefonla konuşma ve emniyet kemeri ihlallerinde anında sesli uyarı." },
        { title: "ADAS Yol Güvenliği", desc: "Önden çarpışma, yakın takip mesafesi ve şerit terk tehlikelerini önceden bildirir." },
        { title: "4G Canlı Video & Intercom", desc: "Telefonunuzdan veya web panelinden aracın önünü ve kabin içini canlı izleyin." },
      ]}
      faqs={[
        { question: "Kamera sistemi araç takip cihazının yerini tutar mı?", answer: "Evet, LG-600 AI içinde yerleşik 4G GPS takip modülü bulunur; konum ve canlı videoyu tek panelden yönetirsiniz." },
      ]}
    />
  );
}
