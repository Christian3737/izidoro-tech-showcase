import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
    }, 1600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center grain"
        >
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-background/50">
              Est. 2024
            </span>
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-background/50">
              Carregando experiência
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-background/40 mb-6">
              — Estúdio Digital —
            </p>
            <h1 className="font-serif-display text-background font-light text-[clamp(2.5rem,9vw,7rem)] leading-none tracking-[-0.02em]">
              Izidoro<span className="italic-serif text-terracotta-soft">.</span>Tech
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1] }}
              className="mx-auto mt-10 h-px w-40 bg-background/40 origin-left"
            />
          </motion.div>

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-background/40 font-mono text-[10px] tracking-[0.3em] uppercase">
            <span>Alto Paraguai / MT — Brasil</span>
            <span>Marca em outro patamar</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
