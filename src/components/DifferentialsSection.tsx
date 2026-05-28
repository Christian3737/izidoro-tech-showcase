import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { t: "Curadoria", d: "Trabalhamos com poucos clientes para entregar profundidade real." },
  { t: "Direção", d: "Toda decisão visual tem intenção — nada é improviso." },
  { t: "Performance", d: "Velocidade e elegância caminhando lado a lado." },
  { t: "Autoria", d: "Código próprio, sob medida, sem templates ou atalhos." },
  { t: "Discrição", d: "Confidencialidade e parceria de longo prazo com cada marca." },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-40 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                Princípios
              </span>
            </div>
            <h2 className="font-serif-display font-light text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
              O que <span className="italic-serif text-terracotta">define</span> o estúdio.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-border border border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="col-span-12 sm:col-span-6 lg:col-span-4 bg-background p-10 hover:bg-card transition-colors duration-700 group"
            >
              <span className="font-mono text-[10px] text-terracotta tracking-[0.3em]">
                0{i + 1}
              </span>
              <h3 className="font-serif-display text-2xl md:text-3xl font-light mt-4 mb-4 group-hover:italic transition-all duration-700">
                {it.t}
              </h3>
              <p className="text-sm text-muted-foreground leading-[1.8] font-light">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
