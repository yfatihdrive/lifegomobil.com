import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site";

export const metadata: Metadata = {
  title: "Site Kullanım ve Üyelik Koşulları",
  description: "LifeGO mobil web sitesi ve araç takip platformu kullanım şartları.",
  alternates: { canonical: "/kullanim-kosullari" },
};

export default function TermsPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-slate-700 text-sm leading-relaxed">
        <h1 className="text-3xl font-extrabold text-[#0B2545]">
          Site Kullanım ve Üyelik Koşulları
        </h1>
        <p>
          Bu web sitesi ve mobil takip platformu <strong>{SITE_CONFIG.legalName}</strong> tarafından
          işletilmektedir. LifeGO mobil cihazları yalnızca kullanıcının kendi mülkiyetindeki veya
          yasal kullanım hakkına sahip olduğu taşıtlarda güvenlik ve filo yönetimi amacıyla
          kullanılabilir.
        </p>
        <p>
          Üçüncü kişilerin özel hayatının gizliliğini ihlal edecek şekilde izinsiz takip yapılması
          kesinlikle yasaktır ve Türk Ceza Kanunu kapsamında hukuki sorumluluk doğurur.
        </p>
      </div>
    </section>
  );
}
