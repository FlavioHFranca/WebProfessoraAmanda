import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Preciso ter experiência prévia em programação para começar?',
    answer: 'Não. O Bloco 1 foi desenhado especificamente para quem nunca programou. Começamos do zero — do pensamento computacional e lógica — antes de escrever qualquer linha de código. Se você sabe usar um computador, já tem o suficiente para começar.',
  },
  
  {
    question: 'As aulas são ao vivo ou gravadas?',
    answer: 'O conteúdo principal é 100% gravado e disponível para assistir quando e onde quiser. As sessões de mentoria em grupo são ao vivo, quinzenais, e sempre gravadas para quem não puder participar na hora.',
  },
  {
    question: 'Vou receber certificado ao final?',
    answer: 'Sim! Você recebe um certificado digital de conclusão para cada bloco completado e um certificado geral da Jornada. Os certificados são verificáveis e podem ser adicionados ao seu LinkedIn diretamente.',
  },
  {
    question: 'Posso parcelar o valor do programa?',
    answer: 'Sim. Aceitamos parcelamento em até 12x no cartão de crédito, sem juros. Também oferecemos boleto bancário à vista com desconto adicional de 5% sobre o preço já publicado.',
  },
  {
    question: 'E se eu não gostar? Tem garantia?',
    answer: 'Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não se sentir satisfeito(a), basta nos enviar um e-mail e fazemos o reembolso total, sem perguntas e sem burocracia.',
  },
  {
    question: 'O suporte é individual com a Prof. Amanda?',
    answer: 'Sim, o suporte principal é feito por mim! Há também mentorias em grupo quinzenais para todos os alunos.',
  },
  {
    question: 'Posso migrar de uma jornada para outra depois?',
    answer: 'Sim! Se você adquiriu a Jornada Web e quiser adicionar o Bloco 4 (AI/Data Science) depois, oferecemos a possibilidade de upgrade pagando apenas a diferença entre os pacotes.',
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div className="faq-accordion-item">
      <button
        onClick={onToggle}
        className="faq-accordion-trigger"
      >
        <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
          {/* Index number */}
          <span
            className="faq-accordion-index"
            style={{ color: isOpen ? '#a867d1' : '#64748B' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="faq-accordion-question"
            style={{ color: isOpen ? '#F1F5F9' : '#94A3B8' }}
          >
            {question}
          </span>
        </div>

        <div
          className="faq-accordion-icon-box"
          
        >
          {isOpen ? (
            <Minus size={20} color="#a867d1" />
          ) : (
            <Plus size={20} color="#64748B" />
          )}
        </div>
      </button>

      <div
        className="faq-accordion-content"
        style={{ maxHeight: isOpen ? '300px' : '0' }}
      >
        <div className="faq-accordion-answer">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      {/* Background decoration */}
      <div className="faq-glow-bg" />

      <div className="faq-container">
        {/* Section header */}
        <div className="faq-header">
          <h2 className="faq-main-title">
            Perguntas{' '}
            <span className="faq-title-gradient-text">
              Frequentes
            </span>
          </h2>
          <p className="faq-sub-desc">
            Tem mais dúvidas? Fale conosco via{' '}
            <a href="#" className="faq-contact-link">
              WhatsApp
            </a>{' '}
            ou{' '}
            <a href="#" className="faq-contact-link">
              Instagram
            </a>
            .
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion-container">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
