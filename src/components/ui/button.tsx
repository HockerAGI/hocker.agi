"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackPublicEvent, type PublicEventName } from "@/lib/analytics/events";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
  eventName?: PublicEventName;
  eventParams?: Record<string, string | number | boolean>;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  eventName,
  eventParams,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`button button-${variant} ${className}`.trim()}
      onClick={() => {
        if (eventName) trackPublicEvent(eventName, eventParams);
      }}
    >
      {children}
    </Link>
  );
}
