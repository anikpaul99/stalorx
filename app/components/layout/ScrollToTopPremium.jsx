// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronUp } from "lucide-react";

// export default function ScrollToTopPremium() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShow(window.scrollY > 400);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.button
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0, opacity: 0 }}
//           whileHover={{ scale: 1.1, y: -4 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full
//                    bg-gradient-to-br from-nebula-purple to-nebula-blue
//                    flex items-center justify-center shadow-2xl constellation-glow"
//           aria-label="Scroll to top"
//         >
//           <ChevronUp className="w-6 h-6 text-white" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronUp } from "lucide-react";

// export default function ScrollToTopPremium() {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setShow(window.scrollY > 400);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <AnimatePresence>
//       {show && (
//         <motion.button
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0, opacity: 0 }}
//           whileHover={{ scale: 1.1, y: -4 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full
//                    bg-gradient-to-br from-nebula-purple to-nebula-blue
//                    flex items-center justify-center shadow-2xl constellation-glow"
//           aria-label="Scroll to top"
//         >
//           <ChevronUp className="w-6 h-6 text-white" />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopPremium() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  if (!show) return null;
  return (
    <button
      onClick={scrollToTop}
      style={{ position: "fixed", bottom: "2rem", right: "2rem", zIndex: 9999 }}
      className="w-14 h-14 rounded-full bg-gradient-to-br from-nebula-purple to-nebula-blue flex items-center justify-center shadow-2xl hover:scale-110 transition-all constellation-glow"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </button>
  );
}
