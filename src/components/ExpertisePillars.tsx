import { Code, Database, Megaphone, Users, Bot, Heart } from "lucide-react";
import { Badge } from "./ui/badge";

const categories = [
  {
    id: "SOFTWARE ENGINEERING",
    label: "SOFTWARE ENGINEERING",
    icon: Code,
    color: "from-primary/20 to-primary/5",
    borderColor: "border-primary/50",
    activeColor: "bg-primary text-primary-foreground"
  },
  {
    id: "DATA ANALYSIS",
    label: "DATA ANALYSIS",
    icon: Database,
    color: "from-accent/20 to-accent/5",
    borderColor: "border-accent/50",
    activeColor: "bg-accent text-accent-foreground"
  },
  {
    id: "PRODUCT MARKETING",
    label: "PRODUCT MARKETING",
    icon: Megaphone,
    color: "from-secondary/20 to-secondary/5",
    borderColor: "border-secondary/50",
    activeColor: "bg-secondary text-secondary-foreground"
  },
  {
    id: "PROJECT MANAGEMENT",
    label: "PROJECT MANAGEMENT",
    icon: Users,
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/50",
    activeColor: "bg-purple-500 text-white"
  },
  {
    id: "AI & AUTOMATION WORKFLOWS",
    label: "AI & AUTOMATION WORKFLOWS",
    icon: Bot,
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/50",
    activeColor: "bg-blue-500 text-white"
  },
  {
    id: "SELFLESS LEADERSHIP",
    label: "SELFLESS LEADERSHIP",
    icon: Heart,
    color: "from-pink-500/20 to-pink-500/5",
    borderColor: "border-pink-500/50",
    activeColor: "bg-pink-500 text-white"
  }
];

interface ExpertisePillarsProps {
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

const ExpertisePillars = ({ onCategoryChange, activeCategory }: ExpertisePillarsProps) => {
  return (
    <section id="expertise" className="py-24 bg-gradient-to-b from-[hsl(210,100%,97%)] via-[hsl(217,100%,92%)] to-[hsl(220,100%,95%)]">
      <div className="container px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground font-rajdhani">
              Six Areas of Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Click on any area to explore relevant experiences and achievements across my portfolio
            </p>
          </div>

          {/* Interactive Category Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`
                    group relative p-8 rounded-2xl border-2 transition-all duration-500 transform
                    ${isActive 
                      ? `${category.activeColor} shadow-[0_0_50px_hsl(var(--primary)/0.8)] scale-105` 
                      : `bg-card/60 backdrop-blur-md ${category.borderColor} hover:scale-110 hover:shadow-[0_0_60px_hsl(var(--primary)/0.9)] hover:border-primary`
                    }
                  `}
                >
                  {/* Glassmorphism effect */}
                  <div className={`absolute inset-0 rounded-2xl backdrop-blur-sm ${!isActive && 'bg-card/40'}`} />
                  
                  <div className="relative space-y-4 flex flex-col items-center text-center">
                    {/* 3D Icon with Glow */}
                    <div className={`
                      inline-flex p-6 rounded-2xl transition-all duration-500 transform
                      ${isActive 
                        ? 'bg-white/20 shadow-[0_0_40px_rgba(255,255,255,0.5)]' 
                        : `bg-gradient-to-br ${category.color} group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-[0_0_50px_hsl(var(--primary)/0.9)]`
                      }
                    `}>
                      <Icon className={`h-9 w-9 ${isActive ? 'text-white' : 'text-foreground'} transition-all duration-300`} strokeWidth={2.5} />
                    </div>
                    
                    {/* Label */}
                    <h3 className={`
                      text-lg font-bold text-left leading-tight font-rajdhani
                      ${isActive ? 'text-white' : 'text-foreground'}
                    `}>
                      {category.label}
                    </h3>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/20 text-white border-white/40">
                          Active
                        </Badge>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertisePillars;
