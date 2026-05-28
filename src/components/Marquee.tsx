const items = [
  "Design Editorial",
  "Experiência Digital",
  "Marcas de Alto Padrão",
  "Desenvolvimento Sob Medida",
  "Posicionamento Premium",
  "Performance Cinematográfica",
  "Autoridade Visual",
];

const Marquee = () => {
  const loop = [...items, ...items, ...items];
  return (
    <section className="py-10 border-y border-border/60 overflow-hidden bg-background">
      <div className="flex marquee whitespace-nowrap">
        {loop.map((t, i) => (
          <span
            key={i}
            className="font-serif-display text-3xl md:text-5xl font-light text-foreground/90 px-10 flex items-center"
          >
            {t}
            <span className="ticker-divider" />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
