"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Phone,
  Mail,
  CheckCircle2,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

export default function BookConsultationPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Limited Company Setup");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20would%20like%20to%20schedule%20a%20strategic%20consultation%20regarding%20${encodeURIComponent(
    topic
  )}.%20My%20name%20is%20${encodeURIComponent(name || "Founder")}.`;

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 left-1/3" />

      {/* Hero */}
      <section className="py-10 sm:py-24 border-b border-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[10px] sm:text-xs font-black uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
              <span>Direct Founder Advisory</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2]">
              Book a Strategy Session
            </h1>
            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mt-2.5 sm:mt-3 font-normal">
              Discuss your proposed corporate structure, share capital allocation, brand positioning, or automated billing setup directly with Harrison Mosco.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Booking Form & Contact */}
      <section className="py-12 sm:py-24 bg-[#070b13]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Form */}
            <Reveal type="left" duration={0.8} className="lg:col-span-7">
              <div className="bg-[#0f172a] p-4 sm:p-7 lg:p-9 rounded-2xl sm:rounded-3xl border border-slate-800 shadow-2xl">
                {submitted ? (
                  <div className="text-center space-y-4 sm:space-y-5 py-4 sm:py-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black text-white">Consultation Request Received</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      Thank you, {name}. Click the button below to connect with Harrison Mosco directly on WhatsApp and pick your session time.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow-[0_6px_20px_rgba(253,201,2,0.2)] text-center"
                    >
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>Continue to WhatsApp Desk &rarr;</span>
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <span className="block text-xs sm:text-sm font-black uppercase tracking-wider text-[#FDC902]">
                      Consultation Request
                    </span>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Chukwuemeka Okafor"
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0a0e17] border border-slate-700 rounded-xl text-white font-medium focus:border-[#FDC902] focus:outline-none text-xs sm:text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div>
                        <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
                          WhatsApp Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="08137092154"
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0a0e17] border border-slate-700 rounded-xl text-white font-medium focus:border-[#FDC902] focus:outline-none text-xs sm:text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@domain.com"
                          className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0a0e17] border border-slate-700 rounded-xl text-white font-medium focus:border-[#FDC902] focus:outline-none text-xs sm:text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-300 mb-1">
                        Discussion Subject *
                      </label>
                      <select
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#0a0e17] border border-slate-700 rounded-xl text-white font-bold focus:border-[#FDC902] focus:outline-none text-xs sm:text-sm"
                      >
                        <option value="Limited Company Setup">Limited Company Setup (CAC &amp; Shares)</option>
                        <option value="Ultimate Launch Package">Ultimate Launch Package (NGN 1,000,000)</option>
                        <option value="SCUML & Bank Compliance">SCUML &amp; Bank Account Restrictions</option>
                        <option value="Branding & Video Commercials">Corporate Branding &amp; Video Production</option>
                        <option value="Automated Receipting System">Automated Invoicing &amp; Billing Systems</option>
                        <option value="B2B Agent Outsourcing">B2B Agent Outsourcing Partnership</option>
                      </select>
                    </div>

                    <div className="flex justify-center sm:justify-start pt-1">
                      <button
                        type="submit"
                        className="w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_6px_20px_rgba(253,201,2,0.2)] gap-2"
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>Request Strategy Session</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Right Desk Info */}
            <Reveal type="right" delay={200} duration={0.8} className="lg:col-span-5 space-y-4 sm:space-y-5">
              <HoverCard>
                <div className="bg-[#0f172a] p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-3 sm:space-y-4 shadow-xl">
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902] block">
                    Instant Channel
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white">Prefer to chat immediately?</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    You do not need to wait for a scheduled call. Harrison Mosco responds directly to founder inquiries on WhatsApp during business hours.
                  </p>
                  <a
                    href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20want%20to%20ask%20a%20direct%20question%20about%20my%20business%20registration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-2.5 sm:py-3.5 text-center bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 hover:border-[#FDC902]/60 text-white font-bold rounded-xl text-xs sm:text-sm transition-all"
                  >
                    Open Instant WhatsApp Chat &rarr;
                  </a>
                </div>
              </HoverCard>

              <div className="p-4 sm:p-5 bg-[#0a0e17] rounded-xl sm:rounded-2xl border border-slate-800 text-[11px] sm:text-xs text-slate-400 space-y-1.5">
                <span className="text-white font-bold block text-xs sm:text-sm">Head Office Location:</span>
                <p>Rockville Place, SARS Road, Port Harcourt, Rivers State, Nigeria.</p>
                <p className="pt-1 text-slate-500">Phone: +234 813 709 2154 • Email: support@harrisonmosco.ng</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
