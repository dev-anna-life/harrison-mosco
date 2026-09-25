"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function ConsultPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    service: "Ultimate Business Launch",
    message: "",
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

  const whatsappUrl = `https://wa.me/2348137092154?text=Hello%20Eponix%20Digital%2C%20I%20would%20like%20to%20request%20a%20strategic%20consultation%20for%20my%20business${
    formData.name ? `%20(Name%3A%20${encodeURIComponent(formData.name)})` : ""
  }.`;

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef] min-h-screen">
      {/* 1. Hero Header */}
      <section className="bg-[#07100c] text-[#f5f7ef] pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="max-w-3xl space-y-4">
            <div className="eyebrow">Strategic Advisory &amp; Intake</div>
            <h1 className="heading-1">Book a Consultation</h1>
            <p className="lead-text">
              Tell us where your business is and where you want to take it next. We will help you structure the legal foundation, compliance, brand identity and digital systems needed to operate with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Consultation Form & Details */}
      <section className="py-16 lg:py-24">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="eyebrow">Why Consult With Us</div>
                <h2 className="heading-2">Build what your business needs next.</h2>
                <p className="text-[#aab6ad] text-[15px] leading-relaxed mt-4">
                  Every business is unique. Whether you are launching a new enterprise, structuring multi-partner incorporation, or securing SCUML and trademark protection, our team provides clarity before you commit.
                </p>
              </div>

              <div className="space-y-4 border-t border-[#26362c] pt-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#10261a] border border-[rgba(198,255,63,0.3)] flex items-center justify-center text-[#c6ff3f] shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <b className="text-[15px] text-white block">One Coordinated Team</b>
                    <p className="text-xs text-[#aab6ad] mt-0.5">
                      Legal registration, regulatory compliance, branding and digital systems under one desk.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#10261a] border border-[rgba(198,255,63,0.3)] flex items-center justify-center text-[#c6ff3f] shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <b className="text-[15px] text-white block">Accredited Standards</b>
                    <p className="text-xs text-[#aab6ad] mt-0.5">
                      Direct alignment with CAC, SCUML / EFCC, NRS Tax ID and trademark registry regulations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded bg-[#10261a] border border-[rgba(198,255,63,0.3)] flex items-center justify-center text-[#c6ff3f] shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <b className="text-[15px] text-white block">Rapid Response</b>
                    <p className="text-xs text-[#aab6ad] mt-0.5">
                      Inquiries reviewed and answered within working hours via official channels.
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Help */}
              <div className="p-6 bg-[#07100c] border border-[#26362c] rounded-lg space-y-3">
                <div className="flex items-center gap-2 text-[#c6ff3f] font-mono text-xs uppercase tracking-wider font-bold">
                  <MessageSquare className="w-4 h-4" />
                  <span>Immediate Consultation Desk</span>
                </div>
                <p className="text-xs text-[#aab6ad] leading-relaxed">
                  Need an urgent answer or have a specific question about your company setup? Connect directly with our lead advisor on WhatsApp.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ep-btn ep-btn-primary w-full text-center justify-center mt-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-[#07100c] border border-[#c6ff3f] p-8 lg:p-12 text-center space-y-5 shadow-2xl">
                  <div className="w-16 h-16 bg-[#c6ff3f] text-[#071007] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="heading-2">Request Received</h3>
                  <p className="text-[#aab6ad] max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name || "Client"}</strong>. Your consultation request has been submitted to the Business Advisory team. We will review your requirements and reach out promptly.
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
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          businessName: "",
                          service: "Ultimate Business Launch",
                          message: "",
                        });
                      }}
                      className="ep-btn ep-btn-dark"
                    >
                      Submit Another Inquiry
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2 font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2 font-bold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 812 345 6789"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] mb-2 font-bold">
                        Proposed Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Your Company Name"
                        className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] font-bold">
                      Primary Service of Interest *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#aab6ad] font-bold">
                      Tell Us Briefly About Your Project
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current stage, specific questions or timeline goals..."
                      className="w-full bg-[#07100c] text-white border border-[#26362c] p-3 text-sm focus:border-[#c6ff3f] outline-none resize-vertical"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ep-btn ep-btn-primary w-full py-4 text-center justify-center font-bold tracking-wider cursor-pointer"
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
