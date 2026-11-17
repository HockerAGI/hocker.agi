"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "hocker.consent.v2";
const LEGACY_KEY = "hocker.analytics-consent.v1";
const CONSENT_EVENT = `${STORAGE_KEY}:change`;
const LEGACY_ACCEPTED = '{"analytics":true,"ads":true}';
const LEGACY_REJECTED = '{"analytics":false,"ads":false}';

type ConsentState = { analytics: boolean; ads: boolean };
type MetaPixel = ((...args: unknown[]) => void) & { queue: unknown[][] };

function loadScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function enableOptionalMeasurement(consent: ConsentState) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  if (consent.analytics && gaId) {
    loadScript("hocker-ga", `https://www.googletagmanager.com/gtag/js?id=${gaId}`);
    const win = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
    win.dataLayer = win.dataLayer || [];
    win.gtag = (...args: unknown[]) => {
      win.dataLayer?.push(args);
    };
    win.gtag("js", new Date());
    win.gtag("config", gaId, { anonymize_ip: true });
  }

  if (consent.ads && pixelId) {
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

function snapshot(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const current = localStorage.getItem(STORAGE_KEY);
    if (current) return current;
    const legacy = localStorage.getItem(LEGACY_KEY);
    if (legacy === "accepted") return LEGACY_ACCEPTED;
    if (legacy === "rejected") return LEGACY_REJECTED;
    return null;
  } catch {
    return null;
  }
}

function parseConsent(value: string | null): ConsentState | null {
  if (!value) return null;
  try {
    const parsed = JSON.parse(value) as Partial<ConsentState>;
    return typeof parsed.analytics === "boolean" && typeof parsed.ads === "boolean"
      ? { analytics: parsed.analytics, ads: parsed.ads }
      : null;
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === LEGACY_KEY) callback();
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(CONSENT_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
}

function hydrationSubscription() {
  return () => undefined;
}

export function AnalyticsConsent() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => null);
  const stored = useMemo(() => parseConsent(raw), [raw]);
  const ready = useSyncExternalStore(hydrationSubscription, () => true, () => false);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ConsentState>({ analytics: false, ads: false });
  const dialogRef = useRef<HTMLElement | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (stored) enableOptionalMeasurement(stored);
  }, [stored]);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    dialog?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )).filter((element) => element.getClientRects().length > 0);
      if (focusable.length === 0) {
        event.preventDefault();
        dialog.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (openerRef.current?.isConnected) openerRef.current.focus();
      else document.querySelector<HTMLElement>(".privacy-preferences-trigger, .brand-link")?.focus();
    };
  }, [open]);

  const openPreferences = () => {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setDraft(stored ?? { analytics: false, ads: false });
    setOpen(true);
  };

  const persist = (value: ConsentState) => {
    const requiresReload = Boolean((stored?.analytics && !value.analytics) || (stored?.ads && !value.ads));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    localStorage.removeItem(LEGACY_KEY);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setOpen(false);
    if (requiresReload) window.location.reload();
  };

  if (!ready) return null;

  return (
    <>
      {!stored && !open ? (
        <aside className="consent-banner" aria-label="Preferencias de privacidad">
          <div>
            <strong>Privacidad bajo tu control</strong>
            <p>
              Las funciones necesarias operan siempre. Analítica y publicidad son opcionales. <Link href="/legal/privacy#cookies">Ver aviso</Link>.
            </p>
          </div>
          <div className="consent-actions">
            <button className="button button-secondary" type="button" onClick={() => persist({ analytics: false, ads: false })}>Solo necesarias</button>
            <button className="button button-secondary" type="button" onClick={openPreferences}>Configurar</button>
            <button className="button button-primary" type="button" onClick={() => persist({ analytics: true, ads: true })}>Aceptar opcionales</button>
          </div>
        </aside>
      ) : null}

      {stored ? (
        <div className="privacy-control" aria-label="Privacidad">
          <button className="privacy-preferences-trigger" type="button" onClick={openPreferences}>Privacidad y preferencias</button>
        </div>
      ) : null}

      {open ? (
        <div className="privacy-modal-backdrop" role="presentation" onMouseDown={event => { if (event.currentTarget === event.target) setOpen(false); }}>
          <section ref={dialogRef} tabIndex={-1} className="privacy-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
            <p className="h-eyebrow">PRIVACIDAD</p>
            <h2 id="privacy-title">Tus preferencias</h2>
            <p className="h-copy">Puedes cambiar esta decisión cuando quieras.</p>
            <label className="privacy-option">
              <span><strong>Necesarias</strong><small>Seguridad, navegación y funciones esenciales.</small></span>
              <input type="checkbox" aria-label="Cookies necesarias (siempre activas)" checked disabled />
            </label>
            <label className="privacy-option">
              <span><strong>Analítica</strong><small>Medición agregada.</small></span>
              <input type="checkbox" aria-label="Permitir analítica opcional" checked={draft.analytics} onChange={event => setDraft(current => ({ ...current, analytics: event.target.checked }))} />
            </label>
            <label className="privacy-option">
              <span><strong>Publicidad</strong><small>Medición publicitaria opcional.</small></span>
              <input type="checkbox" aria-label="Permitir publicidad opcional" checked={draft.ads} onChange={event => setDraft(current => ({ ...current, ads: event.target.checked }))} />
            </label>
            <div className="consent-actions">
              <button className="button button-secondary" type="button" onClick={() => setOpen(false)}>Cancelar</button>
              <button className="button button-primary" type="button" onClick={() => persist(draft)}>Guardar</button>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
