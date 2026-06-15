import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Patamar", href: "#patamar" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Processo", href: "#processo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Soluções", href: "#trabalhos" },
  { label: "Estúdio", href: "#sobre" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const textColor = scrolled ? "text-foreground" : "text-background";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <button onClick={() => handleClick("#hero")} className="flex items-center gap-3 group">
          <span className={`font-serif-display font-light text-xl tracking-tight transition-colors ${textColor}`}>
            Izidoro<span className="italic-serif text-terracotta">.</span>Tech
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`text-[11px] tracking-[0.2em] uppercase font-medium hover:text-terracotta transition-colors duration-300 ${textColor}/80`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase border-b pb-1 transition-colors ${
            scrolled
              ? "text-foreground border-foreground/40 hover:border-terracotta hover:text-terracotta"
              : "text-background border-background/40 hover:border-terracotta-soft hover:text-terracotta-soft"
          }`}
        >
          Iniciar projeto →
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${textColor}`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-6 py-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left font-serif-display text-3xl font-light text-foreground hover:italic hover:text-terracotta transition-all"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm tracking-[0.2em] uppercase text-terracotta border-t border-border pt-6"
              >
                Iniciar projeto →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
