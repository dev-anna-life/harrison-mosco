import { NextRequest, NextResponse } from "next/server";
import { memoryStore } from "@/server/db";
import { sendLeadAlertToHarrison } from "@/server/services/email.service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const fullName = body.fullName || body.name || "Client";
    const phone = body.whatsappPhone || body.phone || "";
    const email = body.email || undefined;
    const proposedName = body.proposedBusinessName || body.proposedName1 || body.businessName || body.trademarkName || body.organisationName || undefined;
    const interestedPackage = body.packageInterested || body.packageChoice || body.package || "General Inscription";
    const source = body.source || body.service || "eponix-intake-form";
    const additionalDetails = body.additionalDetails || body.additionalInfo || body.message || body.natureOfBusiness || body.purposeObjectives || "";

    if (!fullName || !phone) {
      return NextResponse.json(
        { success: false, error: "Full name and a valid phone number are required." },
        { status: 400 }
      );
    }

    // Save lead to database/memory store
    const savedLead = memoryStore.addLead({
      fullName,
      phone,
      email,
      proposedName,
      interestedPackage,
      estimatedBudget: body.estimatedBudget || 100000,
      source: `${source}${additionalDetails ? ` | ${additionalDetails.slice(0, 100)}` : ""}`,
    });

    // Send notification email / alert
    try {
      await sendLeadAlertToHarrison({
        fullName,
        phone,
        email,
        proposedName,
        packageType: interestedPackage,
        shareCapitalMillions: body.shareCapitalMillions || 1,
        totalEstimatedAmount: body.estimatedBudget || 100000,
        source,
      });
    } catch (mailErr) {
      console.warn("Could not dispatch email notification:", mailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Your application has been received successfully. Our team will contact you shortly.",
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

