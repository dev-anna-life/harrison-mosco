import { NextRequest, NextResponse } from "next/server";
import { memoryStore } from "@/server/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json(
      { success: false, error: "Search query required (Reference or Phone)" },
      { status: 400 }
    );
  }

  const order = memoryStore.findOrderByRefOrPhone(query);

  if (!order) {
    return NextResponse.json(
      {
        success: false,
        error: "No active application found matching this reference or phone number.",
      },
      { status: 404 }
    );
  }

  // Stages map for the progress bar
  const STAGES = [
    { key: "PENDING_PAYMENT", label: "Payment Verification", step: 1 },
    { key: "NAME_RESERVATION_SUBMITTED", label: "CAC Name Availability Check", step: 2 },
    { key: "DOCUMENT_DRAFTING", label: "MEMART & Compliance Drafting", step: 3 },
    { key: "CAC_SUBMITTED", label: "Final CAC Processing & Review", step: 4 },
    { key: "CERTIFICATE_ISSUED", label: "Original PDF Certificate Ready", step: 5 },
  ];

  return NextResponse.json({
    success: true,
    order: {
      reference: order.reference,
      customerName: order.customerName,
      proposedName: order.proposedName1,
      packageType: order.packageType,
      status: order.status,
      stages: STAGES,
      createdAt: order.createdAt,
    },
  });
}
