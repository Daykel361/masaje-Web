export function Blog() {
  const posts = [
    {
      title: "Los beneficios del masaje con piedras calientes en invierno",
      date: "15 Octubre",
      desc: "Descubre cómo el calor de las piedras basálticas penetra en los tejidos para derretir la tensión y mejorar la circulación."
    },
    {
      title: "5 formas de extender la relajación después de tu visita al spa",
      date: "28 Septiembre",
      desc: "Consejos prácticos de nuestras terapeutas para mantener la sensación de bienestar por días después de tu masaje."
    },
    {
      title: "Masaje vs. Drenaje Linfático: ¿Cuál es el adecuado para ti?",
      date: "12 Septiembre",
      desc: "Conoce las diferencias fundamentales entre estas dos terapias y elige la que mejor se adapte a las necesidades de tu cuerpo."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-sm font-medium mb-4 block text-primary">Nuestro Blog</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Lecturas de Bienestar</h2>
            <p className="text-muted-foreground text-lg">
              Explora artículos escritos por nuestros expertos sobre cuidado personal, técnicas de relajación y salud integral.
            </p>
          </div>
          <button className="text-primary font-medium hover:text-primary/80 transition-colors whitespace-nowrap">
            Ver todos los artículos &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="h-48 bg-muted rounded-2xl mb-6 overflow-hidden">
                {/* Fallback pattern since we don't have dedicated images for all blog posts */}
                <div className="w-full h-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-serif text-xl opacity-50">{i + 1}</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-secondary font-medium mb-3">{post.date}</div>
              <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                {post.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
