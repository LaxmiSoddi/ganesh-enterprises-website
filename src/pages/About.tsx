import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Handshake, ShieldCheck, Sparkles, Target, Eye, Users } from "lucide-react";

import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { QuoteCta } from "@/components/CtaBand";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/config/site";
import { PRODUCTS } from "@/data/products";

const WHAT_WE_OFFER = [
  "PPR pipes and fittings for modern plumbing systems",
  "HDPE pipes for water supply and irrigation lines",
  "MDPE pipes for gas and water distribution",
  "GI pipes and fittings for rigid plumbing and structural lines",
  "A complete fittings range to finish every pipeline",
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality Focus",
    text: "We pay attention to product quality and suitability for every application we supply for.",
  },
  {
    icon: Handshake,
    title: "Honest Guidance",
    text: "Clear, straightforward advice so you get the right product — not the most expensive one.",
  },
  {
    icon: Users,
    title: "Customer First",
    text: "Every requirement, big or small, gets the same professional attention and support.",
  },
  {
    icon: Sparkles,
    title: "Continuous Improvement",
    text: "We keep expanding our product range and service quality to serve customers better.",
  },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Ganesh Enterprises"
        description="Learn about Ganesh Enterprises — a supplier of PPR, HDPE, MDPE and GI pipes and pipe fittings for residential, commercial and infrastructure requirements."
      />

      <PageHeader
        title="About Us"
        description="Who we are and what we stand for at Ganesh Enterprises."
        crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      {/* Introduction */}
      <section aria-labelledby="about-intro-heading" className="bg-white py-16 lg:py-20">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand/50" />
              Our Company
            </span>
            <h2 id="about-intro-heading" className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
              Ganesh Enterprises — Pipes, Fittings &amp; Plumbing Solutions
            </h2>
            {/* ✏️ [ADD COMPANY DESCRIPTION] — replace with your real company story in src/config/site.ts */}
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ganesh Enterprises is a supplier of pipeline and plumbing products, serving the needs
              of residential, commercial and infrastructure projects. Our product range covers PPR,
              HDPE, MDPE and GI pipes along with a wide range of pipe fittings.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We believe in doing simple things well — genuine products, fair guidance, and support
              that doesn't end at the invoice. That is how we aim to be the supplier our customers
              come back to.
            </p>
            <Button asChild size="lg" className="mt-8 gap-2 px-8">
              <Link to="/products">
                Explore Our Products
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={COMPANY.logoLarge}
                alt="Official Ganesh Enterprises logo — pipes, fittings and plumbing solutions"
                width={420}
                height={420}
                loading="lazy"
                className="w-64 rounded-xl shadow-card-lg sm:w-80 lg:w-96"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl border-2 border-brand/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section aria-labelledby="offer-heading" className="bg-steel-50 py-16 lg:py-20">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow text-brand">
              <span aria-hidden="true" className="h-px w-8 bg-brand/50" />
              What We Offer
            </span>
            <h2 id="offer-heading" className="heading-display mt-4 text-3xl text-navy-900 sm:text-4xl">
              A Complete Range Under One Roof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From plastic plumbing systems to galvanized steel lines, our range is built to cover
              every stage of a pipeline — the pipes, the fittings and the guidance in between.
            </p>
          </div>
          <ul className="space-y-3">
            {WHAT_WE_OFFER.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-md border border-steel-200 bg-white p-4 text-sm font-medium text-navy-800 shadow-card"
              >
                <BadgeCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ppr" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission & Vision */}
      <section aria-labelledby="mission-heading" className="bg-navy-900 py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Mission & Vision"
            title="What Drives Us"
            onDark
          />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-navy-700 bg-navy-800 p-8">
              <Target aria-hidden="true" className="h-8 w-8 text-brand" />
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Our Mission
              </h3>
              {/* ✏️ Editable placeholder copy — replace with your real mission statement. */}
              <p className="mt-3 text-sm leading-relaxed text-steel-300">
                <b>Jal Jeevan Mission</b>
                To support water-supply infrastructure by supplying quality pipes,
                fittings, valves, water meters and related plumbing products for
                residential, commercial and rural water-supply projects. We are
                committed to providing dependable products for projects including
                Jal Jeevan Mission initiatives, helping support reliable water
                connections and distribution systems.
              </p>
            </div>
            <div className="rounded-lg border border-navy-700 bg-navy-800 p-8">
              <Eye aria-hidden="true" className="h-8 w-8 text-ppr" />
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Our Vision
              </h3>
              {/* ✏️ Editable placeholder copy — replace with your real vision statement. */}
              <p className="mt-3 text-sm leading-relaxed text-steel-300">
                To grow as a trusted name in pipeline and plumbing solutions — supporting homes,
                businesses and infrastructure with products built to last.
              </p>
            </div>
          </div>


          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">

                <div className="text-sm font-semibold tracking-[0.25em] text-blue-600 mb-4">
                  JAL JEEVAN MISSION
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Supporting Water-Supply Projects
                </h2>

                <p className="text-lg leading-8 text-slate-600">
                  Ganesh Enterprises supplies pipes, fittings, valves, water meters
                  and other plumbing products for Jal Jeevan Mission projects and
                  other water-supply requirements.
                </p>

                <p className="text-lg leading-8 text-slate-600 mt-4">
                  Our product range supports pipeline installation, water
                  distribution, metering and flow-control requirements across
                  rural and other water-supply infrastructure projects. We focus
                  on dependable product supply to support contractors, project
                  requirements and communities working towards reliable water
                  connections.
                </p>

              </div>
            </div>
          </section>
        </div>
      </section>

      

      {/* Core values */}
      <section aria-labelledby="values-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            eyebrow="Core Values"
            title="The Principles We Work By"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-lg border border-steel-200 bg-white p-6 text-center shadow-card"
              >
                <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product categories strip */}
      <section aria-labelledby="about-products-heading" className="bg-steel-50 py-14">
        <div className="container">
          <h2 id="about-products-heading" className="sr-only">
            Our product categories
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                to={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-steel-200 bg-white px-5 py-2 text-sm font-semibold text-navy-800 shadow-sm transition-colors hover:border-brand hover:text-brand"
              >
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: product.accent }}
                />
                {product.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta
        title="LET'S DISCUSS YOUR REQUIREMENT"
        description="Whether it's a single repair or a full project supply, our team is ready to help."
      />
    </>
  );
}
