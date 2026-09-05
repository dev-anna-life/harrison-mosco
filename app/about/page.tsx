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
      <section className="py-20 sm:py-28 border-b border-slate-800 relative z-10 overflow-hidden">
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

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#FDC902]" />
              <span>Accredited Corporate Affairs Commission (CAC) Governance</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              About Harrison Mosco
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mt-4 font-normal">
              Bridging statutory Nigerian incorporation, banking compliance, executive brand presentation, and automated digital operations for founders worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Narrative with Side-by-Side Sections */}
      <section className="py-24 sm:py-32 bg-[#070b13] relative overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 relative z-10">
          {/* 1. Founder Spotlight: Who Harrison Mosco is for CAC Purpose */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6">
              <HoverCard>
                <div className="rounded-3xl border-2 border-slate-800 hover:border-[#FDC902]/60 overflow-hidden shadow-2xl bg-[#0f172a] relative">
                  <div className="relative h-96 sm:h-[480px] lg:h-[520px] w-full">
                    <Image
                      src="/images/accredited-consultation.jpg"
                      alt="Accredited Corporate Affairs Commission Consultation Desk"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/20 to-transparent opacity-90" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#FDC902]/40 text-[#FDC902] text-xs font-black uppercase">
                      <Award className="w-3.5 h-3.5 text-[#FDC902]" />
                      <span>Accredited CAC Consultant</span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 space-y-1">
                      <strong className="text-white text-sm sm:text-base font-black block">
                        Direct Corporate Advisory &amp; Certificate Delivery
                      </strong>
                      <span className="text-xs text-[#FDC902] font-semibold block">
                        Port Harcourt Headquarters • Zero-Query Statutory Filing
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                Principal Leadership &amp; Governance
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Meet Harrison Mosco
              </h2>
              <h3 className="text-lg sm:text-xl text-[#FDC902] font-bold">
                Principal Consultant &amp; Accredited Corporate Governance Strategist
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Harrison Mosco leads the strategic direction and corporate compliance desk at Harrison Mosco. With extensive accreditation and deep experience in Nigerian statutory corporate governance, his work focuses on ensuring ambitious entrepreneurs, corporate bodies, and diaspora investors move from concept to verified market presence without regulatory friction.
              </p>
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <strong className="text-white text-sm font-black flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FDC902]" />
                    <span>Accredited CAC Governance &amp; Zero-Query Oversight</span>
                  </strong>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Harrison personally oversees corporate name reservation, object clause drafting, and MEMART share allocation to guarantee 100% compliance with CAMA (Companies and Allied Matters Act) regulations.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1.5">
                  <strong className="text-white text-sm font-black flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#FDC902]" />
                    <span>End-to-End Statutory Compliance Ecosystem</span>
                  </strong>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Direct coordination for SCUML anti-money laundering certification with the EFCC/NFIU for commercial banking, NRS Corporate Tax ID (TIN) activation on Rev360, and federal trademark filings.
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <Link
                  href="/limited"
                  className="inline-flex items-center gap-2 text-sm font-black text-[#FDC902] hover:underline"
                >
                  <span>Start Your Limited Company Registration &rarr;</span>
                </Link>
              </div>
            </Reveal>
          </div>

          {/* 2. Operations & Fulfillment Desk (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                02. Operational Execution
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                An In-House Legal Fulfillment Team Behind Every Filing
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                We do not outsource your company formation to unverified roadside agents. Our dedicated operational team in Port Harcourt validates director identification, drafts statutory resolutions, and verifies certified true copies directly with the CAC registry.
              </p>
              <ul className="space-y-3 pt-2 text-sm sm:text-base text-slate-200 font-bold">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                  <span>CAMA-Compliant Articles of Association &amp; Share Structuring</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                  <span>Certified Digital True Copy PDFs with Verification Barcodes</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                  <span>Dedicated Post-Incorporation Support (Annual Returns &amp; Directorships)</span>
                </li>
              </ul>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6 order-1 lg:order-2">
              <HoverCard>
                <div className="rounded-3xl border-2 border-slate-800 hover:border-[#FDC902]/60 overflow-hidden shadow-2xl bg-[#0f172a] relative">
                  <div className="relative h-80 sm:h-[440px] w-full">
                    <Image
                      src="/images/cac-operations-team.jpg"
                      alt="Harrison Mosco In-House Legal Operations and CAC Fulfillment Team"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/20 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#FDC902]/40 text-[#FDC902] text-xs font-black uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FDC902]" />
                      <span>In-House Legal Operations Desk</span>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </Reveal>
          </div>

          {/* 3. Diaspora & Enterprise Infrastructure (Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-6">
              <HoverCard>
                <div className="rounded-3xl border-2 border-slate-800 hover:border-[#FDC902]/60 overflow-hidden shadow-2xl bg-[#0f172a] relative">
                  <div className="relative h-80 sm:h-[440px] w-full">
                    <Image
                      src="/images/executive-boardroom.jpg"
                      alt="Enterprise Boardroom and Turnkey Launch Infrastructure"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-[#0a0e17]/20 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-[#FDC902]/40 text-[#FDC902] text-xs font-black uppercase">
                      <Globe2 className="w-3.5 h-3.5 text-[#FDC902]" />
                      <span>Diaspora &amp; Enterprise Desk</span>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                03. Cross-Border Capability
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Built for Nigerian Founders &amp; Diaspora Investors Worldwide
              </h3>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Diaspora entrepreneurs in the UK, US, Canada, and EU face significant challenges establishing Nigerian businesses—from opaque timelines to lack of physical trust. Harrison Mosco eliminates this gap with structured digital onboarding, certified legal handovers, and direct WhatsApp executive advisory.
              </p>
              <div className="space-y-3 pt-2 text-sm sm:text-base text-slate-200 font-bold">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                  <span>Remote Diaspora Onboarding (NIN &amp; International Passport Support)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                  <span>SCUML Anti-Money Laundering for Diaspora Bank Accounts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Turnkey Branding, Company Profile &amp; Billing Automation</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Physical Headquarters Card */}
          <Reveal type="up" delay={200} duration={0.8}>
            <div className="p-8 sm:p-14 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                  Physical Footprint
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  Headquarters &amp; Direct Advisory Desk
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  Our primary legal operational desk operates from Port Harcourt, serving entrepreneurs across all 36 Nigerian states and international diaspora clients.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-sm">
                <div className="p-6 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3 text-white font-black text-base">
                    <MapPin className="w-5 h-5 text-[#FDC902]" />
                    <span>Port Harcourt Operations Headquarters</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-normal">
                    1st Floor, Rockville Place, Opposite Suntaal, SARS Road, Port Harcourt, Rivers State, Nigeria.
                  </p>
                  <span className="inline-block text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/30">
                    Open Mon - Fri: 8:00 AM - 6:00 PM WAT
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-3">
                  <div className="flex items-center gap-3 text-white font-black text-base">
                    <Phone className="w-5 h-5 text-[#FDC902]" />
                    <span>Direct WhatsApp &amp; Client Desk</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-normal">
                    Direct executive consultation with Harrison Mosco for pre-incorporation advisory and package onboarding.
                  </p>
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20reviewing%20your%20About%20page%20and%20want%20to%20consult%20on%20my%20business%20registration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#FDC902] hover:underline pt-1"
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
