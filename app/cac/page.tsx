"use client";

import React, { useState } from "react";
import Link from "next/link";

type CACCategory = "business" | "company" | "trustees";

interface CACPackage {
  name: string;
  price: string;
  items: string[];
  featured?: boolean;
}

const cacData: Record<CACCategory, { title: string; intro: string; packages: CACPackage[] }> = {
  business: {
    title: "Business Name",
    intro: "Choose the package that fits your Business Name registration.",
    packages: [
      {
        name: "Starter",
        price: "₦35,000",
        items: ["CAC registration", "Status Report", "NRS Tax ID"],
      },
      {
        name: "Pro",
        price: "₦55,000",
        items: [
          "Everything in Starter",
          "Tax filing",
          "Account setup",
          "Business readiness guidance",
          "Logo, letterhead, business card and staff ID design",
        ],
        featured: true,
      },
      {
        name: "Premium",
        price: "Pricing on request",
        items: [
          "Everything in Pro",
          "One-page professional website",
          "Business email",
          "Domain, hosting and SSL for one year",
        ],
      },
    ],
  },
  company: {
    title: "Limited Company",
    intro: "Choose the package that fits your Limited Company registration.",
    packages: [
      {
        name: "Starter",
        price: "₦60,000",
        items: ["CAC certificate", "Status Report", "NRS Tax ID"],
      },
      {
        name: "Pro",
        price: "₦100,000",
        items: [
          "Registration",
          "TIN",
          "Tax filing setup",
          "Tax account setup",
          "Logo, letterhead, business card and staff ID design",
          "12-page company profile design (no printing)",
        ],
        featured: true,
      },
      {
        name: "Premium",
        price: "₦350,000",
        items: [
          "Everything in Pro",
          "One-page professional website",
          "Business email",
          "Domain, hosting and SSL setup for one year",
        ],
      },
    ],
  },
  trustees: {
    title: "NGO / Incorporated Trustees",
    intro: "Choose the package that fits your Incorporated Trustees registration.",
    packages: [
      {
        name: "Starter",
        price: "₦130,000",
        items: [
          "CAC Incorporated Trustees registration",
          "CAC registration certificate",
          "Status report",
          "Constitution",
          "Newspaper publication",
          "Required stamping / supporting setup",
        ],
      },
      {
        name: "Pro",
        price: "₦180,000",
        items: [
          "Everything in Starter",
          "Bank account opening readiness and compliance",
          "SCUML registration support",
          "SCUML certificate and login details",
          "Sensitization documents",
          "Monthly report templates",
        ],
        featured: true,
      },
      {
        name: "Premium",
        price: "₦450,000",
        items: [
          "Everything in Pro",
          "Logo",
          "Letterhead",
          "Business card",
          "ID card designs",
          "12-page organisation profile design",
          "One-page professional website",
          "Customized business email",
        ],
      },
    ],
  },
};

