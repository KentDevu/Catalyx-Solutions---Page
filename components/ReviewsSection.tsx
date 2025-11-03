"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import DecryptedText from "./DecryptedText";

const testimonials = [
  {
    name: "David Park",
    role: "CEO, TechFlow Inc",
    company: "TechFlow",
    rating: 5,
    text: "Catalyx transformed our outdated system into a modern, scalable platform. The team's expertise and dedication exceeded our expectations.",
    gradient: "from-blue-500 to-cyan-500",
    initials: "DP",
  },
  {
    name: "Maria Rodriguez",
    role: "Founder, HealthTech Solutions",
    company: "HealthTech",
    rating: 5,
    text: "Working with Catalyx was a game-changer. They delivered our mobile app ahead of schedule with features we didn't even know we needed.",
    gradient: "from-purple-500 to-pink-500",
    initials: "MR",
  },
  {
    name: "James Wilson",
    role: "CTO, FinanceHub",
    company: "FinanceHub",
    rating: 5,
    text: "The security solutions provided by Catalyx gave us peace of mind. Their attention to detail and proactive approach is unmatched.",
    gradient: "from-green-500 to-emerald-500",
    initials: "JW",
  },
  {
    name: "Sarah Chen",
    role: "Director, E-Commerce Plus",
    company: "E-Commerce Plus",
    rating: 5,
    text: "Our conversion rate increased by 150% after the redesign. Catalyx understands both technology and business needs perfectly.",
    gradient: "from-orange-500 to-red-500",
    initials: "SC",
  },
  {
    name: "Michael Thompson",
    role: "VP Engineering, DataSync",
    company: "DataSync",
    rating: 5,
    text: "The automation solutions reduced our processing time by 80%. Best investment we've made in our infrastructure.",
    gradient: "from-indigo-500 to-purple-500",
    initials: "MT",
  },
  {
    name: "Lisa Anderson",
    role: "Product Manager, CloudScale",
    company: "CloudScale",
    rating: 5,
    text: "Responsive, professional, and incredibly talented. They turned our vision into reality and then some.",
    gradient: "from-pink-500 to-rose-500",
    initials: "LA",
  },
];

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/60 -z-10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C6FF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B2FF7]/10 rounded-full blur-3xl" />
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
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-[#00C6FF] to-[#7B2FF7] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real feedback from real clients who transformed their businesses
          </p>
        </motion.div>

        {/* Testimonials Grid - 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="relative h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden p-6 flex flex-col">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Quote Icon */}
                <div className="relative z-10 mb-4">
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${testimonial.gradient} opacity-80`}>
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 fill-yellow-400 text-yellow-400`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 relative z-10">
                  <Avatar className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient} border-2 border-white/20`}>
                    <AvatarFallback className="bg-transparent text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-white text-sm">
                      <DecryptedText
                        text={testimonial.name}
                        speed={20}
                        sequential={true}
                        revealDirection="start"
                        animateOn="view"
                        encryptedClassName="text-white/30"
                        className="text-white"
                      />
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-gray-500">
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            Ready to join our success stories?{" "}
            <a
              href="#contact"
              className="text-[#00C6FF] hover:text-[#7B2FF7] transition-colors font-semibold underline decoration-dotted underline-offset-4"
            >
              Let's talk
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
