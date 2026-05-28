import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ManifestoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-150px" });

  const words = [
    "Acreditamos",
    "que toda marca",
    "merece ser",
    "vista com",
  ];

  return (
    <section id="manifesto" ref={ref} className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-3 flex items-start gap-3 md:sticky md:top-32 self-start">
            <div className="w-8 h-px bg-foreground/40 mt-3" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-foreground/60">
              002 / Manifesto
            </span>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif-display font-light text-[clamp(2.2rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
              {words.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-4"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="italic-serif text-terracotta inline-block"
              >
                intenção
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                .
              </motion.span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.9 }}
              className="mt-12 text-foreground/70 text-base md:text-lg leading-[1.8] font-light max-w-2xl"
            >
              Não construímos sites. Construímos a primeira impressão da sua marca no digital — o lugar onde percepção, autoridade e desejo se encontram. Cada projeto é desenhado para elevar a categoria do cliente, comunicar valor antes da primeira palavra e transformar o invisível em experiência.
            </motion.p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-12 gap-6 pt-16 border-t border-border">
          {[
            { n: "01", t: "Percepção", d: "Comunicamos o valor real da sua marca antes da primeira palavra." },
            { n: "02", t: "Posicionamento", d: "Colocamos sua marca no patamar onde ela deveria ser vista." },
            { n: "03", t: "Permanência", d: "Construímos presença digital que envelhece com elegância." },
          ].map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 + i * 0.15 }}
              className="col-span-12 md:col-span-4 pt-4 border-t border-foreground/20"
            >
              <span className="font-mono text-[10px] text-terracotta tracking-[0.3em]">{p.n}</span>
              <h3 className="font-serif-display text-2xl md:text-3xl font-light mt-4 mb-3">{p.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
