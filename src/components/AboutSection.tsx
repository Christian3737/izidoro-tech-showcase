import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" ref={ref} className="py-32 md:py-48 relative bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="md:sticky md:top-32"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-terracotta" />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                  007 / Estúdio
                </span>
              </div>
              <h2 className="font-serif-display font-light text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em] mb-10">
                Um estúdio<br />
                <span className="italic-serif text-terracotta">independente</span>.
              </h2>

              <div className="aspect-[4/5] overflow-hidden grayscale max-w-xs">
                <img
                  src={founderImg}
                  alt="Christian Izidoro"
                  className="w-full h-full object-cover hover:scale-105 hover:grayscale-0 transition-all duration-[1500ms]"
                />
              </div>
              <div className="mt-5">
                <p className="font-serif-display text-xl">Christian Izidoro</p>
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mt-1">
                  Fundador & Diretor
                </p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-8 md:pt-8"
            >
              <p className="font-serif-display text-2xl md:text-4xl font-light leading-[1.3] tracking-[-0.01em] text-balance">
                A <span className="italic-serif text-terracotta">IZIDORO TECH</span> é um estúdio digital independente dedicado a marcas que entendem o valor de cada detalhe.
              </p>

              <div className="hairline" />

              <p className="text-foreground/75 text-base md:text-lg leading-[1.8] font-light">
                Operamos no encontro entre design editorial, narrativa de marca e engenharia de software. Trabalhamos com poucos clientes por ano — em projetos onde podemos ir fundo, definir a direção criativa e entregar uma presença digital que comunica autoridade antes mesmo da primeira palavra.
              </p>

              <p className="text-foreground/75 text-base md:text-lg leading-[1.8] font-light">
                Cada projeto é tratado como uma peça única. Tipografia, ritmo, cor, animação e código convergem para uma única coisa: fazer sua marca ser percebida no patamar onde ela deveria estar.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-10 border-t border-border">
                {[
                  { v: "100%", l: "Personalizado" },
                  { v: "1:1", l: "Atendimento direto" },
                  { v: "∞", l: "Atenção ao detalhe" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-serif-display text-3xl md:text-4xl font-light text-terracotta">{s.v}</p>
                    <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mt-2">
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
