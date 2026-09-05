// =========================================================
// HARRISON MOSCO PLATFORM - PRICING ENGINE
// =========================================================

export type LimitedPackageType = "Starter" | "Pro" | "Premium";

export interface LimitedPricingConfig {
  packageType: LimitedPackageType;
  shareCapitalMillions: number;
  directorCount: number;
  includeAiVideo?: boolean;
  includeAutomatedInvoicing?: boolean;
}

export interface LimitedPricingBreakdown {
  packageType: LimitedPackageType;
  basePrice: number;
  extraSharesMillions: number;
  extraSharesCost: number;
  extraDirectorsCount: number;
  extraDirectorsCost: number;
  aiVideoCost: number;
  automatedInvoicingCost: number;
  totalPayable: number;
  formattedTotal: string;
  summaryText: string;
}

export const LIMITED_BASE_PRICES: Record<LimitedPackageType, number> = {
  Starter: 60000,
  Pro: 100000,
  Premium: 350000,
};

export const BASE_SHARE_CAPITAL_MILLIONS = 1;
export const EXTRA_SHARE_PRICE_PER_MILLION = 30000;
export const BASE_DIRECTORS_INCLUDED = 2;
export const EXTRA_DIRECTOR_PRICE = 5000;
export const AI_VIDEO_ADDON_PRICE = 45000;
export const AUTOMATED_INVOICING_ADDON_PRICE = 35000;

/**
 * Calculates itemized and total cost for Limited Company incorporation
 */
export function calculateLimitedCompanyPrice(
  config: LimitedPricingConfig
): LimitedPricingBreakdown {
  const basePrice = LIMITED_BASE_PRICES[config.packageType] || 100000;

  // Extra shares calculation (anything above 1 million)
  const sharesInMillions = Math.max(1, Math.floor(config.shareCapitalMillions || 1));
  const extraSharesMillions = Math.max(0, sharesInMillions - BASE_SHARE_CAPITAL_MILLIONS);
  const extraSharesCost = extraSharesMillions * EXTRA_SHARE_PRICE_PER_MILLION;

  // Extra directors calculation (anything above 2)
  const directorCount = Math.max(1, Math.floor(config.directorCount || 1));
  const extraDirectorsCount = Math.max(0, directorCount - BASE_DIRECTORS_INCLUDED);
  const extraDirectorsCost = extraDirectorsCount * EXTRA_DIRECTOR_PRICE;

  // Optional Add-ons
  const aiVideoCost = config.includeAiVideo ? AI_VIDEO_ADDON_PRICE : 0;
  const automatedInvoicingCost = config.includeAutomatedInvoicing
    ? AUTOMATED_INVOICING_ADDON_PRICE
    : 0;

  const totalPayable =
    basePrice +
    extraSharesCost +
    extraDirectorsCost +
    aiVideoCost +
    automatedInvoicingCost;

  // Human-readable summary
  const additions: string[] = [];
  if (extraSharesMillions > 0) {
    additions.push(`+₦${formatNumber(extraSharesCost)} for ${extraSharesMillions}M extra shares`);
  }
  if (extraDirectorsCount > 0) {
    additions.push(`+₦${formatNumber(extraDirectorsCost)} for ${extraDirectorsCount} extra director(s)`);
  }
  if (aiVideoCost > 0) {
    additions.push(`+₦${formatNumber(aiVideoCost)} for AI Video Commercial`);
  }
  if (automatedInvoicingCost > 0) {
    additions.push(`+₦${formatNumber(automatedInvoicingCost)} for Automated Invoicing Setup`);
  }

  const summaryText =
    additions.length > 0
      ? `Base ${config.packageType} ₦${formatNumber(basePrice)} ${additions.join(", ")}`
      : `Base ${config.packageType} package ₦${formatNumber(basePrice)}. No extra share/director charge.`;

  return {
    packageType: config.packageType,
    basePrice,
    extraSharesMillions,
    extraSharesCost,
    extraDirectorsCount,
    extraDirectorsCost,
    aiVideoCost,
    automatedInvoicingCost,
    totalPayable,
    formattedTotal: `₦${formatNumber(totalPayable)}`,
    summaryText,
  };
}

export function formatNGN(amount: number): string {
  return `₦${formatNumber(amount)}`;
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-NG").format(num);
}
