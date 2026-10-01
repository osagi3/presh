import { approach } from "@/data/content";
import { Section } from "./Section";

export function Approach() {
  return (
    <Section
      id="approach"
      eyebrow={approach.eyebrow}
      title={approach.title}
      dark
    >
      <div className="grid gap-0 md:grid-cols-5">
          {approach.steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex flex-col border border-border bg-surface-elevated p-6 md:p-7 ${
                index === 0 ? "md:rounded-l-2xl" : ""
              } ${index === approach.steps.length - 1 ? "md:rounded-r-2xl" : ""}`}
            >
              <span className="mb-3 font-display text-3xl font-light text-primary/60">
                {step.step}
              </span>
              <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
      </div>
    </Section>
  );
}
