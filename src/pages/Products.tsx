import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Seo } from "@/components/Seo";
import { PageHeader } from "@/components/PageHeader";
import { ProductCard } from "@/components/ProductCard";
import { QuoteCta } from "@/components/CtaBand";
import { PRODUCTS } from "@/data/products";

export default function Products() {
  return (
    <>
      <Seo
        title="Products — PPR, HDPE, MDPE & GI Pipes & Fittings | Ganesh Enterprises"
        description="Explore the Ganesh Enterprises product range: PPR pipes, HDPE pipes, MDPE pipes, GI pipes and pipe fittings for every pipeline and plumbing requirement."
      />

      <PageHeader
        title="Our Products"
        description="Five core categories covering every stage of your pipeline — pipes for water, gas and plumbing lines, and the fittings that complete them."
        crumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />

      <section aria-labelledby="products-heading" className="bg-white py-16 lg:py-20">
        <div className="container">
          <h2 id="products-heading" className="sr-only">
            Product categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} ctaLabel="View Details" />
            ))}
            <div className="flex h-full flex-col items-start justify-center rounded-lg border border-navy-800 bg-navy-900 p-6 shadow-card">
              <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Need Something Specific?
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-300">
                Product specifications, sizes and availability are shared on request. Tell us what
                your project needs.
              </p>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Request Information
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <QuoteCta />
    </>
  );
}
