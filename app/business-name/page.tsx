"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Clock, FileText, ArrowRight, Check } from "lucide-react";

type PackageType = "Starter" | "Pro" | "Premium";

const packages: Record<
  PackageType,
  { name: string; price: string; description: string; features: string[] }
> = {
  Starter: {
    name: "Starter",
    price: "₦35,000",
    description: "For individuals and businesses registering a Business Name.",
    features: ["CAC Business Name Registration", "CAC Status Report", "NRS Tax ID (TIN)"],
  },
  Pro: {
    name: "Pro",
    price: "₦55,000",
    description: "Complete legal foundation plus brand identity assets.",
    features: [
      "Everything in Starter",
      "Tax filing & account setup",
      "Business readiness guidance",
      "Logo, letterhead, business card and staff ID design",
    ],
  },
  Premium: {
    name: "Premium",
    price: "₦180,000",
    description: "Complete business registration plus full digital launch presence.",
    features: [
      "Everything in Pro",
      "One-page professional corporate website",
      "Custom business email setup",
      "Domain name, cloud hosting & SSL for 1 year",
    ],
  },
};

export default function BusinessNamePage() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType>("Pro");
  const [formData, setFormData] = useState({
    fullName: "",
    surname: "",
    otherNames: "",
    dob: "",
    gender: "Male",
    email: "",
    phone: "",
    state: "",
    lga: "",
    city: "",
    residentialAddress: "",
    idNumber: "",
    officeAddress: "",
    natureOfBusiness: "",
    proposedName1: "",
    proposedName2: "",
    additionalInfo: "",
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
      setErrorMessage("Please fill in your full name, phone number, and email.");
      return;
    }

    if (!formData.proposedName1) {
      setErrorMessage("Please provide at least one proposed business name.");
      return;
    }

    if (!formData.termsConsent) {
      setErrorMessage("Please agree to the Terms of Service and Privacy Policy.");
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
          packageInterested: `Business Name - ${selectedPkg}`,
          source: "business-name-form",
          additionalDetails: `Surname: ${formData.surname || "N/A"} | Other: ${formData.otherNames || "N/A"} | Proposed 2: ${formData.proposedName2 || "N/A"} | Nature: ${formData.natureOfBusiness || "N/A"} | Address: ${formData.residentialAddress || "N/A"} | Office: ${formData.officeAddress || "N/A"} | Additional: ${formData.additionalInfo || "N/A"}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to submit application. Please try again.");
      }
    } catch (err: any) {
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
              <div className="eyebrow">CAC Accredited · Business Name Registration</div>
              <h1 className="heading-1">Start Your Business Name Registration.</h1>
              <p className="lead-text">
                Register your Nigerian enterprise or sole proprietorship with CAC, NRS Tax ID, status report, and brand identity options under one trusted partner.
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
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">CAC ACCREDITED COMPANY</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-3">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-snug">
                    Business Names are suitable for sole proprietors, freelancers, artisans, and small enterprise owners who do not require multiple shareholders.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Choose Business Name Registration if you are running an individual venture and need fast legal recognition and an official bank account. If you require multi-director corporate status or outside investor capital, register a Limited Company instead.
                  </p>
                </div>

                {/* 1 Navigation Button */}
                <div className="pt-2">
                  <Link
                    href="/limited"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[13px] flex items-center gap-2 rounded-lg"
                  >
                    <span>Register a Limited Instead</span>
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
              Registration Packages
            </h2>
            <p className="text-[15px] text-[#2b3a30] font-medium mt-2 max-w-2xl">
              Select the tier that matches your legal and operational requirements. Prices include official CAC filing fees and status report.
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
                    <div className="text-3xl font-bold mt-4 mb-2">{pkg.price}</div>
                    <p className={`text-xs ${isSelected ? "text-[#c9d5cd]" : "text-[#2b3a30] font-medium"}`}>
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
                  Choose your package, provide the requested information and submit securely. Our compliance specialists verify all details before official submission.
                </p>
              </div>

              <div className="p-6 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl space-y-4 shadow-sm">
                <div className="text-xs font-mono text-[#17382b] font-bold uppercase tracking-wider">
                  What Happens Next
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    Name availability search is performed immediately on the CAC portal.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    Documentation &amp; status report preparation within 2 to 5 business days.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    Official CAC certificate and digital TIN delivered directly to your email.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#07130c] border border-[#1e3b2b] rounded-2xl text-xs text-[#c9d5cd] shadow-md">
                <strong className="text-white block mb-1 text-sm font-bold">Direct Assistance Desk</strong>
                Need help deciding or have multiple partners? Reach out to our consultation desk on WhatsApp anytime.
                <div className="mt-3">
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20Business%20Name%20registration."
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
                    Thank you, <strong className="text-[#0c1210] font-bold">{formData.fullName}</strong>. Your Business Name registration request for <strong className="text-[#17382b] font-bold">{formData.proposedName1}</strong> under the <strong className="text-[#0c1210] font-bold">{selectedPkg}</strong> package has been queued for verification.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20Business%20Name%20application%20for%20${encodeURIComponent(formData.proposedName1)}%20(${selectedPkg}%20tier).`}
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
                    <div className="p-4 bg-red-950/80 border border-red-500/50 text-red-200 text-xs rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold">
                      Selected Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-semibold transition-all"
                    >
                      <option value="Starter">Starter: ₦35,000</option>
                      <option value="Pro">Pro: ₦55,000 (Recommended)</option>
                      <option value="Premium">Premium: ₦180,000</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Surname
                      </label>
                      <input
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Other Names
                      </label>
                      <input
                        type="text"
                        name="otherNames"
                        value={formData.otherNames}
                        onChange={handleChange}
                        placeholder="Middle name"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Gender
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all"
                      >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Active Email *
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
                        placeholder="08012345678"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        State of Residence
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Lagos, Abuja, Rivers..."
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        LGA
                      </label>
                      <input
                        type="text"
                        name="lga"
                        value={formData.lga}
                        onChange={handleChange}
                        placeholder="Ikeja, Municipal..."
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        City / Town
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Victoria Island"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                      Residential Address
                    </label>
                    <input
                      type="text"
                      name="residentialAddress"
                      value={formData.residentialAddress}
                      onChange={handleChange}
                      placeholder="Street address, house number"
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        NIN / Identification Number
                      </label>
                      <input
                        type="text"
                        name="idNumber"
                        value={formData.idNumber}
                        onChange={handleChange}
                        placeholder="11-digit NIN or Passport No"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Office / Business Address
                      </label>
                      <input
                        type="text"
                        name="officeAddress"
                        value={formData.officeAddress}
                        onChange={handleChange}
                        placeholder="Physical commercial address"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                      Nature of Business *
                    </label>
                    <textarea
                      name="natureOfBusiness"
                      value={formData.natureOfBusiness}
                      onChange={handleChange}
                      required
                      placeholder="E.g., Information technology consulting, software development, fashion retail, general commerce..."
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none min-h-[90px] font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Proposed Business Name 1 *
                      </label>
                      <input
                        type="text"
                        name="proposedName1"
                        value={formData.proposedName1}
                        onChange={handleChange}
                        required
                        placeholder="First name preference"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Proposed Business Name 2 (Alternative)
                      </label>
                      <input
                        type="text"
                        name="proposedName2"
                        value={formData.proposedName2}
                        onChange={handleChange}
                        placeholder="Alternative name"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Means of Identification
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Signature Upload
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Passport Photograph
                      </label>
                      <input
                        type="file"
                        className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                      Additional Information (Optional)
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Any specific requests or requirements..."
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none min-h-[70px] font-medium transition-all placeholder:text-[#88968d]"
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
                        I have read and agree to the Terms of Service and Privacy Policy. I confirm that the details provided are accurate and authorize Eponix Digital to conduct official verification.
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
                      Secure submission. Official digital certificates issued upon regulatory approval.
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

