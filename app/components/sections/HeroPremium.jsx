"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import ButtonPremium from "../ui/ButtonPremium";
import SectionPremium from "../ui/SectionPremium";
import { STATS } from "@/lib/constants";

export default function HeroPremium() {
  return (
    <SectionPremium className="min-h-screen flex items-center pt-20">
      <div className="w-full text-center space-y-8">
        {/* Premium Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <div className="glass-premium px-6 py-3 rounded-full inline-flex items-center gap-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 text-constellation-gold" />
            <span className="text-platinum">
              Transforming Ideas Into Digital Reality
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight">
            <span className="block text-white mb-4">Build The Future</span>
            <span className="block text-constellation">With Stalorx</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl lg:text-2xl text-silver max-w-3xl mx-auto leading-relaxed"
        >
          We craft extraordinary digital experiences that drive growth, delight
          users, and stand the test of time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <ButtonPremium
            href="#contact"
            variant="primary"
            showArrow
            showSparkles
          >
            Let&apos;s Talk
          </ButtonPremium>
          <ButtonPremium href="#services" variant="secondary">
            View Our Work
          </ButtonPremium>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-20 max-w-5xl mx-auto"
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
              className="space-y-2"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-constellation">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-stardust font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="pt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-stardust"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-stardust to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </SectionPremium>
  );
}
