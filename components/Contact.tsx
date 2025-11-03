"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Twitter, Send, Rocket, ArrowRight, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 relative overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#7B2FF7]/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#00C6FF]/20 rounded-full blur-[120px]"></div>
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s talk about it
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FF7]/20 to-[#00C6FF]/20 blur-2xl rounded-3xl"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      placeholder="John Doe"
                      className="bg-white/5 border-white/10 focus:border-[#7B2FF7] text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/10 focus:border-[#7B2FF7] text-white placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="bg-white/5 border-white/10 focus:border-[#7B2FF7] text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:shadow-xl hover:shadow-[#7B2FF7]/50 transition-all duration-300 group">
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                We&apos;re always excited to discuss new projects and opportunities.
                Reach out through the form or connect with us on social media.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@catalyxsolutions.com"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B2FF7] to-[#00C6FF] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="text-white font-medium">
                    catalyxstartup@gmail.com
                  </div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/catalyx-solutions/" },
                  { icon: Facebook, href: "https://www.facebook.com/share/1JGAWmw7Ps/" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA card moved below the contact form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B2FF7]/30 via-[#00C6FF]/30 to-[#7B2FF7]/30 blur-3xl rounded-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7B2FF7] to-[#00C6FF] flex items-center justify-center mx-auto mb-6"
              >
                <Rocket className="w-8 h-8 text-white" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-white mb-3"
              >
                Let&apos;s bring your{" "}
                <span className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
                  idea to life
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-md text-gray-300 mb-6 max-w-2xl mx-auto"
              >
                Ready to transform your vision into reality? Join 50+ satisfied
                clients who trusted us with their digital journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:shadow-2xl hover:shadow-[#7B2FF7]/50 transition-all duration-300 text-lg px-8 py-4 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
