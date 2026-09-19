interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Use light text when the section sits on a dark navy background. */
  onDark?: boolean;
}

/** Consistent section heading block used across pages. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && (
        <span className={`eyebrow ${onDark ? "text-steel-300" : "text-brand"}`}>
          <span aria-hidden="true" className={`h-px w-8 ${onDark ? "bg-steel-500" : "bg-brand/50"}`} />
          {eyebrow}
          <span aria-hidden="true" className={`h-px w-8 ${onDark ? "bg-steel-500" : "bg-brand/50"}`} />
        </span>
      )}
      <h2 className={`heading-display text-3xl sm:text-4xl lg:text-[2.75rem] ${onDark ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base leading-relaxed sm:text-lg ${onDark ? "text-steel-300" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
