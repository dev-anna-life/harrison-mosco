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
      <section className="relative pt-10 pb-16 sm:pt-24 sm:pb-32 border-b border-slate-800/80 overflow-hidden">
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
          <div className="text-center max-w-5xl mx-auto space-y-5 sm:space-y-8">
            {/* Eyebrow Pill */}
            <Reveal type="down" duration={0.6}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full bg-white/5 border border-[#FDC902]/30 text-white text-[11px] sm:text-xs md:text-sm font-bold shadow-lg backdrop-blur-md max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#FDC902] animate-pulse shrink-0"></span>
                <span className="text-[#FDC902] font-black">From Idea to Automation</span>
                <span className="text-slate-500 hidden xs:inline">•</span>
                <span className="text-slate-300 hidden xs:inline">Nigeria&apos;s Next-Gen Launch Platform</span>
              </div>
            </Reveal>

            {/* Main Fluid Headline */}
            <Reveal type="up" delay={150} duration={0.8}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.14] sm:leading-[1.08]">
                We Do Not Just Register Companies. We{" "}
                <span className="text-[#FDC902] underline decoration-[#FDC902]/50 underline-offset-4 sm:underline-offset-8">
                  Brand and Automate
                </span>{" "}
                Them.
              </h1>
            </Reveal>

            {/* Subheading */}
            <Reveal type="up" delay={300} duration={0.8}>
              <p className="text-sm sm:text-lg lg:text-2xl font-normal text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Move from a raw concept to an officially incorporated Nigerian entity with approved CAC documents,
                executive corporate branding, studio video commercials, and automated billing from day one.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal type="up" delay={450} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-1 sm:pt-4">
                <Link
                  href="/limited"
                  className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-lg rounded-2xl shadow-[0_12px_35px_rgba(253,201,2,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 sm:gap-3"
                >
                  <Building2 className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                  <span>Register Limited Company (from NGN 60,000)</span>
                </Link>

                <Link
                  href="/launch"
                  className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 bg-slate-900/90 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/60 text-white font-bold text-sm sm:text-lg rounded-2xl transition-all flex items-center justify-center gap-2.5 sm:gap-3"
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#FDC902] shrink-0" />
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
              <div className="pt-4 sm:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto text-left">
                <div className="p-4 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-[#FDC902]/40 backdrop-blur-sm">
                  <span className="text-2xl sm:text-4xl font-black text-[#FDC902] block">3 to 7 Days</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 sm:mt-2">Average CAC Delivery</p>
                </div>
                <div className="p-4 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-emerald-500/40 backdrop-blur-sm">
                  <span className="text-2xl sm:text-4xl font-black text-emerald-400 block">100% Digital</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 sm:mt-2">Original Certified PDFs</p>
                </div>
                <div className="p-4 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-[#FDC902]/40 backdrop-blur-sm">
                  <span className="text-2xl sm:text-4xl font-black text-white block">36 States</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-300 mt-1 sm:mt-2">Nationwide Coverage</p>
                </div>
                <div className="p-4 sm:p-6 bg-slate-900/70 border border-slate-800 rounded-2xl transition-card hover:border-[#FDC902]/40 backdrop-blur-sm">
                  <span className="text-2xl sm:text-4xl font-black text-[#FDC902] block">Direct Desk</span>
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

      {/* 3. The 3 Core Pillars (Spacious Side-by-Side Architecture) */}
      <section className="py-16 sm:py-32 bg-[#070b13] text-white border-b border-slate-800 relative overflow-hidden">
        {/* Ambient Corporate Skyline Background */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <Image
            src="/images/bg-corporate-skyline.jpg"
            alt="Corporate Skyline Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b13] via-[#070b13]/90 to-[#070b13]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-28">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[11px] sm:text-sm font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Integrated Launch Capabilities
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Everything Handled Under One Coordinated Team
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-3 sm:mt-4 leading-relaxed font-normal">
                Eliminate the frustration of coordinating between unaccredited CAC agents, freelance designers,
                and video production teams. We handle the entire commercial foundation.
              </p>
            </div>
          </Reveal>

          {/* Split 1: Legal Foundation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>01. Statutory Legal Foundation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                CAC Incorporation, SCUML Banking &amp; Trademark Protection
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
                We secure official pre-incorporation name reservations, draft compliant MEMART documents with custom share allocations,
                and obtain certified CAC certificates without queries. Every entity is equipped with verified NRS Corporate Tax ID and anti-money laundering clearance.
              </p>
              <ul className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-base text-slate-200 font-bold">
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                  <span>Limited Companies, Business Names &amp; Trustees</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                  <span>SCUML Anti-Money Laundering for Bank Accounts</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                  <span>Federal Ministry of Trade Trademark Registration</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/limited"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#FDC902] hover:underline"
                >
                  <span>Explore Limited Company Incorporation &rarr;</span>
                </Link>
              </div>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6">
              <div className="w-full relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image
                  src="/images/cac-operations-team.jpg"
                  alt="Nigerian CAC Legal Operations and Document Fulfillment Team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>
          </div>

          {/* Split 2: Visual Presentation (Reversed) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <Reveal type="left" delay={200} duration={0.8} className="lg:col-span-6 order-2 lg:order-1">
              <div className="w-full relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image
                  src="/images/executive-boardroom.jpg"
                  alt="Executive Corporate Boardroom and Enterprise Branding"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal type="right" duration={0.8} className="lg:col-span-6 space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>02. Visual Presentation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Corporate Branding, Company Profile &amp; Video Media
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
                Move into the market with instant executive credibility. Direct brand oversight overseen by Harrison Mosco produces a complete corporate identity manual, letterheads, business cards, a 12-page investor profile, and studio-grade video commercials for social media launch.
              </p>
              <ul className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-base text-slate-200 font-bold">
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                  <span>Executive Corporate Logo &amp; Typography System</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                  <span>12-Page Structured Company Profile Document</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                  <span>1080p Studio Video Commercials for Social Media</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/launch"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#FDC902] hover:underline"
                >
                  <span>View Ultimate Launch Package &rarr;</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Split 3: Automated Operations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>03. Automated Operations</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Live WhatsApp Billing, Automated Invoicing &amp; Audit Logs
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
                End repetitive manual bookkeeping and missing transaction receipts. We configure automated invoicing workflows that instantly generate branded digital receipts with customer references and dispatch them to client WhatsApp and email within two seconds of payment clearance.
              </p>
              <ul className="space-y-2.5 sm:space-y-3 pt-2 text-xs sm:text-base text-slate-200 font-bold">
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                  <span>Instant 2-Second WhatsApp Receipt Dispatch</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                  <span>Real-Time Customer Audit &amp; Revenue Telemetry</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                  <span>Cloud Invoicing Architecture with Verified Barcodes</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link
                  href="/limited#application"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#FDC902] hover:underline"
                >
                  <span>Configure Automated Operations on Limited Company &rarr;</span>
                </Link>
              </div>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6">
              <div className="w-full relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image
                  src="/images/automated-invoicing-desk.jpg"
                  alt="Automated Billing, WhatsApp Receipts and Live Telemetry Desk"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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
      <section className="py-16 sm:py-28 bg-[#070b13] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Verified Client Feedback
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mt-1">
                Trusted by Founders Across Nigeria
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
            <Reveal type="left" delay={150} duration={0.8}>
              <div className="p-6 sm:p-8 bg-[#0f172a] rounded-3xl border border-slate-800 space-y-4 sm:space-y-5 shadow-xl transition-card hover:border-[#FDC902]/40 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#FDC902] text-sm sm:text-lg font-black tracking-wider">★★★★★ 5.0 RATING</div>
                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal mt-2.5 sm:mt-3">
                    &ldquo;My experience with Harrison Mosco has been excellent. Their efficiency, professionalism, and prompt service delivery exceeded expectations. Our Limited Company certificate arrived ahead of schedule.&rdquo;
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 border-t border-slate-800">
                  <strong className="block text-sm sm:text-lg font-black text-white">Don Ekpenyong</strong>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Limited Company Client, Lagos</span>
                </div>
              </div>
            </Reveal>

            <Reveal type="up" delay={250} duration={0.8}>
              <div className="p-6 sm:p-8 bg-[#0f172a] rounded-3xl border border-slate-800 space-y-4 sm:space-y-5 shadow-xl transition-card hover:border-[#FDC902]/40 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#FDC902] text-sm sm:text-lg font-black tracking-wider">★★★★★ 5.0 RATING</div>
                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal mt-2.5 sm:mt-3">
                    &ldquo;The automated receipt system alone transformed our operations. We stopped writing paper receipts, and Harrison delivered our CAC documents and complete company profile without any queries.&rdquo;
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 border-t border-slate-800">
                  <strong className="block text-sm sm:text-lg font-black text-white">Anefiok Godfrey Obong</strong>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Managing Director, Port Harcourt</span>
                </div>
              </div>
            </Reveal>

            <Reveal type="right" delay={350} duration={0.8}>
              <div className="p-6 sm:p-8 bg-[#0f172a] rounded-3xl border border-slate-800 space-y-4 sm:space-y-5 shadow-xl transition-card hover:border-[#FDC902]/40 h-full flex flex-col justify-between">
                <div>
                  <div className="text-[#FDC902] text-sm sm:text-lg font-black tracking-wider">★★★★★ 5.0 RATING</div>
                  <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal mt-2.5 sm:mt-3">
                    &ldquo;The launch commercial generated by their media team received outstanding engagement on Instagram during our launch week. Highly professional corporate partner.&rdquo;
                  </p>
                </div>
                <div className="pt-3.5 sm:pt-4 border-t border-slate-800">
                  <strong className="block text-sm sm:text-lg font-black text-white">Chioma Ebere</strong>
                  <span className="text-xs sm:text-sm font-semibold text-slate-400">Retail Brand Founder, Abuja</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <Reveal type="up" duration={0.8}>
        <section className="py-16 sm:py-28 bg-[#05080f] text-white border-t border-slate-800 relative overflow-hidden">
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

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6 relative z-10">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Ready to Form and Automate Your Business?
            </h2>
            <p className="text-sm sm:text-base lg:text-xl font-normal max-w-2xl mx-auto text-slate-300 leading-relaxed">
              Start your Limited Company application online or discuss directly with Harrison Mosco for initial advisory.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 pt-4 sm:pt-6">
              <Link
                href="/limited"
                className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-lg rounded-2xl transition-all shadow-[0_12px_35px_rgba(253,201,2,0.3)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Start Limited Company Application &rarr;
              </Link>
              <a
                href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20want%20to%20discuss%20launching%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm sm:text-lg rounded-2xl transition-all border border-slate-700 hover:border-[#FDC902]/60"
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
