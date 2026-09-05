"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Clock,
  Building2,
  FileCheck,
  ShieldCheck,
  Phone,
  AlertCircle,
} from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export default function TrackApplicationPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(`/api/track?reference=${encodeURIComponent(query.trim())}`);
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "No filing found for this reference or company name.");
      }
      setResult(data.data);
    } catch (err: any) {
      setError(err.message || "Failed to locate filing. Please verify the code.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0a0e17] text-white min-h-screen relative overflow-hidden">
      <div className="glow-orb w-[600px] h-[600px] bg-[#FDC902]/8 top-0 left-1/2 -translate-x-1/2" />

      {/* Hero */}
      <section className="py-12 sm:py-28 border-b border-slate-800 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
          <Reveal type="down" duration={0.6}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-[11px] sm:text-xs font-black uppercase tracking-wider">
              <Search className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
              <span>Real-Time Milestone Verification</span>
            </span>
          </Reveal>

          <Reveal type="up" delay={150} duration={0.8}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Track Your Filing Status
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mt-3 sm:mt-4 font-normal">
              Enter your order reference code (e.g. HM-2026-6248) or registered entity name to check your real-time CAC progress.
            </p>
          </Reveal>

          {/* Search Box */}
          <Reveal type="scale" delay={300} duration={0.8}>
            <form onSubmit={handleSearch} className="max-w-xl mx-auto mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter Reference Code (e.g. HM-2026-6248)"
                className="flex-1 px-4 py-3.5 sm:px-6 sm:py-4 bg-[#0e1626] border-2 border-slate-700 focus:border-[#FDC902] rounded-2xl text-white font-bold text-xs sm:text-base focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 sm:px-8 sm:py-4 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-2xl text-xs sm:text-base transition-all shadow-[0_8px_25px_rgba(253,201,2,0.25)] flex items-center justify-center gap-2 shrink-0"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>{loading ? "Searching..." : "Track Status"}</span>
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-12 sm:py-20 bg-[#070b13]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="p-4 sm:p-6 rounded-3xl bg-rose-950/40 border border-rose-500/50 text-rose-300 text-center font-bold flex items-center justify-center gap-2.5 text-xs sm:text-sm">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {result && (
            <div className="bg-[#0f172a] rounded-3xl border border-slate-800 p-5 sm:p-8 lg:p-12 shadow-2xl space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 sm:pb-6 border-b border-slate-800 gap-3 sm:gap-4">
                <div>
                  <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-1">
                    {result.packageChoice} Limited Company
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-white">
                    {result.proposedName1} Ltd
                  </h3>
                  <span className="text-xs text-slate-400 font-mono mt-1 block font-bold">
                    Ref: {result.reference}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-[10px] sm:text-xs font-black uppercase tracking-wider">
                    {result.status}
                  </span>
                  <span className="block text-[11px] sm:text-xs text-slate-400 mt-1 font-medium">
                    Estimated Delivery: {result.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* 5 Progress Milestones */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-xs sm:text-sm font-black text-white uppercase tracking-wider">
                  Filing Milestones
                </h4>
                <div className="space-y-3 sm:space-y-4">
                  {result.milestones?.map((m: any, idx: number) => (
                    <div
                      key={idx}
                      className={`p-3.5 sm:p-4 rounded-2xl border flex items-start gap-3 sm:gap-4 transition-all ${
                        m.completed
                          ? "bg-emerald-950/20 border-emerald-500/30 text-emerald-300"
                          : m.current
                          ? "bg-[#141d33] border-[#FDC902] text-white"
                          : "bg-[#0a0e17] border-slate-800 text-slate-500"
                      }`}
                    >
                      <div className="mt-0.5">
                        {m.completed ? (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                        ) : m.current ? (
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#FDC902] shrink-0 animate-spin" />
                        ) : (
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-slate-700" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 sm:gap-2">
                          <strong className="text-xs sm:text-sm font-bold block">{m.title}</strong>
                          {m.date && <span className="text-[10px] sm:text-xs font-mono font-medium text-slate-400">{m.date}</span>}
                        </div>
                        <p className="text-[11px] sm:text-xs mt-1 text-slate-400 leading-relaxed font-normal">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  Have inquiries regarding this filing?
                </span>
                <a
                  href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20tracking%20my%20order%20Ref%3A%20${result.reference}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black text-[#FDC902] hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>Contact Filing Desk on WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
