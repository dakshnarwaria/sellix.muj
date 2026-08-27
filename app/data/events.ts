export interface SellixEvent {
  id: string;
  title: string;
  date: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  venue: string;
  time: string;
  qrCode: string;
  registerLink: string;
}

export const EVENTS: SellixEvent[] = [
  {
    id: "event-01",
    title: "VIRAL REELS & BRAND STORYTELLING BOOTCAMP",
    date: "23 AUG 2026",
    image: "EVENT_01_IMAGE_PLACEHOLDER",
    shortDescription: "Master the art of high-conversion video hooks, storytelling frameworks, and viral algorithms designed to skyrocket audience engagement.",
    fullDescription: "Dive deep into modern sales psychology and social media algorithms. Learn how to write high-converting short-form video scripts, structure compelling visual hooks, edit for rapid retention, and scale organic reach across Instagram and TikTok.",
    venue: "Sellix Creative Lab - Innovation Hub 301",
    time: "10:00 AM - 04:00 PM EST",
    qrCode: "EVENT_01_QR_PLACEHOLDER",
    registerLink: "EVENT_01_GOOGLE_FORM_LINK",
  },
  {
    id: "event-02",
    title: "GROWTH MARKETING & FUNNEL ARCHITECTURE SUMMIT",
    date: "14 SEP 2026",
    image: "EVENT_02_IMAGE_PLACEHOLDER",
    shortDescription: "A hands-on masterclass on building high-converting landing pages, lead magnets, and automated email funnel workflows.",
    fullDescription: "Unpack modern growth tactics used by top DTC brands and marketing agencies. Learn dynamic funnel mapping, user psychology triggers, retargeting techniques, and analytics tracking to turn casual visitors into loyal brand advocates.",
    venue: "Main Auditorium - Center Hall A",
    time: "02:00 PM - 07:00 PM EST",
    qrCode: "EVENT_02_QR_PLACEHOLDER",
    registerLink: "EVENT_02_GOOGLE_FORM_LINK",
  },
  {
    id: "event-03",
    title: "AI-POWERED CONTENT CREATION & AUTOMATION",
    date: "05 OCT 2026",
    image: "EVENT_03_IMAGE_PLACEHOLDER",
    shortDescription: "harness generative AI tools to streamline content ideation, automated copy generation, and visual brand assets.",
    fullDescription: "Explore how modern marketers use generative AI models to multiply output without sacrificing quality. From AI prompt engineering for visual design to automated campaign workflow execution, elevate your digital workflow.",
    venue: "Digital Media Studio 102",
    time: "11:00 AM - 03:30 PM EST",
    qrCode: "EVENT_03_QR_PLACEHOLDER",
    registerLink: "EVENT_03_GOOGLE_FORM_LINK",
  },
  {
    id: "event-04",
    title: "INFLUENCER COLLAB & SPONSORSHIP HACKATHON",
    date: "28 NOV 2026",
    image: "EVENT_04_IMAGE_PLACEHOLDER",
    shortDescription: "Connect creators with sponsors, learn contract negotiation, pitch deck engineering, and campaign management.",
    fullDescription: "An intensive pitch & deal-making workshop. Participants design brand outreach proposals, practice real-time pitch deck reviews with industry advisors, and learn key metrics for brand partnerships and sponsorships.",
    venue: "Sellix Venture Space - 4th Floor",
    time: "09:30 AM - 05:00 PM EST",
    qrCode: "EVENT_04_QR_PLACEHOLDER",
    registerLink: "EVENT_04_GOOGLE_FORM_LINK",
  },
  {
    id: "event-05",
    title: "CREATIVE BRANDING & VISUAL IDENTITY DESIGN",
    date: "12 DEC 2026",
    image: "EVENT_05_IMAGE_PLACEHOLDER",
    shortDescription: "Craft bold visual personalities, mascot design, vector illustrations, and cohesive design systems for social campaigns.",
    fullDescription: "Learn how to transform a brand's core values into iconic visual identities. Explore typography hierarchy, color psychology, character design, and responsive design systems tailored for modern social platforms.",
    venue: "Design Theater B",
    time: "01:00 PM - 06:00 PM EST",
    qrCode: "EVENT_05_QR_PLACEHOLDER",
    registerLink: "EVENT_05_GOOGLE_FORM_LINK",
  },
  {
    id: "event-06",
    title: "THE ANNUAL SELLIX MARKETING EXPO & AWARDS",
    date: "18 JAN 2027",
    image: "EVENT_06_IMAGE_PLACEHOLDER",
    shortDescription: "Celebrating the most creative student marketing campaigns, innovative content creators, and top social initiatives of the year.",
    fullDescription: "The flagship annual showcase of SELLIX! Featuring keynote presentations, live campaign pitches, interactive brand installations, live creator awards, and executive networking with industry leaders.",
    venue: "Grand Ballroom - Grand Hotel",
    time: "05:00 PM - 10:00 PM EST",
    qrCode: "EVENT_06_QR_PLACEHOLDER",
    registerLink: "EVENT_06_GOOGLE_FORM_LINK",
  },
];
