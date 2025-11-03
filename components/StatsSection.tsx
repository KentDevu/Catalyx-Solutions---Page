"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "./CountUp";
import { TrendingUp, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    end: 100,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered solutions",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Users,
    end: 50,
    suffix: "+",
    label: "Happy Clients",
    description: "Across various industries",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    end: 15,
    suffix: "+",
    label: "Countries",
    description: "Global reach and impact",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    end: 99,
    suffix: "%",
    label: "Success Rate",
    description: "Client satisfaction guaranteed",
    color: "from-orange-500 to-red-500",
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-transparent">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#00C6FF]/10 to-[#7B2FF7]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mb-2">
                    <div className="text-4xl sm:text-5xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#7B2FF7] transition-all duration-300">
                      {isInView && (
                        <>
                          <CountUp to={stat.end} duration={2} />
                          {stat.suffix}
                        </>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-gray-400">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
