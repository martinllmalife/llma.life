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
  tealBorder: 'rgba(58,191,170,0.25)',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
  card: '#111011',
  cardBorder: 'rgba(255,255,255,0.06)',
};

const TRUTHS = [
  {
    num: '01',
    label: 'Truth One',
    title: "You're not broken — you're performing",
    color: S.purple,
    colorMuted: S.purpleMuted,
    colorBorder: S.purpleBorder,
    why: "Most people in hiding don't think of themselves as performers. They think of themselves as failures, liars, or frauds. The reframe matters — because you can stop a performance. You can't fix being broken.",
    body: "I spent years believing something was fundamentally wrong with me. The lying, the hiding, the exhaustion of keeping up a life that didn't fit — I thought that was just me. What I learned at an Intensive Trauma Treatment Center in Scottsdale changed everything: I wasn't broken. I was performing. I was a textbook codependent who'd learned to survive by becoming whoever the room needed me to be. My mother needed me to be strong. My community needed me to be straight. My marriage needed me to be a certain kind of man. And I was so good at all of it that I forgot there was a real person underneath.",
    symptoms: [
      'Difficulty experiencing appropriate levels of self-esteem — swinging between grandiosity and worthlessness',
      'Difficulty setting functional boundaries — walls completely up or completely down',
      'Difficulty owning your own reality — not knowing who you are without others\' opinions',
      'Difficulty meeting your own needs — world-class at meeting everyone else\'s',
      'Difficulty experiencing anything moderately — everything is all-or-nothing',
    ],
    exercise: {
      title: 'The Performance Audit',
      intro: 'This isn\'t about shame — it\'s about seeing the pattern clearly. You can\'t stop a performance you haven\'t identified. Set a timer for 20 minutes. Answer each prompt without editing yourself.',
      steps: [
        {
          label: 'Step 1 — Map the performance',
          prompt: 'List 3 roles you\'re currently playing that don\'t feel like you. Be specific (e.g., "the successful straight man," "the patient wife," "the one who has it together at work").',
          lines: 3,
        },
        {
          label: 'Step 2 — Trace the origin',
          prompt: 'For your biggest performance, ask: who first taught you this was required for survival? A parent? A religion? A community? Write down exactly what they communicated — verbally or through behavior.',
          lines: 3,
        },
        {
          label: 'Step 3 — Count the cost',
          prompt: 'What does maintaining this performance cost you daily? (Energy, intimacy, self-respect, joy?) Be honest about the tax you\'re paying.',
          lines: 2,
        },
        {
          label: 'Step 4 — The uncensored version',
          prompt: 'If nobody you knew would ever find out — what would you do differently this week? Write it as if it\'s already true.',
          lines: 3,
        },
      ],
    },
  },
  {
    num: '02',
    label: 'Truth Two',
    title: "Success requires someone who believes you're enough",
    color: S.lavender,
    colorMuted: S.lavenderMuted,
    colorBorder: S.lavenderBorder,
    why: "We're told to be self-made. But nobody does it alone. The question isn't whether you need someone in your corner — it's whether the people in your corner know the real you.",
    body: "At 27, I was shaking a sign on the side of the road for $10 an hour. I had nothing. But I had Brandi — a woman who saw me fully, knew I liked guys, and still believed I could be everything. That belief was the foundation I built everything else on. I worked my ass off, but having one person in my corner who never doubted the real me? That changed everything. The lie I told myself for decades was that I had to earn love by hiding. The truth is: you can't be truly supported by someone who's supporting a character instead of you.",
    exercise: {
      title: 'The Belief Inventory',
      intro: 'We often don\'t realize how much of our inner circle knows the real us — versus a polished version. This exercise helps you audit who actually has your back.',
      steps: [
        {
          label: 'Step 1 — Who knows you?',
          prompt: 'Write the names of 3–5 people closest to you. Next to each name, rate on a scale of 1–10 how much of the real you they actually know (1 = they know a character, 10 = they know everything).',
          lines: 3,
        },
        {
          label: 'Step 2 — The protection trap',
          prompt: 'For the people you rated below a 7 — who are you protecting by keeping yourself hidden from them? What are you afraid they\'d do with the truth?',
          lines: 3,
        },
        {
          label: 'Step 3 — The question you\'re afraid to ask',
          prompt: 'Is there someone in your life who might love you MORE if they knew everything? Write their name and what you\'re afraid to tell them.',
          lines: 2,
        },
        {
          label: 'Step 4 — One next step',
          prompt: 'What is one small truth you could share with someone this week — not your biggest secret, just one layer of realness you\'ve been withholding? Write the person\'s name and the truth.',
          lines: 2,
        },
      ],
    },
  },
  {
    num: '03',
    label: 'Truth Three',
    title: 'Coming out is not a one-time event',
    color: S.coral,
    colorMuted: S.coralMuted,
    colorBorder: S.coralBorder,
    why: "The myth of 'the big reveal' keeps people paralyzed. If you think coming out is one massive conversation you have to get right, you'll never start. When you understand it's a lifelong unfolding, each small step becomes possible.",
    body: "I came out as gay and thought I was done. Then I realized I had to come out to myself again — this time without shame. Then to my kids. Then to my parents. Then to my business partners. Then every day when strangers make assumptions. Coming out is a process, not an event. You come out to yourself first, then your partner, then your family, then your community, then in a hundred small moments for the rest of your life. Each layer requires a different kind of courage. Each layer is its own grief and liberation. The mistake is thinking there's a finish line. There isn't. There's just deeper truth — and more room to breathe with each layer you shed.",
    exercise: {
      title: 'The Coming Out Map',
      intro: 'This isn\'t about pressure to come out to anyone right now. It\'s about getting clear on where you are in the process — so you can stop pretending you\'re either all the way out or still at the beginning.',
      steps: [
        {
          label: 'Step 1 — Where you\'ve been',
          prompt: 'List every person or group you\'ve already come out to (or told part of your truth). Next to each, write one word for how they received it.',
          lines: 3,
        },
        {
          label: 'Step 2 — The held-back truth',
          prompt: 'Who is the one person you most need to tell something true — but haven\'t? What exactly are you afraid will happen if you do?',
          lines: 3,
        },
        {
          label: 'Step 3 — What it\'s costing you',
          prompt: 'What does carrying this unexpressed truth do to your body when you\'re around that person? Where do you feel it physically? (Chest? Jaw? Stomach?) Write about it.',
          lines: 2,
        },
        {
          label: 'Step 4 — The next layer',
          prompt: 'If you were to take the next step in your truth — not the biggest, just the next one — what would it be? Write it as a specific sentence: "I would tell _____ that _____."',
          lines: 2,
        },
      ],
    },
  },
  {
    num: '04',
    label: 'Truth Four',
    title: "If you don't control your truth, it controls you",
    color: S.purple,
    colorMuted: S.purpleMuted,
    colorBorder: S.purpleBorder,
    why: "A secret isn't neutral. It's an active drain on your energy, your relationships, and your decision-making. Every choice you make while protecting a secret is a compromised choice. Owning your story isn't just emotional — it's strategic.",
    body: "The truth always comes out. Always. I'd spent decades managing a secret — and the mental overhead was crushing. Every decision had to account for the lie. Every relationship had a ceiling I'd built myself. Every opportunity came with the question: will this expose me? When I finally chose to own my story instead of letting it own me, everything simplified. The energy I'd spent managing perception became available for actually living. Your truth is going to define your life one way or another. You can either be the author of that story, or it writes itself — usually in the worst possible moment, to the worst possible audience.",
    exercise: {
      title: 'The Control Audit',
      intro: 'Most people underestimate how much a secret costs them. This exercise makes the invisible tax visible — so you can make a real choice about whether to keep paying it.',
      steps: [
        {
          label: 'Step 1 — Name the secret',
          prompt: 'What is the thing you\'re most actively managing, hiding, or protecting right now? Write it plainly, as if no one will ever see this. (No one will — this is for you.)',
          lines: 2,
        },
        {
          label: 'Step 2 — Count the decisions it controls',
          prompt: 'In the last week, how many decisions did you make — small or large — that were influenced by protecting this secret? List as many as you can.',
          lines: 3,
        },
        {
          label: 'Step 3 — Map the worst case',
          prompt: 'If this secret came out on its own — not by your choice, in the worst possible way — what would actually happen? Write it out fully. Don\'t stop at the fear. Write what comes after it.',
          lines: 3,
        },
        {
          label: 'Step 4 — Compare the costs',
          prompt: 'Which is scarier: the worst-case scenario you just wrote, or continuing to pay the daily tax of managing this secret for the next 10 years? Write honestly.',
          lines: 2,
        },
      ],
    },
  },
  {
    num: '05',
    label: 'Truth Five',
    title: 'The love you seek is already inside you',
    color: S.coral,
    colorMuted: S.coralMuted,
    colorBorder: S.coralBorder,
    why: "This truth sounds like a bumper sticker until you feel what it costs to live without it. Every person I've met who was desperately searching for love from others was doing so because they'd never learned to give it to themselves. The search is exhausting. The destination was always closer than you thought.",
    body: "I spent my whole life chasing love. Through achievements, through relationships, through performances designed to make people stay. I collected accolades like insurance policies against feeling worthless. But sitting in that treatment center in Scottsdale, stripped of every distraction, I finally got it: the only love I was missing was my own. The universe can only match the energy you have for yourself. When you stop outsourcing your worth to other people's opinions, two things happen. First, you stop needing others to validate your existence. Second — and this is the thing nobody tells you — you become actually available for real love. Because real love requires you to show up. And you can't show up if you don't believe you deserve to be there.",
    exercise: {
      title: 'The Love Audit',
      intro: 'This is the exercise that changed my life. Do it slowly. Don\'t rush through it. If you feel resistance or emotion — that\'s information. Sit with it.',
      steps: [
        {
          label: 'Step 1 — The outsourcing list',
          prompt: 'What are you currently getting from other people\'s approval, validation, or attention that you can\'t give yourself? (Examples: proof that you\'re worthy, proof that you\'re lovable, proof that you\'re successful.) Be specific.',
          lines: 3,
        },
        {
          label: 'Step 2 — The mirror moment',
          prompt: 'Find a mirror. Look yourself in the eyes and say out loud: "I love you. You are enough." Write exactly what happened — what feelings came up, what voice in your head pushed back, what it felt like in your body.',
          lines: 3,
        },
        {
          label: 'Step 3 — The self-betrayals',
          prompt: 'List 5 ways you regularly betray yourself to keep others comfortable. (Saying yes when you mean no. Staying quiet when you have something to say. Pretending things are fine when they\'re not.)',
          lines: 3,
        },
        {
          label: 'Step 4 — The commitment',
          prompt: 'Write one specific way you will show love to yourself this week — not a bubble bath, but a real act of self-respect. Something that might be uncomfortable. Sign it with your name.',
          lines: 2,
        },
      ],
    },
  },
];

