import Link from 'next/link';

const projects = [
  {
    icon: '📈',
    tags: ['Tokenomics', 'DeFi', 'L2'],
    title: 'Arbitrum Token Distribution Analysis',
    desc: 'Структурний розбір $ARB token distribution та vesting mechanics після TGE. Аналіз концентрації supply, unlock schedule та вплив на ліквідність.',
    result: 'Виявлено: 23% supply у 8 гаманцях team/insider — ключовий ризик для Q3 sell pressure',
    href: '/projects/arbitrum-tokenomics',
  },
  {
    icon: '🌊',
    tags: ['On-Chain', 'DeFi', 'TVL'],
    title: 'DeFi Liquidity Migration Tracker',
    desc: 'Real-time дашборд для відстеження потоків ліквідності між DEX протоколами. Виявлення аномалій та capital rotation між Ethereum L2s.',
    result: '+340% TVL за 90 днів — задокументовано причини та стійкість зростання',
    href: '/projects/defi-liquidity-tracker',
  },
  {
    icon: '🏛',
    tags: ['Governance', 'DAO', 'Analytics'],
    title: 'DAO Governance Participation Study',
    desc: 'Аналіз рівня участі в governance процесах топ-10 протоколів. Mapping whale voting behavior та кореляція з ціновими рухами токенів.',
    result: 'Voter turnout < 5% в 7 з 10 протоколів — системний ризик централізованого governance',
    href: '/projects/dao-governance-study',
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-label">Featured Projects</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Кейси, підкріплені даними</h2>
          </div>
          <Link href="/projects" className="btn btn-ghost" style={{ fontSize: '14px', padding: '10px 20px' }}>
            Всі проєкти →
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-thumbnail">
                <div className="project-thumbnail-placeholder">
                  <div className="project-thumbnail-icon">{p.icon}</div>
                  <span>dashboard preview</span>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag tag-blue">{t}</span>
                  ))}
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="project-result">
                  <span>↗</span>
                  {p.result}
                </div>
                <Link href={p.href} className="project-link" id={`project-link-${i}`}>
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
