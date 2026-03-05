import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="line-gold w-full mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Transforme sua ideia em um{" "}
            <span className="text-gradient-gold">produto digital profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Sua empresa merece uma presença digital de alto padrão. Vamos desenvolver seu projeto com tecnologia, design e performance.
          </p>
          <a
            href="https://wa.me/5565993381666"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-sm glow-gold-strong hover:bg-gold-light transition-all duration-300 cursor-none"
          >
            Solicitar Orçamento
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
