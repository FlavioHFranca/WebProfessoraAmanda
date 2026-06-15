import React from 'react';
import { Code2, Instagram, Linkedin, Mail, FileUser } from 'lucide-react';
import logoAmanda from '@/styles/img/logo_branca_amanda.png'

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
  { Icon: Instagram, href: 'https://www.instagram.com/prof.amanda.xavier/', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/prof-amanda-xavier/', label: 'LinkedIn' },
  { Icon: FileUser, href: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8189271J3', label: 'Lattes' },
  { Icon: Mail, href: 'mailto:[EMAIL_ADDRESS]', label: 'Email' },
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
                <img src={logoAmanda} alt="Logo Prof. Amanda Xavier" className="h-8 w-auto"/>
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
              Transformo desafios complexos em código claro. O foco é a sua capacidade de pensar, não de copiar.
            </p>

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
              href="mailto:[EMAIL_ADDRESS]"
              className="footer-email-link"
            >
              [EMAIL_ADDRESS]
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2025 Amanda Xavier. Todos os direitos reservados.
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
