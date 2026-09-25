"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock, FileCheck, ArrowRight, AlertCircle } from "lucide-react";

type PackageType = "Starter" | "Pro" | "Premium";

const packages: Record<
  PackageType,
  { name: string; price: string; description: string; features: string[] }
> = {
  Starter: {
    name: "Starter",
    price: "₦30,000",
    description: "For clients who only need SCUML certificate registration support.",
    features: [
      "SCUML registration support",
      "Online portal account setup",
      "Application follow-up & tracking",
    ],
  },
  Pro: {
    name: "Pro",
    price: "₦40,000",
    description: "Registration and compliance guide support to help avoid monthly reporting penalties.",
    features: [
      "SCUML registration support",
      "Sensitization / compliance guide",
      "Monthly reporting template & guide",
      "Login username & password support",
    ],
  },
  Premium: {
    name: "Premium",
    price: "₦50,000",
    description: "SCUML, compliance guide and NRS Tax ID/TIN support for account-opening readiness.",
    features: [
      "Everything in Pro",
      "NRS Tax ID / TIN support",
      "Bank compliance advisory",
      "Free priority consultation / support",
    ],
  },
};

export default function SCUMLPage() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType>("Pro");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessActivity: "",
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
      setErrorMessage("Please enter your full name, active email, and phone number.");
      return;
    }

    if (!formData.businessName) {
      setErrorMessage("Please enter your registered Business or Organisation name.");
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
          packageInterested: `SCUML - ${selectedPkg}`,
          source: "scuml-form",
          additionalDetails: `Activity: ${formData.businessActivity || "N/A"} | Referral: ${formData.referralCode || "N/A"}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to submit SCUML request. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef] min-h-screen">
      {/* 1. Hero */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-16 lg:py-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">SCUML Registration Nigeria</div>
          <h1 className="heading-1 mt-2 mb-4">Start your registration</h1>
          <p className="lead-text max-w-2xl mb-8">
            SCUML registration support in Nigeria with secure online payment, live support and professional application follow-up from Eponix Digital.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-10">
            <div>
              <div className="eyebrow">Packages</div>
              <h2 className="heading-2">Choose the SCUML support level you need.</h2>
            </div>
            <div className="text-sm text-[#aab6ad] leading-relaxed">
              Official SCUML certificates are issued by the Special Control Unit Against Money Laundering (EFCC); Eponix charges for professional assistance, online registration support, account setup, follow-up and consultations.
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

          <div className="ep-notice mt-8">
            <strong>Important Notice</strong>
            <p className="text-xs text-[#aab6ad]">
              SCUML certificates are issued through the official statutory process. Eponix Digital&apos;s fee is for professional assistance, documentation review, and support, not for the certificate itself.
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
                  Choose your package, provide the requested information and submit securely. Our compliance team verifies your CAC documentation and initiates filing.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 bg-[#07100c] border border-[#26362c]">
                  <div className="w-8 h-8 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center font-bold text-xs mb-3">
                    01
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1">Compliance Reminder</h3>
                  <p className="text-xs text-[#aab6ad] leading-relaxed">
                    Clients are expected to fulfil their monthly reporting obligations using the applicable compliance guidance.
                  </p>
                </div>

                <div className="p-5 bg-[#07100c] border border-[#26362c]">
                  <div className="w-8 h-8 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center font-bold text-xs mb-3">
                    02
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1">SCUML Requirements</h3>
                  <p className="text-xs text-[#aab6ad] leading-relaxed">
                    Complete CAC documents (Certificate &amp; Status Report) and a valid NIN Slip or International Passport.
                  </p>
                </div>

                <div className="p-5 bg-[#07100c] border border-[#26362c]">
                  <div className="w-8 h-8 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center font-bold text-xs mb-3">
                    03
                  </div>
                  <h3 className="font-serif text-lg font-bold mb-1">Processing Notice</h3>
                  <p className="text-xs text-[#aab6ad] leading-relaxed">
                    Processing is subject to technical/network availability, document readiness and regulatory response.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#10261a] border border-[#33473a] text-xs text-[#d4ddd6]">
                <strong className="text-white block mb-1">Need Bank Account Readiness?</strong>
                Banks require SCUML for Designated Non-Financial Businesses &amp; Professions (DNFIs). Let our team guide your account opening.
                <div className="mt-3">
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20SCUML%20registration%20support."
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
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your SCUML registration request for <strong className="text-[#c6ff3f]">{formData.businessName}</strong> under the <strong className="text-white">{selectedPkg}</strong> package has been queued for processing.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20a%20SCUML%20request%20for%20${encodeURIComponent(formData.businessName)}%20(${selectedPkg}%20tier).`}
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
                      Selected SCUML Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                    >
                      <option value="Starter">Starter: ₦30,000</option>
                      <option value="Pro">Pro: ₦40,000 (Recommended)</option>
                      <option value="Premium">Premium: ₦50,000 (Includes NRS Tax ID)</option>
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

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                      Registered Business / Organisation Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      placeholder="Exact name as on CAC Certificate"
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                      Business / Organisation Activity *
                    </label>
                    <textarea
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleChange}
                      required
                      placeholder="Describe the nature of commercial or non-profit operations..."
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none min-h-[90px]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        CAC Documents (Certificate &amp; Status Report)
                      </label>
                      <input
                        type="file"
                        multiple
                        className="w-full bg-[#07100c] text-xs text-[#aab6ad] border border-[#26362c] p-2 file:mr-2 file:py-1 file:px-2 file:bg-[#10261a] file:border-0 file:text-[#c6ff3f] file:text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2">
                        NIN Slip or International Passport
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
                        I have read and agree to the Terms of Service and Privacy Policy. I acknowledge that SCUML certificates are issued by the relevant regulatory authority.
                      </span>
                    </label>
                  </div>

                  <div className="pt-4 border-t border-[#26362c]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider"
                    >
                      {isSubmitting ? "Processing Application..." : `Submit SCUML Request (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#7f8d84] mt-3">
                      Secure encrypted submission. Approved compliance documents delivered electronically.
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
