import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#050a07] text-[#f5f7ef] pt-14 pb-10 border-t border-[rgba(198,255,63,0.18)]">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-4 h-4 border border-[#c6ff3f] rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-[#c6ff3f]" />
              </div>
              <span className="font-black text-lg tracking-[0.08em] text-[#f5f7ef] uppercase">
                EPONIX <span className="text-[#c6ff3f]">DIGITAL</span>
              </span>
            </Link>
            <p className="text-[14px] text-[#aeb9b1] max-w-sm leading-relaxed">
              From Discovery to Automation. We build the infrastructure businesses need to operate professionally and grow.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-3 space-y-3">
            <b className="text-[15px] text-[#f5f7ef] font-bold block">Company</b>
            <div className="flex flex-col space-y-2.5 text-[14px] text-[#aeb9b1]">
              <Link href="/about" className="hover:text-[#c6ff3f] transition-colors">
                About
              </Link>
              <Link href="/services" className="hover:text-[#c6ff3f] transition-colors">
                Services
              </Link>
              <Link href="/#consultation" className="hover:text-[#c6ff3f] transition-colors">
                Consultation
              </Link>
            </div>
          </div>

          {/* Business Foundation Links */}
          <div className="md:col-span-3 space-y-3">
            <b className="text-[15px] text-[#f5f7ef] font-bold block">Business Foundation</b>
            <div className="flex flex-col space-y-2.5 text-[14px] text-[#aeb9b1]">
              <Link href="/services" className="hover:text-[#c6ff3f] transition-colors">
                CAC Registration
              </Link>
              <Link href="/services" className="hover:text-[#c6ff3f] transition-colors">
                Compliance &amp; Tax
              </Link>
              <Link href="/services" className="hover:text-[#c6ff3f] transition-colors">
                Trademark
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#243229] mt-11 pt-6 text-[12px] text-[#77847b] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © 2026 Eponix Digital. All rights reserved. · A brand of Eponyx Industries Limited.
          </div>
          <div className="text-[11px] text-[#556359]">
            Accredited CAC Governance &amp; Digital Engineering
          </div>
        </div>
      </div>
    </footer>
  );
}
