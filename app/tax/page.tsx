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
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-16 lg:py-20 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Nigeria Tax Setup</div>
          <h1 className="heading-1">NRS Tax ID / Rev360 Tax Filing Account Setup</h1>
          <p className="lead-text max-w-2xl">
            Get the tax identity and filing access your Nigerian business needs. Choose Tax ID only, Rev360 setup only, or have both handled together.
          </p>
        </div>
      </section>

      {/* 2. Package Selector Banner */}
      <section className="py-12 bg-[#07100c]/60 border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-8">
            <div>
              <div className="eyebrow">Tax Setup Packages</div>
              <h2 className="heading-2">Choose the tax setup your business needs.</h2>
            </div>
            <div className="text-sm text-[#aab6ad] leading-relaxed">
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
                    className={`mt-6 w-full py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                      isSelected
                        ? "bg-[#071007] text-[#c6ff3f]"
                        : "bg-[#10261a] text-white hover:bg-[#c6ff3f] hover:text-[#071007]"
                    }`}
                  >
                    {isSelected ? "Selected" : `Select ${pkg.name}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Requirements & Intake Form Section */}
      <section className="py-16 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="eyebrow">Submit Request</div>
                <h2 className="heading-2">Complete your application.</h2>
                <p className="lead-text text-sm mt-4">
                  Choose your package, provide business details and upload the required verification documents.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-[#07100c] border border-[#26362c]">
                  <div className="text-xs font-mono text-[#c6ff3f] uppercase mb-1">01 / Business Details</div>
                  <p className="text-xs text-[#aab6ad]">Registered business or company name and CAC registration type.</p>
                </div>
                <div className="p-4 bg-[#07100c] border border-[#26362c]">
                  <div className="text-xs font-mono text-[#c6ff3f] uppercase mb-1">02 / Utility Bill</div>
                  <p className="text-xs text-[#aab6ad]">Required for Rev360 setup. Upload a clear current utility bill.</p>
                </div>
                <div className="p-4 bg-[#07100c] border border-[#26362c]">
                  <div className="text-xs font-mono text-[#c6ff3f] uppercase mb-1">03 / Means of ID</div>
                  <p className="text-xs text-[#aab6ad]">Valid NIN document, passport, driver&apos;s licence or voter card.</p>
                </div>
                <div className="p-4 bg-[#07100c] border border-[#26362c]">
                  <div className="text-xs font-mono text-[#c6ff3f] uppercase mb-1">04 / Status Report</div>
                  <p className="text-xs text-[#aab6ad]">Required where applicable for registered companies undergoing Rev360 setup.</p>
                </div>
              </div>

              <div className="ep-notice">
                <strong>NRS Tax ID &amp; Rev360 Processing Notice</strong>
                <p className="text-xs text-[#aab6ad]">
                  Processing is subject to technical/network availability, document readiness and regulatory response. Approved tax documents and setup confirmations are delivered electronically as original digital files.
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
                  <h3 className="heading-3">Tax Request Received</h3>
                  <p className="text-[#aab6ad] max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your Tax ID / Rev360 setup request for <strong className="text-[#c6ff3f]">{formData.businessName}</strong> under the <strong className="text-white">{selectedPkg}</strong> package has been queued.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20Tax%20ID%20%2F%20Rev360%20setup%20request%20for%20${encodeURIComponent(formData.businessName)}%20(${selectedPkg}%20tier).`}
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
                      Selected Tax Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                    >
                      <option value="Starter">Starter — ₦5,000 (Tax ID Only)</option>
                      <option value="Pro">Pro — ₦10,000 (Rev360 Filing Account Only)</option>
                      <option value="Premium">Premium — ₦15,000 (Complete Tax ID + Rev360 Setup)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Full Name *
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
                        Business / Company Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        required
                        placeholder="Exact CAC registered name"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Registration Type
                      </label>
                      <select
                        name="registrationType"
                        value={formData.registrationType}
                        onChange={handleChange}
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      >
                        <option value="Business Name">Business Name (Sole Proprietor / Enterprise)</option>
                        <option value="Limited Company">Limited Company (LTD / PLC)</option>
                        <option value="NGO / Incorporated Trustees">NGO / Incorporated Trustees</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                      Additional Details / Existing Tax Info (Optional)
                    </label>
                    <textarea
                      name="additionalDetails"
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      placeholder="If you already have an existing Tax ID/TIN or specific state tax office preferences..."
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none min-h-[80px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Utility Bill (For Rev360)
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#07100c] text-xs text-[#aab6ad] border border-[#26362c] p-2 file:mr-2 file:py-1 file:px-2 file:bg-[#10261a] file:border-0 file:text-[#c6ff3f] file:text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Valid Means of ID
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#07100c] text-xs text-[#aab6ad] border border-[#26362c] p-2 file:mr-2 file:py-1 file:px-2 file:bg-[#10261a] file:border-0 file:text-[#c6ff3f] file:text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Status Report (If LTD)
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#07100c] text-xs text-[#aab6ad] border border-[#26362c] p-2 file:mr-2 file:py-1 file:px-2 file:bg-[#10261a] file:border-0 file:text-[#c6ff3f] file:text-xs"
                      />
                    </div>
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

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#aab6ad]">
                      <input
                        type="checkbox"
                        checked={formData.termsConsent}
                        onChange={handleCheckboxChange}
                        className="mt-0.5 accent-[#c6ff3f]"
                      />
                      <span>
                        I have read and agree to the Terms of Service and Privacy Policy. I confirm that all tax documents provided are genuine.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#26362c]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider"
                    >
                      {isSubmitting ? "Processing Request..." : `Submit Tax Request (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#7f8d84] mt-3">
                      Secure encrypted submission. Approved tax documents delivered electronically.
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
