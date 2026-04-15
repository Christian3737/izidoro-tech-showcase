import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">私たちについて — Sobre nós</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            Sobre a <span className="text-gradient-gold">IZIDORO TECH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <p className="text-muted-foreground leading-[1.8] text-base mb-6 font-light">
              A <span className="text-foreground font-medium">IZIDORO TECH</span> é uma empresa de tecnologia especializada na criação de soluções digitais modernas e profissionais. Desenvolvemos sites, aplicativos mobile e softwares personalizados que unem design sofisticado, performance e experiência de uso.
            </p>
            <p className="text-muted-foreground leading-[1.8] text-base font-light">
              Nosso compromisso é transformar ideias em produtos digitais de alto padrão, ajudando empresas e negócios a fortalecer sua presença digital com tecnologia de ponta.
            </p>
          </motion.div>

          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <div className="bg-card border border-border p-10 relative">
              <div className="absolute top-0 left-0 w-12 h-px bg-primary" />
              <div className="absolute top-0 left-0 w-px h-12 bg-primary" />

              <div className="flex flex-col sm:flex-row gap-8">
                <div className="shrink-0">
                  <div className="w-24 h-24 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img src={founderImg} alt="Christian Izidoro" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-primary block mb-2">ファウンダー</span>
                  <h3 className="text-xl font-display font-bold mb-1">Christian Izidoro</h3>
                  <p className="text-xs text-muted-foreground font-medium mb-5 tracking-wide">Fundador & Desenvolvedor</p>
                  <p className="text-muted-foreground text-sm leading-[1.8] font-light">
                    Fundador da IZIDORO TECH e desenvolvedor especializado na criação de sites, aplicativos mobile e softwares personalizados. Atualmente cursando Engenharia de Software, com foco em desenvolvimento de soluções digitais modernas, eficientes e com alta qualidade de experiência para os usuários.
                  </p>
                  <p className="text-muted-foreground text-sm leading-[1.8] mt-3 font-light">
                    À frente da IZIDORO TECH, atua no desenvolvimento de projetos digitais que unem tecnologia, design e performance, ajudando empresas a fortalecer sua presença digital e transformar ideias em produtos reais.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;