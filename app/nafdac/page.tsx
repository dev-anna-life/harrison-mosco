"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Phone } from "lucide-react";

export default function NafdacPage() {
  return (
    <div className="bg-[#0b120f] text-[#f5f7ef] min-h-screen">
      {/* 1. Hero with Bold Corporate Background & Action Card */}
      <section className="relative overflow-hidden bg-[#07100c] text-[#f5f7ef] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(198,255,63,0.14)]">
        {/* Bold Corporate Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ultimate-hero-bg.jpg"
            alt="Abuja Central Business District Architecture"
            className="w-full h-full object-cover object-right lg:object-center opacity-90 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07100c]/95 via-[#07100c]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-transparent to-[#07100c]/30" />
        </div>

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow">Regulatory Support · Food &amp; Drug Compliance</div>
              <h1 className="heading-1">NAFDAC Registration &amp; Advisory.</h1>
              <p className="lead-text">
                Product registration advisory, facility inspection preparation, documentation review, and NAFDAC compliance support for food, cosmetics, beverages, and medical devices.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
                <a
                  href="https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20NAFDAC%20registration%20support."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ep-btn ep-btn-primary text-center justify-center"
                >
                  Inquire via WhatsApp
                </a>
                <Link href="/consult" className="ep-btn ep-btn-dark border border-[rgba(198,255,63,0.3)] text-[#f5f7ef] hover:border-[#c6ff3f] text-center justify-center">
                  Book Consultation
                </Link>
                <Link href="/compliance" className="ep-btn ep-btn-light text-center justify-center">
                  Compliance Hub
                </Link>
              </div>
            </div>

            {/* Right Column: Rectangular Action Card */}
            <div className="lg:col-span-5">
              <div className="bg-[rgba(8,15,11,0.95)] border border-[rgba(198,255,63,0.42)] p-7 sm:p-8 space-y-5 shadow-2xl backdrop-blur-md rounded-2xl">
                {/* Header Badge */}
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(198,255,63,0.18)]">
                  <div className="w-10 h-10 rounded-full bg-[#10261a] border border-[#2b593f] flex items-center justify-center text-[#c6ff3f] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">Nigeria's Top Rated</div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">NAFDAC REGULATORY DESK</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[rgba(198,255,63,0.12)] border border-[rgba(198,255,63,0.25)] text-[#c6ff3f] font-mono text-[10px] tracking-wider uppercase font-bold">
                    PRODUCT CERTIFICATION
                  </span>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                    Regulatory Product Approval.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Documentation review, laboratory testing coordination, facility SOP guidance, and liaison support through final NAFDAC registration numbers.
                  </p>
                </div>

                {/* 3 Checkmarks */}
                <div className="space-y-2 pt-2 border-t border-[rgba(198,255,63,0.14)] text-[13px] text-[#d5dfd8]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>Food, Drug, Cosmetic &amp; Medical Device Advisory</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>Facility inspection readiness &amp; documentation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>Direct coordination with regulatory officers</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href="/consult"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[14px] flex items-center gap-2 rounded-lg"
                  >
                    <span>Request NAFDAC Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Notice Card */}
      <section className="py-20 lg:py-28">
        <div className="site-container max-w-3xl mx-auto">
          <div className="ep-card p-10 lg:p-14 space-y-6 text-center">
            <div className="eyebrow justify-center">Coming Soon</div>
            <h2 className="heading-2">NAFDAC service details are not yet available.</h2>
            <p className="lead-text mx-auto text-sm">
              The service is already positioned under Eponix Digital&apos;s Compliance &amp; Tax category. No pricing, requirements or processing claims are being invented until the approved information is provided.
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20NAFDAC%20registration%20support."
                target="_blank"
                rel="noopener noreferrer"
                className="ep-btn ep-btn-primary"
              >
                Inquire via WhatsApp &rarr;
              </a>
              <Link href="/compliance" className="ep-btn ep-btn-dark">
                View Compliance Hub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
