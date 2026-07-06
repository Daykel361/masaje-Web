export function Therapists() {
  const therapists = [
    {
      name: "Elena",
      role: "Especialista en Masaje Terapéutico",
      desc: "Con más de 10 años de experiencia, Elena combina técnicas orientales y occidentales para liberar tensión profunda."
    },
    {
      name: "Sofía",
      role: "Experta en Reflexología y Drenaje",
      desc: "Su enfoque suave y preciso es ideal para quienes buscan relajación total y mejora en la circulación."
    },
    {
      name: "Valeria",
      role: "Especialista en Cuidados Prenatales y Faciales",
      desc: "Dedicada a brindar bienestar con tratamientos delicados, restaurando el brillo natural y la calma."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Nuestras Terapeutas</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              En Harmony Spa, contamos con un equipo de profesionales altamente capacitadas y apasionadas por el bienestar. Sus manos expertas y su dedicación aseguran que cada sesión sea una experiencia transformadora.
            </p>
            
            <div className="space-y-8">
              {therapists.map((t, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center border border-primary/20">
                    <span className="font-serif text-2xl text-primary">{t.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground">{t.name}</h3>
                    <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{t.role}</p>
                    <p className="text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/therapist.png" 
              alt="Terapeuta Profesional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
