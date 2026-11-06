"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Understand Cyberbullying", href: "/understand" },
  { label: "Know the Law", href: "/know-the-law" },
  { label: "Victim Support", href: "/victim-support" },
  { label: "Quiz", href: "/quiz" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const menuOpen = openPath === pathname;
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenPath(null);
        menuToggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      menuPanelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    }
  }, [menuOpen]);

  function trapMenuFocus(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !menuPanelRef.current) return;

    const focusable = menuPanelRef.current.querySelectorAll<HTMLAnchorElement>("a");
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="Stop Cyberbullying Malawi home">
          <span className="brand-mark" aria-hidden="true">
            <Image
              alt=""
              className="brand-logo-image"
              height={2000}
              sizes="40px"
              src="/cyber%20logo.png"
              width={2000}
            />
          </span>
          <span className="brand-name">
            <strong>STOP CYBERBULLYING</strong>
            <span>MALAWI</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(({ label, href }) => (
            <Link
              aria-current={pathname === href ? "page" : undefined}
              className={pathname === href ? "nav-link nav-link-active" : "nav-link"}
              href={href}
              key={href}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/victim-support">
          Get Help <ArrowRight size={16} aria-hidden="true" />
        </Link>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-toggle"
          onClick={() => setOpenPath(menuOpen ? null : pathname)}
          ref={menuToggleRef}
          type="button"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen && (
        <>
          <button
            aria-label="Close navigation menu"
            className="mobile-menu-backdrop"
            onClick={() => {
              setOpenPath(null);
              menuToggleRef.current?.focus();
            }}
            tabIndex={-1}
            type="button"
          />
          <div
            aria-label="Main navigation"
            aria-modal="true"
            className="mobile-menu-panel"
            id="mobile-navigation"
            onKeyDown={trapMenuFocus}
            ref={menuPanelRef}
            role="dialog"
          >
            <nav aria-label="Mobile navigation">
              {navigation.map(({ label, href }) => (
                <Link
                  aria-current={pathname === href ? "page" : undefined}
                  className={pathname === href ? "mobile-nav-link mobile-nav-link-active" : "mobile-nav-link"}
                  href={href}
                  key={href}
                  onClick={() => setOpenPath(null)}
                >
                  {label}
                </Link>
              ))}
              <Link
                className="mobile-menu-cta"
                href="/victim-support"
                onClick={() => setOpenPath(null)}
              >
                Get Help <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
