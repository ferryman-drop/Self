'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const dashboards = [
  {
    title: 'ETH Whale Activity Tracker',
    meta: 'Dune Analytics · Updated daily',
    metric: '↑ 12.4%',
    bars: [40, 65, 55, 80, 70, 90, 75, 85, 60, 95],
    href: '/dashboards/eth-whale-tracker',
  },
  {
    title: 'DeFi Protocol TVL Monitor',
    meta: 'Flipside · 15 protocols tracked',
    metric: '$2.4B TVL',
    bars: [60, 45, 70, 55, 80, 65, 90, 75, 85, 70],
    href: '/dashboards/defi-tvl-monitor',
  },
  {
    title: 'Token Unlock Schedule',
    meta: 'Custom · 50+ tokens',
    metric: '8 unlocks this week',
    bars: [30, 55, 40, 75, 50, 85, 45, 70, 60, 80],
    href: '/dashboards/token-unlock-schedule',
  },
];

function MiniChart({ bars }: { bars: number[] }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '60px', width: '100%' }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${h}%`,
            borderRadius: '3px 3px 0 0',
            background: `linear-gradient(to top, rgba(59,130,246,0.3), rgba(59,130,246,0.8))`,
            transition: `height 1s ease ${i * 0.05}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span className="section-label">Live Dashboards</span>
            <h2 className="section-title" style={{ marginBottom: 0 }}>Дані в реальному часі</h2>
          </div>
          <Link href="/dashboards" className="btn btn-ghost" style={{ fontSize: '14px', padding: '10px 20px' }}>
            Всі дашборди →
          </Link>
        </div>

        <div className="dashboards-grid">
          {dashboards.map((d, i) => (
            <div key={i} className="dashboard-card fade-in" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="dashboard-preview">
                <div style={{ width: '85%', height: '75%' }}>
                  <MiniChart bars={d.bars} />
                </div>
                <div className="dashboard-metric">{d.metric}</div>
              </div>
              <div className="dashboard-body">
                <div className="dashboard-title">{d.title}</div>
                <div className="dashboard-meta">{d.meta}</div>
                <Link href={d.href} className="dashboard-link" id={`dashboard-link-${i}`}>
                  Відкрити дашборд →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
