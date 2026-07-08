import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-foreground text-background py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Link href="/">
              <span className="font-serif text-2xl font-semibold tracking-wide text-primary cursor-pointer">Xio Masajes</span>
            </Link>
            <p className="text-muted/60 mt-2 text-sm max-w-sm">
              {t("footer.desc")}
            </p>
          </div>
          
          <div className="text-center md:text-right text-muted/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Xio Masajes.</p>
            <p className="mt-1">{t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
