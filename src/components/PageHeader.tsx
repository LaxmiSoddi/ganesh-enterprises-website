import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";

interface PageHeaderProps {
  title: string;
  description?: string;
  crumbs: Crumb[];
}

/** Navy hero band with breadcrumbs used at the top of inner pages. */
export function PageHeader({ title, description, crumbs }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
      >
        <div className="absolute -left-20 -top-24 h-96 w-96 rounded-full bg-brand" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-ppr" />
      </div>
      <div className="container relative py-10 lg:py-14">
        <Breadcrumbs items={crumbs} onDark />
        <h1 className="heading-display text-4xl text-white sm:text-5xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-300 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
