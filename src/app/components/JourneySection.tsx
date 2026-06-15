import React from 'react';
import { GitBranch, Terminal, Globe, Brain } from 'lucide-react';

interface ProgressBarProps {
  label: string;
  value: number;
}
function ProgressBar({ label }: ProgressBarProps) {
  return (
    <div className="progress-item">
      <div className="progress-info">
          <span className="progress-label">{label}</span>
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
              color: isSuccess ? '#a867d1' : isComment ? '#08a337ff' : '#d2d6dbff',
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
    url:'https://hotmart.com/pt-br/marketplace/produtos/bloco-1-logica-de-programacao/P101799744W',
    number: '01',
    icon: GitBranch,
    label: 'Bloco 1',
    title: 'Lógica de Programação',
    desc: 'Base sólida em lógica computacional, algoritmos, estruturas de dados e raciocínio analítico para resolver qualquer problema.',
    skills: [
      { label: 'Algoritmos'},
      { label: 'Estruturas de Dados'},
      { label: 'Lógica Booleana'},
    ],
    code: ['# Fundamentos da mente do dev', 'def resolver(problema):', "    return logica.aplicar(problema)", '', '# ✓ Pronto para o próximo nível'],
    accent: '#BD1DB0',
    colSpan: 'lg:col-span-7',
    tag: 'Fundamento Computacional',
  },
  {
    url:'https://hotmart.com/pt-br/marketplace/produtos/bloco-2-introducao-ao-python/Q101752453E',
    number: '02',
    icon: Terminal,
    label: 'Bloco 2',
    title: 'Python Estruturado',
    desc: 'Domine Python com orientação a objetos, módulos, testes e as melhores práticas de código limpo.',
    skills: [
      { label: 'Programação Orientada a Objetos', value: 88 },
      { label: 'Módulos & Bibliotecas', value: 95 },
    ],
    code: ['class Engineer:', '  def __init__(self):', '    self.ready = True', '', '# ✓ 200 OK'],
    accent: '#3B82F6',
    colSpan: 'lg:col-span-5',
    tag: 'Introdução a Linguagem',
  },
  {
    url:'https://hotmart.com/pt-br/marketplace/produtos/bloco-3-desenvolvimento-web-com-django/P101755269N',
    number: '03',
    icon: Globe,
    label: 'Bloco 3',
    title: 'Web com Django',
    desc: 'Construa aplicações web completas com Django, APIs RESTful, banco de dados e deploy em produção.',
    skills: [
      { label: 'Django REST', value: 90 },
      { label: 'SQL Lite', value: 80 },
    ],
    code: ['@login_required', 'def dashboard(req):', '    # 200 OK ✓', '    return render(...)'],
    accent: '#8B5CF6',
    colSpan: 'lg:col-span-5',
    tag: 'Backend',
  },
  {
    url:'https://hotmart.com/pt-br/marketplace/produtos/bloco-4-analise-de-dados-e-ia/Q101760178L',
    number: '04',
    icon: Brain,
    label: 'Bloco 4',
    title: 'AI & Data Science',
    desc: 'Mergulhe em Machine Learning, análise de dados com Pandas e modelos de Inteligência Artificial aplicados ao mercado real.',
    skills: [
      { label: 'Machine Learning'},
      { label: 'Pandas / NumPy'},
      { label: 'Modelos de IA'},
    ],
    code: ['model.fit(X_train, y_train)', 'score = model.score(X_test)', 'print(f"Acurácia: {score:.1%}")', '# Acurácia: 94.7% ✓'],
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
          
          <div className="journey-header-row">
            <h2 className="journey-title">
              Sistema de Aprendizado em {' '}
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
              <a href={block.url} target="_blank" rel="noopener noreferrer"
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
                    >
                          <Icon size={32} color={block.accent} />
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
                    <ProgressBar key={skill.label} label={skill.label} value={0}/>
                  ))}
                  </div>
              </a>
            );
          })}
        </div>

        {/* Bottom connector line */}
        <div className="journey-footer">
          <div className="journey-footer-badge">
            <div className="journey-footer-dot" />
            <span className="journey-footer-text">
              4 blocos | +120h de conteúdo  | {' '}
              <span className="journey-footer-highlight">Projetos reais em cada etapa</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
