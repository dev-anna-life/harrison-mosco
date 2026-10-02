// =========================================================
// EMAIL & TEAM DISPATCH SERVICE - EPONIX DIGITAL PLATFORM
// =========================================================

import nodemailer, { type SendMailOptions } from "nodemailer";

export interface LeadEmailPayload {
  fullName: string;
  phone: string;
  email?: string;
  proposedName?: string;
  packageType: string;
  shareCapitalMillions?: number;
  totalEstimatedAmount?: number;
  source: string;
  additionalDetails?: string;
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

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "eponixlimited@gmail.com";
const WHATSAPP_DESK_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348088194093";

/**
 * Creates and returns the active Nodemailer transporter
 */
function getTransporter() {
  const user = process.env.SMTP_USER || "eponixlimited@gmail.com";
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD;

  if (!pass) {
    // If running in development without credentials, use a mock transporter that logs
    return {
      sendMail: async (options: SendMailOptions) => {
        console.log("--------------------------------------------------");
        console.log("📧 [NODEMAILER DISPATCH SIMULATION]");
        console.log(`To: ${options.to}`);
        console.log(`From: ${options.from || user}`);
        console.log(`Subject: ${options.subject}`);
        console.log(`(Configure SMTP_PASS in .env.local to send live emails via Gmail SMTP)`);
        console.log("--------------------------------------------------");
        return { messageId: `mock-${Date.now()}` };
      },
    };
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Sends real-time Lead Alert to the Admin (eponixlimited@gmail.com)
 * and sends confirmation welcome email to the client (if email provided).
 */
export async function sendLeadAlertToHarrison(payload: LeadEmailPayload) {
  const cleanPhone = payload.phone.replace(/[^0-9]/g, "");
  const directWhatsAppLink = `https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(
    payload.fullName
  )}%2C%20this%20is%20Eponix%20Digital.%20I%20received%20your%20application%20for%20${encodeURIComponent(
    payload.proposedName || "your business"
  )}%20(${encodeURIComponent(payload.packageType)}).`;

  const transporter = getTransporter();

  // 1. Send Admin Alert Email to eponixlimited@gmail.com
  const adminMailOptions: SendMailOptions = {
    from: `"Eponix Digital Alerts" <${process.env.SMTP_USER || "eponixlimited@gmail.com"}>`,
    to: ADMIN_EMAIL,
    subject: `🚨 New Lead: ${payload.fullName} - ${payload.packageType} (${payload.proposedName || "Business Inquiry"})`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #07100c; color: #f5f7ef; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto;">
        <div style="border-bottom: 2px solid #c6ff3f; padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="color: #c6ff3f; margin: 0; font-size: 24px;">🚨 New Lead Alert Received</h2>
          <p style="color: #aab6ad; font-size: 13px; margin-top: 4px;">Eponix Digital Corporate Intake Engine</p>
        </div>

        <div style="background-color: #0d1711; border: 1px solid #26362c; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #aab6ad; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${payload.fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #aab6ad;"><strong>Phone / WhatsApp:</strong></td>
              <td style="padding: 8px 0; color: #c6ff3f; font-weight: bold;">${payload.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #aab6ad;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${payload.email || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #aab6ad;"><strong>Proposed Business:</strong></td>
              <td style="padding: 8px 0; color: #ffffff; font-weight: bold;">${payload.proposedName || "General Consultation"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #aab6ad;"><strong>Package Selected:</strong></td>
              <td style="padding: 8px 0; color: #c6ff3f; font-weight: bold;">${payload.packageType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #aab6ad;"><strong>Source Origin:</strong></td>
              <td style="padding: 8px 0; color: #aab6ad;">${payload.source}</td>
            </tr>
            ${
              payload.additionalDetails
                ? `<tr><td style="padding: 8px 0; color: #aab6ad;"><strong>Details / Notes:</strong></td><td style="padding: 8px 0; color: #ffffff;">${payload.additionalDetails}</td></tr>`
                : ""
            }
          </table>
        </div>

        <div style="text-align: center; margin-top: 24px;">
          <a href="${directWhatsAppLink}" style="background-color: #c6ff3f; color: #071007; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block; font-size: 14px;">
            💬 Chat with ${payload.fullName} on WhatsApp
          </a>
        </div>

        <p style="text-align: center; font-size: 11px; color: #687c70; margin-top: 24px;">
          Eponix Digital Platform · Automated Lead Processing System
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    console.log(`✅ [ADMIN EMAIL ALERT SENT TO ${ADMIN_EMAIL}]`);
  } catch (err) {
    console.warn("Could not dispatch admin email:", err);
  }

  // 2. Send Customer Confirmation Email (if client entered email)
  if (payload.email) {
    const customerMailOptions: SendMailOptions = {
      from: `"Eponix Digital" <${process.env.SMTP_USER || "eponixlimited@gmail.com"}>`,
      to: payload.email,
      subject: `✨ Application Received — ${payload.proposedName || payload.packageType} | Eponix Digital`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9faf7; color: #0c1210; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #ced7cd;">
          <div style="background-color: #07100c; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: -0.5px;">EPONIX <span style="color: #c6ff3f;">DIGITAL</span></h1>
            <p style="color: #aab6ad; font-size: 12px; margin: 4px 0 0; text-transform: uppercase; font-family: monospace;">Corporate Services &amp; Digital Infrastructure</p>
          </div>

          <h2 style="color: #0c1210; font-size: 20px; margin-bottom: 12px;">Hello ${payload.fullName},</h2>
          <p style="color: #2b3a30; font-size: 14px; line-height: 1.6;">
            Thank you for reaching out to Eponix Digital. We have successfully received your inquiry for <strong>${
              payload.proposedName || "your business"
            }</strong> under the <strong>${payload.packageType}</strong> package.
          </p>

          <div style="background-color: #ffffff; border: 1px solid #c5d1bf; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <h3 style="color: #17382b; font-size: 15px; margin-top: 0; border-bottom: 1px solid #e5eadf; padding-bottom: 8px;">Application Summary</h3>
            <ul style="color: #2b3a30; font-size: 13px; line-height: 1.8; padding-left: 20px; margin-bottom: 0;">
              <li><strong>Package:</strong> ${payload.packageType}</li>
              <li><strong>Proposed Company:</strong> ${payload.proposedName || "Consultation Request"}</li>
              <li><strong>Contact Phone:</strong> ${payload.phone}</li>
              <li><strong>Status:</strong> Queued for Specialist Review</li>
            </ul>
          </div>

          <p style="color: #2b3a30; font-size: 14px; line-height: 1.6;">
            Our business launch and compliance desk has been notified. An assigned specialist will reach out to verify your requirements and guide your next steps.
          </p>

          <div style="text-align: center; margin: 28px 0 20px;">
            <a href="https://wa.me/${WHATSAPP_DESK_PHONE}?text=Hello%20Eponix%20Digital%2C%20I%20just%20submitted%20an%20application%20for%20${encodeURIComponent(
              payload.proposedName || payload.fullName
            )}%20and%20would%20like%20to%20connect%20with%20an%20advisor." style="background-color: #17382b; color: #ffffff; padding: 14px 28px; text-decoration: none; font-weight: bold; border-radius: 6px; display: inline-block; font-size: 13px;">
              Connect with Lead Advisor on WhatsApp →
            </a>
          </div>

          <p style="font-size: 12px; color: #687c70; text-align: center; border-top: 1px solid #ced7cd; padding-top: 16px; margin-top: 24px;">
            Eponix Digital · RC Accredited Corporate Services &amp; Digital Solutions<br />
            Email: <a href="mailto:eponixlimited@gmail.com" style="color: #17382b;">eponixlimited@gmail.com</a> · WhatsApp: +${WHATSAPP_DESK_PHONE}
          </p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(customerMailOptions);
      console.log(`✅ [CUSTOMER CONFIRMATION EMAIL SENT TO ${payload.email}]`);
    } catch (err) {
      console.warn("Could not dispatch customer confirmation email:", err);
    }
  }

  // 3. Trigger WhatsApp Team Bot Webhook (if configured)
  await sendWhatsAppTeamBotAlert(payload, directWhatsAppLink);

  return { success: true, timestamp: new Date().toISOString() };
}

/**
 * WhatsApp Team Bot Webhook Dispatcher
 */
export async function sendWhatsAppTeamBotAlert(payload: LeadEmailPayload, directLink: string) {
  const webhookUrl = process.env.WHATSAPP_BOT_WEBHOOK_URL || process.env.TELEGRAM_BOT_WEBHOOK_URL;

  const botMessage = `🚨 *NEW EPONIX LEAD RECEIVED*\n` +
    `👤 *Name:* ${payload.fullName}\n` +
    `📞 *Phone:* ${payload.phone}\n` +
    `📧 *Email:* ${payload.email || "N/A"}\n` +
    `🏢 *Business:* ${payload.proposedName || "N/A"}\n` +
    `📦 *Package:* ${payload.packageType}\n` +
    `📍 *Source:* ${payload.source}\n` +
    `🔗 *1-Click WhatsApp Reply:* ${directLink}`;

  console.log("--------------------------------------------------");
  console.log("🤖 [WHATSAPP TEAM BOT DISPATCH]");
  console.log(botMessage);
  console.log("--------------------------------------------------");

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: botMessage,
          lead: payload,
          timestamp: new Date().toISOString(),
        }),
      });
      console.log("✅ [WHATSAPP / TELEGRAM BOT WEBHOOK FIRED SUCCESSFULLY]");
    } catch (botErr) {
      console.warn("WhatsApp team bot webhook unreachable:", botErr);
    }
  }
}

