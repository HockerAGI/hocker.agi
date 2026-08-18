"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "hocker.consent.v2";
const LEGACY_KEY = "hocker.analytics-consent.v1";
const CONSENT_EVENT = `${STORAGE_KEY}:change`;
type ConsentState = { analytics: boolean; ads: boolean };
type MetaPixel = ((...args: unknown[]) => void) & { queue: unknown[][] };

function loadScript(id: string, src: string) { if (document.getElementById(id)) return; const script = document.createElement("script"); script.id = id; script.async = true; script.src = src; document.head.appendChild(script); }
function enableAnalytics(allowAds: boolean) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID; const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (gaId) { loadScript("hocker-ga", `https://www.googletagmanager.com/gtag/js?id=${gaId}`); const win = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void }; win.dataLayer = win.dataLayer || []; win.gtag = (...args: unknown[]) => win.dataLayer?.push(args); win.gtag("js", new Date()); win.gtag("config", gaId, { anonymize_ip: true }); }
  if (allowAds && pixelId) { const win = window as typeof window & { fbq?: MetaPixel }; if (!win.fbq) { const queue: unknown[][] = []; const fbq = ((...args: unknown[]) => queue.push(args)) as MetaPixel; fbq.queue = queue; win.fbq = fbq; } loadScript("hocker-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js"); win.fbq("init", pixelId); win.fbq("track", "PageView"); }
}
function readConsent(): ConsentState | null { if (typeof window === "undefined") return null; try { const stored = window.localStorage.getItem(STORAGE_KEY); if (stored) { const parsed = JSON.parse(stored) as Partial<ConsentState>; if (typeof parsed.analytics === "boolean" && typeof parsed.ads === "boolean") return { analytics: parsed.analytics, ads: parsed.ads }; } const legacy = window.localStorage.getItem(LEGACY_KEY); if (legacy === "accepted") return { analytics: true, ads: true }; if (legacy === "rejected") return { analytics: false, ads: false }; } catch { return null; } return null; }
function subscribe(callback: () => void) { const storage = (event: StorageEvent) => { if (event.key === STORAGE_KEY || event.key === LEGACY_KEY) callback(); }; const changed = () => callback(); window.addEventListener("storage", storage); window.addEventListener(CONSENT_EVENT, changed); return () => { window.removeEventListener("storage", storage); window.removeEventListener(CONSENT_EVENT, changed); }; }
function hydrationSubscription() { return () => undefined; }

export function AnalyticsConsent() {
  const stored = useSyncExternalStore(subscribe, readConsent, () => null); const ready = useSyncExternalStore(hydrationSubscription, () => true, () => false); const [open, setOpen] = useState(false); const [draft, setDraft] = useState<ConsentState>({ analytics: false, ads: false });
  useEffect(() => { if (stored?.analytics) enableAnalytics(stored.ads); }, [stored]);
  useEffect(() => { if (stored) setDraft(stored); }, [stored]);
  const persist = (value: ConsentState) => { const wasEnabled = Boolean(stored?.analytics || stored?.ads); window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value)); window.localStorage.removeItem(LEGACY_KEY); window.dispatchEvent(new Event(CONSENT_EVENT)); setOpen(false); if (wasEnabled && !value.analytics && !value.ads) window.location.reload(); };
  if (!ready) return null;
  if (!stored && !open) return <aside className="consent-banner" aria-label="Preferencias de privacidad"><div><strong>Privacidad bajo tu control</strong><p>Las funciones necesarias operan siempre. Analítica y publicidad son opcionales y se activan solo con tu decisión. <Link href="/legal/privacy#cookies">Ver aviso</Link>.</p></div><div className="consent-actions"><button type="button" className="button button-secondary" onClick={() => persist({ analytics: false, ads: false })}>Solo necesarias</button><button type="button" className="button button-secondary" onClick={() => setOpen(true)}>Configurar</button><button type="button" className="button button-primary" onClick={() => persist({ analytics: true, ads: true })}>Aceptar opcionales</button></div></aside>;
  return <><button type="button" className="privacy-preferences-trigger" onClick={() => setOpen(true)}>Cambiar preferencias</button>{open ? <div className="privacy-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.currentTarget === event.target) setOpen(false); }}><section className="privacy-modal" role="dialog" aria-modal="true" aria-labelledby="privacy-title"><div><p className="vnext-kicker">PRIVACIDAD</p><h2 id="privacy-title">Tus preferencias</h2><p>Puedes cambiar esta decisión cuando quieras. Las categorías opcionales permanecen desactivadas hasta que las autorices.</p></div><label className="privacy-option"><span><strong>Necesarias</strong><small>Seguridad, navegación y funciones esenciales.</small></span><input type="checkbox" checked disabled /></label><label className="privacy-option"><span><strong>Analítica</strong><small>Medición de rendimiento y comportamiento agregado.</small></span><input type="checkbox" checked={draft.analytics} onChange={(event) => setDraft((current) => ({ ...current, analytics: event.target.checked }))} /></label><label className="privacy-option"><span><strong>Publicidad</strong><small>Medición publicitaria opcional cuando exista un identificador configurado.</small></span><input type="checkbox" checked={draft.ads} onChange={(event) => setDraft((current) => ({ ...current, ads: event.target.checked }))} /></label><div className="consent-actions"><button type="button" className="button button-secondary" onClick={() => setOpen(false)}>Cancelar</button><button type="button" className="button button-primary" onClick={() => persist(draft)}>Guardar preferencias</button></div></section></div> : null}</>;
}
