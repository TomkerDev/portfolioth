import profileImage from "@/assets/profile-placeholder.webp";

const HeroSection = () => {
  return (
    <header className="min-h-screen flex items-center justify-center bg-background px-6 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Tomté Hassane,{" "}
              <span className="text-primary">Data Engineer & Développeur IA.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Data Engineering · Agents IA · Automatisation · Applications sur mesure.
              <br />
              <strong className="text-foreground">Votre partenaire tech freelance au Tchad.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                Me Contacter
              </a>
              <a
                href="#cv"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Télécharger CV
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src={profileImage}
                  alt="Tomté Hassane - Data Engineer, Développeur IA et Applications au Tchad"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold text-center px-2">
                  Open to Work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
