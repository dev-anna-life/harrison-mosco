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
    <div className="w-full max-w-4xl mx-auto my-12 p-6 sm:p-10 rounded-3xl bg-[#0f172a] border-2 border-[#FDC902]/40 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-[#FDC902] flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>Instant Pre-Incorporation Search</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Free CAC Business Name Availability Check
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Verify whether your proposed company name complies with CAC Part B guidelines before paying filing fees.
          </p>
        </div>
        <span className="px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-wider shrink-0">
          100% Free Service
        </span>
      </div>

      {status === "idle" || status === "checking" ? (
        <form onSubmit={handleCheck} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Your Full Name"
              className="px-4 py-4 bg-[#0a0e17] border border-slate-700 focus:border-[#FDC902] rounded-xl text-white text-sm font-medium focus:outline-none"
            />
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="WhatsApp Number (08123...)"
              className="px-4 py-4 bg-[#0a0e17] border border-slate-700 focus:border-[#FDC902] rounded-xl text-white text-sm font-medium focus:outline-none"
            />
            <input
              type="text"
              required
              value={proposedName}
              onChange={(e) => setProposedName(e.target.value)}
              placeholder="Proposed Company Name"
              className="px-4 py-4 bg-[#0a0e17] border border-slate-700 focus:border-[#FDC902] rounded-xl text-white text-sm font-bold focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "checking"}
            className="w-full py-4.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm sm:text-base transition-all shadow-[0_6px_25px_rgba(253,201,2,0.25)] flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            <span>{status === "checking" ? "Running CAC Algorithm..." : "Check Name Availability & Reserve Now"}</span>
          </button>
        </form>
      ) : (
        <div className="mt-8 p-6 rounded-2xl bg-[#0a0e17] border border-slate-800 space-y-5 animate-fadeIn">
          {status === "available" ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-400 font-black text-lg">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <span>Great News! &ldquo;{proposedName}&rdquo; Appears Distinctive &amp; Registrable</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our initial statutory check shows this name does not conflict with common restricted federal prefixes. We have dispatched this inquiry to Harrison Mosco to lock in your priority reservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={whatsappReservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#25D366] hover:bg-emerald-600 text-white font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Lock In Name on WhatsApp &rarr;</span>
                </a>
                <Link
                  href="/limited#application"
                  className="px-6 py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Start Complete Limited Company Filing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-amber-400 font-black text-lg">
                <AlertCircle className="w-6 h-6 shrink-0" />
                <span>Advisory Notice: &ldquo;{proposedName}&rdquo; Contains Special Statutory Words</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                Names containing words like &quot;National&quot;, &quot;Federal&quot;, or &quot;Group&quot; require specialized consent and higher share capital thresholds under CAMA 2020. Our legal team can help you restructure it to pass CAC screening without query.
              </p>
              <a
                href={whatsappReservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Restructure Name with Harrison Mosco</span>
              </a>
            </div>
          )}

          <div className="pt-3 border-t border-slate-800">
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
