"use client";

import Image from "next/image";
import { site } from "@/data/content";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src={site.logo}
      alt={site.name}
      width={1254}
      height={1254}
      priority
      className={`logo-nav h-12 w-auto object-contain md:h-14 ${className}`}
    />
  );
}
