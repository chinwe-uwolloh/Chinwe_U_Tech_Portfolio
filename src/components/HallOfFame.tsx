import { Trophy, DollarSign, Lightbulb } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import hbcuFoundersLogo from "@/assets/logos/hbcu-founders-initiative.png";
import uipdLogo from "@/assets/logos/uipd-new.png";
import ccdcLogo from "@/assets/logos/ccdc.png";
import nationalSalesLogo from "@/assets/logos/national-sales-network.png";
import governorsCupLogo from "@/assets/logos/governors-cup-newest.png";
import southernBancorpLogo from "@/assets/logos/southern-bancorp-new.png";

interface Competition {
  project: string;
  placement: string;
  prize: string;
  highlights: string[];
  isFirstPlace: boolean;
  logo?: string;
}

const competitions: Competition[] = [
  {
    project: "2024 Arkansas Governor's Cup (Thinking CAPZ)",
    placement: "1st Place",
    prize: "$20,000",
    highlights: [
      "Led multi-disciplinary team using Lean Startup methodology",
      "Architected TensorFlow models for neurodiverse learning patterns",
      "Validated 25% improvement in subject mastery",
      "Conducted 50+ customer validation interviews",
      "Developed 5-year ROI forecast and revenue growth strategies",
      "Secured equity-free $20,000 prize for Artificial Intelligence-powered educational app"
    ],
    isFirstPlace: true,
    logo: governorsCupLogo,
  },
  {
    project: "UIPD HBCU Engage Pitch Fest (S.P.K.A.K.A.)",
    placement: "1st Place",
    prize: "$10,000",
    highlights: [
      "Directed Artificial Intelligence-driven prosthetic knee product development",
      "Engineered C++ control algorithms with TensorFlow Lite on ESP32",
      "Achieved $59,493 cost reduction (99% savings vs. $60,000 prosthetics)",
      "Conducted clinical research translating patient needs to technical specs",
      "Developed product roadmap addressing quality of life and regulatory pathways",
      "Won $10,000 first-place award for socially impactful solution"
    ],
    isFirstPlace: true,
    logo: uipdLogo,
  },
  {
    project: "Southern Bancorp Champions of Change",
    placement: "1st Place",
    prize: "$2,000",
    highlights: [
      "Led winning FinTech solution addressing Black homeownership barriers",
      "Conducted deep-dive qualitative research on systemic barriers",
      "Designed app prototype using Figma and Lean Canvas Model",
      "Synthesized complex data into emotionally resonant pitch deck",
      "Demonstrated mastery of the Art of Pitching",
      "Won $2,000 prize for social impact strategy"
    ],
    isFirstPlace: true,
    logo: southernBancorpLogo,
  },
  {
    project: "DoE Cyberforce Competition",
    placement: "3rd Place",
    prize: "Recognition",
    highlights: [
      "Led Philander Smith team to historic third-place finish",
      "Competed against 100+ institutions in critical infrastructure simulation",
      "Deployed IDS, SIEM practices, and zero-day patch management",
      "Performed security audit against MITRE ATT&CK framework",
      "Founded first all-female HBCU team in Southwest Region CCDC",
      "Minimized system downtime by 85% below competition average"
    ],
    isFirstPlace: false,
    logo: ccdcLogo,
  },
  {
    project: "HBCU Founders Initiative Pitch (WaterPure)",
    placement: "3rd Place",
    prize: "Recognition + Funding",
    highlights: [
      "Pitched smart IoT water filtration system",
      "Validated $1.7B Total Addressable Market opportunity",
      "Developed 5-year pro forma achieving rapid profitability",
      "Designed recurring revenue subscription model ($10/month)",
      "Created social impact marketing strategy for community engagement",
      "Secured third-place finish with comprehensive business model"
    ],
    isFirstPlace: false,
    logo: hbcuFoundersLogo,
  },
  {
    project: "National Sales Network",
    placement: "Finalist",
    prize: "Recognition",
    highlights: [
      "Achieved finalist status at national industry sales conference",
      "Demonstrated high-level product development mastery",
      "Showcased professional sales strategy expertise",
      "Networked with sales professionals and industry leaders",
      "Applied strategic selling frameworks to pitch competition",
      "Competed in Atlanta against national sales professionals"
    ],
    isFirstPlace: false,
    logo: nationalSalesLogo,
  },
  {
    project: "2025 Arkansas Governor's Cup (Solaris)",
    placement: "Finalist",
    prize: "Recognition",
    highlights: [
      "Developed EEG-powered headband with Neural Network models",
      "Designed AR mobile app for real-time brainwave analysis",
      "Targeted $11B cognitive wellness market opportunity",
      "Created comprehensive go-to-market strategy for B2C medical device",
      "Developed IP strategy combining EEG and AR technology",
      "First to market with EEG-AR cognitive wellness solution"
    ],
    isFirstPlace: false,
    logo: governorsCupLogo,
  },
];

