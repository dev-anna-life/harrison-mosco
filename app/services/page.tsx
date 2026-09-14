"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const trademarkClasses = [
  "Chemicals",
  "Paints",
  "Cosmetics and cleaning preparations",
  "Industrial oils and fuels",
  "Pharmaceuticals",
  "Common metals",
  "Machines and machine tools",
  "Hand tools",
  "Downloadable software, mobile apps, scientific/electrical apparatus",
  "Medical apparatus",
  "Lighting, heating and sanitary apparatus",
  "Vehicles",
  "Firearms",
  "Precious metals and jewellery",
  "Musical instruments",
  "Paper goods and printed matter",
  "Rubber, plastics and insulating materials",
  "Leather goods",
  "Building materials",
  "Furniture",
  "Household utensils",
  "Ropes, nets, tents and sacks",
  "Yarns and threads",
  "Textiles",
  "Clothing, footwear and headgear",
  "Lace, embroidery and haberdashery",
  "Carpets and floor coverings",
  "Games, toys and sporting goods",
  "Meat, fish, dairy and preserved foods",
  "Coffee, tea, flour and confectionery",
  "Agricultural and fresh products",
  "Beers and non-alcoholic drinks",
  "Alcoholic beverages",
  "Tobacco and smokers’ articles",
  "Advertising, business management, retail and e-commerce services",
  "Insurance, financial and real estate services",
  "Construction, installation and repair services",
  "Telecommunications",
  "Transport, packaging and travel",
  "Treatment of materials",
  "Education, training, entertainment, sports and online courses",
  "Software development, SaaS, website/IT, engineering and design services",
  "Restaurant, food, drink, hotel and temporary accommodation services",
  "Medical, beauty, agriculture, wellness and veterinary services",
  "Legal, security and personal/social services",
];

type PathwayKey = "ultimate" | "cac" | "compliance" | "trademark" | "brand" | "growth";

interface PathwayData {
  key: PathwayKey;
  eyebrow: string;
  title: string;
  intro: string;
  packages: {
    name: string;
    price: string;
    items: string[];
    featured?: boolean;
  }[];
}

