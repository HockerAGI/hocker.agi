import { AGIS } from "@/lib/site-data";

export function AgiGrid() {
  return (
    <div className="grid-3 section-grid">
      {AGIS.map((agi) => (
        <article key={agi.slug} className="card card-pad">
          <div className="tag-row" style={{ marginBottom: 12 }}>
            <span className="tag"><strong>{agi.category}</strong></span>
          </div>
          <h3 style={{ fontSize: 22 }}>{agi.name}</h3>
          <p style={{ marginTop: 8, color: "white" }}>{agi.role}</p>
          <p>{agi.purpose}</p>
          <p style={{ color: "white" }}>{agi.human}</p>
          <div className="tag-row">
            {agi.worksWith.map((w) => (
              <span key={w} className="tag">{w}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
