"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO, TechFlow Inc",
      content:
        "Catalyx Solutions transformed our outdated system into a modern, scalable platform. Their expertise and dedication exceeded all expectations. Highly recommended!",
      rating: 5,
    },
    {
      name: "David Kim",
      role: "Founder, StartupLab",
      content:
        "Working with Catalyx was a game-changer. They took our concept and built a stunning app that our users love. The team is professional, creative, and delivers on time.",
      rating: 5,
    },
    {
      name: "Rachel Thompson",
      role: "CTO, FinanceHub",
      content:
        "The automation solutions provided by Catalyx saved us countless hours. Their technical skills and problem-solving abilities are truly world-class.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Director, SecureNet",
      content:
        "Catalyx's cybersecurity expertise gave us peace of mind. They identified vulnerabilities we didn't know existed and implemented robust solutions.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-gray-900"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#7B2FF7]/10 to-[#00C6FF]/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Client{" "}
            <span className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Reviews
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our clients say about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7]/20 to-[#00C6FF]/20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
                <Quote className="w-16 h-16 text-[#7B2FF7]/30 mb-6" />

                <div className="flex mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-[#00C6FF] text-[#00C6FF]"
                      />
                    )
                  )}
                </div>

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {testimonials[currentIndex].content}
                </p>

                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#00C6FF] flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-white">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-white/20 hover:bg-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] w-8"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-white/20 hover:bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
