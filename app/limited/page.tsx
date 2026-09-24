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

    if (!formData.fullName || !formData.phone || !formData.email) {
      setErrorMessage("Please provide your full name, phone number, and active email.");
      return;
    }

    if (!formData.proposedName1) {
      setErrorMessage("Please enter at least one proposed company name.");
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
          additionalDetails: `Proposed 2: ${formData.proposedName2 || "N/A"} | Share Capital: ₦${formData.shareCapital} | Nature: ${formData.natureOfBusiness || "N/A"} | Directors: ${formData.directorDetails || "N/A"} | Extra: ${formData.additionalDirectorInfo || "N/A"}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network connection error. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef] min-h-screen">
      {/* 1. Hero */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-16 lg:py-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Limited Company Registration Packages</div>
          <h1 className="heading-1 mt-2 mb-4">Start your registration</h1>
          <p className="lead-text max-w-2xl mb-8">
            Register a Nigerian Limited Company with CAC, NRS Tax ID, tax filing setup, branding, and website options.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#packages" className="btn primary">
              <span>Get Packages</span>
              <span className="arrow">↓</span>
            </a>
            <a href="#form" className="btn">
              <span>Get Started</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Package Selector Banner */}
      <section id="packages" className="py-16 bg-[#07100c]/60 border-b border-[#26362c]">
        <div className="site-container">
          <div className="mb-10">
            <div className="eyebrow">Choose a Plan</div>
            <h2 className="heading-2">Registration Packages</h2>
            <p className="lead-text text-sm mt-2">
              Select the tier that matches your corporate and capital requirements.
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
                        {pkg.name} {pkgKey === "Pro" ? "· Recommended" : ""}
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-[#071007]" />}
                    </div>
                    <div className="text-3xl font-serif font-bold mt-4 mb-2">{pkg.price}</div>
                    <p className={`text-xs ${isSelected ? "text-[#183018]" : "text-[#aab6ad]"}`}>
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
                        : "bg-transparent text-[#f5f7ef] border border-[#c6ff3f] hover:bg-[#c6ff3f] hover:text-[#071007]"
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

      {/* 3. Form Section */}
      <section id="form" className="py-16 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="eyebrow">Submit Request</div>
                <h2 className="heading-2">Complete your application.</h2>
                <p className="lead-text text-sm mt-4">
                  Choose your package, provide the requested information and submit securely. Our corporate legal team prepares the official MemArt, status report, and regulatory documents.
                </p>
              </div>

              <div className="p-6 bg-[#07100c] border border-[#26362c] space-y-4">
                <div className="text-xs font-mono text-[#c6ff3f] uppercase tracking-wider">
                  Incorporation Roadmap
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <p className="text-xs text-[#aab6ad]">
                    CAC portal name availability reservation (1–2 days).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <p className="text-xs text-[#aab6ad]">
                    FBR stamping, share distribution &amp; MemArt verification.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <p className="text-xs text-[#aab6ad]">
                    Issuance of Certificate of Incorporation, Status Report &amp; TIN.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#10261a] border border-[#33473a] text-xs text-[#d4ddd6]">
                <strong className="text-white block mb-1">Corporate Structuring Desk</strong>
                Have complex shareholding or international directors? Speak directly with our incorporation consultants.
                <div className="mt-3">
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20Limited%20Company%20incorporation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c6ff3f] font-bold hover:underline"
                  >
                    Chat with Consultant &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="p-10 bg-[#07100c] border border-[#c6ff3f] text-center space-y-5">
                  <div className="w-16 h-16 bg-[#c6ff3f] text-[#071007] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="heading-3">Application Received</h3>
                  <p className="text-[#aab6ad] max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your Limited Company incorporation request for <strong className="text-[#c6ff3f]">{formData.proposedName1} LTD</strong> under the <strong className="text-white">{selectedPkg}</strong> package has been queued for verification.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20Limited%20Company%20application%20for%20${encodeURIComponent(formData.proposedName1)}%20LTD%20(${selectedPkg}%20tier).`}
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
                  className="bg-[#0d1711] border border-[#33473a] p-6 lg:p-10 space-y-6 shadow-2xl"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-950/80 border border-red-500/50 text-red-200 text-xs rounded">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad]">
                      Selected Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                    >
                      <option value="Starter">Starter — ₦60,000</option>
                      <option value="Pro">Pro — ₦100,000 (Recommended)</option>
                      <option value="Premium">Premium — ₦350,000</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Proposed Company Name 1 *
                      </label>
                      <input
                        type="text"
                        name="proposedName1"
                        value={formData.proposedName1}
                        onChange={handleChange}
                        required
                        placeholder="E.g., Nexus Zenith Synergy Ltd"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Proposed Company Name 2 (Alternative)
                      </label>
                      <input
                        type="text"
                        name="proposedName2"
                        value={formData.proposedName2}
                        onChange={handleChange}
                        placeholder="E.g., Nexus Zenith Global Ltd"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Authorized Share Capital (₦)
                      </label>
                      <input
                        type="text"
                        name="shareCapital"
                        value={formData.shareCapital}
                        onChange={handleChange}
                        placeholder="1,000,000 (Standard)"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                      <span className="text-[10px] text-[#7f8d84] mt-1 block">
                        Standard private limited company starts at ₦1,000,000 minimum share capital.
                      </span>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Nature of Business *
                      </label>
                      <input
                        type="text"
                        name="natureOfBusiness"
                        value={formData.natureOfBusiness}
                        onChange={handleChange}
                        required
                        placeholder="E.g., Tech consulting, general commerce, import/export..."
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Primary Contact Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Full legal name"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Active Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="corporate@example.com"
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

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                      Director / Shareholder Details
                    </label>
                    <textarea
                      name="directorDetails"
                      value={formData.directorDetails}
                      onChange={handleChange}
                      placeholder="List each director's Full Name, Residential Address, Phone, Email, and Share Percentage (e.g. Director 1: 60%, Director 2: 40%)..."
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none min-h-[100px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Director / Shareholder Documents
                      </label>
                      <input
                        type="file"
                        multiple
                        className="w-full bg-[#07100c] text-xs text-[#aab6ad] border border-[#26362c] p-2 file:mr-2 file:py-1 file:px-2 file:bg-[#10261a] file:border-0 file:text-[#c6ff3f] file:text-xs"
                      />
                      <span className="text-[10px] text-[#7f8d84] mt-1 block">
                        Upload NIN slips, Passports, or valid IDs for directors.
                      </span>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        Additional Information
                      </label>
                      <input
                        type="text"
                        name="additionalDirectorInfo"
                        value={formData.additionalDirectorInfo}
                        onChange={handleChange}
                        placeholder="Company secretary preference, special clauses, etc."
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
                        I have read and agree to the Terms of Service and Privacy Policy. I confirm that all information provided is accurate and authorize Eponix Digital to process incorporation with the Corporate Affairs Commission.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#26362c]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider"
                    >
                      {isSubmitting ? "Processing Application..." : `Submit Application (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#7f8d84] mt-3">
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
