import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import { submitInquiry, waLink, type InquiryPayload, type InquiryResult } from "@/config/site";
import { PRODUCTS } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const inquirySchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[0-9][0-9\s-]{6,14}$/, "Please enter a valid phone number (7–15 digits)."),
  email: z.string().trim().email("Please enter a valid email address."),
  product: z.string().min(1, "Please select a product or category."),
  quantity: z.string().trim().max(200, "Please keep this under 200 characters.").optional(),
  message: z.string().trim().min(10, "Please describe your requirement (at least 10 characters)."),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const PRODUCT_OPTIONS = ["General Inquiry", ...PRODUCTS.map((p) => p.name)];

interface InquiryFormProps {
  /** Pre-selects a product (e.g. when arriving from a product page). */
  defaultProduct?: string;
  idPrefix?: string;
  submitLabel?: string;
}

/**
 * Reusable inquiry / quote form.
 * Submission is handled by `submitInquiry()` in src/config/site.ts —
 * connect a real backend, email service or WhatsApp integration there.
 */
export function InquiryForm({
  defaultProduct,
  idPrefix = "inquiry",
  submitLabel = "Send Inquiry",
}: InquiryFormProps) {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState<InquiryResult | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const preselected = useMemo(() => {
    const fromQuery = searchParams.get("product");
    const candidate = defaultProduct ?? fromQuery ?? "General Inquiry";
    const match = PRODUCTS.find((p) => p.slug === candidate || p.name === candidate);
    return match?.name ?? (PRODUCT_OPTIONS.includes(candidate) ? candidate : "General Inquiry");
  }, [searchParams, defaultProduct]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      product: preselected,
      quantity: "",
      message: "",
    },
  });

  const onSubmit = async (values: InquiryFormValues) => {
    setSubmitError(null);
    try {
      const payload: InquiryPayload = {
        fullName: values.fullName ?? "",
        phone: values.phone ?? "",
        email: values.email ?? "",
        product: values.product ?? "",
        quantity: values.quantity,
        message: values.message ?? "",
      };
      const res = await submitInquiry(payload);
      setResult(res);
      reset({ ...values, fullName: "", phone: "", email: "", quantity: "", message: "" });
    } catch {
      setSubmitError("Something went wrong while sending your inquiry. Please try again.");
    }
  };

  if (result?.ok) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-md border border-ppr/30 bg-ppr/5 px-6 py-10 text-center"
      >
        <CheckCircle2 aria-hidden="true" className="h-12 w-12 text-ppr" />
        <div>
          <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy-900">
            Inquiry Sent Successfully
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Thank you for contacting Ganesh Enterprises. Your requirement has been recorded with
            reference <span className="font-semibold text-navy-900">{result.reference}</span>. Our
            team will get back to you shortly.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setResult(null);
            setSubmitError(null);
          }}
        >
          Send Another Inquiry
        </Button>
      </div>
    );
  }

  const fieldClass = "mt-1.5";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <Label htmlFor={`${idPrefix}-name`}>Full Name *</Label>
        <Input
          id={`${idPrefix}-name`}
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          aria-invalid={!!errors.fullName}
          {...register("fullName")}
          className={fieldClass}
        />
        {errors.fullName && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-phone`}>Phone Number *</Label>
        <Input
          id={`${idPrefix}-phone`}
          type="tel"
          autoComplete="tel"
          placeholder="Your contact number"
          aria-invalid={!!errors.phone}
          {...register("phone")}
          className={fieldClass}
        />
        {errors.phone && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-email`}>Email *</Label>
        <Input
          id={`${idPrefix}-email`}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          {...register("email")}
          className={fieldClass}
        />
        {errors.email && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor={`${idPrefix}-product`}>Product / Requirement *</Label>
        <select
          id={`${idPrefix}-product`}
          aria-invalid={!!errors.product}
          {...register("product")}
          className={`${fieldClass} flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {PRODUCT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.product && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.product.message}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor={`${idPrefix}-quantity`}>Quantity / Requirement</Label>
        <Input
          id={`${idPrefix}-quantity`}
          type="text"
          placeholder="e.g. approx. quantity, pipe size, application"
          {...register("quantity")}
          className={fieldClass}
        />
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor={`${idPrefix}-message`}>Message *</Label>
        <Textarea
          id={`${idPrefix}-message`}
          rows={4}
          placeholder="Tell us about your requirement…"
          aria-invalid={!!errors.message}
          {...register("message")}
          className={fieldClass}
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting} className="gap-2 px-8">
          {isSubmitting ? (
            <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="h-4 w-4" />
          )}
          {isSubmitting ? "Sending…" : submitLabel}
        </Button>
        <p className="text-xs text-muted-foreground">
          Prefer instant chat?{" "}
          <a
            href={waLink("Hello Ganesh Enterprises, I have a requirement for pipes and fittings.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-ppr underline underline-offset-2 hover:text-ppr-dark"
          >
            Message us on WhatsApp
          </a>
        </p>
      </div>

      {submitError && (
        <p role="alert" className="text-sm font-medium text-destructive sm:col-span-2">
          {submitError}
        </p>
      )}
    </form>
  );
}
