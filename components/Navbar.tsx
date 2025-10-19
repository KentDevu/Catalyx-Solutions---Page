"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Mission", href: "#mission" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact" },
  ];

  const [active, setActive] = useState<string>("Home");

  useEffect(() => {
    // Build mapping of elements (by id or data-nav) to nav link names
    const sections = navLinks
      .map((l) => {
        const key = l.href.replace('#', '');
        const elById = document.getElementById(key);
        const elByData = document.querySelector<HTMLElement>(`[data-nav="${key}"]`);
        const el = elById || elByData || null;
        return el ? { el, name: l.name } : null;
      })
      .filter(Boolean) as { el: HTMLElement; name: string }[];

    if (sections.length === 0) return;

    // IntersectionObserver marks sections when roughly centered in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the entry with the largest intersectionRatio that isIntersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const match = sections.find((s) => s.el === visible[0].target);
          if (match) setActive(match.name);
        } else {
          // if none intersecting, fallback to Home
          // (this happens when scrolled above first section)
          const y = window.scrollY;
          if (y <= 50) setActive('Home');
        }
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: [0.25, 0.5, 0.75] }
    );

    sections.forEach((s) => observer.observe(s.el));

    // also expose an updater for immediate checks (used when opening mobile menu)
    (window as any).__updateActiveSection = () => {
      const middle = window.scrollY + window.innerHeight / 2;
      for (const sec of sections) {
        const rect = sec.el.getBoundingClientRect();
        const top = window.scrollY + rect.top;
        const bottom = top + rect.height;
        if (middle >= top && middle <= bottom) {
          setActive(sec.name);
          return;
        }
      }
      setActive('Home');
    };

    // initial run
    (window as any).__updateActiveSection();

    return () => {
      observer.disconnect();
      try {
        delete (window as any).__updateActiveSection;
      } catch {}
    };
  }, []);

  return (
  <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Rocket className="w-8 h-8 text-[#7B2FF7]" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Catalyx Solutions
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActive(link.name)}
                className={`relative inline-block transition-colors duration-200 font-medium px-1 ${
                  active === link.name ? 'text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                <span
                  className={`block w-full h-0.5 bg-white rounded origin-left transform transition-transform duration-300 mt-1 ${
                    active === link.name ? 'scale-x-100' : 'scale-x-0'
                  }`} 
                />
              </motion.a>
            ))}
            <Button className="bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] hover:shadow-lg hover:shadow-[#7B2FF7]/50 transition-all duration-300">
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              // ensure active state is correct when menu opens
              if (!isMobileMenuOpen && (window as any).__updateActiveSection) {
                (window as any).__updateActiveSection();
              }
            }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative flex items-center w-full transition-colors duration-200 font-medium py-2 px-2 rounded-md ${
                  active === link.name ? 'bg-white/5 text-white' : 'text-gray-300 hover:text-white'
                }`}
              >
                <span
                  className={`inline-block w-3 h-3 rounded-full mr-3 transform transition-all duration-300 ${
                    active === link.name ? 'bg-[#7B2FF7] scale-100 shadow-md' : 'bg-transparent scale-75'
                  }`}
                />
                <span className="flex-1">{link.name}</span>
              </motion.a>
            ))}
            <Button className="w-full bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF]">
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
