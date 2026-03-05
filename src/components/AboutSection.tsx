import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section divider */}
        <div className="line-gold w-full mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-gold tracking-[0.3em] uppercase font-medium">Quem somos</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            Sobre a <span className="text-gradient-gold">IZIDORO TECH</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              A <span className="text-gold font-semibold">IZIDORO TECH</span> é uma empresa de tecnologia especializada na criação de soluções digitais modernas e profissionais. Desenvolvemos sites, aplicativos mobile e softwares personalizados que unem design sofisticado, performance e experiência de uso.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Nosso compromisso é transformar ideias em produtos digitais de alto padrão, ajudando empresas e negócios a fortalecer sua presença digital com tecnologia de ponta.
            </p>
          </motion.div>

          {/* Founder card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card border border-border rounded-sm p-8 relative overflow-hidden">
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative shrink-0">
                  <div className="w-28 h-28 rounded-sm overflow-hidden border border-gold/20">
                    <img src={founderImg} alt="Christian Izidoro - Fundador IZIDORO TECH" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold rounded-full border-2 border-background" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gradient-gold mb-1">Christian Izidoro</h3>
                  <p className="text-sm text-gold/70 font-medium mb-4">Fundador & Desenvolvedor</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Fundador da IZIDORO TECH e desenvolvedor especializado na criação de sites, aplicativos mobile e softwares personalizados. Atualmente cursando Engenharia de Software, com foco em desenvolvimento de soluções digitais modernas, eficientes e com alta qualidade de experiência para os usuários.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">
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
