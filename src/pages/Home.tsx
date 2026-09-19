import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  ClipboardList,
  Clock,
  Headset,
  HeartHandshake,
  Layers,
  Package,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import { Seo } from "@/components/Seo";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { InquiryForm } from "@/components/InquiryForm";
import { QuoteCta, SupportCta } from "@/components/CtaBand.tsx";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/config/site";
import { PRODUCTS } from "@/data/products";

const WHY_CHOOSE_US = [
  {
    icon: BadgeCheck,
    title: "Quality-Focused Products",
    text: "Pipes and fittings sourced with attention to quality and suitability for the application.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Pipeline Solutions",
    text: "Dependable supply for residential, commercial and infrastructure requirements.",
  },
  {
    icon: Layers,
    title: "Wide Product Range",
    text: "PPR, HDPE, MDPE, GI pipes and a complete range of pipe fittings under one roof.",
  },
  {
    icon: HeartHandshake,
    title: "Professional Service",
    text: "Straightforward, professional service from inquiry to delivery.",
  },
  {
    icon: Headset,
    title: "Customer-Focused Approach",
    text: "We listen to your requirement and help you choose the right products.",
  },
  {
    icon: Clock,
    title: "Timely Support",
    text: "Responsive support for product availability, pricing and order queries.",
  },
];

