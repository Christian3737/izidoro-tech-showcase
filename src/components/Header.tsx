import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#trabalhos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

// Only PT is translated today; ES/EN are wired in the UI for a future i18n layer.
const languages = [
  { code: "PT", available: true },
  { code: "ES", available: false },
  { code: "EN", available: false },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("PT");
  const [hint, setHint] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const pickLang = (l: (typeof languages)[number]) => {
    if (l.available) return setLang(l.code);
    setHint(l.code);
    setTimeout(() => setHint(null), 1800);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
    >
      <div className={`container mx-auto px-6 flex items-center justify-between transition-all duration-700 ${scrolled ? "py-3" : "py-6"}`}>
        <button onClick={() => go("#hero")} className="pointer-events-auto font-serif-display font-light text-lg md:text-xl text-foreground">
          izidoro<span className="text-terracotta">.</span>tech
        </button>

        <nav
          className={`hidden lg:flex pointer-events-auto absolute left-1/2 -translate-x-1/2 items-center gap-1 px-2 py-1.5 border transition-all duration-700 backdrop-blur-xl ${
            scrolled ? "bg-background/70 border-border shadow-[0_10px_40px_-20px_hsl(var(--ink)/0.25)]" : "bg-background/30 border-background/50"
          }`}
        >
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="px-4 py-1.5 font-mono text-[10px] tracking-[0.25em] uppercase text-foreground/70 hover:text-terracotta transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="pointer-events-auto flex items-center gap-5">
          <div className="relative hidden md:flex items-center gap-2 font-mono text-[10px] tracking-[0.2em]">
            {languages.map((l, i) => (
              <span key={l.code} className="flex items-center gap-2">
                <button
                  onClick={() => pickLang(l)}
                  className={`transition-colors duration-500 ${lang === l.code ? "text-terracotta" : "text-foreground/40 hover:text-foreground"}`}
                >
                  {l.code}
                </button>
                {i < languages.length - 1 && <span className="text-foreground/20">/</span>}
              </span>
            ))}
            <AnimatePresence>
              {hint && (
                <motion.span
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-6 right-0 whitespace-nowrap text-[9px] tracking-[0.2em] uppercase text-muted-foreground"
                >
                  {hint} em breve
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-foreground" aria-label="Menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pointer-events-auto mx-6 frost"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {navLinks.map((l) => (
                <button key={l.href} onClick={() => go(l.href)} className="text-left font-serif-display text-2xl font-light text-foreground hover:text-terracotta transition-colors">
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
