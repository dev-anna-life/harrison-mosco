"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

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

interface FlowData {
  eyebrow: string;
  title: string;
  titleEm: string;
  desc: string;
  stats: [string, string][];
  defaultSupport: string;
  featureNote?: string;
  cards: {
    badge: string;
    title: string;
    desc: string;
    items: string[];
    price: string;
  }[];
}

const serviceData: Record<PathwayKey, FlowData> = {
  ultimate: {
    eyebrow: "THE SIGNATURE PACKAGE",
    title: "One package.",
    titleEm: "Six core areas.",
    desc: "The Ultimate Business Launch Package brings the foundations needed to establish, present and operate a new business professionally into one focused build.",
    stats: [
      ["ONE COORDINATED TEAM", "A clear launch workflow"],
      ["ALL-INCLUSIVE", "Complete 6-pillar build"],
      ["DOCUMENT CHECKLIST", "Guidance before we begin"],
      ["DIGITAL DELIVERY", "Key assets delivered securely"],
    ],
    defaultSupport: "Launch consultation",
    featureNote:
      "This is a coordinated launch package: company setup, compliance support, trademark pathway, premium branding, website/corporate email and digital business tools work together as one structured build.",
    cards: [
      {
        badge: "01",
        title: "Company Registration",
        desc: "The right CAC registration route for your chosen structure.",
        items: ["Business Name or Limited Company pathway", "Core registration documents", "Registration guidance"],
        price: "INCLUDED",
      },
      {
        badge: "02",
        title: "Tax & Compliance",
        desc: "Early readiness for key compliance needs.",
        items: ["NRS Tax ID setup", "Compliance guidance", "SCUML where applicable"],
        price: "INCLUDED",
      },
      {
        badge: "03",
        title: "Trademark Support",
        desc: "Start protecting the name you are building.",
        items: ["Name and class guidance", "Search support", "Registration pathway"],
        price: "INCLUDED",
      },
      {
        badge: "04",
        title: "Premium Branding",
        desc: "A strong identity for a professional business.",
        items: ["Logo direction", "Core touchpoints", "Company profile direction"],
        price: "INCLUDED",
      },
      {
        badge: "05",
        title: "Website & Corporate Email",
        desc: "A credible digital home and business communications base.",
        items: ["Domain & email setup", "Professional website", "Hosting / SSL pathway"],
        price: "INCLUDED",
      },
      {
        badge: "06",
        title: "Digital Business Tools",
        desc: "Practical paths for customers to connect and act.",
        items: ["Social connection", "Booking / payment readiness", "Launch support"],
        price: "INCLUDED",
      },
    ],
  },
  cac: {
    eyebrow: "CAC REGISTRATION",
    title: "Start with the",
    titleEm: "right legal foundation.",
    desc: "Open the route that fits your business or organisation. Each pathway has support levels, requirements and a tailored request process.",
    stats: [
      ["THREE PATHWAYS", "Business, Company, NGO"],
      ["CLEAR PROCESS", "Guided document preparation"],
      ["DOCUMENT-LED", "Clear requirements"],
      ["DIGITAL DELIVERY", "Original certified documents"],
    ],
    defaultSupport: "CAC registration request",
    featureNote:
      "Open a CAC pathway above to choose Business Name, Limited Company or NGO / Incorporated Trustees registration. The request form below captures initial details; Eponix will then issue the full document checklist for the chosen route.",
    cards: [
      {
        badge: "BUSINESS NAME",
        title: "Business Name Registration",
        desc: "For sole proprietors and small-scale businesses ready to formalise.",
        items: ["CAC Certificate", "Status Report", "NRS Tax ID pathway"],
        price: "FROM ₦35,000",
      },
      {
        badge: "LIMITED COMPANY",
        title: "Limited Company Registration",
        desc: "For incorporation, directors/shareholders and a corporate structure.",
        items: ["CAC incorporation documents", "Status Report & MEMART", "Tax ID pathway"],
        price: "FROM ₦60,000",
      },
      {
        badge: "INCORPORATED TRUSTEES",
        title: "NGO / Trustee Registration",
        desc: "For NGOs, associations, faith organisations and social clubs.",
        items: ["Trustee-led registration", "Constitution & publications", "Organisation documentation"],
        price: "FROM ₦130,000",
      },
    ],
  },
  compliance: {
    eyebrow: "COMPLIANCE & TAX",
    title: "Be ready to operate",
    titleEm: "with confidence.",
    desc: "Select the compliance or tax setup your business needs. We confirm the relevant document list and delivery route before work begins.",
    stats: [
      ["REGULATORY READY", "Support that fits your stage"],
      ["TAX COMPLIANCE", "TIN & Rev360 portal"],
      ["DOCUMENT CHECKLIST", "Confirmed per service"],
      ["GUIDED SUPPORT", "Clear next steps"],
    ],
    defaultSupport: "Compliance request",
    cards: [
      {
        badge: "SCUML",
        title: "SCUML Registration",
        desc: "Compliance documentation and reporting-readiness support.",
        items: ["SCUML certificate pathway", "Compliance guidance", "Monthly reporting template"],
        price: "FROM ₦65,000",
      },
      {
        badge: "NRS / REV360",
        title: "NRS Tax ID & Rev360",
        desc: "Set up tax identity and filing account access.",
        items: ["NRS Tax ID", "Rev360 account", "Tax portal readiness"],
        price: "FROM ₦40,000",
      },
      {
        badge: "REGULATORY",
        title: "NAFDAC & More",
        desc: "A scoped route for NAFDAC and sector-specific requirements.",
        items: ["Product / business review", "Document checklist", "Application support scope"],
        price: "CUSTOM SCOPE",
      },
    ],
  },
  trademark: {
    eyebrow: "TRADEMARK REGISTRATION",
    title: "Protect the name you are",
    titleEm: "building.",
    desc: "Choose the right support level, then submit the brand, owner and goods/services information needed to begin.",
    stats: [
      ["CLASSES 1–45", "Choose relevant classes"],
      ["REGISTRY VERIFIED", "Official Trade Marks Registry"],
      ["SEARCH FIRST", "Availability before filing"],
      ["DIGITAL DELIVERY", "Updates & documents"],
    ],
    defaultSupport: "Trademark request",
    cards: [
      {
        badge: "START",
        title: "Availability Search",
        desc: "A considered first review before an application is filed.",
        items: ["Trademark name review", "Eligibility review", "Search guidance"],
        price: "FROM ₦15,000",
      },
      {
        badge: "FILE",
        title: "Trademark Filing",
        desc: "Filing support for a suitable search outcome.",
        items: ["Application filing", "Acknowledgement support", "One trademark class"],
        price: "FROM ₦60,000",
      },
      {
        badge: "COMPLETE",
        title: "Search & Registration",
        desc: "Joined-up support from early search through registration.",
        items: ["Pre-filing search", "Trademark application", "Registration support"],
        price: "FROM ₦70,000",
      },
    ],
  },
  brand: {
    eyebrow: "BRAND & DIGITAL",
    title: "Present a business people can",
    titleEm: "trust.",
    desc: "Build the identity, website and customer-ready tools that make it easier for people to find, understand and choose you.",
    stats: [
      ["CONNECTED PRESENCE", "Brand to website"],
      ["EXECUTIVE DESIGN", "Modern visual standards"],
      ["BUILT AROUND YOU", "Scope before build"],
      ["READY TO GROW", "Tools that connect"],
    ],
    defaultSupport: "Brand & website enquiry",
    cards: [
      {
        badge: "BRAND",
        title: "Brand Identity",
        desc: "Clarify the look, language and key touchpoints.",
        items: ["Brand direction", "Logo system", "Business collateral"],
        price: "FROM ₦120,000",
      },
      {
        badge: "WEBSITE",
        title: "Website & Email",
        desc: "A credible digital home and professional communications base.",
        items: ["Website design", "Domain & corporate email", "Hosting / SSL pathway"],
        price: "FROM ₦250,000",
      },
      {
        badge: "TOOLS",
        title: "Digital Business Tools",
        desc: "Useful paths for customers to enquire, book, pay and connect.",
        items: ["Booking setup", "Payment readiness", "Social integration"],
        price: "CUSTOM SCOPE",
      },
    ],
  },
  growth: {
    eyebrow: "AI & GROWTH",
    title: "Create systems that help you",
    titleEm: "move further.",
    desc: "Use AI, automation and visibility support to reduce friction, communicate better and create growth momentum.",
    stats: [
      ["PRACTICAL AI", "Built around your workflow"],
      ["AUTOMATED LEADS", "24/7 client response"],
      ["STRATEGIC BUILD", "Not one-size-fits-all"],
      ["GROWTH READY", "Systems that scale"],
    ],
    defaultSupport: "AI & growth enquiry",
    cards: [
      {
        badge: "AUTOMATION",
        title: "Business Automation",
        desc: "Connect repetitive work into faster, clearer workflows.",
        items: ["Workflow audit", "Automation design", "Implementation support"],
        price: "FROM ₦180,000",
      },
      {
        badge: "AGENTIC",
        title: "AI Agents & Video",
        desc: "AI assistants and AI video systems for modern work.",
        items: ["AI agent planning", "Enquiry workflows", "AI creative support"],
        price: "CUSTOM SCOPE",
      },
      {
        badge: "VISIBILITY",
        title: "Marketing & Growth",
        desc: "Turn business direction into stronger visibility.",
        items: ["Marketing planning", "Content & campaigns", "Growth support"],
        price: "FROM ₦220,000",
      },
    ],
  },
};

