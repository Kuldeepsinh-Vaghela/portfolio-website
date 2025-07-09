import { GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Science",
      field: "Information Systems",
      school: "Stevens Institute of Technology",
      location: "New Jersey",
      gpa: "4.0/4.0",
      gpaColor: "skill-tag-green"
    },
    {
      degree: "Bachelor of Technology",
      field: "Electrical Engineering",
      school: "IITRAM",
      location: "India",
      gpa: "6.75/10",
      gpaColor: "skill-tag-blue"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-muted rounded-2xl p-8 hover:shadow-lg transition-shadow animate-slide-up">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground flex items-center">
                      <GraduationCap className="h-6 w-6 mr-2" />
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium">{edu.field}</p>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${edu.gpaColor}`}>
                    GPA: {edu.gpa}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">{edu.school}</p>
                  <p className="text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
