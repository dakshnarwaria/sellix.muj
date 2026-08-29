"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { SellixPlaceholder } from "../components/Placeholders";
import Image from "next/image";

interface GalleryLightboxProps {
  album: string[] | null;
  eventName: string | null;
  onClose: () => void;
}

export function GalleryLightbox({
  album,
  eventName,
  onClose,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [album]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (!album) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [album, currentIndex, onClose]);

  if (!album || album.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? album.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === album.length - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Top Header Bar */}
        <div className="fixed top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-4 py-2 rounded-full bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold uppercase tracking-wider">
            {eventName} — IMAGE {currentIndex + 1} OF {album.length}
          </div>

          {/* Visible Close "×" Button */}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="pointer-events-auto p-3 rounded-full bg-white/10 dark:bg-black/50 hover:bg-[#E31B23] text-white border border-white/20 transition-all shadow-xl hover:scale-110"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Central Display Area */}
        <div className="relative z-10 w-full max-w-5xl h-[70vh] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-2"
            >
              <Image
                src={`/gallery_images/${album[currentIndex]}`}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain rounded-3xl shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* "<" PREVIOUS BUTTON */}
        <button
          onClick={handlePrev}
          aria-label="Previous Image"
          className="fixed left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 dark:bg-black/50 hover:bg-[#E31B23] text-white border border-white/20 transition-all shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* ">" NEXT BUTTON */}
        <button
          onClick={handleNext}
          aria-label="Next Image"
          className="fixed right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full bg-white/10 dark:bg-black/50 hover:bg-[#E31B23] text-white border border-white/20 transition-all shadow-2xl hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </AnimatePresence>
  );
}
