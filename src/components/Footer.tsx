import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-[#061529] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-xl px-4 py-2.5 shadow-sm">
              <Image
                src="/images/lifegomobil-logo.jpg"
                alt="LifeGO mobil Logo"
                width={190}
                height={47}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Türkiye&apos;nin 81 ilinde 4G LTE araç takip cihazı, bireysel araç takip cihazı,
              motor blokaj, U-ETDS uyumlu filo yönetimi ve yapay zeka destekli mobil kamera
              çözümleri.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-sky-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#F7941D]" />
              BTK IMEI Kayıtlı • 6698 KVKK Uyumlu
            </div>
          </div>

          {/* Ürünler */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Ürünler &amp; Sistemler
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/arac-takip" className="hover:text-[#00B4D8] transition">
                  Araç Takip Cihazı
                </Link>
              </li>
              <li>
                <Link href="/bireysel-arac-takip" className="hover:text-[#00B4D8] transition">
                  Bireysel Araç Takip Cihazı
                </Link>
              </li>
              <li>
                <Link href="/urunler/lg-110-obd-bireysel-arac-takip-cihazi" className="hover:text-[#00B4D8] transition">
                  OBD Tak-Çalıştır Cihaz (LG-110)
                </Link>
              </li>
              <li>
                <Link href="/urunler/lg-500-bataryali-miknatisli-gps-takip" className="hover:text-[#00B4D8] transition">
                  Mıknatıslı Bataryalı GPS (LG-500)
                </Link>
              </li>
              <li>
                <Link href="/motosiklet-takip" className="hover:text-[#00B4D8] transition">
                  Motosiklet Takip Cihazı
                </Link>
              </li>
              <li>
                <Link href="/karavan-takip" className="hover:text-[#00B4D8] transition">
                  Karavan Takip Sistemi
                </Link>
              </li>
              <li>
                <Link href="/yat-ve-tekne-takip" className="hover:text-[#00B4D8] transition">
                  Yat &amp; Tekne Takip Sistemi
                </Link>
              </li>
              <li>
                <Link href="/mobil-kamera-sistemleri" className="hover:text-[#00B4D8] transition">
                  4G AI Araç Kameraları
                </Link>
              </li>
            </ul>
          </div>

          {/* Çözümler & Bilgi */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Çözümler &amp; Bilgi Merkezi
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/cozumler/lojistik-arac-takip" className="hover:text-[#00B4D8] transition">
                  Lojistik &amp; Filo Yönetimi
                </Link>
              </li>
              <li>
                <Link href="/cozumler/rent-a-car-arac-takip" className="hover:text-[#00B4D8] transition">
                  Rent a Car Takip Sistemleri
                </Link>
              </li>
              <li>
                <Link href="/u-etds-entegrasyonu" className="hover:text-[#00B4D8] transition">
                  U-ETDS Entegrasyonu
                </Link>
              </li>
              <li>
                <Link href="/platform" className="hover:text-[#00B4D8] transition">
                  Mobil &amp; Web Platform
                </Link>
              </li>
              <li>
                <Link href="/api-ve-entegrasyon" className="hover:text-[#00B4D8] transition">
                  API &amp; ERP Web Servisleri
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#F7941D] font-semibold transition">
                  Blog &amp; Araç Takip Rehberi
                </Link>
              </li>
              <li>
                <Link href="/blog/yayin-takvimi" className="hover:text-[#F7941D] transition">
                  01.12.2026 Otomatik Yayın Takvimi
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-[#00B4D8] transition">
                  Hakkımızda &amp; Referanslar
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              7/24 İletişim &amp; Destek
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F7941D] mt-0.5 shrink-0" />
                <div>
                  <a href={SITE_CONFIG.phoneHref} className="text-white font-bold hover:text-[#F7941D]">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <div className="text-xs text-slate-400">Satış &amp; 81 İl Montaj Hattı</div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00B4D8] mt-0.5 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E91E63] mt-0.5 shrink-0" />
                <span className="text-slate-400">
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city} / Türkiye
                </span>
              </li>
            </ul>
            <a
              href={buildWhatsappUrl("Merhaba, araç takip cihazı teklifi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold transition"
            >
              WhatsApp Hızlı Teklif
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.legalName}. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/kvkk" className="hover:text-white transition">
              KVKK Aydınlatma Metni
            </Link>
            <Link href="/garanti-ve-iade" className="hover:text-white transition">
              Garanti &amp; İade Şartları
            </Link>
            <Link href="/kullanim-kosullari" className="hover:text-white transition">
              Kullanım Koşulları
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition">
              Sitemap
            </Link>
            <Link href="/feed.xml" className="hover:text-white transition">
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
