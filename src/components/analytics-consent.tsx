"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "hocker.analytics-consent.v1";
const CONSENT_EVENT = `${STORAGE_KEY}:change`;

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

function readConsent(): Consent {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "accepted" || stored === "rejected" ? stored : null;
  } catch {
    return null;
  }
}

function subscribeToConsent(callback: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) callback();
  };
  const handleConsentChange = () => callback();

  window.addEventListener("storage", handleStorage);
  window.addEventListener(CONSENT_EVENT, handleConsentChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  };
}

function subscribeToHydration() {
  return () => undefined;
}

export function AnalyticsConsent() {
  const consent = useSyncExternalStore(subscribeToConsent, readConsent, () => null);
  const ready = useSyncExternalStore(subscribeToHydration, () => true, () => false);

  useEffect(() => {
    if (consent === "accepted") enableAnalytics();
  }, [consent]);

  const decide = (value: Exclude<Consent, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } finally {
      window.dispatchEvent(new Event(CONSENT_EVENT));
    }
  };

  if (!ready || consent) return null;

  return (
    <aside className="consent-banner" aria-label="Preferencias de analítica">
      <div>
        <strong>Medición con privacidad</strong>
        <p>
          Usamos analítica opcional para entender el rendimiento del sitio y mejorar campañas. Puedes rechazarla sin perder funciones. Consulta el{" "}
          <Link href="/legal/privacy">aviso de privacidad</Link>.
        </p>
      </div>
      <div className="consent-actions">
        <button type="button" className="button button-secondary" onClick={() => decide("rejected")}>
          Rechazar
        </button>
        <button type="button" className="button button-primary" onClick={() => decide("accepted")}>
          Aceptar
        </button>
      </div>
    </aside>
  );
}
