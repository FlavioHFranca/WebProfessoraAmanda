import React, { useState } from 'react';
import { Check, Globe, Brain, ArrowRight, Shield, Zap, GitBranch, Terminal } from 'lucide-react';

const TIERS = [
  {
    id: 'web',
    url: 'https://hotmart.com/pt-BR/club/amanda-xavier',
    tag: 'Jornada Web',
    name: 'Jornada Web',
    description: 'Para quem quer construir aplicações web completas e trabalhar como desenvolvedor full-stack.',
    price: 'R$ 997',
    installment: '12x R$ 97',
    icon: Globe,
    accentColor: '#a867d1',
    glowColor: 'rgba(189,29,176,0.25)',
    featured: false,
    blocks: [
      { icon: GitBranch, name: 'Bloco 1', desc: 'Lógica de Programação' },
      { icon: Terminal, name: 'Bloco 2', desc: 'Python Estruturado' },
      { icon: Globe, name: 'Bloco 3', desc: 'Web com Django' },
    ],
    features: [
      '120h+ de conteúdo em vídeo',
      'Projetos práticos em cada bloco',
      'Comunidade exclusiva no Discord',
      'Mentoria em grupo quinzenal',
      'Suporte por 12 meses',
      'Certificado de conclusão',
      'Acesso vitalício ao conteúdo',
    ],
    cta: 'Quero a Jornada Web',
  },
  {
    id: 'dados',
    url: 'https://hotmart.com/pt-BR/club/amanda-xavier',
    tag: 'Jornada de Dados',
    name: 'Jornada de Dados',
    description: 'Para quem quer dominar Inteligência Artificial e se tornar especialista em Data Science.',
    price: 'R$ 1.197',
    installment: '12x R$ 117',
    icon: Brain,
    accentColor: '#a867d1',
    glowColor: 'rgba(189,29,176,0.25)',
    featured: true,
    blocks: [
      { icon: GitBranch, name: 'Bloco 1', desc: 'Lógica de Programação' },
      { icon: Terminal, name: 'Bloco 2', desc: 'Python Estruturado' },
      { icon: Brain, name: 'Bloco 4', desc: 'AI & Data Science' },
    ],
    features: [
      '140h+ de conteúdo em vídeo',
      'Projetos de ML reais de mercado',
      'Comunidade exclusiva no Discord',
      'Mentoria em grupo quinzenal',
      'Suporte por 12 meses',
      'Certificado de conclusão',
      'Acesso vitalício ao conteúdo',
      'Sessão 1:1 com a Prof. Amanda',
    ],
    cta: 'Quero a Jornada de Dados',
  },
];

export function PricingSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="combos" className="pricing-section">
      {/* Background decoration */}
      <div className="pricing-glow-bg" />

      <div className="pricing-container">
        {/* Section header */}
        <div className="pricing-header">
          <h2 className="pricing-title">
            Escolha sua{' '}
            <span className="pricing-title-highlight">
              Jornada
            </span>
          </h2>
          <p className="pricing-subtitle">
            Escolha a jornada que melhor se alinha ao seu objetivo de carreira. Ambas incluem os blocos fundamentais.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="pricing-grid">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            const isHovered = hoveredId === tier.id;
            return (
              <div
                key={tier.id}
                onMouseEnter={() => setHoveredId(tier.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`pricing-card ${tier.featured ? 'pricing-card-featured' : ''}`}
                style={{
                  borderColor: isHovered || tier.featured ? tier.accentColor + '35' : 'rgba(255,255,255,0.08)',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? `0 24px 60px rgba(0,0,0,0.4), 0 0 50px ${tier.glowColor}` : tier.featured ? `0 0 40px ${tier.glowColor}` : 'none',
                }}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="featured-badge">
                    Mais Completa
                  </div>
                )}

                {/* Header */}
                <div className="pricing-card-header">
                  <div className="pricing-title-row">
                    <div className="pricing-icon-box">
                      <Icon size={40} color={tier.accentColor} />
                    </div>
                    <h3 className="pricing-card-title">
                      {tier.name}
                    </h3>
                  </div>

                  <p className="pricing-card-desc">
                    {tier.description}
                  </p>
                </div>

                {/* Blocks included */}
                <div className="blocks-included-box">
                  <p className="blocks-label">
                    Blocos Incluídos
                  </p>
                  <div className="blocks-list">
                    {tier.blocks.map((block) => {
                      const BlockIcon = block.icon;
                      return (
                        <div key={block.name} className="block-item-tag">
                          <BlockIcon size={12} color={tier.accentColor} />
                          <span className="block-item-text">
                            {block.desc}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Divider */}
                <div className="pricing-card-divider" />
                {/* Features */}
                <div className="features-container">
                  {tier.features.map((feat, i) => (
                    <div
                      key={i}
                      className="feature-line"
                      style={{ borderBottom: i < tier.features.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}
                    >
                      <div className="feature-check-box">
                        <Check size={15} color={tier.accentColor} strokeWidth={3} />
                      </div>
                      <span className="feature-text-content">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://hotmart.com/pt-br/club/amanda-xavier" target="_blank"
                  className="btn-pricing-main"
                  style={{ boxShadow: `0 0 24px ${tier.glowColor}` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${tier.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 24px ${tier.glowColor}`;
                  }}
                >
                  {tier.cta} <ArrowRight size={16} />
                </a>

                {/* Security note */}
                <div className="security-tag">
                  <Shield size={18} color="#64748B" />
                  <span className="security-text">Garantia de 7 dias • Pagamento seguro</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="pricing-footer-note">
          <a href="https://api.whatsapp.com/send/?phone=5565996415991&text=Quero+uma+mentoria+especializada+da+professora+Amanda!&type=phone_number&app_absent=" target="_blank" rel="noopener noreferrer">
            <div className="pricing-footer-badge-box">
            <span className="pricing-footer-text-info">
              Precisa{' '}
              <span className="pricing-footer-highlight">4 blocos completos </span>
              ? Fale diretamente pelo WhatsApp para uma proposta personalizada.
            </span>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}
