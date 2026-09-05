"use client";

import React from "react";
import { ShieldCheck, Clock, FileText, CheckCircle2, Download, Printer, Phone } from "lucide-react";
import { formatNGN } from "@/lib/pricing-engine";
import { printDigitalReceipt } from "@/lib/pdf-generator";

interface DigitalReceiptProps {
  packageType: string;
  basePrice: number;
  shareCapitalMillions: number;
  extraSharesCost: number;
  directorCount: number;
  extraDirectorsCost: number;
  aiVideoCost?: number;
  automatedInvoicingCost?: number;
  totalPayable: number;
  companyNamePreview?: string;
  isOfficialOrder?: boolean;
  orderReference?: string;
}

export function DigitalReceipt({
  packageType,
  basePrice,
  shareCapitalMillions,
  extraSharesCost,
  directorCount,
  extraDirectorsCost,
  aiVideoCost = 0,
  automatedInvoicingCost = 0,
  totalPayable,
  companyNamePreview = "Your Proposed Company Ltd",
  isOfficialOrder = false,
  orderReference = "HM-SPEC-2026",
}: DigitalReceiptProps) {
  const handleDownloadPDF = () => {
    printDigitalReceipt({
      reference: orderReference,
      companyName: companyNamePreview,
      packageType,
      shareCapitalMillions,
      directorCount,
      totalAmount: totalPayable,
      formattedTotal: formatNGN(totalPayable),
    });
  };

  const whatsappShareUrl = `https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20downloaded%20my%20invoice%20specification%20Ref%3A%20${orderReference}%20for%20${encodeURIComponent(
    companyNamePreview
  )}%20(${formatNGN(totalPayable)}).%20Please%20confirm%20my%20order.`;

  return (
    <div className="rounded-3xl bg-[#0f172a] border-2 border-slate-700/80 p-6 sm:p-8 text-white shadow-2xl overflow-hidden font-sans transition-card hover:border-[#FDC902]/50 w-full">
      {/* Top Header Strip */}
      <div className="pb-5 border-b border-slate-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <span className="text-xs font-black tracking-wider uppercase bg-[#FDC902] text-slate-950 px-3 py-1 rounded-md whitespace-nowrap shrink-0">
            {isOfficialOrder ? "OFFICIAL INVOICE" : "ESTIMATED SPECIFICATION"}
          </span>
          <span className="text-xs text-slate-300 font-mono font-bold bg-[#0a0e17] px-2.5 py-1 rounded border border-slate-800 whitespace-nowrap shrink-0">
            Ref: {orderReference}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
          <div>
            <h4 className="text-base sm:text-lg font-black text-white flex items-center gap-1.5">
              <span>Harrison Mosco Desk</span>
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            </h4>
            <p className="text-xs text-slate-400">Corporate Incorporation &amp; Operations</p>
          </div>

          <div className="sm:text-right bg-[#0a0e17] p-2.5 sm:p-0 sm:bg-transparent rounded-xl border border-slate-800 sm:border-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Proposed Entity</span>
            <span className="text-xs sm:text-sm font-black text-[#FDC902] block truncate max-w-[240px]" title={companyNamePreview}>
              {companyNamePreview}
            </span>
          </div>
        </div>
      </div>

      {/* Itemized Line Items */}
      <div className="py-5 space-y-3.5 text-xs sm:text-sm">
        {/* Base Package */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-800/80 gap-3">
          <div className="space-y-0.5">
            <span className="font-black text-white block">
              {packageType} Limited Company Package
            </span>
            <span className="text-[11px] text-slate-400 font-normal block leading-tight">
              CAC Incorporation, Status Report, MEMART, and Tax ID
            </span>
          </div>
          <span className="font-black text-white text-sm sm:text-base whitespace-nowrap shrink-0">
            {formatNGN(basePrice)}
          </span>
        </div>

        {/* Share Capital */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-800/80 gap-3">
          <div className="space-y-0.5">
            <span className="text-slate-200 font-bold block">
              Authorized Share Capital ({shareCapitalMillions} Million)
            </span>
            <span className="text-[11px] text-slate-400 font-normal block leading-tight">
              {extraSharesCost > 0
                ? `1M base included, plus ${shareCapitalMillions - 1}M additional capital stamp duties`
                : "Base 1 Million share capital included"}
            </span>
          </div>
          <span className={`font-black text-xs sm:text-sm whitespace-nowrap shrink-0 ${extraSharesCost > 0 ? "text-[#FDC902]" : "text-slate-400"}`}>
            {extraSharesCost > 0 ? `+${formatNGN(extraSharesCost)}` : "Included"}
          </span>
        </div>

        {/* Directors */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-800/80 gap-3">
          <div className="space-y-0.5">
            <span className="text-slate-200 font-bold block">
              Director Allocation ({directorCount} Directors)
            </span>
            <span className="text-[11px] text-slate-400 font-normal block leading-tight">
              {extraDirectorsCost > 0
                ? `2 directors included, plus ${directorCount - 2} additional directors`
                : "Up to 2 directors included in base fee"}
            </span>
          </div>
          <span className={`font-black text-xs sm:text-sm whitespace-nowrap shrink-0 ${extraDirectorsCost > 0 ? "text-[#FDC902]" : "text-slate-400"}`}>
            {extraDirectorsCost > 0 ? `+${formatNGN(extraDirectorsCost)}` : "Included"}
          </span>
        </div>

        {/* Automated Invoicing Add-on */}
        {automatedInvoicingCost > 0 && (
          <div className="flex items-start justify-between pb-3 border-b border-slate-800/80 gap-3">
            <div className="space-y-0.5">
              <span className="text-emerald-400 font-black block">
                Automated Receipting System Setup
              </span>
              <span className="text-[11px] text-slate-400 font-normal block leading-tight">
                Instant digital receipt delivery via WhatsApp and email
              </span>
            </div>
            <span className="font-black text-emerald-400 text-xs sm:text-sm whitespace-nowrap shrink-0">
              +{formatNGN(automatedInvoicingCost)}
            </span>
          </div>
        )}
      </div>

      {/* Total Section Box */}
      <div className="pt-4 space-y-4">
        <div className="bg-[#0a0e17] p-4 sm:p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-slate-400 font-black block">
              Total Amount Payable
            </span>
            <span className="text-[10px] text-slate-400 font-medium block mt-0.5">
              Includes 7.5% VAT and statutory filing fees
            </span>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FDC902] tracking-tight whitespace-nowrap">
              {formatNGN(totalPayable)}
            </span>
          </div>
        </div>

        {/* Action Buttons: PDF Download & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="w-full py-3.5 px-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs sm:text-sm transition-all border border-slate-600 flex items-center justify-center gap-2 shadow-sm whitespace-nowrap"
          >
            <Download className="w-4 h-4 text-[#FDC902] shrink-0" />
            <span>Download Official PDF</span>
          </button>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-3 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md whitespace-nowrap"
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span>Send to WhatsApp</span>
          </a>
        </div>

        {/* Delivery Timeframe */}
        <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#FDC902] shrink-0" />
            <span className="font-bold">Turnaround:</span>
          </div>
          <span className="font-black text-white">3 to 7 Working Days</span>
        </div>
      </div>
    </div>
  );
}
