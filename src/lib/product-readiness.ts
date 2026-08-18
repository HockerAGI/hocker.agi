const READINESS: Record<string, string> = {
  "hocker-one": "Evolución activa",
  "hocker-ads": "Desarrollo activo",
  "hocker-hub": "Implementación por etapas",
  "hocker-drive-cloud": "Implementación por etapas",
  "hocker-wallet": "Consolidación técnica · alcance regulado",
  "chido-casino": "Consolidación · sujeta a regulación",
  "trackhok": "Diseño objetivo · uso autorizado",
  "nexpa": "Diseño objetivo · consentimiento requerido",
  "hocker-up": "Diseño objetivo",
  "hocker-supply": "Consolidación funcional",
};

export function publicReadiness(slug: string, fallback: string) {
  return READINESS[slug] ?? fallback;
}
