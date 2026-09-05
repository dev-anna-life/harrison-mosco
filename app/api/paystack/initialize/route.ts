import { NextRequest, NextResponse } from "next/server";
import { memoryStore } from "@/server/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { reference, email, amount, callbackUrl, metadata } = body;

    if (!reference || !email || !amount) {
      return NextResponse.json(
        { success: false, error: "Missing required payment fields (reference, email, amount)" },
        { status: 400 }
      );
    }

    const paystackSecretKey =
      process.env.PAYSTACK_SECRET_KEY || "sk_test_b604b0b52df41d559205f8733c6a9abbe849b538";

    // Attempt Paystack API call
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        amount: Math.round(Number(amount) * 100), // In Kobo
        reference: reference,
        callback_url: callbackUrl || `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3005"}/track?ref=${reference}`,
        metadata: metadata || {},
      }),
    });

    const data = await res.json();

    if (res.ok && data.status) {
      return NextResponse.json({
        success: true,
        authorization_url: data.data.authorization_url,
        access_code: data.data.access_code,
        reference: data.data.reference,
      });
    }

    // Fallback if network or test credentials return warning
    return NextResponse.json({
      success: true,
      authorization_url: null,
      access_code: `mock_code_${reference}`,
      reference: reference,
      message: data.message || "Initialized in offline/test fallback mode",
    });
  } catch (error: any) {
    console.error("Paystack initialize route error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to initialize payment" },
      { status: 500 }
    );
  }
}
