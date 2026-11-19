"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/site";

export default function QuoteForm({ defaultType = "Bireysel Araç Takip" }: { defaultType?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("İstanbul");
  const [vehicleCount, setVehicleCount] = useState("1");
  const [serviceType, setServiceType] = useState(defaultType);
  const [submitted, setSubmitted] = useState(false);

  const estimatedMonthlySavings = Math.max(1, Number(vehicleCount) || 1) * 2400;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    const waText = `Merhaba LifeGO mobil, ben ${name}. ${city} şehrinde ${vehicleCount} araç için ${serviceType} teklifi talep ediyorum. Tel: ${phone}`;
    return (
      <div className="rounded-3xl bg-emerald-50 border border-emerald-200 p-8 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
        <h3 className="text-2xl font-extrabold text-[#0B2545]">Talebiniz Başarıyla Alındı!</h3>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Uzman danışmanımız en geç <strong>15 dakika içinde</strong> sizi arayarak 81 il montaj ve
          özel fiyat teklifinizi paylaşacaktır.
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={buildWhatsappUrl(waText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-500 transition"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp&apos;tan Hemen Hızlandır
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="px-5 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm"
          >
            Yeni Talep Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8 space-y-5"
    >
      <div>
        <h3 className="text-2xl font-extrabold text-[#0B2545]">Ücretsiz Teklif &amp; Demo Alın</h3>
        <p className="text-sm text-slate-500 mt-1">
          Aynı gün kargo ve 81 ilde yetkili montaj avantajıyla size özel fiyat çıkaralım.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">Adınız Soyadınız *</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Örn: Ahmet Yılmaz"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00B4D8]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">Telefon Numaranız *</label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="05XX XXX XX XX"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00B4D8]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">Çözüm Tipi</label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#00B4D8]"
          >
            <option>Bireysel Araç Takip</option>
            <option>OBD Tak-Çalıştır</option>
            <option>Kurumsal Filo Takip</option>
            <option>U-ETDS Servis Takip</option>
            <option>4G AI Araç Kamerası</option>
            <option>Motosiklet / Karavan / Yat</option>
            <option>Bataryalı Mıknatıslı GPS</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">Araç Sayısı</label>
          <input
            type="number"
            min={1}
            max={5000}
            value={vehicleCount}
            onChange={(e) => setVehicleCount(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00B4D8]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1.5">İl</label>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="İstanbul, Ankara, İzmir..."
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00B4D8]"
          />
        </div>
      </div>

      {Number(vehicleCount) >= 3 && (
        <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100 text-xs text-[#0B2545]">
          <strong>Tahmini Aylık Filo Yakıt Tasarrufu:</strong> {vehicleCount} araçlık filonuzda
          ortalama{" "}
          <span className="font-extrabold text-[#00B4D8]">
            {estimatedMonthlySavings.toLocaleString("tr-TR")} ₺ / ay
          </span>{" "}
          tasarruf potansiyeli hesaplandı.
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl font-extrabold text-white lifego-gradient-bg shadow-lg hover:opacity-95 transition inline-flex items-center justify-center gap-2 cursor-pointer"
      >
        <Send className="w-4 h-4" />
        Ücretsiz Fiyat Teklifi &amp; Demo İste
      </button>
    </form>
  );
}
