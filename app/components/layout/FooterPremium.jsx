"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FooterPremium() {
  return (
    <footer className="relative z-10 border-t border-border-gray py-12 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-xl font-black shadow-md"
            >
              <span className="text-white">S</span>
            </motion.div>
            <div>
              <div className="text-xl font-black text-text-black">StalorX</div>
              <div className="text-xs text-text-light">Software Solutions</div>
            </div>
          </Link>

          <div className="text-text-gray text-sm flex items-center gap-2">
            © 2026 StalorX. Crafted with{" "}
            <Heart className="w-4 h-4 text-brand-blue fill-brand-blue" /> in
            Bangladesh
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-text-gray hover:text-text-black transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-text-gray hover:text-text-black transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
