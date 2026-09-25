"use client";

import React from "react";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Business Readiness</div>
          <h1 className="heading-1">Compliance &amp; Tax</h1>
          <p className="lead-text">
            SCUML, NRS Tax ID / Rev360, NAFDAC and related support, organised under one compliance pathway.
          </p>
        </div>
      </section>

      {/* 2. Choose a Service */}
      <section className="bg-[#102118] py-20 lg:py-28 border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Choose a Service</div>
              <h2 className="heading-2">Build your compliance foundation.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Select the service you need. Each service has its own pathway, package and application.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/scuml" className="ep-card block hover:border-[#c6ff3f] transition-all">
              <div className="ep-tag">01 / Compliance</div>
              <h3 className="heading-3">SCUML</h3>
              <p>Registration support, compliance guidance and follow-up.</p>
              <span className="ep-link mt-6 block">
                Open SCUML →
              </span>
            </Link>

            <Link href="/tax" className="ep-card lime block hover:brightness-105 transition-all">
              <div className="ep-tag" style={{ color: "#071007", borderColor: "#071007" }}>02 / Tax</div>
              <h3 className="heading-3" style={{ color: "#071007" }}>NRS Tax ID / Rev360</h3>
              <p style={{ color: "#183018", fontWeight: 600 }}>Tax identity and Rev360 filing-account setup.</p>
              <span className="ep-link" style={{ color: "#071007", marginTop: "24px", display: "block" }}>
                Open Tax setup →
              </span>
            </Link>

            <Link href="/nafdac" className="ep-card block hover:border-[#c6ff3f] transition-all">
              <div className="ep-tag">03 / Regulatory</div>
              <h3 className="heading-3">NAFDAC</h3>
              <p>Service framework reserved for the NAFDAC details to be incorporated.</p>
              <span className="ep-link text-[#7f8d84] mt-6 block">Coming soon →</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07100c] border border-[#26362c] p-6 lg:p-8 mt-12">
            <div className="lg:col-span-4 overflow-hidden border border-[#26362c]">
              <img 
                src="/images/accredited-consultation.jpg" 
                alt="Accredited Nigerian Tax & Compliance Advisory" 
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-8 space-y-2">
              <div className="ep-tag text-[#c6ff3f]">Regulatory &amp; Tax Desk</div>
              <h3 className="heading-3">Proactive statutory compliance for growing enterprises.</h3>
              <p className="text-sm text-[#aab6ad] leading-relaxed">
                Stay compliant with SCUML anti-money laundering certifications, NRS Tax ID registration, and Rev360 portal filings with accredited professional advisory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
