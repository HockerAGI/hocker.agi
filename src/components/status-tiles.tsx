import { STATS } from "@/lib/site-data";

export function StatusTiles() {
  return (
    <div className="grid-4 section-grid">
      {STATS.map((stat) => (
        <article key={stat.label} className="card card-pad stat-card">
          <div className="kicker">{stat.label}</div>
          <h3>{stat.value}</h3>
          <p>{stat.detail}</p>
        </article>
      ))}
    </div>
  );
}
