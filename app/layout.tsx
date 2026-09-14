import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Eponix Digital — Build. Brand. Grow.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
