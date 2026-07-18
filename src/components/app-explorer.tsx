"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { AppItem, AppGroup } from "@/lib/site-data";

const FILTERS: { key: AppGroup | "all"; label: string }[] = [
  { key: "all", label: "Todas" },
  { key: "control", label: "Control" },
  { key: "marketing", label: "Marketing" },
  { key: "wallet", label: "Wallet" },
  { key: "crm", label: "CRM" },
  { key: "cloud", label: "Cloud" },
  { key: "security", label: "Seguridad" },
  { key: "entertainment", label: "Gaming" },
  { key: "operations", label: "Ops" },
];

export function AppExplorer({ apps }: { apps: AppItem[] }) {
  const [active, setActive] = useState<AppGroup | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return apps.filter((app) => {
      const groupOk = active === "all" ? true : app.group === active;
      const searchOk =
        search.length === 0 ||
        [app.title, app.short, app.tagline, app.summary, app.audience, ...app.highlights, ...app.agis]
          .join(" ")
          .toLowerCase()
          .includes(search);
      return groupOk && searchOk;
    });
  }, [active, apps, query]);

  return (
    <div className="section-grid">
      <div className="explorer-bar">
        <input
          className="search-input"
          type="search"
          placeholder="Buscar app, función o AGI"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Buscar aplicaciones"
        />
        <div className="filters" role="tablist" aria-label="Filtros de aplicaciones">
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
        {filtered.map((app) => (
          <article key={app.slug} className="card card-pad app-card">
            <div className="app-top">
              <Image src={app.logo} alt={app.title} width={88} height={88} className="app-logo" />
              <div className="app-title">
                <strong>{app.title}</strong>
                <span>{app.tagline}</span>
              </div>
            </div>
            <p>{app.summary}</p>
            <p className="small-strong"><strong>Ideal para:</strong> {app.audience}</p>
            <div className="tag-row">
              <span className="tag"><strong>{app.badge}</strong></span>
              <span className="tag">{app.status}</span>
            </div>
            <div className="tag-row">
              {app.highlights.map((item) => (
                <span key={item} className="tag tag-soft">{item}</span>
              ))}
            </div>
            <Link href={`/apps/${app.slug}`} className="button button-secondary button-inline">
              Abrir módulo
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
