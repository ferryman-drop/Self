import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Crypto Data Analyst & Tokenomics Specialist',
  description: 'Про Ferrymano: crypto data analyst, tokenomics specialist, on-chain researcher.',
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">About Me</span>
          <h1 className="page-hero-title">Аналітик, якому довіряють дані</h1>
          <p className="page-hero-subtitle">
            Crypto data analyst і tokenomics specialist з фокусом на побудові аналітичних систем, що допомагають приймати кращі рішення.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'flex-start' }}>
            <div>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '3/4',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '14px',
                  marginBottom: '24px',
                }}
              >
                [ photo ]
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { label: 'Спеціалізація', value: 'On-Chain Analytics, Tokenomics' },
                  { label: 'Досвід', value: '3+ роки у Web3' },
                  { label: 'Мережі', value: 'Ethereum, Arbitrum, Optimism, Solana' },
                  { label: 'Інструменти', value: 'Dune, Flipside, SQL, Tableau' },
                ].map((i) => (
                  <div key={i.label} style={{ padding: '14px 16px', background: 'var(--bg-surface)', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{i.label}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: '500' }}>{i.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>
                Підхід до роботи
              </h2>
              {[
                'Я — crypto data analyst і tokenomics specialist, який допомагає протоколам, фондам та DAO перетворювати blockchain data на стратегічні рішення.',
                'Мій підхід побудований на трьох принципах: hypothesis-driven аналіз, мультичейн дані та прозора методологія. Кожне дослідження — це відповідь на конкретне бізнес-запитання, а не набір красивих графіків.',
                'Я працюю на перетині аналітики, product думки та ринкового розуміння. Це дозволяє будувати не просто звіти, а інструменти прийняття рішень.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>{p}</p>
              ))}

              <div style={{ padding: '28px', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', marginTop: '32px', marginBottom: '32px' }}>
                <div style={{ fontSize: '13px', color: 'var(--accent-blue)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Positioning</div>
                <blockquote style={{ fontSize: '18px', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.6, borderLeft: '3px solid var(--accent-blue)', paddingLeft: '20px' }}>
                  «Де інші бачать графіки — я бачу патерни, ризики та можливості. On-chain data analyst для тих, хто грає вдовгу.»
                </blockquote>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link href="/projects" className="btn btn-primary">Переглянути проєкти →</Link>
                <Link href="/contact" className="btn btn-ghost">Зв&apos;язатись</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
