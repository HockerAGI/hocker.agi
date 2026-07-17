"use client";

import { useMemo, useState } from "react";
import type { PortfolioGroup, PortfolioItem } from "@/lib/site-data";

const FILTERS: { key: PortfolioGroup | "all"; label: string }[] = [
  { key: "all", label: "Todo" },
  { key: "marketing", label: "Marketing" },
  { key: "developer", label: "Developer" },
  { key: "creative", label: "Creativo" },
];

export function PortfolioExplorer({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState<PortfolioGroup | "all">("all");
  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((item) => item.category === active)),
    [active, items],
  );

  return (
    <div className="section-grid">
      <div className="filters">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className="filter-button"
            aria-pressed={active === filter.key}
            onClick={() => setActive(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid-2 section-grid">
        {filtered.map((item) => (
          <article key={item.slug} className="card card-pad">
            <div className="tag-row" style={{ marginBottom: 12 }}>
              <span className="tag"><strong>{item.year}</strong></span>
              <span className="tag">{item.category}</span>
            </div>
            <h3 style={{ fontSize: 22, marginBottom: 10 }}>{item.title}</h3>
            <p style={{ marginTop: 0 }}>{item.role}</p>
            <p>{item.summary}</p>
            <div className="tag-row">
              {item.stack.map((stack) => (
                <span key={stack} className="tag">{stack}</span>
              ))}
            </div>
            <p style={{ marginTop: 12, color: "white" }}>{item.result}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
