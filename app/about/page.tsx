"use client";

import React from "react";
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

      {/* Philosophy Section */}
      <section className="py-24 sm:py-32 bg-[#070b13]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
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
            </Reveal>

            <Reveal type="right" delay={200} duration={0.8}>
              <HoverCard>
                <div className="p-10 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 space-y-6 shadow-2xl">
                  <div className="w-16 h-16 rounded-2xl bg-[#FDC902] text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg">
                    HM
                  </div>
                  <h3 className="text-2xl font-black text-white">Three Commitments to Every Client</h3>
                  <ul className="space-y-4 text-sm sm:text-base text-slate-300 font-medium">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] mt-0.5 shrink-0" />
                      <span><strong>Zero Rejection Guarantee:</strong> Every CAC filing is reviewed by accredited legal professionals before submission.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] mt-0.5 shrink-0" />
                      <span><strong>True Digital Handover:</strong> All certificates, MEMART documents, and brand manuals are delivered in high-resolution digital format.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] mt-0.5 shrink-0" />
                      <span><strong>Direct Founder Access:</strong> Client conversations are handled directly through our Port Harcourt headquarters.</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </Reveal>
          </div>

          {/* Regional Hubs */}
          <Reveal type="up" delay={300} duration={0.8}>
            <div className="p-10 sm:p-14 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                  Physical Footprint
                </span>
                <h3 className="text-3xl font-black text-white">Nationwide Coordination Desks</h3>
                <p className="text-sm text-slate-400 mt-2 font-normal">
                  Our main operational desk is located in Port Harcourt, with active contact desks across major Nigerian commercial centers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-sm">
                <div className="p-6 bg-[#0a0e17] rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-[#FDC902] font-black uppercase text-xs">Headquarters</span>
                  <strong className="block text-white text-base">Port Harcourt Desk</strong>
                  <p className="text-slate-400 text-xs">Rockville Place, SARS Road, Port Harcourt, Rivers State.</p>
                </div>

                <div className="p-6 bg-[#0a0e17] rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-slate-400 font-black uppercase text-xs">South-West Hub</span>
                  <strong className="block text-white text-base">Lagos Contact Desk</strong>
                  <p className="text-slate-400 text-xs">Okoye Street, Bucknor, Isolo Jakande Gate, Lagos State.</p>
                </div>

                <div className="p-6 bg-[#0a0e17] rounded-2xl border border-slate-800 space-y-2">
                  <span className="text-slate-400 font-black uppercase text-xs">Federal Capital</span>
                  <strong className="block text-white text-base">Abuja FCT Desk</strong>
                  <p className="text-slate-400 text-xs">Kusase Plaza, Dutse Apo, Federal Capital Territory.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
