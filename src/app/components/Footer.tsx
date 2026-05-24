import React from 'react';
import { Code2, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const FOOTER_LINKS = [
  {
    label: 'Programa',
    links: [
      { name: 'A Jornada', href: '#jornada' },
      { name: 'Bloco 1 – Lógica', href: '#jornada' },
      { name: 'Bloco 2 – Python', href: '#jornada' },
      { name: 'Bloco 3 – Django', href: '#jornada' },
      { name: 'Bloco 4 – AI/ML', href: '#jornada' },
    ],
  },
  {
    label: 'Instrutora',
    links: [
      { name: 'Prof. Amanda Xavier', href: '#instrutora' },
      { name: 'Metodologia', href: '#instrutora' },
      { name: 'Certificação', href: '#faq' },
    ],
  },
  {
    label: 'Combos',
    links: [
      { name: 'Jornada Web', href: '#combos' },
      { name: 'Jornada Dados', href: '#combos' },
      { name: 'FAQ', href: '#faq' },
    ],
  },
];

const SOCIALS = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Github, href: '#', label: 'GitHub' },
  { Icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <div className="footer-logo-box">
                <Code2 size={18} color="#0B0F1A" strokeWidth={2.5} />
              </div>
              <div>
                <div className="footer-brand-name">
                  Amanda Xavier
                </div>
                <div className="footer-brand-subtitle">
                  Mentoria em Programação
                </div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Transformando curiosidade em engenharia de software, um bloco de cada vez. Do zero à especialização.
            </p>

            {/* Terminal info */}
            <div className="footer-terminal-box">
              <div className="footer-terminal-line">$ system_status</div>
              <div className="footer-terminal-success">✓ Programa: Ativo</div>
              <div className="footer-terminal-success">✓ Vagas: Abertas</div>
              <div className="footer-terminal-line">$ _</div>
            </div>
          </div>

          {/* Links columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.label} className="footer-col">
              <h4 className="footer-col-title">
                {col.label}
              </h4>
              <div className="footer-link-list">
                {col.links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="footer-link"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">
              Contato
            </h4>
            <div className="footer-social-row">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer-social-btn"
                >
                  <Icon size={15} color="#64748B" />
                </a>
              ))}
            </div>
            <a
              href="mailto:contato@amandaxavier.dev"
              className="footer-email-link"
            >
              contato@amandaxavier.dev
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 Amanda Xavier. Todos os direitos reservados.
          </p>
          <div className="footer-bottom-links">
            {['Termos de Uso', 'Privacidade', 'Política de Reembolso'].map((item) => (
              <a
                key={item}
                href="#"
                className="footer-bottom-link"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
