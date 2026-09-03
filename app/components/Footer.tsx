"use client";

import React from "react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "./Icons";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative z-10 w-full pt-16 pb-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* SELLIX Cartoon Stamp Accent */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-12 h-12 mb-4 flex items-center justify-center rounded-2xl bg-[#E31B23] text-white font-black text-xl shadow-xl shadow-[#E31B23]/30"
        >
          S
        </motion.div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white uppercase mb-3">
          CONTACT <span className="text-[#E31B23]">US</span>
        </h2>
        <p className="max-w-md text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-8 font-medium">
          Got questions, sponsorship proposals, or want to collaborate with SELLIX? Reach out directly!
        </p>

        {/* Contact Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mb-12">
          {/* EMAIL Button */}
          <motion.a
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:contact@sellix.org"
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] dark:hover:border-[#E31B23] shadow-lg hover:shadow-xl hover:shadow-[#E31B23]/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-red-100 dark:bg-red-950/50 text-[#E31B23]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 uppercase block">
                  GET IN TOUCH
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-[#E31B23] transition-colors block">
                  EMAIL US
                </span>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-[#E31B23] transition-colors block mt-0.5">
                  sellixmuj@gmail.com
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E31B23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>

          {/* LINKEDIN Button */}
          <motion.a
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.linkedin.com/company/sellix-muj/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] dark:hover:border-[#E31B23] shadow-lg hover:shadow-xl hover:shadow-[#E31B23]/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 uppercase block">
                  NETWORK
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-[#E31B23] transition-colors">
                  LINKEDIN
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E31B23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>

          {/* INSTAGRAM Button */}
          <motion.a
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.instagram.com/sellix.muj?igsi=bnRhYnZzM2U4dWxl"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] dark:hover:border-[#E31B23] shadow-lg hover:shadow-xl hover:shadow-[#E31B23]/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-pink-100 dark:bg-pink-950/50 text-pink-600 dark:text-pink-400">
                <InstagramIcon className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 uppercase block">
                  SOCIAL
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-[#E31B23] transition-colors">
                  INSTAGRAM
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E31B23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>

          {/* VISIT US Button */}
          <motion.a
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.google.com/maps/place/Manipal+University+Jaipur/@26.8438552,75.5626594,17z/data=!3m1!4b1!4m6!3m5!1s0x396c4850e05bee9b:0x1b8d67402d4eb863!8m2!3d26.8438552!4d75.5652343!16s%2Fm%2F0wdnw8v?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] dark:hover:border-[#E31B23] shadow-lg hover:shadow-xl hover:shadow-[#E31B23]/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-mono tracking-wider text-zinc-500 dark:text-zinc-400 uppercase block">
                  LOCATION
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-[#E31B23] transition-colors">
                  VISIT US
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#E31B23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl pt-6 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs text-zinc-500 dark:text-zinc-500 gap-2">
          <span>&copy; {new Date().getFullYear()} SELLIX — Sales & Social Media Marketing. All rights reserved.</span>
          <p>
            Made with ❤️ by{" Technical Team, Sellix MUJ"}
          </p>
        </div>
      </div>
    </footer>
  );
}
