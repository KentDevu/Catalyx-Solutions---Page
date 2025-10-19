"use client";

import { motion } from "framer-motion";
import { Zap, Code2, Rocket, Shield } from "lucide-react";

export default function AnimatedLogo() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="relative w-80 h-80"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7B2FF7]/30 to-[#00C6FF]/30 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-8 rounded-full border-2 border-[#7B2FF7]/30"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#9D5CFF] flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-16 rounded-full border-2 border-[#00C6FF]/30"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
            animate={{
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00C6FF] to-[#00E5FF] flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-24 rounded-full border-2 border-[#FF6B6B]/30"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7B2FF7] via-[#00C6FF] to-[#4ECDC4] flex items-center justify-center relative overflow-hidden"
            animate={{
              boxShadow: [
                "0 0 20px rgba(123, 47, 247, 0.5)",
                "0 0 60px rgba(0, 198, 255, 0.8)",
                "0 0 20px rgba(123, 47, 247, 0.5)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <Shield className="w-16 h-16 text-white relative z-10" />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-1/4 left-0 w-3 h-3 rounded-full bg-[#7B2FF7]"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-2 h-2 rounded-full bg-[#00C6FF]"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[#4ECDC4]"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>
    </div>
  );
}
