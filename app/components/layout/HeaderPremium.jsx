// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Menu, X, Sparkles } from "lucide-react";
// import ButtonPremium from "../ui/ButtonPremium";

// export default function HeaderPremium() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "Services", href: "#services" },
//     { name: "Team", href: "#team" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         scrolled ? "glass-strong shadow-2xl" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <motion.div
//               whileHover={{ scale: 1.05, rotate: 5 }}
//               className="w-12 h-12 rounded-2xl bg-gradient-to-br from-nebula-purple to-nebula-blue
//                        flex items-center justify-center text-2xl font-black shadow-lg constellation-glow"
//             >
//               S
//             </motion.div>
//             <div>
//               <div className="text-2xl font-black text-white tracking-tight">
//                 Stalorx
//               </div>
//               <div className="text-xs text-stardust uppercase tracking-widest">
//                 Software
//               </div>
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item, idx) => (
//               <motion.a
//                 key={item.name}
//                 href={item.href}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="text-sm font-semibold text-platinum hover:text-white transition-colors relative group"
//               >
//                 {item.name}
//                 <span
//                   className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-nebula-purple to-nebula-blue
//                                group-hover:w-full transition-all duration-300"
//                 />
//               </motion.a>
//             ))}
//             <ButtonPremium href="#contact" variant="primary" showSparkles>
//               Start Project
//             </ButtonPremium>
//           </div>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden w-10 h-10 glass-premium rounded-xl flex items-center justify-center"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </motion.button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass-strong border-t border-white/10"
//           >
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item, idx) => (
//                 <motion.a
//                   key={item.name}
//                   href={item.href}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="block text-lg font-semibold text-platinum hover:text-white transition-colors py-2"
//                 >
//                   {item.name}
//                 </motion.a>
//               ))}
//               <ButtonPremium
//                 href="#contact"
//                 variant="primary"
//                 className="w-full"
//                 onClick={() => setIsMenuOpen(false)}
//                 showSparkles
//               >
//                 Start Project
//               </ButtonPremium>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }
//v2 (nav pop up issue fixed but hamburger doesn't work)
// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Menu, X, Sparkles } from "lucide-react";

// export default function HeaderPremium() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "home" },
//     { name: "Services", href: "services" },
//     { name: "Team", href: "team" },
//     { name: "Contact", href: "contact" },
//   ];

//   const scrollToSection = (sectionId) => {
//     setIsMenuOpen(false);
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - offset;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl" : "bg-transparent"}`}
//       style={{ outline: "none", border: "none" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <button
//             onClick={() => scrollToSection("home")}
//             className="flex items-center gap-3 group cursor-pointer bg-transparent border-none outline-none"
//           >
//             <motion.div
//               whileHover={{ scale: 1.05, rotate: 5 }}
//               className="w-12 h-12 rounded-2xl bg-gradient-to-br from-nebula-purple to-nebula-blue flex items-center justify-center text-2xl font-black shadow-lg constellation-glow"
//             >
//               S
//             </motion.div>
//             <div>
//               <div className="text-2xl font-black text-white tracking-tight">
//                 Stalorx
//               </div>
//               <div className="text-xs text-stardust uppercase tracking-widest">
//                 Software
//               </div>
//             </div>
//           </button>

//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item, idx) => (
//               <motion.button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: idx * 0.1 }}
//                 className="text-sm font-semibold text-platinum hover:text-white transition-colors relative group bg-transparent border-none outline-none cursor-pointer"
//                 style={{ outline: "none" }}
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-nebula-purple to-nebula-blue group-hover:w-full transition-all duration-300" />
//               </motion.button>
//             ))}
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white border-0 inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full outline-none"
//               style={{ outline: "none" }}
//             >
//               <Sparkles className="w-4 h-4" />
//               <span>Start Project</span>
//             </button>
//           </div>

//           <motion.button
//             whileTap={{ scale: 0.9 }}
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden w-10 h-10 glass-premium rounded-xl flex items-center justify-center outline-none"
//             aria-label="Toggle menu"
//             style={{ outline: "none" }}
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </motion.button>
//         </div>
//       </div>

//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             className="md:hidden glass-strong border-t border-white/10"
//           >
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item, idx) => (
//                 <motion.button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: idx * 0.1 }}
//                   className="block w-full text-left text-lg font-semibold text-platinum hover:text-white transition-colors py-2 bg-transparent border-none outline-none cursor-pointer"
//                   style={{ outline: "none" }}
//                 >
//                   {item.name}
//                 </motion.button>
//               ))}
//               <button
//                 onClick={() => scrollToSection("contact")}
//                 className="w-full btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white border-0 inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full outline-none"
//                 style={{ outline: "none" }}
//               >
//                 <Sparkles className="w-4 h-4" />
//                 <span>Start Project</span>
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }

