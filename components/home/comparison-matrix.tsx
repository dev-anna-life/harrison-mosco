"use client";

import React from "react";
import Image from "next/image";
import { X, Check, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function ComparisonMatrix() {
  const comparisons = [
    {
      feature: "CAC Name Reservation and Filing",
      traditional: "Three to four weeks of unpredictable delays, manual queries, and unreturned phone calls.",
      harrison: "Three to seven working days express filing with zero-rejection MEMART drafting.",
    },
    {
      feature: "Customer Invoicing and Receipts",
      traditional: "Writing manual paper receipts, losing track of transfers, and missing audit records.",
      harrison: "Automated digital receipts dispatched to client WhatsApp and email within two seconds of payment.",
    },
    {
      feature: "Launch Marketing and Media",
      traditional: "Hiring costly external video production crews or launching with no promotional video assets.",
      harrison: "Studio-grade marketing video commercials produced directly by our in-house media team.",
    },
    {
      feature: "Bank and Tax Compliance",
      traditional: "Corporate bank account restrictions after ninety days due to missing SCUML or TIN records.",
      harrison: "Integrated pre-configured SCUML, Tax ID, and Rev360 compliance from day one.",
    },
    {
      feature: "Original Documents Handover",
      traditional: "Faded photocopies delivered late with missing status reports.",
      harrison: "Original high-resolution digitally certified PDFs with permanent cloud backup.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#070b13] border-b border-slate-800 text-white relative overflow-hidden">
      {/* Corporate Skyline Ambient Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/images/bg-corporate-skyline.jpg"
          alt="Corporate Skyline"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070b13] via-[#070b13]/85 to-[#070b13]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal type="up" duration={0.8}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider mb-4">
              <Zap className="w-4 h-4" />
              <span>Operational Advantage</span>
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              The Difference Between Manual Filing and Automated Systems
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto">
              Compare standard traditional registration against Harrison Mosco&apos;s integrated legal and automated operations.
            </p>
          </div>
        </Reveal>

        <Reveal type="scale" delay={200} duration={0.8}>
          <div className="max-w-5xl mx-auto bg-[#0f172a] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              {/* Left: Traditional */}
              <div className="p-8 sm:p-12 bg-red-950/10">
                <div className="flex items-center gap-2.5 text-red-400 font-black text-sm uppercase tracking-wider mb-8">
                  <X className="w-5 h-5 text-red-500" />
                  <span>Traditional Roadside Agents</span>
                </div>
                <ul className="space-y-8">
                  {comparisons.map((c, i) => (
                    <li key={i} className="space-y-1.5">
                      <strong className="text-slate-200 block font-black text-lg">{c.feature}</strong>
                      <p className="text-slate-400 leading-relaxed text-base font-normal">{c.traditional}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Harrison Mosco */}
              <div className="p-8 sm:p-12 bg-emerald-950/10 border-t md:border-t-0 border-emerald-500/20">
                <div className="flex items-center gap-2.5 text-[#FDC902] font-black text-sm uppercase tracking-wider mb-8">
                  <Check className="w-5 h-5 text-[#FDC902]" />
                  <span>Harrison Mosco Platform</span>
                </div>
                <ul className="space-y-8">
                  {comparisons.map((c, i) => (
                    <li key={i} className="space-y-1.5">
                      <strong className="text-white block font-black text-lg">{c.feature}</strong>
                      <p className="text-slate-300 leading-relaxed text-base font-medium">{c.harrison}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="p-8 bg-[#0a0e17] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5 text-sm sm:text-base">
              <span className="text-slate-300 font-bold">
                Ready to launch your Nigerian business with modern infrastructure?
              </span>
              <a
                href="/limited"
                className="px-8 py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl transition-all shadow-[0_4px_20px_rgba(253,201,2,0.25)] text-sm"
              >
                Explore Limited Company Packages &rarr;
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
