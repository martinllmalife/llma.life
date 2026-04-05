import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { sortedPosts } from '../content/blogPosts';
import { INSTAGRAM_EMBEDS } from '../content/tiktokEmbeds';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';
const APP_URL = 'https://llma.app';

const S = {
  bg: '#0D0A0B',
  purple: '#8F5CB8',
  purpleHover: '#7C4DA0',
  purpleMuted: 'rgba(143,92,184,0.12)',
  purpleBorder: 'rgba(143,92,184,0.25)',
  coral: '#DC5A4B',
  coralMuted: 'rgba(220,90,75,0.12)',
  coralBorder: 'rgba(220,90,75,0.25)',
  lavender: '#C59FE1',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
  card: '#111011',
  cardBorder: 'rgba(255,255,255,0.06)',
};

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(13,10,11,0.88)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      fontFamily: S.font,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/llma-logo.png" alt="LLMA" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>llma.life</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Link to="/blog" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', padding: '8px 12px', borderRadius: 8 }}>Blog</Link>
            <Link to="/community" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', padding: '8px 12px', borderRadius: 8 }}>Community</Link>
            <a href="#videos" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', padding: '8px 12px', borderRadius: 8 }}>Watch</a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', padding: '8px 12px', borderRadius: 8 }}>App</a>
          </span>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 9999,
            background: S.purple, color: '#fff',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
            marginLeft: 8,
          }}>
            <span className="nav-cta-text">Download</span>
            <span className="nav-cta-short" style={{ display: 'none' }}>App</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Video Hero ────────────────────────────────────────────────────────────────
function VideoHero() {
  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', overflow: 'hidden',
      fontFamily: S.font,
    }}>
      {/* YouTube background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
        <iframe
          src="https://www.youtube.com/embed/hkp-V-qGfDg?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=hkp-V-qGfDg&playsinline=1&modestbranding=1"
          title="LLMA Hero"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={{
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'max(100%, 177.78vh)',
            height: 'max(56.25vw, 100%)',
            pointerEvents: 'none',
            border: 'none',
          }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,10,11,0.55) 0%, rgba(13,10,11,0.25) 40%, rgba(13,10,11,0.75) 80%, rgba(13,10,11,1) 100%)',
        }} />
        {/* Side fade */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(13,10,11,0.6) 100%)',
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, padding: '140px 24px 100px', maxWidth: 820, margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
          background: 'rgba(143,92,184,0.2)', border: '1px solid rgba(143,92,184,0.35)',
          borderRadius: 9999, padding: '6px 16px',
          fontSize: 11, fontWeight: 700, color: S.lavender,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          backdropFilter: 'blur(8px)',
        }}>
          ✦ Life &amp; Love Made Authentic
        </div>

        <h1 style={{
          fontSize: 'clamp(48px, 7.5vw, 88px)', fontWeight: 900,
          lineHeight: 1.04, letterSpacing: '-0.04em', color: '#fff',
          margin: '0 0 20px',
          textShadow: '0 2px 40px rgba(0,0,0,0.5)',
        }}>
          Partnership built on{' '}
          <span style={{
            background: 'linear-gradient(135deg, #C59FE1 0%, #8F5CB8 50%, #DC5A4B 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            intention
          </span>
          ,<br />not convention.
        </h1>

        <p style={{
          fontSize: 'clamp(17px, 2.2vw, 21px)', color: 'rgba(255,255,255,0.7)',
          maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.6,
          textShadow: '0 1px 12px rgba(0,0,0,0.4)',
        }}>
          Lavender marriages. Chosen co-parents. Intentional companions. Find your people and build something real.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '16px 36px', borderRadius: 9999,
            background: S.purple, color: '#fff',
            fontSize: 16, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 32px rgba(143,92,184,0.5)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on App Store
          </a>
          <a href="#videos" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '16px 32px', borderRadius: 9999,
            background: 'rgba(255,255,255,0.1)', color: '#fff',
            border: '1px solid rgba(255,255,255,0.2)',
            fontSize: 16, fontWeight: 600, textDecoration: 'none',
            backdropFilter: 'blur(8px)',
          }}>
            ▶ Watch the Story
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 64, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, opacity: 0.4 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#fff' }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)' }} />
        </div>
      </div>
    </section>
  );
}

