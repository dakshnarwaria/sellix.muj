"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SellixPlaceholder } from "./components/Placeholders";
import { Footer } from "./components/Footer";

// 7 Leader Items for Vision & Mission
const LEADERS = [
  {
    id: "leader-1",
    name: "Aria Thorne",
    role: "Founding Director",
    quote: "Building the next generation of digital marketing leaders through bold visual storytelling.",
    image: "LEADER_01_IMAGE",
  },
  {
    id: "leader-2",
    name: "Brandon Cole",
    role: "Head of Strategy",
    quote: "Sales is not about pushing products—it's about engineering genuine human connections.",
    image: "LEADER_02_IMAGE",
  },
  {
    id: "leader-3",
    name: "Clara Mercer",
    role: "Creative Visionary",
    quote: "Visual identity should feel alive, cartoonish, memorable, and undeniably distinct.",
    image: "LEADER_03_IMAGE",
  },
  {
    id: "leader-4",
    name: "Darius Vance",
    role: "Growth Architect",
    quote: "Virality is engineered through structured hooks, deep user empathy, and rapid iteration.",
    image: "LEADER_04_IMAGE",
  },
  {
    id: "leader-5",
    name: "Eva Martinez",
    role: "Media Producer",
    quote: "Short-form video is the new global storefront for creators and modern enterprises.",
    image: "LEADER_05_IMAGE",
  },
  {
    id: "leader-6",
    name: "Farhan Ali",
    role: "Community Lead",
    quote: "Empowering student creators with institutional support, mentorship, and industry access.",
    image: "LEADER_06_IMAGE",
  },
  {
    id: "leader-7",
    name: "Grace Sterling",
    role: "Partnerships Head",
    quote: "Connecting bold student campaigns directly with top national brands and sponsors.",
    image: "LEADER_07_IMAGE",
  },
];

