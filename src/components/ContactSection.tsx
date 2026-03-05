import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Mail, Instagram, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="line-gold w-full mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs text-gold tracking-[0.3em] uppercase font-medium">Fale conosco</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">
            <span className="text-gradient-gold">Contato</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card border border-border rounded-sm p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

            <div className="space-y-6">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-sm border border-border hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 cursor-none group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MessageCircle size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">WhatsApp</p>
                  <p className="text-muted-foreground text-xs">Envie uma mensagem</p>
                </div>
              </a>

              <a
                href="mailto:contato@izidorotech.com"
                className="flex items-center gap-4 p-4 rounded-sm border border-border hover:border-gold/40 hover:bg-gold/5 transition-all duration-300 cursor-none group"
              >
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">Email</p>
                  <p className="text-muted-foreground text-xs">contato@izidorotech.com</p>
                </div>
              </a>

              <div className="flex justify-center gap-4 pt-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-none"
                >
                  <Instagram size={18} className="text-gold" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center hover:border-gold/50 hover:bg-gold/5 transition-all duration-300 cursor-none"
                >
                  <Linkedin size={18} className="text-gold" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
