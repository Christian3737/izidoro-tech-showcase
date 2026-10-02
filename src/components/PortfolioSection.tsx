import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = { name: string; domain: string; category: string };

const projects: Project[] = [
  { name: "Advocacia Mirtes Belle", domain: "advocaciamirtesbelle.com", category: "Advocacia" },
  { name: "Fabio Chies", domain: "fabiochies.arq.br", category: "Arquitetura" },
  { name: "Convidro", domain: "convidro.com", category: "Vidraçaria" },
  { name: "Bitencourt Esquadrias", domain: "bitencourtesquadrias.com", category: "Indústria" },
  { name: "Águia Soluções", domain: "aguia-solucoes.com", category: "Serviços" },
  { name: "Asas do Parecis", domain: "asasdoparecis.com", category: "Turismo" },
  { name: "Izidoro.Tech", domain: "izidoro.tech", category: "Estúdio digital" },
];

const shot = (d: string) => `https://image.thum.io/get/width/1800/crop/1100/noanimate/https://${d}`;

// Composition variants: image width / offset / title side
const layouts = [
  { img: "md:w-[86%] md:ml-0", title: "md:right-0 md:text-right", from: 80 },
  { img: "md:w-[72%] md:ml-auto", title: "md:left-0", from: -80 },
  { img: "md:w-[64%] md:ml-[8%]", title: "md:right-[4%] md:text-right", from: 80 },
  { img: "md:w-[94%] md:mx-auto", title: "md:left-[3%]", from: -80 },
];

const pad = (n: number) => String(n).padStart(2, "0");

const Panel = ({ p, i, progress }: { p: Project; i: number; progress: MotionValue<number> }) => {
  const n = projects.length;
  const start = i / n;
  const end = (i + 1) / n;
  const L = layouts[i % layouts.length];
  const scale = useTransform(progress, [start - 0.08, start, end], [1.12, 1, 0.94]);
  const opacity = useTransform(progress, [start - 0.06, start, end - 0.04, end + 0.02], [0, 1, 1, i === n - 1 ? 1 : 0]);
  const blur = useTransform(progress, [end - 0.04, end + 0.02], ["blur(0px)", i === n - 1 ? "blur(0px)" : "blur(6px)"]);
  const imgY = useTransform(progress, [start, end], ["0%", "-6%"]);
  const titleX = useTransform(progress, [start - 0.06, start + 0.02], [L.from, 0]);
  const clip = useTransform(progress, [start - 0.08, start], ["inset(12% 8% 12% 8%)", "inset(0% 0% 0% 0%)"]);

  return (
    <motion.div style={{ opacity, filter: blur }} className="absolute inset-0 flex items-center pointer-events-none" aria-hidden={false}>
      <div className="container mx-auto px-6 relative w-full">
        <motion.a
          href={`https://${p.domain}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ scale, clipPath: clip }}
          className={`group block relative w-full aspect-[16/10] md:aspect-[16/9] max-h-[72vh] overflow-hidden bg-card pointer-events-auto ${L.img}`}
        >
          <motion.img
            src={shot(p.domain)}
            alt={`Site ${p.name}`}
            loading="lazy"
            style={{ y: imgY }}
            className="absolute inset-0 w-full h-[112%] object-cover object-top saturate-[0.75] contrast-[1.05] brightness-[1.03] group-hover:saturate-100 transition-[filter] duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-background/10" />
          <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-background opacity-80 group-hover:opacity-100">
            Ver projeto <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
          </span>
        </motion.a>

        <motion.div
          style={{ x: titleX }}
          className={`relative md:absolute md:-bottom-14 mt-6 md:mt-0 ${L.title} md:max-w-[46%] md:frost md:px-8 md:py-6 pointer-events-auto`}
        >
          <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
            {pad(i + 1)} — {p.category}
          </span>
          <h3 className="font-serif-display font-light text-3xl md:text-5xl leading-[1] mt-3">{p.name}</h3>
          <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground mt-3">{p.domain}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setActive(Math.min(projects.length - 1, Math.max(0, Math.floor(v * projects.length))))
  );

  return (
    <section id="trabalhos" className="relative bg-background">
      <div className="container mx-auto px-6 pt-28 md:pt-40 pb-10">
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">/ 02 — Projetos</span>
        <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1] mt-5">
          Soluções <span className="italic-serif text-terracotta">no ar</span>.
        </h2>
      </div>

      <div ref={ref} style={{ height: `${projects.length * 110}vh` }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          {projects.map((p, i) => (
            <Panel key={p.domain} p={p} i={i} progress={scrollYProgress} />
          ))}

          {/* Progress indicator */}
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
            <span className="font-mono text-[10px] tracking-[0.2em] text-foreground tabular-nums">{pad(active + 1)}</span>
            <div className="w-px h-28 bg-foreground/15 relative overflow-hidden">
              <motion.div style={{ scaleY: scrollYProgress }} className="absolute inset-0 bg-terracotta origin-top" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground tabular-nums">{pad(projects.length)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
