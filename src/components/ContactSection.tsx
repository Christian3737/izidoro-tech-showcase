import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Mail, Instagram, Copy, Check, ArrowRight, Send } from "lucide-react";

const WA_URL = "https://wa.me/5565993381666?text=";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState<string | null>(null);

  const [form, setForm] = useState({ nome: "", empresa: "", servico: "", mensagem: "" });

  const copyText = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá, vim pelo site e queria um orçamento!%0A%0A*Nome:* ${form.nome}%0A*Empresa:* ${form.empresa || "Não informada"}%0A*Serviço:* ${form.servico || "Não informado"}%0A*Mensagem:* ${form.mensagem || "Sem mensagem adicional"}`;
    window.open(`${WA_URL}${encodeURI(msg)}`, "_blank");
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="space-y-4">
              <a
                href="https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!"
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

          {/* WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <div className="border border-border p-8 relative">
              <div className="absolute top-0 left-0 w-12 h-px bg-primary" />
              <div className="absolute top-0 left-0 w-px h-12 bg-primary" />

              <div className="flex items-center gap-3 mb-6">
                <Send size={14} className="text-primary" />
                <h3 className="font-display font-bold text-sm tracking-wide">Solicitar Orçamento via WhatsApp</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Nome *</label>
                  <input
                    type="text"
                    required
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Empresa</label>
                  <input
                    type="text"
                    value={form.empresa}
                    onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                    placeholder="Nome da sua empresa"
                    className="w-full px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Serviço desejado</label>
                  <select
                    value={form.servico}
                    onChange={(e) => setForm({ ...form, servico: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border text-sm text-foreground focus:border-primary focus:outline-none transition-colors appearance-none"
                  >
                    <option value="">Selecione um serviço</option>
                    <option value="Desenvolvimento de Site">Desenvolvimento de Site</option>
                    <option value="Desenvolvimento de Aplicativo">Desenvolvimento de Aplicativo</option>
                    <option value="Desenvolvimento de Sistema">Desenvolvimento de Sistema</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5 tracking-wide uppercase">Mensagem</label>
                  <textarea
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    placeholder="Descreva brevemente o que precisa..."
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-3.5 bg-foreground text-background font-medium text-sm tracking-wide hover:bg-primary transition-colors duration-300"
                >
                  Enviar pelo WhatsApp
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
