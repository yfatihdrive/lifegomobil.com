import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ProductItem } from "@/data/products";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";

interface CategoryLandingProps {
  slug: string;
  badge: string;
  h1: string;
  lead: string;
  quickAnswer: string;
  features: { title: string; desc: string }[];
  products: ProductItem[];
  faqs: { question: string; answer: string }[];
  defaultQuoteType: string;
}

export default function CategoryLanding({
  slug,
  badge,
  h1,
  lead,
  quickAnswer,
  features,
  products,
  faqs,
  defaultQuoteType,
}: CategoryLandingProps) {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana Sayfa", url: "/" },
          { name: badge, url: `/${slug}` },
        ])}
      />
      <JsonLd data={getFaqJsonLd(faqs)} />

      <section className="lifego-navy-hero text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-[#F7941D]">
            {badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold max-w-4xl leading-tight">{h1}</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">{lead}</p>
        </div>
      </section>

      {/* GEO Quick Summary */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-sky-200/80 shadow-xs">
            <div className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8] mb-1">
              Kısa Özet
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{quickAnswer}</p>
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
            Önerilen LifeGO Donanımları
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {products.map((product) => (
              <article
                key={product.slug}
                className="rounded-3xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl transition flex flex-col"
              >
                <Link href={`/urunler/${product.slug}`} className="block bg-slate-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="w-full h-52 object-cover"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-extrabold text-[#0B2545]">{product.shortTitle}</h3>
                    <p className="text-sm text-slate-600">{product.summary}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#0B2545]">{product.priceLabel}</span>
                    <Link
                      href={`/urunler/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00B4D8] hover:text-[#0B2545]"
                    >
                      İncele <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <CheckCircle2 className="w-5 h-5 text-[#F7941D]" />
                <h3 className="font-extrabold text-[#0B2545]">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Quote */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0B2545]">Sıkça Sorulan Sorular</h2>
            {faqs.map((faq) => (
              <div key={faq.question} className="p-5 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-bold text-sm text-[#0B2545]">{faq.question}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-6">
            <QuoteForm defaultType={defaultQuoteType} />
          </div>
        </div>
      </section>
    </>
  );
}
