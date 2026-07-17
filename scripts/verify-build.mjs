import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const failures = [];
const html = await readFile(join('dist', 'index.html'), 'utf8');
const noindex = '<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">';
const disclosure = "Unofficial website concept prepared for Midwest Pest Control";
const canonical = "https://15-midwest-pest-control.vercel.app/";

if (!html.includes(noindex)) failures.push('index: full noindex directive is missing');
if (!html.includes('Unofficial website concept prepared for') || !html.includes(disclosure.replace('Unofficial website concept prepared for ', ''))) failures.push('index: business-specific disclosure is missing');
if (!html.includes('Demo only. No information leaves this browser.')) failures.push('index: demo-only notice is missing');
if ((html.match(/class="service-card"/g) ?? []).length < 3) failures.push('index: fewer than three service cards');
if (/<form\b[^>]*\baction=/i.test(html)) failures.push('index: form action could transmit preview data');
if (/AggregateRating/i.test(html)) failures.push('index: AggregateRating must not ship');
if (!html.includes(`<link rel="canonical" href="${canonical}">`)) failures.push('index: canonical hostname mismatch');
if (!html.includes(`<meta property="og:url" content="${canonical}">`)) failures.push('index: Open Graph hostname mismatch');
if (html.includes('/previews/')) failures.push('index: combined-library route leaked into standalone output');

const robots = await readFile(join('dist', 'robots.txt'), 'utf8');
if (!/^User-agent: \*\s+Disallow: \/\s*$/m.test(robots)) failures.push('robots.txt: expected site-wide Disallow');

const clientFiles = await readdir(join('dist', '_astro'));
const clientCode = (await Promise.all(clientFiles.filter((file) => file.endsWith('.js')).map((file) => readFile(join('dist', '_astro', file), 'utf8')))).join('\n');
if (!clientCode.includes('This request was not sent.') || !clientCode.includes('Preview form — connect to email or CRM after owner approval.')) failures.push('client bundle: exact safety success copy is missing');

const vercel = JSON.parse(await readFile('vercel.json', 'utf8'));
const crawlerHeader = vercel.headers?.flatMap((rule) => rule.headers ?? []).find((header) => header.key.toLowerCase() === 'x-robots-tag');
if (crawlerHeader?.value !== 'noindex, nofollow, noarchive, nosnippet') failures.push('vercel.json: matching X-Robots-Tag is missing');

if (failures.length) {
  console.error('Standalone preview verification failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log('Verified one standalone preview at / with no combined-library routes.');
  console.log('Noindex, disclosure, form safety, canonical metadata, and crawler headers passed.');
}
