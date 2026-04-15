import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GridBackground />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/[0.05] mb-8"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse-gold" />
            <span className="text-xs text-gold font-medium tracking-widest uppercase">Soluções Digitais Premium</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
          >
            Tecnologia que transforma{" "}
            <span className="text-gradient-gold">ideias em produtos digitais</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Desenvolvimento profissional de sites, aplicativos e softwares personalizados para empresas e negócios modernos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://wa.me/5565993381666"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-sm glow-gold hover:bg-gold-light transition-all duration-300 flex items-center gap-2 cursor-none"
            >
              Solicitar Projeto
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollTo("#servicos")}
              className="px-8 py-3.5 border border-gold/30 text-foreground font-semibold rounded-sm hover:border-gold/60 hover:bg-gold/5 transition-all duration-300 cursor-none"
            >
              Ver Serviços
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-none"
            onClick={() => scrollTo("#sobre")}
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <ChevronDown size={16} className="text-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
