import { Link } from 'react-router-dom';
import { sortedPosts } from '../content/blogPosts';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';
const S = {
  bg: '#0D0A0B',
  purple: '#8F5CB8',
  lavender: '#C59FE1',
  purpleMuted: 'rgba(143,92,184,0.12)',
  purpleBorder: 'rgba(143,92,184,0.25)',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
};

function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(13,10,11,0.92)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      fontFamily: S.font,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #8F5CB8, #DC5A4B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#fff' }}>L</div>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>LLMA</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: '#fff', textDecoration: 'none', padding: '8px 14px' }}>Blog</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', borderRadius: 9999, background: S.purple, color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', fontFamily: S.font }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{ width: 28, height: 28, borderRadius: 6, background: 'linear-gradient(135deg, #8F5CB8, #DC5A4B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#fff' }}>L</div>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>LLMA</span>
        </Link>
        <div style={{ display: 'flex', gap: 24 }}>
          <Link to="/PrivacyPolicy" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Privacy</Link>
          <Link to="/TermsOfService" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>Terms</Link>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© 2026 LLMA</div>
      </div>
    </footer>
  );
}

export default function BlogIndex() {
  const featured = sortedPosts[0];
  const rest = sortedPosts.slice(1);

  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff', fontFamily: S.font }}>
      <Nav />

      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '120px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: S.lavender, marginBottom: 12 }}>
            The Lavender Logs
          </div>
          <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, color: '#fff', margin: '0 0 16px', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Stories from the community
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: 0, lineHeight: 1.6 }}>
            Real talk about lavender marriages, chosen family, and building life on your own terms.
          </p>
        </div>

        {/* Featured post */}
        <Link to={`/blog/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 40 }}>
          <article style={{
            padding: '40px 36px',
            background: '#151214',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 24,
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 24,
            alignItems: 'start',
            transition: 'border-color 200ms ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(143,92,184,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, flexWrap: 'wrap' }}>
                <span style={{
                  display: 'inline-block', padding: '3px 10px', borderRadius: 9999,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                  background: featured.tagBg, color: featured.tagColor,
                }}>
                  {featured.tag}
                </span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{featured.date}</span>
                <span style={{
                  display: 'inline-block', padding: '2px 10px', borderRadius: 9999,
                  fontSize: 11, fontWeight: 600, background: 'rgba(220,90,75,0.12)', color: '#DC5A4B',
                }}>
                  Latest
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, color: '#fff', margin: '0 0 12px', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', margin: '0 0 20px', lineHeight: 1.65 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #8F5CB8, #DC5A4B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, color: '#fff', flexShrink: 0 }}>
                  {featured.author.initial.charAt(0)}
                </div>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{featured.author.name}</span>
              </div>
            </div>
            <div style={{ color: S.lavender, fontSize: 22, marginTop: 4 }}>→</div>
          </article>
        </Link>

        {/* Rest of posts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {rest.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <article style={{
                padding: '28px 24px',
                background: '#151214',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 20,
                height: '100%',
                display: 'flex', flexDirection: 'column',
                transition: 'border-color 200ms ease, transform 200ms ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(143,92,184,0.3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                  <span style={{
                    display: 'inline-block', padding: '3px 10px', borderRadius: 9999,
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase',
                    background: post.tagBg, color: post.tagColor,
                  }}>
                    {post.tag}
                  </span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{post.date}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', margin: '0 0 10px', lineHeight: 1.3, letterSpacing: '-0.01em', flexGrow: 1 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', margin: '0 0 18px', lineHeight: 1.55 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg, #8F5CB8, #DC5A4B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 800, color: '#fff' }}>
                      {post.author.initial.charAt(0)}
                    </div>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>{post.author.name}</span>
                  </div>
                  <span style={{ fontSize: 13, color: S.lavender, fontWeight: 600 }}>Read →</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
