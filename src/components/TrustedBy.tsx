import { trustedBy } from "@/data/content";
import { Section } from "./Section";

export function TrustedBy() {
  return (
    <Section eyebrow={trustedBy.eyebrow} title={trustedBy.title} dark>
      <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex flex-col items-center rounded-2xl border border-border bg-surface-elevated px-12 py-10">
            <span className="font-display text-6xl font-medium text-primary md:text-7xl">
              {trustedBy.stat}
            </span>
            <span className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-muted">
              {trustedBy.statLabel}
            </span>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {trustedBy.description}
          </p>
      </div>
    </Section>
  );
}
