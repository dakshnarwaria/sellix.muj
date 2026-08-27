"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Calendar, Users, Image as ImageIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { name: "Home", path: "/", icon: Home },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Team", path: "/team", icon: Users },
  { name: "Gallery", path: "/gallery", icon: ImageIcon },
];

export function FloatingNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
      <nav className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl shadow-black/10 dark:shadow-red-950/20">
        {/* SELLIX Mini Red Pill Brand Indicator */}
        <Link
          href="/"
          className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#E31B23] text-white font-black text-xs tracking-tighter hover:scale-105 transition-transform mr-1 shrink-0 shadow-md shadow-[#E31B23]/30"
          title="SELLIX Home"
        >
          S
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;

            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 rounded-full group"
              >
                {/* Animated active pill background */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-[#E31B23] rounded-full shadow-lg shadow-[#E31B23]/25"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Nav Icon & Label */}
                <Icon
                  className={`w-4 h-4 relative z-10 transition-transform group-hover:scale-110 ${
                    isActive
                      ? "text-white"
                      : "text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white"
                  }`}
                />
                <span
                  className={`relative z-10 hidden md:inline-block font-semibold ${
                    isActive
                      ? "text-white"
                      : "text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-px h-5 bg-zinc-300 dark:bg-zinc-800 mx-1 sm:mx-2" />

        {/* Theme Toggle Component */}
        <ThemeToggle className="w-8 h-8 sm:w-9 sm:h-9" />
      </nav>
    </div>
  );
}
