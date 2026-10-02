"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Layers, Users, Zap, Lock, Cpu, TrendingUp } from "lucide-react";

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
              <a className="btn primary" href="#package">
                <span>View Ultimate Package</span>
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
      <section className="package section" id="package">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-6 space-y-6 reveal">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c9f95a]" />
                <span className="eyebrow">Nigeria Services</span>
              </div>

              <h2 className="heading-1 !text-left !my-0">
                Ultimate Nigeria Business Launch Package
              </h2>

              <p className="lead-text !max-w-none text-[#c9d5cd]">
                We help businesses move from idea to operation, and from operation to growth with CAC registration, compliance, trademark protection, premium branding, digital infrastructure, AI and automation under one roof.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="/ultimate" className="btn primary">
                  <span>View Ultimate Package</span>
                  <span className="arrow">→</span>
                </Link>
                <Link
                  href="/ultimate#application"
                  className="btn"
                  style={{ background: "#ffffff", color: "#0c1210", borderColor: "#ffffff" }}
                >
                  <span>Get Started</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Showcase Image */}
            <div className="lg:col-span-6 reveal">
              <div className="relative overflow-hidden rounded-2xl border border-[rgba(201,249,90,0.2)] shadow-[0_20px_60px_rgba(0,0,0,0.6)] group">
                <img
                  src="/images/ultimate-boardroom.jpg"
                  alt="Eponix Digital Executive Business Launch Strategy & Infrastructure"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Eponix Digital / More Than a Service Provider */}
      <section className="bg-[#07100c] text-[#f4f6ed] py-24 lg:py-32 border-b border-[rgba(201,249,90,0.14)]" id="services">
        <div className="site-container">
          {/* Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-8 space-y-4 reveal">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[rgba(201,249,90,0.4)] bg-[rgba(201,249,90,0.08)] font-mono text-[11px] uppercase tracking-wider text-[#c9f95a]">
                Why Choose Eponix Digital
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-bold leading-[1.05] tracking-[-0.05em] text-[#f4f6ed]">
                More Than a Service Provider.
                <span className="block text-[#c9f95a]">A Growth Partner.</span>
              </h2>
              <p className="text-[15px] sm:text-[17px] text-[#aab6ad] max-w-2xl leading-relaxed">
                We combine expertise, technology and a deep understanding of Nigerian business needs to give you practical solutions that work - from registration to automation and beyond.
              </p>
            </div>

            <div className="lg:col-span-4 reveal">
              <div className="border-l-2 border-[#c9f95a] pl-5 py-2">
                <p className="text-[14px] sm:text-[15px] text-[#ccd9cf] leading-relaxed">
                  Your business deserves more than just registration. You deserve a partner that understands your journey and helps you <strong className="text-[#c9f95a] font-semibold">build, brand and grow</strong> with confidence.
                </p>
              </div>
            </div>
          </div>

          {/* 6 Grid Cards - Icons, Headlines & Descriptions ONLY */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 reveal">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-[rgba(13,26,19,0.85)] border border-[#213527] hover:border-[rgba(201,249,90,0.4)] transition-all duration-300 flex flex-col justify-start space-y-4 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#f4f6ed] leading-snug">
                All-in-One Business Solutions
              </h3>
              <p className="text-[14px] text-[#aab6ad] leading-relaxed">
                From CAC registration and compliance to branding, digital and automation - everything your business needs in one place.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-[rgba(13,26,19,0.85)] border border-[#213527] hover:border-[rgba(201,249,90,0.4)] transition-all duration-300 flex flex-col justify-start space-y-4 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#f4f6ed] leading-snug">
                Expert Team with Real Experience
              </h3>
              <p className="text-[14px] text-[#aab6ad] leading-relaxed">
                Our team has hands-on experience in business registration, compliance, branding, technology and digital growth in the Nigerian market.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-[rgba(13,26,19,0.85)] border border-[#213527] hover:border-[rgba(201,249,90,0.4)] transition-all duration-300 flex flex-col justify-start space-y-4 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#f4f6ed] leading-snug">
                Fast, Reliable &amp; Accurate
              </h3>
              <p className="text-[14px] text-[#aab6ad] leading-relaxed">
                We streamline processes and work directly with the right institutions to ensure fast turnaround without compromising accuracy.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-[rgba(13,26,19,0.85)] border border-[#213527] hover:border-[rgba(201,249,90,0.4)] transition-all duration-300 flex flex-col justify-start space-y-4 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#f4f6ed] leading-snug">
                Confidential &amp; Professional
              </h3>
              <p className="text-[14px] text-[#aab6ad] leading-relaxed">
                Your information is handled with the highest level of confidentiality, discretion and professionalism.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-7 rounded-2xl bg-[rgba(13,26,19,0.85)] border border-[#213527] hover:border-[rgba(201,249,90,0.4)] transition-all duration-300 flex flex-col justify-start space-y-4 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#f4f6ed] leading-snug">
                Technology-Driven Solutions
              </h3>
              <p className="text-[14px] text-[#aab6ad] leading-relaxed">
                We use modern tools, automation and AI to make business setup, compliance and growth easier, faster and more efficient.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-7 rounded-2xl bg-[rgba(13,26,19,0.85)] border border-[#213527] hover:border-[rgba(201,249,90,0.4)] transition-all duration-300 flex flex-col justify-start space-y-4 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#f4f6ed] leading-snug">
                End-to-End Support &amp; Long-Term Partnership
              </h3>
              <p className="text-[14px] text-[#aab6ad] leading-relaxed">
                We do not just help you start - we stay with you. From your first registration to scaling with AI and digital marketing, we are your long-term growth partner.
              </p>
            </div>
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
          <Link href="/consult" className="btn">
            <span>Book a consultation</span>
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
