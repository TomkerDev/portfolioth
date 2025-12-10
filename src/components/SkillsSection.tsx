import { Code, Database, Cloud, Bot, Cog, Smartphone } from "lucide-react";

const skills = [
  {
    category: "Intelligence Artificielle",
    icon: Bot,
    items: ["Agents IA", "LangChain", "OpenAI API", "RAG", "Prompt Engineering"],
  },
  {
    category: "Data Engineering",
    icon: Database,
    items: ["Apache Spark", "Airflow", "Kafka", "dbt", "ETL/ELT"],
  },
  {
    category: "Développement",
    icon: Code,
    items: ["Python", "TypeScript", "React", "Node.js", "FastAPI"],
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    category: "Automatisation",
    icon: Cog,
    items: ["n8n", "Make", "Zapier", "Scripts Python", "API Integrations"],
  },
  {
    category: "Applications",
    icon: Smartphone,
    items: ["Web Apps", "Mobile", "Dashboards", "SaaS", "APIs REST"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Compétences
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Technologies et outils maîtrisés pour créer des solutions IA, data et applications innovantes.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
