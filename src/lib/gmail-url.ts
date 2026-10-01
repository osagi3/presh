import { contact, site } from "@/data/content";
import { buildGmailComposeUrl } from "@/lib/gmail";

export const projectGmailUrl = buildGmailComposeUrl({
  to: site.email,
  subject: contact.gmailSubject,
  body: contact.gmailBody,
});
