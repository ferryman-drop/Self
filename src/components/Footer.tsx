import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">Ferrymano</div>
            <p className="footer-brand-desc">
              Crypto Data Analyst & Tokenomics Specialist. Data-driven insights для Web3 протоколів, фондів та DAO.
            </p>
            <div className="footer-socials">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="footer-social" aria-label="Twitter/X">𝕏</a>
              <a href="https://t.me/" target="_blank" rel="noreferrer" className="footer-social" aria-label="Telegram">✈</a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="footer-social" aria-label="LinkedIn">in</a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="footer-social" aria-label="GitHub">⌥</a>
            </div>
          </div>

          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/research">Research</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Work</div>
            <ul className="footer-links">
              <li><Link href="/dashboards">Dashboards</Link></li>
              <li><Link href="/projects">Case Studies</Link></li>
              <li><Link href="/research">Blog</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><Link href="/contact">Book a Call</Link></li>
              <li><a href="mailto:hello@ferrymano.top">hello@ferrymano.top</a></li>
              <li><a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© {year} Ferrymano. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
