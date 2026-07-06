import { services } from "@/data/services";

export function Services() {
  const scrollToBooking = (serviceName: string) => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
      // In a real app we might use context or URL state to prefill the service
      window.history.pushState({}, '', `#booking?service=${encodeURIComponent(serviceName)}`);
      // We will trigger a custom event that the booking form can listen to
      window.dispatchEvent(new CustomEvent('prefill-service', { detail: serviceName }));
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Nuestros Servicios</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Una selección curada de terapias diseñadas para restaurar tu equilibrio físico y emocional. Cada tratamiento es personalizado a tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="mb-4">
                <h3 className="font-serif text-2xl text-foreground mb-1">{service.nameEs}</h3>
                <span className="text-sm font-medium tracking-wider text-primary uppercase">{service.nameEn}</span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>
              <button 
                onClick={() => scrollToBooking(service.nameEs)}
                className="w-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3 rounded-full font-medium transition-colors mt-auto"
              >
                Reservar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
