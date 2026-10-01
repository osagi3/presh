import { promise } from "@/data/content";
import { Section } from "./Section";

export function Promise() {
  return (
    <Section eyebrow={promise.eyebrow} title={promise.title} subtitle={promise.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promise.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border-subtle p-6 transition-colors hover:border-primary/30"
            >
              <h3 className="mb-2 font-display text-lg font-medium text-primary">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-8 text-center md:p-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {promise.closing.title}
          </p>
          {promise.closing.lines.map((line) => (
            <p
              key={line}
              className="font-display text-2xl font-medium text-foreground md:text-3xl"
            >
              {line}
            </p>
          ))}
      </div>
    </Section>
  );
}
