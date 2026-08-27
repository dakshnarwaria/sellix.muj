"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Smooth scroll transformations for parallax objects
  const smoothY1 = useTransform(scrollY, [0, 2000], [0, -250]);
  const smoothY2 = useTransform(scrollY, [0, 2000], [0, 300]);
  const smoothY3 = useTransform(scrollY, [0, 2000], [0, -180]);
  const smoothRotate = useTransform(scrollY, [0, 2000], [0, 360]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.03;
      const moveY = (clientY - window.innerHeight / 2) * 0.03;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Cartoon Element 1: Smiling Oval Badge (Inspired by top center mascot) */}
      <motion.div
        style={{ y: smoothY1 }}
        animate={{
          x: mousePos.x * 1.5,
          y: mousePos.y * 1.5,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-[12%] left-[5%] w-24 h-24 md:w-32 md:h-32 opacity-15 dark:opacity-20 text-[#E31B23]"
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <rect x="15" y="10" width="70" height="80" rx="35" className="fill-[#E31B23]" />
          <circle cx="38" cy="40" r="5" fill="white" />
          <circle cx="62" cy="40" r="5" fill="white" />
          <path d="M 35 60 Q 50 75 65 60" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>

      {/* Cartoon Element 2: Ghost Creature Shape (Top right mascot) */}
      <motion.div
        style={{ y: smoothY2, rotate: smoothRotate }}
        animate={{
          x: mousePos.x * -1.2,
          y: mousePos.y * -1.2,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 25 }}
        className="absolute top-[25%] right-[8%] w-20 h-20 md:w-28 md:h-28 opacity-15 dark:opacity-20 text-[#E31B23]"
      >
        <svg viewBox="0 0 100 100" fill="none">
          <rect width="100" height="100" rx="20" fill="#E31B23" />
          <circle cx="35" cy="45" r="6" fill="white" />
          <circle cx="65" cy="45" r="6" fill="white" />
          <path d="M 30 70 Q 50 55 70 70" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      </motion.div>

      {/* Cartoon Element 3: Starburst Doodles */}
      <motion.div
        style={{ y: smoothY3 }}
        animate={{
          x: mousePos.x * 2,
          rotate: mousePos.x * 5,
        }}
        className="absolute top-[55%] left-[8%] w-16 h-16 md:w-20 md:h-20 opacity-20 dark:opacity-25 text-[#E31B23]"
      >
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 L60 35 L95 20 L70 50 L95 80 L60 65 L50 100 L40 65 L5 80 L30 50 L5 20 L40 35 Z" />
        </svg>
      </motion.div>

      {/* Cartoon Element 4: Twin-Eye Mushroom Shape (Bottom Left) */}
      <motion.div
        style={{ y: smoothY1 }}
        animate={{
          x: mousePos.x * -0.8,
          y: mousePos.y * -0.8,
        }}
        className="absolute bottom-[20%] right-[12%] w-24 h-24 md:w-32 md:h-32 opacity-15 dark:opacity-20 text-[#E31B23]"
      >
        <svg viewBox="0 0 100 100" fill="none">
          <path d="M 20 60 Q 50 10 80 60 C 90 70 80 90 50 90 C 20 90 10 70 20 60 Z" fill="#E31B23" />
          <circle cx="40" cy="50" r="5" fill="white" />
          <circle cx="60" cy="50" r="5" fill="white" />
        </svg>
      </motion.div>

      {/* Ambient Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#E31B23]/5 dark:bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-amber-500/5 dark:bg-[#E31B23]/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
