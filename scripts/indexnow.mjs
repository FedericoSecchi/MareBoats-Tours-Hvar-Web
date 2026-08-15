#!/usr/bin/env node
// IndexNow submission — run after every deploy with content changes.
// Requires: npm run build already done (reads out/sitemap.xml).
// Usage: node scripts/indexnow.mjs

import { readFileSync } from 'fs';
import { resolve } from 'path';

const KEY = '46eb323b675072007d355ac6f582c8e3';
const HOST = 'mareboatshvar.com';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemapPath = resolve(process.cwd(), 'out/sitemap.xml');
const xml = readFileSync(sitemapPath, 'utf8');
const urlList = [...xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)].map((m) => m[1]);

console.log(`Submitting ${urlList.length} URLs to IndexNow...`);
urlList.forEach((u) => console.log(' ', u));

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log(`\nResponse: ${res.status} ${res.statusText}`);

if (res.status !== 200 && res.status !== 202) {
  const body = await res.text();
  console.error('Error body:', body);
  process.exit(1);
}
