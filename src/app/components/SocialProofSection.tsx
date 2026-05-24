import React from 'react';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Lucas Fernandes',
    role: 'Desenvolvedor Full-Stack @ Nubank',
    initials: 'LF',
    color: '#BD1DB0',
    stars: 5,
    text: 'Em 7 meses fui do zero ao meu primeiro emprego como dev. A Amanda não ensina só código — ela ensina a pensar. O Bloco 1 de Lógica foi o diferencial que os bootcamps não me deram.',
  },
  {
    name: 'Carla Menezes',
    role: 'Data Scientist @ Itaú',
    initials: 'CM',
    color: '#F59E0B',
    stars: 5,
    text: 'Fiz a Jornada Dados depois de anos com medo de programação. A progressão dos blocos é perfeita. Hoje trabalho com ML em produção e mal acredito que fui do "o que é Python?" a esse ponto.',
  },
  {
    name: 'Rafael Santos',
    role: 'Backend Engineer @ Stone',
    initials: 'RS',
    color: '#3B82F6',
    stars: 5,
    text: 'A mentoria em grupo com a Amanda é ouro. Você sente que tem uma engenheira sênior na sua equipe, revisando seus projetos e te desafiando a escrever código melhor a cada semana.',
  },
];

const METRICS = [
  { value: '500+', label: 'Alunos formados', desc: 'Em todos os blocos' },
  { value: '87%', label: 'Empregados em tech', desc: 'Dentro de 12 meses' },
  { value: '4.97', label: 'Avaliação média', desc: 'Média de todos os blocos' },
  { value: 'R$6.200', label: 'Salário médio inicial', desc: 'Dos alunos formados' },
];

export function SocialProofSection() {
  return (
    <section className="social-proof-section">
      {/* Divider line top */}
      <div className="social-proof-divider-top" />

      <div className="social-proof-container">
        {/* Section header */}
        <div className="social-proof-header">
          <div className="social-proof-badge">
            <span className="social-proof-badge-text">
              Depoimentos Reais 
            </span>
          </div>
          <h2 className="social-proof-title">
            O que dizem os{' '}
            <span className="social-proof-title-highlight">
              Alunos da mentoria
            </span>
          </h2>
        </div>

        {/* Metrics bar */}
        <div className="results-metrics-bar">
          {METRICS.map((metric, i) => (
            <div key={i} className="results-metric-item">
              <div className="results-metric-value">
                {metric.value}
              </div>
              <div className="results-metric-label">
                {metric.label}
              </div>
              <div className="results-metric-desc">
                {metric.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
            >
              {/* Quote icon */}
              <div className="testimonial-quote-wrapper">
                <Quote size={24} color={`${t.color}60`} />
              </div>

              {/* Stars */}
              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={13} color="#F59E0B" fill="#F59E0B" />
                ))}
              </div>

              {/* Text */}
              <p className="testimonial-text">
                "{t.text}"
              </p>

              {/* Profile */}
              <div className="testimonial-profile">
                <div
                  className="testimonial-avatar"
                  style={{
                    background: `${t.color}20`,
                    border: `1px solid ${t.color}40`,
                    color: t.color,
                  }}
                >
                  {t.initials}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">
                    {t.name}
                  </div>
                  <div className="testimonial-role">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
