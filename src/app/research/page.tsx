import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research & Insights',
  description: 'On-chain аналізи, tokenomics breakdowns та market intelligence від Ferrymano.',
};

const articles = [
  { cat: 'Tokenomics', date: 'Mar 2026', title: 'Deep Dive: $ARB Tokenomics — Value Accrual vs Inflation', excerpt: 'Розбір supply schedule, vesting cliffs та incentive mechanics Arbitrum.', read: '8 хв', href: '/research/arb-tokenomics-deep-dive' },
  { cat: 'On-Chain', date: 'Feb 2026', title: 'Whale Accumulation Patterns Before Major Price Moves', excerpt: '3 on-chain сигнали, які передували останнім 5 корекціям ринку.', read: '6 хв', href: '/research/whale-accumulation-patterns' },
  { cat: 'Market Insights', date: 'Feb 2026', title: 'Q1 2026 DeFi Liquidity Shift: Where Capital Is Moving', excerpt: 'Mapping capital rotation між L2 екосистемами у Q1 2026.', read: '10 хв', href: '/research/q1-2026-defi-liquidity-shift' },
  { cat: 'Protocol Research', date: 'Jan 2026', title: 'Aave V3 Multi-Chain TVL Analysis', excerpt: 'Порівняльний аналіз TVL та user metrics Aave V3 на 5 мережах.', read: '12 хв', href: '/research/aave-v3-tvl-analysis' },
  { cat: 'On-Chain', date: 'Jan 2026', title: 'Stablecoin Velocity as a Market Signal', excerpt: 'USDC/USDT velocity як leading indicator для ринкових рухів.', read: '7 хв', href: '/research/stablecoin-velocity' },
  { cat: 'Tokenomics', date: 'Dec 2025', title: 'The Real Cost of Liquidity Mining', excerpt: 'Як token emissions руйнують value accrual: кількісний аналіз 20 протоколів.', read: '9 хв', href: '/research/cost-of-liquidity-mining' },
];

const categories = ['All', 'On-Chain', 'Tokenomics', 'Market Insights', 'Protocol Research'];

export default function ResearchPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Research & Insights</span>
          <h1 className="page-hero-title">On-chain аналізи та ринкова аналітика</h1>
          <p className="page-hero-subtitle">
            Data-backed дослідження, tokenomics breakdowns та market intelligence — для тих, хто приймає рішення.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {categories.map((c, i) => (
              <button key={c} className={i === 0 ? 'btn btn-outline' : 'tag'} style={{ cursor: 'pointer', padding: '7px 16px' }}>
                {c}
              </button>
            ))}
          </div>

          <div className="research-grid">
            {articles.map((a, i) => (
              <div key={i} className="research-card">
                <div className="research-meta">
                  <span className="research-category">{a.cat}</span>
                  <span className="research-date">{a.date}</span>
                </div>
                <h2 className="research-title">{a.title}</h2>
                <p className="research-excerpt">{a.excerpt}</p>
                <div className="research-footer">
                  <span className="research-read-time">⏱ {a.read} читання</span>
                  <Link href={a.href} className="research-link">Читати →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
