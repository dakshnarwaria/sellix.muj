"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { EVENTS, SellixEvent } from "../data/events";
import { SellixPlaceholder } from "../components/Placeholders";
import { EventModal } from "./EventModal";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<SellixEvent | null>(null);

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
            SELLIX EVENTS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white"
        >
          UPCOMING AND PREVIOUS <span className="text-[#E31B23]">EXPERIENCES</span>
        </motion.h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          Join our intensive growth hackathons, masterclasses, fun events and branding expos. Select any event to view complete details, venue information, and registration link.
        </p>
      </section>

      {/* 6 Event Blocks in Alternating Two-Column Positioning */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-16 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {EVENTS.map((event, index) => {
            const isRightColumn = index % 2 !== 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl hover:border-[#E31B23] dark:hover:border-[#E31B23] hover:shadow-2xl hover:shadow-[#E31B23]/10 transition-all duration-300 group ${
                  isRightColumn ? "md:translate-y-8" : ""
                }`}
              >
                <div>
                {/* TOP: Large Event Image (Poster Aspect Ratio) */}
                <div className="overflow-hidden rounded-2xl mb-6 relative w-full aspect-[2480/3508]">
                  <Image
                    src={`/event_images/${event.image}`}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                  {/* BELOW IMAGE: Large Bold Date */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-md bg-[#E31B23] text-white font-mono text-xs font-bold tracking-wider">
                      {event.date}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase">
                      EVENT 0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-zinc-900 dark:text-white mb-3 group-hover:text-[#E31B23] transition-colors">
                    {event.title}
                  </h3>

                  {/* BELOW DATE: Short/Partial Description */}
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {event.shortDescription}
                  </p>
                </div>

                {/* BOTTOM: Two Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 mt-4">
                  {/* VIEW DETAILS BUTTON */}
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="flex-1 py-3 px-4 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Info className="w-4 h-4 text-[#E31B23]" />
                    VIEW DETAILS
                  </button>

                  {/* REGISTER NOW BUTTON */}
                  <a
                    href={event.registerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#E31B23] hover:bg-[#c9141b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md shadow-[#E31B23]/20 transition-all hover:scale-105 active:scale-95"
                  >
                    REGISTER NOW
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* View Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
