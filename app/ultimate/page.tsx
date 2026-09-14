"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function UltimatePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    businessStage: "Idea / Pre-launch",
    primaryGoal: "Complete business launch",
    projectDetails: "",
    agreeTerms: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          whatsappPhone: formData.phoneNumber || "+2340000000000",
          email: formData.email,
          proposedBusinessName: formData.businessName || "Ultimate Launch Application",
          packageInterested: "Ultimate Business Launch Package (₦1,000,000)",
          shareCapitalMillions: 1,
          notes: formData.projectDetails,
          source: "eponix_ultimate_page",
        }),
      });

      if (!res.ok) throw new Error("Failed to submit inquiry");
      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setErrorMessage("Could not submit your application. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-20 lg:py-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Ultimate Nigeria Business Launch</div>
              <h1 className="heading-1">Set Up. Brand. Launch.</h1>
              <p className="lead-text">
                Build a professional Nigerian business with registration, compliance, branding and digital infrastructure handled under one coordinated team.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a href="#what-you-get" className="ep-btn ep-btn-primary">
                  See What You Get
                </a>
                <a href="#get-started" className="ep-btn ep-btn-light">
                  Get Started
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[rgba(8,15,11,0.88)] border border-[rgba(198,255,63,0.42)] p-7 space-y-4">
                <div className="ep-tag text-[#c6ff3f]">Complete Premium Package</div>
                <h3 className="heading-3">Everything your business needs to launch professionally.</h3>
                <p className="text-[#aab6ad] text-[14px] leading-relaxed">
                  Registration, compliance, branding and digital setup coordinated under one professional team.
                </p>
                <p className="small-text">
                  Paid professional service package. Not a grant, loan or funding programme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Band Strip */}
      <section className="bg-[#10261a] text-[#f5f7ef] py-16 border-t border-b border-[#33473a]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="ep-card dark">
              <div className="ep-tag">Amount</div>
              <h3 className="heading-3">₦1,000,000</h3>
              <p>One complete premium package, inclusive of 7.5% VAT.</p>
            </div>

            <div className="ep-card dark">
              <div className="ep-tag">Requirements</div>
              <h3 className="heading-3">ID + business details</h3>
              <p>Start with your identification and essential company information.</p>
            </div>

            <div className="ep-card dark">
              <div className="ep-tag">Timeframe</div>
              <h3 className="heading-3">10–21 working days</h3>
              <p>The main launch project is coordinated across multiple service stages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You Get */}
      <section id="what-you-get" className="bg-[#102118] py-20 lg:py-28 border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">What You Get</div>
              <h2 className="heading-2">Six connected areas. One coordinated launch.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              The Ultimate Launch page does not repeat itself here. This section shows the six service areas included in the wider Eponix framework.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/cac" className="ep-card block group">
              <div className="ep-tag">01 / Foundation</div>
              <h3 className="heading-3">CAC Registration</h3>
              <p>Business Name, Limited Company and NGO / Incorporated Trustees pathways.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Explore CAC →</span>
            </Link>

            <Link href="/compliance" className="ep-card block group">
              <div className="ep-tag">02 / Readiness</div>
              <h3 className="heading-3">Compliance &amp; Tax</h3>
              <p>SCUML, NRS Tax ID / Rev360, NAFDAC and related support.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Explore compliance →</span>
            </Link>

            <Link href="/trademark" className="ep-card block group">
              <div className="ep-tag">03 / Protection</div>
              <h3 className="heading-3">Trademark Registration</h3>
              <p>Search, filing and all 45 trademark classes.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Explore trademark →</span>
            </Link>

            <div className="ep-card">
              <div className="ep-tag">04 / Expression</div>
              <h3 className="heading-3">Premium Branding</h3>
              <p>Premium logo design, letterhead, business card, staff ID and professional company profile.</p>
            </div>

            <div className="ep-card">
              <div className="ep-tag">05 / Digital</div>
              <h3 className="heading-3">Website &amp; Corporate Email</h3>
              <p>Professional domain name, corporate website and corporate email setup.</p>
            </div>

            <div className="ep-card lime">
              <div className="ep-tag text-[#071007] border-[#071007]">06 / Momentum</div>
              <h3 className="heading-3 text-[#071007]">AI, Marketing &amp; Growth</h3>
              <p className="text-[#183018]">Automation, agents, AI video and visibility support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Intake Form */}
      <section id="get-started" className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="eyebrow">Get Started</div>
              <h2 className="heading-2">Tell us about your business.</h2>
              <p className="lead-text">
                Complete the details below and the Business Launch Team will review your request and contact you.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="ep-tag">One Team</span>
                <span className="ep-tag">Dedicated Support</span>
                <span className="ep-tag">Secure Submission</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-[#0d1711] border border-[#33473a] p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="heading-3">Application Submitted</h3>
                  <p className="text-[15px] text-[#aab6ad] max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. The Business Launch Team will reach out to you within 24 hours to begin your incorporation and digital setup.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="ep-form">
                  {errorMessage && (
                    <div className="p-3 mb-4 text-xs bg-red-950 text-red-200 border border-red-800">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label>Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Chukwuemeka Eze"
                    />
                  </div>

                  <div>
                    <label>Business Name</label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Eponix Global Ventures"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label>Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                      />
                    </div>
                    <div>
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label>Business Stage</label>
                      <select
                        value={formData.businessStage}
                        onChange={(e) => setFormData({ ...formData, businessStage: e.target.value })}
                      >
                        <option value="Idea / Pre-launch">Idea / Pre-launch</option>
                        <option value="Newly registered">Newly registered</option>
                        <option value="Existing business">Existing business</option>
                        <option value="Growing business">Growing business</option>
                      </select>
                    </div>
                    <div>
                      <label>Primary Goal</label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                      >
                        <option value="Complete business launch">Complete business launch</option>
                        <option value="Registration">Registration</option>
                        <option value="Compliance">Compliance</option>
                        <option value="Branding">Branding</option>
                        <option value="Digital setup">Digital setup</option>
                        <option value="AI & automation">AI &amp; automation</option>
                        <option value="Growth">Growth</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label>Additional Inquiries / Project Details</label>
                    <textarea
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us anything important about your business, timeline, or launch objectives."
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agreeTermsUlt"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      required
                      style={{ width: "auto" }}
                    />
                    <label htmlFor="agreeTermsUlt" style={{ margin: 0, fontWeight: 400, fontSize: "13px", color: "#aab6ad" }}>
                      I agree to the Terms of Service and Privacy Policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ep-btn ep-btn-dark w-full mt-4"
                  >
                    {isSubmitting ? "Submitting Application..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
