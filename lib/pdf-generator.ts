/**
 * Browser-native PDF generator and print utility for Harrison Mosco Platform
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
  date?: string;
}) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups to download your official PDF receipt.");
    return;
  }

  const dateStr = order.date || new Date().toLocaleDateString("en-NG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Official Invoice - ${order.reference}</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          margin: 0;
          padding: 40px;
          color: #0f172a;
          background: #ffffff;
        }
        .invoice-card {
          max-width: 700px;
          margin: 0 auto;
          border: 2px solid #0f172a;
          border-radius: 16px;
          padding: 36px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid #0f172a;
          padding-bottom: 20px;
        }
        .brand-title {
          font-size: 24px;
          font-weight: 900;
          color: #0f172a;
          margin: 0;
        }
        .brand-subtitle {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #64748b;
          margin-top: 4px;
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
          font-size: 18px;
          font-weight: 900;
          color: #0f172a;
        }
        .meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin: 24px 0;
          padding: 16px;
          background: #f8fafc;
          border-radius: 12px;
        }
        .meta-item {
          font-size: 13px;
        }
        .meta-item strong {
          display: block;
          font-size: 11px;
          text-transform: uppercase;
          color: #64748b;
          margin-bottom: 2px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 24px 0;
        }
        th {
          text-align: left;
          font-size: 12px;
          text-transform: uppercase;
          color: #64748b;
          border-bottom: 1px solid #e2e8f0;
          padding: 8px 0;
        }
        td {
          padding: 14px 0;
          border-bottom: 1px solid #f1f5f9;
          font-size: 14px;
        }
        .total-row td {
          border-top: 2px solid #0f172a;
          border-bottom: none;
          font-size: 20px;
          font-weight: 900;
          padding-top: 16px;
        }
        .footer {
          margin-top: 36px;
          padding-top: 20px;
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
            <div class="brand-subtitle">Corporate Incorporation & Automation Desk</div>
            <div style="font-size: 12px; color: #475569; margin-top: 6px;">
              Port Harcourt HQ • Nationwide Legal Compliance
            </div>
          </div>
          <div class="ref-box">
            <div class="ref-label">Official Specification / Invoice</div>
            <div class="ref-number">${order.reference}</div>
            <div style="font-size: 12px; color: #64748b; margin-top: 4px;">${dateStr}</div>
          </div>
        </div>

        <div class="meta-grid">
          <div class="meta-item">
            <strong>Entity Name Preview</strong>
            ${order.companyName}
          </div>
          <div class="meta-item">
            <strong>Package Tier</strong>
            ${order.packageType} Limited Company
          </div>
          <div class="meta-item">
            <strong>Authorized Share Capital</strong>
            ${order.shareCapitalMillions} Million Shares
          </div>
          <div class="meta-item">
            <strong>Director Allocation</strong>
            ${order.directorCount} Directors
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th style="text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${order.packageType} Limited Company Incorporation</strong><br/>
                <span style="font-size: 12px; color: #64748b;">CAC Status Report, MEMART, and NRS Corporate Tax ID</span>
              </td>
              <td style="text-align: right; font-weight: bold;">
                NGN ${(order.packageType === "Starter" ? 60000 : order.packageType === "Pro" ? 100000 : 350000).toLocaleString()}
              </td>
            </tr>
            ${
              order.shareCapitalMillions > 1
                ? `<tr>
                    <td>
                      <strong>Additional Share Capital Stamp Duty</strong><br/>
                      <span style="font-size: 12px; color: #64748b;">${order.shareCapitalMillions - 1}M additional share capital</span>
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
              <td>Total Payable</td>
              <td style="text-align: right; color: #0f172a;">${order.formattedTotal}</td>
            </tr>
          </tbody>
        </table>

        <div class="footer">
          <div>Accredited Corporate Affairs Commission Filing Desk</div>
          <div>WhatsApp: +234 813 709 2154 • support@harrisonmosco.ng</div>
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
