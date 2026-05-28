import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    img: portfolio1,
    title: "Atelier Editorial",
    category: "Website Institucional",
    year: "2025",
    span: "col-span-12 md:col-span-8",
    aspect: "aspect-[16/10]",
  },
  {
    img: portfolio2,
    title: "Maison Mobile",
    category: "Aplicativo iOS",
    year: "2025",
    span: "col-span-12 md:col-span-4",
    aspect: "aspect-[3/4]",
  },
  {
    img: portfolio3,
    title: "Studio Operacional",
    category: "Plataforma Interna",
    year: "2024",
    span: "col-span-12",
    aspect: "aspect-[21/9]",
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trabalhos" ref={ref} className="py-32 md:py-48 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                006 / Trabalhos selecionados
              </span>
            </div>
            <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Soluções <span className="italic-serif text-terracotta">em destaque</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-muted-foreground text-base leading-[1.8] font-light">
              Uma seleção curada de projetos onde percepção, posicionamento e tecnologia se encontram em um mesmo gesto.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contato"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`${p.span} group block`}
            >
              <div className={`${p.aspect} overflow-hidden bg-card relative`}>
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.04] transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-ink/10 group-hover:bg-ink/0 transition-colors duration-700" />
              </div>

              <div className="mt-5 flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-terracotta uppercase">
                    {p.category} — {p.year}
                  </span>
                  <h3 className="font-serif-display text-2xl md:text-3xl font-light mt-2">
                    {p.title}
                  </h3>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-foreground/60 group-hover:text-terracotta group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 mt-2"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
