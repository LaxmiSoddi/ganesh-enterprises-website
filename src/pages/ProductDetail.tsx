import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText } from "lucide-react";

import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { QuoteCta } from "@/components/CtaBand.tsx";
import { Button } from "@/components/ui/button";
import { getProductBySlug, PRODUCTS } from "@/data/products";
import { SUPREME_CPVC_PRODUCTS } from "@/data/supremeCpvcProducts";
import { PUC_PRODUCTS } from "@/data/pucProducts";
import { PIPES_PRODUCTS } from "@/data/pipesProducts";
import { DI_PRODUCTS } from "@/data/diProducts";

const HDPE_PRODUCTS = [
  {
    name: "90_63mm HDPE Reducer",
    image: "/images/hdpe-reducer-90-63mm.jpeg",
    description:
      "HDPE reducer fitting for connecting HDPE pipes of different diameters.",
  },
  {
    name: "23mm HDPE Elbow",
    image: "/images/hdpe-elbow-23mm.jpeg",
    description:
      "HDPE elbow fitting used for changing the direction of an HDPE pipeline.",
  },
  {
    name: "23mm HDPE Tee",
    image: "/images/hdpe-tee-23mm.jpeg",
    description:
      "HDPE tee fitting used for creating a branch connection in an HDPE pipeline.",
  },
  {
    name: "23mm HDPE Encap",
    image: "/images/hdpe-encap-23mm.jpeg",
    description:
      "HDPE end cap fitting used for closing the end of an HDPE pipeline.",
  },
  {
    name: "63mm HDPE Pipes",
    image: "/images/product-hdpe.jpg",
    description:
      "63mm HDPE pipes for water-supply and pipeline installation requirements.",
  },
];

const MDPE_PRODUCTS = [
  {
    name: "20mm MDPE Fitting Elbow",
    image: "/images/20mm-mdpe-fitting-elbow.jpeg",
    description:
      "20mm MDPE fitting elbow for connecting MDPE pipes and changing the direction of a pipeline.",
  },
  {
    name: "20mm MDPE FTE Elbow",
    image: "/images/20mm-mdpe-fte-elbow.jpeg",
    description:
      "20mm MDPE FTE elbow fitting for connecting MDPE pipe with a threaded plumbing connection.",
  },
  {
    name: "20mm MDPE FTA",
    image: "/images/20mm-mdpe-fta.jpeg",
    description:
      "20mm MDPE female threaded adaptor for connecting MDPE pipe to compatible threaded components.",
  },
  {
    name: "20mm MDPE Elbow",
    image: "/images/20mm-mdpe-elbow.jpeg",
    description:
      "20mm MDPE elbow fitting for changing the direction of an MDPE pipeline.",
  },
  {
    name: "20mm MDPE Pipe Coupler",
    image: "/images/20mm-mdpe-pipe-coupler.jpeg",
    description:
      "20mm MDPE pipe coupler for connecting sections of MDPE pipeline.",
  },
];

const GI_PRODUCTS = [
  {
    name: "20mm GI Elbow",
    image: "/images/20mm-gi-elbow.jpeg",
    description:
      "20mm GI elbow fitting for changing the direction of a GI pipeline.",
  },
  {
    name: "20mm GI Collar",
    image: "/images/20mm-gi-collar.jpeg",
    description:
      "20mm GI collar fitting for connecting compatible GI pipeline components.",
  },
  {
    name: "20mm GI Endcap",
    image: "/images/20mm-gi-endcap.jpeg",
    description:
      "20mm GI end cap fitting for closing the end of a GI pipeline.",
  },
  {
    name: "20mm GI Pipes",
    image: "/images/20mm-gi-pipes.jpeg",
    description:
      "20mm GI pipes for plumbing, water-supply and pipeline installation requirements.",
  },
];

