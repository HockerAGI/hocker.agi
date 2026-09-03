"use client";

import Link from "next/link";
import { PORTFOLIO_CASES } from "@/content/portfolio/cases";
import { trackPublicEvent } from "@/lib/analytics/events";

export function SelectedWork() {
  return (
    <div className="selected-work">
      {PORTFOLIO_CASES.map((portfolioCase, index) => (
        <Link
          href={`/portafolio/${portfolioCase.slug}`}
          className="work-row"
          key={portfolioCase.slug}
          onClick={() =>
            trackPublicEvent("case_opened", {
              case: portfolioCase.slug,
              funnel: "recruiter",
            })
          }
        >
          <small>0{index + 1}</small>
          <div>
            <span className="status">{portfolioCase.status}</span>
            <h3 className="h-h3">{portfolioCase.title}</h3>
            <strong>{portfolioCase.strapline}</strong>
          </div>
          <div>
            <p>{portfolioCase.summary}</p>
            <span className="text-link">
              Ver caso <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
