/**
 * Client-Side Paystack Inline Integration Utility
 */

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: {
        key: string;
        email: string;
        amount: number; // In Kobo (NGN * 100)
        ref: string;
        currency?: string;
        channels?: string[];
        metadata?: Record<string, any>;
        callback: (response: {
          reference: string;
          status: string;
          trans: string;
          transaction: string;
          trxref: string;
          message?: string;
        }) => void;
        onClose: () => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

export function loadPaystackScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.PaystackPop) {
      resolve(true);
      return;
    }

    const existingScript = document.getElementById("paystack-inline-js");
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.id = "paystack-inline-js";
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export interface PaystackCheckoutOptions {
  email: string;
  amountNGN: number;
  reference: string;
  customerName?: string;
  companyName?: string;
  publicKey?: string;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
  onError?: (error: string) => void;
}

export async function triggerPaystackCheckout({
  email,
  amountNGN,
  reference,
  customerName = "Valued Customer",
  companyName = "Proposed Entity",
  publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_d3c348982a7f5c76579bb8876a3be81a54593f6c",
  onSuccess,
  onClose,
  onError,
}: PaystackCheckoutOptions) {
  const isLoaded = await loadPaystackScript();

  if (!isLoaded || !window.PaystackPop) {
    if (onError) {
      onError("Failed to load Paystack payment gateway. Please check your internet connection.");
    }
    return;
  }

  try {
    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: email.trim(),
      amount: Math.round(amountNGN * 100), // Converted to kobo
      ref: reference,
      currency: "NGN",
      channels: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer"],
      metadata: {
        custom_fields: [
          {
            display_name: "Customer Name",
            variable_name: "customer_name",
            value: customerName,
          },
          {
            display_name: "Entity Name",
            variable_name: "entity_name",
            value: companyName,
          },
          {
            display_name: "Order Reference",
            variable_name: "order_reference",
            value: reference,
          },
        ],
      },
      callback: (response) => {
        onSuccess(response.reference || reference);
      },
      onClose: () => {
        if (onClose) onClose();
      },
    });

    handler.openIframe();
  } catch (err: any) {
    console.error("Paystack initialization error:", err);
    if (onError) onError(err.message || "Could not open Paystack checkout.");
  }
}
