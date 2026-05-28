import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";

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
    <section id="contato" ref={ref} className="py-32 md:py-48 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                009 / Diálogo
              </span>
            </div>
            <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              Vamos <span className="italic-serif text-terracotta">conversar</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-muted-foreground text-base leading-[1.8] font-light">
              Conte-nos brevemente sobre sua marca e seu momento. Respondemos pessoalmente em até um dia útil.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Direct channels */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-0 border-t border-border"
            >
              {[
                { label: "WhatsApp", value: "+55 (65) 99338-1666", key: "wa", action: "https://wa.me/5565993381666?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20queria%20um%20or%C3%A7amento!", copy: "+5565993381666" },
                { label: "Email", value: "christian.gabriel.izidoro@gmail.com", key: "email", action: "mailto:christian.gabriel.izidoro@gmail.com", copy: "christian.gabriel.izidoro@gmail.com" },
                { label: "Instagram", value: "@izidoro.tech", key: "ig", action: "https://instagram.com/izidoro.tech", copy: "izidoro.tech" },
              ].map((c) => (
                <div key={c.key} className="border-b border-border py-6 group">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-terracotta mb-2">
                        — {c.label}
                      </p>
                      <p className="font-serif-display text-xl md:text-2xl font-light truncate">
                        {c.value}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => copyText(c.copy, c.key)}
                        aria-label={`Copiar ${c.label}`}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                      >
                        {copied === c.key ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                      <a
                        href={c.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir ${c.label}`}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Localização
              </p>
              <p className="font-serif-display text-xl font-light">Cuiabá / MT · Brasil</p>
              <p className="text-sm text-muted-foreground font-light mt-1">
                Atendimento remoto para todo o Brasil e exterior.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-0"
            >
              {[
                { k: "nome", l: "Nome", req: true, ph: "Como podemos chamar você" },
                { k: "empresa", l: "Marca / Empresa", req: false, ph: "Nome da sua marca" },
              ].map((f) => (
                <div key={f.k} className="border-b border-border py-5">
                  <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                    — {f.l} {f.req && <span className="text-terracotta">*</span>}
                  </label>
                  <input
                    type="text"
                    required={f.req}
                    value={form[f.k as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                    placeholder={f.ph}
                    className="w-full bg-transparent text-foreground font-serif-display text-xl md:text-2xl font-light placeholder:text-muted-foreground/40 focus:outline-none"
                  />
                </div>
              ))}

              <div className="border-b border-border py-5">
                <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  — Natureza do projeto
                </label>
                <select
                  value={form.servico}
                  onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="w-full bg-transparent text-foreground font-serif-display text-xl md:text-2xl font-light focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Selecione uma disciplina</option>
                  <option value="Website Institucional">Website Institucional</option>
                  <option value="Landing Page Premium">Landing Page Premium</option>
                  <option value="Aplicativo Mobile">Aplicativo Mobile</option>
                  <option value="Sistema / Plataforma">Sistema / Plataforma</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div className="border-b border-border py-5">
                <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  — Conte-nos brevemente
                </label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder="Sobre sua marca, momento e visão"
                  rows={3}
                  className="w-full bg-transparent text-foreground font-serif-display text-xl md:text-2xl font-light placeholder:text-muted-foreground/40 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full mt-10 flex items-center justify-between gap-3 bg-ink text-background px-8 py-6 hover:bg-terracotta transition-colors duration-500"
              >
                <span className="font-serif-display text-xl md:text-2xl font-light">
                  Enviar mensagem
                </span>
                <ArrowUpRight
                  size={22}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