const HallOfFame = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, idx) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, idx]));
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section id="hall-of-fame" className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDuration: "5s" }} />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDuration: "7s", animationDelay: "1s" }} />
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/50 shadow-[0_0_50px_rgba(251,191,36,0.6)] animate-pulse">
              <Trophy className="h-6 w-6 text-amber-500 animate-bounce" />
              <span className="text-sm font-bold text-amber-600 font-rajdhani tracking-wide">COMPETITION WINS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground font-rajdhani bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
              Championship Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter animate-fade-in" style={{ animationDelay: "200ms" }}>
              High-level application of project management, leadership, and technical skills across product development, Artificial Intelligence innovation, and enterprise solutions
            </p>
          </div>

          {/* Competition Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {competitions.map((comp, idx) => (
              <div
                key={idx}
                ref={el => cardRefs.current[idx] = el}
                className={`
                  group relative p-8 rounded-2xl border-2 transition-all duration-700 hover:scale-105
                  ${visibleCards.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  ${comp.isFirstPlace 
                    ? 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-400 shadow-[0_0_60px_rgba(251,191,36,0.7)] hover:shadow-[0_0_100px_rgba(251,191,36,1)] hover:rotate-1' 
                    : 'bg-card border-border hover:border-primary/50 hover:shadow-[0_0_60px_hsl(var(--primary)/0.8)]'
                  }
                `}
                style={{ 
                  transitionDelay: `${idx * 150}ms`,
                  animationDelay: `${idx * 150}ms`
                }}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-opacity duration-700" />
                
                {/* Champion Badge */}
                {comp.isFirstPlace && (
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-amber-400 to-amber-600 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm flex items-center gap-2 animate-pulse hover:scale-110 transition-transform">
                    <Trophy className="h-4 w-4 animate-bounce" />
                    CHAMPION
                  </div>
                )}

                {/* Competition Logo */}
                {comp.logo && (
                  <div className="absolute -top-3 -left-3 bg-card p-3 rounded-xl border border-border shadow-lg group-hover:shadow-[0_0_30px_hsl(var(--primary)/0.7)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 z-10">
                    <img
                      src={comp.logo}
                      alt="Competition logo"
                      className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content - with relative z-index to be above animated backgrounds */}
                <div className="relative z-10">
                  {/* Placement Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 font-rajdhani ${
                    comp.isFirstPlace ? 'bg-amber-500 text-white shadow-[0_0_20px_rgba(251,191,36,0.5)]' : 'bg-primary/10 text-primary'
                  }`}>
                    {comp.placement}
                  </div>

                  {/* Project Name */}
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight font-rajdhani group-hover:text-primary transition-colors duration-500">
                    {comp.project}
                  </h3>

                  {/* Prize */}
                  <div className="flex items-center gap-2 mb-6 text-sm font-inter">
                    <DollarSign className="h-4 w-4 text-accent" />
                    <span className="font-semibold text-foreground">{comp.prize}</span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    {comp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border group-hover:bg-muted/70 group-hover:border-primary/30 transition-all duration-300">
                        <Lightbulb className="h-4 w-4 text-secondary flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                        <p className="text-xs text-muted-foreground leading-relaxed font-inter group-hover:text-foreground transition-colors">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HallOfFame;
