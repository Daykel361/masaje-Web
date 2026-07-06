import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Spa Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center mt-12">
        <span className="text-primary-foreground/90 uppercase tracking-[0.3em] text-sm font-medium mb-6 block drop-shadow-md">
          Un santuario de bienestar
        </span>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-8 leading-tight drop-shadow-lg max-w-4xl mx-auto">
          Desconecta del mundo.<br/>Reconecta contigo.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Terapias corporales y masajes especializados en un ambiente de absoluta serenidad y lujo boutique.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={scrollToBooking}
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
          >
            Agendar Experiencia
          </button>
          <a 
            href="https://wa.me/50664092604" 
            target="_blank" 
            rel="noreferrer"
            className="text-white hover:text-secondary transition-colors font-medium drop-shadow-md"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="text-primary-foreground/60 w-6 h-6" />
      </div>
    </section>
  );
}
