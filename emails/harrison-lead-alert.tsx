import React from "react";

interface HarrisonLeadAlertProps {
  fullName: string;
  phone: string;
  email?: string;
  proposedName?: string;
  packageType: string;
  shareCapitalMillions: number;
  totalEstimatedAmount: number;
  source: string;
}

export function HarrisonLeadAlertEmail({
  fullName,
  phone,
  email,
  proposedName,
  packageType,
  shareCapitalMillions,
  totalEstimatedAmount,
  source,
}: HarrisonLeadAlertProps) {
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(
    fullName
  )}%2C%20this%20is%20Harrison%20Mosco.%20I%20received%20your%20inquiry%20regarding%20${encodeURIComponent(
    proposedName || "your company incorporation"
  )}.`;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#0a0e17", color: "#ffffff", padding: "30px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#0f172a", borderRadius: "16px", padding: "32px", border: "1px solid #1e293b" }}>
        <div style={{ borderBottom: "2px solid #FDC902", paddingBottom: "16px", marginBottom: "24px" }}>
          <span style={{ color: "#FDC902", fontSize: "12px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
            Harrison Mosco Platform • New Inbound Lead
          </span>
          <h2 style={{ color: "#ffffff", margin: "8px 0 0 0", fontSize: "24px" }}>
            New Client Registration Lead
          </h2>
        </div>

        <div style={{ backgroundColor: "#141d33", borderRadius: "12px", padding: "20px", marginBottom: "24px" }}>
          <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
            <strong>Client Name:</strong> {fullName}
          </p>
          <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
            <strong>WhatsApp Phone:</strong> <a href={`tel:${phone}`} style={{ color: "#FDC902", textDecoration: "none" }}>{phone}</a>
          </p>
          {email && (
            <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
              <strong>Email Address:</strong> <a href={`mailto:${email}`} style={{ color: "#38bdf8", textDecoration: "none" }}>{email}</a>
            </p>
          )}
          <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
            <strong>Proposed Entity Name:</strong> {proposedName || "Not yet decided"}
          </p>
          <p style={{ margin: "0 0 10px 0", fontSize: "16px" }}>
            <strong>Interested Package:</strong> {packageType} Limited ({shareCapitalMillions}M Share Capital)
          </p>
          <p style={{ margin: "0", fontSize: "18px", color: "#FDC902" }}>
            <strong>Estimated Order Value:</strong> NGN {totalEstimatedAmount.toLocaleString()}
          </p>
        </div>

        <div style={{ textAlign: "center", margin: "32px 0 16px 0" }}>
          <a
            href={whatsappUrl}
            style={{
              display: "inline-block",
              backgroundColor: "#25D366",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "16px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              boxShadow: "0 8px 20px rgba(37, 211, 102, 0.3)",
            }}
          >
            Open 1-Click WhatsApp Callback &rarr;
          </a>
        </div>

        <p style={{ fontSize: "12px", color: "#94a3b8", textAlign: "center", margin: "0" }}>
          Lead captured from {source} at {new Date().toLocaleTimeString()} WAT.
        </p>
      </div>
    </div>
  );
}
