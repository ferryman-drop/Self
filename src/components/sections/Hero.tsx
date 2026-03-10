'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function initCanvas(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let animId: number;
  const particles: Particle[] = [];
  const PARTICLE_COUNT = 70;
  const MAX_DIST = 140;

  const resize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59,130,246,0.6)';
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  };

  draw();
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener('resize', resize);
  };
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = initCanvas(canvasRef.current);
    return cleanup;
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="container">
        <div className="hero-content">
          <span className="hero-badge">
            Crypto Data Analyst · Tokenomics Specialist
          </span>

          <h1 className="hero-title">
            Дані говорять.<br />
            Я перекладаю їх{' '}
            <span className="gradient-text">мовою рішень.</span>
          </h1>

          <p className="hero-subtitle">
            On-chain analytics, tokenomics research та dashboard-driven insights
            для протоколів, фондів і DAO, які приймають рішення на основі даних.
          </p>

          <div className="hero-ctas">
            <Link href="/projects" className="btn btn-primary" id="hero-cta-projects">
              Переглянути кейси →
            </Link>
            <Link href="/contact" className="btn btn-ghost" id="hero-cta-contact">
              Забронювати дзвінок
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">20+</span>
              <span className="hero-stat-label">Проєктів виконано</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">15+</span>
              <span className="hero-stat-label">Live дашбордів</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">50+</span>
              <span className="hero-stat-label">On-chain досліджень</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
