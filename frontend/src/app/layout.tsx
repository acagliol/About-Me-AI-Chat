import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { MessageProvider } from "./MessageContext";

import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Alejo Cagliolo – ChatGPT-Style Portfolio | Purdue University",
  description: "Personal portfolio and chat interface",
  icons: {
    icon: [
      { url: '/pinkpanther2.png', type: 'image/png' },
    ],
    shortcut: '/pinkpanther2.png',
    apple: '/pinkpanther2.png',
  },
  keywords: [
    "Alejo Cagliolo",
    "Software Engineer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Purdue University",
    "CS Student",
    "Software Engineering Intern",
    "Tech Portfolio",
    "Student Developer",
    "Internship Experience",
    "Web Developer",
    "Cloud Developer",
    "AI Developer",
    "Austin Software Engineer",
    "Engineering Student Portfolio",
  ],
  authors: [{ name: "Alejo Cagliolo", url: "https://acagliol.com/" }],
  creator: "Alejo Cagliolo",
  openGraph: {
    title: "Alejo Cagliolo – Purdue CS Portfolio",
    description:
      "Hi! I'm Alejo — a CS student at Purdue University. This is my personal portfolio where I share the projects I've built, the companies I've interned with, and what I've been learning along the way.",
    url: "https://acagliol.com",
    siteName: "Alejo Cagliolo Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejo Cagliolo – Software Engineer Portfolio",
    description:
      "Explore projects and professional experience from Alejo Cagliolo, software engineer and Purdue student.",
    creator: "@acagliol",
  },
  metadataBase: new URL("https://acagliol.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <MessageProvider>
          {children}
        </MessageProvider>
        <GoogleAnalytics gaId="G-Q3L1FNZM20" />
        <Analytics />
      </body>
    </html>
  );
}
