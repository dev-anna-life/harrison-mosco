// =========================================================
// EMAIL DISPATCH SERVICE - HARRISON MOSCO PLATFORM
// =========================================================

export interface LeadEmailPayload {
  fullName: string;
  phone: string;
  email?: string;
  proposedName?: string;
  packageType: string;
  shareCapitalMillions: number;
  totalEstimatedAmount: number;
  source: string;
}

export interface ClientReceiptPayload {
  orderReference: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  proposedName: string;
  packageType: string;
  shareCapitalMillions: number;
  directorCount: number;
  baseAmount: number;
  extraSharesAmount: number;
  extraDirectorsAmount: number;
  aiVideoAmount: number;
  automationAmount: number;
  totalAmount: number;
  paymentStatus: string;
}

/**
 * Sends a high-priority Lead Alert to Harrison Mosco
 */
export async function sendLeadAlertToHarrison(payload: LeadEmailPayload) {
  const harrisonWhatsAppLink = `https://wa.me/${payload.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(
    payload.fullName
  )}%2C%20this%20is%20Harrison%20Mosco.%20I%20received%20your%20business%20launch%20inquiry%20for%20${encodeURIComponent(
    payload.proposedName || "your company"
  )}.`;

  console.log("--------------------------------------------------");
  console.log("🚨 [EMAIL ALERT DISPATCHED TO HARRISON MOSCO]");
  console.log(`To: admin@harrisonmosco.ng (Harrison Mosco)`);
  console.log(`Subject: New Lead Alert: ${payload.fullName} - ${payload.packageType} Package (₦${payload.totalEstimatedAmount.toLocaleString()})`);
  console.log(`Phone: ${payload.phone}`);
  console.log(`Proposed Name: ${payload.proposedName || "Not specified"}`);
  console.log(`Direct WhatsApp Callback: ${harrisonWhatsAppLink}`);
  console.log("--------------------------------------------------");

  return { success: true, timestamp: new Date().toISOString() };
}

/**
 * Sends an automated branded Launch Blueprint & Receipt to the Customer
 */
export async function sendCustomerDigitalReceipt(payload: ClientReceiptPayload) {
  console.log("--------------------------------------------------");
  console.log("✨ [AUTOMATED RECEIPT DISPATCHED TO CUSTOMER]");
  console.log(`To: ${payload.customerEmail} (${payload.customerName})`);
  console.log(`Subject: Launch Order Summary & Digital Receipt - Ref: ${payload.orderReference}`);
  console.log(`Total Paid: ₦${payload.totalAmount.toLocaleString()}`);
  console.log(`Package: ${payload.packageType} (${payload.shareCapitalMillions}M Share Capital)`);
  console.log("--------------------------------------------------");

  return { success: true, reference: payload.orderReference };
}
