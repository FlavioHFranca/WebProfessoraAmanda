import React from "react";
import { Star, Quote } from "lucide-react";
// import alexAvatar from "../styles/img/reviewAlunos/AlexLima.png";

const TESTIMONIALS = [
  {
    name: "Alex Antonio de Lima",
    avatar: "AL",
    color: "#BD1DB0",
    stars: 5,
    text: "A professora Amanda é muito competente, tem domínio do conteúdo e ótima didática, também é atenciosa com seus alunos. Fui aluno dela no curso de Técnico em Informática no Senac PE.",
  },
  {
    name: "Vanessa Souza",
    avatar: "VS",
    color: "#F59E0B",
    stars: 5,
    text: "Amanda é uma excelente professora além de encantadora. Está ensinando meu pai, de 54 anos, e ele está aprendendo muito! Sou muito grata por ter encontrado essa prof maravilhosa 💕💕💕💕 …",
  },
  {
    name: "ALINE DA SILVA XAVIER",
    avatar: "AX",
    color: "#3B82F6",
    stars: 5,
    text: "Achava que programação era um bicho de sete cabeças até ter com a professora Amanda, muito paciente e explica muito.😍",
  },
];

const METRICS = [
  { value: "500+", label: "Alunos formados", desc: "Em todos os blocos" },
  { value: "87%", label: "Empregados em tech", desc: "Dentro de 12 meses" },
  { value: "4.97", label: "Avaliação média", desc: "Média de todos os blocos" },
  {
    value: "R$6.200",
    label: "Salário médio inicial",
    desc: "Dos alunos formados",
  },
];

export function SocialProofSection() {
  return (
    <section className="social-proof-section">
      {/* Divider line top */}
      <div className="social-proof-divider-top" />

      <div className="social-proof-container">
        {/* Section header */}
        <div className="social-proof-header">
          <h2 className="social-proof-title">
            O que dizem os{" "}
            <span className="social-proof-title-highlight">
              Meus Alunos?
            </span>
          </h2>
          {/* <p>
            Conheça os depoimentos e experiências de alunos que passaram pelas minhas aulas.
          </p> */}
        </div>

        {/* Testimonials */}
        <a
          href="https://www.google.com/maps/place/Professora+Amanda+Xavier/@-13.3783201,-73.0734728,4z/data=!4m8!3m7!1s0x939947ff03f73229:0xa19291f6a59a2cff!8m2!3d-14.4095262!4d-51.31668!9m1!1b1!16s%2Fg%2F11ml2yklkr?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-profile">
                  <div
                    className="testimonial-avatar"
                    style={{
                      background: `${t.color}20`,
                      border: `1px solid ${t.color}40`,
                      color: t.color,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div className="testimonial-info">
                    <div className="testimonial-name">{t.name}</div>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={15} color="#F59E0B" fill="#F59E0B" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
              </div>
            ))}
          </div>{" "}
        </a>
      </div>
    </section>
  );
}