const RESOURCES = {
  books: [
    { title: 'Facing Codependence', author: 'Pia Mellody', desc: 'The book that saved my life. The 5 core symptoms in Truth One are straight from this.' },
    { title: 'The Body Keeps the Score', author: 'Bessel van der Kolk', desc: 'Essential for understanding how trauma lives in your body, not just your mind.' },
    { title: 'Daring Greatly', author: 'Brené Brown', desc: 'The research behind vulnerability and why shame keeps us performing.' },
    { title: 'The Other Side of the Closet', author: 'Amity Pierce Buxton', desc: 'Required reading for straight spouses navigating their partner\'s coming out.' },
    { title: 'Coming Out to Yourself', author: 'Mike Yaconelli', desc: 'A quiet, gentle guide for people in the early stages of self-discovery.' },
    { title: 'Unfuck Your Brain', author: 'Faith Harper', desc: 'Practical neuroscience on why we think the thoughts that keep us stuck.' },
  ],
  support: [
    { name: 'LLMA App', url: APP_STORE_URL, desc: 'Built for people navigating intentional, values-aligned partnership after authenticity.' },
    { name: 'Psychology Today Therapist Finder', url: 'https://www.psychologytoday.com/us/therapists', desc: 'Filter by "LGBTQ+" and "codependency" to find someone who gets it.' },
    { name: 'Straight Spouse Network', url: 'https://www.straightspouse.org', desc: 'Support for heterosexual partners of LGBTQ+ spouses — the most underserved community in this space.' },
    { name: 'PFLAG', url: 'https://pflag.org', desc: 'The original family support organization. Local chapters across the US.' },
    { name: 'The Trevor Project', url: 'https://www.thetrevorproject.org', desc: 'Crisis support for LGBTQ+ youth. Crisis line: 1-866-488-7386.' },
    { name: 'LGBTQ+ National Help Center', url: 'https://www.glbthotline.org', desc: 'Free peer counseling, information, and local resources. 1-888-843-4564.' },
    { name: 'Crisis Text Line', url: 'https://www.crisistextline.org', desc: 'Text HOME to 741741. Free, confidential support 24/7.' },
    { name: 'r/latebloomerlesbians', url: 'https://www.reddit.com/r/latebloomerlesbians/', desc: 'Reddit community for women coming out later in life. Non-judgmental, real talk.' },
  ],
  therapyTypes: [
    { name: 'EMDR', desc: 'Eye Movement Desensitization and Reprocessing — highly effective for trauma and shame.' },
    { name: 'IFS (Internal Family Systems)', desc: 'Works directly with the "parts" of you that are performing. Deeply useful for codependents.' },
    { name: 'Somatic Therapy', desc: 'Body-based work. For people who\'ve been "in their head" their whole lives — this is the unlock.' },
    { name: 'Gottman Couples Therapy', desc: 'Evidence-based couples work. Useful whether you\'re redesigning a marriage or ending one with dignity.' },
  ],
};

