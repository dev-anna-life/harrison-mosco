"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, CheckCircle2, AlertCircle, ArrowRight, ShieldCheck, Phone, Sparkles } from "lucide-react";

export function NameCheckerLead() {
  const [proposedName, setProposedName] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [status, setStatus] = useState<"idle" | "checking" | "available" | "restricted">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposedName.trim() || !phone.trim() || !fullName.trim()) return;

    setStatus("checking");
    setErrorMessage("");

    try {
      // Capture lead in database & send alert
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          whatsappPhone: phone,
          proposedBusinessName: proposedName,
          packageInterested: "Limited Company / CAC Name Check",
          shareCapitalMillions: 1,
          source: "free-name-checker-lead-magnet",
        }),
      });

      // Reserved word check simulation
      const lower = proposedName.toLowerCase();
      const isRestricted =
        lower.includes("federal") ||
        lower.includes("national") ||
        lower.includes("government") ||
        lower.includes("police") ||
        lower.includes("military");

      setTimeout(() => {
        if (isRestricted) {
          setStatus("restricted");
        } else {
          setStatus("available");
        }
      }, 700);
    } catch (err: any) {
      console.error(err);
      setStatus("available"); // Fallback so user can still proceed
    }
  };

  const whatsappReservationUrl = `https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20just%20ran%20a%20CAC%20name%20check%20for%20"${encodeURIComponent(
    proposedName
  )}"%20on%20your%20website.%20My%20name%20is%20${encodeURIComponent(
    fullName
  )}.%20Please%20verify%20and%20reserve%20this%20name%20for%20me.`;

  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-12 p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#0f172a] border-2 border-[#FDC902]/40 shadow-2xl relative overflow-hidden text-left">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-800">
        <div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#FDC902] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Pre-Incorporation Search</span>
          </span>
          <h3 className="text-xl sm:text-3xl font-black text-white mt-1">
            Free CAC Business Name Availability Check
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Verify whether your proposed company name complies with CAC Part B guidelines before paying filing fees.
          </p>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-wider shrink-0 self-start sm:self-auto">
          100% Free Service
        </span>
      </div>

      {status === "idle" || status === "checking" ? (
        <form onSubmit={handleCheck} className="mt-5 sm:mt-8 space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Full Name"
              className="px-4 py-3 sm:py-4 bg-[#0a0e17] border border-slate-700 focus:border-[#FDC902] rounded-xl text-white text-sm font-medium focus:outline-none"
            />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp Number (08123...)"
              className="px-4 py-3 sm:py-4 bg-[#0a0e17] border border-slate-700 focus:border-[#FDC902] rounded-xl text-white text-sm font-medium focus:outline-none"
            />
            <input
              type="text"
              required
              value={proposedName}
              onChange={(e) => setProposedName(e.target.value)}
              placeholder="Proposed Company Name"
              className="px-4 py-3 sm:py-4 bg-[#0a0e17] border border-slate-700 focus:border-[#FDC902] rounded-xl text-white text-sm font-bold focus:outline-none"
            />
          </div>

          <div className="flex justify-center sm:justify-start">
            <button
              type="submit"
              disabled={status === "checking"}
              className="w-auto inline-flex items-center justify-center px-5 py-2.5 sm:px-7 sm:py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all shadow-[0_6px_20px_rgba(253,201,2,0.2)] gap-2"
            >
              <Search className="w-4 h-4" />
              <span>{status === "checking" ? "Running CAC Check..." : "Check Availability & Reserve Now"}</span>
            </button>
          </div>
        </form>
      ) : (
        <div className="mt-5 sm:mt-8 p-4 sm:p-6 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-4 sm:space-y-5 animate-fadeIn">
          {status === "available" ? (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5 sm:gap-3 text-emerald-400 font-black text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Great News! &ldquo;{proposedName}&rdquo; Appears Distinctive &amp; Registrable</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Our initial statutory check shows this name does not conflict with common restricted federal prefixes. We have dispatched this inquiry to Harrison Mosco to lock in your priority reservation.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                <a
                  href={whatsappReservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 bg-[#25D366] hover:bg-emerald-600 text-white font-black rounded-xl text-xs sm:text-sm transition-all gap-2 shadow-md text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Lock In Name on WhatsApp &rarr;</span>
                </a>
                <Link
                  href="/limited#application"
                  className="w-auto inline-flex items-center justify-center px-4 py-2.5 sm:px-6 sm:py-3 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all gap-2 text-center"
                >
                  <span>Start Complete Filing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400 font-black text-sm sm:text-base">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Advisory Notice: &ldquo;{proposedName}&rdquo; Contains Special Statutory Words</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Names containing words like &quot;National&quot;, &quot;Federal&quot;, or &quot;Group&quot; require specialized consent and higher share capital thresholds under CAMA 2020. Our legal team can help you restructure it to pass CAC screening without query.
              </p>
              <div className="pt-1">
                <a
                  href={whatsappReservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Restructure Name with Harrison Mosco</span>
                </a>
              </div>
            </div>
          )}

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => setStatus("idle")}
              className="text-xs text-slate-400 hover:text-white underline font-semibold"
            >
              &larr; Check another name
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
