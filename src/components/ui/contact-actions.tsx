import type { SVGProps } from "react";
import { PUBLIC_SITE } from "@/lib/public-site";

type ContactActionsProps = {
  compact?: boolean;
};

function Icon(props: SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props} />;
}

export function ContactActions({ compact = false }: ContactActionsProps) {
  const links = [
    { href: `mailto:${PUBLIC_SITE.email}`, label: "Enviar correo", icon: <Icon><path d="m4 5 8 7 8-7" /><rect x="3" y="5" width="18" height="14" rx="2" /></Icon> },
    { href: `tel:${PUBLIC_SITE.phoneE164}`, label: "Llamar por teléfono", icon: <Icon><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.29-1.29a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" /></Icon> },
    { href: `${PUBLIC_SITE.whatsapp}?text=${encodeURIComponent("Hola, quiero conversar sobre un proyecto.")}`, label: "Abrir WhatsApp", external: true, icon: <Icon><path d="M20 11.5a7.7 7.7 0 0 1-11.4 6.8L4 20l1.7-4.4A7.7 7.7 0 1 1 20 11.5Z" /><path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.5 1.2c.1.3.1.4-.1.6l-.5.6c.7 1.3 1.4 2 2.7 2.6l.6-.5c.2-.2.4-.2.6-.1l1.2.5c.3.1.4.2.4.4v.5c0 .3 0 .5-.4.7-.3.2-.9.3-1.6.1-2.2-.7-4-2.5-4.8-4.7-.2-.7-.1-1.3.1-1.7Z" /></Icon> }
  ];

  return (
    <div className={`contact-icon-actions${compact ? " compact" : ""}`} aria-label="Canales de contacto">
      {links.map((link) => (
        <a
          key={link.label}
          className="contact-icon-link"
          href={link.href}
          aria-label={link.label}
          title={link.label}
          {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link.icon}
          <span className="sr-only">{link.label}</span>
        </a>
      ))}
    </div>
  );
}
