import type { Metadata } from "next";
import { Code2, Webhook, Database, Lock } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "API & ERP Web Servis Entegrasyonu | SAP, Logo, Mikro Uyumlu",
  description:
    "LifeGO REST API ve Webhook altyapısı ile araç konum, kilometre, yakıt ve alarm verilerini kendi ERP, CRM veya lojistik yazılımınıza anlık entegre edin.",
  alternates: { canonical: "/api-ve-entegrasyon" },
};

export default function ApiPage() {
  return (
    <>
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
            Geliştirici &amp; Kurumsal Entegrasyon
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            REST API, Webhook ve ERP Web Servisleri
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            Filonuzun canlı GPS, kilometre, CAN-Bus yakıt ve sıcaklık verilerini SAP, Logo, Mikro,
            Netsis veya özel yazılımlarınıza dakikalar içinde bağlayın.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Code2, title: "JSON REST API", desc: "Modern OpenAPI/Swagger dokümantasyonlu yüksek hızlı REST uç noktaları." },
                { icon: Webhook, title: "Anlık Webhook Olayları", desc: "Bölge girişi, hız ihlali ve ısı alarmında sisteminize anında HTTP push." },
                { icon: Database, title: "ERP / WMS Uyumu", desc: "SAP, Logo, Mikro, Paraşüt ve lojistik TMS yazılımlarına hazır konektörler." },
                { icon: Lock, title: "OAuth2 & IP Kısıtlama", desc: "Token tabanlı kimlik doğrulama ve 256-bit TLS şifreli güvenli aktarım." },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <item.icon className="w-6 h-6 text-[#00B4D8]" />
                  <h2 className="font-extrabold text-[#0B2545]">{item.title}</h2>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#071930] text-sky-200 p-6 font-mono text-xs overflow-x-auto">
              <div className="text-slate-400 mb-2"># Örnek Canlı Konum API Yanıtı (JSON)</div>
              <pre>{`GET https://api.lifegomobil.com/v1/vehicles/34LFG2026/telemetry
{
  "plate": "34 LFG 2026",
  "status": "MOVING",
  "speed_kmh": 68,
  "lat": 40.98812,
  "lng": 29.02845,
  "ignition": true,
  "battery_v": 14.1,
  "uetds_synced": true
}`}</pre>
            </div>
          </div>

          <div className="lg:col-span-5">
            <QuoteForm defaultType="Kurumsal Filo Takip" />
          </div>
        </div>
      </section>
    </>
  );
}
