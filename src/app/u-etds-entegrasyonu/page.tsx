import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "U-ETDS Entegrasyonu | Bakanlık Uyumlu Otomatik Servis & Lojistik Takip",
  description:
    "Ulaştırma ve Altyapı Bakanlığı U-ETDS sistemine %100 uyumlu otomatik konum ve sefer aktarım altyapısı. Servis, turizm ve yük taşımacılığı çözümleri.",
  alternates: { canonical: "/u-etds-entegrasyonu" },
};

export default function UetdsPage() {
  return (
    <>
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
              Resmi Mevzuat Uyumu
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              %100 Otomatik U-ETDS Araç Takip Entegrasyonu
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              D1, D2, B1, B2, K1 ve C2 yetki belgeli taşımacılık filoları için Ulaştırma ve Altyapı
              Bakanlığı U-ETDS sistemine kesintisiz, hatasız ve ceza riskinden uzak veri aktarımı.
            </p>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/images/blog/uetds-integration.svg"
              alt="U-ETDS entegrasyon mimarisi"
              width={960}
              height={540}
              className="rounded-3xl border border-white/15 shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl font-extrabold text-[#0B2545]">
              Neden LifeGO U-ETDS Çözümü?
            </h2>
            {[
              "Manuel bildirim hatalarını ve idari para cezalarını tamamen ortadan kaldırır.",
              "Tek ekrandan hangi aracın U-ETDS aktarımının aktif olduğunu canlı izleyin.",
              "Ek yazılım modülü ücreti olmadan LG-800 paketine standart dahildir.",
              "Okul servisleri, personel taşımacılığı ve turizm transfer filoları için aynı gün aktivasyon.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="lg:col-span-6">
            <QuoteForm defaultType="U-ETDS Servis Takip" />
          </div>
        </div>
      </section>
    </>
  );
}
