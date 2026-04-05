import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';

const S = {
  bg: '#0D0A0B',
  purple: '#8F5CB8',
  purpleMuted: 'rgba(143,92,184,0.12)',
  purpleBorder: 'rgba(143,92,184,0.25)',
  coral: '#DC5A4B',
  coralMuted: 'rgba(220,90,75,0.1)',
  coralBorder: 'rgba(220,90,75,0.25)',
  lavender: '#C59FE1',
  lavenderMuted: 'rgba(197,159,225,0.1)',
  lavenderBorder: 'rgba(197,159,225,0.25)',
  teal: '#3ABFAA',
  tealMuted: 'rgba(58,191,170,0.1)',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
  card: '#111011',
  cardBorder: 'rgba(255,255,255,0.06)',
};

const STATS = [
  { value: '80M+', label: 'Content Views', sub: 'on TikTok' },
  { value: '170K+', label: 'Followers', sub: '@itsmcmartyfly' },
  { value: '1,000+', label: 'Members', sub: 'across 20+ countries' },
  { value: '20+', label: 'Countries', sub: 'active users' },
];

const COVERAGE = [
  {
    flag: '🇬🇧',
    outlet: 'Metro UK',
    date: 'December 31, 2025',
    headline: 'I\'m a gay man in a lavender marriage — we don\'t have sex but I won\'t divorce my wife',
    type: 'print',
  },
  {
    flag: '🇬🇧',
    outlet: 'LadBible',
    date: 'December 31, 2025',
    headline: 'Gay man in sexless \'lavender marriage\' explains why he won\'t get divorce',
    type: 'print',
  },
  {
    flag: '🇬🇧',
    outlet: 'Tyla',
    date: 'January 7, 2026',
    headline: 'Man in \'lavender marriage\' explains why he won\'t leave wife despite no sex life',
    type: 'print',
  },
  {
    flag: '🇬🇧',
    outlet: 'Need To Know',
    date: 'February 23, 2026',
    headline: 'I\'m in a LAVENDER marriage — we get ridiculed online but we\'ve lasted 14 years',
    type: 'print',
  },
  {
    flag: '🇺🇸',
    outlet: 'National Law Review',
    date: 'March 4, 2026',
    headline: 'The First Lavender Marriage Matchmaking App Built by Someone Actually Living One',
    type: 'print',
  },
  {
    flag: '🎙️',
    outlet: 'The Juicy Scoop with Heather McDonald',
    date: '2025',
    headline: 'Marty Thomas on Lavender Marriage — living it, building a platform around it',
    type: 'podcast',
  },
  {
    flag: '🇦🇺',
    outlet: 'Saucy Secrets — KIIS Australia',
    date: '2025',
    headline: 'Lavender Marriages: what they are, who chooses them, and why it\'s growing',
    type: 'podcast',
  },
];

const TOPICS = [
  'Lavender marriage — history, modern revival, and lived experience',
  'Intentional partnership vs. traditional dating culture',
  'Chosen family structures and legal considerations',
  'LGBTQ+ safety and relationship alternatives',
  'Gen Z dating app burnout and what comes next',
  'Building a tech platform around a social movement',
  'The economics of solo vs. partnered living',
  'Coming out within a marriage — what both partners actually go through',
];

