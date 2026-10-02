import React from "react";
import Link from "next/link";
import {
  Users,
  ShieldCheck,
  Layers,
  TrendingUp,
  Compass,
  Eye,
  Gem,
  Lightbulb,
  Award,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "About Eponix Digital | Built for Business Progress",
  description:
    "Meet Eponix Digital - business infrastructure, legal compliance, branding and digital systems for ambitious Nigerian businesses.",
};

export default function AboutPage() {
  return (
    <div className="text-[#0c1210] bg-[#E6EADF]">
      {/* 1. HERO (Light Cream #E6EADF - High Contrast, Bold Black & Primary Green) */}
      <section className="relative overflow-hidden bg-[#E6EADF] text-[#0c1210] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] uppercase text-[#17382b] font-bold">
                <span className="w-6 h-[2px] bg-[#17382b]" />
                About Eponix Digital
              </div>
              <h1 className="text-[38px] sm:text-[54px] lg:text-[68px] font-bold leading-[1.02] tracking-[-0.05em] text-[#0c1210]">
                Built for the Business Behind{" "}
                <span className="text-[#17382b]">the Ambition.</span>
              </h1>
              <p className="text-[16px] sm:text-[18px] text-[#2b3a30] font-medium leading-relaxed max-w-xl">
                Eponix Digital is a business and digital solutions company helping Nigerian businesses build, brand, operate and grow with confidence - from registration to automation and beyond.
              </p>
              <div className="pt-2">
                <Link href="/services" className="btn primary inline-flex items-center gap-2">
                  <span>Our Services</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Executive Director Portrait */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-[#ced7cd] shadow-2xl group bg-[#07100c]">
                <img
                  src="/images/about-hero-director.jpg"
                  alt="Eponix Digital Executive Leadership"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRIC STRIP (Crisp Warm Light Cream Strip #f3f5ec) */}
      <section className="bg-[#f3f5ec] py-14 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#dce4d6] border border-[#c5d1bf] flex items-center justify-center text-[#17382b] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[28px] sm:text-[34px] font-black text-[#0c1210] leading-tight">500+</div>
                <div className="text-[13px] text-[#2b3a30] font-bold uppercase tracking-wider font-mono">Businesses Supported</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#dce4d6] border border-[#c5d1bf] flex items-center justify-center text-[#17382b] shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[28px] sm:text-[34px] font-black text-[#0c1210] leading-tight">98%</div>
                <div className="text-[13px] text-[#2b3a30] font-bold uppercase tracking-wider font-mono">Client Satisfaction</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#dce4d6] border border-[#c5d1bf] flex items-center justify-center text-[#17382b] shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[24px] sm:text-[28px] font-black text-[#0c1210] leading-tight">End-to-End</div>
                <div className="text-[13px] text-[#2b3a30] font-bold uppercase tracking-wider font-mono">Business Solutions</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#dce4d6] border border-[#c5d1bf] flex items-center justify-center text-[#17382b] shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[24px] sm:text-[28px] font-black text-[#0c1210] leading-tight">Ongoing</div>
                <div className="text-[13px] text-[#2b3a30] font-bold uppercase tracking-wider font-mono">Support &amp; Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & MISSION/VISION (Light Cream #E6EADF with Overlapping Mission/Vision Cards) */}
      <section className="bg-[#E6EADF] text-[#0c1210] py-24 lg:py-32 border-b border-[#ced7cd]" id="story">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Story Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] uppercase text-[#17382b] font-bold">
                <span className="w-6 h-[2px] bg-[#17382b]" />
                Our Story
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.05] tracking-[-0.05em] text-[#0c1210]">
                A Partner in Your <span className="text-[#17382b]">Business Journey.</span>
              </h2>
              <div className="space-y-4 text-[16px] sm:text-[17px] text-[#2b3a30] font-medium leading-relaxed">
                <p>
                  Eponix Digital was born from a simple belief - that Nigerian businesses deserve more than fragmented services and confusing processes.
                </p>
                <p>
                  We saw too many entrepreneurs struggling to figure out registration, compliance, branding, websites, marketing and systems on their own. So we built Eponix Digital - a single partner to help businesses do it right, from the start and at every stage of growth.
                </p>
              </div>
            </div>

            {/* Right Column: Executive Photo Container with Nested Overlapping Mission & Vision Cards */}
            <div className="lg:col-span-6">
              {/* Executive Image Container */}
              <div className="relative overflow-hidden rounded-3xl border border-[#ced7cd] shadow-2xl group bg-[#07100c]">
                <img
                  src="/images/how-it-works-executive.jpg"
                  alt="Eponix Digital Executive Strategy Consultation"
                  className="w-full h-[280px] sm:h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130c]/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Mission & Vision Cards (Nested into bottom portion of the image) */}
              <div className="-mt-16 sm:-mt-20 relative z-10 px-3 sm:px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Mission Card (Dark Obsidian) */}
                <div className="p-6 rounded-2xl bg-[#07130c] border border-[#1e3b2b] shadow-2xl space-y-3">
                  <div className="flex items-center gap-2 text-[#c9f95a]">
                    <Compass className="w-5 h-5 shrink-0" />
                    <span className="font-bold text-[14px] uppercase tracking-wider font-mono text-[#f4f6ed]">Our Mission</span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-[#c9d5cd] leading-relaxed">
                    To simplify business growth in Nigeria by providing integrated, reliable and forward-thinking solutions.
                  </p>
                </div>

                {/* Vision Card (Crisp Light Cream) */}
                <div className="p-6 rounded-2xl bg-[#dbe4d6] border border-[#bcc8b6] shadow-2xl space-y-3">
                  <div className="flex items-center gap-2 text-[#17382b]">
                    <Eye className="w-5 h-5 shrink-0" />
                    <span className="font-bold text-[14px] uppercase tracking-wider font-mono text-[#17382b]">Our Vision</span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-[#1e2f25] leading-relaxed font-medium">
                    To be Africa's most trusted partner for business registration, compliance, branding, digital infrastructure and intelligent growth solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES (Deep Forest Obsidian #07100c for Brand Depth) */}
      <section className="bg-[#07100c] text-[#f4f6ed] py-24 lg:py-32 border-b border-[rgba(201,249,90,0.14)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-[#c9f95a]">
                <span className="w-6 h-[2px] bg-[#c9f95a]" />
                Our Values
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.05] tracking-[-0.05em] text-[#f4f6ed]">
                The Principles <span className="text-[#c9f95a]">That Guide Us.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-[#aab6ad] leading-relaxed">
                Everything we do at Eponix Digital is built on a set of core values that shape how we work, support our clients and deliver results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Value 1 */}
            <div className="p-7 rounded-2xl bg-[#0b1710] border border-[#1b3425] hover:border-[rgba(201,249,90,0.4)] transition-all space-y-4 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Gem className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#ffffff]">Integrity</h3>
              <p className="text-[14px] text-[#c9d5cd] leading-relaxed">
                We do what is right, always.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-7 rounded-2xl bg-[#0b1710] border border-[#1b3425] hover:border-[rgba(201,249,90,0.4)] transition-all space-y-4 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#ffffff]">Client-Centred</h3>
              <p className="text-[14px] text-[#c9d5cd] leading-relaxed">
                Your success is our priority.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-7 rounded-2xl bg-[#0b1710] border border-[#1b3425] hover:border-[rgba(201,249,90,0.4)] transition-all space-y-4 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#ffffff]">Innovation</h3>
              <p className="text-[14px] text-[#c9d5cd] leading-relaxed">
                We use modern tools and smart solutions.
              </p>
            </div>

            {/* Value 4 */}
            <div className="p-7 rounded-2xl bg-[#0b1710] border border-[#1b3425] hover:border-[rgba(201,249,90,0.4)] transition-all space-y-4 shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[rgba(201,249,90,0.12)] border border-[rgba(201,249,90,0.25)] flex items-center justify-center text-[#c9f95a]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-[19px] font-bold text-[#ffffff]">Excellence</h3>
              <p className="text-[14px] text-[#c9d5cd] leading-relaxed">
                We deliver quality and measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT MAKES US DIFFERENT (Official Cream #E6EADF with Crisp Cards) */}
      <section className="bg-[#E6EADF] text-[#0c1210] py-24 lg:py-32 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.16em] uppercase text-[#17382b] font-bold">
                <span className="w-6 h-[2px] bg-[#17382b]" />
                What Makes Us Different
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.05] tracking-[-0.05em] text-[#0c1210]">
                More Than a Service Provider. <span className="block text-[#17382b]">A Growth Partner.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-[15px] text-[#2b3a30] font-medium leading-relaxed">
                We combine legal, strategic, creative and technical expertise to give you end-to-end business solutions under one roof.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1 */}
            <div className="p-7 rounded-2xl bg-[#f3f5ec] border border-[#c5d1bf] hover:border-[#17382b] transition-all space-y-4 shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#dce4d6] border border-[#bcc8b6] flex items-center justify-center text-[#17382b]">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1210]">End-to-End Solutions</h3>
              <p className="text-[13px] text-[#2b3a30] font-medium leading-relaxed">
                From registration to automation, we bring all the essential services together.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-7 rounded-2xl bg-[#f3f5ec] border border-[#c5d1bf] hover:border-[#17382b] transition-all space-y-4 shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#dce4d6] border border-[#bcc8b6] flex items-center justify-center text-[#17382b]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1210]">Experienced Team</h3>
              <p className="text-[13px] text-[#2b3a30] font-medium leading-relaxed">
                A team of professionals who understand the Nigerian business environment.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-7 rounded-2xl bg-[#f3f5ec] border border-[#c5d1bf] hover:border-[#17382b] transition-all space-y-4 shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#dce4d6] border border-[#bcc8b6] flex items-center justify-center text-[#17382b]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1210]">Technology-Driven</h3>
              <p className="text-[13px] text-[#2b3a30] font-medium leading-relaxed">
                We use modern tools, AI and automation to help you work smarter and grow faster.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-7 rounded-2xl bg-[#f3f5ec] border border-[#c5d1bf] hover:border-[#17382b] transition-all space-y-4 shadow-sm hover:shadow-md">
              <div className="w-11 h-11 rounded-xl bg-[#dce4d6] border border-[#bcc8b6] flex items-center justify-center text-[#17382b]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0c1210]">Practical Support</h3>
              <p className="text-[13px] text-[#2b3a30] font-medium leading-relaxed">
                Clear guidance, real solutions and ongoing support - not just one-time services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR IMPACT (Deep Forest #07100c) */}
      <section className="bg-[#07100c] text-[#f4f6ed] py-24 lg:py-32 border-b border-[rgba(201,249,90,0.14)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Team Visual */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl border border-[rgba(201,249,90,0.2)] shadow-2xl group bg-[#07100c]">
                <img
                  src="/images/about-impact-team.jpg"
                  alt="Eponix Digital Team Collaboration and Strategy Display"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Column: Impact Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-[#c9f95a]">
                <span className="w-6 h-[2px] bg-[#c9f95a]" />
                Our Impact
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.05] tracking-[-0.05em] text-[#f4f6ed]">
                Helping Businesses Build <span className="text-[#c9f95a]">Brighter Futures.</span>
              </h2>
              <p className="text-[16px] sm:text-[17px] text-[#aab6ad] leading-relaxed">
                From startups and SMEs to established companies, we have helped hundreds of Nigerian businesses build the right foundation, create powerful brands, stay compliant, go digital and scale with confidence.
              </p>
              <div className="pt-2">
                <Link href="/services" className="btn primary inline-flex items-center gap-2">
                  <span>Explore Our Services</span>
                  <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LET'S BUILD TOGETHER (Light Cream #E6EADF Canvas with High-Impact Obsidian Card) */}
      <section className="bg-[#E6EADF] text-[#f4f6ed] py-16 lg:py-20 border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#07130c] border border-[#1e3b2b] shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase text-[#c9f95a]">
                <span className="w-6 h-[2px] bg-[#c9f95a]" />
                Let's Build Together
              </div>
              <h2 className="text-[30px] sm:text-[42px] lg:text-[48px] font-bold leading-[1.08] tracking-[-0.05em] text-[#f4f6ed]">
                Your Business Deserves <span className="text-[#c9f95a]">What's Next.</span>
              </h2>
              <p className="text-[15px] sm:text-[16px] text-[#aab6ad] leading-relaxed">
                Book a consultation with our team and let's create a clear plan for your business - whether you're just starting or ready to scale.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/consult" className="btn primary !py-4 !px-8 text-[14px]">
                <span>Book a Consultation</span>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
