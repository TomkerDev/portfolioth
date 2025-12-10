import { Download } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

// URL du CV PDF - à remplacer par votre vrai lien
const CV_PDF_URL = "https://drive.google.com/file/d/1NOhXxaw3fg5qML3AC_edrQlZgINOWBao/view?usp=drive_link";

const CVSection = () => {
  return (
    <section id="cv" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Curriculum Vitae
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Téléchargez mon CV complet pour découvrir mon parcours et mes réalisations.
        </p>
        
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mb-6 p-4">
                <QRCodeSVG 
                  value={CV_PDF_URL}
                  size={160}
                  level="H"
                  includeMargin={false}
                  fgColor="#001F3F"
                  bgColor="#FFFFFF"
                />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Scannez pour accéder au CV depuis votre mobile
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Prêt à collaborer ?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mon CV détaille mon expérience en ingénierie logicielle et data engineering, 
                mes certifications, et les projets sur lesquels j'ai travaillé.
              </p>
              <a
                href={CV_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
