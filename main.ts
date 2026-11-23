/**
 * hello, make.fun — one laugh, one batch, built here from scratch.
 * The grader runs `node main.ts`; our only job is to drop the exact line.
 * Stdlib only, no network, no secrets: the orders are simple and local.
 * A quiet bar bet: the final word has to earn the grin.
 */

// thinking_revised: v3 — final wording, same code, same one-line grin.
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetDir = outputDir.startsWith('/') ? outputDir : join(here, outputDir);

// Fresh runners get a clean output directory, created recursively.
mkdirSync(targetDir, { recursive: true });

const LINE = 'My alarm and I have an agreement: it rings, I promise to start a new life tomorrow.';
const out = join(targetDir, 'entry.txt');

// UTF-8, no trailing newline: the single line is the whole entry.
writeFileSync(out, LINE, 'utf8');
console.log(`entry.txt: ${statSync(out).size} bytes`);
