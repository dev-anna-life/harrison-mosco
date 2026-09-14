import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Palette,
  Cpu,
  TrendingUp,
  Compass,
  CheckCircle2,
  Users,
  Zap,
  Globe2,
  FileCheck,
} from "lucide-react";

export const metadata = {
  title: "About Eponix Digital | Business Foundation, Branding & Digital Systems",
  description:
    "Eponix Digital connects the practical pieces required to establish, present, operate and grow a modern business in Nigeria and beyond.",
};

export default function AboutPage() {
  const storyPrinciples = [
    {
      num: "01",
      title: "Progress is connected.",
      desc: "Registration, identity, digital systems, and growth work significantly better when they are designed and executed together from day one.",
    },
    {
      num: "02",
      title: "Clarity should lead to action.",
      desc: "We turn complex regulatory compliance, technical architectures, and branding into crystal-clear next steps and guided execution.",
    },
    {
      num: "03",
      title: "A strong start has range.",
      desc: "Enterprises need more than just a registration certificate. They need an unshakeable commercial foundation engineered to scale.",
    },
  ];

  const operationalStages = [
    {
      num: "01",
      icon: ShieldCheck,
      title: "Give the business its footing",
      desc: "CAC incorporation, SCUML, Tax ID generation, statutory compliance, and corporate governance.",
    },
    {
      num: "02",
      icon: Palette,
      title: "Make it recognisable",
      desc: "Strategic brand identity, trademark protection, design systems, and executive market presentation.",
    },
    {
      num: "03",
      icon: Cpu,
      title: "Make it work more smoothly",
      desc: "High-performance digital platforms, AI automation, CRM pipelines, and intelligent workflows.",
    },
    {
      num: "04",
      icon: TrendingUp,
      title: "Keep it ready to grow",
      desc: "Market visibility, corporate authority, investor readiness, and sustained commercial acceleration.",
    },
  ];

  const values = [
    {
      icon: Compass,
      title: "Useful clarity",
      desc: "Direct, high-yield counsel and structured roadmaps that remove ambiguity and lead straight to action.",
    },
    {
      icon: FileCheck,
      title: "Care in the details",
      desc: "Every statutory filing, design token, and code line is executed with rigorous institutional precision.",
    },
    {
      icon: CheckCircle2,
      title: "Work that holds up",
      desc: "We build for real-world resilience, legal validity, and long-term durability, not superficial flash.",
    },
    {
      icon: Users,
      title: "Human partnership",
      desc: "Dedicated senior strategic advisory with responsive founders-first communication at the centre.",
    },
    {
      icon: Zap,
      title: "Forward energy",
      desc: "Proactively anticipating market shifts and deploying modern digital tools to keep you steps ahead.",
    },
    {
      icon: Globe2,
      title: "Local insight",
      desc: "Deeply calibrated to the realities and regulatory dynamics of the Nigerian and African business ecosystem.",
    },
  ];

  return (
    <div className="bg-[#f4f6ed] text-[#0c1210] min-h-screen selection:bg-[#c9f95a] selection:text-[#0c1210]">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#17382b] text-white overflow-hidden border-b border-[#254d3d]">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#c9f95a] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#1b4334] blur-2xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#c9f95a] text-xs uppercase tracking-[0.16em] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9f95a] animate-pulse" />
            About Eponix Digital
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] max-w-4xl text-white">
            Built for the business <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-[#c9f95a]">behind the ambition.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-[#b8c2ba] max-w-2xl font-light leading-relaxed">
            Business moves differently when the right pieces connect. We architect the institutional foundation, brand authority, and digital infrastructure modern enterprises need to scale.
          </p>
        </div>
      </section>

      {/* Our Story / Narrative */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-[#17382b] font-mono-tag font-semibold">
              ✦ Our Story
            </div>
            <h2 className="text-2xl sm:text-4xl font-light tracking-tight text-[#0c1210] leading-snug">
              Business moves differently when the{" "}
              <span className="font-serif italic text-[#17382b] font-normal">right pieces connect.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 text-base sm:text-lg text-[#4a5550] leading-relaxed font-light">
            Professional businesses should not have to figure it all out alone. Eponix Digital connects the essential practical pieces required to legally establish, elegantly present, smoothly operate, and aggressively grow a sustainable commercial enterprise.
          </div>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {storyPrinciples.map((item) => (
            <div
              key={item.num}
              className="bg-white p-8 rounded-2xl border border-[#d6ddd6] shadow-sm hover:border-[#17382b] transition-all duration-300 group relative"
            >
              <div className="font-mono-tag text-xs font-semibold px-2.5 py-1 rounded bg-[#e8ede4] text-[#17382b] inline-block mb-6 group-hover:bg-[#c9f95a] group-hover:text-[#0c1210] transition-colors">
                {item.num}
              </div>
              <h3 className="text-xl font-medium text-[#0c1210] mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#5a6560] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Operational Model / Our Approach */}
      <section className="py-20 md:py-28 bg-[#17382b] text-white border-y border-[#254d3d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[#c9f95a] font-mono-tag font-medium">
                ✦ Our Approach
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight">
                Built to move with the{" "}
                <span className="font-serif italic text-[#c9f95a] font-normal">business.</span>
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#b8c2ba] max-w-sm font-light">
              Four connected operational stages engineered to carry your company from ideation to automated scale.
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.num}
                  className="bg-[#122c22] border border-[#254d3d] p-6 rounded-2xl hover:border-[#c9f95a]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono-tag text-xs text-[#c9f95a] font-bold px-2 py-0.5 rounded bg-[#c9f95a]/10">
                        {stage.num}
                      </span>
                      <Icon className="w-5 h-5 text-[#c9f95a]" />
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2 leading-snug">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b8c2ba] leading-relaxed mt-4">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="space-y-3 mb-16 text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-[#17382b] font-mono-tag font-semibold">
            ✦ Core Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#0c1210]">
            How we <span className="font-serif italic text-[#17382b] font-normal">work.</span>
          </h2>
          <p className="text-sm text-[#5a6560]">
            The unbending institutional principles that guide every client engagement and delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-[#d6ddd6] shadow-sm hover:shadow-md hover:border-[#17382b] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e8ede4] flex items-center justify-center text-[#17382b] mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-[#0c1210] mb-2">{val.title}</h3>
                <p className="text-sm text-[#5a6560] leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 md:py-20 bg-[#0c1210] text-white border-t border-[#17382b]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight">
            Let&apos;s build a business that is{" "}
            <span className="font-serif italic text-[#c9f95a] font-normal">ready to move.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9aa69e] max-w-xl mx-auto font-light">
            Book an executive consultation with Eponix Digital to discuss statutory registration, trademark protection, and custom digital systems.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#c9f95a] text-[#0c1210] font-semibold text-sm hover:bg-[#bdf746] transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/15"
            >
              <span>Explore All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
