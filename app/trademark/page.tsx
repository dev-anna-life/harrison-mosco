"use client";

import React from "react";
import Link from "next/link";

export default function TrademarkPage() {
  return (
    <div className="bg-[#0b120f] text-[#f5f7ef]">
      {/* 1. Hero Simple */}
      <section className="bg-[#07100c] text-[#f5f7ef] py-20 lg:py-24 border-b border-[rgba(198,255,63,0.14)]">
        <div className="site-container">
          <div className="eyebrow">Nigeria Trademark Registration</div>
          <h1 className="heading-1">Protect Your Brand With Trademark Registration</h1>
          <p className="lead-text">
            Secure the name and identity your customers know you for. Choose a pre-filing search, registration after an approved search, or the complete search and trademark registration package.
          </p>
        </div>
      </section>

      {/* 2. Packages */}
      <section className="bg-[#0b120f] py-20 lg:py-28">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Trademark Packages</div>
              <h2 className="heading-2">Choose the trademark service you need.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Each package covers one trademark class.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="ep-package">
              <div className="ep-tag">Starter</div>
              <div className="price">₦15,000</div>
              <p>Pre-filing Search Only. Mandatory availability check before filing.</p>
              <ul className="space-y-2 my-6 text-[14px]">
                <li>• Registry portal availability search</li>
                <li>• Eligibility review before filing</li>
                <li>• Search result guidance</li>
                <li>• One trademark class</li>
                <li>• Timeframe: 3–7 working days</li>
              </ul>
              <div className="mt-auto pt-4">
                <Link href="/#consultation" className="ep-btn ep-btn-primary w-full">
                  Select Starter
                </Link>
              </div>
            </div>

            <div className="ep-package">
              <div className="ep-tag">Pro</div>
              <div className="price">₦60,000</div>
              <p>Registration Only, for trademarks where an approved search has already been completed.</p>
              <ul className="space-y-2 my-6 text-[14px]">
                <li>• Trademark application filing</li>
                <li>• Acknowledgement Letter support</li>
                <li>• Acceptance Letter support</li>
                <li>• One trademark class</li>
                <li>• Timeframe: 10–21 working days</li>
              </ul>
              <div className="mt-auto pt-4">
                <Link href="/#consultation" className="ep-btn ep-btn-primary w-full">
                  Select Pro
                </Link>
              </div>
            </div>

            <div className="ep-package featured">
              <div className="ep-tag text-[#071007] border-[#071007]">Premium · Most Popular</div>
              <div className="price">₦70,000</div>
              <p className="text-[#193019]">The complete route from pre-filing search through trademark registration support.</p>
              <ul className="space-y-2 my-6 text-[14px] text-[#183018]">
                <li>• Pre-filing trademark search</li>
                <li>• Eligibility review</li>
                <li>• Trademark application filing</li>
                <li>• Acknowledgement Letter support</li>
                <li>• Acceptance Letter support</li>
                <li>• One trademark class</li>
                <li>• Timeframe: 10–21 working days</li>
              </ul>
              <div className="mt-auto pt-4">
                <Link href="/#consultation" className="ep-btn ep-btn-dark w-full">
                  Select Premium
                </Link>
              </div>
            </div>
          </div>

          <div className="ep-notice mt-10">
            <strong>Additional Classes</strong>
            <p className="text-[14px]">
              Each additional class attracts the same selected package amount. If a fresh search and resubmission is required for a new name, the applicable fresh-search/resubmission fee is communicated before submission.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Requirements */}
      <section className="bg-[#102118] py-20 lg:py-28 border-t border-b border-[#26362c]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end mb-12">
            <div>
              <div className="eyebrow">Requirements</div>
              <h2 className="heading-2">What we need from you.</h2>
            </div>
            <div className="text-[#aab6ad] text-[18px] leading-relaxed">
              Simple information required to begin your trademark request.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="ep-card">
              <div className="ep-num">01</div>
              <h3 className="heading-3">Proposed Trademark Name</h3>
              <p>The exact brand name, product name or identity you want to protect.</p>
            </div>

            <div className="ep-card">
              <div className="ep-num">02</div>
              <h3 className="heading-3">Owner / Applicant Details</h3>
              <p>Name of the individual, company or organisation that will own the trademark.</p>
            </div>

            <div className="ep-card">
              <div className="ep-num">03</div>
              <h3 className="heading-3">Goods or Services</h3>
              <p>Tell us what products or services the trademark will be used for.</p>
            </div>

            <div className="ep-card">
              <div className="ep-num">04</div>
              <h3 className="heading-3">Trademark Class</h3>
              <p>Select the closest trademark class. If unsure, describe the business activity for review.</p>
            </div>

            <div className="ep-card">
              <div className="ep-num">05</div>
              <h3 className="heading-3">Brand Logo · Optional</h3>
              <p>Upload a logo or supporting file if available.</p>
            </div>

            <div className="ep-card">
              <div className="ep-num">06</div>
              <h3 className="heading-3">Contact Information</h3>
              <p>Active email address and phone number for project communication and updates.</p>
            </div>
          </div>

          <div className="ep-notice mt-10">
            <strong>Processing Notice</strong>
            <p className="text-[14px]">
              A pre-filing search is required before a new trademark is filed. Final search results, filing acceptance and regulatory approval remain subject to the relevant Trademark Registry. Approved documents are delivered electronically as original digital files.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
