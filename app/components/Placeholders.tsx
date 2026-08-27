"use client";

import React from "react";
import { Sparkles, Calendar, User, Image as ImageIcon, QrCode, Layers, Megaphone, Target, Award } from "lucide-react";

interface PlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
  type?: "about" | "event" | "qr" | "team" | "gallery" | "leader";
}

export function SellixPlaceholder({
  label,
  className = "",
  type = "event",
}: PlaceholderProps) {
  // Determine icon & gradient based on type/label
  const getVisuals = () => {
    if (label.includes("ABOUT")) {
      return {
        icon: <Target className="w-12 h-12 text-[#E31B23]" />,
        bg: "from-[#E31B23]/10 via-amber-500/5 to-red-600/10",
        badge: "ABOUT SELLIX",
      };
    }
    if (label.includes("QR")) {
      return {
        icon: <QrCode className="w-12 h-12 text-[#E31B23]" />,
        bg: "from-zinc-900 via-zinc-800 to-zinc-950",
        badge: "SCAN TO REGISTER",
      };
    }
    if (label.includes("EXECUTIVE") || label.includes("CORE") || label.includes("MEMBER") || label.includes("LEADER")) {
      return {
        icon: <User className="w-10 h-10 text-[#E31B23]" />,
        bg: "from-red-950/40 via-zinc-900 to-zinc-900",
        badge: "SELLIX TEAM MEMBER",
      };
    }
    if (label.includes("GALLERY") || label.includes("ORBIT") || label.includes("STRIP")) {
      return {
        icon: <ImageIcon className="w-10 h-10 text-[#E31B23]" />,
        bg: "from-zinc-900 via-[#E31B23]/20 to-black",
        badge: "GALLERY ARCHIVE",
      };
    }
    return {
      icon: <Megaphone className="w-10 h-10 text-[#E31B23]" />,
      bg: "from-[#E31B23]/15 via-zinc-900/60 to-red-900/20",
      badge: "FEATURED EVENT",
    };
  };

  const visuals = getVisuals();

  return (
    <div
      className={`relative overflow-hidden group flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br ${visuals.bg} transition-all duration-300 ${className}`}
    >
      {/* Background Subtle Doodle SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-[#E31B23]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="grid-doodle" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="1.5" fill="currentColor" />
          <path d="M0 15h30M15 0v30" strokeWidth="0.5" strokeDasharray="2 2" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid-doodle)" />
      </svg>

      {/* Floating Accent Stamp */}
      <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase font-semibold text-[#E31B23] bg-[#E31B23]/10 border border-[#E31B23]/20 rounded-full">
        {visuals.badge}
      </div>

      {/* Center Icon & Decorative Badge */}
      <div className="relative z-10 flex flex-col items-center text-center gap-3">
        <div className="p-4 rounded-2xl bg-white/80 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-800 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          {visuals.icon}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
            [PLACEHOLDER]
          </span>
          <span className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-200 mt-0.5 max-w-[200px] truncate">
            {label}
          </span>
        </div>
      </div>

      {/* SELLIX Watermark Logo */}
      <div className="absolute bottom-2 left-3 opacity-20 text-[10px] font-black tracking-tighter text-[#E31B23]">
        SELLIX STUDIO
      </div>
    </div>
  );
}
