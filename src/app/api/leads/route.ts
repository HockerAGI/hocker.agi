import { NextResponse } from "next/server";

export const runtime = "nodejs";
const MAX_FIELD_LENGTH = 1200;
const MAX_BODY_BYTES = 16_384;
function clean(value: unknown, max = 240) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function isEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }
function isPhone(value: string) { return /^[+\d\s().-]{8,24}$/.test(value); }
function sameOrigin(request: Request) { const origin = request.headers.get("origin"); const host = request.headers.get("host"); if (!origin || !host) return true; try { return new URL(origin).host === host; } catch { return false; } }

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) return NextResponse.json({ ok: false, error: "Solicitud demasiado grande." }, { status: 413 });
  if (!sameOrigin(request)) return NextResponse.json({ ok: false, error: "Origen no permitido." }, { status: 403 });
  if (!(request.headers.get("content-type") ?? "").toLowerCase().includes("application/json")) return NextResponse.json({ ok: false, error: "Formato no permitido." }, { status: 415 });
  let body: Record<string, unknown>;
  try { body = (await request.json()) as Record<string, unknown>; } catch { return NextResponse.json({ ok: false, error: "Solicitud inválida." }, { status: 400 }); }
  const honeypot = clean(body.website, 120); if (honeypot) return NextResponse.json({ ok: true, captured: false });
  const startedAt = Number(body.startedAt || 0);
  if (!Number.isFinite(startedAt) || startedAt <= 0 || Date.now() - startedAt < 1200 || Date.now() - startedAt > 86_400_000) return NextResponse.json({ ok: false, error: "No fue posible validar el formulario." }, { status: 400 });
  const lead = { name: clean(body.name, 100), company: clean(body.company, 120), email: clean(body.email, 180).toLowerCase(), phone: clean(body.phone, 30), need: clean(body.need, 160), budget: clean(body.budget, 80), message: clean(body.message, MAX_FIELD_LENGTH), source: clean(body.source, 180), utmSource: clean(body.utmSource, 120), utmMedium: clean(body.utmMedium, 120), utmCampaign: clean(body.utmCampaign, 160), consent: body.consent === true, receivedAt: new Date().toISOString(), userAgent: clean(request.headers.get("user-agent"), 300) };
  if (!lead.name || !lead.need || !lead.consent) return NextResponse.json({ ok: false, error: "Completa nombre, necesidad y autorización de contacto." }, { status: 422 });
  if (!isEmail(lead.email) && !isPhone(lead.phone)) return NextResponse.json({ ok: false, error: "Agrega un correo o teléfono válido." }, { status: 422 });
  const webhookUrl = process.env.LEADS_WEBHOOK_URL; let captured = false;
  if (webhookUrl) { try { const webhookResponse = await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json", ...(process.env.LEADS_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.LEADS_WEBHOOK_TOKEN}` } : {}) }, body: JSON.stringify({ event: "lead.created", lead }), cache: "no-store", signal: AbortSignal.timeout(8000) }); captured = webhookResponse.ok; if (!webhookResponse.ok) console.error("Lead webhook rejected request", webhookResponse.status); } catch (error) { console.error("Lead webhook failed", error); } }
  return NextResponse.json({ ok: true, captured });
}
