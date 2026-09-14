"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

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
  titleEm: string;
  description: string;
  stats: [string, string][];
  defaultServiceLabel: string;
  featureNote?: string;
  cards: {
    badge: string;
    title: string;
    description: string;
    items: string[];
    priceNote: string;
  }[];
}

const pathways: Record<PathwayKey, PathwayData> = {
  ultimate: {
    key: "ultimate",
    eyebrow: "THE SIGNATURE PACKAGE",
    title: "One package.",
    titleEm: "Six core areas.",
    description:
      "The Ultimate Business Launch Package brings the foundations needed to establish, present and operate a new business professionally into one focused build.",
    stats: [
      ["ONE COORDINATED TEAM", "A clear launch workflow"],
      ["NGN 1,000,000", "All-inclusive enterprise package"],
      ["DOCUMENT CHECKLIST", "Guidance before we begin"],
      ["DIGITAL DELIVERY", "Key assets delivered securely"],
    ],
    defaultServiceLabel: "Ultimate Business Launch Package",
    featureNote:
      "This is a coordinated launch package: company setup, compliance support, trademark pathway, premium branding, website/corporate email and digital business tools work together as one structured build.",
    cards: [
      {
        badge: "01",
        title: "Company Registration",
        description: "The right CAC registration route for your chosen structure.",
        items: [
          "Business Name or Limited Company pathway",
          "Core registration documents & status report",
          "Comprehensive incorporation guidance",
        ],
        priceNote: "INCLUDED IN PACKAGE",
      },
      {
        badge: "02",
        title: "Tax & Compliance",
        description: "Early readiness for key compliance needs.",
        items: [
          "NRS Corporate Tax ID setup",
          "Rev360 tax portal filing access",
          "SCUML anti-money laundering setup",
        ],
        priceNote: "INCLUDED IN PACKAGE",
      },
      {
        badge: "03",
        title: "Trademark Support",
        description: "Start protecting the name you are building.",
        items: [
          "Name and class availability search",
          "Official trademark filing support",
          "One class brand protection",
        ],
        priceNote: "INCLUDED IN PACKAGE",
      },
      {
        badge: "04",
        title: "Premium Branding",
        description: "A strong identity for a professional business.",
        items: [
          "Executive logo direction & color palette",
          "Letterhead, business cards & staff ID",
          "12-page company profile document",
        ],
        priceNote: "INCLUDED IN PACKAGE",
      },
      {
        badge: "05",
        title: "Website & Corporate Email",
        description: "A credible digital home and business communications base.",
        items: [
          "Custom domain (.com / .ng) & email setup",
          "Multi-page corporate website with SSL",
          "One year cloud hosting & maintenance",
        ],
        priceNote: "INCLUDED IN PACKAGE",
      },
      {
        badge: "06",
        title: "Digital Business Tools",
        description: "Practical paths for customers to connect, pay and book.",
        items: [
          "Social media & WhatsApp integration",
          "Payment gateway & automated receipting",
          "Booking system setup & launch support",
        ],
        priceNote: "INCLUDED IN PACKAGE",
      },
    ],
  },
  cac: {
    key: "cac",
    eyebrow: "CAC REGISTRATION",
    title: "Start with the",
    titleEm: "right legal foundation.",
    description:
      "Open the route that fits your business or organisation. Each pathway has support levels, requirements and a tailored request process.",
    stats: [
      ["THREE PATHWAYS", "Business, Company, NGO"],
      ["FROM N25,000", "Affordable statutory filing"],
      ["DOCUMENT-LED", "Clear requirements checklist"],
      ["DIGITAL DELIVERY", "Original PDF certificates"],
    ],
    defaultServiceLabel: "CAC Registration Request",
    featureNote:
      "Open a CAC pathway above to choose Business Name, Limited Company or NGO / Incorporated Trustees registration. The request form below captures initial details to issue the full document checklist.",
    cards: [
      {
        badge: "BUSINESS NAME",
        title: "Business Name Registration",
        description: "For sole proprietors and small-scale businesses ready to formalise.",
        items: [
          "Official CAC Certificate",
          "Status Report with business details",
          "NRS Tax ID pathway included",
        ],
        priceNote: "FROM N25,000",
      },
      {
        badge: "LIMITED COMPANY",
        title: "Limited Company Registration",
        description: "For incorporation, directors/shareholders and a corporate structure.",
        items: [
          "CAC incorporation documents",
          "Status Report & MEMART",
          "Tax ID & corporate compliance setup",
        ],
        priceNote: "FROM N60,000",
      },
      {
        badge: "INCORPORATED TRUSTEES",
        title: "NGO / Trustee Registration",
        description: "For NGOs, associations, faith organisations and social clubs.",
        items: [
          "Trustee-led registration",
          "Constitution drafting & newspaper publications",
          "Official NGO documentation",
        ],
        priceNote: "FROM N150,000",
      },
    ],
  },
  compliance: {
    key: "compliance",
    eyebrow: "COMPLIANCE & TAX",
    title: "Be ready to operate",
    titleEm: "with confidence.",
    description:
      "Select the compliance or tax setup your business needs. We confirm the relevant document list and delivery route before work begins.",
    stats: [
      ["REGULATORY READY", "Support that fits your stage"],
      ["FAST TRACK", "Expedited compliance desks"],
      ["DOCUMENT CHECKLIST", "Confirmed per service"],
      ["GUIDED SUPPORT", "Clear next steps"],
    ],
    defaultServiceLabel: "Compliance Request",
    cards: [
      {
        badge: "SCUML",
        title: "SCUML Registration",
        description: "Compliance documentation and reporting-readiness support for bank operations.",
        items: [
          "SCUML certificate pathway",
          "EFCC compliance guidance",
          "Monthly reporting guidance template",
        ],
        priceNote: "REQUEST QUOTE",
      },
      {
        badge: "NRS / REV360",
        title: "NRS Tax ID & Rev360",
        description: "Set up corporate tax identity and active filing account access.",
        items: [
          "NRS Corporate Tax ID (TIN)",
          "Rev360 online portal activation",
          "Tax compliance account setup",
        ],
        priceNote: "REQUEST QUOTE",
      },
      {
        badge: "REGULATORY",
        title: "NAFDAC & Sector Licenses",
        description: "A scoped route for NAFDAC and sector-specific statutory requirements.",
        items: [
          "Product / business compliance review",
          "Standard document checklist",
          "Application support scope",
        ],
        priceNote: "REQUEST QUOTE",
      },
    ],
  },
  trademark: {
    key: "trademark",
    eyebrow: "TRADEMARK REGISTRATION",
    title: "Protect the name you are",
    titleEm: "building.",
    description:
      "Choose the right support level, then submit the brand, owner and goods/services information needed to begin.",
    stats: [
      ["CLASSES 1–45", "All Nice Classification classes"],
      ["PRE-FILING SEARCH", "Availability check before filing"],
      ["EXCLUSIVE RIGHTS", "Federal brand protection"],
      ["DIGITAL UPDATES", "Milestone tracking"],
    ],
    defaultServiceLabel: "Trademark Registration Request",
    cards: [
      {
        badge: "START",
        title: "Availability Search",
        description: "A considered first review before an application is filed.",
        items: [
          "Trademark name availability search",
          "Eligibility & conflict review",
          "Official search guidance report",
        ],
        priceNote: "SEARCH ONLY",
      },
      {
        badge: "FILE",
        title: "Trademark Filing",
        description: "Filing support for a suitable search outcome.",
        items: [
          "Official statutory filing with Ministry",
          "Acknowledgement letter & acceptance",
          "One trademark class included",
        ],
        priceNote: "FILING SUPPORT",
      },
      {
        badge: "COMPLETE",
        title: "Search & Registration",
        description: "Joined-up support from early search through certificate publication.",
        items: [
          "Pre-filing availability search",
          "Trademark application filing",
          "Publication & registration follow-up",
        ],
        priceNote: "FULL PROTECTION",
      },
    ],
  },
  brand: {
    key: "brand",
    eyebrow: "BRAND & DIGITAL",
    title: "Present a business people can",
    titleEm: "trust.",
    description:
      "Build the identity, website and customer-ready tools that make it easier for people to find, understand and choose you.",
    stats: [
      ["CONNECTED PRESENCE", "Brand to website"],
      ["CUSTOM BUILDS", "No generic templates"],
      ["BUILT AROUND YOU", "Scoped before build"],
      ["READY TO GROW", "Tools that connect"],
    ],
    defaultServiceLabel: "Brand & Digital Enquiry",
    cards: [
      {
        badge: "BRAND",
        title: "Brand Strategy & Identity",
        description: "Clarify the look, language and key touchpoints for your audience.",
        items: [
          "Brand direction & positioning",
          "Executive logo system & typography",
          "Stationery & business collateral suite",
        ],
        priceNote: "BRAND SUITE",
      },
      {
        badge: "WEBSITE",
        title: "Corporate Website & Email",
        description: "A credible digital home and professional communications base.",
        items: [
          "Modern responsive website design",
          "Custom domain & corporate emails",
          "Managed cloud hosting & SSL",
        ],
        priceNote: "WEB PLATFORM",
      },
      {
        badge: "TOOLS",
        title: "Digital Business Tools",
        description: "Useful paths for customers to enquire, book, pay and connect.",
        items: [
          "Client consultation booking setup",
          "Paystack gateway integration",
          "Automated customer notifications",
        ],
        priceNote: "OPERATIONS",
      },
    ],
  },
  growth: {
    key: "growth",
    eyebrow: "AI & GROWTH",
    title: "Create systems that help you",
    titleEm: "move further.",
    description:
      "Use AI, automation and visibility support to reduce friction, communicate better and create growth momentum.",
    stats: [
      ["PRACTICAL AI", "Built around your workflow"],
      ["AUTOMATED BILLING", "Instant WhatsApp receipts"],
      ["STRATEGIC BUILD", "Not one-size-fits-all"],
      ["GROWTH READY", "Systems that scale"],
    ],
    defaultServiceLabel: "AI & Growth Enquiry",
    cards: [
      {
        badge: "AUTOMATION",
        title: "Business Automation",
        description: "Connect repetitive work into faster, clearer automated workflows.",
        items: [
          "Business workflow audit",
          "Automated receipting & invoice dispatch",
          "Implementation & staff onboarding",
        ],
        priceNote: "AUTOMATION",
      },
      {
        badge: "AGENTIC",
        title: "AI Agents & Video",
        description: "AI assistants and AI video commercial systems for modern work.",
        items: [
          "AI customer concierge planning",
          "Automated enquiry routing",
          "AI social video commercial production",
        ],
        priceNote: "AI CREATIVE",
      },
      {
        badge: "VISIBILITY",
        title: "Marketing & Growth",
        description: "Turn business direction into stronger visibility and audience reach.",
        items: [
          "Go-to-market campaign planning",
          "Positioning & content strategy",
          "Long-term growth support",
        ],
        priceNote: "GROWTH",
      },
    ],
  },
};

