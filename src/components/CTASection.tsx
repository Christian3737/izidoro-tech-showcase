import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import bg from "@/assets/cta-structure.jpg";

const line = (d: number) => ({
  initial: { y: "105%" },
  whileInView: { y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1.2, delay: d, ease: [0.77, 0, 0.175, 1] as const },
});

const CTASection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      <motion.img
        src={bg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        style={{ scale, y }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 py-32">
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta-soft">/ 05 — Patamar</span>

        <h2 className="mt-10 font-serif-display font-light text-[clamp(2.8rem,8vw,8rem)] leading-[0.98]">
          <span className="block overflow-hidden"><motion.span {...line(0)} className="block text-background">Sua marca,</motion.span></span>
          <span className="block overflow-hidden"><motion.span {...line(0.12)} className="block text-background/55">elevada ao patamar</motion.span></span>
          <span className="block overflow-hidden">
            <motion.span {...line(0.24)} className="block text-background">
              que ela merece<span className="text-terracotta-soft">.</span>
            </motion.span>
          </span>
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="w-16 h-px bg-terracotta-soft" />
          <a
            href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-background hover:text-terracotta-soft transition-colors"
          >
            Iniciar conversa
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
