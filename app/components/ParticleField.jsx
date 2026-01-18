// "use client";

// import { useEffect, useState } from "react";

// export default function ParticleField() {
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     const particleCount = 30;
//     const newParticles = Array.from({ length: particleCount }, (_, i) => ({
//       id: i,
//       left: `${Math.random() * 100}%`,
//       animationDelay: `${Math.random() * 20}s`,
//       animationDuration: `${20 + Math.random() * 20}s`,
//       size: Math.random() > 0.5 ? "2px" : "3px",
//     }));
//     setParticles(newParticles);
//   }, []);

//   return (
//     <div className="particles-container">
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="particle"
//           style={{
//             left: particle.left,
//             animationDelay: particle.animationDelay,
//             animationDuration: particle.animationDuration,
//             width: particle.size,
//             height: particle.size,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// "use client";

// import { useMemo } from "react";

// export default function ParticleField() {
//   // Generate particles once during render, not in useEffect
//   const particles = useMemo(() => {
//     const particleCount = 30;
//     return Array.from({ length: particleCount }, (_, i) => ({
//       id: i,
//       left: `${Math.random() * 100}%`,
//       animationDelay: `${Math.random() * 20}s`,
//       animationDuration: `${20 + Math.random() * 20}s`,
//       size: Math.random() > 0.5 ? "2px" : "3px",
//     }));
//   }, []); // Empty dependency array means this only runs once

//   return (
//     <div className="particles-container">
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="particle"
//           style={{
//             left: particle.left,
//             animationDelay: particle.animationDelay,
//             animationDuration: particle.animationDuration,
//             width: particle.size,
//             height: particle.size,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// FILE: app/components/ParticleField.jsx
"use client";

export default function ParticleField() {
  // Pre-generated particles (no Math.random during render)
  const particles = [
    { id: 0, left: "23%", delay: "0s", duration: "35s", size: "2px" },
    { id: 1, left: "67%", delay: "5s", duration: "28s", size: "3px" },
    { id: 2, left: "89%", delay: "12s", duration: "32s", size: "2px" },
    { id: 3, left: "12%", delay: "8s", duration: "38s", size: "3px" },
    { id: 4, left: "45%", delay: "15s", duration: "25s", size: "2px" },
    { id: 5, left: "78%", delay: "3s", duration: "30s", size: "3px" },
    { id: 6, left: "34%", delay: "18s", duration: "27s", size: "2px" },
    { id: 7, left: "56%", delay: "7s", duration: "33s", size: "3px" },
    { id: 8, left: "91%", delay: "11s", duration: "29s", size: "2px" },
    { id: 9, left: "8%", delay: "16s", duration: "36s", size: "3px" },
    { id: 10, left: "42%", delay: "2s", duration: "31s", size: "2px" },
    { id: 11, left: "73%", delay: "14s", duration: "26s", size: "3px" },
    { id: 12, left: "19%", delay: "9s", duration: "34s", size: "2px" },
    { id: 13, left: "61%", delay: "6s", duration: "37s", size: "3px" },
    { id: 14, left: "85%", delay: "13s", duration: "24s", size: "2px" },
    { id: 15, left: "28%", delay: "4s", duration: "39s", size: "3px" },
    { id: 16, left: "52%", delay: "17s", duration: "28s", size: "2px" },
    { id: 17, left: "94%", delay: "1s", duration: "32s", size: "3px" },
    { id: 18, left: "15%", delay: "10s", duration: "35s", size: "2px" },
    { id: 19, left: "48%", delay: "19s", duration: "27s", size: "3px" },
    { id: 20, left: "70%", delay: "5s", duration: "30s", size: "2px" },
    { id: 21, left: "36%", delay: "12s", duration: "33s", size: "3px" },
    { id: 22, left: "82%", delay: "8s", duration: "29s", size: "2px" },
    { id: 23, left: "25%", delay: "15s", duration: "31s", size: "3px" },
    { id: 24, left: "58%", delay: "3s", duration: "26s", size: "2px" },
    { id: 25, left: "88%", delay: "11s", duration: "34s", size: "3px" },
    { id: 26, left: "10%", delay: "7s", duration: "37s", size: "2px" },
    { id: 27, left: "44%", delay: "16s", duration: "25s", size: "3px" },
    { id: 28, left: "76%", delay: "2s", duration: "38s", size: "2px" },
    { id: 29, left: "31%", delay: "14s", duration: "28s", size: "3px" },
  ];

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  );
}
