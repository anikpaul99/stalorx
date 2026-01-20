"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ButtonPremium({
  children,
  href = "#",
  variant = "primary",
  showArrow = false,
  showSparkles = false,
  className = "",
}) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  const content = (
    <>
      {showSparkles && <Sparkles className="w-4 h-4" />}
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${variants[variant]} inline-flex items-center justify-center gap-2 ${className}`}
    >
      {content}
    </motion.a>
  );
}
