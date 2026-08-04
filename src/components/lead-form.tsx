"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { PUBLIC_SITE } from "@/lib/public-site";

type LeadFormProps = {
  mode?: "contact" | "callback";
};

type Status = "idle" | "sending" | "success" | "error";

export function LeadForm({ mode = "contact" }: LeadFormProps) {
  const startedAt = useRef<number | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    need: "",
    budget: "",
    message: "",
    website: "",
    consent: false,
  });

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const prefix = mode === "callback" ? "Solicitud de llamada" : "Diagnóstico comercial";

  const whatsappMessage = useMemo(
    () =>
      [
        `${prefix} · Hocker AGI Technologies`,
        `Nombre: ${form.name || "—"}`,
        `Empresa: ${form.company || "—"}`,
        `Correo: ${form.email || "—"}`,
        `Teléfono: ${form.phone || "—"}`,
        `Necesidad: ${form.need || "—"}`,
        `Presupuesto: ${form.budget || "Por definir"}`,
        `Contexto: ${form.message || "—"}`,
      ].join("\n"),
    [form, prefix]
  );

  const setField = (field: keyof typeof form, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitLead = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");

    if (!form.email.trim() && !form.phone.trim()) {
      setStatus("error");
      setFeedback("Agrega un correo o teléfono para poder responderte.");
      return;
    }

    setStatus("sending");
    const whatsappWindow = window.open("about:blank", "_blank");
    const params = new URLSearchParams(window.location.search);
    const formStartedAt = startedAt.current ?? Date.now();

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: window.location.href,
          utmSource: params.get("utm_source") || "",
          utmMedium: params.get("utm_medium") || "",
          utmCampaign: params.get("utm_campaign") || "",
          startedAt: formStartedAt,
        }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string; captured?: boolean };
      if (!response.ok || !result.ok) throw new Error(result.error || "No fue posible enviar el formulario.");

      const win = window as typeof window & {
        dataLayer?: Record<string, unknown>[];
        fbq?: (...args: unknown[]) => void;
      };
      win.dataLayer?.push({ event: "generate_lead", lead_type: mode, lead_need: form.need });
      win.fbq?.("track", "Lead", { content_name: form.need });

      const whatsappUrl = `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
      if (whatsappWindow) whatsappWindow.location.href = whatsappUrl;
      else window.location.href = whatsappUrl;

      setStatus("success");
      setFeedback(
        result.captured
          ? "Solicitud registrada. Abrimos WhatsApp para continuar la conversación."
          : "Abrimos WhatsApp para enviar tu solicitud directamente."
      );
    } catch (error) {
      whatsappWindow?.close();
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Ocurrió un error. Intenta por WhatsApp.");
    }
  };

  return (
    <form className="lead-form" onSubmit={submitLead} noValidate>
      <div className="form-heading">
        <span>DIAGNÓSTICO INICIAL</span>
        <h3>Cuéntanos lo esencial.</h3>
        <p>Los campos marcados con * son obligatorios.</p>
      </div>

      <div className="lead-grid">
        <label>
          <span>Nombre *</span>
          <input
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => setField("name", event.target.value)}
            placeholder="Tu nombre"
            required
            maxLength={100}
          />
        </label>

        <label>
          <span>Empresa o proyecto</span>
          <input
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => setField("company", event.target.value)}
            placeholder="Nombre de la marca"
            maxLength={120}
          />
        </label>

        <label>
          <span>Correo</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => setField("email", event.target.value)}
            placeholder="nombre@empresa.com"
            maxLength={180}
          />
        </label>

        <label>
          <span>WhatsApp o teléfono</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => setField("phone", event.target.value)}
            placeholder="+52 ..."
            maxLength={30}
          />
        </label>

        <label>
          <span>¿Qué necesitas? *</span>
          <select name="need" value={form.need} onChange={(event) => setField("need", event.target.value)} required>
            <option value="">Selecciona una opción</option>
            <option value="Captación y publicidad">Captación y publicidad</option>
            <option value="Automatización de procesos">Automatización de procesos</option>
            <option value="Sitio web o landing">Sitio web o landing</option>
            <option value="Aplicación o plataforma">Aplicación o plataforma</option>
            <option value="Consultoría de IA">Consultoría de IA</option>
            <option value="Otro proyecto">Otro proyecto</option>
          </select>
        </label>

        <label>
          <span>Rango de inversión</span>
          <select name="budget" value={form.budget} onChange={(event) => setField("budget", event.target.value)}>
            <option value="">Por definir</option>
            <option value="Menos de $15,000 MXN">Menos de $15,000 MXN</option>
            <option value="$15,000–$40,000 MXN">$15,000–$40,000 MXN</option>
            <option value="$40,000–$100,000 MXN">$40,000–$100,000 MXN</option>
            <option value="Más de $100,000 MXN">Más de $100,000 MXN</option>
          </select>
        </label>
      </div>

      <label className="message-field">
        <span>Contexto adicional</span>
        <textarea
          name="message"
          value={form.message}
          onChange={(event) => setField("message", event.target.value)}
          placeholder="Describe brevemente el problema, objetivo o fecha ideal."
          rows={4}
          maxLength={1200}
        />
      </label>

      <label className="honeypot" aria-hidden="true">
        <span>Sitio web</span>
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => setField("website", event.target.value)}
        />
      </label>

      <label className="consent-check">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => setField("consent", event.target.checked)}
          required
        />
        <span>
          Autorizo a Hocker AGI Technologies a contactarme sobre esta solicitud. He leído el{" "}
          <Link href="/legal/privacy">aviso de privacidad</Link>.
        </span>
      </label>

      <div className="form-actions">
        <button type="submit" className="button button-primary button-big" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar y continuar en WhatsApp"}
        </button>
        <a href={`mailto:${PUBLIC_SITE.email}`} className="text-link">
          Prefiero enviar un correo
        </a>
      </div>

      {feedback ? (
        <p className={`form-feedback form-feedback-${status}`} role="status">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
