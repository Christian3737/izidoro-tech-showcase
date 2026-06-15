import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const DURATION = 2200; // ms total
const EXIT_DELAY = 400; // ms after reaching 100

const Preloader = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      // ease-out for a premium feel
      const eased = 1 - Math.pow(1 - p, 2.2);
      setCount(Math.max(1, Math.round(eased * 100)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, DURATION + EXIT_DELAY);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const padded = String(count).padStart(3, "0");

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-ink overflow-hidden grain"
        >
          {/* Subtle radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--terracotta)/0.10),transparent_60%)]" />

          {/* Top meta */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-6 left-6 right-6 flex items-center justify-between font-mono text-[10px] tracking-[0.35em] uppercase text-background/45"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-soft animate-pulse" />
              Iniciando experiência
            </span>
            <span className="hidden md:inline">Est. 2024 — Alto Paraguai / MT</span>
          </motion.div>

          {/* Center: split-reveal logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center px-6"
            >
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                  className="font-mono text-[10px] tracking-[0.5em] uppercase text-background/40 mb-8"
                >
                  Estúdio Digital
                </motion.p>
              </div>

              <h1 className="font-serif-display text-background font-light text-[clamp(3rem,11vw,9rem)] leading-[0.95] tracking-[-0.03em]">
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.25, ease: [0.77, 0, 0.175, 1] }}
                    className="inline-block"
                  >
                    izidoro
                  </motion.span>
                </span>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="italic-serif text-terracotta-soft inline-block"
                >
                  .
                </motion.span>
                <span className="inline-block overflow-hidden align-bottom">
                  <motion.span
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.45, ease: [0.77, 0, 0.175, 1] }}
                    className="inline-block"
                  >
                    tech
                  </motion.span>
                </span>
              </h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: [0.77, 0, 0.175, 1] }}
                className="mx-auto mt-10 h-px w-56 bg-background/30 origin-left"
              />
            </motion.div>
          </div>

          {/* Bottom-left label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.35em] uppercase text-background/40"
          >
            Marca em outro patamar
          </motion.div>

          {/* Bottom-right: counter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-6 right-6 flex items-end gap-3 text-background"
          >
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-background/40 pb-1">
              Carregando
            </span>
            <span className="font-serif-display font-light leading-none text-5xl md:text-6xl tabular-nums tracking-tight">
              {padded}
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-background/40 pb-1">
              / 100
            </span>
          </motion.div>

          {/* Bottom progress hairline */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-background/10">
            <motion.div
              className="h-full bg-terracotta-soft origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              transition={{ ease: "linear", duration: 0.05 }}
            />
          </div>

          {/* Exit curtain — slides up after content fades */}
          <motion.div
            initial={{ y: "100%" }}
            exit={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="absolute inset-0 bg-background"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
