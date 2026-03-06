import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Lightbulb, Target, Wrench, Users, DollarSign, TrendingUp, Map, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<number>(0);
  const [revealedSections, setRevealedSections] = useState<Set<number>>(new Set([0]));
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentVisualIndex, setCurrentVisualIndex] = useState(0);

  const project = projects.find(p => p.id === projectId);

  useEffect(() => {
    setActiveSection(0);
    setRevealedSections(new Set([0]));
  }, [projectId]);

  if (!project) {
    return (
      <motion.div 
        className="min-h-screen flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </motion.div>
    );
  }

  const sections: Array<{
    id: number;
    title: string;
    icon: any;
    content: any;
    color: string;
    iconColor: string;
    isVisuals?: boolean;
  }> = [
    ...(project.roadmap.visuals ? [{
      id: 0,
      title: "Visual Journey",
      icon: Play,
      content: project.roadmap.visuals,
      color: "from-primary/10 to-accent/10",
      iconColor: "text-primary",
      isVisuals: true
    }] : []),
    {
      id: project.roadmap.visuals ? 1 : 0,
      title: "Problem Statement",
      icon: Lightbulb,
      content: project.roadmap.problem,
      color: "from-red-500/10 to-orange-500/10",
      iconColor: "text-orange-500"
    },
    {
      id: project.roadmap.visuals ? 2 : 1,
      title: "Solution & Innovation",
      icon: Target,
      content: project.roadmap.solution,
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-cyan-500"
    },
    {
      id: project.roadmap.visuals ? 3 : 2,
      title: "Key Features & Technology",
      icon: Wrench,
      content: project.roadmap.features,
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-500"
    },
    {
      id: project.roadmap.visuals ? 4 : 3,
      title: "Target Market & Users",
      icon: Users,
      content: project.roadmap.audience,
      color: "from-green-500/10 to-teal-500/10",
      iconColor: "text-teal-500"
    },
    {
      id: project.roadmap.visuals ? 5 : 4,
      title: "Value Proposition",
      icon: DollarSign,
      content: project.roadmap.value,
      color: "from-yellow-500/10 to-amber-500/10",
      iconColor: "text-amber-500"
    },
    {
      id: project.roadmap.visuals ? 6 : 5,
      title: "Go-to-Market Strategy",
      icon: TrendingUp,
      content: project.roadmap.market,
      color: "from-indigo-500/10 to-violet-500/10",
      iconColor: "text-indigo-500"
    },
    {
      id: project.roadmap.visuals ? 7 : 6,
      title: "Product Roadmap",
      icon: Map,
      content: project.roadmap.roadmap,
      color: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-500"
    }
  ];

  const handleSectionClick = (id: number) => {
    if (!revealedSections.has(id)) {
      setRevealedSections(new Set([...revealedSections, id]));
    }
    
    setIsTransitioning(true);
    setActiveSection(id);
    
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (activeSection < sections.length - 1) {
      handleSectionClick(activeSection + 1);
    }
  };

  const handlePrevious = () => {
    if (activeSection > 0) {
      handleSectionClick(activeSection - 1);
    }
  };

  const activeContent = sections[activeSection];
  const Icon = activeContent.icon;
  const progress = ((activeSection + 1) / sections.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      <div className="relative">
        {/* Header */}
        <motion.div 
          className="sticky top-0 z-40 glassmorphism border-b border-border/50"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="container px-6 py-4">
            <div className="flex items-center justify-between">
              <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Button>
              
              <Badge className="bg-secondary/10 text-secondary border-secondary/30">
                {project.category}
              </Badge>
            </div>
          </div>

          <motion.div 
            className="h-1 bg-gradient-to-r from-primary via-accent to-secondary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          className="py-20 glassmorphism-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="container px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gradient"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {project.name}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.tagline}
              </motion.p>

              <motion.p 
                className="text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Chapter {activeSection + 1} of {sections.length}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="sticky top-[73px] z-30 glassmorphism-light border-y border-border/50">
          <div className="container px-6">
            <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
              {sections.map((section, idx) => {
                const SectionIcon = section.icon;
                const isRevealed = revealedSections.has(section.id);
                const isActive = activeSection === section.id;
                const canReveal = idx === 0 || revealedSections.has(idx - 1);
                
                return (
                  <motion.button
                    key={section.id}
                    onClick={() => canReveal && handleSectionClick(section.id)}
                    disabled={!canReveal && !isRevealed}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-glow"
                        : isRevealed
                        ? "bg-muted/80 text-foreground hover:bg-muted"
                        : "bg-muted/20 text-muted-foreground/40 cursor-not-allowed"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0, scale: isActive ? 1.05 : 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={canReveal || isRevealed ? { scale: 1.05 } : {}}
                  >
                    <SectionIcon className="h-4 w-4" />
                    <span className="hidden md:inline">{section.title}</span>
                    <span className="md:hidden">{section.id + 1}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-16">
          <div className="container px-6">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={`glassmorphism-light p-8 md:p-12 rounded-2xl border-2 bg-gradient-to-br ${activeContent.color}`}
                >
                  <div className="space-y-8">
                    {/* Product Visual Header */}
                    <div className="relative h-64 rounded-xl overflow-hidden border-2 border-primary/20">
                      <motion.img
                        src={project.coverImage}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.name}</h3>
                        <p className="text-white/90 text-sm">{project.tagline}</p>
                      </motion.div>
                    </div>

                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`p-4 rounded-xl glassmorphism border-2 ${activeContent.iconColor.replace('text-', 'border-')}/30`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon className={`h-10 w-10 ${activeContent.iconColor}`} />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-bold">{activeContent.title}</h2>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      {activeContent.isVisuals && typeof activeContent.content === 'object' && 'images' in activeContent.content ? (
                        <div className="space-y-8">
                          <p className="text-muted-foreground text-lg">{activeContent.content.description}</p>
                          
                          {/* Glowing Animated Carousel */}
                          <motion.div 
                            className="relative"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-xl animate-pulse" />
                            <Carousel className="relative w-full" opts={{ loop: true }}>
                              <CarouselContent>
                                {activeContent.content.images.map((img: string, idx: number) => (
                                  <CarouselItem key={idx}>
                                    <motion.div
                                      className="p-2"
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: idx * 0.1 }}
                                    >
                                      <div className="relative group">
                                        <motion.img
                                          src={img}
                                          alt={`${project.name} - Visual ${idx + 1}`}
                                          className="rounded-2xl border-2 border-primary/30 w-full h-[500px] object-contain bg-background/50"
                                          whileHover={{ scale: 1.02 }}
                                          transition={{ duration: 0.3 }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-end p-6">
                                          <p className="text-white font-semibold">Slide {idx + 1} of {activeContent.content.images.length}</p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  </CarouselItem>
                                ))}
                              </CarouselContent>
                              <CarouselPrevious className="left-4 glassmorphism border-primary/50 hover:bg-primary/20" />
                              <CarouselNext className="right-4 glassmorphism border-primary/50 hover:bg-primary/20" />
                            </Carousel>
                          </motion.div>

                          {/* Navigation Dots */}
                          <div className="flex justify-center gap-2 mt-6">
                            {activeContent.content.images.map((_: any, idx: number) => (
                              <motion.div
                                key={idx}
                                className={`h-2 rounded-full transition-all ${
                                  idx === currentVisualIndex ? 'w-8 bg-primary' : 'w-2 bg-muted'
                                }`}
                                whileHover={{ scale: 1.2 }}
                              />
                            ))}
                          </div>
                        </div>
                      ) : Array.isArray(activeContent.content) ? (
                        <ul className="space-y-4">
                          {activeContent.content.map((item, idx) => (
                            <motion.li
                              key={idx}
                              className="glassmorphism p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              whileHover={{ scale: 1.02, x: 10 }}
                            >
                              <div className="flex items-start gap-4">
                                <motion.div
                                  className="p-2 rounded-lg bg-primary/10"
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <Icon className={`h-5 w-5 ${activeContent.iconColor}`} />
                                </motion.div>
                                <span className="flex-1 text-foreground/90 leading-relaxed">{item}</span>
                              </div>
                            </motion.li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-6">
                          {activeContent.content.split('\n\n').map((paragraph: string, idx: number) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.15 }}
                            >
                              <motion.div
                                className="glassmorphism p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all"
                                whileHover={{ scale: 1.01 }}
                              >
                                <p className="text-foreground/90 leading-relaxed text-lg">
                                  {paragraph}
                                </p>
                              </motion.div>
                              {idx < activeContent.content.split('\n\n').length - 1 && (
                                <motion.div
                                  className="flex justify-center my-6"
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.15 + 0.3 }}
                                  whileHover={{ scale: 1.3, rotate: 180 }}
                                >
                                  <div className="p-3 rounded-full bg-primary/10">
                                    <Icon className={`h-6 w-6 ${activeContent.iconColor}`} />
                                  </div>
                                </motion.div>
                              )}
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>

                    <motion.div 
                      className="flex justify-between pt-8 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handlePrevious}
                          disabled={activeSection === 0}
                          variant="outline"
                          size="lg"
                          className="gap-2"
                        >
                          <ChevronLeft className="h-5 w-5" />
                          Previous
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={handleNext}
                          disabled={activeSection === sections.length - 1}
                          size="lg"
                          className="gap-2"
                        >
                          {activeSection === sections.length - 1 ? "Complete" : "Next Section"}
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {revealedSections.size === sections.length && (
                <motion.div
                  className="mt-8 text-center glassmorphism-light p-8 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <h3 className="text-2xl font-bold text-gradient mb-4">🎉 Journey Complete!</h3>
                  <p className="text-muted-foreground mb-6">
                    You've explored the complete product roadmap for {project.name}
                  </p>
                  <Button onClick={() => navigate("/")} size="lg">
                    Explore More Projects
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
