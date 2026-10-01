import { about } from "@/data/content";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-border bg-surface p-8 md:p-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {about.philosophy.title}
            </p>
            <blockquote className="font-display text-3xl font-medium leading-snug text-foreground md:text-4xl">
              &ldquo;{about.philosophy.quote}&rdquo;
            </blockquote>
            <p className="mt-4 text-lg text-muted">{about.philosophy.subtitle}</p>
          </div>
      </div>
    </Section>
  );
}
