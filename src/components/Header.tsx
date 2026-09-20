import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import { COMPANY, CONTACT } from "@/config/site";
import { PRODUCTS } from "@/data/products";

interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string; accent: string }[];
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  {
    label: "Products",
    to: "/products",
    children: PRODUCTS.map((p) => ({ label: p.name, to: `/products/${p.slug}`, accent: p.accent })),
  },
  { label: "Customer Support", to: "/support" },
  { label: "Profile", to: "/profile" },
  { label: "Contact Us", to: "/contact" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative flex h-full items-center border-b-2 px-1 py-4 text-[0.95rem] font-medium transition-colors ${
    isActive
      ? "border-brand text-brand"
      : "border-transparent text-navy-800 hover:border-steel-300 hover:text-brand"
  }`;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  // Close any open menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menus with Escape key.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const productsActive = location.pathname.startsWith("/products");

  return (
    <header className="sticky top-0 z-50">
      
      {/* Delivery notice */}
      <div className="border-b border-red-200 bg-red-50">
        <div className="container flex min-h-9 items-center justify-center py-2">
          <p className="text-center text-xs font-bold tracking-wide text-red-600 sm:text-sm">
            We deliver materials all over India.
          </p>
        </div>
      </div>

      {/* Top utility bar */}
      <div className="hidden bg-navy-900 text-steel-300 md:block">
        <div className="container flex min-h-9 items-center justify-between gap-4 text-xs">
          <p className="tracking-[0.18em]">{COMPANY.tagline}</p>

          <div className="flex items-center gap-4">
            <a
              href={CONTACT.phoneHref}
              className="transition-colors hover:text-white"
            >
              Phone: {CONTACT.phoneDisplay}
            </a>

            <span className="text-steel-600" aria-hidden="true">
              |
            </span>

            <a
              href={CONTACT.alternatePhoneHref}
              className="transition-colors hover:text-white"
            >
              {CONTACT.alternatePhoneDisplay}
            </a>

            <span className="text-steel-600" aria-hidden="true">
              |
            </span>

            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              Instagram: {CONTACT.instagramDisplay}
            </a>

            <span className="text-steel-600" aria-hidden="true">
              |
            </span>

            <span>Email: {CONTACT.emailDisplay}</span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-steel-200 bg-white/95 shadow-[0_1px_3px_rgba(10,30,54,0.06)] backdrop-blur supports-[backdrop-filter]:bg-white/85">
        <div className="container flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
          {/* Brand */}
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${COMPANY.name} — Home`}>
            <img
              src={COMPANY.logo}
              alt={`${COMPANY.name} official logo`}
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-md shadow-sm"
            />
            <span className="flex min-w-0 flex-col leading-none">
              <span className="font-display text-xl font-bold uppercase tracking-wide text-navy-900 lg:text-2xl">
                Ganesh
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.34em] text-brand lg:text-xs">
                Enterprises
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main navigation" className="hidden items-stretch self-stretch lg:flex">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative flex items-stretch"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <RouterNavLink to={item.to} className={navLinkClass} end={!item.children}>
                    {item.label}
                  </RouterNavLink>
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-haspopup="true"
                    aria-label={`Toggle ${item.label} menu`}
                    onClick={() => setMegaOpen((v) => !v)}
                    className="flex items-center px-1 text-navy-800 transition-colors hover:text-brand"
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Mega menu */}
                  {megaOpen && (
                    <div className="absolute left-1/2 top-full z-50 w-[42rem] max-w-[90vw] -translate-x-1/2 pt-1">
                      <div className="animate-fade-up overflow-hidden rounded-md border border-steel-200 bg-white shadow-card-lg">
                        <div className="grid grid-cols-2 gap-1 p-3">
                          {item.children.map((child) => {
                            const product = PRODUCTS.find((p) => `/products/${p.slug}` === child.to);
                            return (
                              <Link
                                key={child.to}
                                to={child.to}
                                className="group flex items-center gap-3 rounded-md p-2.5 transition-colors hover:bg-steel-50"
                              >
                                <img
                                  src={product?.image}
                                  alt=""
                                  width={56}
                                  height={56}
                                  loading="lazy"
                                  className="h-14 w-14 shrink-0 rounded border border-steel-200 object-cover"
                                />
                                <span className="min-w-0">
                                  <span className="flex items-center gap-2 text-sm font-semibold text-navy-900 group-hover:text-brand">
                                    <span
                                      aria-hidden="true"
                                      className="h-2 w-2 shrink-0 rounded-full"
                                      style={{ backgroundColor: child.accent }}
                                    />
                                    {child.label}
                                  </span>
                                  <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted-foreground">
                                    {product?.short}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                          <Link
                            to="/products"
                            className="flex items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-800"
                          >
                            View All Products
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <RouterNavLink key={item.label} to={item.to} className={navLinkClass} end>
                  {item.label}
                </RouterNavLink>
              ),
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-steel-200 text-navy-900 transition-colors hover:bg-steel-50 lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            className="absolute right-0 top-0 flex h-full w-80 max-w-[86vw] flex-col overflow-y-auto bg-white shadow-card-lg"
          >
            <div className="flex items-center justify-between border-b border-steel-200 px-4 py-4">
              <img
                src={COMPANY.logo}
                alt={`${COMPANY.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded"
              />
              <span className="font-display text-lg font-bold uppercase tracking-wide text-navy-900">
                Menu
              </span>
              <button
                type="button"
                autoFocus
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-steel-200 text-navy-900"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <ul className="flex flex-col p-2">
              {NAV_ITEMS.map((item) =>
                item.children ? (
                  <li key={item.label} className="border-b border-steel-100 last:border-0">
                    <div className="flex items-center justify-between">
                      <RouterNavLink
                        to={item.to}
                        className={`flex-1 px-3 py-3.5 text-base font-medium ${
                          productsActive ? "text-brand" : "text-navy-900"
                        }`}
                      >
                        {item.label}
                      </RouterNavLink>
                      <button
                        type="button"
                        aria-expanded={mobileProductsOpen}
                        aria-label={`Toggle ${item.label} categories`}
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className="mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-800 hover:bg-steel-50"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`h-5 w-5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {mobileProductsOpen && (
                      <ul className="mb-2 ml-3 border-l-2 border-steel-200 pl-1">
                        <li>
                          <Link
                            to="/products"
                            className="block rounded px-3 py-2.5 text-sm font-semibold text-brand hover:bg-steel-50"
                          >
                            All Products
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.to}>
                            <Link
                              to={child.to}
                              className="flex items-center gap-2.5 rounded px-3 py-2.5 text-sm text-navy-800 hover:bg-steel-50"
                            >
                              <span
                                aria-hidden="true"
                                className="h-2 w-2 shrink-0 rounded-full"
                                style={{ backgroundColor: child.accent }}
                              />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={item.label} className="border-b border-steel-100 last:border-0">
                    <RouterNavLink
                      to={item.to}
                      end
                      className={({ isActive }) =>
                        `block px-3 py-3.5 text-base font-medium ${
                          isActive ? "text-brand" : "text-navy-900"
                        }`
                      }
                    >
                      {item.label}
                    </RouterNavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
