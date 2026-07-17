import { STATS } from "@/lib/site-data";

export function StatusTiles() {
  return (
    <div className="grid-4 section-grid">
      {STATS.map((stat) => (
        <article key={stat.label} className="card card-pad">
          <div className="kicker" style={{ fontSize: 11, letterSpacing: ".16em" }}>{stat.label}</div>
          <h3 style={{ fontSize: 34, marginTop: 16, marginBottom: 8 }}>{stat.value}</h3>
          <p style={{ margin: 0 }}>{stat.detail}</p>
        </article>
      ))}
    </div>
  );
}
