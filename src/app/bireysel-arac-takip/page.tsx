import type { Metadata } from "next";
import { PRODUCTS } from "@/data/products";
import CategoryLanding from "@/components/CategoryLanding";

export const metadata: Metadata = {
  title: "Bireysel Araç Takip Cihazı | Tak-Çalıştır OBD ve Gizli Montaj",
  description:
    "Şahsi otomobiliniz ve ailenizin güvenliği için en iyi bireysel araç takip cihazı. Kablo kesmeden 10 saniyede takılan OBD-II, motor blokajlı ve 90 gün bataryalı modeller.",
  alternates: { canonical: "/bireysel-arac-takip" },
};

export default function BireyselAracTakipPage() {
  const selected = PRODUCTS.filter((p) =>
    ["lg-110-obd-bireysel-arac-takip-cihazi", "lg-100-pro-arac-takip-cihazi", "lg-500-bataryali-miknatisli-gps-takip"].includes(p.slug)
  );
  return (
    <CategoryLanding
      slug="bireysel-arac-takip"
      badge="Bireysel Araç Takip Cihazı"
      h1="Bireysel Araç Takip Cihazı: Aracınız 7/24 Cebinizde Güvende"
      lead="Sıfır garanti kapsamındaki aracınız için 10 saniyede takılan OBD-II cihazı, maksimum hırsızlık koruması için motor blokajlı gizli montaj veya kablosuz 90 gün bataryalı takip."
      quickAnswer="Bireysel araç takip cihazı seçerken araç garantisini koruyan tak-çalıştır OBD-II (LG-110), uzaktan motor durdurma sunan gizli kablolu (LG-100 Pro) veya kablosuz mıknatıslı bataryalı (LG-500) modeller öne çıkar. Tüm LifeGO bireysel paketleri 4G LTE destekli, BTK IMEI kayıtlı ve ilk 12 ay M2M data hattı dahildir."
      products={selected}
      defaultQuoteType="Bireysel Araç Takip"
      features={[
        { title: "Kablo Kesmeden 10 Sn Kurulum", desc: "LG-110 OBD modelini direksiyon altındaki sokete kendiniz takın, araç garantisini %100 koruyun." },
        { title: "Çekici & İzinsiz Hareket Alarmı", desc: "Aracınız park halindeyken çekiciye yüklendiğinde veya darbe aldığında telefonunuza anında alarm gelir." },
        { title: "Aküyü Bitirmeyen Akıllı Uyku", desc: "Kontak kapandığında ultra düşük enerji moduna geçer; aracınız haftalarca yatsa dahi akü korunur." },
      ]}
      faqs={[
        { question: "Bireysel araç takip cihazı için aylık fatura öder miyim?", answer: "Hayır. Paketi aldığınızda 12 aylık M2M SIM kart ve mobil yazılım dahildir; her ay operatör faturası veya aşım ücreti çıkmaz." },
        { question: "Aracımı eşim veya çocuğum kullanırken hız limiti uyarısı alabilir miyim?", answer: "Evet. LifeGO mobil uygulamasından özel hız limiti ve bölge (Geofence) bildirimleri tanımlayabilirsiniz." },
      ]}
    />
  );
}
