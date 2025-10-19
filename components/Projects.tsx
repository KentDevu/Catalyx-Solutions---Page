"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "FinTech Dashboard",
      category: "Web Application",
      description:
        "Real-time financial analytics platform with AI-powered insights and predictive modeling.",
      tech: ["React", "Node.js", "TensorFlow", "PostgreSQL"],
      gradient: "from-[#7B2FF7] to-[#00C6FF]",
    },
    {
      title: "HealthHub Mobile",
      category: "Mobile App",
      description:
        "Comprehensive health tracking app with telemedicine integration and personalized recommendations.",
      tech: ["React Native", "Firebase", "HealthKit"],
      gradient: "from-[#00C6FF] to-[#4ECDC4]",
    },
    {
      title: "Supply Chain Automation",
      category: "Enterprise Solution",
      description:
        "End-to-end automation system reducing processing time by 80% for global logistics.",
      tech: ["Python", "RPA", "AWS", "Docker"],
      gradient: "from-[#FF6B6B] to-[#7B2FF7]",
    },
    {
      title: "CyberGuard Platform",
      category: "Security Suite",
      description:
        "Advanced threat detection and response system protecting 500+ enterprise clients.",
      tech: ["Go", "Kubernetes", "AI/ML", "Redis"],
      gradient: "from-[#4ECDC4] to-[#00C6FF]",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover how we&apos;ve transformed ideas into impactful digital
            solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`}
              ></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300">
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-black"
                    >
                      View Project <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Code2 className="w-8 h-8 text-white/60" />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
