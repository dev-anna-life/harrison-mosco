"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full h-[76px] sm:h-[82px] border-b border-white/10 bg-[#08100d]/90 backdrop-blur-md text-[#f4f6ed] transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-7 h-full flex items-center justify-between">
        {/* Eponix Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-[26px] h-[26px] border-2 border-[#c9f95a] rotate-45 relative transition-transform group-hover:scale-105 shrink-0">
            <div className="absolute inset-[5px] bg-[#c9f95a]" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base sm:text-lg tracking-tight leading-none text-white">
              EPONIX
            </span>
            <span className="font-mono-tag text-[8px] sm:text-[9px] tracking-[0.2em] text-[#9aa69e] uppercase mt-0.5">
              DIGITAL
            </span>
          </div>
        </Link>

        {/* Desktop Navlinks */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold text-[#d4ddd7]">
          <Link
            href="/about"
            className="hover:text-[#c9f95a] transition-colors"
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-[#c9f95a] transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#how"
            className="hover:text-[#c9f95a] transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#consult"
            className="inline-flex items-center gap-2 border border-[#c9f95a] px-4 py-2.5 text-xs font-extrabold text-[#f4f6ed] hover:bg-[#c9f95a] hover:text-[#0c1210] transition-all"
          >
            <span>Book a consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="p-2 text-[#f4f6ed] hover:text-[#c9f95a] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0c1210] border-b border-white/10 px-5 py-6 space-y-4 animate-fadeIn">
          <Link
            href="/"
            className="block text-sm font-bold text-white hover:text-[#c9f95a]"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-sm font-bold text-white hover:text-[#c9f95a]"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="block text-sm font-bold text-white hover:text-[#c9f95a]"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#how"
            className="block text-sm font-bold text-white hover:text-[#c9f95a]"
            onClick={() => setMobileOpen(false)}
          >
            How it works
          </Link>
          <div className="pt-2">
            <Link
              href="/#consult"
              className="inline-flex items-center justify-center gap-2 border border-[#c9f95a] bg-[#c9f95a] text-[#0c1210] px-4 py-2.5 text-xs font-black w-full"
              onClick={() => setMobileOpen(false)}
            >
              <span>Book a consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

