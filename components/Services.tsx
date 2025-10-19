"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Smartphone, Zap, Shield } from "lucide-react";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Globe,
      title: "Website Creation",
      description:
        "Stunning, responsive websites that captivate your audience and drive results. From landing pages to complex web applications.",
      gradient: "from-[#7B2FF7] to-[#9D5CFF]",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android devices.",
      gradient: "from-[#00C6FF] to-[#00E5FF]",
    },
    {
      icon: Zap,
      title: "Automation Solutions",
      description:
        "Streamline your workflows and boost productivity with intelligent automation that saves time and reduces errors.",
      gradient: "from-[#FF6B6B] to-[#FF8E53]",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Protect your digital assets with comprehensive security solutions, from penetration testing to ongoing monitoring.",
      gradient: "from-[#4ECDC4] to-[#44A08D]",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-32 relative overflow-hidden bg-black"
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#7B2FF7]/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-[150px]"></div>

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
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end solutions tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-3xl`}
              ></div>
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 h-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
