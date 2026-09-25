import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link className="logo" href="/">
              <span className="logo-mark" />
              <span>
                EPONIX
                <small>DIGITAL</small>
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
