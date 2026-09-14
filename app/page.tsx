"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Business foundation",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          whatsappPhone: "+2340000000000",
          email: formData.email,
          proposedBusinessName: "Consultation Request",
          packageInterested: formData.service || "Business foundation",
          shareCapitalMillions: 1,
          notes: formData.message,
          source: "eponix_home_consult_form",
        }),
      });

      if (!res.ok) throw new Error("Failed to submit inquiry");
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Could not submit request. Please try again or message us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      num: "01",
      title: "Business Registration & Compliance",
      desc: "Business setup, structure guidance and practical compliance support.",
      href: "/services",
    },
    {
      num: "02",
      title: "Brand Strategy & Identity",
      desc: "Clear positioning and a brand presence your audience can trust.",
      href: "/services",
    },
    {
      num: "03",
      title: "Website & Digital Presence",
      desc: "High-performing digital homes that make it easy to be found and chosen.",
      href: "/services",
    },
    {
      num: "04",
      title: "AI & Business Automation",
      desc: "Practical systems that reduce friction and make everyday work smarter.",
      href: "/services",
    },
    {
      num: "05",
      title: "Business Advisory",
      desc: "Strategic guidance for decisions, structure and sustained progress.",
      href: "/services",
    },
    {
      num: "06",
      title: "Growth & Visibility",
      desc: "Marketing and digital growth support built around the next opportunity.",
      href: "/services",
    },
  ];

  return (
    <div className="text-[#f4f6ed]">
      {/* 1. HERO SECTION (Dark #101713) */}
      <section className="min-h-[780px] lg:min-h-[830px] flex items-end relative overflow-hidden bg-[#101713]">
        {/* Hero Background Gradient Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#17382b] via-[#101713] to-[#0c1210]" />

        <div className="wrap w-full relative z-10 pb-16 pt-32 lg:pt-48">
          <div className="max-w-[720px] space-y-5">
            <div className="eyebrow">Business &amp; Digital Solutions</div>
            <h1 className="text-[44px] sm:text-[60px] md:text-[76px] lg:text-[96px] font-bold leading-[0.98] tracking-[-0.072em] text-[#f4f6ed]">
              We Build,{" "}
              <em className="font-serif italic font-semibold text-[#c9f95a]">Brand</em>{" "}
              &amp; Grow Businesses.
            </h1>
            <p className="max-w-[590px] text-[#dae0db] text-[15px] sm:text-[16px] leading-[1.72]">
              From business registration and compliance to branding, digital presence, AI, automation and growth, Eponix Digital builds the infrastructure your business needs to operate professionally and grow.
            </p>
            <div className="pt-3 flex flex-wrap items-center gap-3.5">
              <a href="#consult" className="btn primary">
                <span>Book a Consultation</span>
                <span className="text-[18px] leading-none">→</span>
              </a>
              <Link href="/services" className="btn">
                <span>Explore Our Services</span>
                <span className="text-[18px] leading-none">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-20 pt-5 border-t border-[rgba(244,246,237,0.14)] font-mono text-[10px] tracking-[0.13em] text-[#d9e1d9]">
            BUSINESS FOUNDATION · BRANDING · DIGITAL · AI &amp; AUTOMATION · GROWTH
          </div>
        </div>

        {/* Scroll Tag Indicator */}
        <div className="hidden lg:block absolute right-7 bottom-16 [writing-mode:vertical-rl] font-mono text-[10px] tracking-[0.18em] text-[#e0e8e0]">
          SCROLL TO EXPLORE
          <span className="block w-[1px] h-[51px] bg-[#c9f95a] mx-auto mt-4" />
        </div>
      </section>

      {/* 2. TICKER STRIP (Electric Lime #c9f95a) */}
      <div className="bg-[#c9f95a] text-[#0c1210] py-5 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap justify-center font-extrabold text-[12px] tracking-[0.03em]">
          <span>REGISTER <i className="not-italic text-[17px]">✦</i></span>
          <span>BUILD <i className="not-italic text-[17px]">✦</i></span>
          <span>BRAND <i className="not-italic text-[17px]">✦</i></span>
          <span>DIGITISE <i className="not-italic text-[17px]">✦</i></span>
          <span>GROW <i className="not-italic text-[17px]">✦</i></span>
        </div>
      </div>

      {/* 3. ABOUT SECTION (Light Cream #f4f6ed) */}
      <section className="bg-[#f4f6ed] text-[#0c1210] py-24 lg:py-28" id="about">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-6 space-y-4">
              <div className="font-mono text-[10px] font-medium tracking-[0.17em] uppercase text-[#367054]">
                More than a service provider
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[62px] font-bold leading-[1.03] tracking-[-0.065em] text-[#0c1210]">
                Your business needs a{" "}
                <span className="font-serif italic font-semibold text-[#367054]">stronger foundation.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 space-y-6 pt-2">
              <p className="text-[17px] sm:text-[18px] text-[#425148] leading-relaxed">
                Eponix Digital is a business infrastructure and digital systems company for ambitious founders, growing teams and established organisations across Nigeria.
              </p>
              <p className="text-[17px] sm:text-[18px] text-[#425148] leading-relaxed">
                We bring the essential pieces together—so your business is properly structured, clearly positioned and ready to scale with confidence.
              </p>

              <div className="mt-8 border-t border-[#cbd2c7]">
                <div className="py-4 border-b border-[#cbd2c7] flex items-center justify-between font-extrabold text-[15px] text-[#0c1210]">
                  <span>Built for real business growth</span>
                  <span className="font-mono text-[11px] text-[#607067]">01</span>
                </div>
                <div className="py-4 border-b border-[#cbd2c7] flex items-center justify-between font-extrabold text-[15px] text-[#0c1210]">
                  <span>Designed around your next stage</span>
                  <span className="font-mono text-[11px] text-[#607067]">02</span>
                </div>
                <div className="py-4 border-b border-[#cbd2c7] flex items-center justify-between font-extrabold text-[15px] text-[#0c1210]">
                  <span>Powered by practical systems</span>
                  <span className="font-mono text-[11px] text-[#607067]">03</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. JOURNEY SECTION (Split: Left Green #17382b / Right Light Sage #e6eadf) */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column (Dark Forest Green #17382b) */}
        <div className="bg-[#17382b] text-[#f4f6ed] py-20 lg:py-28 px-7 sm:px-12 lg:px-16 flex flex-col justify-center">
          <div className="max-w-[440px] space-y-4">
            <div className="eyebrow">The Eponix journey</div>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[58px] font-bold leading-[1.02] tracking-[-0.06em] text-[#f4f6ed]">
              From idea to a business built to move.
            </h2>
            <p className="text-[#c3d1c7] text-[15px] sm:text-[16px] leading-relaxed">
              One thoughtful journey. The right support at every important step.
            </p>
          </div>
        </div>

        {/* Right Column (Light Sage #e6eadf) */}
        <div className="bg-[#e6eadf] text-[#0c1210] py-16 lg:py-24 px-7 sm:px-12 lg:px-16 flex flex-col justify-center">
          <div className="max-w-[500px]">
            <div className="grid grid-cols-[56px_1fr] gap-5 py-5 border-b border-[#bbc3b9]">
              <div className="font-mono font-medium text-[11px] text-[#4f6758]">01 / START</div>
              <div>
                <h3 className="text-[19px] font-bold tracking-[-0.04em] text-[#0c1210] mb-1">Clarify the vision</h3>
                <p className="text-[13px] text-[#536258] leading-relaxed">We help turn an idea into a clear, actionable business direction.</p>
              </div>
            </div>

            <div className="grid grid-cols-[56px_1fr] gap-5 py-5 border-b border-[#bbc3b9]">
              <div className="font-mono font-medium text-[11px] text-[#4f6758]">02 / STRUCT</div>
              <div>
                <h3 className="text-[19px] font-bold tracking-[-0.04em] text-[#0c1210] mb-1">Build the foundation</h3>
                <p className="text-[13px] text-[#536258] leading-relaxed">Set up the legal, operational and strategic basics for professional business.</p>
              </div>
            </div>

            <div className="grid grid-cols-[56px_1fr] gap-5 py-5 border-b border-[#bbc3b9]">
              <div className="font-mono font-medium text-[11px] text-[#4f6758]">03 / PRESENT</div>
              <div>
                <h3 className="text-[19px] font-bold tracking-[-0.04em] text-[#0c1210] mb-1">Shape the brand</h3>
                <p className="text-[13px] text-[#536258] leading-relaxed">Create a confident identity and digital presence that earns attention.</p>
              </div>
            </div>

            <div className="grid grid-cols-[56px_1fr] gap-5 py-5">
              <div className="font-mono font-medium text-[11px] text-[#4f6758]">04 / GROW</div>
              <div>
                <h3 className="text-[19px] font-bold tracking-[-0.04em] text-[#0c1210] mb-1">Install better systems</h3>
                <p className="text-[13px] text-[#536258] leading-relaxed">Use technology, automation and practical growth support to go further.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE OFFER / PACKAGE SECTION (Dark #151e1a + Lime #c9f95a Side) */}
      <section className="bg-[#151e1a] py-24 lg:py-28" style={{ background: "radial-gradient(circle at 78% 15%, #315e46 0, transparent 32%), #151e1a" }}>
        <div className="wrap">
          <div className="border border-[rgba(244,246,237,0.14)] grid grid-cols-1 lg:grid-cols-12">
            {/* Package Main Left (Dark) */}
            <div className="lg:col-span-8 p-8 sm:p-14 space-y-6">
              <div className="inline-block border border-[#c9f95a]/45 text-[#c9f95a] px-2.5 py-1 font-mono text-[10px] tracking-[0.1em]">
                SIGNATURE OFFER
              </div>
              <h2 className="text-[32px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.06] tracking-[-0.06em] text-[#f4f6ed]">
                The Ultimate Business Launch Package.
              </h2>
              <p className="text-[#c2ccc5] text-[15px] leading-relaxed max-w-[620px]">
                A more complete way to start. This guided package brings the core building blocks of a professional business into one focused launch experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 pt-4">
                {[
                  "Business foundation support",
                  "Brand identity essentials",
                  "Digital presence setup",
                  "Operational guidance",
                  "Launch-ready systems",
                  "Growth pathway planning",
                ].map((item, idx) => (
                  <div key={idx} className="py-3.5 border-t border-[rgba(244,246,237,0.14)] font-bold text-[13px] text-[#f4f6ed] flex items-center gap-3">
                    <span className="text-[#c9f95a] text-[14px]">↗</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Side Right (Electric Lime #c9f95a) */}
            <div className="lg:col-span-4 p-8 sm:p-12 bg-[#c9f95a] text-[#0c1210] flex flex-col justify-between space-y-8">
              <div className="space-y-3">
                <div className="font-mono text-[10px] font-medium tracking-[0.17em] uppercase text-[#17382b]">
                  Built for founders
                </div>
                <h3 className="text-[26px] sm:text-[30px] font-bold leading-[1.1] tracking-[-0.05em] text-[#0c1210]">
                  Start with intention. Launch with confidence.
                </h3>
                <p className="text-[13px] text-[#1e3427] leading-relaxed">
                  Every business is different. We’ll help you shape the right scope for yours.
                </p>
              </div>

              <div>
                <a href="#consult" className="btn dark">
                  <span>Talk to our team</span>
                  <span className="text-[18px] leading-none">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES GRID (Dark Obsidian #101713) */}
      <section className="bg-[#101713] text-[#f4f6ed] py-24 lg:py-28 border-t border-[rgba(244,246,237,0.14)]" id="services">
        <div className="wrap">
          <div className="max-w-[690px] space-y-4 mb-14">
            <div className="eyebrow">What we do</div>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[58px] font-bold leading-[1.08] tracking-[-0.055em] text-[#f4f6ed]">
              Everything your business needs to show up, work better and grow.
            </h2>
            <p className="text-[#b8c1bb] text-[15px]">
              Choose focused support or let us build a joined-up foundation around your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[rgba(244,246,237,0.14)]">
            {services.map((srv) => (
              <Link
                key={srv.num}
                href={srv.href}
                className="p-8 border-r border-b border-[rgba(244,246,237,0.14)] min-h-[280px] flex flex-col justify-between hover:bg-[#17382b] transition-colors relative group"
              >
                <div>
                  <span className="font-mono text-[11px] text-[#c9f95a] block mb-8">
                    {srv.num}
                  </span>
                  <h3 className="text-[21px] font-bold leading-[1.15] tracking-[-0.045em] text-[#f4f6ed] mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-[13px] text-[#aebbb3] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-8 text-[#c9f95a] text-[20px] font-bold self-end group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY EPONIX SECTION (Light Cream #f4f6ed) */}
      <section className="bg-[#f4f6ed] text-[#0c1210] py-24 lg:py-28">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-[10px] font-medium tracking-[0.17em] uppercase text-[#367054]">
                Why Eponix
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[58px] font-bold leading-[1.03] tracking-[-0.065em] text-[#0c1210]">
                We see the whole business, not just the next task.
              </h2>
            </div>

            <div className="lg:col-span-7 border-t border-[#cbd2c7]">
              {[
                {
                  num: "01",
                  title: "One strategic partner",
                  desc: "Connected expertise from foundation through growth.",
                },
                {
                  num: "02",
                  title: "Built for the Nigerian market",
                  desc: "Local context, professional standards and practical direction.",
                },
                {
                  num: "03",
                  title: "Clarity over complexity",
                  desc: "We make important business decisions easier to navigate.",
                },
                {
                  num: "04",
                  title: "Systems that support growth",
                  desc: "Not just a launch—we help create momentum that lasts.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="grid grid-cols-[45px_1fr_auto] items-center gap-3 py-5 border-b border-[#cbd2c7]"
                >
                  <span className="font-mono text-[11px] text-[#66736a]">{item.num}</span>
                  <div>
                    <b className="text-[17px] sm:text-[18px] tracking-[-0.045em] text-[#0c1210] block">
                      {item.title}
                    </b>
                    <p className="text-[#66736a] text-[12px] mt-0.5">{item.desc}</p>
                  </div>
                  <span className="text-[#66736a] text-[16px]">↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. HOW IT WORKS SECTION (Deep Forest Green #17382b) */}
      <section className="bg-[#17382b] text-[#f4f6ed] py-24 lg:py-28 border-t border-b border-white/10" id="how">
        <div className="wrap">
          <div className="max-w-[690px] space-y-4 mb-16">
            <div className="eyebrow">How it works</div>
            <h2 className="text-[34px] sm:text-[46px] lg:text-[58px] font-bold leading-[1.08] tracking-[-0.055em] text-[#f4f6ed]">
              A simpler way to build well.
            </h2>
            <p className="text-[#c7d5cb] text-[15px]">
              Clear steps. Collaborative decisions. A business that is more ready for what’s next.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/20">
            {[
              {
                num: "01",
                title: "Discover",
                desc: "Tell us where you are and where you want the business to go.",
              },
              {
                num: "02",
                title: "Define",
                desc: "We shape the right priorities, scope and pathway together.",
              },
              {
                num: "03",
                title: "Build",
                desc: "Our specialists bring your foundations, brand and systems to life.",
              },
              {
                num: "04",
                title: "Move forward",
                desc: "Launch with confidence and keep building with the right support.",
              },
            ].map((step, idx) => (
              <div
                key={step.num}
                className={`py-8 sm:pr-6 min-h-[220px] ${idx < 3 ? "lg:border-r border-white/20" : ""}`}
              >
                <strong className="block text-[#c9f95a] font-mono text-[11px] mb-8">
                  {step.num}
                </strong>
                <h3 className="text-[22px] font-bold tracking-[-0.04em] leading-[1.18] text-[#f4f6ed] mb-2">
                  {step.title}
                </h3>
                <p className="text-[12px] text-[#c0d0c6] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CORPORATE STATEMENT SECTION (Light Sage #dfe5d8) */}
      <section className="py-28 lg:py-36 bg-[#dfe5d8] text-[#0c1210] text-center">
        <div className="wrap">
          <blockquote className="max-w-[1050px] mx-auto font-serif text-[28px] sm:text-[42px] lg:text-[62px] font-semibold leading-[1.12] tracking-[-0.055em] text-[#0c1210]">
            “We believe Nigerian businesses deserve the{" "}
            <em className="italic text-[#3b7858] font-normal">
              same clarity, confidence and systems
            </em>{" "}
            as their biggest ambitions.”
          </blockquote>
          <cite className="block mt-8 font-mono text-[11px] tracking-[0.13em] not-italic text-[#57675c] uppercase">
            — THE EPONIX CORPORATE STATEMENT
          </cite>
        </div>
      </section>

      {/* 10. CONSULTATION INTAKE FORM (Dark #101713) */}
      <section className="bg-[#101713] text-[#f4f6ed] py-24 lg:py-28 border-t border-[rgba(244,246,237,0.14)]" id="consult">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* Info Left */}
            <div className="lg:col-span-5 space-y-5">
              <div className="eyebrow">Let’s start a conversation</div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[62px] font-bold leading-[1.0] tracking-[-0.07em] text-[#f4f6ed]">
                Build what your business needs next.
              </h2>
              <p className="text-[#b5c1ba] text-[15px] leading-relaxed max-w-[410px]">
                Tell us a little about your business. Our team will use it to begin the right conversation with you.
              </p>
            </div>

            {/* Form Right */}
            <div className="lg:col-span-7">
              {isSubmitted ? (
                <div className="p-8 border border-[#c9f95a]/40 bg-[#151e1a] text-center space-y-4">
                  <div className="w-12 h-12 bg-[#c9f95a] text-[#0c1210] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-[22px] font-bold text-[#f4f6ed]">Consultation Request Received</h3>
                  <p className="text-[14px] text-[#c2ccc5] max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your request for <em>{formData.service}</em> has been routed to our team. We will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", service: "Business foundation", message: "" });
                    }}
                    className="btn primary !mt-4"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="border-t border-[rgba(244,246,237,0.14)]">
                  {errorMessage && (
                    <div className="p-3 mb-4 text-xs bg-red-950 text-red-200 border border-red-800">
                      {errorMessage}
                    </div>
                  )}

                  <div className="relative border-b border-[rgba(244,246,237,0.14)]">
                    <label className="absolute top-5 left-0 font-mono text-[10px] tracking-[0.1em] text-[#98a89d] uppercase">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-0 outline-none bg-transparent text-[#f4f6ed] font-semibold text-[16px] pt-11 pb-4"
                    />
                  </div>

                  <div className="relative border-b border-[rgba(244,246,237,0.14)]">
                    <label className="absolute top-5 left-0 font-mono text-[10px] tracking-[0.1em] text-[#98a89d] uppercase">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-0 outline-none bg-transparent text-[#f4f6ed] font-semibold text-[16px] pt-11 pb-4"
                    />
                  </div>

                  <div className="relative border-b border-[rgba(244,246,237,0.14)]">
                    <label className="absolute top-5 left-0 font-mono text-[10px] tracking-[0.1em] text-[#98a89d] uppercase">
                      WHAT DO YOU NEED HELP WITH?
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full border-0 outline-none bg-transparent text-[#f4f6ed] font-semibold text-[16px] pt-11 pb-4 cursor-pointer"
                    >
                      <option className="text-[#0c1210]" value="Business foundation">Business foundation</option>
                      <option className="text-[#0c1210]" value="Brand and digital presence">Brand and digital presence</option>
                      <option className="text-[#0c1210]" value="AI and automation">AI and automation</option>
                      <option className="text-[#0c1210]" value="Growth support">Growth support</option>
                      <option className="text-[#0c1210]" value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>

                  <div className="relative border-b border-[rgba(244,246,237,0.14)]">
                    <label className="absolute top-5 left-0 font-mono text-[10px] tracking-[0.1em] text-[#98a89d] uppercase">
                      TELL US BRIEFLY
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border-0 outline-none bg-transparent text-[#f4f6ed] font-semibold text-[16px] pt-11 pb-4 h-[110px] resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn primary !mt-7 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Submitting..." : "Request a consultation"}</span>
                    <span className="text-[18px] leading-none">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA BANNER (Electric Lime #c9f95a) */}
      <section className="bg-[#c9f95a] text-[#0c1210] py-24 lg:py-28">
        <div className="wrap flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-[38px] sm:text-[56px] lg:text-[80px] font-bold leading-[0.97] tracking-[-0.075em] max-w-[830px]">
            Ready to build with more{" "}
            <em className="font-serif italic font-semibold text-[#0c1210]">clarity?</em>
          </h2>
          <a href="#consult" className="btn dark whitespace-nowrap">
            <span>Book a consultation</span>
            <span className="text-[18px] leading-none">→</span>
          </a>
        </div>
      </section>
    </div>
  );
}
