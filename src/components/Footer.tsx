import { Link } from "react-router-dom";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { COMPANY, CONTACT, waLink } from "@/config/site";
import { PRODUCTS } from "@/data/products";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Customer Support", to: "/support" },
  { label: "Profile", to: "/profile" },
  { label: "Contact Us", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-steel-300">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src={COMPANY.logo}
              alt={`${COMPANY.name} official logo`}
              width={56}
              height={56}
              loading="lazy"
              className="h-14 w-14 rounded-md shadow-md"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                Ganesh
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-steel-400">
                Enterprises
              </span>
            </span>
          </Link>
          <p className="mt-4 text-sm font-semibold tracking-[0.14em] text-steel-400">{COMPANY.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed">{COMPANY.description}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Quick links">
          <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <span aria-hidden="true" className="mt-2 block h-0.5 w-10 bg-brand" />
          <ul className="mt-4 space-y-2.5 text-sm">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Product links */}
        <nav aria-label="Product links">
          <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-white">
            Products
          </h3>
          <span aria-hidden="true" className="mt-2 block h-0.5 w-10 bg-brand" />
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCTS.map((product) => (
              <li key={product.slug}>
                <Link to={`/products/${product.slug}`} className="transition-colors hover:text-white">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <span aria-hidden="true" className="mt-2 block h-0.5 w-10 bg-brand" />
          {/* ✏️ TODO: Replace placeholders in src/config/site.ts with real details. */}
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                <span className="sr-only">Phone — </span>
                {CONTACT.phoneDisplay}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MessageCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-ppr" />
              <span>
                <span className="sr-only">WhatsApp — </span>
                {CONTACT.whatsappDisplay}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span aria-hidden="true" className="mt-0.5 w-4 shrink-0 text-center font-semibold text-brand">
                @
              </span>
              <span>
                <span className="sr-only">Email — </span>
                {CONTACT.emailDisplay}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>
                <span className="sr-only">Address — </span>
                {CONTACT.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-700">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-xs text-steel-400 sm:flex-row">
          <p>© 2026 Ganesh Enterprises. All rights reserved.</p>
          <p className="tracking-[0.18em]">PIPES • FITTINGS • PLUMBING SOLUTIONS</p>
        </div>
      </div>

      {/* Keep waLink referenced for future contact-detail wiring — see site.ts TODOs */}
      <span className="hidden">{waLink()}</span>
    </footer>
  );
}
