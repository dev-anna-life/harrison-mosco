import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About Eponix Digital — Built for Business Progress",
  description:
    "Meet Eponix Digital—business infrastructure and digital systems for ambitious Nigerian businesses.",
};

export default function AboutPage() {
  return (
    <div className="text-[#f4f6ed]">
      {/* 1. HERO (Dark #101612) */}
      <section className="min-h-[640px] lg:min-h-[700px] flex items-end relative overflow-hidden bg-[#101612]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#17382b] via-[#101612] to-[#08100d]" />

        <div className="wrap w-full relative z-10 pb-16 pt-32 lg:pt-44">
          <div className="max-w-[750px] space-y-4">
            <div className="eyebrow">About Eponix Digital</div>
            <h1 className="text-[44px] sm:text-[60px] lg:text-[88px] font-bold leading-[0.98] tracking-[-0.073em] text-[#f4f6ed]">
              Built for the business{" "}
              <em className="font-serif italic font-semibold text-[#c9f95a]">behind</em>{" "}
              the ambition.
            </h1>
            <p className="max-w-[580px] text-[#d6dfd8] text-[16px] sm:text-[17px] leading-relaxed">
              We help Nigerian founders and teams put the right foundations, identity and systems in place—so their next move is a stronger one.
            </p>
          </div>
        </div>

        {/* Circular Stamp */}
        <div className="hidden lg:grid absolute right-10 bottom-16 border border-[rgba(244,246,237,0.17)] w-[114px] h-[114px] rounded-full place-items-center text-center font-mono text-[9px] leading-[1.5] tracking-[0.1em] text-[#c9f95a] rotate-[-11deg]">
          BUILD<br />WITH<br />CLARITY<br />✦
        </div>
      </section>

      {/* 2. OUR STORY (Light Cream #f3f5ec) */}
      <section className="bg-[#f3f5ec] text-[#0c1210] py-24 lg:py-28" id="story">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-[10px] font-medium tracking-[0.17em] uppercase text-[#39755a]">
                Our story
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[62px] font-bold leading-[1.03] tracking-[-0.067em] text-[#0c1210]">
                Business moves differently when the{" "}
                <em className="font-serif italic font-semibold text-[#39755a]">right pieces connect.</em>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 pt-2">
              <p className="text-[17px] sm:text-[18px] text-[#435349] leading-relaxed">
                Eponix Digital was created around a simple observation: many capable businesses have ambition, but not always the connected foundations that allow ambition to become progress.
              </p>
              <p className="text-[17px] sm:text-[18px] text-[#435349] leading-relaxed">
                We exist to close that gap. By bringing business structure, brand thinking, digital presence and practical systems together, we help businesses become clearer, more credible and more ready for opportunity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[#cbd3c9] pt-6 mt-10 gap-6 sm:gap-0">
                <div className="sm:pr-4">
                  <b className="block text-[16px] tracking-[-0.04em] text-[#0c1210]">Foundation</b>
                  <span className="block font-mono text-[10px] text-[#68766d] mt-1">STRUCTURE FIRST</span>
                </div>
                <div className="sm:px-4 sm:border-l border-[#cbd3c9]">
                  <b className="block text-[16px] tracking-[-0.04em] text-[#0c1210]">Expression</b>
                  <span className="block font-mono text-[10px] text-[#68766d] mt-1">BRAND WITH PURPOSE</span>
                </div>
                <div className="sm:pl-4 sm:border-l border-[#cbd3c9]">
                  <b className="block text-[16px] tracking-[-0.04em] text-[#0c1210]">Momentum</b>
                  <span className="block font-mono text-[10px] text-[#68766d] mt-1">SYSTEMS FOR GROWTH</span>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-sm border border-[#cbd3c9] shadow-md">
                <img 
                  src="/images/executive-boardroom.jpg" 
                  alt="Eponix Executive Strategy & Boardroom Consultation" 
                  className="w-full h-[260px] sm:h-[320px] object-cover hover:scale-105 transition-transform duration-700" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE BELIEVE (Deep Forest Green #17382b) */}
      <section className="bg-[#17382b] text-[#f4f6ed] py-24 lg:py-28">
        <div className="wrap space-y-16">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 pb-12 border-b border-[rgba(244,246,237,0.17)]">
            <div>
              <div className="eyebrow">What we believe</div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[62px] font-bold leading-[1.02] tracking-[-0.067em] text-[#f4f6ed] max-w-[700px] mt-3">
                Professional businesses should not have to figure it all out alone.
              </h2>
            </div>
            <p className="max-w-[310px] text-[#c9d5cd] text-[13px] leading-relaxed lg:mt-6">
              Our work is thoughtful, practical and joined-up. We look beyond a single task to what will genuinely help the business move forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            <div className="md:pr-8 md:border-r border-[rgba(244,246,237,0.17)]">
              <span className="font-mono text-[10px] text-[#c9f95a]">01 / SEE THE WHOLE</span>
              <h3 className="text-[21px] font-bold tracking-[-0.045em] leading-[1.1] text-[#f4f6ed] mt-8 mb-2">
                Progress is connected.
              </h3>
              <p className="text-[13px] text-[#bfcdc4] leading-relaxed max-w-[290px]">
                Registration, brand, digital presence and operations work better when they support one clear direction.
              </p>
            </div>

            <div className="md:px-8 md:border-r border-[rgba(244,246,237,0.17)]">
              <span className="font-mono text-[10px] text-[#c9f95a]">02 / MAKE IT PRACTICAL</span>
              <h3 className="text-[21px] font-bold tracking-[-0.045em] leading-[1.1] text-[#f4f6ed] mt-8 mb-2">
                Clarity should lead to action.
              </h3>
              <p className="text-[13px] text-[#bfcdc4] leading-relaxed max-w-[290px]">
                We make complicated decisions easier to understand and turn strong ideas into useful next steps.
              </p>
            </div>

            <div className="md:pl-8">
              <span className="font-mono text-[10px] text-[#c9f95a]">03 / BUILD FOR WHAT’S NEXT</span>
              <h3 className="text-[21px] font-bold tracking-[-0.045em] leading-[1.1] text-[#f4f6ed] mt-8 mb-2">
                A strong start has range.
              </h3>
              <p className="text-[13px] text-[#bfcdc4] leading-relaxed max-w-[290px]">
                Every foundation should create room for the business you are building toward—not only where it is today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE EPONIX APPROACH / MODEL (Light Sage #dce4d8) */}
      <section className="bg-[#dce4d8] text-[#0c1210] py-24 lg:py-28">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="font-mono text-[10px] font-medium tracking-[0.17em] uppercase text-[#39755a]">
                The Eponix approach
              </div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[60px] font-bold leading-[1.03] tracking-[-0.067em] text-[#0c1210]">
                One clear partner across the moments that matter.
              </h2>
              <p className="text-[#516158] text-[15px] leading-relaxed max-w-[425px]">
                We do not see a business as a checklist. We see it as a living system—one that deserves thoughtful decisions, a credible presence and room to grow.
              </p>

              <div className="pt-4 overflow-hidden rounded-sm border border-[#b7c3b8] shadow-sm hidden sm:block">
                <img
                  src="/images/cac-operations-team.jpg"
                  alt="Eponix Corporate Services & Filing Desk"
                  className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-7 border-t border-[#b7c3b8]">
              {[
                {
                  num: "01",
                  title: "Give the business its footing",
                  desc: "Begin with the essentials: the structure, direction and decisions that make professional operation possible.",
                },
                {
                  num: "02",
                  title: "Make it recognisable",
                  desc: "Build a brand and digital presence that express the value of the business with confidence.",
                },
                {
                  num: "03",
                  title: "Make it work more smoothly",
                  desc: "Introduce systems, tools and automation that support better work and stronger customer experiences.",
                },
                {
                  num: "04",
                  title: "Keep it ready to grow",
                  desc: "Move forward with clearer priorities and a partner who understands the bigger picture.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="grid grid-cols-[54px_1fr] gap-5 py-6 border-b border-[#b7c3b8]"
                >
                  <span className="font-mono text-[10px] text-[#4d6c5a] pt-1">{item.num}</span>
                  <div>
                    <h3 className="text-[19px] font-bold leading-[1.15] tracking-[-0.04em] text-[#0c1210] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-[#516158] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. VALUES (Dark #0c1210) */}
      <section className="bg-[#0c1210] text-[#f4f6ed] py-24 lg:py-28" id="values">
        <div className="wrap">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
            <div>
              <div className="eyebrow">Our values</div>
              <h2 className="text-[34px] sm:text-[46px] lg:text-[62px] font-bold leading-[1.0] tracking-[-0.067em] text-[#f4f6ed] mt-3">
                The standards behind our work.
              </h2>
            </div>
            <p className="max-w-[310px] text-[#b7c4ba] text-[13px] leading-relaxed">
              These are the working principles that guide the advice we give, the systems we shape and the partnerships we build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[rgba(244,246,237,0.14)]">
            {[
              {
                icon: "↗",
                title: "Useful clarity",
                desc: "We bring focus to complicated business moments and communicate in a way people can act on.",
              },
              {
                icon: "✦",
                title: "Care in the details",
                desc: "Every touchpoint matters when a business is earning trust, building credibility and moving forward.",
              },
              {
                icon: "✓",
                title: "Work that holds up",
                desc: "We value sound thinking, strong execution and foundations designed for real business conditions.",
              },
              {
                icon: "◌",
                title: "Human partnership",
                desc: "We listen closely, work collaboratively and treat every business goal with respect.",
              },
              {
                icon: "→",
                title: "Forward energy",
                desc: "We turn possibility into next steps, helping businesses keep moving with intention.",
              },
              {
                icon: "+",
                title: "Local insight",
                desc: "Our work starts with the Nigerian business landscape and the ambition of the people building within it.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="p-7 border-r border-b border-[rgba(244,246,237,0.14)] min-h-[230px] hover:bg-[#203d30] transition-colors"
              >
                <div className="w-[29px] h-[29px] rounded-full bg-[#c9f95a] text-[#0c1210] font-bold flex items-center justify-center text-[14px]">
                  {val.icon}
                </div>
                <h3 className="text-[19px] font-bold tracking-[-0.045em] text-[#f4f6ed] mt-10 mb-2">
                  {val.title}
                </h3>
                <p className="text-[12px] text-[#bdc9c0] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA (Electric Lime #c9f95a) */}
      <section className="bg-[#c9f95a] text-[#0c1210] py-24 lg:py-28">
        <div className="wrap flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2 className="text-[38px] sm:text-[56px] lg:text-[76px] font-bold leading-[0.97] tracking-[-0.075em] max-w-[840px]">
            Let’s build a business that is ready to{" "}
            <em className="font-serif italic font-semibold text-[#0c1210]">move.</em>
          </h2>
          <Link href="/#consult" className="btn dark whitespace-nowrap">
            <span>Start a conversation</span>
            <span className="text-[18px] leading-none">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
