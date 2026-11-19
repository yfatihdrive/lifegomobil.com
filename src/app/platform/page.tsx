import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Smartphone, Globe, ShieldCheck, BellRing, FileSpreadsheet, ArrowRight } from "lucide-react";
import LiveFleetDemo from "@/components/LiveFleetDemo";

export const metadata: Metadata = {
  title: "Mobil & Web Araç Takip Platformu (iOS, Android, Bulut)",
  description:
    "LifeGO mobil iOS, Android ve Web araç takip programı ile 7/24 canlı harita, geçmiş rota oynatma, uzaktan motor blokaj ve PDF/Excel raporlama.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <>
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
              LifeGO Bulut Platformu
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
              Android, iOS ve Web&apos;de Kesintisiz Canlı Araç Takip Programı
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              Türkiye lokasyonlu yüksek erişilebilirlikli bulut altyapımız sayesinde 1 araçtan 5.000
              araçlık kurumsal filolara kadar saniyeler içinde canlı konum, rapor ve güvenlik yönetimi.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/iletisim"
                className="px-6 py-3 rounded-xl lifego-gradient-bg text-white font-extrabold text-sm inline-flex items-center gap-2"
              >
                Ücretsiz Demo Hesabı İste <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/sistem-ozellikleri"
                className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm"
              >
                Tüm Sistem Özellikleri
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Image
              src="/images/mobile-app-mockup.jpg"
              alt="LifeGO mobil uygulama arayüzü"
              width={640}
              height={480}
              className="rounded-3xl border border-white/15 shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <LiveFleetDemo />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {[
              { icon: Smartphone, title: "iOS & Android Uygulama", desc: "Türkçe arayüz, biyometrik giriş, anlık push alarmları ve harita katmanları." },
              { icon: Globe, title: "Web Filo Paneli", desc: "Kurulum gerektirmeyen tarayıcı paneli ile çoklu ekran ve alt kullanıcı yetkileri." },
              { icon: BellRing, title: "Akıllı Alarm Motoru", desc: "Hız aşımı, bölge ihlali, çekici, akü kesme, mesai dışı kullanım bildirimleri." },
              { icon: FileSpreadsheet, title: "Otomatik Raporlama", desc: "Günlük/haftalık/aylık kilometre, rölanti ve yakıt raporları otomatik e-posta ile." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5">
                <item.icon className="w-6 h-6 text-[#00B4D8]" />
                <h2 className="font-extrabold text-[#0B2545]">{item.title}</h2>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0" />
            <p className="text-sm text-slate-700">
              <strong>KVKK ve Veri Güvenliği:</strong> Tüm konum verileri 256-bit SSL ile şifrelenir ve
              Türkiye&apos;deki yedekli Tier-3 veri merkezlerinde saklanır.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
