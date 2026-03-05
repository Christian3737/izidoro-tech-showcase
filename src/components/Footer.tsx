const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 text-center">
      <div className="font-display font-bold text-lg tracking-wider mb-2">
        <span className="text-gradient-gold">IZIDORO</span>
        <span className="text-foreground"> TECH</span>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        Desenvolvimento de sites, aplicativos e softwares.
      </p>
      <div className="line-gold w-32 mx-auto mb-4" />
      <p className="text-muted-foreground text-xs">
        © {new Date().getFullYear()} IZIDORO TECH. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
