import { Link } from 'react-router-dom';
import { sortedPosts } from '../content/blogPosts';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';

// ── Shared styles ────────────────────────────────────────────────────────────
const S = {
  bg: '#0D0A0B',
  purple: '#8F5CB8',
  purpleHover: '#7C4DA0',
  purpleMuted: 'rgba(143,92,184,0.12)',
  purpleBorder: 'rgba(143,92,184,0.25)',
  coral: '#DC5A4B',
  lavender: '#C59FE1',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
};

// ── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(13,10,11,0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      fontFamily: S.font,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: 'linear-gradient(135deg, #8F5CB8, #DC5A4B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 800, color: '#fff',
          }}>L</div>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>LLMA</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '8px 14px', borderRadius: 8 }}>
            Blog
          </Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '9px 18px', borderRadius: 9999,
            background: S.purple, color: '#fff',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: '120px 24px 80px', position: 'relative', overflow: 'hidden',
      fontFamily: S.font,
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 600, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, rgba(143,92,184,0.18) 0%, rgba(220,90,75,0.08) 40%, transparent 70%)',
      }} />

      {/* Eyebrow */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
        background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
        borderRadius: 9999, padding: '6px 16px',
        fontSize: 12, fontWeight: 700, color: S.lavender,
        letterSpacing: '0.05em', textTransform: 'uppercase',
      }}>
        ✦ Life &amp; Love Made Authentic
      </div>

      {/* Title */}
      <h1 style={{
        fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 800,
        lineHeight: 1.08, letterSpacing: '-0.03em', color: '#fff',
        margin: '0 0 16px', maxWidth: 900,
      }}>
        Partnership built on{' '}
        <span style={{ background: 'linear-gradient(135deg, #C59FE1 0%, #8F5CB8 50%, #DC5A4B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          intention
        </span>
        , not convention.
      </h1>

      {/* Subtitle */}
      <p style={{
        fontSize: 'clamp(18px, 2.5vw, 22px)', color: 'rgba(255,255,255,0.55)',
        maxWidth: 580, margin: '0 0 44px', lineHeight: 1.6, fontWeight: 400,
      }}>
        LLMA connects lavender marriage partners, chosen family, and intentional co-parents. Find your people. Build something real.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 64 }}>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '15px 32px', borderRadius: 9999,
          background: S.purple, color: '#fff',
          fontSize: 16, fontWeight: 700, textDecoration: 'none',
          boxShadow: '0 4px 24px rgba(143,92,184,0.4)',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Download on App Store
        </a>
        <Link to="/blog" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '15px 32px', borderRadius: 9999,
          background: 'transparent', color: 'rgba(255,255,255,0.7)',
          border: '1px solid rgba(255,255,255,0.12)',
          fontSize: 16, fontWeight: 600, textDecoration: 'none',
        }}>
          Read the Blog →
        </Link>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { val: '50K+', label: 'Community Members' },
          { val: '4.8★', label: 'App Store Rating' },
          { val: '127+', label: 'Countries' },
        ].map(s => (
          <div key={s.val} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{s.val}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── What is LLMA ─────────────────────────────────────────────────────────────
function WhatIsLLMA() {
  const cards = [
    {
      icon: '💜',
      title: 'Lavender Marriage Partners',
      body: 'Gay men and straight women building intentional, authentic life partnerships — on their own terms.',
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Chosen Co-Parents',
      body: 'Finding the right person to raise a family with, regardless of romantic attraction.',
    },
    {
      icon: '🤝',
      title: 'Intentional Companions',
      body: 'Ride-or-die partners for navigating life, sharing households, and building legacies together.',
    },
  ];

  return (
    <section style={{ padding: '100px 24px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
            display: 'inline-block', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender,
            marginBottom: 16,
          }}>
            Who It's For
          </div>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Relationships beyond the conventional
          </h2>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>
            LLMA is for people who know exactly what they want — and it doesn't fit in a Hallmark movie.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {cards.map(c => (
            <div key={c.title} style={{
              padding: '32px 28px',
              background: '#151214',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 20,
            }}>
              <div style={{ fontSize: 36, marginBottom: 20 }}>{c.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.01em' }}>{c.title}</h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.6 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Blog Preview ─────────────────────────────────────────────────────────────
function BlogPreview() {
  const preview = sortedPosts.slice(0, 3);

  return (
    <section style={{ padding: '80px 24px 100px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 8 }}>
              The Lavender Logs
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
              Stories from the community
            </h2>
          </div>
          <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: S.lavender, textDecoration: 'none' }}>
            View all posts →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {preview.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                padding: '28px 24px',
                background: '#151214',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                height: '100%',
                transition: 'border-color 200ms ease, transform 200ms ease',
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(143,92,184,0.35)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ marginBottom: 16 }}>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: 9999,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                    background: post.tagBg, color: post.tagColor,
                    border: `1px solid ${post.tagBorder || post.tagBg}`,
                  }}>
                    {post.tag}
                  </span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.3, letterSpacing: '-0.01em', flexGrow: 1 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: '0 0 20px', lineHeight: 1.55 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{post.date}</span>
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

// ── Download CTA ─────────────────────────────────────────────────────────────
function DownloadCTA() {
  return (
    <section style={{ padding: '0 24px 120px', fontFamily: S.font }}>
      <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
        <div style={{
          padding: '60px 40px',
          background: 'linear-gradient(135deg, rgba(143,92,184,0.12) 0%, rgba(220,90,75,0.08) 100%)',
          border: '1px solid rgba(197,159,225,0.15)',
          borderRadius: 28,
        }}>
          <div style={{ fontSize: 44, marginBottom: 20 }}>💜</div>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
            Ready to find your people?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', margin: '0 0 36px', lineHeight: 1.6 }}>
            Join thousands of people building intentional, authentic partnerships on their own terms.
          </p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: '15px 36px', borderRadius: 9999,
            background: S.purple, color: '#fff',
            fontSize: 16, fontWeight: 700, textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(143,92,184,0.4)',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on the App Store
          </a>
          <div style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            Free · iOS · Android coming soon
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 24px',
      fontFamily: S.font,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: 'linear-gradient(135deg, #8F5CB8, #DC5A4B)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 800, color: '#fff',
          }}>L</div>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>LLMA</span>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <Link to="/blog" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Blog</Link>
          <Link to="/PrivacyPolicy" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Privacy</Link>
          <Link to="/TermsOfService" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Terms</Link>
          <a href="https://www.youtube.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>YouTube</a>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© 2026 LLMA. All rights reserved.</div>
      </div>
    </footer>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MarketingHome() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff' }}>
      <Nav />
      <Hero />
      <WhatIsLLMA />
      <BlogPreview />
      <DownloadCTA />
      <Footer />
    </div>
  );
}
