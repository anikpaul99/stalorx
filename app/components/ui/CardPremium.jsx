"use client";

import { motion } from "framer-motion";

export default function CardPremium({
  children,
  className = "",
  hover = true,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8 } : {}}
      className={`
        glass-premium rounded-3xl p-6 sm:p-8
        ${hover ? "card-premium-hover" : ""}
        ${className}
        relative overflow-hidden
      `}
    >
      {/* Shimmer effect */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
      />
      {children}
    </motion.div>
  );
}
