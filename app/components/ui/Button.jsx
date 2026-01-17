import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105",
    secondary: "border-2 border-purple-500 hover:bg-purple-500/10",
    ghost: "hover:bg-white/5",
  };

  const Component = href ? Link : "button";

  return (
    <Component
      href={href || "#"}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {showArrow && (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </Component>
  );
}
