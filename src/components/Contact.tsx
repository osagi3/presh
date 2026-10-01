import { contact, site } from "@/data/content";
import { projectGmailUrl } from "@/lib/gmail-url";
import { Button } from "./Button";
import { MailIcon, PhoneIcon } from "./icons/SocialIcons";
import { Section } from "./Section";

function ContactCard({
  href,
  label,
  value,
  icon: Icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: typeof MailIcon;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-surface-elevated p-5 transition-all duration-200 hover:border-primary hover:shadow-[0_4px_24px_var(--primary-muted)] md:p-6"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-surface text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-medium text-foreground md:text-base">
          {value}
        </p>
      </div>
    </a>
  );
}

export function Contact() {
  return (
    <Section id="contact" eyebrow={contact.eyebrow} title={contact.title}>
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-lg leading-relaxed text-muted">{contact.description}</p>
          <p className="mt-4 font-display text-xl text-foreground">{contact.closing}</p>
          <div className="mt-10">
            <Button href={projectGmailUrl}>{contact.cta}</Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-surface">
          <div className="border-b border-border-subtle px-6 py-6 text-center md:px-10">
            <p className="font-display text-2xl font-medium text-foreground">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted">{site.tagline}</p>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2 md:gap-5 md:p-8">
            <ContactCard
              href={projectGmailUrl}
              label="Email"
              value={site.email}
              icon={MailIcon}
              external
            />
            <ContactCard
              href={`tel:${site.phone}`}
              label="Phone"
              value={site.phone}
              icon={PhoneIcon}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
