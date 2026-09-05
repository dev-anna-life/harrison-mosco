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
    <div className="rounded-3xl bg-[#0f172a] border-2 border-slate-700/80 p-6 sm:p-8 lg:p-10 text-white shadow-2xl overflow-hidden font-sans transition-card hover:border-[#FDC902]/50">
      {/* Top Header */}
      <div className="flex items-start justify-between pb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-black tracking-wider uppercase bg-[#FDC902] text-slate-950 px-3 py-1 rounded-md">
              {isOfficialOrder ? "OFFICIAL INVOICE" : "ESTIMATED SPECIFICATION"}
            </span>
            <span className="text-xs sm:text-sm text-slate-400 font-mono font-bold">Ref: {orderReference}</span>
          </div>
          <h4 className="text-lg sm:text-xl font-black text-white mt-3 flex items-center gap-2">
            <span>Harrison Mosco Studio</span>
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
          </h4>
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Corporate Incorporation &amp; Operations Desk</p>
        </div>

        <div className="text-right">
          <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Entity Name</div>
          <div className="text-sm sm:text-base font-black text-[#FDC902] max-w-[180px] sm:max-w-[220px] truncate mt-0.5" title={companyNamePreview}>
            {companyNamePreview}
          </div>
        </div>
      </div>

      {/* Itemized Line Items */}
      <div className="py-6 space-y-4 text-sm sm:text-base">
        {/* Base Package */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
          <div>
            <span className="font-black text-white block">
              {packageType} Limited Company Package
            </span>
            <span className="text-xs text-slate-400 font-medium">
              CAC Incorporation, Status Report, MEMART, and Tax ID
            </span>
          </div>
          <span className="font-black text-white text-base sm:text-lg">{formatNGN(basePrice)}</span>
        </div>

        {/* Share Capital */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
          <div>
            <span className="text-slate-200 font-bold block">
              Authorized Share Capital ({shareCapitalMillions} Million)
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {extraSharesCost > 0
                ? `1M base included, plus ${shareCapitalMillions - 1}M additional capital stamp duties`
                : "Base 1 Million share capital included"}
            </span>
          </div>
          <span className={`font-black text-base ${extraSharesCost > 0 ? "text-[#FDC902]" : "text-slate-400"}`}>
            {extraSharesCost > 0 ? `+${formatNGN(extraSharesCost)}` : "Included"}
          </span>
        </div>

        {/* Directors */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
          <div>
            <span className="text-slate-200 font-bold block">
              Director Allocation ({directorCount} Directors)
            </span>
            <span className="text-xs text-slate-400 font-medium">
              {extraDirectorsCost > 0
                ? `2 directors included, plus ${directorCount - 2} additional directors`
                : "Up to 2 directors included in base fee"}
            </span>
          </div>
          <span className={`font-black text-base ${extraDirectorsCost > 0 ? "text-[#FDC902]" : "text-slate-400"}`}>
            {extraDirectorsCost > 0 ? `+${formatNGN(extraDirectorsCost)}` : "Included"}
          </span>
        </div>

        {/* AI Video Add-on */}
        {aiVideoCost > 0 && (
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
            <div>
              <span className="text-[#FDC902] font-black block">
                Branded AI Video Commercial
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Custom marketing video created by in-house studio
              </span>
            </div>
            <span className="font-black text-[#FDC902] text-base">+{formatNGN(aiVideoCost)}</span>
          </div>
        )}

        {/* Automated Invoicing Add-on */}
        {automatedInvoicingCost > 0 && (
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
            <div>
              <span className="text-emerald-400 font-black block">
                Automated Receipting System Setup
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Instant digital receipt delivery via WhatsApp and email
              </span>
            </div>
            <span className="font-black text-emerald-400 text-base">+{formatNGN(automatedInvoicingCost)}</span>
          </div>
        )}
      </div>

      {/* Total Section */}
      <div className="pt-6 border-t-2 border-slate-700 space-y-6">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-black block">
              Total Amount Payable
            </span>
            <span className="text-xs text-slate-400 font-medium mt-0.5 block">
              Includes 7.5% VAT and statutory government filing fees
            </span>
          </div>
          <div className="text-right">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FDC902] tracking-tight">
              {formatNGN(totalPayable)}
            </span>
          </div>
        </div>

        {/* Action Buttons: PDF Download & WhatsApp */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-all border border-slate-600 flex items-center justify-center gap-2 shadow-sm"
          >
            <Download className="w-4 h-4 text-[#FDC902]" />
            <span>Download Official PDF</span>
          </button>

          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 bg-[#FDC902] hover:bg-amber-400 text-slate-950 font-black rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Send to WhatsApp Desk</span>
          </a>
        </div>

        {/* Delivery Timeframe */}
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FDC902]" />
            <span className="font-bold">Estimated Turnaround:</span>
          </div>
          <span className="font-black text-white">3 to 7 Working Days</span>
        </div>
      </div>
    </div>
  );
}
