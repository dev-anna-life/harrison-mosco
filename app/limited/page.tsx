"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  UserPlus,
  Trash2,
  Lock,
  ArrowRight,
  Phone,
  Clock,
  FileCheck,
  CreditCard,
  Download,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import confetti from "canvas-confetti";
import {
  calculateLimitedCompanyPrice,
  LimitedPackageType,
  formatNGN,
} from "@/lib/pricing-engine";
import { NIGERIA_STATES_AND_LGAS, NIGERIAN_STATES } from "@/lib/nigeria-data";
import { DigitalReceipt } from "@/components/shared/digital-receipt";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";
import { triggerPaystackCheckout } from "@/lib/paystack";
import { printDigitalReceipt } from "@/lib/pdf-generator";

interface DirectorFormState {
  firstName: string;
  surname: string;
  otherNames: string;
  dob: string;
  gender: string;
  sharePercentage: number;
  email: string;
  phoneCountryCode: string;
  phone: string;
  state: string;
  lga: string;
  city: string;
  address: string;
  idType: string;
  idNumber: string;
}

const INITIAL_DIRECTOR: DirectorFormState = {
  firstName: "",
  surname: "",
  otherNames: "",
  dob: "",
  gender: "Male",
  sharePercentage: 100,
  email: "",
  phoneCountryCode: "+234",
  phone: "",
  state: "Lagos",
  lga: "Ikeja",
  city: "Ikeja",
  address: "",
  idType: "NIN",
  idNumber: "",
};