// ── App Gateway ───────────────────────────────────────────────────────────────
function AppGateway() {
  return (
    <section style={{ padding: '100px 24px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 2, borderRadius: 24, overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.06)',
        }}>
          {/* Left — llma.life */}
          <div style={{
            padding: '56px 48px',
            background: 'linear-gradient(135deg, rgba(143,92,184,0.1) 0%, rgba(13,10,11,0) 100%)',
            borderRight: '1px solid rgba(255,255,255,0.04)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 16 }}>You are here</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              llma.life
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 32px' }}>
              The conversation. The media. The movement. Stories, videos, and community for people building partnerships outside the script.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: S.lavender, textDecoration: 'none' }}>Read the blog →</Link>
              <a href="#videos" style={{ fontSize: 14, fontWeight: 600, color: S.lavender, textDecoration: 'none' }}>Watch videos →</a>
            </div>
          </div>

          {/* Right — llma.app */}
          <div style={{
            padding: '56px 48px',
            background: 'linear-gradient(135deg, rgba(220,90,75,0.08) 0%, rgba(13,10,11,0) 100%)',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.coral, marginBottom: 16 }}>Ready to connect?</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              llma.app
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: '0 0 32px' }}>
              The matchmaking platform. Values-first profiles, intentional matching, and real conversations with people who actually get it.
            </p>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 28px', borderRadius: 9999,
              background: S.coral, color: '#fff',
              fontSize: 14, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(220,90,75,0.35)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download the App
            </a>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 20 }}>
              <a href="https://www.llma.app/find-lavender-marriage-partner" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: S.coral, textDecoration: 'none' }}>Read the guide →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Featured Video ────────────────────────────────────────────────────────────
function FeaturedVideo() {
  return (
    <section id="videos" style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 16 }}>
            The conversation that started it all
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            We're Married But Sleep on Different Floors
          </h2>
        </div>
        <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/hkp-V-qGfDg"
              title="We're Married But Sleep on Different Floors"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 28, flexWrap: 'wrap' }}>
          <a href="https://www.youtube.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: S.lavender, textDecoration: 'none' }}>
            Subscribe on YouTube →
          </a>
          <a href="https://www.tiktok.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: S.lavender, textDecoration: 'none' }}>
            Follow on TikTok →
          </a>
        </div>
      </div>
    </section>
  );
}

// ── Who It's For ─────────────────────────────────────────────────────────────
const WHO_CARDS = [
  {
    color: S.purple,
    muted: S.purpleMuted,
    border: S.purpleBorder,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Lavender Marriage Partners',
    body: 'Gay men and straight women building intentional, authentic life partnerships — on their own terms.',
  },
  {
    color: S.coral,
    muted: S.coralMuted,
    border: S.coralBorder,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Chosen Co-Parents',
    body: 'Finding the right person to raise a family with, regardless of romantic attraction.',
  },
  {
    color: S.lavender,
    muted: S.lavenderMuted,
    border: S.lavenderBorder,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Intentional Companions',
    body: 'Ride-or-die partners for navigating life, sharing households, and building legacies together.',
  },
];

