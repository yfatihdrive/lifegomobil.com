"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ShieldCheck,
  MapPin,
  MessageCircle,
  LogIn,
} from "lucide-react";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site";

const PRODUCT_MENU = [
  { label: "Tüm Araç Takip Cihazları", href: "/urunler", desc: "4G LTE tüm donanım serisi" },
  { label: "Bireysel Araç Takip Cihazı", href: "/bireysel-arac-takip", desc: "OBD tak-çalıştır & gizli montaj" },
  { label: "Araç Takip Sistemi", href: "/arac-takip", desc: "Motor blokajlı & CAN-Bus sistemler" },
  { label: "Motosiklet Takip Cihazı", href: "/motosiklet-takip", desc: "IP67 su geçirmez & eğim alarmlı" },
  { label: "Karavan Takip Sistemi", href: "/karavan-takip", desc: "Yaşam aküsü & solar telemetri" },
  { label: "Yat ve Tekne Takip", href: "/yat-ve-tekne-takip", desc: "IP68 deniz dayanımı & demir tarama" },
  { label: "4G AI Araç Kameraları", href: "/mobil-kamera-sistemleri", desc: "Canlı video + ADAS/DMS yapay zeka" },
];

const SECTOR_MENU = [
  { label: "Lojistik & Filo Yönetimi", href: "/cozumler/lojistik-arac-takip" },
  { label: "Rent a Car & Oto Kiralama", href: "/cozumler/rent-a-car-arac-takip" },
  { label: "Servis Araçları (U-ETDS)", href: "/cozumler/servis-araclari-takip" },
  { label: "Soğuk Zincir & Sıcaklık", href: "/cozumler/soguk-zincir-takip" },
  { label: "İş Makinesi & Şantiye", href: "/cozumler/is-makinasi-takip" },
  { label: "Akıllı Karavan Sistemi", href: "/cozumler/akilli-karavan-sistemi" },
  { label: "Akıllı Tarım & Traktör", href: "/cozumler/akilli-tarim-sistemleri" },
  { label: "Çoklu Operatör M2M", href: "/cozumler/operatorden-bagimsiz-takip" },
];

