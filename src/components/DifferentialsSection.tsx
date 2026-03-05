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
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="line-gold w-full mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-gold tracking-[0.3em] uppercase font-medium">Por que nos escolher</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Nossos <span className="text-gradient-gold">Diferenciais</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="text-center p-6 group cursor-none"
            >
              <div className="w-14 h-14 mx-auto rounded-full border border-gold/20 flex items-center justify-center mb-4 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                <d.icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display font-semibold text-sm mb-2 group-hover:text-gold transition-colors">{d.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
