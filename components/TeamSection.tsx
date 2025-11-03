"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import DecryptedText from "./DecryptedText";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Particles from "./Particles";
import Image from "next/image";

const team = [
  {
    name: "Eunile Jan Apo",
    role: "CEO & Founder",
    bio: "Nature lover",
    image: "/Me2.jpg",
    gradient: "from-[#7B2FF7] to-[#9D5CFF]",
    socials: { 
      linkedin: "https://www.linkedin.com/in/eunille-jan-019416276", 
      github: "https://github.com/eunille",
      portfolio: "https://eunile-jan-apo.vercel.app/"
    },
  },
  {
    name: "Kent Harold Belen",
    role: "CTO & Co-Founder",
    bio: "Coffee Enthusiast",
    image: "/dp.jpg",
    gradient: "from-[#00C6FF] to-[#00E5FF]",
    socials: { 
      linkedin: "https://www.linkedin.com/in/kent-harold-belen-492601328/",
      github: "https://github.com/Kentdevu",
      portfolio: "https://formalportfolio.vercel.app/"
    },
  },
  {
    name: "Ashley Kier Ferreol",
    role: "CMO & Co-Founder",
    bio: "I like thrifting",
    image: "/Ashley.png",
    gradient: "from-[#FF6B6B] to-[#FF8E53]",
    socials: { 
      linkedin: "https://www.linkedin.com/in/kierferreol/",
      github: "https://github.com/Ashlikiyer",
      portfolio: "https://ashley-kier-ferreol.vercel.app/"
    },
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Meet The </span>
            <span className="bg-gradient-to-r from-[#00C6FF] via-[#7B2FF7] to-[#FF6B6B] bg-clip-text text-transparent">
              Dream Team
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate innovators driving your digital transformation
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50, rotateY: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group perspective-1000"
            >
              <Card className="relative h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden transform-gpu hover:scale-105 hover:-rotate-1">
                {/* Avatar Image */}
                <div className="relative h-48 overflow-hidden">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Animated Circle Pattern - Background */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border border-white/30"
                        style={{
                          width: `${(i + 1) * 40}px`,
                          height: `${(i + 1) * 40}px`,
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 3,
                          delay: i * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                    <DecryptedText
                      text={member.name}
                      speed={20}
                      sequential={true}
                      revealDirection="start"
                      animateOn="view"
                      encryptedClassName="text-white/30"
                      className="text-white"
                    />
                  </h3>
                  
                  {/* Role Badge */}
                  <div className="mb-3 relative z-10">
                    <Badge className={`bg-gradient-to-r ${member.gradient} text-white border-0`}>
                      {member.role}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed relative z-10">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 relative z-10">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group/icon"
                      >
                        <Linkedin className="w-4 h-4 text-gray-400 group-hover/icon:text-[#00C6FF] transition-colors" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group/icon"
                      >
                        <Github className="w-4 h-4 text-gray-400 group-hover/icon:text-[#00C6FF] transition-colors" />
                      </a>
                    )}
                    {member.socials.portfolio && (
                      <a
                        href={member.socials.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group/icon"
                      >
                        <Mail className="w-4 h-4 text-gray-400 group-hover/icon:text-[#00C6FF] transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
              </Card>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
