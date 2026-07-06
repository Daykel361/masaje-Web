import { useLanguage } from "@/lib/i18n";

export function Blog() {
  const { t } = useLanguage();
  const posts = [
    {
      title: t("blog.post1.title"),
      date: t("blog.post1.date"),
      desc: t("blog.post1.desc")
    },
    {
      title: t("blog.post2.title"),
      date: t("blog.post2.date"),
      desc: t("blog.post2.desc")
    },
    {
      title: t("blog.post3.title"),
      date: t("blog.post3.date"),
      desc: t("blog.post3.desc")
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.2em] text-sm font-medium mb-4 block text-primary">{t("blog.tag")}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">{t("blog.title")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("blog.subtitle")}
            </p>
          </div>
          <button className="text-primary font-medium hover:text-primary/80 transition-colors whitespace-nowrap">
            {t("blog.viewAll")}
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
