"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
  Phone,
  Lock,
} from "lucide-react";
import { formatNGN } from "@/lib/pricing-engine";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export default function BusinessNamePage() {
  const [bnPackage, setBnPackage] = useState<"Standard" | "Brand">("Standard");
  const price = bnPackage === "Standard" ? 25000 : 55000;

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 left-1/3" />

      {/* Hero */}
      <section className="py-12 sm:py-28 border-b border-slate-800 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <FileCheck className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
              <span>Enterprise &amp; Sole Proprietorship</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Business Name (Enterprise) Registration
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 font-normal">
              The fastest way for sole proprietors, freelancers, and small business owners to operate legally, open a corporate bank account, and invoice clients under a registered name.
            </p>
          </Reveal>

          <Reveal type="up" delay={300} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 pt-2 sm:pt-4 text-xs sm:text-sm font-bold text-slate-300">
              <span className="flex items-center gap-2 text-[#FDC902]">
                <Clock className="w-4 h-4 shrink-0" /> 2 to 5 Working Days
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" /> CAC Status Report Included
              </span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-2 text-[#FDC902]">
                <ShieldCheck className="w-4 h-4 shrink-0" /> Official Tax ID (TIN)
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 sm:py-32 bg-[#070b13]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Standard */}
            <Reveal type="left" duration={0.8}>
              <HoverCard>
                <div
                  onClick={() => setBnPackage("Standard")}
                  className={`p-6 sm:p-10 rounded-3xl border-2 transition-all cursor-pointer h-full flex flex-col justify-between ${
                    bnPackage === "Standard"
                      ? "bg-[#0f172a] border-[#FDC902] shadow-[0_12px_35px_rgba(253,201,2,0.2)]"
                      : "bg-[#0a0e17] border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-slate-400">
                      Standard Tier
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-white mt-2 sm:mt-3">{formatNGN(25000)}</div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">
                      Complete official CAC certificate and status report.
                    </p>

                    <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-300 font-medium">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                        <span>CAC Business Name Certificate</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                        <span>CAC Status Report</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                        <span>Official Tax ID (TIN)</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`mt-6 sm:mt-8 w-full py-3.5 rounded-xl font-black text-xs sm:text-sm transition-colors ${
                      bnPackage === "Standard"
                        ? "bg-[#FDC902] text-slate-950 shadow-md"
                        : "bg-slate-900 text-white border border-slate-700"
                    }`}
                  >
                    {bnPackage === "Standard" ? "Selected Package" : "Choose Standard"}
                  </button>
                </div>
              </HoverCard>
            </Reveal>

            {/* Brand */}
            <Reveal type="right" delay={150} duration={0.8}>
              <HoverCard>
                <div
                  onClick={() => setBnPackage("Brand")}
                  className={`p-6 sm:p-10 rounded-3xl border-2 transition-all cursor-pointer h-full flex flex-col justify-between ${
                    bnPackage === "Brand"
                      ? "bg-[#0f172a] border-[#FDC902] shadow-[0_12px_35px_rgba(253,201,2,0.2)]"
                      : "bg-[#0a0e17] border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div>
                    <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902]">
                      Brand Plus Tier
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-[#FDC902] mt-2 sm:mt-3">{formatNGN(55000)}</div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-2 font-normal">
                      CAC certificate plus executive logo and corporate identity files.
                    </p>

                    <div className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-200 font-bold">
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0" />
                        <span>Everything in Standard (Certificate, Report, TIN)</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                        <span>Executive Corporate Logo Design</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                        <span>Letterhead &amp; Business Card Template Files</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`mt-6 sm:mt-8 w-full py-3.5 rounded-xl font-black text-xs sm:text-sm transition-colors ${
                      bnPackage === "Brand"
                        ? "bg-[#FDC902] text-slate-950 shadow-md"
                        : "bg-slate-900 text-white border border-slate-700"
                    }`}
                  >
                    {bnPackage === "Brand" ? "Selected Package" : "Choose Brand Plus"}
                  </button>
                </div>
              </HoverCard>
            </Reveal>
          </div>

          {/* CTA */}
          <Reveal type="up" delay={300} duration={0.8}>
            <div className="mt-8 sm:mt-12 text-center">
              <a
                href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20want%20to%20register%20a%20Business%20Name%20(${bnPackage}%20Tier%2C%20${formatNGN(price)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-base rounded-2xl shadow-[0_12px_35px_rgba(253,201,2,0.3)] transition-all text-center"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Start Business Name on WhatsApp ({formatNGN(price)}) &rarr;</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
