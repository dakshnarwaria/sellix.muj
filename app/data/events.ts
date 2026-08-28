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
    title: "Into The Graphicverse",
    date: "14 AUG 2026",
    image: "GraphicversePoster.png",
    shortDescription: "🎨 Into the Graphicverse 🚀Unleash your creativity and turn ideas into stunning visuals! Join our hands-on Graphic Designing Workshop and explore the exciting world of design, creativity, and digital art. ✨Create. Design. Inspire. 🌌",
    fullDescription: "🎨 INTO THE GRAPHICVERSE 🚀 Where Ideas Become Visuals.Ever wondered how stunning posters, social media designs, logos, and digital artwork come to life? 🌌Step into Into the Graphicverse — an exciting Graphic Designing Workshop designed to turn your creativity into real-world designs. ✨ What you'll explore: 🎨 Fundamentals of Graphic Design 🖌️ Creative Design Techniques 💡 Turning Ideas into Visuals 📱 Social Media & Poster Designing 🎯 Design Tips, Tricks & Best Practices 🚀 Hands-on creative activitiesWhether you're a complete beginner, creative enthusiast, student, or aspiring designer, this workshop will help you discover your creative potential and take your first step into the world of graphic design.🌟 Don't just imagine it. Design it.🚀 Enter the Graphicverse.📅 Limited Seats Available📍 Join us and create something extraordinary!",
    venue: "AB1 307",
    time: "4:00 PM - 6:00 PM IST",
    qrCode: "GraphicverseQR.png",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeOsu764hmFgAoXe1jFrulylJDlbX2LwV8ppzdqbatMRP-LUg/viewform",
  },
  {
    id: "event-02",
    title: "Pass The Torch",
    date: "13 AUG  2026",
    image: "PassTheTorchPoster.png",
    shortDescription: "🔥 PASS THE TORCH 🔥 — A fun and interactive Freshers–Seniors Meetup 🎓🤝 where freshers can connect with seniors, clear FAQs about campus, academics, college life & nearby places 🏫📚📍, and gain valuable tips for a smooth start! 🚀✨",
    fullDescription: "🔥 PASS THE TORCH 🔥 — A special Freshers–Seniors Meetup designed to break the ice, build connections, and make your first steps on campus easier! 🎓🤝✨ Meet your seniors, interact with them, ask away your FAQs about campus life, academics, clubs, college culture, opportunities, and nearby places 🏫📚🎯📍, get real experiences and useful tips, clear your doubts, and discover everything you need to know to confidently begin your college journey! 🚀💫 Connect. Ask. Learn. Grow. — Let’s pass the torch to the next generation! 🫶🔥",
    venue: "LHC Mess 1st Floor",
    time: "5:30 PM - 07:00 PM IST",
    qrCode: "PassTheTorchQR.png",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScmUAvda9UAA7dox9R3jyU4og5uIMKodHGh8eYPv9vdumQecw/viewform",
  }
];

 //  {
  //   id: "event-02",
  //   title: "GROWTH MARKETING & FUNNEL ARCHITECTURE SUMMIT",
  //   date: "14 SEP 2026",
  //   image: "PassTheTorchPoster.png",
  //   shortDescription: "A hands-on masterclass on building high-converting landing pages, lead magnets, and automated email funnel workflows.",
  //   fullDescription: "Unpack modern growth tactics used by top DTC brands and marketing agencies. Learn dynamic funnel mapping, user psychology triggers, retargeting techniques, and analytics tracking to turn casual visitors into loyal brand advocates.",
  //   venue: "Main Auditorium - Center Hall A",
  //   time: "02:00 PM - 07:00 PM IST",
  //   qrCode: "EVENT_02_QR_PLACEHOLDER",
  //   registerLink: "EVENT_02_GOOGLE_FORM_LINK",
  // } (Template for future use)
