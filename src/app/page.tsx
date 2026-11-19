import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  Radio,
  MapPin,
  Smartphone,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  BarChart3,
  Clock,
  Award,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SECTORS } from "@/data/sectors";
import { getPublishedPosts, formatTurkishDate } from "@/lib/blog";
import { getFaqJsonLd } from "@/lib/site";
import LiveFleetDemo from "@/components/LiveFleetDemo";
import TurkeyLiveFleetMap from "@/components/TurkeyLiveFleetMap";
import AnimatedHeroVisual from "@/components/AnimatedHeroVisual";
import QuoteForm from "@/components/QuoteForm";
import JsonLd from "@/components/JsonLd";

export const dynamic = "force-dynamic";

const HOME_FAQS = [
  {
    question: "Araç takip cihazı nedir ve nasıl çalışır?",
    answer:
      "Araç takip cihazı, GPS/GLONASS/Galileo uydularından 1-2 metre hassasiyetle aldığı konum, hız ve kontak verilerini dahili 4G LTE M2M SIM kartı üzerinden LifeGO bulut sunucularına aktaran güvenlik donanımıdır. iOS, Android ve web panelinden 7/24 canlı izleme, geçmiş rota raporlama ve motor blokaj yapılabilir.",
  },
  {
    question: "Bireysel araç takip cihazı aracın garantisini veya aküsünü etkiler mi?",
    answer:
      "Hayır. Tak-çalıştır LG-110 OBD modelimiz hiçbir kablo kesmeden direksiyon altındaki sokete 10 saniyede takılır ve araç garantisini %100 korur. Tüm LifeGO cihazları akıllı uyku modu sayesinde park halinde ultra düşük enerji tüketerek aküyü korur.",
  },
  {
    question: "Araç takip sistemi fiyatları ve aylık ücretler ne kadar?",
    answer:
      "LifeGO mobil paketleri 2.190 ₺'den başlayan fiyatlarla sunulur ve ilk 12 ay endüstriyel M2M data hattı ile mobil yazılım pakete dahildir. Zorunlu uzun taahhüt veya sürpriz aylık fatura aşımı yoktur.",
  },
  {
    question: "Türkiye'nin her ilinde montaj desteği var mı?",
    answer:
      "Evet. İstanbul merkezli operasyonumuz ve Türkiye'nin 81 ilindeki yetkili teknik servis ağımızla kablolu ve motor blokajlı cihazlarınızın montajını aynı hafta içinde gerçekleştiriyoruz.",
  },
  {
    question: "U-ETDS entegrasyonu ve operatör uyumluluğu destekleniyor mu?",
    answer:
      "Evet. LG-800 serimiz Ulaştırma ve Altyapı Bakanlığı U-ETDS sistemine 7/24 otomatik veri aktarır. Tüm cihazlarımız Turkcell, Vodafone ve Türk Telekom altyapılarıyla uyumlu çoklu operatör M2M hatlarıyla çalışır.",
  },
];

