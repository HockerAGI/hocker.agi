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
  { key: "entertainment", label: "Entretenimiento" },
  { key: "operations", label: "Operación" },
];

export function AppExplorer({ apps }: { apps: AppItem[] }) {
  const [active, setActive] = useState<AppGroup | "all">("all");
  const filtered = useMemo(
    () => (active === "all" ? apps : apps.filter((app) => app.group === active)),
    [active, apps],
  );

  return (
    <div className="section-grid">
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

      <div className="grid-3 section-grid">
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
            <p style={{ marginTop: -4, color: "white" }}>
              <strong>Ideal para:</strong> {app.audience}
            </p>
            <div className="tag-row">
              {app.highlights.map((item) => (
                <span key={item} className="tag"><strong>•</strong> {item}</span>
              ))}
            </div>
            <div className="tag-row">
              <span className="tag"><strong>AGIs:</strong> {app.agis.join(" · ")}</span>
              <span className="tag"><strong>Status:</strong> {app.status}</span>
            </div>
            <Link href={`/apps/${app.slug}`} className="button button-secondary" style={{ width: "fit-content" }}>
              Ver módulo
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
