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
// in the component tree to the front of the renderToString output. We pull
// those hoisted tags off and inject them into <head> via the template.
//
// JSON-LD <script> tags are intentionally LEFT in the body. Previously this
// script extracted them and hoisted them to <head>, but on client hydration
// React re-rendered the same scripts in the body, producing two copies in the
// post-hydration DOM. Googlebot executes JS, so it saw duplicate FAQPage /
// Article schemas and surfaced "Duplicate field 'FAQPage'" errors in Search
// Console. Google reads JSON-LD from anywhere on the page, so leaving the
// scripts in the body is correct and avoids the duplication.
function extractHeadTags(html) {
  const hoistedPattern =
    /^((?:\s*(?:<title[^>]*>[\s\S]*?<\/title>|<meta[^>]*\/?>|<link[^>]*\/?>))*)/
  const hoistedMatch = html.match(hoistedPattern)
  const hoisted = hoistedMatch ? hoistedMatch[0].trim() : ''
  const remaining = html.slice(hoisted.length)

  return { headTags: hoisted, bodyHtml: remaining }
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
