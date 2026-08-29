"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";

export function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Scroll velocity reactive physics
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 350 });

  // Velocity-driven transforms for dynamic movement during scroll
  const velocityRotate = useTransform(smoothVelocity, [-1500, 1500], [-35, 35]);
  const velocityScale = useTransform(smoothVelocity, [-1500, 0, 1500], [1.2, 1, 1.2]);
  const velocityY = useTransform(smoothVelocity, [-1500, 1500], [-40, 40]);

  // Bounded scroll parallax transformations (keeps elements inside viewport at all times)
  const smoothY1 = useTransform(scrollY, [0, 2000], [0, -45]);
  const smoothY2 = useTransform(scrollY, [0, 2000], [0, 50]);
  const smoothY3 = useTransform(scrollY, [0, 2000], [0, -35]);
  const smoothY4 = useTransform(scrollY, [0, 2000], [0, 40]);

  const smoothRotate1 = useTransform(scrollY, [0, 2000], [0, 180]);
  const smoothRotate2 = useTransform(scrollY, [0, 2000], [0, -180]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.04;
      const moveY = (clientY - window.innerHeight / 2) * 0.04;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const triggerToast = (msg: string) => {
    setActiveMessage(msg);
    setTimeout(() => setActiveMessage(null), 2000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {/* Interactive Toast Bubble on Mascot Click */}
      {activeMessage && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#E31B23] text-white font-mono font-bold text-xs shadow-xl shadow-[#E31B23]/30 pointer-events-none"
        >
          {activeMessage}
        </motion.div>
      )}

      {/* 1. TOP-LEFT: Smiling Oval Capsule Mascot */}
      <motion.div
        style={{ y: smoothY1 }}
        animate={{
          x: mousePos.x * 1.5,
          y: mousePos.y * 1.5,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className="absolute top-[10%] left-[3%] w-24 h-24 md:w-32 md:h-32 opacity-35 dark:opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.25, rotate: 12, filter: "drop-shadow(0 0 16px rgba(227,27,35,0.6))" }}
        whileTap={{ scale: 0.85, rotate: -15 }}
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("✨ SELLIX Capsule Mascot Says Hello!")}
      >
        <motion.div
          style={{ rotate: velocityRotate, scale: velocityScale }}
          animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor">
            <rect x="15" y="10" width="70" height="80" rx="35" className="fill-[#E31B23]" />
            <circle cx="38" cy="38" r="5" fill="white" />
            <circle cx="62" cy="38" r="5" fill="white" />
            <path d="M 35 58 Q 50 74 65 58" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
            <circle cx="28" cy="52" r="4" fill="white" opacity="0.3" />
            <circle cx="72" cy="52" r="4" fill="white" opacity="0.3" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 2. TOP-RIGHT: Ghost Squircle Mascot */}
      <motion.div
        style={{ y: smoothY2, rotate: smoothRotate1 }}
        animate={{
          x: mousePos.x * -1.4,
          y: mousePos.y * -1.4,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-[12%] right-[4%] w-22 h-22 md:w-28 md:h-28 opacity-35 dark:opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.3, rotate: -15, filter: "drop-shadow(0 0 16px rgba(227,27,35,0.6))" }}
        whileTap={{ scale: 0.85, rotate: 20 }}
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("👻 Ghost Mascot Boo!")}
      >
        <motion.div
          style={{ y: velocityY, scale: velocityScale }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <rect width="100" height="100" rx="24" fill="#E31B23" />
            <circle cx="35" cy="42" r="6" fill="white" />
            <circle cx="65" cy="42" r="6" fill="white" />
            <path d="M 30 68 Q 50 52 70 68" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 3. UPPER-CENTER: Comic Lightning Spark Bolt */}
      <motion.div
        style={{ y: smoothY3, rotate: smoothRotate2 }}
        animate={{
          x: mousePos.x * 2.2,
        }}
        className="absolute top-[8%] left-[48%] w-16 h-16 md:w-20 md:h-20 opacity-40 dark:opacity-55 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.4, rotate: 45, filter: "drop-shadow(0 0 20px rgba(227,27,35,0.8))" }}
        whileTap={{ scale: 0.8 }}
        onClick={() => triggerToast("⚡ Energy Boost!")}
      >
        <motion.div
          style={{ rotate: velocityRotate, scale: velocityScale }}
          animate={{ scale: [0.9, 1.15, 0.9], rotate: [-6, 12, -6] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="#E31B23">
            <path d="M 55 5 L 15 55 L 45 55 L 35 95 L 85 45 L 55 45 Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 4. MID-LEFT: Comic Speech Bubble Mascot */}
      <motion.div
        style={{ y: smoothY3 }}
        animate={{
          x: mousePos.x * 1.8,
          y: mousePos.y * 1.8,
        }}
        className="absolute top-[38%] left-[2%] w-26 h-26 md:w-34 md:h-34 opacity-35 dark:opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.25, rotate: 8, filter: "drop-shadow(0 0 16px rgba(227,27,35,0.6))" }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("💬 SELLIX — Sales & Marketing!")}
      >
        <motion.div
          style={{ y: velocityY, rotate: velocityRotate }}
          animate={{ y: [0, -12, 0], rotate: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 120 100" fill="none">
            <path
              d="M 20 10 H 100 A 15 15 0 0 1 115 25 V 65 A 15 15 0 0 1 100 80 H 55 L 35 98 V 80 H 20 A 15 15 0 0 1 5 65 V 25 A 15 15 0 0 1 20 10 Z"
              fill="#E31B23"
            />
            <circle cx="45" cy="40" r="5" fill="white" />
            <circle cx="75" cy="40" r="5" fill="white" />
            <path d="M 45 58 Q 60 70 75 58" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 5. MID-RIGHT: Cartoon Megaphone Speaker Mascot */}
      <motion.div
        style={{ y: smoothY4 }}
        animate={{
          x: mousePos.x * -1.6,
          y: mousePos.y * -1.6,
        }}
        className="absolute top-[42%] right-[3%] w-24 h-24 md:w-32 md:h-32 opacity-35 dark:opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.3, rotate: -10, filter: "drop-shadow(0 0 18px rgba(227,27,35,0.6))" }}
        whileTap={{ scale: 0.85 }}
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("📢 Loud & Clear Marketing!")}
      >
        <motion.div
          style={{ scale: velocityScale, rotate: velocityRotate }}
          animate={{ rotate: [-8, 8, -8] }}
          transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M 20 40 L 60 20 V 80 L 20 60 Z" fill="#E31B23" />
            <path d="M 30 60 L 30 85 C 30 88 40 88 40 85 L 40 60 Z" fill="#E31B23" />
            <rect x="12" y="38" width="10" height="24" rx="4" fill="#E31B23" />
            <circle cx="40" cy="42" r="3.5" fill="white" />
            <circle cx="50" cy="38" r="3.5" fill="white" />
            <path d="M 70 35 A 25 25 0 0 1 70 65" stroke="#E31B23" strokeWidth="4" strokeLinecap="round" />
            <path d="M 82 25 A 40 40 0 0 1 82 75" stroke="#E31B23" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 6. CENTER DOODLE: Starburst Sparkle */}
      <motion.div
        style={{ y: smoothY3 }}
        animate={{
          x: mousePos.x * 2.5,
          rotate: mousePos.x * 8,
        }}
        className="absolute top-[52%] left-[8%] w-16 h-16 md:w-22 md:h-22 opacity-40 dark:opacity-55 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.4, rotate: 180, filter: "drop-shadow(0 0 20px rgba(227,27,35,0.7))" }}
        onClick={() => triggerToast("⭐ Starburst Sparkle!")}
      >
        <motion.div
          style={{ rotate: velocityRotate }}
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" fill="#E31B23">
            <path d="M50 0 L60 35 L95 20 L70 50 L95 80 L60 65 L50 100 L40 65 L5 80 L30 50 L5 20 L40 35 Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 7. LOWER-LEFT: Cartoon Rocket Flame Mascot */}
      <motion.div
        style={{ y: smoothY1 }}
        animate={{
          x: mousePos.x * 1.3,
          y: mousePos.y * 1.3,
        }}
        className="absolute bottom-[10%] left-[4%] w-24 h-24 md:w-32 md:h-32 opacity-35 dark:opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.3, y: -20, filter: "drop-shadow(0 0 18px rgba(227,27,35,0.7))" }}
        whileTap={{ scale: 0.85 }}
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("🚀 Launching Student Creators!")}
      >
        <motion.div
          style={{ y: velocityY, scale: velocityScale }}
          animate={{ y: [0, -14, 0], scale: [0.98, 1.05, 0.98] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <path
              d="M 50 10 C 25 35 25 70 50 90 C 75 70 75 35 50 10 Z"
              fill="#E31B23"
            />
            <path
              d="M 50 35 C 38 50 38 72 50 82 C 62 72 62 50 50 35 Z"
              fill="white"
              opacity="0.3"
            />
            <circle cx="42" cy="48" r="4.5" fill="white" />
            <circle cx="58" cy="48" r="4.5" fill="white" />
            <path d="M 44 62 Q 50 68 56 62" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 8. LOWER-CENTER: Cartoon Price Tag Mascot */}
      <motion.div
        style={{ y: smoothY4 }}
        animate={{
          x: mousePos.x * -1.1,
          y: mousePos.y * -1.1,
        }}
        className="absolute bottom-[18%] left-[45%] w-18 h-18 md:w-24 md:h-24 opacity-35 dark:opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.3, rotate: 20, filter: "drop-shadow(0 0 16px rgba(227,27,35,0.6))" }}
        whileTap={{ scale: 0.85 }}
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("🏷️ Sales & Brand Pitching!")}
      >
        <motion.div
          style={{ rotate: velocityRotate }}
          animate={{ rotate: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <path
              d="M 20 20 H 60 L 90 50 L 50 90 L 10 50 V 20 Z"
              fill="#E31B23"
            />
            <circle cx="30" cy="30" r="6" fill="white" />
            <circle cx="48" cy="50" r="4" fill="white" />
            <circle cx="62" cy="58" r="4" fill="white" />
            <path d="M 52 68 Q 60 74 68 66" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 9. LOWER-RIGHT: Twin-Eye Mushroom Mascot */}
      <motion.div
        style={{ y: smoothY2 }}
        animate={{
          x: mousePos.x * -1.0,
          y: mousePos.y * -1.0,
        }}
        className="absolute bottom-[8%] right-[4%] w-24 h-24 md:w-32 md:h-32 opacity-35 dark:opacity-50 hover:opacity-100 transition-opacity pointer-events-auto cursor-pointer"
        whileHover={{ scale: 1.3, rotate: -12, filter: "drop-shadow(0 0 18px rgba(227,27,35,0.6))" }}
        whileTap={{ scale: 0.85 }}
        drag
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("🍄 SELLIX Squad Mascot!")}
      >
        <motion.div
          style={{ y: velocityY, scale: velocityScale }}
          animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M 20 60 Q 50 10 80 60 C 90 70 80 90 50 90 C 20 90 10 70 20 60 Z" fill="#E31B23" />
            <circle cx="40" cy="50" r="5" fill="white" />
            <circle cx="60" cy="50" r="5" fill="white" />
            <path d="M 42 66 Q 50 74 58 66" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Ambient Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#E31B23]/10 dark:bg-[#E31B23]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-amber-500/8 dark:bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
