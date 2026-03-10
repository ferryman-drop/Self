import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects — Case Studies',
  description: 'Кейси Ferrymano: on-chain аналіз, tokenomics breakdowns, dashboard проєкти.',
};

const projects = [
  { icon: '📈', tags: ['Tokenomics', 'L2'], title: 'Arbitrum Token Distribution Analysis', desc: 'Структурний розбір $ARB після TGE: supply concentration, vesting mechanics та sell pressure прогноз.', href: '/projects/arbitrum-tokenomics' },
  { icon: '🌊', tags: ['On-Chain', 'DeFi'], title: 'DeFi Liquidity Migration Tracker', desc: 'Real-time моніторинг потоків ліквідності між DEX протоколами на Ethereum L2.', href: '/projects/defi-liquidity-tracker' },
  { icon: '🏛', tags: ['Governance', 'DAO'], title: 'DAO Governance Participation Study', desc: 'Аналіз voter turnout та whale voting behavior у топ-10 протоколах.', href: '/projects/dao-governance-study' },
  { icon: '🔗', tags: ['On-Chain', 'Whale'], title: 'ETH Whale Accumulation Patterns', desc: 'On-chain сигнали великих гравців перед великими ціновими рухами ETH.', href: '/projects/eth-whale-patterns' },
  { icon: '💎', tags: ['Tokenomics', 'DeFi'], title: 'Aave V3 Token Economics Review', desc: 'Розбір deflationary mechanics, staking incentives та governance token value accrual.', href: '/projects/aave-token-review' },
  { icon: '📉', tags: ['Market', 'Macro'], title: 'Crypto Market Cycle Indicators', desc: 'Set of on-chain метрик для ідентифікації ринкових циклів: MVRV, NUPL, Exchange Netflow.', href: '/projects/market-cycle-indicators' },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Case Studies</span>
          <h1 className="page-hero-title">Кейси, підкріплені даними</h1>
          <p className="page-hero-subtitle">
            Кожен проєкт — це задача, методологія, дані та чіткий результат. Ось що я роблю для протоколів, фондів і DAO.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="projects-grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-thumbnail">
                  <div className="project-thumbnail-placeholder">
                    <div className="project-thumbnail-icon">{p.icon}</div>
                    <span>dashboard preview</span>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-tags">
                    {p.tags.map((t) => <span key={t} className="tag tag-blue">{t}</span>)}
                  </div>
                  <h2 className="project-title">{p.title}</h2>
                  <p className="project-desc">{p.desc}</p>
                  <Link href={p.href} className="project-link">View Case Study →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
