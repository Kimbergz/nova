#!/usr/bin/env node
/* ============================================================
   cairn — content indexer
   Scans content/lectures, content/quizzes and content/exam-papers
   and writes manifest.json (the site's table of contents).

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
const QUIZZES_DIR = join(ROOT, "content", "quizzes");
const PAPERS_DIR = join(ROOT, "content", "exam-papers");

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
function firstHeading(source) {
  const m = /^#\s+(.+)$/m.exec(source);
  return m ? m[1].trim() : "";
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
          quiz: fm.quiz || "",
          file,
          path: `content/lectures/${subject}/${file}`
        });
      } catch (err) {
        warn(`skipped note ${subject}/${file}: ${err.message}`);
      }
    }
  }
  notes.sort((a, b) => b.sort.localeCompare(a.sort) || a.topic.localeCompare(b.topic));
  return notes;
}

/* --- scan quizzes -------------------------------------------------------- */
function validQuestionCount(data) {
  const list = Array.isArray(data?.questions) ? data.questions : [];
  return list.filter(
    (q) =>
      q &&
      typeof q.q === "string" &&
      q.q.trim() &&
      Array.isArray(q.options) &&
      q.options.length >= 2 &&
      Number.isInteger(q.answer) &&
      q.answer >= 0 &&
      q.answer < q.options.length
  ).length;
}

async function scanQuizzes() {
  const quizzes = [];
  for (const subject of await listDirs(QUIZZES_DIR)) {
    for (const file of await listFiles(join(QUIZZES_DIR, subject), ".json")) {
      try {
        const raw = await readFile(join(QUIZZES_DIR, subject, file), "utf8");
        const data = JSON.parse(raw);
        const count = validQuestionCount(data);
        if (count === 0) {
          warn(`skipped quiz ${subject}/${file}: it has no valid questions yet (check "q", "options" and "answer").`);
          continue;
        }
        const id = file.replace(/\.json$/i, "");
        quizzes.push({
          subject,
          id,
          title: typeof data.title === "string" && data.title.trim() ? data.title.trim() : id,
          count,
          path: `content/quizzes/${subject}/${file}`
        });
      } catch (err) {
        warn(`skipped quiz ${subject}/${file}: ${err.message}`);
      }
    }
  }
  return quizzes;
}

/* --- scan exam papers ----------------------------------------------------- */
async function scanPapers() {
  const papers = [];
  for (const subject of await listDirs(PAPERS_DIR)) {
    for (const file of await listFiles(join(PAPERS_DIR, subject), ".md")) {
      try {
        const raw = await readFile(join(PAPERS_DIR, subject, file), "utf8");
        const fm = parseFrontmatter(raw);
        const title =
          fm.title ||
          firstHeading(raw) ||
          file.replace(/\.md$/i, "").replace(/[-_]+/g, " ").trim();
        papers.push({
          subject,
          file,
          title,
          path: `content/exam-papers/${subject}/${file}`
        });
      } catch (err) {
        warn(`skipped paper ${subject}/${file}: ${err.message}`);
      }
    }
  }
  return papers;
}

/* --- write manifest -------------------------------------------------------- */
const [notes, quizzes, papers] = await Promise.all([scanNotes(), scanQuizzes(), scanPapers()]);

const subjectDirs = new Set([
  ...(await listDirs(LECTURES_DIR)),
  ...(await listDirs(QUIZZES_DIR)),
  ...(await listDirs(PAPERS_DIR))
]);

const manifest = {
  version: 1,
  generated: new Date().toISOString(),
  subjects: [...subjectDirs].sort(),
  notes,
  quizzes,
  papers
};

await writeFile(OUT_FILE, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(
  `[manifest] OK — ${notes.length} notes, ${quizzes.length} quizzes, ${papers.length} papers ` +
  `across ${manifest.subjects.length} subject folders.`
);
