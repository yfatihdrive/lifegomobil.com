import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { SITE_CONFIG, buildWhatsappUrl, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Ürün Bulunamadı" };

  return {
    title: product.name,
    description: product.summary,
    alternates: { canonical: `/urunler/${product.slug}` },
    openGraph: {
      title: `${product.name} | LifeGO mobil`,
      description: product.summary,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${SITE_CONFIG.domain}${product.image}`,
    description: product.description,
    sku: product.code,
    brand: { "@type": "Brand", name: SITE_CONFIG.name },
    offers: {
      "@type": "Offer",
      url: `${SITE_CONFIG.domain}/urunler/${product.slug}`,
      priceCurrency: "TRY",
      price: product.priceNumeric,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: SITE_CONFIG.legalName },
    },
  };

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana Sayfa", url: "/" },
          { name: "Ürünler", url: "/urunler" },
          { name: product.code, url: `/urunler/${product.slug}` },
        ])}
      />
      {product.faqs.length > 0 && <JsonLd data={getFaqJsonLd(product.faqs)} />}

      <section className="bg-slate-50 border-b border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/urunler"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0B2545] mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Tüm Ürünlere Dön
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Images */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {product.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden border border-slate-200 bg-white"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} görsel ${i + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-24 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B2545] text-white text-xs font-bold">
                {product.badge} • {product.categoryLabel}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] leading-tight">
                {product.name}
              </h1>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-slate-500 font-semibold">
                    12 Ay M2M Data + Mobil Yazılım Dahil
                  </div>
                  <div className="text-2xl font-extrabold text-[#0B2545]">{product.priceLabel}</div>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full">
                  <ShieldCheck className="w-4 h-4" /> BTK IMEI Kayıtlı • 2 Yıl Garanti
                </div>
              </div>

              <div className="space-y-2.5">
                <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-500">
                  Öne Çıkan Özellikler
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.highlights.map((h) => (
                    <li key={h} className="text-sm text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00B4D8] mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={buildWhatsappUrl(`Merhaba, ${product.name} (${product.code}) için fiyat ve montaj bilgisi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm inline-flex items-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp&apos;tan Sipariş / Teklif
                </a>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="px-6 py-3.5 rounded-xl bg-[#0B2545] hover:bg-[#133B6B] text-white font-bold text-sm inline-flex items-center gap-2 transition"
                >
                  <Phone className="w-4 h-4 text-[#F7941D]" />
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs & Quote */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0B2545] mb-5">Teknik Özellikler</h2>
              <div className="rounded-2xl border border-slate-200 overflow-hidden">
                <table className="w-full text-sm">
                  <tbody>
                    {product.specs.map((spec, idx) => (
                      <tr key={spec.label} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                        <th className="text-left px-5 py-3.5 font-bold text-[#0B2545] w-2/5">
                          {spec.label}
                        </th>
                        <td className="px-5 py-3.5 text-slate-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {product.faqs.length > 0 && (
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B2545] mb-4">
                  {product.code} Hakkında Sıkça Sorulan Sorular
                </h2>
                <div className="space-y-3">
                  {product.faqs.map((f) => (
                    <div key={f.question} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                      <h3 className="font-bold text-[#0B2545] text-sm">{f.question}</h3>
                      <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{f.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-5">
            <QuoteForm defaultType={product.shortTitle} />
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0B2545] mb-6">Diğer LifeGO Cihazları</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/urunler/${p.slug}`}
                className="rounded-2xl bg-white border border-slate-200 p-5 hover:border-[#00B4D8] transition flex items-center gap-4"
              >
                <Image
                  src={p.image}
                  alt={p.name}
                  width={100}
                  height={75}
                  className="w-20 h-16 rounded-xl object-cover shrink-0"
                />
                <div>
                  <div className="font-extrabold text-sm text-[#0B2545]">{p.shortTitle}</div>
                  <div className="text-xs text-[#00B4D8] font-bold mt-1">{p.priceLabel}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
