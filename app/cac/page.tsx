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
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Nigeria Business Foundation</div>
          <h1 className="heading-1">CAC Registration</h1>
          <p className="lead-text">
            Choose the legal registration pathway that fits your business, company or formal organisation.
          </p>
        </div>
      </section>

      {/* 2. Pathway Selector */}
      <section className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">CAC Registration</div>
              <h2 className="heading-2">Choose your registration pathway.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Start by choosing what you are registering. Your selected pathway will then reveal its packages, requirements and application.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
            <Link
              href="/business-name"
              className="ep-pathway block hover:border-[#c6ff3f] transition-all group"
            >
              <div className="eyebrow">01 / Business</div>
              <h3 className="heading-3 group-hover:text-[#c6ff3f] transition-colors">Business Name</h3>
              <p>For individuals and businesses registering a Business Name.</p>
              <b className="mt-6 block text-[14px] text-[#c6ff3f]">Choose this path →</b>
            </Link>

            <Link
              href="/limited"
              className="ep-pathway block hover:border-[#c6ff3f] transition-all group"
            >
              <div className="eyebrow">02 / Company</div>
              <h3 className="heading-3 group-hover:text-[#c6ff3f] transition-colors">Limited Company</h3>
              <p>For businesses incorporating as a Limited Company.</p>
              <b className="mt-6 block text-[14px] text-[#c6ff3f]">Choose this path →</b>
            </Link>

            <Link
              href="/trustees"
              className="ep-pathway block hover:border-[#c6ff3f] transition-all group"
            >
              <div className="eyebrow">03 / NGO</div>
              <h3 className="heading-3 group-hover:text-[#c6ff3f] transition-colors">NGO / Incorporated Trustees</h3>
              <p>For organisations registering as Incorporated Trustees.</p>
              <b className="mt-6 block text-[14px] text-[#c6ff3f]">Choose this path →</b>
            </Link>
          </div>

          {/* Packages Panel */}
          <div className="space-y-4 mb-8">
            <h2 className="heading-2">{currentData.title} packages</h2>
            <p className="lead-text">{currentData.intro}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentData.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`ep-package ${pkg.featured ? "featured" : ""}`}
              >
                <div className={`ep-tag ${pkg.featured ? "text-[#071007] border-[#071007]" : ""}`}>
                  {pkg.name} {pkg.featured ? "· Most Popular" : ""}
                </div>
                <div className="price">{pkg.price}</div>
                <ul className="space-y-2.5 my-6 text-[14px]">
                  {pkg.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4">
                  <Link
                    href={
                      activeCategory === "business"
                        ? "/business-name"
                        : activeCategory === "company"
                        ? "/limited"
                        : "/trustees"
                    }
                    className={`ep-btn w-full ${pkg.featured ? "ep-btn-dark" : "ep-btn-primary"}`}
                  >
                    Start {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#07100c] border border-[#26362c] p-6 lg:p-8 mt-12">
            <div className="lg:col-span-4 overflow-hidden border border-[#26362c]">
              <img 
                src="/images/cac-operations-team.jpg" 
                alt="CAC Accredited Operations Desk" 
                className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-8 space-y-2">
              <div className="ep-tag text-[#c6ff3f]">Accredited Direct Agent Desk</div>
              <h3 className="heading-3">Handled by certified Nigerian corporate practitioners.</h3>
              <p className="text-sm text-[#aab6ad] leading-relaxed">
                From name reservation to certified status reports and post-incorporation compliance, every filing is verified by our experienced registration team.
              </p>
            </div>
          </div>

          <div className="ep-notice mt-10">
            <strong>Application &amp; delivery</strong>
            <p className="text-[14px]">
              Complete the relevant application, provide the requested documents and receive approved documents electronically as original digital files. Processing timelines and regulatory outcomes remain subject to the relevant authority.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
