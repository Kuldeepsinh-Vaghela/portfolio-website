export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <div className="bg-muted rounded-2xl p-8 md:p-12 animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Versatile Data Engineer with expertise in modern data architecture, specializing in cloud platforms (AWS, Azure) and big data technologies including Kafka, Airflow, and Docker. Proficient in designing scalable ETL/ELT processes using dbt, PySpark, and AWS Glue. Skilled in creating data visualizations with Tableau, Power BI, and AWS QuickSight to drive strategic insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
