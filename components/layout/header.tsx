"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  ChevronDown,
  FileCheck,
  Search,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FDC902]/20 bg-[#0a0e17]/95 backdrop-blur-xl text-white transition-all">
      {/* Top Notice Bar - Ultra sleek on mobile */}
      <div className="bg-[#05080e] border-b border-slate-800/80 text-slate-300 py-1.5 sm:py-2 px-3 sm:px-4 text-center text-[11px] sm:text-xs font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FDC902] animate-pulse shrink-0"></span>
          <span className="truncate max-w-[240px] xs:max-w-none">Accredited CAC Corporate &amp; Automation Desk.</span>
          <Link href="/limited" className="text-[#FDC902] hover:text-amber-300 font-bold underline ml-1 whitespace-nowrap">
            Register Online &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#FDC902] flex items-center justify-center text-slate-950 font-black text-lg sm:text-xl shadow-[0_6px_20px_rgba(253,201,2,0.35)] group-hover:scale-105 transition-transform">
              HM
            </div>
            <div className="whitespace-nowrap">
              <span className="text-base sm:text-xl font-black tracking-tight text-white flex items-center gap-1">
                Harrison Mosco
              </span>
              <span className="block text-[8px] sm:text-[10px] font-bold text-[#FDC902] uppercase tracking-wider sm:tracking-widest -mt-0.5 sm:mt-0">
                Business Launch &amp; Automation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Stretchy & Never Breaks */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3">
            <Link
              href="/"
              className="px-3.5 py-2 text-sm xl:text-base font-bold text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-all whitespace-nowrap"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="px-3.5 py-2 text-sm xl:text-base font-bold text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-all whitespace-nowrap"
            >
              About
            </Link>

            {/* Nigeria Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                type="button"
                className="px-3.5 py-2 text-sm xl:text-base font-bold text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap"
                onClick={() => setMegaOpen(!megaOpen)}
              >
                <span className="whitespace-nowrap">Nigerian Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    megaOpen ? "rotate-180 text-[#FDC902]" : ""
                  }`}
                />
              </button>

              {megaOpen && (
                <div className="absolute top-full left-0 w-[min(560px,calc(100vw-40px))] mt-2 p-6 bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 z-50">
                  {/* Column 1: Packages */}
                  <div className="space-y-2">
                    <p className="text-xs font-black text-[#FDC902] uppercase tracking-wider px-3 pb-1">
                      Registration Packages
                    </p>
                    <Link
                      href="/limited"
                      className="block p-3.5 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all group"
                      onClick={() => setMegaOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <Building2 className="w-6 h-6 text-[#FDC902] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FDC902]">
                            Limited Company (Ltd)
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                            CAC certificate, MEMART, Tax ID, and brand kit.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/launch"
                      className="block p-3.5 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all group"
                      onClick={() => setMegaOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-6 h-6 text-[#FDC902] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FDC902]">
                            Ultimate Launch Package
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                            Incorporation, SCUML, branding, and video.
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/business-name"
                      className="block p-3.5 rounded-xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700 transition-all group"
                      onClick={() => setMegaOpen(false)}
                    >
                      <div className="flex items-start gap-3">
                        <FileCheck className="w-6 h-6 text-slate-300 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FDC902]">
                            Business Name Registration
                          </div>
                          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                            Sole proprietorship and enterprise setup.
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Column 2: Single Services */}
                  <div className="space-y-2 border-l border-slate-800 pl-5">
                    <p className="text-xs font-black text-[#FDC902] uppercase tracking-wider px-2 pb-1">
                      Individual Services
                    </p>
                    <Link
                      href="/single-services#scuml"
                      className="block p-2.5 rounded-xl hover:bg-slate-800/80 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      SCUML Bank Compliance Certificate
                    </Link>
                    <Link
                      href="/single-services#trademark"
                      className="block p-2.5 rounded-xl hover:bg-slate-800/80 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      Trademark Filing and Protection
                    </Link>
                    <Link
                      href="/single-services#tax"
                      className="block p-2.5 rounded-xl hover:bg-slate-800/80 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      NRS Tax Identification and Rev360
                    </Link>
                    <Link
                      href="/single-services#trustees"
                      className="block p-2.5 rounded-xl hover:bg-slate-800/80 text-xs sm:text-sm font-bold text-slate-300 hover:text-white transition-colors"
                      onClick={() => setMegaOpen(false)}
                    >
                      Incorporated Trustees (NGOs, Churches)
                    </Link>
                    <div className="pt-3">
                      <Link
                        href="/single-services"
                        className="text-xs sm:text-sm font-bold text-[#FDC902] hover:underline flex items-center gap-1.5"
                        onClick={() => setMegaOpen(false)}
                      >
                        <span>View complete catalog</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/single-services"
              className="px-3.5 py-2 text-sm xl:text-base font-bold text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-all whitespace-nowrap"
            >
              Single Services
            </Link>

            <Link
              href="/track"
              className="px-3.5 py-2 text-sm xl:text-base font-bold text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Search className="w-4 h-4 text-[#FDC902] shrink-0" />
              <span className="whitespace-nowrap">Track Filing</span>
            </Link>
          </nav>

          {/* Right Action Buttons - Stretchy, Single Line, No Wrapping */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/book"
              className="px-5 py-3 text-sm font-bold text-white hover:text-[#FDC902] border border-slate-700 hover:border-[#FDC902]/60 rounded-xl transition-all whitespace-nowrap shrink-0"
            >
              Book Consultation
            </Link>

            <Link
              href="/limited#application"
              className="px-6 py-3.5 text-sm font-black text-slate-950 bg-[#FDC902] hover:bg-amber-400 rounded-xl shadow-[0_6px_25px_rgba(253,201,2,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Building2 className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Register Limited Company</span>
            </Link>
          </div>

          {/* Mobile and Tablet menu button */}
          <div className="xl:hidden flex items-center gap-2">
            <Link
              href="/track"
              className="p-2.5 text-slate-200 border border-slate-800 rounded-xl"
              title="Track Application"
            >
              <Search className="w-6 h-6" />
            </Link>
            <button
              type="button"
              className="p-2.5 text-slate-200 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#0d1424] border-b border-slate-800 px-4 sm:px-6 pt-3 pb-8 space-y-1.5 shadow-2xl animate-fadeIn">
          <Link
            href="/"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-white hover:bg-white/5 border-b border-slate-800/60"
            onClick={() => setMobileOpen(false)}
          >
            <span>Home</span>
          </Link>
          <Link
            href="/limited"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-[#FDC902] bg-[#FDC902]/10 border border-[#FDC902]/30"
            onClick={() => setMobileOpen(false)}
          >
            <span>Limited Company Registration</span>
            <span className="text-[10px] bg-[#FDC902] text-slate-950 font-black px-2 py-0.5 rounded uppercase">From N60k</span>
          </Link>
          <Link
            href="/launch"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-white hover:bg-white/5 border-b border-slate-800/60"
            onClick={() => setMobileOpen(false)}
          >
            <span>Ultimate Launch Package</span>
            <span className="text-[10px] bg-slate-800 text-[#FDC902] font-black px-2 py-0.5 rounded border border-slate-700">N1,000,000</span>
          </Link>
          <Link
            href="/business-name"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-white hover:bg-white/5 border-b border-slate-800/60"
            onClick={() => setMobileOpen(false)}
          >
            <span>Business Name Registration</span>
            <span className="text-[10px] text-slate-400 font-bold">From N25k</span>
          </Link>
          <Link
            href="/single-services"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-white hover:bg-white/5 border-b border-slate-800/60"
            onClick={() => setMobileOpen(false)}
          >
            <span>Single Services (SCUML, Trademark, Tax)</span>
          </Link>
          <Link
            href="/track"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-white hover:bg-white/5 border-b border-slate-800/60"
            onClick={() => setMobileOpen(false)}
          >
            <span>Track Application Status</span>
            <Search className="w-4 h-4 text-[#FDC902]" />
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-white hover:bg-white/5 border-b border-slate-800/60"
            onClick={() => setMobileOpen(false)}
          >
            <span>About Harrison Mosco</span>
          </Link>
          <Link
            href="/book"
            className="flex items-center justify-between py-3 px-3 rounded-xl text-base font-bold text-white hover:bg-white/5"
            onClick={() => setMobileOpen(false)}
          >
            <span>Book Consultation</span>
          </Link>
          <div className="pt-3">
            <Link
              href="/limited#application"
              className="block w-full py-3.5 text-center text-sm font-black text-slate-950 bg-[#FDC902] hover:bg-amber-400 rounded-xl shadow-lg transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Start Limited Company Application &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
