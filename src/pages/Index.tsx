import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import FinancialInsight from "@/components/FinancialInsight";
import FinalInsight from "@/components/FinalInsight";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <TechStack />
      <FinancialInsight />
      <FinalInsight />
    </div>
  );
};

export default Index;
