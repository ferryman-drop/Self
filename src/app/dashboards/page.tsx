import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboards — Live On-Chain Analytics',
  description: 'Інтерактивні on-chain дашборди від Ferrymano: whale tracker, TVL monitor, token unlock schedule.',
};

function MiniBar({ h, delay }: { h: number; delay: number }) {
  return (
    <div
      style={{
        flex: 1,
        height: `${h}%`,
        borderRadius: '3px 3px 0 0',
        background: 'linear-gradient(to top, rgba(59,130,246,0.3), rgba(59,130,246,0.85))',
        transition: `height 1s ease ${delay}s`,
      }}
    />
  );
}

const dashboards = [
  {
    title: 'ETH Whale Activity Tracker',
    desc: 'Real-time моніторинг великих ETH гаманців: accumulation, distribution, exchange flows.',
    meta: 'Dune Analytics · Ethereum',
    metric: '↑ 12.4% active whales',
    bars: [40, 65, 55, 80, 70, 90, 75, 85, 60, 95],
    tags: ['Ethereum', 'Whale', 'On-Chain'],
    href: '/dashboards/eth-whale-tracker',
  },
  {
    title: 'DeFi Protocol TVL Monitor',
    desc: 'Comparative TVL dashboard для 15 DeFi протоколів на Ethereum та L2. Liquidity flows та trend detection.',
    meta: 'Flipside · 15 protocols',
    metric: '$2.4B TVL tracked',
    bars: [60, 45, 70, 55, 80, 65, 90, 75, 85, 70],
    tags: ['DeFi', 'TVL', 'Multi-chain'],
    href: '/dashboards/defi-tvl-monitor',
  },
  {
    title: 'Token Unlock Schedule',
    desc: 'Comprehensive tracker для token unlock events. Vesting calendars, sell pressure estimation, price correlation.',
    meta: 'Custom · 50+ tokens',
    metric: '8 unlocks next 7 days',
    bars: [30, 55, 40, 75, 50, 85, 45, 70, 60, 80],
    tags: ['Tokenomics', 'Unlocks'],
    href: '/dashboards/token-unlock-schedule',
  },
  {
    title: 'Stablecoin Velocity Tracker',
    desc: 'USDC, USDT, DAI velocity metrics як ринковий індикатор. Correlation з BTC/ETH price action.',
    meta: 'Dune Analytics · Multi-chain',
    metric: 'Velocity index: 0.82',
    bars: [55, 70, 45, 80, 60, 75, 50, 85, 65, 90],
    tags: ['Stablecoins', 'Macro'],
    href: '/dashboards/stablecoin-velocity',
  },
];

export default function DashboardsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Live Dashboards</span>
          <h1 className="page-hero-title">Дані в реальному часі</h1>
          <p className="page-hero-subtitle">
            Інтерактивні дашборди з on-chain метриками. Відкрийте, досліджуйте, використовуйте для власних рішень.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {dashboards.map((d, i) => (
              <div key={i} className="dashboard-card" style={{ borderRadius: '14px' }}>
                <div
                  className="dashboard-preview"
                  style={{ aspectRatio: '16/7', background: 'var(--bg-elevated)', display: 'flex', alignItems: 'flex-end', padding: '20px 24px', gap: '4px' }}
                >
                  {d.bars.map((h, j) => (
                    <MiniBar key={j} h={h} delay={j * 0.05} />
                  ))}
                  <div className="dashboard-metric">{d.metric}</div>
                </div>
                <div className="dashboard-body" style={{ padding: '24px 28px' }}>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {d.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div className="dashboard-title" style={{ fontSize: '18px', marginBottom: '8px' }}>{d.title}</div>
                  <div className="dashboard-meta" style={{ marginBottom: '12px' }}>{d.meta}</div>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '16px' }}>{d.desc}</p>
                  <Link href={d.href} className="dashboard-link">Відкрити дашборд →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
