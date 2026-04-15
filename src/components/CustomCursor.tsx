import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-5 h-5 border border-primary/40 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      animate={{ x: pos.x - 10, y: pos.y - 10, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.5 }}
    />
  );
};

export default CustomCursor;