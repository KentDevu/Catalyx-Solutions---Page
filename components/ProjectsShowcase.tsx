"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Globe, Smartphone, Shield, Zap } from "lucide-react";

interface Project {

title: string;

category: string;

description: string;

tech: string[];

icon: React.ComponentType<any>;

gradient: string;

url?: string;

github?: string;

}

const projects: Record<string, Project[]> = {
  all: [
    {
      title: "Fitup",
      category: "Web Application",
      description: "A training program generator that customizes workouts based on user goals and preferences.",
      tech: ["React", "Node.js", "AI", "PostgreSQL"],
      icon: Globe,
      url: "https://fit-up-dun.vercel.app/",
      github: "https://github.com/KentDevu/FitUp",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Note alone",
      category: "Web Application",
      description: "A note-taking app that uses AI to generate quizzes based on your notes.",
      tech: ["React", "Node.js", "AI", "PostgreSQL"],
      icon: Globe,
      url: "https://note-alone.vercel.app/",
      github: "https://github.com/",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Supply Chain Pro",
      category: "Enterprise Solution",
      description: "End-to-end automation system reducing processing time by 80% for global logistics operations.",
      tech: ["Python", "RPA", "AWS", "Docker"],
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Auralis",
      category: "Security Suite",
      description: "Automated email phishing detection and response platform utilizing AI to protect corporate communications.",
      tech: ["n8n", "virustotal", "next", "CTI"],
      icon: Shield,
      url: "https://phishing-detection-dashboard.vercel.app",
      github: "https://github.com/KentDevu/PhishingDetection-Dashboard.git",
      gradient: "from-green-500 to-emerald-500",
    },
  ],
  web: [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description: "Real-time financial analytics platform with AI-powered insights and predictive modeling for enterprise clients.",
      tech: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Supply Chain Pro",
      category: "Enterprise Solution",
      description: "End-to-end automation system reducing processing time by 80% for global logistics operations.",
      tech: ["Python", "RPA", "AWS", "Docker"],
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
    },
  ],
  mobile: [
    {
      title: "HealthHub Mobile",
      category: "Mobile App",
      description: "Comprehensive health tracking app with telemedicine integration and personalized AI recommendations.",
      tech: ["React Native", "Firebase", "HealthKit", "ML Kit"],
      icon: Smartphone,
      gradient: "from-purple-500 to-pink-500",
    },
  ],
  security: [
    {
      title: "Auralis",
      category: "Security Suite",
      description: "Automated email phishing detection and response platform utilizing AI to protect corporate communications.",
      tech: ["n8n", "virustotal", "next", "CTI"],
      icon: Shield,
      url: "https://phishing-detection-dashboard.vercel.app",
      github: "https://github.com/KentDevu/PhishingDetection-Dashboard.git",
      gradient: "from-green-500 to-emerald-500",
    },
  ],
};

export default function ProjectsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section id="projects" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful digital transformations
          </p>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <TabsList className="bg-white/5 backdrop-blur-sm border border-white/10 p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C6FF] data-[state=active]:to-[#7B2FF7] data-[state=active]:text-white">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="web" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C6FF] data-[state=active]:to-[#7B2FF7] data-[state=active]:text-white">
                Web
              </TabsTrigger>
              <TabsTrigger value="mobile" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C6FF] data-[state=active]:to-[#7B2FF7] data-[state=active]:text-white">
                Mobile
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C6FF] data-[state=active]:to-[#7B2FF7] data-[state=active]:text-white">
                Security
              </TabsTrigger>
            </TabsList>
          </motion.div>

          {Object.entries(projects).map(([key, projectList]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                {projectList.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView && activeTab === key ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="relative h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      
                      {/* Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-300`} />

                      {/* Content */}
                      <div className="relative z-10 p-6">
                        {/* Icon & Category */}
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                            <project.icon className="w-6 h-6 text-white" />
                          </div>
                          <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                            {project.category}
                          </Badge>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#7B2FF7] transition-all duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="bg-white/5 border-white/10 text-gray-300 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          {project.url && (
                          <Button
                            asChild
                            size="sm"
                            className="bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] hover:shadow-lg hover:shadow-[#00C6FF]/50 transition-all duration-300 flex-1"
                          >
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                            </a>
                          </Button>
                          )}
                          {project.github && (
                          <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="bg-white/5 border-white/10 hover:bg-white/10"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            </a>
                          </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
