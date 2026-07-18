import { AGIS } from "@/lib/site-data";

export function AgiGrid() {
  return (
    <div className="grid-3 section-grid">
      {AGIS.map((agi) => (
        <article key={agi.slug} className="card card-pad agi-card" style={{ borderTopColor: agi.accent }}>
          <div className="tag-row" style={{ marginBottom: 12 }}>
            <span className="tag"><strong>{agi.category}</strong></span>
          </div>
          <h3>{agi.name}</h3>
          <p className="small-strong">{agi.role}</p>
          <p>{agi.purpose}</p>
          <p className="result">{agi.human}</p>
          <div className="tag-row">
            {agi.worksWith.map((w) => (
              <span key={w} className="tag tag-soft">{w}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
