"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Github, Link } from "lucide-react";
import Image from "next/image";
import eunille from "../assets/Me2.jpg";
import kent from "../assets/dp.jpg";
import ashley from "../assets/Ashley.png";

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Eunile Jan Apo",
      role: "CEO & Founder",
      funFact: "Tomby Lover",
      initials: "EJ",
      image: eunille,
      gradient: "from-[#7B2FF7] to-[#9D5CFF]",
      linkedIn: "www.linkedin.com/in/eunille-jan-019416276",
      github: "https://github.com/eunille",
      portfolio: "https://eunile-jan-apo.vercel.app/",
    },
    {
      name: "Kent Harold Belen",
      role: "CTO & Co-Founder",
      funFact: "Coffee Enthusiast",
      initials: "KH",
      image: kent,
      gradient: "from-[#00C6FF] to-[#00E5FF]",
      linkedIn: "https://www.linkedin.com/in/kent-harold-belen-492601328/",
      github: "https://github.com/Kentdevu",
      portfolio: "https://formalportfolio.vercel.app/",
    },
    {
      name: "Ashley Kier Ferreol",
      role: "CMO & Co-Founder",
      funFact: "Clout Chaser",
      initials: "AK",
      image: ashley,
      gradient: "from-[#FF6B6B] to-[#FF8E53]",
      linkedIn: "https://www.linkedin.com/in/kierferreol/",
      github: "https://github.com/Ashlikiyer",
      portfolio: "https://ashley-kier-ferreol.vercel.app/",
    },
  ];

  return (
    <section id="team" ref={ref} className="py-32 relative overflow-hidden bg-black">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7B2FF7]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C6FF]/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet Our{' '}
            <span className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Passionate experts dedicated to your success</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-3xl`} />

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2">
                  <div className="flex flex-col items-center text-center">
                    {member.image ? (
                      <div className="w-32 h-32 rounded-full overflow-hidden mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Image src={member.image} alt={`${member.name} avatar`} width={128} height={128} className="w-32 h-32 object-cover" />
                      </div>
                    ) : (
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-4xl font-bold text-white">{member.initials}</span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#00C6FF] text-sm font-medium mb-4">{member.role}</p>

                    <div className="bg-white/5 rounded-xl p-3 mb-4 w-full">
                      <p className="text-gray-400 text-sm italic">{member.funFact}</p>
                    </div>

                    <div className="flex space-x-3">
                      <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300">
                        <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                      </a>

                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300">
                        <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                      </a>

                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-all duration-300">
                        <Link className="w-4 h-4 text-gray-400 hover:text-white transition-colors" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}