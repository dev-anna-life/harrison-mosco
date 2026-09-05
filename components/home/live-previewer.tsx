"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, FileText, CheckCircle2, ArrowRight, Download, Phone } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { printDigitalReceipt } from "@/lib/pdf-generator";

export function LivePreviewer() {
  const [companyName, setCompanyName] = useState("Apex Global Technologies");
  const [activeTab, setActiveTab] = useState<"certificate" | "receipt">("certificate");

  const displayName = companyName.trim() || "Your Proposed Company";
  const displayLimitedName =
    displayName.toLowerCase().endsWith("ltd") || displayName.toLowerCase().endsWith("limited")
      ? displayName
      : `${displayName} Ltd`;

  const whatsappMessage = `Hello Harrison Mosco, I just previewed my company name "${displayLimitedName}" on your website. I want to check its CAC availability and start my registration.`;
  const whatsappUrl = `https://wa.me/2348137092154?text=${encodeURIComponent(whatsappMessage)}`;

  const handleDownloadCertificatePDF = () => {
    printDigitalReceipt({
      reference: "CAC-PREVIEW-2026",
      companyName: displayLimitedName,
      packageType: "Limited Company",
      shareCapitalMillions: 1,
      directorCount: 2,
      totalAmount: 100000,
      formattedTotal: "NGN 100,000",
    });
  };

  return (
    <section className="py-16 sm:py-28 bg-[#060910] border-y border-slate-800 relative overflow-hidden text-white">
      <div className="glow-orb w-[500px] h-[500px] bg-[#FDC902]/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal type="up" duration={0.8}>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[11px] sm:text-xs font-black uppercase tracking-wider mb-3 sm:mb-4">
              Interactive Mockup Generator
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Preview Your Entity Before Starting Your Filing
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
              Enter your proposed business name below to see how your verified CAC certificate of incorporation
              and automated billing invoice will look upon delivery.
            </p>

            {/* Input */}
            <div className="mt-6 sm:mt-10 max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter company name"
                  className="w-full px-4 py-3.5 sm:px-7 sm:py-5 bg-[#0e1626] border-2 border-slate-700 focus:border-[#FDC902] rounded-2xl text-white text-base sm:text-2xl font-black placeholder:text-slate-500 shadow-xl focus:outline-none transition-all pr-24 sm:pr-32"
                  maxLength={60}
                />
                <span className="absolute right-2.5 sm:right-5 text-[9px] sm:text-xs font-black text-[#FDC902] bg-slate-900/90 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-700 uppercase tracking-wider">
                  Live Preview
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 text-left mt-2 pl-2 font-medium">
                Note: CAC statutory guidelines require corporate names to be distinctive and conclude with Limited or Ltd.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Mockup Box */}
        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col xs:flex-row justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <button
              onClick={() => setActiveTab("certificate")}
              className={`w-full xs:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-all flex items-center justify-center gap-2 ${
                activeTab === "certificate"
                  ? "bg-[#FDC902] text-slate-950 shadow-[0_4px_25px_rgba(253,201,2,0.3)]"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Official CAC Certificate</span>
            </button>
            <button
              onClick={() => setActiveTab("receipt")}
              className={`w-full xs:w-auto px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-base font-black transition-all flex items-center justify-center gap-2 ${
                activeTab === "receipt"
                  ? "bg-[#FDC902] text-slate-950 shadow-[0_4px_25px_rgba(253,201,2,0.3)]"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Automated Receipt</span>
            </button>
          </div>

          {/* Certificate View */}
          {activeTab === "certificate" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[#fcfaf4] text-slate-950 p-5 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl border-2 sm:border-8 border-[#e2d5b6] shadow-2xl relative font-serif"
            >
              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
                <div className="w-48 h-48 sm:w-80 sm:h-80 rounded-full border-4 sm:border-8 border-slate-900 flex items-center justify-center font-sans text-xl sm:text-5xl font-black text-center p-3">
                  FEDERAL REPUBLIC OF NIGERIA
                </div>
              </div>

              {/* Certificate Header */}
              <div className="text-center pb-4 sm:pb-8 border-b-2 border-slate-300">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full bg-emerald-800 flex items-center justify-center text-white font-sans font-bold text-xs sm:text-sm shadow mb-2 sm:mb-3">
                  CAC
                </div>
                <h3 className="text-base sm:text-2xl font-bold tracking-widest uppercase text-slate-950">
                  Federal Republic of Nigeria
                </h3>
                <p className="text-[10px] sm:text-base font-semibold tracking-widest text-slate-700 uppercase mt-0.5 font-sans">
                  Corporate Affairs Commission
                </p>
                <div className="inline-block mt-2 sm:mt-3 px-2.5 py-0.5 sm:px-3 sm:py-1 bg-amber-100 border border-amber-300 rounded text-[10px] sm:text-xs font-mono font-bold text-slate-900">
                  RC: 9121623 • CERTIFICATE OF INCORPORATION
                </div>
              </div>

              {/* Certificate Body */}
              <div className="py-6 sm:py-10 text-center space-y-3 sm:space-y-5 font-sans">
                <p className="text-xs sm:text-lg text-slate-700 italic font-serif">
                  This is to certify that
                </p>
                <div className="py-2.5 px-4 sm:py-4 sm:px-8 bg-amber-50 rounded-xl sm:rounded-2xl border border-amber-200 inline-block max-w-full shadow-sm">
                  <h4 className="text-lg sm:text-3xl lg:text-4xl font-black uppercase text-slate-950 tracking-wide underline decoration-[#FDC902] underline-offset-4 sm:underline-offset-8 break-words">
                    {displayLimitedName}
                  </h4>
                </div>
                <p className="text-[11px] sm:text-base text-slate-800 leading-relaxed max-w-2xl mx-auto font-normal">
                  is this day incorporated under the Companies and Allied Matters Act 2020 and that the Company is Limited by Shares with authorized capital of NGN 1,000,000.
                </p>
              </div>

              {/* Signatures */}
              <div className="pt-4 sm:pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 text-xs sm:text-sm text-slate-700 font-sans text-center sm:text-left">
                <div>
                  <span className="block text-[10px] sm:text-xs text-slate-500 font-medium">Accredited Filing Agent:</span>
                  <strong className="block text-slate-950 font-black text-xs sm:text-base">Harrison Mosco Legal Desk</strong>
                  <span className="text-[9px] sm:text-xs text-emerald-800 font-bold">Certified True Copy Available</span>
                </div>
                <div className="text-center">
                  <div className="w-20 sm:w-28 h-5 sm:h-8 border-b-2 border-slate-700 mx-auto mb-1 flex items-center justify-center italic text-slate-500 text-[9px] sm:text-xs font-mono">
                    [Digital Seal]
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-900">Registrar General CAC</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Receipt View */}
          {activeTab === "receipt" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0f172a] p-5 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-slate-700 shadow-2xl text-white font-sans"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-8 border-b border-slate-800 gap-3">
                <div>
                  <span className="text-[10px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest bg-[#FDC902]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg border border-[#FDC902]/30">
                    Automated Invoicing Output
                  </span>
                  <h3 className="text-lg sm:text-3xl font-black text-white mt-2 sm:mt-3 break-words">
                    {displayLimitedName}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-slate-400 mt-0.5">Digital Billing &amp; Payment Confirmation</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] sm:text-xs text-slate-400 block font-medium">Receipt Ref:</span>
                  <div className="font-mono font-black text-sm sm:text-lg text-[#FDC902]">HM-AUTO-2026</div>
                </div>
              </div>

              <div className="py-4 sm:py-8 space-y-2.5 sm:space-y-4 text-xs sm:text-base">
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300 font-medium">CAC Limited Incorporation</span>
                  <span className="font-black text-white">NGN 60,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300 font-medium">Branding &amp; MEMART</span>
                  <span className="font-black text-white">NGN 40,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-800">
                  <span className="text-slate-300 font-medium">Automated System Integration</span>
                  <span className="font-black text-emerald-400">Included in Setup</span>
                </div>
                <div className="flex justify-between py-3 border-t border-slate-700 text-sm sm:text-xl font-bold">
                  <span className="text-white font-black">Total Invoice Value:</span>
                  <span className="text-[#FDC902] text-lg sm:text-3xl font-black">NGN 100,000</span>
                </div>
              </div>

              <p className="text-[11px] sm:text-sm text-slate-400 italic leading-relaxed">
                When your customers make payments, our system automatically generates this digital receipt and delivers it to their WhatsApp and email immediately.
              </p>
            </motion.div>
          )}

          {/* Action CTAs & Download Option */}
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/limited#application"
              className="w-full sm:w-auto px-6 sm:px-10 py-3.5 sm:py-4 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-base rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgba(253,201,2,0.3)] transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Register &quot;{displayLimitedName}&quot; Now</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <button
              onClick={handleDownloadCertificatePDF}
              className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/50 text-white font-bold text-xs sm:text-base rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4 text-[#FDC902]" />
              <span>Download Preview PDF</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-xs sm:text-base rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Verify on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
