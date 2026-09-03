"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileMenu({ items }: { items: readonly { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="triad-mobile-nav">
      <button
        className={`menu-button ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="triad-mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        <span className="menu-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
      {open ? (
        <nav id="triad-mobile-menu" className="mobile-panel" aria-label="Navegación móvil">
          {items.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/portafolio" onClick={() => setOpen(false)}>
            Portafolio
          </Link>
          <Link href="/contacto" onClick={() => setOpen(false)}>
            Hablemos
          </Link>
        </nav>
      ) : null}
    </div>
  );
}
