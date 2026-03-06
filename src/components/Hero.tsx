import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Persona Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/20 shadow-md">
            <span className="text-sm font-semibold text-primary">Integrated Technical Strategist</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Engineering Systems That
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Scale Human Potential
            </span>
          </h1>
          
          {/* Value Proposition */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium leading-relaxed">
            Full-stack innovator executing across <strong>Technical</strong> (C++, ESP32, TensorFlow), 
            <strong> Product</strong> (Roadmap, COGS Optimization), <strong>Creative</strong> (AR/UX Design), 
            and <strong>Marketing</strong> (TAM Validation: $1.7B) — driving ethical AI and assistive technology 
            from concept to market impact.
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            {[
              { value: "$1.7B", label: "TAM Validated" },
              { value: "95%", label: "Tracking Accuracy" },
              { value: "$30K", label: "Prize Winnings" },
              { value: "1000+", label: "Apps Secured" },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-white/80 mt-2">{metric.label}</div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white shadow-glow hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg px-8"
              asChild
            >
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8"
              asChild
            >
              <a href="https://linkedin.com/in/chinwe-uwolloh" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect
              </a>
            </Button>
          </div>
          
          {/* Contact */}
          <div className="flex items-center justify-center gap-2 text-white/70 pt-4">
            <Mail className="h-4 w-4" />
            <a 
              href="mailto:uwolloh.chinwe@philander.edu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
            >
              uwolloh.chinwe@philander.edu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