export default function HomePage() {
  const latestPosts = getPublishedPosts().slice(0, 3);
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <>
      <JsonLd data={getFaqJsonLd(HOME_FAQS)} />

      {/* HERO SECTION */}
      <section className="lifego-navy-hero text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-sky-300">
              <Radio className="w-3.5 h-3.5 text-[#F7941D]" />
              Yeni Nesil 4G LTE Cat-1 • BTK IMEI Kayıtlı Resmi Donanım
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1]">
              Türkiye&apos;nin Akıllı{" "}
              <span className="lifego-gradient-text">Araç Takip Cihazı</span> ve
              Filo Sistemi
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              <strong>Bireysel araç takip cihazı</strong> ve kurumsal filo yönetiminde
              kesintisiz 4G canlı konum, uzaktan motor blokaj, %22&apos;ye varan yakıt
              tasarrufu ve <strong>81 ilde yetkili montaj</strong> ayrıcalığı.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link
                href="/iletisim"
                className="px-6 py-3.5 rounded-xl font-extrabold text-white lifego-gradient-bg shadow-xl hover:opacity-95 transition inline-flex items-center gap-2"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/bireysel-arac-takip"
                className="px-6 py-3.5 rounded-xl font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition"
              >
                Bireysel Paketleri Gör
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              {[
                { icon: ShieldCheck, label: "2 Yıl Birebir Garanti" },
                { icon: MapPin, label: "81 İl Montaj Ağı" },
                { icon: Lock, label: "Uzaktan Motor Blokaj" },
                { icon: Zap, label: "12 Ay M2M Hat Dahil" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-xs text-slate-200 font-medium">
                  <item.icon className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual (Animated Vehicles & Live GPS Streams) */}
          <div className="lg:col-span-6">
            <AnimatedHeroVisual />
          </div>
        </div>
      </section>

      {/* LIVE ANIMATED TURKEY FLEET MAP */}
      <TurkeyLiveFleetMap />

      {/* GEO QUICK SUMMARY BAR */}
      <section className="bg-slate-50 border-b border-slate-200/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8]">
                Neden LifeGO mobil Araç Takip Sistemi?
              </div>
              <h2 className="text-2xl font-extrabold text-[#0B2545]">
                Tek Platformda Bireysel Güvenlik, Kurumsal Filo ve U-ETDS Uyumu
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>LifeGO mobil</strong>; otomobil, motosiklet, karavan, tekne ve ağır vasıtalar
                için 4G LTE GPS takip cihazları, tak-çalıştır OBD-II çözümleri, 90 gün bataryalı
                mıknatıslı takip cihazları ve yapay zeka destekli 4G araç kameraları sunar. İlk yıl
                M2M data hattı ve Türkçe mobil uygulama dahil, taahhütsüz şeffaf fiyatlarla
                aracınızı 7/24 güvende tutun.
              </p>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-[#0B2545] text-white text-center">
                <div className="text-2xl font-extrabold text-[#F7941D]">%22</div>
                <div className="text-xs text-slate-300 mt-0.5">Filo Yakıt Tasarrufu</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#0B2545] text-white text-center">
                <div className="text-2xl font-extrabold text-[#00B4D8]">10 sn</div>
                <div className="text-xs text-slate-300 mt-0.5">OBD Tak-Çalıştır</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#F7941D]">
                4G LTE Donanım Serisi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-1">
                İhtiyacınıza Özel Araç Takip Cihazları
              </h2>
            </div>
            <Link
              href="/urunler"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00B4D8] hover:text-[#0B2545] transition"
            >
              Tüm 9 Cihazı Karşılaştır <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProducts.map((product) => (
              <article
                key={product.slug}
                className="group rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:border-[#00B4D8]/50 transition flex flex-col"
              >
                <Link href={`/urunler/${product.slug}`} className="block relative bg-slate-50 overflow-hidden">
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold bg-[#0B2545] text-white">
                    {product.badge}
                  </span>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="w-full h-56 object-cover group-hover:scale-103 transition duration-300"
                  />
                </Link>
                <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#00B4D8] uppercase tracking-wide">
                      {product.categoryLabel}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0B2545] leading-snug">
                      <Link href={`/urunler/${product.slug}`} className="hover:text-[#00B4D8] transition">
                        {product.shortTitle}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{product.summary}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-sm font-extrabold text-[#0B2545]">{product.priceLabel}</span>
                    <Link
                      href={`/urunler/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold px-3.5 py-2 rounded-xl bg-slate-100 text-[#0B2545] group-hover:bg-[#0B2545] group-hover:text-white transition"
                    >
                      İncele <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE LIVE MAP SIMULATOR */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#E91E63]">
              İnteraktif Canlı Deneyim
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
              LifeGO Mobil &amp; Web Takip Panelini Şimdi Deneyin
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Aşağıdaki simülatörden araç seçin, anlık hız ve akü voltajını inceleyin,{" "}
              <strong>Güvenlik Çiti (Geofence)</strong> ve <strong>Uzaktan Motor Blokaj</strong>{" "}
              komutlarını anında test edin.
            </p>
          </div>
          <LiveFleetDemo />
        </div>
      </section>

      {/* SECTOR SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8]">
                Sektörel Filo Çözümleri
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-1">
                Her Sektöre Özel Akıllı Telemetri Altyapısı
              </h2>
            </div>
            <Link
              href="/cozumler"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00B4D8] hover:text-[#0B2545]"
            >
              Tüm Sektörleri Gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SECTORS.map((sector) => (
              <Link
                key={sector.slug}
                href={`/cozumler/${sector.slug}`}
                className="group p-6 rounded-3xl border border-slate-200 bg-white hover:bg-[#0B2545] hover:border-[#0B2545] transition duration-200 flex flex-col justify-between gap-5"
              >
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 group-hover:bg-white/10 text-xs font-extrabold text-[#00B4D8]">
                    {sector.kpiStat} • {sector.kpiLabel}
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0B2545] group-hover:text-white transition">
                    {sector.shortTitle}
                  </h3>
                  <p className="text-xs text-slate-600 group-hover:text-slate-300 leading-relaxed">
                    {sector.tagline}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#F7941D]">
                  Çözümü İncele <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE APP & PLATFORM FEATURES */}
      <section className="py-20 lifego-navy-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/images/mobile-app-mockup.jpg"
                alt="LifeGO mobil Android ve iOS araç takip uygulaması"
                width={700}
                height={525}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#F7941D]">
              iOS • Android • Web Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Tüm Aracınız ve Filonuz Cebinizdeki{" "}
              <span className="lifego-gradient-text">Tek Uygulamada</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Türkiye lokasyonlu yüksek hızlı sunucularımızda çalışan LifeGO mobil uygulaması ile
              aracınızı saniyeler içinde haritada görün, geçmiş 365 günlük rotayı animasyonla
              izleyin, Excel/PDF raporları tek tıkla indirin.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Smartphone, title: "Türkçe iOS & Android", desc: "Hızlı açılan modern mobil arayüz ve anlık push bildirimleri." },
                { icon: BarChart3, title: "Detaylı Filo Raporları", desc: "Kilometre, rölanti, yakıt, mesai dışı kullanım PDF/Excel çıktısı." },
                { icon: Cpu, title: "U-ETDS & ERP API", desc: "Ulaştırma Bakanlığı U-ETDS ve SAP/Logo/Mikro entegrasyonu." },
                { icon: Award, title: "Sürücü Skorlama", desc: "Ani fren, sert viraj ve hız aşımı analizleriyle güvenli sürüş." },
              ].map((feat) => (
                <div key={feat.title} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                  <feat.icon className="w-5 h-5 text-[#00B4D8]" />
                  <h3 className="font-bold text-sm text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-300">{feat.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/platform"
                className="px-5 py-3 rounded-xl font-bold text-sm bg-white text-[#0B2545] hover:bg-slate-100 transition"
              >
                Platformu Keşfet
              </Link>
              <Link
                href="/u-etds-entegrasyonu"
                className="px-5 py-3 rounded-xl font-bold text-sm bg-white/10 border border-white/20 text-white hover:bg-white/15 transition"
              >
                U-ETDS Entegrasyonu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#F7941D]">
                SEO &amp; Bilgi Merkezi
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] mt-1">
                Araç Takip Rehberi ve Güncel Makaleler
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/blog/yayin-takvimi"
                className="text-xs font-bold px-3.5 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 transition"
              >
                01.12.2026 Yayın Takvimi
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00B4D8] hover:text-[#0B2545]"
              >
                Tüm Yazılar <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {latestPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-3xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl transition flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="block overflow-hidden bg-slate-100">
                  <Image
                    src={post.coverImage.src}
                    alt={post.coverImage.alt}
                    width={640}
                    height={360}
                    className="w-full h-48 object-cover hover:scale-103 transition duration-300"
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
                    <h3 className="text-lg font-extrabold text-[#0B2545] leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[#00B4D8] transition">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3">{post.excerpt}</p>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#0B2545] hover:text-[#F7941D]"
                  >
                    Makaleyi Oku ({post.readTimeMinutes} dk) <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + QUOTE SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00B4D8]">
                Sıkça Sorulan Sorular
              </span>
              <h2 className="text-3xl font-extrabold text-[#0B2545] mt-1">
                Araç Takip Cihazı Hakkında Merak Edilenler
              </h2>
            </div>
            <div className="space-y-3.5">
              {HOME_FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl bg-white border border-slate-200 p-5 open:border-[#00B4D8]"
                >
                  <summary className="font-bold text-[#0B2545] text-sm sm:text-base cursor-pointer list-none flex items-center justify-between gap-3">
                    <span>{faq.question}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                  </summary>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
