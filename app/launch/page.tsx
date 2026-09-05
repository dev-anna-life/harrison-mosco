"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Clock,
  ArrowRight,
  Phone,
  Lock,
  Layers,
} from "lucide-react";
import { formatNGN } from "@/lib/pricing-engine";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export default function UltimateLaunchPage() {
  const launchFeatures = [
    {
      title: "1. Corporate Incorporation and Legal Setup",
      description: "Complete CAC Limited Company registration with 1M to 2M share capital, MEMART drafting, CAC Status Report, and certified true copies.",
    },
    {
      title: "2. Anti-Money Laundering and Banking (SCUML)",
      description: "Official EFCC and SCUML certificate required by Nigerian commercial banks to operate corporate bank accounts without restriction.",
    },
    {
      title: "3. Federal Trademark Protection",
      description: "Exclusive trademark filing with the Nigerian Ministry of Industry, Trade and Investment to legally protect your brand name and logo.",
    },
    {
      title: "4. Tax Identification and Rev360 Setup",
      description: "Official NRS Corporate Tax ID (TIN) and active registration on the Rev360 portal for seamless annual compliance and tax filing.",
    },
    {
      title: "5. Executive Corporate Branding Suite",
      description: "Corporate logo, complete brand identity manual, official letterhead, business cards, staff ID card designs, and a 12-page company profile document.",
    },
    {
      title: "6. Corporate Website and Professional Email Infrastructure",
      description: "Multi-page corporate website with SSL security, one year managed cloud hosting, custom domain, and corporate email accounts.",
    },
    {
      title: "7. Studio-Grade Marketing Video Commercial",
      description: "Full HD promotional video commercial engineered by our dedicated in-house media creator for your official social media launch.",
    },
    {
      title: "8. Automated Invoicing and Billing Setup",
      description: "Agentic automation configured so your business issues automated digital receipts and payment notifications to clients within two seconds.",
    },
  ];

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      {/* Ambient Orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/10 top-0 right-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/10 bottom-1/4 left-10" />

      {/* Hero */}
      <section className="py-12 sm:py-28 border-b border-slate-800 relative z-10 overflow-hidden">
        {/* Luxury Obsidian Architectural Background Texture */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <Image
            src="/images/bg-luxury-obsidian.jpg"
            alt="Luxury Architecture Texture"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 via-[#0a0e17]/70 to-[#0a0e17]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 relative z-10">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
              <span>Turnkey Enterprise Suite</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.15]">
              Ultimate Nigerian Business Launch Package
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mt-3 sm:mt-4 font-normal">
              Incorporate, brand, legally protect, and automate your Nigerian enterprise under one coordinated legal desk.
              A comprehensive launch solution designed for ambitious founders, diaspora investors, and growing corporate bodies.
            </p>
          </Reveal>

          {/* Pricing Box */}
          <Reveal type="scale" delay={300} duration={0.8}>
            <div className="p-6 sm:p-10 lg:p-12 bg-[#0f172a] rounded-3xl border-2 border-slate-700/80 max-w-lg mx-auto shadow-2xl space-y-2.5 sm:space-y-3">
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902] block">
                All-Inclusive Enterprise Fee
              </span>
              <div className="text-3xl sm:text-5xl font-black text-[#FDC902]">NGN 1,000,000</div>
              <p className="text-xs sm:text-sm text-slate-400">Inclusive of 7.5% VAT and statutory government filing fees</p>
              <div className="mt-5 pt-5 sm:mt-6 sm:pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-around gap-2 text-xs sm:text-sm text-slate-300 font-bold">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FDC902] shrink-0" />
                  <span>10 to 21 Working Days</span>
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Certified Execution</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal type="up" delay={450} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 pt-2 sm:pt-4">
              <a
                href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20interested%20in%20the%20Ultimate%20Nigeria%20Business%20Launch%20Package%20(NGN%201%2C000%2C000).%20Let's%20discuss%20my%20onboarding."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-base rounded-2xl shadow-[0_12px_35px_rgba(253,201,2,0.3)] transition-all flex items-center justify-center gap-2 sm:gap-3"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Initiate Launch Onboarding via WhatsApp</span>
              </a>
              <Link
                href="/book"
                className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/60 text-white font-bold text-xs sm:text-base rounded-2xl transition-all text-center"
              >
                Schedule Founder Discovery Session
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 sm:py-32 bg-[#070b13] relative overflow-hidden">
        {/* Corporate Skyline Ambient Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/bg-corporate-skyline.jpg"
            alt="Corporate Skyline Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b13] via-[#070b13]/85 to-[#070b13]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Scope of Work
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white">
                Eight Unified Deliverables
              </h2>
              <p className="text-xs sm:text-base text-slate-400 mt-2 font-normal">
                You provide your identification and corporate goals. Harrison Mosco delivers a fully functioning, legally protected commercial enterprise.
              </p>
            </div>
          </Reveal>

          {/* Visual Deliverables Showcase (Uncropped 16:9 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Reveal type="left" delay={100} duration={0.8}>
              <div className="rounded-3xl bg-[#0f172a] border border-slate-800 overflow-hidden shadow-2xl space-y-3 sm:space-y-4">
                <div className="relative h-44 sm:h-52 w-full">
                  <Image
                    src="/images/executive-boardroom.jpg"
                    alt="Corporate Brand Identity and Media Deliverables"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-[#FDC902] bg-slate-950/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#FDC902]/30 backdrop-blur-sm">
                    Visual Identity
                  </span>
                </div>
                <div className="p-4 sm:p-6 pt-0 space-y-1.5 sm:space-y-2">
                  <h4 className="text-base sm:text-lg font-black text-white">Executive Brand System</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Logo suite, 12-page company profile, stationery templates, and high-impact social media video commercials.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal type="up" delay={200} duration={0.8}>
              <div className="rounded-3xl bg-[#0f172a] border border-slate-800 overflow-hidden shadow-2xl space-y-3 sm:space-y-4">
                <div className="relative h-44 sm:h-52 w-full">
                  <Image
                    src="/images/automated-invoicing-desk.jpg"
                    alt="Live Automated Invoicing and Billing Operations"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-emerald-400 bg-slate-950/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                    Automated Operations
                  </span>
                </div>
                <div className="p-4 sm:p-6 pt-0 space-y-1.5 sm:space-y-2">
                  <h4 className="text-base sm:text-lg font-black text-white">Automated WhatsApp Receipts</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Real-time payment triggers that issue branded customer receipts directly to WhatsApp and email in two seconds.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal type="right" delay={300} duration={0.8}>
              <div className="rounded-3xl bg-[#0f172a] border border-slate-800 overflow-hidden shadow-2xl space-y-3 sm:space-y-4">
                <div className="relative h-44 sm:h-52 w-full">
                  <Image
                    src="/images/cac-operations-team.jpg"
                    alt="Enterprise Corporate Legal and SCUML Protection"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-[#FDC902] bg-slate-950/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-[#FDC902]/30 backdrop-blur-sm">
                    Statutory Protection
                  </span>
                </div>
                <div className="p-4 sm:p-6 pt-0 space-y-1.5 sm:space-y-2">
                  <h4 className="text-base sm:text-lg font-black text-white">SCUML, Trademark &amp; CAC</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Anti-money laundering clearance, nationwide trademark ownership, and certified limited company incorporation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-6xl mx-auto">
            {launchFeatures.map((feat, idx) => (
              <Reveal key={idx} type="up" delay={idx * 100} duration={0.8}>
                <HoverCard>
                  <div className="p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 space-y-2.5 sm:space-y-3 transition-card shadow-xl h-full">
                    <div className="flex items-center gap-2.5 sm:gap-3 text-white font-black text-base sm:text-lg">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs sm:text-base text-slate-300 leading-relaxed pl-6 sm:pl-8 font-normal">
                      {feat.description}
                    </p>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>

          {/* Timeline Roadmap */}
          <Reveal type="scale" delay={300} duration={0.8}>
            <div className="mt-12 sm:mt-20 max-w-5xl mx-auto p-5 sm:p-10 lg:p-12 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl">
              <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-3">
                The 21-Day Launch Execution Roadmap
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pt-2 sm:pt-4 text-xs sm:text-sm">
                <div className="p-4 sm:p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 1 to 5</strong>
                  <span className="text-[#FDC902] font-bold block mt-1">CAC Incorporation</span>
                  <p className="text-xs text-slate-400 mt-1.5">Name reservation, certified certificate, and MEMART.</p>
                </div>
                <div className="p-4 sm:p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 6 to 10</strong>
                  <span className="text-[#FDC902] font-bold block mt-1">SCUML &amp; Trademark</span>
                  <p className="text-xs text-slate-400 mt-1.5">Anti-money laundering and brand name protection.</p>
                </div>
                <div className="p-4 sm:p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 11 to 16</strong>
                  <span className="text-[#FDC902] font-bold block mt-1">Branding &amp; Video</span>
                  <p className="text-xs text-slate-400 mt-1.5">Executive brand manual and 1080p video commercial.</p>
                </div>
                <div className="p-4 sm:p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 17 to 21</strong>
                  <span className="text-emerald-400 font-bold block mt-1">Website &amp; Handover</span>
                  <p className="text-xs text-slate-400 mt-1.5">Web platform deployment and automated receipting.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
