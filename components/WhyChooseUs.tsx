"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Layers, Award } from "lucide-react";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need us",
    },
    {
      icon: Users,
      title: "Agile Development",
      description: "Flexible, iterative approach for faster delivery",
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      description: "Built to grow with your business needs",
    },
    {
      icon: Award,
      title: "Trusted by Businesses",
      description: "Proven track record with 50+ satisfied clients",
    },
  ];

  return (
    <section
      ref={ref}
  className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black section"
    >
  <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#7B2FF7]/20 via-[#00C6FF]/20 to-[#7B2FF7]/20 rounded-full blur-[100px] animate-pulse"></div>
      </div>

  <div className="site-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We deliver excellence through innovation and dedication
          </p>
        </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FF7] to-[#00C6FF] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
