import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Globe } from "lucide-react";

type Project = {
  name: string;
  domain: string;
  category: string;
  year: string;
};

const projects: Project[] = [
  { name: "Advocacia Mirtes Belle", domain: "advocaciamirtesbelle.com", category: "Site Institucional — Advocacia", year: "2025" },
  { name: "Arqui Ernani Guimarães", domain: "arquiernaniguimaraes.com", category: "Portfólio — Arquitetura", year: "2025" },
  { name: "Convidro", domain: "convidro.com", category: "E-commerce — Vidraçaria", year: "2025" },
  { name: "Izidoro.Tech", domain: "izidoro.tech", category: "Estúdio Digital", year: "2025" },
  { name: "Bitencourt Esquadrias", domain: "bitencourtesquadrias.com", category: "Site Institucional — Indústria", year: "2025" },
  { name: "Águia Soluções", domain: "aguia-solucoes.com", category: "Serviços — Institucional", year: "2025" },
  { name: "Asas do Parecis", domain: "asasdoparecis.com", category: "Turismo & Experiências", year: "2025" },
];

const shot = (domain: string) =>
  `https://image.thum.io/get/width/1400/crop/1000/noanimate/https://${domain}`;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.a
      href={`https://${project.domain}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      <div className="aspect-[4/3] overflow-hidden bg-card relative border border-border/60">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 border border-terracotta/40 border-t-terracotta rounded-full animate-spin" />
          </div>
        )}
        <img
          src={shot(project.domain)}
          alt={`Preview do site ${project.name}`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover object-top grayscale-[35%] group-hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-out ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-ink/5 group-hover:bg-ink/0 transition-colors duration-700" />

        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-background/85 backdrop-blur-md border border-border/60">
          <Globe size={11} className="text-terracotta" />
          <span className="font-mono text-[10px] tracking-[0.15em] text-foreground/80">
            {project.domain}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 w-10 h-10 bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-terracotta uppercase">
            {project.category} — {project.year}
          </span>
          <h3 className="font-serif-display text-2xl md:text-[26px] font-light mt-2 leading-tight group-hover:italic transition-all duration-500">
            {project.name}
          </h3>
        </div>
      </div>
    </motion.a>
  );
};

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trabalhos" ref={ref} className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                006 / Trabalhos selecionados
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1 }}
              className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]"
            >
              Soluções <span className="italic-serif text-terracotta">no ar</span>.
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-6">
            <p className="text-muted-foreground text-base leading-[1.8] font-light">
              Projetos entregues e ativos. Clique em qualquer cartão para visitar o site ao vivo.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-foreground/60">
              <span>{projects.length} projetos</span>
              <span className="w-4 h-px bg-foreground/30" />
              <span>Todos ativos</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.domain} project={p} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-24 pt-10 border-t border-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="font-serif-display italic text-2xl md:text-3xl font-light max-w-xl">
            Seu projeto pode ser o próximo <span className="text-terracotta">no ar</span>.
          </p>
          <a
            href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-foreground border-b border-foreground/40 pb-2 hover:border-terracotta hover:text-terracotta transition-colors"
          >
            Iniciar meu projeto
            <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
