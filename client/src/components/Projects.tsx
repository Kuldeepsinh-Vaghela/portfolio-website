import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Real-Time Spotify ETL Pipeline",
      subtitle: "using AWS and Snowflake",
      description: "Built a comprehensive real-time ETL pipeline that extracts Spotify data, transforms it using AWS services, and loads it into Snowflake for analytics. The solution leverages modern cloud technologies to provide scalable and efficient data processing capabilities.",
      technologies: ["AWS", "Snowflake", "Python", "Apache Airflow", "ETL"],
      githubUrl: "https://github.com/Kuldeepsinh-Vaghela/spotify-etl",
      mediumUrl: "https://medium.com/@kuldeepsinh.vaghela00"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Featured Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow animate-slide-up">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <a href={project.mediumUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Medium
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="skill-tag-blue px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
