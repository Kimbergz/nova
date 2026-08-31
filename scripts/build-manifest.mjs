#!/usr/bin/env node
/* ============================================================
   cairn — content indexer
   Scans content/lectures and writes manifest.json (the site's
   table of contents). Exam papers are no longer scanned from
   this repo — each subject now links straight to a Google Drive
   folder configured in config.js (paperLinks).

   manifest.json is AUTO-GENERATED. Never edit it by hand.
   Run locally with:  node scripts/build-manifest.mjs
   On GitHub this runs automatically on every push (deploy.yml).

   Design rule: one broken content file must NEVER break the
   site — bad files are skipped with a warning instead.
   ============================================================ */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_FILE = join(ROOT, "manifest.json");
const LECTURES_DIR = join(ROOT, "content", "lectures");

const warn = (...args) => console.warn("[manifest] WARNING:", ...args);

async function listDirs(path) {
  try {
    const entries = await readdir(path, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory() && !e.name.startsWith("."))
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

async function listFiles(path, extension) {
  try {
    const entries = await readdir(path, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile() && !e.name.startsWith(".") && e.name.toLowerCase().endsWith(extension))
      .map((e) => e.name)
      .sort();
  } catch {
    return [];
  }
}

/* --- note info block (frontmatter) ------------------------------------- */
function parseFrontmatter(source) {
  const match = /^﻿?\s*---\s*\n([\s\S]*?)\n---/.exec(source);
  if (!match) return {};
  const fields = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim().toLowerCase();
    let value = line.slice(colon + 1).trim();
    value = value.replace(/\s+#[^#]*$/, "").trim(); // drop trailing "# comment"
    value = value.replace(/^["']|["']$/g, "");
    if (key) fields[key] = value;
  }
  return fields;
}

const DATE_RE = /^(\d{2})-(\d{2})-(\d{4})$/;
function dateFromFilename(name) {
  const m = /^(\d{2}-\d{2}-\d{4})/.exec(name);
  return m ? m[1] : "";
}
function sortKey(ddmmyyyy) {
  const m = DATE_RE.exec(ddmmyyyy || "");
  return m ? `${m[3]}-${m[2]}-${m[1]}` : "";
}
function topicFromFilename(name) {
  return name
    .replace(/\.md$/i, "")
    .replace(/^\d{2}-\d{2}-\d{4}-?/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}

/* --- scan lectures ------------------------------------------------------ */
async function scanNotes() {
  const notes = [];
  for (const subject of await listDirs(LECTURES_DIR)) {
    for (const file of await listFiles(join(LECTURES_DIR, subject), ".md")) {
      try {
        const raw = await readFile(join(LECTURES_DIR, subject, file), "utf8");
        const fm = parseFrontmatter(raw);
        if (fm.subject && fm.subject !== subject) {
          warn(`${subject}/${file}: frontmatter subject "${fm.subject}" differs from folder "${subject}" — using the folder name.`);
        }
        const date = DATE_RE.test(fm.date || "") ? fm.date : dateFromFilename(file);
        if (fm.date && !DATE_RE.test(fm.date)) {
          warn(`${subject}/${file}: date "${fm.date}" is not DD-MM-YYYY — falling back to the filename date.`);
        }
        notes.push({
          subject,
          topic: fm.topic || topicFromFilename(file) || file,
          date,
          sort: sortKey(date),
          summary: fm.summary || "",
          file,
          path: `content/lectures/${subject}/${file}`
        });
      } catch (err) {
        warn(`skipped note ${subject}/${file}: ${err.message}`);
      }
    }
  }
  // Sorted by date here (newest first) for the homepage "latest notes" list.
  // Subject pages re-sort notes by filename instead — see notesFor() in app.js.
  notes.sort((a, b) => b.sort.localeCompare(a.sort) || a.topic.localeCompare(b.topic));
  return notes;
}

/* --- write manifest -------------------------------------------------------- */
const notes = await scanNotes();
const subjectDirs = new Set(await listDirs(LECTURES_DIR));

const manifest = {
  version: 1,
  generated: new Date().toISOString(),
  subjects: [...subjectDirs].sort(),
  notes
};

await writeFile(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(`[manifest] OK — ${notes.length} notes across ${manifest.subjects.length} subject folders.`);
