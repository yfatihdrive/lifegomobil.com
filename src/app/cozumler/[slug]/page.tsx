import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { SECTORS, getSectorBySlug } from "@/data/sectors";
import { PRODUCTS } from "@/data/products";
import { getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";

export async function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: "Çözüm Bulunamadı" };

  return {
    title: sector.title,
    description: sector.summary,
    alternates: { canonical: `/cozumler/${sector.slug}` },
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const recProducts = PRODUCTS.filter((p) => sector.recommendedProducts.includes(p.slug));

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana Sayfa", url: "/" },
          { name: "Çözümler", url: "/cozumler" },
          { name: sector.shortTitle, url: `/cozumler/${sector.slug}` },
        ])}
      />
      {sector.faqs.length > 0 && <JsonLd data={getFaqJsonLd(sector.faqs)} />}

      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <Link
              href="/cozumler"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-300 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Tüm Sektörel Çözümler
            </Link>
            <div className="inline-flex px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#F7941D]">
              {sector.kpiStat} {sector.kpiLabel}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">{sector.title}</h1>
            <p className="text-slate-300 text-base leading-relaxed">{sector.summary}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src={sector.heroImage}
                alt={sector.title}
                width={700}
                height={420}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sector.benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-2.5">
                <CheckCircle2 className="w-6 h-6 text-[#00B4D8]" />
                <h2 className="text-lg font-extrabold text-[#0B2545]">{b.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {recProducts.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-[#0B2545]">
                Bu Sektör İçin Önerilen Donanımlar
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/urunler/${p.slug}`}
                    className="rounded-2xl border border-slate-200 p-5 hover:border-[#00B4D8] hover:shadow-lg transition flex flex-col justify-between gap-4"
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={400}
                      height={300}
                      className="w-full h-44 object-cover rounded-xl bg-slate-50"
                    />
                    <div>
                      <div className="font-extrabold text-[#0B2545]">{p.shortTitle}</div>
                      <p className="text-xs text-slate-600 mt-1">{p.summary}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#00B4D8]">
                      Cihazı İncele <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl font-extrabold text-[#0B2545]">Sıkça Sorulan Sorular</h2>
            {sector.faqs.map((faq) => (
              <div key={faq.question} className="p-5 rounded-2xl bg-white border border-slate-200">
                <h3 className="font-bold text-sm text-[#0B2545]">{faq.question}</h3>
                <p className="text-sm text-slate-600 mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-6">
            <QuoteForm defaultType={sector.shortTitle} />
          </div>
        </div>
      </section>
    </>
  );
}
