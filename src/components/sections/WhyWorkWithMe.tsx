const reasons = [
  {
    num: '01',
    title: 'Аналітична глибина',
    desc: 'Не поверхневі charts, а мультишарові дослідження з контекстом, методологією та перевіреними даними. Hypothesis-driven підхід від початку до висновку.',
  },
  {
    num: '02',
    title: 'Actionable висновки',
    desc: 'Кожен аналіз закінчується конкретними рекомендаціями, а не описовою статистикою. Дані мають вести до рішень — інакше це просто красиві графіки.',
  },
  {
    num: '03',
    title: 'Досвід з протоколами',
    desc: 'Від DeFi до L2, від governance до treasury — я розумію контекст, у якому живуть ваші дані. Аналіз без доменного знання — це шум.',
  },
  {
    num: '04',
    title: 'Індивідуальний підхід',
    desc: 'Кожне дослідження адаптоване під ваші цілі: fundraising, due diligence, product analytics або investor relations. Не шаблон — рішення.',
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <span className="section-label">Why Work With Me</span>
        <h2 className="section-title">Чим я відрізняюсь</h2>
        <p className="section-subtitle">
          Crypto-аналітиків багато. Тих, хто будує методологію, видає прозорі висновки і розуміє домен на рівні даних — значно менше.
        </p>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="why-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="why-num">{r.num}</div>
              <div>
                <div className="why-title">{r.title}</div>
                <div className="why-desc">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
