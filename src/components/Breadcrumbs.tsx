import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  /** Use light styles on dark navy page headers. */
  onDark?: boolean;
}

/** Accessible breadcrumb trail used across inner pages. */
export function Breadcrumbs({ items, onDark = false }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className={
                    onDark
                      ? "text-steel-300 transition-colors hover:text-white"
                      : "text-muted-foreground transition-colors hover:text-brand"
                  }
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={onDark ? "font-medium text-white" : "font-medium text-foreground"}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <ChevronRight
                  aria-hidden="true"
                  className={`h-3.5 w-3.5 ${onDark ? "text-steel-500" : "text-steel-400"}`}
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
