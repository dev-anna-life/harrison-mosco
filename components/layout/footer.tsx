import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#08100d] text-[#c5d0c8] text-xs border-t border-white/10 pt-14 pb-6">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-7">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-[24px] h-[24px] border-2 border-[#c9f95a] rotate-45 relative transition-transform group-hover:scale-105 shrink-0">
                <div className="absolute inset-[4px] bg-[#c9f95a]" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight leading-none text-white">
                  EPONIX
                </span>
                <span className="font-mono-tag text-[8px] tracking-[0.2em] text-[#9aa69e] uppercase mt-0.5">
                  DIGITAL
                </span>
              </div>
            </Link>
            <p className="text-xs text-[#9aa99f] max-w-sm leading-relaxed font-normal pt-1">
              Business infrastructure and digital systems for businesses ready to move with confidence.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-mono-tag text-[10px] uppercase tracking-[0.14em] text-[#c9f95a] font-bold">
              EXPLORE
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#c5d0c8]">
              <Link href="/about" className="hover:text-[#c9f95a] transition-colors">
                About Eponix
              </Link>
              <Link href="/services" className="hover:text-[#c9f95a] transition-colors">
                Our Services
              </Link>
              <Link href="/#how" className="hover:text-[#c9f95a] transition-colors">
                How It Works
              </Link>
              <Link href="/#consult" className="hover:text-[#c9f95a] transition-colors">
                Consultation
              </Link>
            </div>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h4 className="font-mono-tag text-[10px] uppercase tracking-[0.14em] text-[#c9f95a] font-bold">
              CONNECT
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-[#c5d0c8]">
              <a
                href="mailto:hello@eponixdigital.com"
                className="hover:text-[#c9f95a] transition-colors"
              >
                hello@eponixdigital.com
              </a>
              <span className="text-[#9aa99f]">Lagos &amp; Port Harcourt, Nigeria</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9f95a] transition-colors"
              >
                Instagram &nearr;
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9f95a] transition-colors"
              >
                LinkedIn &nearr;
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono-tag text-[10px] tracking-wider text-[#819087] text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} EPONIX DIGITAL. ALL RIGHTS RESERVED.</span>
          <span>BUILT FOR THE NEXT BUSINESS.</span>
        </div>
      </div>
    </footer>
  );
}
