import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug, sortedPosts } from '../content/blogPosts';

const APP_STORE_URL = 'https://apps.apple.com/us/app/llma-intentional-partnerships/id6760886909';

const S = {
  bg: '#0D0A0B',
  purple: '#8F5CB8',
  lavender: '#C59FE1',
  font: "'Plus Jakarta Sans', system-ui, sans-serif",
};

// ── Shared blog post CSS injected once ───────────────────────────────────────
const BLOG_CSS = `
  .llma-post-body {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  }
  .llma-post-body p {
    font-size: 18px; line-height: 1.85; margin: 0 0 26px; color: rgba(255,255,255,0.75);
  }
  .llma-post-body p.llma-lead {
    font-size: 22px; color: rgba(255,255,255,0.9); line-height: 1.65; font-weight: 500; margin-bottom: 28px;
  }
  .llma-post-body h2 {
    font-size: 26px; font-weight: 800; color: #FFFFFF;
    letter-spacing: -0.02em; margin: 52px 0 16px;
  }
  .llma-post-body strong { color: rgba(255,255,255,0.95); }
  .llma-post-body em { color: rgba(255,255,255,0.88); }
  .llma-divider {
    border: none; border-top: 1px solid rgba(255,255,255,0.07); margin: 52px 0;
  }
  .llma-quote {
    border-left: 3px solid #8F5CB8; margin: 44px 0; padding: 20px 28px;
    background: rgba(143,92,184,0.07); border-radius: 0 16px 16px 0;
  }
  .llma-quote p {
    font-size: 23px !important; font-style: italic; color: #C59FE1 !important;
    margin: 0 !important; line-height: 1.45; font-weight: 600;
  }
  .llma-quote--teal {
    border-left-color: #2DD4BF;
    background: rgba(13,148,136,0.07);
  }
  .llma-quote--teal p { color: #2DD4BF !important; }
  .llma-list {
    list-style: none; padding: 0; margin: 8px 0 28px;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px; padding: 20px 24px;
  }
  .llma-list li {
    font-size: 17px; color: rgba(255,255,255,0.68);
    padding: 7px 0 7px 20px; position: relative; line-height: 1.6;
  }
  .llma-list li::before { content: '·'; position: absolute; left: 0; color: #C59FE1; font-size: 22px; line-height: 1.3; font-weight: 900; }
  .llma-list li strong { color: rgba(255,255,255,0.9); }
  .llma-permissions {
    list-style: none; padding: 32px 36px; margin: 16px 0 36px;
    background: rgba(143,92,184,0.07); border: 1px solid rgba(143,92,184,0.18);
    border-radius: 20px;
  }
  .llma-permissions li {
    font-size: 19px; font-weight: 600; color: rgba(255,255,255,0.85);
    padding: 10px 0 10px 28px; position: relative; line-height: 1.5;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .llma-permissions li:last-child { border-bottom: none; }
  .llma-permissions li::before { content: '✦'; position: absolute; left: 0; color: #C59FE1; font-size: 12px; top: 14px; }
  .llma-arrow-list {
    list-style: none; padding: 0; margin: 24px 0;
  }
  .llma-arrow-list li {
    font-size: 18px; color: rgba(255,255,255,0.65);
    padding: 6px 0 6px 26px; position: relative; line-height: 1.65;
  }
  .llma-arrow-list li::before { content: '→'; position: absolute; left: 0; color: #C59FE1; font-weight: 700; }
  .llma-stat-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 28px 0;
  }
  .llma-stat-item {
    background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 16px; padding: 22px 24px;
  }
  .llma-stat-item strong {
    display: block; font-size: 22px; font-weight: 800;
    color: #FFFFFF; letter-spacing: -0.02em; margin-bottom: 4px;
  }
  .llma-stat-item span { font-size: 13px; color: rgba(255,255,255,0.38); font-weight: 500; }
  .llma-callout-red {
    margin: 36px 0; padding: 24px 28px;
    background: rgba(220,90,75,0.07); border: 1px solid rgba(220,90,75,0.18);
    border-radius: 16px;
  }
  .llma-callout-red p { margin: 0 !important; font-size: 18px !important; color: rgba(255,255,255,0.75) !important; }
  .llma-callout-red strong { color: #DC5A4B !important; }
  .llma-chaos-tags {
    display: flex; flex-wrap: wrap; gap: 10px; margin: 28px 0 36px;
  }
  .llma-chaos-tag {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 14px; background: rgba(220,90,75,0.08);
    border: 1px solid rgba(220,90,75,0.18); border-radius: 9999px;
    font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.6);
  }
  .llma-chaos-tag::before { content: '·'; color: #DC5A4B; font-size: 18px; line-height: 1; }
  .llma-mission-box {
    margin: 44px 0; padding: 36px;
    background: rgba(143,92,184,0.07); border: 1px solid rgba(143,92,184,0.2);
    border-radius: 20px;
  }
  .llma-mission-eyebrow {
    font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
    color: #C59FE1; margin-bottom: 14px; display: block;
  }
  .llma-mission-box p {
    font-size: 17px !important; color: rgba(255,255,255,0.72) !important;
    margin: 0 0 14px !important; line-height: 1.75 !important;
  }
  .llma-mission-box p:last-child { margin: 0 !important; }
  .llma-dedication {
    margin: 48px 0; padding: 36px;
    background: rgba(143,92,184,0.07); border: 1px solid rgba(143,92,184,0.18);
    border-radius: 20px; text-align: center;
  }
  .llma-dedication-emoji { font-size: 32px; display: block; margin-bottom: 20px; }
  .llma-dedication p {
    font-size: 18px !important; color: rgba(255,255,255,0.7) !important;
    margin: 0 0 10px !important; font-style: italic; line-height: 1.7 !important;
  }
  .llma-dedication strong { color: #C59FE1; font-style: normal; }
  .llma-dedication-sign {
    margin-top: 20px !important; font-style: normal !important;
    font-weight: 700 !important; font-size: 16px !important;
    color: rgba(255,255,255,0.55) !important;
  }
  @media (max-width: 600px) {
    .llma-post-body p { font-size: 17px; }
    .llma-post-body p.llma-lead { font-size: 19px; }
    .llma-permissions { padding: 24px 20px; }
    .llma-permissions li { font-size: 17px; }
    .llma-stat-grid { grid-template-columns: 1fr; }
    .llma-mission-box, .llma-dedication { padding: 24px 20px; }
  }
`;

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
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/llma-logo.png" alt="LLMA" style={{ width: 36, height: 36, objectFit: 'contain' }} />
          <span style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>llma.life</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,0.6)', textDecoration: 'none', padding: '8px 14px' }}>← Blog</Link>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 18px', borderRadius: 9999, background: S.purple, color: '#fff', fontSize: 13, fontWeight: 700, textDecoration: 'none' }}>
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const pageUrl = `https://www.llma.life/blog/${post.slug}`;
  const ogImage = post.heroImage || 'https://www.llma.life/og-image.png';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: pageUrl,
    datePublished: post.sortDate.toISOString(),
    dateModified: post.sortDate.toISOString(),
    image: ogImage,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.href.startsWith('http') ? post.author.href : `https://www.llma.life${post.author.href}`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'LLMA',
      url: 'https://www.llma.life',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.llma.life/llma-logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  };

  // Adjacent posts for navigation
  const idx = sortedPosts.findIndex(p => p.slug === slug);
  const prev = idx < sortedPosts.length - 1 ? sortedPosts[idx + 1] : null;
  const next = idx > 0 ? sortedPosts[idx - 1] : null;

  return (
    <div style={{ background: S.bg, minHeight: '100vh', color: '#fff' }}>
      <Helmet>
        <title>{`${post.title} | LLMA`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={`${post.title} | LLMA`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | LLMA`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Inject blog CSS once */}
      <style>{BLOG_CSS}</style>

      <Nav />

      {/* Hero */}
      <div style={{
        width: '100%',
        aspectRatio: '21/9',
        maxHeight: 480,
        overflow: 'hidden',
        position: 'relative',
        background: '#151214',
        marginTop: 64,
      }}>
        {post.heroImage && (
          <img
            src={post.heroImage}
            alt={post.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
          />
        )}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,10,11,0.05) 0%, rgba(13,10,11,0.8) 100%)',
        }} />
      </div>

      {/* Article */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px 0', fontFamily: S.font }}>

        {/* Meta */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, flexWrap: 'wrap' }}>
          <span style={{
            display: 'inline-block', padding: '5px 14px', borderRadius: 9999,
            fontSize: 11, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
            background: post.tagBg, color: post.tagColor,
            border: `1px solid ${post.tagBorder || 'transparent'}`,
          }}>
            {post.tag === 'Founding Post' ? '✦ Founding Post' : post.tag}
          </span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 500 }}>{post.date}</span>
          <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            By{' '}
            <a href={post.author.href} target="_blank" rel="noopener noreferrer" style={{ color: S.lavender, textDecoration: 'none', fontWeight: 600 }}>
              {post.author.name}
            </a>
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(30px, 5vw, 54px)', fontWeight: 800, color: '#fff',
          letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 12px',
        }}>
          {post.title}
        </h1>

        {post.subtitle && (
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.45)', fontWeight: 500, margin: '0 0 44px', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
            {post.subtitle}
          </p>
        )}

        {/* Body */}
        <div
          className="llma-post-body"
          style={{ marginTop: post.subtitle ? 0 : 44 }}
          dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
        />

        {/* App CTA */}
        <div style={{
          margin: '48px 0 0', padding: '36px',
          background: 'linear-gradient(135deg, rgba(143,92,184,0.12) 0%, rgba(220,90,75,0.08) 100%)',
          border: '1px solid rgba(197,159,225,0.2)', borderRadius: 20, textAlign: 'center',
        }}>
          <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.85)', fontWeight: 600, margin: '0 0 24px', lineHeight: 1.5 }}>
            Ready to find your people?
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px', borderRadius: 9999,
              background: S.purple, color: '#fff',
              fontSize: 15, fontWeight: 700, textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(143,92,184,0.35)',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download the App
            </a>
            <Link to="/blog" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '13px 26px', borderRadius: 9999,
              background: 'transparent', color: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(255,255,255,0.15)',
              fontSize: 15, fontWeight: 600, textDecoration: 'none',
            }}>
              More Stories →
            </Link>
          </div>
        </div>

        {/* Author sign-off */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg, #8F5CB8, #DC5A4B)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, fontWeight: 800, color: '#fff', flexShrink: 0 }}>
            {post.author.initial.charAt(0)}
          </div>
          <div>
            <strong style={{ display: 'block', fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 2 }}>{post.author.name}</strong>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)' }}>
              Life &amp; Love Made Authentic &nbsp;·&nbsp;{' '}
              <a href={post.author.href} target="_blank" rel="noopener noreferrer" style={{ color: S.lavender, textDecoration: 'none', fontWeight: 600 }}>@itsmcmartyfly</a>
            </span>
          </div>
        </div>

        {/* Tags */}
        <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {post.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,0.32)',
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)',
              padding: '5px 14px', borderRadius: 9999,
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div style={{ marginTop: 56, paddingTop: 40, borderTop: '1px solid rgba(255,255,255,0.07)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {prev ? (
              <Link to={`/blog/${prev.slug}`} style={{ textDecoration: 'none', padding: '20px', background: '#151214', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 8 }}>← Previous</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{prev.title}</div>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/blog/${next.slug}`} style={{ textDecoration: 'none', padding: '20px', background: '#151214', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)', textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 8 }}>Next →</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{next.title}</div>
              </Link>
            ) : <div />}
          </div>
        )}

      </article>

      {/* Footer */}
      <footer style={{ marginTop: 80, borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', fontFamily: S.font }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <img src="/llma-logo.png" alt="LLMA" style={{ width: 30, height: 30, objectFit: 'contain' }} />
            <span style={{ fontSize: 15, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>llma.life</span>
          </Link>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>© 2026 LLMA</div>
        </div>
      </footer>
    </div>
  );
}
