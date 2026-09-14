"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phoneNumber: "",
    businessStage: "Select stage",
    primaryGoal: "Select goal",
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
          proposedBusinessName: formData.businessName || "Pending Business Name",
          packageInterested: `${formData.primaryGoal} (${formData.businessStage})`,
          shareCapitalMillions: 1,
          notes: formData.projectDetails,
          source: "eponix_home_consultation",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }
      setIsSubmitted(true);
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage("Could not submit your request. Please try again or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
      {/* 1. Hero Section */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-20 lg:py-28 border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            {/* Left Hero Main */}
            <div className="lg:col-span-8 space-y-6">
              <div className="eyebrow">Business &amp; Digital Solutions</div>
              <h1 className="heading-1">We Build, Brand &amp; Grow Businesses.</h1>
              <p className="lead-text">
                From business registration and compliance to branding, digital presence, AI, automation and growth, Eponix Digital helps you build the infrastructure your business needs to operate professionally and grow.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a href="#consultation" className="ep-btn ep-btn-primary">
                  Book a Consultation
                </a>
                <Link href="/services" className="ep-btn ep-btn-light">
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Right Hero Card */}
            <div className="lg:col-span-4">
              <div className="bg-[rgba(8,15,11,0.88)] border border-[rgba(198,255,63,0.42)] p-7 sm:p-8 space-y-4">
                <div className="ep-tag text-[#c6ff3f]">From Discovery to Automation</div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#f5f7ef] leading-tight">
                  Build the business.<br />
                  Build the system.
                </h3>
                <p className="text-[#aab6ad] text-[15px] leading-relaxed">
                  One connected partner across foundation, identity, digital systems, AI, automation and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Band Strip (01 REGISTER, 02 BUILD, 03 BRAND, 04 DIGITISE) */}
      <section className="bg-[#10261a] text-[#f5f7ef] py-16 md:py-20 border-t border-b border-[#33473a]">
        <div className="site-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#26362c]">
            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">01</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">REGISTER</b>
                <p className="text-[14px] text-[#aab6ad]">Give the business its legal foundation.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">02</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">BUILD</b>
                <p className="text-[14px] text-[#aab6ad]">Put the right business and compliance systems in place.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">03</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">BRAND</b>
                <p className="text-[14px] text-[#aab6ad]">Make the business professional and recognisable.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">04</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">DIGITISE</b>
                <p className="text-[14px] text-[#aab6ad]">Build a digital presence that works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Eponix Approach */}
      <section className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">The Eponix Approach</div>
              <h2 className="heading-2">Your business. Properly built for the digital world.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Eponix brings business and digital services together — registration, compliance, branding, websites, digital tools, AI, automation and growth. You bring the business. We help build the infrastructure around it.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="ep-card">
              <div className="ep-tag">Foundation</div>
              <h3 className="heading-3">Start correctly.</h3>
              <p>Business registration, tax, compliance and trademark support.</p>
            </div>

            <div className="ep-card">
              <div className="ep-tag">Identity</div>
              <h3 className="heading-3">Look the part.</h3>
              <p>Brand identity, corporate materials and a professional presence.</p>
            </div>

            <div className="ep-card">
              <div className="ep-tag">Systems</div>
              <h3 className="heading-3">Make it work.</h3>
              <p>Websites, email, digital tools, AI and automation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Journey */}
      <section id="journey" className="bg-[#102118] py-20 lg:py-28 border-t border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Our Journey</div>
              <h2 className="heading-2">From idea to a business built to move.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              A connected pathway that grows with the business.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-[1px] bg-[#26362c]">
            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">01</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">DISCOVER</b>
                <p className="text-[13px] text-[#aab6ad]">Understand the business.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">02</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">FOUNDATION</b>
                <p className="text-[13px] text-[#aab6ad]">Build the foundation.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">03</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">IDENTITY</b>
                <p className="text-[13px] text-[#aab6ad]">Build the brand.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">04</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">DIGITAL</b>
                <p className="text-[13px] text-[#aab6ad]">Go digital.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">05</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">AI &amp; AUTOMATION</b>
                <p className="text-[13px] text-[#aab6ad]">Work smarter.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-6 min-h-[200px] flex flex-col justify-between">
              <div className="ep-num">06</div>
              <div>
                <b className="text-[15px] text-[#f5f7ef] block mb-1">GROWTH</b>
                <p className="text-[13px] text-[#aab6ad]">Build the growth engine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Offer */}
      <section className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="bg-[#070d0a] border border-[#33473a] p-8 sm:p-14 space-y-6">
            <div className="eyebrow">Signature Offer</div>
            <h2 className="heading-2">Everything your business needs to launch professionally.</h2>
            <p className="lead-text">
              The Ultimate Business Launch Package brings legal foundation, compliance, identity and digital presence together under one coordinated team.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link href="/services" className="ep-btn ep-btn-primary">
                See What You Get
              </Link>
              <a href="#consultation" className="ep-btn ep-btn-light">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services Grid */}
      <section className="bg-[#101914] py-20 lg:py-28 border-t border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Services</div>
              <h2 className="heading-2">Choose the right starting point.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Start with a specific need or move through the full business journey.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1: CAC Registration (Dark) */}
            <Link href="/services" className="ep-card dark block group">
              <div className="ep-tag">01 / Foundation</div>
              <h3 className="heading-3">CAC Registration</h3>
              <p>Business Name, Limited Company and NGO / Incorporated Trustees.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Open CAC services →</span>
            </Link>

            {/* Card 2: Compliance & Tax */}
            <Link href="/services" className="ep-card block group">
              <div className="ep-tag">02 / Readiness</div>
              <h3 className="heading-3">Compliance &amp; Tax</h3>
              <p>SCUML, NRS Tax ID / Rev360, NAFDAC and related support.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Open compliance →</span>
            </Link>

            {/* Card 3: Trademark Registration */}
            <Link href="/services" className="ep-card block group">
              <div className="ep-tag">03 / Protection</div>
              <h3 className="heading-3">Trademark Registration</h3>
              <p>Search, filing and all 45 trademark classes.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Open trademark →</span>
            </Link>

            {/* Card 4: Brand & Digital */}
            <Link href="/services" className="ep-card block group">
              <div className="ep-tag">04 / Expression</div>
              <h3 className="heading-3">Brand &amp; Digital</h3>
              <p>Identity, website, corporate email and digital tools.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Open brand services →</span>
            </Link>

            {/* Card 5: AI, Marketing & Growth */}
            <Link href="/services" className="ep-card block group">
              <div className="ep-tag">05 / Momentum</div>
              <h3 className="heading-3">AI, Marketing &amp; Growth</h3>
              <p>Automation, agents, AI video and visibility support.</p>
              <span className="ep-link group-hover:text-[#c6ff3f]">Open growth services →</span>
            </Link>

            {/* Card 6: Complete Business Infrastructure (Lime) */}
            <Link href="/services" className="ep-card lime block group">
              <div className="ep-tag text-[#071007] border-[#071007]">06 / Connected</div>
              <h3 className="heading-3 text-[#071007]">Complete Business Infrastructure</h3>
              <p className="text-[#183018]">Build the pieces together instead of managing disconnected providers.</p>
              <span className="ep-link text-[#071007] group-hover:underline">Explore all services →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Why Eponix Band */}
      <section className="bg-[#10261a] text-[#f5f7ef] py-20 border-t border-b border-[#33473a]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="eyebrow">Why Eponix</div>
              <h2 className="heading-2">One professional partner.</h2>
            </div>
            <div>
              <p className="text-[#d1dbd3] text-[18px] leading-relaxed">
                Built around your business. Foundation first. Digital by design. Built to scale. We combine local business insight with practical digital systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Consultation / Intake Section */}
      <section id="consultation" className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="eyebrow">Not Sure Where to Start?</div>
              <h2 className="heading-2">Tell us about your business.</h2>
              <p className="lead-text">
                Complete the details and the Eponix team will review your request and contact you.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="ep-tag">One Team</span>
                <span className="ep-tag">Dedicated Support</span>
                <span className="ep-tag">Secure Submission</span>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-[#0d1711] border border-[#33473a] p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#c6ff3f] text-[#071007] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="heading-3">Inquiry Submitted</h3>
                  <p className="text-[15px] text-[#aab6ad] max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. The Eponix team has received your details for <em>{formData.businessName || "your business"}</em> and will reach out to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        businessName: "",
                        email: "",
                        phoneNumber: "",
                        businessStage: "Select stage",
                        primaryGoal: "Select goal",
                        projectDetails: "",
                        agreeTerms: true,
                      });
                    }}
                    className="ep-btn ep-btn-light mt-4"
                  >
                    Submit another application
                  </button>
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
                      placeholder="e.g. Oluwaseun Adeleke"
                    />
                  </div>

                  <div>
                    <label>Business Name</label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Dynamics Ltd"
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
                        <option value="Select stage">Select stage</option>
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
                        <option value="Select goal">Select goal</option>
                        <option value="Registration & compliance">Registration &amp; compliance</option>
                        <option value="Branding">Branding</option>
                        <option value="Website & digital presence">Website &amp; digital presence</option>
                        <option value="AI & automation">AI &amp; automation</option>
                        <option value="Marketing & growth">Marketing &amp; growth</option>
                        <option value="Complete business launch">Complete business launch</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label>Additional Inquiries / Project Details</label>
                    <textarea
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us anything important about your business, project needs, timeline or questions."
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      required
                      style={{ width: "auto" }}
                    />
                    <label htmlFor="agreeTerms" style={{ margin: 0, fontWeight: 400, fontSize: "13px", color: "#aab6ad" }}>
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
