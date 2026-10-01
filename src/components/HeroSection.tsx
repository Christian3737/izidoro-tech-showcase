import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroIce from "@/assets/hero-ice.jpg";

const WA =
  "https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);
  const scale = useTransform(scrollY, [0, 800], [1.04, 1.12]);

  return (
    <section id="hero" className="relative min-h-screen ice-surface overflow-hidden pt-28 pb-16">
      <div className="container mx-auto px-6 relative">
        {/* Index line */}
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-10">
          <span><span className="text-terracotta">000</span> / Izidoro Tech</span>
          <span className="hidden md:inline">Sites · Sistemas · Aplicativos</span>
          <span>MT — BR / 2026</span>
        </div>

        <div className="relative grid grid-cols-12 gap-6">
          {/* Large image plate, offset right */}
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.6, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
            className="col-span-12 md:col-span-9 md:col-start-4 relative h-[58vh] md:h-[74vh] overflow-hidden"
          >
            <motion.img
              src={heroIce}
              alt="Superfície de gelo e metal champagne"
              width={1920}
              height={1088}
              style={{ y, scale }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            <div className="absolute top-5 right-5 font-mono text-[10px] tracking-[0.3em] uppercase text-ink/60">
              Fig. 01 — Ice / Precision
            </div>
          </motion.div>

          {/* Frosted headline plate overlapping */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-7 md:col-start-1 md:absolute md:left-0 md:bottom-[-2rem] md:w-[62%] frost p-8 md:p-12 -mt-24 md:mt-0 relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">Digital Craft</span>
            </div>
            <h1 className="font-serif-display font-medium text-foreground leading-[0.98] text-[clamp(2.4rem,5.6vw,5.4rem)]">
              Arquitetura digital para marcas de{" "}
              <span className="italic-serif text-terracotta">alto padrão</span>.
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-ink text-background px-7 py-4 text-sm tracking-wide hover:bg-terracotta-deep transition-colors duration-500"
              >
                Iniciar um projeto
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <button
                onClick={() => document.querySelector("#trabalhos")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-foreground/70 hover:text-terracotta border-b border-foreground/20 pb-1 transition-colors"
              >
                Ver soluções →
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-28 md:mt-20 flex justify-end items-center gap-3 text-muted-foreground"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Selecionando 3 projetos / 2026</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
