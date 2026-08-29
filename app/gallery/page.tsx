"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEMICIRCLE_GALLERY, HORIZONTAL_STRIP_GALLERY, GALLERY_EVENTS } from "../data/gallery";
import { SellixPlaceholder } from "../components/Placeholders";
import { GalleryLightbox } from "./GalleryLightbox";
import { Footer } from "../components/Footer";
import { VelocityMarquee, VelocityRotator } from "../components/ScrollVelocityMotion";
import Image from "next/image";

export default function GalleryPage() {
  const [activeAlbum, setActiveAlbum] = useState<{ album: string[]; eventName: string } | null>(null);

  return (
    <div className="relative min-h-screen flex flex-col pt-24 pb-12 overflow-x-hidden">
      {/* Header Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full text-center space-y-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 border border-[#E31B23]/30"
        >
          <span className="w-2 h-2 rounded-full bg-[#E31B23]" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E31B23]">
            INTERACTIVE VISUAL ARCHIVE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white"
        >
          SELLIX <span className="text-[#E31B23]">GALLERY</span>
        </motion.h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          An immersive orbital & scroll-controlled visual showcase documenting our campaigns, workshops, and flagship experiences.
        </p>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 1. SEMICIRCLE / ORBITAL IMAGE ANIMATION                      */}
      {/* ------------------------------------------------------------- */}
      <section className="relative z-10 py-16 mb-24 overflow-hidden">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
            // ORBITAL VISUAL ARC
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white mt-1">
            ROTATING <span className="text-[#E31B23]">SEMICIRCLE</span>
          </h2>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">
            [CONSTANT CLOCKWISE | SCROLL DOWN = FASTER | SCROLL UP = COUNTER-CLOCKWISE]
          </p>
        </div>

        {/* Velocity Continuous Rotating Orbit Arc */}
        <VelocityRotator baseRotateVelocity={18}>
          {(rotateAngle) => {
            return (
              <div className="relative w-full h-[440px] sm:h-[560px] flex items-center justify-center overflow-hidden">
                {/* Central Stationary Sellix Logo Hub */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute z-20 flex items-center justify-center pointer-events-none"
                >
                  {/* Glowing background ring behind logo */}
                  <div className="absolute inset-0 rounded-full bg-[#E31B23]/20 blur-xl animate-pulse" />
                  
                  {/* Logo Container Badge */}
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full p-2 bg-white dark:bg-zinc-950 border-2 border-[#E31B23] shadow-[0_0_30px_rgba(227,27,35,0.35)] flex items-center justify-center overflow-hidden">
                    <Image
                      src="/sellix_logo.jpeg.png"
                      alt="SELLIX Logo"
                      width={100}
                      height={100}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Rotating Orbit Circle */}
                <motion.div
                  style={{ rotate: rotateAngle }}
                  className="relative w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full border border-dashed border-[#E31B23]/30 flex items-center justify-center"
                >
                  {SEMICIRCLE_GALLERY.map((item, index) => {
                    const total = SEMICIRCLE_GALLERY.length;
                    const angle = (index / total) * 2 * Math.PI; // Full circle distribution
                    const angleDeg = (index / total) * 360;
                    const radius = 280; // Radius distance
                    const x = radius * Math.cos(angle - Math.PI / 2);
                    const y = radius * Math.sin(angle - Math.PI / 2);

                    return (
                      <motion.div
                        key={item.id}
                        style={{
                          position: "absolute",
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          x: "-50%",
                          y: "-50%",
                          rotate: `${angleDeg}deg`,
                        }}
                        whileHover={{ scale: 1.15 }}
                        className="relative w-36 h-28 sm:w-52 sm:h-36 rounded-2xl overflow-hidden shadow-xl border-2 border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] transition-all duration-300 bg-zinc-900"
                      >
                        <Image
                          src={`/gallery_images/${item.image}`}
                          alt={item.title || "Gallery item"}
                          fill
                          sizes="(max-width: 768px) 50vw, 25vw"
                          className="object-cover rounded-none border-none scale-105"
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            );
          }}
        </VelocityRotator>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. HORIZONTAL IMAGE STRIP                                     */}
      {/* ------------------------------------------------------------- */}
      <section className="relative z-10 py-16 mb-28 bg-zinc-100 dark:bg-zinc-900/50 border-y border-zinc-200 dark:border-zinc-800 overflow-hidden">
        <div className="text-center mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
            // CONTINUOUS STRIP
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white mt-1">
            HORIZONTAL <span className="text-[#E31B23]">TIMELINE</span>
          </h2>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-1">
            [CONSTANT RIGHT → LEFT | SCROLL DOWN = FASTER | SCROLL UP = LEFT → RIGHT]
          </p>
        </div>

        <VelocityMarquee baseVelocity={-1} className="py-2">
          {HORIZONTAL_STRIP_GALLERY.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05, y: -4 }}
              className="relative w-64 sm:w-80 h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] shrink-0 transition-all duration-300"
            >
              <Image
                src={`/gallery_images/${item.image}`}
                alt={item.title || "Gallery item"}
                fill
                sizes="(max-width: 640px) 256px, 320px"
                className="object-cover rounded-none border-none"
              />
            </motion.div>
          ))}
        </VelocityMarquee>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. EVENT GALLERY SECTIONS (Minimal Image-Focused Showcase)     */}
      {/* ------------------------------------------------------------- */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-10 mb-28">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
            // EVENT ALBUMS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-zinc-900 dark:text-white">
            CLICK TO <span className="text-[#E31B23]">INSPECT LIGHTBOX</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {GALLERY_EVENTS.map((eventSec) => (
            <motion.div
              key={eventSec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() =>
                setActiveAlbum({
                  album: eventSec.album,
                  eventName: eventSec.eventName,
                })
              }
              className="cursor-pointer flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white group-hover:text-[#E31B23] transition-colors text-center">
                  {eventSec.eventName}
                </h3>

                <div className="relative overflow-hidden rounded-2xl w-full max-w-[280px] sm:max-w-[320px] aspect-[2480/3508] mx-auto shadow-md">
                  <Image
                    src={`/event_images/${eventSec.mainImage}`}
                    alt={eventSec.eventName ?? "Gallery image"}
                    fill
                    sizes="(max-width: 640px) 100vw, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono font-bold text-[#E31B23] pt-4 mt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                <span>{eventSec.album.length} PHOTOS</span>
                <span>OPEN LIGHTBOX &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fullscreen Lightbox Component */}
      <GalleryLightbox
        album={activeAlbum?.album || null}
        eventName={activeAlbum?.eventName || null}
        onClose={() => setActiveAlbum(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
