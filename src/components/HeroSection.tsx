import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden grain"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-tech-poster.jpg')" }}
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-tech-poster.jpg"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/hero-tech-premium.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-serif-display text-background font-light leading-[0.95] tracking-[-0.02em] text-[clamp(2.8rem,8.5vw,8.5rem)] max-w-[14ch]">
            Experiências digitais para{" "}
            <span className="italic-serif text-terracotta/95">marcas</span> de alto padrão.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-8">
            <a
              href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-background border-b border-background/40 hover:border-terracotta-soft pb-1 transition-colors"
            >
              <span className="text-sm tracking-wide">Iniciar um projeto</span>
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </a>
            <button
              onClick={() => scrollTo("#trabalhos")}
              className="text-sm text-background/60 hover:text-background transition-colors tracking-wide"
            >
              Ver trabalhos →
            </button>
          </div>

          <div className="flex items-center gap-3 text-background/50">
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta-soft animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
              Selecionando 3 projetos / 2026
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
