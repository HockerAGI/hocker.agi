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
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return items.filter((item) => {
      const groupOk = active === "all" ? true : item.category === active;
      const searchOk =
        search.length === 0 ||
        [item.title, item.role, item.summary, item.result, ...item.stack].join(" ").toLowerCase().includes(search);
      return groupOk && searchOk;
    });
  }, [active, items, query]);

  return (
    <div className="section-grid">
      <div className="explorer-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Buscar caso, habilidad o resultado"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Buscar portfolio"
        />
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
      </div>

      <div className="grid-2 section-grid">
        {filtered.map((item) => (
          <article key={item.slug} className="card card-pad portfolio-card">
            <div className="tag-row" style={{ marginBottom: 12 }}>
              <span className="tag"><strong>{item.year}</strong></span>
              <span className="tag">{item.category}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="small-strong">{item.role}</p>
            <p>{item.summary}</p>
            <div className="tag-row">
              {item.stack.map((stack) => (
                <span key={stack} className="tag tag-soft">{stack}</span>
              ))}
            </div>
            <p className="result">{item.result}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
