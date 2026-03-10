const skills = [
  {
    icon: '⛓',
    title: 'On-Chain Analytics',
    desc: 'Аналіз wallet flows, whale activity, token distribution та мережевих метрик для виявлення трендів до того, як вони потраплять у headlines.',
  },
  {
    icon: '🪙',
    title: 'Tokenomics Analysis',
    desc: 'Структурний розбір supply schedules, vesting mechanics, incentive loops та inflation pressure — від whitepaper до live data.',
  },
  {
    icon: '📊',
    title: 'Dashboard Design',
    desc: 'Побудова інтерактивних дашбордів (Dune, Flipside, Tableau), які перетворюють складні дані у зрозумілу аналітику для команд і стейкхолдерів.',
  },
  {
    icon: '📖',
    title: 'Data Storytelling',
    desc: 'Перетворення масивів блокчейн-даних у наративи з чіткою структурою: контекст → аналіз → висновок → рекомендація.',
  },
  {
    icon: '🔬',
    title: 'Protocol Research',
    desc: 'Глибинне дослідження механік DeFi-протоколів: TVL dynamics, user retention, liquidity flows, governance participation.',
  },
  {
    icon: '🧭',
    title: 'Market Intelligence',
    desc: 'Моніторинг ринкових сигналів, capital rotation, sector-level метрик та macro-crypto кореляцій для інформування інвестиційних тез.',
  },
];

export default function Expertise() {
  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <span className="section-label">Core Expertise</span>
        <h2 className="section-title">Що я роблю</h2>
        <p className="section-subtitle">
          Шість напрямів, які разом формують повний цикл аналітики — від raw data до стратегічного висновку.
        </p>

        <div className="expertise-grid">
          {skills.map((s, i) => (
            <div key={i} className="expertise-card fade-in" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="expertise-icon">{s.icon}</div>
              <div className="expertise-title">{s.title}</div>
              <div className="expertise-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
