"use client";

import { motion } from "framer-motion";
import SectionPremium from "../ui/SectionPremium";
import { TECH_STACK } from "@/lib/constants";

export default function TechStackPremium() {
  return (
    <SectionPremium>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
          <span className="text-adaptive-primary">Powered By </span>
          <span className="text-gradient-brand">Cutting-Edge Tech</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3">
        {TECH_STACK.map((tech, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 sm:px-6 py-2 sm:py-3 glass-premium rounded-full text-sm sm:text-base font-medium text-adaptive-secondary hover:glass-strong transition-all cursor-default constellation-glow"
            style={{ outline: "none" }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </SectionPremium>
  );
}
