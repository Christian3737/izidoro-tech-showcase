import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpeg";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, delay: d, ease: [0.16, 1, 0.3, 1] as const },
});

const AboutSection = () => (
  <section id="sobre" className="relative py-32 md:py-52 bg-background overflow-hidden">
    <div className="container mx-auto px-6">
      <motion.div {...fade()} className="flex items-center gap-4 font-mono text-[10px] tracking-[0.35em] uppercase">
        <span className="text-terracotta">/ 01 — The Studio</span>
        <span className="w-10 h-px bg-foreground/20" />
        <span className="text-muted-foreground">Izidoro Tech</span>
      </motion.div>

      <div className="grid grid-cols-12 gap-6 mt-14">
        <motion.h2
          {...fade(0.1)}
          className="col-span-12 md:col-span-9 font-serif-display font-light text-[clamp(2rem,4.6vw,4.4rem)] leading-[1.05]"
        >
          Construímos sites, sistemas e aplicativos que fazem uma marca{" "}
          <span className="text-muted-foreground">ser percebida</span> no lugar{" "}
          <span className="italic-serif text-terracotta">onde ela deveria estar</span>.
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-6 mt-24 md:mt-32 items-end">
        <motion.div {...fade(0.2)} className="col-span-7 md:col-span-3 md:col-start-2">
          <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-[1500ms]">
            <img src={founderImg} alt="Christian Izidoro" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]" />
          </div>
          <p className="mt-4 font-serif-display text-lg font-light">Christian Izidoro</p>
          <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-1">Fundador</p>
        </motion.div>

        <motion.div {...fade(0.3)} className="col-span-12 md:col-span-5 md:col-start-7 space-y-10">
          <p className="text-foreground/70 text-base md:text-lg leading-[1.8] font-light">
            Design, engenharia e direção de arte no mesmo lugar. Poucos projetos por vez, atendimento direto e atenção a cada detalhe.
          </p>
          <div className="grid grid-cols-3 border-t border-border pt-8">
            {[
              { v: "07", l: "Projetos no ar" },
              { v: "03", l: "Disciplinas" },
              { v: "1:1", l: "Atendimento" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-serif-display font-light text-3xl md:text-4xl">{s.v}</p>
                <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground mt-2">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
