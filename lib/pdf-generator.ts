/**
 * Browser-native High-Resolution PDF & Print Engine for Harrison Mosco Platform
 */

export function printDigitalReceipt(order: {
  reference: string;
  customerName?: string;
  companyName: string;
  packageType: string;
  shareCapitalMillions: number;
  directorCount: number;
  totalAmount: number;
  formattedTotal: string;
  paymentStatus?: "PAID_CONFIRMED" | "PENDING_PAYMENT" | "ESTIMATE" | string;
  date?: string;
}) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups to download your official PDF receipt.");
    return;
  }

  const dateStr =
    order.date ||
    new Date().toLocaleDateString("en-NG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const isPaid = order.paymentStatus === "PAID_CONFIRMED";

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Official Receipt - ${order.reference}</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          margin: 0;
          padding: 40px;
          color: #0f172a;
          background: #ffffff;
        }
        .invoice-card {
          max-width: 750px;
          margin: 0 auto;
          border: 2px solid #0f172a;
          border-radius: 20px;
          padding: 40px;
          position: relative;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 24px;
        }
        .brand-title {
          font-size: 26px;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .brand-subtitle {
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #FDC902;
          background: #0a0e17;
          display: inline-block;
          padding: 4px 10px;
          border-radius: 6px;
          margin-top: 6px;
        }
        .stamp-badge {
          display: inline-block;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 8px;
          margin-bottom: 8px;
        }
        .stamp-paid {
          background: #dcfce7;
          color: #15803d;
          border: 2px solid #22c55e;
        }
        .stamp-pending {
          background: #fef9c3;
          color: #854d0e;
          border: 2px solid #eab308;
        }
        .ref-box {
          text-align: right;
        }
        .ref-label {
          font-size: 11px;
          text-transform: uppercase;
          color: #64748b;
          font-weight: bold;
        }
        .ref-number {
          font-family: monospace;
          font-size: 20px;
          font-weight: 900;
          color: #0f172a;
        }
        .meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin: 24px 0;
          padding: 20px;
          background: #f8fafc;
          border-radius: 14px;
          border: 1px solid #e2e8f0;
        }
        .meta-item {
          font-size: 13px;
        }
        .meta-item strong {
          display: block;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
          margin-bottom: 3px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
        }
        th {
          text-align: left;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #64748b;
          border-bottom: 2px solid #e2e8f0;
          padding: 10px 0;
        }
        td {
          padding: 14px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 14px;
        }
        .total-row td {
          border-top: 2px solid #0f172a;
          border-bottom: none;
          font-size: 22px;
          font-weight: 900;
          padding-top: 18px;
          color: #0f172a;
        }
        .verification-bar {
          background: #0a0e17;
          color: #ffffff;
          padding: 16px 20px;
          border-radius: 12px;
          margin-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
        .footer {
          margin-top: 24px;
          padding-top: 18px;
          border-top: 1px solid #e2e8f0;
          font-size: 11px;
          color: #64748b;
          display: flex;
          justify-content: space-between;
        }
        @media print {
          body { padding: 0; }
          .invoice-card { border: none; padding: 0; }
        }
      </style>
    </head>
    <body>
      <div class="invoice-card">
        <div class="header">
          <div>
            <h1 class="brand-title">HARRISON MOSCO</h1>
            <div class="brand-subtitle">Corporate Incorporation &amp; Automation Desk</div>
            <div style="font-size: 12px; color: #475569; margin-top: 8px;">
              Rockville Place, SARS Road, Port Harcourt, Rivers State, Nigeria.
            </div>
          </div>
          <div class="ref-box">
            <div class="stamp-badge ${isPaid ? "stamp-paid" : "stamp-pending"}">
              ${isPaid ? "PAID IN FULL - VERIFIED" : "OFFICIAL SPECIFICATION"}
            </div>
            <div class="ref-label">Order Reference</div>
            <div class="ref-number">${order.reference}</div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">${dateStr}</div>
          </div>
        </div>

        <div class="meta-grid">
          <div class="meta-item">
            <strong>Proposed Entity Name</strong>
            <span style="font-weight: 800; font-size: 14px;">${order.companyName}</span>
          </div>
          <div class="meta-item">
            <strong>Applicant / Founder</strong>
            <span style="font-weight: 700;">${order.customerName || "Designated Director"}</span>
          </div>
          <div class="meta-item">
            <strong>Package Tier</strong>
            ${order.packageType} Limited Company
          </div>
          <div class="meta-item">
            <strong>Share Capital &amp; Directors</strong>
            ${order.shareCapitalMillions}M Share Capital • ${order.directorCount} Directors
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th style="text-align: right;">Amount (NGN)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${order.packageType} Limited Company Legal Incorporation</strong><br/>
                <span style="font-size: 12px; color: #64748b;">Includes CAC Certificate, Official Status Report, MEMART, and NRS Corporate Tax ID</span>
              </td>
              <td style="text-align: right; font-weight: bold;">
                NGN ${(order.packageType === "Starter" ? 60000 : order.packageType === "Pro" ? 100000 : 350000).toLocaleString()}
              </td>
            </tr>
            ${
              order.shareCapitalMillions > 1
                ? `<tr>
                    <td>
                      <strong>Additional Share Capital Stamp Duties</strong><br/>
                      <span style="font-size: 12px; color: #64748b;">${order.shareCapitalMillions - 1}M additional authorized shares</span>
                    </td>
                    <td style="text-align: right; font-weight: bold;">
                      +NGN ${((order.shareCapitalMillions - 1) * 30000).toLocaleString()}
                    </td>
                  </tr>`
                : ""
            }
            ${
              order.directorCount > 2
                ? `<tr>
                    <td>
                      <strong>Additional Director Surcharges</strong><br/>
                      <span style="font-size: 12px; color: #64748b;">${order.directorCount - 2} additional directors</span>
                    </td>
                    <td style="text-align: right; font-weight: bold;">
                      +NGN ${((order.directorCount - 2) * 5000).toLocaleString()}
                    </td>
                  </tr>`
                : ""
            }
            <tr class="total-row">
              <td>Total Amount Payable (Inclusive of 7.5% VAT)</td>
              <td style="text-align: right;">${order.formattedTotal}</td>
            </tr>
          </tbody>
        </table>

        <div class="verification-bar">
          <div>
            <strong>Automated Digital Verification:</strong> [ Barcode: ${order.reference} ]
          </div>
          <div style="font-family: monospace; font-size: 11px; color: #FDC902;">
            Status: ${isPaid ? "CONFIRMED & ACTIVE" : "AWAITING SETTLEMENT"}
          </div>
        </div>

        <div class="footer">
          <div>Corporate Affairs Commission Accredited Legal Desk</div>
          <div>Direct Support: +234 813 709 2154 • support@harrisonmosco.ng</div>
        </div>
      </div>
      <script>
        window.onload = function() {
          window.print();
        };
      </script>
    </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
