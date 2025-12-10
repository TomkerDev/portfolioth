import { Github, Linkedin, Youtube, Facebook, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/TomkerDev",
    label: "Voir mes projets sur GitHub",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/tomte-hassane",
    label: "Me connecter sur LinkedIn",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@tomtehassane",
    label: "Regarder mes vidéos sur YouTube",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/tomte.hassane.10",
    label: "Me suivre sur Facebook",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Contact & Réseaux
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Discutons de votre prochain projet data. Je suis disponible pour des missions freelance.
        </p>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="flex flex-col items-center mb-10">
            <a
              href="mailto:tomtehassane33@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg text-lg"
            >
              <Mail className="w-5 h-5" />
              tomtehassane33@gmail.com
            </a>
          </div>
          
          <div className="border-t border-border pt-10">
            <p className="text-center text-muted-foreground mb-6">
              Retrouvez-moi sur les réseaux sociaux :
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-secondary transition-colors group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <social.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
