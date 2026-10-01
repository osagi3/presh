import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary-hover hover:shadow-[0_0_24px_var(--primary-muted)]",
    outline:
      "border border-border bg-transparent text-foreground hover:border-primary hover:text-primary",
  };

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {variant === "primary" && (
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      )}
    </a>
  );
}
