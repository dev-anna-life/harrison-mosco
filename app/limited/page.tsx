"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock, Building2, FileCheck, ArrowRight } from "lucide-react";

type PackageType = "Starter" | "Pro" | "Premium";

const packages: Record<
  PackageType,
  { name: string; price: string; description: string; features: string[] }
> = {
  Starter: {
    name: "Starter",
    price: "₦60,000",
    description: "For businesses incorporating as a private Limited Company.",
    features: ["CAC Certificate of Incorporation", "Status Report", "NRS Tax ID (TIN)"],
  },
  Pro: {
    name: "Pro",
    price: "₦100,000",
    description: "Complete corporate foundation, tax setup and executive branding.",
    features: [
      "Everything in Starter",
      "Tax filing & account setup",
      "Executive corporate logo design",
      "Letterhead, business card & staff ID",
      "12-page company profile design (digital)",
    ],
  },
  Premium: {
    name: "Premium",
    price: "₦350,000",
    description: "Full enterprise incorporation and digital infrastructure launch.",
    features: [
      "Everything in Pro",
      "One-page professional corporate website",
      "Custom business email setup",
      "Domain name, cloud hosting & SSL setup for 1 year",
    ],
  },
};

export default function LimitedCompanyPage() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType>("Pro");
  const [formData, setFormData] = useState({
    proposedName1: "",
    proposedName2: "",
    natureOfBusiness: "",
    shareCapital: "1,000,000",
    fullName: "",
    email: "",
    phone: "",
    directorDetails: "",
    additionalDirectorInfo: "",
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

    if (!formData.proposedName1) {
      setErrorMessage("Please enter at least one proposed company name.");
      return;
    }

    if (!formData.natureOfBusiness) {
      setErrorMessage("Please describe the nature of your business.");
      return;
    }

    if (!formData.fullName) {
      setErrorMessage("Please provide your primary contact full legal name.");
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
          proposedBusinessName: formData.proposedName1,
          packageInterested: `Limited Company - ${selectedPkg}`,
          source: "company-form",
          submittedDetails: {
            "Contact Phone": formData.phone,
            "Email Address": formData.email,
            "Proposed Company Name 1": formData.proposedName1,
            "Proposed Company Name 2": formData.proposedName2 || "N/A",
            "Authorized Share Capital": `₦${formData.shareCapital || "1,000,000"}`,
            "Nature of Business": formData.natureOfBusiness,
            "Director / Shareholder Info": formData.directorDetails || "N/A",
            "Additional Director Notes": formData.additionalDirectorInfo || "N/A",
          },
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit application. Please check all fields and try again.");
      }
    } catch (err) {
      setErrorMessage("Network connection error. Please try again or reach out on WhatsApp.");
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
              <div className="eyebrow">Limited Company Registration</div>
              <h1 className="heading-1">Register Your Limited Company.</h1>
              <p className="lead-text">
                For Nigerian founders who mainly need incorporation, directors/shareholders, essential compliance support and optional branding or website setup.
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
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">Nigeria's Top Rated</div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">CORPORATE STANDARD</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-3">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-snug">
                    Limited Companies are suitable for contracts, loans, grants, visa applications, investors, and corporate credibility.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Choose Limited Company Registration if you mainly need incorporation and essential compliance support. Choose the Ultimate Business Launch Package if you also need complete branding, website, communication systems and launch infrastructure.
                  </p>
                </div>

                {/* 2 Navigation Buttons */}
                <div className="pt-2 space-y-3">
                  <Link
                    href="/ultimate"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[13px] flex items-center gap-2 rounded-lg"
                  >
                    <span>View Ultimate Launch Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/business-name"
                    className="w-full ep-btn ep-btn-light !py-3.5 text-center justify-center font-bold text-[13px] flex items-center gap-2 rounded-lg"
                  >
                    <span>Register Business Name Instead</span>
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
              Pick Your Limited Package
            </h2>
            <p className="text-[15px] text-[#2b3a30] font-medium mt-2 max-w-2xl">
              Prices are inclusive of 7.5% VAT. Base price covers ₦1 million share capital and maximum 2 directors/shareholders.
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
                        {pkg.name} {pkgKey === "Pro" ? "· Recommended" : ""}
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-[#c9f95a]" />}
                    </div>
                    <div className={`text-3xl font-serif font-bold mt-4 mb-2 ${isSelected ? "text-white" : "text-[#0c1210]"}`}>
                      {pkg.price}
                    </div>
                    <p className={`text-xs ${isSelected ? "text-[#c9d5cd]" : "text-[#55655b]"}`}>
                      {pkg.description}
                    </p>
                    <ul className={`mt-5 space-y-2.5 text-xs ${isSelected ? "text-[#d5dfd8]" : "text-[#2b3a30] font-medium"}`}>
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={isSelected ? "text-[#c9f95a] font-bold" : "text-[#17382b] font-bold"}>✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    className={`mt-6 w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#c9f95a] text-[#071007]"
                        : "bg-[#07130c] text-white hover:bg-[#17382b]"
                    }`}
                  >
                    {isSelected ? "Selected · Continue to Form ↓" : `Select ${pkg.name}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Form Section (Crisp Pure White #ffffff Palette) */}
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
                  Choose your package, provide the requested information and submit securely. Our corporate legal team prepares the official MemArt, status report, and regulatory documents.
                </p>
              </div>

              <div className="p-6 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl space-y-4 shadow-sm">
                <div className="text-xs font-mono text-[#17382b] font-bold uppercase tracking-wider">
                  Incorporation Roadmap
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    CAC portal name availability reservation (1 to 2 days).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    FBR stamping, share distribution &amp; MemArt verification.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    Issuance of Certificate of Incorporation, Status Report &amp; TIN.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#07130c] border border-[#1e3b2b] rounded-2xl text-xs text-[#c9d5cd] shadow-md">
                <strong className="text-white block mb-1 text-sm font-bold">Corporate Structuring Desk</strong>
                Have complex shareholding or international directors? Speak directly with our incorporation consultants.
                <div className="mt-3">
                  <a
                    href="https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20Limited%20Company%20incorporation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c9f95a] font-bold hover:underline"
                  >
                    Chat with Consultant &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="p-10 bg-[#ffffff] border-2 border-[#17382b] text-center space-y-5 rounded-2xl shadow-xl">
                  <div className="w-16 h-16 bg-[#10261a] text-[#c9f95a] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1210]">Application Received</h3>
                  <p className="text-[#2b3a30] max-w-md mx-auto text-sm leading-relaxed font-medium">
                    Thank you, <strong className="text-[#0c1210] font-bold">{formData.fullName}</strong>. Your Limited Company incorporation request for <strong className="text-[#17382b] font-bold">{formData.proposedName1} LTD</strong> under the <strong className="text-[#0c1210] font-bold">{selectedPkg}</strong> package has been queued for verification.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20Limited%20Company%20application%20for%20${encodeURIComponent(formData.proposedName1)}%20LTD%20(${selectedPkg}%20tier).`}
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
                      Submit Another Application
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
                      Selected Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-semibold transition-all"
                    >
                      <option value="Starter">Starter: ₦60,000</option>
                      <option value="Pro">Pro: ₦100,000 (Recommended)</option>
                      <option value="Premium">Premium: ₦350,000</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Proposed Company Name 1 *
                      </label>
                      <input
                        type="text"
                        name="proposedName1"
                        value={formData.proposedName1}
                        onChange={handleChange}
                        required
                        placeholder="E.g., Nexus Zenith Synergy Ltd"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Proposed Company Name 2 (Alternative)
                      </label>
                      <input
                        type="text"
                        name="proposedName2"
                        value={formData.proposedName2}
                        onChange={handleChange}
                        placeholder="E.g., Nexus Zenith Global Ltd"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Authorized Share Capital (₦)
                      </label>
                      <input
                        type="text"
                        name="shareCapital"
                        value={formData.shareCapital}
                        onChange={handleChange}
                        placeholder="1,000,000 (Standard)"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                      <span className="text-[10px] text-[#526357] mt-1 block font-medium">
                        Standard private limited company starts at ₦1,000,000 minimum share capital.
                      </span>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Nature of Business *
                      </label>
                      <input
                        type="text"
                        name="natureOfBusiness"
                        value={formData.natureOfBusiness}
                        onChange={handleChange}
                        required
                        placeholder="E.g., Tech consulting, general commerce, import/export..."
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Primary Contact Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Full legal name"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Active Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="corporate@example.com"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="08012345678"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                      Director / Shareholder Details
                    </label>
                    <textarea
                      name="directorDetails"
                      value={formData.directorDetails}
                      onChange={handleChange}
                      placeholder="List each director's Full Name, Residential Address, Phone, Email, and Share Percentage (e.g. Director 1: 60%, Director 2: 40%)..."
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none min-h-[100px] rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Director / Shareholder Documents
                      </label>
                      <input
                        type="file"
                        multiple
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                      />
                      <span className="text-[10px] text-[#526357] mt-1 block font-medium">
                        Upload NIN slips, Passports, or valid IDs for directors.
                      </span>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Additional Information
                      </label>
                      <input
                        type="text"
                        name="additionalDirectorInfo"
                        value={formData.additionalDirectorInfo}
                        onChange={handleChange}
                        placeholder="Company secretary preference, special clauses, etc."
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
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
                        I have read and agree to the Terms of Service and Privacy Policy. I confirm that all information provided is accurate and authorize Eponix Digital to process incorporation with the Corporate Affairs Commission.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#ced7cd]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? "Processing Application..." : `Submit Application (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#526357] font-medium mt-3">
                      Secure encrypted submission. Original digital files delivered upon regulatory approval.
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
