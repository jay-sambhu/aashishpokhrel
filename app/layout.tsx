import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07090e" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://github.com/jay-sambhu/aashishpokhrel"),
  title: "Aashish Pokhrel (Jay Sambhu) — Developer Portfolio & GitHub Dashboard",
  description:
    "Interactive Next.js & React developer portfolio and GitHub project dashboard of Aashish Pokhrel (jay-sambhu). Featuring full-stack web applications, robotics, and TypeScript projects.",
  keywords: [
    "Aashish Pokhrel",
    "Jay Sambhu",
    "Portfolio",
    "Next.js",
    "React.js",
    "Dashboard",
    "GitHub Projects",
    "TypeScript",
    "Full Stack Developer",
    "Robotics",
  ],
  authors: [{ name: "Aashish Pokhrel", url: "https://github.com/jay-sambhu" }],
  openGraph: {
    type: "website",
    title: "Aashish Pokhrel — Developer Portfolio & GitHub Projects Dashboard",
    description:
      "Interactive Next.js & React portfolio and real-time GitHub projects dashboard.",
    url: "https://github.com/jay-sambhu/aashishpokhrel",
    images: [{ url: "/assets/avatar.svg" }],
  },
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const saved = localStorage.getItem('theme');
                  if (saved === 'light' || saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body id="top">
        {/* Ambient Floating Glow Orbs */}
        <div className="ambient-glows" aria-hidden="true">
          <div className="ambient-orb orb-1"></div>
          <div className="ambient-orb orb-2"></div>
          <div className="ambient-orb orb-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
