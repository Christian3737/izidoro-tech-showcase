import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroVideo from "../../public/hero-tech-premium.mp4.asset.json";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden grain"
    >
      {/* Cinematic fullscreen video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={heroVideo.url}
        />
        {/* Editorial dark overlay — heavy bottom gradient */}
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/40 to-ink/85" />
      </div>

      {/* Top meta line */}
      <div className="absolute top-28 left-0 right-0 z-10">
        <div className="container mx-auto px-6 flex items-center justify-between text-background/70">
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase">
            Estúdio Digital — Est. 2024
          </span>
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase hidden md:inline">
            Alto Paraguai / MT — Brasil
          </span>
        </div>
      </div>

      {/* Editorial composition */}
      <div className="container mx-auto px-6 relative z-10 pb-24 md:pb-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-9"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-background/60" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-background/70">
                001 — Introdução
              </span>
            </div>

            <h1 className="font-serif-display text-background font-light leading-[0.95] tracking-[-0.02em] text-[clamp(2.8rem,8.5vw,8.5rem)]">
              Experiências
              <br />
              digitais para{" "}
              <span className="italic-serif text-terracotta/95">marcas</span>
              <br />
              de alto padrão.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-3 md:pb-3"
          >
            <p className="text-background/75 text-sm leading-relaxed font-light max-w-xs">
              Desenhamos a presença digital de marcas que entendem o valor de cada detalhe — do conceito ao último pixel.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-20 pt-8 border-t border-background/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
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
