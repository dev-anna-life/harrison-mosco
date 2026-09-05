import { NextRequest, NextResponse } from "next/server";
import { leadCaptureSchema } from "@/lib/validators";
import { memoryStore } from "@/server/db";
import { sendLeadAlertToHarrison } from "@/server/services/email.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = leadCaptureSchema.parse(body);

    // Save lead to database/memory store
    const savedLead = memoryStore.addLead({
      fullName: validatedData.fullName,
      phone: validatedData.whatsappPhone,
      email: validatedData.email || undefined,
      proposedName: validatedData.proposedBusinessName,
      interestedPackage: validatedData.packageInterested,
      estimatedBudget: 100000,
      source: validatedData.source,
    });

    // Send high-priority alert to Harrison
    await sendLeadAlertToHarrison({
      fullName: validatedData.fullName,
      phone: validatedData.whatsappPhone,
      email: validatedData.email,
      proposedName: validatedData.proposedBusinessName,
      packageType: validatedData.packageInterested,
      shareCapitalMillions: validatedData.shareCapitalMillions,
      totalEstimatedAmount: 100000,
      source: validatedData.source,
    });

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully",
      leadId: savedLead.id,
    });
  } catch (error: any) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead" },
      { status: 400 }
    );
  }
}
