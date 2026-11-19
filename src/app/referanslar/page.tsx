import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Quote, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Referanslarımız & Müşteri Başarı Hikayeleri",
  description:
    "Lojistik, rent a car, soğuk zincir, servis taşımacılığı ve bireysel araç sahiplerinin LifeGO mobil deneyimleri ve yakıt tasarrufu sonuçları.",
  alternates: { canonical: "/referanslar" },
};

const CASE_STUDIES = [
  {
    sector: "Uluslararası Lojistik • 120 Araç",
    company: "Anadolu Ekspres Lojistik A.Ş.",
    result: "%21 Yakıt Tasarrufu",
    quote:
      "CAN-Bus yakıt ve rölanti raporları sayesinde ilk çeyrekte tüm donanım yatırımımızı geri kazandık. Avrupa roaming kesintisiz çalışıyor.",
  },
  {
    sector: "Oto Kiralama • 65 Araç",
    company: "Marmara Filo & Rent a Car",
    result: "Sıfır Araç Kaybı",
    quote:
      "Sınır bölgesi alarmları ve LG-100 Pro + LG-500 ikili güvenlik paketi ile kiralık filomuzda tam huzur sağladık.",
  },
  {
    sector: "Öğrenci & Personel Servisi • 42 Araç",
    company: "Ege Turizm ve Servis Taşımacılığı",
    result: "%100 U-ETDS Uyumu",
    quote:
      "Manuel U-ETDS giriş hataları tamamen bitti. Hem konum hem 4G AI kabin içi kameraları tek panelden takip ediyoruz.",
  },
  {
    sector: "Bireysel Kullanıcı • İstanbul",
    company: "Murat K. — Şahsi Otomobil & Motosiklet",
    result: "10 Sn OBD Kurulum",
    quote:
      "Sıfır aracıma kablo kestirmeden LG-110 OBD taktım, motosikletime ise LG-200 Moto. Uygulama çok hızlı ve Türkçe destek harika.",
  },
];

export default function ReferencesPage() {
  return (
    <>
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#00B4D8]">
            Müşteri Başarı Hikayeleri
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            Türkiye Genelinde Güvenilen Filo &amp; Bireysel Referanslarımız
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.company} className="p-7 rounded-3xl border border-slate-200 bg-slate-50/70 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00B4D8]">
                    <Building2 className="w-4 h-4" /> {cs.sector}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                    {cs.result}
                  </span>
                </div>
                <Quote className="w-6 h-6 text-[#F7941D]" />
                <p className="text-sm text-slate-700 leading-relaxed italic">&ldquo;{cs.quote}&rdquo;</p>
                <div className="pt-2 flex items-center justify-between border-t border-slate-200">
                  <span className="font-extrabold text-sm text-[#0B2545]">{cs.company}</span>
                  <div className="flex gap-0.5 text-[#F7941D]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl lifego-gradient-bg text-white font-extrabold text-sm"
            >
              Siz de Filo Tasarrufunuzu Hesaplayın <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
