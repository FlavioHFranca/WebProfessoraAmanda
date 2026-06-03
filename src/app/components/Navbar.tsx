import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import { Users, Code, CircleCheckBig, } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Jornada', href: '#jornada' },
  { label: 'Instrutora', href: '#instrutora' },
  { label: 'Combos', href: '#combos' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-transparent'}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#" className="logo-link">
          <div className="logo-container">
            <div className="logo-icon-bg">
              <img src=".\src\styles\img\logo_branca_amanda.png" alt="Logo" />
            </div>
            <div className="brand-info">
              <div className="brand-name">
                Prof. Amanda Xavier
              </div>
              <div className="brand-subtitle">
                Mentoria em Programação
              </div>
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-item"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send/?phone=5565996415991&text=Quero+uma+mentoria+especializada+da+professora+Amanda!+(TESTE)!&type=phone_number&app_absent="
            className="btn-cta-nav"
          >
            Agendar uma Aula
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X size={24} color="#94A3B8" />
          ) : (
            <Menu size={24} color="#94A3B8" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="mobile-nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send/?phone=5565996415991&text=Quero+uma+mentoria+especializada+da+professora+Amanda!+(TESTE)!&type=phone_number&app_absent="
            onClick={() => setMobileOpen(false)}
            className="mobile-cta"
          >
            Agendar uma Aula
          </a>
        </div>
      )}
    </nav>
  );
}
