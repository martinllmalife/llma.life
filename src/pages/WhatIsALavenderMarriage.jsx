import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-lavender-marriage-app/id6760886909';
const TIKTOK_URL = 'https://www.tiktok.com/@itsmcmartyfly';
const CANONICAL_URL = 'https://llma.life/what-is-a-lavender-marriage';
const OG_IMAGE = 'https://llma.life/wlm-og-family.jpg';

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
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
  card: '#111011',
  cardBorder: 'rgba(255,255,255,0.06)',
};

function Photo({ src, alt, aspect = '16 / 9', accentBorder = S.cardBorder, caption, eager = false }) {
  return (
    <figure style={{ margin: '0 0 32px' }}>
      <div style={{
        background: S.card,
        border: `1px solid ${accentBorder}`,
        borderRadius: 16,
        overflow: 'hidden',
        aspectRatio: aspect,
      }}>
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      {caption && (
        <figcaption style={{
          fontSize: 12, color: 'rgba(255,255,255,0.4)',
          textAlign: 'center', marginTop: 10, fontStyle: 'italic',
        }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function SectionHeader({ num, eyebrow, title, color, colorMuted, id }) {
  return (
    <div id={id} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, scrollMarginTop: 80 }}>
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        background: colorMuted, border: `2px solid ${color}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, fontWeight: 900, color: color, flexShrink: 0,
      }}>{num}</div>
      <div>
        <p style={{ fontSize: 11, color: color, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>{eyebrow}</p>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', color: '#fff', margin: 0, lineHeight: 1.2 }}>
          {title}
        </h2>
      </div>
    </div>
  );
}

function P({ children }) {
  return (
    <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.75)', marginBottom: 20 }}>
      {children}
    </p>
  );
}

function FAQItem({ q, a }) {
  return (
    <div style={{
      background: S.card,
      border: `1px solid ${S.cardBorder}`,
      borderRadius: 14,
      padding: '22px 26px',
      marginBottom: 12,
    }}>
      <p style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.4 }}>
        {q}
      </p>
      <p style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', margin: 0 }}>
        {a}
      </p>
    </div>
  );
}

function MythCard({ myth, truth }) {
  return (
    <div style={{
      background: S.card,
      border: `1px solid ${S.cardBorder}`,
      borderRadius: 14,
      padding: '22px 26px',
      marginBottom: 12,
    }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: S.coral, letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
          ✗ Myth
        </span>
        <p style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.5 }}>
          {myth}
        </p>
      </div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', paddingTop: 12, borderTop: `1px solid ${S.cardBorder}` }}>
        <span style={{ fontSize: 11, fontWeight: 800, color: '#4ade80', letterSpacing: '0.1em', textTransform: 'uppercase', flexShrink: 0 }}>
          ✓ Truth
        </span>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', margin: 0, lineHeight: 1.6 }}>
          {truth}
        </p>
      </div>
    </div>
  );
}

const FOR_LIST = [
  'The gay man who has always wanted a child, a household, and a person who will show up for him for the rest of his life — but does not want to fake romantic chemistry to get it.',
  'The straight woman who is tired of dating men who treat her like a placeholder, and would rather build a real life with a gay best friend who actually sees her.',
  'The queer person navigating a family or culture where being out comes with real cost, and who needs a partnership structure that gives them safety without sacrificing honesty.',
  'The ace person who wants love and companionship without the romantic-sexual template that everyone keeps trying to hand them.',
  'The people who looked at the conventional marriage script, looked at how often it ends in divorce, and decided to write their own.',
];

const MODERN_FEATURES = [
  {
    title: 'Total honesty up front',
    body: 'Both partners know each other’s sexuality, dating intentions, family goals, and financial reality before any commitment is made. Nothing gets hidden because there’s nothing to hide.',
    color: S.purple,
    border: S.purpleBorder,
  },
  {
    title: 'Intentional agreements',
    body: 'Modern lavender couples write their own rules. Who handles what. How outside relationships work. How parenting decisions get made. How holidays are split. Whether the marriage is sexually open, closed, or somewhere else entirely. This is not assumed. It’s discussed.',
    color: S.lavender,
    border: S.lavenderBorder,
  },
  {
    title: 'Shared values over shared chemistry',
    body: 'Romantic chemistry is unreliable. It’s not a foundation. Shared values, shared goals, and shared definitions of a good life are what hold a partnership together for decades. Lavender couples lead with those.',
    color: S.amber,
    border: S.amberBorder,
  },
  {
    title: 'Real love',
    body: 'Lavender marriages are not loveless. They’re often more loving than romantic marriages because the love isn’t tangled up with score-keeping, jealousy, or the unspoken expectation that one person will meet every need the other has. The love is friendship love. Family love. The love of someone who chose you on purpose.',
    color: S.coral,
    border: S.coralBorder,
  },
];

const COMEBACK_DRIVERS = [
  {
    n: '01',
    title: 'The political climate',
    body: 'Anti-LGBTQ+ sentiment in the US has climbed sharply since 2022, and policy rollbacks have made a lot of queer people rethink what stability looks like. For some, marrying a trusted friend is safer than waiting for the world to soften.',
  },
  {
    n: '02',
    title: 'The economic reality',
    body: 'Gen Z and millennials cannot afford to live the way previous generations did. A two-income household with shared healthcare and shared rent is no longer a romantic preference. It’s a survival math problem. Lavender marriages solve that math without requiring a partner you have to perform for.',
  },
  {
    n: '03',
    title: 'The dating scene is broken',
    body: 'Burnout from dating apps is universal. Studies are showing Gen Z spends over 150 hours a year on apps and walks away with a handful of meaningful connections. People are tired. A lot of them are starting to ask whether the romantic-soulmate template was ever the right one in the first place.',
  },
];

const MYTHS = [
  {
    myth: 'Lavender marriages are just two queer people getting married.',
    truth: 'Not historically, not currently, not in practice. The most common configuration has always been one queer partner and one straight partner who genuinely love each other as friends and family. Some apps narrow the definition for marketing reasons. The actual community is broader.',
  },
  {
    myth: 'It’s a sham marriage.',
    truth: 'A sham marriage is built on deception. A lavender marriage is built on honesty. The whole point is that both people know what this is.',
  },
  {
    myth: 'It’s just roommates with paperwork.',
    truth: 'Roommates do not raise children together. Roommates do not buy houses together. Roommates do not stand in the gap when your dad is in the hospital. Lavender marriages are full marriages with all the depth, weight, and life-building that any other marriage has.',
  },
  {
    myth: 'It only works if you don’t date other people.',
    truth: 'Most modern lavender marriages allow each partner to pursue romantic and sexual relationships outside the marriage. The structure is custom-built. There is no default.',
  },
  {
    myth: 'It’s a Gen Z trend.',
    truth: 'Gen Z is the loudest group talking about it right now, but lavender marriages have existed for over a century, across every culture and class. China has Xinghun. South Asian communities have their own version. Gay men and straight women have been building intentional partnerships for as long as anyone can remember. The trend is the conversation, not the structure.',
  },
];

const FAQS = [
  {
    q: 'Is a lavender marriage legal?',
    a: 'Yes. A lavender marriage is a legally recognized marriage in every way. The structure of the relationship is private. The legal status is the same as any other marriage, including tax benefits, healthcare access, inheritance rights, and parenting rights.',
  },
  {
    q: 'Can lavender marriages have children?',
    a: 'Absolutely. Many lavender couples raise biological or adopted children together. The parenting partnership is often stronger than in romantic marriages because the focus stays on the child, not on the romantic dynamic between the parents. My wife and I are raising our 14-year-old daughter, and she is thriving.',
  },
  {
    q: 'Do lavender marriages allow outside relationships?',
    a: 'Most modern lavender marriages do, but it depends on the agreement the couple writes for themselves. Some are fully open. Some are closed. Some are open with rules. The structure is custom. The agreement is what matters.',
  },
  {
    q: 'Is a lavender marriage the same as a marriage of convenience?',
    a: 'They overlap, but they’re not identical. A marriage of convenience can be entered into for any reason, including immigration, citizenship, or financial benefit, with no emotional component required. A lavender marriage is specifically about LGBTQ+ identity and intentional companionship. Most lavender marriages are deep partnerships. Not all marriages of convenience are.',
  },
  {
    q: 'How is a lavender marriage different from a queerplatonic relationship?',
    a: 'Queerplatonic relationships are deeply committed platonic partnerships that may or may not involve marriage. A lavender marriage is the formalized, legal version of that, often with a queer partner involved. A lot of lavender marriages are queerplatonic by nature. Not all queerplatonic relationships are lavender marriages.',
  },
  {
    q: 'How do I know if a lavender marriage is right for me?',
    a: 'Ask yourself what you actually want from a life partnership. If the answer is a person who will build with you, parent with you, choose you on purpose, and tell you the truth — but you don’t need that person to be your romantic or sexual partner — you might be a lavender person. If the answer is no, you need romance, that’s also a real answer. Lavender is not for everyone. It’s for the people it’s for.',
  },
  {
    q: 'Where can I meet someone for a lavender marriage?',
    a: 'LLMA is the only matchmaking app built specifically for this. The community spans 20+ countries and is the only place I know of where you can find people who are explicitly looking for the same kind of partnership.',
  },
];

export default function WhatIsALavenderMarriage() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff', fontFamily: S.font }}>
      <Helmet>
        <title>What Is a Lavender Marriage? The Real 2026 Guide | LLMA</title>
        <style>{`
          @media (max-width: 640px) {
            .wlm-nav-link { display: none !important; }
            .wlm-nav-crumb { display: none !important; }
          }
        `}</style>
        <meta name="description" content="A lavender marriage is intentional partnership without romance, built on honesty. The real 2026 guide from Marty Thomas, 17 years in one. Learn what it actually is." />
        <link rel="canonical" href={CANONICAL_URL} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What Is a Lavender Marriage? I've Been in One for 17 Years." />
        <meta property="og:description" content="The honest definition, the history, and what modern lavender marriages actually look like. From the founder of LLMA, who lives one." />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Is a Lavender Marriage? I've Been in One for 17 Years." />
        <meta name="twitter:description" content="The honest definition, the history, and what modern lavender marriages actually look like. From the founder of LLMA, who lives one." />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What Is a Lavender Marriage? The Real 2026 Guide From Someone Living One',
            description: 'A lavender marriage is intentional partnership without romance, built on honesty. The real 2026 guide from Marty Thomas, 17 years in one.',
            author: {
              '@type': 'Person',
              name: 'Martin Court Thomas Jr.',
              url: 'https://llma.life',
            },
            publisher: {
              '@type': 'Organization',
              name: 'LLMA',
              logo: {
                '@type': 'ImageObject',
                url: 'https://llma.life/llma-logo.png',
              },
            },
            mainEntityOfPage: CANONICAL_URL,
            image: OG_IMAGE,
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          })}
        </script>
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
          <span style={{ fontSize: 20, fontWeight: 800, color: S.lavender, letterSpacing: '-0.5px' }}>llma</span>
          <span className="wlm-nav-crumb" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500, whiteSpace: 'nowrap' }}>/ lavender marriage</span>
        </Link>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link to="/lavender-transition-guide" className="wlm-nav-link" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>Transition Guide</Link>
          <Link to="/the-six-pillars" className="wlm-nav-link" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap' }}>Six Pillars</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            background: S.lavender, color: S.bg, padding: '7px 16px', borderRadius: 20,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>Get the App</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 56, paddingLeft: 24, paddingRight: 24,
        maxWidth: 820, margin: '0 auto', textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-block', background: S.lavenderMuted, border: `1px solid ${S.lavenderBorder}`,
          borderRadius: 20, padding: '6px 16px', marginBottom: 24,
          fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: S.lavender,
        }}>
          The Real 2026 Guide
        </div>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 900, lineHeight: 1.05,
          letterSpacing: '-1.5px', marginBottom: 20,
        }}>
          <span style={{ color: '#fff' }}>What Is a </span>
          <span style={{ color: S.lavender }}>Lavender Marriage?</span>
        </h1>
        <p style={{
          fontSize: 19, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55,
          maxWidth: 640, margin: '0 auto 16px',
        }}>
          The honest definition, the history, and what modern lavender marriages actually look like — from someone who’s been in one for 17 years.
        </p>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 40 }}>
          By Marty Thomas, founder of LLMA
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#definition" style={{
            background: S.lavender, color: S.bg, padding: '14px 28px',
            borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none',
          }}>Start Reading</a>
          <a href="#my-marriage" style={{
            background: 'transparent', color: S.lavender,
            border: `1px solid ${S.lavenderBorder}`,
            padding: '14px 28px', borderRadius: 12,
            fontSize: 15, fontWeight: 600, textDecoration: 'none',
          }}>Read Marty’s Story →</a>
        </div>
      </section>

      {/* Hero Photo */}
      <section style={{ maxWidth: 920, margin: '0 auto 56px', padding: '0 24px' }}>
        <Photo
          src="/wlm-hero-family.jpg"
          alt="Marty Thomas with his wife Brandi and daughter Londyn — the Thomas family"
          aspect="3 / 2"
          accentBorder={S.lavenderBorder}
          eager
        />
      </section>

      {/* TL;DR Card */}
      <section style={{ maxWidth: 720, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{
          background: S.card, border: `1px solid ${S.cardBorder}`,
          borderRadius: 20, padding: '36px 40px',
          borderLeft: `3px solid ${S.lavender}`,
        }}>
          <p style={{ fontSize: 12, color: S.lavender, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
            TL;DR
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
            A lavender marriage is a marriage between two people, where at least one partner is part of the LGBTQ+ community, built on intentional companionship instead of romantic or sexual attraction. Historically used as a survival strategy in eras hostile to queer people, today it’s being reclaimed by Gen Z and millennials as a chosen, honest partnership structure. <strong style={{ color: '#fff' }}>I should know. I’ve been in one for 17 years.</strong>
          </p>
        </div>
      </section>

      {/* Section 1: Honest Definition */}
      <section id="definition" style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <SectionHeader
          num="1"
          eyebrow="The Honest Definition"
          title="What Is a Lavender Marriage, Really?"
          color={S.purple}
          colorMuted={S.purpleMuted}
        />
        <P>
          A lavender marriage is a marriage built on intentional partnership instead of romantic or sexual attraction, where at least one spouse is queer, and both people are in on it.
        </P>
        <P>
          That’s the real definition. Not the polished one. Not the narrow one some apps are pushing to make their product sound cleaner. The real one.
        </P>
        <P>
          The classic configuration is a gay man and a straight woman who choose to build a life together as best friends, co-parents, and committed life partners. But it shows up in other forms too. Two queer people who love each other platonically. A bi woman and a gay man building a household. A queer person and an ace partner who want family without the romantic script. The structure flexes. The intention doesn’t.
        </P>
        <div style={{
          background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
          borderRadius: 16, padding: '24px 28px', marginTop: 16,
        }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0 }}>
            What makes it a lavender marriage is not the gender combination. <strong style={{ color: S.lavender }}>It’s the honesty.</strong> Both people know exactly what they’re signing up for, and they choose it on purpose.
          </p>
        </div>
      </section>

      {/* Section 2: Where the Term Comes From */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <SectionHeader
          num="2"
          eyebrow="The History"
          title="Where the Term Comes From"
          color={S.coral}
          colorMuted={S.coralMuted}
        />
        <P>
          The word lavender has been linked to queerness for over a century. Lavender mixes pink and blue — two colors weighed down by gender expectations — and the queer community has used it as a quiet symbol of identity since at least the 1920s.
        </P>
        <P>
          Lavender marriage as a phrase came out of early 20th-century Hollywood. Studios like MGM and Universal wrote morality clauses into their stars’ contracts. Get caught being queer, lose your career. Some actors entered marriages of convenience to keep working. Some did it to keep their families. Most did it because the alternative was unsafe.
        </P>
        <P>
          Rock Hudson, Cary Grant, Barbara Stanwyck, Cole Porter, Vita Sackville-West, Katharine Cornell. The list of historical lavender marriages reads like a Hollywood Walk of Fame.
        </P>
        <Photo
          src="/wlm-history-hollywood.jpg"
          alt="A visual evoking the Old Hollywood era when lavender marriages first emerged"
          aspect="16 / 9"
          accentBorder={S.coralBorder}
        />
        <div style={{
          background: S.amberMuted, border: `1px solid ${S.amberBorder}`,
          borderRadius: 16, padding: '24px 28px',
        }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: S.amber, marginBottom: 8, letterSpacing: '0.04em' }}>
            What most articles get wrong:
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0 }}>
            Lavender marriages did not start in Hollywood. They started everywhere queer people had to survive. Hollywood just made them visible.
          </p>
        </div>
      </section>

      {/* Section 3: Why Coming Back in 2026 */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <SectionHeader
          num="3"
          eyebrow="The Resurgence"
          title="Why Lavender Marriages Are Coming Back in 2026"
          color={S.lavender}
          colorMuted={S.lavenderMuted}
        />
        <P>
          Search interest in lavender marriage has exploded over the last two years. People are not just curious about history anymore. They’re considering it for themselves.
        </P>
        <P>
          Three things are driving the resurgence.
        </P>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 8, marginBottom: 24 }}>
          {COMEBACK_DRIVERS.map((d) => (
            <div key={d.n} style={{
              background: S.card,
              border: `1px solid ${S.lavenderBorder}`,
              borderRadius: 16,
              padding: '24px 28px',
              display: 'grid',
              gridTemplateColumns: '60px 1fr',
              gap: 20,
              alignItems: 'start',
            }}>
              <div style={{
                fontSize: 28, fontWeight: 900, color: S.lavender,
                letterSpacing: '-1px', lineHeight: 1,
              }}>
                {d.n}
              </div>
              <div>
                <p style={{ fontSize: 17, fontWeight: 800, color: '#fff', margin: '0 0 8px', lineHeight: 1.3 }}>
                  {d.title}
                </p>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: 0 }}>
                  {d.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <P>
          Add it all up, and you get a generation rewriting what marriage is supposed to mean.
        </P>
      </section>

      {/* Section 4: What Modern Looks Like */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <SectionHeader
          num="4"
          eyebrow="The Modern Reality"
          title="What a Modern Lavender Marriage Actually Looks Like"
          color={S.amber}
          colorMuted={S.amberMuted}
        />
        <P>
          Forget the Hollywood version. Forget the secrecy. The modern lavender marriage is built on the opposite.
        </P>
        <P>
          Here’s what it actually involves.
        </P>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14, marginTop: 8, marginBottom: 32 }}>
          {MODERN_FEATURES.map((f) => (
            <div key={f.title} style={{
              background: S.card,
              border: `1px solid ${f.border}`,
              borderRadius: 16,
              padding: '24px 26px',
            }}>
              <p style={{ fontSize: 11, color: f.color, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>
                {f.title}
              </p>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: 0 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
        <Photo
          src="/wlm-modern-household.jpg"
          alt="A modern lavender household — partnership without performance"
          aspect="16 / 10"
          accentBorder={S.amberBorder}
        />
      </section>

      {/* Section 5: Misconceptions */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <SectionHeader
          num="5"
          eyebrow="Setting the Record Straight"
          title="Common Misconceptions, Cleared Up"
          color={S.purple}
          colorMuted={S.purpleMuted}
        />
        <P>
          A lot of the discourse around lavender marriages right now is wrong. Here are the corrections.
        </P>
        <div>
          {MYTHS.map((m, i) => (
            <MythCard key={i} myth={m.myth} truth={m.truth} />
          ))}
        </div>
      </section>

      {/* Section 6: Who It's For */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <SectionHeader
          num="6"
          eyebrow="The Right Fit"
          title="Who a Lavender Marriage Is Actually For"
          color={S.coral}
          colorMuted={S.coralMuted}
        />
        <P>
          This is not for everyone. It’s for a specific kind of person.
        </P>
        <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FOR_LIST.map((item, i) => (
            <li key={i} style={{
              background: S.card,
              border: `1px solid ${S.cardBorder}`,
              borderLeft: `3px solid ${S.coral}`,
              borderRadius: 12,
              padding: '18px 22px',
              fontSize: 16,
              color: 'rgba(255,255,255,0.78)',
              lineHeight: 1.6,
            }}>
              <span style={{ color: S.coral, fontWeight: 800, marginRight: 8 }}>It’s for</span>
              {item.replace(/^The /, 'the ').replace(/^the /, 'the ')}
            </li>
          ))}
        </ul>
        <div style={{
          background: S.coralMuted, border: `1px solid ${S.coralBorder}`,
          borderRadius: 16, padding: '24px 28px',
        }}>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
            If you are looking for romance, you are in the wrong place. If you are looking for partnership, you are in exactly the right place.
          </p>
        </div>
      </section>

      {/* Section 7: My Marriage to Brandi */}
      <section id="my-marriage" style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px', scrollMarginTop: 80 }}>
        <SectionHeader
          num="7"
          eyebrow="My Story"
          title="My Marriage to Brandi: 17 Years of Lavender, Long Before It Was a Hashtag"
          color={S.lavender}
          colorMuted={S.lavenderMuted}
        />
        <Photo
          src="/wlm-thomas-family.jpg"
          alt="Marty and Brandi Thomas — 17 years married, raising daughter Londyn in Gilbert, Arizona"
          aspect="4 / 3"
          accentBorder={S.lavenderBorder}
        />
        <P>
          I’m Marty Thomas. I founded LLMA. I have been in a lavender marriage with my wife Brandi for 17 years. We share a daughter, Londyn, who is 14. We live in Gilbert, Arizona, with our French Bulldog, Dior. I am openly gay. Brandi is straight. We chose each other on purpose, and we choose each other every day.
        </P>
        <P>
          When I came out to her 18 years ago, I expected the friendship to end. Instead, it became the beginning of the most intentional partnership I have ever been in. We didn’t have a name for it back then. There was no app. There were no TikTok videos. There was just us, deciding that what we had was worth building a life around, even if it didn’t match anyone else’s blueprint.
        </P>
        <P>
          People online sometimes ridicule us. They tell us we’re not really a marriage. They tell us we’re playing house. I always say the same thing back. <strong style={{ color: '#fff' }}>Our marriage is completely normal. We are just honest about it.</strong> There are millions of sexless marriages out there. There are millions of couples staying together for the kids, for the mortgage, for appearances. We are doing the same thing those couples are doing. The only difference is we said it out loud.
        </P>
        <div style={{
          background: S.lavenderMuted, border: `1px solid ${S.lavenderBorder}`,
          borderRadius: 16, padding: '24px 28px', marginTop: 16,
        }}>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, margin: 0 }}>
            That’s why I built LLMA. Because for 17 years, people have been sliding into my DMs asking how to find what Brandi and I have. The community already existed. It just had nowhere to go. So we built it a home.
          </p>
        </div>
      </section>

      {/* Section 8: How LLMA Helps */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(143,92,184,0.18) 0%, rgba(197,159,225,0.06) 100%)',
          border: `1px solid ${S.purpleBorder}`,
          borderRadius: 24, padding: '40px 44px',
        }}>
          <p style={{ fontSize: 12, color: S.lavender, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>
            Built For This
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', marginBottom: 16, color: '#fff' }}>
            How LLMA Helps People Find Lavender Partnerships
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', marginBottom: 16 }}>
            <strong style={{ color: '#fff' }}>LLMA stands for Life and Love Made Authentic.</strong> It’s the first matchmaking platform built specifically for lavender marriages, chosen co-parents, and platonic life partners. It’s available on the iOS App Store.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', marginBottom: 16 }}>
            There are no swipes. Instead, you build what we call a <strong style={{ color: S.lavender }}>Lavender Résumé</strong> — a deep, honest profile that goes beyond photos to capture what you actually want from a life partnership. You answer prompts from our compatibility deck called <strong style={{ color: S.lavender }}>Cards on the Table</strong>. The cards map to real personality traits, relationship styles, financial habits, and family goals. The more you answer, the smarter your matches get.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', marginBottom: 24 }}>
            The whole platform is built on the premise that compatibility is not chemistry. Compatibility is alignment. And alignment is something you can actually surface with the right questions.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,0.78)', marginBottom: 28 }}>
            LLMA is live in 20+ countries. The community is growing every week. If you’ve read this far and any part of it resonated, you already know whether this is for you.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: 16,
            marginBottom: 28,
          }}>
            {[
              { src: '/wlm-llma-app-1.png', alt: 'LLMA app — Lavender Résumé profile screen' },
              { src: '/wlm-llma-app-2.png', alt: 'LLMA app — Cards on the Table compatibility prompts' },
              { src: '/wlm-llma-app-3.png', alt: 'LLMA app — match discovery screen' },
            ].map((img) => (
              <div key={img.src} style={{
                background: 'rgba(13,10,11,0.6)',
                border: `1px solid ${S.lavenderBorder}`,
                borderRadius: 16,
                overflow: 'hidden',
                padding: 8,
              }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block', borderRadius: 8 }}
                />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
              background: S.lavender, color: S.bg,
              padding: '14px 28px', borderRadius: 12,
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
            }}>
              Download LLMA on the App Store →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <h2 style={{ fontSize: 32, fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 8 }}>
          Frequently Asked Questions
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 32, lineHeight: 1.6 }}>
          The questions I get most often in my DMs.
        </p>
        <div>
          {FAQS.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </section>

      {/* Bottom Line CTA */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(143,92,184,0.15) 0%, rgba(197,159,225,0.08) 100%)',
          border: `1px solid ${S.purpleBorder}`,
          borderRadius: 24, padding: '48px 44px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 13, color: S.lavender, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
            The Bottom Line
          </p>
          <h3 style={{ fontSize: 'clamp(26px, 4vw, 34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 16, lineHeight: 1.15 }}>
            Lavender marriages are not a workaround. They are not a trend. They are not a sham.
          </h3>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, maxWidth: 540, margin: '0 auto 16px' }}>
            They are a 100-year-old form of partnership that the world is finally honest enough to talk about out loud. They were a survival tool for our queer ancestors. They are an intentional choice for the people building one today.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, maxWidth: 540, margin: '0 auto 32px' }}>
            If you’ve been waiting for someone to give you permission to want a partnership that doesn’t follow the script — this is it. You can stop performing. You can start building something real.
          </p>
          <p style={{ fontSize: 14, color: S.lavender, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
            Stay Bold. Stay Inspired.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
              background: S.lavender, color: S.bg,
              padding: '14px 32px', borderRadius: 12,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
            }}>
              Download LLMA
            </a>
            <Link to="/lavender-transition-guide" style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '14px 32px', borderRadius: 12,
              fontSize: 16, fontWeight: 600, textDecoration: 'none',
            }}>
              Read the Transition Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* Author bio */}
      <section style={{ maxWidth: 720, margin: '0 auto 56px', padding: '0 24px' }}>
        <div style={{
          background: S.card, border: `1px solid ${S.cardBorder}`,
          borderRadius: 16, padding: '24px 28px',
          display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap',
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: S.lavenderMuted, border: `2px solid ${S.lavenderBorder}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, color: S.lavender, fontWeight: 900,
            letterSpacing: '-0.5px', flexShrink: 0,
          }}>
            MT
          </div>
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 800, color: S.lavender, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
              About the Author
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: '#fff' }}>Marty Thomas</strong> is the founder of LLMA (Life and Love Made Authentic) and has been in a publicly lavender marriage with his wife Brandi for 17 years. They co-parent their daughter Londyn in Gilbert, Arizona. Marty’s content reaches over 200,000 followers on TikTok and has generated more than 80 million views worldwide.
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
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ color: S.lavender, textDecoration: 'none', fontWeight: 600 }}>Download LLMA</a>
          {' · '}
          <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>llma.life</Link>
          {' · '}
          <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>@itsmcmartyfly</a>
        </p>
        <p>© 2026 Martin Court Thomas Jr. · martin@llma.life</p>
      </footer>
    </div>
  );
}
