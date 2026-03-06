import { Card } from "./ui/card";
import { Code2, LineChart, Palette, TrendingUp } from "lucide-react";

const technicalSkills = [
  {
    skill: "C++",
    application: "S.P.K.A.K.A.",
    system: "ESP32 microcontroller real-time gait control",
  },
  {
    skill: "KQL",
    application: "Microsoft Core Auth",
    system: "Token telemetry analysis & security threat detection",
  },
  {
    skill: "EntraID",
    application: "Microsoft Core Auth",
    system: "Identity system mapping protocol (95% accuracy)",
  },
  {
    skill: "TensorFlow Lite",
    application: "S.P.K.A.K.A.",
    system: "Edge ML for adaptive prosthetic control",
  },
  {
    skill: "ESP32",
    application: "S.P.K.A.K.A. + WaterPure",
    system: "IoT sensor integration & data processing",
  },
];

const systemsSkills = [
  {
    skill: "Roadmap Modeling",
    application: "Microsoft + Thinking CAPZ",
    impact: "Token decommissioning roadmap & EdTech feature backlog",
  },
  {
    skill: "Cross-Functional Alignment",
    application: "Microsoft Core Auth",
    impact: "5+ engineering teams coordinated for security releases",
  },
  {
    skill: "Design Thinking",
    application: "Solaris + Thinking CAPZ",
    impact: "30+ user interviews → 80% MVP feature enhancement",
  },
  {
    skill: "GTM Strategy",
    application: "WaterPure + Solaris",
    impact: "Subscription models + influencer partnership channels",
  },
  {
    skill: "Scrum/Agile",
    application: "S.P.K.A.K.A.",
    impact: "50%+ team productivity boost through sprint execution",
  },
];

const TechStack = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Defensible Skills & Systems Mastery
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Validated expertise across execution (technical implementation) and 
              strategy (cross-domain systems thinking)
            </p>
          </div>
          
          {/* Technical Mastery */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-primary">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Technical Mastery</h3>
                <p className="text-muted-foreground">Execution across Edge, Cloud, Data, and Security</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalSkills.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-primary"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg text-primary">{item.skill}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">→ {item.application}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.system}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Systems Mastery */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-gradient-accent">
                <LineChart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Systems Mastery</h3>
                <p className="text-muted-foreground">Strategy, alignment, and process optimization</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {systemsSkills.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-secondary"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-lg text-secondary">{item.skill}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-foreground">→ {item.application}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Creative & Marketing Highlights */}
          <div className="grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Card className="p-8 border-2 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-accent">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Creative Execution</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span className="text-foreground"><strong>AR Navigation Design:</strong> Solaris NaviGuide with GPS geofencing & caregiver alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span className="text-foreground"><strong>UX/UI (Figma):</strong> High-fidelity prototyping for Thinking CAPZ & WaterPure mobile apps</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">→</span>
                  <span className="text-foreground"><strong>Multimodal Content:</strong> Animated character creation (CAPZ AI Tutor) for engagement</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-8 border-2 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Marketing Strategy</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground"><strong>TAM Validation:</strong> WaterPure $1.7B market validated through adolescent skincare segmentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground"><strong>Subscription Models:</strong> Solaris & WaterPure recurring revenue strategies ($10-15/month)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground"><strong>Influencer Partnerships:</strong> TikTok GTM channel strategy for youth-focused products</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