//v3 (nav pop up issue remains but hamburger works)
// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, Sparkles } from "lucide-react";

// export default function HeaderPremium() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { name: "Home", href: "home" },
//     { name: "Services", href: "services" },
//     { name: "Team", href: "team" },
//     { name: "Contact", href: "contact" },
//   ];

//   const handleClick = (e, sectionId) => {
//     e.preventDefault();
//     setIsMenuOpen(false);
//     setTimeout(() => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         const offset = 80;
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - offset;
//         window.scrollTo({ top: offsetPosition, behavior: "smooth" });
//       }
//     }, 100);
//   };

//   return (
//     <nav
//       className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl" : "bg-transparent"}`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           <div
//             onClick={(e) => handleClick(e, "home")}
//             className="flex items-center gap-3 group cursor-pointer"
//           >
//             <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-nebula-purple to-nebula-blue flex items-center justify-center text-2xl font-black shadow-lg constellation-glow hover:scale-105 transition-transform">
//               S
//             </div>
//             <div>
//               <div className="text-2xl font-black text-white tracking-tight">
//                 Stalorx
//               </div>
//               <div className="text-xs text-stardust uppercase tracking-widest">
//                 Software
//               </div>
//             </div>
//           </div>

//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <div
//                 key={item.name}
//                 onClick={(e) => handleClick(e, item.href)}
//                 className="text-sm font-semibold text-platinum hover:text-white transition-colors relative group cursor-pointer"
//               >
//                 {item.name}
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-nebula-purple to-nebula-blue group-hover:w-full transition-all duration-300" />
//               </div>
//             ))}
//             <div
//               onClick={(e) => handleClick(e, "contact")}
//               className="btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white border-0 inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full cursor-pointer"
//             >
//               <Sparkles className="w-4 h-4" />
//               <span>Start Project</span>
//             </div>
//           </div>

//           <div
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden w-10 h-10 glass-premium rounded-xl flex items-center justify-center cursor-pointer"
//           >
//             {isMenuOpen ? (
//               <X className="w-6 h-6" />
//             ) : (
//               <Menu className="w-6 h-6" />
//             )}
//           </div>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="md:hidden glass-strong border-t border-white/10">
//           <div className="px-4 py-6 space-y-4">
//             {navItems.map((item) => (
//               <div
//                 key={item.name}
//                 onClick={(e) => handleClick(e, item.href)}
//                 className="block w-full text-left text-lg font-semibold text-platinum hover:text-white transition-colors py-2 cursor-pointer"
//               >
//                 {item.name}
//               </div>
//             ))}
//             <div
//               onClick={(e) => handleClick(e, "contact")}
//               className="w-full btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white border-0 inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full cursor-pointer"
//             >
//               <Sparkles className="w-4 h-4" />
//               <span>Start Project</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

//v4
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

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
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "glass-strong shadow-2xl" : "bg-transparent"}`}
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
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-12 h-12 rounded-2xl bg-gradient-to-br from-nebula-purple to-nebula-blue flex items-center justify-center text-2xl font-black shadow-lg constellation-glow"
              style={{ outline: "none" }}
            >
              S
            </motion.div>
            <div>
              <div className="text-2xl font-black text-white tracking-tight">
                Stalorx
              </div>
              <div className="text-xs text-stardust uppercase tracking-widest">
                Software
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-semibold text-platinum hover:text-white transition-colors relative group cursor-pointer"
                style={{ outline: "none", border: "none" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-nebula-purple to-nebula-blue group-hover:w-full transition-all duration-300" />
              </motion.div>
            ))}
            <div
              onClick={() => scrollToSection("contact")}
              className="btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white border-0 inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full cursor-pointer"
              style={{ outline: "none", border: "none" }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Project</span>
            </div>
          </div>

          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 glass-premium rounded-xl flex items-center justify-center cursor-pointer"
            aria-label="Toggle menu"
            style={{ outline: "none", border: "none" }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="block w-full text-left text-lg font-semibold text-platinum hover:text-white transition-colors py-2 cursor-pointer"
                  style={{ outline: "none", border: "none" }}
                >
                  {item.name}
                </motion.div>
              ))}
              <div
                onClick={() => scrollToSection("contact")}
                className="w-full btn-premium constellation-glow bg-gradient-to-r from-nebula-purple to-nebula-blue text-white border-0 inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3 rounded-full cursor-pointer"
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
