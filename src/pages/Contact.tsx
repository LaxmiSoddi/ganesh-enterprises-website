import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { InquiryForm } from "@/components/InquiryForm";
import { SupportCta } from "@/components/CtaBand.tsx";
import { CONTACT, waLink } from "@/config/site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Ganesh Enterprises"
        description="Contact Ganesh Enterprises for PPR, HDPE, MDPE and GI pipes and pipe fittings — send an inquiry, call or WhatsApp our team."
      />

      <PageHeader
        title="Contact Us"
        description="Send your requirement, request a quote or simply say hello — we're here to help."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />

      {/* Contact details */}
      <section aria-labelledby="contact-details-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Contact Details"
            description="Reach us through any of the channels below. Placeholders are shown until real details are configured."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* ✏️ TODO: All values below come from src/config/site.ts — replace placeholders there. */}
            <a
              href={CONTACT.phoneHref}
              className="group rounded-lg border border-steel-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white transition-colors group-hover:bg-brand">
                <Phone aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-navy-900">Phone</h3>
              <p className="mt-1 text-sm text-muted-foreground">{CONTACT.phoneDisplay}</p>
            </a>
            <a
              href={waLink("Hello Ganesh Enterprises, I have an inquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-lg border border-steel-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-ppr text-white transition-colors group-hover:bg-ppr-dark">
                <MessageCircle aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-navy-900">WhatsApp</h3>
              <p className="mt-1 text-sm text-muted-foreground">{CONTACT.whatsappDisplay}</p>
            </a>
            <a
              href={CONTACT.emailHref}
              className="group rounded-lg border border-steel-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white transition-colors group-hover:bg-brand">
                <Mail aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-navy-900">Email</h3>
              <p className="mt-1 text-sm text-muted-foreground">{CONTACT.emailDisplay}</p>
            </a>
            <div className="rounded-lg border border-steel-200 bg-white p-6 shadow-card">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white">
                <Clock aria-hidden="true" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-navy-900">
                Business Hours
              </h3>
              <ul className="mt-1 space-y-0.5 text-sm text-muted-foreground">
                {CONTACT.businessHours.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Address strip */}
          <div className="mt-6 flex items-start gap-4 rounded-lg border border-steel-200 bg-steel-50 p-6">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-900 text-white">
              <MapPin aria-hidden="true" className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                Business Address
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{CONTACT.address}</p>
              {/* ✏️ TODO: Replace the address placeholder in src/config/site.ts */}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section aria-labelledby="contact-form-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="eyebrow text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand/50" />
              Request a Quote
            </span>
            <h2 id="contact-form-heading" className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
              Send Us Your Requirement
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Fill in the form with your details and requirement. Our team will get back to you
              with availability, pricing and product guidance.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-800">
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                All fields marked * are required
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                Product specifications shared on request
              </li>
              <li className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                Bulk and project inquiries welcome
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-steel-200 bg-white p-6 shadow-card sm:p-8">
            <InquiryForm idPrefix="contact" submitLabel="Send Inquiry" />
          </div>
        </div>
      </section>

      {/* Google Maps placeholder */}
      <section aria-labelledby="map-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading eyebrow="Find Us" title="Our Location" />
          {/* ✏️ TODO: Replace this placeholder with a real Google Maps embed:
              <iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL" … /> */}
          <div className="mt-8 flex min-h-[20rem] flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-steel-300 bg-steel-50 p-10 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-navy-900 text-white">
              <MapPin aria-hidden="true" className="h-8 w-8" />
            </span>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124363.98127284096!2d77.7096994390625!3d13.075441000000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0548799cef13%3A0x66931b5835aa9471!2sGANESH%20ENTERPRISES%20JJM%20SHOP!5e0!3m2!1sen!2sin!4v1789815551603!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ganesh Enterprises JJM Shop Location"
              />
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              The map will show the business location once the address is added. Current address on
              file: <span className="font-medium text-navy-900">{CONTACT.address}</span>
            </p>
          </div>
        </div>
      </section>

      <SupportCta
        title="REACH US DIRECTLY"
        description="Skip the form — call or message us on WhatsApp for the fastest response."
      />
    </>
  );
}
