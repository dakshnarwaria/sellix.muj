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
  { id: "orbit-1", title: "Brand Keynote 2026", image: "Image_1.png", category: "Events" },
  { id: "orbit-2", title: "Creative Hackathon", image: "Image_2.png", category: "Workshops" },
  { id: "orbit-3", title: "Viral Reels Workshop", image: "Image_3.png", category: "Masterclass" },
  { id: "orbit-4", title: "Social Marketing Expo", image: "Image_4.png", category: "Exhibition" },
  { id: "orbit-5", title: "Graphic Design Expo", image: "Graphicverse_1.png", category: "Panels" },
  { id: "orbit-6", title: "Design Sprint Pitch", image: "Graphicverse_2.png", category: "Pitch" },
  { id: "orbit-7", title: "Annual Awards Night", image: "Graphicverse_3.png", category: "Gala" },
];

export const HORIZONTAL_STRIP_GALLERY: GalleryItem[] = [
  { id: "strip-1", title: "Behind the Scenes - Studio", image: "Image_1.png", category: "Production" },
  { id: "strip-2", title: "Live Creator Pitch Deck", image: "Image_2.png", category: "Strategy" },
  { id: "strip-3", title: "Visual Branding Workshop", image: "Image_3.png", category: "Design" },
  { id: "strip-4", title: "Team Brainstorming Sprint", image: "Image_4.png", category: "Culture" },
  { id: "strip-5", title: "Growth Analytics Mastery", image: "Graphicverse_4.png", category: "Analytics" },
  { id: "strip-6", title: "Interactive Mascot Launch", image: "Graphicverse_5.png", category: "Campaign" },
  { id: "strip-7", title: "Networking & Collabs", image: "PassTheTorch_1.png", category: "Community" },
];

export const GALLERY_EVENTS: GalleryEventSection[] = [
  {
    id: "event-1",
    eventName: "Into the Graphicverse",
    mainImage: "GraphicversePoster.png",
    album: [
      "Graphicverse_1.png",
      "Graphicverse_2.png",
      "Graphicverse_3.png",
      "Graphicverse_4.png",
      "Graphicverse_5.png",
    ],
  },
  {
    id: "event-2",
    eventName: "Pass The Torch",
    mainImage: "PassTheTorchPoster.png",
    album: [
      "PassTheTorch_1.png",
    ],
  }
];
