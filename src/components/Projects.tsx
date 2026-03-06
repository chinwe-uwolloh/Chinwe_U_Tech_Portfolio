import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Brain, Wrench, GraduationCap, Droplet, Users } from "lucide-react";

const projects = [
  {
    title: "Solaris",
    subtitle: "AI-Powered Cognitive Enhancement System",
    icon: Brain,
    problem: "6.7M Americans with Alzheimer's lack accessible cognitive support technology (15-20% adoption rate)",
    action: "Led full-stack development of EEG-based neurotech wearable AND conducted market viability analysis — C++ firmware engineering, AR navigation UX design (Figma), plus subscription model strategy",
    outcome: "55% Gross Margin achieved through COGS optimization; positioned for neurodivergent market expansion with real-time brainwave feedback + memory vault integration",
    domains: ["Technical", "Product", "Creative", "Marketing"],
    metrics: ["55% Margin", "AR Navigation", "Memory Vault"],
  },
  {
    title: "S.P.K.A.K.A.",
    subtitle: "Smart Prosthetic Knee for Above-Knee Amputees",
    icon: Wrench,
    problem: "48,000 above-knee amputees face $60,000 prosthetic costs — economically prohibitive for 90% of users",
    action: "Architected C++ control system on ESP32 microcontroller with TensorFlow Lite for real-time gait adaptation AND executed competitive analysis to validate $507 price point disruption",
    outcome: "$59,493 cost reduction (99% savings); won $10,000 UIPD HBCU Pitch Fest; Scrum deployment boosted team productivity 50%+",
    domains: ["Technical", "Product"],
    metrics: ["$59K Cost Cut", "$10K Prize", "50% Productivity"],
  },
  {
    title: "Thinking CAPZ",
    subtitle: "EdTech Platform for Neurodivergent Learners",
    icon: GraduationCap,
    problem: "7.3M students (15% of public school) receive special education, but current tools lack personalized learning paths",
    action: "Led product strategy AND UX design (Figma prototyping) for AI tutor with adaptive learning paths; validated GTM strategy through competitive positioning and subscription modeling",
    outcome: "$20,000 Arkansas Governor's Cup winner; $500K Year 1 Revenue projection; served personal mission (ADHD/Autism advocacy) with commercial viability",
    domains: ["Product", "Creative", "Marketing"],
    metrics: ["$20K Prize", "$500K Rev Y1", "7.3M TAM"],
  },
  {
    title: "WaterPure",
    subtitle: "IoT Water Filtration System",
    icon: Droplet,
    problem: "80% of adolescents suffer from acne exacerbated by contaminated water — overlooked root cause in skincare",
    action: "Engineered IoT sensor integration (Python + KQL telemetry) AND designed mobile app UX (real-time monitoring, gamification) while validating $1.7B TAM through market segmentation analysis",
    outcome: "$1.7B Total Addressable Market; $10/month subscription model; 99.9% impurity removal validated; positioned for influencer partnership GTM",
    domains: ["Technical", "Creative", "Marketing"],
    metrics: ["$1.7B TAM", "$10/mo", "99.9% Filtration"],
  },
  {
    title: "Microsoft Core Authentication",
    subtitle: "Enterprise Security Optimization",
    icon: Users,
    problem: "1000+ productivity apps on Substrate platform faced unmapped token vulnerabilities and incomplete IP logging",
    action: "Re-engineered EntraID-to-STI mapping protocol using advanced KQL queries and Python scripting; built Power BI dashboards for security telemetry visibility across engineering teams",
    outcome: "95% tracking accuracy achieved; resolved 40% of unmapped applications; threat mitigation roadmap for legacy token decommissioning secured cross-functional alignment (5+ teams)",
    domains: ["Technical", "Product"],
    metrics: ["95% Accuracy", "40% Resolved", "1000+ Apps"],
  },
];

const domainColors = {
  Technical: "bg-primary/10 text-primary border-primary/20",
  Product: "bg-accent/10 text-accent border-accent/20",
  Creative: "bg-secondary/10 text-secondary border-secondary/20",
  Marketing: "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20",
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Core Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Five quantified case studies demonstrating interdisciplinary execution across 
              Technical, Product, Creative, and Marketing domains
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <Card
                  key={idx}
                  className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-2 animate-fade-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start gap-6">
                      <div className="p-4 rounded-2xl bg-gradient-primary shrink-0">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {project.title}
                            </h3>
                            <p className="text-muted-foreground">{project.subtitle}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.domains.map((domain) => (
                              <Badge
                                key={domain}
                                variant="outline"
                                className={domainColors[domain as keyof typeof domainColors]}
                              >
                                {domain}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Problem
                        </h4>
                        <p className="text-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Interdisciplinary Action
                        </h4>
                        <p className="text-foreground leading-relaxed">{project.action}</p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                          Measurable Outcome
                        </h4>
                        <p className="text-foreground leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3 pt-4 border-t">
                      {project.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 rounded-full bg-muted text-sm font-semibold"
                        >
                          {metric}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
