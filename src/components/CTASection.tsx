import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-48 bg-ink text-background relative overflow-hidden grain">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-background/60">
              008 / Contato
            </span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-display font-light text-[clamp(2.5rem,7vw,7rem)] leading-[1] tracking-[-0.03em] text-balance"
            >
              Sua marca,<br />
              elevada ao <span className="italic-serif text-terracotta-soft">patamar</span><br />
              que ela merece.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
            >
              <p className="text-background/70 text-base md:text-lg leading-relaxed font-light max-w-md">
                Aceitamos um número limitado de projetos por trimestre. Se você busca presença digital de alto padrão, conversemos.
              </p>

              <a
                href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 border border-background/40 hover:border-terracotta-soft hover:bg-terracotta-soft/10 px-10 py-6 transition-all duration-500"
              >
                <span className="font-serif-display text-2xl md:text-3xl font-light">
                  Iniciar conversa
                </span>
                <ArrowUpRight
                  size={28}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
