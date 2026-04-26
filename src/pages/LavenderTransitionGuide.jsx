import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';

function PromptBox({ label, prompt, lines = 3 }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
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
  amber: '#D4A94A',
  amberMuted: 'rgba(212,169,74,0.1)',
  amberBorder: 'rgba(212,169,74,0.25)',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
  card: '#111011',
  cardBorder: 'rgba(255,255,255,0.06)',
};

const SECTIONS = [
  {
    num: '1',
    title: 'Understanding Where You Are',
    color: S.purple,
    colorMuted: S.purpleMuted,
    colorBorder: S.purpleBorder,
  },
  {
    num: '2',
    title: 'The Choice: Divorce or Redesign?',
    color: S.coral,
    colorMuted: S.coralMuted,
    colorBorder: S.coralBorder,
  },
];

export default function LavenderTransitionGuide() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff', fontFamily: S.font }}>
      <Helmet>
        <title>The Lavender Transition Guide | LLMA</title>
        <meta name="description" content="A practical guide for navigating the transition into a lavender marriage or intentional platonic partnership. Real talk from people who've done it." />
        <link rel="canonical" href="https://llma.life/lavender-transition-guide" />
        <meta property="og:url" content="https://llma.life/lavender-transition-guide" />
        <meta property="og:title" content="The Lavender Transition Guide | LLMA" />
        <meta property="og:description" content="A practical guide for navigating the transition into a lavender marriage or intentional platonic partnership." />
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
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', fontWeight: 500 }}>/ lavender guide</span>
        </Link>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <Link to="/what-is-a-lavender-marriage" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none' }}>What Is It?</Link>
          <Link to="/5-truths-that-saved-me" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none' }}>5 Truths</Link>
          <Link to="/the-six-pillars" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, textDecoration: 'none' }}>Six Pillars</Link>
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
          display: 'inline-block', background: S.lavenderMuted, border: `1px solid ${S.lavenderBorder}`,
          borderRadius: 20, padding: '6px 16px', marginBottom: 24,
          fontSize: 12, fontWeight: 700, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: S.lavender,
        }}>
          Part 1 of 2 — Free Guide
        </div>
        <h1 style={{
          fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 900, lineHeight: 1.05,
          letterSpacing: '-1.5px', marginBottom: 20,
        }}>
          <span style={{ color: S.lavender }}>The Lavender</span>
          <br />
          <span style={{ color: '#fff' }}>Transition</span>
        </h1>
        <p style={{
          fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
          maxWidth: 560, margin: '0 auto 12px',
        }}>
          A Practical Guide for Couples Navigating Coming Out Within a Traditional Marriage
        </p>
        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)', marginBottom: 48 }}>
          By Martin Court Thomas Jr.
        </p>
        <div style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap',
        }}>
          <a href="#section-1" style={{
            background: S.lavender, color: S.bg, padding: '14px 28px',
            borderRadius: 12, fontSize: 15, fontWeight: 700, textDecoration: 'none',
          }}>Start Reading</a>
          <Link to="/the-six-pillars" style={{
            background: 'transparent', color: S.lavender,
            border: `1px solid ${S.lavenderBorder}`,
            padding: '14px 28px', borderRadius: 12,
            fontSize: 15, fontWeight: 600, textDecoration: 'none',
          }}>Continue to Part 2 →</Link>
        </div>
      </section>

      {/* Author Letter */}
      <section style={{
        maxWidth: 680, margin: '0 auto 80px', padding: '0 24px',
      }}>
        <div style={{
          background: S.card, border: `1px solid ${S.cardBorder}`,
          borderRadius: 20, padding: '40px 44px',
          borderLeft: `3px solid ${S.lavender}`,
        }}>
          <p style={{ fontSize: 13, color: S.lavender, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 20 }}>
            A Note Before We Begin
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
            If you're reading this, someone in your marriage just came out. Maybe it was you. Maybe it was your partner. Either way, you're holding a guide written by someone who's been exactly where you are.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
            I came out to my wife Brandi after 14+ years of marriage. I was terrified my truth would destroy everything.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
            Here's what I learned: <strong style={{ color: '#fff' }}>Coming out doesn't have to mean coming apart.</strong>
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', marginBottom: 24 }}>
            If you're wondering whether you can keep your family together while living authentically, the answer is: Yes. If you both choose it.
          </p>
          <p style={{ fontSize: 16, color: S.lavender, fontWeight: 600 }}>— Martin</p>
        </div>
        <div style={{
          textAlign: 'center', marginTop: 24, padding: '20px',
          background: S.purpleMuted, borderRadius: 12,
          fontStyle: 'italic', fontSize: 16, color: 'rgba(255,255,255,0.6)',
        }}>
          "We don't fall into relationships — we build them."
        </div>
      </section>

      {/* Section 1: Understanding Where You Are */}
      <section id="section-1" style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: S.purpleMuted, border: `2px solid ${S.purple}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 900, color: S.purple, flexShrink: 0,
          }}>1</div>
          <div>
            <p style={{ fontSize: 11, color: S.purple, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Section One</p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', color: '#fff', margin: 0 }}>
              Understanding Where You Are
            </h2>
          </div>
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
          You're both experiencing one of the most disorienting moments of your lives. What you're feeling is valid — and it's different depending on where you stand.
        </p>

        {/* Two-column emotional states */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 40 }}>
          {/* Partner who came out */}
          <div style={{
            background: S.card, border: `1px solid ${S.purpleBorder}`,
            borderRadius: 16, padding: '28px 24px',
          }}>
            <p style={{ fontSize: 12, color: S.purple, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Partner Who Came Out
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Relief mixed with terror',
                'Guilt about "deceiving" your partner',
                'Fear of losing your family',
                'Grief for who you\'re leaving behind',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
                  <span style={{ color: S.purple, flexShrink: 0 }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Partner who learned */}
          <div style={{
            background: S.card, border: `1px solid ${S.lavenderBorder}`,
            borderRadius: 16, padding: '28px 24px',
          }}>
            <p style={{ fontSize: 12, color: S.lavender, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              Partner Who Learned
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'Shock, disbelief — and the strange calm before it fully lands',
                'Retroactive questioning: "Was any of it real?"',
                'Grief for the marriage you thought you had',
                'Anger at the deception — and unexpected compassion for their pain',
                'Identity crisis: "What does this say about me?"',
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
                  <span style={{ color: S.lavender, flexShrink: 0 }}>◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Important note */}
        <div style={{
          background: S.amberMuted, border: `1px solid ${S.amberBorder}`,
          borderRadius: 16, padding: '24px 28px', marginBottom: 40,
        }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: S.amber, marginBottom: 8 }}>
            Important to understand:
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, margin: 0 }}>
            This doesn't mean your relationship is ending. What you're building is something new.
          </p>
        </div>

        {/* First 48 Hours */}
        <div style={{
          background: S.card, border: `1px solid ${S.cardBorder}`,
          borderRadius: 20, padding: '32px 36px',
        }}>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
            ⏰ The First 48 Hours
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: '#4ade80', letterSpacing: '0.08em', marginBottom: 12 }}>✓ DO</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Breathe. No decisions needed now.',
                  'Give space but stay in contact',
                  'Keep kids\' routines stable',
                  'Find one trusted person each',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, paddingLeft: 12, borderLeft: '2px solid rgba(74,222,128,0.3)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 800, color: S.coral, letterSpacing: '0.08em', marginBottom: 12 }}>✗ DON'T</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Make permanent decisions now',
                  'Tell everyone you know',
                  'Involve children in adult talks',
                  'Let others pressure you',
                ].map((item, i) => (
                  <li key={i} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, paddingLeft: 12, borderLeft: '2px solid rgba(220,90,75,0.3)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Section 1 Exercise */}
        <div style={{ marginTop: 32, background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`, borderRadius: 16, padding: '28px 32px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.purple, marginBottom: 6 }}>
            Section 1 Exercise
          </p>
          <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 12 }}>Where Are You, Really?</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 24 }}>
            Do this separately. Don't share your answers with each other yet — not until you've both had time to sit with them. There's no right answer. Honesty is the only requirement.
          </p>
          <PromptBox label="For the partner who came out" prompt="In your own words — not the polished version — describe how you feel right now. Not what you want your partner to hear. What's actually true?" lines={3} />
          <PromptBox label="For the partner who learned" prompt="What is the hardest part of this for you right now? Not the most logical concern — the rawest, most honest feeling." lines={3} />
          <PromptBox label="For both" prompt="What are you most afraid of losing in this? Be as specific as you can. ('My family' is too broad. 'Sunday mornings and the way we make breakfast together' is what we're after.)" lines={3} />
        </div>
      </section>

      {/* Section 2: The Choice */}
      <section id="section-2" style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: S.coralMuted, border: `2px solid ${S.coral}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 900, color: S.coral, flexShrink: 0,
          }}>2</div>
          <div>
            <p style={{ fontSize: 11, color: S.coral, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 4 }}>Section Two</p>
            <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.5px', color: '#fff', margin: 0 }}>
              The Choice: Divorce or Redesign?
            </h2>
          </div>
        </div>

        <p style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', marginBottom: 32 }}>
          Society says there's only one option: divorce. But it's not the only path. Before you decide, ask yourself these questions honestly.
        </p>

        {/* Individual questions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={{
            background: S.card, border: `1px solid ${S.purpleBorder}`,
            borderRadius: 16, padding: '28px 24px',
          }}>
            <p style={{ fontSize: 12, color: S.purple, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              🤔 Partner Who Came Out
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'What do I love beyond attraction?',
                'Can I be honest AND maintain this?',
                'What am I most afraid of losing?',
                'Am I willing to redesign?',
              ].map((q, i) => (
                <li key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, borderBottom: i < 3 ? `1px solid ${S.cardBorder}` : 'none', paddingBottom: i < 3 ? 12 : 0 }}>
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <div style={{
            background: S.card, border: `1px solid ${S.lavenderBorder}`,
            borderRadius: 16, padding: '28px 24px',
          }}>
            <p style={{ fontSize: 12, color: S.lavender, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
              🤔 Partner Who Learned
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'What do I love beyond orientation?',
                'Can I separate pain from the person?',
                'What am I most afraid of losing?',
                'Am I willing to explore something different?',
              ].map((q, i) => (
                <li key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5, borderBottom: i < 3 ? `1px solid ${S.cardBorder}` : 'none', paddingBottom: i < 3 ? 12 : 0 }}>
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Together questions */}
        <div style={{
          background: S.card, border: `1px solid ${S.coralBorder}`,
          borderRadius: 16, padding: '28px 28px', marginBottom: 32,
        }}>
          <p style={{ fontSize: 12, color: S.coral, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
            💑 Questions Together
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              'What do we both want for our children?',
              'What parts of this are worth preserving?',
              'Are we willing to redefine "marriage"?',
              'Are we choosing this freely — not out of fear?',
            ].map((q, i) => (
              <div key={i} style={{
                background: S.coralMuted, borderRadius: 10, padding: '14px 16px',
                fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.5,
              }}>
                {q}
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div style={{
          textAlign: 'center', padding: '32px 24px',
          background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`,
          borderRadius: 16, marginBottom: 32,
        }}>
          <p style={{ fontSize: 20, fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5, margin: 0 }}>
            "A lavender marriage only works if both partners choose it freely."
          </p>
        </div>

        {/* Section 2 Exercise */}
        <div style={{ background: S.coralMuted, border: `1px solid ${S.coralBorder}`, borderRadius: 16, padding: '28px 32px' }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.coral, marginBottom: 6 }}>
            Section 2 Exercise
          </p>
          <p style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 12 }}>The Decision Framework</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: 24 }}>
            This is not a worksheet to complete in one sitting. Some people need days. Some need weeks. That's okay. What's not okay is making a permanent decision while you're still in the shock of the first 48 hours. Come back to this when you can breathe.
          </p>
          <PromptBox label="What you actually want" prompt="If you could design your life from scratch — not the life you think you should want, not what's practical — what would it look like? Describe it for yourself, your partner, and your children." lines={4} />
          <PromptBox label="The non-negotiables" prompt="What are the things you absolutely cannot sacrifice in any version of this? List them plainly. These are your anchor points for every decision ahead." lines={3} />
          <PromptBox label="The fear check" prompt="Look at the question 'Are we choosing this freely — not out of fear?' and answer it honestly. If fear is driving this decision, name the fear specifically. Decisions made from fear rarely hold." lines={3} />
          <PromptBox label="The 10-year test" prompt="Imagine it's 10 years from now. You made a choice. Write one paragraph describing what your life looks like — your relationship, your kids, your sense of self — if you chose redesign. Write a second paragraph if you chose a loving divorce. Don't judge either. Just see them." lines={5} />
        </div>
      </section>

      {/* Resources */}
      <section style={{ maxWidth: 760, margin: '0 auto 80px', padding: '0 24px' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>Resources</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.6 }}>
          You don't have to figure this out alone. These are the people, books, and organizations who specialize in exactly what you're going through.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 40 }}>
          {[
            { name: 'Straight Spouse Network', url: 'https://www.straightspouse.org', tag: 'For straight spouses', desc: 'The single best resource for heterosexual partners of LGBTQ+ spouses. Support groups, one-on-one peer support, and trained counselors who\'ve been exactly where you are.' },
            { name: 'PFLAG', url: 'https://pflag.org', tag: 'For families', desc: 'Family support, education, and advocacy. Local chapters in most US cities. Especially helpful for parents, siblings, and extended family.' },
            { name: 'Psychology Today Therapist Finder', url: 'https://www.psychologytoday.com/us/therapists', tag: 'Find a therapist', desc: 'Filter by "LGBTQ+" issues and couples therapy. Look for therapists who list "mixed-orientation marriages" or "straight spouse" as a specialty.' },
            { name: 'LLMA App', url: APP_STORE_URL, tag: 'Community', desc: 'For couples who\'ve chosen the redesign path — or individuals on the other side building intentional, values-aligned partnerships.' },
            { name: 'LGBTQ+ National Help Center', url: 'https://www.glbthotline.org', tag: 'Crisis support', desc: 'Free peer counseling and support. Call 1-888-843-4564 or use the online chat. For both the partner who came out and the one who learned.' },
            { name: 'Crisis Text Line', url: 'https://www.crisistextline.org', tag: '24/7 crisis', desc: 'Text HOME to 741741. Free and confidential. If someone in your household is struggling — this is the number.' },
          ].map((item, i) => (
            <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', margin: 0 }}>{item.name}</p>
                  <span style={{ fontSize: 11, fontWeight: 700, color: S.lavender, background: S.lavenderMuted, border: `1px solid ${S.lavenderBorder}`, borderRadius: 20, padding: '2px 10px' }}>{item.tag}</span>
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

        <div>
          <h3 style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>📚 Essential Reading</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { title: 'The Other Side of the Closet', author: 'Amity Pierce Buxton', desc: 'The definitive book for straight spouses. Written by one. Required reading.' },
              { title: 'Straight Wives, Gay Husbands', author: 'Bonnie Kaye', desc: 'Raw, honest, and written from lived experience. No sugarcoating.' },
              { title: 'Mixed Blessings', author: 'Sheri Stritof', desc: 'On navigating mixed-orientation marriages with honesty and care.' },
              { title: 'Facing Codependence', author: 'Pia Mellody', desc: 'For the partner who came out — understanding why the hiding happened.' },
            ].map((book, i) => (
              <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '20px' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4, lineHeight: 1.3 }}>{book.title}</p>
                <p style={{ fontSize: 12, color: S.lavender, marginBottom: 8 }}>— {book.author}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{book.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA: Continue to Part 2 */}
      <section style={{
        maxWidth: 760, margin: '0 auto 80px', padding: '0 24px',
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(143,92,184,0.15) 0%, rgba(197,159,225,0.08) 100%)',
          border: `1px solid ${S.purpleBorder}`,
          borderRadius: 24, padding: '48px 44px', textAlign: 'center',
        }}>
          <p style={{ fontSize: 13, color: S.lavender, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
            Continue Your Journey
          </p>
          <h3 style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-0.5px', marginBottom: 12 }}>
            Ready for Part 2?
          </h3>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: 480, margin: '0 auto 32px' }}>
            The Six Pillars gives you the framework to redesign your relationship — communication, boundaries, family, and more.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/the-six-pillars" style={{
              background: S.lavender, color: S.bg,
              padding: '14px 32px', borderRadius: 12,
              fontSize: 16, fontWeight: 700, textDecoration: 'none',
            }}>
              Continue to The Six Pillars →
            </Link>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '14px 32px', borderRadius: 12,
              fontSize: 16, fontWeight: 600, textDecoration: 'none',
            }}>
              Download the App
            </a>
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
          <Link to="/what-is-a-lavender-marriage" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>What Is a Lavender Marriage?</Link>
          {' · '}
          <Link to="/5-truths-that-saved-me" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>5 Truths</Link>
          {' · '}
          <Link to="/the-six-pillars" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Six Pillars</Link>
        </p>
        <p>© 2025 Martin Court Thomas Jr. · martin@llma.life</p>
      </footer>
    </div>
  );
}
