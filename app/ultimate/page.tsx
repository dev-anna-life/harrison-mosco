"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, MessageSquare, Phone, ArrowRight, ShieldCheck, Clock } from "lucide-react";

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
      {/* 1. Hero with Bold Corporate Background */}
      <section className="relative overflow-hidden bg-[#07100c] text-[#f5f7ef] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(198,255,63,0.14)]">
        {/* Bold Background Image with Crisp Contrast */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ultimate-hero-bg.jpg"
            alt="Abuja Central Business District Corporate Architecture"
            className="w-full h-full object-cover object-right lg:object-center opacity-70 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07100c]/95 via-[#07100c]/80 to-[#07100c]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-transparent to-[#07100c]/60" />
        </div>

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Ultimate Nigeria Business Launch</div>
              <h1 className="heading-1">Set Up. Brand. Launch.</h1>
              <p className="lead-text">
                Build a professional Nigerian business with registration, compliance, branding and digital infrastructure handled under one coordinated team.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
                <a href="#application" className="ep-btn ep-btn-primary text-center justify-center">
                  Get Started
                </a>
                <a href="#what-you-get" className="ep-btn ep-btn-dark border border-[rgba(198,255,63,0.3)] text-[#f5f7ef] hover:border-[#c6ff3f] text-center justify-center">
                  See What You Get
                </a>
                <a href="#talk-to-team" className="ep-btn ep-btn-light text-center justify-center">
                  Talk to Our Team
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[rgba(8,15,11,0.92)] border border-[rgba(198,255,63,0.42)] p-7 space-y-4 shadow-2xl backdrop-blur-sm">
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

      {/* 2. Band Strip (4-Card Metric Grid) */}
      <section className="bg-[#10261a] text-[#f5f7ef] py-16 border-t border-b border-[#33473a]">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="ep-card dark flex flex-col justify-between">
              <div>
                <div className="ep-tag">Amount</div>
                <h3 className="heading-3 mt-2">₦1,000,000</h3>
              </div>
              <p className="mt-3 text-[14px] text-[#aab6ad]">One complete premium package, inclusive of 7.5% VAT.</p>
            </div>

            <div className="ep-card dark flex flex-col justify-between">
              <div>
                <div className="ep-tag">Requirements</div>
                <h3 className="heading-3 mt-2">ID + business details</h3>
              </div>
              <p className="mt-3 text-[14px] text-[#aab6ad]">Start with your identification and essential company information.</p>
            </div>

            <div className="ep-card dark flex flex-col justify-between">
              <div>
                <div className="ep-tag">Timeframe</div>
                <h3 className="heading-3 mt-2">10 to 21 working days</h3>
              </div>
              <p className="mt-3 text-[14px] text-[#aab6ad]">The main launch project is coordinated across multiple service stages.</p>
            </div>

            <div className="ep-card dark flex flex-col justify-between border-[rgba(198,255,63,0.25)]">
              <div>
                <div className="ep-tag text-[#c6ff3f]">Trust &amp; Delivery</div>
                <h3 className="heading-3 mt-2">Physical + Digital</h3>
              </div>
              <p className="mt-3 text-[14px] text-[#aab6ad] leading-relaxed">
                Physical dispatch of verified CAC certificates and regulatory documents nationwide, with full digital brand suites and compliance files available instantly online.
              </p>
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
              <div className="ep-tag" style={{ color: "#071007", borderColor: "#071007" }}>06 / Operations</div>
              <h3 className="heading-3" style={{ color: "#071007" }}>Business Automation &amp; Systems</h3>
              <p style={{ color: "#142519", fontWeight: 600 }}>Workflow automation, client intake systems and scalable business operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Luxury Talk to Our Team Concierge Section */}
      <section id="talk-to-team" className="bg-[#07130c] text-[#f5f7ef] py-20 lg:py-28 border-b border-[#26362c] scroll-mt-24">
        <span id="team" className="block -mt-24 pt-24 invisible" aria-hidden="true" />
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="eyebrow">Need a clarification?</div>
              <h2 className="heading-2">Talk to Our team</h2>
              <p className="lead-text">
                Have specific questions regarding company share capital, trademark classes, compliance filings, or launch timelines? Our senior consultants provide direct advisory.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-[14px] text-[#aab6ad]">
                  <ShieldCheck className="w-5 h-5 text-[#c6ff3f] shrink-0" />
                  <span>CAC Accredited Corporate Specialists</span>
                </div>
                <div className="flex items-center gap-3 text-[14px] text-[#aab6ad]">
                  <Clock className="w-5 h-5 text-[#c6ff3f] shrink-0" />
                  <span>Fast response within 15 minutes during business hours</span>
                </div>
                <div className="flex items-center gap-3 text-[14px] text-[#aab6ad]">
                  <Check className="w-5 h-5 text-[#c6ff3f] shrink-0" />
                  <span>Strict confidentiality and end-to-end execution</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#application"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c6ff3f] hover:underline"
                >
                  Or jump directly to the intake form <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <div className="bg-[#0b1710] border border-[rgba(198,255,63,0.3)] p-6 space-y-4 hover:border-[#c6ff3f] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(198,255,63,0.12)] border border-[rgba(198,255,63,0.25)] flex items-center justify-center text-[#c6ff3f]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="heading-3 text-[19px]">WhatsApp Advisory</h3>
                  <p className="text-[#aab6ad] text-[13px] leading-relaxed">
                    Message directly with our senior incorporation and branding lead for real-time answers.
                  </p>
                </div>
                <a
                  href="https://wa.me/2347038753272?text=Hello%20Eponix%20Team%2C%20I%20am%20interested%20in%20the%20Ultimate%20Nigeria%20Business%20Launch%20Package.%20Please%20guide%20me."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ep-btn ep-btn-primary w-full text-center justify-center text-[13px] py-2.5"
                >
                  Chat on WhatsApp →
                </a>
              </div>

              {/* Direct Phone Card */}
              <div className="bg-[#0b1710] border border-[#26362c] p-6 space-y-4 hover:border-[#c6ff3f] transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(245,247,239,0.06)] border border-[#33473a] flex items-center justify-center text-[#f5f7ef]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="heading-3 text-[19px]">Direct Phone Line</h3>
                  <p className="text-[#aab6ad] text-[13px] leading-relaxed">
                    Speak directly to our onboarding desk for immediate consultations and service walkthroughs.
                  </p>
                </div>
                <a
                  href="tel:+2347038753272"
                  className="ep-btn ep-btn-dark border border-[#33473a] text-[#f5f7ef] hover:border-[#c6ff3f] w-full text-center justify-center text-[13px] py-2.5"
                >
                  Call +234 703 875 3272
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Intake Form */}
      <section id="application" className="bg-[#0b120f] py-20 lg:py-28 scroll-mt-24">
        <span id="get-started" className="block -mt-24 pt-24 invisible" aria-hidden="true" />
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

              <div className="pt-2 overflow-hidden border border-[#26362c] shadow-lg hidden sm:block">
                <img
                  src="/images/concierge-reception.jpg"
                  alt="Eponix Private Concierge Onboarding Desk"
                  className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-700"
                />
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
                    className="ep-btn ep-btn-primary w-full mt-4"
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
