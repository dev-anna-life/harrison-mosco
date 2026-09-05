"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, CheckCircle2, X, Phone, Video } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { HoverCard } from "@/components/motion/HoverCard";

interface VideoSample {
  id: string;
  title: string;
  niche: string;
  durationLabel: string;
  tagline: string;
  thumbnailSrc: string;
  embedId: string;
}

export function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState<VideoSample | null>(null);

  const samples: VideoSample[] = [
    {
      id: "realestate",
      title: "Luxury Real Estate Commercial",
      niche: "Real Estate & Properties",
      durationLabel: "0:50",
      tagline: "Architectural showcases, luxury estates, and property development walkthroughs.",
      thumbnailSrc: "/images/reels/real-estate-ai.jpg",
      embedId: "77Ncpm9bG4Y",
    },
    {
      id: "fintech",
      title: "Fintech & Mobile Banking Commercial",
      niche: "Fintech & Mobile Apps",
      durationLabel: "0:45",
      tagline: "Mobile banking presenter, digital account features, cards, and payment solutions.",
      thumbnailSrc: "/images/reels/fintech-ai.jpg",
      embedId: "bAXuGTUifmE",
    },
    {
      id: "brand",
      title: "Corporate Brand Launch Commercial",
      niche: "Business & Brand Launch",
      durationLabel: "0:40",
      tagline: "Corporate presenter, brand identity launch, and executive media campaigns.",
      thumbnailSrc: "/images/reels/brand-launch-ai.jpg",
      embedId: "_N3d6GOBIYQ",
    },
  ];

  const handleOpenPlayer = (item: VideoSample) => {
    setSelectedVideo(item);
  };

  const handleClosePlayer = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0a0e17] border-b border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal type="up" duration={0.8}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDC902]/10 border border-[#FDC902]/30 text-[#FDC902] text-xs font-black uppercase tracking-wider mb-4">
              <Video className="w-4 h-4 text-[#FDC902]" />
              <span>In-House Media Production Studio</span>
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Watch Launch Commercials Produced for Clients
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
              Click any sample below to watch an authentic commercial video featuring presenters and property showcases.
            </p>
          </div>
        </Reveal>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {samples.map((item, index) => (
            <Reveal key={item.id} type="up" delay={index * 150} duration={0.8}>
              <HoverCard>
                <div
                  onClick={() => handleOpenPlayer(item)}
                  className="rounded-3xl border-2 border-slate-800 bg-[#0f172a] p-6 cursor-pointer transition-all duration-300 hover:border-[#FDC902]/60 hover:shadow-[0_10px_35px_rgba(253,201,2,0.15)] group h-full flex flex-col justify-between"
                >
                  {/* Card Screen Mockup */}
                  <div className="relative aspect-[16/10] rounded-2xl bg-black flex flex-col justify-between p-5 overflow-hidden border border-slate-800">
                    <Image
                      src={item.thumbnailSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 pointer-events-none" />

                    <div className="flex justify-between items-center z-10">
                      <span className="text-xs font-black uppercase tracking-wider bg-black/80 text-[#FDC902] px-3 py-1 rounded-md backdrop-blur-md border border-slate-800">
                        {item.niche}
                      </span>
                      <span className="text-xs text-slate-300 font-mono font-bold bg-black/80 px-2.5 py-1 rounded-md">
                        {item.durationLabel}
                      </span>
                    </div>

                    {/* Glowing Center Play Button */}
                    <div className="text-center my-auto z-10">
                      <div className="w-16 h-16 rounded-full bg-[#FDC902] text-slate-950 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(253,201,2,0.5)] group-hover:scale-110 group-hover:bg-amber-300 transition-all">
                        <Play className="w-7 h-7 fill-current translate-x-0.5" />
                      </div>
                      <span className="block text-sm font-black text-white mt-4 tracking-wide group-hover:text-[#FDC902] transition-colors drop-shadow-md">
                        Click to Play Commercial
                      </span>
                    </div>

                    <div className="z-10 flex items-center justify-between text-xs text-slate-300 bg-black/80 p-2.5 rounded-xl backdrop-blur-sm font-medium border border-slate-800">
                      <span className="font-medium text-slate-300">Spokesperson Video</span>
                      <span className="font-bold text-white">1080p Full HD</span>
                    </div>
                  </div>

                  {/* Text Meta */}
                  <div className="mt-5 space-y-2">
                    <h4 className="text-lg font-black text-white group-hover:text-[#FDC902] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-normal">
                      {item.tagline}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </Reveal>
          ))}
        </div>

        {/* Feature Strip */}
        <div className="mt-14 max-w-3xl mx-auto p-5 rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-sm text-slate-200 text-center font-bold">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#FDC902]" />
            <span>Spokesperson Presentation</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#FDC902]" />
            <span>Commercial Scriptwriting</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#FDC902]" />
            <span>Reels & TikTok Ready</span>
          </span>
        </div>
      </div>

      {/* Cinematic Video Player Modal */}
      {selectedVideo && (
        <div
          onClick={handleClosePlayer}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f172a] border border-slate-700 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative flex flex-col"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-wider text-[#FDC902] bg-[#FDC902]/10 border border-[#FDC902]/20 px-3 py-1 rounded-full">
                  {selectedVideo.niche}
                </span>
                <h3 className="text-lg font-bold text-white hidden sm:block">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={handleClosePlayer}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                aria-label="Close player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cinematic 16:9 Real Video Player */}
            <div className="w-full aspect-video bg-black relative flex items-center justify-center">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedVideo.embedId}?autoplay=1&controls=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Bottom Action Strip */}
            <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white sm:hidden">
                  {selectedVideo.title}
                </h4>
                <p className="text-xs text-slate-400">
                  {selectedVideo.tagline}
                </p>
              </div>

              <a
                href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20want%20to%20order%20a%20commercial%20video%20like%20the%20${encodeURIComponent(
                  selectedVideo.title
                )}%20sample.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(253,201,2,0.25)] shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Order This Video on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
