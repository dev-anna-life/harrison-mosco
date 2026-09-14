import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Eponix Digital | Eponix Digital",
  description:
    "Eponix Digital — business foundation, branding, digital systems, AI, automation and growth for businesses in Nigeria.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-20 lg:py-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">About Eponix Digital</div>
          <h1 className="heading-1">Built for the business behind the ambition.</h1>
          <p className="lead-text">
            Business moves differently when the right pieces connect.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Our Story</div>
              <h2 className="heading-2">Business moves differently when the right pieces connect.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Professional businesses should not have to figure it all out alone. Eponix Digital connects the practical pieces required to establish, present, operate and grow a business.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="ep-card">
              <div className="ep-tag">01</div>
              <h3 className="heading-3">Progress is connected.</h3>
              <p>Registration, identity, digital systems and growth work better when they are considered together.</p>
            </div>

            <div className="ep-card">
              <div className="ep-tag">02</div>
              <h3 className="heading-3">Clarity should lead to action.</h3>
              <p>We turn complex business needs into clear next steps and guided execution.</p>
            </div>

            <div className="ep-card">
              <div className="ep-tag">03</div>
              <h3 className="heading-3">A strong start has range.</h3>
              <p>Businesses need more than a certificate. They need a foundation they can build on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Approach */}
      <section className="bg-[#102118] py-20 lg:py-28 border-t border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Our Approach</div>
              <h2 className="heading-2">Built to move with the business.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Four practical stages keep the work connected.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#26362c]">
            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">01</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">Give the business its footing</b>
                <p className="text-[14px] text-[#aab6ad]">Foundation, registration and compliance.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">02</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">Make it recognisable</b>
                <p className="text-[14px] text-[#aab6ad]">Brand identity and professional presentation.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">03</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">Make it work more smoothly</b>
                <p className="text-[14px] text-[#aab6ad]">Digital systems, AI and automation.</p>
              </div>
            </div>

            <div className="bg-[#0b1510] p-7 min-h-[180px] flex flex-col justify-between">
              <div className="ep-num">04</div>
              <div>
                <b className="text-[16px] text-[#f5f7ef] tracking-wide block mb-1">Keep it ready to grow</b>
                <p className="text-[14px] text-[#aab6ad]">Visibility, marketing and growth support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Values */}
      <section className="bg-[#101914] py-20 lg:py-28 border-b border-[#26362c]">
        <div className="site-container">
          <div className="mb-12">
            <div className="eyebrow">Values</div>
            <h2 className="heading-2">How we work.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="ep-card">
              <h3 className="heading-3">Useful clarity</h3>
              <p>Clear advice that leads somewhere.</p>
            </div>

            <div className="ep-card">
              <h3 className="heading-3">Care in the details</h3>
              <p>Small details matter to professional businesses.</p>
            </div>

            <div className="ep-card">
              <h3 className="heading-3">Work that holds up</h3>
              <p>Build for real use, not just appearance.</p>
            </div>

            <div className="ep-card">
              <h3 className="heading-3">Human partnership</h3>
              <p>Guidance with people at the centre.</p>
            </div>

            <div className="ep-card">
              <h3 className="heading-3">Forward energy</h3>
              <p>Always looking for the next practical improvement.</p>
            </div>

            <div className="ep-card">
              <h3 className="heading-3">Local insight</h3>
              <p>Built with the Nigerian business environment in mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Band */}
      <section className="bg-[#10261a] text-[#f5f7ef] py-20 border-t border-b border-[#33473a]">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <h2 className="heading-2 mb-0">Let&apos;s build a business that is ready to move.</h2>
          <Link href="/#consultation" className="ep-btn ep-btn-primary whitespace-nowrap">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
