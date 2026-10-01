import { footer, site } from "@/data/content";
import { Container } from "./Container";
import { SocialIconLinks } from "./SocialIconLinks";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-display text-xl font-medium text-foreground">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted">{site.tagline}</p>
          </div>

          <SocialIconLinks size="sm" />

          <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xs text-muted-subtle">
            {footer.services.map((service, i) => (
              <span key={service}>
                {service}
                {i < footer.services.length - 1 && (
                  <span className="ml-2">•</span>
                )}
              </span>
            ))}
          </p>

          <p className="text-xs text-muted-subtle">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
