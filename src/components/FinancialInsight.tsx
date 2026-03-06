import { Card } from "./ui/card";
import { DollarSign, TrendingUp, Users, Zap } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    title: "Solaris Gross Margin",
    value: "55%",
    description: "Achieved through COGS optimization and subscription model strategy",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Thinking CAPZ Y1 Revenue",
    value: "$500K",
    description: "Projected first-year revenue with freemium-to-premium conversion model",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Users,
    title: "WaterPure TAM",
    value: "$1.7B",
    description: "Total addressable market validated through adolescent skincare analysis",
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    icon: Zap,
    title: "S.P.K.A.K.A. Cost Reduction",
    value: "$59K",
    description: "Per-unit savings ($60,000 → $507) through hardware optimization",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const strategies = [
  {
    title: "TikTok Influencer Partnerships",
    project: "WaterPure & Solaris",
    description: "Youth-focused GTM channel leveraging beauty & wellness micro-influencers for authentic product demonstrations and community building",
  },
  {
    title: "AR Navigation UX Design",
    project: "Solaris",
    description: "Designed real-time directional overlays with GPS geofencing and caregiver alerts using Figma prototyping for cognitive accessibility",
  },
  {
    title: "Animated Character Creation",
    project: "Thinking CAPZ",
    description: "CAPZ AI Tutor avatar with conversational personality design to drive engagement among neurodivergent learners (7.3M TAM)",
  },
];

const FinancialInsight = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Business Acumen & Strategic Execution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantified financial outcomes and creative marketing strategies that 
              validate commercial viability
            </p>
          </div>
          
          {/* Financial Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "200ms" }}>
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.05] border-2"
                >
                  <div className="space-y-4">
                    <div className={`p-3 rounded-xl ${metric.bg} w-fit`}>
                      <Icon className={`h-6 w-6 ${metric.color}`} />
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        {metric.title}
                      </p>
                      <p className={`text-4xl font-bold ${metric.color}`}>
                        {metric.value}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Marketing & Creative Strategies */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-bold text-foreground">
                Marketing & Creative Strategies
              </h3>
              <p className="text-muted-foreground">
                Three concrete examples of creative execution driving market traction
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {strategies.map((strategy, idx) => (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-md transition-all duration-300 hover:scale-[1.02] border-l-4 border-l-secondary"
                >
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-bold text-lg text-foreground leading-tight">
                        {strategy.title}
                      </h4>
                      <p className="text-sm font-semibold text-secondary">
                        {strategy.project}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Process Excellence Highlight */}
          <Card className="p-8 bg-gradient-primary text-white animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Process Leadership Excellence
              </h3>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="space-y-2">
                  <p className="text-5xl font-bold">50%+</p>
                  <p className="text-white/90">Team Productivity Boost</p>
                  <p className="text-sm text-white/70">Scrum framework deployment (S.P.K.A.K.A.)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-bold">80%</p>
                  <p className="text-white/90">MVP Feature Enhancement</p>
                  <p className="text-sm text-white/70">Customer-Driven Engineering (30+ interviews)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-5xl font-bold">5+</p>
                  <p className="text-white/90">Cross-Functional Teams</p>
                  <p className="text-sm text-white/70">Aligned for Microsoft security releases</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinancialInsight;
