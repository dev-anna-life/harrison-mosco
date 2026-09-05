"use client";

import React from "react";
import Image from "next/image";
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
      <section className="py-10 sm:py-24 border-b border-slate-800 relative z-10 overflow-hidden">
        {/* Luxury Obsidian Ambient Background */}
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <Image
            src="/images/bg-luxury-obsidian.jpg"
            alt="Luxury Obsidian Architecture"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 via-[#0a0e17]/70 to-[#0a0e17]" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 relative z-10">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[10px] sm:text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
              <span>A La Carte Compliance &amp; Legal Desk</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2]">
              Individual Compliance Services
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mt-2.5 sm:mt-3 font-normal">
              Order single compliance certificates, federal trademark filings, tax portal integrations, or post-incorporation updates without purchasing a full package.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-24 bg-[#070b13] relative overflow-hidden">
        {/* Ambient Corporate Skyline Background */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {services.map((svc, idx) => (
              <Reveal key={svc.id} type="up" delay={idx * 100} duration={0.8}>
                <HoverCard>
                  <div
                    id={svc.id}
                    className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0f172a] border border-slate-800 hover:border-[#FDC902]/50 transition-card shadow-xl flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902]">
                          {svc.category}
                        </span>
                        <span className="text-[10px] sm:text-xs text-slate-400 font-mono font-bold bg-[#0a0e17] px-2 py-0.5 rounded border border-slate-800 shrink-0">
                          {svc.turnaround}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-black text-white mt-2.5 sm:mt-3">{svc.title}</h3>
                      <div className="text-xl sm:text-2xl font-black text-[#FDC902] mt-1.5 sm:mt-2">
                        {formatNGN(svc.price)}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 mt-2 sm:mt-3 leading-relaxed font-normal">
                        {svc.description}
                      </p>

                      <ul className="mt-4 sm:mt-5 space-y-2 text-xs sm:text-sm text-slate-200 border-t border-slate-800/80 pt-3.5 sm:pt-4 font-bold">
                        {svc.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDC902] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-800">
                      <a
                        href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20want%20to%20order%20the%20${encodeURIComponent(
                          svc.title
                        )}%20(${formatNGN(svc.price)}).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 sm:py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(253,201,2,0.2)]"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
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
