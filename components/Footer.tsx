"use client";

import { Rocket } from "lucide-react";

export default function Footer() {
  return (
  <footer className="relative border-t border-white/10 bg-black section-sm">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7B2FF7] to-transparent"></div>

      <div className="site-container py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <Rocket className="w-6 h-6 text-[#7B2FF7]" />
            <span className="text-lg font-bold bg-gradient-to-r from-[#7B2FF7] to-[#00C6FF] bg-clip-text text-transparent">
              Catalyx Solutions
            </span>
          </div>

          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Catalyx Solutions — All Rights Reserved
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
