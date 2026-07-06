import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <span className="font-serif text-2xl font-semibold tracking-wide text-primary">Harmony Spa</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo('services')} className="text-sm font-medium hover:text-primary transition-colors">{t("nav.services")}</button>
          <button onClick={() => scrollTo('gallery')} className="text-sm font-medium hover:text-primary transition-colors">{t("nav.gallery")}</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-medium hover:text-primary transition-colors">{t("nav.contact")}</button>
          <button
            onClick={() => setLanguage(language === "es" ? "en" : "es")}
            className="flex items-center gap-1 text-sm font-medium border border-border rounded-full px-3 py-1.5 hover:border-primary hover:text-primary transition-colors"
            aria-label="Cambiar idioma / Change language"
          >
            <span className={language === "es" ? "text-primary font-semibold" : "text-muted-foreground"}>ES</span>
            <span className="text-muted-foreground">/</span>
            <span className={language === "en" ? "text-primary font-semibold" : "text-muted-foreground"}>EN</span>
          </button>
          <button 
            onClick={() => scrollTo('booking')}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            {t("nav.book")}
          </button>
        </div>
        <button
          onClick={() => setLanguage(language === "es" ? "en" : "es")}
          className="md:hidden flex items-center gap-1 text-sm font-medium border border-border rounded-full px-3 py-1.5"
          aria-label="Cambiar idioma / Change language"
        >
          <span className={language === "es" ? "text-primary font-semibold" : "text-muted-foreground"}>ES</span>
          <span className="text-muted-foreground">/</span>
          <span className={language === "en" ? "text-primary font-semibold" : "text-muted-foreground"}>EN</span>
        </button>
      </div>
    </nav>
  );
}
