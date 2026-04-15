import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Mail, Instagram, Copy, Check } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contato" className="py-28 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">お問い合わせ — Contato</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">
            <span className="text-gradient-gold">Contato</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-lg"
        >
          <div className="space-y-4">
            <a
              href="https://wa.me/5565993381666"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <MessageCircle size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-xs font-light">(65) 99338-1666</p>
              </div>
            </a>

            <div
              onClick={() => copyText("christian.gabriel.izidoro@gmail.com", "email")}
              className="flex items-center gap-5 p-5 border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-display font-semibold text-sm">Email</p>
                <p className="text-muted-foreground text-xs truncate font-light">christian.gabriel.izidoro@gmail.com</p>
              </div>
              <div className="text-muted-foreground group-hover:text-primary transition-colors">
                {copied === "email" ? <Check size={14} /> : <Copy size={14} />}
              </div>
            </div>

            <a
              href="https://instagram.com/izidoro.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-5 border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                <Instagram size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <p className="font-display font-semibold text-sm">Instagram</p>
                <p className="text-muted-foreground text-xs font-light">@izidoro.tech</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;