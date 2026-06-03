import React, { useEffect, useState } from 'react';
import { Users, Code, CircleCheckBig, } from 'lucide-react';

const TERMINAL_LINES = [
  { delay: 0, text: '$ python jornada_engenharia.py', color: '#079e34ff' },
  { delay: 600, text: '', color: '#94A3B8' },
  { delay: 900, text: 'Iniciando programa...', color: '#64748B' },
  { delay: 1400, text: '✓ Bloco 1: Lógica de Programação', color: 'var(--brand-color)' },
  { delay: 1900, text: '✓ Bloco 2: Python Estruturado', color: 'var(--brand-color)' },
  { delay: 2400, text: '✓ Bloco 3: Web com Django', color: 'var(--brand-color)' },
  { delay: 2900, text: '✓ Bloco 4: AI & Data Science', color: 'var(--brand-color)' },
  { delay: 3400, text: '', color: '#94A3B8' },
  { delay: 3700, text: 'Status: Vagas disponíveis para próxima turma ', color: '#079e34ff' },
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
            
            <div className="hero-badge">
            </div>
            {/* Headline */}
            <h1 className="hero-headline">
              Programação Sem Complicação, com uma
              <br />
              <span className="hero-headline-gradient">
                Professora Reconhecida pela Didática
              </span>
              
            </h1>

            {/* Subtext */}
            <p className="hero-subtext">
              Aulas particulares de tecnologia para,  
              <span className="hero-subtext-highlight"> iniciantes e universitários</span>{' '}
              com explicações claras, paciência e foco total no seu reu ritmo de aprendizagem.{' '}
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a href="https://api.whatsapp.com/send/?phone=5565996415991&text=Quero+uma+mentoria+especializada+da+professora+Amanda!+(TESTE)!&type=phone_number&app_absent=" className="btn-hero-primary">
                <Code size={18} />Quero Agendar uma Aula
              </a>
              <a href="https://chat.whatsapp.com/KHvRMshZNx6KyOTYD4qRbx" className="btn-hero-secondary">
                <Users size={18} />Lista de Espera
              </a>
            </div>

            {/* Stats bar */}
            
          </div>

          {/* Right content — Terminal */}
          <div className="hidden lg:flex" style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '100%', maxWidth: '500px' }}>
              <TerminalWindow />

              {/* Mini decoration below terminal */}
              <div className="terminal-decoration-group">
                <div className="terminal-decoration-item">
                  <div className="terminal-status-dot" />
                  
                </div>
                <div className="terminal-tag">
                  <span style={{ color: '#64748B', fontSize: '12px', fontFamily: 'monospace' }}>
                    
                  </span>
                </div>
              </div>
              <div className="hero-badge">
              <CircleCheckBig size={20} color="#13f622"  />
              <span className="hero-badge-text">
                Primeira Aula Experimental | Horários Flexíveis
              </span>
        </div>
              {/* <div className="hero-stats-bar">
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
            </div> */}
            </div>
          </div>
        </div>
        {/* <div className="hero-badge">
              <CircleCheckBig size={20} color="#13f622"  />
              <span className="hero-badge-text">
                Primeira Aula Experimental | Horários Flexíveis
              </span>
        </div> */}
      </div>
    </section>
    
  );
}