const pathwaysData: Record<PathwayKey, PathwayData> = {
  ultimate: {
    key: "ultimate",
    eyebrow: "01 / Signature",
    title: "Ultimate Business Launch Package",
    intro: "One coordinated package across six core areas of a professional business launch.",
    packages: [
      {
        name: "Ultimate Launch",
        price: "₦1,000,000",
        items: [
          "Complete CAC Limited Company or Business Name Registration",
          "Tax ID (TIN) & SCUML Compliance Registration",
          "Trademark Search & Official Filing Setup",
          "Full Corporate Brand Identity (Logo, Letterhead, Business Card, Staff ID, 12-page Profile)",
          "High-Performance Custom Website + Corporate Email + 1-Yr Domain & SSL",
          "AI Operations & Lead Generation Workflow Setup",
        ],
        featured: true,
      },
    ],
  },
  cac: {
    key: "cac",
    eyebrow: "02 / Foundation",
    title: "CAC Registration",
    intro: "Choose the package that fits your Nigerian CAC incorporation structure.",
    packages: [
      {
        name: "Business Name",
        price: "₦45,000",
        items: [
          "CAC Business Name registration certificate",
          "Official CAC Status Report",
          "NRS Tax Identification Number (TIN)",
          "Digital document delivery",
        ],
      },
      {
        name: "Limited Company (Pro)",
        price: "₦95,000",
        items: [
          "CAC Limited Liability Company (RC) incorporation",
          "Official Status Report & Certified Memorandum & Articles (MEMART)",
          "Tax ID (TIN) & Joint Tax Board profile setup",
          "Corporate resolution and banking compliance readiness",
        ],
        featured: true,
      },
      {
        name: "NGO / Incorporated Trustees",
        price: "₦220,000",
        items: [
          "Incorporated Trustees CAC registration",
          "National newspaper publication coordination",
          "Official Constitution, Status Report & Certificate",
          "SCUML anti-money laundering setup guidance",
        ],
      },
    ],
  },
  compliance: {
    key: "compliance",
    eyebrow: "03 / Readiness",
    title: "Compliance & Tax",
    intro: "Statutory licensing, anti-money laundering certification, and tax registrations.",
    packages: [
      {
        name: "SCUML Registration",
        price: "₦65,000",
        items: [
          "Special Control Unit Against Money Laundering (SCUML) clearance",
          "Full EFCC compliance verification",
          "Digital & physical certificate delivery",
          "Mandatory commercial banking compliance checklist",
        ],
      },
      {
        name: "NRS Tax ID & Rev360",
        price: "₦40,000",
        items: [
          "Corporate Tax ID (TIN) validation & generation",
          "Rev360 / NRS revenue portal onboarding",
          "Tax clearance certificate documentation guidance",
          "Initial VAT & Withholding Tax profile activation",
        ],
        featured: true,
      },
      {
        name: "NAFDAC & Regulatory Advisory",
        price: "Custom",
        items: [
          "Product formulation and facility inspection audit",
          "Pre-submission compliance documentation",
          "Liaison with regulatory authorities",
          "Official product registry filing",
        ],
      },
    ],
  },
  trademark: {
    key: "trademark",
    eyebrow: "04 / Protection",
    title: "Trademark Registration",
    intro: "Comprehensive brand name, logo mark, and slogan protection across all 45 Nice classes.",
    packages: [
      {
        name: "Trademark Search & Filing",
        price: "₦95,000",
        items: [
          "Pre-filing availability search across the trademark registry",
          "Official Trade Marks Registry statutory filing",
          "Official Acknowledgment Letter and Acceptance Document",
          "Official Trademark Journal publication tracking",
        ],
        featured: true,
      },
      {
        name: "Multi-Class Trademark",
        price: "₦165,000",
        items: [
          "Comprehensive multi-class filing across related product/service classes",
          "Class analysis and scope consultation",
          "Complete journal publication tracking",
          "Certificate issuance monitoring",
        ],
      },
    ],
  },
  brand: {
    key: "brand",
    eyebrow: "05 / Expression",
    title: "Brand Strategy & Digital",
    intro: "Corporate visual identity systems, modern web platforms, and digital presence.",
    packages: [
      {
        name: "Executive Brand Identity",
        price: "₦120,000",
        items: [
          "Primary & secondary logo marks, color palette and typography rules",
          "Letterhead, invoice, business card & staff ID print-ready templates",
          "Comprehensive 12-page company profile design",
          "Social media brand asset kit",
        ],
      },
      {
        name: "Web Platform & Corporate Email",
        price: "₦250,000",
        items: [
          "High-performance custom responsive corporate website",
          "Custom domain name, SSL security, and 1 year hosting",
          "Google Workspace / Microsoft 365 corporate email setup",
          "Direct WhatsApp lead routing & interactive inquiry form",
        ],
        featured: true,
      },
    ],
  },
  growth: {
    key: "growth",
    eyebrow: "06 / Momentum",
    title: "AI, Marketing & Growth",
    intro: "AI automation, intelligent customer agents, and customer acquisition systems.",
    packages: [
      {
        name: "AI Business Automation",
        price: "₦180,000",
        items: [
          "Automated WhatsApp & email lead capture workflows",
          "24/7 AI customer service agent trained on your business data",
          "CRM pipeline integration for automated deal tracking",
          "Invoice & receipt generation automation",
        ],
        featured: true,
      },
      {
        name: "Growth & Visibility Engine",
        price: "₦220,000",
        items: [
          "Targeted digital advertising setup (Meta Ads, Google Ads)",
          "High-converting landing page conversion optimization",
          "AI video presenter assets & creative ad copy",
          "Monthly growth analytics & strategy consultation",
        ],
      },
    ],
  },
};

