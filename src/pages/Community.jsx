import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';
const APP_URL = 'https://llma.app';

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
  amber: '#D4A94A',
  amberMuted: 'rgba(212,169,74,0.1)',
  amberBorder: 'rgba(212,169,74,0.25)',
  teal: '#4AADA8',
  tealMuted: 'rgba(74,173,168,0.1)',
  tealBorder: 'rgba(74,173,168,0.25)',
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
            <Link to="/community" style={{ fontSize: 13, fontWeight: 700, color: S.lavender, textDecoration: 'none', padding: '8px 12px', borderRadius: 8 }}>Community</Link>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.55)', textDecoration: 'none', padding: '8px 12px', borderRadius: 8 }}>App</a>
          </span>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', borderRadius: 9999,
            background: S.purple, color: '#fff',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
            marginLeft: 8,
          }}>
            <span className="nav-cta-text">Download App</span>
            <span className="nav-cta-short" style={{ display: 'none' }}>App</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

// ── Stage data ────────────────────────────────────────────────────────────────
const STAGES = [
  {
    id: 'awakening',
    num: '01',
    label: 'Awakening',
    tagline: 'Something doesn\'t fit.',
    color: S.amber,
    colorMuted: S.amberMuted,
    colorBorder: S.amberBorder,
    description: 'You\'ve felt it for years — a persistent gap between the life you\'re living and something deeper you can\'t name. You may be gay, bi, ace, or simply someone who never wanted a traditional marriage. This is where the reckoning begins.',
    threads: [
      'How I finally admitted it to myself after 17 years',
      'The difference between denial and not knowing yet',
      'Telling your therapist before anyone else',
    ],
    members: '2.4k',
  },
  {
    id: 'disclosure',
    num: '02',
    label: 'Disclosure',
    tagline: 'Telling the truth changes everything.',
    color: S.coral,
    colorMuted: S.coralMuted,
    colorBorder: S.coralBorder,
    description: 'Whether you\'re coming out to yourself, your partner, your family, or your community — disclosure is the hinge point. It feels like destruction. It\'s actually construction. People here have done it or are about to.',
    threads: [
      'I told my wife last night. Now what?',
      'Scripts for "the conversation" — what actually worked',
      'When your partner\'s reaction surprises you (good and bad)',
    ],
    members: '3.1k',
  },
  {
    id: 'redesign',
    num: '03',
    label: 'Redesign',
    tagline: 'Partnership is something you design.',
    color: S.purple,
    colorMuted: S.purpleMuted,
    colorBorder: S.purpleBorder,
    description: 'You\'ve had the conversation. Now comes the real work: deciding what your relationship becomes. Divorce? A lavender partnership? Co-parents who live separately? A committed companionate marriage? People here are building it in real time.',
    threads: [
      'We chose lavender marriage — 6 months in, here\'s what\'s true',
      'The agreement framework we used to restructure everything',
      'Kids, finances, and the holidays: navigating the complicated parts',
    ],
    members: '4.8k',
  },
  {
    id: 'building',
    num: '04',
    label: 'Building',
    tagline: 'Creating the life you actually want.',
    color: S.teal,
    colorMuted: S.tealMuted,
    colorBorder: S.tealBorder,
    description: 'You know what you want. Now you\'re building it — finding a co-parent, a business partner through marriage, a caregiver companion, or a platonic life partner. You\'re done with performance. You\'re here for alignment.',
    threads: [
      'How I found my co-parenting partner through LLMA',
      'What to include (and exclude) in your partnership agreement',
      'Telling your parents you\'re in a non-traditional arrangement',
    ],
    members: '2.2k',
  },
  {
    id: 'thriving',
    num: '05',
    label: 'Thriving',
    tagline: 'Living proof that it works.',
    color: S.lavender,
    colorMuted: S.lavenderMuted,
    colorBorder: S.lavenderBorder,
    description: 'You\'re on the other side. Your life looks nothing like what you were taught it should, and it\'s better. You\'re here to share what you know — and to remind people in earlier stages that this isn\'t just possible, it\'s real.',
    threads: [
      'Year 3 of our lavender marriage: a real update',
      'What I wish I\'d known in the Awakening stage',
      'Raising kids in a non-traditional household — they\'re fine',
    ],
    members: '1.9k',
  },
];

