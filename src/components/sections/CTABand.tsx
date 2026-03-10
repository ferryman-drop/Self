import Link from 'next/link';

export default function CTABand() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-band">
          <h2 className="cta-band-title">
            Готові до data-driven рішень?
          </h2>
          <p className="cta-band-sub">
            Розкажіть про ваш проєкт — обговоримо, як аналітика може підсилити ваші рішення.
          </p>
          <div className="cta-band-buttons">
            <Link href="/contact" className="btn btn-primary" id="cta-band-book-call">
              Забронювати дзвінок →
            </Link>
            <Link href="/projects" className="btn btn-ghost" id="cta-band-explore">
              Дослідити портфоліо
            </Link>
          </div>
          <p className="cta-band-email">
            Або напишіть напряму: <a href="mailto:hello@ferrymano.top">hello@ferrymano.top</a>
          </p>
        </div>
      </div>
    </section>
  );
}
