"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, X } from "lucide-react";

export function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {isOpen && (
        <div className="mb-3 w-[min(320px,calc(100vw-32px))] bg-[#0f172a] border-2 border-[#FDC902] rounded-3xl p-4 sm:p-5 shadow-2xl text-white animate-fadeIn">
          <div className="flex items-start justify-between pb-3 border-b border-slate-800">
            <div>
              <span className="text-[10px] sm:text-xs font-black text-[#FDC902] uppercase tracking-wider block">
                Harrison Mosco Desk
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-white mt-0.5">Online &amp; Ready to Help</h4>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1"
              aria-label="Close message popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 my-2.5 sm:my-3 leading-relaxed font-normal">
            Have questions about CAC company names, share capital, or receipt automation? Chat directly with our legal desk.
          </p>

          <a
            href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20browsing%20your%20website%20and%20would%20like%20to%20inquire%20about%20registering%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 sm:py-3 bg-[#25D366] hover:bg-emerald-600 text-white font-black rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-emerald-500 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all"
        aria-label="Open WhatsApp conversation"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      </button>
    </div>
  );
}

export const WhatsAppButton = WhatsAppFloatingButton;