export default function ServicesPage() {
  const [activePathway, setActivePathway] = useState<PathwayKey | null>(null);
  const [selectedClasses, setSelectedClasses] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    supportLevel: "",
    businessName: "",
    goodsServices: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleClass = (idx: number) => {
    setSelectedClasses((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const handlePathwaySelect = (key: PathwayKey) => {
    setActivePathway(key);
    setFormData((prev) => ({
      ...prev,
      supportLevel: pathways[key].defaultServiceLabel,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          whatsappPhone: formData.phone || "+2340000000000",
          email: formData.email,
          proposedBusinessName: formData.businessName || "Service Enquiry",
          packageInterested: formData.supportLevel || activePathway || "General Service Request",
          shareCapitalMillions: 1,
          source: `eponix_services_${activePathway || "hub"}`,
        }),
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const current = activePathway ? pathways[activePathway] : null;

  return (
    <div className="bg-[#f3f5ec] text-[#0c1210] min-h-screen">
      {/* =========================================================
          IF A PATHWAY IS ACTIVE -> SHOW THE DETAILED FLOW
          ========================================================= */}
      {current ? (
        <div className="animate-fadeIn">
          {/* Pathway Flow Hero */}
          <section className="bg-[#0c1210] text-white py-20 sm:py-24 border-b border-white/10">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-7 space-y-6">
              <button
                onClick={() => setActivePathway(null)}
                className="font-mono-tag text-xs tracking-widest text-[#c9f95a] hover:underline flex items-center gap-1.5"
              >
                <span>&larr; ALL SERVICES</span>
              </button>

              <div className="space-y-3 pt-2">
                <span className="font-mono-tag text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#c9f95a] block">
                  {current.eyebrow}
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                  {current.title}{" "}
                  <em className="font-serif-italic font-semibold text-[#c9f95a] not-italic">
                    {current.titleEm}
                  </em>
                </h1>
                <p className="text-sm sm:text-base text-[#bdc9c0] max-w-2xl font-normal leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Stats Strip */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/15">
                {current.stats.map(([title, subtitle], idx) => (
                  <div
                    key={idx}
                    className="pr-4 border-r border-white/15 last:border-r-0 min-h-[70px] space-y-1"
                  >
                    <strong className="block text-sm sm:text-base font-extrabold text-white">
                      {title}
                    </strong>
                    <span className="font-mono-tag text-[10px] text-[#adbbb1] block">
                      {subtitle}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Level Cards */}
          <section className="py-16 sm:py-24 bg-[#f3f5ec]">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-7 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-6 space-y-2">
                  <span className="font-mono-tag text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#46785d] block">
                    Choose a support level
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0c1210]">
                    See what is included, then choose your path.
                  </h2>
                </div>
                <div className="md:col-span-6">
                  <p className="text-xs sm:text-sm text-[#59695f] leading-relaxed">
                    Final scope, timeline and statutory requirements are confirmed directly with Eponix after the relevant project details have been reviewed.
                  </p>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {current.cards.map((card, idx) => (
                  <article
                    key={idx}
                    className="bg-white border border-[#ced7cd] p-6 sm:p-7 flex flex-col justify-between space-y-6 shadow-sm"
                  >
                    <div className="space-y-4">
                      <span className="inline-block border border-[#aabdaf] px-2.5 py-1 rounded-full font-mono-tag text-[10px] text-[#0c1210]">
                        {card.badge}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#0c1210] leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#56665b] leading-relaxed font-normal">
                        {card.description}
                      </p>
                      <div className="w-full h-px bg-[#ced7cd]" />
                      <ul className="space-y-2 text-xs text-[#0c1210]">
                        {card.items.map((it, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2">
                            <span className="text-[#4b976b]">&bull;</span>
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-[#ced7cd] space-y-3">
                      <span className="font-mono-tag text-xs font-bold text-[#407458] block">
                        {card.priceNote}
                      </span>
                      <a
                        href="#request"
                        className="inline-flex items-center gap-2 border border-[#0c1210] hover:bg-[#c9f95a] hover:border-[#c9f95a] text-[#0c1210] px-4 py-2.5 text-xs font-extrabold transition-all"
                      >
                        <span>Choose this path</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {current.featureNote && (
                <div className="p-6 bg-[#e7ece3] border-l-4 border-[#c9f95a] text-xs text-[#54645a] leading-relaxed">
                  {current.featureNote}
                </div>
              )}
            </div>
          </section>

          {/* Request Intake Form */}
          <section id="request" className="py-16 sm:py-24 bg-[#e7ece3] border-t border-[#ced7cd]">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-7">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                <div className="lg:col-span-5 space-y-3">
                  <span className="font-mono-tag text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#46785d] block">
                    Start your request
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0c1210] leading-snug">
                    Tell us what you need. We&apos;ll guide the next step.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#56665b] leading-relaxed">
                    This is a service request, not an automatic charge. Eponix will confirm scope, statutory requirements, pricing and timeline before proceeding.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  {isSubmitted ? (
                    <div className="p-8 bg-white border border-[#ced7cd] text-center space-y-4 shadow-sm">
                      <div className="w-12 h-12 rounded-full bg-[#17382b]/10 flex items-center justify-center mx-auto text-[#17382b]">
                        <Check className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-extrabold text-[#0c1210]">Request Received</h3>
                      <p className="text-xs sm:text-sm text-[#56665b] max-w-md mx-auto leading-relaxed">
                        Thank you. Your request for <strong className="text-[#0c1210]">{formData.supportLevel}</strong> has been logged for the Eponix team.
                      </p>
                      <button
                        onClick={() => setActivePathway(null)}
                        className="inline-flex items-center gap-2 border border-[#0c1210] px-4 py-2 text-xs font-bold text-[#0c1210] mt-2"
                      >
                        Explore other services
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="bg-white border border-[#ced7cd] p-6 sm:p-8 space-y-4 shadow-sm">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="block space-y-1">
                          <span className="text-[11px] font-extrabold text-[#0c1210]">Full Name *</span>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-2.5 bg-[#fbfcfa] border border-[#d5ddd4] text-xs font-medium text-[#0c1210] outline-none focus:border-[#46785d]"
                          />
                        </label>
                        <label className="block space-y-1">
                          <span className="text-[11px] font-extrabold text-[#0c1210]">Email Address *</span>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-2.5 bg-[#fbfcfa] border border-[#d5ddd4] text-xs font-medium text-[#0c1210] outline-none focus:border-[#46785d]"
                          />
                        </label>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="block space-y-1">
                          <span className="text-[11px] font-extrabold text-[#0c1210]">Phone / WhatsApp</span>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 0813 709 2154"
                            className="w-full p-2.5 bg-[#fbfcfa] border border-[#d5ddd4] text-xs font-medium text-[#0c1210] outline-none focus:border-[#46785d]"
                          />
                        </label>
                        <label className="block space-y-1">
                          <span className="text-[11px] font-extrabold text-[#0c1210]">Support Level</span>
                          <select
                            value={formData.supportLevel}
                            onChange={(e) => setFormData({ ...formData, supportLevel: e.target.value })}
                            className="w-full p-2.5 bg-[#fbfcfa] border border-[#d5ddd4] text-xs font-medium text-[#0c1210] outline-none focus:border-[#46785d]"
                          >
                            <option>{current.defaultServiceLabel}</option>
                            <option>Not sure yet — Need advisory</option>
                          </select>
                        </label>
                      </div>

                      <label className="block space-y-1">
                        <span className="text-[11px] font-extrabold text-[#0c1210]">Business / Organisation Name</span>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="e.g. Acme Innovations Limited"
                          className="w-full p-2.5 bg-[#fbfcfa] border border-[#d5ddd4] text-xs font-medium text-[#0c1210] outline-none focus:border-[#46785d]"
                        />
                      </label>

                      {/* Trademark Specific Checkboxes if active pathway is trademark */}
                      {current.key === "trademark" ? (
                        <div className="space-y-4 pt-2">
                          <div>
                            <span className="text-[11px] font-extrabold text-[#0c1210] block mb-1">
                              Select Trademark Class / Classes (Nice Classification 1 to 45)
                            </span>
                            <div className="h-44 overflow-y-auto border border-[#d5ddd4] p-3 space-y-1.5 bg-[#fbfcfa] text-xs">
                              {trademarkClasses.map((cls, cIdx) => (
                                <label key={cIdx} className="flex items-center gap-2 cursor-pointer hover:bg-black/5 p-1 rounded">
                                  <input
                                    type="checkbox"
                                    checked={selectedClasses.includes(cIdx + 1)}
                                    onChange={() => toggleClass(cIdx + 1)}
                                    className="accent-[#17382b]"
                                  />
                                  <span>
                                    <strong>Class {cIdx + 1}:</strong> {cls}
                                  </span>
                                </label>
                              ))}
                            </div>
                          </div>

                          <label className="block space-y-1">
                            <span className="text-[11px] font-extrabold text-[#0c1210]">Goods or Services</span>
                            <textarea
                              rows={3}
                              value={formData.goodsServices}
                              onChange={(e) => setFormData({ ...formData, goodsServices: e.target.value })}
                              placeholder="Describe the products or services connected to the trademark."
                              className="w-full p-2.5 bg-[#fbfcfa] border border-[#d5ddd4] text-xs font-medium text-[#0c1210] outline-none focus:border-[#46785d]"
                            />
                          </label>
                        </div>
                      ) : (
                        <label className="block space-y-1">
                          <span className="text-[11px] font-extrabold text-[#0c1210]">What would you like us to help with?</span>
                          <textarea
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            placeholder="Tell us a little about the business, organisation or project goals."
                            className="w-full p-2.5 bg-[#fbfcfa] border border-[#d5ddd4] text-xs font-medium text-[#0c1210] outline-none focus:border-[#46785d]"
                          />
                        </label>
                      )}

                      <p className="font-mono-tag text-[10px] text-[#617168] leading-normal pt-1">
                        Please do not send identity documents or sensitive records through this preliminary form. Eponix will provide a secure document upload workflow where required.
                      </p>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 bg-[#c9f95a] hover:bg-[#b8f240] text-[#0c1210] px-6 py-3 text-xs font-extrabold tracking-wide transition-all"
                        >
                          <span>{isSubmitting ? "Sending..." : "Send request"}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* =========================================================
           DEFAULT CATALOG HUB (6 STARTING TILES)
           ========================================================= */
        <div>
          {/* Services Hero */}
          <section className="bg-[#101713] text-white py-24 sm:py-32 relative overflow-hidden border-b border-white/10">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-7 space-y-5 relative z-10">
              <span className="font-mono-tag text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#c9f95a] block">
                Eponix service pathways
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02]">
                Build the right business{" "}
                <em className="font-serif-italic font-semibold text-[#c9f95a] not-italic">
                  from the inside out.
                </em>
              </h1>
              <p className="text-sm sm:text-base text-[#d4dfd5] max-w-2xl font-normal leading-relaxed">
                Open a service to see its complete pathway: support levels, what it includes, the details we need, and a request form to begin the conversation.
              </p>
            </div>
          </section>

          {/* 6 Starting Point Tiles */}
          <section className="py-20 sm:py-28 bg-[#e5eadf]">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-7 space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                <div className="md:col-span-6 space-y-2">
                  <span className="font-mono-tag text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#46785d] block">
                    Choose a starting point
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0c1210] leading-snug">
                    Every service is a complete, guided experience.
                  </h2>
                </div>
                <div className="md:col-span-6">
                  <p className="text-xs sm:text-sm text-[#55655b] leading-relaxed">
                    Start with a specific need or use the Ultimate Launch Package to bring your legal foundation, compliance, identity and digital presence together.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    key: "ultimate" as PathwayKey,
                    num: "01 / SIGNATURE",
                    title: "Ultimate Business Launch",
                    desc: "One package across six core areas of a professional business launch.",
                    action: "Open the package →",
                  },
                  {
                    key: "cac" as PathwayKey,
                    num: "02 / FOUNDATION",
                    title: "CAC Registration",
                    desc: "Business Name, Limited Company and NGO / Incorporated Trustees pathways.",
                    action: "Open CAC services →",
                  },
                  {
                    key: "compliance" as PathwayKey,
                    num: "03 / READINESS",
                    title: "Compliance & Tax",
                    desc: "SCUML, NRS Tax ID / Rev360, NAFDAC and related support.",
                    action: "Open compliance →",
                  },
                  {
                    key: "trademark" as PathwayKey,
                    num: "04 / PROTECTION",
                    title: "Trademark Registration",
                    desc: "Search, filing and all 45 trademark classes.",
                    action: "Open trademark →",
                  },
                  {
                    key: "brand" as PathwayKey,
                    num: "05 / EXPRESSION",
                    title: "Brand & Digital",
                    desc: "Identity, website, corporate email and digital tools.",
                    action: "Open brand services →",
                  },
                  {
                    key: "growth" as PathwayKey,
                    num: "06 / MOMENTUM",
                    title: "AI, Marketing & Growth",
                    desc: "Automation, agents, AI video and visibility support.",
                    action: "Open growth services →",
                  },
                ].map((tile) => (
                  <button
                    key={tile.key}
                    type="button"
                    onClick={() => handlePathwaySelect(tile.key)}
                    className="p-7 sm:p-8 bg-[#f3f5ec] border border-[#ced7cd] hover:bg-[#17382b] hover:text-white transition-all duration-300 text-left min-h-[240px] flex flex-col justify-between group shadow-sm"
                  >
                    <div>
                      <span className="font-mono-tag text-xs text-[#4a795d] group-hover:text-[#ccd9cf] block mb-6">
                        {tile.num}
                      </span>
                      <h3 className="text-xl font-extrabold text-[#0c1210] group-hover:text-white mb-2 leading-snug">
                        {tile.title}
                      </h3>
                      <p className="text-xs text-[#5b6b60] group-hover:text-[#ccd9cf] font-normal leading-relaxed">
                        {tile.desc}
                      </p>
                    </div>
                    <div className="pt-6 font-mono-tag text-xs font-bold text-[#0c1210] group-hover:text-[#c9f95a] flex items-center gap-1">
                      <span>{tile.action}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

