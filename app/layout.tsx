import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harrison Mosco | Business Launch & Agentic AI Automation Studio",
  description:
    "From Idea to Automation. Nigeria's premier business infrastructure studio for CAC Limited Company incorporation, corporate branding, AI video commercials, and automated invoicing.",
  keywords: [
    "Harrison Mosco",
    "CAC Registration Nigeria",
    "Limited Company Registration",
    "Business Name CAC",
    "SCUML Registration",
    "Corporate Branding Nigeria",
    "AI Video Marketing",
    "Business Automation Nigeria",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#070e1c] text-white selection:bg-amber-500 selection:text-slate-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
