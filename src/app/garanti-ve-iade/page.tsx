import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garanti ve İade Şartları",
  description: "LifeGO mobil 2 yıl resmi garanti, birebir değişim ve 14 gün iade koşulları.",
  alternates: { canonical: "/garanti-ve-iade" },
};

export default function WarrantyPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 text-sm leading-relaxed">
        <h1 className="text-3xl font-extrabold text-[#0B2545]">Garanti ve İade Şartları</h1>
        <p>
          LifeGO mobil tarafından satışı yapılan tüm 4G LTE araç takip cihazları fatura tarihinden
          itibaren <strong>2 yıl (24 ay) resmi garanti</strong> ve üretim kaynaklı arızalarda
          birebir hızlı değişim güvencesi altındadır.
        </p>
        <h2 className="text-xl font-bold text-[#0B2545]">Cayma ve İade Hakkı</h2>
        <p>
          Montajı yapılmamış, ambalajı ve aksesuarları eksiksiz tüm cihazlarda teslim tarihinden
          itibaren 14 gün içinde koşulsuz iade hakkınız bulunmaktadır.
        </p>
      </div>
    </section>
  );
}
