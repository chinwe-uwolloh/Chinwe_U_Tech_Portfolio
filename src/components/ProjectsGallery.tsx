import { projects } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectsGallery = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-background to-muted/20 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <motion.div 
        className="absolute inset-0 bg-[var(--gradient-mesh)] pointer-events-none"
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating orbs */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="container px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
            >
              <Badge className="mb-4 text-sm px-6 py-2 bg-primary/10 border-primary/30 text-primary font-semibold">
                7 Ventures
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-7xl font-bold text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Product Portfolio
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Innovative solutions spanning EdTech, HealthTech, and Social Impact
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                initial="rest"
              >
                <Card
                  onClick={() => navigate(`/projects/${project.id}`)}
                  className="group cursor-pointer overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 h-full"
                >
                  <div className="p-0">
                    {/* Project Visual */}
                    <div 
                      className="relative w-full h-64 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 overflow-hidden"
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        {project.coverImage ? (
                          <img 
                            src={project.coverImage} 
                            alt={project.name} 
                            className={`w-full h-full object-cover ${project.id === 'spkaka' ? 'rotate-180' : ''} ${project.id === 'duo-buddy' ? 'object-top' : ''}`} 
                          />
                        ) : (
                          <span 
                            className="text-8xl font-bold text-primary/20"
                          >
                            {project.name[0]}
                          </span>
                        )}
                      </div>
                      
                      {/* Gradient overlay */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.8 }}
                      >
                        <Badge className="text-xs bg-primary/10 text-primary border-primary/30">
                          {project.category}
                        </Badge>
                      </motion.div>
                      
                      <motion.h3 
                        className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.9 }}
                      >
                        {project.name}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-sm text-muted-foreground line-clamp-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 + 1 }}
                      >
                        {project.tagline}
                      </motion.p>

                      {/* CTA */}
                      <div 
                        className="flex items-center gap-2 text-primary font-semibold text-sm pt-2 group-hover:gap-3 transition-all"
                      >
                        Explore Roadmap
                        <ArrowRight className="h-4 w-4 animate-pulse" />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
