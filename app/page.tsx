"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Video,
  FileCheck,
  Layers,
  Lock,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";
import { LivePreviewer } from "@/components/home/live-previewer";
import { LaunchSimulator } from "@/components/home/launch-simulator";
import { ComparisonMatrix } from "@/components/home/comparison-matrix";
import { NameCheckerLead } from "@/components/home/name-checker-lead";
import { ExecutiveShowcase } from "@/components/home/executive-showcase";

export default function HomePage() {
  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      {/* Ambient background orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 left-1/4 -translate-x-1/2" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/8 top-1/3 right-0" />
      <div className="glow-orb w-[650px] h-[650px] bg-[#FDC902]/6 bottom-1/4 left-0" />

      {/* 1. Hero Section with Fluid Typography & Luxury Background Texture */}
      <section className="relative pt-16 pb-20 sm:pt-28 sm:pb-32 border-b border-slate-800/80 overflow-hidden">
        {/* Subtle Luxury Obsidian Architectural Texture */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <Image
            src="/images/bg-luxury-obsidian.jpg"
            alt="Harrison Mosco Luxury Texture"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 via-[#0a0e17]/60 to-[#0a0e17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Eyebrow Pill */}
            <Reveal type="down" duration={0.6}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/5 border border-[#FDC902]/30 text-white text-xs sm:text-sm font-bold shadow-lg backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FDC902] animate-pulse"></span>
                <span className="text-[#FDC902]">From Idea to Automation</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Nigeria&apos;s Next-Gen Launch Platform</span>
              </div>
            </Reveal>

            {/* Main Fluid Headline */}
            <Reveal type="up" delay={150} duration={0.8}>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.08]">
                We Do Not Just Register Companies. We{" "}
                <span className="text-[#FDC902] underline decoration-[#FDC902]/50 underline-offset-8">
                  Brand and Automate
                </span>{" "}
                Them.
              </h1>
            </Reveal>

            {/* Subheading */}
            <Reveal type="up" delay={300} duration={0.8}>
              <p className="text-lg sm:text-xl lg:text-2xl font-normal text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Move from a raw concept to an officially incorporated Nigerian entity with approved CAC documents,
                executive corporate branding, studio video commercials, and automated billing from day one.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal type="up" delay={450} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-2 sm:pt-4">
                <Link
                  href="/limited"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-[0_12px_35px_rgba(253,201,2,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  <Building2 className="w-6 h-6" />
                  <span>Register Limited Company (from NGN 60,000)</span>
                </Link>

                <Link
                  href="/launch"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-slate-900/90 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/60 text-white font-bold text-base sm:text-lg rounded-2xl transition-all flex items-center justify-center gap-3"
                >
                  <Sparkles className="w-6 h-6 text-[#FDC902]" />
                  <span>Ultimate Launch Package</span>
                </Link>
              </div>
            </Reveal>

            {/* Free CAC Name Availability Lead Checker */}
            <Reveal type="up" delay={550} duration={0.8}>
              <NameCheckerLead />
            </Reveal>

            {/* Operational Metrics */}
            <Reveal type="scale" delay={600} duration={0.9}>
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto text-left">
                <div className="p-5 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-[#FDC902]/40 backdrop-blur-sm">
                  <span className="text-3xl sm:text-4xl font-black text-[#FDC902] block">3 to 7 Days</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 sm:mt-2">Average CAC Delivery</p>
                </div>
                <div className="p-5 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-emerald-500/40 backdrop-blur-sm">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 block">100% Digital</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 sm:mt-2">Original Certified PDFs</p>
                </div>
                <div className="p-5 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-[#FDC902]/40 backdrop-blur-sm">
                  <span className="text-3xl sm:text-4xl font-black text-white block">36 States</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 sm:mt-2">Nationwide Coverage</p>
                </div>
                <div className="p-5 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-[#FDC902]/40 backdrop-blur-sm">
                  <span className="text-3xl sm:text-4xl font-black text-[#FDC902] block">Direct Desk</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 sm:mt-2">WhatsApp Advisory</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Interactive Live Mockup Previewer with Download Capability */}
      <Reveal type="up" duration={0.8}>
        <LivePreviewer />
      </Reveal>

      {/* 3. The 3 Core Pillars */}
      <section className="py-20 sm:py-28 bg-[#070b13] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs sm:text-sm font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Integrated Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Everything Handled Under One Coordinated Team
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal">
                Eliminate the frustration of coordinating between unaccredited CAC agents, freelance designers,
                and video production teams. We handle the entire commercial foundation.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 1 */}
            <Reveal type="left" delay={150} duration={0.8}>
              <HoverCard>
                <div className="p-8 sm:p-10 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 transition-card space-y-5 shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FDC902]/15 text-[#FDC902] flex items-center justify-center shadow-md">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mt-5">
                      01. Legal Foundation
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">CAC Incorporation and Compliance</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3 font-normal">
                      Limited Companies, Business Names, and Incorporated Trustees. We secure official pre-incorporation name reservations,
                      draft compliant MEMART documents, and issue your verified NRS Corporate Tax ID.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 pt-5 border-t border-slate-800/80 font-bold">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>CAC Status Report and MEMART</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>SCUML Anti-Money Laundering</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Trademark Filing and Protection</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal type="up" delay={250} duration={0.8}>
              <HoverCard>
                <div className="p-8 sm:p-10 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 transition-card space-y-5 shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#FDC902]/15 text-[#FDC902] flex items-center justify-center shadow-md">
                      <Sparkles className="w-7 h-7 text-[#FDC902]" />
                    </div>
                    <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mt-5">
                      02. Visual Presentation
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Corporate Branding and Media</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3 font-normal">
                      Executive design direction overseen directly by Harrison Mosco, paired with studio-grade marketing commercials
                      produced for your official social media launch across LinkedIn, Instagram, and TikTok.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 pt-5 border-t border-slate-800/80 font-bold">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Executive Logo and Brand System</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>12-Page Corporate Profile PDF</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>High-Impact Video Commercials</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal type="right" delay={350} duration={0.8}>
              <HoverCard>
                <div className="p-8 sm:p-10 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 transition-card space-y-5 shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center shadow-md">
                      <Zap className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-black text-emerald-400 uppercase tracking-widest block mt-5">
                      03. Automated Operations
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Invoicing and Receipt Automation</h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3 font-normal">
                      End repetitive manual paperwork. We configure digital billing and automated receipts that trigger instantly
                      to your customers via WhatsApp and email the moment payments clear.
                    </p>
                  </div>
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 pt-5 border-t border-slate-800/80 font-bold">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Automated WhatsApp Receipts</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Cloud Invoicing Architecture</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Customer Audit Tracking</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3.5. Executive Authority Showcase (Thanny Chris Luxury Visual Anchors) */}
      <ExecutiveShowcase />

      {/* 4. Interactive Simulator with Lead Capture & PDF Export */}
      <Reveal type="up" duration={0.8}>
        <LaunchSimulator />
      </Reveal>

      {/* 5. Comparison Matrix */}
      <Reveal type="up" duration={0.8}>
        <ComparisonMatrix />
      </Reveal>

      {/* 7. Client Reviews */}
      <section className="py-20 sm:py-28 bg-[#070b13] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Verified Client Feedback
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
                Trusted by Founders Across Nigeria
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Reveal type="left" delay={150} duration={0.8}>
              <div className="p-8 bg-[#0f172a] rounded-3xl border border-slate-800 space-y-5 shadow-xl transition-card hover:border-[#FDC902]/40 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#FDC902] text-lg font-black tracking-wider">★★★★★ 5.0 RATING</div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mt-3">
                    &ldquo;My experience with Harrison Mosco has been excellent. Their efficiency, professionalism, and prompt service delivery exceeded expectations. Our Limited Company certificate arrived ahead of schedule.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <strong className="block text-base sm:text-lg font-black text-white">Don Ekpenyong</strong>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Limited Company Client, Lagos</span>
                </div>
              </div>
            </Reveal>

            <Reveal type="up" delay={250} duration={0.8}>
              <div className="p-8 bg-[#0f172a] rounded-3xl border border-slate-800 space-y-5 shadow-xl transition-card hover:border-[#FDC902]/40 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#FDC902] text-lg font-black tracking-wider">★★★★★ 5.0 RATING</div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mt-3">
                    &ldquo;The automated receipt system alone transformed our operations. We stopped writing paper receipts, and Harrison delivered our CAC documents and complete company profile without any queries.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <strong className="block text-base sm:text-lg font-black text-white">Anefiok Godfrey Obong</strong>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Managing Director, Port Harcourt</span>
                </div>
              </div>
            </Reveal>

            <Reveal type="right" delay={350} duration={0.8}>
              <div className="p-8 bg-[#0f172a] rounded-3xl border border-slate-800 space-y-5 shadow-xl transition-card hover:border-[#FDC902]/40 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#FDC902] text-lg font-black tracking-wider">★★★★★ 5.0 RATING</div>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mt-3">
                    &ldquo;The launch commercial generated by their media team received outstanding engagement on Instagram during our launch week. Highly professional corporate partner.&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800">
                  <strong className="block text-base sm:text-lg font-black text-white">Chioma Ebere</strong>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Retail Brand Founder, Abuja</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <Reveal type="up" duration={0.8}>
        <section className="py-20 sm:py-28 bg-[#05080f] text-white border-t border-slate-800 relative overflow-hidden">
          {/* Corporate Skyline Ambient Background */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
            <Image
              src="/images/bg-corporate-skyline.jpg"
              alt="Nigerian Corporate Skyline"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080f] via-[#05080f]/50 to-[#05080f]" />
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Ready to Form and Automate Your Business?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto text-slate-300 leading-relaxed">
              Start your Limited Company application online or discuss directly with Harrison Mosco for initial advisory.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 pt-6">
              <Link
                href="/limited"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-2xl transition-all shadow-[0_12px_35px_rgba(253,201,2,0.3)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Start Limited Company Application &rarr;
              </Link>
              <a
                href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20want%20to%20discuss%20launching%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base sm:text-lg rounded-2xl transition-all border border-slate-700 hover:border-[#FDC902]/60"
              >
                Consult Directly on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
