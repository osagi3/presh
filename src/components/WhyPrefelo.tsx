import { whyPrefelo } from "@/data/content";
import { Section } from "./Section";

export function WhyPrefelo() {
  return (
    <Section eyebrow={whyPrefelo.eyebrow} title={whyPrefelo.title}>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyPrefelo.items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <div>
                <h3 className="mb-2 font-display text-lg font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </Section>
  );
}
