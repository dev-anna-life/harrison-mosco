"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, ShieldCheck, Clock, Users, FileCheck, ArrowRight } from "lucide-react";
import { processFileInput, type UploadedFileItem } from "@/lib/file-utils";

type PackageType = "Starter" | "Pro" | "Premium";

const packages: Record<
  PackageType,
  { name: string; price: string; description: string; features: string[] }
> = {
  Starter: {
    name: "Starter",
    price: "₦130,000",
    description: "Core legal NGO / Incorporated Trustees registration with official gazette publication.",
    features: [
      "CAC Incorporated Trustees Registration",
      "Official Certificate of Incorporation",
      "CAC Status Report",
      "Drafted & Approved Constitution",
      "Mandatory National Newspaper Publication",
      "Stamping and statutory legal filings",
    ],
  },
  Pro: {
    name: "Pro",
    price: "₦180,000",
    description: "NGO registration plus complete SCUML anti-money laundering compliance and bank setup.",
    features: [
      "Everything in Starter",
      "Bank account opening readiness & compliance",
      "SCUML registration support & certificate",
      "SCUML portal login username & password setup",
      "Sensitization guidance documents",
      "Monthly regulatory compliance report templates",
    ],
  },
  Premium: {
    name: "Premium",
    price: "₦450,000",
    description: "Complete NGO foundation, SCUML compliance, executive identity, and digital launch.",
    features: [
      "Everything in Pro (CAC + SCUML)",
      "Executive NGO logo, letterhead & business card design",
      "Staff & Volunteer ID card template designs",
      "12-page organisation profile document (digital)",
      "One-page responsive professional organisation website",
      "Customized corporate email accounts (e.g. info@ngo.org.ng)",
    ],
  },
};

const initialFormData = {
  category: "NGO / Non-Profit",
  proposedName1: "",
  proposedName2: "",
  purposeObjectives: "",
  orgEmail: "",
  orgPhone: "",
  headOfficeState: "",
  headOfficeLga: "",
  headOfficeCity: "",
  headOfficeAddress: "",
  // Trustee 1 (Chairman / President)
  t1FullName: "",
  t1Surname: "",
  t1OtherNames: "",
  t1Role: "Chairman / President",
  t1Dob: "",
  t1Gender: "Male",
  t1Nationality: "Nigerian",
  t1Phone: "",
  t1Email: "",
  t1Occupation: "",
  t1State: "",
  t1Lga: "",
  t1City: "",
  t1Address: "",
  t1IdType: "NIN",
  t1IdNumber: "",
  // Trustee 2 (Secretary)
  t2FullName: "",
  t2Surname: "",
  t2OtherNames: "",
  t2Role: "Secretary / General Secretary",
  t2Dob: "",
  t2Gender: "Female",
  t2Nationality: "Nigerian",
  t2Phone: "",
  t2Email: "",
  t2Occupation: "",
  t2State: "",
  t2Lga: "",
  t2City: "",
  t2Address: "",
  t2IdType: "NIN",
  t2IdNumber: "",
  // Additional Trustees
  additionalTrustees: "",
  additionalNotes: "",
  termsConsent: true,
};

