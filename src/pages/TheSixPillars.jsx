import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';

function PromptBox({ label, prompt, lines = 3, color = 'rgba(255,255,255,0.08)' }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
        {label}
      </p>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 12 }}>
        {prompt}
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8, padding: '14px 16px', minHeight: `${lines * 28 + 20}px`,
        display: 'flex', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.18)', fontStyle: 'italic' }}>Write your answer here...</span>
      </div>
    </div>
  );
}

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
  amber: '#D4A94A',
  amberMuted: 'rgba(212,169,74,0.1)',
  amberBorder: 'rgba(212,169,74,0.25)',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
  card: '#111011',
  cardBorder: 'rgba(255,255,255,0.06)',
};

const PILLARS = [
  {
    num: 1,
    title: 'Authenticity Over Performance',
    quote: 'The old marriage was built on performance. The new one must be built on truth.',
    color: S.purple,
    muted: S.purpleMuted,
    border: S.purpleBorder,
    points: [
      'Stop performing, but don\'t overcorrect — radical honesty can still be kind',
      'Share your fears, not just your truth — vulnerability builds more trust than disclosure alone',
      'Create a "no performance zone" for weekly check-ins — a dedicated time where both of you can say the hard thing',
      'Audit what you\'re still hiding — small secrets become big walls',
    ],
    exercise: {
      title: 'The Honesty Inventory',
      intro: 'Do this together. Set aside 30 uninterrupted minutes. No phones. The goal is not to confess everything at once — it\'s to establish that this is a space where truth is safe.',
      steps: [
        { label: 'Each partner', prompt: 'Name one thing you\'ve been afraid to say to your partner since the coming out. It doesn\'t have to be the biggest thing. Just the one that sits closest to the surface.' },
        { label: 'Together', prompt: 'Create your "no performance zone" rule. What does it look like? When does it happen? What are the ground rules? Write it out as a real agreement, not just a concept.' },
      ],
    },
  },
  {
    num: 2,
    title: 'Function Over Fairytale',
    quote: 'Your relationship doesn\'t have to look like anyone else\'s to be valid.',
    color: S.lavender,
    muted: S.lavenderMuted,
    border: S.lavenderBorder,
    points: [
      'Let go of guilt about not fitting the narrative — your story is not a failure of the normal story',
      'Grieve the fairytale first — you can\'t release what you haven\'t named',
      'Focus on what actually works for you both, not what looks right from the outside',
      'Stop comparing to other couples — you\'re doing something most people never attempt',
    ],
    exercise: {
      title: 'The Fairytale Funeral',
      intro: 'Grief is real here — even in redesign. This exercise honors what you\'re losing so you can build what\'s actually next.',
      steps: [
        { label: 'Each partner separately', prompt: 'Write a goodbye letter to the marriage you thought you had. Not to your partner — to the version of the future you were expecting. What did it look like? What are you grieving most? Don\'t rush this.' },
        { label: 'Together', prompt: 'What does your actual relationship — the real one, not the imagined one — do really well? List as many things as you can. These are the foundation of what you\'re building forward.' },
      ],
    },
  },
  {
    num: 3,
    title: 'Intentional Partnership',
    quote: 'We choose each other daily. Not out of obligation or fear.',
    color: S.teal,
    muted: S.tealMuted,
    border: S.tealBorder,
    points: [
      'Make your choice explicit — say it out loud to each other, regularly',
      'Don\'t stay out of martyrdom — resentment grows in silence and sacrifice',
      'Write a Partnership Agreement — a real document that defines what you\'re building and how',
      'Schedule quarterly reviews — relationships need maintenance, not just crisis management',
    ],
    exercise: {
      title: 'The Partnership Agreement',
      intro: 'This is the most practical exercise in the guide. A Partnership Agreement is a living document — not a legal contract, but a shared understanding of what you\'re building and what you both need. Start with these sections.',
      steps: [
        { label: 'What we are', prompt: 'Define your relationship on your own terms. Not "married" or "divorced" — describe what you actually are to each other. Be specific.' },
        { label: 'What we each need', prompt: 'Each partner: list 3 non-negotiable needs in this arrangement. (Example: "I need to feel desired by someone, even if that someone isn\'t you." Or: "I need us to be a united front with the kids, always.") Share honestly.' },
        { label: 'What we\'re committed to', prompt: 'What are the shared commitments that hold this together? Write them as "we will" statements. These are the promises, not the hopes.' },
        { label: 'How we check in', prompt: 'When do you review this agreement? What does that check-in look like? Who can you bring in as a neutral third party if you get stuck?' },
      ],
    },
  },
  {
    num: 4,
    title: 'Radical Self-Love',
    quote: 'You can\'t build authentic partnership until you\'ve built one with yourself.',
    color: S.coral,
    muted: S.coralMuted,
    border: S.coralBorder,
    points: [
      'Both partners need individual therapy — not just couples work',
      'Your worth is not tied to your partner\'s sexuality — their coming out is not a verdict on you',
      'Encourage each other\'s individual growth, even when it\'s uncomfortable',
      'Build your own support systems outside this relationship',
    ],
    exercise: {
      title: 'The Self-Worth Audit',
      intro: 'For the straight spouse especially — this one matters. It\'s easy to internalize your partner\'s coming out as a statement about your desirability. It isn\'t. But we have to work through the feeling, not around it.',
      steps: [
        { label: 'For the partner who learned', prompt: 'Complete this sentence honestly: "Since finding out, I\'ve started to believe that I am ___." Now ask: is that actually true? Or is it a story you\'re telling yourself based on their truth, not yours?' },
        { label: 'For the partner who came out', prompt: 'What individual therapy or support are you currently getting? Not couples work — work for yourself. If the answer is nothing, write specifically what\'s stopping you from getting it.' },
        { label: 'For both', prompt: 'List 3 things you\'re going to do in the next 30 days, individually, to invest in your own healing — separate from this relationship. Be specific.' },
      ],
    },
  },
  {
    num: 5,
    title: 'Chosen Family',
    quote: 'Cherish people who let you be you.',
    color: S.amber,
    muted: S.amberMuted,
    border: S.amberBorder,
    points: [
      'Decide together who to tell, when, and how — don\'t let someone else tell your story',
      'Present a united front — especially to children and extended family',
      'Be prepared to lose some relationships — the ones that can\'t hold your truth were conditional',
      'Connect with other lavender couples — this community exists and it will change your life',
    ],
    exercise: {
      title: 'The Disclosure Plan',
      intro: 'Deciding who to tell — and when — is one of the most anxiety-producing parts of a lavender transition. This exercise helps you approach it strategically instead of reactively.',
      steps: [
        { label: 'Together: map your circles', prompt: 'Draw three circles (or just list them): innermost = must know soon. Middle = will need to know eventually. Outer = on a need-to-know basis. Place every important person in one of the circles.' },
        { label: 'The script', prompt: 'Write a 3-sentence version of your story — one you\'re both comfortable with. You don\'t have to share everything. What\'s the version that\'s honest but yours to control?' },
        { label: 'The support list', prompt: 'Who are the 2–3 people in your life who will hold this information safely and without judgment? These people are your first calls. Name them.' },
      ],
    },
  },
  {
    num: 6,
    title: 'Legacy Over Approval',
    quote: 'We\'re not building for applause. We\'re building a legacy.',
    color: S.purple,
    muted: S.purpleMuted,
    border: S.purpleBorder,
    points: [
      'You\'re modeling that authenticity and commitment can coexist',
      'You\'re proving love is a daily choice, not just a feeling',
      'Your children are watching — and they\'ll carry this story forward',
      'You\'re writing a love story that didn\'t exist before you wrote it',
    ],
    exercise: {
      title: 'The Legacy Letter',
      intro: 'This is the final exercise — and the most important. Not for today. For the version of yourself 10 years from now.',
      steps: [
        { label: 'Each partner', prompt: 'Write a letter from your future self to your children. It\'s 10 years from now. They\'re old enough to understand. What do you want them to know about the choice you made — and why you made it? Don\'t write what sounds good. Write what you actually want them to know about who you are.' },
        { label: 'Together', prompt: 'Read your letters to each other. Then answer: what does this tell you about what you actually value? Does your current plan align with the legacy you just described?' },
      ],
    },
  },
];