function WhoItsFor() {
  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 16 }}>Who It's For</div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Relationships beyond the conventional
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 480, margin: '0 auto', lineHeight: 1.6 }}>
            LLMA is for people who know exactly what they want — and it doesn't fit in a Hallmark movie.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {WHO_CARDS.map(c => (
            <div key={c.title} style={{
              padding: '36px 32px', background: S.card,
              border: `1px solid ${c.border}`,
              borderRadius: 20, borderTop: `3px solid ${c.color}`,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: c.muted, border: `1px solid ${c.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: c.color, marginBottom: 24,
              }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>{c.title}</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.65 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Guide Promo ───────────────────────────────────────────────────────────────
function GuidePromo() {
  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <a
          href="https://www.llma.app/find-lavender-marriage-partner"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '44px 56px', borderRadius: 24, gap: 32, flexWrap: 'wrap',
            background: 'linear-gradient(135deg, rgba(143,92,184,0.12) 0%, rgba(220,90,75,0.06) 100%)',
            border: '1px solid rgba(143,92,184,0.25)',
            textDecoration: 'none',
          }}
        >
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: S.lavender, marginBottom: 14,
            }}>
              Free Guide
            </div>
            <h2 style={{
              fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 800,
              color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.2,
            }}>
              How to Actually Find a Lavender Marriage Partner
            </h2>
            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.45)',
              margin: 0, lineHeight: 1.65, maxWidth: 520,
            }}>
              A complete guide — from understanding what you're looking for to your first real conversation with someone who gets it.
            </p>
          </div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 30px', borderRadius: 9999, flexShrink: 0,
            background: S.purple, color: '#fff',
            fontSize: 15, fontWeight: 700,
            boxShadow: '0 4px 24px rgba(143,92,184,0.35)',
          }}>
            Read the Guide →
          </div>
        </a>
      </div>
    </section>
  );
}

// ── Course ────────────────────────────────────────────────────────────────────
function CourseTeaser() {
  return (
    <section id="course" style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 0, borderRadius: 24, overflow: 'hidden',
          border: '1px solid rgba(220,90,75,0.2)',
          background: 'linear-gradient(135deg, rgba(220,90,75,0.07) 0%, rgba(143,92,184,0.07) 100%)',
        }}>
          <div style={{ padding: '60px 56px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.coral, marginBottom: 20 }}>
              Online Course
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 50px)', fontWeight: 900, color: '#fff', margin: '0 0 20px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              The Lavender<br />
              <span style={{ background: 'linear-gradient(135deg, #DC5A4B, #8F5CB8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Blueprint
              </span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, margin: '0 0 36px', maxWidth: 420 }}>
              Everything Marty & Brandi learned about building an intentional partnership — the real conversations, the agreements, the framework that makes it work.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 9999,
                background: S.coral, color: '#fff',
                fontSize: 15, fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 4px 24px rgba(220,90,75,0.4)',
              }}>
                Get the Course →
              </a>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>Self-paced · Lifetime access</span>
            </div>
          </div>
          <div style={{
            padding: '60px 56px',
            borderLeft: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20,
          }}>
            {[
              { num: '01', title: 'The Framework', body: 'What makes a lavender partnership actually work long-term' },
              { num: '02', title: 'The Conversations', body: 'How to have the talks most couples never have' },
              { num: '03', title: 'The Agreements', body: 'Templates and tools for defining your partnership' },
              { num: '04', title: 'The Community', body: 'Access to LLMA\'s private partner community' },
            ].map(m => (
              <div key={m.num} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: S.coral, opacity: 0.6, letterSpacing: '0.05em', paddingTop: 3, minWidth: 24 }}>{m.num}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{m.title}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>{m.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Photo Grid ────────────────────────────────────────────────────────────────
// 🖼️  Drop the Thomas Family hero URL here once you have the Google Photos link:
const THOMAS_FAMILY_HERO = '/thomas-family.jpg';

function PhotoGrid() {
  const gridPhotos = [
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczO6hD8lUWTKaTBzeFjXYJdngEQmJdAbVpwXE5-KW9gQ-9yOZdyWPDGxoMC6rY_lqjT7va6nZ7vFZMzzmqPqeY6tP-QT9uB8Y3awzhTv7LWT9jY8TXdL1IWmdmMsXqiqO14N7Vmy3ytrKXgcByLW_IZvnw=w2424-h1616-s-no-gm', label: 'Together', pos: 'center' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczNPJXCZgCnEFAwvM7SiFH5MmQg0BfvH7zk8m2tt5gcARO3aZIJll4HzQaxB58XSjG0RTefVzZNsETvpD517onYG22l5xHsGUoPjsbD-smIC19T305ePGx95YSgV_fnEmzG19Gud-qwRjVitwFbb9GxJ5g=w2424-h1616-s-no-gm', label: 'Home Life', pos: 'center' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPUVBgZ3sBQFDFCNMa5GP352ungpJTF6z4SS6X0BB6EnR_dbLaWR5DlM6YWinNba3hKW26y9XbJ2WzkH9X44o3g0y8q9jogTYtIBuxbSmYNboVqVYPztpzTwmDX4x2RhwWuHHd2tEYvrlaZaKY-YfAhGg=w2424-h1616-s-no-gm', label: 'The Kids', pos: 'center top' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMbRGLQuadH0Ki9CH7dhkt7rRWuF3EVBDSEEjle1j9CQUROdg1Bg_yGbQ-N_qJjJ5Qx84ALSN7H1PNDqpgizB0nSTvWaSCqTFSEJRJesjYxzk993xGwEWbUt8PcUxd_PnaOVQGIK8YR5-283cYmPR6hfQ=w1078-h1616-s-no-gm', label: 'Family', pos: 'center top' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMz0wIcFOchbodQFu-7pZ5FwVvBjCcy_Vk8_qss-LwDh0lG2hvqgI8lcR-ypbaSKqVGi1zHdPs_oM9NZO0XlCHL3miIv-EcynnQedBkqKy0JAM7ctdxXWfm8oCjVCIqDciHyiwT1Jm9nUauNVeGb0420g=w2424-h1616-s-no-gm', label: 'Lavender Love', pos: 'center' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPZuM7uzHJFq1FeI3YTSaiMPZcVc87C9WbrblS23aJGpCajefufBj06CC_qRD1H8eNYpzS7ut9ULEqtyBu0QIKghXnzZguzBzy8EHDCpzwoP-byMz1cwedwKgU1pm5eXPnw5XTbrxZ9kL_92v8f1uAsgg=w2424-h1616-s-no-gm', label: 'Real Life', pos: 'center' },
  ];

  const fallbackGradients = [
    'linear-gradient(135deg, rgba(197,159,225,0.2), rgba(143,92,184,0.25))',
    'linear-gradient(135deg, rgba(143,92,184,0.25), rgba(220,90,75,0.12))',
    'linear-gradient(135deg, rgba(220,90,75,0.2), rgba(143,92,184,0.15))',
    'linear-gradient(135deg, rgba(143,92,184,0.3), rgba(197,159,225,0.15))',
    'linear-gradient(135deg, rgba(197,159,225,0.25), rgba(220,90,75,0.1))',
    'linear-gradient(135deg, rgba(220,90,75,0.15), rgba(197,159,225,0.2))',
  ];

  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 12 }}>Real Life</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              Love looks different here
            </h2>
          </div>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.4)', maxWidth: 320, lineHeight: 1.6, margin: 0 }}>
            Real family. Real partnership. Built on honesty, not convention.
          </p>
        </div>

        {/* Hero banner — Thomas Family */}
        <div style={{
          position: 'relative', borderRadius: 20, overflow: 'hidden',
          height: 520, marginBottom: 12,
          background: THOMAS_FAMILY_HERO
            ? 'transparent'
            : 'linear-gradient(135deg, rgba(143,92,184,0.25) 0%, rgba(197,159,225,0.12) 50%, rgba(220,90,75,0.15) 100%)',
          border: `1px solid ${S.cardBorder}`,
        }}>
          {THOMAS_FAMILY_HERO ? (
            <img
              src={THOMAS_FAMILY_HERO}
              alt="Thomas Family"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          ) : (
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              <span style={{ fontSize: 48 }}>💜</span>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', fontFamily: S.font }}>Thomas Family</span>
            </div>
          )}
          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(13,10,11,0.65) 0%, rgba(13,10,11,0.1) 40%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: 28, left: 32,
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: S.lavender, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
              Gilbert, Arizona
            </div>
            <p style={{
              fontSize: 22, fontWeight: 800, color: '#fff',
              letterSpacing: '-0.03em', lineHeight: 1.2,
              fontFamily: S.font, margin: 0,
              textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            }}>
              Marty, Brandi & Londyn
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 4, fontFamily: S.font }}>
              14+ years. Chosen every day.
            </p>
          </div>
        </div>

        {/* 6-photo grid */}
        <div className="photo-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'repeat(2, 240px)',
          gap: 12,
        }}>
          {gridPhotos.map((photo, i) => (
            <div key={i} style={{
              borderRadius: 14, overflow: 'hidden',
              background: fallbackGradients[i % fallbackGradients.length],
              border: `1px solid ${S.cardBorder}`,
              position: 'relative',
            }}>
              <img
                src={photo.src}
                alt={photo.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: photo.pos }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(13,10,11,0.55), transparent)',
                padding: '16px 16px 12px',
                pointerEvents: 'none',
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ── Video Grid ────────────────────────────────────────────────────────────────
function VideoGrid() {
  const videos = [
    { id: 'd3J8GZ5aq-k', title: 'Marty & Brandi Thomas Discuss Lavender Marriage' },
    { id: 'zXAKL-eglNg', title: 'Marriage Secrets: Why We Stayed When Others Left' },
    { id: 'MTVZIS1pSq4', title: 'Gay Man Married To Woman: I told her on our first date' },
  ];

  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 12 }}>More Conversations</div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>Watch the series</h2>
          </div>
          <a href="https://www.youtube.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 14, fontWeight: 600, color: S.lavender, textDecoration: 'none' }}>
            Full channel →
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {videos.map(v => (
            <div key={v.id} style={{ borderRadius: 16, overflow: 'hidden', background: S.card, border: `1px solid ${S.cardBorder}` }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
              </div>
              <div style={{ padding: '16px 20px' }}>
                <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.45 }}>{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── TikTok Section ────────────────────────────────────────────────────────────

const TikTokIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z"/>
  </svg>
);

function TikTokSection() {
  useEffect(() => {
    const existing = document.querySelector('script[src="//www.instagram.com/embed.js"]');
    if (existing) {
      window.instgrm?.Embeds?.process();
      return;
    }
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => window.instgrm?.Embeds?.process();
    document.body.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 12 }}>
              @itsmcmartyfly
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              80M+ views and counting
            </h2>
          </div>
          <a href="https://www.instagram.com/itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '12px 24px', borderRadius: 9999,
            background: '#fff', color: '#000',
            fontSize: 14, fontWeight: 700, textDecoration: 'none', flexShrink: 0,
          }}>
            Follow @itsmcmartyfly on Instagram
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 12, alignItems: 'start' }}>
          {INSTAGRAM_EMBEDS.map((html, i) => (
            <div key={i} style={{ borderRadius: 16, overflow: 'hidden', background: S.card, border: `1px solid ${S.cardBorder}` }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>

        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, marginTop: 24, textAlign: 'center' }}>
          Real conversations about lavender marriage, co-parenting, chosen family, and building a life outside the script. New videos every week.
        </p>
      </div>
    </section>
  );
}

// ── Blog Preview ──────────────────────────────────────────────────────────────
function BlogPreview() {
  const preview = sortedPosts.slice(0, 3);

  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 12 }}>
              The Lavender Logs
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              Stories from the community
            </h2>
          </div>
          <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: S.lavender, textDecoration: 'none' }}>
            View all →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          {preview.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                padding: '28px 24px', background: S.card,
                border: `1px solid ${S.cardBorder}`, borderRadius: 20,
                height: '100%', cursor: 'pointer', display: 'flex', flexDirection: 'column',
                transition: 'border-color 200ms ease, transform 200ms ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(143,92,184,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = S.cardBorder; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ marginBottom: 16 }}>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: 9999,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                    background: post.tagBg, color: post.tagColor, border: `1px solid ${post.tagBorder || post.tagBg}`,
                  }}>{post.tag}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.35, letterSpacing: '-0.01em', flexGrow: 1 }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: '0 0 20px', lineHeight: 1.55 }}>{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>{post.date}</span>
                  <span style={{ fontSize: 13, color: S.lavender, fontWeight: 600 }}>Read →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Newsletter ────────────────────────────────────────────────────────────────
function Newsletter() {
  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          padding: '64px 48px',
          background: 'linear-gradient(135deg, rgba(143,92,184,0.1) 0%, rgba(220,90,75,0.06) 100%)',
          border: '1px solid rgba(197,159,225,0.15)',
          borderRadius: 28,
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 16 }}>
            The Lavender Letter
          </div>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
            Weekly stories. Real talk.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.45)', margin: '0 0 36px', lineHeight: 1.65 }}>
            New blog posts, TikTok roundups, and community stories — every week. No spam. Just the real stuff.
          </p>
          <form
            onSubmit={e => {
              e.preventDefault();
              const email = e.target.email.value;
              if (email) window.open(`mailto:martin@llma.life?subject=Newsletter Signup&body=Add me to The Lavender Letter: ${email}`, '_blank');
            }}
            style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <input
              type="email" name="email" placeholder="your@email.com" required
              style={{
                flex: '1 1 220px', padding: '14px 20px', borderRadius: 9999,
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff', fontSize: 15, fontFamily: S.font, outline: 'none',
              }}
            />
            <button type="submit" style={{
              padding: '14px 28px', borderRadius: 9999,
              background: S.purple, color: '#fff', border: 'none',
              fontSize: 15, fontWeight: 700, fontFamily: S.font, cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(143,92,184,0.35)',
            }}>
              Subscribe
            </button>
          </form>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', marginTop: 16 }}>
            Join the community. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ() {
  const faqs = [
    { q: 'What is LLMA?', a: 'LLMA (Life and Love Made Authentic) is a matchmaking app for intentional partnerships — connecting gay men and straight women for lavender marriages, chosen co-parenting, and authentic companionship.' },
    { q: 'Who is LLMA for?', a: 'For gay men who want a committed life partner and family, straight women who want a loyal companion and co-parent, and anyone building intentional partnerships outside the conventional romantic script.' },
    { q: 'What can you expect from LLMA?', a: 'A matching experience built around values, compatibility, and honesty — not swiping on looks. Structured questions, intentional matches, and a platform designed for real relationship-building.' },
  ];

  return (
    <section style={{ padding: '0 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 16 }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(30px, 4vw, 44px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>Questions you might have</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ padding: '28px 32px', background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>{f.q}</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.7 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://www.facebook.com/648257818370717' },
  { label: 'Instagram', href: 'https://www.instagram.com/thelavlam/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@itsmcmartyfly' },
  { label: 'YouTube', href: 'https://www.youtube.com/@itsmcmartyfly' },
];

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '48px 24px 40px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, marginBottom: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <img src="/llma-logo.png" alt="LLMA" style={{ width: 32, height: 32, objectFit: 'contain' }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>llma.life</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0, maxWidth: 200, lineHeight: 1.6 }}>Life and Love Made Authentic.</p>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 14 }}>Navigate</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link to="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</Link>
                <a href="#course" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Course</a>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Download App</a>
                <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>llma.app</a>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 14 }}>Follow</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {SOCIAL_LINKS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>{s.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 14 }}>Legal</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link to="/PrivacyPolicy" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy</Link>
                <Link to="/TermsOfService" style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms</Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>© 2026 LLMA. All rights reserved.</div>
          <a href="mailto:martin@llma.life" style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', textDecoration: 'none' }}>martin@llma.life</a>
        </div>
      </div>
    </footer>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function MarketingHome() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff' }}>
      <Helmet>
        <title>LLMA - The Lavender Marriage App | Intentional Partnerships</title>
        <meta name="description" content="LLMA connects gay men and straight women for lavender marriages, chosen co-parenting, and intentional companionship. The app for partnerships built on honesty, not convention. Download on iOS." />
        <link rel="canonical" href="https://www.llma.life/" />
        <meta property="og:url" content="https://www.llma.life/" />
        <meta property="og:title" content="LLMA - The Lavender Marriage App" />
        <meta property="og:description" content="Lavender marriages. Chosen co-parents. Intentional companions. Find your person and build something real." />
        <meta property="og:image" content="https://www.llma.life/og-image.png" />
        <meta name="twitter:title" content="LLMA - The Lavender Marriage App" />
        <meta name="twitter:description" content="Find your intentional partner. Lavender marriages, co-parenting, and authentic companionship." />
        <meta name="twitter:image" content="https://www.llma.life/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'LLMA',
          alternateName: 'Life & Love Made Authentic',
          url: 'https://www.llma.life',
          logo: 'https://www.llma.life/llma-logo.png',
          description: 'LLMA is the world\'s first matchmaking platform for intentional platonic partnerships — lavender marriages, chosen co-parenting, and authentic companionship.',
          sameAs: [
            'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909',
          ],
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'MobileApplication',
          name: 'LLMA - Intentional Partnerships',
          description: 'The lavender marriage app. Find your intentional partner — gay men and straight women building real partnerships, co-parenting, and chosen family.',
          operatingSystem: 'iOS',
          applicationCategory: 'LifestyleApplication',
          url: 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          author: {
            '@type': 'Organization',
            name: 'LLMA',
            url: 'https://www.llma.life',
          },
        })}</script>
      </Helmet>
      <Nav />
      <VideoHero />
      <AppGateway />
      <FeaturedVideo />
      <WhoItsFor />
      <GuidePromo />
      <CourseTeaser />
      <PhotoGrid />
      <VideoGrid />
      <TikTokSection />
      <BlogPreview />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
}