/**
 * Sends an automated branded Launch Blueprint & Receipt to the Customer
 */
export async function sendCustomerDigitalReceipt(payload: ClientReceiptPayload) {
  const transporter = getTransporter();

  const receiptMailOptions: SendMailOptions = {
    from: `"Eponix Digital" <${process.env.SMTP_USER || "eponixlimited@gmail.com"}>`,
    to: payload.customerEmail,
    subject: `✨ Launch Order Confirmation & Receipt - Ref: ${payload.orderReference}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9faf7; color: #0c1210; padding: 32px; border-radius: 12px; max-width: 600px; margin: auto; border: 1px solid #ced7cd;">
        <div style="background-color: #07100c; padding: 24px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">EPONIX <span style="color: #c6ff3f;">DIGITAL</span></h1>
          <p style="color: #aab6ad; font-size: 12px; margin: 4px 0 0; text-transform: uppercase;">Official Payment Receipt</p>
        </div>

        <h2>Order Confirmed</h2>
        <p>Thank you, <strong>${payload.customerName}</strong>. Your payment for <strong>${payload.proposedName}</strong> has been confirmed.</p>

        <div style="background-color: #ffffff; border: 1px solid #c5d1bf; border-radius: 8px; padding: 20px; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
            <tr><td style="padding: 6px 0; color: #687c70;">Order Reference:</td><td style="font-weight: bold;">${payload.orderReference}</td></tr>
            <tr><td style="padding: 6px 0; color: #687c70;">Package:</td><td style="font-weight: bold;">${payload.packageType}</td></tr>
            <tr><td style="padding: 6px 0; color: #687c70;">Total Paid:</td><td style="font-weight: bold; color: #17382b; font-size: 16px;">₦${payload.totalAmount.toLocaleString()}</td></tr>
            <tr><td style="padding: 6px 0; color: #687c70;">Status:</td><td style="color: green; font-weight: bold;">${payload.paymentStatus}</td></tr>
          </table>
        </div>

        <p style="font-size: 13px; color: #2b3a30;">Your assigned incorporation team will proceed with name reservation and verification.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(receiptMailOptions);
    console.log(`✅ [CUSTOMER RECEIPT SENT TO ${payload.customerEmail}]`);
  } catch (err) {
    console.warn("Could not dispatch customer receipt email:", err);
  }

  return { success: true, reference: payload.orderReference };
}