const WARNING_SIGNS = [
  'One partner stays out of fear, not choice',
  'Resentment is building',
  'One partner sacrifices entirely',
  'Children are harmed by tension',
  'Secrets are returning',
  'It feels like prison, not partnership',
];

export default function TheSixPillars() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff', fontFamily: S.font }}>
      <Helmet>
        <title>The Six Pillars of an Intentional Partnership | LLMA</title>
        <meta name="description" content="The six foundational principles behind every successful lavender marriage and intentional partnership. A framework from LLMA founder Marty Thomas." />
        <link rel="canonical" href="https://llma.life/the-six-pillars" />
        <meta property="og:url" content="https://llma.life/the-six-pillars" />
        <meta property="og:title" content="The Six Pillars of an Intentional Partnership | LLMA" />
        <meta property="og:description" content="The six foundational principles behind every successful lavender marriage and intentional partnership." />
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
          <span style={{ fontSize: 20, fontWeight: 800, color: S.lavender, letterSpacing: '-0.5px' }}>llma</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>/ the six pillars</span>
        </Link>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link to="/lavender-transition-guide" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none' }}>← Part 1</Link>
          <Link to="/5-truths-that-saved-me" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none' }}>5 Truths</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
            background: S.lavender, color: S.bg, padding: '7px 16px', borderRadius: 20,
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}>Get the App</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        maxWidth: 760, margin: '0 auto', textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24,
        }}>
          <Link to="/lavender-transition-guide" style={{
            background: S.lavenderMuted, border: `1px solid ${S.lavenderBorder}`,
            borderRadius: 20, padding: '6px 14px',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: S.lavender, textDecoration: 'none',
          }}>
            ← Back to Part 1
          </Link>
          <span style={{
            background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
            borderRadius: 20, padding: '6px 14px',
            fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', color: S.purple,
          }}>
            Part 2 of 2
          </span>
        </div>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.05,
          letterSpacing: '-1.5px', marginBottom: 20,
        }}>
          <span style={{ color: '#fff' }}>The Six</span>
          <br />
          <span style={{ color: S.lavender }}>Pillars</span>
        </h1>
        <p style={{
          fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
          maxWidth: 520, margin: '0 auto 12px',
        }}>
          The framework for redesigning your relationship — on your own terms.
        </p>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 48 }}>
          Part 2 of The Lavender Transition Guide · By Martin Court Thomas Jr.
        </p>
        <div style={{
          display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: 8,
        }}>
          {PILLARS.map((p) => (
            <a key={p.num} href={`#pillar-${p.num}`} style={{
              background: p.muted, border: `1px solid ${p.border}`,
              color: p.color, padding: '6px 14px', borderRadius: 20,
              fontSize: 12, fontWeight: 700, textDecoration: 'none',
            }}>
              {p.num}. {p.title.split(' ').slice(0, 2).join(' ')}
            </a>
          ))}
        </div>
      </section>

      {/* Section header */}
      <div style={{ maxWidth: 760, margin: '0 auto 48px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: S.purpleMuted, border: `2px solid ${S.purple}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 900, color: S.purple, flexShrink: 0,
          }}>3</div>
          <div>
            <p style={{ fontSize: 11, color: S.purple, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Section Three</p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', color: '#fff', margin: 0 }}>
              The Six Pillars of Lavender Transition
            </h2>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {PILLARS.map((pillar) => (
          <div
            key={pillar.num}
            id={`pillar-${pillar.num}`}
            style={{
              background: S.card,
              border: `1px solid ${pillar.border}`,
              borderRadius: 20, padding: '32px 36px',
              borderLeft: `4px solid ${pillar.color}`,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: pillar.muted, border: `1px solid ${pillar.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 900, color: pillar.color, flexShrink: 0, marginTop: 2,
              }}>{pillar.num}</div>
              <div>
                <p style={{ fontSize: 11, color: pillar.color, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
                  Pillar {pillar.num}
                </p>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#fff', margin: 0, letterSpacing: '-0.3px' }}>
                  {pillar.title}
                </h3>
              </div>
            </div>

            <blockquote style={{
              margin: '0 0 20px 52px',
              padding: '12px 16px',
              background: pillar.muted,
              borderRadius: 10,
              fontStyle: 'italic',
              fontSize: 15,
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.5,
            }}>
              "{pillar.quote}"
            </blockquote>

            <ul style={{ listStyle: 'none', padding: '0 0 0 52px', margin: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 24 }}>
              {pillar.points.map((point, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                  <span style={{ color: pillar.color, flexShrink: 0, marginTop: 1 }}>→</span>
                  {point}
                </li>
              ))}
            </ul>

            {pillar.exercise && (
              <div style={{ marginLeft: 52, background: pillar.muted, border: `1px solid ${pillar.border}`, borderRadius: 14, padding: '24px 28px' }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: pillar.color, marginBottom: 6 }}>
                  Pillar {pillar.num} Exercise
                </p>
                <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 10 }}>{pillar.exercise.title}</p>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 20 }}>{pillar.exercise.intro}</p>
                {pillar.exercise.steps.map((step, si) => (
                  <PromptBox key={si} label={step.label} prompt={step.prompt} lines={3} />
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Section 4: The Practical Stuff */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: S.tealMuted, border: `2px solid ${S.teal}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 900, color: S.teal, flexShrink: 0,
          }}>4</div>
          <div>
            <p style={{ fontSize: 11, color: S.teal, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Section Four</p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', color: '#fff', margin: 0 }}>
              The Practical Stuff
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
          {/* Talking to Children */}
          <div style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 16, padding: '28px 24px' }}>
            <p style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 16 }}>👨‍👩‍👧 Talking to Children</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Timing', text: 'Wait until you\'ve both processed the initial shock' },
                { label: 'United front', text: 'Tell them together, not separately' },
                { label: 'Stability first', text: 'Same house, same love — emphasize what doesn\'t change' },
                { label: 'Get support', text: 'An LGBTQ+ family therapist can help bridge the conversation' },
              ].map((item, i) => (
                <div key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                  <span style={{ color: S.teal, fontWeight: 700 }}>{item.label}: </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Redesigning Intimacy */}
          <div style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 16, padding: '28px 24px' }}>
            <p style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 16 }}>💕 Redesigning Intimacy</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'What physical affection is still meaningful to both of you?',
                'Are you open to outside relationships, and on what terms?',
                'What does "fidelity" mean in this new context?',
              ].map((q, i) => (
                <div key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, paddingLeft: 10, borderLeft: `2px solid ${S.coral}` }}>
                  {q}
                </div>
              ))}
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginTop: 4 }}>
                Key: Both must be genuinely okay — not just tolerating.
              </p>
            </div>
          </div>
        </div>

        {/* Legal & Financial */}
        <div style={{
          background: S.card, border: `1px solid ${S.amberBorder}`,
          borderRadius: 16, padding: '28px 28px', marginBottom: 16,
        }}>
          <p style={{ fontSize: 15, fontWeight: 800, color: '#fff', marginBottom: 16 }}>⚖️ Legal & Financial</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            {[
              'Consider a postnuptial agreement',
              'Update wills and beneficiaries',
              'Consult a family lawyer familiar with non-traditional arrangements',
            ].map((item, i) => (
              <div key={i} style={{
                background: S.amberMuted, borderRadius: 10, padding: '12px 14px',
                fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5,
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div style={{
          background: S.card, border: `1px solid ${S.coralBorder}`,
          borderRadius: 16, padding: '28px 28px',
        }}>
          <p style={{ fontSize: 15, fontWeight: 800, color: S.coral, marginBottom: 8 }}>⚠️ Warning Signs</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 20 }}>
            If you're seeing these, a loving divorce may be healthier than a resentful marriage.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
            {WARNING_SIGNS.map((sign, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                <span style={{ color: S.coral, flexShrink: 0 }}>⚠️</span>
                {sign}
              </div>
            ))}
          </div>
          <div style={{
            background: S.coralMuted, borderRadius: 10, padding: '14px 16px',
            fontStyle: 'italic', fontSize: 15, color: 'rgba(255,255,255,0.7)',
          }}>
            "Choosing to end a lavender marriage can be just as brave as choosing to build one."
          </div>
        </div>
      </section>

      {/* Resources */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>Resources</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.6 }}>
          These are real resources that help real people in mixed-orientation marriages and lavender transitions. Nothing here is sponsored.
        </p>

        {/* Support Orgs */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>🌐 Organizations & Communities</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { name: 'Straight Spouse Network', url: 'https://www.straightspouse.org', tag: 'Straight spouses', desc: 'The most important resource for heterosexual partners of LGBTQ+ spouses. Peer support, one-on-one connections, and trained counselors.' },
              { name: 'PFLAG', url: 'https://pflag.org', tag: 'Families', desc: 'Family support and education with local chapters across the US. Especially useful for extended family members trying to understand.' },
              { name: 'Mixed Orientation Marriage Association', url: 'https://www.moho.info', tag: 'MOMs', desc: 'A community specifically for couples in mixed-orientation marriages — people who chose the redesign path.' },
              { name: 'Affirmative Couch', url: 'https://www.affirmativecouch.com', tag: 'LGBTQ+ therapy', desc: 'Directory of LGBTQ+ affirming therapists. For the partner who came out — find someone who won\'t make you minimize your experience.' },
              { name: 'Psychology Today Therapist Finder', url: 'https://www.psychologytoday.com/us/therapists', tag: 'Find a therapist', desc: 'Filter by "LGBTQ+" and "couples." For both partners individually and together.' },
              { name: 'LLMA App', url: APP_STORE_URL, tag: 'Community', desc: 'For people who\'ve chosen intentional, values-aligned partnership — including those on the other side of a lavender transition.' },
              { name: 'Crisis Text Line', url: 'https://www.crisistextline.org', tag: '24/7 crisis', desc: 'Text HOME to 741741. If someone in your household is in crisis — this is the number. Free and confidential.' },
              { name: 'LGBTQ+ National Help Center', url: 'https://www.glbthotline.org', tag: 'Hotline', desc: 'Peer counseling and support for LGBTQ+ individuals. 1-888-843-4564.' },
            ].map((item, i) => (
              <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>{item.name}</p>
                    <span style={{ fontSize: 11, fontWeight: 700, color: S.lavender, background: S.lavenderMuted, border: `1px solid ${S.lavenderBorder}`, borderRadius: 20, padding: '2px 10px', whiteSpace: 'nowrap' }}>{item.tag}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                </div>
                <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                  flexShrink: 0, padding: '6px 14px', borderRadius: 20,
                  background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
                  color: S.lavender, fontSize: 12, fontWeight: 700, textDecoration: 'none',
                }}>Visit →</a>
              </div>
            ))}
          </div>
        </div>

        {/* Books */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>📚 Books Worth Owning</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { title: 'The Other Side of the Closet', author: 'Amity Pierce Buxton', desc: 'The definitive book for straight spouses. The one to read first.' },
              { title: 'Facing Codependence', author: 'Pia Mellody', desc: 'Essential for the partner who hid. Understanding the "why" behind the hiding.' },
              { title: 'Daring Greatly', author: 'Brené Brown', desc: 'The research on vulnerability, shame, and why truth-telling is an act of courage.' },
              { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', desc: 'Understanding how trauma — including the trauma of betrayal — lives in the body.' },
              { title: 'Hold Me Tight', author: 'Sue Johnson', desc: 'Emotionally Focused Therapy for couples. Even in redesigned partnerships, attachment is the foundation.' },
              { title: 'Conscious Uncoupling', author: 'Katherine Woodward Thomas', desc: 'For couples who choose a loving divorce — how to separate with dignity and care.' },
            ].map((book, i) => (
              <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '20px' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4, lineHeight: 1.3 }}>{book.title}</p>
                <p style={{ fontSize: 12, color: S.lavender, marginBottom: 8 }}>— {book.author}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{book.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Therapy types */}
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>🧠 Therapy Approaches That Work</h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', marginBottom: 16 }}>
            Standard couples therapy often isn't equipped for mixed-orientation marriages. Ask your therapist specifically if they have experience with MOMs.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { name: 'Emotionally Focused Therapy (EFT)', desc: 'Built around attachment theory. Best for couples rebuilding trust and emotional safety.' },
              { name: 'EMDR', desc: 'Eye Movement Desensitization — highly effective for betrayal trauma, especially for straight spouses.' },
              { name: 'Internal Family Systems (IFS)', desc: 'Works with the "parts" that are performing, protecting, or shutting down. Profound for both partners.' },
              { name: 'Somatic Therapy', desc: 'Body-based work. Crucial if either partner has been disconnected from their physical experience for years.' },
            ].map((t, i) => (
              <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '20px' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: S.purple, marginBottom: 8 }}>{t.name}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing letter */}
      <section style={{ maxWidth: 680, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(143,92,184,0.12) 0%, rgba(197,159,225,0.06) 100%)',
          border: `1px solid ${S.purpleBorder}`,
          borderRadius: 24, padding: '48px 44px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 20 }}>You're Not Alone</p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 16 }}>
            When I came out to Brandi, I thought our only options were destruction or deception. I was wrong.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 16 }}>
            We built something new. Something honest. Our daughter sees two parents who chose each other — out of love, not obligation.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 32 }}>
            Whether you build a lavender marriage or choose a loving divorce, choose authentically.
          </p>
          <p style={{ fontSize: 18, fontStyle: 'italic', color: S.lavender, fontWeight: 600, marginBottom: 32 }}>
            "Life and Love Made Authentic."
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', marginBottom: 32 }}>
            Welcome to LLMA.<br />
            <span style={{ color: S.lavender, fontWeight: 600 }}>With love, Martin</span>
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
              background: S.lavender, color: S.bg,
              padding: '14px 32px', borderRadius: 12,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
            }}>
              💜 Download LLMA
            </a>
            <Link to="/" style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '14px 32px', borderRadius: 12,
              fontSize: 16, fontWeight: 600, textDecoration: 'none',
            }}>
              Back to Home
            </Link>
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
          <Link to="/lavender-transition-guide" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Lavender Guide Pt.1</Link>
          {' · '}
          <Link to="/5-truths-that-saved-me" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>5 Truths</Link>
          {' · '}
          <a href="https://www.tiktok.com/@itsmcmartyfly" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>@itsmcmartyfly</a>
        </p>
        <p>© 2025 Martin Court Thomas Jr. · martin@llma.life</p>
      </footer>
    </div>
  );
}
