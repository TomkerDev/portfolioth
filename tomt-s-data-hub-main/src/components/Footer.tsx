const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-90">
            © {currentYear} Tomté Hassane. Tous droits réservés.
          </p>
          <nav className="flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-80 transition-opacity">
              À Propos
            </a>
            <a href="#skills" className="hover:opacity-80 transition-opacity">
              Compétences
            </a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
