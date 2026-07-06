export function Promotions() {
  const promos = [
    {
      title: "Especial Parejas",
      desc: "Disfruten de un Masaje para Parejas con una sesión de aromaterapia de cortesía. Ideal para aniversarios o escapadas de fin de semana.",
      tag: "Más Popular"
    },
    {
      title: "Renovación Total",
      desc: "Reserva un Masaje de Tejido Profundo y obtén un 20% de descuento en tu próxima Limpieza Facial profunda.",
      tag: "Oferta de Temporada"
    },
    {
      title: "Mañanas de Paz",
      desc: "Agenda cualquier servicio de lunes a jueves entre 9:00 AM y 12:00 PM y disfruta de una infusión detox y 15 minutos extra de reflexología.",
      tag: "Solo Mañanas"
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.2em] text-sm font-medium mb-4 block text-primary">Beneficios Exclusivos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Promociones Especiales</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aprovecha nuestras ofertas de temporada diseñadas para maximizar tu experiencia de relajación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promos.map((promo, i) => (
            <div key={i} className="bg-card rounded-2xl p-8 border border-primary/20 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-4 py-1 rounded-bl-xl z-10">
                {promo.tag}
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4 mt-2">{promo.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{promo.desc}</p>
              
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary font-medium border-b border-primary pb-1 hover:text-primary/80 hover:border-primary/80 transition-colors uppercase tracking-wider text-sm"
              >
                Aprovechar Promoción
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
