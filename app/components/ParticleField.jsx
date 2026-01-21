"use client";

export default function ParticleField() {
  const particles = [
    { id: 0, left: "15%", delay: "0s", duration: "28s" },
    { id: 1, left: "45%", delay: "3s", duration: "32s" },
    { id: 2, left: "75%", delay: "7s", duration: "26s" },
    { id: 3, left: "25%", delay: "5s", duration: "30s" },
    { id: 4, left: "85%", delay: "2s", duration: "34s" },
    { id: 5, left: "55%", delay: "9s", duration: "29s" },
    { id: 6, left: "10%", delay: "6s", duration: "31s" },
    { id: 7, left: "65%", delay: "4s", duration: "27s" },
    { id: 8, left: "90%", delay: "8s", duration: "33s" },
    { id: 9, left: "35%", delay: "1s", duration: "28s" },
    { id: 10, left: "20%", delay: "10s", duration: "30s" },
    { id: 11, left: "70%", delay: "3s", duration: "29s" },
    { id: 12, left: "50%", delay: "7s", duration: "31s" },
    { id: 13, left: "80%", delay: "5s", duration: "27s" },
    { id: 14, left: "40%", delay: "2s", duration: "32s" },
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
          }}
        />
      ))}
    </div>
  );
}
