import { Mail, Phone, Linkedin, Calendar } from "lucide-react";
import consultantLogo from "@/assets/logos/consultant-software-engineer.png";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-card border-t border-border">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-rajdhani">
              LET'S CONNECT
            </h2>
            <p className="text-muted-foreground font-inter">
              Ready to build something impactful together?
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <a
              href="tel:+15014424629"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-primary hover:shadow-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase font-semibold mb-1 font-rajdhani">
                  Phone
                </div>
                <div className="text-sm font-semibold text-foreground font-inter">
                  (501) 442-4629
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:uwolloh.chinwe@philander.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-accent hover:shadow-glow hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase font-semibold mb-1 font-rajdhani">
                  Email
                </div>
                <div className="text-sm font-semibold text-foreground break-all font-inter">
                  uwolloh.chinwe@philander.edu
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chinwe-uwolloh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-secondary hover:shadow-glow hover:shadow-[0_0_40px_hsl(var(--secondary)/0.6)] transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-secondary" />
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase font-semibold mb-1 font-rajdhani">
                  LinkedIn
                </div>
                <div className="text-sm font-semibold text-foreground font-inter">
                  /in/chinwe-uwolloh
                </div>
              </div>
            </a>

            {/* Calendly */}
            <a
              href="https://calendly.com/chinwe-uwolloh"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-primary hover:shadow-glow hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="text-xs text-muted-foreground uppercase font-semibold mb-1 font-rajdhani">
                  Schedule
                </div>
                <div className="text-sm font-semibold text-foreground font-inter">
                  chinwe-uwolloh
                </div>
              </div>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-border space-y-4">
            <div className="flex justify-center">
              <img 
                src={consultantLogo} 
                alt="Consultant Software Engineer" 
                className="h-12 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
            <p className="text-sm text-muted-foreground font-inter">
              © {new Date().getFullYear()} Chinwe. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
