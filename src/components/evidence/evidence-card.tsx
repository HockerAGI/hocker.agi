"use client";

import type { EvidenceItem } from "@/content/portfolio/evidence";
import { trackPublicEvent } from "@/lib/analytics/events";

export function EvidenceCard({ item }: { item: EvidenceItem }) {
  return (
    <details
      className="evidence-card"
      onToggle={(event) => {
        if (event.currentTarget.open) {
          trackPublicEvent("portfolio_evidence_opened", {
            evidence: item.id,
            funnel: "recruiter",
          });
        }
      }}
    >
      <summary>
        <span className="status">{item.status}</span>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <span className="evidence-open-label">Ver contexto</span>
      </summary>
      <div className="evidence-details">
        <div>
          <small>Mi contribución</small>
          <strong>{item.role}</strong>
        </div>
        <div>
          <small>Qué demuestra</small>
          <strong>{item.demonstrates}</strong>
        </div>
        {item.metric && item.metricSource ? (
          <div>
            <small>Resultado verificado</small>
            <strong>{item.metric}</strong>
            <small>{item.metricSource}</small>
          </div>
        ) : null}
      </div>
    </details>
  );
}
