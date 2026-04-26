import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';

// YouTube hero video — Marty Thomas interview clip
const YOUTUBE_VIDEO_ID = '5P47i_qFp_M';
const YOUTUBE_START_SECONDS = 347;

// Press screenshot images live in llma.app's public folder; we reference
// them via absolute URL so they don't have to be duplicated here.
const APP_ASSETS = 'https://www.llma.app';

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
  tealBorder: 'rgba(58,191,170,0.25)',
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

const PRESS_COVERAGE = [
  {
    outlet: 'Metro UK',
    headline: "I'm a gay man in a lavender marriage, we don't have sex but I won't divorce my wife",
    url: 'https://metro.co.uk/2025/12/31/im-a-gay-man-a-lavender-marriage-dont-sex-wont-divorce-wife-25951304/',
    date: 'December 31, 2025',
    flag: '🇬🇧',
    type: 'Feature',
    accent: '#8F5CB8',
    eyebrow: 'Marriage, identity, and modern partnership',
    image: `${APP_ASSETS}/METRO%20UK.jpg`,
  },
  {
    outlet: 'LADbible',
    headline: "Gay man in sexless 'lavender marriage' explains why he won't get divorce",
    url: 'https://www.ladbible.com/lifestyle/lavender-marriage-wife-relationships-divorce-us-arizona-097007-20251231',
    date: 'December 31, 2025',
    flag: '🇬🇧',
    type: 'Feature',
    accent: '#DC5A4B',
    eyebrow: 'A nontraditional family gets mainstream attention',
    image: `${APP_ASSETS}/LAD%20Bible.jpg`,
  },
  {
    outlet: 'Tyla',
    headline: "Man in 'lavender marriage' explains why he won't leave wife despite no sex life",
    url: 'https://www.tyla.com/life/sex-and-relationships/lavender-marriage-gay-man-wife-divorce-relationship-720104-20260107',
    date: 'January 7, 2026',
    flag: '🇬🇧',
    type: 'Feature',
    accent: '#A97BCF',
    eyebrow: 'The internet keeps asking, so media keeps covering it',
    image: `${APP_ASSETS}/Tyla.jpg`,
  },
  {
    outlet: 'Need To Know',
    headline: "I'm in a LAVENDER marriage, we get ridiculed online but we've lasted 14 years",
    url: 'https://needtoknow.co.uk/2026/02/23/im-in-a-lavender-marriage-we-get-ridiculed-online-but-weve-lasted-14-years/',
    date: 'February 23, 2026',
    flag: '🇬🇧',
    type: 'Feature',
    accent: '#7C4DA0',
    eyebrow: 'Longevity beats the comment section',
    image: `${APP_ASSETS}/need%20to%20know.jpg`,
  },
  {
    outlet: 'National Law Review',
    headline: 'The First Lavender Marriage Matchmaking App Built by Someone Actually Living One',
    url: 'https://natlawreview.com/press-releases/first-lavender-marriage-matchmaking-app-built-someone-actually-living-one',
    date: 'March 4, 2026',
    flag: '🇺🇸',
    type: 'Press Release',
    accent: '#C59FE1',
    eyebrow: 'Founder-market fit, but make it official',
    image: `${APP_ASSETS}/National%20Law%20REview.jpg`,
  },
  {
    outlet: 'Economic Policy Times',
    headline: 'LLMA App Launches on iOS, Offering the First Lavender Marriage Platform',
    url: 'https://www.llma.app/press',
    date: 'March 2026',
    flag: '🇺🇸',
    type: 'Press Release',
    accent: '#5A8FBC',
    eyebrow: 'Coverage of the platform launch and market positioning',
    image: `${APP_ASSETS}/economic%20policy%20times.jpg`,
  },
];

