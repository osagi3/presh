import { site } from "@/data/content";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "./icons/SocialIcons";

const socialItems = [
  { key: "instagram" as const, label: "Instagram", Icon: InstagramIcon },
  { key: "facebook" as const, label: "Facebook", Icon: FacebookIcon },
  { key: "tiktok" as const, label: "TikTok", Icon: TikTokIcon },
  { key: "whatsapp" as const, label: "WhatsApp", Icon: WhatsAppIcon },
];

type SocialIconLinksProps = {
  size?: "sm" | "md";
  className?: string;
};

export function SocialIconLinks({ size = "md", className = "" }: SocialIconLinksProps) {
  const btnSize = size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const iconSize = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className={`flex flex-wrap items-center justify-center gap-3 ${className}`}>
      {socialItems.map(({ key, label, Icon }) => (
        <a
          key={key}
          href={site.social[key].url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} — ${site.social[key].handle}`}
          title={site.social[key].handle}
          className={`${btnSize} flex items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground transition-all duration-200 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_var(--primary-muted)]`}
        >
          <Icon className={iconSize} />
        </a>
      ))}
    </div>
  );
}
