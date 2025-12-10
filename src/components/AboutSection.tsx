const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          À Propos
        </h2>
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Ingénieur Logiciel avec une expertise en <strong className="text-foreground">Data Engineering</strong> et 
            <strong className="text-foreground"> Intelligence Artificielle</strong>, je conçois des solutions qui automatisent 
            et optimisent vos processus métier grâce à la puissance de l'IA.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Basé au <strong className="text-foreground">Tchad</strong>, j'accompagne clients locaux et internationaux dans la création 
            d'<strong className="text-foreground">Agents IA</strong>, de pipelines de données intelligents, d'automatisations avancées 
            et d'<strong className="text-foreground">applications web/mobile sur mesure</strong>.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mon approche : combiner Data Engineering, IA générative et développement moderne pour livrer 
            des solutions innovantes qui transforment votre activité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