const COACHING_COHORTS = [
  {
    title: 'Disclosure Readiness',
    facilitator: 'Marty Thomas',
    format: '4 weeks · Live group calls · 8 people max',
    desc: 'For people who know they need to have the conversation but aren\'t ready. We build the language, the boundaries, and the courage — together.',
    color: S.coral,
    colorBorder: S.coralBorder,
    spots: '3 spots left',
  },
  {
    title: 'Partnership Redesign Lab',
    facilitator: 'Marty Thomas',
    format: '6 weeks · Workshop format · 12 people max',
    desc: 'For couples or individuals actively redesigning their relationship structure. Real frameworks, real agreements, real outcomes.',
    color: S.purple,
    colorBorder: S.purpleBorder,
    spots: 'Next cohort: July',
  },
  {
    title: 'Solo Into Partnership',
    facilitator: 'Community Coach',
    format: '4 weeks · Peer learning · Open enrollment',
    desc: 'For single people building their intentional partnership from scratch. Values mapping, profile building, and peer accountability.',
    color: S.teal,
    colorBorder: S.tealBorder,
    spots: 'Open',
  },
];

// ── Stage card ────────────────────────────────────────────────────────────────
function StageCard({ stage, isExpanded, onToggle }) {
  return (
    <div
      onClick={onToggle}
      style={{
        background: isExpanded ? `rgba(13,10,11,0.95)` : S.card,
        border: `1px solid ${isExpanded ? stage.color : S.cardBorder}`,
        borderRadius: 16,
        padding: '28px 32px',
        cursor: 'pointer',
        transition: 'border-color 0.2s, background 0.2s',
        fontFamily: S.font,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <span style={{
              fontSize: 11, fontWeight: 800, letterSpacing: '0.1em',
              color: stage.color, background: stage.colorMuted,
              border: `1px solid ${stage.colorBorder}`,
              borderRadius: 4, padding: '3px 8px',
            }}>
              STAGE {stage.num}
            </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
              {stage.members} members
            </span>
          </div>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            {stage.label}
          </h3>
          <p style={{ fontSize: 14, color: stage.color, fontWeight: 600, margin: 0 }}>{stage.tagline}</p>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: isExpanded ? stage.colorMuted : 'rgba(255,255,255,0.05)',
          border: `1px solid ${isExpanded ? stage.colorBorder : 'rgba(255,255,255,0.1)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 0.2s',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d={isExpanded ? 'M2 8L6 4L10 8' : 'M2 4L6 8L10 4'}
              stroke={isExpanded ? stage.color : 'rgba(255,255,255,0.5)'}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {isExpanded && (
        <div style={{ marginTop: 20 }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, margin: '0 0 20px' }}>
            {stage.description}
          </p>

          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', marginBottom: 12 }}>
            Active threads
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
            {stage.threads.map((t, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 14px',
                background: stage.colorMuted,
                border: `1px solid ${stage.colorBorder}`,
                borderRadius: 8,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: stage.color, flexShrink: 0 }} />
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.4 }}>{t}</span>
                <span style={{ marginLeft: 'auto', fontSize: 11, color: 'rgba(255,255,255,0.3)', flexShrink: 0 }}>
                  Join in app
                </span>
              </div>
            ))}
          </div>

          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '10px 20px', borderRadius: 9999,
              background: stage.color, color: '#fff',
              fontSize: 13, fontWeight: 700, textDecoration: 'none',
            }}
          >
            Find others at Stage {stage.num}
          </a>
        </div>
      )}
    </div>
  );
}

// ── Coaching card ─────────────────────────────────────────────────────────────
function CoachingCard({ cohort }) {
  return (
    <div style={{
      background: S.card,
      border: `1px solid ${S.cardBorder}`,
      borderRadius: 16,
      padding: '28px 28px 24px',
      display: 'flex', flexDirection: 'column',
      fontFamily: S.font,
    }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: cohort.color + '22',
        border: `1px solid ${cohort.colorBorder}`,
        borderRadius: 6,
        padding: '4px 10px',
        marginBottom: 16,
        width: 'fit-content',
      }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: cohort.color, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {cohort.spots}
        </span>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, color: '#fff', margin: '0 0 4px', letterSpacing: '-0.02em' }}>
        {cohort.title}
      </h3>
      <p style={{ fontSize: 13, color: cohort.color, fontWeight: 600, margin: '0 0 12px' }}>
        with {cohort.facilitator} &nbsp;·&nbsp; {cohort.format}
      </p>
      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: '0 0 20px', flex: 1 }}>
        {cohort.desc}
      </p>
      <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '11px 20px', borderRadius: 9999,
        border: `1px solid ${cohort.colorBorder}`,
        background: 'transparent', color: cohort.color,
        fontSize: 13, fontWeight: 700, textDecoration: 'none',
      }}>
        Apply in App
      </a>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function Community() {
  const [expandedStage, setExpandedStage] = useState(null);

  return (
    <div style={{ background: S.bg, minHeight: '100vh', fontFamily: S.font }}>
      <Helmet>
        <title>Community | LLMA - Find Your People</title>
        <meta name="description" content="Join the LLMA community — 1,000+ members across 20+ countries building intentional partnerships, lavender marriages, and chosen families." />
        <link rel="canonical" href="https://llma.life/community" />
        <meta property="og:url" content="https://llma.life/community" />
        <meta property="og:title" content="Community | LLMA - Find Your People" />
        <meta property="og:description" content="Join 1,000+ members across 20+ countries building intentional partnerships, lavender marriages, and chosen families." />
        <meta property="og:image" content="https://llma.life/og-image.png" />
      </Helmet>
      <Nav />

      {/* Hero */}
      <section style={{
        paddingTop: 140,
        paddingBottom: 80,
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute', top: 80, left: '50%', transform: 'translateX(-50%)',
          width: 600, height: 400,
          background: 'radial-gradient(ellipse, rgba(143,92,184,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="section-inner-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: S.lavenderMuted, border: `1px solid ${S.lavenderBorder}`,
            borderRadius: 9999, padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: S.lavender, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Lavender Blueprint Community
            </span>
          </div>
          <h1 style={{
            fontSize: 56, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em',
            lineHeight: 1.1, margin: '0 0 20px',
          }}>
            You're not the only one<br />
            <span style={{ color: S.lavender }}>redesigning this.</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, margin: '0 auto 36px', maxWidth: 560 }}>
            Thousands of people are somewhere on this journey — leaving performance, finding alignment, building partnerships that actually fit who they are. Find yours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 28px', borderRadius: 9999,
              background: S.purple, color: '#fff',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}>
              Join the Community
            </a>
            <a href="#stages" style={{
              padding: '14px 28px', borderRadius: 9999,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'transparent', color: 'rgba(255,255,255,0.75)',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}>
              Find your stage
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '24px 0',
      }}>
        <div className="section-inner-pad" style={{
          maxWidth: 1000, margin: '0 auto', padding: '0 40px',
          display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: 24,
        }}>
          {[
            { num: '14k+', label: 'Community members' },
            { num: '5', label: 'Journey stages' },
            { num: '80M+', label: 'Views on the conversation' },
            { num: 'Live', label: 'Group coaching cohorts' },
          ].map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{stat.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What is the Lavender Blueprint */}
      <section style={{ padding: '80px 0' }}>
        <div className="section-inner-pad" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center',
          }} className="community-two-col">
            <div>
              <p style={{ fontSize: 11, fontWeight: 800, color: S.purple, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
                What this is
              </p>
              <h2 style={{
                fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
                lineHeight: 1.2, margin: '0 0 20px',
              }}>
                The Lavender Blueprint
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 16px' }}>
                The Lavender Blueprint is the framework for people who have realized that traditional marriage — and its assumptions about attraction, sexuality, and partnership — doesn't fit them.
              </p>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, margin: '0 0 16px' }}>
                It was built from real experience. Marty Thomas spent 17 years performing a life that looked right from the outside. A Fortune 50 career. A conventional marriage. The whole thing. When he finally told his wife the truth — on a December night in Scottsdale — it wasn't the end of their relationship. It was the beginning of something they actually designed.
              </p>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
                This community exists because that kind of redesign is possible — and because you shouldn't have to figure it out alone.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { icon: '✦', label: 'Lavender marriages', desc: 'Committed partnerships built on values and agreements, not sexual chemistry' },
                { icon: '◎', label: 'Platonic co-parenting', desc: 'Intentional family-building with someone who shares your values, not necessarily your bed' },
                { icon: '⬡', label: 'Companionate partnerships', desc: 'Deep life partnership — shared home, finances, future — without romantic expectation' },
                { icon: '⊕', label: 'Strategic partnerships', desc: 'Marriage as a deliberate structure for mutual support, goals, and legacy' },
              ].map(type => (
                <div key={type.label} style={{
                  display: 'flex', gap: 14, alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12, padding: '16px 18px',
                }}>
                  <span style={{ fontSize: 16, color: S.lavender, flexShrink: 0, marginTop: 2 }}>{type.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 3 }}>{type.label}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{type.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stage explorer */}
      <section id="stages" style={{
        padding: '80px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="section-inner-pad" style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 800, color: S.lavender, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
              Where are you?
            </p>
            <h2 style={{
              fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
              lineHeight: 1.2, margin: '0 0 16px',
            }}>
              Five stages of the journey
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 500, margin: '0 auto' }}>
              Everyone enters at a different stage. Find yours and connect with people who are exactly where you are.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {STAGES.map(stage => (
              <StageCard
                key={stage.id}
                stage={stage}
                isExpanded={expandedStage === stage.id}
                onToggle={() => setExpandedStage(expandedStage === stage.id ? null : stage.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Peer matching CTA */}
      <section style={{
        padding: '80px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        background: 'linear-gradient(180deg, rgba(143,92,184,0.06) 0%, transparent 100%)',
      }}>
        <div className="section-inner-pad" style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
            borderRadius: 9999, padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: S.purple, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              In the App
            </span>
          </div>
          <h2 style={{
            fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
            lineHeight: 1.2, margin: '0 0 16px',
          }}>
            Find people at your exact stage
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 540, margin: '0 auto 36px' }}>
            The LLMA app matches you with people in the same stage of the Lavender Blueprint — not just similar values, but similar timing. Someone to talk to who actually gets where you are right now.
          </p>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 40, textAlign: 'left',
          }} className="community-three-col">
            {[
              { title: 'Stage filter', desc: 'Browse people at your exact stage or nearby stages', color: S.amber },
              { title: 'Values alignment', desc: 'Match on what matters — family, finances, faith, lifestyle', color: S.purple },
              { title: 'Partnership type', desc: 'Filter by what you\'re actually building', color: S.teal },
            ].map(f => (
              <div key={f.title} style={{
                background: S.card,
                border: `1px solid ${S.cardBorder}`,
                borderRadius: 12, padding: '20px 20px',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: f.color, marginBottom: 10 }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
          <a href={APP_URL} target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 9999,
            background: S.purple, color: '#fff',
            fontSize: 15, fontWeight: 700, textDecoration: 'none',
          }}>
            Find your people
          </a>
        </div>
      </section>

      {/* Group coaching */}
      <section style={{
        padding: '80px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="section-inner-pad" style={{ maxWidth: 1000, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p style={{ fontSize: 11, fontWeight: 800, color: S.coral, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
              Guided work
            </p>
            <h2 style={{
              fontSize: 36, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
              lineHeight: 1.2, margin: '0 0 16px',
            }}>
              Group coaching cohorts
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 500, margin: '0 auto' }}>
              Small groups, real structure, real outcomes. Not a course — a container for actual change.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="community-three-col">
            {COACHING_COHORTS.map(c => (
              <CoachingCard key={c.title} cohort={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Community guidelines / trust */}
      <section style={{
        padding: '80px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="section-inner-pad" style={{ maxWidth: 820, margin: '0 auto', padding: '0 40px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{
              fontSize: 32, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em',
              lineHeight: 1.2, margin: '0 0 16px',
            }}>
              How this community works
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, maxWidth: 460, margin: '0 auto' }}>
              This isn't social media. It's designed for real conversations that actually move people forward.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="community-two-col">
            {[
              {
                title: 'Stage-gated conversations',
                desc: 'Threads are organized by where you are. No performance, no comparison — just people at the same point in the journey.',
                color: S.purple,
              },
              {
                title: 'Anonymous until you\'re not',
                desc: 'Participate fully without your name attached until you choose otherwise. Your story is yours.',
                color: S.teal,
              },
              {
                title: 'No advice from the cheap seats',
                desc: 'You can only give advice in a stage you\'ve been through. No one who hasn\'t done disclosure coaching others on it.',
                color: S.coral,
              },
              {
                title: 'Moderated by people in it',
                desc: 'Community moderators are members themselves — people living non-traditional partnerships, not outside observers.',
                color: S.amber,
              },
            ].map(g => (
              <div key={g.title} style={{
                background: S.card,
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 14, padding: '24px 24px',
              }}>
                <div style={{ width: 28, height: 3, borderRadius: 2, background: g.color, marginBottom: 14 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>{g.title}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{g.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '100px 0',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        textAlign: 'center',
      }}>
        <div className="section-inner-pad" style={{ maxWidth: 640, margin: '0 auto', padding: '0 40px' }}>
          <h2 style={{
            fontSize: 42, fontWeight: 800, color: '#fff', letterSpacing: '-0.03em',
            lineHeight: 1.15, margin: '0 0 20px',
          }}>
            Partnership is something<br />
            <span style={{ color: S.lavender }}>you design.</span>
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: '0 0 36px' }}>
            Start with honesty. Build with intention. Find people who are doing the same.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
              padding: '14px 32px', borderRadius: 9999,
              background: S.purple, color: '#fff',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}>
              Download LLMA
            </a>
            <Link to="/5-truths-that-saved-me" style={{
              padding: '14px 28px', borderRadius: 9999,
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'transparent', color: 'rgba(255,255,255,0.75)',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}>
              Read the 5 Truths
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '32px 0', textAlign: 'center', fontFamily: S.font,
      }}>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
          &copy; {new Date().getFullYear()} LLMA &nbsp;·&nbsp;{' '}
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> &nbsp;·&nbsp;{' '}
          <Link to="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Blog</Link> &nbsp;·&nbsp;{' '}
          <a href={APP_URL} style={{ color: 'inherit', textDecoration: 'none' }}>App</a>
        </p>
      </footer>
    </div>
  );
}
