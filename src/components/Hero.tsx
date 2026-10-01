import { hero } from "@/data/content";
import { projectGmailUrl } from "@/lib/gmail-url";
import { Button } from "./Button";
import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--primary-muted),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <Container className="relative py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {hero.headline}
          </p>

          <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            Where Brands
            <br />
            <span className="italic">Become Icons.</span>
          </h1>

          <p className="mt-6 flex flex-wrap gap-x-2 gap-y-1 text-sm text-muted md:text-base">
            {hero.services.map((service, i) => (
              <span key={service}>
                {service}
                {i < hero.services.length - 1 && (
                  <span className="ml-2 text-muted-subtle">•</span>
                )}
              </span>
            ))}
          </p>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {hero.description}
          </p>

          <p className="mt-6 font-display text-xl text-foreground md:text-2xl">
            {hero.pillars.map((pillar, i) => (
              <span key={pillar}>
                {pillar}
                {i < hero.pillars.length - 1 && (
                  <span className="mx-2 text-muted-subtle"> </span>
                )}
              </span>
            ))}
          </p>

          <div className="mt-10">
            <Button href={projectGmailUrl}>{hero.cta}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
