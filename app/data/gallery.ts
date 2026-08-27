export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: string;
}

export interface GalleryEventSection {
  id: string;
  eventName: string;
  mainImage: string;
  album: string[];
}

export const SEMICIRCLE_GALLERY: GalleryItem[] = [
  { id: "orbit-1", title: "Brand Keynote 2026", image: "GALLERY_ORBIT_01", category: "Events" },
  { id: "orbit-2", title: "Creative Hackathon", image: "GALLERY_ORBIT_02", category: "Workshops" },
  { id: "orbit-3", title: "Viral Reels Workshop", image: "GALLERY_ORBIT_03", category: "Masterclass" },
  { id: "orbit-4", title: "Social Marketing Expo", image: "GALLERY_ORBIT_04", category: "Exhibition" },
  { id: "orbit-5", title: "Influencer Roundtable", image: "GALLERY_ORBIT_05", category: "Panels" },
  { id: "orbit-6", title: "Design Sprint Pitch", image: "GALLERY_ORBIT_06", category: "Pitch" },
  { id: "orbit-7", title: "Annual Awards Night", image: "GALLERY_ORBIT_07", category: "Gala" },
];

export const HORIZONTAL_STRIP_GALLERY: GalleryItem[] = [
  { id: "strip-1", title: "Behind the Scenes - Studio", image: "STRIP_IMAGE_01", category: "Production" },
  { id: "strip-2", title: "Live Creator Pitch Deck", image: "STRIP_IMAGE_02", category: "Strategy" },
  { id: "strip-3", title: "Visual Branding Workshop", image: "STRIP_IMAGE_03", category: "Design" },
  { id: "strip-4", title: "Team Brainstorming Sprint", image: "STRIP_IMAGE_04", category: "Culture" },
  { id: "strip-5", title: "Growth Analytics Mastery", image: "STRIP_IMAGE_05", category: "Analytics" },
  { id: "strip-6", title: "Interactive Mascot Launch", image: "STRIP_IMAGE_06", category: "Campaign" },
  { id: "strip-7", title: "Networking & Collabs", image: "STRIP_IMAGE_07", category: "Community" },
];

export const GALLERY_EVENTS: GalleryEventSection[] = [
  {
    id: "tech-fest-2026",
    eventName: "TECH FEST 2026",
    mainImage: "GALLERY_EVENT_01_MAIN",
    album: [
      "GALLERY_EVENT_01_IMG_1",
      "GALLERY_EVENT_01_IMG_2",
      "GALLERY_EVENT_01_IMG_3",
      "GALLERY_EVENT_01_IMG_4",
    ],
  },
  {
    id: "workshop-2026",
    eventName: "WORKSHOP 2026",
    mainImage: "GALLERY_EVENT_02_MAIN",
    album: [
      "GALLERY_EVENT_02_IMG_1",
      "GALLERY_EVENT_02_IMG_2",
      "GALLERY_EVENT_02_IMG_3",
      "GALLERY_EVENT_02_IMG_4",
    ],
  },
  {
    id: "media-summit-2026",
    eventName: "MEDIA SUMMIT 2026",
    mainImage: "GALLERY_EVENT_03_MAIN",
    album: [
      "GALLERY_EVENT_03_IMG_1",
      "GALLERY_EVENT_03_IMG_2",
      "GALLERY_EVENT_03_IMG_3",
    ],
  },
  {
    id: "creator-con-2026",
    eventName: "CREATOR CON 2026",
    mainImage: "GALLERY_EVENT_04_MAIN",
    album: [
      "GALLERY_EVENT_04_IMG_1",
      "GALLERY_EVENT_04_IMG_2",
      "GALLERY_EVENT_04_IMG_3",
      "GALLERY_EVENT_04_IMG_4",
    ],
  },
];
