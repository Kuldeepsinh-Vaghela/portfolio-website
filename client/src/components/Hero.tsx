import { Phone, Mail, MapPin } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Hero() {
  return (
    <section className="py-20 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Kuldeepsinh Vaghela
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Data Engineer & Cloud Solutions Architect
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="tel:+19174266756" 
              className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>+1 (917) 426-6756</span>
            </a>
            <a 
              href="mailto:kuldeepsinh.vaghela00@gmail.com" 
              className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span>kuldeepsinh.vaghela00@gmail.com</span>
            </a>
            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-md">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Jersey City, NJ</span>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/kuldeep-vaghela" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              <SiLinkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com/Kuldeepsinh-Vaghela" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <SiGithub className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
