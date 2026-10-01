import type { ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-14 md:py-20 ${dark ? "bg-surface" : "bg-background"} ${className}`}
    >
      <Container>
        {(eyebrow || title || subtitle) && (
          <div className="mb-8 md:mb-10">
            {eyebrow && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
