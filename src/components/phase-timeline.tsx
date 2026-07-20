import { PHASES } from "@/lib/site-data";

export function PhaseTimeline({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? PHASES.slice(0, limit) : PHASES;

  return (
    <div className="phase-grid section-grid">
      {items.map((phase) => (
        <article key={phase.number} className="card card-pad phase-card">
          <div className="tag-row" style={{ marginBottom: 12 }}>
            <span className="tag"><strong>Fase {phase.number}</strong></span>
          </div>
          <h3>{phase.title}</h3>
          <p>{phase.summary}</p>
          <p className="result">{phase.deliverable}</p>
        </article>
      ))}
    </div>
  );
}
