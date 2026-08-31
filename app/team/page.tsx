"use client";

import React from "react";
import { motion } from "framer-motion";
import { EXECUTIVE_TEAM, CORE_TEAM, TeamMember } from "../data/team";
import { SellixPlaceholder } from "../components/Placeholders";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "../components/Icons";
import { Footer } from "../components/Footer";
import Image from "next/image";

function TeamCard({ member, isExecutive }: { member: TeamMember; isExecutive: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-[#E31B23] shadow-xl group transition-all duration-300 ${
        isExecutive ? "h-[380px] sm:h-[440px]" : "h-[320px] sm:h-[360px]"
      }`}
    >
      {/* Background Image Canvas */}
      <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500">
        <Image
          src={`/team_images/${member.image}`}
          alt={member.name ?? "Team member"}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover rounded-none border-none"
        />
      </div>

      {/* Dark & Red Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 group-hover:from-[#E31B23]/40 transition-opacity duration-300" />

      {/* Top-Right Vertical Social Icons */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-center gap-2.5">
        {/* Instagram Icon */}
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} Instagram`}
          className="w-9 h-9 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E31B23] hover:border-[#E31B23] hover:scale-110 transition-all shadow-md"
        >
          <InstagramIcon className="w-4 h-4" />
        </a>

        {/* LinkedIn Icon */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} LinkedIn`}
          className="w-9 h-9 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E31B23] hover:border-[#E31B23] hover:scale-110 transition-all shadow-md"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        {/* GitHub Icon */}
        <a
          href={member.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} GitHub`}
          className="w-9 h-9 rounded-full bg-white/20 dark:bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#E31B23] hover:border-[#E31B23] hover:scale-110 transition-all shadow-md"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Bottom-Left Position & Name */}
      <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1 transform group-hover:-translate-y-1 transition-transform">
        <span className="inline-block px-3 py-1 rounded-full bg-[#E31B23] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
          {member.role}
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
          {member.name}
        </h3>
      </div>
    </motion.div>
  );
}

export default function TeamPage() {
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
            SELLIX LEADERSHIP & CORE DIRECTORS
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white"
        >
          MEET THE <span className="text-[#E31B23]">TEAM</span>
        </motion.h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
          The creative minds, growth strategists, and visual architects pushing SELLIX forward.
        </p>
      </section>

      {/* SECTION 1: EXECUTIVE COMMITTEE (7 Members - Larger Cards) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-8 bg-[#E31B23] rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
            EXECUTIVE COMMITTEE
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {EXECUTIVE_TEAM.map((member) => (
            <TeamCard key={member.id} member={member} isExecutive={true} />
          ))}
        </div>
      </section>

      {/* SECTION 2: CORE COMMITTEE (12 Members - Smaller Cards) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-3 h-8 bg-[#E31B23]/70 rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white tracking-tight">
            CORE COMMITTEE 
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CORE_TEAM.map((member) => (
            <TeamCard key={member.id} member={member} isExecutive={false} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
