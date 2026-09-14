import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export const metadata: Metadata = {
  title: "Eponix Digital — We Build, Brand & Grow Businesses",
  description:
    "From business registration and compliance to branding, digital presence, AI, automation and growth, Eponix Digital builds the infrastructure your business needs to operate professionally and grow.",
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
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f4f6ed] text-[#0c1210] font-sans selection:bg-[#c9f95a] selection:text-[#0c1210]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
