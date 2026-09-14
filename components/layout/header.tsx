"use client";

import React, { useState } from "react";
import Link from "next/link";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="Eponix Digital home">
          <span className="logo-mark" aria-hidden="true" />
          <span>
            EPONIX
            <small>DIGITAL</small>
          </span>
        </Link>

        <nav className={`navlinks ${mobileMenuOpen ? "open" : ""}`} id="navlinks">
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link href="/#how" onClick={() => setMobileMenuOpen(false)}>
            How it works
          </Link>
          <Link
            href="/#consult"
            className="btn"
            onClick={() => setMobileMenuOpen(false)}
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
