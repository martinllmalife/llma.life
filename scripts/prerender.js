import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbs = (p) => path.resolve(__dirname, '..', p)

const routes = [
  '/',
  '/blog',
  '/community',
  '/press',
  '/5-truths-that-saved-me',
  '/lavender-transition-guide',
  '/the-six-pillars',
  '/what-is-a-lavender-marriage',
  '/blog/gen-z-doesnt-want-romance-they-want-a-real-partner',
  '/blog/tax-benefits-are-not-a-reward-for-fucking',
  '/blog/you-can-fck-a-stranger-but-i-cant-love-my-best-friend',
  '/blog/when-motherly-love-showed-up-differently',
  '/blog/barry-diller-came-out-at-82',
  '/blog/when-you-dont-see-the-path-you-become-it',
  '/blog/welcome-to-the-lavender-logs',
]

// React 19 automatically hoists <title>, <meta>, and <link> tags from anywhere
// in the component tree to the front of the renderToString output. <script> tags
// are NOT hoisted — extract JSON-LD scripts separately from the body HTML.
function extractHeadTags(html) {
  // Step 1: pull hoisted tags from the start of the HTML (before any div/nav/etc.)
  const hoistedPattern =
    /^((?:\s*(?:<title[^>]*>[\s\S]*?<\/title>|<meta[^>]*\/?>|<link[^>]*\/?>))*)/
  const hoistedMatch = html.match(hoistedPattern)
  const hoisted = hoistedMatch ? hoistedMatch[0].trim() : ''
  let remaining = html.slice(hoisted.length)

  // Step 2: extract <script type="application/ld+json"> from anywhere in the body
  const jsonLdTags = []
  remaining = remaining.replace(
    /<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/g,
    (match) => { jsonLdTags.push(match); return '' }
  )

  const headTags = [hoisted, ...jsonLdTags].filter(Boolean).join('\n    ')
  return { headTags, bodyHtml: remaining }
}

const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8')
const serverEntry = pathToFileURL(toAbs('dist/server/entry-server.js')).href
const { render } = await import(serverEntry)

for (const url of routes) {
  const { html: rawHtml } = render(url)
  const { headTags, bodyHtml } = extractHeadTags(rawHtml)

  const pageHtml = template
    .replace('<!--app-head-->', headTags)
    .replace('<!--app-html-->', bodyHtml)

  const outPath =
    url === '/'
      ? toAbs('dist/index.html')
      : toAbs(`dist${url}/index.html`)

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, pageHtml)
  console.log('pre-rendered:', url, headTags ? `(${headTags.match(/<title/g)?.length ? '✓ title' : '– no title'})` : '(no head tags)')
}

console.log('\n✓ Pre-rendering complete —', routes.length, 'pages')