const PPR_PRODUCTS = [
  {
    name: "20mm PPR Elbow",
    image: "/images/20mmPPRelbow.jpeg",
    description:
      "20mm PPR elbow fitting for changing the direction of PPR water pipelines.",
  },

  {
    name: "20mm PPR Collar",
    image: "/images/20mmPPRcollar.jpeg",
    description:
      "20mm PPR collar fitting for secure connection and installation of PPR pipeline components.",
  },
  {
    name: "20mm PPR Union",
    image: "/images/20mmPPRunion.jpeg",
    description:
      "20mm PPR union fitting for connecting and disconnecting sections of PPR pipelines.",
  },
  {
    name: "20mm PPR FTA",
    image: "/images/20mmPPRfta.jpeg",
    description:
      "20mm PPR female threaded adaptor for connecting PPR pipelines to threaded plumbing components.",
  },
  {
    name: "Water Meter Box",
    image: "/images/WaterMeterBox.jpeg",
    description:
      "Water meter box for housing and protecting water meter installations.",
  },
  {
    name: "15mm Tap Cock",
    image: "/images/15mm-tap-cock.jpeg",
    description:
      "15mm tap cock for controlling water flow in plumbing and water supply installations.",
  },
  {
    name: "Water Meter NBESON",
    image: "/images/water-meter-nbeson.jpeg",
    description:
      "NBESON water meter for measuring water consumption in water supply installations.",
  },
  {
    name: "15mm FCV",
    image: "/images/15mm-fcv.jpeg",
    description:
      "15mm flow control valve for managing water flow in plumbing and water supply systems.",
  },
  {
    name: "20mm PPR Ball Valve",
    image: "/images/20mm-ppr-ball-valve.jpeg",
    description:
      "20mm PPR ball valve for controlling and isolating water flow in PPR pipeline systems.",
  },
  {
    name: "20mm PPR MTA",
    image: "/images/20mmPPRmta.jpeg",
    description:
      "20mm PPR male threaded adaptor with a brass threaded insert for plumbing connections.",
  },
];

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug);

  // Unknown product slug → redirect to the products index.
  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const related = PRODUCTS.filter((p) => p.slug !== product.slug);

  return (
    <>
      <Seo
        title={`${product.name} | Ganesh Enterprises`}
        description={`${product.name} supplied by Ganesh Enterprises. ${product.short}`}
      />

      <PageHeader
        title={product.name}
        crumbs={[{ label: "Home", to: "/" }, { label: "Products", to: "/products" }, { label: product.name }]}
      />

      <section aria-labelledby="product-detail-heading" className="bg-white py-14 lg:py-18">
        <div className="container grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Product visual */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="overflow-hidden rounded-lg border border-steel-200 bg-steel-50 shadow-card">
              <img
                src={product.image}
                alt={product.imageAlt}
                width={900}
                height={900}
                className="aspect-square w-full object-cover"
              />
            </div>
            {/* Specs placeholder card */}
            <div className="mt-5 rounded-lg border border-dashed border-steel-300 bg-steel-50 p-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-navy-900">
                <FileText aria-hidden="true" className="h-4 w-4 text-brand" />
                Sizes &amp; Specifications
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Product specifications available on request.
              </p>
              {/* ✏️ TODO: Add real size ranges here once provided. */}
              <div className="mt-3 flex flex-wrap gap-2" aria-hidden="true">
                {["[ADD SIZE RANGE]", "[ADD SPECIFICATION]"].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-steel-300 bg-white px-3 py-1 text-xs font-medium text-steel-500"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product info */}
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-navy-900 shadow-sm ring-1 ring-steel-200"
            >
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: product.accent }}
              />
              Product Category
            </span>
            <h2
              id="product-detail-heading"
              className="heading-display mt-4 text-4xl text-navy-900 sm:text-5xl"
            >
              {product.name}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {product.description}
            </p>

            <h3 className="mt-8 font-display text-2xl font-semibold uppercase tracking-wide text-navy-900">
              Key Features
            </h3>
            <ul className="mt-4 space-y-2.5">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-navy-800">
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-ppr" />
                  {feature}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-2xl font-semibold uppercase tracking-wide text-navy-900">
              Typical Applications
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {product.applications.map((application) => (
                <li
                  key={application}
                  className="rounded-md border border-steel-200 bg-steel-50 px-4 py-3 text-sm font-medium text-navy-800"
                >
                  {application}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2 px-8">
                <Link to={`/contact?product=${product.slug}`} className="gap-2">
                  Inquiry / Get Best Price
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 px-8">
                <Link to="/products">
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  Back to Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* HDPE additional products */}
      {product.slug === "hdpe-pipes" && (
        <section
          aria-labelledby="hdpe-products-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                HDPE Range
              </span>

              <h2
                id="hdpe-products-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                HDPE Pipes &amp; Fittings
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Explore our range of HDPE pipes and fittings available for
                different pipeline and water-supply requirements.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HDPE_PRODUCTS.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </p>

                    <Link
                      to={`/contact?product=${product.slug}`}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                    >
                      Enquire
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


            {/* MDPE additional products */}
      {product.slug === "mdpe-pipes" && (
        <section
          aria-labelledby="mdpe-products-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                MDPE Range
              </span>

              <h2
                id="mdpe-products-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                MDPE Pipes &amp; Fittings
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Explore our range of MDPE pipes and fittings available for
                different pipeline and water-supply requirements.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MDPE_PRODUCTS.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </p>

                    <Link
                      to={`/contact?product=${product.slug}`}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                    >
                      Enquire
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GI additional products */}
      {product.slug === "gi-pipes" && (
        <section
          aria-labelledby="gi-products-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                GI Range
              </span>

              <h2
                id="gi-products-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                GI Pipes &amp; Fittings
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Explore our range of GI pipes and fittings available for
                different plumbing and pipeline requirements.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {GI_PRODUCTS.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </p>

                    <Link
                      to={`/contact?product=${product.slug}`}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                    >
                      Enquire
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      {/* PPR additional products */}
{product.slug === "ppr-pipes" && (
  <section
    aria-labelledby="ppr-products-heading"
    className="bg-white py-14"
  >
    <div className="container">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
          PPR Range
        </span>

        <h2
          id="ppr-products-heading"
          className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
        >
          PPR Pipes &amp; Fittings
        </h2>

        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Explore our range of PPR fittings, valves and water-supply products
          available for different plumbing requirements.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PPR_PRODUCTS.map((item) => (
          <div
            key={item.name}
            className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
          >
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
              <img
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-navy-900">
                {item.name}
              </h3>

              <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                {item.description}
              </p>

              <Link
                to={`/contact?product=${product.slug}`}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
              >
                Enquire
                <ArrowRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)}


      {/* Supreme CPVC additional products */}
        {product.slug === "supreme-cpvc-pipes" && (
          <section
            aria-labelledby="supreme-cpvc-products-heading"
            className="bg-white py-14"
          >
            <div className="container">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                  Supreme CPVC Range
                </span>

                <h2
                  id="supreme-cpvc-products-heading"
                  className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
                >
                  Supreme CPVC Pipes &amp; Fittings
                </h2>

                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  Explore our range of Supreme CPVC pipes, fittings and water storage
                  products for different plumbing requirements.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {SUPREME_CPVC_PRODUCTS.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-navy-900">
                        {item.name}
                      </h3>

                      <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                        {item.description}
                      </p>

                      <Link
                        to={`/contact?product=${encodeURIComponent(item.name)}`}
                        className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                      >
                        Enquire
                        <ArrowRight
                          aria-hidden="true"
                          className="h-3.5 w-3.5"
                        />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* PUC additional products */}
      {product.slug === "puc-products" && (
        <section
          aria-labelledby="puc-products-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                PUC Range
              </span>

              <h2
                id="puc-products-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                PUC Products
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Explore our range of PUC pipes and fittings for drainage, plumbing
                and general pipeline applications.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PUC_PRODUCTS.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </p>

                    <Link
                      to={`/contact?product=${encodeURIComponent(item.name)}`}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                    >
                      Enquire
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pipes additional products */}
      {product.slug === "pipes" && (
        <section
          aria-labelledby="pipes-products-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                Pipes Range
              </span>

              <h2
                id="pipes-products-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                Pipes
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Explore our range of pipes for underground drainage, water supply
                and column pipe applications.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PIPES_PRODUCTS.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </p>

                    <Link
                      to={`/contact?product=${encodeURIComponent(item.name)}`}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                    >
                      Enquire
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DI additional products */}
      {product.slug === "di" && (
        <section
          aria-labelledby="di-products-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                DI Range
              </span>

              <h2
                id="di-products-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                DI Valves
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Explore our range of DI valves for water supply, pipeline control
                and infrastructure applications.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DI_PRODUCTS.map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md border border-steel-200 bg-steel-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-navy-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 line-clamp-3 text-xs leading-snug text-muted-foreground">
                      {item.description}
                    </p>

                    <Link
                      to={`/contact?product=${encodeURIComponent(item.name)}`}
                      className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
                    >
                      Enquire
                      <ArrowRight
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Electrofusion Welding Machine specifications */}
      {product.slug === "electrofusion-welding-machine" && (
        <section
          aria-labelledby="electrofusion-specifications-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                Technical Specifications
              </span>

              <h2
                id="electrofusion-specifications-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                Electrofusion Welding Machine
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Automatic electrofusion welding machine suitable for controlled
                pipe jointing applications.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-steel-200 bg-steel-50 p-5">
                <h3 className="text-base font-semibold text-navy-900">
                  Technical Specifications
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    <span className="font-semibold text-navy-900">
                      Welding range:
                    </span>{" "}
                    20–200mm
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      Operating modes:
                    </span>{" "}
                    Barcode and manual data entry as standard
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      Input cable:
                    </span>{" "}
                    3.5 metres
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      Output cable:
                    </span>{" "}
                    3.5 metres
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      Joint data memory:
                    </span>{" "}
                    2,000 welds
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-steel-200 bg-white p-5 shadow-card">
                <h3 className="text-base font-semibold text-navy-900">
                  Product Information
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The Electrofusion Welding Machine Automatic 200 EE is designed
                  for electrofusion pipe jointing applications with a welding
                  range of 20–200mm.
                </p>

                <Link
                  to={`/contact?product=${encodeURIComponent(
                    "Electrofusion Welding Machine Automatic 200 EE"
                  )}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                >
                  Enquire about this product
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 20mm PPR Prince Heating Machine specifications */}
      {product.slug === "20mm-ppr-prince-heating-machine" && (
        <section
          aria-labelledby="ppr-heating-machine-heading"
          className="bg-white py-14"
        >
          <div className="container">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                Technical Information
              </span>

              <h2
                id="ppr-heating-machine-heading"
                className="heading-display mt-2 text-3xl text-navy-900 sm:text-4xl"
              >
                20mm PPR Prince Heating Machine
              </h2>

              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                A practical heating machine for socket-fusion jointing of PPR
                pipes and fittings, suitable for plumbing installation work.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Technical Specifications */}
              <div className="rounded-lg border border-steel-200 bg-steel-50 p-5">
                <h3 className="text-base font-semibold text-navy-900">
                  Technical Specifications
                </h3>

                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    <span className="font-semibold text-navy-900">
                      Application:
                    </span>{" "}
                    PPR pipe and fitting socket-fusion jointing
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      PPR system heating temperature:
                    </span>{" "}
                    260°C
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      20mm welding depth:
                    </span>{" "}
                    14.5mm
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      20mm heating time:
                    </span>{" "}
                    6 seconds
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      20mm welding time:
                    </span>{" "}
                    4 seconds
                  </li>

                  <li>
                    <span className="font-semibold text-navy-900">
                      20mm cooling time:
                    </span>{" "}
                    2 minutes
                  </li>
                </ul>
              </div>

              {/* Product Information */}
              <div className="rounded-lg border border-steel-200 bg-white p-5 shadow-card">
                <h3 className="text-base font-semibold text-navy-900">
                  Product Information
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  The 20mm PPR Prince Heating Machine is used for heat-fusion
                  jointing of PPR pipes and fittings. The pipe and fitting are
                  heated using the appropriate dies and then joined while the
                  heated surfaces are ready for fusion.
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  For Prince PPR systems, the recommended thermostat setting is
                  260°C. Correct heating, alignment and cooling are important for
                  producing a reliable fusion joint.
                </p>

                <Link
                  to={`/contact?product=${encodeURIComponent(
                    "20mm PPR Prince Heating Machine"
                  )}`}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
                >
                  Enquire about this product
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      <section aria-labelledby="related-heading" className="bg-steel-50 py-14">
        <div className="container">
          <h2 id="related-heading" className="heading-display text-2xl text-navy-900 sm:text-3xl">
            Explore Other Products
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/products/${item.slug}`}
                className="group flex items-center gap-3 rounded-lg border border-steel-200 bg-white p-4 shadow-card transition-shadow hover:shadow-card-lg"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-md border border-steel-200 object-cover"
                />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-navy-900 group-hover:text-brand">
                    {item.name}
                  </span>
                  <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted-foreground">
                    {item.short}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteCta
        title={`NEED ${product.name.toUpperCase()} FOR YOUR PROJECT?`}
        description="Share your sizes and quantities — our team will respond with availability and pricing."
      />
    </>
  );
}
