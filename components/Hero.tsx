"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BackgroundAnimation from "./BackgroundAnimation";
import AnimatedLogo from "./AnimatedLogo";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden section"
      style={{ minHeight: 'calc(100vh - 5rem)' }}
    >
      <BackgroundAnimation />

      <div className="site-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <div className="flex items-center space-x-2 px-3 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
                <Sparkles className="w-4 h-4 text-[#00C6FF]" />
                <span className="text-sm text-gray-300">
                  Transforming Ideas into Digital Reality
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">We turn your ideas into</span>
              <br />
              <span className="bg-gradient-to-r from-[#7B2FF7] via-[#00C6FF] to-[#7B2FF7] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                powerful digital realities
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-300  leading-relaxed"
            >
              From concept to deployment — websites, apps, automation, and
              security made simple. Let us be the catalyst for your next big
              innovation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center -translate-y-10 xl:-translate-y-20"
          >
            <AnimatedLogo />
          </motion.div>
          <div className="flex flex-col">
                        <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start gap-4 mb-6 "
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:shadow-2xl hover:shadow-[#7B2FF7]/50 transition-all duration-300 text-lg px-8 py-6 group w-full sm:w-auto"
              >
                Let's Build Together
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="!bg-transparent !border-2 !border-white/20 hover:!bg-white/10 !text-white text-lg px-8 py-6 w-full sm:w-auto"
              >
                See Our Work
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="hidden lg:block"
            >
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FF7]/50 to-[#00C6FF]/50 blur-3xl rounded-full"></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: "Projects", value: "100+" },
                      { label: "Clients", value: "50+" },
                      { label: "Countries", value: "15+" },
                      { label: "Success", value: "99%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-xs mt-1">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="lg:hidden"
        >
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FF7]/50 to-[#00C6FF]/50 blur-3xl rounded-full"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Projects", value: "100+" },
                  { label: "Clients", value: "50+" },
                  { label: "Countries", value: "15+" },
                  { label: "Success Rate", value: "99%" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
