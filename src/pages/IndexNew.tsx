import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroNew from "@/components/HeroNew";
import ExpertisePillars from "@/components/ExpertisePillars";
import AffiliationsLogos from "@/components/AffiliationsLogos";
import ExperienceShowcase from "@/components/ExperienceShowcase";
import HallOfFame from "@/components/HallOfFame";
import ProjectsGallery from "@/components/ProjectsGallery";
import Footer from "@/components/Footer";
import { ChatBot } from "@/components/ChatBot";

const IndexNew = () => {
  const [activeCategory, setActiveCategory] = useState("SOFTWARE ENGINEERING");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Smooth scroll to experience section
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle selfless leadership navigation
  const handleSelflessLeadershipScroll = () => {
    setActiveCategory("SELFLESS LEADERSHIP");
    setTimeout(() => {
      const element = document.getElementById("experience");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Add event listener for selfless-leadership section
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === "selfless-leadership") {
        handleSelflessLeadershipScroll();
      }
    };
    window.addEventListener("scrollToSection" as any, handleScroll);
    return () => window.removeEventListener("scrollToSection" as any, handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroNew />
      <ExpertisePillars 
        onCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />
      <ExperienceShowcase activeCategory={activeCategory} />
      <HallOfFame />
      <ProjectsGallery />
      <AffiliationsLogos />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default IndexNew;
