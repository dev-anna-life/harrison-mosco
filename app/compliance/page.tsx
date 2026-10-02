"use client";

import React from "react";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
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
              <div className="eyebrow">Regulatory Compliance · Statutory Operations</div>
              <h1 className="heading-1">Compliance &amp; Tax Solutions.</h1>
              <p className="lead-text">
                SCUML anti-money laundering registration, NRS Tax ID / Rev360, NAFDAC advisory and statutory annual return filings organized under one coordinated compliance desk.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
                <Link href="/scuml" className="ep-btn ep-btn-primary text-center justify-center">
                  SCUML Registration
                </Link>
                <Link href="/tax" className="ep-btn ep-btn-dark border border-[rgba(198,255,63,0.3)] text-[#f5f7ef] hover:border-[#c6ff3f] text-center justify-center">
                  Tax Setup &amp; TIN
                </Link>
                <Link href="/consult" className="ep-btn ep-btn-light text-center justify-center">
                  Talk to Our Team
                </Link>
              </div>
            </div>

            {/* Right Column: Rectangular Action Card */}
            <div className="lg:col-span-5">
              <div className="bg-[rgba(8,15,11,0.95)] border border-[rgba(198,255,63,0.42)] p-7 sm:p-8 space-y-5 shadow-2xl backdrop-blur-md rounded-2xl">
                {/* Header Badge */}
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(198,255,63,0.18)]">
                  <div className="w-10 h-10 rounded-full bg-[#10261a] border border-[#2b593f] flex items-center justify-center text-[#c6ff3f] shrink-0">
                    <span className="font-bold text-[15px]">✓</span>
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">Nigeria's Top Rated</div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">STATUTORY COMPLIANCE DESK</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[rgba(198,255,63,0.12)] border border-[rgba(198,255,63,0.25)] text-[#c6ff3f] font-mono text-[10px] tracking-wider uppercase font-bold">
                    FULL REGULATORY SUITE
                  </span>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                    Zero Regulatory Penalties.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Protect your enterprise with proactive anti-money laundering certifications, tax IDs, and regulatory filing support.
                  </p>
                </div>

                {/* 3 Checkmarks */}
                <div className="space-y-2 pt-2 border-t border-[rgba(198,255,63,0.14)] text-[13px] text-[#d5dfd8]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>SCUML Anti-Money Laundering Certification</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>NRS Tax ID &amp; Rev360 Annual Return Desk</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>Direct accreditation &amp; expedited processing</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href="/consult"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[14px] flex items-center gap-2 rounded-lg"
                  >
                    <span>Request Compliance Review</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Choose a Service (Light Cream #E6EADF Palette) */}
      <section className="bg-[#E6EADF] text-[#0c1210] py-20 lg:py-28 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">Choose a Service</div>
              <h2 className="text-[34px] sm:text-[46px] font-bold tracking-tight text-[#0c1210] mt-1">Build your compliance foundation.</h2>
            </div>
            <div className="text-[#2b3a30] text-[17px] font-medium leading-relaxed">
              Select the service you need. Each service has its own pathway, package and application.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/scuml" className="p-7 rounded-2xl bg-[#ffffff] border border-[#c5d1bf] hover:border-[#17382b] shadow-sm hover:shadow-md block transition-all group">
              <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#e5eadf] text-[#17382b] font-bold">01 / Compliance</span>
              <h3 className="text-2xl font-bold text-[#0c1210] mt-4 mb-2 group-hover:text-[#17382b] transition-colors">SCUML</h3>
              <p className="text-xs text-[#2b3a30] font-medium leading-relaxed">Registration support, compliance guidance and follow-up.</p>
              <span className="text-xs font-bold text-[#17382b] mt-6 block uppercase tracking-wider">
                Open SCUML →
              </span>
            </Link>

            <Link href="/tax" className="p-7 rounded-2xl bg-[#07130c] text-white border-2 border-[#c9f95a] shadow-xl block hover:scale-[1.02] transition-all">
              <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#10261a] text-[#c9f95a] font-bold">02 / Tax</span>
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">NRS Tax ID / Rev360</h3>
              <p className="text-xs text-[#c9d5cd] leading-relaxed">Tax identity and Rev360 filing-account setup.</p>
              <span className="text-xs font-bold text-[#c9f95a] mt-6 block uppercase tracking-wider">
                Open Tax setup →
              </span>
            </Link>

            <Link href="/nafdac" className="p-7 rounded-2xl bg-[#ffffff] border border-[#c5d1bf] hover:border-[#17382b] shadow-sm hover:shadow-md block transition-all group">
              <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#e5eadf] text-[#17382b] font-bold">03 / Regulatory</span>
              <h3 className="text-2xl font-bold text-[#0c1210] mt-4 mb-2 group-hover:text-[#17382b] transition-colors">NAFDAC</h3>
              <p className="text-xs text-[#2b3a30] font-medium leading-relaxed">Service framework reserved for the NAFDAC details to be incorporated.</p>
              <span className="text-xs font-bold text-[#526357] mt-6 block uppercase tracking-wider">Coming soon →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#ffffff] border border-[#c5d1bf] rounded-2xl p-6 lg:p-8 mt-12 shadow-sm">
            <div className="lg:col-span-4 overflow-hidden rounded-xl border border-[#c5d1bf]">
              <img 
                src="/images/accredited-consultation.jpg" 
                alt="Accredited Nigerian Tax & Compliance Advisory" 
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs font-mono text-[#17382b] font-bold uppercase tracking-wider">Regulatory &amp; Tax Desk</div>
              <h3 className="text-2xl font-bold text-[#0c1210]">Proactive statutory compliance for growing enterprises.</h3>
              <p className="text-sm text-[#2b3a30] font-medium leading-relaxed">
                Stay compliant with SCUML anti-money laundering certifications, NRS Tax ID registration, and Rev360 portal filings with accredited professional advisory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
