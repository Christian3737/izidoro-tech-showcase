import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-foreground relative overflow-hidden" ref={ref}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsla(0,0%,100%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(0,0%,100%,0.3) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">始めましょう</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-background tracking-tight leading-tight">
            Transforme sua ideia em um produto digital profissional
          </h2>
          <p className="text-background/50 text-base mb-10 leading-relaxed font-light max-w-lg">
            Sua empresa merece uma presença digital de alto padrão. Vamos desenvolver seu projeto com tecnologia, design e performance.
          </p>
          <a
            href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-3.5 bg-primary text-primary-foreground font-medium text-sm tracking-wide hover:bg-gold-light transition-colors duration-300"
          >
            Solicitar Orçamento
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;