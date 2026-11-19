import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsappUrl("Merhaba, LifeGO mobil araç takip cihazı hakkında hızlı bilgi ve fiyat almak istiyorum.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile Hızlı Teklif Al"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-2xl border border-white/20 transition transform hover:scale-105"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">WhatsApp Hızlı Teklif</span>
    </a>
  );
}
