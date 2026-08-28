"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { SellixEvent } from "../data/events";
import { SellixPlaceholder } from "../components/Placeholders";
import Image from "next/image";

interface EventModalProps {
  event: SellixEvent | null;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  // ESC key listener & body scroll lock
  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative z-10 w-full max-w-3xl rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden my-8"
        >
          {/* Top Bar with Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#E31B23] text-white font-mono text-xs font-bold">
                {event.date}
              </span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
                EVENT DETAILS :-
              </span>
            </div>

            {/* Visible Close "×" Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-[#E31B23] hover:text-white transition-colors text-zinc-600 dark:text-zinc-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Title */}
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-zinc-900 dark:text-white leading-tight">
              {event.title}
            </h2>

            {/* Large Event Image (Poster Aspect Ratio) */}
            <div className="relative w-full aspect-[2480/3508] max-h-[60vh] rounded-2xl overflow-hidden mx-auto bg-zinc-100 dark:bg-zinc-950">
              <Image
                src={`/event_images/${event.image}`}
                alt={event.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Information Badges (Venue & Time) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <MapPin className="w-5 h-5 text-[#E31B23] shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">VENUE</span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {event.venue}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <Clock className="w-5 h-5 text-[#E31B23] shrink-0" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase block">TIME</span>
                  <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {event.time}
                  </span>
                </div>
              </div>
            </div>

            {/* Full Event Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
                ABOUT THIS SESSION
              </h4>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {event.fullDescription}
              </p>
            </div>

            {/* Bottom Row: Register Button (Bottom Center) & QR Code (Bottom Right) */}
            <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Register Button (Bottom Center) */}
              <div className="flex-1 flex justify-center w-full sm:w-auto">
                <a
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E31B23] text-white font-bold text-base shadow-xl shadow-[#E31B23]/30 hover:bg-[#c9141b] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  REGISTER NOW
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* QR Code (Bottom Right) */}
              <div className="shrink-0 flex flex-col items-center sm:items-end">
                <div className="relative w-28 h-28 p-2 rounded-xl overflow-hidden bg-white">
                  <Image
                    src={`/event_images/${event.qrCode}`}
                    alt={`QR code for ${event.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 768px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] font-mono text-zinc-400 mt-1 uppercase">
                  SCAN QR CODE NOW
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
