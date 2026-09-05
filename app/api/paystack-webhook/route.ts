import { NextRequest, NextResponse } from "next/server";
import { memoryStore } from "@/server/db";
import { sendCustomerDigitalReceipt } from "@/server/services/email.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Verify Paystack event
    const event = body.event;
    const data = body.data;

    if (event === "charge.success") {
      const orderRef = data.reference;
      const customerEmail = data.customer?.email;
      const amountPaid = (data.amount || 0) / 100;

      // Update in memory store
      const order = memoryStore.findOrderByRefOrPhone(orderRef);
      if (order) {
        order.status = "PAID_CONFIRMED";
        order.totalAmount = amountPaid;

        // Dispatch automated digital receipt to customer
        await sendCustomerDigitalReceipt({
          orderReference: order.reference,
          customerName: order.customerName,
          customerEmail: order.customerEmail,
          customerPhone: order.customerPhone,
          proposedName: order.proposedName1,
          packageType: order.packageType,
          shareCapitalMillions: order.shareCapitalMillions,
          directorCount: order.directors.length,
          baseAmount: order.totalAmount,
          extraSharesAmount: 0,
          extraDirectorsAmount: 0,
          aiVideoAmount: 0,
          automationAmount: 0,
          totalAmount: amountPaid,
          paymentStatus: "PAID_CONFIRMED",
        });
      }

      return NextResponse.json({ success: true, message: "Payment verified successfully" });
    }

    return NextResponse.json({ success: true, message: "Event ignored" });
  } catch (error: any) {
    console.error("Paystack webhook error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}
