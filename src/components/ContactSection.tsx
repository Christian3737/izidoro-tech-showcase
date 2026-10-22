import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { useLang, waLink } from "@/i18n";

const WA_URL = "https://wa.me/5565993381666?text=";

const ContactSection = () => {
  const { t } = useLang();
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
    const msg = `${t.waMsg}

*${t.wName}:* ${form.nome}
*${t.wCo}:* ${form.empresa || t.notInf}
*${t.wSvc}:* ${form.servico || t.notInf}
*${t.wMsg}:* ${form.mensagem || t.noMsg}`;
    window.open(`${WA_URL}${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" ref={ref} className="py-32 md:py-48 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-terracotta" />
              <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-terracotta">
                {t.ctLabel}
              </span>
            </div>
            <h2 className="font-serif-display font-light text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
              {t.ctA}<span className="italic-serif text-terracotta">{t.ctB}</span>.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-6">
            <p className="text-muted-foreground text-base leading-[1.8] font-light">
              {t.ctP}
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
                { label: "WhatsApp", value: "+55 (65) 99338-1666", key: "wa", action: waLink(t), copy: "+5565993381666" },
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
                        aria-label={`${t.copy} ${c.label}`}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                      >
                        {copied === c.key ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                      <a
                        href={c.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${t.open} ${c.label}`}
                        className="w-10 h-10 border border-border flex items-center justify-center hover:border-terracotta hover:text-terracotta transition-colors"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

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
                { k: "nome", l: t.fName, req: true, ph: t.fNamePh },
                { k: "empresa", l: t.fCo, req: false, ph: t.fCoPh },
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
                  — {t.fSvc}
                </label>
                <select
                  value={form.servico}
                  onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="w-full bg-transparent text-foreground font-serif-display text-xl md:text-2xl font-light focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">{t.fSvcPh}</option>
                  {t.fOpts.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div className="border-b border-border py-5">
                <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                  — {t.fMsg}
                </label>
                <textarea
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  placeholder={t.fMsgPh}
                  rows={3}
                  className="w-full bg-transparent text-foreground font-serif-display text-xl md:text-2xl font-light placeholder:text-muted-foreground/40 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full mt-10 flex items-center justify-between gap-3 bg-ink text-background px-8 py-6 hover:bg-terracotta transition-colors duration-500"
              >
                <span className="font-serif-display text-xl md:text-2xl font-light">{t.fSend}</span>
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
