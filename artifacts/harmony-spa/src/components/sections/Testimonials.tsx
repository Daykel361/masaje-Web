export function Testimonials() {
  const testimonials = [
    {
      text: "Un verdadero santuario en medio del caos de la ciudad. El masaje de tejido profundo liberó tensiones que llevaba semanas acumulando. El ambiente es exquisito.",
      author: "Mariana L."
    },
    {
      text: "Celebramos nuestro aniversario con un masaje para parejas y fue inolvidable. La atención al detalle, desde las toallas cálidas hasta el té final, es impecable.",
      author: "Carlos y Andrea"
    },
    {
      text: "He visitado muchos spas, pero la profesionalidad de las terapeutas aquí es de otro nivel. Salí sintiéndome renovada y con mucha más energía.",
      author: "Lucía M."
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <span className="uppercase tracking-[0.2em] text-sm font-medium mb-4 block text-primary">Experiencias</span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-16">Lo que dicen nuestros clientes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card p-8 rounded-2xl shadow-sm border border-border flex flex-col">
              <div className="text-secondary text-4xl font-serif mb-4">"</div>
              <p className="text-muted-foreground leading-relaxed italic mb-8 flex-grow">
                {t.text}
              </p>
              <div className="font-medium text-foreground uppercase tracking-wider text-sm">
                — {t.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
