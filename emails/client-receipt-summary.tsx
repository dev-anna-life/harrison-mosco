import React from "react";

interface ClientReceiptSummaryProps {
  orderReference: string;
  customerName: string;
  proposedName: string;
  packageType: string;
  shareCapitalMillions: number;
  totalAmount: number;
  paymentStatus: string;
}

export function ClientReceiptSummaryEmail({
  orderReference,
  customerName,
  proposedName,
  packageType,
  shareCapitalMillions,
  totalAmount,
  paymentStatus,
}: ClientReceiptSummaryProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", color: "#0f172a", padding: "30px" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", borderRadius: "16px", padding: "32px", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
        {/* Header */}
        <div style={{ borderBottom: "2px solid #0f172a", paddingBottom: "20px", marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h2 style={{ margin: "0", color: "#0f172a", fontSize: "22px" }}>Harrison Mosco Studio</h2>
              <span style={{ fontSize: "12px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>
                Corporate Incorporation &amp; Operations Desk
              </span>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "12px", color: "#64748b", display: "block" }}>Order Reference</span>
              <strong style={{ fontSize: "16px", color: "#0f172a", fontFamily: "monospace" }}>{orderReference}</strong>
            </div>
          </div>
        </div>

        {/* Body Greeting */}
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#334155" }}>
          Dear <strong>{customerName}</strong>,
        </p>
        <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#334155" }}>
          Thank you for trusting Harrison Mosco with your business incorporation and brand infrastructure. Your order for <strong>{proposedName}</strong> has been received and allocated to our Port Harcourt legal desk.
        </p>

        {/* Itemized Box */}
        <div style={{ backgroundColor: "#f1f5f9", borderRadius: "12px", padding: "20px", margin: "24px 0" }}>
          <h4 style={{ margin: "0 0 16px 0", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.5px", color: "#475569" }}>
            Order Specifications
          </h4>
          <table style={{ width: "100%", fontSize: "14px", borderCollapse: "collapse" }}>
            <tbody>
              <tr style={{ borderBottom: "1px solid #cbd5e1" }}>
                <td style={{ padding: "8px 0", color: "#475569" }}>Package Selected</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "bold", color: "#0f172a" }}>{packageType} Limited Company</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #cbd5e1" }}>
                <td style={{ padding: "8px 0", color: "#475569" }}>Authorized Share Capital</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "bold", color: "#0f172a" }}>{shareCapitalMillions} Million Shares</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #cbd5e1" }}>
                <td style={{ padding: "8px 0", color: "#475569" }}>Status</td>
                <td style={{ padding: "8px 0", textAlign: "right", fontWeight: "bold", color: "#059669" }}>{paymentStatus}</td>
              </tr>
              <tr>
                <td style={{ padding: "12px 0 0 0", fontSize: "16px", fontWeight: "bold", color: "#0f172a" }}>Total Amount</td>
                <td style={{ padding: "12px 0 0 0", textAlign: "right", fontSize: "20px", fontWeight: "bold", color: "#0f172a" }}>
                  NGN {totalAmount.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3-Step Next Action */}
        <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "20px", marginBottom: "24px" }}>
          <h4 style={{ margin: "0 0 12px 0", fontSize: "14px", color: "#0f172a" }}>What Happens Next?</h4>
          <ol style={{ paddingLeft: "20px", margin: "0", fontSize: "14px", lineHeight: "1.7", color: "#475569" }}>
            <li>Our legal team performs immediate pre-incorporation name reservation with the CAC.</li>
            <li>We draft your certified MEMART and Status Report.</li>
            <li>You receive your original certified true copy PDF documents and Tax ID.</li>
          </ol>
        </div>

        {/* WhatsApp Direct Support */}
        <div style={{ textAlign: "center", margin: "28px 0 12px 0" }}>
          <a
            href={`https://wa.me/2348137092154?text=Hello%20Harrison%20Mosco%2C%20I%20am%20following%20up%20on%20my%20order%20Ref%3A%20${orderReference}.`}
            style={{
              display: "inline-block",
              backgroundColor: "#0f172a",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "14px",
              padding: "14px 28px",
              borderRadius: "10px",
              textDecoration: "none",
            }}
          >
            Chat with Your Filing Officer on WhatsApp
          </a>
        </div>

        <p style={{ fontSize: "12px", color: "#94a3b8", textAlign: "center", margin: "20px 0 0 0" }}>
          Harrison Mosco • Rockville Place, SARS Road, Port Harcourt, Rivers State, Nigeria.
        </p>
      </div>
    </div>
  );
}
