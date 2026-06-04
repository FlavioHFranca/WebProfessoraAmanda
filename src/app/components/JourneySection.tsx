import React from 'react';
import { GitBranch, Terminal, Globe, Brain } from 'lucide-react';

interface ProgressBarProps {
  label: string;
  value: number;
}
function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="progress-item">
      <div className="progress-info">
        <span className="progress-label">{label}</span>
        <span className="progress-value">{value}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${value}%`,
            background: 'linear-gradient(90deg, #BD1DB0, #D038CB)',
          }}
        />
      </div>
    </div>
  );
}

interface CodeSnippetProps {
  code: string[];
}
function CodeSnippet({ code }: CodeSnippetProps) {
  return (
    <div className="code-snippet-box">
      {code.map((line, i) => {
        const isComment = line.trim().startsWith('#');
        const isSuccess = line.includes('✓') || line.includes('OK');
        return (
          <div
            key={i}
            className="code-line"
            style={{
              color: isSuccess ? '#BD1DB0' : isComment ? '#64748B' : '#94A3B8',
            }}
          >
            {line || '\u00A0'}
          </div>
        );
      })}
    </div>
  );
}

const BLOCKS = [
  {
    number: '01',
    icon: GitBranch,
    label: 'Bloco 1',
    title: 'Lógica de Programação',
    desc: 'Base sólida em lógica computacional, algoritmos, estruturas de dados e raciocínio analítico para resolver qualquer problema.',
    skills: [
      { label: 'Algoritmos', value: 92 },
      { label: 'Estruturas de Dados', value: 85 },
      { label: 'Lógica Booleana', value: 100 },
    ],
    code: ['# Fundamentos da mente do dev', 'def resolver(problema):', "    return logica.aplicar(problema)", '', '# ✓ Pronto para o próximo nível'],
    accent: '#BD1DB0',
    colSpan: 'lg:col-span-7',
    tag: 'Fundamento Computacional',
  },
  {
    number: '02',
    icon: Terminal,
    label: 'Bloco 2',
    title: 'Python Estruturado',
    desc: 'Domine Python com orientação a objetos, módulos, testes e as melhores práticas de código limpo.',
    skills: [
      { label: 'OOP', value: 88 },
      { label: 'Módulos & Libs', value: 95 },
    ],
    code: ['class Engineer:', '  def __init__(self):', '    self.ready = True', '', '# ✓ 200 OK'],
    accent: '#3B82F6',
    colSpan: 'lg:col-span-5',
    tag: 'Introdução a Linguagem',
  },
  {
    number: '03',
    icon: Globe,
    label: 'Bloco 3',
    title: 'Web com Django',
    desc: 'Construa aplicações web completas com Django, APIs RESTful, banco de dados e deploy em produção.',
    skills: [
      { label: 'Django REST', value: 90 },
      { label: 'PostgreSQL', value: 80 },
    ],
    code: ['@login_required', 'def dashboard(req):', '    # 200 OK ✓', '    return render(...)'],
    accent: '#8B5CF6',
    colSpan: 'lg:col-span-5',
    tag: 'Full-Stack',
  },
  {
    number: '04',
    icon: Brain,
    label: 'Bloco 4',
    title: 'AI & Data Science',
    desc: 'Mergulhe em Machine Learning, análise de dados com Pandas e modelos de Inteligência Artificial aplicados ao mercado real.',
    skills: [
      { label: 'Machine Learning', value: 87 },
      { label: 'Pandas / NumPy', value: 94 },
      { label: 'Modelos de IA', value: 79 },
    ],
    code: [''],
    accent: '#F59E0B',
    colSpan: 'lg:col-span-7',
    tag: 'Inteligência Artificial',
  },
];

export function JourneySection() {
  return (
    <section id="jornada" className="journey-section">
      {/* Divider line */}
      <div className="journey-divider-top" />

      <div className="journey-container">
        {/* Section header */}
        <div className="journey-header">
          <div className="journey-badge">
            <span className="journey-badge-text">
              Sistema de Aprendizado
            </span>
          </div>
          <div className="journey-header-row">
            <h2 className="journey-title">
              A Jornada em{' '}
              <span className="journey-title-highlight">
                4 Blocos
              </span>
            </h2>
            <p className="journey-header-desc">
              Cada bloco é uma camada do seu stack de habilidades. Progressivo, estruturado e direto ao ponto.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {BLOCKS.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.number}
                data-block={block.number}
                className={`bento-item col-span-1 ${block.colSpan}`}
              >
                {/* Background glow */}
                <div
                  className="bento-glow"
                  style={{
                    background: `radial-gradient(ellipse, ${block.accent}10 0%, transparent 70%)`,
                  }}
                />

                {/* Header row */}
                <div className="bento-header">
                  <div className="bento-icon-group">
                    <div
                      className="bento-icon-box"
                      style={{
                        background: `${block.accent}18`,
                        border: `1px solid ${block.accent}30`,
                      }}
                    >
                      <Icon size={20} color={block.accent} />
                    </div>
                    <div>
                      <div
                        className="bento-label"
                        style={{ color: block.accent }}
                      >
                        {block.label}
                      </div>
                      <h3 className="bento-title">
                        {block.title}
                      </h3>
                    </div>
                  </div>

                  {/* Block number */}
                  <span className="bento-number">
                    {block.number}
                  </span>
                </div>

                {/* Description */}
                <p className="bento-desc">
                  {block.desc}
                </p>

                {/* Tag */}
                <div
                  className="bento-tag-box"
                  style={{
                    background: `${block.accent}12`,
                    border: `1px solid ${block.accent}22`,
                  }}
                >
                  <span
                    className="bento-tag-text"
                    style={{ color: block.accent }}
                  >
                    {block.tag}
                  </span>
                </div>

                {/* Progress bars */}
                <div>
                  {block.skills.map((skill) => (
                    <ProgressBar key={skill.label} label={skill.label} value={skill.value} />
                  ))}
                </div>

                {/* Code snippet */}
                <CodeSnippet code={block.code} />
              </div>
            );
          })}
        </div>

        {/* Bottom connector line */}
        <div className="journey-footer">
          <div className="journey-footer-badge">
            <div className="journey-footer-dot" />
            <span className="journey-footer-text">
              4 blocos • +120h de conteúdo •{' '}
              <span className="journey-footer-highlight">Projetos reais em cada etapa</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