export default function Press() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff', fontFamily: S.font }}>
      <Helmet>
        <title>Press & Media | LLMA - The Lavender Marriage App</title>
        <meta name="description" content="Press kit, media coverage, and interview requests for LLMA — the lavender marriage app connecting gay men and straight women for intentional partnerships." />
        <link rel="canonical" href="https://llma.life/press" />
        <meta property="og:url" content="https://llma.life/press" />
        <meta property="og:title" content="Press & Media | LLMA" />
        <meta property="og:description" content="Press kit and media coverage for LLMA — the world's first app for lavender marriages and intentional platonic partnerships." />
        <meta property="og:image" content="https://llma.life/og-image.png" />
      </Helmet>

      {/* Nav */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(13,10,11,0.92)', backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${S.cardBorder}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: 60,
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/llma-logo.png" alt="LLMA" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>llma.life</span>
        </Link>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link to="/5-truths-that-saved-me" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}>Courses</Link>
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}>Blog</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            background: S.purple, color: '#fff', padding: '7px 16px', borderRadius: 20,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>Get the App</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: 120, paddingBottom: 72, paddingLeft: 24, paddingRight: 24,
        maxWidth: 900, margin: '0 auto', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 800, height: 400, background: 'radial-gradient(ellipse, rgba(143,92,184,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative' }}>
          <div style={{
            display: 'inline-block', background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
            borderRadius: 20, padding: '6px 16px', marginBottom: 24,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender,
          }}>
            Press & Media
          </div>
          <h1 style={{
            fontSize: 'clamp(40px, 7vw, 76px)', fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-2px', marginBottom: 20,
          }}>
            LLMA in the News
          </h1>
          <p style={{
            fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65,
            maxWidth: 560, margin: '0 auto 48px',
          }}>
            The world's first platform for intentional partnerships and lavender marriages — built by someone living it.
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12,
            maxWidth: 760, margin: '0 auto',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                background: S.card, border: `1px solid ${S.cardBorder}`,
                borderRadius: 16, padding: '24px 16px', textAlign: 'center',
              }}>
                <p style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-1px', color: S.lavender, marginBottom: 4 }}>{s.value}</p>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{s.label}</p>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Marty */}
      <section style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32,
          background: S.card, border: `1px solid ${S.cardBorder}`,
          borderRadius: 24, padding: '40px 44px',
        }}>
          <div>
            <div style={{
              width: '100%', aspectRatio: '1', borderRadius: 20,
              background: 'linear-gradient(135deg, rgba(143,92,184,0.3) 0%, rgba(220,90,75,0.2) 100%)',
              border: `1px solid ${S.purpleBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 64, marginBottom: 16,
            }}>
              💜
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Lavender Marriage' },
                { label: 'Intentional Partnership' },
                { label: 'Chosen Family' },
                { label: 'LGBTQ+ Founder' },
                { label: 'Gilbert, AZ' },
              ].map((tag, i) => (
                <span key={i} style={{
                  display: 'inline-block', background: S.purpleMuted,
                  border: `1px solid ${S.purpleBorder}`, borderRadius: 20,
                  padding: '4px 12px', fontSize: 12, fontWeight: 600, color: S.lavender,
                  width: 'fit-content',
                }}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: S.lavender, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
              About Marty Thomas
            </p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 20 }}>
              Founder, LLMA Ventures LLC
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
              Marty Thomas is the founder of LLMA (Life and Love Made Authentic) and the creator of llma.app — the world's first dedicated platform for intentional partnerships, including lavender marriages.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
              A former Sysco executive who spent years championing LGBTQ+ inclusion in corporate America, Marty went public about his own lavender marriage with his wife Brandi on TikTok in 2025. The internet responded with <strong style={{ color: '#fff' }}>80 million views</strong>.
            </p>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
              What started as radical transparency became a movement. Marty's content — chronicling his chosen family with Brandi, their daughter Londyn, and their French Bulldog Dior in Gilbert, Arizona — attracted 170,000+ followers and thousands of daily messages from people who finally felt seen. He built LLMA because no platform existed for this community.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <a href="mailto:martin@llma.life" style={{
                background: S.purple, color: '#fff', padding: '10px 20px',
                borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: 'none',
              }}>
                Email for Interviews
              </a>
              <a href="https://www.tiktok.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{
                background: 'transparent', color: 'rgba(255,255,255,0.7)',
                border: `1px solid ${S.cardBorder}`, padding: '10px 20px',
                borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}>
                @itsmcmartyfly →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 24px' }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 8 }}>Press Coverage</h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>
          Additional coverage available upon request. The Sun UK feature coming soon.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {COVERAGE.map((item, i) => (
            <div key={i} style={{
              background: S.card, border: `1px solid ${S.cardBorder}`,
              borderRadius: 16, padding: '24px 28px',
              display: 'flex', alignItems: 'flex-start', gap: 20,
              transition: 'border-color 0.2s',
            }}>
              {/* Flag / icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                background: item.type === 'podcast' ? S.coralMuted : S.purpleMuted,
                border: `1px solid ${item.type === 'podcast' ? S.coralBorder : S.purpleBorder}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
              }}>
                {item.flag}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: '#fff' }}>{item.outlet}</span>
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    color: item.type === 'podcast' ? S.coral : S.lavender,
                    background: item.type === 'podcast' ? S.coralMuted : S.lavenderMuted,
                    border: `1px solid ${item.type === 'podcast' ? S.coralBorder : S.lavenderBorder}`,
                    borderRadius: 20, padding: '2px 10px', textTransform: 'uppercase', letterSpacing: '0.06em',
                  }}>
                    {item.type === 'podcast' ? 'Podcast' : 'Press'}
                  </span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{item.date}</span>
                </div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>
                  "{item.headline}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About LLMA */}
      <section style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(143,92,184,0.12) 0%, rgba(220,90,75,0.06) 100%)',
          border: `1px solid ${S.purpleBorder}`,
          borderRadius: 24, padding: '44px 48px',
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: S.lavender, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
            About LLMA
          </p>
          <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.3px', marginBottom: 20 }}>
            The world's first platform for intentional partnerships
          </h3>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
            LLMA (Life and Love Made Authentic) is the world's first platform for intentional partnerships. It features a proprietary compatibility matching system, a 160-card assessment deck with AI-powered insights, photo reveal tools, and tiered membership plans.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 24 }}>
            LLMA is live in 20+ countries with 1,000+ members spanning the full spectrum of people seeking non-romantic life partnership: LGBTQ+ safety, financial stability, chosen family, and the rejection of traditional dating culture.
          </p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-block', background: S.purple, color: '#fff',
            padding: '12px 24px', borderRadius: 12,
            fontSize: 14, fontWeight: 700, textDecoration: 'none',
          }}>
            Download LLMA on iOS →
          </a>
        </div>
      </section>

      {/* Topics + Contact side by side */}
      <section style={{ maxWidth: 900, margin: '0 auto 80px', padding: '0 24px', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 24 }}>

        {/* Topics */}
        <div style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 20, padding: '32px 36px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
            Topics Available for Comment
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {TOPICS.map((topic, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <span style={{ color: S.purple, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>→</span>
                <span style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 20, padding: '32px 28px', flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
              Media Contact
            </p>
            <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Marty Thomas</p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>Founder, LLMA Ventures LLC</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:martin@llma.life" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: S.lavender, textDecoration: 'none', fontSize: 14, fontWeight: 600,
              }}>
                <span style={{ fontSize: 16 }}>✉️</span> martin@llma.life
              </a>
              <a href="tel:+13238256664" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14,
              }}>
                <span style={{ fontSize: 16 }}>📞</span> (323) 825-6664
              </a>
              <a href="https://www.tiktok.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14,
              }}>
                <span style={{ fontSize: 16 }}>🎵</span> @itsmcmartyfly
              </a>
              <a href="https://www.instagram.com/thelavlam" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14,
              }}>
                <span style={{ fontSize: 16 }}>📸</span> @thelavlam
              </a>
              <a href="https://www.youtube.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14,
              }}>
                <span style={{ fontSize: 16 }}>▶️</span> @itsmcmartyfly
              </a>
            </div>

            <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${S.cardBorder}`, fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
              Media kit, app screenshots, and usage data available upon request.
            </div>
          </div>

          {/* Press badge */}
          <div style={{
            background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
            borderRadius: 16, padding: '20px 24px', textAlign: 'center',
          }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 4 }}>As seen in</p>
            <p style={{ fontSize: 15, fontWeight: 700, color: S.lavender, lineHeight: 1.6 }}>
              Metro UK · LadBible · Tyla · Need To Know · National Law Review
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${S.cardBorder}`,
        padding: '32px 24px', textAlign: 'center',
        color: 'rgba(255,255,255,0.3)', fontSize: 13,
      }}>
        <p style={{ marginBottom: 8 }}>
          <Link to="/" style={{ color: S.lavender, textDecoration: 'none', fontWeight: 600 }}>llma.life</Link>
          {' · '}
          <Link to="/5-truths-that-saved-me" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Courses</Link>
          {' · '}
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</Link>
          {' · '}
          <a href="https://llma.app" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>llma.app</a>
        </p>
        <p>© 2026 LLMA Ventures LLC · martin@llma.life</p>
      </footer>
    </div>
  );
}
