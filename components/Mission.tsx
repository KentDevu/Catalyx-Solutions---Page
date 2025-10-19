"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="mission"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwQzZGRiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Mission & Vision
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Guided by purpose, driven by innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7B2FF7] to-[#7B2FF7]/50 flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Empowering innovators through technology that matters. We
                  believe every great idea deserves the perfect digital
                  foundation to thrive and make a real impact in the world.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C6FF]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C6FF] to-[#00C6FF]/50 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">Vision</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the driving force behind the world&apos;s next big digital
                  ideas. We envision a future where innovation knows no bounds
                  and technology serves as the ultimate catalyst for change.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
