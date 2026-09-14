import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

export const metadata: Metadata = {
  title: "Business & Digital Solutions | Eponix Digital",
  description:
    "Eponix Digital — business foundation, branding, digital systems, AI, automation and growth for businesses in Nigeria.",
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
      <body className="min-h-screen flex flex-col bg-[#0b120f] text-[#f5f7ef]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
