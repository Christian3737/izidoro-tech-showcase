import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MIN = 1100;

const Preloader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t0 = performance.now();
    document.documentElement.style.overflow = "hidden";
    const done = () => {
      const wait = Math.max(0, MIN - (performance.now() - t0));
      setTimeout(() => {
        setShow(false);
        document.documentElement.style.overflow = "";
      }, wait);
    };
    if (document.readyState === "complete") done();
    else window.addEventListener("load", done, { once: true });
    const safety = setTimeout(done, 2600);
    return () => {
      clearTimeout(safety);
      window.removeEventListener("load", done);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] h-[100dvh] w-screen ice-surface flex items-center justify-center"
        >
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif-display font-light text-2xl md:text-3xl text-foreground"
            >
              izidoro<span className="text-terracotta">.</span>tech
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.65, 0, 0.35, 1] }}
              className="mx-auto mt-5 h-px w-24 bg-terracotta origin-left"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-5 font-mono text-[9px] tracking-[0.45em] uppercase text-muted-foreground"
            >
              Digital Experiences / 2026
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
