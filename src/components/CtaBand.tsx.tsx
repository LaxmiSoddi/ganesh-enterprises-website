import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

import { CONTACT, waLink } from "@/config/site";
import { Button } from "@/components/ui/button";

interface SupportCtaProps {
  title?: string;
  description?: string;
}

/** Call / WhatsApp / Contact Support action band (placeholders until real details are set). */
export function SupportCta({
  title = "NEED HELP WITH YOUR REQUIREMENT?",
  description = "Get in touch with our team for product availability, pricing and quick assistance with your pipeline or plumbing requirement.",
}: SupportCtaProps) {
  return (
    <section aria-labelledby="support-cta-heading" className="bg-navy-900">
      <div className="container flex flex-col items-center gap-8 py-14 text-center lg:py-16">
        <div className="max-w-2xl">
          <h2 id="support-cta-heading" className="heading-display text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-steel-300">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* ✏️ TODO: Phone placeholder — connect real number in src/config/site.ts */}
          <Button asChild size="lg" className="gap-2">
            <a href={CONTACT.phoneHref}>
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call Us — {CONTACT.phoneDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="gap-2 bg-ppr text-white hover:bg-ppr-dark"
          >
            <a href={waLink("Hello Ganesh Enterprises, I need assistance with a requirement.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              WhatsApp Us — {CONTACT.whatsappDisplay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-steel-400 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/support" className="gap-2">
              Contact Support
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

interface QuoteCtaProps {
  title?: string;
  description?: string;
}

/** Full-width "Get a quote" call-to-action band. */
export function QuoteCta({
  title = "NEED PIPES OR PLUMBING PRODUCTS?",
  description = "Tell us what you need and our team can help you with your requirement — product information, availability and pricing.",
}: QuoteCtaProps) {
  return (
    <section aria-labelledby="quote-cta-heading" className="relative overflow-hidden bg-navy-800">
      {/* Subtle diagonal accent lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute -right-24 top-0 h-full w-1/3 -skew-x-12 bg-white" />
        <div className="absolute right-24 top-0 h-full w-1/12 -skew-x-12 bg-white" />
      </div>
      <div className="container relative flex flex-col items-center gap-8 py-14 text-center lg:py-16">
        <div className="max-w-2xl">
          <h2 id="quote-cta-heading" className="heading-display text-3xl text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-steel-300">{description}</p>
        </div>
        <Button
          asChild
          size="lg"
          className="gap-2 bg-brand px-10 text-base font-semibold uppercase tracking-wider text-white hover:bg-brand-dark"
        >
          <Link to="/contact">
            Request a Quote
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