export default function CACPage() {
  const [activeCategory, setActiveCategory] = useState<CACCategory>("company");
  const currentData = cacData[activeCategory];

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
              <div className="eyebrow">CAC Accredited · Business Foundation Hub</div>
              <h1 className="heading-1">CAC Registration Pathways.</h1>
              <p className="lead-text">
                Choose the statutory legal registration pathway that fits your business, private company, or non-profit organisation with accredited CAC processing.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
                <Link href="/business-name" className="ep-btn ep-btn-primary text-center justify-center">
                  Business Name
                </Link>
                <Link href="/limited" className="ep-btn ep-btn-dark border border-[rgba(198,255,63,0.3)] text-[#f5f7ef] hover:border-[#c6ff3f] text-center justify-center">
                  Limited Company
                </Link>
                <Link href="/trustees" className="ep-btn ep-btn-light text-center justify-center">
                  Incorporated Trustees
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
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">CAC ACCREDITED PORTAL</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[rgba(198,255,63,0.12)] border border-[rgba(198,255,63,0.25)] text-[#c6ff3f] font-mono text-[10px] tracking-wider uppercase font-bold">
                    CORPORATE AFFAIRS COMMISSION
                  </span>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                    Official Legal Setup.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    CAC business name certificates, limited liability incorporation, and registered trustee setups with full regulatory compliance.
                  </p>
                </div>

                {/* 3 Checkmarks */}
                <div className="space-y-2 pt-2 border-t border-[rgba(198,255,63,0.14)] text-[13px] text-[#d5dfd8]">
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>Direct accreditation with CAC officers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>Status reports &amp; official certified documentation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-[#c6ff3f] font-bold">✓</span>
                    <span>TIN &amp; tax portal readiness included</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href="/services"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[14px] flex items-center gap-2 rounded-lg"
                  >
                    <span>Browse All Pathways</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pathway Selector (Light Cream #E6EADF Palette) */}
      <section className="bg-[#E6EADF] text-[#0c1210] py-20 lg:py-28 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">CAC Registration</div>
              <h2 className="text-[34px] sm:text-[46px] font-bold tracking-tight text-[#0c1210] mt-1">Choose your registration pathway.</h2>
            </div>
            <div className="text-[#2b3a30] text-[17px] font-medium leading-relaxed">
              Start by choosing what you are registering. Your selected pathway will then reveal its packages, requirements and application.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            <div
              onClick={() => setActiveCategory("business")}
              className={`p-7 rounded-2xl border transition-all cursor-pointer block ${
                activeCategory === "business"
                  ? "bg-[#07130c] text-white border-2 border-[#c9f95a] shadow-xl scale-[1.02]"
                  : "bg-[#ffffff] text-[#0c1210] border-[#c5d1bf] hover:border-[#17382b] shadow-sm hover:shadow-md"
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-wider font-bold mb-2 text-[#c9f95a]">01 / Business</div>
              <h3 className="text-2xl font-bold mb-2">Business Name</h3>
              <p className={`text-xs ${activeCategory === "business" ? "text-[#c9d5cd]" : "text-[#2b3a30] font-medium"}`}>
                For individuals and businesses registering a Business Name.
              </p>
              <b className={`mt-6 block text-[13px] font-bold uppercase tracking-wider ${activeCategory === "business" ? "text-[#c9f95a]" : "text-[#17382b]"}`}>
                Select this path &rarr;
              </b>
            </div>

            <div
              onClick={() => setActiveCategory("company")}
              className={`p-7 rounded-2xl border transition-all cursor-pointer block ${
                activeCategory === "company"
                  ? "bg-[#07130c] text-white border-2 border-[#c9f95a] shadow-xl scale-[1.02]"
                  : "bg-[#ffffff] text-[#0c1210] border-[#c5d1bf] hover:border-[#17382b] shadow-sm hover:shadow-md"
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-wider font-bold mb-2 text-[#c9f95a]">02 / Company</div>
              <h3 className="text-2xl font-bold mb-2">Limited Company</h3>
              <p className={`text-xs ${activeCategory === "company" ? "text-[#c9d5cd]" : "text-[#2b3a30] font-medium"}`}>
                For businesses incorporating as a Limited Company.
              </p>
              <b className={`mt-6 block text-[13px] font-bold uppercase tracking-wider ${activeCategory === "company" ? "text-[#c9f95a]" : "text-[#17382b]"}`}>
                Select this path &rarr;
              </b>
            </div>

            <div
              onClick={() => setActiveCategory("trustees")}
              className={`p-7 rounded-2xl border transition-all cursor-pointer block ${
                activeCategory === "trustees"
                  ? "bg-[#07130c] text-white border-2 border-[#c9f95a] shadow-xl scale-[1.02]"
                  : "bg-[#ffffff] text-[#0c1210] border-[#c5d1bf] hover:border-[#17382b] shadow-sm hover:shadow-md"
              }`}
            >
              <div className="font-mono text-[11px] uppercase tracking-wider font-bold mb-2 text-[#c9f95a]">03 / NGO</div>
              <h3 className="text-2xl font-bold mb-2">NGO / Trustees</h3>
              <p className={`text-xs ${activeCategory === "trustees" ? "text-[#c9d5cd]" : "text-[#2b3a30] font-medium"}`}>
                For organisations registering as Incorporated Trustees.
              </p>
              <b className={`mt-6 block text-[13px] font-bold uppercase tracking-wider ${activeCategory === "trustees" ? "text-[#c9f95a]" : "text-[#17382b]"}`}>
                Select this path &rarr;
              </b>
            </div>
          </div>

          {/* Packages Panel */}
          <div className="space-y-3 mb-8">
            <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight text-[#0c1210]">{currentData.title} packages</h2>
            <p className="text-[15px] text-[#2b3a30] font-medium max-w-2xl">{currentData.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentData.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`p-7 rounded-2xl border flex flex-col justify-between ${
                  pkg.featured
                    ? "bg-[#07130c] text-white border-2 border-[#c9f95a] shadow-2xl scale-[1.02]"
                    : "bg-[#ffffff] text-[#0c1210] border-[#c5d1bf] shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded ${
                        pkg.featured
                          ? "bg-[#10261a] text-[#c9f95a] font-bold"
                          : "bg-[#e5eadf] text-[#17382b] font-bold"
                      }`}
                    >
                      {pkg.name} {pkg.featured ? "· Recommended" : ""}
                    </span>
                  </div>
                  <div className="text-3xl font-bold mt-4 mb-2">{pkg.price}</div>
                  <ul className="space-y-2.5 my-6 text-xs">
                    {pkg.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`font-bold ${pkg.featured ? "text-[#c9f95a]" : "text-[#17382b]"}`}>•</span>
                        <span className={pkg.featured ? "text-[#f5f7ef]" : "text-[#2b3a30] font-medium"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto pt-4">
                  <Link
                    href={
                      activeCategory === "business"
                        ? "/business-name"
                        : activeCategory === "company"
                        ? "/limited"
                        : "/trustees"
                    }
                    className={`w-full ep-btn !py-3.5 text-center justify-center font-bold text-[13px] rounded-lg block ${
                      pkg.featured ? "ep-btn-primary" : "ep-btn-dark"
                    }`}
                  >
                    Start {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#ffffff] border border-[#c5d1bf] rounded-2xl p-6 lg:p-8 mt-12 shadow-sm">
            <div className="lg:col-span-4 overflow-hidden rounded-xl border border-[#c5d1bf]">
              <img 
                src="/images/cac-operations-team.jpg" 
                alt="CAC Accredited Operations Desk" 
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs font-mono text-[#17382b] font-bold uppercase tracking-wider">Accredited Direct Agent Desk</div>
              <h3 className="text-2xl font-bold text-[#0c1210]">Handled by certified Nigerian corporate practitioners.</h3>
              <p className="text-sm text-[#2b3a30] font-medium leading-relaxed">
                From name reservation to certified status reports and post-incorporation compliance, every filing is verified by our experienced registration team.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#ffffff] border border-[#c5d1bf] rounded-2xl mt-8 shadow-sm">
            <strong className="text-sm font-bold text-[#0c1210] block mb-1">Application &amp; delivery</strong>
            <p className="text-xs text-[#2b3a30] font-medium leading-relaxed">
              Complete the relevant application, provide the requested documents and receive approved documents electronically as original digital files. Processing timelines and regulatory outcomes remain subject to the relevant authority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
