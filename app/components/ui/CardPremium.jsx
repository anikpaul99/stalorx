"use client";

import { motion } from "framer-motion";

export default function CardPremium({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`card-clean p-6 sm:p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}
