import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Ganesh Enterprises" />
      <section className="relative overflow-hidden bg-navy-900">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-brand" />
          <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-ppr" />
        </div>
        <div className="container relative flex min-h-[60vh] flex-col items-center justify-center gap-6 py-20 text-center">
          <p className="font-display text-8xl font-bold uppercase text-brand">404</p>
          <h1 className="heading-display text-3xl text-white sm:text-4xl">Page Not Found</h1>
          <p className="max-w-md text-base leading-relaxed text-steel-300">
            The page you're looking for doesn't exist or may have moved. Let's get you back on
            track.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link to="/">
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-steel-400 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/products" className="gap-2">
                Browse Products
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