const PLATFORM_MENU = [
  { label: "Mobil & Web Platform", href: "/platform" },
  { label: "Sistem Özellikleri", href: "/sistem-ozellikleri" },
  { label: "U-ETDS Entegrasyonu", href: "/u-etds-entegrasyonu" },
  { label: "API & ERP Web Servis", href: "/api-ve-entegrasyon" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top Corporate Bar */}
      <div className="bg-[#061529] text-slate-200 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 font-medium text-sky-300 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#F7941D]" />
              81 İlde Yetkili Montaj &amp; 7/24 Destek
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00B4D8]" />
              BTK IMEI Kayıtlı 4G LTE Cihazlar • 2 Yıl Birebir Garanti
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={SITE_CONFIG.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#F7941D] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#F7941D]" />
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={buildWhatsappUrl("Merhaba, LifeGO mobil araç takip sistemleri hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp Destek
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center shrink-0 py-1" aria-label="LifeGO mobil Ana Sayfa">
          <Image
            src="/images/lifegomobil-logo.jpg"
            alt="LifeGO mobil Araç Takip Sistemleri Logo"
            width={240}
            height={60}
            priority
            className="h-11 sm:h-13 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Ana Menü">
          {/* Ürünler Dropdown */}
          <div className="relative group">
            <button className="px-3.5 py-2 text-sm font-semibold text-[#0B2545] hover:text-[#00B4D8] inline-flex items-center gap-1 rounded-lg transition">
              Ürünler <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 grid gap-1">
                {PRODUCT_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-2.5 rounded-xl hover:bg-slate-50 transition block"
                  >
                    <div className="text-sm font-bold text-[#0B2545]">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.desc}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sektörler Dropdown */}
          <div className="relative group">
            <button className="px-3.5 py-2 text-sm font-semibold text-[#0B2545] hover:text-[#00B4D8] inline-flex items-center gap-1 rounded-lg transition">
              Sektörler <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 grid gap-0.5">
                {SECTOR_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-2 rounded-xl text-sm font-semibold text-[#0B2545] hover:bg-slate-50 hover:text-[#00B4D8] transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Platform Dropdown */}
          <div className="relative group">
            <button className="px-3.5 py-2 text-sm font-semibold text-[#0B2545] hover:text-[#00B4D8] inline-flex items-center gap-1 rounded-lg transition">
              Platform <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
              <div className="w-60 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2.5 grid gap-0.5">
                {PLATFORM_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3.5 py-2 rounded-xl text-sm font-semibold text-[#0B2545] hover:bg-slate-50 hover:text-[#00B4D8] transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/bireysel-arac-takip"
            className="px-3.5 py-2 text-sm font-semibold text-[#0B2545] hover:text-[#F7941D] transition"
          >
            Bireysel Takip
          </Link>

          <Link
            href="/blog"
            className="px-3.5 py-2 text-sm font-semibold text-[#0B2545] hover:text-[#00B4D8] transition"
          >
            Blog
          </Link>

          <Link
            href="/hakkimizda"
            className="px-3.5 py-2 text-sm font-semibold text-[#0B2545] hover:text-[#00B4D8] transition"
          >
            Kurumsal
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <Link
            href="/musteri-paneli"
            className="lifego-panel-btn px-4 py-2.5 text-sm font-extrabold text-white bg-[#0B2545] hover:bg-[#133B6B] border border-[#00B4D8]/60 rounded-xl inline-flex items-center gap-2 transition-transform duration-200 hover:-translate-y-0.5 shadow-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F7941D]" />
            </span>
            <LogIn className="w-4 h-4 text-[#00B4D8]" />
            <span>Müşteri Paneli</span>
          </Link>
          <Link
            href="/platform"
            className="px-3.5 py-2.5 text-sm font-bold text-[#0B2545] border border-slate-200 rounded-xl hover:border-[#00B4D8] hover:text-[#00B4D8] transition"
          >
            Canlı Demo
          </Link>
          <Link
            href="/iletisim"
            className="px-4 py-2.5 text-sm font-bold text-white rounded-xl lifego-gradient-bg shadow-md hover:opacity-95 transition"
          >
            Ücretsiz Teklif Al
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl border border-slate-200 text-[#0B2545]"
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-4 max-h-[82vh] overflow-y-auto shadow-xl">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Ürünler &amp; Kategoriler</div>
            <div className="grid grid-cols-1 gap-1.5">
              {PRODUCT_MENU.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-semibold text-[#0B2545] hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Sektörler &amp; Platform</div>
            <div className="grid grid-cols-2 gap-1.5">
              {[...SECTOR_MENU.slice(0, 4), ...PLATFORM_MENU].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-[#0B2545] bg-slate-100"
            >
              Blog &amp; Rehber
            </Link>
            <Link
              href="/hakkimizda"
              onClick={() => setMobileOpen(false)}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-[#0B2545] bg-slate-100"
            >
              Hakkımızda
            </Link>
            <Link
              href="/referanslar"
              onClick={() => setMobileOpen(false)}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-[#0B2545] bg-slate-100"
            >
              Referanslar
            </Link>
          </div>

          <Link
            href="/musteri-paneli"
            onClick={() => setMobileOpen(false)}
            className="lifego-panel-btn w-full py-3 rounded-xl font-extrabold text-white bg-[#0B2545] border border-[#00B4D8]/60 flex items-center justify-center gap-2"
          >
            <LogIn className="w-4 h-4 text-[#00B4D8]" />
            Müşteri Paneli
          </Link>

          <Link
            href="/iletisim"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center py-3 rounded-xl font-bold text-white lifego-gradient-bg"
          >
            Hemen Ücretsiz Teklif Al
          </Link>
        </div>
      )}
    </header>
  );
}
