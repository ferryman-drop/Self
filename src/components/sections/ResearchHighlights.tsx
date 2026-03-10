import Link from 'next/link';

const articles = [
  {
    category: 'Tokenomics',
    date: 'Mar 2026',
    title: 'Deep Dive: $ARB Tokenomics — Value Accrual vs Inflation Pressure',
    excerpt: 'Розбір supply schedule, vesting cliffs та incentive mechanics Arbitrum. Що говорять дані про довгострокову цінність токена на тлі зростаючої емісії.',
    readTime: '8 хв читання',
    href: '/research/arb-tokenomics-deep-dive',
  },
  {
    category: 'On-Chain',
    date: 'Feb 2026',
    title: 'Whale Accumulation Patterns Before Major Price Moves',
    excerpt: '3 on-chain сигнали, які передували останнім 5 корекціям ринку. Аналіз wallet clustering, exchange inflows та stablecoin velocity.',
    readTime: '6 хв читання',
    href: '/research/whale-accumulation-patterns',
  },
  {
    category: 'Market Insights',
    date: 'Feb 2026',
    title: 'Q1 2026 DeFi Liquidity Shift: Where Capital Is Moving',
    excerpt: 'Mapping capital rotation між L2 екосистемами. TVL динаміка, bridging flows та які протоколи залучають sticky liquidity у Q1 2026.',
    readTime: '10 хв читання',
    href: '/research/q1-2026-defi-liquidity-shift',
  },
];

export default function ResearchHighlights() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-label">Research & Insights</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Останні дослідження</h2>
          </div>
          <Link href="/research" className="btn btn-ghost" style={{ fontSize: '14px', padding: '10px 20px' }}>
            Всі матеріали →
          </Link>
        </div>

        <div className="research-grid">
          {articles.map((a, i) => (
            <div key={i} className="research-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="research-meta">
                <span className="research-category">{a.category}</span>
                <span className="research-date">{a.date}</span>
              </div>
              <h3 className="research-title">{a.title}</h3>
              <p className="research-excerpt">{a.excerpt}</p>
              <div className="research-footer">
                <span className="research-read-time">⏱ {a.readTime}</span>
                <Link href={a.href} className="research-link" id={`research-link-${i}`}>
                  Читати →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
