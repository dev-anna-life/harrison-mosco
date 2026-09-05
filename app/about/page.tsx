"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Award,
  ArrowRight,
  Sparkles,
  Zap,
  Globe2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export default function AboutPage() {
  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 right-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/8 bottom-1/3 left-0" />

      {/* Hero */}
      <section className="py-10 sm:py-24 border-b border-slate-800 relative z-10 overflow-hidden">
        {/* Luxury Obsidian Ambient Background */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <Image
            src="/images/bg-luxury-obsidian.jpg"
            alt="Luxury Obsidian Architecture"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 via-[#0a0e17]/70 to-[#0a0e17]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 relative z-10">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[10px] sm:text-xs font-black uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDC902]" />
              <span>Accredited CAC Governance</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2]">
              About Harrison Mosco
            </h1>
            <p className="text-xs sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mt-2.5 sm:mt-3 font-normal">
              Bridging statutory Nigerian incorporation, banking compliance, executive brand presentation, and automated digital operations for founders worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Narrative with Side-by-Side Sections */}
      <section className="py-12 sm:py-24 bg-[#070b13] relative overflow-hidden">
        {/* Ambient Corporate Skyline Background */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <Image
            src="/images/bg-corporate-skyline.jpg"
            alt="Corporate Skyline Background"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070b13] via-[#070b13]/85 to-[#070b13]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-24 relative z-10">
          {/* 1. Founder Spotlight: Who Harrison Mosco is for CAC Purpose */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6">
              <div className="w-full relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image
                  src="/images/accredited-consultation.jpg"
                  alt="Accredited Corporate Affairs Commission Consultation Desk"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6 space-y-3.5 sm:space-y-5">
              <span className="text-[10px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                Principal Leadership &amp; Governance
              </span>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Meet Harrison Mosco
              </h2>
              <h3 className="text-sm sm:text-lg text-[#FDC902] font-bold">
                Principal Consultant &amp; Accredited Corporate Governance Strategist
              </h3>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                Harrison Mosco leads the strategic direction and corporate compliance desk at Harrison Mosco. With extensive accreditation and deep experience in Nigerian statutory corporate governance, his work focuses on ensuring ambitious entrepreneurs, corporate bodies, and diaspora investors move from concept to verified market presence without regulatory friction.
              </p>
              <div className="space-y-2.5 sm:space-y-3.5 pt-1">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <strong className="text-white text-xs sm:text-sm font-black flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FDC902] shrink-0" />
                    <span>Accredited CAC Governance &amp; Zero-Query Oversight</span>
                  </strong>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                    Harrison personally oversees corporate name reservation, object clause drafting, and MEMART share allocation to guarantee 100% compliance with CAMA (Companies and Allied Matters Act) regulations.
                  </p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                  <strong className="text-white text-xs sm:text-sm font-black flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#FDC902] shrink-0" />
                    <span>End-to-End Statutory Compliance Ecosystem</span>
                  </strong>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                    Direct coordination for SCUML anti-money laundering certification with the EFCC/NFIU for commercial banking, NRS Corporate Tax ID (TIN) activation on Rev360, and federal trademark filings.
                  </p>
                </div>
              </div>
              <div className="pt-1">
                <Link
                  href="/limited"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#FDC902] hover:underline"
                >
                  <span>Start Your Limited Company Registration &rarr;</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* 2. Operations & Fulfillment Desk (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6 space-y-3.5 sm:space-y-5 order-2 lg:order-1">
              <span className="text-[10px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                02. Operational Execution
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                An In-House Legal Fulfillment Team Behind Every Filing
              </h3>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                We do not outsource your company formation to unverified roadside agents. Our dedicated operational team in Port Harcourt validates director identification, drafts statutory resolutions, and verifies certified true copies directly with the CAC registry.
              </p>
              <ul className="space-y-2 sm:space-y-2.5 pt-1 text-xs sm:text-sm text-slate-200 font-bold">
                <li className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FDC902] shrink-0" />
                  <span>CAMA-Compliant Articles of Association &amp; Share Structuring</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FDC902] shrink-0" />
                  <span>Certified Digital True Copy PDFs with Verification Barcodes</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FDC902] shrink-0" />
                  <span>Dedicated Post-Incorporation Support (Annual Returns &amp; Directorships)</span>
                </li>
              </ul>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6 order-1 lg:order-2">
              <div className="w-full relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image
                  src="/images/cac-operations-team.jpg"
                  alt="Harrison Mosco In-House Legal Operations and CAC Fulfillment Team"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          </div>

          {/* 3. Diaspora & Enterprise Infrastructure (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6">
              <div className="w-full relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                <Image
                  src="/images/executive-boardroom.jpg"
                  alt="Enterprise Boardroom and Turnkey Launch Infrastructure"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6 space-y-3.5 sm:space-y-5">
              <span className="text-[10px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                03. Cross-Border Capability
              </span>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Built for Nigerian Founders &amp; Diaspora Investors Worldwide
              </h3>
              <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal">
                Diaspora entrepreneurs in the UK, US, Canada, and EU face significant challenges establishing Nigerian businesses—from opaque timelines to lack of physical trust. Harrison Mosco eliminates this gap with structured digital onboarding, certified legal handovers, and direct WhatsApp executive advisory.
              </p>
              <div className="space-y-2 sm:space-y-2.5 pt-1 text-xs sm:text-sm text-slate-200 font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FDC902] shrink-0" />
                  <span>Remote Diaspora Onboarding (NIN &amp; Passport Support)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FDC902] shrink-0" />
                  <span>SCUML Anti-Money Laundering for Diaspora Bank Accounts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Turnkey Branding, Company Profile &amp; Billing Automation</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Physical Headquarters Card */}
          <Reveal type="up" delay={200} duration={0.8}>
            <div className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl space-y-5 sm:space-y-7">
              <div className="text-center max-w-2xl mx-auto space-y-1.5 sm:space-y-2.5">
                <span className="text-[10px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                  Physical Footprint
                </span>
                <h3 className="text-xl sm:text-3xl font-black text-white">
                  Headquarters &amp; Direct Advisory Desk
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  Our primary legal operational desk operates from Port Harcourt, serving entrepreneurs across all 36 Nigerian states and international diaspora clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 max-w-4xl mx-auto text-xs sm:text-sm">
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-black text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-[#FDC902] shrink-0" />
                    <span>Port Harcourt Operations Headquarters</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                    1st Floor, Rockville Place, Opposite Suntaal, SARS Road, Port Harcourt, Rivers State, Nigeria.
                  </p>
                  <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    Open Mon - Fri: 8:00 AM - 6:00 PM WAT
                  </span>
                </div>

                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-white font-black text-xs sm:text-sm">
                    <Phone className="w-4 h-4 text-[#FDC902] shrink-0" />
                    <span>Direct WhatsApp &amp; Client Desk</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed font-normal">
                    Direct executive consultation with Harrison Mosco for pre-incorporation advisory and package onboarding.
                  </p>
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20reviewing%20your%20About%20page%20and%20want%20to%20consult%20on%20my%20business%20registration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#FDC902] hover:underline pt-0.5"
                  >
                    <span>Message +234 813 709 2154 on WhatsApp &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
