const Footer = () => (
  <footer className="py-16 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-primary" />
              <div className="w-1.5 h-1.5 bg-primary/60" />
              <div className="w-1.5 h-1.5 bg-primary/30" />
            </div>
            <span className="font-display font-bold text-sm tracking-[0.2em] uppercase">IZIDORO<span className="text-primary">.</span>TECH</span>
          </div>
          <p className="text-muted-foreground text-xs font-light">
            Desenvolvimento de sites, aplicativos e softwares.
          </p>
        </div>
        <p className="text-muted-foreground text-[11px] font-mono tracking-wide">
          © {new Date().getFullYear()} IZIDORO TECH. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;