export default function TrusteesPage() {
  const [selectedPkg, setSelectedPkg] = useState<PackageType>("Pro");
  const [formData, setFormData] = useState(initialFormData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileMap, setFileMap] = useState<Record<string, UploadedFileItem[]>>({});

  const resetForm = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setFileMap({});
    setErrorMessage("");
  };

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => {
      resetForm();
    }, 5000); // Auto-dismiss after 5 seconds
    return () => clearTimeout(timer);
  }, [submitted]);

  // Handle URL query parameters (e.g. ?pkg=Starter#form)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const pkgParam = params.get("pkg");
      if (pkgParam && pkgParam in packages) {
        setSelectedPkg(pkgParam as PackageType);
      }
      if (window.location.hash === "#form" || pkgParam) {
        setTimeout(() => {
          const formEl = document.getElementById("form");
          if (formEl) {
            const y = formEl.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 150);
      }
    }
  }, []);

  const scrollToForm = (pkgKey: PackageType, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedPkg(pkgKey);
    setTimeout(() => {
      const formEl = document.getElementById("form");
      if (formEl) {
        const y = formEl.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string,
    label: string
  ) => {
    try {
      if (!e.target.files || e.target.files.length === 0) {
        setFileMap((prev) => {
          const next = { ...prev };
          delete next[key];
          return next;
        });
        return;
      }
      const processed = await processFileInput(e.target.files, label);
      setFileMap((prev) => ({ ...prev, [key]: processed }));
    } catch (err: any) {
      alert(err.message || "File upload error");
      e.target.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.proposedName1) {
      setErrorMessage("Please enter at least one proposed organisation name.");
      return;
    }

    if (!formData.purposeObjectives) {
      setErrorMessage("Please outline the aims, purpose, and objectives of the organisation.");
      return;
    }

    const t1Name = formData.t1FullName || `${formData.t1Surname} ${formData.t1OtherNames}`.trim();
    if (!t1Name) {
      setErrorMessage("Please provide Trustee 1 (Chairman/President) full legal name.");
      return;
    }

    if (!formData.t1Dob) {
      setErrorMessage("Please enter Trustee 1's Date of Birth.");
      return;
    }

    if (!formData.t1Email) {
      setErrorMessage("Please provide Trustee 1's active email address.");
      return;
    }

    if (!formData.t1Phone) {
      setErrorMessage("Please provide Trustee 1's WhatsApp phone number.");
      return;
    }

    const t2Name = formData.t2FullName || `${formData.t2Surname} ${formData.t2OtherNames}`.trim();
    if (!t2Name) {
      setErrorMessage("Please provide Trustee 2 (Secretary) full legal name (CAC requires minimum 2 trustees).");
      return;
    }

    if (!formData.t2Dob) {
      setErrorMessage("Please enter Trustee 2's Date of Birth.");
      return;
    }

    if (!formData.termsConsent) {
      setErrorMessage("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const allFiles = Object.values(fileMap).flat();
      const primaryPhone = formData.t1Phone || formData.orgPhone;
      const primaryEmail = formData.t1Email || formData.orgEmail;

      const detailsMap: Record<string, string> = {
        "Organisation Category": formData.category,
        "Proposed Organisation Name 1": formData.proposedName1,
        "Proposed Name 2 (Alternative)": formData.proposedName2 || "N/A",
        "Aims & Objectives": formData.purposeObjectives,
        "Organisation Email & Phone": `${formData.orgEmail || "N/A"} | ${formData.orgPhone || "N/A"}`,
        "Registered Office Address": `${formData.headOfficeAddress || "N/A"}, ${formData.headOfficeCity || ""}, ${formData.headOfficeLga || ""}, ${formData.headOfficeState || ""}`.trim(),
        
        // Trustee 1
        "Trustee 1 (Chairman) Full Name": t1Name,
        "Trustee 1 Role": formData.t1Role,
        "Trustee 1 DOB & Gender": `${formData.t1Dob} (${formData.t1Gender})`,
        "Trustee 1 Phone & Email": `${formData.t1Phone} | ${formData.t1Email}`,
        "Trustee 1 Occupation": formData.t1Occupation || "N/A",
        "Trustee 1 Residential Address": `${formData.t1Address || "N/A"}, ${formData.t1City || ""}, ${formData.t1Lga || ""}, ${formData.t1State || ""}`.trim(),
        "Trustee 1 ID Number": `${formData.t1IdType}: ${formData.t1IdNumber || "N/A"}`,

        // Trustee 2
        "Trustee 2 (Secretary) Full Name": t2Name,
        "Trustee 2 Role": formData.t2Role,
        "Trustee 2 DOB & Gender": `${formData.t2Dob} (${formData.t2Gender})`,
        "Trustee 2 Phone & Email": `${formData.t2Phone} | ${formData.t2Email || "N/A"}`,
        "Trustee 2 Occupation": formData.t2Occupation || "N/A",
        "Trustee 2 Residential Address": `${formData.t2Address || "N/A"}, ${formData.t2City || ""}, ${formData.t2Lga || ""}, ${formData.t2State || ""}`.trim(),
        "Trustee 2 ID Number": `${formData.t2IdType}: ${formData.t2IdNumber || "N/A"}`,
      };

      if (formData.additionalTrustees) {
        detailsMap["Additional Trustees List"] = formData.additionalTrustees;
      }
      if (formData.additionalNotes) {
        detailsMap["Additional Notes"] = formData.additionalNotes;
      }
      if (allFiles.length > 0) {
        detailsMap["Attached Documents"] = allFiles.map((f) => `${f.label || "File"}: ${f.filename}`).join(", ");
      }

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: t1Name,
          phone: primaryPhone,
          email: primaryEmail,
          proposedBusinessName: formData.proposedName1,
          packageInterested: `NGO / Incorporated Trustees - ${selectedPkg}`,
          source: "trustees-form",
          files: allFiles,
          submittedDetails: detailsMap,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Unable to submit NGO application. Please check all fields and try again.");
      }
    } catch (err) {
      setErrorMessage("Network error occurred. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0b120f] text-[#f5f7ef] min-h-screen">
      {/* 1. Hero with Bold Corporate Background & Stretchy Advisory Card */}
      <section className="relative overflow-hidden bg-[#07100c] text-[#f5f7ef] pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-[rgba(198,255,63,0.14)]">
        {/* Bold Corporate Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/ultimate-hero-bg.jpg"
            alt="Abuja Central Business District Architecture"
            className="w-full h-full object-cover object-right lg:object-center opacity-90 brightness-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07100c]/95 via-[#07100c]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07100c] via-transparent to-[#07100c]/30" />
        </div>

        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow">CAC Accredited · NGO &amp; Foundation Legal Setup</div>
              <h1 className="heading-1">Start Your Incorporated Trustees Registration.</h1>
              <p className="lead-text">
                Register non-profits, foundations, churches, mosques, and community associations with CAC approval, gazette newspaper publication, and SCUML compliance.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-wrap">
                <a href="#packages" className="ep-btn ep-btn-primary text-center justify-center">
                  Choose Package
                </a>
                <a href="#form" className="ep-btn ep-btn-dark border border-[rgba(198,255,63,0.3)] text-[#f5f7ef] hover:border-[#c6ff3f] text-center justify-center">
                  Start Application
                </a>
                <Link href="/consult" className="ep-btn ep-btn-light text-center justify-center">
                  Talk to Our Team
                </Link>
              </div>
            </div>

            {/* Right Column: Stretchy Advisory Card */}
            <div className="lg:col-span-5">
              <div className="bg-[rgba(8,15,11,0.95)] border border-[rgba(198,255,63,0.42)] p-7 sm:p-9 space-y-6 shadow-2xl backdrop-blur-md rounded-2xl flex flex-col justify-between min-h-[440px]">
                {/* Header Badge */}
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(198,255,63,0.18)]">
                  <div className="w-10 h-10 rounded-full bg-[#10261a] border border-[#2b593f] flex items-center justify-center text-[#c6ff3f] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[13px] font-bold text-white leading-tight">Nigeria's Top Rated</div>
                    <div className="font-mono text-[10px] tracking-wider uppercase text-[#c6ff3f] font-bold">CAC ACCREDITED NGO DESK</div>
                  </div>
                </div>

                {/* Eyebrow & Title */}
                <div className="space-y-3">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-snug">
                    Incorporated Trustees are suitable for non-profits, foundations, churches, mosques, charities, alumni associations, and clubs.
                  </h3>
                  <p className="text-[13px] text-[#aab6ad] leading-relaxed">
                    Choose Incorporated Trustees Registration if you are founding a non-profit organization requiring CAC approval and gazette newspaper publications. For commercial companies or startups, explore our business launch packages.
                  </p>
                </div>

                {/* 1 Navigation Button */}
                <div className="pt-2">
                  <Link
                    href="/ultimate"
                    className="w-full ep-btn ep-btn-primary !py-3.5 text-center justify-center font-bold text-[13px] flex items-center gap-2 rounded-lg"
                  >
                    <span>View Ultimate Launch Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Package Selector Banner (Light Cream #E6EADF Palette) */}
      <section id="packages" className="py-20 lg:py-28 bg-[#E6EADF] text-[#0c1210] border-b border-[#ced7cd]">
        <div className="site-container">
          <div className="mb-12">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">
              Choose a Plan
            </div>
            <h2 className="text-[34px] sm:text-[46px] font-bold tracking-tight text-[#0c1210] mt-1">
              Registration Packages
            </h2>
            <p className="text-[15px] text-[#2b3a30] font-medium mt-2 max-w-2xl">
              Select the tier that matches your non-profit, foundation or church statutory requirements. Includes official newspaper notice and legal constitution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(Object.keys(packages) as PackageType[]).map((pkgKey) => {
              const pkg = packages[pkgKey];
              const isSelected = selectedPkg === pkgKey;
              return (
                <div
                  key={pkgKey}
                  onClick={(e) => scrollToForm(pkgKey, e)}
                  className={`p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#07130c] text-white border-2 border-[#c9f95a] shadow-2xl scale-[1.02]"
                      : "bg-[#ffffff] text-[#0c1210] border-[#c5d1bf] hover:border-[#17382b] shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded ${
                          isSelected
                            ? "bg-[#10261a] text-[#c9f95a] font-bold"
                            : "bg-[#e5eadf] text-[#17382b] font-bold"
                        }`}
                      >
                        {pkg.name} {pkgKey === "Pro" ? "· Recommended" : ""}
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-[#c9f95a]" />}
                    </div>
                    <div className="text-3xl font-bold mt-4 mb-2">{pkg.price}</div>
                    <p className={`text-xs ${isSelected ? "text-[#c9d5cd]" : "text-[#2b3a30] font-medium"}`}>
                      {pkg.description}
                    </p>
                    <ul className="mt-5 space-y-2.5 text-xs">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isSelected ? "text-[#c9f95a]" : "text-[#17382b]"}`} />
                          <span className={isSelected ? "text-[#f5f7ef]" : "text-[#2b3a30] font-medium"}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => scrollToForm(pkgKey, e)}
                    className={`mt-6 w-full py-3 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-[#c9f95a] text-[#07130c] hover:bg-white"
                        : "bg-[#07130c] text-[#f5f7ef] hover:bg-[#17382b]"
                    }`}
                  >
                    {isSelected ? "Selected · Continue to Form ↓" : `Select ${pkg.name}`}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Form Section (Crisp Pure White #ffffff Palette) */}
      <section id="form" className="py-20 lg:py-28 bg-[#ffffff] text-[#0c1210] border-t border-[#dce3da]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-wider text-[#17382b] font-bold">
                  Submit Request
                </div>
                <h2 className="text-[32px] sm:text-[42px] font-bold tracking-tight text-[#0c1210] mt-1">
                  Complete your application.
                </h2>
                <p className="text-[15px] text-[#2b3a30] font-medium mt-3 leading-relaxed">
                  Choose your package, provide the requested information and submit securely. Our legal team coordinates constitution drafting, newspaper publication, and CAC commission approvals.
                </p>
              </div>

              <div className="p-6 bg-[#f4f7f1] border border-[#c5d1bf] rounded-2xl space-y-4 shadow-sm">
                <div className="text-xs font-mono text-[#17382b] font-bold uppercase tracking-wider">
                  NGO Regulatory Milestones
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    1
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    Trustee availability search and name reservation on CAC portal.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    2
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    Constitution drafting &amp; mandatory national newspaper 28-day public notice.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center font-bold text-xs shrink-0">
                    3
                  </div>
                  <p className="text-xs text-[#2b3a30] font-medium">
                    Issuance of Certificate of Incorporation, Status Report &amp; SCUML support.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#07130c] border border-[#1e3b2b] rounded-2xl text-xs text-[#c9d5cd] shadow-md">
                <strong className="text-white block mb-1 text-sm font-bold">NGO Legal Desk</strong>
                Registering a church, foundation, association, club, or charity? Chat directly with our accredited trustees counsel.
                <div className="mt-3">
                  <a
                    href="https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20have%20an%20inquiry%20regarding%20NGO%20%2F%20Incorporated%20Trustees%20registration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c9f95a] font-bold hover:underline"
                  >
                    Chat with Consultant &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="relative p-10 bg-[#ffffff] border-2 border-[#17382b] text-center space-y-5 rounded-2xl shadow-xl">
                  <button
                    onClick={resetForm}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#f0f4f1] hover:bg-[#e2e8e3] text-[#17382b] flex items-center justify-center font-bold text-sm transition-colors"
                    title="Close and return to form"
                  >
                    ✕
                  </button>
                  <div className="w-16 h-16 bg-[#10261a] text-[#c9f95a] rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c1210]">Application Received</h3>
                  <p className="text-[#2b3a30] max-w-md mx-auto text-sm leading-relaxed font-medium">
                    Thank you, <strong className="text-[#0c1210] font-bold">{formData.t1FullName || `${formData.t1Surname} ${formData.t1OtherNames}`.trim() || "Founder"}</strong>. Your NGO / Incorporated Trustees registration request for <strong className="text-[#17382b] font-bold">{formData.proposedName1}</strong> under the <strong className="text-[#0c1210] font-bold">{selectedPkg}</strong> package has been queued for verification.
                  </p>
                  <p className="text-xs text-[#687c70] italic">
                    Our compliance specialist will reach out to you directly on WhatsApp / Phone.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <a
                      href={`https://wa.me/2348088194093?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20an%20NGO%20application%20for%20${encodeURIComponent(formData.proposedName1)}%20(${selectedPkg}%20tier).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ep-btn ep-btn-primary"
                    >
                      Connect on WhatsApp &rarr;
                    </a>
                    <button
                      onClick={resetForm}
                      className="ep-btn ep-btn-dark"
                    >
                      Submit Another Application
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#f9faf7] border border-[#ced7cd] p-6 lg:p-10 space-y-8 shadow-xl rounded-2xl text-[#0c1210]"
                >
                  {errorMessage && (
                    <div className="p-4 bg-red-100 border-2 border-red-600 text-red-900 text-sm font-bold rounded-xl flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0 text-xs font-black">!</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* PACKAGE SELECTION */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold">
                      Selected Package
                    </label>
                    <select
                      value={selectedPkg}
                      onChange={(e) => setSelectedPkg(e.target.value as PackageType)}
                      className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-semibold transition-all"
                    >
                      <option value="Starter">Starter: ₦130,000</option>
                      <option value="Pro">Pro: ₦180,000 (Recommended: Includes SCUML)</option>
                      <option value="Premium">Premium: ₦450,000 (Includes Website &amp; Identity)</option>
                    </select>
                  </div>

                  {/* SECTION 1: ORGANISATION DETAILS */}
                  <div className="space-y-4 pt-2 border-t border-[#ced7cd]">
                    <div className="flex items-center gap-2 text-[#17382b] font-bold text-sm uppercase font-mono tracking-wider">
                      <span className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center text-xs">1</span>
                      <span>Organisation Classification &amp; Profile</span>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold">
                        Organisation Category *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-semibold transition-all"
                      >
                        <option value="NGO / Non-Profit">Non-Governmental Organisation (NGO / Non-Profit)</option>
                        <option value="Foundation / Charity">Foundation / Charity / Humanitarian Trust</option>
                        <option value="Church / Christian Ministry">Church / Christian Ministry / Fellowship</option>
                        <option value="Mosque / Islamic Society">Mosque / Islamic Society / Foundation</option>
                        <option value="Community / Town Association">Community / Town Development Association</option>
                        <option value="Alumni / Social Club">Alumni Association / Social Club / Initiative</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Proposed Organisation Name 1 *
                        </label>
                        <input
                          type="text"
                          name="proposedName1"
                          value={formData.proposedName1}
                          onChange={handleChange}
                          required
                          placeholder="E.g., Hope Horizon Initiative"
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Proposed Organisation Name 2 (Alternative)
                        </label>
                        <input
                          type="text"
                          name="proposedName2"
                          value={formData.proposedName2}
                          onChange={handleChange}
                          placeholder="E.g., Hope Horizon Foundation"
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                        Aims, Purpose &amp; Objectives *
                      </label>
                      <textarea
                        name="purposeObjectives"
                        value={formData.purposeObjectives}
                        onChange={handleChange}
                        required
                        placeholder="Describe the mission, charitable focus, community development, religious, or educational objectives..."
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none min-h-[90px] font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Official Organisation Email
                        </label>
                        <input
                          type="email"
                          name="orgEmail"
                          value={formData.orgEmail}
                          onChange={handleChange}
                          placeholder="info@organisation.org.ng"
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Official Phone Number
                        </label>
                        <input
                          type="tel"
                          name="orgPhone"
                          value={formData.orgPhone}
                          onChange={handleChange}
                          placeholder="08088194093"
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Head Office State
                        </label>
                        <input
                          type="text"
                          name="headOfficeState"
                          value={formData.headOfficeState}
                          onChange={handleChange}
                          placeholder="State"
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Head Office LGA
                        </label>
                        <input
                          type="text"
                          name="headOfficeLga"
                          value={formData.headOfficeLga}
                          onChange={handleChange}
                          placeholder="LGA"
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Head Office City / Town
                        </label>
                        <input
                          type="text"
                          name="headOfficeCity"
                          value={formData.headOfficeCity}
                          onChange={handleChange}
                          placeholder="City"
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                        Full Registered Head Office Address
                      </label>
                      <input
                        type="text"
                        name="headOfficeAddress"
                        value={formData.headOfficeAddress}
                        onChange={handleChange}
                        placeholder="Plot number, building name, street address"
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>
                  </div>

                  {/* SECTION 2: TRUSTEE 1 (CHAIRMAN / PRESIDENT) */}
                  <div className="space-y-4 pt-4 border-t-2 border-[#17382b]/20 bg-[#ffffff] p-5 rounded-xl border border-[#c5d1bf]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#17382b] font-bold text-sm uppercase font-mono tracking-wider">
                        <span className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center text-xs">2</span>
                        <span>Trustee 1 Details (Chairman / President)</span>
                      </div>
                      <span className="text-[11px] font-bold uppercase bg-[#17382b] text-white px-2.5 py-0.5 rounded">
                        Chairman of Trustees
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="t1FullName"
                          value={formData.t1FullName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Surname *
                        </label>
                        <input
                          type="text"
                          name="t1Surname"
                          value={formData.t1Surname}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Other Names
                        </label>
                        <input
                          type="text"
                          name="t1OtherNames"
                          value={formData.t1OtherNames}
                          onChange={handleChange}
                          placeholder="Middle name"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Role / Title in Organisation *
                        </label>
                        <select
                          name="t1Role"
                          value={formData.t1Role}
                          onChange={handleChange}
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        >
                          <option value="Chairman / President">Chairman / President</option>
                          <option value="General Overseer / Pastor">General Overseer / Pastor</option>
                          <option value="Founder / Lead Trustee">Founder / Lead Trustee</option>
                          <option value="Imam / Spiritual Leader">Imam / Spiritual Leader</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="t1Dob"
                          value={formData.t1Dob}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Gender *
                        </label>
                        <select
                          name="t1Gender"
                          value={formData.t1Gender}
                          onChange={handleChange}
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        >
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Active Email *
                        </label>
                        <input
                          type="email"
                          name="t1Email"
                          value={formData.t1Email}
                          onChange={handleChange}
                          required
                          placeholder="chairman@example.com"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="t1Phone"
                          value={formData.t1Phone}
                          onChange={handleChange}
                          required
                          placeholder="08012345678"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="t1Occupation"
                          value={formData.t1Occupation}
                          onChange={handleChange}
                          placeholder="Clergy, Professional, Educator..."
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          State of Residence
                        </label>
                        <input
                          type="text"
                          name="t1State"
                          value={formData.t1State}
                          onChange={handleChange}
                          placeholder="State"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          LGA
                        </label>
                        <input
                          type="text"
                          name="t1Lga"
                          value={formData.t1Lga}
                          onChange={handleChange}
                          placeholder="LGA"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          City / Town
                        </label>
                        <input
                          type="text"
                          name="t1City"
                          value={formData.t1City}
                          onChange={handleChange}
                          placeholder="City"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                        Residential Address
                      </label>
                      <input
                        type="text"
                        name="t1Address"
                        value={formData.t1Address}
                        onChange={handleChange}
                        placeholder="House number, street address"
                        className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Means of ID Type
                        </label>
                        <select
                          name="t1IdType"
                          value={formData.t1IdType}
                          onChange={handleChange}
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        >
                          <option value="NIN">National Identity Number (NIN)</option>
                          <option value="International Passport">International Passport</option>
                          <option value="Driver's License">Driver&apos;s License</option>
                          <option value="Voter's Card">Voter&apos;s Card</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          NIN / ID Number *
                        </label>
                        <input
                          type="text"
                          name="t1IdNumber"
                          value={formData.t1IdNumber}
                          onChange={handleChange}
                          required
                          placeholder="11-digit NIN or Passport No"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    {/* TRUSTEE 1 UPLOADS */}
                    <div className="pt-2 border-t border-[#e5eadf]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Trustee 1 Document Uploads
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-[#2b3a30] mb-1">
                            Means of ID (NIN/Passport)
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "t1IdCard", "Trustee 1 ID (NIN/Passport)")}
                            className="w-full bg-[#f9faf7] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                          />
                          {fileMap["t1IdCard"] && fileMap["t1IdCard"].length > 0 && (
                            <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                              ✓ {fileMap["t1IdCard"][0].filename} attached
                            </span>
                          )}
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-[#2b3a30] mb-1">
                            Passport Photograph
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "t1Passport", "Trustee 1 Passport Photo")}
                            className="w-full bg-[#f9faf7] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                          />
                          {fileMap["t1Passport"] && fileMap["t1Passport"].length > 0 && (
                            <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                              ✓ {fileMap["t1Passport"][0].filename} attached
                            </span>
                          )}
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-[#2b3a30] mb-1">
                            Signature Specimen
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "t1Signature", "Trustee 1 Signature")}
                            className="w-full bg-[#f9faf7] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                          />
                          {fileMap["t1Signature"] && fileMap["t1Signature"].length > 0 && (
                            <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                              ✓ {fileMap["t1Signature"][0].filename} attached
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 3: TRUSTEE 2 (SECRETARY / GENERAL SECRETARY) */}
                  <div className="space-y-4 pt-4 border-t-2 border-[#17382b]/20 bg-[#ffffff] p-5 rounded-xl border border-[#c5d1bf]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#17382b] font-bold text-sm uppercase font-mono tracking-wider">
                        <span className="w-6 h-6 rounded-full bg-[#17382b] text-[#ffffff] flex items-center justify-center text-xs">3</span>
                        <span>Trustee 2 Details (Secretary / General Secretary)</span>
                      </div>
                      <span className="text-[11px] font-bold uppercase bg-[#e5eadf] text-[#17382b] px-2.5 py-0.5 rounded">
                        Secretary of Trustees
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="t2FullName"
                          value={formData.t2FullName}
                          onChange={handleChange}
                          required
                          placeholder="Jane"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Surname *
                        </label>
                        <input
                          type="text"
                          name="t2Surname"
                          value={formData.t2Surname}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Other Names
                        </label>
                        <input
                          type="text"
                          name="t2OtherNames"
                          value={formData.t2OtherNames}
                          onChange={handleChange}
                          placeholder="Middle name"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Role / Title in Organisation *
                        </label>
                        <select
                          name="t2Role"
                          value={formData.t2Role}
                          onChange={handleChange}
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        >
                          <option value="Secretary / General Secretary">Secretary / General Secretary</option>
                          <option value="Assistant General Overseer">Assistant General Overseer</option>
                          <option value="Trustee / Treasurer">Trustee / Treasurer</option>
                          <option value="Legal Adviser / Trustee">Legal Adviser / Trustee</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          name="t2Dob"
                          value={formData.t2Dob}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Gender *
                        </label>
                        <select
                          name="t2Gender"
                          value={formData.t2Gender}
                          onChange={handleChange}
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        >
                          <option value="Female">Female</option>
                          <option value="Male">Male</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Active Email
                        </label>
                        <input
                          type="email"
                          name="t2Email"
                          value={formData.t2Email}
                          onChange={handleChange}
                          placeholder="secretary@example.com"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="t2Phone"
                          value={formData.t2Phone}
                          onChange={handleChange}
                          required
                          placeholder="08012345678"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="t2Occupation"
                          value={formData.t2Occupation}
                          onChange={handleChange}
                          placeholder="Civil Servant, Legal, Business..."
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          State of Residence
                        </label>
                        <input
                          type="text"
                          name="t2State"
                          value={formData.t2State}
                          onChange={handleChange}
                          placeholder="State"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          LGA
                        </label>
                        <input
                          type="text"
                          name="t2Lga"
                          value={formData.t2Lga}
                          onChange={handleChange}
                          placeholder="LGA"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          City / Town
                        </label>
                        <input
                          type="text"
                          name="t2City"
                          value={formData.t2City}
                          onChange={handleChange}
                          placeholder="City"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                        Residential Address
                      </label>
                      <input
                        type="text"
                        name="t2Address"
                        value={formData.t2Address}
                        onChange={handleChange}
                        placeholder="House number, street address"
                        className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          Means of ID Type
                        </label>
                        <select
                          name="t2IdType"
                          value={formData.t2IdType}
                          onChange={handleChange}
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        >
                          <option value="NIN">National Identity Number (NIN)</option>
                          <option value="International Passport">International Passport</option>
                          <option value="Driver's License">Driver&apos;s License</option>
                          <option value="Voter's Card">Voter&apos;s Card</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] mb-1 font-bold">
                          NIN / ID Number
                        </label>
                        <input
                          type="text"
                          name="t2IdNumber"
                          value={formData.t2IdNumber}
                          onChange={handleChange}
                          placeholder="11-digit NIN or Passport No"
                          className="w-full bg-[#f9faf7] text-[#0c1210] border border-[#c5d1bf] p-3 text-sm focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 outline-none rounded-lg font-medium transition-all"
                        />
                      </div>
                    </div>

                    {/* TRUSTEE 2 UPLOADS */}
                    <div className="pt-2 border-t border-[#e5eadf]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-2">
                        Trustee 2 Document Uploads
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-[#2b3a30] mb-1">
                            Means of ID (NIN/Passport)
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "t2IdCard", "Trustee 2 ID (NIN/Passport)")}
                            className="w-full bg-[#f9faf7] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                          />
                          {fileMap["t2IdCard"] && fileMap["t2IdCard"].length > 0 && (
                            <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                              ✓ {fileMap["t2IdCard"][0].filename} attached
                            </span>
                          )}
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-[#2b3a30] mb-1">
                            Passport Photograph
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "t2Passport", "Trustee 2 Passport Photo")}
                            className="w-full bg-[#f9faf7] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                          />
                          {fileMap["t2Passport"] && fileMap["t2Passport"].length > 0 && (
                            <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                              ✓ {fileMap["t2Passport"][0].filename} attached
                            </span>
                          )}
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-[#2b3a30] mb-1">
                            Signature Specimen
                          </label>
                          <input
                            type="file"
                            onChange={(e) => handleFileChange(e, "t2Signature", "Trustee 2 Signature")}
                            className="w-full bg-[#f9faf7] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                          />
                          {fileMap["t2Signature"] && fileMap["t2Signature"].length > 0 && (
                            <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                              ✓ {fileMap["t2Signature"][0].filename} attached
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 4: ADDITIONAL TRUSTEES & CONSTITUTION */}
                  <div className="space-y-4 pt-2 border-t border-[#ced7cd]">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                        Additional Trustees (Trustee 3, 4, etc. - Optional)
                      </label>
                      <textarea
                        name="additionalTrustees"
                        value={formData.additionalTrustees}
                        onChange={handleChange}
                        placeholder="If you have more than 2 trustees, list their Full Names, Roles, Phone, Email, and Address here..."
                        className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none min-h-[70px] font-medium transition-all placeholder:text-[#88968d]"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Constitution / Minutes Document (Optional)
                        </label>
                        <input
                          type="file"
                          onChange={(e) => handleFileChange(e, "constitutionDoc", "Constitution / Minutes Document")}
                          className="w-full bg-[#ffffff] text-xs text-[#2b3a30] border border-[#c5d1bf] p-2 rounded-lg file:mr-2 file:py-1 file:px-2.5 file:bg-[#17382b] file:border-0 file:text-[#ffffff] file:text-xs file:font-semibold file:rounded font-medium"
                        />
                        {fileMap["constitutionDoc"] && fileMap["constitutionDoc"].length > 0 && (
                          <span className="text-[11px] text-[#166534] font-bold mt-1 block">
                            ✓ {fileMap["constitutionDoc"][0].filename} attached
                          </span>
                        )}
                        <span className="text-[10px] text-[#526357] font-medium mt-1 block">
                          Upload existing drafted constitution, bye-laws, or minutes of meeting.
                        </span>
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#17382b] font-bold mb-1">
                          Additional Information / Special Clauses
                        </label>
                        <input
                          type="text"
                          name="additionalNotes"
                          value={formData.additionalNotes}
                          onChange={handleChange}
                          placeholder="Governing body clauses, quorum rules..."
                          className="w-full bg-[#ffffff] text-[#0c1210] border border-[#c5d1bf] focus:border-[#17382b] focus:ring-2 focus:ring-[#17382b]/10 p-3 text-sm rounded-lg outline-none font-medium transition-all placeholder:text-[#88968d]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* TERMS CONSENT */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer text-xs text-[#2b3a30] font-medium">
                      <input
                        type="checkbox"
                        checked={formData.termsConsent}
                        onChange={handleChange}
                        name="termsConsent"
                        className="mt-0.5 accent-[#17382b]"
                      />
                      <span>
                        I have read and agree to the Terms of Service and Privacy Policy. I confirm that all trustees have consented and authorize Eponix Digital to conduct official CAC registration and mandatory 28-day newspaper notices.
                      </span>
                    </label>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-4 border-t border-[#ced7cd]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="ep-btn ep-btn-primary w-full py-4 text-sm font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      {isSubmitting ? "Processing Application..." : `Submit Application (${packages[selectedPkg].price})`}
                    </button>
                    <p className="text-center text-xs text-[#526357] font-medium mt-3">
                      Complete legal filing with official newspaper publication and certified CAC trustees certificate.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