export default function HomePage() {
  // Sticky container ref for Vision & Mission horizontal scroll
  const visionTargetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: visionTargetRef,
    offset: ["start end", "end start"],
  });

  // Scroll DOWN -> RIGHT to LEFT (-70% shift)
  // Scroll UP -> LEFT to RIGHT (+shift)
  const xTransform = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "-72%"]);
  const smoothX = useSpring(xTransform, { stiffness: 100, damping: 20 });

  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION (Editorial Intro Composition)                  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
        {/* SELLIX Cartoon Arch Stamp Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/60 border border-[#E31B23]/30 mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#E31B23] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E31B23]">
            SELLIX — SALES & SOCIAL MEDIA MARKETING
          </span>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl text-center space-y-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-[0.95] text-zinc-900 dark:text-white">
            WE CREATE <span className="text-[#E31B23] underline decoration-[#E31B23]/30 decoration-wavy">VIRAL</span> BRANDS & BOLD CREATORS.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
            SELLIX is the premier interactive society powering student creators, visual artists, growth marketers, and future brand leaders through real-world campaigns.
          </p>
        </motion.div>

        {/* Hero Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Link
            href="/events"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#E31B23] text-white font-bold text-base shadow-xl shadow-[#E31B23]/30 hover:bg-[#c9141b] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
          >
            EXPLORE UPCOMING EVENTS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/team"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-bold text-base border border-zinc-200 dark:border-zinc-800 hover:border-[#E31B23] dark:hover:border-[#E31B23] shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            MEET THE TEAM
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        >
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 text-[#E31B23]" />
        </motion.div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. ABOUT US SECTION (Two-Column Editorial Layout)            */}
      {/* ------------------------------------------------------------- */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT: Heading & Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E31B23]/10 text-[#E31B23] text-xs font-mono font-bold tracking-widest uppercase">
              // WHO WE ARE
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-zinc-900 dark:text-white leading-none">
              ABOUT <span className="text-[#E31B23]">SELLIX</span>
            </h2>
            
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              SELLIX is a vibrant collective of marketers, visual directors, strategists, and visual storytellers. Founded to bridge the gap between creative ambition and measurable business impact, we transform ideas into magnetic campaigns.
            </p>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Through hands-on workshops, real-world growth hackathons, and brand partnerships, SELLIX equips members with high-income skills in social media algorithms, sales funnel design, AI automated workflow, and graphic brand identity.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="block text-3xl font-black text-[#E31B23]">50+</span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">CAMPAIGN PROJECTS</span>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="block text-3xl font-black text-[#E31B23]">1.2M+</span>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">ORGANIC IMPRESSIONS</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Large Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <SellixPlaceholder
              label="ABOUT_IMAGE_PLACEHOLDER"
              type="about"
              className="w-full h-[380px] sm:h-[480px] shadow-2xl rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. HOME — EVENTS SECTION (4 Alternating Editorial Showcases)  */}
      {/* ------------------------------------------------------------- */}
      <section className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
              // SPOTLIGHT INITIATIVES
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
              FEATURED <span className="text-[#E31B23]">EVENTS</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              Check out our upcoming flagship masterclasses, competitions, and creative summits.
            </p>
          </div>

          {/* EVENT 1: IMAGE LEFT, TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <SellixPlaceholder label="HOME_EVENT_01_IMAGE" className="w-full h-[320px] rounded-2xl" />
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#E31B23] text-white text-xs font-mono font-bold">
                23 AUG 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white">
                VIRAL REELS & BRAND STORYTELLING BOOTCAMP
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base">
                Master the art of high-conversion video hooks, storytelling frameworks, and viral algorithms designed to skyrocket audience engagement.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#E31B23] hover:underline"
              >
                VIEW FULL DETAILS <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* EVENT 2: TEXT LEFT, IMAGE RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl lg:flex-row-reverse"
          >
            <div className="space-y-4 order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded-md bg-[#E31B23] text-white text-xs font-mono font-bold">
                14 SEP 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white">
                GROWTH MARKETING & FUNNEL ARCHITECTURE
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base">
                A hands-on masterclass on building high-converting landing pages, lead magnets, and automated email funnel workflows.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#E31B23] hover:underline"
              >
                VIEW FULL DETAILS <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <SellixPlaceholder label="HOME_EVENT_02_IMAGE" className="w-full h-[320px] rounded-2xl order-1 lg:order-2" />
          </motion.div>

          {/* EVENT 3: IMAGE LEFT, TEXT RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl"
          >
            <SellixPlaceholder label="HOME_EVENT_03_IMAGE" className="w-full h-[320px] rounded-2xl" />
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#E31B23] text-white text-xs font-mono font-bold">
                05 OCT 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white">
                AI-POWERED CONTENT CREATION
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base">
                Harness generative AI tools to streamline content ideation, automated copy generation, and visual brand assets.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#E31B23] hover:underline"
              >
                VIEW FULL DETAILS <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* EVENT 4: TEXT LEFT, IMAGE RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl lg:flex-row-reverse"
          >
            <div className="space-y-4 order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded-md bg-[#E31B23] text-white text-xs font-mono font-bold">
                28 NOV 2026
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-zinc-900 dark:text-white">
                INFLUENCER COLLAB & SPONSORSHIP HACKATHON
              </h3>
              <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base">
                Connect creators with sponsors, learn contract negotiation, pitch deck engineering, and campaign management.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 font-bold text-sm text-[#E31B23] hover:underline"
              >
                VIEW FULL DETAILS <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
            <SellixPlaceholder label="HOME_EVENT_04_IMAGE" className="w-full h-[320px] rounded-2xl order-1 lg:order-2" />
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. OUR VISION & MISSION (7 Leader Scroll-Linked Items)       */}
      {/* ------------------------------------------------------------- */}
      <section ref={visionTargetRef} className="relative z-10 py-24 bg-zinc-100 dark:bg-zinc-900/60 border-t border-zinc-200/60 dark:border-zinc-800/60 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col items-center text-center">
          <span className="text-xs font-mono font-bold tracking-widest text-[#E31B23] uppercase">
            // LEADERSHIP DIRECTIVES
          </span>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-zinc-900 dark:text-white">
            OUR VISION & <span className="text-[#E31B23]">MISSION</span>
          </h2>
          <p className="text-xs font-mono text-zinc-500 mt-2 uppercase tracking-widest">
            [SCROLL DOWN TO MOVE RIGHT → LEFT | SCROLL UP TO MOVE LEFT → RIGHT]
          </p>
        </div>

        {/* Horizontal Continuous Track for 7 Leaders */}
        <div className="w-full overflow-hidden px-4">
          <motion.div style={{ x: smoothX }} className="flex gap-6 sm:gap-8 w-max">
            {LEADERS.map((leader, index) => (
              <div
                key={leader.id}
                className="w-[300px] sm:w-[360px] p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col justify-between shrink-0 group hover:border-[#E31B23] transition-all duration-300"
              >
                <div>
                  <div className="relative mb-6">
                    <SellixPlaceholder label={leader.image} type="leader" className="w-full h-[220px] rounded-2xl" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E31B23] text-white font-mono text-[10px] font-bold">
                      0{index + 1} / 07
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 dark:text-white uppercase">
                    {leader.name}
                  </h3>
                  <span className="text-xs font-bold font-mono text-[#E31B23] tracking-wider uppercase block mt-1">
                    {leader.role}
                  </span>
                </div>
                <blockquote className="mt-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 italic">
                  "{leader.quote}"
                </blockquote>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. FOOTER SECTION                                            */}
      {/* ------------------------------------------------------------- */}
      <Footer />
    </div>
  );
}
