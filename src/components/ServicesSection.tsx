import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    n: "01",
    t: "Websites",
    s: "Sites Institucionais & Landing Pages",
    d: "Presença digital editorial, performática e desenhada para elevar a percepção da sua marca desde o primeiro segundo.",
    tags: ["Branding Digital", "Editorial", "Performance"],
  },
  {
    n: "02",
    t: "Aplicativos",
    s: "iOS & Android Sob Medida",
    d: "Aplicativos mobile com interfaces refinadas, navegação intuitiva e identidade visual coerente em cada gesto.",
    tags: ["Mobile", "UX/UI", "Native Feel"],
  },
  {
    n: "03",
    t: "Sistemas",
    s: "Plataformas & Software Personalizado",
    d: "Sistemas internos e plataformas sob medida que automatizam processos sem abrir mão da elegância visual.",
    tags: ["SaaS", "Dashboards", "Automação"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" ref={ref} className="py-32 md:py-48 bg-card relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-24">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                005 / Serviços
              </span>
            </div>
            <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Disciplinas<br />
              <span className="italic-serif text-terracotta">do estúdio</span>.
            </h2>
          </div>
        </div>

        <div className="border-t border-foreground/20">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="grid grid-cols-12 gap-6 py-12 md:py-16 border-b border-foreground/20 group cursor-default"
            >
              <div className="col-span-12 md:col-span-2">
                <span className="font-mono text-[10px] tracking-[0.3em] text-terracotta">
                  — {s.n}
                </span>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-serif-display text-4xl md:text-6xl font-light leading-[0.95] mb-3 group-hover:italic transition-all duration-700">
                  {s.t}
                </h3>
                <p className="text-sm text-muted-foreground font-light">{s.s}</p>
              </div>
              <div className="col-span-12 md:col-span-5 md:pl-8">
                <p className="text-foreground/80 text-base leading-[1.8] font-light mb-6">
                  {s.d}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1 border border-foreground/20 text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
