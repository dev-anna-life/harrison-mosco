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
            className="w-full h-full object-cover object-right lg:object-center opacity-90 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07100c]/90 via-[#07100c]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-transparent to-[#07100c]/30" />
        </div>

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
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

            {/* Right Column: Stretchy Advisory Card */}
            <div className="lg:col-span-5">
              <div className="bg-[rgba(8,15,11,0.95)] border border-[rgba(198,255,63,0.42)] p-7 sm:p-9 space-y-5 shadow-2xl backdrop-blur-sm rounded-2xl flex flex-col justify-between">
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

                <div className="space-y-3">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-[#c6ff3f] font-bold">
                    Everything included
                  </div>
                  <h2 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight leading-snug">
                    One premium package.
                  </h2>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    CAC Limited Company, Trademark, SCUML, NRS Tax Account &amp; Tax ID Certificate, Logo Design, Company Profile, Branding, Website and Business E-mail.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2 border-t border-[rgba(198,255,63,0.18)] text-xs">
                  <li className="flex items-center gap-2 text-[#f5f7ef] font-medium">
                    <Check className="w-4 h-4 text-[#c6ff3f] shrink-0" />
                    <span>Registration and compliance</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#f5f7ef] font-medium">
                    <Check className="w-4 h-4 text-[#c6ff3f] shrink-0" />
                    <span>Professional brand identity</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#f5f7ef] font-medium">
                    <Check className="w-4 h-4 text-[#c6ff3f] shrink-0" />
                    <span>Website and business e-mail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Band Strip (4-Card Metric Grid) (Light Cream #E6EADF Palette) */}
      <section className="bg-[#E6EADF] text-[#0c1210] py-16 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#c5d1bf] flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">Amount</div>
                <h3 className="text-2xl font-bold text-[#0c1210] mt-2">₦1,000,000</h3>
              </div>
              <p className="mt-3 text-[13px] text-[#2b3a30] font-medium">One complete premium package, inclusive of 7.5% VAT.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#c5d1bf] flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">Requirements</div>
                <h3 className="text-2xl font-bold text-[#0c1210] mt-2">ID + business details</h3>
              </div>
              <p className="mt-3 text-[13px] text-[#2b3a30] font-medium">Start with your identification and essential company information.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#c5d1bf] flex flex-col justify-between shadow-sm">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">Timeframe</div>
                <h3 className="text-2xl font-bold text-[#0c1210] mt-2">10 to 21 working days</h3>
              </div>
              <p className="mt-3 text-[13px] text-[#2b3a30] font-medium">The main launch project is coordinated across multiple service stages.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#07130c] text-white border-2 border-[#c9f95a] flex flex-col justify-between shadow-xl">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#c9f95a] font-bold">Trust &amp; Delivery</div>
                <h3 className="text-2xl font-bold text-white mt-2">Physical + Digital</h3>
              </div>
              <p className="mt-3 text-[13px] text-[#c9d5cd] leading-relaxed">
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

      {/* 4. Luxury Talk to Our Team Concierge Section (Site Cream #e5eadf) */}
      <section id="talk-to-team" className="bg-[#e5eadf] text-[#0c1210] py-20 lg:py-28 border-b border-[#ced7cd] scroll-mt-24">
        <span id="team" className="block -mt-24 pt-24 invisible" aria-hidden="true" />
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-[#367054] font-semibold">
                Need a clarification?
              </div>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.05] tracking-[-0.05em] text-[#0c1210]">
                Talk to Our team
              </h2>
              <p className="text-[#55655b] text-[15px] sm:text-[16px] leading-relaxed">
                Have specific questions regarding company share capital, trademark classes, compliance filings, or launch timelines? Our senior consultants provide direct advisory.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-[14px] text-[#3b4c42]">
                  <ShieldCheck className="w-5 h-5 text-[#265239] shrink-0" />
                  <span>CAC Accredited Corporate Specialists</span>
                </div>
                <div className="flex items-center gap-3 text-[14px] text-[#3b4c42]">
                  <Clock className="w-5 h-5 text-[#265239] shrink-0" />
                  <span>Fast response within 15 minutes during business hours</span>
                </div>
                <div className="flex items-center gap-3 text-[14px] text-[#3b4c42]">
                  <Check className="w-5 h-5 text-[#265239] shrink-0" />
                  <span>Strict confidentiality and end-to-end execution</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="#application"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#265239] font-bold hover:underline"
                >
                  Or jump directly to the intake form <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* WhatsApp Card */}
              <div className="bg-[#f3f5ec] border border-[#ced7cd] p-6 space-y-4 hover:border-[#17382b] transition-all flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e5eadf] border border-[#ced7cd] flex items-center justify-center text-[#17382b]">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0c1210] leading-tight">WhatsApp Advisory</h3>
                  <p className="text-[#5b6b60] text-[13px] leading-relaxed">
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
              <div className="bg-[#f3f5ec] border border-[#ced7cd] p-6 space-y-4 hover:border-[#17382b] transition-all flex flex-col justify-between shadow-sm">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#e5eadf] border border-[#ced7cd] flex items-center justify-center text-[#17382b]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-[19px] font-bold text-[#0c1210] leading-tight">Direct Phone Line</h3>
                  <p className="text-[#5b6b60] text-[13px] leading-relaxed">
                    Speak directly to our onboarding desk for immediate consultations and service walkthroughs.
                  </p>
                </div>
                <a
                  href="tel:+2347038753272"
                  className="w-full py-2.5 px-4 rounded-md bg-[#0c1210] hover:bg-[#17382b] transition-colors flex items-center justify-center gap-2 text-center"
                  style={{ backgroundColor: "#0c1210", color: "#ffffff" }}
                >
                  <span className="font-mono text-[13px] font-bold tracking-wider uppercase" style={{ color: "#ffffff" }}>
                    Call +234 703 875 3272
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Intake Form (Crisp Pure White #ffffff Palette) */}
      <section id="application" className="bg-[#ffffff] text-[#0c1210] py-20 lg:py-28 border-t border-[#dce3da] scroll-mt-24">
        <span id="get-started" className="block -mt-24 pt-24 invisible" aria-hidden="true" />
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">Get Started</div>
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-tight text-[#0c1210] leading-tight">Tell us about your business.</h2>
              <p className="text-[15px] text-[#2b3a30] font-medium leading-relaxed">
                Complete the details below and the Business Launch Team will review your request and contact you.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded bg-[#f4f7f1] border border-[#c5d1bf] text-[#17382b] font-bold">One Team</span>
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded bg-[#f4f7f1] border border-[#c5d1bf] text-[#17382b] font-bold">Dedicated Support</span>
                <span className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded bg-[#f4f7f1] border border-[#c5d1bf] text-[#17382b] font-bold">Secure Submission</span>
              </div>

              <div className="pt-2 overflow-hidden rounded-2xl border border-[#c5d1bf] shadow-md hidden sm:block">
                <img
                  src="/images/concierge-reception.jpg"
                  alt="Eponix Private Concierge Onboarding Desk"
                  className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-[#ffffff] border-2 border-[#17382b] p-8 text-center space-y-4 rounded-2xl shadow-xl">
                  <div className="w-12 h-12 rounded-full bg-[#10261a] text-[#c9f95a] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1210]">Application Submitted</h3>
                  <p className="text-[15px] text-[#2b3a30] font-medium max-w-md mx-auto">
                    Thank you, <strong className="text-[#0c1210]">{formData.fullName}</strong>. The Business Launch Team will reach out to you within 24 hours to begin your incorporation and digital setup.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#f9faf7] border border-[#ced7cd] p-6 lg:p-10 space-y-5 shadow-xl rounded-2xl text-[#0c1210]">
                  {errorMessage && (
                    <div className="p-3 mb-4 text-xs bg-red-950 text-red-200 border border-red-800 rounded">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Chukwuemeka Eze"
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">Business Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Eponix Global Ventures"
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">Business Stage</label>
                      <select
                        value={formData.businessStage}
                        onChange={(e) => setFormData({ ...formData, businessStage: e.target.value })}
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-semibold transition-all"
                      >
                        <option value="Idea / Pre-launch">Idea / Pre-launch</option>
                        <option value="Newly registered">Newly registered</option>
                        <option value="Existing business">Existing business</option>
                        <option value="Growing business">Growing business</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">Primary Goal</label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-semibold transition-all"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">Additional Inquiries / Project Details</label>
                    <textarea
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us anything important about your business, timeline, or launch objectives."
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d] min-h-[90px] resize-vertical"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agreeTermsUlt"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      required
                      className="accent-[#17382b]"
                    />
                    <label htmlFor="agreeTermsUlt" className="text-xs text-[#2b3a30] font-medium cursor-pointer">
                      I agree to the Terms of Service and Privacy Policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ep-btn ep-btn-primary w-full py-4 text-center justify-center font-bold tracking-wider rounded-lg cursor-pointer"
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
