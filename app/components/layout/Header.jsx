"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "Team", "Contact"];

  return (
    <nav
      className={`
      fixed w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-lg shadow-2xl"
          : "bg-transparent"
      }
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-black shadow-lg group-hover:scale-110 transition-transform">
              S
            </div>
            <div>
              <div className="text-lg sm:text-2xl font-black tracking-tight">
                StalorX
              </div>
              <div className="text-[10px] sm:text-xs text-purple-300 tracking-widest uppercase">
                Software
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold hover:text-purple-400 transition-colors"
              >
                {item}
              </Link>
            ))}
            <Button href="#contact" variant="primary">
              Start Project
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-lg border-t border-purple-500/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-semibold hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Button
              href="#contact"
              variant="primary"
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Project
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
