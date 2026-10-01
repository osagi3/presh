import { testimonials } from "@/data/content";
import { Section } from "./Section";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-primary" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow={testimonials.eyebrow}
      title={testimonials.title}
      dark
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.items.map((item) => (
          <blockquote
            key={item.author}
            className="flex flex-col rounded-2xl border border-border bg-surface-elevated p-7"
          >
            <Stars count={item.rating} />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
              &ldquo;{item.quote}&rdquo;
            </p>
            <footer className="mt-5 border-t border-border-subtle pt-4">
              <cite className="font-display text-base font-medium not-italic text-foreground">
                — {item.author}
              </cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
