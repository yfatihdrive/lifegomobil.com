import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";

export const metadata: Metadata = {
  title: "İletişim & Ücretsiz Teklif | 81 İl Montaj ve 7/24 Destek",
  description:
    "LifeGO mobil iletişim bilgileri, ücretsiz araç takip cihazı fiyat teklifi, canlı demo talebi ve Türkiye geneli 81 il yetkili montaj randevusu.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return (
    <>
      <section className="lifego-navy-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F7941D]">
            7/24 Satış ve Teknik Destek
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold">
            İletişim, Canlı Demo ve Ücretsiz Fiyat Teklifi
          </h1>
          <p className="text-slate-300 max-w-2xl text-sm sm:text-base">
            Bireysel veya kurumsal araç takip ihtiyacınız için hemen formu doldurun veya WhatsApp
            üzerinden uzman ekibimize anında ulaşın.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 space-y-5">
              <h2 className="text-xl font-extrabold text-[#0B2545]">İletişim Bilgilerimiz</h2>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F7941D] mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-500">Çağrı Merkezi &amp; Montaj</div>
                  <a href={SITE_CONFIG.phoneHref} className="text-lg font-extrabold text-[#0B2545] hover:text-[#00B4D8]">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#00B4D8] mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-500">E-Posta</div>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="font-bold text-[#0B2545]">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E91E63] mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-500">Genel Merkez</div>
                  <div className="text-sm text-slate-700">
                    {SITE_CONFIG.address.street}, {SITE_CONFIG.address.postalCode}{" "}
                    {SITE_CONFIG.address.city} / Türkiye
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-500">Çalışma Saatleri</div>
                  <div className="text-sm text-slate-700">
                    Pazartesi – Cumartesi: 08:30 – 19:00 (Acil Destek: 7/24)
                  </div>
                </div>
              </div>

              <a
                href={buildWhatsappUrl("Merhaba, LifeGO mobil araç takip cihazı hakkında bilgi ve fiyat teklifi istiyorum.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm inline-flex items-center justify-center gap-2 transition"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp&apos;tan Hemen Yazın ({SITE_CONFIG.whatsappDisplay})
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
