import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Benefits() {
  const { t } = useLanguage();
  const benefits = [
    t("benefits.1"),
    t("benefits.2"),
    t("benefits.3"),
    t("benefits.4"),
    t("benefits.5"),
    t("benefits.6"),
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden h-[500px] shadow-2xl">
            <img 
              src="/images/client-experience.png" 
              alt="Experiencia relajante" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 lg:order-2">
            <span className="uppercase tracking-[0.2em] text-sm font-medium mb-4 block text-secondary">{t("benefits.tag")}</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">{t("benefits.title")}</h2>
            <p className="text-primary-foreground/80 text-lg mb-10 leading-relaxed">
              {t("benefits.desc")}
            </p>
            
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 bg-secondary text-primary-foreground rounded-full p-1">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-lg text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
