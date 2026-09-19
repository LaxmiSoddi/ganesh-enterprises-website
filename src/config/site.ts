// ============================================================================
// GANESH ENTERPRISES — SITE CONFIGURATION
// ----------------------------------------------------------------------------
// ✏️  EDIT THIS FILE to add your real business details.
//     Every value marked [ADD ...] is an editable placeholder.
//     Once you replace a placeholder, it updates everywhere on the website.
// ============================================================================

export const COMPANY = {
  name: "Ganesh Enterprises",
  tagline: "PPR • HDPE • MDPE • GI PIPES & FITTINGS",
  // ✏️ [ADD COMPANY DESCRIPTION] — replace with your own company description.
  description:
    "Reliable pipeline and plumbing solutions for residential, commercial and infrastructure requirements.",
  logo: "/branding/logo.png",
  logoLarge: "/branding/logo-800.png",
} as const;

// ✏️ TODO: Replace with the real WhatsApp number — country code + number, digits only.
//    Example: "919876543210". Leave as-is until you have the real number.
export const WHATSAPP_NUMBER = "WHATSAPP_NUMBER_HERE";

// ✏️ TODO: Replace placeholders with real contact details.
export const CONTACT = {
  phoneDisplay: "+91 86608 42158",
  phoneHref: "tel:8660842158",
  whatsappDisplay: "+91 86608 42158",
  emailDisplay: "ganeshenterprises191@gmail.com",
  emailHref: "mailto:ganeshenterprises191@gmail.com",
  address: "Hoskote, Karnataka - near Jio Petrol Pump",
  businessHours: ["Mon – Sun: 8:00 AM – 8:00 PM",],
} as const;

/** Builds a wa.me deep link using the configured WhatsApp number. */
export const waLink = (message?: string): string =>
  `https://wa.me/${8660842158}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

// ---------------------------------------------------------------------------
// Inquiry form payload + submission
// ---------------------------------------------------------------------------
export interface InquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  product: string;
  quantity?: string;
  message: string;
}

export interface InquiryResult {
  ok: boolean;
  reference: string;
}

/**
 * Handles inquiry form submission.
 *
 * ✏️ TODO: CONNECT A REAL BACKEND / EMAIL SERVICE HERE.
 * Options (any one):
 *   1. POST to your own API endpoint          → fetch("/api/inquiries", { method: "POST", body: JSON.stringify(payload) })
 *   2. POST to a form service (Formspree etc.)→ fetch("https://formspree.io/f/YOUR_ID", ...)
 *   3. Open WhatsApp with a pre-filled message→ window.open(waLink(summary))
 *   4. Send via an email API (Resend, SendGrid, SES…) from your backend.
 *
 * Until a real endpoint is connected, this simulates a successful submission
 * so the full form UX can be tested. No data is stored or sent anywhere.
 */
export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResult> {
  // Simulated network latency — replace the block below with a real request.
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Sanitized debug log only — no personal contact details are logged.
  console.info("[Inquiry] captured (no backend connected yet):", {
    product: payload.product,
    hasMessage: payload.message.length > 0,
  });

  const reference = `GE-${Date.now().toString(36).toUpperCase()}`;
  return { ok: true, reference };
}
