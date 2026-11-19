import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { getBreadcrumbJsonLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "4G Araç Takip Cihazları ve GPS Donanımları",
  description:
    "Bireysel OBD araç takip cihazı, motor blokajlı 4G LTE kablolu takip, 90 gün bataryalı mıknatıslı GPS, motosiklet, karavan, tekne ve AI araç kameraları.",
  alternates: { canonical: "/urunler" },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana Sayfa", url: "/" },
          { name: "Ürünler", url: "/urunler" },
        ])}
      />
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            LifeGO mobil 4G LTE Donanım Kataloğu
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Araç Takip Cihazları ve Akıllı IoT Donanımları
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            Bireysel otomobillerden uluslararası lojistik filolarına, motosikletlerden yat ve
            karavanlara kadar tüm taşıtlar için BTK IMEI kayıtlı, 2 yıl garantili 4G GPS cihazları.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PRODUCTS.map((product) => (
            <article
              key={product.slug}
              className="group rounded-3xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl hover:border-[#00B4D8]/50 transition flex flex-col"
            >
              <Link href={`/urunler/${product.slug}`} className="relative block bg-slate-50">
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold bg-[#0B2545] text-white">
                  {product.badge}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={450}
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2.5">
                  <div className="text-xs font-bold text-[#00B4D8] uppercase">
                    {product.categoryLabel}
                  </div>
                  <h2 className="text-xl font-extrabold text-[#0B2545]">
                    <Link href={`/urunler/${product.slug}`} className="hover:text-[#00B4D8]">
                      {product.shortTitle}
                    </Link>
                  </h2>
                  <p className="text-sm text-slate-600">{product.summary}</p>
                  <ul className="space-y-1.5 pt-2">
                    {product.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#0B2545]">{product.priceLabel}</span>
                  <Link
                    href={`/urunler/${product.slug}`}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-[#0B2545] text-white text-xs font-bold hover:bg-[#00B4D8] transition"
                  >
                    Detaylar <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
