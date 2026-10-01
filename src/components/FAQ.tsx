"use client";

import { useState } from "react";
import { faq } from "@/data/content";
import { Section } from "./Section";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" eyebrow={faq.eyebrow} title={faq.title} dark>
      <div className="mx-auto max-w-3xl divide-y divide-border">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="py-5">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-medium text-foreground">{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`mt-0.5 shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-200 ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-muted">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
}
