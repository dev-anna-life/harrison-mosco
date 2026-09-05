"use client";

import React from "react";
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
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 right-1/4" />

      {/* Hero */}
      <section className="py-20 sm:py-28 border-b border-slate-800 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#FDC902]" />
              <span>Turnkey Enterprise Suite</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
              Ultimate Nigerian Business Launch Package
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mt-4 font-normal">
              Incorporate, brand, legally protect, and automate your Nigerian enterprise under one coordinated legal desk.
              A comprehensive launch solution designed for ambitious founders, diaspora investors, and growing corporate bodies.
            </p>
          </Reveal>

          {/* Pricing Box */}
          <Reveal type="scale" delay={300} duration={0.8}>
            <div className="p-8 sm:p-12 bg-[#0f172a] rounded-3xl border-2 border-slate-700/80 max-w-lg mx-auto shadow-2xl space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-[#FDC902] block">
                All-Inclusive Enterprise Fee
              </span>
              <div className="text-5xl font-black text-[#FDC902]">NGN 1,000,000</div>
              <p className="text-sm text-slate-400">Inclusive of 7.5% VAT and statutory government filing fees</p>
              <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-around text-sm text-slate-300 font-bold">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FDC902]" />
                  <span>10 to 21 Working Days</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Certified Execution</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal type="up" delay={450} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <a
                href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20interested%20in%20the%20Ultimate%20Nigeria%20Business%20Launch%20Package%20(NGN%201%2C000%2C000).%20Let's%20discuss%20my%20onboarding."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-base rounded-2xl shadow-[0_12px_35px_rgba(253,201,2,0.3)] transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Initiate Launch Onboarding via WhatsApp</span>
              </a>
              <Link
                href="/book"
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/60 text-white font-bold text-base rounded-2xl transition-all"
              >
                Schedule Founder Discovery Session
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 sm:py-32 bg-[#070b13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Scope of Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white">
                Eight Unified Deliverables
              </h2>
              <p className="text-base sm:text-lg text-slate-400 mt-2 font-normal">
                You provide your identification and corporate goals. Harrison Mosco delivers a fully functioning, legally protected commercial enterprise.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {launchFeatures.map((feat, idx) => (
              <Reveal key={idx} type="up" delay={idx * 100} duration={0.8}>
                <HoverCard>
                  <div className="p-8 sm:p-10 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 space-y-3 transition-card shadow-xl h-full">
                    <div className="flex items-center gap-3 text-white font-black text-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-8 font-normal">
                      {feat.description}
                    </p>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>

          {/* Timeline Roadmap */}
          <Reveal type="scale" delay={300} duration={0.8}>
            <div className="mt-20 max-w-5xl mx-auto p-10 sm:p-12 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-3">
                The 21-Day Launch Execution Roadmap
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 pt-4 text-sm">
                <div className="p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-base font-black">Days 1 to 5</strong>
                  <span className="text-[#FDC902] font-bold block mt-1">CAC Incorporation</span>
                  <p className="text-xs text-slate-400 mt-1.5">Name reservation, certified certificate, and MEMART.</p>
                </div>
                <div className="p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-base font-black">Days 6 to 10</strong>
                  <span className="text-[#FDC902] font-bold block mt-1">SCUML &amp; Trademark</span>
                  <p className="text-xs text-slate-400 mt-1.5">Anti-money laundering and brand name protection.</p>
                </div>
                <div className="p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-base font-black">Days 11 to 16</strong>
                  <span className="text-[#FDC902] font-bold block mt-1">Branding &amp; Video</span>
                  <p className="text-xs text-slate-400 mt-1.5">Executive brand manual and 1080p video commercial.</p>
                </div>
                <div className="p-5 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-base font-black">Days 17 to 21</strong>
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
