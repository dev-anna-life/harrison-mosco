"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-[82px] z-50 border-b border-white/10 bg-[rgba(8,16,13,0.84)] backdrop-blur-[14px]">
      <div className="wrap h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 font-extrabold tracking-[-0.055em] text-[18px] text-[#f4f6ed] group">
          <div className="w-[27px] h-[27px] border-2 border-[#c9f95a] rotate-45 relative flex-shrink-0 transition-transform group-hover:rotate-90 duration-300">
            <div className="absolute inset-[6px] bg-[#c9f95a]" />
          </div>
          <div>
            <span className="block leading-none">EPONIX</span>
            <small className="block font-mono text-[8px] tracking-[0.19em] text-[#9aa69e] -mt-0.5">
              DIGITAL
            </small>
          </div>
        </Link>

        {/* Desktop Navlinks */}
        <nav className="hidden md:flex items-center gap-7 text-[12px] font-bold text-[#d4ddd7]">
          <Link href="/about" className="hover:text-[#c9f95a] transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-[#c9f95a] transition-colors">
            Services
          </Link>
          <Link href="/#how" className="hover:text-[#c9f95a] transition-colors">
            How it works
          </Link>
          <Link href="/#consult" className="btn !py-2.5 !px-4">
            <span>Book a consultation</span>
            <span className="text-[18px] leading-none">→</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#f4f6ed] hover:text-[#c9f95a] p-2 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#101713] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-[14px] font-bold text-[#d4ddd7]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c9f95a]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c9f95a]"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c9f95a]"
            >
              Services
            </Link>
            <Link
              href="/#how"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-white/5 hover:text-[#c9f95a]"
            >
              How it works
            </Link>
            <Link
              href="/#consult"
              onClick={() => setMobileMenuOpen(false)}
              className="btn primary w-full justify-center !mt-4"
            >
              <span>Book a consultation</span>
              <span className="text-[18px] leading-none">→</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