export default function ServicesPage() {
  const [selectedPathway, setSelectedPathway] = useState<PathwayKey | null>(null);
  const [selectedClasses, setSelectedClasses] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    supportLevel: "",
    businessName: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleClass = (idx: number) => {
    if (selectedClasses.includes(idx)) {
      setSelectedClasses(selectedClasses.filter((i) => i !== idx));
    } else {
      setSelectedClasses([...selectedClasses, idx]);
    }
  };

  const handleServiceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          whatsappPhone: formData.phone || "+2340000000000",
          email: formData.email,
          proposedBusinessName: formData.businessName || "Services Request",
          packageInterested: `${selectedPathway ? serviceData[selectedPathway].eyebrow : "General Service"} - ${formData.supportLevel || "Custom"}`,
          shareCapitalMillions: 1,
          notes: `${formData.details} | Selected Trademark Classes: ${selectedClasses.join(", ")}`,
          source: "eponix_services_flow_form",
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentFlow = selectedPathway ? serviceData[selectedPathway] : null;

  return (
    <div>
      {/* 1. HERO (Dark #101713) */}
      {!currentFlow && (
        <section className="min-h-[500px] lg:min-h-[540px] flex items-end relative overflow-hidden bg-[#101713] text-[#f4f6ed]">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#17382b] via-[#101713] to-[#0c1210]" />
          <div className="wrap w-full relative z-10 pb-16 pt-32 lg:pt-40">
            <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#c9f95a] mb-3">
              Eponix service pathways
            </div>
            <h1 className="text-[44px] sm:text-[60px] lg:text-[88px] font-bold leading-[0.96] tracking-[-0.08em] max-w-[800px] mb-4 text-[#f4f6ed]">
              Build the right business{" "}
              <em className="font-serif italic font-semibold text-[#c9f95a]">from the inside out.</em>
            </h1>
            <p className="max-w-[620px] text-[#d4dfd5] text-[16px] leading-relaxed">
              Open a service to see its complete pathway: support levels, what it includes, the details we need, and a request form to begin the conversation.
            </p>
          </div>
        </section>
      )}

      {/* 2. CATALOG HUB (Light Cream #e5eadf) */}
      {!currentFlow && (
        <section className="bg-[#e5eadf] text-[#0c1210] py-24">
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-12 items-end">
              <div className="lg:col-span-7 space-y-3">
                <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#46785d]">
                  Choose a starting point
                </div>
                <h2 className="text-[34px] sm:text-[46px] lg:text-[62px] font-bold leading-[1.02] tracking-[-0.07em] text-[#0c1210]">
                  Every service is a complete, guided experience.
                </h2>
              </div>
              <div className="lg:col-span-5 text-[15px] text-[#55655b] leading-relaxed">
                Start with a specific need or use the Ultimate Launch Package to bring your legal foundation, compliance, identity and digital presence together.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {[
                { key: "ultimate" as PathwayKey, href: "/ultimate", no: "01 / SIGNATURE", title: "Ultimate Business Launch", desc: "One package across six core areas of a professional business launch.", cta: "Open the package →" },
                { key: "cac" as PathwayKey, href: "/cac", no: "02 / FOUNDATION", title: "CAC Registration", desc: "Business Name, Limited Company and NGO / Incorporated Trustees pathways.", cta: "Open CAC services →" },
                { key: "compliance" as PathwayKey, href: "/compliance", no: "03 / READINESS", title: "Compliance & Tax", desc: "SCUML, NRS Tax ID / Rev360, NAFDAC and related support.", cta: "Open compliance →" },
                { key: "trademark" as PathwayKey, href: "/trademark", no: "04 / PROTECTION", title: "Trademark Registration", desc: "Search, filing and all 45 trademark classes.", cta: "Open trademark →" },
                { key: "brand" as PathwayKey, no: "05 / EXPRESSION", title: "Brand & Digital", desc: "Identity, website, corporate email and digital tools.", cta: "Open brand services →" },
                { key: "growth" as PathwayKey, no: "06 / MOMENTUM", title: "AI, Marketing & Growth", desc: "Automation, agents, AI video and visibility support.", cta: "Open growth services →" },
              ].map((tile) => {
                if (tile.href) {
                  return (
                    <Link
                      key={tile.key}
                      href={tile.href}
                      className="p-7 border border-[#ced7cd] bg-[#f3f5ec] min-h-[245px] text-left hover:bg-[#17382b] hover:text-white transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <span className="font-mono text-[10px] text-[#4a795d] group-hover:text-[#ccd9cf] block mb-7">
                          {tile.no}
                        </span>
                        <h3 className="text-[22px] font-bold leading-[1.1] tracking-[-0.05em] text-[#0c1210] group-hover:text-white mb-2">
                          {tile.title}
                        </h3>
                        <p className="text-[12px] text-[#5b6b60] group-hover:text-[#ccd9cf] leading-relaxed">
                          {tile.desc}
                        </p>
                      </div>
                      <b className="block mt-6 text-[12px] text-[#0c1210] group-hover:text-[#c9f95a]">
                        {tile.cta}
                      </b>
                    </Link>
                  );
                }

                return (
                  <button
                    key={tile.key}
                    type="button"
                    onClick={() => {
                      setSelectedPathway(tile.key);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="p-7 border border-[#ced7cd] bg-[#f3f5ec] min-h-[245px] text-left hover:bg-[#17382b] hover:text-white transition-all group flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <span className="font-mono text-[10px] text-[#4a795d] group-hover:text-[#ccd9cf] block mb-7">
                        {tile.no}
                      </span>
                      <h3 className="text-[22px] font-bold leading-[1.1] tracking-[-0.05em] text-[#0c1210] group-hover:text-white mb-2">
                        {tile.title}
                      </h3>
                      <p className="text-[12px] text-[#5b6b60] group-hover:text-[#ccd9cf] leading-relaxed">
                        {tile.desc}
                      </p>
                    </div>
                    <b className="block mt-6 text-[12px] text-[#0c1210] group-hover:text-[#c9f95a]">
                      {tile.cta}
                    </b>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 3. DYNAMIC FLOW VIEW */}
      {currentFlow && (
        <div>
          {/* Flow Hero (Dark #0c1210) */}
          <section className="bg-[#0c1210] text-[#f4f6ed] pt-32 pb-16">
            <div className="wrap space-y-4">
              <button
                type="button"
                onClick={() => {
                  setSelectedPathway(null);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="font-mono text-[10px] tracking-[0.12em] text-[#c9f95a] hover:underline cursor-pointer"
              >
                ← ALL SERVICES
              </button>
              <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#c9f95a] pt-2">
                {currentFlow.eyebrow}
              </div>
              <h2 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold leading-[1.02] tracking-[-0.07em] text-[#f4f6ed]">
                {currentFlow.title}{" "}
                <em className="font-serif italic font-semibold text-[#c9f95a]">
                  {currentFlow.titleEm}
                </em>
              </h2>
              <p className="max-w-[680px] text-[#bdc9c0] text-[16px] leading-relaxed">
                {currentFlow.desc}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-[#536057] pt-6 mt-10">
                {currentFlow.stats.map((st, i) => (
                  <div
                    key={i}
                    className={`py-3 ${i < 3 ? "lg:border-r border-[#536057] lg:pr-5" : ""} ${i > 0 ? "lg:pl-5" : ""}`}
                  >
                    <b className="block text-[15px] sm:text-[16px] leading-tight text-[#f4f6ed]">
                      {st[0]}
                    </b>
                    <small className="block font-mono text-[10px] text-[#adbbb1] mt-1">
                      {st[1]}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cards Section (Light Cream #f3f5ec) */}
          <section className="bg-[#f3f5ec] text-[#0c1210] py-20">
            <div className="wrap">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-10 items-end">
                <div className="lg:col-span-7 space-y-2">
                  <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#46785d]">
                    Choose a support level
                  </div>
                  <h3 className="text-[28px] sm:text-[40px] font-bold tracking-[-0.06em] leading-[1.05] text-[#0c1210]">
                    See what is included, then choose your path.
                  </h3>
                </div>
                <p className="lg:col-span-5 text-[14px] text-[#59695f]">
                  Final scope, timeline and pricing are confirmed with Eponix after the relevant requirements have been reviewed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentFlow.cards.map((c, i) => (
                  <article key={i} className="bg-white border border-[#ced7cd] p-6 min-h-[310px] flex flex-col justify-between">
                    <div>
                      <span className="border border-[#aabdaf] rounded-full px-2.5 py-1 font-mono text-[10px] inline-block mb-5">
                        {c.badge}
                      </span>
                      <h4 className="text-[20px] font-bold tracking-[-0.05em] leading-[1.1] text-[#0c1210] mb-2">
                        {c.title}
                      </h4>
                      <p className="text-[12px] text-[#56665b] mb-4">{c.desc}</p>
                      <ul className="space-y-1.5 text-[12px] text-[#0c1210]">
                        {c.items.map((it, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#4b976b] font-bold">•</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-4 border-t border-[#f0f4ef]">
                      <b className="block font-mono text-[11px] text-[#407458] mb-3">{c.price}</b>
                      <a
                        href="#request"
                        onClick={() => setFormData({ ...formData, supportLevel: c.title })}
                        className="btn primary !py-2.5 !px-3.5 !text-[11px]"
                      >
                        Choose this path →
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {currentFlow.featureNote && (
                <div className="p-6 bg-[#f6f8f1] border-l-4 border-[#c9f95a] text-[13px] text-[#54645a] mt-8">
                  {currentFlow.featureNote}
                </div>
              )}
            </div>
          </section>

          {/* Request Form (Light Sage #e7ece3) */}
          <section className="bg-[#e7ece3] text-[#0c1210] py-20" id="request">
            <div className="wrap">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-5 space-y-4">
                  <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#46785d]">
                    Start your request
                  </div>
                  <h3 className="text-[32px] sm:text-[46px] font-bold tracking-[-0.07em] leading-[1.02] text-[#0c1210]">
                    Tell us what you need. We’ll guide the next step.
                  </h3>
                  <p className="text-[14px] text-[#56665b] leading-relaxed">
                    This is a service request, not an automatic payment. Eponix will confirm scope, requirements, pricing and timeline before proceeding.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {isSubmitted ? (
                    <div className="bg-white border border-[#ced7cd] p-8 text-center space-y-3">
                      <div className="w-12 h-12 rounded-full bg-[#c9f95a] text-[#0c1210] flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-[20px] font-bold text-[#0c1210]">Request Received</h4>
                      <p className="text-[13px] text-[#56665b] max-w-sm mx-auto">
                        Thank you, <strong>{formData.fullName}</strong>. Your request is ready for the Eponix team. We will review and reach out shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleServiceSubmit} className="bg-white border border-[#ced7cd] p-7 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-extrabold uppercase">Full Name *</label>
                          <input
                            required
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="p-2.5 border border-[#d5ddd4] bg-[#fbfcfa] text-[13px]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-extrabold uppercase">Email Address *</label>
                          <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="p-2.5 border border-[#d5ddd4] bg-[#fbfcfa] text-[13px]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-extrabold uppercase">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="p-2.5 border border-[#d5ddd4] bg-[#fbfcfa] text-[13px]"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-extrabold uppercase">Support Level</label>
                          <select
                            value={formData.supportLevel}
                            onChange={(e) => setFormData({ ...formData, supportLevel: e.target.value })}
                            className="p-2.5 border border-[#d5ddd4] bg-[#fbfcfa] text-[13px]"
                          >
                            <option value="">{currentFlow.defaultSupport}</option>
                            {currentFlow.cards.map((c, idx) => (
                              <option key={idx} value={c.title}>{c.title}</option>
                            ))}
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-extrabold uppercase">Business / Organisation Name</label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="p-2.5 border border-[#d5ddd4] bg-[#fbfcfa] text-[13px]"
                        />
                      </div>

                      {/* Trademark Specific 45 Classes List */}
                      {selectedPathway === "trademark" && (
                        <div className="flex flex-col gap-1">
                          <label className="text-[11px] font-extrabold uppercase">Trademark Class / Classes</label>
                          <div className="h-[170px] overflow-y-auto border border-[#d5ddd4] p-2 space-y-1 bg-[#fbfcfa]">
                            {trademarkClasses.map((cls, i) => (
                              <label key={i} className="flex items-center gap-2 text-[12px] cursor-pointer hover:bg-slate-100 p-1">
                                <input
                                  type="checkbox"
                                  checked={selectedClasses.includes(i + 1)}
                                  onChange={() => toggleClass(i + 1)}
                                  className="accent-[#c9f95a]"
                                />
                                <span>Class {i + 1} — {cls}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <label className="text-[11px] font-extrabold uppercase">
                          {selectedPathway === "trademark" ? "Goods or Services" : "What would you like us to help with?"}
                        </label>
                        <textarea
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          placeholder={selectedPathway === "trademark" ? "Describe the products or services connected to the trademark." : "Tell us a little about the business, organisation or project."}
                          className="p-2.5 border border-[#d5ddd4] bg-[#fbfcfa] text-[13px] min-h-[90px] resize-y"
                        />
                      </div>

                      <p className="text-[11px] text-[#617168] leading-tight">
                        Please do not send identity documents or sensitive records through this preview form. Eponix will provide a secure document-request process where needed.
                      </p>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn primary !w-full justify-center !mt-4"
                      >
                        <span>{isSubmitting ? "Sending..." : "Send request"}</span>
                        <span className="text-[18px] leading-none">→</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
