"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function HeaderPremium() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Services", href: "services" },
    { name: "Team", href: "team" },
    { name: "Contact", href: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "glass-premium"
      }`}
      style={{ outline: "none", border: "none" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 group cursor-pointer"
            style={{ outline: "none", border: "none" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-2xl font-black shadow-md"
              style={{ outline: "none" }}
            >
              <span className="text-white">S</span>
            </motion.div>
            <div>
              <div className="text-2xl font-black text-adaptive-primary tracking-tight">
                StalorX
              </div>
              <div className="text-xs text-adaptive-tertiary uppercase tracking-wider">
                Software Solutions
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-semibold text-adaptive-secondary hover:text-adaptive-primary transition-colors cursor-pointer relative group"
                style={{ outline: "none", border: "none" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-purple to-brand-blue group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}

            <ThemeToggle />

            <div
              onClick={() => scrollToSection("contact")}
              className="btn-primary cursor-pointer inline-flex items-center justify-center gap-2 text-sm"
              style={{ outline: "none", border: "none" }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Project</span>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center cursor-pointer"
              style={{ outline: "none", border: "none" }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-adaptive-primary" />
              ) : (
                <Menu className="w-6 h-6 text-adaptive-primary" />
              )}
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mobile-menu-enhanced"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-lg font-semibold text-adaptive-primary hover:text-brand-purple transition-colors py-2 cursor-pointer"
                  style={{ outline: "none", border: "none" }}
                >
                  {item.name}
                </div>
              ))}
              <div
                onClick={() => scrollToSection("contact")}
                className="w-full btn-primary cursor-pointer inline-flex items-center justify-center gap-2 text-sm mt-4"
                style={{ outline: "none", border: "none" }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Project</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
