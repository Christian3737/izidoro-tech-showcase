import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import tech2 from "@/assets/tech-premium-2.jpg";
import tech3 from "@/assets/tech-premium-3.jpg";
import tech1 from "@/assets/tech-premium-1.jpg";

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-32 md:py-48 relative overflow-hidden bg-card/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                004 / Galeria
              </span>
            </div>
            <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Tecnologia <span className="italic-serif text-terracotta">com presença</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-muted-foreground text-base leading-[1.8] font-light">
              Imagens, materiais e silêncios — a linguagem visual que sustenta marcas de alto padrão no digital.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 items-start">
          <motion.div style={{ y: y1 }} className="col-span-6 md:col-span-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2 }}
              className="aspect-[3/4] overflow-hidden bg-background"
            >
              <img src={tech2} alt="Detalhe tecnologia premium" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="col-span-6 md:col-span-4 md:pt-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.15 }}
              className="aspect-square overflow-hidden bg-background"
            >
              <img src={tech3} alt="Arquitetura minimalista" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div style={{ y: y3 }} className="col-span-12 md:col-span-4 md:pt-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3 }}
              className="aspect-[4/5] overflow-hidden bg-background"
            >
              <img src={tech1} alt="Forma e material" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
