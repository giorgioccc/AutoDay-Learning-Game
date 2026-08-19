import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

import { LANG_STORAGE_KEY } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AutoDay — real AI automation problems, no answers handed over",
    template: "%s — AutoDay",
  },
  description:
    "AutoDay gives you a concrete AI automation problem and makes you work out how you would build it. Help reveals one layer at a time and stops at the architecture — there is no copy-paste answer.",
  applicationName: "AutoDay",
  keywords: [
    "AI engineering practice",
    "automation challenges",
    "prompt engineering exercises",
    "LLM system design",
    "AI automation ideas",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "AutoDay",
    title: "AutoDay — real AI automation problems, no answers handed over",
    description:
      "A concrete automation problem, the constraints that make it hard, and help that reveals one layer at a time. You build the thing yourself.",
    url: "/",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoDay — real AI automation problems",
    description:
      "Get a real automation problem. Think first. Reveal help one layer at a time. No copy-paste answers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f5f9" },
    { media: "(prefers-color-scheme: dark)", color: "#10151c" },
  ],
};

/* Applies the stored language before first paint, so an Italian visitor never
   sees a flash of English. Kept tiny and dependency-free on purpose. */
const langScript = `(function(){try{var l=localStorage.getItem(${JSON.stringify(
  LANG_STORAGE_KEY,
)});if(l==="it"||l==="en"){document.documentElement.lang=l}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
