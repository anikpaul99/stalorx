"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function FooterPremium() {
  return (
    <footer className="relative z-10 border-t py-12 glass-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-xl font-black shadow-md"
              style={{ outline: "none" }}
            >
              <span className="text-white">S</span>
            </motion.div>
            <div>
              <div className="text-xl font-black text-adaptive-primary">
                StalorX
              </div>
              <div className="text-xs text-adaptive-tertiary">
                Software Solutions
              </div>
            </div>
          </Link>

          <div className="text-adaptive-secondary text-sm flex items-center gap-2">
            © 2026 StalorX. Crafted with{" "}
            <Heart className="w-4 h-4 text-brand-purple fill-brand-purple" /> in
            Bangladesh
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-adaptive-secondary hover:text-adaptive-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-adaptive-secondary hover:text-adaptive-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
