import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link className="logo flex items-center gap-2.5 mb-3 inline-flex group" href="/">
              <img
                src="/images/eponix-logo-transparent.png"
                alt="Eponix Digital"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="flex flex-col">
                <span className="font-extrabold tracking-wider leading-none text-white text-[16px] sm:text-[17px]">EPONIX</span>
                <small className="text-[8px] font-mono tracking-[0.22em] text-[#c9f95a] uppercase font-bold mt-0.5">DIGITAL</small>
              </span>
            </Link>
            <p className="footer-text">
              Business infrastructure and digital systems for businesses ready to move with confidence.
            </p>
          </div>

          <div className="footer-col">
            <h4>EXPLORE</h4>
            <Link href="/about">About Eponix</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/#why-choose-us">Why Choose Us</Link>
            <Link href="/#how">How It Works</Link>
            <Link href="/consult">Consultation</Link>
          </div>

          <div className="footer-col">
            <h4>CONNECT</h4>
            <a href="mailto:hello@eponixdigital.com">hello@eponixdigital.com</a>
            <Link href="/consult">Lagos, Nigeria</Link>
            <Link href="/consult">Instagram ↗</Link>
            <Link href="/consult">LinkedIn ↗</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 EPONIX DIGITAL. ALL RIGHTS RESERVED.</span>
          <span>BUILT FOR THE NEXT BUSINESS.</span>
        </div>
      </div>
    </footer>
  );
}
