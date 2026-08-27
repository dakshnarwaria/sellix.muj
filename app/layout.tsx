import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { FloatingNavbar } from "./components/FloatingNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SELLIX — Sales & Social Media Marketing Club",
  description: "Interactive premium portal for SELLIX, the premier sales, visual branding, and social media marketing society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased suppressHydrationWarning`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans transition-colors duration-300 relative">
        <ThemeProvider>
          <AnimatedBackground />
          <div className="flex-1 flex flex-col relative z-10">
            {children}
          </div>
          <FloatingNavbar />
        </ThemeProvider>
      </body>
    </html>
  );
}

