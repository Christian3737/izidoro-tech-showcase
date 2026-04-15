import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    desc: "Sites profissionais, rápidos e modernos para empresas e negócios. Design responsivo e otimizado para resultados.",
    label: "ウェブ",
    num: "01",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos Mobile",
    desc: "Aplicativos personalizados para Android e iOS com interfaces intuitivas e performance de alto nível.",
    label: "アプリ",
    num: "02",
  },
  {
    icon: Settings,
    title: "Desenvolvimento de Sistemas",
    desc: "Softwares e sistemas sob medida para automatizar processos e melhorar a gestão do seu negócio.",
    label: "システム",
    num: "03",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">サービス — Serviços</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="group bg-background p-10 hover:bg-card transition-colors duration-500 relative"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{s.num}</span>
                <span className="font-mono text-[9px] tracking-wider text-primary/60">{s.label}</span>
              </div>

              <div className="w-10 h-10 border border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/5 transition-all duration-500">
                <s.icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-500" />
              </div>

              <h3 className="text-lg font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm font-light">{s.desc}</p>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-primary transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;