const SERVICES = [
  {
    icon: Package,
    title: "Product Supply",
    text: "Supply of PPR, HDPE, MDPE and GI pipes along with a complete range of pipe fittings.",
  },
  {
    icon: Wrench,
    title: "Pipeline Solutions",
    text: "Guidance for building complete pipeline systems across plumbing and water lines.",
  },
  {
    icon: ClipboardList,
    title: "Plumbing Product Support",
    text: "Help with selecting the right pipes and fittings for your plumbing application.",
  },
  {
    icon: BadgeCheck,
    title: "Product Selection Assistance",
    text: "Our team helps you match products to your project's size, application and budget.",
  },
  {
    icon: Boxes,
    title: "Bulk Requirements",
    text: "Bulk and project quantities handled for contractors, dealers and institutions.",
  },
  {
    icon: Truck,
    title: "Customer Support",
    text: "Responsive support before and after your purchase — call, WhatsApp or visit us.",
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="Ganesh Enterprises | PPR, HDPE, MDPE & GI Pipes"
        description="Ganesh Enterprises — supplier of PPR pipes, HDPE pipes, MDPE pipes, GI pipes and pipe fittings for residential, commercial and infrastructure requirements."
      />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-navy-950">
        <img
          src="/images/hero-industrial.jpg"
          alt="Warehouse stockyard with stacks of PPR, HDPE, MDPE and galvanized steel pipes on industrial racks"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/50"
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-steel-300 to-ppr" />

        <div className="container relative flex min-h-[32rem] flex-col justify-center py-16 lg:min-h-[36rem] lg:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow text-steel-300">
              <span aria-hidden="true" className="h-px w-8 bg-brand" />
              Pipeline &amp; Plumbing Products Supplier
            </p>
            <h1 className="heading-display mt-5 text-5xl text-white sm:text-6xl lg:text-7xl">
              Quality Pipes.
              <span className="block text-steel-300">Reliable Solutions.</span>
            </h1>
            <p className="mt-5 font-display text-xl font-semibold uppercase tracking-[0.2em] text-brand sm:text-2xl">
              PPR • HDPE • MDPE • GI Pipes &amp; Fittings
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-steel-300 sm:text-lg">
              {COMPANY.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-brand px-8 text-base font-semibold uppercase tracking-wider text-white hover:bg-brand-dark"
              >
                <Link to="/products" className="gap-2">
                  Explore Products
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-steel-400 bg-transparent px-8 text-base font-semibold uppercase tracking-wider text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Category quick links */}
            <nav aria-label="Product categories" className="mt-10 flex flex-wrap gap-2">
              {PRODUCTS.map((product) => (
                <Link
                  key={product.slug}
                  to={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-steel-200 backdrop-blur transition-colors hover:border-white/40 hover:text-white"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: product.accent }}
                  />
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES */}
      <section aria-labelledby="categories-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Our Products"
            title="Complete Pipeline & Plumbing Range"
            description="Five core product categories covering every stage of your pipeline — from water supply lines to fittings that complete the job."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
            {/* Ask-the-expert filler card keeps the grid balanced at 6 tiles */}
            <div className="flex h-full flex-col items-start justify-center rounded-lg border border-navy-800 bg-navy-900 p-6 shadow-card">
              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Not Sure What You Need?
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-300">
                Share your requirement and our team will help you select the right pipes and
                fittings for your application.
              </p>
              <Button asChild className="mt-4 gap-2">
                <Link to="/contact">
                  Ask Our Team
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section aria-labelledby="about-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={COMPANY.logoLarge}
                alt="Official Ganesh Enterprises logo — pipes, fittings and plumbing solutions"
                width={380}
                height={380}
                loading="lazy"
                className="w-64 rounded-xl shadow-card-lg sm:w-80"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl border-2 border-brand/30"
              />
            </div>
          </div>
          <div>
            <span className="eyebrow text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand/50" />
              About Ganesh Enterprises
            </span>
            <h2 id="about-heading" className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
              Your Partner For Pipes, Fittings &amp; Plumbing Solutions
            </h2>
            {/* ✏️ [ADD COMPANY DESCRIPTION] — replace this placeholder copy in src/config/site.ts */}
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ganesh Enterprises supplies pipes and plumbing products for residential, commercial
              and infrastructure requirements. Our range covers PPR, HDPE, MDPE and GI pipes along
              with the fittings needed to complete every pipeline.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We focus on dependable products, honest guidance and responsive service — so
              contractors, builders, plumbers and institutions can rely on us for every
              requirement.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {["PPR Pipes & Fittings", "HDPE Pipes", "MDPE Pipes", "GI Pipes & Fittings"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy-800">
                  <BadgeCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-ppr" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 gap-2 px-8">
              <Link to="/about">
                Learn More
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section aria-labelledby="why-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built On Reliability & Service"
            description="What you can expect when you work with Ganesh Enterprises."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-lg border border-steel-200 bg-white p-6 shadow-card transition-shadow hover:shadow-card-lg"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-900 text-white transition-colors group-hover:bg-brand">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section aria-labelledby="services-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Supporting Every Stage Of Your Pipeline"
            description="More than product supply — practical help for planners, contractors and end users."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-lg border border-steel-200 bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRODUCT SHOWCASE */}
      <section aria-labelledby="showcase-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Product Showcase"
            title="Pipes For Every Application"
            description="A look at the product lines we supply — from plastic plumbing systems to galvanized steel."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
            <div className="relative overflow-hidden rounded-lg lg:col-span-2 lg:row-span-2">
              <img
                src="/images/hero-industrial.jpg"
                alt="Industrial racks stocked with PPR, HDPE, MDPE and GI pipes at a pipe supply warehouse"
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
              />
              <p className="absolute bottom-4 left-4 right-4 font-display text-xl font-semibold uppercase tracking-wide text-white lg:text-2xl">
                Well-Stocked. Ready To Supply.
              </p>
            </div>
            <Link to="/products/ppr-pipes" className="group relative overflow-hidden rounded-lg lg:col-span-2">
              <img
                src="/images/product-ppr.jpg"
                alt="Green PPR pipes and fittings — product showcase"
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] lg:h-full"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
                PPR Pipes &amp; Fittings
              </p>
            </Link>
            {[
              { img: "/images/product-hdpe.jpg", alt: "Black HDPE pipe coils — product showcase", label: "HDPE Pipes", to: "/products/hdpe-pipes" },
              { img: "/images/product-gi.jpg", alt: "Galvanized iron GI steel pipes — product showcase", label: "GI Pipes", to: "/products/gi-pipes" },
            ].map((item) => (
              <Link key={item.to} to={item.to} className="group relative overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
                  {item.label}
                </p>
              </Link>
            ))}
            <Link to="/products/pipe-fittings" className="group relative overflow-hidden rounded-lg lg:col-span-2">
              <img
                src="/images/product-fittings.jpg"
                alt="Assorted pipe fittings including elbows, tees and couplers — product showcase"
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-4 font-display text-lg font-semibold uppercase tracking-wide text-white">
                Pipe Fittings For Every Line
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. QUOTE CTA */}
      <QuoteCta />

      {/* 8. SUPPORT CTA */}
      <SupportCta />

      {/* 9. CONTACT / INQUIRY */}
      <section aria-labelledby="home-contact-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="eyebrow text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand/50" />
              Send Inquiry
            </span>
            <h2 id="home-contact-heading" className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
              Tell Us What You Need
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Fill in the form and our team will get back to you with product availability, pricing
              and guidance for your requirement.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-800">
              <li className="flex items-center gap-2.5">
                <BadgeCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-ppr" />
                Quick response to product and pricing queries
              </li>
              <li className="flex items-center gap-2.5">
                <BadgeCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-ppr" />
                Bulk and project requirements welcome
              </li>
              <li className="flex items-center gap-2.5">
                <BadgeCheck aria-hidden="true" className="h-4 w-4 shrink-0 text-ppr" />
                Guidance on selecting the right product
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-steel-200 bg-white p-6 shadow-card sm:p-8">
            <InquiryForm idPrefix="home" />
          </div>
        </div>
      </section>
    </>
  );
}
