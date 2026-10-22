import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang, Lang } from "@/i18n";

const hrefs = ["#hero", "#sobre", "#trabalhos", "#servicos", "#contato"];
const langs: Lang[] = ["PT", "ES", "EN"];

const Header = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const pill = `pointer-events-auto rounded-full border backdrop-blur-2xl transition-all duration-700 ${
    scrolled
      ? "bg-background/55 border-background/70 shadow-[0_18px_50px_-24px_hsl(var(--ink)/0.35)]"
      : "bg-background/25 border-background/50"
  }`;

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
    >
      <div className={`container mx-auto px-4 md:px-6 transition-all duration-700 ${scrolled ? "pt-3" : "pt-5"}`}>
        <div className={`${pill} flex items-center justify-between gap-4 pl-6 pr-2 py-2`}>
          <button onClick={() => go("#hero")} className="font-serif-display font-normal text-lg md:text-xl text-foreground">
            izidoro<span className="text-terracotta">.</span>tech
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {t.nav.map((label, i) => (
              <button
                key={hrefs[i]}
                onClick={() => go(hrefs[i])}
                className="px-5 py-2.5 rounded-full text-[13px] font-semibold text-foreground/75 hover:text-foreground hover:bg-background/70 transition-all"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center p-1 rounded-full bg-foreground/5 border border-foreground/10">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider transition-all duration-500 ${
                    lang === l ? "bg-ink text-background shadow-sm" : "text-foreground/55 hover:text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-foreground/5 text-foreground"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden pointer-events-auto mx-4 mt-2 frost rounded-3xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {t.nav.map((label, i) => (
                <button key={hrefs[i]} onClick={() => go(hrefs[i])} className="text-left font-serif-display text-2xl font-light text-foreground hover:text-terracotta transition-colors">
                  {label}
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
