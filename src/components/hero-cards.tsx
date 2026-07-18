import Image from "next/image";
import Link from "next/link";
import { APPS, STATS } from "@/lib/site-data";

export function HeroCards() {
  return (
    <div className="hero-image">
      <Image
        className="hero-logo"
        src="/brand/hocker-one-logo.png"
        alt="Hocker ONE"
        width={1200}
        height={1200}
        priority
      />
      <div className="hero-caption">Hocker ONE · núcleo del ecosistema</div>

      <div className="hero-metrics">
        {STATS.map((stat) => (
          <div className="metric" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <span>{stat.detail}</span>
          </div>
        ))}
      </div>

      <div className="panel" style={{ width: "100%" }}>
        <div className="panel-grid">
          {APPS.slice(0, 4).map((app) => (
            <Link key={app.slug} href={`/apps/${app.slug}`} className="panel-card">
              <Image src={app.logo} alt={app.title} width={64} height={64} className="app-logo" />
              <div>
                <div className="label">{app.badge}</div>
                <div className="value">{app.title}</div>
              </div>
              <div className="chip">{app.status}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
