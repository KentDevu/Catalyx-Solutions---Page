"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Code2, Smartphone, Zap, Shield, Cloud, Palette, Database, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Custom websites and web applications built with modern frameworks and best practices.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline your workflows with intelligent automation solutions.",
    gradient: "from-yellow-500 to-orange-500",
    delay: 0.3,
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade security solutions to protect your digital assets.",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.4,
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and deployment strategies.",
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.5,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love.",
    gradient: "from-pink-500 to-rose-500",
    delay: 0.6,
  },
  {
    icon: Database,
    title: "Data Solutions",
    description: "Robust database architecture and data management systems.",
    gradient: "from-cyan-500 to-teal-500",
    delay: 0.7,
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Lightning-fast applications optimized for peak performance.",
    gradient: "from-violet-500 to-purple-500",
    delay: 0.8,
  },
];

export default function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] bg-clip-text text-transparent">
              What We Do
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: feature.delay }}
              className={`group ${
                index === 0 || index === 7 ? "md:col-span-2" : ""
              }`}
            >
              <Card className="relative h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden p-6 group-hover:scale-[1.02]">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#7B2FF7] transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} blur-xl opacity-50`} />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
