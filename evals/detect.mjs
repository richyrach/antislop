#!/usr/bin/env node
// Static detector for the marks listed in GUIDE.md section 3.
// Zero dependencies. Reads HTML files, reports which marks each one shows.
// It only reads the source text. It does not render the page and it does not
// judge whether a design is good. A mark is a signal, not a verdict.
//
//   node evals/detect.mjs page.html [more.html ...] [--json]

import { readFileSync } from 'node:fs';

// ---------- colour helpers ----------
function hexToRgb(h) {
  h = h.replace('#', '');
  if (h.length === 3 || h.length === 4) h = [...h.slice(0, 3)].map((c) => c + c).join('');
  if (h.length < 6) return null;
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}
function rgbToHsl([r, g, b]) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  let h = 0, s = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h *= 60;
  }
  return [h, s * 100, l * 100];
}
function hslToRgb(h, s, l) {
  s /= 100; l /= 100;
  const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0), f(8), f(4)].map((v) => Math.round(v * 255));
}
function colours(str) {
  const out = [];
  for (const m of str.matchAll(/#([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3,4})\b/gi)) {
    const rgb = hexToRgb(m[0]);
    if (rgb) out.push({ raw: m[0], rgb, hsl: rgbToHsl(rgb), at: m.index });
  }
  for (const m of str.matchAll(/rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/gi)) {
    const rgb = [+m[1], +m[2], +m[3]];
    out.push({ raw: m[0] + ')', rgb, hsl: rgbToHsl(rgb), at: m.index });
  }
  for (const m of str.matchAll(/hsla?\(\s*([\d.]+)(?:deg)?[\s,]+([\d.]+)%[\s,]+([\d.]+)%/gi)) {
    const rgb = hslToRgb(+m[1], +m[2], +m[3]);
    out.push({ raw: m[0] + ')', rgb, hsl: [+m[1], +m[2], +m[3]], at: m.index });
  }
  return out;
}
const isPurple = ({ hsl: [h, s, l] }) => h >= 235 && h <= 295 && s >= 35 && l >= 30 && l <= 82;
const isCream = ({ rgb: [r, g, b] }) => r >= 236 && g >= 224 && b >= 190 && b <= 242 && r - b >= 6 && r - b <= 44;
const isRust = ({ hsl: [h, s, l] }) => h >= 6 && h <= 32 && s >= 42 && l >= 34 && l <= 66;
const isSage = ({ hsl: [h, s, l] }) => h >= 75 && h <= 160 && s >= 10 && s <= 42 && l >= 28 && l <= 62;
const isNearBlack = ({ hsl: [, , l] }) => l <= 8;
const isAcid = ({ hsl: [h, s, l] }) => h >= 62 && h <= 112 && s >= 72 && l >= 42 && l <= 78;

// ---------- page model ----------
function load(html) {
  const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]).join('\n')
    + '\n' + [...html.matchAll(/\sstyle\s*=\s*"([^"]*)"/gi)].map((m) => `x{${m[1]}}`).join('\n');
  const body = html.replace(/<(script|style|svg|noscript)[\s\S]*?<\/\1>/gi, ' ').replace(/<!--[\s\S]*?-->/g, ' ');
  const nodes = body.split(/<[^>]+>/).map((t) => t.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&middot;/g, '·')
    .replace(/&rarr;/g, '→').replace(/&mdash;/g, '—').replace(/\s+/g, ' ').trim()).filter(Boolean);
  const text = nodes.join('\n');
  const rules = [...css.matchAll(/\{([^{}]*)\}/g)].map((m) => m[1]);
  const classes = [...html.matchAll(/\sclass\s*=\s*"([^"]*)"/gi)].map((m) => m[1]);
  // custom properties that hold a font stack, so var(--serif) can be resolved
  const vars = Object.fromEntries([...css.matchAll(/(--[\w-]+)\s*:\s*([^;}]+)/g)].map((m) => [m[1], m[2].trim()]));
  const resolve = (v, d = 0) => d > 4 ? v : v.replace(/var\(\s*(--[\w-]+)\s*(?:,[^)]*)?\)/g, (_, n) => (vars[n] ? resolve(vars[n], d + 1) : ''));
  const families = [...css.matchAll(/(?<![\w-])font(?:-family)?\s*:\s*([^;}]+)/gi)].map((m) => resolve(m[1]).toLowerCase()).filter((f) => /[a-z]/.test(f.replace(/inherit|normal|bold|italic/g, '')));
  return { html, css, text, nodes, rules, classes, families, cols: colours(css) };
}

