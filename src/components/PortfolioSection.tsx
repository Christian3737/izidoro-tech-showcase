import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  { img: portfolio1, title: "Site Institucional Premium", category: "Website", label: "ウェブ" },
  { img: portfolio2, title: "Aplicativo Mobile", category: "App Mobile", label: "アプリ" },
  { img: portfolio3, title: "Sistema de Gestão", category: "Software", label: "システム" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">ソリューション — Trabalhos</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            <span className="text-gradient-gold">Soluções</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className="group relative overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-6 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[9px] tracking-[0.3em] text-primary block mb-1">{p.label}</span>
                  <h3 className="text-sm font-display font-bold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{p.category}</p>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;