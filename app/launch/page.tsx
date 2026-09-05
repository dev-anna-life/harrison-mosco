"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Clock,
  ArrowRight,
  Phone,
  Lock,
  Layers,
  MapPin,
  ChevronDown,
  Star,
  FileText,
  Globe,
  Award,
  Send,
  CheckCircle,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export default function UltimateLaunchPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phoneCountryCode: "+234",
    phone: "",
    businessStage: "Idea Stage",
    primaryGoal: "Launch New Business",
    projectDetails: "",
    termsConsent: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          whatsappPhone: `${formData.phoneCountryCode}${formData.phone}`,
          email: formData.email,
          proposedBusinessName: formData.businessName,
          packageInterested: "Ultimate Business Launch Package (NGN 1,000,000)",
          shareCapitalMillions: 2,
          source: "launch_application_form",
        }),
      });
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  const contactCentres = [
    { name: "Lagos Contact Centre", address: "No 22 Okoye Street, Bucknor, Isolo Jakande Gate, Lagos." },
    { name: "Abuja Contact Centre", address: "Shop 10 Kusase Plaza, Opp. Primary Healthcare Centre, Dutse Apo, FCT, Abuja." },
    { name: "Delta Contact Centre", address: "Kim Royal Hotel and Suites, Fabian Edward Street, Off Asaba-Onitsha Express Road, Asaba." },
    { name: "Bayelsa Contact Centre", address: "No. 1 Stanley Damabide Close Off Amb. Otiotio Road, Yenizuegene-Epie, Yenagoa." },
    { name: "Akwa Ibom Contact Centre", address: "#18 Thomas Udoekong Street, Anua Obio." },
    { name: "Ebonyi Contact Centre", address: "3rd Floor, DreamLink Plaza, Mile 50, Abakaliki." },
  ];

  const inclusions = [
    {
      num: "01",
      title: "Company Registration",
      subtitle: "Establish the legal foundation of your Nigerian company.",
      items: [
        "Official CAC Incorporation Certificate",
        "CAC Status Report with full equity details",
        "MEMART (Memorandum & Articles of Association)",
      ],
    },
    {
      num: "02",
      title: "Tax & Compliance",
      subtitle: "Initial tax and compliance setup for formal business operations.",
      items: [
        "Official NRS Corporate Tax ID (TIN)",
        "Tax Filing Portal / Rev360 Account Setup",
        "SCUML Anti-Money Laundering Registration Support",
      ],
    },
    {
      num: "03",
      title: "Trademark Support",
      subtitle: "Begin protecting the identity and exclusivity of your new brand.",
      items: [
        "Comprehensive Name & Logo Trademark Search",
        "Federal Trademark Registration Filing Support",
        "Official One Trademark Class Protection",
      ],
    },
    {
      num: "04",
      title: "Premium Branding",
      subtitle: "Build a high-impact, professional visual identity for your company.",
      items: [
        "Executive Logo Suite & Color Palette",
        "Letterhead, Business Card & Staff ID Designs",
        "12-Page Comprehensive Corporate Company Profile",
      ],
    },
    {
      num: "05",
      title: "Website & Corporate Email",
      subtitle: "Create a world-class corporate online presence for your business.",
      items: [
        "Custom Professional Domain Name (.com / .ng)",
        "Premium Multi-Page Corporate Website with SSL",
        "Official Custom Corporate Email Setup",
      ],
    },
    {
      num: "06",
      title: "Digital Business Tools",
      subtitle: "Give customers seamless ways to connect, pay, book, and receive receipts.",
      items: [
        "Social Media & Live WhatsApp Integration",
        "Paystack Payment Gateway & Automated Invoicing",
        "Client Consultation & Booking System Setup",
      ],
    },
  ];

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      {/* Ambient Orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/10 top-0 right-1/4" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/10 bottom-1/4 left-10" />

      {/* =========================================================
          1. HERO SECTION (2-Column with CAC Proof Card)
          ========================================================= */}
      <section className="py-8 sm:py-16 lg:py-20 border-b border-slate-800 relative z-10 overflow-hidden">
        {/* Luxury Obsidian Architectural Background Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/bg-luxury-obsidian.jpg"
            alt="Luxury Architecture Texture"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/95 via-[#0a0e17]/80 to-[#0a0e17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
              <Reveal type="down" duration={0.6}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[10px] sm:text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
                  <span>Ultimate Nigeria Business Launch</span>
                </span>
              </Reveal>

              <Reveal type="up" delay={150} duration={0.8}>
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.15]">
                  Set Up. Brand. Launch.
                </h1>
                <p className="text-xs sm:text-base text-slate-300 leading-relaxed font-normal mt-3 max-w-2xl">
                  Build a professional Nigerian company with registration, compliance, branding and digital infrastructure handled under one coordinated professional team.
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal type="up" delay={300} duration={0.8}>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="#included"
                    className="w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-[0_8px_25px_rgba(253,201,2,0.25)] transition-all"
                  >
                    See What You Get
                  </a>
                  <a
                    href="#application"
                    className="w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/60 text-white font-bold text-xs sm:text-sm rounded-xl transition-all"
                  >
                    Get Started
                  </a>
                </div>
              </Reveal>

              {/* Trust Strip */}
              <Reveal type="up" delay={400} duration={0.8}>
                <div className="pt-2 flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-400 font-bold">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    CAC Company
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    Tax &amp; Compliance
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
                    Premium Branding
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[#FDC902]">
                    Digital Setup
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Right Column: The Official CAC Proof Card */}
            <div className="lg:col-span-5">
              <Reveal type="scale" delay={200} duration={0.8}>
                <aside className="p-6 sm:p-8 bg-gradient-to-b from-[#111827] to-[#0b0f19] rounded-3xl border-2 border-[#FDC902]/40 shadow-[0_15px_40px_rgba(0,0,0,0.6)] space-y-4 relative overflow-hidden text-left">
                  {/* Subtle Background Accent */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#FDC902]/10 rounded-full blur-2xl pointer-events-none" />

                  {/* Official CAC Verification Logo */}
                  <div className="relative w-48 sm:w-56 h-14 sm:h-16 mb-2">
                    <Image
                      src="/images/cac-verification-logo.png"
                      alt="Corporate Affairs Commission CAC logo"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>

                  <span className="inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902]">
                    Complete Premium Package
                  </span>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-snug">
                    Everything your business needs to launch professionally.
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Registration, compliance, branding and digital setup coordinated under one professional team.
                  </p>

                  <div className="pt-3 border-t border-slate-800">
                    <p className="text-[10px] sm:text-xs text-slate-400 leading-normal font-medium italic">
                      Paid professional service package. Not a grant, loan or funding programme.
                    </p>
                  </div>
                </aside>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          2. FIVE INFORMATION CARDS STRIP
          ========================================================= */}
      <section className="py-8 sm:py-12 border-b border-slate-800/80 bg-[#070b13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            
            <Reveal type="up" delay={50} duration={0.6}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a]/90 border border-slate-800 text-left h-full space-y-1">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Amount
                </span>
                <strong className="text-base sm:text-lg font-black text-[#FDC902] block">
                  ₦1,000,000
                </strong>
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed">
                  One complete premium package, inclusive of 7.5% VAT.
                </p>
              </div>
            </Reveal>

            <Reveal type="up" delay={100} duration={0.6}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a]/90 border border-slate-800 text-left h-full space-y-1">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Requirements
                </span>
                <strong className="text-base sm:text-lg font-black text-white block">
                  ID + business details
                </strong>
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed">
                  Start with your identification and essential company information.
                </p>
              </div>
            </Reveal>

            <Reveal type="up" delay={150} duration={0.6}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a]/90 border border-slate-800 text-left h-full space-y-1">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Timeframe
                </span>
                <strong className="text-base sm:text-lg font-black text-emerald-400 block">
                  10 - 21 working days
                </strong>
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed">
                  The main launch project is coordinated across multiple service stages.
                </p>
              </div>
            </Reveal>

            <Reveal type="up" delay={200} duration={0.6}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a]/90 border border-slate-800 text-left h-full space-y-1">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Service
                </span>
                <strong className="text-base sm:text-lg font-black text-white block">
                  One dedicated team
                </strong>
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed">
                  Registration, branding and digital setup managed under one workflow.
                </p>
              </div>
            </Reveal>

            <Reveal type="up" delay={250} duration={0.6}>
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a]/90 border border-slate-800 text-left h-full space-y-1">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Trust &amp; Delivery
                </span>
                <strong className="text-base sm:text-lg font-black text-[#FDC902] block">
                  Physical + digital
                </strong>
                <p className="text-[11px] sm:text-xs text-slate-400 font-normal leading-relaxed">
                  Physical office presence with approved documents and files delivered electronically.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* =========================================================
          3. WHAT'S INCLUDED: ONE PACKAGE. SIX CORE AREAS.
          ========================================================= */}
      <section id="included" className="py-12 sm:py-24 border-b border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                What&apos;s Included
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white">
                One Package. Six Core Areas.
              </h2>
              <p className="text-xs sm:text-base text-slate-400 mt-2 font-normal">
                The major foundations needed to establish, present and operate your new business professionally.
              </p>
            </div>
          </Reveal>

          {/* 6 Core Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {inclusions.map((item, idx) => (
              <Reveal key={idx} type="up" delay={idx * 80} duration={0.8}>
                <HoverCard>
                  <article className="p-5 sm:p-7 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 shadow-xl text-left h-full flex flex-col justify-between transition-all">
                    <div>
                      <span className="text-2xl sm:text-3xl font-black text-[#FDC902]/40 block mb-2 font-mono">
                        {item.num}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-normal leading-relaxed">
                        {item.subtitle}
                      </p>
                      <div className="w-full h-px bg-slate-800 my-4" />
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                        {item.items.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#FDC902] shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </HoverCard>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          4. VISUAL DELIVERABLES & 21-DAY EXECUTION ROADMAP
          ========================================================= */}
      <section className="py-12 sm:py-24 bg-[#070b13] border-b border-slate-800 relative overflow-hidden">
        {/* Ambient Skyline Background */}
        <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
          <Image
            src="/images/bg-corporate-skyline.jpg"
            alt="Corporate Skyline Background"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Deliverables Showcase
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white">
                Engineered for Corporate Excellence
              </h2>
              <p className="text-xs sm:text-base text-slate-400 mt-2 font-normal">
                You provide your identification and company goals. Harrison Mosco delivers a fully functioning, legally protected commercial enterprise.
              </p>
            </div>
          </Reveal>

          {/* 3 Showcase Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Reveal type="left" delay={100} duration={0.8}>
              <div className="rounded-3xl bg-[#0f172a] border border-slate-800 overflow-hidden shadow-2xl space-y-3 sm:space-y-4">
                <div className="relative h-44 sm:h-52 w-full">
                  <Image
                    src="/images/executive-boardroom.jpg"
                    alt="Corporate Brand Identity Deliverables"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-[#FDC902] bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-[#FDC902]/30 backdrop-blur-sm">
                    Visual Identity
                  </span>
                </div>
                <div className="p-4 sm:p-6 pt-0 space-y-1.5 text-left">
                  <h4 className="text-base sm:text-lg font-black text-white">Executive Brand System</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Logo suite, 12-page corporate profile, letterheads, business cards, and official staff IDs.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal type="up" delay={200} duration={0.8}>
              <div className="rounded-3xl bg-[#0f172a] border border-slate-800 overflow-hidden shadow-2xl space-y-3 sm:space-y-4">
                <div className="relative h-44 sm:h-52 w-full">
                  <Image
                    src="/images/automated-invoicing-desk.jpg"
                    alt="Live Automated Invoicing and Billing Operations"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-emerald-400 bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-sm">
                    Automated Operations
                  </span>
                </div>
                <div className="p-4 sm:p-6 pt-0 space-y-1.5 text-left">
                  <h4 className="text-base sm:text-lg font-black text-white">Automated WhatsApp Receipts</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Real-time payment triggers that issue branded customer receipts directly to WhatsApp and email in seconds.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal type="right" delay={300} duration={0.8}>
              <div className="rounded-3xl bg-[#0f172a] border border-slate-800 overflow-hidden shadow-2xl space-y-3 sm:space-y-4">
                <div className="relative h-44 sm:h-52 w-full">
                  <Image
                    src="/images/cac-operations-team.jpg"
                    alt="Enterprise Corporate Legal and SCUML Protection"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase text-[#FDC902] bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-[#FDC902]/30 backdrop-blur-sm">
                    Statutory Protection
                  </span>
                </div>
                <div className="p-4 sm:p-6 pt-0 space-y-1.5 text-left">
                  <h4 className="text-base sm:text-lg font-black text-white">SCUML, Trademark &amp; CAC</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Anti-money laundering clearance, nationwide trademark ownership, and certified limited company incorporation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 21-Day Execution Roadmap */}
          <Reveal type="scale" delay={300} duration={0.8}>
            <div className="max-w-5xl mx-auto p-5 sm:p-8 lg:p-10 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl text-left">
              <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Project Schedule
              </span>
              <h3 className="text-lg sm:text-2xl font-black text-white mb-4">
                The 21-Day Coordinated Launch Roadmap
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-2">
                <div className="p-4 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 1 to 5</strong>
                  <span className="text-[#FDC902] font-bold block mt-1 text-xs">CAC Incorporation</span>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 font-normal leading-relaxed">
                    Name reservation, approved certificate, and certified MEMART.
                  </p>
                </div>
                <div className="p-4 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 6 to 10</strong>
                  <span className="text-[#FDC902] font-bold block mt-1 text-xs">SCUML &amp; Trademark</span>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 font-normal leading-relaxed">
                    EFCC/SCUML compliance and brand trademark filing.
                  </p>
                </div>
                <div className="p-4 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 11 to 16</strong>
                  <span className="text-[#FDC902] font-bold block mt-1 text-xs">Branding &amp; Profile</span>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 font-normal leading-relaxed">
                    Executive brand manual and 12-page corporate company profile.
                  </p>
                </div>
                <div className="p-4 bg-[#0a0e17] rounded-2xl border border-slate-800">
                  <strong className="text-white block text-sm sm:text-base font-black">Days 17 to 21</strong>
                  <span className="text-emerald-400 font-bold block mt-1 text-xs">Website &amp; Handover</span>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 font-normal leading-relaxed">
                    Corporate web platform deployment and automated billing system.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* =========================================================
          5. TRUST FACTORS: PHYSICAL OFFICE & CLIENT REVIEWS
          ========================================================= */}
      <section className="py-12 sm:py-20 border-b border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Physical HQ & Regional Contact Centres (7 cols) */}
            <div className="lg:col-span-7">
              <Reveal type="up" duration={0.7}>
                <article className="p-6 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl text-left space-y-4">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902] block">
                    Trust Factors
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-white">
                    Head Office &amp; Operational HQ
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    1st Floor, RockVille Place, Opp. Suntaal, SARS Road, Port Harcourt, Rivers State.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    Customers can complete everything online, while our physical presence gives extra confidence to first-time customers across Nigeria and the diaspora.
                  </p>

                  <div className="pt-2 space-y-2">
                    <span className="text-xs font-bold text-slate-300 block mb-1">
                      Regional Contact Centres:
                    </span>
                    <div className="space-y-2">
                      {contactCentres.map((centre, cIdx) => (
                        <details
                          key={cIdx}
                          className="group rounded-xl bg-[#0a0e17] border border-slate-800 p-3 text-xs text-slate-300 cursor-pointer transition-all"
                        >
                          <summary className="font-bold text-white flex items-center justify-between list-none">
                            <span className="flex items-center gap-2">
                              <MapPin className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
                              {centre.name}
                            </span>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-open:rotate-180 transition-transform" />
                          </summary>
                          <p className="mt-2 pl-5 text-[11px] sm:text-xs text-slate-400 leading-relaxed font-normal">
                            {centre.address}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* Client Reviews (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <Reveal type="up" delay={100} duration={0.7}>
                <article className="p-5 sm:p-7 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl text-left space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] sm:text-xs font-black text-slate-400 ml-1.5 uppercase">5-Star Review</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal italic">
                    &ldquo;It is heartwarming to receive this. One word for you and your team: you are not only experts at your work, you are also excellent at building relationships with customers.&rdquo;
                  </p>
                  <div className="pt-2 border-t border-slate-800/80">
                    <strong className="text-white block text-xs sm:text-sm font-black">The Jolliest</strong>
                    <span className="text-[11px] text-slate-400 font-normal">Phonics Literacy Links</span>
                  </div>
                </article>
              </Reveal>

              <Reveal type="up" delay={200} duration={0.7}>
                <article className="p-5 sm:p-7 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-xl text-left space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] sm:text-xs font-black text-slate-400 ml-1.5 uppercase">5-Star Review</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal italic">
                    &ldquo;My experience with Harrison Mosco was excellent. I discovered the company through an online ad, asked questions, did my research, and confirmed they are a real and trusted team.&rdquo;
                  </p>
                  <div className="pt-2 border-t border-slate-800/80">
                    <strong className="text-white block text-xs sm:text-sm font-black">AONE</strong>
                    <span className="text-[11px] text-slate-400 font-normal">Abor Fanen Global Service Limited</span>
                  </div>
                </article>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          6. DIRECT ONBOARDING APPLICATION FORM (#application)
          ========================================================= */}
      <section id="application" className="py-12 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Form Intro & Trust Badges */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-left">
              <Reveal type="down" duration={0.6}>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902] block">
                  Get Started
                </span>
              </Reveal>

              <Reveal type="up" delay={150} duration={0.8}>
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-snug">
                  Tell us about your business.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mt-2">
                  Complete the details below and our Business Launch Team will review your request and contact you directly.
                </p>
              </Reveal>

              {/* Trust Row Badges */}
              <Reveal type="up" delay={300} duration={0.8}>
                <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] sm:text-xs font-bold text-slate-300">
                  <span className="px-3 py-1.5 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FDC902]" />
                    One Team
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    Dedicated Support
                  </span>
                  <span className="px-3 py-1.5 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#FDC902]" />
                    Secure Submission
                  </span>
                </div>
              </Reveal>

              {/* Instant WhatsApp Continuity Box */}
              <Reveal type="up" delay={400} duration={0.8}>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0f172a]/80 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-white block">Prefer direct onboarding?</span>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-normal">
                    You can also initiate your launch directly with our legal concierge desk on WhatsApp.
                  </p>
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20ready%20to%20start%20the%20Ultimate%20Nigeria%20Business%20Launch%20Package%20(NGN%201%2C000%2C000)."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-auto inline-flex items-center gap-2 text-xs font-black text-[#FDC902] hover:underline pt-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Chat with Lead Specialist (+234 813 709 2154)
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: The Interactive Intake Form */}
            <div className="lg:col-span-7">
              <Reveal type="scale" delay={200} duration={0.8}>
                <div className="p-5 sm:p-8 rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl text-left">
                  {formSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-white">
                        Application Received Successfully
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-[#FDC902]">{formData.fullName}</strong>. Our Business Launch Team is reviewing your submission for <strong className="text-white">{formData.businessName || "your enterprise"}</strong>.
                      </p>
                      <div className="pt-3">
                        <a
                          href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20just%20submitted%20my%20application%20for%20the%20Ultimate%20Business%20Launch%20Package%20for%20${encodeURIComponent(formData.businessName || formData.fullName)}.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-auto inline-flex items-center justify-center px-5 py-2.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl gap-2 transition-all"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Continue Conversation on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <label className="block text-left space-y-1">
                          <span className="text-[11px] sm:text-xs font-bold text-slate-300">
                            Full Name <span className="text-amber-400">*</span>
                          </span>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="e.g. Chukwuemeka Adebayo"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FDC902]"
                          />
                        </label>

                        <label className="block text-left space-y-1">
                          <span className="text-[11px] sm:text-xs font-bold text-slate-300">
                            Proposed Business / Company Name <span className="text-amber-400">*</span>
                          </span>
                          <input
                            type="text"
                            name="businessName"
                            required
                            value={formData.businessName}
                            onChange={handleInputChange}
                            placeholder="e.g. Zenith Automations Ltd"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FDC902]"
                          />
                        </label>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <label className="block text-left space-y-1">
                          <span className="text-[11px] sm:text-xs font-bold text-slate-300">
                            Email Address <span className="text-amber-400">*</span>
                          </span>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="director@example.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FDC902]"
                          />
                        </label>

                        <label className="block text-left space-y-1">
                          <span className="text-[11px] sm:text-xs font-bold text-slate-300">
                            Phone / WhatsApp Number <span className="text-amber-400">*</span>
                          </span>
                          <div className="flex gap-2">
                            <select
                              name="phoneCountryCode"
                              value={formData.phoneCountryCode}
                              onChange={handleInputChange}
                              className="px-2.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FDC902]"
                            >
                              <option value="+234">🇳🇬 +234</option>
                              <option value="+44">🇬🇧 +44</option>
                              <option value="+1">🇺🇸 +1</option>
                              <option value="+1">🇨🇦 +1</option>
                              <option value="+233">🇬🇭 +233</option>
                              <option value="+27">🇿🇦 +27</option>
                              <option value="+971">🇦🇪 +971</option>
                            </select>
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="813 709 2154"
                              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FDC902]"
                            />
                          </div>
                        </label>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <label className="block text-left space-y-1">
                          <span className="text-[11px] sm:text-xs font-bold text-slate-300">
                            Business Stage <span className="text-amber-400">*</span>
                          </span>
                          <select
                            name="businessStage"
                            value={formData.businessStage}
                            onChange={handleInputChange}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FDC902]"
                          >
                            <option value="Idea Stage">Idea Stage</option>
                            <option value="Newly Registered">Newly Registered</option>
                            <option value="Existing Business">Existing Business</option>
                          </select>
                        </label>

                        <label className="block text-left space-y-1">
                          <span className="text-[11px] sm:text-xs font-bold text-slate-300">
                            Primary Goal <span className="text-amber-400">*</span>
                          </span>
                          <select
                            name="primaryGoal"
                            value={formData.primaryGoal}
                            onChange={handleInputChange}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-[#FDC902]"
                          >
                            <option value="Launch New Business">Launch New Business</option>
                            <option value="Build Professional Brand">Build Professional Brand</option>
                            <option value="Generate More Customers">Generate More Customers</option>
                            <option value="Expand Existing Business">Expand Existing Business</option>
                          </select>
                        </label>
                      </div>

                      <label className="block text-left space-y-1">
                        <span className="text-[11px] sm:text-xs font-bold text-slate-300">
                          Additional Inquiries / Project Details
                        </span>
                        <textarea
                          name="projectDetails"
                          rows={3}
                          value={formData.projectDetails}
                          onChange={handleInputChange}
                          placeholder="Tell us anything important about your business goals, timeline, or special requirements."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#0a0e17] border border-slate-700 text-white text-xs sm:text-sm placeholder-slate-500 focus:outline-none focus:border-[#FDC902]"
                        />
                      </label>

                      <div className="pt-2">
                        <label className="flex items-start gap-2.5 text-left cursor-pointer">
                          <input
                            type="checkbox"
                            name="termsConsent"
                            required
                            checked={formData.termsConsent}
                            onChange={handleInputChange}
                            className="mt-0.5 rounded border-slate-700 text-[#FDC902] focus:ring-[#FDC902]"
                          />
                          <span className="text-[11px] sm:text-xs text-slate-300 font-normal">
                            I have read and agree to the{" "}
                            <span className="text-[#FDC902] underline">Terms of Service</span> and{" "}
                            <span className="text-[#FDC902] underline">Privacy Policy</span>.
                          </span>
                        </label>
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-auto inline-flex items-center justify-center px-6 py-3 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl shadow-[0_8px_25px_rgba(253,201,2,0.25)] transition-all gap-2"
                        >
                          <Send className="w-4 h-4 shrink-0" />
                          <span>{isSubmitting ? "Submitting Application..." : "Submit Application"}</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