const DEFAULT_FONTS = ['inter', 'system-ui', '-apple-system', 'blinkmacsystemfont', 'segoe ui', 'roboto', 'helvetica neue',
  'helvetica', 'arial', 'sans-serif', 'ui-sans-serif', 'noto sans', 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol',
  'noto color emoji', 'inherit', 'ubuntu', 'cantarell', 'oxygen', 'open sans', 'liberation sans'];
const MONO = /mono|courier|consolas|menlo|sf mono|fira code|jetbrains/;
const SERIF = /georgia|times|garamond|playfair|fraunces|instrument serif|cormorant|lora|merriweather|baskerville|palatino|iowan|newsreader|dm serif|libre|crimson|charter|(^|[\s,])serif/;
const SLOP_WORDS = ['seamless', 'seamlessly', 'robust', 'elevate', 'empower', 'unlock', 'supercharge', 'streamline', 'leverage',
  'cutting-edge', 'next-generation', 'next-gen', 'revolutionary', 'revolutionize', 'effortless', 'effortlessly', 'world-class',
  'game-changing', 'holistic', 'innovative', 'best-in-class', 'transform your', 'take it to the next level', 'trusted partner'];

function familyNames(decl) {
  // split on commas that are not inside parentheses, then drop any size tokens from a font shorthand
  const parts = decl.replace(/!important/g, '').split(/,(?![^(]*\))/);
  return parts.map((f, i) => (i === 0 ? f.replace(/^.*[\d)][^\s]*\s+/, '') : f).trim().replace(/^["']|["']$/g, '').trim()).filter(Boolean);
}

// ---------- rules ----------
// Each returns a short piece of evidence, or null.
const RULES = [
  // wave 1
  ['purple-gradient', 1, 'Purple, indigo or violet gradient', (p) => {
    for (const m of p.css.matchAll(/(?:linear|radial|conic)-gradient\(((?:[^()]|\([^()]*\))*)\)/gi)) {
      const hit = colours(m[1]).find(isPurple);
      if (hit) return hit.raw;
    }
    const tw = p.classes.join(' ').match(/\b(?:from|via|to)-(?:indigo|purple|violet|fuchsia)-\d+/);
    return tw ? tw[0] : null;
  }],
  ['gradient-text', 1, 'Gradient clipped into text', (p) => /background-clip\s*:\s*text|bg-clip-text/i.test(p.css + p.classes.join(' ')) ? 'background-clip: text' : null],
  ['glass', 1, 'Blurred glass panel', (p) => /backdrop-filter\s*:\s*[^;]*blur|backdrop-blur/i.test(p.css + p.classes.join(' ')) ? 'backdrop-filter: blur' : null],
  ['glow', 1, 'Coloured glow', (p) => {
    for (const m of p.css.matchAll(/box-shadow\s*:\s*([^;}]+)/gi)) {
      for (const part of m[1].split(/,(?![^(]*\))/)) {
        if (!/(^|\s)0(px)?\s+0(px)?\s+\d/.test(part.trim())) continue;
        const c = colours(part)[0];
        if (c && c.hsl[1] >= 45 && c.hsl[2] >= 25) return part.trim().slice(0, 50);
      }
    }
    return null;
  }],
  ['emoji-icons', 1, 'Emoji used as icons', (p) => {
    const e = p.text.match(/\p{Extended_Pictographic}/gu) || [];
    const real = e.filter((c) => !/[©®™✓✔✕✗→←↑↓▲▼★☆•]/u.test(c));
    return real.length >= 3 ? real.slice(0, 6).join(' ') : null;
  }],
  ['default-sans', 1, 'Only the default sans-serif', (p) => {
    const decls = p.families.filter((f) => !MONO.test(f));
    if (!decls.length) return null;
    const names = decls.flatMap(familyNames).map((n) => n.toLowerCase());
    const custom = names.filter((n) => !DEFAULT_FONTS.includes(n) && !/^\d|^(normal|bold|italic|[1-9]00)\b/.test(n) && !MONO.test(n));
    return custom.length ? null : (names[0] || 'sans-serif');
  }],
  ['centred', 1, 'Centred text throughout', (p) => {
    const n = (p.css.match(/text-align\s*:\s*center/gi) || []).length + p.classes.filter((c) => /\btext-center\b/.test(c)).length;
    return n >= 3 ? `${n} centred blocks` : null;
  }],
  ['generic-cta', 1, '"Get started" or "Learn more"', (p) => (p.text.match(/\b(get started|learn more)\b/i) || [null])[0]],
  ['three-up', 1, 'Three equal columns of cards', (p) => (/repeat\(\s*3\s*,\s*(?:minmax\([^)]*\)|1fr)\s*\)/i.test(p.css) || p.classes.some((c) => /\b(?:md:|lg:|sm:)?grid-cols-3\b/.test(c))) ? 'repeat(3, 1fr)' : null],
  ['uniform-radius', 1, 'One large radius on everything', (p) => {
    const vals = [...p.css.matchAll(/border-radius\s*:\s*([\d.]+)(px|rem|em)\s*[;}]/gi)].map((m) => +m[1] * (m[2] === 'px' ? 1 : 16)).filter((v) => v < 100);
    if (vals.length < 6) return null;
    const count = {};
    for (const v of vals) count[v] = (count[v] || 0) + 1;
    const [top, n] = Object.entries(count).sort((a, b) => b[1] - a[1])[0];
    return +top >= 12 && n / vals.length >= 0.6 ? `${top}px on ${n} of ${vals.length}` : null;
  }],
  ['fade-in', 1, 'Fade-in on scroll', (p) => {
    if (/IntersectionObserver/.test(p.html) && /opacity\s*:\s*0\b/.test(p.css)) return 'IntersectionObserver + opacity: 0';
    const n = p.classes.filter((c) => /\b(fade-(in|up)|reveal|animate-on-scroll|scroll-animate)\b/.test(c)).length;
    return n >= 3 ? `${n} fade classes` : null;
  }],
  // wave 2
  ['cream-serif', 2, 'Cream paper, serif, rust or sage accent', (p) => {
    const cream = p.cols.find(isCream), accent = p.cols.find(isRust) || p.cols.find(isSage);
    return cream && accent && p.families.some((f) => SERIF.test(f)) ? `${cream.raw} + ${accent.raw}` : null;
  }],
  ['black-acid', 2, 'Near-black with one acid accent', (p) => {
    const black = p.cols.find(isNearBlack), acid = p.cols.find(isAcid);
    return black && acid && /background[^;}]*(#0[0-9a-f]0[0-9a-f]0[0-9a-f]|#0[0-9a-f]{2}\b|#1[0-4]1[0-4]1[0-4]|#000)/i.test(p.css) ? `${black.raw} + ${acid.raw}` : null;
  }],
  ['tracked-caps', 2, 'Small labels in spaced capitals', (p) => {
    const n = p.rules.filter((r) => /text-transform\s*:\s*uppercase/i.test(r) && /letter-spacing\s*:\s*(0?\.(0[5-9]|[1-9])\d*(em|rem)|[1-9][\d.]*px)/i.test(r)).length
      + p.classes.filter((c) => /\buppercase\b/.test(c) && /\btracking-(wide|wider|widest)\b/.test(c)).length;
    return n ? `${n} rule${n > 1 ? 's' : ''}` : null;
  }],
  ['dot-meta', 2, 'Facts strung together with dots', (p) => (p.nodes.find((t) => /\S\s[·•]\s\S.{0,60}\s[·•]\s\S/.test(t)) || '').slice(0, 60) || null],
  ['accent-word', 2, 'One italic or coloured word in a heading', (p) => {
    const m = p.html.match(/<h[12]\b[^>]*>(?:(?!<\/h[12]>)[\s\S])*?<(em|i|span[^>]*class="[^"]*(?:accent|highlight|gradient|italic|serif)[^"]*")[\s>]/i);
    return m ? `<${m[1].split(' ')[0]}> inside a heading` : null;
  }],
  ['numbered', 2, '01 / 02 / 03 markers', (p) => {
    const n = p.nodes.filter((t) => /^[[(]?0[1-9][\])]?[.:]?$/.test(t) || /^[[(]?0[1-9][\])]?\s*[/—-]/.test(t)).length;
    return n >= 3 ? `${n} markers` : null;
  }],
  ['arrow-links', 2, 'Arrows glued to links', (p) => {
    const n = p.nodes.filter((t) => t.length < 60 && /(→|↗|->|›|»)\s*$/.test(t)).length;
    return n >= 2 ? `${n} links` : null;
  }],
  ['mono-labels', 2, 'Typewriter face on a page with no code', (p) => p.families.some((f) => MONO.test(f)) && !/<pre\b/i.test(p.html) && (p.html.match(/<code\b/gi) || []).length <= 1 ? 'monospace font, no code blocks' : null],
  ['grain', 2, 'Grain or noise overlay', (p) => /feTurbulence|noise\.(png|svg|webp)|grain/i.test(p.html) ? 'grain texture' : null],
  ['status-dot', 2, 'Status badge', (p) => (p.text.match(/all systems (operational|normal|go)|\bnow (live|available)\b|v?\d+\.\d+ is (live|here|out)|now in (beta|public beta)/i) || [null])[0]],
  ['em-dashes', 2, 'Dashes for asides', (p) => { const n = (p.text.match(/—/g) || []).length; return n >= 3 ? `${n} em dashes` : null; }],
  // honesty and craft
  ['invented-proof', 0, 'Proof nobody supplied', (p) => (p.text.match(/trusted by|loved by|join (over )?[\d,.]+[km]?\+?|[\d,.]+[km]?\+ (happy |active |satisfied )?(users|customers|teams|developers|companies|businesses|clients|students|learners|downloads|couples|families|riders)|[★⭐]{4,}|\b[45]\.\d\s?\/\s?5\b|rated [45]\.\d|\b\d{2,3}% (customer )?satisfaction|\b(since|est\.?|established|founded)( in)? (19|20)\d\d\b|\b\d+\+? years (of experience|in business|of service|serving)|\b\d{2,}\+ (weddings|projects|images|photos|reviews|repairs|bikes|stars|contributors)/i) || [null])[0]
    || ((p.html.match(/<blockquote[\s\S]{0,600}?<\/blockquote>\s*(?:<[^>]+>\s*)*[—–-]?\s*[A-Z][a-z]+/) || /<blockquote[\s\S]{0,600}?<(cite|figcaption|footer)\b/i.test(p.html)) ? 'quote attributed to a person' : null)
    || (p.classes.some((c) => /testimonial|review-card|social-proof/i.test(c)) ? 'testimonial block' : null)],
  ['placeholder', 0, 'Placeholder content', (p) => (p.text.match(/lorem ipsum|john doe|jane doe|\bacme\b|your (company|name|logo) here/i) || [null])[0]],
  ['stat-cards', 0, 'Stat cards with percentage change', (p) => { const n = (p.text.match(/[▲▼↑↓+]\s?\d+(\.\d+)?%/g) || []).length; return n >= 2 ? `${n} percentage changes` : null; }],
  ['slop-words', 0, 'Filler marketing words', (p) => {
    const t = p.text.toLowerCase(), hits = SLOP_WORDS.filter((w) => new RegExp(`\\b${w}\\b`).test(t));
    return hits.length >= 2 ? hits.slice(0, 5).join(', ') : null;
  }],
  ['third-party-host', 0, 'Loads from a third-party host', (p) => (p.html.match(/(?:https?:)?\/\/((?:fonts\.googleapis|fonts\.gstatic|cdn\.tailwindcss|cdn\.jsdelivr|unpkg|cdnjs\.cloudflare|use\.typekit|kit\.fontawesome|fonts\.bunny|rsms|images\.unsplash|source\.unsplash|picsum|via\.placeholder|placehold|i\.pravatar)\.[a-z.]+)/i) || [null, null])[1]],
];

export function detect(html) {
  const p = load(html);
  const found = [];
  for (const [id, wave, label, fn] of RULES) {
    let ev = null;
    try { ev = fn(p); } catch { ev = null; }
    if (ev) found.push({ id, wave, label, evidence: String(ev) });
  }
  return found;
}
export const RULE_LIST = RULES.map(([id, wave, label]) => ({ id, wave, label }));

if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2), json = args.includes('--json'), files = args.filter((a) => !a.startsWith('--'));
  if (!files.length) { console.error('usage: node evals/detect.mjs page.html [...] [--json]'); process.exit(2); }
  const out = files.map((f) => ({ file: f, marks: detect(readFileSync(f, 'utf8')) }));
  if (json) console.log(JSON.stringify(out, null, 2));
  else for (const { file, marks } of out) {
    console.log(`\n${file}: ${marks.length} mark${marks.length === 1 ? '' : 's'}`);
    for (const m of marks) console.log(`  ${m.id.padEnd(17)} ${m.label}  (${m.evidence})`);
  }
}
