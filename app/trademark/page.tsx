"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock, FileCheck, ArrowRight, Award } from "lucide-react";
import { processFileInput, type UploadedFileItem } from "@/lib/file-utils";

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

const initialFormData = {
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
};

export default function TrademarkPage() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType>("Premium");
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileMap, setFileMap] = useState<Record<string, UploadedFileItem[]>>({});

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setFileMap({});
    setErrorMessage("");
  };

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      resetForm();
    }, 60000); // Auto-dismiss after 1 minute (60 seconds)
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsConsent: e.target.checked }));
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    label: string
  ) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        setFileMap((prev) => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
        return;
      }
      const processed = await processFileInput(e.target.files, label);
      setFileMap((prev) => ({ ...prev, [key]: processed }));
    } catch (err: any) {
      alert(err.message || "File upload error");
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.fullName) {
      setErrorMessage("Please enter your contact name.");
      return;
    }

    if (!formData.email) {
      setErrorMessage("Please provide an active email address.");
      return;
    }

    if (!formData.phone) {
      setErrorMessage("Please provide a valid WhatsApp phone number.");
      return;
    }

    if (!formData.trademarkName) {
      setErrorMessage("Please enter your proposed brand / trademark name.");
      return;
    }

    if (!formData.ownerName) {
      setErrorMessage("Please enter the applicant or proprietor name.");
      return;
    }

    if (!formData.termsConsent) {
      setErrorMessage("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const allFiles = Object.values(fileMap).flat();
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
          files: allFiles,
          submittedDetails: {
            "Contact Phone": formData.phone,
            "Email Address": formData.email,
            "Trademark / Brand Name": formData.trademarkName,
            "Proprietor / Owner Name": formData.ownerName,
            "Trademark Class": formData.trademarkClass,
            "Additional Classes": formData.additionalClasses || "None",
            "Product / Service Category": formData.productCategory || "N/A",
            "Referral Code": formData.referralCode || "N/A",
            ...(allFiles.length > 0
              ? { "Attached Documents": allFiles.map((f) => `${f.label || "File"}: ${f.filename}`).join(", ") }
              : {}),
          },
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to submit trademark request. Please check all fields and try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef] min-h-screen">
      {/* 1. Hero with Bold Corporate Background & Stretchy Advisory Card */}
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
                <a href="#packages" className="ep-btn ep-btn-primary text-center justify-center">
                  Choose Package
                </a>
                <a href="#form" className="ep-btn ep-btn-dark border border-[rgba(198,255,63,0.3)] text-[#f5f7ef] hover:border-[#c6ff3f] text-center justify-center">
                  Start Application
                </a>
                <Link href="/consult" className="ep-btn ep-btn-light text-center justify-center">
                  Talk to Our Team
                </Link>
              </div>
            </div>

            {/* Right Column: Stretchy Advisory Card */}
            <div className="lg:col-span-5">
              <div className="bg-[rgba(8,15,11,0.95)] border border-[rgba(198,255,63,0.42)] p-7 sm:p-9 space-y-6 shadow-2xl backdrop-blur-md rounded-2xl flex flex-col justify-between min-h-[440px]">
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
                <div className="space-y-3">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-snug">
                    Trademarks protect your brand name, logo, slogan, and intellectual property from copycats and unauthorized commercial use.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Choose Trademark Registration if you have an active brand name, logo, or product identity that requires exclusive legal rights across Nigeria. If you need complete business incorporation with branding and web infrastructure, view the Ultimate Launch Package.
                  </p>
                </div>

                {/* 1 Navigation Button */}
                <div className="pt-2">
                  <Link
                    href="/ultimate"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[13px] flex items-center gap-2 rounded-lg"
                  >
                    <span>View Ultimate Launch Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Package Selector Banner (Light Cream #E6EADF Palette) */}
      <section id="packages" className="py-20 lg:py-28 bg-[#E6EADF] text-[#0c1210] border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="mb-12">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">
              Choose a Plan
            </div>
            <h2 className="text-[34px] sm:text-[46px] font-bold tracking-tight text-[#0c1210] mt-1">
              Trademark Packages
            </h2>
            <p className="text-[15px] text-[#2b3a30] font-medium mt-2 max-w-2xl">
              Each package covers one trademark class under the official 45-class Nice Classification system.
            </p>
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
                  className={`p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#07130c] text-white border-2 border-[#c9f95a] shadow-2xl scale-[1.02]"
                      : "bg-[#ffffff] text-[#0c1210] border-[#c5d1bf] hover:border-[#17382b] shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded ${
                          isSelected
                            ? "bg-[#10261a] text-[#c9f95a] font-bold"
                            : "bg-[#e5eadf] text-[#17382b] font-bold"
                        }`}
                      >
                        {pkg.name} {pkgKey === "Premium" ? "· Most Popular" : ""}
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-[#c9f95a]" />}
                    </div>
                    <div className="text-3xl font-bold mt-4 mb-2">{pkg.price}</div>
                    <p
                      className={`text-xs ${
                        isSelected ? "text-[#c9d5cd]" : "text-[#2b3a30] font-medium"
                      }`}
                    >
                      {pkg.description}
                    </p>
                    <ul className="mt-5 space-y-2.5 text-xs">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSelected ? "text-[#c9f95a]" : "text-[#17382b]"}`} />
                          <span className={isSelected ? "text-[#f5f7ef]" : "text-[#2b3a30] font-medium"}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    className={`mt-6 w-full py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#c9f95a] text-[#07130c] hover:bg-white"
                        : "bg-[#07130c] text-[#f5f7ef] hover:bg-[#17382b]"
                    }`}
                  >
                    {isSelected ? "Selected · Continue to Form ↓" : `Select ${pkg.name}`}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="p-6 bg-[#ffffff] border border-[#c5d1bf] rounded-2xl mt-8 shadow-sm">
            <strong className="text-sm font-bold text-[#0c1210] block mb-1">Additional Classes Notice</strong>
            <p className="text-xs text-[#2b3a30] font-medium">
              Each additional class attracts the same selected package amount. If a fresh search and resubmission is required for a new name, the applicable fee is communicated before submission.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Requirements & Intake Form Section (Crisp Pure White #ffffff Palette) */}
      <section id="form" className="py-20 lg:py-28 bg-[#ffffff] text-[#0c1210] border-t border-[#dce3da]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">
                  Submit Request
                </div>
                <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight text-[#0c1210] mt-1">
                  Complete your application.
                </h2>
                <p className="text-[15px] text-[#2b3a30] font-medium mt-3 leading-relaxed">
                  Choose your package, provide your trademark and owner details, select the relevant class and submit.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl shadow-sm">
                  <div className="text-xs font-mono text-[#17382b] font-bold uppercase mb-1">01 / Proposed Trademark Name</div>
                  <p className="text-xs text-[#2b3a30] font-medium">The exact brand name, logo phrase or identity you want to protect.</p>
                </div>
                <div className="p-5 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl shadow-sm">
                  <div className="text-xs font-mono text-[#17382b] font-bold uppercase mb-1">02 / Owner / Applicant Details</div>
                  <p className="text-xs text-[#2b3a30] font-medium">Name of the individual, company or organisation that will own the trademark.</p>
                </div>
                <div className="p-5 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl shadow-sm">
                  <div className="text-xs font-mono text-[#17382b] font-bold uppercase mb-1">03 / Goods or Services</div>
                  <p className="text-xs text-[#2b3a30] font-medium">Describe what products or services the trademark will be used for.</p>
                </div>
              </div>

              <div className="p-6 bg-[#07130c] border border-[#1e3b2b] rounded-2xl text-xs text-[#c9d5cd] shadow-md">
                <strong className="text-white block mb-1 text-sm font-bold">Processing Notice</strong>
                <p className="text-xs text-[#c9d5cd] leading-relaxed">
                  A pre-filing search is required before a new trademark is filed. Final search results, filing acceptance and regulatory approval remain subject to the Trademark Registry.
                </p>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="relative p-10 bg-[#ffffff] border-2 border-[#17382b] text-center space-y-5 rounded-2xl shadow-xl">
                  <button
                    onClick={resetForm}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f0f4f1] hover:bg-[#e2e8e3] text-[#17382b] flex items-center justify-center font-bold text-sm transition-colors"
                    title="Close and return to form"
                  >
                    ✕
                  </button>
                  <div className="w-16 h-16 bg-[#10261a] text-[#c9f95a] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1210]">Trademark Request Received</h3>
                  <p className="text-[#2b3a30] max-w-md mx-auto text-sm leading-relaxed font-medium">
                    Thank you, <strong className="text-[#0c1210] font-bold">{formData.fullName}</strong>. Your Trademark registration request for <strong className="text-[#17382b] font-bold">&quot;{formData.trademarkName}&quot;</strong> under the <strong className="text-[#0c1210] font-bold">{selectedPkg}</strong> package has been queued for registry availability search.
                  </p>
                  <p className="text-xs text-[#687c70] italic">
                    Our compliance specialist will reach out to you directly on WhatsApp / Phone.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20Trademark%20request%20for%20${encodeURIComponent(formData.trademarkName)}%20(${selectedPkg}%20tier).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-btn ep-btn-primary"
                    >
                      Connect on WhatsApp &rarr;
                    </a>
                    <button
                      onClick={resetForm}
                      className="ep-btn ep-btn-dark"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#f9faf7] border border-[#ced7cd] p-6 lg:p-10 space-y-6 shadow-xl rounded-2xl text-[#0c1210]"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-100 border-2 border-red-600 text-red-900 text-sm font-bold rounded-xl flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 text-xs font-black">!</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold">
                      Selected Trademark Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-semibold transition-all"
                    >
                      <option value="Starter">Starter: ₦15,000 (Pre-filing Search Only)</option>
                      <option value="Pro">Pro: ₦60,000 (Filing Only: After Approved Search)</option>
                      <option value="Premium">Premium: ₦70,000 (Complete Search + Filing Support)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="08088194093"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Proposed Trademark / Brand Name *
                      </label>
                      <input
                        type="text"
                        name="trademarkName"
                        value={formData.trademarkName}
                        onChange={handleChange}
                        required
                        placeholder="E.g., EPONYX or ZEPHYR"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Owner / Applicant Name *
                      </label>
                      <input
                        type="text"
                        name="ownerName"
                        value={formData.ownerName}
                        onChange={handleChange}
                        required
                        placeholder="Individual or Company Name"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                      Primary Trademark Class (Nice Classification 1 to 45) *
                    </label>
                    <select
                      name="trademarkClass"
                      value={formData.trademarkClass}
                      onChange={handleChange}
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all"
                    >
                      {NICE_CLASSES.map((nc) => (
                        <option key={nc.classNum} value={nc.classNum}>
                          {nc.classNum}: {nc.desc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                      Additional Trademark Classes (Optional)
                    </label>
                    <input
                      type="text"
                      name="additionalClasses"
                      value={formData.additionalClasses}
                      onChange={handleChange}
                      placeholder="E.g., Class 9, Class 42 (Each additional class: +₦70,000)"
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                      Product or Service Category Description *
                    </label>
                    <textarea
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                      placeholder="Describe the exact goods or services sold under this brand name..."
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none min-h-[80px] font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Brand Logo or Supporting File (Optional)
                      </label>
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, "brandLogo", "Brand Logo / Supporting Artwork")}
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                      />
                      {fileMap["brandLogo"] && fileMap["brandLogo"].length > 0 && (
                        <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                          ✓ {fileMap["brandLogo"][0].filename} attached
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Referral Code (Optional)
                      </label>
                      <input
                        type="text"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleChange}
                        placeholder="Enter code if referred"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#2b3a30] font-medium">
                      <input
                        type="checkbox"
                        checked={formData.termsConsent}
                        onChange={handleCheckboxChange}
                        className="mt-0.5 accent-[#17382b]"
                      />
                      <span>
                        I have read and agree to the Terms of Service and Privacy Policy. I acknowledge that final trademark grants are issued by the Federal Trademark Registry.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#ced7cd]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? "Processing Request..." : `Submit Trademark Request (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#526357] font-medium mt-3">
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
