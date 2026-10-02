"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock, FileCheck, ArrowRight, Award } from "lucide-react";

type PackageType = "Starter" | "Pro" | "Premium";

const packages: Record<
  PackageType,
  { name: string; price: string; description: string; features: string[] }
> = {
  Starter: {
    name: "Starter",
    price: "₦15,000",
    description: "Pre-filing Search Only. Mandatory registry availability check before filing.",
    features: [
      "Registry portal availability search",
      "Eligibility review before filing",
      "Search result guidance",
      "Covers 1 trademark class",
      "Timeframe: 3 to 7 working days",
    ],
  },
  Pro: {
    name: "Pro",
    price: "₦60,000",
    description: "Registration Only, for trademarks where an approved search has already been completed.",
    features: [
      "Trademark application filing",
      "Official Acknowledgement Letter support",
      "Official Acceptance Letter support",
      "Covers 1 trademark class",
      "Timeframe: 10 to 21 working days",
    ],
  },
  Premium: {
    name: "Premium",
    price: "₦70,000",
    description: "The complete route from pre-filing search through trademark registration support.",
    features: [
      "Pre-filing trademark availability search",
      "Eligibility legal review",
      "Trademark application filing",
      "Acknowledgement & Acceptance letters",
      "Covers 1 trademark class",
      "Timeframe: 10 to 21 working days",
    ],
  },
};

const NICE_CLASSES = [
  { classNum: "Class 1", desc: "Chemicals for use in industry, science, agriculture, horticulture and forestry" },
  { classNum: "Class 2", desc: "Paints, varnishes, lacquers, preservatives against rust and wood deterioration" },
  { classNum: "Class 3", desc: "Non-medicated cosmetics, soaps, perfumes, essential oils, cleaning preparations" },
  { classNum: "Class 4", desc: "Industrial oils and greases, fuels, illuminants, candles and wicks" },
  { classNum: "Class 5", desc: "Pharmaceuticals, medical and veterinary preparations, sanitary preparations, baby food" },
  { classNum: "Class 6", desc: "Common metals and their alloys, metal building materials, transportable metal buildings" },
  { classNum: "Class 7", desc: "Machines, machine tools, power-operated tools, motors and engines (except land vehicles)" },
  { classNum: "Class 8", desc: "Hand tools and implements (hand-operated), cutlery, side arms, razors" },
  { classNum: "Class 9", desc: "Downloadable software, mobile apps, computers, electronics, scientific & AI apparatus" },
  { classNum: "Class 10", desc: "Surgical, medical, dental and veterinary apparatus and instruments, orthopaedic articles" },
  { classNum: "Class 11", desc: "Apparatus and installations for lighting, heating, cooling, steam generating, cooking, drying" },
  { classNum: "Class 12", desc: "Vehicles, apparatus for locomotion by land, air or water" },
  { classNum: "Class 13", desc: "Firearms, ammunition and projectiles, explosives, fireworks" },
  { classNum: "Class 14", desc: "Precious metals and their alloys, jewellery, precious and semi-precious stones, horological instruments" },
  { classNum: "Class 15", desc: "Musical instruments, music stands and stands for musical instruments, conductors' batons" },
  { classNum: "Class 16", desc: "Paper, cardboard, printed matter, bookbinding material, photographs, stationery, packaging" },
  { classNum: "Class 17", desc: "Unprocessed and semi-processed rubber, gutta-percha, plastics and resins in extruded form" },
  { classNum: "Class 18", desc: "Leather and imitations of leather, animal skins, luggage, bags, umbrellas, saddlery" },
  { classNum: "Class 19", desc: "Materials, not of metal, for building and construction, rigid pipes, asphalt, pitch, bitumen" },
  { classNum: "Class 20", desc: "Furniture, mirrors, picture frames, containers not of metal for storage or transport" },
  { classNum: "Class 21", desc: "Household or kitchen utensils and containers, cookware, tableware, glassware, porcelain" },
  { classNum: "Class 22", desc: "Ropes and string, nets, tents, tarpaulins, sails, sacks for transport and storage of materials" },
  { classNum: "Class 23", desc: "Yarns and threads for textile use" },
  { classNum: "Class 24", desc: "Textiles and substitutes for textiles, household linen, curtains of textile or plastic" },
  { classNum: "Class 25", desc: "Clothing, footwear, headwear, apparel fashion brand" },
  { classNum: "Class 26", desc: "Lace, braid and embroidery, ribbons and bows, buttons, hooks and eyes, pins and needles" },
  { classNum: "Class 27", desc: "Carpets, rugs, mats and matting, linoleum and other materials for covering existing floors" },
  { classNum: "Class 28", desc: "Games, toys and playthings, video game apparatus, gymnastic and sporting articles" },
  { classNum: "Class 29", desc: "Meat, fish, poultry, game, meat extracts, preserved, frozen, dried and cooked fruits & vegetables" },
  { classNum: "Class 30", desc: "Coffee, tea, cocoa, rice, pasta, noodles, flour, cereals, bread, pastries, confectionery, spices" },
  { classNum: "Class 31", desc: "Raw and unprocessed agricultural, aquacultural, horticultural and forestry products, fresh fruits" },
  { classNum: "Class 32", desc: "Beers, non-alcoholic beverages, mineral and aerated waters, fruit beverages and fruit juices" },
  { classNum: "Class 33", desc: "Alcoholic beverages (except beers), alcoholic preparations for making beverages" },
  { classNum: "Class 34", desc: "Tobacco and tobacco substitutes, cigarettes, cigars, electronic cigarettes, smokers' articles" },
  { classNum: "Class 35", desc: "Advertising, business management, organisation and administration, office functions, retail & e-commerce" },
  { classNum: "Class 36", desc: "Financial, monetary and banking services, insurance services, real estate affairs, fintech & crypto" },
  { classNum: "Class 37", desc: "Construction services, installation and repair services, mining extraction, building development" },
  { classNum: "Class 38", desc: "Telecommunications services, broadcasting, streaming, digital networks & data transmission" },
  { classNum: "Class 39", desc: "Transport, packaging and storage of goods, travel arrangement, courier & logistics services" },
  { classNum: "Class 40", desc: "Treatment of materials, custom manufacturing, recycling, waste treatment, printing services" },
  { classNum: "Class 41", desc: "Education, providing of training, entertainment, sporting and cultural activities, media production" },
  { classNum: "Class 42", desc: "Scientific and technological services, research and design, IT, software development, SaaS, cloud" },
  { classNum: "Class 43", desc: "Services for providing food and drink, restaurants, cafes, catering, temporary accommodation, hotels" },
  { classNum: "Class 44", desc: "Medical services, veterinary services, hygienic and beauty care for human beings or animals, agriculture" },
  { classNum: "Class 45", desc: "Legal services, security services for physical protection, personal and social services by others" },
];

