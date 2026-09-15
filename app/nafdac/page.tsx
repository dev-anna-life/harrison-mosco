"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, ShieldCheck, Phone } from "lucide-react";

export default function NafdacPage() {
  return (
    <div className="bg-[#0b120f] text-[#f5f7ef] min-h-screen">
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-16 lg:py-20 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Regulatory Support</div>
          <h1 className="heading-1">NAFDAC Registration</h1>
          <p className="lead-text max-w-2xl">
            This service pathway is being prepared. Detailed NAFDAC packages, requirements and application information will be added when supplied.
          </p>
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
