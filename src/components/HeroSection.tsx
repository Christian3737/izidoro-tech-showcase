import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroChip from "@/assets/hero-chip.jpg";

const WA =
  "https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 900], [1.08, 1.22]);
  const fade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" className="relative h-screen min-h-[640px] overflow-hidden bg-background">
      <motion.img
        src={heroChip}
        alt="Processador branco com trilhas douradas sobre vidro fosco"
        width={1920}
        height={1088}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ scale }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <motion.div style={{ opacity: fade }} className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif-display font-light text-foreground leading-[0.95] text-[clamp(2.8rem,7vw,7rem)] max-w-[11ch]"
        >
          Tecnologia em <span className="italic-serif text-terracotta">outro patamar</span>.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden inline-flex items-center gap-3 bg-ink text-background px-8 py-4 text-sm tracking-wide"
          >
            <span className="absolute inset-0 bg-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative">Iniciar projeto</span>
            <ArrowUpRight size={16} className="relative group-hover:rotate-45 transition-transform duration-500" />
          </a>
          <button
            onClick={() => document.querySelector("#trabalhos")?.scrollIntoView({ behavior: "smooth" })}
            className="text-sm text-foreground/70 hover:text-terracotta transition-colors"
          >
            Ver soluções →
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
