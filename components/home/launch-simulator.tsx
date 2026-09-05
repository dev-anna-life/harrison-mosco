"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  calculateLimitedCompanyPrice,
  LimitedPackageType,
  formatNGN,
} from "@/lib/pricing-engine";
import { DigitalReceipt } from "@/components/shared/digital-receipt";
import { Sliders, Check, ArrowRight, Video, CheckCircle2, Send } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function LaunchSimulator() {
  const [packageType, setPackageType] = useState<LimitedPackageType>("Pro");
  const [shareCapital, setShareCapital] = useState<number>(1);
  const [directorCount, setDirectorCount] = useState<number>(2);
  const [includeAiVideo, setIncludeAiVideo] = useState<boolean>(true);
  const [includeAutomation, setIncludeAutomation] = useState<boolean>(true);
  const [companyName, setCompanyName] = useState<string>("Apex Dynamics");

  // Lead capture state
  const [leadName, setLeadName] = useState("");
  const [leadPhone, setLeadPhone] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic pricing calculation
  const pricing = calculateLimitedCompanyPrice({
    packageType,
    shareCapitalMillions: shareCapital,
    directorCount,
    includeAiVideo,
    includeAutomatedInvoicing: includeAutomation,
  });

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: leadName,
          whatsappPhone: leadPhone,
          proposedBusinessName: companyName,
          packageInterested: packageType,
          shareCapitalMillions: shareCapital,
          source: "launch-simulator",
        }),
      });
      setLeadSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappPayload = `Hello Harrison Mosco, I configured a package on your website Launch Simulator:
• Company Name: ${companyName} Ltd
• Tier: ${packageType} Package
• Share Capital: NGN ${shareCapital} Million (${directorCount} Directors)
• AI Video Commercial: ${includeAiVideo ? "Yes" : "No"}
• Automated Invoicing: ${includeAutomation ? "Yes" : "No"}
• Total Estimated: ${pricing.formattedTotal}
Please confirm availability and let's get started.`;

  const whatsappUrl = `https://wa.me/2348137092154?text=${encodeURIComponent(whatsappPayload)}`;

  return (
    <section className="py-16 sm:py-32 bg-[#0a0e17] border-b border-slate-800 text-white relative overflow-hidden">
      {/* Luxury Obsidian Ambient Background Texture */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <Image
          src="/images/bg-luxury-obsidian.jpg"
          alt="Fintech & Automation Obsidian Texture"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17] via-[#0a0e17]/80 to-[#0a0e17]" />
      </div>

      <div className="glow-orb w-[500px] h-[500px] bg-[#FDC902]/8 top-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal type="up" duration={0.8}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Cost Calculator</span>
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Configure Your Custom Launch and Automation Setup
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
              Adjust your authorized share capital, add our dedicated marketing video deliverables, and inspect your itemized government and legal breakdown live.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#0f172a] p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-6 sm:space-y-8 shadow-xl">
            {/* 1. Proposed Name */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200 mb-2">
                1. Proposed Business Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter proposed name (e.g. Apex Logistics)"
                className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-[#0a0e17] border-2 border-slate-700 rounded-xl sm:rounded-2xl text-white font-bold focus:border-[#FDC902] focus:outline-none text-sm sm:text-lg"
              />
            </div>

            {/* 2. Package Tier Selector */}
            <div>
              <label className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200 mb-2">
                2. Select Core Package Tier
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {(["Starter", "Pro", "Premium"] as LimitedPackageType[]).map((pkg) => (
                  <button
                    key={pkg}
                    type="button"
                    onClick={() => setPackageType(pkg)}
                    className={`p-3 sm:p-5 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                      packageType === pkg
                        ? "bg-[#141d33] border-[#FDC902] text-white shadow-[0_4px_20px_rgba(253,201,2,0.2)]"
                        : "bg-[#0a0e17] border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-black">{pkg}</span>
                      {pkg === "Pro" && (
                        <span className="text-[9px] sm:text-[10px] bg-[#FDC902] text-slate-950 font-black px-1.5 py-0.5 rounded uppercase">
                          Hot
                        </span>
                      )}
                    </div>
                    <div className="text-sm sm:text-xl font-black text-[#FDC902] mt-1.5 sm:mt-2">
                      {pkg === "Starter" ? "NGN 60k" : pkg === "Pro" ? "NGN 100k" : "NGN 350k"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Share Capital Slider */}
            <div>
              <div className="flex justify-between items-center mb-2.5 sm:mb-3">
                <label className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200">
                  3. Authorized Share Capital (in Millions)
                </label>
                <span className="text-xs sm:text-base font-black text-[#FDC902] bg-[#0a0e17] px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-800 shadow-sm">
                  {shareCapital} Million Shares
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={shareCapital}
                onChange={(e) => setShareCapital(Number(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FDC902]"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 mt-2 font-bold font-mono">
                <span>1M (Standard)</span>
                <span>5M (Corporate Contracts)</span>
                <span>10M (High Tender)</span>
              </div>
            </div>

            {/* 4. Directors Count */}
            <div>
              <div className="flex justify-between items-center mb-2.5 sm:mb-3">
                <label className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200">
                  4. Number of Directors / Shareholders
                </label>
                <span className="text-xs sm:text-base font-black text-white bg-[#0a0e17] px-3 py-1 sm:px-4 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-800 shadow-sm">
                  {directorCount} Directors
                </span>
              </div>
              <div className="flex gap-1.5 sm:gap-2.5">
                {[1, 2, 3, 4, 5].map((cnt) => (
                  <button
                    key={cnt}
                    type="button"
                    onClick={() => setDirectorCount(cnt)}
                    className={`flex-1 py-2.5 sm:py-3 text-xs sm:text-sm font-black rounded-lg sm:rounded-xl border-2 transition-all ${
                      directorCount === cnt
                        ? "bg-[#FDC902] text-slate-950 border-[#FDC902]"
                        : "bg-[#0a0e17] border-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {cnt}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Add-ons */}
            <div className="pt-4 border-t border-slate-800 space-y-3 sm:space-y-4">
              <span className="block text-xs sm:text-sm font-black uppercase tracking-wider text-slate-200">
                5. Selected Optional Capabilities
              </span>

              {/* AI Video Commercial */}
              <label className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#0a0e17] rounded-xl sm:rounded-2xl border border-slate-800 hover:border-[#FDC902]/40 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAiVideo}
                  onChange={(e) => setIncludeAiVideo(e.target.checked)}
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded text-[#FDC902] focus:ring-[#FDC902] bg-slate-900 border-slate-700"
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm sm:text-base font-black text-white">
                      Branded AI Video Launch Commercial
                    </span>
                    <span className="text-xs sm:text-base font-black text-[#FDC902]">+NGN 45,000</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    Spokesperson or product commercial video produced by our in-house media specialist.
                  </p>
                </div>
              </label>

              {/* Automated Invoicing */}
              <label className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-[#0a0e17] rounded-xl sm:rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeAutomation}
                  onChange={(e) => setIncludeAutomation(e.target.checked)}
                  className="mt-1 w-4 h-4 sm:w-5 sm:h-5 rounded text-emerald-500 focus:ring-emerald-500 bg-slate-900 border-slate-700"
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-sm sm:text-base font-black text-white">
                      Automated Receipting and Invoicing Setup
                    </span>
                    <span className="text-xs sm:text-base font-black text-emerald-400">+NGN 35,000</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                    When clients pay, your system issues automated digital WhatsApp and email receipts instantly.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Output Digital Receipt Column */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <DigitalReceipt
              packageType={packageType}
              basePrice={pricing.basePrice}
              shareCapitalMillions={shareCapital}
              extraSharesCost={pricing.extraSharesCost}
              directorCount={directorCount}
              extraDirectorsCost={pricing.extraDirectorsCost}
              aiVideoCost={pricing.aiVideoCost}
              automatedInvoicingCost={pricing.automatedInvoicingCost}
              totalPayable={pricing.totalPayable}
              companyNamePreview={`${companyName} Ltd`}
            />

            {/* Save & Chat Form */}
            <div className="bg-[#0f172a] p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 text-sm">
              <h4 className="font-black text-white mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Send className="w-4 h-4 text-[#FDC902]" />
                <span>Save Specification and Contact Harrison</span>
              </h4>

              {leadSubmitted ? (
                <div className="p-4 sm:p-5 bg-emerald-950/30 border border-emerald-500/40 rounded-xl sm:rounded-2xl text-emerald-300 text-center">
                  <CheckCircle2 className="w-6 h-6 mx-auto mb-1.5 text-emerald-400" />
                  <span className="font-black text-sm sm:text-base">Specification Saved</span>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1">
                    Harrison Mosco has received your details. Click below to continue on WhatsApp.
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3.5 inline-block w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-xs sm:text-sm transition-colors shadow"
                  >
                    Open WhatsApp Chat Now
                  </a>
                </div>
              ) : (
                <form onSubmit={handleLeadSubmit} className="space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="px-4 py-3 bg-[#0a0e17] border border-slate-700 rounded-xl text-white placeholder:text-slate-500 text-xs sm:text-sm font-medium"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp (e.g. 08123...)"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="px-4 py-3 bg-[#0a0e17] border border-slate-700 rounded-xl text-white placeholder:text-slate-500 text-xs sm:text-sm font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 sm:py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-xl text-xs sm:text-sm transition-colors border border-slate-700"
                  >
                    {isSubmitting ? "Saving..." : "Save Specification and Send Alert"}
                  </button>
                  <div className="text-center pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-bold hover:underline text-xs sm:text-sm"
                    >
                      Instant WhatsApp One-Tap Contact &rarr;
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
