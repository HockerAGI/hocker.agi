"use client";

import { useMemo, useState } from "react";
import { CONTACT } from "@/lib/site-data";

type LeadFormProps = {
  mode?: "contact" | "callback";
};

export function LeadForm({ mode = "contact" }: LeadFormProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");

  const prefix = mode === "callback" ? "Callback" : "Cotización";

  const message = useMemo(() => {
    return [
      `${prefix} Hocker AGI`,
      `Nombre: ${name || "—"}`,
      `Empresa: ${company || "—"}`,
      `Necesidad: ${need || "—"}`,
      `Presupuesto: ${budget || "—"}`,
      `Sitio: ${CONTACT.vercel}`,
    ].join("\n");
  }, [budget, company, name, need, prefix]);

  const openWhatsApp = () => {
    const url = `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <form
      className="lead-form card card-pad"
      onSubmit={(event) => {
        event.preventDefault();
        openWhatsApp();
      }}
    >
      <div className="lead-grid">
        <label>
          <span>Nombre</span>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" />
        </label>
        <label>
          <span>Empresa / proyecto</span>
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Marca o negocio" />
        </label>
        <label>
          <span>Qué necesitas</span>
          <input value={need} onChange={(e) => setNeed(e.target.value)} placeholder="Web, Ads, app, IA, etc." />
        </label>
        <label>
          <span>Presupuesto aproximado</span>
          <input value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Desde / rango" />
        </label>
      </div>

      <div className="hero-actions" style={{ marginTop: 18 }}>
        <button type="submit" className="button button-primary">Abrir WhatsApp</button>
        <a className="button button-secondary" href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(prefix + " Hocker")}&body=${encodeURIComponent(message)}`}>
          Enviar por email
        </a>
      </div>
    </form>
  );
}
