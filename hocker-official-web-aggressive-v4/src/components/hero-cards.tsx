import Image from "next/image";
import Link from "next/link";
import { APPS, PROFILE, STATS } from "@/lib/site-data";

export function HeroCards() {
  return (
    <div className="hero-stage hero-stage-premium">
      <div className="hero-stage-top">
        <div className="hero-logo-frame hero-logo-frame-premium">
          <Image
            className="hero-logo hero-logo-premium"
            src="/brand/hocker-agi-technologies.png"
            alt="Hocker AGI Technologies"
            width={1120}
            height={1120}
            priority
          />
        </div>
        <div className="hero-stage-copy">
          <div className="kicker">Official site · premium brand</div>
          <h3>{PROFILE.name}</h3>
          <p>{PROFILE.title}</p>
          <div className="hero-bullets">
            {PROFILE.bullets.map((bullet) => (
              <span key={bullet} className="tag tag-soft">{bullet}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-metrics">
        {STATS.map((stat) => (
          <div className="metric" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
            <span>{stat.detail}</span>
          </div>
        ))}
      </div>

      <div className="panel panel-tight">
        <div className="panel-headline">Acceso rápido a los módulos más visibles</div>
        <div className="panel-grid panel-grid-compact">
          {APPS.slice(0, 4).map((app) => (
            <Link key={app.slug} href={`/apps/${app.slug}`} className="panel-card panel-card-link">
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
