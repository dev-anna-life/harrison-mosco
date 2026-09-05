import React from "react";
import Link from "next/link";
import { ShieldCheck, MapPin, Phone, Mail, Lock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05080e] text-slate-400 text-sm border-t border-slate-800">
      {/* Nationwide Contact Hubs Banner */}
      <div className="border-b border-slate-800/80 bg-[#030509] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-800">
            <div>
              <span className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest block mb-1">
                Operational Coverage
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Port Harcourt Head Office and Regional Client Desks
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl font-normal">
                Serving founders and organizations across all 36 Nigerian states and the FCT.
                Approved original certificates and certified documents delivered directly via secure digital dispatch.
              </p>
            </div>
            <div>
              <a
                href="https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20would%20like%20to%20inquire%20about%20business%20registration%20and%20automation."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all shadow-[0_6px_25px_rgba(253,201,2,0.25)] text-center"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>Chat Direct on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Regional Hubs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-6 sm:pt-8 text-xs">
            <div className="p-3.5 sm:p-4 bg-[#0a0e17] rounded-xl border border-slate-800">
              <strong className="block text-white font-bold text-xs sm:text-sm">Port Harcourt (HQ)</strong>
              <p className="text-slate-400 mt-1 text-[11px] sm:text-xs">Rockville Place, SARS Road, Port Harcourt, Rivers State.</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#0a0e17] rounded-xl border border-slate-800">
              <strong className="block text-white font-bold text-xs sm:text-sm">Lagos Contact Desk</strong>
              <p className="text-slate-400 mt-1 text-[11px] sm:text-xs">Okoye Street, Bucknor, Isolo Jakande Gate, Lagos State.</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#0a0e17] rounded-xl border border-slate-800">
              <strong className="block text-white font-bold text-xs sm:text-sm">Abuja FCT Desk</strong>
              <p className="text-slate-400 mt-1 text-[11px] sm:text-xs">Kusase Plaza, Dutse Apo, Federal Capital Territory.</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#0a0e17] rounded-xl border border-slate-800">
              <strong className="block text-white font-bold text-xs sm:text-sm">Delta Desk</strong>
              <p className="text-slate-400 mt-1 text-[11px] sm:text-xs">Kim Royal Suites, Off Asaba-Onitsha Expressway, Asaba.</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#0a0e17] rounded-xl border border-slate-800">
              <strong className="block text-white font-bold text-xs sm:text-sm">Bayelsa Desk</strong>
              <p className="text-slate-400 mt-1 text-[11px] sm:text-xs">Stanley Damabide Close, Yenizuegene-Epie, Yenagoa.</p>
            </div>
            <div className="p-3.5 sm:p-4 bg-[#0a0e17] rounded-xl border border-slate-800">
              <strong className="block text-white font-bold text-xs sm:text-sm">Akwa Ibom Desk</strong>
              <p className="text-slate-400 mt-1 text-[11px] sm:text-xs">Thomas Udoekong Street, Anua Obio, Uyo.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-black text-white leading-tight">Harrison Mosco</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#FDC902] uppercase tracking-wider">
                Business Launch &amp; Automation
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              Harrison Mosco is a corporate infrastructure, brand identity, and workflow automation studio.
              We take founders from initial company formation to operational readiness and automated billing.
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-[11px] sm:text-xs pt-1">
              <Lock className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
              <span>Payments secured by Paystack 256-bit encryption</span>
            </div>
          </div>

          {/* Registration Services */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest">
              Registration Packages
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/limited" className="hover:text-white transition-colors">
                  Limited Company (Ltd) Incorporation
                </Link>
              </li>
              <li>
                <Link href="/launch" className="hover:text-white transition-colors">
                  Ultimate Business Launch Package
                </Link>
              </li>
              <li>
                <Link href="/business-name" className="hover:text-white transition-colors">
                  Business Name Registration
                </Link>
              </li>
              <li>
                <Link href="/single-services#trustees" className="hover:text-white transition-colors">
                  Incorporated Trustees for NGOs
                </Link>
              </li>
            </ul>
          </div>

          {/* Single Services */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest">
              Compliance &amp; Single Services
            </h4>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/single-services#scuml" className="hover:text-white transition-colors">
                  SCUML Anti-Money Laundering Setup
                </Link>
              </li>
              <li>
                <Link href="/single-services#trademark" className="hover:text-white transition-colors">
                  Trademark Filing and Brand Protection
                </Link>
              </li>
              <li>
                <Link href="/single-services#tax" className="hover:text-white transition-colors">
                  NRS Corporate Tax ID and Rev360 Portal
                </Link>
              </li>
              <li>
                <Link href="/track" className="hover:text-[#FDC902] text-[#FDC902] font-bold transition-colors">
                  Track Your CAC Filing Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-black text-[#FDC902] uppercase tracking-widest">
              Direct Desk
            </h4>
            <div className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm font-medium">
              <p className="flex items-center gap-2 sm:gap-2.5 text-slate-200">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDC902] shrink-0" />
                <span>+234 813 709 2154</span>
              </p>
              <p className="flex items-center gap-2 sm:gap-2.5 text-slate-200">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FDC902] shrink-0" />
                <span>support@harrisonmosco.ng</span>
              </p>
              <p className="text-slate-400 text-[11px] sm:text-xs pt-1">
                Office Hours: Monday to Saturday, 8:00 AM to 6:00 PM WAT.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500 font-medium text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Harrison Mosco Platform. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accredited Legal Filing Desk</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
