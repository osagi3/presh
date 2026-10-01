import { services } from "@/data/content";
import { Section } from "./Section";

export function Services() {
  return (
    <Section
      id="services"
      eyebrow={services.eyebrow}
      title={services.title}
      dark
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-surface-elevated p-7 transition-all duration-300 hover:border-primary/40 hover:bg-primary-muted/30"
            >
              <div className="mb-4 h-px w-8 bg-primary transition-all duration-300 group-hover:w-12" />
              <h3 className="mb-3 font-display text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
            </article>
          ))}
      </div>
    </Section>
  );
}
