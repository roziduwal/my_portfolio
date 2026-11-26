"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  isCaseStudy?: boolean;
}

export default function Navbar({ isCaseStudy = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (isCaseStudy) return;

    const sections = document.querySelectorAll("section[id]");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("id") || "");
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isCaseStudy]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const navLinks = [
    { label: "About", href: "/#about", id: "about" },
    { label: "Projects", href: "/#projects", id: "projects" },
    { label: "Expertise", href: "/#expertise", id: "expertise" },
    { label: "Experience", href: "/#experience", id: "experience" },
    { label: "Education", href: "/#education", id: "education" },
  ];

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to primary content
      </a>

      <header className="site-header" role="banner">
        <nav className="nav-bar" aria-label="Main Navigation">
          <Link href="/#hero" className="nav-brand" aria-label="Rojina Duwal Home">
            <span className="nav-brand-logo">RD</span>
            <span className="nav-brand-text">Rojina Duwal</span>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Action & Mobile Toggle */}
          <div className="nav-actions">
            <Link href="/#contact" className="btn btn-primary button-sm">
              <span>Get In Touch</span>
            </Link>

            <button
              id="nav-toggle-btn"
              className={`nav-toggle-btn ${isOpen ? "is-active" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-drawer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Full-Height Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`mobile-nav-drawer ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className="mobile-nav-list" role="list">
          {navLinks.map((link, idx) => (
            <li
              key={link.id}
              className="mobile-nav-item"
              style={{ transitionDelay: `${idx * 60}ms` }}
            >
              <Link
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li
            className="mobile-nav-item mobile-nav-cta-item"
            style={{ transitionDelay: `${navLinks.length * 60}ms` }}
          >
            <Link
              href="/#contact"
              className="btn btn-primary button-md mobile-nav-link mobile-nav-cta-btn"
              onClick={() => setIsOpen(false)}
            >
              <span>Get In Touch</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