export default function ServicesPage() {
  const [activePathway, setActivePathway] = useState<PathwayKey>("ultimate");
  const [selectedClasses, setSelectedClasses] = useState<number[]>([]);
  const [showTrademarkModal, setShowTrademarkModal] = useState(false);

  const toggleClass = (index: number) => {
    if (selectedClasses.includes(index)) {
      setSelectedClasses(selectedClasses.filter((i) => i !== index));
    } else {
      setSelectedClasses([...selectedClasses, index]);
    }
  };

  const currentPathway = pathwaysData[activePathway];

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-20 lg:py-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Choose a Starting Point</div>
          <h1 className="heading-1">Every service is a complete, guided experience.</h1>
          <p className="lead-text">
            Start with a specific need or use the Ultimate Launch Package to bring your legal foundation, compliance, identity and digital presence together.
          </p>
        </div>
      </section>

      {/* 2. Services Overview Grid (Service Hub) */}
      <section className="bg-[#102118] py-20 lg:py-28 border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Services</div>
              <h2 className="heading-2">Build the right business from the inside out.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Every pathway is designed to solve a specific business need while fitting into the wider Eponix journey.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => {
                setActivePathway("ultimate");
                document.getElementById("pathway-details")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`ep-card dark text-left transition-all ${activePathway === "ultimate" ? "border-[#c6ff3f]" : ""}`}
            >
              <div className="ep-tag">01 / Signature</div>
              <h3 className="heading-3">Ultimate Business Launch</h3>
              <p>One package across six core areas of a professional business launch.</p>
              <span className="ep-link text-[#c6ff3f]">Open the package →</span>
            </button>

            <button
              onClick={() => {
                setActivePathway("cac");
                document.getElementById("pathway-details")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`ep-card text-left transition-all ${activePathway === "cac" ? "border-[#c6ff3f]" : ""}`}
            >
              <div className="ep-tag">02 / Foundation</div>
              <h3 className="heading-3">CAC Registration</h3>
              <p>Business Name, Limited Company and NGO / Incorporated Trustees pathways.</p>
              <span className="ep-link">Open CAC services →</span>
            </button>

            <button
              onClick={() => {
                setActivePathway("compliance");
                document.getElementById("pathway-details")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`ep-card text-left transition-all ${activePathway === "compliance" ? "border-[#c6ff3f]" : ""}`}
            >
              <div className="ep-tag">03 / Readiness</div>
              <h3 className="heading-3">Compliance &amp; Tax</h3>
              <p>SCUML, NRS Tax ID / Rev360, NAFDAC and related support.</p>
              <span className="ep-link">Open compliance →</span>
            </button>

            <button
              onClick={() => {
                setActivePathway("trademark");
                document.getElementById("pathway-details")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`ep-card text-left transition-all ${activePathway === "trademark" ? "border-[#c6ff3f]" : ""}`}
            >
              <div className="ep-tag">04 / Protection</div>
              <h3 className="heading-3">Trademark Registration</h3>
              <p>Search, filing and all 45 trademark classes.</p>
              <span className="ep-link">Open trademark →</span>
            </button>

            <button
              onClick={() => {
                setActivePathway("brand");
                document.getElementById("pathway-details")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`ep-card text-left transition-all ${activePathway === "brand" ? "border-[#c6ff3f]" : ""}`}
            >
              <div className="ep-tag">05 / Expression</div>
              <h3 className="heading-3">Brand &amp; Digital</h3>
              <p>Identity, website, corporate email and digital tools.</p>
              <span className="ep-link">Framework →</span>
            </button>

            <button
              onClick={() => {
                setActivePathway("growth");
                document.getElementById("pathway-details")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`ep-card text-left transition-all ${activePathway === "growth" ? "border-[#c6ff3f]" : ""}`}
            >
              <div className="ep-tag">06 / Momentum</div>
              <h3 className="heading-3">AI, Marketing &amp; Growth</h3>
              <p>Automation, agents, AI video and visibility support.</p>
              <span className="ep-link">Framework →</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Dynamic Pathway Interactive Panel */}
      <section id="pathway-details" className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="space-y-4 mb-10">
            <div className="eyebrow">{currentPathway.eyebrow}</div>
            <h2 className="heading-2">{currentPathway.title}</h2>
            <p className="lead-text">{currentPathway.intro}</p>
          </div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPathway.packages.map((pkg, idx) => (
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
                    href={`/#consultation`}
                    className={`ep-btn w-full ${pkg.featured ? "ep-btn-dark" : "ep-btn-primary"}`}
                  >
                    Start {pkg.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Trademark 45 Class Picker Highlight */}
          {activePathway === "trademark" && (
            <div className="mt-12 p-8 bg-[#101914] border border-[#33473a] space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="heading-3">Trademark Classification Index (1 to 45)</h3>
                  <p className="text-[#aab6ad] text-[15px]">
                    Select applicable Nice Classification categories for your brand protection filing.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTrademarkModal(!showTrademarkModal)}
                  className="ep-btn ep-btn-light text-xs"
                >
                  {showTrademarkModal ? "Collapse 45 Classes" : "Browse All 45 Classes"}
                </button>
              </div>

              {showTrademarkModal && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-96 overflow-y-auto pr-2 pt-2">
                  {trademarkClasses.map((clsName, idx) => {
                    const classNum = idx + 1;
                    const isSelected = selectedClasses.includes(classNum);
                    return (
                      <button
                        type="button"
                        key={classNum}
                        onClick={() => toggleClass(classNum)}
                        className={`p-3 text-left border text-xs transition-all flex items-start justify-between gap-2 ${
                          isSelected
                            ? "bg-[#c6ff3f] text-[#071007] border-[#c6ff3f] font-bold"
                            : "bg-[#07100c] text-[#d4ddd6] border-[#26362c] hover:border-[#c6ff3f]/50"
                        }`}
                      >
                        <span>
                          <strong>Class {classNum}:</strong> {clsName}
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Notice Box */}
          <div className="ep-notice">
            <strong>Application &amp; Delivery</strong>
            <p className="text-[14px]">
              Complete the consultation application, provide the requested verification documents, and receive approved documents electronically as original digital certified files. Processing timelines and regulatory outcomes remain subject to the relevant government authority.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Connected Journey */}
      <section id="journey" className="bg-[#101914] py-20 lg:py-28 border-t border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Connected Journey</div>
              <h2 className="heading-2">From Discovery to Automation.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Discover → Foundation → Identity → Digital → AI &amp; Automation → Growth.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[1px] bg-[#26362c]">
            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">01</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">DISCOVER</b>
                <p className="text-[13px] text-[#aab6ad]">Business diagnosis, strategy, idea validation and positioning.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">02</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">FOUNDATION</b>
                <p className="text-[13px] text-[#aab6ad]">CAC, tax, compliance, trademark and related support.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">03</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">IDENTITY</b>
                <p className="text-[13px] text-[#aab6ad]">Brand identity and corporate materials.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">04</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">DIGITAL</b>
                <p className="text-[13px] text-[#aab6ad]">Website, domain, email, forms, portals and tools.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">05</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">AI &amp; AUTOMATION</b>
                <p className="text-[13px] text-[#aab6ad]">AI video, agents, customer support and workflows.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">06</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">GROWTH</b>
                <p className="text-[13px] text-[#aab6ad]">Content, advertising, lead generation and visibility.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct CTA Band */}
      <section className="bg-[#10261a] text-[#f5f7ef] py-16 border-t border-b border-[#33473a]">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className="heading-3 mb-2">Let&apos;s build a business that is ready to move.</h2>
            <p className="text-[#aab6ad] text-[15px]">Schedule your strategic consultation with our governance and digital team.</p>
          </div>
          <Link href="/#consultation" className="ep-btn ep-btn-primary whitespace-nowrap">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
