import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Lock,
  FileBarChart,
  Bell,
  Shield,
  Cpu,
  Navigation,
  Fuel,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Araç Takip Sistemi Özellikleri | Canlı Harita, Blokaj, Raporlama",
  description:
    "LifeGO mobil araç takip sisteminin tüm teknik özellikleri: Canlı GPS haritası, uzaktan motor blokaj, coğrafi çit, CAN-Bus yakıt ve sürücü analizi.",
  alternates: { canonical: "/sistem-ozellikleri" },
};

const FEATURES = [
  { icon: MapPin, title: "Canlı Harita & Street View", desc: "1-2 metre hassasiyetle anlık konum, trafik yoğunluğu ve sokak görünümü." },
  { icon: Lock, title: "Hız Kontrollü Motor Blokaj", desc: "20 km/s altında güvenle devreye giren şifreli uzaktan motor durdurma." },
  { icon: Navigation, title: "365 Gün Geçmiş Rota Oynatma", desc: "Geçmiş tüm seferleri hız, duraklama ve adres detaylarıyla video gibi izleyin." },
  { icon: Bell, title: "Coğrafi Çit (Geofence)", desc: "Ev, şantiye veya il sınırları tanımlayın; giriş/çıkışta anında bildirim alın." },
  { icon: Fuel, title: "CAN-Bus Yakıt & Rölanti", desc: "Gereksiz rölanti sürelerini ve yakıt düşüşlerini grafiksel olarak yakalayın." },
  { icon: FileBarChart, title: "Excel & PDF Filo Raporları", desc: "Kilometre, mesai dışı kullanım, hız ihlali ve bakım takvimi raporları." },
  { icon: Shield, title: "Akü Kesme & Çekici Alarmı", desc: "Dahili yedek batarya sayesinde akü sökülse bile anlık acil uyarı gönderir." },
  { icon: Cpu, title: "U-ETDS & ERP API Entegrasyonu", desc: "Bakanlık U-ETDS aktarımı ve SAP/Logo/Mikro REST API bağlantısı." },
];

export default function SystemFeaturesPage() {
  return (
    <>
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            Gelişmiş Telemetri Yetenekleri
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            LifeGO Sistem Özellikleri
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            Bireysel güvenlikten büyük ölçekli filo yönetimine kadar ihtiyacınız olan her özellik
            tek bir akıllı platformda.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="p-6 rounded-3xl border border-slate-200 bg-slate-50/70 space-y-3">
                <f.icon className="w-7 h-7 text-[#00B4D8]" />
                <h2 className="text-lg font-extrabold text-[#0B2545]">{f.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl bg-[#0B2545] text-white p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-extrabold">Tüm özellikleri canlı demo ile test edin</h2>
              <p className="text-slate-300 text-sm mt-1">
                Hemen ücretsiz demo bilgilerinizi alın veya cihaz kataloğumuzu inceleyin.
              </p>
            </div>
            <Link
              href="/iletisim"
              className="px-6 py-3.5 rounded-xl lifego-gradient-bg font-extrabold text-sm inline-flex items-center gap-2 shrink-0"
            >
              Demo &amp; Teklif Al <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
