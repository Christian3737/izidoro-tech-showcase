import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="experiencia" ref={ref} className="py-32 md:py-48 bg-card relative overflow-hidden grain">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-terracotta" />
                <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                  003 / Experiência
                </span>
              </div>
              <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em] mb-8">
                A experiência <span className="italic-serif text-terracotta">é</span> o produto.
              </h2>
              <p className="text-muted-foreground text-base leading-[1.8] font-light max-w-md mb-10">
                Cada interação é desenhada com a mesma atenção que uma marca de luxo dedica à embalagem, à vitrine, ao toque. Pixels, ritmo, transição e silêncio — tudo conta.
              </p>

              <div className="space-y-5">
                {[
                  "Tipografia editorial e ritmo visual cuidadoso",
                  "Micro-animações cinematográficas e fluidas",
                  "Performance impecável em qualquer dispositivo",
                  "Narrativa visual que conduz o olhar e a emoção",
                ].map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="font-mono text-[10px] text-terracotta mt-1.5">—</span>
                    <p className="text-sm text-foreground/80 font-light">{line}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 md:col-span-7 md:pl-12">
            <motion.div style={{ y }} className="relative">
              <div className="aspect-[4/5] bg-ink relative overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-80"
                  src="/hero-video-light.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-background">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase opacity-70">
                      Caso — Estudo
                    </span>
                    <h3 className="font-serif-display text-2xl md:text-3xl font-light mt-2">
                      Onde a marca <span className="italic-serif">respira</span>.
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] opacity-60">2025</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
