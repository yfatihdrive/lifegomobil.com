import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SECTORS } from "@/data/sectors";
import { getBreadcrumbJsonLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sektörel Araç Takip ve Filo Yönetimi Çözümleri",
  description:
    "Lojistik, rent a car, öğrenci ve personel servisi (U-ETDS), soğuk zincir, iş makinesi, karavan ve akıllı tarım sektörlerine özel 4G GPS çözümleri.",
  alternates: { canonical: "/cozumler" },
};

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana Sayfa", url: "/" },
          { name: "Sektörel Çözümler", url: "/cozumler" },
        ])}
      />
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
            Sektöre Özel Telemetri
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Her Sektörün Dinamiğine Özel Filo Yönetimi
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            Lojistikten soğuk zincire, rent a car güvenliğinden U-ETDS servis taşımacılığına kadar
            operasyonel maliyetlerinizi düşüren akıllı çözümler.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              href={`/cozumler/${s.slug}`}
              className="group p-6 rounded-3xl border border-slate-200 hover:border-[#00B4D8] hover:shadow-xl transition flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="inline-flex px-3 py-1 rounded-full bg-sky-50 text-[#00B4D8] text-xs font-extrabold">
                  {s.kpiStat} • {s.kpiLabel}
                </div>
                <h2 className="text-xl font-extrabold text-[#0B2545] group-hover:text-[#00B4D8] transition">
                  {s.shortTitle}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{s.summary}</p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F7941D]">
                Detaylı İncele <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