export default function TrademarkPage() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType>("Premium");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    trademarkName: "",
    ownerName: "",
    trademarkClass: "Class 35",
    additionalClasses: "",
    productCategory: "",
    referralCode: "",
    termsConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsConsent: e.target.checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMessage("Please provide your contact name, phone, and active email.");
      return;
    }

    if (!formData.trademarkName || !formData.ownerName) {
      setErrorMessage("Please enter your proposed trademark name and applicant/owner name.");
      return;
    }

    if (!formData.termsConsent) {
      setErrorMessage("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          proposedBusinessName: formData.trademarkName,
          packageInterested: `Trademark - ${selectedPkg}`,
          source: "trademark-form",
          additionalDetails: `Owner: ${formData.ownerName} | Class: ${formData.trademarkClass} | Addl Classes: ${formData.additionalClasses || "None"} | Category: ${formData.productCategory || "N/A"} | Referral: ${formData.referralCode || "N/A"}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to submit trademark request. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <div className="eyebrow">Intellectual Property Registry · Trademark Protection</div>
              <h1 className="heading-1">Protect Your Brand with Trademark Registration.</h1>
              <p className="lead-text">
                Trademark search, official filing, acknowledgement and acceptance letter support for Nigerian businesses across all 45 Nice Classification classes.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
                <a href="#form" className="ep-btn ep-btn-primary text-center justify-center">
                  Get Started
                </a>
                <a href="#packages" className="ep-btn ep-btn-dark border border-[rgba(198,255,63,0.3)] text-[#f5f7ef] hover:border-[#c6ff3f] text-center justify-center">
                  See What You Get
                </a>
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
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">Nigeria's Top Rated</div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">IPO &amp; TRADEMARK ACCREDITED</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-2">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-[rgba(198,255,63,0.12)] border border-[rgba(198,255,63,0.25)] text-[#c6ff3f] font-mono text-[10px] tracking-wider uppercase font-bold">
                    BRAND ASSET DEFENSE
                  </span>
                  <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug">
                    Exclusive Brand Protection.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Official registry availability search, legal classification filing, statutory acknowledgement, and official acceptance letter issuance.
                  </p>
                </div>

                {/* 3 Checkmarks */}
                <div className="space-y-2 pt-2 border-t border-[rgba(198,255,63,0.14)] text-[13px] text-[#d5dfd8]">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#c6ff3f] shrink-0" />
                    <span>Comprehensive Trademark Availability Search</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#c6ff3f] shrink-0" />
                    <span>Official Acceptance &amp; Acknowledgement Letters</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#c6ff3f] shrink-0" />
                    <span>Full coverage across all 45 Nice classes</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <a
                    href="#form"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[14px] flex items-center gap-2 rounded-lg"
                  >
                    <span>Start Your Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Package Selector Banner */}
      <section id="packages" className="py-16 bg-[#07100c]/60 border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-10">
            <div>
              <div className="eyebrow">Trademark Packages</div>
              <h2 className="heading-2">Choose the trademark service you need.</h2>
            </div>
            <div className="text-sm text-[#aab6ad] leading-relaxed">
              Each package covers one trademark class under the official 45-class Nice Classification system.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(packages) as PackageType[]).map((pkgKey) => {
              const pkg = packages[pkgKey];
              const isSelected = selectedPkg === pkgKey;
              return (
                <div
                  key={pkgKey}
                  onClick={() => {
                    setSelectedPkg(pkgKey);
                    const formEl = document.getElementById("form");
                    if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`p-6 border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#c6ff3f] text-[#071007] border-[#c6ff3f] shadow-lg scale-[1.02]"
                      : "bg-[#0b120f] text-[#f5f7ef] border-[#26362c] hover:border-[#c6ff3f]/50"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 ${
                          isSelected
                            ? "bg-[#071007] text-[#c6ff3f]"
                            : "bg-[#10261a] text-[#c6ff3f]"
                        }`}
                      >
                        {pkg.name} {pkgKey === "Premium" ? "· Most Popular" : ""}
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-[#071007]" />}
                    </div>
                    <div className="text-3xl font-serif font-bold mt-4 mb-2">{pkg.price}</div>
                    <p
                      className={`text-xs ${
                        isSelected ? "text-[#10261a]" : "text-[#aab6ad]"
                      }`}
                    >
                      {pkg.description}
                    </p>
                    <ul className="mt-4 space-y-2 text-xs">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-bold">•</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    className={`mt-6 w-full py-2.5 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#071007] text-[#f5f7ef]"
                        : "bg-[#10261a] text-white hover:bg-[#c6ff3f] hover:text-[#071007]"
                    }`}
                  >
                    {isSelected ? "Selected · Continue to Form ↓" : `Select ${pkg.name}`}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="ep-notice mt-8">
            <strong>Additional Classes Notice</strong>
            <p className="text-xs text-[#aab6ad]">
              Each additional class attracts the same selected package amount. If a fresh search and resubmission is required for a new name, the applicable fee is communicated before submission.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Requirements & Intake Form Section */}
      <section id="form" className="py-16 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="eyebrow">Submit Request</div>
                <h2 className="heading-2">Complete your application.</h2>
                <p className="lead-text text-sm mt-4">
                  Choose your package, provide your trademark and owner details, select the relevant class and submit.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#07100c] border border-[#26362c]">
                  <div className="text-xs font-mono text-[#c6ff3f] uppercase mb-1">01 / Proposed Trademark Name</div>
                  <p className="text-xs text-[#aab6ad]">The exact brand name, logo phrase or identity you want to protect.</p>
                </div>
                <div className="p-4 bg-[#07100c] border border-[#26362c]">
                  <div className="text-xs font-mono text-[#c6ff3f] uppercase mb-1">02 / Owner / Applicant Details</div>
                  <p className="text-xs text-[#aab6ad]">Name of the individual, company or organisation that will own the trademark.</p>
                </div>
                <div className="p-4 bg-[#07100c] border border-[#26362c]">
                  <div className="text-xs font-mono text-[#c6ff3f] uppercase mb-1">03 / Goods or Services</div>
                  <p className="text-xs text-[#aab6ad]">Describe what products or services the trademark will be used for.</p>
                </div>
              </div>

              <div className="ep-notice">
                <strong>Processing Notice</strong>
                <p className="text-xs text-[#aab6ad]">
                  A pre-filing search is required before a new trademark is filed. Final search results, filing acceptance and regulatory approval remain subject to the Trademark Registry.
                </p>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="p-10 bg-[#07100c] border border-[#c6ff3f] text-center space-y-5">
                  <div className="w-16 h-16 bg-[#c6ff3f] text-[#071007] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="heading-3">Trademark Request Received</h3>
                  <p className="text-[#aab6ad] max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your Trademark registration request for <strong className="text-[#c6ff3f]">&quot;{formData.trademarkName}&quot;</strong> under the <strong className="text-white">{selectedPkg}</strong> package has been queued for registry availability search.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20Trademark%20request%20for%20${encodeURIComponent(formData.trademarkName)}%20(${selectedPkg}%20tier).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-btn ep-btn-primary"
                    >
                      Connect on WhatsApp &rarr;
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="ep-btn ep-btn-dark"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#0d1711] border border-[#33473a] p-6 lg:p-10 space-y-6 shadow-2xl"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-950/80 border border-red-500/50 text-red-200 text-xs rounded">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad]">
                      Selected Trademark Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                    >
                      <option value="Starter">Starter: ₦15,000 (Pre-filing Search Only)</option>
                      <option value="Pro">Pro: ₦60,000 (Filing Only: After Approved Search)</option>
                      <option value="Premium">Premium: ₦70,000 (Complete Search + Filing Support)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="08012345678"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Proposed Trademark / Brand Name *
                      </label>
                      <input
                        type="text"
                        name="trademarkName"
                        value={formData.trademarkName}
                        onChange={handleChange}
                        required
                        placeholder="E.g., EPONYX or ZEPHYR"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Owner / Applicant Name *
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                        placeholder="Individual or Company Name"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                      Primary Trademark Class (Nice Classification 1 to 45) *
                    </label>
                    <select
                      name="trademarkClass"
                      value={formData.trademarkClass}
                      onChange={handleChange}
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                    >
                      {NICE_CLASSES.map((nc) => (
                        <option key={nc.classNum} value={nc.classNum}>
                          {nc.classNum}: {nc.desc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                      Additional Trademark Classes (Optional)
                    </label>
                    <input
                      type="text"
                      name="additionalClasses"
                      value={formData.additionalClasses}
                      onChange={handleChange}
                      placeholder="E.g., Class 9, Class 42 (Each additional class: +₦70,000)"
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                      Product or Service Category Description *
                    </label>
                    <textarea
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                      placeholder="Describe the exact goods or services sold under this brand name..."
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none min-h-[80px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Brand Logo or Supporting File (Optional)
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#07100c] text-xs text-[#aab6ad] border border-[#26362c] p-2 file:mr-2 file:py-1 file:px-2 file:bg-[#10261a] file:border-0 file:text-[#c6ff3f] file:text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Referral Code (Optional)
                      </label>
                      <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleChange}
                        placeholder="Enter code if referred"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#aab6ad]">
                      <input
                        type="checkbox"
                        checked={formData.termsConsent}
                        onChange={handleCheckboxChange}
                        className="mt-0.5 accent-[#c6ff3f]"
                      />
                      <span>
                        I have read and agree to the Terms of Service and Privacy Policy. I acknowledge that final trademark grants are issued by the Federal Trademark Registry.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#26362c]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider"
                    >
                      {isSubmitting ? "Processing Request..." : `Submit Trademark Request (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#7f8d84] mt-3">
                      Secure encrypted submission. Official digital acknowledgment and acceptance letters provided.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
