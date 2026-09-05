import { NextRequest, NextResponse } from "next/server";
import { limitedCompanyFormSchema } from "@/lib/validators";
import { calculateLimitedCompanyPrice } from "@/lib/pricing-engine";
import { memoryStore } from "@/server/db";
import { sendCustomerDigitalReceipt } from "@/server/services/email.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validated = limitedCompanyFormSchema.parse(body);

    // Calculate official deterministic price
    const pricing = calculateLimitedCompanyPrice({
      packageType: validated.packageChoice,
      shareCapitalMillions: validated.shareCapitalMillions,
      directorCount: validated.directors.length,
      includeAiVideo: validated.includeAiVideo,
      includeAutomatedInvoicing: validated.includeAutomatedInvoicing,
    });

    // Save order and directors
    const primaryDirector = validated.directors[0];
    const customerName = `${primaryDirector.firstName} ${primaryDirector.surname}`;
    const customerEmail = primaryDirector.email;
    const customerPhone = `${primaryDirector.phoneCountryCode}${primaryDirector.phone}`;

    const newOrder = memoryStore.addOrder({
      customerName,
      customerEmail,
      customerPhone,
      isOutsourcing: validated.isOutsourcing,
      proposedName1: validated.proposedName1,
      proposedName2: validated.proposedName2,
      packageType: validated.packageChoice,
      shareCapitalMillions: validated.shareCapitalMillions,
      totalAmount: pricing.totalPayable,
      status: "PENDING_PAYMENT",
      directors: validated.directors,
    });

    // Trigger customer digital receipt dispatch
    await sendCustomerDigitalReceipt({
      orderReference: newOrder.reference,
      customerName,
      customerEmail,
      customerPhone,
      proposedName: validated.proposedName1,
      packageType: validated.packageChoice,
      shareCapitalMillions: validated.shareCapitalMillions,
      directorCount: validated.directors.length,
      baseAmount: pricing.basePrice,
      extraSharesAmount: pricing.extraSharesCost,
      extraDirectorsAmount: pricing.extraDirectorsCost,
      aiVideoAmount: pricing.aiVideoCost,
      automationAmount: pricing.automatedInvoicingCost,
      totalAmount: pricing.totalPayable,
      paymentStatus: "Pending / Processing",
    });

    return NextResponse.json({
      success: true,
      reference: newOrder.reference,
      totalAmount: pricing.totalPayable,
      formattedTotal: pricing.formattedTotal,
      message: "Order submitted and receipt created",
    });
  } catch (error: any) {
    console.error("Order error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Invalid order parameters" },
      { status: 400 }
    );
  }
}
