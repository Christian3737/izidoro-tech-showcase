import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src={heroVideo.url}
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">
                デジタルソリューション — Soluções Digitais
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-[5.5rem] font-display font-bold leading-[1.05] mb-8 tracking-tight"
          >
            Tecnologia que
            <br />
            transforma{" "}
            <span className="text-gradient-gold">ideias</span>
            <br />
            em produtos digitais
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground max-w-lg mb-12 leading-relaxed font-light"
          >
            Desenvolvimento profissional de sites, aplicativos e softwares personalizados para empresas e negócios modernos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-primary transition-colors duration-300 flex items-center gap-3"
            >
              Solicitar Projeto
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollTo("#servicos")}
              className="px-8 py-3.5 border border-foreground/20 text-foreground font-medium text-sm tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
            >
              Ver Serviços
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => scrollTo("#sobre")}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground">スクロール</span>
            <ChevronDown size={14} className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;