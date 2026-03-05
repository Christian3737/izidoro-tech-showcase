import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Settings } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Desenvolvimento de Sites",
    desc: "Sites profissionais, rápidos e modernos para empresas e negócios. Design responsivo e otimizado para resultados.",
  },
  {
    icon: Smartphone,
    title: "Desenvolvimento de Aplicativos Mobile",
    desc: "Aplicativos personalizados para Android e iOS com interfaces intuitivas e performance de alto nível.",
  },
  {
    icon: Settings,
    title: "Desenvolvimento de Sistemas",
    desc: "Softwares e sistemas sob medida para automatizar processos e melhorar a gestão do seu negócio.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicos" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="line-gold w-full mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-gold tracking-[0.3em] uppercase font-medium">O que fazemos</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Nossos <span className="text-gradient-gold">Serviços</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group relative bg-card border border-border rounded-sm p-8 hover:border-gold/40 transition-all duration-500 overflow-hidden cursor-none"
            >
              {/* Top gold line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/0 group-hover:via-gold/60 to-transparent transition-all duration-500" />

              <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <s.icon size={24} className="text-gold" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-gold transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gold/0 group-hover:bg-gold/[0.03] blur-[40px] rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
