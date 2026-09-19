import { Link } from "react-router-dom";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { InquiryForm } from "@/components/InquiryForm";
import { SupportCta } from "@/components/CtaBand";
import { CONTACT, waLink } from "@/config/site";

const FAQS = [
  {
    q: "What products does Ganesh Enterprises supply?",
    a: "We supply PPR pipes, HDPE pipes, MDPE pipes, GI pipes and a complete range of pipe fittings for plumbing and pipeline requirements.",
  },
  {
    q: "Do you share product specifications and sizes?",
    a: "Yes — product specifications, sizes and availability are shared on request. Send us your requirement through the form below or contact us directly.",
  },
  {
    q: "Can I get pricing for my requirement?",
    a: "Share your product, approximate quantity and application with our team and we will respond with pricing and availability.",
  },
  {
    q: "Do you handle bulk or project quantities?",
    a: "Yes — bulk and project requirements for contractors, builders, dealers and institutions are welcome. Contact us with your details.",
  },
  {
    q: "How do I request a quote?",
    a: "Use the assistance form on this page or the Contact Us page, or reach out directly by phone or WhatsApp. Our team will get back to you.",
  },
  {
    q: "Which areas do you serve?",
    a: "Please contact us with your location and requirement, and our team will confirm how we can serve you.",
  },
];

const SUPPORT_CHANNELS = [
  {
    icon: Phone,
    title: "Call Support",
    line1: CONTACT.phoneDisplay,
    line2: "Speak to our team during business hours.",
    href: CONTACT.phoneHref,
    cta: "Call Now",
    external: false,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    line1: CONTACT.whatsappDisplay,
    line2: "Send your requirement for a quick response.",
    href: waLink("Hello Ganesh Enterprises, I need support with a requirement."),
    cta: "Chat on WhatsApp",
    external: true,
  },
  {
    icon: Mail,
    title: "Email Support",
    line1: CONTACT.emailDisplay,
    line2: "Send us the details of your requirement.",
    href: CONTACT.emailHref,
    cta: "Send Email",
    external: false,
  },
];

export default function Support() {
  return (
    <>
      <Seo
        title="Customer Support | Ganesh Enterprises"
        description="Customer support for Ganesh Enterprises — contact our team, browse FAQs, request assistance or send an inquiry for pipes and fittings."
      />

      <PageHeader
        title="Customer Support"
        description="Questions about products, pricing or your requirement? Our team is ready to help."
        crumbs={[{ label: "Home", to: "/" }, { label: "Customer Support" }]}
      />

      {/* Contact support channels */}
      <section aria-labelledby="support-channels-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Contact Support"
            title="Reach Us Directly"
            description="Choose the channel that works best for you. Details below are placeholders until configured."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SUPPORT_CHANNELS.map(({ icon: Icon, title, line1, line2, href, cta, external }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-lg border border-steel-200 bg-white p-8 text-center shadow-card"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-navy-900 text-white">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{line1}</p>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">{line2}</p>
                {/* ✏️ TODO: Placeholders — real details go in src/config/site.ts */}
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mt-5 inline-flex items-center gap-2 rounded-md border border-steel-300 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-brand hover:text-brand"
                >
                  {cta}
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers to the questions we hear most often."
          />
          <Accordion type="single" collapsible className="mt-10 rounded-lg border border-steel-200 bg-white px-6 shadow-card">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.q} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-navy-900 hover:no-underline hover:text-brand">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Request assistance */}
      <section aria-labelledby="assistance-heading" className="bg-white py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="eyebrow text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand/50" />
              Request Assistance
            </span>
            <h2 id="assistance-heading" className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
              Tell Us About Your Requirement
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Not sure which product fits your application? Send us the details and our team will
              help you select the right pipes and fittings.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-800">
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                Product selection guidance
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                Availability and pricing on request
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                Support for bulk requirements
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Looking for something else?{" "}
              <Link to="/contact" className="font-semibold text-brand underline underline-offset-2 hover:text-brand-dark">
                Go to Contact Us
              </Link>
            </p>
          </div>
          <div className="rounded-lg border border-steel-200 bg-steel-50 p-6 shadow-card sm:p-8">
            <InquiryForm idPrefix="support" submitLabel="Request Assistance" />
          </div>
        </div>
      </section>

      <SupportCta
        title="PREFER TO TALK IT THROUGH?"
        description="Call or WhatsApp our team during business hours for quick, direct assistance."
      />
    </>
  );
}
