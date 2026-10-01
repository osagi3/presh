import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description:
    "PREFELO Social Haus is a digital creative agency helping brands communicate, connect and grow online through strategic content, creative execution and consistent digital communication.",
  icons: {
    icon: "/pre_blu.png",
    apple: "/pre_blu.png",
  },
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description:
      "Strategy. Creativity. Consistency. Impact. We help ambitious brands build a stronger digital presence.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} dark h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("prefelo-theme");var t=s==="light"?"light":"dark";var r=document.documentElement;r.classList.remove("dark","light");r.classList.add(t);}catch(e){document.documentElement.classList.add("dark");}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
