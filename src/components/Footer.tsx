const Footer = () => (
  <footer className="bg-ink text-background py-16 border-t border-background/10">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <p className="font-serif-display text-3xl md:text-4xl font-light leading-tight">
            Izidoro<span className="italic-serif text-terracotta-soft">.</span>Tech
          </p>
          <p className="text-background/60 text-sm font-light mt-3 max-w-xs leading-relaxed">
            Estúdio digital independente para marcas de alto padrão.
          </p>
        </div>

        <div className="col-span-6 md:col-span-3">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/40 mb-4">— Contato</p>
          <p className="text-sm text-background/80">+55 (65) 99338-1666</p>
          <p className="text-sm text-background/80 break-all">christian.gabriel.izidoro@gmail.com</p>
          <p className="text-sm text-background/80 mt-1">@izidoro.tech</p>
        </div>

        <div className="col-span-6 md:col-span-2">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/40 mb-4">— Estúdio</p>
          <p className="text-sm text-background/80">Alto Paraguai / MT</p>
          <p className="text-sm text-background/80">Brasil</p>
        </div>

        <div className="col-span-12 md:col-span-2">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-background/40 mb-4">— Status</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-terracotta-soft animate-pulse" />
            <p className="text-sm text-background/80">Aberto a projetos</p>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-background/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-background/40">
        <p className="font-mono text-[10px] tracking-wide">
          © {new Date().getFullYear()} IZIDORO TECH — Todos os direitos reservados.
        </p>
        <p className="font-mono text-[10px] tracking-wide italic-serif">
          Desenhado e construído em Alto Paraguai, com cuidado.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
