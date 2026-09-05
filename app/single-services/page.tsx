"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  FileCheck,
  Building2,
  CreditCard,
  Lock,
} from "lucide-react";
import { formatNGN } from "@/lib/pricing-engine";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export default function SingleServicesPage() {
  const services = [
    {
      id: "scuml",
      title: "SCUML Compliance Certificate",
      category: "Banking Compliance",
      price: 60000,
      turnaround: "5 to 10 Working Days",
      description: "Official Special Control Unit Against Money Laundering (SCUML) certificate. Mandatory for corporate bank accounts for real estate, logistics, car dealerships, NGOs, and consultancy.",
      highlights: [
        "EFCC & NFIU verification filing",
        "Bank compliance guarantee",
        "Original digital certified PDF",
      ],
    },
    {
      id: "trademark",
      title: "Federal Trademark Filing",
      category: "Intellectual Property",
      price: 85000,
      turnaround: "7 to 14 Working Days",
      description: "Secure federal protection for your company name, slogan, or logo. Prevents competitors from copying or using your brand identity across Nigeria.",
      highlights: [
        "Ministry of Trade search & verification",
        "Official Acceptance Letter issue",
        "Class classification advisory",
      ],
    },
    {
      id: "trustees",
      title: "Incorporated Trustees (NGOs / Churches)",
      category: "Non-Profit Formation",
      price: 180000,
      turnaround: "14 to 28 Working Days",
      description: "Full registration for NGOs, charitable foundations, religious organizations, alumni associations, and clubs with newspaper publication management.",
      highlights: [
        "Constitution drafting & CAC approval",
        "Two national daily newspaper notices",
        "Status report and trustee allocation",
      ],
    },
    {
      id: "tax",
      title: "NRS Tax Portal Setup and Rev360",
      category: "Tax Compliance",
      price: 45000,
      turnaround: "2 to 4 Working Days",
      description: "Generation of NRS Corporate Tax Identification Number (TIN) and active registration on the state Rev360 portal for lawful operational standing.",
      highlights: [
        "Official TIN certificate issuance",
        "Rev360 state portal integration",
        "Annual filing profile preparation",
      ],
    },
    {
      id: "annual-returns",
      title: "CAC Annual Returns Filing",
      category: "Company Maintenance",
      price: 35000,
      turnaround: "3 to 5 Working Days",
      description: "File your statutory annual returns to keep your company in active standing on the CAC portal and prevent penalties or de-registration.",
      highlights: [
        "Official CAC clearance certificate",
        "Penalty calculation & resolution",
        "Updated CAC public portal status",
      ],
    },
    {
      id: "post-incorp",
      title: "Change of Directors & Share Transfer",
      category: "Post-Incorporation",
      price: 45000,
      turnaround: "5 to 7 Working Days",
      description: "Add or remove directors, update shareholder percentages, or alter corporate objects and registered address with CAC approval.",
      highlights: [
        "Board resolution drafting",
        "Updated CAC Status Report",
        "Official statutory filing confirmation",
      ],
    },
  ];

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 right-1/3" />

      {/* Hero */}
      <section className="py-20 sm:py-28 border-b border-slate-800 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#FDC902]" />
              <span>A La Carte Compliance &amp; Legal Desk</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
              Individual Compliance Services
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mt-4 font-normal">
              Order single compliance certificates, federal trademark filings, tax portal integrations, or post-incorporation updates without purchasing a full package.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32 bg-[#070b13]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <Reveal key={svc.id} type="up" delay={idx * 100} duration={0.8}>
                <HoverCard>
                  <div
                    id={svc.id}
                    className="p-8 sm:p-10 rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 transition-card shadow-2xl flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest text-[#FDC902]">
                          {svc.category}
                        </span>
                        <span className="text-xs text-slate-400 font-mono font-bold bg-[#0a0e17] px-2.5 py-1 rounded-md border border-slate-800">
                          {svc.turnaround}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-white mt-4">{svc.title}</h3>
                      <div className="text-3xl font-black text-[#FDC902] mt-3">
                        {formatNGN(svc.price)}
                      </div>

                      <p className="text-sm text-slate-300 mt-4 leading-relaxed font-normal">
                        {svc.description}
                      </p>

                      <ul className="mt-6 space-y-2.5 text-sm text-slate-200 border-t border-slate-800/80 pt-5 font-bold">
                        {svc.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FDC902] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-8 mt-8 border-t border-slate-800">
                      <a
                        href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                          svc.title
                        )}%20(${formatNGN(svc.price)}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-4 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-[0_6px_25px_rgba(253,201,2,0.25)]"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Order via WhatsApp ({formatNGN(svc.price)})</span>
                      </a>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
