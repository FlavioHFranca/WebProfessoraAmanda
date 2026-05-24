import React from "react";
import { ArrowRight, Zap } from "lucide-react";

export function CTASection() {
  return (
    <section className="cta-section">
      {/* Large glow behind card */}
      <div className="cta-glow-bg" />

      <div className="cta-container">
        <div className="cta-card-box">
          {/* Corner grid decoration */}
          <div className="cta-grid-bg" />

          <div className="cta-content-inner">
            <div className="cta-badge-box">
              <Zap size={13} color="#A307E5" fill="#b109f8ff" />
              <span className="cta-badge-text-info">
                Vagas Abertas — Turma 2026
              </span>
            </div>

            <h2 className="cta-main-title">
              Pronto(a) para{" "}
              <span className="cta-title-gradient-info">
                escrever seu primeiro
              </span>
              <br />
              commit como programador(a)
            </h2>

            <p className="cta-sub-desc">
              Junte-se a 100+ alunos que transformaram
              curiosidade em carreira real da programação.
            </p>

            <div className="cta-btn-group">
              <a
                href="#combos"
                className="btn-cta-main-primary"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 52px rgba(189,29,176,0.7), 0 4px 28px rgba(0,0,0,0.5)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(189,29,176,0.45), 0 4px 24px rgba(0,0,0,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                Iniciar minha Jornada <ArrowRight size={18} />
              </a>
              <a
                href="#faq"
                className="btn-cta-main-secondary"
              >
                Ainda tenho dúvidas
              </a>
            </div>

            {/* Guarantee note */}
            <p className="cta-security-info">
              🔒 Garantia incondicional de 7 dias · Sem risco,
              sem burocracia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
