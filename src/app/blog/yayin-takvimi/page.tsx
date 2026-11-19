import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, CheckCircle2, Clock, Eye, Image as ImageIcon } from "lucide-react";
import {
  ALL_BLOG_POSTS,
  isPostPublished,
  formatTurkishDate,
  estimateWordCount,
  getTodayIstanbulISO,
} from "@/lib/blog";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "01.12.2026 Otomatik Günlük Blog Yayın Takvimi",
  description:
    "LifeGO mobil blog içeriklerinin 01.12.2026 tarihinden itibaren günde 1 makale otomatik yayınlanma takvimi ve SEO anahtar kelime planı.",
  robots: { index: false, follow: true },
};

export default function PublishSchedulePage() {
  const todayISO = getTodayIstanbulISO();
  const sortedAsc = [...ALL_BLOG_POSTS].sort((a, b) =>
    a.publishDate < b.publishDate ? -1 : 1
  );

  return (
    <>
      <section className="lifego-navy-hero text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#F7941D]">
            <Calendar className="w-3.5 h-3.5" />
            Otomatik Yayın Motoru (Europe/Istanbul Saati)
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold">
            Blog Yayın Takvimi — 01.12.2026 Günlük 1 Makale Programı
          </h1>
          <p className="text-slate-300 text-sm max-w-3xl">
            Sistem tarihi (<strong>{formatTurkishDate(todayISO)}</strong>) baz alınarak her gün saat
            00:00&apos;da ilgili tarihin makalesi otomatik olarak <code>/blog</code>,{" "}
            <code>/sitemap.xml</code> ve <code>/feed.xml</code> akışında yayına girer. Aşağıdan
            planlanan tüm yazıları önceden inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#0B2545] text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th className="text-left px-5 py-4">Yayın Tarihi</th>
                    <th className="text-left px-5 py-4">Durum</th>
                    <th className="text-left px-5 py-4">Makale Başlığı &amp; Hedef Kelimeler</th>
                    <th className="text-left px-5 py-4">İçerik</th>
                    <th className="text-right px-5 py-4">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedAsc.map((post) => {
                    const live = isPostPublished(post, todayISO);
                    const words = estimateWordCount(post);
                    return (
                      <tr key={post.slug} className="hover:bg-slate-50/80 transition">
                        <td className="px-5 py-4 whitespace-nowrap font-bold text-[#0B2545]">
                          {formatTurkishDate(post.publishDate)}
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap">
                          {live ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Yayında
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold">
                              <Clock className="w-3.5 h-3.5" /> Planlandı
                            </span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <div className="font-bold text-[#0B2545]">{post.title}</div>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {post.keywords.slice(0, 4).map((kw) => (
                              <span
                                key={kw}
                                className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px]"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-xs text-slate-600">
                          <div>~{words} kelime</div>
                          <div className="inline-flex items-center gap-1 text-[#00B4D8] font-semibold mt-0.5">
                            <ImageIcon className="w-3.5 h-3.5" /> 3 Özgün Görsel
                          </div>
                        </td>
                        <td className="px-5 py-4 whitespace-nowrap text-right">
                          <Link
                            href={live ? `/blog/${post.slug}` : `/blog/${post.slug}?preview=1`}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-[#0B2545] hover:text-white text-[#0B2545] text-xs font-bold transition"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            {live ? "Oku" : "Önizle"}
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
