#!/usr/bin/env node
// Scores the pages in evals/out/<model>/ with detect.mjs and writes
// evals/results/<model>.json and evals/results/<model>.md.
//   node evals/score.mjs [model]

import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { detect, RULE_LIST } from './detect.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const model = process.argv[2] || 'sonnet';
const dir = join(here, 'out', model);
const briefs = readFileSync(join(here, 'briefs.txt'), 'utf8').trim().split('\n').map((l) => l.split('|')[0]);
const files = new Set(readdirSync(dir));

const rows = [];
for (const id of briefs) {
  if (!files.has(`${id}.plain.html`) || !files.has(`${id}.guided.html`)) { console.error(`skipping ${id}: missing a page`); continue; }
  const plain = detect(readFileSync(join(dir, `${id}.plain.html`), 'utf8'));
  const guided = detect(readFileSync(join(dir, `${id}.guided.html`), 'utf8'));
  rows.push({ id, plain, guided });
}

const n = rows.length;
const mean = (k) => rows.reduce((a, r) => a + r[k].length, 0) / n;
const bucket = (k) => {
  const b = { clean: 0, mild: 0, heavy: 0 };
  for (const r of rows) b[r[k].length <= 1 ? 'clean' : r[k].length <= 3 ? 'mild' : 'heavy']++;
  return b;
};
const has = (k, id) => rows.filter((r) => r[k].some((m) => m.id === id)).length;
const perRule = RULE_LIST.map((r) => ({ ...r, plain: has('plain', r.id), guided: has('guided', r.id) })).filter((r) => r.plain || r.guided);

const summary = {
  model, briefs: n, rules: RULE_LIST.length,
  meanMarks: { plain: +mean('plain').toFixed(1), guided: +mean('guided').toFixed(1) },
  buckets: { plain: bucket('plain'), guided: bucket('guided') },
  fewerMarksWithGuide: rows.filter((r) => r.guided.length < r.plain.length).length,
  sameMarks: rows.filter((r) => r.guided.length === r.plain.length).length,
  moreMarksWithGuide: rows.filter((r) => r.guided.length > r.plain.length).length,
  perRule,
  pages: rows.map((r) => ({ id: r.id, plain: r.plain.map((m) => m.id), guided: r.guided.map((m) => m.id) })),
};

let md = `Model: \`${model}\`. ${n} briefs, one page each way. ${RULE_LIST.length} marks checked.\n\n`;
md += `| | Without the guide | With the guide |\n| --- | --- | --- |\n`;
md += `| Marks per page, average | ${summary.meanMarks.plain} | ${summary.meanMarks.guided} |\n`;
md += `| Pages with 4 or more marks | ${summary.buckets.plain.heavy} of ${n} | ${summary.buckets.guided.heavy} of ${n} |\n`;
md += `| Pages with 0 or 1 marks | ${summary.buckets.plain.clean} of ${n} | ${summary.buckets.guided.clean} of ${n} |\n`;
md += `| Pages with invented proof | ${has('plain', 'invented-proof')} of ${n} | ${has('guided', 'invented-proof')} of ${n} |\n`;
md += `| Pages loading from a third-party host | ${has('plain', 'third-party-host')} of ${n} | ${has('guided', 'third-party-host')} of ${n} |\n\n`;
md += `| Brief | Without | With | Marks left with the guide |\n| --- | --- | --- | --- |\n`;
for (const r of rows) md += `| ${r.id} | ${r.plain.length} | ${r.guided.length} | ${r.guided.map((m) => m.id).join(', ') || 'none'} |\n`;
md += `\n| Mark | Without | With |\n| --- | --- | --- |\n`;
for (const r of perRule.sort((a, b) => b.plain - a.plain)) md += `| ${r.label} | ${r.plain} | ${r.guided} |\n`;

mkdirSync(join(here, 'results'), { recursive: true });
writeFileSync(join(here, 'results', `${model}.json`), JSON.stringify(summary, null, 2) + '\n');
writeFileSync(join(here, 'results', `${model}.md`), md);
console.log(md);
