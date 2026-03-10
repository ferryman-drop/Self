'use client';

import Link from 'next/link';



export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="page-hero-label">Contact</span>
          <h1 className="page-hero-title">Давайте побудуємо аналітику, якій можна довіряти</h1>
          <p className="page-hero-subtitle">
            Напишіть про ваш проєкт або заброньюйте 30-хвилинний дзвінок. Відповідаю протягом 24 годин.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                Як я можу допомогти?
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px', fontSize: '15px' }}>
                Токеноміка, on-chain дослідження, побудова дашбордів або ринкова аналітика — напишіть задачу і я розкажу, як підійти до її вирішення.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {[
                  { label: 'Email', value: 'hello@ferrymano.top', href: 'mailto:hello@ferrymano.top' },
                  { label: 'Telegram', value: '@ferrymano', href: 'https://t.me/ferrymano' },
                  { label: 'Twitter/X', value: '@ferrymano', href: 'https://twitter.com/ferrymano' },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '16px 20px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      transition: 'border-color 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent-blue-border)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
                  >
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>{c.label}</div>
                      <div style={{ fontSize: '15px', color: 'var(--accent-blue)', fontWeight: '500' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                id="book-call-calendly"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Забронювати 30-хв дзвінок →
              </a>
            </div>

            <form className="form" id="contact-form" action="https://formspree.io/f/placeholder" method="POST">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Ім&apos;я</label>
                <input id="contact-name" name="name" type="text" className="form-input" placeholder="Ваше ім'я або назва компанії" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input id="contact-email" name="email" type="email" className="form-input" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-type">Тип запиту</label>
                <select id="contact-type" name="type" className="form-input" style={{ cursor: 'pointer' }}>
                  <option value="">Оберіть тип...</option>
                  <option value="tokenomics">Tokenomics Analysis</option>
                  <option value="dashboard">Dashboard Design</option>
                  <option value="on-chain">On-Chain Research</option>
                  <option value="due-diligence">Due Diligence</option>
                  <option value="other">Інше</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Повідомлення</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Опишіть ваш проєкт, задачу або питання..."
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" id="contact-submit" style={{ justifyContent: 'center' }}>
                Надіслати повідомлення →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
