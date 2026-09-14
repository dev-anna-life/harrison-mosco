import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#08100d] text-[#f4f6ed] pt-16 pb-6 border-t border-[rgba(244,246,237,0.14)]">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 pb-14">
          {/* Logo & Statement */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 font-extrabold tracking-[-0.055em] text-[18px] text-[#f4f6ed]">
              <div className="w-[27px] h-[27px] border-2 border-[#c9f95a] rotate-45 relative flex-shrink-0">
                <div className="absolute inset-[6px] bg-[#c9f95a]" />
              </div>
              <div>
                <span className="block leading-none">EPONIX</span>
                <small className="block font-mono text-[8px] tracking-[0.19em] text-[#9aa69e] -mt-0.5">
                  DIGITAL
                </small>
              </div>
            </Link>
            <p className="text-[13px] text-[#9aa99f] max-w-[300px] leading-relaxed">
              Business infrastructure and digital systems for businesses ready to move with confidence.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.12em] text-[#c9f95a] uppercase mb-3">
              EXPLORE
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-[#c5d0c8]">
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
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-[10px] tracking-[0.12em] text-[#c9f95a] uppercase mb-3">
              CONNECT
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] text-[#c5d0c8]">
              <a href="mailto:hello@eponixdigital.com" className="hover:text-[#c9f95a] transition-colors">
                hello@eponixdigital.com
              </a>
              <span className="text-[#9aa99f]">Lagos, Nigeria</span>
              <a href="/#consult" className="hover:text-[#c9f95a] transition-colors">
                Instagram ↗
              </a>
              <a href="/#consult" className="hover:text-[#c9f95a] transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[rgba(244,246,237,0.14)] pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 font-mono text-[10px] tracking-[0.06em] text-[#819087]">
          <span>© 2026 EPONIX DIGITAL. ALL RIGHTS RESERVED.</span>
          <span>BUILT FOR THE NEXT BUSINESS.</span>
        </div>
      </div>
    </footer>
  );
}