function PromptBox({ label, prompt, lines }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 12, fontWeight: 800, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
        {label}
      </p>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, marginBottom: 12 }}>
        {prompt}
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 8,
        padding: '14px 16px',
        minHeight: `${lines * 28 + 20}px`,
        display: 'flex', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.18)', fontStyle: 'italic' }}>Write your answer here...</span>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(13,10,11,0.92)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      fontFamily: S.font,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/llma-logo.png" alt="LLMA" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>llma.life</span>
        </Link>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Link to="/what-is-a-lavender-marriage" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', padding: '8px 12px' }}>What Is It?</Link>
          <Link to="/lavender-transition-guide" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.5)', textDecoration: 'none', padding: '8px 12px' }}>Lavender Guide</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '8px 16px', borderRadius: 9999, background: S.purple, color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>Download App</a>
        </div>
      </div>
    </nav>
  );
}

export default function FiveTruths() {
  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff', fontFamily: S.font }}>
      <Helmet>
        <title>5 Truths That Saved Me | LLMA</title>
        <meta name="description" content="The five things Marty Thomas wishes he'd known sooner about lavender marriage, identity, and intentional love. A personal essay from the founder of LLMA." />
        <link rel="canonical" href="https://www.llma.life/5-truths-that-saved-me" />
        <meta property="og:url" content="https://www.llma.life/5-truths-that-saved-me" />
        <meta property="og:title" content="5 Truths That Saved Me | LLMA" />
        <meta property="og:description" content="The five things Marty Thomas wishes he'd known sooner about lavender marriage, identity, and intentional love." />
        <meta property="og:image" content="https://www.llma.life/og-image.png" />
      </Helmet>
      <Nav />

      {/* Hero */}
      <section style={{
        paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 700, height: 500, background: 'radial-gradient(ellipse, rgba(143,92,184,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`, borderRadius: 9999, padding: '6px 16px', fontSize: 11, fontWeight: 700, color: S.lavender, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Personal Story · Free Workbook
          </div>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.04em', color: '#fff', margin: '0 0 12px' }}>
            From Liar
          </h1>
          <h1 style={{ fontSize: 'clamp(44px, 7vw, 80px)', fontWeight: 900, lineHeight: 1.04, letterSpacing: '-0.04em', margin: '0 0 28px', background: 'linear-gradient(135deg, #C59FE1 0%, #8F5CB8 50%, #DC5A4B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            to LLMA
          </h1>
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', color: 'rgba(255,255,255,0.6)', marginBottom: 12, fontStyle: 'italic' }}>
            The 5 Truths That Saved My Life
          </p>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.35)', marginBottom: 48 }}>By Martin Court Thomas Jr.</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 48 }}>
            {TRUTHS.map((t, i) => (
              <a key={t.num} href={`#truth-${i + 1}`} style={{
                padding: '6px 16px', borderRadius: 9999, fontSize: 12, fontWeight: 700,
                background: t.colorMuted, border: `1px solid ${t.colorBorder}`,
                color: t.color, textDecoration: 'none',
              }}>Truth {i + 1}</a>
            ))}
          </div>
        </div>
      </section>

      {/* Letter */}
      <section style={{ padding: '0 24px 80px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ padding: '40px 44px', background: S.purpleMuted, border: `1px solid ${S.purpleBorder}`, borderRadius: 20 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 20 }}>A Letter to Anyone Still Performing</div>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
            If you're reading this from your corner office, your perfect suburban home, or anywhere that looks successful but feels like prison — this is for you.
          </p>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
            I'm writing this from my home in Gilbert, Arizona. By every external measure, I've "made it." But here's what the highlight reel doesn't show: I'm 45 years old, and I only started truly living 4 years ago.
          </p>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 20 }}>
            Before that? I was the most successful fraud you'd ever meet. I had a loving wife, beautiful kids, a growing career — and I was lying to all of them. Not because I was a bad person. Because I never learned how to be a real one.
          </p>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#fff', lineHeight: 1.6, fontStyle: 'italic', marginBottom: 20 }}>
            These are the 5 truths that broke me open. I'm sharing them so you don't have to wait as long as I did.
          </p>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: 0 }}>
            Each truth comes with an exercise. Don't skip them. The exercises are the point. Reading without doing is just more performance.
          </p>
          <div style={{ marginTop: 24, fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>— Martin Court Thomas Jr., Gilbert, Arizona</div>
        </div>
      </section>

      {/* The 5 Truths */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          {TRUTHS.map((truth, i) => (
            <div key={truth.num} id={`truth-${i + 1}`} style={{ marginBottom: 48 }}>
              <div style={{ padding: '44px 44px', background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 24, borderTop: `4px solid ${truth.color}` }}>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: truth.color, letterSpacing: '0.08em', opacity: 0.6 }}>{truth.num}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: truth.color }}>{truth.label}</div>
                </div>
                <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: '#fff', margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  "{truth.title}"
                </h2>

                {/* Why this matters */}
                <div style={{ background: truth.colorMuted, border: `1px solid ${truth.colorBorder}`, borderRadius: 10, padding: '14px 18px', marginBottom: 24 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: truth.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Why this matters: </span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{truth.why}</span>
                </div>

                {/* Body */}
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: truth.symptoms ? 28 : 32 }}>
                  {truth.body}
                </p>

                {/* Symptoms list for truth 1 */}
                {truth.symptoms && (
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: S.lavender, marginBottom: 16, letterSpacing: '0.03em' }}>The Five Core Symptoms of Codependence (Pia Mellody):</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {truth.symptoms.map((s, si) => (
                        <div key={si} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                          <div style={{ width: 6, height: 6, borderRadius: '50%', background: truth.color, marginTop: 8, flexShrink: 0 }} />
                          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{s}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Exercise */}
                <div style={{ background: truth.colorMuted, border: `1px solid ${truth.colorBorder}`, borderRadius: 16, padding: '28px 32px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: truth.color, marginBottom: 6 }}>
                    Authenticity Exercise
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 12 }}>{truth.exercise.title}</div>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>
                    {truth.exercise.intro}
                  </p>
                  {truth.exercise.steps.map((step, si) => (
                    <PromptBox key={si} label={step.label} prompt={step.prompt} lines={step.lines} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resources */}
      <section style={{ padding: '0 24px 80px', maxWidth: 720, margin: '0 auto' }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 8 }}>Resources</h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 40, lineHeight: 1.6 }}>
          These are the books, tools, and organizations that helped me — or helped people I care about. Nothing here is sponsored.
        </p>

        {/* Books */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>📚 Books Worth Owning</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {RESOURCES.books.map((book, i) => (
              <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '20px' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4, lineHeight: 1.3 }}>{book.title}</p>
                <p style={{ fontSize: 12, color: S.lavender, marginBottom: 8 }}>— {book.author}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{book.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support & Hotlines */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>🌐 Support, Communities & Crisis Lines</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {RESOURCES.support.map((item, i) => (
              <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{item.name}</p>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{item.desc}</p>
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

        {/* Therapy Types */}
        <div>
          <h3 style={{ fontSize: 14, fontWeight: 800, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>🧠 Therapy Modalities That Actually Work</h3>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 16, fontStyle: 'italic' }}>Not all therapy is the same. If you've tried talk therapy and it didn't help, consider one of these.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {RESOURCES.therapyTypes.map((t, i) => (
              <div key={i} style={{ background: S.card, border: `1px solid ${S.cardBorder}`, borderRadius: 12, padding: '20px' }}>
                <p style={{ fontSize: 15, fontWeight: 700, color: S.purple, marginBottom: 8 }}>{t.name}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.55 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transform CTA */}
      <section style={{ padding: '0 24px 120px' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            padding: '60px 44px',
            background: 'linear-gradient(135deg, rgba(143,92,184,0.12) 0%, rgba(220,90,75,0.08) 100%)',
            border: '1px solid rgba(197,159,225,0.15)',
            borderRadius: 28,
          }}>
            <div style={{ fontSize: 40, marginBottom: 20 }}>💜</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.02em' }}>
              Ready to find your person?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', margin: '0 0 32px', lineHeight: 1.7 }}>
              Living authentically is the first step. LLMA connects you with people who are already there — and ready to build something real.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ padding: '13px 28px', borderRadius: 9999, background: S.purple, color: '#fff', fontSize: 15, fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(143,92,184,0.4)' }}>
                Download LLMA
              </a>
              <Link to="/what-is-a-lavender-marriage" style={{ padding: '13px 28px', borderRadius: 9999, background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                What Is a Lavender Marriage? →
              </Link>
              <Link to="/lavender-transition-guide" style={{ padding: '13px 28px', borderRadius: 9999, background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.12)', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
                Lavender Transition Guide →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px', textAlign: 'center' }}>
        <Link to="/" style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>← Back to llma.life</Link>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.15)', marginTop: 12 }}>© 2026 LLMA · martin@llma.life</div>
      </footer>
    </div>
  );
}
