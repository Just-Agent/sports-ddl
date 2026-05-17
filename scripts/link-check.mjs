import fs from 'node:fs';
const items = JSON.parse(fs.readFileSync(new URL('../data/items.json', import.meta.url), 'utf8'));
const strict = process.env.STRICT_LINK_CHECK === '1'; const timeoutMs = Number(process.env.LINK_CHECK_TIMEOUT_MS || 3500);
const urls = [...new Set(items.map(item => item.url).filter(Boolean))]; const failures = [];
async function check(url) { const controller = new AbortController(); const timer = setTimeout(() => controller.abort(), timeoutMs); try { let response = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: controller.signal }); if (response.status >= 400) { response = await fetch(url, { method: 'GET', redirect: 'follow', signal: controller.signal }); if (response.status >= 400) failures.push(`${url} -> HTTP ${response.status}`); } } catch (error) { failures.push(`${url} -> ${error.name || error.message}`); } finally { clearTimeout(timer); } }
for (const url of urls) await check(url);
if (failures.length) { const message = failures.join('\n'); if (strict) { console.error(message); process.exit(1); } console.warn(message); }
console.log(`checked ${urls.length} unique links (${strict ? 'strict' : 'warning-only'})`);
