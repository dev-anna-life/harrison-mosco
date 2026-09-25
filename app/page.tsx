"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          whatsappPhone: "+2340000000000",
          email: formData.email,
          proposedBusinessName: "Consultation Request",
          packageInterested: formData.service || "General Inquiry",
          shareCapitalMillions: 1,
          notes: formData.message,
          source: "eponix_home_consult_form",
        }),
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="hero-img" />
        <div className="wrap">
          <div className="hero-copy reveal">
            <div className="eyebrow">Business &amp; Digital Solutions</div>
            <h1>
              We Build, <em>Brand</em> &amp; Grow Businesses.
            </h1>
            <p>
              From business registration and compliance to branding, digital presence, AI, automation and growth, Eponix Digital builds the infrastructure your business needs to operate professionally and grow.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#consult">
                <span>Book a Consultation</span>
                <span className="arrow">→</span>
              </a>
              <Link className="btn" href="/services">
                <span>Explore Our Services</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
          <div className="hero-meta">
            BUSINESS FOUNDATION · BRANDING · DIGITAL · AI &amp; AUTOMATION · GROWTH
          </div>
        </div>
        <div className="scroll-tag">SCROLL TO EXPLORE</div>
      </section>

      {/* 2. Ticker Strip */}
      <div className="strip">
        <div className="ticker">
          <span>REGISTER <i>✦</i></span>
          <span>BUILD <i>✦</i></span>
          <span>BRAND <i>✦</i></span>
          <span>DIGITISE <i>✦</i></span>
          <span>GROW <i>✦</i></span>
        </div>
      </div>

      {/* 3. About Section (Cream background) */}
      <section className="about section" id="about">
        <div className="wrap about-grid">
          <div className="reveal">
            <div className="eyebrow" style={{ color: "#367054" }}>
              More than a service provider
            </div>
            <h2>
              Your business needs a <span>stronger foundation.</span>
            </h2>
          </div>
          <div className="about-copy reveal">
            <p>
              Eponix Digital is a business infrastructure and digital systems company for ambitious founders, growing teams and established organisations across Nigeria.
            </p>
            <p>
              We bring the essential pieces together, so your business is properly structured, clearly positioned and ready to scale with confidence.
            </p>
            <div className="about-lines">
              <div className="about-line">
                <span>Built for real business growth</span>
                <span>01</span>
              </div>
              <div className="about-line">
                <span>Designed around your next stage</span>
                <span>02</span>
              </div>
              <div className="about-line">
                <span>Powered by practical systems</span>
                <span>03</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Journey (Split Green / Light Sage) */}
      <section className="journey">
        <div className="journey-grid">
          <div className="journey-intro reveal">
            <div className="eyebrow">The Eponix journey</div>
            <h2>From idea to a business built to move.</h2>
            <p>One thoughtful journey. The right support at every important step.</p>
          </div>
          <div className="timeline reveal">
            <div className="step">
              <div className="num">01 / START</div>
              <div>
                <h3>Clarify the vision</h3>
                <p>We help turn an idea into a clear, actionable business direction.</p>
              </div>
            </div>
            <div className="step">
              <div className="num">02 / STRUCTURE</div>
              <div>
                <h3>Build the foundation</h3>
                <p>Set up the legal, operational and strategic basics for professional business.</p>
              </div>
            </div>
            <div className="step">
              <div className="num">03 / PRESENT</div>
              <div>
                <h3>Shape the brand</h3>
                <p>Create a confident identity and digital presence that earns attention.</p>
              </div>
            </div>
            <div className="step">
              <div className="num">04 / GROW</div>
              <div>
                <h3>Install better systems</h3>
                <p>Use technology, automation and practical growth support to go further.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Signature Package */}
      <section className="package section">
        <div className="wrap">
          <div className="package-card reveal">
            <div className="package-main">
              <span className="pill">SIGNATURE OFFER</span>
              <h2>The Ultimate Business Launch Package.</h2>
              <p>
                A more complete way to start. This guided package brings the core building blocks of a professional business into one focused launch experience.
              </p>
              <div className="deliverables">
                <div className="deliverable">Business foundation support</div>
                <div className="deliverable">Brand identity essentials</div>
                <div className="deliverable">Digital presence setup</div>
                <div className="deliverable">Operational guidance</div>
                <div className="deliverable">Launch-ready systems</div>
                <div className="deliverable">Growth pathway planning</div>
              </div>
            </div>
            <aside className="package-side">
              <div>
                <div className="eyebrow" style={{ color: "#17382b" }}>
                  Built for founders
                </div>
                <h3>Start with intention. Launch with confidence.</h3>
                <p>Every business is different. We’ll help you shape the right scope for yours.</p>
              </div>
              <a href="#consult" className="btn">
                <span>Talk to our team</span>
                <span className="arrow">→</span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* 6. Services */}
      <section className="services section" id="services">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">What we do</div>
            <h2>Everything your business needs to show up, work better and grow.</h2>
            <p>Choose focused support or let us build a joined-up foundation around your goals.</p>
          </div>
          <div className="service-grid reveal">
            <Link className="service" href="/services">
              <div className="service-n">01</div>
              <h3>Business Registration &amp; Compliance</h3>
              <p>Business setup, structure guidance and practical compliance support.</p>
              <div className="s-arrow">↗</div>
            </Link>
            <Link className="service" href="/services">
              <div className="service-n">02</div>
              <h3>Brand Strategy &amp; Identity</h3>
              <p>Clear positioning and a brand presence your audience can trust.</p>
              <div className="s-arrow">↗</div>
            </Link>
            <Link className="service" href="/services">
              <div className="service-n">03</div>
              <h3>Website &amp; Digital Presence</h3>
              <p>High-performing digital homes that make it easy to be found and chosen.</p>
              <div className="s-arrow">↗</div>
            </Link>
            <Link className="service" href="/services">
              <div className="service-n">04</div>
              <h3>AI &amp; Business Automation</h3>
              <p>Practical systems that reduce friction and make everyday work smarter.</p>
              <div className="s-arrow">↗</div>
            </Link>
            <Link className="service" href="/services">
              <div className="service-n">05</div>
              <h3>Business Advisory</h3>
              <p>Strategic guidance for decisions, structure and sustained progress.</p>
              <div className="s-arrow">↗</div>
            </Link>
            <Link className="service" href="/services">
              <div className="service-n">06</div>
              <h3>Growth &amp; Visibility</h3>
              <p>Marketing and digital growth support built around the next opportunity.</p>
              <div className="s-arrow">↗</div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Why Eponix */}
      <section className="why section">
        <div className="wrap why-grid">
          <div className="reveal">
            <div className="eyebrow" style={{ color: "#367054" }}>
              Why Eponix
            </div>
            <h2>We see the whole business, not just the next task.</h2>
          </div>
          <div className="why-list reveal">
            <div className="why-item">
              <span>01</span>
              <div>
                <b>One strategic partner</b>
                <p>Connected expertise from foundation through growth.</p>
              </div>
              <span>↗</span>
            </div>
            <div className="why-item">
              <span>02</span>
              <div>
                <b>Built for the Nigerian market</b>
                <p>Local context, professional standards and practical direction.</p>
              </div>
              <span>↗</span>
            </div>
            <div className="why-item">
              <span>03</span>
              <div>
                <b>Clarity over complexity</b>
                <p>We make important business decisions easier to navigate.</p>
              </div>
              <span>↗</span>
            </div>
            <div className="why-item">
              <span>04</span>
              <div>
                <b>Systems that support growth</b>
                <p>Not just a launch, we help create momentum that lasts.</p>
              </div>
              <span>↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. How It Works */}
      <section className="how section" id="how">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">How it works</div>
            <h2>A simpler way to build well.</h2>
            <p>Clear steps. Collaborative decisions. A business that is more ready for what’s next.</p>
          </div>
          <div className="process reveal">
            <div className="process-item">
              <strong>01</strong>
              <h3>Discover</h3>
              <p>Tell us where you are and where you want the business to go.</p>
            </div>
            <div className="process-item">
              <strong>02</strong>
              <h3>Define</h3>
              <p>We shape the right priorities, scope and pathway together.</p>
            </div>
            <div className="process-item">
              <strong>03</strong>
              <h3>Build</h3>
              <p>Our specialists bring your foundations, brand and systems to life.</p>
            </div>
            <div className="process-item">
              <strong>04</strong>
              <h3>Move forward</h3>
              <p>Launch with confidence and keep building with the right support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Corporate Statement */}
      <section className="statement">
        <div className="wrap reveal">
          <blockquote>
            “We believe Nigerian businesses deserve the <em>same clarity, confidence and systems</em> as their biggest ambitions.”
          </blockquote>
          <cite>THE EPONIX CORPORATE STATEMENT</cite>
        </div>
      </section>

      {/* 10. Consultation Intake Form */}
      <section className="consult section" id="consult">
        <div className="wrap consult-grid">
          <div className="reveal">
            <div className="eyebrow">Let’s start a conversation</div>
            <h2>Build what your business needs next.</h2>
            <p>Tell us a little about your business. Our team will use it to begin the right conversation with you.</p>
          </div>
          <form className="form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">YOUR NAME</label>
              <input
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="service">WHAT DO YOU NEED HELP WITH?</label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="" disabled>Select a service</option>
                <option value="Business foundation">Business foundation</option>
                <option value="Brand and digital presence">Brand and digital presence</option>
                <option value="AI and automation">AI and automation</option>
                <option value="Growth support">Growth support</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">TELL US BRIEFLY</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
            <button className="btn primary" type="submit" disabled={isSubmitting}>
              <span>{isSubmitting ? "Submitting..." : "Request a consultation"}</span>
              <span className="arrow">→</span>
            </button>
            {isSubmitted && (
              <p style={{ color: "var(--lime)", marginTop: "19px", fontWeight: 700 }}>
                Thank you. Your consultation request is ready for our team.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="final">
        <div className="wrap final-row reveal">
          <h2>
            Ready to build with more <em>clarity?</em>
          </h2>
          <a href="#consult" className="btn">
            <span>Book a consultation</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
