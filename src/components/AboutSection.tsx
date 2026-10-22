import { motion } from "framer-motion";
import founderImg from "@/assets/founder.jpeg";
import { useLang } from "@/i18n";

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 1.1, delay: d, ease: [0.16, 1, 0.3, 1] as const },
});

const AboutSection = () => {
  const { t } = useLang();
  return (
    <section id="sobre" className="relative py-32 md:py-48 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.span {...fade()} className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
          {t.aboutLabel}
        </motion.span>

        <div className="grid grid-cols-12 gap-6 md:gap-10 mt-14 items-start">
          <motion.div {...fade(0.1)} className="col-span-12 md:col-span-4">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-[1500ms]">
              <img src={founderImg} alt="Christian Izidoro" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1500ms]" />
            </div>
            <p className="mt-5 font-serif-display text-xl font-light">Christian Izidoro</p>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-muted-foreground mt-1">{t.aboutRole}</p>
          </motion.div>

          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <motion.h2 {...fade(0.2)} className="font-serif-display font-light text-[clamp(2rem,4.2vw,4rem)] leading-[1.05]">
              {t.aboutTitleA}
              <span className="font-elegant italic text-terracotta">{t.aboutTitleB}</span>.
            </motion.h2>
            <motion.div {...fade(0.3)} className="mt-12 space-y-6 text-foreground/70 text-base md:text-lg leading-[1.85] font-light max-w-xl">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
            </motion.div>
            <motion.div {...fade(0.4)} className="mt-12 h-px w-24 bg-terracotta" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
