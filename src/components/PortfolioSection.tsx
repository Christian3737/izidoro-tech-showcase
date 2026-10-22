import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n";

const projects = [
  { name: "Advocacia Mirtes Belle", domain: "advocaciamirtesbelle.com" },
  { name: "Fabio Chies", domain: "fabiochies.arq.br" },
  { name: "Convidro", domain: "convidro.com" },
  { name: "Bitencourt Esquadrias", domain: "bitencourtesquadrias.com" },
  { name: "Águia Soluções", domain: "aguia-solucoes.com" },
  { name: "Asas do Parecis", domain: "asasdoparecis.com" },
  { name: "Izidoro.Tech", domain: "izidoro.tech" },
];

const shot = (d: string) => `https://image.thum.io/get/width/1600/crop/1000/noanimate/https://${d}`;
const pad = (n: number) => String(n).padStart(2, "0");

const PortfolioSection = () => {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <section id="trabalhos" className="relative bg-background py-28 md:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">{t.projLabel}</span>
            <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1] mt-5">
              {t.projA}<span className="italic-serif text-terracotta">{t.projB}</span>.
            </h2>
          </div>
          <p className="hidden md:block font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{t.projHint}</p>
        </div>

        {/* Desktop: index list + live preview */}
        <div className="hidden md:grid grid-cols-12 gap-10 items-start">
          <ul className="col-span-5 border-t border-border">
            {projects.map((pr, i) => (
              <li key={pr.domain}>
                <a
                  href={`https://${pr.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center gap-6 py-6 border-b border-border"
                >
                  <span className={`font-mono text-[10px] tracking-[0.2em] tabular-nums transition-colors ${active === i ? "text-terracotta" : "text-muted-foreground"}`}>
                    {pad(i + 1)}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className={`font-serif-display font-light text-2xl lg:text-3xl leading-tight transition-all duration-500 ${active === i ? "text-foreground translate-x-2" : "text-foreground/45"}`}>
                      {pr.name}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{t.cats[i]}</p>
                  </div>
                  <ArrowUpRight size={18} className={`transition-all duration-500 ${active === i ? "opacity-100 text-terracotta rotate-45" : "opacity-0"}`} />
                </a>
              </li>
            ))}
          </ul>

          <div className="col-span-7 sticky top-28">
            <a
              href={`https://${p.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative aspect-[16/10] overflow-hidden rounded-2xl bg-card shadow-[0_40px_80px_-40px_hsl(var(--ink)/0.35)]"
            >
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={p.domain}
                  src={shot(p.domain)}
                  alt={p.name}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between bg-gradient-to-t from-ink/70 to-transparent">
                <span className="font-mono text-[10px] tracking-[0.25em] text-background">{p.domain}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-[12px] font-semibold text-ink">
                  {t.projOpen} <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Mobile: clean cards */}
        <div className="md:hidden grid gap-8">
          {projects.map((pr, i) => (
            <a key={pr.domain} href={`https://${pr.domain}`} target="_blank" rel="noopener noreferrer" className="block">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-card">
                <img src={shot(pr.domain)} alt={pr.name} loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-terracotta">{pad(i + 1)} — {t.cats[i]}</p>
                  <p className="font-serif-display font-light text-2xl mt-1">{pr.name}</p>
                </div>
                <ArrowUpRight size={18} className="text-terracotta" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
