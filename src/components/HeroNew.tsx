import { Mail, Linkedin, ArrowDown, Code, Database, Megaphone, Users, Bot, Heart, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useRef } from "react";
import microsoftLogo from "@/assets/logos/microsoft.png";
import metaLogo from "@/assets/logos/meta.png";
import amazonLogo from "@/assets/logos/amazon.png";
import googleLogo from "@/assets/logos/google.png";
import jpmorganLogo from "@/assets/logos/jpmorgan.png";
import wellsFargoLogo from "@/assets/logos/wells-fargo.png";
import adobeLogo from "@/assets/logos/adobe.png";
import dreamworksLogo from "@/assets/logos/dreamworks.png";
import nasaLogo from "@/assets/logos/nasa.png";
import capitalOneLogo from "@/assets/logos/capital-one.png";

const expertiseAreas = [
  {
    id: "SOFTWARE ENGINEERING",
    label: "SOFTWARE ENGINEERING",
    icon: Code,
    gradient: "from-primary/20 via-primary/10 to-transparent",
  },
  {
    id: "DATA ANALYSIS",
    label: "DATA ANALYSIS",
    icon: Database,
    gradient: "from-accent/20 via-accent/10 to-transparent",
  },
  {
    id: "PRODUCT MARKETING",
    label: "PRODUCT MARKETING",
    icon: Megaphone,
    gradient: "from-secondary/20 via-secondary/10 to-transparent",
  },
  {
    id: "PROJECT MANAGEMENT",
    label: "PROJECT MANAGEMENT",
    icon: Users,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
  },
  {
    id: "AI & AUTOMATION WORKFLOWS",
    label: "AI & AUTOMATION WORKFLOWS",
    icon: Bot,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    id: "SELFLESS LEADERSHIP",
    label: "SELFLESS LEADERSHIP",
    icon: Heart,
    gradient: "from-pink-500/20 via-pink-500/10 to-transparent",
  }
];

const topCompanies = [
  { name: "Microsoft", url: microsoftLogo },
  { name: "Meta", url: metaLogo },
  { name: "Amazon", url: amazonLogo },
  { name: "Google", url: googleLogo },
  { name: "JPMorgan Chase", url: jpmorganLogo },
  { name: "Wells Fargo", url: wellsFargoLogo },
  { name: "Adobe", url: adobeLogo },
  { name: "DreamWorks", url: dreamworksLogo },
  { name: "NASA", url: nasaLogo },
  { name: "Capital One", url: capitalOneLogo },
];

const HeroNew = () => {
  const [isVisible, setIsVisible] = useState(false);
  const expertiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-40" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-1/4 -left-48 w-96 h-96 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl"
          style={{ animation: "pulse 8s ease-in-out infinite" }}
        />
        <div 
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl"
          style={{ animation: "pulse 8s ease-in-out infinite 2s" }}
        />
      </div>

      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          {/* 1. Persona Badge + Bio */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-card/60 backdrop-blur-md border border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.4)]">
              <span className="text-sm font-bold text-primary font-rajdhani tracking-wide">AWARD-WINNING PRODUCT LEADER</span>
            </div>
            
            {/* Updated Bio */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-5xl mx-auto font-light font-inter">
                Hi! I'm Chinwe, an <strong className="font-semibold text-primary">Artificial Intelligence and Software Engineer</strong> passionate about building technology that simplifies complex systems.
              </p>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-5xl mx-auto font-light font-inter">
                I combine four years of <strong className="font-semibold text-primary">engineering leadership</strong> and three consecutive <strong className="font-semibold text-primary">Microsoft</strong> internships with a <strong className="font-semibold text-primary">Magna Cum Laude</strong> Computer Science degree. This allows me to apply <strong className="font-semibold text-primary">design thinking</strong> and <strong className="font-semibold text-primary">deep data analysis</strong> to solve complex challenges.
              </p>
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed max-w-5xl mx-auto font-light font-inter">
                My goal is to ensure technology makes a positive difference in people's lives, on a global scale.
              </p>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight font-rajdhani pt-4">
                That's why I am a AI Product Builder proficient in:
              </h1>
            </div>
          </div>

          {/* 2. 6 Areas of Expertise - Interactive Buttons */}
          <div 
            ref={expertiseRef}
            id="expertise" 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {expertiseAreas.map((area, idx) => {
              const Icon = area.icon;
              
              return (
                <button
                  key={area.id}
                  onClick={() => scrollToSection("experience")}
                  className="group relative p-8 rounded-2xl border-2 border-primary/30 bg-card/60 backdrop-blur-md transition-all duration-500 md:hover:scale-110 hover:shadow-[0_0_60px_hsl(var(--primary)/0.9)] hover:border-primary animate-fade-in"
                  style={{ animationDelay: `${idx * 100 + 600}ms`, animationFillMode: 'forwards', opacity: isVisible ? 1 : 0 }}
                >
                  {/* Floating glow effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />
                  
                  <div className="relative space-y-4 flex flex-col items-center text-center">
                    {/* 3D Icon with Glow */}
                    <div className="inline-flex p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_50px_hsl(var(--primary)/0.9)] transition-all duration-500 transform">
                      <Icon className="h-9 w-9 text-primary transition-all duration-300" strokeWidth={2.5} />
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-base font-bold text-foreground leading-tight font-rajdhani">
                      {area.label}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Click Here Prompt */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button
              onClick={() => scrollToSection("experience")}
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300 animate-pulse hover:animate-none"
            >
              <span className="font-inter">Click <span className="text-accent font-semibold">here</span> to learn more about me</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 3. Top 10 Companies Carousel */}
          <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground font-rajdhani">
                Trusted By Industry Leaders
              </h3>
              
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-5xl mx-auto"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {topCompanies.map((company, idx) => (
                    <CarouselItem key={idx} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                      <div className="aspect-square p-4 md:p-6 rounded-xl bg-card/40 backdrop-blur-md border border-border hover:border-primary/50 hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all duration-300 group md:hover:scale-110 flex items-center justify-center">
                        <img
                          src={company.url}
                          alt={`${company.name} logo`}
                          className="w-full h-full max-w-full object-contain transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Button
              size="lg"
              onClick={() => scrollToSection("experience")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_hsl(var(--primary)/0.6)] hover:shadow-[0_0_70px_hsl(var(--primary)/0.9)] hover:scale-105 transition-all duration-300 text-lg px-8 font-rajdhani"
            >
              Explore Expertise <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-foreground bg-card/40 hover:bg-primary/10 backdrop-blur-sm text-lg px-8 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300 font-rajdhani"
              asChild
            >
              <a href="https://linkedin.com/in/chinwe-uwolloh" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect
              </a>
            </Button>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground pt-6">
            <Mail className="h-4 w-4" />
            <a 
              href="mailto:uwolloh.chinwe@philander.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors text-sm font-inter"
            >
              uwolloh.chinwe@philander.edu
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("experience")}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroNew;
