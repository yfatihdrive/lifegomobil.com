import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import {
  getPublishedPosts,
  getScheduledPosts,
  formatTurkishDate,
  estimateWordCount,
} from "@/lib/blog";
import { getBreadcrumbJsonLd } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog & Araç Takip Rehberi | GPS, Bireysel Takip, Fiyatlar ve KVKK",
  description:
    "Araç takip cihazı nasıl çalışır, nereye takılır, 2026 fiyatları, bireysel araç takip cihazı seçimi, motor blokaj ve U-ETDS hakkında %100 özgün rehber makaleler.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const published = getPublishedPosts();
  const scheduled = getScheduledPosts();

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Ana Sayfa", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#F7941D]">
              <Sparkles className="w-3.5 h-3.5" />
              LifeGO mobil Bilgi Merkezi • %100 Özgün İçerik
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold">
              Araç Takip Cihazı ve Filo Yönetimi Blogu
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Google Türkiye&apos;de en çok aranan araç takip soruları, 2026 güncel fiyat rehberleri,
              bireysel GPS cihazı incelemeleri, KVKK mevzuatı ve teknik kurulum ipuçları.
            </p>
          </div>
          <Link
            href="/blog/yayin-takvimi"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-sm font-bold text-white shrink-0 transition"
          >
            <Calendar className="w-4 h-4 text-[#00B4D8]" />
            Otomatik Yayın Takvimi ({scheduled.length} Planlı Yazı)
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Scheduled Info Banner */}
          {scheduled.length > 0 && (
            <div className="rounded-2xl bg-sky-50 border border-sky-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8]">
                  Otomatik Günlük Yayın Programı Aktif
                </div>
                <p className="text-sm text-[#0B2545]">
                  <strong>01 Aralık 2026</strong> tarihinden itibaren her gün otomatik olarak{" "}
                  <strong>1 yeni özgün makale</strong> yayına alınacak şekilde{" "}
                  <strong>{scheduled.length} makale</strong> programlanmıştır.
                </p>
              </div>
              <Link
                href="/blog/yayin-takvimi"
                className="px-4 py-2.5 rounded-xl bg-[#0B2545] text-white text-xs font-bold hover:bg-[#00B4D8] transition shrink-0 text-center"
              >
                Yayın Takvimini &amp; Önizlemeleri Gör
              </Link>
            </div>
          )}

          {/* Published Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {published.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl transition flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="block bg-slate-100 overflow-hidden">
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    width={640}
                    height={360}
                    className="w-full h-52 object-cover hover:scale-103 transition duration-300"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-bold text-[#00B4D8]">{post.category}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {formatTurkishDate(post.publishDate)}
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold text-[#0B2545] leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#00B4D8] transition">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      ~{estimateWordCount(post)} kelime • 3 görsel
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-extrabold text-[#0B2545] hover:text-[#F7941D]"
                    >
                      Oku <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
