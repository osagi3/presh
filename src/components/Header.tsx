"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/content";
import { Container } from "./Container";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { projectGmailUrl } from "@/lib/gmail-url";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-border-subtle bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="#" aria-label="PREFELO Social Haus home">
            <Logo />
          </a>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen((open) => !open)}
            >
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-foreground transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
            </button>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button href={projectGmailUrl} className="!px-5 !py-2.5 !text-xs">
              Start a Project
            </Button>
          </nav>
        </div>
      </Container>

      {menuOpen && (
        <div className="border-t border-border-subtle bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-3 text-base text-muted transition-colors hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button href={projectGmailUrl} className="w-full">
                Start a Project
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
