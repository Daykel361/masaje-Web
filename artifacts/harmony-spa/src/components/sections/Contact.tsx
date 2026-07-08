import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">{t("contact.title")}</h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              {t("contact.desc")}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t("contact.location")}</h4>
                  <p className="text-muted-foreground">{t("contact.locationValue")}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t("contact.phone")}</h4>
                  <a href="tel:+50664092604" className="text-muted-foreground hover:text-primary transition-colors">+506 6409 2604</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t("contact.email")}</h4>
                  <a href="mailto:massage.xio.msg@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">massage.xio.msg@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium text-foreground mb-1">{t("contact.hours")}</h4>
                  <p className="text-muted-foreground whitespace-pre-line">{t("contact.hoursValue")}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/50664092604" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-medium hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                {t("contact.whatsappBtn")}
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 h-full">
            <div className="h-[400px] lg:flex-1 rounded-3xl overflow-hidden shadow-lg border border-border">
              <iframe 
                src="https://maps.google.com/maps?q=9.929302,-84.137528&z=16&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Xio Masajes"
              ></iframe>
            </div>
            <a
              href="https://maps.google.com/maps?q=9.929302,-84.137528"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
            >
              <MapPin className="w-4 h-4" />
              Ver en Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
