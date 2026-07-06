import { Link } from "wouter";

export function Navbar() {
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
          <button onClick={() => scrollTo('services')} className="text-sm font-medium hover:text-primary transition-colors">Servicios</button>
          <button onClick={() => scrollTo('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Galería</button>
          <button onClick={() => scrollTo('contact')} className="text-sm font-medium hover:text-primary transition-colors">Contacto</button>
          <button 
            onClick={() => scrollTo('booking')}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Reservar Cita
          </button>
        </div>
      </div>
    </nav>
  );
}
