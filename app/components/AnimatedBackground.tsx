"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring, AnimatePresence } from "framer-motion";

export function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeMessage, setActiveMessage] = useState<string | null>(null);

  // Intro Landing Animation Lifecycle
  // Stage 0: Sequential piece-by-piece assembly into SELLIX logo shape
  // Stage 1: Logo complete + SELLIX faded brand name reveal
  // Stage 2: Intro complete, disperse elements to floating background
  const [introStage, setIntroStage] = useState<number>(0);
  const [isIntroActive, setIsIntroActive] = useState<boolean>(true);

  const { scrollY } = useScroll();

  // Scroll velocity reactive physics
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 350 });

  // Velocity-driven transforms for dynamic movement during scroll
  const velocityRotate = useTransform(smoothVelocity, [-1500, 1500], [-35, 35]);
  const velocityScale = useTransform(smoothVelocity, [-1500, 0, 1500], [1.2, 1, 1.2]);
  const velocityY = useTransform(smoothVelocity, [-1500, 1500], [-40, 40]);

  // Bounded scroll parallax transformations
  const smoothY1 = useTransform(scrollY, [0, 2000], [0, -45]);
  const smoothY2 = useTransform(scrollY, [0, 2000], [0, 50]);
  const smoothY3 = useTransform(scrollY, [0, 2000], [0, -35]);
  const smoothY4 = useTransform(scrollY, [0, 2000], [0, 40]);

  const smoothRotate1 = useTransform(scrollY, [0, 2000], [0, 180]);
  const smoothRotate2 = useTransform(scrollY, [0, 2000], [0, -180]);

  useEffect(() => {
    // Intro Timeline:
    // t=0.2s-2.0s: Sequential assembly of logo pieces
    // t=2.2s: Reveal faded SELLIX text
    // t=3.8s: Disperse outward to floating background, revealing main website
    const textTimer = setTimeout(() => setIntroStage(1), 2200);
    const finishTimer = setTimeout(() => {
      setIntroStage(2);
      setIsIntroActive(false);
    }, 4000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(finishTimer);
    };
  }, []);

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

  const skipIntro = () => {
    setIntroStage(2);
    setIsIntroActive(false);
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {/* Interactive Toast Bubble on Mascot Click */}
      <AnimatePresence>
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
      </AnimatePresence>

      {/* Small Bottom-Right Skip Button during Intro */}
      <AnimatePresence>
        {isIntroActive && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={skipIntro}
            className="fixed bottom-6 right-6 z-50 px-3.5 py-1.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-[11px] font-mono font-bold tracking-wider border border-zinc-700/50 dark:border-zinc-300/50 shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 pointer-events-auto"
          >
            SKIP INTRO <span className="text-[#E31B23]">→</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Full-Screen Splash Intro Screen (Hides website until finished) */}
      <AnimatePresence>
        {isIntroActive && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white dark:bg-zinc-950 pointer-events-auto select-none"
          >
            {/* Central Target Ring & Ambient Glow */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.2, 1], opacity: [0, 0.4, 0.2] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-72 h-72 rounded-full bg-[#E31B23]/25 blur-3xl"
            />

            {/* Faded SELLIX Typography Reveal (Appears after elements assemble) */}
            {introStage >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                animate={{ opacity: 0.85, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="mt-48 text-center space-y-2 pointer-events-none px-4"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.2em] text-[#E31B23] drop-shadow-sm">
                  SELLIX
                </h1>
                <p className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase">
                  SALES AND SOCIAL MEDIA MARKETING CLUB OF MUJ
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------------------------------------------------- */}
      {/* CARTOON MASCOTS (Sequential intro assembly -> Floating background) */}
      {/* ---------------------------------------------------------------- */}

      {/* 1. Smiling Oval Capsule Mascot */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY1 }}
        initial={{ x: "-40vw", y: "-40vh", scale: 0, opacity: 0 }}
        animate={
          isIntroActive
            ? { x: "-70px", y: "-70px", scale: 1, opacity: 1 }
            : { x: mousePos.x * 1.5, y: mousePos.y * 1.5, scale: 1, opacity: 1 }
        }
        transition={
          isIntroActive
            ? { delay: 0.2, type: "spring", stiffness: 120, damping: 14 }
            : { type: "spring", stiffness: 60, damping: 18 }
        }
        className={`absolute ${
          isIntroActive ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-90" : "top-[10%] left-[3%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 transition-opacity pointer-events-auto cursor-pointer`}
        whileHover={{ scale: 1.25, rotate: 12, filter: "drop-shadow(0 0 16px rgba(227,27,35,0.4))" }}
        whileTap={{ scale: 0.85, rotate: -15 }}
        drag={!isIntroActive}
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("✨ SELLIX Capsule Mascot Assembled!")}
      >
        <motion.div
          style={{ rotate: isIntroActive ? 0 : velocityRotate, scale: isIntroActive ? 1 : velocityScale }}
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

      {/* 2. Ghost Squircle Mascot */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY2, rotate: isIntroActive ? 0 : smoothRotate1 }}
        initial={{ x: "40vw", y: "-40vh", scale: 0, opacity: 0 }}
        animate={
          isIntroActive
            ? { x: "70px", y: "-70px", scale: 1, opacity: 1 }
            : { x: mousePos.x * -1.4, y: mousePos.y * -1.4, scale: 1, opacity: 1 }
        }
        transition={
          isIntroActive
            ? { delay: 0.5, type: "spring", stiffness: 120, damping: 14 }
            : { type: "spring", stiffness: 50, damping: 20 }
        }
        className={`absolute ${
          isIntroActive ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-90" : "top-[12%] right-[4%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-14 h-14 sm:w-22 sm:h-22 md:w-28 md:h-28 transition-opacity pointer-events-auto cursor-pointer`}
        whileHover={{ scale: 1.3, rotate: -15, filter: "drop-shadow(0 0 16px rgba(227,27,35,0.4))" }}
        whileTap={{ scale: 0.85, rotate: 20 }}
        drag={!isIntroActive}
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("👻 Ghost Mascot Joined!")}
      >
        <motion.div
          style={{ y: isIntroActive ? 0 : velocityY, scale: isIntroActive ? 1 : velocityScale }}
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

      {/* 3. Upper Comic Lightning Spark Bolt */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY3, rotate: isIntroActive ? 0 : smoothRotate2 }}
        initial={{ x: "0vw", y: "-50vh", scale: 0, opacity: 0 }}
        animate={
          isIntroActive
            ? { x: "0px", y: "-115px", scale: 1, opacity: 1 }
            : { x: mousePos.x * 2.2, scale: 1, opacity: 1 }
        }
        transition={
          isIntroActive
            ? { delay: 0.8, type: "spring", stiffness: 130, damping: 14 }
            : { type: "spring", stiffness: 60, damping: 20 }
        }
        className={`absolute ${
          isIntroActive ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-90" : "top-[8%] left-[48%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-opacity pointer-events-auto cursor-pointer`}
        whileHover={{ scale: 1.4, rotate: 45, filter: "drop-shadow(0 0 20px rgba(227,27,35,0.6))" }}
        whileTap={{ scale: 0.8 }}
        onClick={() => triggerToast("⚡ Lightning Spark Power!")}
      >
        <motion.div
          style={{ rotate: isIntroActive ? 0 : velocityRotate, scale: isIntroActive ? 1 : velocityScale }}
          animate={{ scale: [0.9, 1.15, 0.9], rotate: [-6, 12, -6] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 100 100" fill="#E31B23">
            <path d="M 55 5 L 15 55 L 45 55 L 35 95 L 85 45 L 55 45 Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 4. Comic Speech Bubble Mascot */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY3 }}
        initial={{ x: "-50vw", y: "0vh", scale: 0, opacity: 0 }}
        animate={
          isIntroActive
            ? { x: "-110px", y: "0px", scale: 1, opacity: 1 }
            : { x: mousePos.x * 1.8, y: mousePos.y * 1.8, scale: 1, opacity: 1 }
        }
        transition={
          isIntroActive
            ? { delay: 1.1, type: "spring", stiffness: 120, damping: 14 }
            : { type: "spring", stiffness: 50, damping: 20 }
        }
        className={`absolute ${
          isIntroActive ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-90" : "top-[38%] left-[2%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-16 h-16 sm:w-26 sm:h-26 md:w-34 md:h-34 transition-opacity pointer-events-auto cursor-pointer`}
        whileHover={{ scale: 1.25, rotate: 8, filter: "drop-shadow(0 0 16px rgba(227,27,35,0.4))" }}
        whileTap={{ scale: 0.9 }}
        drag={!isIntroActive}
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("💬 Speech Mascot Speaks!")}
      >
        <motion.div
          style={{ y: isIntroActive ? 0 : velocityY, rotate: isIntroActive ? 0 : velocityRotate }}
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

      {/* 5. Cartoon Megaphone Speaker Mascot */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY4 }}
        initial={{ x: "50vw", y: "0vh", scale: 0, opacity: 0 }}
        animate={
          isIntroActive
            ? { x: "110px", y: "0px", scale: 1, opacity: 1 }
            : { x: mousePos.x * -1.6, y: mousePos.y * -1.6, scale: 1, opacity: 1 }
        }
        transition={
          isIntroActive
            ? { delay: 1.4, type: "spring", stiffness: 120, damping: 14 }
            : { type: "spring", stiffness: 50, damping: 20 }
        }
        className={`absolute ${
          isIntroActive ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-90" : "top-[42%] right-[3%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 transition-opacity pointer-events-auto cursor-pointer`}
        whileHover={{ scale: 1.3, rotate: -10, filter: "drop-shadow(0 0 18px rgba(227,27,35,0.4))" }}
        whileTap={{ scale: 0.85 }}
        drag={!isIntroActive}
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("📢 Megaphone Broadcast!")}
      >
        <motion.div
          style={{ scale: isIntroActive ? 1 : velocityScale, rotate: isIntroActive ? 0 : velocityRotate }}
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

      {/* 6. Cartoon Rocket Flame Mascot */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY1 }}
        initial={{ x: "-40vw", y: "40vh", scale: 0, opacity: 0 }}
        animate={
          isIntroActive
            ? { x: "-60px", y: "70px", scale: 1, opacity: 1 }
            : { x: mousePos.x * 1.3, y: mousePos.y * 1.3, scale: 1, opacity: 1 }
        }
        transition={
          isIntroActive
            ? { delay: 1.7, type: "spring", stiffness: 120, damping: 14 }
            : { type: "spring", stiffness: 50, damping: 20 }
        }
        className={`absolute ${
          isIntroActive ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-90" : "bottom-[10%] left-[4%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 transition-opacity pointer-events-auto cursor-pointer`}
        whileHover={{ scale: 1.3, y: -20, filter: "drop-shadow(0 0 18px rgba(227,27,35,0.4))" }}
        whileTap={{ scale: 0.85 }}
        drag={!isIntroActive}
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("🚀 Rocket Ignition!")}
      >
        <motion.div
          style={{ y: isIntroActive ? 0 : velocityY, scale: isIntroActive ? 1 : velocityScale }}
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

      {/* 7. Twin-Eye Mushroom Mascot */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY2 }}
        initial={{ x: "40vw", y: "40vh", scale: 0, opacity: 0 }}
        animate={
          isIntroActive
            ? { x: "60px", y: "70px", scale: 1, opacity: 1 }
            : { x: mousePos.x * -1.0, y: mousePos.y * -1.0, scale: 1, opacity: 1 }
        }
        transition={
          isIntroActive
            ? { delay: 2.0, type: "spring", stiffness: 120, damping: 14 }
            : { type: "spring", stiffness: 50, damping: 20 }
        }
        className={`absolute ${
          isIntroActive ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 opacity-90" : "bottom-[8%] right-[4%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 transition-opacity pointer-events-auto cursor-pointer`}
        whileHover={{ scale: 1.3, rotate: -12, filter: "drop-shadow(0 0 18px rgba(227,27,35,0.4))" }}
        whileTap={{ scale: 0.85 }}
        drag={!isIntroActive}
        dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
        onClick={() => triggerToast("🍄 SELLIX Squad Mushroom!")}
      >
        <motion.div
          style={{ y: isIntroActive ? 0 : velocityY, scale: isIntroActive ? 1 : velocityScale }}
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

      {/* 8. Starburst Sparkle & Price Tag (Subtle Doodles) */}
      <motion.div
        style={{ y: isIntroActive ? 0 : smoothY3 }}
        animate={{
          x: isIntroActive ? 0 : mousePos.x * 2.5,
          rotate: isIntroActive ? 0 : mousePos.x * 8,
        }}
        className={`absolute ${
          isIntroActive ? "top-[40%] left-[46%] z-50 opacity-90" : "top-[52%] left-[8%] opacity-15 sm:opacity-20 dark:opacity-25 hover:opacity-100"
        } w-12 h-12 sm:w-16 sm:h-16 transition-opacity pointer-events-auto cursor-pointer`}
        onClick={() => triggerToast("⭐ Starburst!")}
      >
        <motion.div
          style={{ rotate: isIntroActive ? 0 : velocityRotate }}
          animate={{ rotate: [0, 90, 180, 270, 360] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" fill="#E31B23">
            <path d="M50 0 L60 35 L95 20 L70 50 L95 80 L60 65 L50 100 L40 65 L5 80 L30 50 L5 20 L40 35 Z" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Ambient Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#E31B23]/10 dark:bg-[#E31B23]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[30rem] h-[30rem] bg-amber-500/8 dark:bg-[#E31B23]/10 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}

