"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { AppItem, AppGroup } from "@/lib/site-data";

const FILTERS: { key: AppGroup | "all"; label: string }[] = [
  { key: "all", label: "Todas" },
  { key: "control", label: "Operación" },
  { key: "marketing", label: "Marketing" },
  { key: "wallet", label: "Finanzas" },
  { key: "crm", label: "CRM" },
  { key: "cloud", label: "Cloud" },
  { key: "security", label: "Seguridad" },
  { key: "entertainment", label: "Entretenimiento" },
  { key: "operations", label: "Procesos" },
];

const publicAvailability: Record<string, string> = {
  live: "Disponible",
  building: "En desarrollo",
  blocked: "Próxima apertura",
  protected: "Información bajo solicitud",
};

export function AppExplorer({ apps }: { apps: AppItem[] }) {
  const [active, setActive] = useState<AppGroup | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return apps.filter((app) => {
      const groupOk = active === "all" || app.group === active;
      const searchOk =
        search.length === 0 ||
        [app.title, app.short, app.tagline, app.summary, app.audience, ...app.highlights]
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
          placeholder="Buscar producto o función"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          aria-label="Buscar productos"
        />
        <div className="filters" aria-label="Filtrar productos">
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
              <Image src={app.logo} alt={`Logotipo de ${app.title}`} width={88} height={88} className="app-logo" />
              <div className="app-title">
                <span>{app.badge}</span>
                <strong>{app.title}</strong>
                <small>{publicAvailability[app.status] || "Bajo solicitud"}</small>
              </div>
            </div>
            <h3>{app.tagline}</h3>
            <p>{app.summary}</p>
            <p className="small-strong"><strong>Diseñado para:</strong> {app.audience}</p>
            <div className="tag-row">
              {app.highlights.map((item) => <span key={item} className="tag tag-soft">{item}</span>)}
            </div>
            <Link href={`/apps/${app.slug}`} className="button button-secondary button-inline">
              Conocer solución
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? <p className="empty-state">No encontramos productos con ese criterio.</p> : null}
    </div>
  );
}
