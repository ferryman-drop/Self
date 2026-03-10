'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <span className="nav-logo-dot" />
            Ferrymano
          </Link>

          <ul className="nav-links">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/dashboards">Dashboards</Link></li>
            <li><Link href="/research">Research</Link></li>
          </ul>

          <div className="nav-cta">
            <Link href="/contact" className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '14px' }}>
              Book a Call →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
