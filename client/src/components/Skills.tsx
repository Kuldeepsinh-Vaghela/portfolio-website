import { Code, Database, BarChart3, Cloud, Award } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      icon: <Code className="h-5 w-5 text-primary" />,
      skills: ["Python", "SQL", "Apache Spark", "Apache Kafka", "Apache Airflow", "dbt"],
      colorClass: "skill-tag-blue"
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-5 w-5" style={{ color: "var(--skill-teal)" }} />,
      skills: ["MySQL", "PostgreSQL", "Snowflake", "Delta Lake"],
      colorClass: "skill-tag-teal"
    },
    {
      title: "Visualization Tools",
      icon: <BarChart3 className="h-5 w-5" style={{ color: "var(--skill-purple)" }} />,
      skills: ["Tableau", "Power BI", "AWS QuickSight"],
      colorClass: "skill-tag-purple"
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="h-5 w-5" style={{ color: "var(--skill-orange)" }} />,
      skills: ["AWS", "Microsoft Azure", "Terraform", "Git", "Docker"],
      colorClass: "skill-tag-orange"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card animate-slide-up">
                <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.title}</span>
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`inline-block px-3 py-1 rounded-full text-sm mr-2 mb-2 ${category.colorClass}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card rounded-xl p-6 shadow-md inline-block">
              <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center justify-center">
                <Award className="h-5 w-5 mr-2" style={{ color: "var(--skill-green)" }} />
                Certifications
              </h3>
              <span className="skill-tag-green px-4 py-2 rounded-full text-sm font-medium">
                AWS Certified Solutions Architect Associate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
