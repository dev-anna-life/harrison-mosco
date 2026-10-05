"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, Phone, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  service: "Ultimate Business Launch",
  message: "",
};

export default function ConsultPage() {
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData(initialFormData);
    setErrorMessage("");
  };

  useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => {
      resetForm();
    }, 20000); // Auto-dismiss after 20 seconds
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          whatsappPhone: formData.phone || "+2340000000000",
          email: formData.email,
          proposedBusinessName: formData.businessName || "Strategic Consultation",
          packageInterested: formData.service || "General Inquiry",
          shareCapitalMillions: 1,
          notes: formData.message,
          source: "eponix_consult_page",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20would%20like%20to%20request%20a%20strategic%20consultation%20for%20my%20business${
    formData.name ? `%20(Name%3A%20${encodeURIComponent(formData.name)})` : ""
  }.`;

  return (
    <div className="bg-[#ffffff] text-[#0c1210] min-h-screen">
      {/* 1. Hero with Corporate Skyline Background */}
      <section className="relative overflow-hidden bg-[#07100c] text-[#f5f7ef] pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-[rgba(198,255,63,0.14)]">
        {/* Corporate Skyline Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ultimate-hero-bg.jpg"
            alt="Corporate Business Architecture"
            className="w-full h-full object-cover object-right lg:object-center opacity-90 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07100c]/95 via-[#07100c]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-transparent to-[#07100c]/30" />
        </div>

        <div className="site-container relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#c6ff3f] font-bold">
              Strategic Advisory &amp; Intake Desk
            </div>
            <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold tracking-tight text-white leading-[1.05]">
              Book a Consultation
            </h1>
            <p className="text-[#aab6ad] text-[16px] sm:text-[18px] leading-relaxed max-w-2xl font-medium">
              Tell us where your business is and where you want to take it next. We will help you structure the legal foundation, compliance, brand identity and digital systems needed to operate with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Why Consult With Us (Light Cream #E6EADF Section) */}
      <section className="bg-[#E6EADF] text-[#0c1210] py-16 lg:py-20 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10">
            <div className="lg:col-span-7 space-y-2">
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">
                Why Consult With Us
              </div>
              <h2 className="text-[32px] sm:text-[44px] font-bold tracking-tight text-[#0c1210] leading-tight">
                Build what your business needs next.
              </h2>
            </div>
            <p className="lg:col-span-5 text-[15px] text-[#2b3a30] font-medium leading-relaxed">
              Every business is unique. Whether you are launching a new enterprise, structuring multi-partner incorporation, or securing SCUML and trademark protection, our team provides clarity before you commit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 bg-[#ffffff] border border-[#c5d1bf] rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#10261a] border border-[#2b593f] flex items-center justify-center text-[#c6ff3f] font-bold">
                ✓
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1210]">One Coordinated Team</h3>
              <p className="text-xs text-[#2b3a30] font-medium leading-relaxed">
                Legal registration, regulatory compliance, branding and digital systems under one structured desk.
              </p>
            </div>

            <div className="p-7 bg-[#ffffff] border border-[#c5d1bf] rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#10261a] border border-[#2b593f] flex items-center justify-center text-[#c6ff3f] font-bold">
                ✓
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1210]">Accredited Standards</h3>
              <p className="text-xs text-[#2b3a30] font-medium leading-relaxed">
                Direct alignment with CAC, SCUML / EFCC, NRS Tax ID and trademark registry regulations.
              </p>
            </div>

            <div className="p-7 bg-[#ffffff] border border-[#c5d1bf] rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#10261a] border border-[#2b593f] flex items-center justify-center text-[#c6ff3f] font-bold">
                ✓
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1210]">Rapid Response</h3>
              <p className="text-xs text-[#2b3a30] font-medium leading-relaxed">
                Inquiries reviewed and answered within working hours via official encrypted channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Consultation Form & Immediate Desk (Crisp Pure White #ffffff Palette) */}
      <section className="py-20 lg:py-28 bg-[#ffffff] text-[#0c1210] border-t border-[#dce3da]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">
                  Consultation Briefing
                </div>
                <h2 className="text-[30px] sm:text-[40px] font-bold tracking-tight text-[#0c1210] mt-1 leading-tight">
                  Schedule your strategic advisory session.
                </h2>
                <p className="text-[#2b3a30] text-[15px] font-medium leading-relaxed mt-3">
                  Submit your details and service requirements. Our senior consultant will review your business scope and guide your registration, structuring, or growth roadmap.
                </p>
              </div>

              {/* Instant WhatsApp Help Card */}
              <div className="p-7 bg-[#07130c] border border-[#1e3b2b] rounded-2xl space-y-4 shadow-xl text-[#c9d5cd]">
                <div className="flex items-center gap-2.5 text-[#c6ff3f] font-mono text-xs uppercase tracking-wider font-bold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Immediate Consultation Desk</span>
                </div>
                <p className="text-xs text-[#c9d5cd] leading-relaxed">
                  Need an urgent answer or have a specific question about your company setup? Connect directly with our lead advisor on WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ep-btn ep-btn-primary w-full text-center justify-center font-bold text-xs flex items-center gap-2 rounded-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="relative bg-[#ffffff] border-2 border-[#17382b] p-8 lg:p-12 text-center space-y-5 rounded-2xl shadow-xl">
                  <button
                    onClick={resetForm}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f0f4f1] hover:bg-[#e2e8e3] text-[#17382b] flex items-center justify-center font-bold text-sm transition-colors"
                    title="Close and return to form"
                  >
                    ✕
                  </button>
                  <div className="w-16 h-16 bg-[#10261a] text-[#c9f95a] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1210]">Request Received</h3>
                  <p className="text-[#2b3a30] max-w-md mx-auto text-sm leading-relaxed font-medium">
                    Thank you, <strong className="text-[#0c1210] font-bold">{formData.name || "Client"}</strong>. Your consultation request has been submitted to the Business Advisory team. We will review your requirements and reach out promptly.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-btn ep-btn-primary"
                    >
                      Connect on WhatsApp &rarr;
                    </a>
                    <button
                      onClick={resetForm}
                      className="ep-btn ep-btn-dark"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#f9faf7] border border-[#ced7cd] p-6 lg:p-10 space-y-5 shadow-xl rounded-2xl text-[#0c1210]"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-950/80 border border-red-500/50 text-red-200 text-xs rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="08088194093"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-2 font-bold">
                        Proposed Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Your Company Name"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold">
                      Primary Service of Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-semibold transition-all"
                    >
                      <option value="Ultimate Business Launch">Ultimate Business Launch Package (₦1,000,000)</option>
                      <option value="CAC Business Name">CAC Business Name Registration</option>
                      <option value="CAC Limited Company">CAC Limited Liability Company (LTD)</option>
                      <option value="CAC Incorporated Trustees">CAC Incorporated Trustees (NGO / Foundation)</option>
                      <option value="SCUML Compliance">SCUML Anti-Money Laundering Certificate</option>
                      <option value="NRS Tax ID Rev360">NRS Tax ID &amp; Rev360 Filing Account</option>
                      <option value="Trademark Registration">Trademark &amp; IP Protection</option>
                      <option value="Brand Identity & Design">Brand Strategy &amp; Identity Design</option>
                      <option value="Corporate Website & Digital">Corporate Website &amp; Digital Infrastructure</option>
                      <option value="General Strategic Advisory">General Strategic Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold">
                      Tell Us Briefly About Your Project
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current stage, specific questions or timeline goals..."
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all placeholder:text-[#88968d] resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ep-btn ep-btn-primary w-full py-4 text-center justify-center font-bold tracking-wider rounded-lg cursor-pointer"
                  >
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Consultation Request →"}</span>
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
