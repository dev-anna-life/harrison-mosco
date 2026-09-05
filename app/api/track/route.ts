import { NextRequest, NextResponse } from "next/server";
import { memoryStore } from "@/server/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query =
    searchParams.get("reference") ||
    searchParams.get("q") ||
    searchParams.get("query") ||
    searchParams.get("ref");

  if (!query) {
    return NextResponse.json(
      { success: false, error: "Search query required (Reference, Company Name, or Phone)" },
      { status: 400 }
    );
  }

  const order = memoryStore.findOrderByRefOrPhone(query);

  if (!order) {
    return NextResponse.json(
      {
        success: false,
        error: "No active application found matching this reference code or company name.",
      },
      { status: 404 }
    );
  }

  const isPaid = order.status === "PAID_CONFIRMED" || order.status === "CAC_SUBMITTED";

  const milestones = [
    {
      title: "1. Order Submission & Payment Verification",
      description: isPaid
        ? "Payment confirmed via Paystack gateway. Receipt issued."
        : "Order received. Awaiting payment clearance.",
      completed: isPaid,
      current: !isPaid,
      date: order.createdAt ? new Date(order.createdAt).toLocaleDateString("en-NG") : "Day 1",
    },
    {
      title: "2. CAC Name Availability & Reservation",
      description: "Proposed names submitted to the CAC portal for official approval.",
      completed: order.status === "CAC_SUBMITTED" || order.status === "CERTIFICATE_ISSUED",
      current: isPaid && order.status !== "CAC_SUBMITTED" && order.status !== "CERTIFICATE_ISSUED",
      date: isPaid ? "In Progress" : "Pending",
    },
    {
      title: "3. MEMART Drafting & Director Allocation",
      description: "Memorandum & Articles of Association drafted with allocated share capital.",
      completed: order.status === "CERTIFICATE_ISSUED",
      current: false,
      date: "Scheduled",
    },
    {
      title: "4. Final CAC Processing & Accredited Review",
      description: "Final statutory review by accredited CAC desk.",
      completed: order.status === "CERTIFICATE_ISSUED",
      current: false,
      date: "Scheduled",
    },
    {
      title: "5. Official Certificate & NRS Tax ID Issuance",
      description: "Certified PDF certificate of incorporation, status report, and TIN issued.",
      completed: order.status === "CERTIFICATE_ISSUED",
      current: false,
      date: "Within 3 to 7 Days",
    },
  ];

  const payload = {
    reference: order.reference,
    customerName: order.customerName,
    proposedName1: order.proposedName1,
    proposedName2: order.proposedName2,
    packageChoice: order.packageType,
    shareCapitalMillions: order.shareCapitalMillions,
    totalAmount: order.totalAmount,
    status: order.status,
    estimatedDelivery: "3 to 7 Working Days",
    milestones,
    createdAt: order.createdAt,
  };

  return NextResponse.json({
    success: true,
    data: payload,
    order: payload,
  });
}
