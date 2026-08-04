"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "hocker.analytics-consent.v1";

type Consent = "accepted" | "rejected" | null;
type MetaPixel = ((...args: unknown[]) => void) & { queue: unknown[][] };

function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function enableAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (gaId) {
    loadScript("hocker-ga", `https://www.googletagmanager.com/gtag/js?id=${gaId}`);
    const win = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    win.dataLayer = win.dataLayer || [];
    win.gtag = (...args: unknown[]) => win.dataLayer?.push(args);
    win.gtag("js", new Date());
    win.gtag("config", gaId, { anonymize_ip: true });
  }

  if (pixelId) {
    const win = window as typeof window & { fbq?: MetaPixel };
    if (!win.fbq) {
      const queue: unknown[][] = [];
      const fbq = ((...args: unknown[]) => {
        queue.push(args);
      }) as MetaPixel;
      fbq.queue = queue;
      win.fbq = fbq;
    }
    loadScript("hocker-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
    win.fbq("init", pixelId);
    win.fbq("track", "PageView");
  }
}

export function AnalyticsConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Consent;
    setConsent(stored === "accepted" || stored === "rejected" ? stored : null);
    if (stored === "accepted") enableAnalytics();
    setReady(true);
  }, []);

  const decide = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setConsent(value);
    if (value === "accepted") enableAnalytics();
  };

  if (!ready || consent) return null;

  return (
    <aside className="consent-banner" aria-label="Preferencias de analítica">
      <div>
        <strong>Medición con privacidad</strong>
        <p>
          Usamos analítica opcional para entender el rendimiento del sitio y mejorar campañas. Puedes rechazarla sin perder funciones. Consulta el {" "}
          <Link href="/legal/privacy">aviso de privacidad</Link>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="button button-secondary" onClick={() => decide("rejected")}>Rechazar</button>
        <button type="button" className="button button-primary" onClick={() => decide("accepted")}>Aceptar</button>
      </div>
    </aside>
  );
}
