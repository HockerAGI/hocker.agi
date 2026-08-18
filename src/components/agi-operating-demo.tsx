"use client";

import { useState } from "react";

const scenarios = [
  { label: "Growth B2B", request: "Quiero aumentar oportunidades B2B sin perder control del CAC.", specialists: ["NOVA ADS", "REVIA", "NUMIA"], output: "Brief de adquisición + hipótesis de funnel + métricas + riesgos", gate: "Campaña o gasto → Owner Gate" },
  { label: "Seguridad", request: "Necesito revisar una integración antes de conectarla a producción.", specialists: ["VERTX", "JURIX", "HOSTIA"], output: "Mapa de riesgos + controles + dependencias + evidencia requerida", gate: "Cambio productivo → Owner Gate" },
  { label: "Revenue Ops", request: "Quiero automatizar seguimiento comercial sin enviar mensajes incorrectos.", specialists: ["REVIA", "SYNTIA", "NOVA"], output: "Flujo propuesto + contexto permitido + reglas de escalación", gate: "Mensaje externo material → política / aprobación" },
] as const;

export function AgiOperatingDemo() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];
  return <div className="vnext-agi-demo">
    <div className="vnext-demo-tabs" role="tablist" aria-label="Escenarios de demostración">{scenarios.map((item, index) => <button type="button" role="tab" aria-selected={active === index} key={item.label} onClick={() => setActive(index)}>{item.label}</button>)}</div>
    <div className="vnext-demo-request"><span>MISSION INPUT</span><p>{scenario.request}</p></div>
    <div className="vnext-demo-pipeline"><article><span>01</span><strong>NOVA</strong><small>Clasifica misión y restricciones</small></article><article><span>02</span><strong>{scenario.specialists.join(" + ")}</strong><small>Especialistas seleccionados</small></article><article><span>03</span><strong>OUTPUT</strong><small>{scenario.output}</small></article><article><span>04</span><strong>CONTROL</strong><small>{scenario.gate}</small></article></div>
    <p className="vnext-demo-disclaimer">Simulación local de arquitectura. No ejecuta herramientas, no consulta memoria privada y no representa certificación productiva de un runtime dedicado.</p>
  </div>;
}
