import React from 'react';
import { Award, BookOpen, Users, Star, ExternalLink } from 'lucide-react';
import fotoSobreEla from '@/styles/img/sobreela.png';

const METRICS = [
  { icon: BookOpen, label: 'Formação', value: 'Dra. em Ciência da Computação', sub: 'UFPE — Universidade Federal de Pernambuco' },
  { icon: Users, label: 'Alunos Formados', value: '150+', sub: 'Em toda trajetória acadêmica' },
  { icon: Star, label: 'Avaliação', value: '5 / 5.0', sub: 'Média geral do programa' },
  { icon: Award, label: 'Experiência', value: '4+ Anos', sub: 'Indústria & Ensino' },
];

const EXPERIENCE = [
  
  { role: 'Professora Comercial e Aprendizagem ', company: 'SENAC-PE', period: '2022–2023' },
  { role: 'Professora Engenharia de Produção', company: 'IFPE-Caruaru', period: '2023-2024' },
  { role: 'Professora ', company: 'CIN-UFPE', period: '2024–2025' },
  { role: 'Professora Universitária UNEMAT', company: 'Mentoria Própria', period: '2025–Presente' },
];

export function AuthoritySection() {
  return (
    <section id="instrutora" className="authority-section">
      {/* Background glow */}
      <div className="authority-glow" />

      <div className="authority-container">
        {/* Section header */}
        <div className="authority-header">

          <h2 className="authority-title">
            Quem vai te guiar nessa{' '}
            <span className="authority-title-highlight">
              jornada?
            </span>
          </h2>
        </div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Photo card */}
          <div className="col-span-1 lg:col-span-4 photo-card">
            <div className="photo-wrapper">
              <img
                src={fotoSobreEla}
                alt="Prof. Amanda Xavier"
                className="photo-img"
              />
              {/* Overlay gradient */}
              <div className="photo-overlay" />
            </div>

            {/* Name overlay */}
            <div className="photo-info">
              <h3 className="photo-name">
                Prof. Amanda Xavier
              </h3>
              <p className="photo-role">
                Dra. em Computação · Ma. Engenharia de Produção · Mentora · Professora Universitária
              </p>
              <p className="photo-desc">
                Aprenda programação de forma leve, prática e motivadora. Com mais de 4 anos de experiência, ajudo centenas de alunos a superarem o medo de programar e conquistarem espaço na área de TI. Minha missão é tornar a programação acessível para todos, mostrando que é possível aprender do zero com uma didática simples e descomplicada.
              </p>

              {/* Social links */}
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://lattes.cnpq.br/9840477358200438"
                  className="social-link-btn"
                >
                  Lattes <ExternalLink size={12} />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/prof-amanda-xavier/"
                  className="social-link-btn"
                >
                  LinkedIn <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="col-span-1 lg:col-span-8 flex flex-col gap-4">
            {/* System Metrics */}
            <div className="metrics-card">
              <div className="metrics-header">
                <div className="metrics-dot" />
                <span className="metrics-title">
                  Dados_da_Mentora.JSON
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {METRICS.map((metric, i) => {
                  const Icon = metric.icon;
                  return (
                    <div key={i} className="metric-item-card">
                      <div className="metric-icon-box">
                        <Icon size={22} color="#a867d1" />
                      </div>
                      <div>
                        <div className="metric-label">
                          {metric.label}
                        </div>
                        <div className="metric-value">
                          {metric.value}
                        </div>
                        <div className="metric-sub">{metric.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Experience timeline */}
            <div className="timeline-card">
              <div className="metrics-header">
                <div className="metrics-dot" />
                <span className="metrics-title">
                  Histórico_Profissional.log
                </span>
              </div>

              <div className="flex flex-col gap-0">
                {EXPERIENCE.map((exp, i) => (
                  <div
                    key={i}
                    className="timeline-item"
                    style={{ paddingBottom: i < EXPERIENCE.length - 1 ? '20px' : '0' }}
                  >
                    {/* Timeline line */}
                    <div className="timeline-marker-box">
                      <div
                        className="timeline-dot"
                        style={{
                          background: i === EXPERIENCE.length - 1 ? '#77126fff' : 'rgba(255,255,255,0.15)',
                          border: i === EXPERIENCE.length - 1 ? '2px solid rgba(189,29,176,0.4)' : '2px solid rgba(255,255,255,0.1)',
                          boxShadow: i === EXPERIENCE.length - 1 ? '0 0 10px rgba(189,29,176,0.5)' : 'none',
                        }}
                      />
                      {i < EXPERIENCE.length - 1 && (
                        <div className="timeline-line" />
                      )}
                    </div>

                    <div>
                      <div className="timeline-role">
                        {exp.role}
                      </div>
                      <div className="timeline-details">
                        <span className="timeline-company">{exp.company}</span>
                        <span className="timeline-period">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal quote */}
            <div className="terminal-quote-box">
              <span className="terminal-prompt">$ </span>
              <span style={{ color: '#64748B' }}>echo </span>
              <span style={{ color: '#94A3B8' }}>"</span>
              <span style={{ color: '#F1F5F9', fontSize: '13px' }}>Transformo desafios complexos em código claro. O foco é a sua capacidade de pensar, não de copiar.
              </span>
              <span style={{ color: '#94A3B8' }}>"</span>
              <span style={{ color: '#94A3B8', marginLeft: '4px' }}>— Amanda Xavier</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
