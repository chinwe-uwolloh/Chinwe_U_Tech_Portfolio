import { Card } from "./ui/card";
import { Quote, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const FinalInsight = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Authenticity Quote */}
          <Card className="p-12 bg-gradient-hero border-0 text-white animate-fade-in">
            <div className="space-y-8">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                  <Quote className="h-12 w-12 text-secondary" />
                </div>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-bold text-center leading-relaxed">
                "Two decades of choral discipline—mastering vocal acoustics as top soprano in a 500-member choir—taught me that systems excellence demands both precision and harmony. Now, I channel that same rigor into engineering adaptive AI for neurodiversity and mobility, because technology's greatest performance is measured not in code elegance, but in human dignity restored."
              </blockquote>
              
              <div className="text-center space-y-2">
                <p className="text-xl font-semibold text-white/90">
                  Chinwe Julia Uwolloh
                </p>
                <p className="text-white/70">
                  Integrated Technical Strategist | Systems Thinker | Neurodiversity Advocate
                </p>
              </div>
            </div>
          </Card>
          
          {/* Personal Mission & Background */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground">Personal Mission</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Neurodiversity Advocacy:</strong> Living with ADHD and Autism Spectrum Disorder drives my commitment to building assistive technology that scales human potential.
                </p>
                <p>
                  <strong className="text-foreground">Ethical Impact:</strong> Every project—from Solaris (Alzheimer's support) to Thinking CAPZ (neurodivergent education)—centers on restoring agency and dignity to underserved communities.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 space-y-4 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground">Systems Discipline</h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Choral Leadership:</strong> 20+ years as choirmaster and vocal analyst, orchestrating complex harmonies across 500-member ensembles.
                </p>
                <p>
                  <strong className="text-foreground">Academic Excellence:</strong> 3.8 GPA Computer Science at Philander Smith University (HBCU), with Meta, DreamWorks, and Capital One technical development programs.
                </p>
              </div>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Let's Build Systems That Matter
              </h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Open to Product Management, Technical Program Management, and Full-Stack Engineering roles where interdisciplinary thinking drives measurable impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-lg px-8"
                asChild
              >
                <a href="https://linkedin.com/in/chinwe-uwolloh" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-lg px-8 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                asChild
              >
                <a href="mailto:uwolloh.chinwe@philander.edu" target="_blank" rel="noopener noreferrer">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 text-lg px-8 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/chinwe-uwolloh" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  PM Portfolio
                </a>
              </Button>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t animate-fade-in" style={{ animationDelay: "600ms" }}>
            <p>© 2025 Chinwe Julia Uwolloh. All rights reserved.</p>
            <p className="mt-2">
              Philander Smith University | Little Rock, AR | Graduating May 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalInsight;
