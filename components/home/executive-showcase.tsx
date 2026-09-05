"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Building2, CheckCircle2, ArrowRight, MapPin, Phone, Award, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export function ExecutiveShowcase() {
  return (
    <section className="py-16 sm:py-32 bg-[#060910] border-b border-slate-800 text-white relative overflow-hidden">
      {/* Luxury Obsidian Architectural Grid Texture */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/images/bg-luxury-obsidian.jpg"
          alt="Luxury Obsidian Architecture Texture"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060910] via-[#060910]/80 to-[#060910]" />
      </div>

      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/10 top-0 right-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/10 bottom-0 left-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Prominent Concierge Reception Desk Image (Uncropped 16:10 Natural Split) */}
          <Reveal type="left" duration={0.8} className="lg:col-span-7">
            <div className="w-full relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <Image
                src="/images/concierge-reception.jpg"
                alt="Harrison Mosco Corporate Reception and Concierge Desk"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </Reveal>

          {/* Right: Content & Executive Advisory */}
          <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Physical Trust &amp; Corporate Excellence</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              A Dedicated Legal &amp; Concierge Desk for Serious Founders
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal">
              Unlike nameless internet portals, Harrison Mosco pairs cutting-edge automated billing with a physical corporate presence.
              Every filing, share allocation, and brand asset is coordinated with direct founder accountability.
            </p>

            <div className="space-y-2.5 sm:space-y-3.5 pt-2 text-xs sm:text-base text-slate-200 font-bold">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                <span>Zero-Query CAC Incorporation Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                <span>Seamless Diaspora Onboarding (UK, US, Canada, EU)</span>
              </div>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                <span>Instant Digital PDF Delivery + Physical Barcodes</span>
              </div>
            </div>

            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/limited"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl sm:rounded-2xl text-xs sm:text-base shadow-[0_12px_30px_rgba(253,201,2,0.3)] transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Start Limited Company</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20reviewing%20your%20concierge%20desk%20and%20want%20to%20discuss%20incorporating%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/50 text-white font-bold rounded-xl sm:rounded-2xl text-xs sm:text-base transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Advisory</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
