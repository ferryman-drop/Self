const testimonials = [
  {
    text: 'Детальний tokenomics audit виявив ризики, які ми пропустили внутрішньо. Дослідження було структурованим, методологія прозорою, висновки — actionable. Рекомендував би будь-якому протоколу перед TGE.',
    name: 'Alex K.',
    role: 'Co-Founder · DeFi Protocol',
    initial: 'A',
  },
  {
    text: 'Дашборд, який побудував Ferrymano для моніторингу нашого treasury, дозволив нам приймати governance рішення на основі реальних даних, а не інтуїції. Це саме те, чого нам не вистачало.',
    name: 'Maria S.',
    role: 'Head of Research · Crypto Fund',
    initial: 'M',
  },
  {
    text: 'On-chain аналіз перед нашим інвестиційним рішенням дав нам clarity, якої не могли дати жодні off-chain метрики. Глибина, швидкість і якість — на рівні найкращих research boutiques.',
    name: 'Dima P.',
    role: 'VC Partner · Web3 Fund',
    initial: 'D',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label">Social Proof</span>
        <h2 className="section-title">Що кажуть клієнти</h2>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="testimonial-quote">&ldquo;</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
