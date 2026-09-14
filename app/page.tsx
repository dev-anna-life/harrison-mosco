"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Send,
  Check,
  ShieldCheck,
  Layers,
  Sparkles,
  Cpu,
  TrendingUp,
  FileCheck,
  Lock,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
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
          proposedBusinessName: formData.businessName || "Pending Name",
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
      setErrorMessage("Could not submit your request. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps4 = [
    {
      num: "01",
      tag: "REGISTER",
      desc: "Give the business its legal foundation.",
    },
    {
      num: "02",
      tag: "BUILD",
      desc: "Put the right business and compliance systems in place.",
    },
    {
      num: "03",
      tag: "BRAND",
      desc: "Make the business professional and recognisable.",
    },
    {
      num: "04",
      tag: "DIGITISE",
      desc: "Build a digital presence that works.",
    },
  ];

  const journeySteps = [
    { num: "01", title: "DISCOVER", desc: "Understand the business." },
    { num: "02", title: "FOUNDATION", desc: "Build the foundation." },
    { num: "03", title: "IDENTITY", desc: "Build the brand." },
    { num: "04", title: "DIGITAL", desc: "Go digital." },
    { num: "05", title: "AI & AUTOMATION", desc: "Work smarter." },
    { num: "06", title: "GROWTH", desc: "Build the growth engine." },
  ];

  return (
    <div className="bg-[#f4f6ed] text-[#0c1210] min-h-screen selection:bg-[#c9f95a] selection:text-[#0c1210]">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#17382b] text-white overflow-hidden border-b border-[#254d3d]">
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c9f95a] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0c1210] blur-2xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#c9f95a] text-xs uppercase tracking-[0.16em] font-medium font-mono-tag">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9f95a] animate-pulse" />
                Business &amp; Digital Solutions
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[1.08] text-white">
                We Build, Brand <br className="hidden sm:inline" />
                <span className="font-serif italic text-[#c9f95a] font-normal">&amp; Grow Businesses.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#b8c2ba] max-w-xl font-light leading-relaxed">
                From business registration and compliance to branding, digital presence, AI, automation and growth, Eponix Digital helps you build the infrastructure your business needs to operate professionally and grow.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#c9f95a] text-[#0c1210] font-semibold text-sm hover:bg-[#bdf746] transition-all shadow-md active:scale-[0.98]"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/15"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#122c22] border border-[#254d3d] rounded-2xl p-7 sm:p-9 shadow-2xl relative group hover:border-[#c9f95a]/40 transition-all">
                <div className="inline-block font-mono-tag text-xs font-semibold px-3 py-1 rounded bg-[#c9f95a]/15 text-[#c9f95a] mb-6">
                  From Discovery to Automation
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug mb-4">
                  Build the business.<br />
                  <span className="font-serif italic text-[#c9f95a] font-normal">Build the system.</span>
                </h3>
                <p className="text-sm text-[#b8c2ba] leading-relaxed mb-6 font-light">
                  One connected partner across foundation, identity, digital systems, AI, automation and growth.
                </p>
                <div className="pt-4 border-t border-[#254d3d] flex items-center justify-between text-xs text-[#b8c2ba]">
                  <span>✦ 100% Accredited Governance</span>
                  <span>✦ Modern Full-Stack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Band Strip (REGISTER, BUILD, BRAND, DIGITISE) */}
      <section className="bg-[#0c1210] text-white py-8 border-b border-[#17382b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps4.map((step) => (
              <div key={step.num} className="space-y-1.5 border-l-2 border-[#17382b] pl-4 sm:pl-5">
                <div className="flex items-center gap-2">
                  <span className="font-mono-tag text-xs text-[#c9f95a] font-bold">{step.num}</span>
                  <span className="text-xs uppercase tracking-widest font-bold text-white">{step.tag}</span>
                </div>
                <p className="text-xs text-[#9aa69e] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Eponix Approach */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#17382b] font-mono-tag font-semibold">
              ✦ The Eponix Approach
            </div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#0c1210] leading-snug">
              Your business. Properly built for the{" "}
              <span className="font-serif italic text-[#17382b] font-normal">digital world.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 text-base sm:text-lg text-[#4a5550] leading-relaxed font-light">
            Eponix brings business and digital services together — registration, compliance, branding, websites, digital tools, AI, automation and growth. You bring the business. We help build the infrastructure around it.
          </div>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-[#d6ddd6] shadow-sm hover:border-[#17382b] transition-all group">
            <div className="font-mono-tag text-xs font-semibold px-2.5 py-1 rounded bg-[#e8ede4] text-[#17382b] inline-block mb-6 group-hover:bg-[#c9f95a] group-hover:text-[#0c1210] transition-colors">
              Foundation
            </div>
            <h3 className="text-xl font-medium text-[#0c1210] mb-3">Start correctly.</h3>
            <p className="text-sm text-[#5a6560] leading-relaxed">
              Business registration, tax, compliance and trademark support.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#d6ddd6] shadow-sm hover:border-[#17382b] transition-all group">
            <div className="font-mono-tag text-xs font-semibold px-2.5 py-1 rounded bg-[#e8ede4] text-[#17382b] inline-block mb-6 group-hover:bg-[#c9f95a] group-hover:text-[#0c1210] transition-colors">
              Identity
            </div>
            <h3 className="text-xl font-medium text-[#0c1210] mb-3">Look the part.</h3>
            <p className="text-sm text-[#5a6560] leading-relaxed">
              Brand identity, corporate materials and a professional presence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#d6ddd6] shadow-sm hover:border-[#17382b] transition-all group">
            <div className="font-mono-tag text-xs font-semibold px-2.5 py-1 rounded bg-[#e8ede4] text-[#17382b] inline-block mb-6 group-hover:bg-[#c9f95a] group-hover:text-[#0c1210] transition-colors">
              Systems
            </div>
            <h3 className="text-xl font-medium text-[#0c1210] mb-3">Make it work.</h3>
            <p className="text-sm text-[#5a6560] leading-relaxed">
              Websites, email, digital tools, AI and automation.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Journey (6 Steps) */}
      <section id="journey" className="py-20 md:py-28 bg-[#17382b] text-white border-y border-[#254d3d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#c9f95a] font-mono-tag font-medium">
                ✦ Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
                From idea to a business{" "}
                <span className="font-serif italic text-[#c9f95a] font-normal">built to move.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#b8c2ba] max-w-sm font-light">
              A connected pathway that grows with the business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-6">
            {journeySteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#122c22] border border-[#254d3d] p-5 rounded-2xl hover:border-[#c9f95a]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tag text-xs text-[#c9f95a] font-bold block mb-3">
                    {step.num}
                  </span>
                  <b className="text-sm uppercase tracking-wider text-white block mb-1">
                    {step.title}
                  </b>
                </div>
                <p className="text-xs text-[#b8c2ba] leading-relaxed mt-4">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Signature Offer */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="bg-[#0c1210] text-white rounded-3xl p-8 sm:p-14 border border-[#17382b] relative overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#c9f95a]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl space-y-6 relative z-10">
            <div className="font-mono-tag text-xs font-semibold px-3 py-1 rounded bg-[#c9f95a]/20 text-[#c9f95a] inline-block">
              Signature Offer
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight leading-snug">
              Everything your business needs to{" "}
              <span className="font-serif italic text-[#c9f95a] font-normal">launch professionally.</span>
            </h2>
            <p className="text-base text-[#b8c2ba] font-light leading-relaxed">
              The Ultimate Business Launch Package brings legal foundation, compliance, identity and digital presence together under one coordinated team.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#c9f95a] text-[#0c1210] font-semibold text-sm hover:bg-[#bdf746] transition-all shadow-md"
              >
                <span>See What You Get</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/15"
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Services Grid */}
      <section className="py-12 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[#17382b] font-mono-tag font-semibold">
              ✦ Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#0c1210]">
              Choose the right <span className="font-serif italic text-[#17382b] font-normal">starting point.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 text-sm sm:text-base text-[#5a6560] font-light">
            Start with a specific need or move through the full business journey.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: CAC (Dark) */}
          <Link
            href="/services"
            className="bg-[#17382b] text-white p-8 rounded-2xl border border-[#254d3d] hover:border-[#c9f95a]/40 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="font-mono-tag text-xs font-semibold text-[#c9f95a] mb-4">
                01 / Foundation
              </div>
              <h3 className="text-xl font-medium mb-2 text-white">CAC Registration</h3>
              <p className="text-sm text-[#b8c2ba] leading-relaxed">
                Business Name, Limited Company and NGO / Incorporated Trustees.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-[#c9f95a] group-hover:translate-x-1 transition-transform">
              <span>Open CAC services →</span>
            </div>
          </Link>

          {/* Card 2: Compliance */}
          <Link
            href="/services"
            className="bg-white p-8 rounded-2xl border border-[#d6ddd6] hover:border-[#17382b] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="font-mono-tag text-xs font-semibold text-[#17382b] mb-4">
                02 / Readiness
              </div>
              <h3 className="text-xl font-medium mb-2 text-[#0c1210]">Compliance &amp; Tax</h3>
              <p className="text-sm text-[#5a6560] leading-relaxed">
                SCUML, NRS Tax ID / Rev360, NAFDAC and related support.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-[#17382b] group-hover:translate-x-1 transition-transform">
              <span>Open compliance →</span>
            </div>
          </Link>

          {/* Card 3: Trademark */}
          <Link
            href="/services"
            className="bg-white p-8 rounded-2xl border border-[#d6ddd6] hover:border-[#17382b] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="font-mono-tag text-xs font-semibold text-[#17382b] mb-4">
                03 / Protection
              </div>
              <h3 className="text-xl font-medium mb-2 text-[#0c1210]">Trademark Registration</h3>
              <p className="text-sm text-[#5a6560] leading-relaxed">
                Search, filing and all 45 trademark classes.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-[#17382b] group-hover:translate-x-1 transition-transform">
              <span>Open trademark →</span>
            </div>
          </Link>

          {/* Card 4: Brand */}
          <Link
            href="/services"
            className="bg-white p-8 rounded-2xl border border-[#d6ddd6] hover:border-[#17382b] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="font-mono-tag text-xs font-semibold text-[#17382b] mb-4">
                04 / Expression
              </div>
              <h3 className="text-xl font-medium mb-2 text-[#0c1210]">Brand &amp; Digital</h3>
              <p className="text-sm text-[#5a6560] leading-relaxed">
                Identity, website, corporate email and digital tools.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-[#17382b] group-hover:translate-x-1 transition-transform">
              <span>Open brand services →</span>
            </div>
          </Link>

          {/* Card 5: AI & Growth */}
          <Link
            href="/services"
            className="bg-white p-8 rounded-2xl border border-[#d6ddd6] hover:border-[#17382b] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="font-mono-tag text-xs font-semibold text-[#17382b] mb-4">
                05 / Momentum
              </div>
              <h3 className="text-xl font-medium mb-2 text-[#0c1210]">AI, Marketing &amp; Growth</h3>
              <p className="text-sm text-[#5a6560] leading-relaxed">
                Automation, agents, AI video and visibility support.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-semibold text-[#17382b] group-hover:translate-x-1 transition-transform">
              <span>Open growth services →</span>
            </div>
          </Link>

          {/* Card 6: Complete (Electric Lime) */}
          <Link
            href="/services"
            className="bg-[#c9f95a] text-[#0c1210] p-8 rounded-2xl border border-[#b8f240] hover:shadow-lg transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="font-mono-tag text-xs font-bold text-[#17382b] mb-4">
                06 / Connected
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0c1210]">Complete Business Infrastructure</h3>
              <p className="text-sm text-[#17382b] font-medium leading-relaxed">
                Build the pieces together instead of managing disconnected providers.
              </p>
            </div>
            <div className="mt-8 flex items-center text-xs font-bold text-[#0c1210] group-hover:translate-x-1 transition-transform">
              <span>Explore all services →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* 7. Why Eponix Band */}
      <section className="bg-[#17382b] text-white py-16 md:py-20 border-y border-[#254d3d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#c9f95a] font-mono-tag font-medium">
                ✦ Why Eponix
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
                One professional <span className="font-serif italic text-[#c9f95a] font-normal">partner.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-[#b8c2ba] font-light leading-relaxed">
                Built around your business. Foundation first. Digital by design. Built to scale. We combine local business insight with practical digital systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Consultation Intake Form */}
      <section id="consultation" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl border border-[#d6ddd6] p-8 sm:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Form Info Left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-[#17382b] font-mono-tag font-semibold">
                ✦ Not Sure Where to Start?
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#0c1210]">
                Tell us about <br />
                <span className="font-serif italic text-[#17382b] font-normal">your business.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#5a6560] leading-relaxed font-light">
                Complete the details and the Eponix team will review your request and contact you directly.
              </p>

              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3 text-xs font-semibold text-[#17382b]">
                  <CheckCircle2 className="w-4 h-4 text-[#17382b]" />
                  <span>One coordinated multi-disciplinary team</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-[#17382b]">
                  <CheckCircle2 className="w-4 h-4 text-[#17382b]" />
                  <span>Dedicated senior partner advisory</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-[#17382b]">
                  <CheckCircle2 className="w-4 h-4 text-[#17382b]" />
                  <span>Secure &amp; confidential business intake</span>
                </div>
              </div>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="bg-[#e8ede4] border border-[#17382b]/30 rounded-2xl p-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#17382b] text-[#c9f95a] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-[#0c1210]">Inquiry Received</h3>
                  <p className="text-sm text-[#4a5550] max-w-md mx-auto">
                    Thank you, <strong>{formData.fullName}</strong>. Our senior consultant has received your inquiry for <em>{formData.businessName || "your business"}</em> and will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: "",
                        businessName: "",
                        email: "",
                        phoneNumber: "",
                        businessStage: "Idea / Pre-launch",
                        primaryGoal: "Complete business launch",
                        projectDetails: "",
                        agreeTerms: true,
                      });
                    }}
                    className="mt-4 text-xs font-semibold text-[#17382b] underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 text-xs rounded-lg bg-red-50 text-red-700 border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0c1210] mb-1.5 font-mono-tag uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Oluwaseun Adeleke"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#d6ddd6] bg-[#f9faf6] text-sm text-[#0c1210] focus:outline-none focus:border-[#17382b] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#0c1210] mb-1.5 font-mono-tag uppercase">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Dynamics Ltd"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#d6ddd6] bg-[#f9faf6] text-sm text-[#0c1210] focus:outline-none focus:border-[#17382b] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0c1210] mb-1.5 font-mono-tag uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#d6ddd6] bg-[#f9faf6] text-sm text-[#0c1210] focus:outline-none focus:border-[#17382b] focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#0c1210] mb-1.5 font-mono-tag uppercase">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+234 800 000 0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#d6ddd6] bg-[#f9faf6] text-sm text-[#0c1210] focus:outline-none focus:border-[#17382b] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#0c1210] mb-1.5 font-mono-tag uppercase">
                        Business Stage
                      </label>
                      <select
                        value={formData.businessStage}
                        onChange={(e) => setFormData({ ...formData, businessStage: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#d6ddd6] bg-[#f9faf6] text-sm text-[#0c1210] focus:outline-none focus:border-[#17382b] focus:bg-white transition-all"
                      >
                        <option value="Idea / Pre-launch">Idea / Pre-launch</option>
                        <option value="Newly registered">Newly registered</option>
                        <option value="Existing business">Existing business</option>
                        <option value="Growing business">Growing business</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#0c1210] mb-1.5 font-mono-tag uppercase">
                        Primary Goal
                      </label>
                      <select
                        value={formData.primaryGoal}
                        onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#d6ddd6] bg-[#f9faf6] text-sm text-[#0c1210] focus:outline-none focus:border-[#17382b] focus:bg-white transition-all"
                      >
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
                    <label className="block text-xs font-medium text-[#0c1210] mb-1.5 font-mono-tag uppercase">
                      Additional Inquiries / Project Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us anything important about your business, project needs, timeline or questions."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#d6ddd6] bg-[#f9faf6] text-sm text-[#0c1210] focus:outline-none focus:border-[#17382b] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      required
                      className="rounded border-[#d6ddd6] text-[#17382b] focus:ring-[#17382b]"
                    />
                    <label htmlFor="agreeTerms" className="text-xs text-[#5a6560]">
                      I agree to the Terms of Service and Privacy Policy.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0c1210] text-white font-medium text-sm hover:bg-[#17382b] transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-[0.99] mt-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
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
