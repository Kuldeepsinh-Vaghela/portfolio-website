import { Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Brilliant Infotech",
      period: "Jan 2025 – Present",
      description: "Currently working on cutting-edge data engineering projects, implementing scalable data solutions and optimizing data pipelines for enterprise clients."
    },
    {
      title: "Data Engineer",
      company: "Leo9 Studio",
      period: "Apr 2024 – Jan 2025",
      description: "Led data engineering initiatives, designed and implemented robust ETL/ELT pipelines using modern technologies including Apache Spark, Kafka, and cloud platforms. Collaborated with cross-functional teams to deliver data-driven solutions that enhanced business intelligence capabilities."
    },
    {
      title: "Data Analyst",
      company: "A Innovative International Ltd",
      period: "Jun 2020 – Nov 2021",
      description: "Performed comprehensive data analysis and reporting, developed interactive dashboards using Tableau and Power BI, and provided actionable insights to support strategic decision-making across various business units."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow animate-slide-up">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
