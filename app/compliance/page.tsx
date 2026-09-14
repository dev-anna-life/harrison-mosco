"use client";

import React from "react";
import Link from "next/link";

export default function CompliancePage() {
  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-20 lg:py-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Business Readiness</div>
          <h1 className="heading-1">Compliance &amp; Tax</h1>
          <p className="lead-text">
            SCUML, NRS Tax ID / Rev360, NAFDAC and related support — organised under one compliance pathway.
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
            <div className="ep-card">
              <div className="ep-tag">01 / Compliance</div>
              <h3 className="heading-3">SCUML</h3>
              <p>Registration support, compliance guidance and follow-up.</p>
              <Link href="/#consultation" className="ep-link">
                Open SCUML →
              </Link>
            </div>

            <div className="ep-card lime">
              <div className="ep-tag text-[#071007] border-[#071007]">02 / Tax</div>
              <h3 className="heading-3 text-[#071007]">NRS Tax ID / Rev360</h3>
              <p className="text-[#183018]">Tax identity and Rev360 filing-account setup.</p>
              <Link href="/#consultation" className="ep-link text-[#071007]">
                Open Tax setup →
              </Link>
            </div>

            <div className="ep-card">
              <div className="ep-tag">03 / Regulatory</div>
              <h3 className="heading-3">NAFDAC</h3>
              <p>Service framework reserved for the NAFDAC details to be incorporated.</p>
              <span className="ep-link text-[#7f8d84]">Coming soon →</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
