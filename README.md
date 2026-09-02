# Sellix

The official website for **Sellix** — built with [Next.js](https://nextjs.org), featuring an event calendar, photo gallery, and team showcase.

## Features

- 🎉 **Events Page** — Browse upcoming workshops, bootcamps, and meetups with full event details, venue info, and one-click registration
- 🖼️ **Gallery** — Album-based photo gallery with a lightbox viewer and horizontal scrolling highlight strip
- 👥 **Team** — Meet the team, organized by leadership and members
- 🌗 **Dark mode** support throughout
- ⚡ Smooth animations powered by [Framer Motion](https://www.framer.com/motion/)
- 📱 Fully responsive, mobile-first design

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev) — icons

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
app/
├── data/           # Static data (events, gallery albums, team members)
├── events/         # Events page
├── gallery/        # Gallery page & lightbox component
├── team/           # Team page
├── components/     # Shared UI components
├── layout.tsx
└── page.tsx        # Home page

public/
├── event_images/   # Event posters & QR codes
├── gallery_images/ # Gallery photos
├── team_images/    # Team member photos
└── ...
```

## Adding Content

- **Events** — add a new entry to `app/data/events.ts` and drop the corresponding poster/QR image into `public/event_images/`
- **Gallery** — add photos to `public/gallery_images/` and reference them in `app/data/gallery.ts`
- **Team** — add member photos to `public/team_images/` and update `app/data/team.ts`

Image filenames in the data files must exactly match (including case) the files in the corresponding `public/` folder.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial

## Deploy

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

<hr>
<br>

&copy; 2026 SELLIX MUJ | ALL Rights Reserved | Contact: [LinkedIn](https://www.linkedin.com/company/sellix-muj/posts/?feedView=all) [GitHub](https://github.com/sellixmuj) [Instagram](https://www.instagram.com/sellix.muj?igsi=bnRhYnZzM2U4dWxl)

