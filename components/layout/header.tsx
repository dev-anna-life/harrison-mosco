"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeAll = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="header-root">
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Eponix Digital home" onClick={closeAll}>
          <span className="logo-mark" aria-hidden="true" />
          <span>
            EPONIX
            <small>DIGITAL</small>
          </span>
        </Link>

        <nav className={`navlinks ${mobileMenuOpen ? "open" : ""}`} id="navlinks">
          <Link href="/about" onClick={closeAll} className="nav-item">
            About
          </Link>

          {/* Desktop & Mobile Services with Dropdown */}
          <div
            className="nav-dropdown-wrapper relative"
            ref={dropdownRef}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <div className="flex items-center justify-between w-full">
              <Link
                href="/services"
                onClick={closeAll}
                className="nav-item flex items-center gap-1.5"
              >
                <span>Our Services</span>
              </Link>
              <button
                type="button"
                aria-expanded={servicesDropdownOpen || mobileServicesOpen}
                aria-label="Toggle services menu"
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesDropdownOpen((prev) => !prev);
                  setMobileServicesOpen((prev) => !prev);
                }}
                className="p-1 hover:text-[#c9f95a] transition-colors cursor-pointer"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen || mobileServicesOpen ? "rotate-180 text-[#c9f95a]" : ""
                  }`}
                />
              </button>
            </div>

            {/* Desktop Mega Dropdown */}
            {servicesDropdownOpen && (
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 w-[620px]">
                <div className="bg-[#0c1410] border border-[rgba(244,246,237,0.14)] p-6 shadow-2xl rounded-lg backdrop-blur-xl">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Left Column: Ultimate & Foundation */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#c9f95a] mb-3 pb-1 border-b border-[rgba(244,246,237,0.1)]">
                        Ultimate Packages
                      </div>
                      <div className="space-y-1">
                        <Link
                          href="/ultimate"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            Ultimate Business Launch
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Complete registration, branding &amp; digital setup
                          </div>
                        </Link>

                        <Link
                          href="/business-name"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            Business Name Registration
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Sole proprietorship &amp; enterprise setup
                          </div>
                        </Link>

                        <Link
                          href="/limited"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            Limited Company (LTD)
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Private limited liability incorporation
                          </div>
                        </Link>

                        <Link
                          href="/trustees"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            Incorporated Trustees (NGO)
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Non-profits, foundations &amp; associations
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Single Services */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#c9f95a] mb-3 pb-1 border-b border-[rgba(244,246,237,0.1)]">
                        Single Services
                      </div>
                      <div className="space-y-1">
                        <Link
                          href="/trademark"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            Trademark Registration
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Search &amp; filing across all 45 classes
                          </div>
                        </Link>

                        <Link
                          href="/scuml"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            SCUML Registration
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Anti-money laundering compliance certificate
                          </div>
                        </Link>

                        <Link
                          href="/tax"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            NRS Tax ID / Rev360 Setup
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Tax identity &amp; state portal filing
                          </div>
                        </Link>

                        <Link
                          href="/compliance"
                          onClick={closeAll}
                          className="block p-2 rounded hover:bg-[#15241b] transition-colors group"
                        >
                          <div className="text-[13px] font-bold text-white group-hover:text-[#c9f95a]">
                            Compliance &amp; Regulatory
                          </div>
                          <div className="text-[11px] text-[#9aa69e]">
                            Statutory compliance desk
                          </div>
                        </Link>

                        <Link
                          href="/services"
                          onClick={closeAll}
                          className="block p-2 mt-2 rounded bg-[#102118] border border-[rgba(198,255,63,0.2)] hover:border-[#c9f95a] transition-colors group"
                        >
                          <div className="text-[12px] font-bold text-[#c9f95a] flex items-center justify-between">
                            <span>Browse All Services Catalog</span>
                            <span>→</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Mobile Accordion Dropdown */}
            {mobileServicesOpen && (
              <div className="lg:hidden pl-4 mt-2 space-y-2 border-l border-[rgba(244,246,237,0.15)]">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#c9f95a] pt-1">
                  Ultimate Packages
                </div>
                <Link href="/ultimate" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • Ultimate Business Launch
                </Link>
                <Link href="/business-name" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • Business Name Registration
                </Link>
                <Link href="/limited" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • Limited Company Registration
                </Link>
                <Link href="/trustees" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • Incorporated Trustees (NGO)
                </Link>

                <div className="text-[10px] font-mono uppercase tracking-widest text-[#c9f95a] pt-2">
                  Single Services
                </div>
                <Link href="/trademark" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • Trademark Registration
                </Link>
                <Link href="/scuml" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • SCUML Registration
                </Link>
                <Link href="/tax" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • NRS Tax ID / Rev360 Setup
                </Link>
                <Link href="/compliance" onClick={closeAll} className="block text-[13px] py-1 text-white hover:text-[#c9f95a]">
                  • Compliance &amp; Tax Overview
                </Link>
                <Link href="/services" onClick={closeAll} className="block text-[13px] py-1 text-[#c9f95a] font-bold">
                  • View All Services →
                </Link>
              </div>
            )}
          </div>

          <Link href="/#how" onClick={closeAll} className="nav-item">
            How it works
          </Link>

          <Link
            href="/#consult"
            className="btn"
            onClick={closeAll}
          >
            <span>Book a consultation</span>
            <span className="arrow">→</span>
          </Link>
        </nav>

        <button
          className="menu"
          aria-label="Open navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
