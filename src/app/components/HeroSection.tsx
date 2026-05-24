import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const TERMINAL_LINES = [
  { delay: 0, text: '$ python jornada_engenharia.py', color: '#079e34ff' },
  { delay: 600, text: '', color: '#94A3B8' },
  { delay: 900, text: 'Iniciando programa...', color: '#64748B' },
  { delay: 1400, text: '✓ Bloco 1: Lógica de Programação', color: '#A307E5' },
  { delay: 1900, text: '✓ Bloco 2: Python Estruturado', color: '#A307E5' },
  { delay: 2400, text: '✓ Bloco 3: Web com Django', color: '#A307E5' },
  { delay: 2900, text: '✓ Bloco 4: AI & Data Science', color: '#A307E5' },
  { delay: 3400, text: '', color: '#94A3B8' },
  { delay: 3700, text: 'Status: Vagas disponíveis para próxima turma ', color: '#08df4fff' },
];

const STATS = [
  { value: '100+', label: 'Alunos Formados' },
  { value: '4', label: 'Blocos de Conteúdo' },
  { value: '98%', label: 'Satisfação' },
  { value: '8+', label: 'Anos de Experiência' },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    TERMINAL_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay + 500);
    });
  }, []);

  return (
    <div className="terminal-window">
      {/* Terminal header */}
      <div className="terminal-header">
        <div className="terminal-dots">
          <div className="terminal-dot dot-red" />
          <div className="terminal-dot dot-yellow" />
          <div className="terminal-dot dot-green" />
        </div>
        <span className="terminal-title">
          ~/mentoria/jornada.py
        </span>
      </div>

      {/* Terminal body */}
      <div className="terminal-body">
        {TERMINAL_LINES.map((line, i) => (
          <div
            key={i}
            className="terminal-line"
            style={{
              opacity: visibleLines.includes(i) ? 1 : 0,
              transform: visibleLines.includes(i) ? 'translateY(0)' : 'translateY(4px)',
              transition: 'all 0.3s ease',
              color: line.color,
            }}
          >
            {line.text || '\u00A0'}
          </div>
        ))}
        {visibleLines.length > 0 && (
          <span className="terminal-cursor" />
        )}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      {/* Grid background */}
      <div className="hero-grid-bg" />

      {/* Radial glow */}
      <div className="hero-glow-top" />
      <div className="hero-glow-bottom" />

      <div className="hero-content-container">
        <div className="hero-layout-grid">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="hero-badge">
              <Zap size={14} color="#BD1DB0" fill="#BD1DB0" />
              <span className="hero-badge-text">
                Mentoria em Programação do Zero
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              Transforme sua
              <br />
              <span className="hero-headline-gradient">
                curiosidade
              </span>{' '}
              em
              <br />
              código
              <br />
              hoje mesmo
            </h1>

            {/* Subtext */}
            <p className="hero-subtext">
              Uma jornada em{' '}
              <span className="hero-subtext-highlight">4 blocos progressivos</span>{' '}
              — do zero absoluto à especialização em Web ou Data Science. Com a Prof. Amanda Xavier,
              você não aprende apenas a programar, você pensa como engenheira.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="#combos" className="btn-hero-primary">
                Iniciar minha Jornada <ArrowRight size={18} />
              </a>
              <a href="#jornada" className="btn-hero-secondary">
                Ver a Jornada
              </a>
            </div>

            {/* Stats bar */}
            <div className="hero-stats-bar">
              {STATS.map((stat, i) => (
                <div key={i} className="hero-stat-card">
                  <div className="hero-stat-value">
                    {stat.value}
                  </div>
                  <div className="hero-stat-label">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content — Terminal */}
          <div className="hidden lg:flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
              <TerminalWindow />

              {/* Mini decoration below terminal */}
              <div className="terminal-decoration-group">
                <div className="terminal-decoration-item">
                  <div className="terminal-status-dot" />
                  <span className="terminal-status-text">
                    Próxima turma:{' '}
                    <span className="terminal-status-highlight">Vagas Abertas</span>
                  </span>
                </div>
                <div className="terminal-tag">
                  <span style={{ color: '#64748B', fontSize: '12px', fontFamily: 'monospace' }}>
                    <span style={{ color: '#F59E0B' }}>⚡</span> Online
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
