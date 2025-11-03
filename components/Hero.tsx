"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import DecryptedText from "./DecryptedText";
import TextType from "./TextType";
import AnimatedGradient from "./AnimatedGradient";
import GridPattern from "./GridPattern";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AnimatedGradient colors={["#0080FF", "#00C6FF", "#1e3a8a"]} speed={2} />
        <GridPattern />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#00C6FF]" />
            <span className="text-sm text-gray-300">
              Building Digital Excellence
            </span>
          </motion.div>

          {/* Main Headline with Animated Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
                <span className="text-white block mb-2">
                Transform Ideas Into
                </span>
              <span className="block min-h-[1.2em]">
                <TextType
                  text={[
                    "Powerful Solutions",
                    "Digital Excellence",
                    "Innovation Reality",
                    "Business Success",
                  ]}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseDuration={2500}
                  loop={true}
                  className="bg-gradient-to-r from-[#00C6FF] via-[#7B2FF7] to-[#FF6B6B] bg-clip-text text-transparent"
                />
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We craft cutting-edge web solutions, mobile apps, and automation systems
            that drive your business forward. From concept to deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] hover:shadow-2xl hover:shadow-[#00C6FF]/50 transition-all duration-300 text-lg px-8 py-6 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white text-lg px-8 py-6"
            >
              <Code2 className="mr-2 w-5 h-5" />
              View Projects
            </Button>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C6FF]/20 to-[#7B2FF7]/20 blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Projects Delivered", value: "100+", icon: Rocket },
                  { label: "Happy Clients", value: "50+", icon: Sparkles },
                  { label: "Countries Served", value: "15+", icon: Code2 },
                  { label: "Success Rate", value: "99%", icon: ArrowRight },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center group"
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#00C6FF] group-hover:scale-110 transition-transform" />
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
