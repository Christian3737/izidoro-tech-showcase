import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import bg from "@/assets/cta-structure.jpg";
import { useLang, waLink } from "@/i18n";

const CTASection = () => {
  const { t, lang } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      <motion.img
        src={bg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        style={{ scale }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10 py-32">
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta-soft">{t.ctaLabel}</span>

        <motion.blockquote
          key={lang}
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-[16ch] font-elegant italic font-light text-background text-[clamp(2.6rem,6.5vw,6.5rem)] leading-[1.02]"
        >
          <span className="text-terracotta-soft">“</span>
          {t.ctaQuote}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="w-16 h-px bg-terracotta-soft" />
          <a
            href={waLink(t)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-background/30 px-7 py-3.5 backdrop-blur-md font-mono text-[11px] tracking-[0.3em] uppercase text-background hover:bg-background hover:text-ink transition-colors duration-500"
          >
            {t.ctaBtn}
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
