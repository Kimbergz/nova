# NOVA — how to publish your notes

This is your study-notes website. You never touch the website code.
You publish by **dropping one file into one folder** on GitHub.
The site rebuilds itself and goes live in about 1–2 minutes.

---

## Add a lecture note (the everyday move)

1. Copy `templates/LECTURE-TEMPLATE.md` and fill it in.
2. Name the file like this: `04-07-2026-fotosintesis.md`
   (date first: DD-MM-YYYY, then a short topic with dashes)
3. On GitHub, open the folder `content/lectures/` and click into your
   subject's folder (for example `Biologi I`).
4. Click **Add file → Upload files**, drop your file in, then click
   **Commit changes** (the green button).
5. Wait 1–2 minutes. Refresh your site. The note is live.

The info block at the top of the file must have `subject:` written EXACTLY
like the folder name (for example `subject: Biologi I`).

## Add a quiz

1. Copy `templates/QUIZ-TEMPLATE.json` and fill it in.
   - `answer` counts from 0 → `0` means the FIRST option is correct,
     `1` means the second, and so on.
2. Name it after the topic, for example `fotosintesis.json`.
3. Upload it into `content/quizzes/<your subject folder>/` the same way.
4. To link it from a note, put `quiz: fotosintesis` (no `.json`) in that
   note's info block.

## Add an exam paper

1. Copy `templates/EXAM-PAPER-TEMPLATE.md` and fill it in.
2. Put all answers at the bottom under the heading `## Answer Key`
   (or `## Skema Jawapan`). The site hides them behind a button, and
   printing puts the key on its own page.
3. Upload it into `content/exam-papers/<your subject folder>/`.

## Add a whole new subject

Just create a new folder with the subject's name inside `content/lectures/`
(and inside `content/quizzes/` and `content/exam-papers/` if needed).
To control where it appears in the list, add the same name to the
`subjects` list in `config.js`.

---

## If something looks wrong

- **The note didn't appear?** On GitHub, click the **Actions** tab. A green
  tick means published; a red X means something failed — open it and read
  the "Rebuild the content index" step: it prints a plain warning naming
  the file and problem (a bad file is skipped, it never breaks the site).
- **Check the date** in the file name and info block: `DD-MM-YYYY`.
- **Check the subject spelling** matches the folder name exactly.

## Things you may safely edit

- `config.js` — site name, subject order, homepage text, the disclaimer
  wording, and default language. Nothing else needs editing, ever.
- `manifest.json` is machine-written. Never edit it by hand.

## The disclaimer

The site always shows that this is student-made, unofficial material that
may contain mistakes. Please keep it that way — it protects you.
