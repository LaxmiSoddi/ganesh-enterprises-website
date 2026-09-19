import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  /** Pre-selected product name for the contact form quote link. */
  ctaLabel?: string;
}

/** Product category card with image, description and "View Products" CTA. */
export function ProductCard({ product, ctaLabel = "View Products" }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-steel-200 bg-white shadow-card transition-shadow hover:shadow-card-lg">
      <Link
        to={`/products/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-steel-100"
        aria-label={`${product.name} — view details`}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          width={900}
          height={675}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span
          aria-hidden="true"
          className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-navy-900 shadow-sm"
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: product.accent }} />
          Category
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-navy-900">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.short}</p>
        <Link
          to={`/products/${product.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
        >
          {ctaLabel}
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
