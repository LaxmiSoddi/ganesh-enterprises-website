import { Building2, Eye, Target, Users } from "lucide-react";

import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteCta } from "@/components/CtaBand.tsx";
import { Link } from "react-router-dom";
import { COMPANY, CONTACT } from "@/config/site";
import { PRODUCTS } from "@/data/products";


const BUSINESS_INFO: { label: string; value: string }[] = [
  { label: "Company Name", value: COMPANY.name },
  { label: "Business", value: "Pipeline & plumbing products supplier" },
  { label: "Product Categories", value: "PPR Pipes • HDPE Pipes • MDPE Pipes • GI Pipes • Pipe Fittings" },
  { label: "Business Address", value: CONTACT.address },
  { label: "Phone", value: CONTACT.phoneDisplay },
  { label: "Email", value: CONTACT.emailDisplay },
  { label: "Business Hours", value: CONTACT.businessHours.join(" / ") },
  { label: "Proprietor / Founder", value: "Prasanna Soddi" },
  { label: "GSTIN", value: "29AANPI0127M2ZG" },
];

const CORE_VALUES = [
  {
    icon: Building2,
    title: "Reliability",
    text: "Consistent supply and dependable service for every requirement, big or small.",
  },
  {
    icon: Users,
    title: "Customer Commitment",
    text: "Our customers' requirements come first — in product advice, pricing and support.",
  },
  {
    icon: Target,
    title: "Quality Attention",
    text: "Care in the products we stock and the guidance we give for every application.",
  },
  {
    icon: Eye,
    title: "Transparency",
    text: "Clear information, fair dealings and honest communication at every step.",
  },
];

export default function Profile() {
  return (
    <>
      <Seo
        title="Company Profile | Ganesh Enterprises"
        description="Company profile of Ganesh Enterprises — overview, business information, product categories, mission, vision and core values."
      />

      <PageHeader
        title="Company Profile"
        description="An overview of Ganesh Enterprises — what we do, what we supply and what we stand for."
        crumbs={[{ label: "Home", to: "/" }, { label: "Profile" }]}
      />

      {/* Company overview */}
      <section aria-labelledby="overview-heading" className="bg-white py-16 lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <span className="eyebrow text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand/50" />
              Company Overview
            </span>
            <h2 id="overview-heading" className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
              {COMPANY.name}
            </h2>
            {/* ✏️ [ADD COMPANY DESCRIPTION] — editable placeholder overview. */}
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ganesh Enterprises is engaged in the supply of pipeline and plumbing products,
              catering to residential, commercial and infrastructure requirements. The company's
              product portfolio spans PPR, HDPE, MDPE and GI pipes together with a complete range
              of pipe fittings.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              With a customer-focused approach, the company aims to be a dependable partner for
              contractors, builders, plumbers and institutions — supporting each requirement with
              the right products and responsive service.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={COMPANY.logoLarge}
              alt="Official Ganesh Enterprises logo"
              width={380}
              height={380}
              loading="lazy"
              className="w-56 rounded-xl shadow-card-lg sm:w-72"
            />
          </div>
        </div>
      </section>

      {/* Business information */}
      <section aria-labelledby="business-info-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container max-w-4xl">
          <SectionHeading
            eyebrow="Business Information"
            title="Company Details"
            align="left"
          />
          {/* ✏️ TODO: Update placeholders in src/config/site.ts */}
          <dl className="mt-8 overflow-hidden rounded-lg border border-steel-200 bg-white shadow-card">
            {BUSINESS_INFO.map((row, index) => (
              <div
                key={row.label}
                className={`grid gap-1 px-6 py-4 sm:grid-cols-[14rem_1fr] sm:gap-4 ${
                  index % 2 === 1 ? "bg-steel-50" : ""
                }`}
              >
                <dt className="text-sm font-semibold uppercase tracking-wider text-navy-900">
                  {row.label}
                </dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Product categories */}
      <section aria-labelledby="profile-products-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Product Categories"
            title="What We Supply"
            description="Five core categories covering every stage of the pipeline."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="group rounded-lg border border-steel-200 bg-white p-5 text-center shadow-card transition-shadow hover:shadow-card-lg"
              >
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="mx-auto h-24 w-24 rounded-md border border-steel-200 object-cover"
                />
                <h3 className="mt-3 text-sm font-semibold text-navy-900 group-hover:text-brand">
                  {product.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-labelledby="profile-mission-heading" className="bg-navy-900 py-16 lg:py-20">
        <div className="container">
          <SectionHeading eyebrow="Mission & Vision" title="Our Direction" onDark />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-navy-700 bg-navy-800 p-8">
              <Target aria-hidden="true" className="h-8 w-8 text-brand" />
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Mission
              </h3>
              {/* ✏️ Editable placeholder — replace with the real mission statement. */}
              <p className="mt-3 text-sm leading-relaxed text-steel-300">
                To be a dependable supplier of quality pipes and plumbing products — delivering the
                right products, at fair prices, with service our customers can count on.
              </p>
            </div>
            <div className="rounded-lg border border-navy-700 bg-navy-800 p-8">
              <Eye aria-hidden="true" className="h-8 w-8 text-ppr" />
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Vision
              </h3>
              {/* ✏️ Editable placeholder — replace with the real vision statement. */}
              <p className="mt-3 text-sm leading-relaxed text-steel-300">
                To grow as a trusted name in pipeline and plumbing solutions — supporting homes,
                businesses and infrastructure with products built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section aria-labelledby="profile-values-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container">
          <SectionHeading eyebrow="Core Values" title="What We Stand For" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-lg border border-steel-200 bg-white p-6 shadow-card"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta
        title="WORK WITH GANESH ENTERPRISES"
        description="Send us your requirement and experience service built on reliability and clear communication."
      />
    </>
  );
}
