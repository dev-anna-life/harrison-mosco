import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ScrollObserver } from "@/components/motion/ScrollObserver";
import { PageTransitionLoader } from "@/components/motion/PageTransitionLoader";

export const metadata: Metadata = {
  title: "Eponix Digital | Build, Brand and Grow Businesses",
  description:
    "Eponix Digital builds the business infrastructure, brand and digital systems that help Nigerian businesses grow.",
  keywords: [
    "Eponix Digital",
    "Business Registration Nigeria",
    "CAC Registration",
    "Limited Company Registration",
    "SCUML Registration",
    "Corporate Branding Nigeria",
    "AI Business Automation",
    "Trademark Registration Nigeria",
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/eponix-logo-transparent.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700;1,800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={null}>
          <PageTransitionLoader />
        </Suspense>
        <ScrollObserver />
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
