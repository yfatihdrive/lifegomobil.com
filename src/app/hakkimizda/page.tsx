import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, Award, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | LifeGO mobil Araç Takip ve IoT Teknolojileri",
  description:
    "LifeGO mobil hakkında: Türkiye'nin 81 ilinde 4G LTE araç takip cihazı, bireysel GPS ve kurumsal filo yönetimi sunan yerli teknoloji markası.",
  alternates: { canonical: "/hakkimizda" },
};

export default function AboutPage() {
  return (
    <>
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            Kurumsal Kimlik
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            LifeGO mobil: Geleceğin Akıllı Hareketlilik ve Takip Teknolojisi
          </h1>
          <p className="text-slate-300 max-w-3xl text-base leading-relaxed">
            İstanbul Teknopark merkezli mühendislik ekibimiz ve 81 ildeki yetkili teknik servis
            ağımızla, bireysel sürücülerin güvenliğini ve kurumsal filoların verimliliğini 4G LTE
            telemetri teknolojisiyle buluşturuyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: MapPin, stat: "81 İl", label: "Yetkili Montaj & Servis Ağı" },
              { icon: ShieldCheck, stat: "2 Yıl", label: "Birebir Cihaz Değişim Garantisi" },
              { icon: Users, stat: "7/24", label: "Türkçe Canlı Teknik Destek" },
              { icon: Award, stat: "%100", label: "BTK IMEI & KVKK Mevzuat Uyumu" },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-2">
                <item.icon className="w-7 h-7 text-[#00B4D8] mx-auto" />
                <div className="text-3xl font-extrabold text-[#0B2545]">{item.stat}</div>
                <div className="text-xs text-slate-600 font-semibold">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl space-y-5 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-extrabold text-[#0B2545]">Misyonumuz ve Teknoloji Yaklaşımımız</h2>
            <p>
              LifeGO mobil olarak amacımız; karmaşık sözleşmeler, sürpriz aylık faturalar ve eski 2G
              donanımlar yerine şeffaf, 4G LTE destekli, hızlı ve kullanıcı dostu bir araç takip
              deneyimi sunmaktır. Tüm yazılım altyapımız Türkiye lokasyonlu yüksek güvenlikli veri
              merkezlerinde barındırılır.
            </p>
            <p>
              Bireysel otomobil sahiplerinden uluslararası lojistik filolarına, motosiklet ve
              karavan tutkunlarından U-ETDS kapsamındaki servis firmalarına kadar her kullanıcı
              grubuna özel mühendislik çözümleri geliştiriyoruz.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/urunler"
              className="px-6 py-3 rounded-xl lifego-gradient-bg text-white font-extrabold text-sm inline-flex items-center gap-2"
            >
              Ürünlerimizi İnceleyin <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/iletisim"
              className="px-6 py-3 rounded-xl bg-[#0B2545] text-white font-bold text-sm"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
