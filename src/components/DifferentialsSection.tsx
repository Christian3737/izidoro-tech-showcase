import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Zap, Users, Puzzle, Cpu } from "lucide-react";

const diffs = [
  { icon: Gem, title: "Design Sofisticado", desc: "Interfaces elegantes e modernas que transmitem profissionalismo." },
  { icon: Zap, title: "Alta Performance", desc: "Produtos rápidos, otimizados e preparados para escalar." },
  { icon: Users, title: "Experiência Otimizada", desc: "Foco total na experiência do usuário em cada detalhe." },
  { icon: Puzzle, title: "Soluções Personalizadas", desc: "Cada projeto é único e desenvolvido sob medida." },
  { icon: Cpu, title: "Tecnologia Atual", desc: "Utilizamos as tecnologias mais modernas do mercado." },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 bg-card relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">差別化 — Diferenciais</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Nossos <span className="text-gradient-gold">Diferenciais</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="group"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center mb-5 group-hover:border-primary transition-colors duration-500">
                <d.icon size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 tracking-wide">{d.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed font-light">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;