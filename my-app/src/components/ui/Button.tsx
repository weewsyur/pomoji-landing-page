import type { AnchorHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "light" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white shadow-cta hover:bg-brand-700 active:translate-y-px",
  secondary:
    "border-2 border-brand-600 text-brand-700 bg-transparent hover:bg-brand-50",
  light: "bg-white text-brand-700 hover:bg-brand-50 shadow-card",
  ghost: "text-ink hover:bg-black/5",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({ variant = "primary", size = "md", className, ...rest }: Props) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200",
        variants[variant],
        sizes[size],
        className
      )}
      {...rest}
    />
  );
}
