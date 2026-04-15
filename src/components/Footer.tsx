const Footer = () => (
  <footer className="py-16 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-primary" />
            <span className="font-display font-bold text-sm tracking-[0.15em] uppercase">IZIDORO TECH</span>
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