"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock, FileCheck, ArrowRight, Receipt } from "lucide-react";

type PackageType = "Starter" | "Pro" | "Premium";

const packages: Record<
  PackageType,
  { name: string; price: string; description: string; features: string[] }
> = {
  Starter: {
    name: "Starter",
    price: "₦5,000",
    description: "NRS Tax ID only for businesses that need their basic tax identification record.",
    features: [
      "NRS Tax ID setup & generation",
      "Official business tax identity record",
      "Essential for corporate bank accounts",
    ],
  },
  Pro: {
    name: "Pro",
    price: "₦10,000",
    description: "Rev360 Tax Filing Account setup for businesses that already have a Tax ID/TIN.",
    features: [
      "Rev360 filing account setup",
      "Tax filing portal access readiness",
      "Future compliance and return filing support",
    ],
  },
  Premium: {
    name: "Premium",
    price: "₦15,000",
    description: "The complete Tax ID and Rev360 setup handled together in one coordinated request.",
    features: [
      "NRS Tax ID registration support",
      "Rev360 tax filing account configuration",
      "Tax identity and filing access readiness",
      "Official digital acknowledgment delivery",
    ],
  },
};

export default function TaxPage() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType>("Premium");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    registrationType: "Business Name",
    referralCode: "",
    additionalDetails: "",
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
      setErrorMessage("Please enter your full name, email, and phone number.");
      return;
    }

    if (!formData.businessName) {
      setErrorMessage("Please enter your registered Business or Company name.");
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
          proposedBusinessName: formData.businessName,
          packageInterested: `Tax ID / Rev360 - ${selectedPkg}`,
          source: "tax-form",
          additionalDetails: `Type: ${formData.registrationType} | Referral: ${formData.referralCode || "N/A"} | Notes: ${formData.additionalDetails || "N/A"}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to submit tax setup request. Please try again.");
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
              <div className="eyebrow">Revenue Authority · Tax Identification &amp; Filing Setup</div>
              <h1 className="heading-1">NRS Tax ID &amp; Rev360 Setup.</h1>
              <p className="lead-text">
                Get the statutory tax identity and revenue filing access your Nigerian enterprise or limited company needs for banking and full regulatory compliance.
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
                    <Receipt className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">Nigeria's Top Rated</div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">FIRS / NRS TAX ACCREDITED</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-3">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-snug">
                    Tax IDs and Rev360 portal setup ensure your business is tax-compliant and ready for corporate banking.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Choose Tax ID & Rev360 Setup if you already have a registered business name or limited company and need revenue authority portal credentials. If you have not registered your business name yet, start your registration first.
                  </p>
                </div>

                {/* 1 Navigation Button */}
                <div className="pt-2">
                  <Link
                    href="/business-name"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[13px] flex items-center gap-2 rounded-lg"
                  >
                    <span>Register Business Name Instead</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-12">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">Tax Setup Packages</div>
              <h2 className="text-[34px] sm:text-[46px] font-bold tracking-tight text-[#0c1210] mt-1">Choose the tax setup your business needs.</h2>
            </div>
            <div className="text-[15px] text-[#2b3a30] font-medium leading-relaxed">
              Start with your NRS Tax ID, request Rev360 setup where you already have a Tax ID/TIN, or choose the complete package.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(packages) as PackageType[]).map((pkgKey) => {
              const pkg = packages[pkgKey];
              const isSelected = selectedPkg === pkgKey;
              return (
                <div
                  key={pkgKey}
                  onClick={() => setSelectedPkg(pkgKey)}
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
                  Choose your package, provide business details and upload the required verification documents.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl shadow-sm">
                  <div className="text-xs font-mono text-[#17382b] font-bold uppercase mb-1">01 / Business Details</div>
                  <p className="text-xs text-[#2b3a30] font-medium">Registered business or company name and CAC registration type.</p>
                </div>
                <div className="p-5 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl shadow-sm">
                  <div className="text-xs font-mono text-[#17382b] font-bold uppercase mb-1">02 / Utility Bill</div>
                  <p className="text-xs text-[#2b3a30] font-medium">Required for Rev360 setup. Upload a clear current utility bill.</p>
                </div>
                <div className="p-5 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl shadow-sm">
                  <div className="text-xs font-mono text-[#17382b] font-bold uppercase mb-1">03 / Means of ID</div>
                  <p className="text-xs text-[#2b3a30] font-medium">Valid NIN document, passport, driver&apos;s licence or voter card.</p>
                </div>
                <div className="p-5 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl shadow-sm">
                  <div className="text-xs font-mono text-[#17382b] font-bold uppercase mb-1">04 / Status Report</div>
                  <p className="text-xs text-[#2b3a30] font-medium">Required where applicable for registered companies undergoing Rev360 setup.</p>
                </div>
              </div>

              <div className="p-6 bg-[#07130c] border border-[#1e3b2b] rounded-2xl text-xs text-[#c9d5cd] shadow-md">
                <strong className="text-white block mb-1 text-sm font-bold">NRS Tax ID &amp; Rev360 Processing Notice</strong>
                <p className="text-xs text-[#c9d5cd] leading-relaxed">
                  Processing is subject to technical/network availability, document readiness and regulatory response. Approved tax documents and setup confirmations are delivered electronically as original digital files.
                </p>
                <div className="mt-3">
                  <a
                    href="https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20NRS%20Tax%20ID%20or%20Rev360%20setup."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c9f95a] font-bold hover:underline"
                  >
                    Chat with Tax Specialist &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="p-10 bg-[#ffffff] border-2 border-[#17382b] text-center space-y-5 rounded-2xl shadow-xl">
                  <div className="w-16 h-16 bg-[#10261a] text-[#c9f95a] border border-[#2b593f] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1210]">Tax Request Received</h3>
                  <p className="text-[#2b3a30] max-w-md mx-auto text-sm leading-relaxed font-medium">
                    Thank you, <strong className="text-[#0c1210] font-bold">{formData.fullName}</strong>. Your Tax ID / Rev360 setup request for <strong className="text-[#17382b] font-bold">{formData.businessName}</strong> under the <strong className="text-[#0c1210] font-bold">{selectedPkg}</strong> package has been queued.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20Tax%20ID%20%2F%20Rev360%20setup%20request%20for%20${encodeURIComponent(formData.businessName)}%20(${selectedPkg}%20tier).`}
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
                  className="bg-[#f9faf7] border border-[#ced7cd] p-6 lg:p-10 space-y-6 shadow-xl rounded-2xl text-[#0c1210]"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-950/80 border border-red-500/50 text-red-200 text-xs rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold">
                      Selected Tax Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-semibold transition-all"
                    >
                      <option value="Starter">Starter: ₦5,000 (Tax ID Only)</option>
                      <option value="Pro">Pro: ₦10,000 (Rev360 Filing Account Only)</option>
                      <option value="Premium">Premium: ₦15,000 (Complete Tax ID + Rev360 Setup)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
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
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
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
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Business / Company Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder="Exact CAC registered name"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Registration Type
                      </label>
                      <select
                        name="registrationType"
                        value={formData.registrationType}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-semibold transition-all"
                      >
                        <option value="Business Name">Business Name (Sole Proprietor / Enterprise)</option>
                        <option value="Limited Company">Limited Company (LTD / PLC)</option>
                        <option value="NGO / Incorporated Trustees">NGO / Incorporated Trustees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                      Additional Details / Existing Tax Info (Optional)
                    </label>
                    <textarea
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      placeholder="If you already have an existing Tax ID/TIN or specific state tax office preferences..."
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg min-h-[80px] font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Utility Bill (For Rev360)
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-white file:text-xs file:rounded-md file:font-semibold font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Valid Means of ID
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-white file:text-xs file:rounded-md file:font-semibold font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Status Report (If LTD)
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-white file:text-xs file:rounded-md file:font-semibold font-medium"
                      />
                    </div>
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
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                    />
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
                        I have read and agree to the Terms of Service and Privacy Policy. I confirm that all tax documents provided are genuine.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#ced7cd]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider rounded-lg"
                    >
                      {isSubmitting ? "Processing Request..." : `Submit Tax Request (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#687c70] font-medium mt-3">
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
