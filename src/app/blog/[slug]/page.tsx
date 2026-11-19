import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  Link2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import {
  getBlogPostBySlug,
  getPublishedPosts,
  isPostPublished,
  formatTurkishDate,
  estimateWordCount,
} from "@/lib/blog";
import { SITE_CONFIG, getBreadcrumbJsonLd, getFaqJsonLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import QuoteForm from "@/components/QuoteForm";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Makale Bulunamadı" };

  const live = isPostPublished(post);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: live ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: `${post.publishDate}T00:00:00+03:00`,
      authors: [post.author],
      images: [{ url: post.coverImage.src, alt: post.coverImage.alt }],
    },
  };
}

export default async function BlogDetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ preview?: string }>;
}) {
  const { slug } = await params;
  const { preview } = await searchParams;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const live = isPostPublished(post);
  const isPreviewMode = !live && preview === "1";

  if (!live && !isPreviewMode) {
    return (
      <section className="py-24 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
            <Calendar className="w-4 h-4" />
            Planlı Yayın: {formatTurkishDate(post.publishDate)}
          </div>
          <h1 className="text-3xl font-extrabold text-[#0B2545]">{post.title}</h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Bu makale otomatik yayın takvimimiz kapsamında{" "}
            <strong>{formatTurkishDate(post.publishDate)}</strong> tarihinde yayına alınacaktır.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              href="/blog"
              className="px-5 py-3 rounded-xl bg-[#0B2545] text-white text-sm font-bold"
            >
              Yayındaki Makalelere Dön
            </Link>
            <Link
              href={`/blog/${post.slug}?preview=1`}
              className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-[#0B2545] text-sm font-bold"
            >
              Editör Önizlemesi
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const wordCount = estimateWordCount(post);
  const relatedPosts = getPublishedPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [
      `${SITE_CONFIG.domain}${post.coverImage.src}`,
      ...post.sections
        .filter((s) => s.image)
        .map((s) => `${SITE_CONFIG.domain}${s.image!.src}`),
    ],
    datePublished: `${post.publishDate}T00:00:00+03:00`,
    dateModified: `${post.publishDate}T00:00:00+03:00`,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: { "@type": "ImageObject", url: `${SITE_CONFIG.domain}${SITE_CONFIG.logo}` },
    },
    wordCount,
    inLanguage: "tr-TR",
    keywords: post.keywords.join(", "),
    mainEntityOfPage: `${SITE_CONFIG.domain}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      {post.faqs.length > 0 && <JsonLd data={getFaqJsonLd(post.faqs)} />}

      {isPreviewMode && (
        <div className="bg-amber-500 text-[#061529] text-center py-2.5 px-4 text-xs font-extrabold">
          ÖNİZLEME MODU — Bu makale {formatTurkishDate(post.publishDate)} tarihinde otomatik olarak
          yayınlanacaktır.
        </div>
      )}

      <article className="bg-white">
        {/* Header */}
        <header className="bg-slate-50 border-b border-slate-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#0B2545]"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Blog&apos;a Dön
            </Link>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="px-3 py-1 rounded-full bg-[#0B2545] text-white font-bold">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#F7941D]" />
                {formatTurkishDate(post.publishDate)}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#00B4D8]" />
                {post.readTimeMinutes} dk okuma (~{wordCount} kelime)
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B2545] leading-tight">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
          </div>
        </header>

        {/* Body */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
          {/* Image 1: Cover */}
          <figure className="space-y-2.5">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50">
              <Image
                src={post.coverImage.src}
                alt={post.coverImage.alt}
                width={960}
                height={540}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
            <figcaption className="text-xs text-slate-500 text-center">
              {post.coverImage.caption}
            </figcaption>
          </figure>

          {/* GEO Quick Answer Box */}
          <div className="p-6 rounded-3xl bg-sky-50/80 border border-sky-200 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#00B4D8]">
              <Sparkles className="w-4 h-4 text-[#F7941D]" />
              Hızlı Yanıt &amp; Özet
            </div>
            <p className="text-sm sm:text-base text-[#0B2545] leading-relaxed font-medium">
              {post.quickAnswer}
            </p>
          </div>

          {/* Sections with Inline Images (Images 2 & 3) */}
          <div className="space-y-10">
            {post.sections.map((sec) => (
              <section key={sec.heading} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
                {sec.bullets && (
                  <ul className="space-y-2.5 bg-slate-50 rounded-2xl p-5 border border-slate-200">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00B4D8] mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.image && (
                  <figure className="pt-2 space-y-2">
                    <div className="rounded-3xl overflow-hidden border border-slate-200 bg-slate-50">
                      <Image
                        src={sec.image.src}
                        alt={sec.image.alt}
                        width={960}
                        height={540}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <figcaption className="text-xs text-slate-500 text-center">
                      {sec.image.caption}
                    </figcaption>
                  </figure>
                )}
              </section>
            ))}
          </div>

          {/* Internal & External Links Box */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0B2545]">
                <Link2 className="w-4 h-4 text-[#00B4D8]" /> İlgili LifeGO Sayfaları
              </div>
              <ul className="space-y-2 text-sm">
                {post.internalLinks.map((lnk) => (
                  <li key={lnk.href}>
                    <Link
                      href={lnk.href}
                      className="font-semibold text-[#00B4D8] hover:text-[#0B2545] underline underline-offset-4"
                    >
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#0B2545]">
                <ExternalLink className="w-4 h-4 text-[#F7941D]" /> Resmi Kaynaklar &amp; Referanslar
              </div>
              <ul className="space-y-2 text-sm">
                {post.externalLinks.map((lnk) => (
                  <li key={lnk.href}>
                    <a
                      href={lnk.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-700 hover:text-[#00B4D8] inline-flex items-center gap-1.5"
                    >
                      {lnk.label}
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* FAQ */}
          {post.faqs.length > 0 && (
            <div className="space-y-4 pt-4">
              <h2 className="text-2xl font-extrabold text-[#0B2545]">Sıkça Sorulan Sorular</h2>
              {post.faqs.map((faq) => (
                <div key={faq.question} className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="font-bold text-sm text-[#0B2545]">{faq.question}</h3>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}

          {/* Keywords tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {post.keywords.map((kw) => (
              <span
                key={kw}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold"
              >
                #{kw}
              </span>
            ))}
          </div>

          {/* CTA Quote Form */}
          <div className="pt-6">
            <QuoteForm />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="pt-8 border-t border-slate-200 space-y-5">
              <h2 className="text-xl font-extrabold text-[#0B2545]">Diğer Rehber Makaleler</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="p-4 rounded-2xl border border-slate-200 hover:border-[#00B4D8] transition space-y-2"
                  >
                    <div className="text-xs font-bold text-[#00B4D8]">{rp.category}</div>
                    <div className="font-bold text-sm text-[#0B2545] line-clamp-2">{rp.title}</div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
