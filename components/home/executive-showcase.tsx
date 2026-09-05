"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Building2, CheckCircle2, ArrowRight, MapPin, Award } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export function ExecutiveShowcase() {
  return (
    <section className="py-24 sm:py-32 bg-[#060910] border-b border-slate-800 text-white relative overflow-hidden">
      {/* Bespoke Luxury Background Texture */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <Image
          src="/images/bg-luxury-obsidian.jpg"
          alt="Luxury Obsidian Architecture"
          fill
          className="object-cover object-center"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060910] via-transparent to-[#060910]" />
      </div>

      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 right-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/8 bottom-0 left-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal type="up" duration={0.8}>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider mb-4">
              <Award className="w-4 h-4" />
              <span>Accredited Physical &amp; Digital Presence</span>
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Corporate Authority Built on Physical Trust
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed font-normal max-w-2xl mx-auto">
              Unlike nameless online portals or unaccredited agents, Harrison Mosco provides accredited legal governance,
              executive board-level advisory, and nationwide coordination from our Port Harcourt headquarters.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Card 1 (First): Concierge Desk & Physical Client Handover */}
          <Reveal type="left" duration={0.8}>
            <HoverCard>
              <div className="bg-[#0f172a]/90 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-[#FDC902]/50 overflow-hidden shadow-2xl transition-card h-full flex flex-col justify-between">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  <Image
                    src="/images/concierge-reception.jpg"
                    alt="Harrison Mosco Concierge Reception and Client Onboarding"
                    fill
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>Port Harcourt HQ Concierge Desk</span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Direct Founder Concierge &amp; Diaspora Desk
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      Whether you are an entrepreneur in Port Harcourt or a Nigerian in the diaspora (UK, US, Canada),
                      our dedicated concierge coordinates your corporate certificates, trademark filings, and automated receipts seamlessly.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800 text-sm text-slate-200 font-bold">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Physical Office at Rockville Place, SARS Road</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Dedicated Diaspora Client Onboarding</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>Real-Time WhatsApp Updates on Every Milestone</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/book"
                      className="inline-flex items-center gap-2 text-sm font-black text-[#FDC902] hover:underline"
                    >
                      <span>Book a Strategic Consultation Session &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCard>
          </Reveal>

          {/* Card 2: Executive Office & Legal Governance */}
          <Reveal type="right" delay={200} duration={0.8}>
            <HoverCard>
              <div className="bg-[#0f172a]/90 backdrop-blur-sm rounded-3xl border border-slate-800 hover:border-[#FDC902]/50 overflow-hidden shadow-2xl transition-card h-full flex flex-col justify-between">
                <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                  <Image
                    src="/images/executive-office.jpg"
                    alt="Harrison Mosco Executive Corporate Governance Desk"
                    fill
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#FDC902]/40 text-[#FDC902] text-xs font-black uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#FDC902]" />
                    <span>Accredited CAC Governance</span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Executive Legal Foundation &amp; Compliance
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      Every Limited Company filing is directed by accredited corporate professionals who structure your authorized
                      share capital, draft bulletproof MEMART articles, and verify statutory compliance before submission to the CAC portal.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800 text-sm text-slate-200 font-bold">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Zero-Query CAC Document Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>NRS Corporate Tax ID (TIN) &amp; Rev360 Setup</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Certified High-Resolution Digital True Copies</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/limited"
                      className="inline-flex items-center gap-2 text-sm font-black text-[#FDC902] hover:underline"
                    >
                      <span>Explore Limited Company Registration &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </HoverCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
