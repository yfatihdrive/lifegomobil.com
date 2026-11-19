import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "LifeGO mobil 6698 Sayılı Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 text-sm leading-relaxed">
        <h1 className="text-3xl font-extrabold text-[#0B2545]">
          6698 Sayılı KVKK Aydınlatma Metni
        </h1>
        <p>
          <strong>{SITE_CONFIG.legalName}</strong> olarak kişisel verilerinizin güvenliği en büyük
          önceliğimizdir. Tüm araç takip, konum ve telemetri verileri 6698 sayılı Kişisel Verilerin
          Korunması Kanunu&apos;na uygun olarak Türkiye lokasyonlu yüksek güvenlikli veri
          merkezlerinde işlenmekte ve korunmaktadır.
        </p>
        <h2 className="text-xl font-bold text-[#0B2545]">1. Veri İşleme Amacı</h2>
        <p>
          Konum, hız, kontak ve iletişim verileri yalnızca hizmet sözleşmesinin ifası, araç
          güvenliğinin sağlanması, U-ETDS yasal bildirimlerinin yapılması ve teknik destek
          süreçlerinin yürütülmesi amacıyla işlenir.
        </p>
        <h2 className="text-xl font-bold text-[#0B2545]">2. Veri Sahibi Hakları</h2>
        <p>
          KVKK&apos;nın 11. maddesi kapsamındaki tüm taleplerinizi{" "}
          <strong>{SITE_CONFIG.email}</strong> adresine iletebilirsiniz.
        </p>
      </div>
    </section>
  );
}
