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
        card-clean rounded-3xl p-6 sm:p-8
        ${className}
        relative overflow-hidden group
      `}
      style={{ outline: "none" }}
    >
      {/* Shimmer effect */}
      <div className="shimmer" />
      {children}
    </motion.div>
  );
}
