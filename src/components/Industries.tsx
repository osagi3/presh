import { industries } from "@/data/content";
import { Section } from "./Section";

export function Industries() {
  return (
    <Section eyebrow={industries.eyebrow} title={industries.title}>
      <p className="-mt-8 mb-10 max-w-2xl text-lg text-muted">{industries.description}</p>

        <div className="flex flex-wrap gap-3">
          {industries.list.map((industry) => (
            <span
              key={industry}
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {industry}
            </span>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-display text-2xl text-foreground md:text-3xl">
            {industries.closing}
          </p>
          <p className="mt-2 text-lg text-primary">{industries.tagline}</p>
      </div>
    </Section>
  );
}
