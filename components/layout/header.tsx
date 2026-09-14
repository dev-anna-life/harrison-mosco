"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[rgba(7,16,12,0.97)] text-[#f5f7ef] border-b border-[rgba(198,255,63,0.16)] backdrop-blur-md">
      <nav className="site-container h-[76px] flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-5 h-5 border border-[#c6ff3f] rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-300">
            <div className="w-1.5 h-1.5 bg-[#c6ff3f]" />
          </div>
          <span className="font-black text-lg tracking-[0.08em] text-[#f5f7ef] uppercase">
            EPONIX <span className="text-[#c6ff3f]">DIGITAL</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-[14px]">
          <Link href="/about" className="text-[#f5f7ef] hover:text-[#c6ff3f] transition-colors">
            About
          </Link>
          <Link href="/services" className="text-[#f5f7ef] hover:text-[#c6ff3f] transition-colors">
            Services
          </Link>
          <Link href="/services#journey" className="text-[#f5f7ef] hover:text-[#c6ff3f] transition-colors">
            How it works
          </Link>
          <Link href="/#consultation" className="text-[#f5f7ef] hover:text-[#c6ff3f] transition-colors">
            Book a consultation
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/#consultation" className="ep-btn ep-btn-primary">
            Start a Conversation
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#f5f7ef] hover:text-[#c6ff3f] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07100c] border-b border-[#26362c] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 text-[15px]">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#f5f7ef] hover:text-[#c6ff3f] border-b border-[#26362c]/50"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#f5f7ef] hover:text-[#c6ff3f] border-b border-[#26362c]/50"
            >
              Services
            </Link>
            <Link
              href="/services#journey"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#f5f7ef] hover:text-[#c6ff3f] border-b border-[#26362c]/50"
            >
              How it works
            </Link>
            <Link
              href="/#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-[#f5f7ef] hover:text-[#c6ff3f]"
            >
              Book a consultation
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="ep-btn ep-btn-primary w-full text-center"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
