"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ButtonPremium({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
  showSparkles = false,
  onClick,
}) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline:
      "border border-white/30 text-adaptive-primary hover:border-white/60 hover:bg-white/5",
  };

  const Component = href ? Link : motion.button;
  const motionProps = href
    ? {}
    : { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 } };

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`
        ${variants[variant]}
        ${className}
        constellation-glow
        inline-flex items-center justify-center gap-2
        text-sm sm:text-base font-semibold
        relative group
      `}
      style={{
        outline: "none",
        border: variant === "primary" ? "none" : undefined,
      }}
      {...motionProps}
    >
      {showSparkles && <Sparkles className="w-4 h-4 opacity-70" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </Component>
  );
}
