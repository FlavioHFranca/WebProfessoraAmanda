import React from "react";
import { Star, Quote } from "lucide-react";
// import alexAvatar from "../styles/img/reviewAlunos/AlexLima.png";

const TESTIMONIALS = [
  {
    name: "Vinicius Leonidas",
    avatar: "VL",
    color: "#BD1DB0",
    stars: 5,
    url: "https://www.google.com/maps/contrib/104113670950334973418/place/ChIJKTL3A_9HmZMR_yyapfaRkqE/@-14.4095262,-51.3271623,15z/data=!4m6!1m5!8m4!1e1!2s104113670950334973418!3m1!1e1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI2MDcwOC4wIKXMDSoASAFQAw%3D%3D",
    text: "Tive aula de computação eletrônica sobre como programar em C, os slides dela e didática interativa ajudava muito a aprender de forma fácil e rápido, começávamos com a teoria nos slides e logo em seguidas ia pra uma atividade em prática com ajuda, onde...",
  },
  {
    name: "Vanessa Souza",
    avatar: "VS",
    color: "#F59E0B",
    stars: 5,
    url: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2pkNk9IcFZRaTFyYkVneFpsSjJPV1ZMY1dwR00yYxAB!2m1!1s0x0:0xa19291f6a59a2cff!3m1!1s2@1:CAIQACodChtycF9oOjd6OHpVQi1rbEgxZlJ2OWVLcWpGM2c%7C%7C?entry=tts&g_ep=EgoyMDI2MDYxNi4wIPu8ASoASAFQAw%3D%3D&skid=1fdf8764-4ef7-4e71-96e9-7783fe19cc10",
    text: "Amanda é uma excelente professora além de encantadora. Está ensinando meu pai, de 54 anos, e ele está aprendendo muito! Sou muito grata por ter encontrado essa prof maravilhosa 💕💕💕💕 …",
  },
  {
    name: "ALINE DA SILVA XAVIER",
    avatar: "AX",
    color: "#3B82F6",
    stars: 5,
    url: "https://maps.app.goo.gl/hpTX3qzGR5JAwqPB8",
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
        </div>

        {/* Testimonials */}
        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <a key={i} className="testimonial-card" href={t.url} target="_blank" rel="comentario-alunos-amandaxavier">
                
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
              </a>
            ))}
          </div>{" "}
        
      </div>
    </section>
  );
}
