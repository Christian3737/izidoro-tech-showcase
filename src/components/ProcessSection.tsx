import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "I",
    t: "Imersão",
    d: "Mergulhamos na sua marca, no público que ela atrai e no patamar que ela merece ocupar. Toda decisão começa aqui.",
  },
  {
    n: "II",
    t: "Direção",
    d: "Definimos a linguagem visual, o tom e a narrativa que vão sustentar a presença digital nos próximos anos.",
  },
  {
    n: "III",
    t: "Desenho",
    d: "Desenhamos cada tela como uma página de uma revista editorial — tipografia, ritmo e silêncio em equilíbrio.",
  },
  {
    n: "IV",
    t: "Construção",
    d: "Código artesanal, performance obsessiva e tecnologia de ponta — para que a experiência sustente o conceito.",
  },
  {
    n: "V",
    t: "Estréia",
    d: "Entregamos uma marca digital pronta para ser lembrada, recomendada e desejada.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="processo" ref={ref} className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                004 / Processo
              </span>
            </div>
            <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Cinco<br />
              <span className="italic-serif text-terracotta">movimentos</span>.
            </h2>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 md:pt-6">
            <p className="text-muted-foreground text-base leading-[1.8] font-light">
              Nosso processo é desenhado para marcas que não aceitam o ordinário. Cada etapa é pensada para que o resultado final seja, ao mesmo tempo, atemporal e impossível de ignorar.
            </p>
          </div>
        </div>

        <div className="space-y-0 border-t border-border">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="grid grid-cols-12 gap-6 py-10 md:py-14 border-b border-border group hover:bg-card/60 transition-colors duration-700 cursor-default"
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-serif-display italic-serif text-terracotta text-xl md:text-2xl">
                  {s.n}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3 className="font-serif-display text-3xl md:text-5xl font-light leading-none group-hover:translate-x-2 transition-transform duration-700">
                  {s.t}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-3">
                <p className="text-muted-foreground text-base leading-[1.8] font-light max-w-md">
                  {s.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