export default function LimitedCompanyPage() {
  const [packageChoice, setPackageChoice] = useState<LimitedPackageType>("Pro");
  const [shareCapitalMillions, setShareCapitalMillions] = useState<number>(1);
  const [isOutsourcing, setIsOutsourcing] = useState<boolean>(false);
  const [includeAiVideo, setIncludeAiVideo] = useState<boolean>(false);
  const [includeAutomation, setIncludeAutomation] = useState<boolean>(true);

  // Proposed Names
  const [proposedName1, setProposedName1] = useState("");
  const [proposedName2, setProposedName2] = useState("");
  const [businessActivity, setBusinessActivity] = useState("");

  // B2B Outsourcing Billing
  const [billingName, setBillingName] = useState("");
  const [billingEmail, setBillingEmail] = useState("");
  const [billingPhone, setBillingPhone] = useState("");
  const [billingBusinessName, setBillingBusinessName] = useState("");

  // Directors Array
  const [directors, setDirectors] = useState<DirectorFormState[]>([INITIAL_DIRECTOR]);
  const [termsAccepted, setTermsAccepted] = useState(true);

  // Payment Options & State
  const [paymentMethod, setPaymentMethod] = useState<"PAYSTACK" | "TRANSFER">("PAYSTACK");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrderRef, setSubmittedOrderRef] = useState<string | null>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Price Calculation
  const pricing = useMemo(() => {
    return calculateLimitedCompanyPrice({
      packageType: packageChoice,
      shareCapitalMillions,
      directorCount: directors.length,
      includeAiVideo,
      includeAutomatedInvoicing: includeAutomation,
    });
  }, [packageChoice, shareCapitalMillions, directors.length, includeAiVideo, includeAutomation]);

  // Share percentage total
  const totalSharePercentage = useMemo(() => {
    return directors.reduce((sum, d) => sum + (Number(d.sharePercentage) || 0), 0);
  }, [directors]);

  // Director handlers
  const handleAddDirector = () => {
    if (directors.length >= 10) return;
    const remainingShare = Math.max(0, 100 - totalSharePercentage);
    setDirectors([
      ...directors,
      {
        ...INITIAL_DIRECTOR,
        sharePercentage: remainingShare > 0 ? remainingShare : 10,
      },
    ]);
  };

  const handleRemoveDirector = (index: number) => {
    if (directors.length <= 1) return;
    setDirectors(directors.filter((_, i) => i !== index));
  };

  const handleUpdateDirector = (index: number, field: keyof DirectorFormState, value: any) => {
    const updated = [...directors];
    updated[index] = { ...updated[index], [field]: value };

    if (field === "state") {
      const stateLgas = NIGERIA_STATES_AND_LGAS[value] || [];
      updated[index].lga = stateLgas[0] || "";
    }

    setDirectors(updated);
  };

  // Launch Paystack modal for a given reference
  const launchPaystackModal = (ref: string) => {
    const customerEmail = directors[0].email || billingEmail || "customer@example.com";
    const customerName = `${directors[0].firstName} ${directors[0].surname}`.trim() || billingName || "Founder";
    const company = proposedName1 ? `${proposedName1} Ltd` : "Proposed Company Ltd";

    triggerPaystackCheckout({
      email: customerEmail,
      amountNGN: pricing.totalPayable,
      reference: ref,
      customerName,
      companyName: company,
      onSuccess: async (payRef) => {
        try {
          await fetch(`/api/paystack/verify?reference=${encodeURIComponent(payRef)}`);
        } catch (vErr) {
          console.warn("Verification ping:", vErr);
        }
        setPaymentConfirmed(true);
        try {
          confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        } catch (cErr) {}
      },
      onClose: () => {
        // User closed modal
      },
      onError: (err) => {
        setErrorMessage(err || "Paystack initialization failed.");
      },
    });
  };

  // Submit
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!proposedName1 || !proposedName2) {
      setErrorMessage("Please provide both Option 1 and Option 2 for your proposed company name.");
      return;
    }

    if (Math.abs(totalSharePercentage - 100) > 0.01) {
      setErrorMessage(
        `Total director share allocation must equal exactly 100%. Current sum: ${totalSharePercentage}%`
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageChoice,
          shareCapitalMillions,
          isOutsourcing,
          billingName,
          billingEmail,
          billingPhone,
          billingBusinessName,
          proposedName1,
          proposedName2,
          businessActivity,
          directors,
          includeAiVideo,
          includeAutomatedInvoicing: includeAutomation,
          termsConsent: termsAccepted,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit order");
      }

      setSubmittedOrderRef(data.reference);

      // Trigger Paystack if selected
      if (paymentMethod === "PAYSTACK") {
        launchPaystackModal(data.reference);
      }

      window.scrollTo({ top: 350, behavior: "smooth" });
    } catch (err: any) {
      setErrorMessage(err.message || "Failed to submit order. Please check your parameters.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 right-0" />
      <div className="glow-orb w-[500px] h-[500px] bg-emerald-500/8 top-1/2 left-0" />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 border-b border-slate-800 relative z-10 overflow-hidden">
        {/* Ambient Corporate Skyline Background Texture */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/images/bg-corporate-skyline.jpg"
            alt="Corporate Skyline Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 via-[#0a0e17]/70 to-[#0a0e17]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <Reveal type="left" duration={0.8} className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-[#FDC902]" />
                <span>CAC Corporate Affairs Commission Accredited Desk</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight">
                Limited Company (Ltd) Registration
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                Designed for Nigerian founders, diaspora entrepreneurs, and corporate bodies who require verified incorporation,
                shareholding documentation, corporate tax setup, and brand assets under one coordinated legal desk.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#packages"
                  className="px-8 py-4 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-2xl text-sm sm:text-base shadow-[0_12px_30px_rgba(253,201,2,0.3)] transition-all"
                >
                  View 3 Packages
                </a>
                <a
                  href="#application"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/50 text-white font-bold rounded-2xl text-sm sm:text-base transition-all"
                >
                  Proceed to Application
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-bold text-slate-300">
                <span className="flex items-center gap-2 text-[#FDC902]">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902]" /> Official Status Report Included
                </span>
                <span className="flex items-center gap-2 text-[#FDC902]">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902]" /> NRS Corporate Tax ID (TIN)
                </span>
                <span className="flex items-center gap-2 text-[#FDC902]">
                  <CheckCircle2 className="w-5 h-5 text-[#FDC902]" /> Inclusive of 7.5% VAT
                </span>
              </div>
            </Reveal>

            {/* Right Card (Uncropped Leadership Framing) */}
            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-5">
              <HoverCard>
                <div className="bg-[#0f172a] rounded-3xl border border-slate-800 hover:border-[#FDC902]/50 shadow-2xl overflow-hidden space-y-6">
                  <div className="relative h-60 sm:h-64 w-full">
                    <Image
                      src="/images/executive-office.jpg"
                      alt="Corporate Limited Company Filing"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent" />
                    <div className="absolute bottom-4 left-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-[#FDC902]/40 text-[#FDC902] text-xs font-black uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FDC902]" />
                      <span>Corporate Standard</span>
                    </div>
                  </div>

                  <div className="p-8 pt-0 space-y-4">
                    <h3 className="text-2xl font-black text-white leading-snug">
                      A Limited Company is mandatory for major contracts, corporate tenders, bank loans, and foreign investment.
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">
                      Choose Limited Company Registration if you require a formal separate legal corporate entity with allotted shares.
                      Delivered digitally as certified true PDF documents with official verification barcodes.
                    </p>
                    <div className="pt-3 border-t border-slate-800">
                      <Link
                        href="/launch"
                        className="text-sm font-black text-[#FDC902] hover:underline flex items-center gap-1.5"
                      >
                        <span>Need our NGN 1,000,000 Ultimate Launch Suite instead?</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fact Strip */}
      <section className="bg-[#060910] py-10 border-b border-slate-800 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            <div>
              <span className="text-slate-500 block uppercase font-bold text-xs">Starting Base</span>
              <strong className="text-xl sm:text-2xl font-black text-[#FDC902] mt-1 block">From NGN 60,000</strong>
              <p className="text-slate-400 text-xs mt-0.5">Starter, Pro, or Premium</p>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-bold text-xs">Included Capital</span>
              <strong className="text-xl sm:text-2xl font-black text-white mt-1 block">1M Shares + 2 Dirs</strong>
              <p className="text-slate-400 text-xs mt-0.5">Calculated automatically</p>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-bold text-xs">Turnaround Time</span>
              <strong className="text-xl sm:text-2xl font-black text-white mt-1 block">3 to 7 Days</strong>
              <p className="text-slate-400 text-xs mt-0.5">Working days via fast track</p>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-bold text-xs">Advisory Desk</span>
              <strong className="text-xl sm:text-2xl font-black text-white mt-1 block">Port Harcourt HQ</strong>
              <p className="text-slate-400 text-xs mt-0.5">Direct founder contact</p>
            </div>
            <div>
              <span className="text-slate-500 block uppercase font-bold text-xs">Certified Delivery</span>
              <strong className="text-xl sm:text-2xl font-black text-emerald-400 mt-1 block">Digital Certified</strong>
              <p className="text-slate-400 text-xs mt-0.5">High resolution PDF files</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="packages" className="py-24 sm:py-32 bg-[#0a0e17] scroll-mt-28 sm:scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Transparent Package Options
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-1">
                Select Your Incorporation Package
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-3">
                Base fee covers NGN 1 Million authorized share capital and up to 2 directors. All statutory taxes included.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter */}
            <Reveal type="left" delay={150} duration={0.8}>
              <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 sm:p-10 flex flex-col justify-between transition-card hover:border-slate-700 shadow-xl h-full">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Starter Tier
                  </span>
                  <div className="text-4xl font-black text-white mt-3">NGN 60,000</div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-normal">
                    Core legal CAC registration documents and official Tax ID.
                  </p>

                  <div className="mt-8 space-y-3.5 text-sm sm:text-base text-slate-300 font-medium">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Official CAC Certificate of Incorporation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>CAC Status Report (Director Allocation)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Memorandum &amp; Articles (MEMART)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>NRS Corporate Tax Identification Number</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setPackageChoice("Starter");
                    document.getElementById("application")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-10 w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl text-sm transition-colors border border-slate-700"
                >
                  Select Starter Package
                </button>
              </div>
            </Reveal>

            {/* Pro - Featured Card */}
            <Reveal type="up" delay={250} duration={0.8}>
              <div className="bg-[#FDC902] text-slate-950 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(253,201,2,0.35)] relative transition-card scale-105 border-4 border-white/20 h-full">
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-950 text-[#FDC902] font-black text-xs tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </span>

                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-900">
                    Pro Package
                  </span>
                  <div className="text-4xl font-black text-slate-950 mt-3">NGN 100,000</div>
                  <p className="text-sm text-slate-900 mt-2 leading-relaxed font-semibold">
                    Incorporation, tax portal setup, plus complete corporate branding kit.
                  </p>

                  <div className="mt-8 space-y-3.5 text-sm sm:text-base text-slate-950 font-bold">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 shrink-0" />
                      <span>Everything in Starter (CAC, MEMART, TIN)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 shrink-0" />
                      <span>Tax Filing Account and Rev360 Setup</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 shrink-0" />
                      <span>Executive Corporate Logo and Guidelines</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 shrink-0" />
                      <span>Official Letterhead and Business Card Files</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-slate-950 shrink-0" />
                      <span>12-Page Corporate Profile Document (PDF)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setPackageChoice("Pro");
                    document.getElementById("application")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-10 w-full py-4 bg-slate-950 hover:bg-slate-900 text-white font-black rounded-xl text-sm transition-all shadow-xl"
                >
                  Select Pro Package (NGN 100,000)
                </button>
              </div>
            </Reveal>

            {/* Premium */}
            <Reveal type="right" delay={350} duration={0.8}>
              <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-8 sm:p-10 flex flex-col justify-between transition-card hover:border-slate-700 shadow-xl h-full">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Premium Tier
                  </span>
                  <div className="text-4xl font-black text-white mt-3">NGN 350,000</div>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed font-normal">
                    Everything in Pro plus custom single-page website and corporate emails.
                  </p>

                  <div className="mt-8 space-y-3.5 text-sm sm:text-base text-slate-300 font-medium">
                    <div className="flex items-center gap-3 text-white font-bold">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Everything in Pro (Full CAC and Branding)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Single-Page Responsive Corporate Website</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Custom Domain (.com / .ng) + SSL for One Year</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FDC902] shrink-0" />
                      <span>Corporate Email Accounts (e.g. info@yourname.ng)</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setPackageChoice("Premium");
                    document.getElementById("application")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-10 w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-xl text-sm transition-colors border border-slate-700"
                >
                  Select Premium Package
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Interactive Application Form & Live Receipt */}
      <section id="application" className="py-24 sm:py-32 bg-[#070b13] border-t border-slate-800 scroll-mt-28 sm:scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal type="up" duration={0.8}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-2">
                Application Desk
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mt-1">
                Order Your Limited Company Filing
              </h2>
              <p className="text-base sm:text-lg text-slate-300 mt-2">
                Enter your entity details and director allocations. Your invoice updates in real time on the right.
              </p>
            </div>
          </Reveal>

          {/* Success / Post-Submission Screen */}
          {submittedOrderRef ? (
            <div className="max-w-3xl mx-auto bg-[#0f172a] border-2 border-emerald-500/50 p-8 sm:p-12 rounded-3xl text-center space-y-7 shadow-2xl">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <span
                  className={`inline-block text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 ${
                    paymentConfirmed
                      ? "bg-emerald-500 text-slate-950 shadow-md"
                      : "bg-[#FDC902] text-slate-950"
                  }`}
                >
                  {paymentConfirmed
                    ? "PAYMENT VERIFIED • ORDER CONFIRMED"
                    : "APPLICATION SUBMITTED • AWAITING SETTLEMENT"}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white">
                  {paymentConfirmed
                    ? "CAC Filing Initiated Successfully!"
                    : "Registration Application Logged"}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed mt-2 max-w-xl mx-auto">
                  Your permanent order reference code is{" "}
                  <span className="font-mono font-black text-[#FDC902] bg-[#0a0e17] px-3 py-1 rounded-md border border-slate-700">
                    {submittedOrderRef}
                  </span>
                  . An automated digital dossier has been generated.
                </p>
              </div>

              {/* Real-time Order Summary Grid */}
              <div className="p-6 bg-[#0a0e17] rounded-2xl border border-slate-800 text-left grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Proposed Entity</span>
                  <strong className="text-white text-base font-black">{proposedName1} Ltd</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Package &amp; Capital</span>
                  <strong className="text-[#FDC902] text-base font-black">
                    {packageChoice} ({shareCapitalMillions}M Shares)
                  </strong>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Total Amount</span>
                  <strong className="text-white text-base font-black">{pricing.formattedTotal}</strong>
                </div>
                <div>
                  <span className="text-xs text-slate-500 uppercase font-bold block">Payment Status</span>
                  <strong
                    className={
                      paymentConfirmed
                        ? "text-emerald-400 text-base font-black flex items-center gap-1.5"
                        : "text-[#FDC902] text-base font-black flex items-center gap-1.5"
                    }
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>{paymentConfirmed ? "PAID IN FULL (Paystack)" : "Pending Payment"}</span>
                  </strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                {!paymentConfirmed && (
                  <button
                    type="button"
                    onClick={() => launchPaystackModal(submittedOrderRef)}
                    className="w-full sm:w-auto px-8 py-4 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-base transition-all shadow-[0_12px_30px_rgba(253,201,2,0.3)] flex items-center justify-center gap-2"
                  >
                    <CreditCard className="w-5 h-5" />
                    <span>Pay Online with Paystack (Test / Live)</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    printDigitalReceipt({
                      reference: submittedOrderRef,
                      customerName: `${directors[0].firstName} ${directors[0].surname}`,
                      companyName: `${proposedName1} Ltd`,
                      packageType: packageChoice,
                      shareCapitalMillions,
                      directorCount: directors.length,
                      totalAmount: pricing.totalPayable,
                      formattedTotal: pricing.formattedTotal,
                      paymentStatus: paymentConfirmed ? "PAID_CONFIRMED" : "PENDING_PAYMENT",
                    });
                  }}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-base transition-all border border-slate-600 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5 text-[#FDC902]" />
                  <span>Download Official {paymentConfirmed ? "Paid Receipt" : "Invoice"} PDF</span>
                </button>

                <Link
                  href={`/track?ref=${submittedOrderRef}`}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-base border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Clock className="w-5 h-5 text-[#FDC902]" />
                  <span>Track 5 Milestones Online</span>
                </Link>

                <a
                  href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20have%20submitted%20my%20Limited%20Company%20filing%20Ref%3A%20${submittedOrderRef}%20for%20${encodeURIComponent(
                    proposedName1
                  )}%20Ltd%20(${pricing.formattedTotal}).%20Payment%20Status%3A%20${
                    paymentConfirmed ? "PAID%20VIA%20PAYSTACK" : "DIRECT%20TRANSFER"
                  }.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-xl text-base transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Confirm on WhatsApp Desk &rarr;</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7 bg-[#0f172a] p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl">
                <form onSubmit={handleSubmitOrder} className="space-y-10">
                  {errorMessage && (
                    <div className="p-5 bg-rose-950/40 border border-rose-500/50 rounded-2xl text-rose-300 text-sm font-bold">
                      {errorMessage}
                    </div>
                  )}

                  {/* B2B Outsourcing Toggle */}
                  <div className="p-6 rounded-2xl bg-[#0a0e17] border border-slate-800 shadow-md">
                    <span className="block text-sm font-black text-white mb-3">
                      Are you the original business owner or an agent outsourcing this job to us?
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          !isOutsourcing
                            ? "bg-slate-900 border-[#FDC902] text-white font-black"
                            : "bg-[#0a0e17] border-slate-800 text-slate-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="outsourcing_toggle"
                          checked={!isOutsourcing}
                          onChange={() => setIsOutsourcing(false)}
                          className="w-4 h-4 text-[#FDC902] focus:ring-[#FDC902]"
                        />
                        <span>Original business owner</span>
                      </label>

                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          isOutsourcing
                            ? "bg-slate-900 border-[#FDC902] text-white font-black"
                            : "bg-[#0a0e17] border-slate-800 text-slate-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="outsourcing_toggle"
                          checked={isOutsourcing}
                          onChange={() => setIsOutsourcing(true)}
                          className="w-4 h-4 text-[#FDC902] focus:ring-[#FDC902]"
                        />
                        <span>Agent or lawyer outsourcing</span>
                      </label>
                    </div>

                    {isOutsourcing && (
                      <div className="mt-5 pt-5 border-t border-slate-800 space-y-4">
                        <div className="text-xs text-slate-400 font-semibold">
                          Agent Billing Details: We send the final invoice and confirmation directly to you so your client does not see the wholesale price.
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="Your Name (Agent or Firm)"
                            value={billingName}
                            onChange={(e) => setBillingName(e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                          <input
                            type="email"
                            placeholder="Your Billing Email"
                            value={billingEmail}
                            onChange={(e) => setBillingEmail(e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                          <input
                            type="tel"
                            placeholder="Your Phone Number"
                            value={billingPhone}
                            onChange={(e) => setBillingPhone(e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                          <input
                            type="text"
                            placeholder="Agency or Business Name"
                            value={billingBusinessName}
                            onChange={(e) => setBillingBusinessName(e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 1. Package & Capital */}
                  <div className="space-y-5">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider">
                      1. Package and Capital Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">Package Tier</label>
                        <select
                          value={packageChoice}
                          onChange={(e) => setPackageChoice(e.target.value as LimitedPackageType)}
                          className="w-full px-5 py-4 bg-[#0a0e17] border-2 border-slate-700 rounded-xl text-sm font-bold text-white focus:border-[#FDC902] focus:outline-none"
                        >
                          <option value="Starter">Starter Tier (NGN 60,000)</option>
                          <option value="Pro">Pro Package (NGN 100,000)</option>
                          <option value="Premium">Premium Package (NGN 350,000)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                          Share Capital (in Millions)
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          step="1"
                          value={shareCapitalMillions}
                          onChange={(e) => setShareCapitalMillions(Math.max(1, Number(e.target.value)))}
                          className="w-full px-5 py-4 bg-[#0a0e17] border-2 border-slate-700 rounded-xl text-sm font-bold text-white focus:border-[#FDC902] focus:outline-none"
                        />
                        <span className="text-xs text-slate-400 mt-1.5 block font-medium">
                          Base covers 1M shares. Additional capital: NGN 30,000 per 1M.
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-[#0a0e17] rounded-xl border border-slate-800 text-sm text-slate-300 font-mono font-bold">
                      {pricing.summaryText}
                    </div>
                  </div>

                  {/* 2. Proposed Names */}
                  <div className="space-y-5">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider">
                      2. Proposed Corporate Names
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                          Proposed Name (Option 1) *
                        </label>
                        <input
                          type="text"
                          required
                          value={proposedName1}
                          onChange={(e) => setProposedName1(e.target.value)}
                          placeholder="e.g. Apex Dynamics Ltd"
                          className="w-full px-5 py-4 bg-[#0a0e17] border-2 border-slate-700 rounded-xl text-sm sm:text-base font-bold text-white focus:border-[#FDC902] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                          Alternative Name (Option 2) *
                        </label>
                        <input
                          type="text"
                          required
                          value={proposedName2}
                          onChange={(e) => setProposedName2(e.target.value)}
                          placeholder="e.g. Apex Innovations Ltd"
                          className="w-full px-5 py-4 bg-[#0a0e17] border-2 border-slate-700 rounded-xl text-sm sm:text-base font-bold text-white focus:border-[#FDC902] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-300 mb-2">
                        Principal Nature of Business / Objectives *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={businessActivity}
                        onChange={(e) => setBusinessActivity(e.target.value)}
                        placeholder="Describe what your business will do (e.g. Haulage, agriculture, trading, software development)."
                        className="w-full px-5 py-4 bg-[#0a0e17] border-2 border-slate-700 rounded-xl text-sm sm:text-base text-white font-medium focus:border-[#FDC902] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* 3. Directors */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-black text-white uppercase tracking-wider">
                          3. Directors and Shareholders ({directors.length})
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          Base package includes up to two directors. Additional directors add NGN 5,000 each.
                        </p>
                      </div>
                      <span
                        className={`text-xs font-mono font-black px-3 py-1.5 rounded-lg ${
                          Math.abs(totalSharePercentage - 100) < 0.01
                            ? "bg-emerald-950/40 text-emerald-400 border border-emerald-500/40"
                            : "bg-rose-950/40 text-rose-400 border border-rose-500/40"
                        }`}
                      >
                        Total Shares: {totalSharePercentage}% / 100%
                      </span>
                    </div>

                    {directors.map((dir, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-5 shadow-md"
                      >
                        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                          <span className="text-sm font-black text-[#FDC902]">
                            Director {idx + 1}
                          </span>
                          {directors.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveDirector(idx)}
                              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1 font-bold"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span>Remove</span>
                            </button>
                          )}
                        </div>

                        {/* Name Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <input
                            type="text"
                            required
                            placeholder="First Name *"
                            value={dir.firstName}
                            onChange={(e) => handleUpdateDirector(idx, "firstName", e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                          <input
                            type="text"
                            required
                            placeholder="Surname *"
                            value={dir.surname}
                            onChange={(e) => handleUpdateDirector(idx, "surname", e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                          <input
                            type="text"
                            placeholder="Other Names"
                            value={dir.otherNames}
                            onChange={(e) => handleUpdateDirector(idx, "otherNames", e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                        </div>

                        {/* DOB, Gender, Share % */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-400 block mb-1">Date of Birth *</label>
                            <input
                              type="date"
                              required
                              value={dir.dob}
                              onChange={(e) => handleUpdateDirector(idx, "dob", e.target.value)}
                              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-400 block mb-1">Gender *</label>
                            <select
                              value={dir.gender}
                              onChange={(e) => handleUpdateDirector(idx, "gender", e.target.value)}
                              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-400 block mb-1">Share % (e.g. 50) *</label>
                            <input
                              type="number"
                              required
                              min="1"
                              max="100"
                              value={dir.sharePercentage}
                              onChange={(e) =>
                                handleUpdateDirector(idx, "sharePercentage", Number(e.target.value))
                              }
                              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-black"
                            />
                          </div>
                        </div>

                        {/* Contact */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <input
                            type="email"
                            required
                            placeholder="Email Address *"
                            value={dir.email}
                            onChange={(e) => handleUpdateDirector(idx, "email", e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                          <input
                            type="tel"
                            required
                            placeholder="Phone Number (e.g. 08137092154) *"
                            value={dir.phone}
                            onChange={(e) => handleUpdateDirector(idx, "phone", e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          />
                        </div>

                        {/* Location Dropdowns */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          <div>
                            <label className="text-xs font-bold text-slate-400 block mb-1">State of Residence *</label>
                            <select
                              value={dir.state}
                              onChange={(e) => handleUpdateDirector(idx, "state", e.target.value)}
                              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                            >
                              {NIGERIAN_STATES.map((st) => (
                                <option key={st} value={st}>
                                  {st}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-400 block mb-1">Local Govt Area (LGA) *</label>
                            <select
                              value={dir.lga}
                              onChange={(e) => handleUpdateDirector(idx, "lga", e.target.value)}
                              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                            >
                              {(NIGERIA_STATES_AND_LGAS[dir.state] || []).map((lga) => (
                                <option key={lga} value={lga}>
                                  {lga}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-bold text-slate-400 block mb-1">City / Town *</label>
                            <input
                              type="text"
                              required
                              placeholder="City / Town"
                              value={dir.city}
                              onChange={(e) => handleUpdateDirector(idx, "city", e.target.value)}
                              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                            />
                          </div>
                        </div>

                        <input
                          type="text"
                          required
                          placeholder="Complete Residential Address (Street, Building, Flat) *"
                          value={dir.address}
                          onChange={(e) => handleUpdateDirector(idx, "address", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                        />

                        {/* ID Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <select
                            value={dir.idType}
                            onChange={(e) => handleUpdateDirector(idx, "idType", e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-medium"
                          >
                            <option value="NIN">National Identification Number (NIN)</option>
                            <option value="International Passport">International Passport</option>
                            <option value="Drivers License">Driver&apos;s License</option>
                            <option value="Voters Card">Voter&apos;s Card</option>
                          </select>
                          <input
                            type="text"
                            required
                            placeholder="Identification Number (11-digit NIN) *"
                            value={dir.idNumber}
                            onChange={(e) => handleUpdateDirector(idx, "idNumber", e.target.value)}
                            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white font-black"
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={handleAddDirector}
                      className="w-full py-4 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 text-[#FDC902] font-black text-sm rounded-2xl flex items-center justify-center gap-2 transition-all"
                    >
                      <UserPlus className="w-5 h-5" />
                      <span>Add Additional Director / Shareholder (+NGN 5,000 each)</span>
                    </button>
                  </div>

                  {/* 4. Add-ons */}
                  <div className="pt-5 border-t border-slate-800 space-y-4">
                    <span className="block text-sm font-black uppercase tracking-wider text-white">
                      4. High-Impact Add-ons
                    </span>

                    <label className="flex items-center justify-between p-5 rounded-2xl bg-[#0a0e17] border border-slate-800 cursor-pointer hover:border-[#FDC902]/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          checked={includeAiVideo}
                          onChange={(e) => setIncludeAiVideo(e.target.checked)}
                          className="w-5 h-5 rounded text-[#FDC902] focus:ring-[#FDC902] bg-slate-900 border-slate-700"
                        />
                        <div>
                          <span className="text-base font-black text-white block">
                            Branded AI Video Commercial (+NGN 45,000)
                          </span>
                          <span className="text-xs sm:text-sm text-slate-400">
                            Custom social media launch video produced by our dedicated media specialist.
                          </span>
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center justify-between p-5 rounded-2xl bg-[#0a0e17] border border-slate-800 cursor-pointer hover:border-emerald-500/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          checked={includeAutomation}
                          onChange={(e) => setIncludeAutomation(e.target.checked)}
                          className="w-5 h-5 rounded text-emerald-500 focus:ring-emerald-500 bg-slate-900 border-slate-700"
                        />
                        <div>
                          <span className="text-base font-black text-white block">
                            Automated Invoicing &amp; Receipt Engine (+NGN 35,000)
                          </span>
                          <span className="text-xs sm:text-sm text-slate-400">
                            End manual receipts. Automated WhatsApp and email receipts dispatched when clients pay.
                          </span>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* 5. Payment Method Selection */}
                  <div className="pt-5 border-t border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="block text-sm font-black uppercase tracking-wider text-white">
                        5. Preferred Payment Method
                      </span>
                      <span className="text-xs text-emerald-400 font-bold bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
                        Test Mode Active
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label
                        onClick={() => setPaymentMethod("PAYSTACK")}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                          paymentMethod === "PAYSTACK"
                            ? "bg-[#141d33] border-[#FDC902] text-white shadow-[0_4px_20px_rgba(253,201,2,0.2)]"
                            : "bg-[#0a0e17] border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment_choice"
                          checked={paymentMethod === "PAYSTACK"}
                          onChange={() => setPaymentMethod("PAYSTACK")}
                          className="mt-1 w-4 h-4 text-[#FDC902] focus:ring-[#FDC902]"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-black text-white">Paystack Online Gateway</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Pay with Cards, USSD, Bank Transfer, Apple Pay, or QR with automated instant receipting.
                          </p>
                        </div>
                      </label>

                      <label
                        onClick={() => setPaymentMethod("TRANSFER")}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-4 ${
                          paymentMethod === "TRANSFER"
                            ? "bg-[#141d33] border-[#FDC902] text-white shadow-[0_4px_20px_rgba(253,201,2,0.2)]"
                            : "bg-[#0a0e17] border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment_choice"
                          checked={paymentMethod === "TRANSFER"}
                          onChange={() => setPaymentMethod("TRANSFER")}
                          className="mt-1 w-4 h-4 text-[#FDC902] focus:ring-[#FDC902]"
                        />
                        <div>
                          <span className="text-base font-black text-white block">Direct Bank Transfer</span>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            Transfer directly to Harrison Mosco corporate account and confirm with our WhatsApp desk.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-6 border-t border-slate-800 space-y-5">
                    <label className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 cursor-pointer font-medium">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded text-[#FDC902] bg-slate-900 border-slate-700"
                      />
                      <span>
                        I confirm that the provided incorporation information is accurate and agree to the statutory compliance terms.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-base rounded-2xl shadow-[0_12px_35px_rgba(253,201,2,0.3)] transition-all flex items-center justify-center gap-2.5"
                    >
                      <CreditCard className="w-5 h-5" />
                      <span>
                        {isSubmitting
                          ? "Processing..."
                          : paymentMethod === "PAYSTACK"
                          ? `Pay Online with Paystack (${pricing.formattedTotal})`
                          : `Submit Application via Transfer (${pricing.formattedTotal})`}
                      </span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Real-Time Digital Receipt Sidebar */}
              <div className="lg:col-span-5 sticky top-28 space-y-6">
                <DigitalReceipt
                  packageType={packageChoice}
                  basePrice={pricing.basePrice}
                  shareCapitalMillions={shareCapitalMillions}
                  extraSharesCost={pricing.extraSharesCost}
                  directorCount={directors.length}
                  extraDirectorsCost={pricing.extraDirectorsCost}
                  aiVideoCost={pricing.aiVideoCost}
                  automatedInvoicingCost={pricing.automatedInvoicingCost}
                  totalPayable={pricing.totalPayable}
                  companyNamePreview={
                    proposedName1 ? `${proposedName1} Ltd` : "Your Proposed Company Ltd"
                  }
                />

                <div className="p-6 bg-[#0f172a] rounded-3xl border border-slate-800 text-sm text-slate-300 space-y-3 shadow-xl">
                  <span className="font-black text-white text-base block">Direct Founder Inquiry</span>
                  <p className="leading-relaxed">
                    Have a question before submitting? You can speak directly with Harrison Mosco on WhatsApp to verify proposed names and share structures.
                  </p>
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Harrison%2C%20I%20am%20reviewing%20the%20Limited%20Company%20page%20and%20need%20clarification."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FDC902] font-black hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Talk to Harrison on WhatsApp &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
