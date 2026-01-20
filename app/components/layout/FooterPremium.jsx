"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FooterPremium() {
  return (
    <footer className="relative z-10 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-nebula-purple to-nebula-blue 
                       flex items-center justify-center text-xl font-black"
            >
              S
            </motion.div>
            <div>
              <div className="text-xl font-black text-white">StalorX</div>
              <div className="text-xs text-stardust">Software Solutions</div>
            </div>
          </Link>

          {/* Copyright */}
          <div className="text-silver text-sm flex items-center gap-2">
            © 2026 StalorX. Crafted with{" "}
            <Heart className="w-4 h-4 text-nebula-purple" /> in Bangladesh
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-silver hover:text-platinum transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-silver hover:text-platinum transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
