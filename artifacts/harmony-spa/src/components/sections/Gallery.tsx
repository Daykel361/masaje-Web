export function Gallery() {
  const images = [
    { src: "/images/hero-bg.png", alt: "Instalaciones del spa", className: "col-span-2 row-span-2" },
    { src: "/images/zen-garden.png", alt: "Jardín zen", className: "col-span-1 row-span-1" },
    { src: "/images/hot-stones.png", alt: "Piedras calientes", className: "col-span-1 row-span-1" },
    { src: "/images/essential-oils.png", alt: "Aceites esenciales", className: "col-span-2 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Nuestro Santuario</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Cada rincón de Harmony Spa ha sido diseñado para envolverte en una atmósfera de calma y serenidad. Descubre el espacio donde el tiempo se detiene.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {images.map((img, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden group ${img.className}`}>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-medium tracking-wider uppercase text-sm drop-shadow-md">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
