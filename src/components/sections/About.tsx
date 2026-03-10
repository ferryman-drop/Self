import Link from 'next/link';

export default function About() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap fade-in">
            <div className="about-image">
              <div className="about-image-placeholder">
                <span style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  [ photo ]
                </span>
              </div>
            </div>
            <div className="about-image-badge">
              Open to work ✓
            </div>
          </div>

          <div className="about-text fade-in">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Аналітик, якому довіряють дані — і ті, хто на них будує.</h2>

            <p>
              Я — crypto data analyst і tokenomics specialist з фокусом на on-chain дослідженнях,
              моделюванні економіки токенів та побудові аналітичних дашбордів. Працюю з протоколами,
              фондами та DAO, які потребують чітких, data-backed висновків для стратегічних рішень.
            </p>
            <p>
              Мій підхід: hypothesis-driven аналіз, мультичейн дані, прозора методологія. Кожне
              дослідження — це не набір графіків, а відповідь на конкретне бізнес-запитання.
            </p>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link href="/projects" className="btn btn-primary">Переглянути кейси →</Link>
              <Link href="/contact" className="btn btn-ghost">Зв&apos;язатись</Link>
            </div>

            <div className="about-metrics">
              <div className="about-metric">
                <div className="about-metric-value">20+</div>
                <div className="about-metric-label">Проєктів</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-value">15+</div>
                <div className="about-metric-label">Дашбордів</div>
              </div>
              <div className="about-metric">
                <div className="about-metric-value">50+</div>
                <div className="about-metric-label">Досліджень</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
