"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TextType from "./TextType";
import DecryptedText from "./DecryptedText";
import { Zap, Target, Rocket, Shield } from "lucide-react";
import AnimatedGradient from "./AnimatedGradient";
import GridPattern from "./GridPattern";

const values = [
  {
    icon: Zap,
    title: "Innovation First",
    description: "Pushing boundaries with cutting-edge technology",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our ultimate mission",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "Speed & Quality",
    description: "Fast delivery without compromising excellence",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Building solutions you can rely on",
    color: "from-green-500 to-emerald-500",
  },
];

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50">
        <AnimatedGradient colors={["#7B2FF7", "#00C6FF", "#FF6B6B"]} speed={1.5} />
        <GridPattern />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-[#00C6FF] text-sm font-semibold uppercase tracking-wider">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white block mb-2">We Believe In</span>
              <span className="block">
                <TextType
                  text={[
                    "Innovation",
                    "Excellence",
                    "Transformation",
                    "Your Success",
                  ]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseDuration={2000}
                  loop={true}
                  className="bg-gradient-to-r from-[#00C6FF] via-[#7B2FF7] to-[#FF6B6B] bg-clip-text text-transparent"
                />
              </span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed mb-8">
              <p>
                At Catalyx Solutions, we're not just building software—we're
                crafting digital experiences that transform businesses and
                empower communities.
              </p>
              <p>
                <DecryptedText
                  text="Every line of code we write, every design we create, and every solution we deliver is driven by one purpose: to be the catalyst for your success."
                  speed={20}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                  encryptedClassName="text-gray-600"
                  className="text-gray-300"
                />
              </p>
            </div>

            {/* Stats Mini */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "15+", label: "Years Combined" },
                { value: "100%", label: "Commitment" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10 flex items-start gap-4">
                      {/* Icon */}
                      <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00C6FF] group-hover:to-[#7B2FF7] transition-all duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>

                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-r from-[#00C6FF]/20 to-[#7B2FF7]/20 rounded-full blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
