import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import sites from "@/assets/svc-sites.jpg";
import sistemas from "@/assets/svc-sistemas.jpg";
import apps from "@/assets/svc-apps.jpg";

const services = [
  { n: "01", t: "Sites", d: "Presença digital que transmite autoridade.", img: sites },
  { n: "02", t: "Sistemas", d: "Plataformas sob medida para sua operação.", img: sistemas },
  { n: "03", t: "Aplicativos", d: "Apps iOS e Android refinados em cada gesto.", img: apps },
];

const ServicesSection = () => (
  <section id="servicos" className="py-28 md:py-40 bg-background">
    <div className="container mx-auto px-6">
      <div className="flex items-end justify-between mb-16 gap-6">
        <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1]">
          O que <span className="italic-serif text-terracotta">criamos</span>.
        </h2>
        <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-muted-foreground hidden md:block">
          / 03 — Serviços
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.a
            key={s.n}
            href="#contato"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative block aspect-[4/5] overflow-hidden bg-card ${i === 1 ? "md:translate-y-16" : ""}`}
          >
            <img
              src={s.img}
              alt={s.t}
              loading="lazy"
              width={1024}
              height={1280}
              className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1400ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-5 left-5 right-5 flex justify-between font-mono text-[10px] tracking-[0.3em] text-background/80">
              <span>{s.n}</span>
              <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <h3 className="font-serif-display font-light text-4xl md:text-5xl text-background">{s.t}</h3>
              <p className="text-background/80 text-sm mt-3 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-700">
                {s.d}
              </p>
              <div className="mt-5 h-px bg-terracotta-soft w-10 group-hover:w-full transition-all duration-700" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
