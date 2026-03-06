import { experiences, Experience } from "@/data/experiences";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";
const imageMap = import.meta.glob('/src/assets/**/*', { eager: true, as: 'url' });

interface ExperienceShowcaseProps {
  activeCategory: string;
}

const ExperienceShowcase = ({ activeCategory }: ExperienceShowcaseProps) => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const filteredExperiences = experiences.filter(exp => 
    exp.categories.includes(activeCategory)
  );

  // Special content for Selfless Leadership
  const isLeadershipCategory = activeCategory === "SELFLESS LEADERSHIP";

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-[var(--gradient-mesh)] opacity-30 pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <Badge className="mb-4 text-sm px-4 py-1.5 bg-primary/10 border-primary/30 text-primary font-semibold">
              {filteredExperiences.length} Experiences
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gradient">
              {activeCategory}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quantified achievements demonstrating technical excellence and measurable impact
            </p>
          </div>

          {/* Special Leadership Narrative */}
          {isLeadershipCategory && (
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20 hover:border-primary/40 shadow-xl hover:shadow-glow transition-all duration-500 animate-fade-in hover-lift">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 backdrop-blur-sm">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    LinkedIn Career Coach & Community Mentor
                  </h3>
                </div>
                <p className="text-base text-foreground/90 leading-relaxed">
                  I am passionate about giving back to the community, especially aspiring technologists. I understand the challenges these students face trying to succeed in the tech industry, I've been there, and that's why I'm so passionate about guiding them.
                </p>
                <div className="space-y-3">
                  <p className="text-base text-foreground/90 font-semibold">Through my dedicated efforts, I have:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Successfully impacted over <strong className="text-primary">300+ aspiring technologists</strong></span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Offered 200+ résumé reviews, 80+ 1-1 video conferencing for career advice, 50+ mock technical interview preparation</span>
                    </li>
                    <li className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Assisted over <strong className="text-primary">30 students secure internships</strong> at top tech companies such as <strong>Microsoft, Amazon, Meta, and Dell</strong></span>
                    </li>
                  </ul>
                </div>
                <p className="text-base text-foreground/90 leading-relaxed">
                  I am grateful for all the experiences I have gained over the past 4 years and I do not take it for granted. That's why I always lead with empathy while guiding and impacting the people I mentor.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                  <Badge className="bg-primary/10 text-primary border-primary/30 hover:scale-105 hover:shadow-glow transition-all duration-300 px-4 py-1.5">
                    300+ Mentored
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/30 hover:scale-105 hover:shadow-glow transition-all duration-300 px-4 py-1.5">
                    30+ Placements
                  </Badge>
                  <Badge className="bg-primary/10 text-primary border-primary/30 hover:scale-105 hover:shadow-glow transition-all duration-300 px-4 py-1.5">
                    FAANG Companies
                  </Badge>
                </div>
              </div>
            </Card>
          )}

          {/* Experience Cards */}
          <div className="space-y-6">
            {filteredExperiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
              <Card
                key={`${exp.organization}-${exp.role}-${idx}`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group p-6 md:p-8 hover:shadow-glow transition-all duration-500 hover-lift border-2 hover:border-primary/50 relative overflow-hidden ${
                  isEven ? 'animate-[slide-in-from-left_0.6s_ease-out]' : 'animate-[slide-in-from-right_0.6s_ease-out]'
                }`}
                style={{ 
                  animationDelay: `${idx * 100}ms`,
                  transform: hoveredCard === idx ? 'translateY(-8px)' : 'translateY(0)',
                }}
              >
                {/* Animated gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredCard === idx ? 'animate-pulse' : ''}`} />
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                     style={{ 
                       boxShadow: hoveredCard === idx ? '0 0 50px hsl(var(--primary)/0.7), inset 0 0 30px hsl(var(--primary)/0.15)' : 'none'
                     }} 
                />

                <div className="space-y-6 relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Logo */}
                    {exp.logo && (
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center p-2 border border-border group-hover:border-primary group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.7)] transition-all duration-500 group-hover:scale-125 group-hover:rotate-6">
                          <Logo
                            src={(imageMap as any)[exp.logo] ?? (exp.logo as string)}
                            alt={`${exp.organization} logo`}
                            className="w-16 h-16"
                            width={64}
                            height={64}
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Title and Info */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary flex items-center gap-2 flex-wrap transition-colors duration-300 font-rajdhani">
                          <Building2 className="h-5 w-5 text-primary shrink-0 group-hover:scale-125 transition-transform duration-300" />
                          {exp.organization}
                        </h3>
                        <p className="text-lg text-accent mt-1 font-semibold font-inter group-hover:scale-105 transition-transform duration-300 origin-left">{exp.role}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-inter">
                        <Calendar className="h-4 w-4 group-hover:scale-125 transition-transform duration-300" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-3 pl-0 md:pl-22">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground font-rajdhani">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-3 text-foreground font-inter transition-all duration-300"
                          style={{
                            transform: hoveredCard === idx ? `translateX(${i * 3}px)` : 'translateX(0)',
                            transitionDelay: `${i * 50}ms`
                          }}
                        >
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 pl-0 md:pl-22 pt-2 border-t border-border">
                    {exp.categories.map((cat, catIdx) => (
                      <Badge
                        key={cat}
                        variant="outline"
                        className={`text-xs font-rajdhani transition-all duration-300 hover:scale-110 ${
                          cat === activeCategory
                            ? 'bg-primary/10 text-primary border-primary/30 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)]'
                            : 'bg-muted/50 text-muted-foreground border-border hover:bg-primary/5 hover:border-primary/20'
                        }`}
                        style={{
                          transitionDelay: `${catIdx * 30}ms`
                        }}
                      >
                        {cat}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
            })}
          </div>

          {/* No results message */}
          {filteredExperiences.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg font-inter">
                No experiences found for this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