const PODCASTS = [
  {
    outlet: 'The Juicy Scoop with Heather McDonald',
    headline: 'Chris Franjola, Epstein, Wicked Press and Gay Clubs',
    url: 'https://www.youtube.com/watch?v=blnfGQljuQg&t=3334s',
    videoId: 'blnfGQljuQg',
    date: '2025',
    flag: '🎙️',
    accent: '#8F5CB8',
    kicker: 'Interview',
    eyebrow: 'Big audience, bigger conversation',
  },
  {
    outlet: "The Party's Over",
    headline: 'Podcast and interview appearance',
    url: 'https://www.youtube.com/watch?v=sSPoXDsJfTQ&t=43s',
    videoId: 'sSPoXDsJfTQ',
    date: '2025',
    flag: '🎙️',
    accent: '#DC5A4B',
    kicker: 'Interview',
    eyebrow: 'Thoughtful conversation, less tabloid energy',
  },
  {
    outlet: 'Modern Marriage with Monica',
    headline: 'Lavender Marriage Exposed: Why Women LOVE the Idea of Marrying Gay Men',
    url: 'https://www.youtube.com/watch?v=ZD4dFWe7x80',
    videoId: 'ZD4dFWe7x80',
    date: '2025',
    flag: '🎙️',
    accent: '#3ABFAA',
    kicker: 'Interview',
    eyebrow: 'A modern-marriage podcast takes on the lavender conversation',
  },
  {
    outlet: 'Saucy Secrets — KIIS FM Sydney',
    headline: 'Lavender Marriages: what they are, who chooses them, and why it’s growing',
    url: 'https://www.youtube.com/watch?v=hWb8Ky9u24M&t=457s',
    videoId: 'hWb8Ky9u24M',
    date: '2025',
    flag: '🇦🇺',
    accent: '#A97BCF',
    kicker: 'Podcast',
    eyebrow: 'International curiosity, same story hook',
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

function YouTubeHero({ videoId, startSeconds }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startSeconds}&rel=0`;
  return (
    <div style={{
      width: '100%', aspectRatio: '16 / 9', position: 'relative',
      background: '#000', borderRadius: 20, overflow: 'hidden',
      border: `1px solid ${S.cardBorder}`,
    }}>
      {isPlaying ? (
        <iframe
          src={embedUrl}
          title="LLMA on YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label="Play video"
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            padding: 0, margin: 0, border: 0, cursor: 'pointer',
            background: 'transparent',
          }}
        >
          <img
            src={thumbnailUrl}
            alt="YouTube video thumbnail"
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(13,10,11,0.35) 0%, rgba(13,10,11,0.15) 50%, rgba(13,10,11,0.45) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 88, height: 88, borderRadius: '50%',
            background: S.purple, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 12px 40px rgba(143,92,184,0.55)',
            pointerEvents: 'none',
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

function PressCard({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', flexDirection: 'column',
        background: S.card, border: `1px solid ${S.cardBorder}`,
        borderRadius: 16, overflow: 'hidden', textDecoration: 'none',
        transition: 'transform 200ms ease, border-color 200ms ease',
      }}
    >
      {/* Accent strip */}
      <div style={{ height: 4, width: '100%', flexShrink: 0, background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />

      {/* Portrait screenshot */}
      <div style={{ width: '100%', aspectRatio: '2 / 3', background: '#0A0A0F', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={item.image}
          alt={`${item.outlet} coverage screenshot`}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 20, gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: item.accent }}>
            {item.flag} {item.outlet}
          </span>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            background: `${item.accent}26`, color: item.accent,
            borderRadius: 9999, padding: '3px 10px',
          }}>
            {item.type}
          </span>
        </div>

        <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, color: '#fff', margin: 0, flex: 1 }}>
          {item.headline}
        </p>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0 }}>
          {item.eyebrow}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: `1px solid ${S.cardBorder}` }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{item.date}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: item.accent }}>↗</span>
        </div>
      </div>
    </a>
  );
}

function PodcastCard({ item }) {
  const href = item.url || '#contact';
  const isExternal = !!item.url;
  const hasVideo = !!item.videoId;
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{
        display: 'flex', flexDirection: 'column',
        background: S.card, border: `1px solid ${S.cardBorder}`,
        borderRadius: 16, overflow: 'hidden', textDecoration: 'none',
        transition: 'transform 200ms ease, border-color 200ms ease',
      }}
    >
      {/* Accent strip */}
      <div style={{ height: 4, width: '100%', flexShrink: 0, background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />

      {/* YouTube thumbnail (16:9) for podcasts with video */}
      {hasVideo && (
        <div style={{ width: '100%', aspectRatio: '16 / 9', background: '#000', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
          <img
            src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`}
            alt={`${item.outlet} podcast video thumbnail`}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(13,10,11,0.0) 50%, rgba(13,10,11,0.45) 100%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 56, height: 56, borderRadius: '50%',
            background: item.accent, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 8px 24px ${item.accent}66`,
            pointerEvents: 'none',
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 20, gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: item.accent }}>
            {item.flag} {item.outlet}
          </span>
          <span style={{
            fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
            background: `${item.accent}26`, color: item.accent,
            borderRadius: 9999, padding: '3px 10px',
          }}>
            🎙 {item.kicker}
          </span>
        </div>

        <p style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.4, color: '#fff', margin: 0, flex: 1 }}>
          {item.headline}
        </p>

        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, margin: 0 }}>
          {item.eyebrow}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 8, borderTop: `1px solid ${S.cardBorder}` }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{item.date}</span>
          {isExternal && <span style={{ fontSize: 13, fontWeight: 700, color: item.accent }}>↗</span>}
        </div>
      </div>
    </a>
  );
}

export default function Press() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff', fontFamily: S.font }}>
      <Helmet>
        <title>Press & Media | LLMA - The Lavender Marriage App</title>
        <meta name="description" content="Press kit, media coverage, and interview requests for LLMA — the lavender marriage app connecting gay men and straight women for intentional partnerships. Featured in Metro UK, LADbible, Tyla, National Law Review." />
        <link rel="canonical" href="https://www.llma.life/press" />
        <meta property="og:url" content="https://www.llma.life/press" />
        <meta property="og:title" content="Press & Media | LLMA" />
        <meta property="og:description" content="Press kit and media coverage for LLMA — featured in Metro UK, LADbible, Tyla, Need To Know, National Law Review, and more." />
        <meta property="og:image" content="https://www.llma.life/og-image.png" />
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
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}>Blog</Link>
          <Link to="/community" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}>Community</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            background: S.purple, color: '#fff', padding: '7px 16px', borderRadius: 20,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>Get the App</a>
        </div>
      </nav>

      {/* YouTube Video Hero */}
      <section style={{
        paddingTop: 84, paddingLeft: 24, paddingRight: 24,
        maxWidth: 1100, margin: '0 auto',
      }}>
        <YouTubeHero videoId={YOUTUBE_VIDEO_ID} startSeconds={YOUTUBE_START_SECONDS} />
      </section>

      {/* Hero */}
      <section style={{
        paddingTop: 56, paddingBottom: 72, paddingLeft: 24, paddingRight: 24,
        maxWidth: 1100, margin: '0 auto', textAlign: 'center',
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
            maxWidth: 600, margin: '0 auto 16px',
          }}>
            Featured in Metro UK, LADbible, Tyla, National Law Review, and more. The world’s first platform for intentional partnerships and lavender marriages — built by someone living it.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
            <a href="mailto:martin@llma.life" style={{
              background: S.purple, color: '#fff', padding: '12px 24px', borderRadius: 9999,
              fontSize: 14, fontWeight: 700, textDecoration: 'none',
            }}>
              ✉ Media Contact
            </a>
            <a href="https://www.tiktok.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              border: `1px solid ${S.cardBorder}`, padding: '12px 24px', borderRadius: 9999,
              fontSize: 14, fontWeight: 600, textDecoration: 'none',
            }}>
              @itsmcmartyfly →
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12,
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
      <section style={{ maxWidth: 1100, margin: '0 auto 64px', padding: '0 24px' }}>
        <div style={{
          background: S.card, border: `1px solid ${S.cardBorder}`,
          borderRadius: 24, padding: '36px 40px',
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: S.lavender, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
            About Marty Thomas
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 16 }}>
            Marty Thomas is the founder of LLMA (Life and Love Made Authentic) and the creator of llma.app, the first dedicated platform for intentional partnerships and lavender marriages. After going public about his own lavender marriage, Marty turned lived experience into a product, a movement, and a media story people keep clicking.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, margin: 0 }}>
            His content on chosen family, nontraditional partnership, and radical honesty has generated major traction across social and earned media, while LLMA gives that audience somewhere real to go.
          </p>
        </div>
      </section>

      {/* Featured Coverage */}
      <section style={{ maxWidth: 1100, margin: '0 auto 64px', padding: '0 24px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 16 }}>
          Featured Coverage
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {PRESS_COVERAGE.map((item) => (
            <PressCard key={item.url} item={item} />
          ))}
        </div>
      </section>

      {/* Podcasts & Interviews */}
      <section style={{ maxWidth: 1100, margin: '0 auto 64px', padding: '0 24px' }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 16 }}>
          Podcasts & Interviews
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {PODCASTS.map((item, i) => (
            <PodcastCard key={i} item={item} />
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section style={{ maxWidth: 760, margin: '0 auto 64px', padding: '0 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(143,92,184,0.15) 0%, rgba(220,90,75,0.08) 100%)',
          border: `1px solid ${S.purpleBorder}`,
          borderRadius: 20, padding: '36px 32px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 32, color: S.lavender, opacity: 0.4, margin: '0 0 16px', lineHeight: 1 }}>“</p>
          <p style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.5, color: '#fff', maxWidth: 600, margin: '0 auto' }}>
            Every article I read quotes academics or talks about apps that don’t exist yet. I’ve been living this. I built the platform for it.
          </p>
          <p style={{ marginTop: 16, fontSize: 13, fontWeight: 700, color: S.lavender }}>
            Marty Thomas, Founder of LLMA
          </p>
        </div>
      </section>

      {/* Topics + Contact */}
      <section id="contact" style={{ maxWidth: 1100, margin: '0 auto 80px', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
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
        <div style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 20, padding: '32px 28px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
            Media Contact
          </p>
          <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 4 }}>Marty Thomas</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 24 }}>Founder, LLMA Ventures LLC</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="mailto:martin@llma.life" style={{ display: 'flex', alignItems: 'center', gap: 10, color: S.lavender, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>
              <span style={{ fontSize: 16 }}>✉️</span> martin@llma.life
            </a>
            <a href="tel:+13238256664" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>📞</span> (323) 825-6664
            </a>
            <a href="https://www.tiktok.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>🎵</span> @itsmcmartyfly on TikTok
            </a>
            <a href="https://www.instagram.com/thelavlam" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>📸</span> @thelavlam on Instagram
            </a>
            <a href="https://www.youtube.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>▶️</span> @itsmcmartyfly on YouTube
            </a>
          </div>

          <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${S.cardBorder}`, fontSize: 13, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
            Media kit, app screenshots, and usage data available upon request.
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
          <Link to="/blog" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Blog</Link>
          {' · '}
          <Link to="/community" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Community</Link>
          {' · '}
          <a href="https://llma.app" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>llma.app</a>
        </p>
        <p>© 2026 LLMA Ventures LLC · martin@llma.life</p>
      </footer>
    </div>
  );
}
