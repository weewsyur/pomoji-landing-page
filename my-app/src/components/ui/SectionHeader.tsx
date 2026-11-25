import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

export function SectionHeader({
  eyebrow,
  title,
  children,
  align = "center",
  id,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  id?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-700">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]"
      >
        {title}
      </h2>
      {children && <p className="mt-4 text-lg leading-relaxed text-muted text-pretty">{children}</p>}
    </div>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}
