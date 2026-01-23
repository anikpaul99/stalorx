"use client";

import { useEffect, useRef, useState } from "react";

export default function ConstellationBackground() {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.body.classList.contains("dark"));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.8 + 0.8,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          opacity: Math.random() * 0.5 + 0.4,
        });
      }
    };

    const drawConstellations = () => {
      // Adaptive colors based on theme
      ctx.strokeStyle = isDark
        ? "rgba(99, 102, 241, 0.4)"
        : "rgba(99, 102, 241, 0.25)";
      ctx.lineWidth = 1.5;

      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.globalAlpha = (1 - distance / 150) * (isDark ? 0.5 : 0.35);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawConstellations();

      stars.forEach((star) => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        // Adaptive star color
        ctx.fillStyle = isDark
          ? `rgba(99, 102, 241, ${star.opacity})`
          : `rgba(99, 102, 241, ${star.opacity * 0.85})`;

        ctx.shadowBlur = isDark ? 10 : 8;
        ctx.shadowColor = isDark
          ? "rgba(99, 102, 241, 0.6)"
          : "rgba(99, 102, 241, 0.4)";
        ctx.fill();
        ctx.shadowBlur = 0;

        star.opacity += (Math.random() - 0.5) * 0.02;
        star.opacity = Math.max(
          0.3,
          Math.min(isDark ? 0.8 : 0.7, star.opacity),
        );
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="constellation-bg"
      style={{ position: "fixed", top: 0, left: 0, zIndex: 0 }}
    />
  );
}
