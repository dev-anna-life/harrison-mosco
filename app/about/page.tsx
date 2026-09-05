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
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export default function AboutPage() {
  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 right-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/8 bottom-1/3 left-0" />

      {/* Hero */}
      <section className="py-20 sm:py-28 border-b border-slate-800 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#FDC902]" />
              <span>Accredited Legal &amp; Branding Studio</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              About Harrison Mosco
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mt-4 font-normal">
              Harrison Mosco bridges the gap between statutory corporate registration, executive visual branding, and automated digital operations for Nigerian enterprises worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Philosophy & Executive Visual Section */}
      <section className="py-24 sm:py-32 bg-[#070b13]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal type="left" duration={0.8} className="space-y-6">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                The Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Why Standard Registration Is No Longer Enough
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Registering a company with the CAC gives you legal existence, but it does not give you commercial capability.
                Founders spend weeks chasing unaccredited agents, then months struggling to get a corporate bank account opened,
                writing manual paper receipts, and hunting for graphic designers who understand corporate elegance.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Harrison Mosco was created to resolve this breakdown. We combine legal incorporation, SCUML banking compliance,
                executive brand identity, video marketing reels, and automated customer billing into one seamless, professional engagement.
              </p>

              <div className="pt-2">
                <Link
                  href="/limited"
                  className="inline-flex items-center gap-2 text-sm font-black text-[#FDC902] hover:underline"
                >
                  <span>Start Your Limited Company Registration &rarr;</span>
                </Link>
              </div>
            </Reveal>

            {/* Visual Hero Image: Executive Office */}
            <Reveal type="right" delay={200} duration={0.8}>
              <HoverCard>
                <div className="rounded-3xl border border-slate-800 hover:border-[#FDC902]/50 overflow-hidden shadow-2xl bg-[#0f172a] relative">
                  <div className="relative h-96 sm:h-[420px] w-full">
                    <Image
                      src="/images/executive-office.jpg"
                      alt="Harrison Mosco Executive Boardroom Leadership"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-slate-800 space-y-1">
                      <strong className="text-white text-sm sm:text-base font-black block">
                        Accredited Corporate Affairs Commission Governance
                      </strong>
                      <span className="text-xs text-[#FDC902] font-semibold block">
                        Port Harcourt Headquarters • Complete Zero-Query Guarantee
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </Reveal>
          </div>

          {/* 3 Commitments */}
          <Reveal type="up" delay={200} duration={0.8}>
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black text-white">Three Commitments to Every Client</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm sm:text-base text-slate-300 font-medium">
                <div className="p-5 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#FDC902] font-black">
                    <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                    <span>Zero Rejection Guarantee</span>
                  </div>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed">
                    Every CAC filing is reviewed by accredited legal professionals before submission to ensure approval without query.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#FDC902] font-black">
                    <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                    <span>True Digital Handover</span>
                  </div>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed">
                    All certificates, MEMART documents, and brand manuals are delivered in high-resolution certified digital format.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#FDC902] font-black">
                    <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                    <span>Direct Founder Access</span>
                  </div>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed">
                    Client conversations are handled directly with Harrison Mosco through our Port Harcourt headquarters and WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Regional Hubs & Physical Footprint */}
          <Reveal type="up" delay={300} duration={0.8}>
            <div className="p-8 sm:p-14 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl space-y-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block">
                    Physical Footprint
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">
                    Nationwide Coordination Desks &amp; Client Concierge
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                    Our primary operational and legal desk operates from Port Harcourt, with dedicated regional contact desks serving entrepreneurs across Lagos, Abuja, and international diaspora clients worldwide.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
                    <div className="p-4 bg-[#0a0e17] rounded-xl border border-slate-800 space-y-1">
                      <span className="text-[#FDC902] font-black uppercase text-[10px] block">Headquarters</span>
                      <strong className="block text-white text-sm">Port Harcourt</strong>
                      <p className="text-slate-400 text-[11px]">Rockville Place, SARS Road</p>
                    </div>

                    <div className="p-4 bg-[#0a0e17] rounded-xl border border-slate-800 space-y-1">
                      <span className="text-slate-400 font-black uppercase text-[10px] block">South-West Hub</span>
                      <strong className="block text-white text-sm">Lagos Desk</strong>
                      <p className="text-slate-400 text-[11px]">Bucknor, Isolo Jakande Gate</p>
                    </div>

                    <div className="p-4 bg-[#0a0e17] rounded-xl border border-slate-800 space-y-1">
                      <span className="text-slate-400 font-black uppercase text-[10px] block">Federal Capital</span>
                      <strong className="block text-white text-sm">Abuja FCT</strong>
                      <p className="text-slate-400 text-[11px]">Kusase Plaza, Dutse Apo</p>
                    </div>
                  </div>
                </div>

                {/* Concierge Image */}
                <div className="lg:col-span-5">
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                    <Image
                      src="/images/concierge-reception.jpg"
                      alt="Harrison Mosco Concierge Reception Desk"
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-xs font-bold text-white bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                      In-Person Client Onboarding Desk
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
