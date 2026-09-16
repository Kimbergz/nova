/* ============================================================
   NOVA — site settings  (THIS FILE IS SAFE FOR YOU TO EDIT)

   Plain-English guide:
   - siteName ......... the name shown in the header and footer.
   - subjects ......... the order subjects appear in on the site.
                        A subject shows its notes once a folder with the
                        SAME name exists under content/lectures/, and shows
                        an exam-papers button once it has a link in
                        paperLinks below. Add or reorder lines freely.
   - defaultLang ...... "en" (English) or "ms" (Bahasa Melayu).
                        Visitors can switch anytime in Settings.
   - heroKicker ....... the tiny label at the very top of the homepage.
   - heroLines ........ the big statement lines on the homepage.
   - disclaimer ....... the unofficial-material notice. It appears as
                        a banner on the homepage AND in the footer of
                        every page. NEVER remove it — you may reword it.

   After editing this file, also bump the number in version.js
   (see the note inside that file).
   ============================================================ */
window.SITE_CONFIG = {
  siteName: "NOVA",

  subjects: [
    "Industri Pertanian dan Makanan",
    "Keusahawanan dan Pemasaran Produk Pertanian",
    "Biologi I",
    "Biologi II",
    "Kimia I",
    "Kimia II",
    "Matematik I",
    "Matematik II",
    "Fizik I",
    "Fizik II",
    "Foundation English",
    "Academic English Skills"
  ],

  // When the site language is ENGLISH, these Malay words inside subject
  // names are swapped for display only. Folder names on GitHub never change.
  // Add more lines freely, e.g. "Sejarah": "History",
  subjectTranslations: {
    "Biologi": "Biology",
    "Kimia": "Chemistry",
    "Matematik": "Mathematics",
    "Fizik": "Physics"
  },

  defaultLang: "en",

  heroKicker: {
    en: "STUDY ARCHIVE — UNOFFICIAL",
    ms: "ARKIB NOTA — TIDAK RASMI"
  },

  heroLines: {
    en: ["Student written notes.", "Transcribed for clarity.", "Published for everyone."],
    ms: ["Nota tulisan pelajar.", "Ditranskrip untuk kejelasan.", "Diterbit untuk semua."]
  },

  disclaimer: {
    en: "This is student-made, unofficial study material. It is not produced or endorsed by the college or its lecturers, and it may contain mistakes. Always verify against official materials.",
    ms: "Ini bahan belajar tidak rasmi yang dibuat oleh pelajar. Ia bukan keluaran pihak kolej atau pensyarah dan tidak disahkan oleh mereka, dan mungkin mengandungi kesilapan. Sila sahkan dengan bahan rasmi."
  },

  /* ==========================================================
     Exam papers — one Google Drive link per subject

     Papers are no longer hosted on this site. Each subject gets
     ONE button that opens that subject's Google Drive folder in
     a new tab. To turn a subject's button on, paste the folder's
     "Anyone with the link can view" share URL as the value below
     (right-click the folder in Drive -> Share -> copy link).

     Leave a subject as "" (empty quotes) to keep showing the
     normal "no papers yet" message for it.
     ========================================================== */
  paperLinks: {
    "Industri Pertanian dan Makanan": "https://drive.google.com/drive/folders/1lnFKGpiDTxlNaUvBaC4lOexJvVnGKxMa?usp=sharing",
    "Keusahawanan dan Pemasaran Produk Pertanian": "",
    "Biologi I": "https://drive.google.com/drive/folders/155oI05C5y_dy6jFHi_BSoimzjsYDlyXr?usp=sharing",
    "Biologi II": "",
    "Kimia I": "https://drive.google.com/drive/folders/12SgQ87PiHJTtFgM5aw7_8stuQ8BGjUQh?usp=drive_link",
    "Kimia II": "",
    "Matematik I": "",
    "Matematik II": "",
    "Fizik I": "https://drive.google.com/drive/folders/1c-nPkZefbqzRqV8oml3ozhkeeJX8VpCm?usp=drive_link",
    "Fizik II": "",
    "Foundation English": "",
    "Academic English Skills": ""
  },

  /* ==========================================================
     Google Analytics (optional)

     1. Go to analytics.google.com and create a GA4 property for
        this site (free). It will give you a "Measurement ID"
        that looks like G-XXXXXXXXXX.
     2. Paste that ID below between the quotes.
     3. Bump the number in version.js (same as any other engine
        change) and publish.
     Leave it as "" to keep analytics off completely — nothing
     extra loads and no visitor data is collected.
     ========================================================== */
  analyticsId: "G-XEWBC8WBFT",

  // Shown as a small line in the footer, but ONLY once analyticsId
  // above is filled in. Keep it honest about what's actually running.
  analyticsNote: {
    en: "This site uses Google Analytics to see which pages get visited. No personal data is sold or shared.",
    ms: "Laman ini menggunakan Google Analytics untuk melihat halaman yang dilawati. Tiada data peribadi dijual atau dikongsi."
  },

  /* ==========================================================
     "Talk to us" — private message box (academic help / idea box)

     THIS WHOLE SECTION IS YOURS. Every line of text below is a
     first-draft placeholder — rewrite it in your own words before
     (or after) you launch it. Nothing here is code; it's just text
     inside quotes, same as heroLines/disclaimer above.

     - enabled ......... set to false to hide the feature completely
                          (nav link + homepage banner both disappear)
                          without deleting any of this.
     - formEndpoints ... where submissions actually go. These come
                          from your Formspree account (formspree.io) —
                          one form per lane. Do not share these
                          URLs publicly beyond what's already on this
                          public site; they only accept submissions,
                          they don't expose what's been sent.
     - confidentialNote  the promise shown right before someone
                          writes anything. Keep this true to what
                          Formspree actually does: only people with
                          your Formspree login can read submissions.
     ========================================================== */
  voice: {
    enabled: true,

    formEndpoints: {
      academic: "https://formspree.io/f/xnparozk",
      // Reusing the old "vent" Formspree form for the idea box for now —
      // same inbox, just relabelled below. Create a separate form at
      // formspree.io and swap the URL here if you'd rather keep them apart.
      idea: "https://formspree.io/f/xdenjpln"
    },

    navLabel: { en: "Talk", ms: "Bicara" },

    bannerKicker: { en: "AN OPEN DOOR", ms: "PINTU TERBUKA" },
    bannerHeading: { en: "Got something on your mind?", ms: "Ada sesuatu di fikiran anda?" },
    bannerText: {
      en: "A topic you're stuck on, or just a rough week — this is a direct, private line to tell me. Anonymous if you want.",
      ms: "Topik yang anda tak faham, atau minggu yang sukar — ini talian terus dan peribadi untuk beritahu saya. Tanpa nama jika anda mahu."
    },
    bannerCta: { en: "Tell me", ms: "Beritahu saya" },

    introHeading: { en: "What's going on?", ms: "Apa yang berlaku?" },
    introText: { en: "Pick whichever fits — there's no wrong door.", ms: "Pilih mana-mana yang sesuai — tiada pintu yang salah." },
    confidentialNote: {
      en: "This goes straight to me. No one else — not other students, not the college — sees what you write here, and it's never posted anywhere on the site. Leaving your name is entirely optional.",
      ms: "Ini terus sampai kepada saya sahaja. Tiada orang lain — bukan pelajar lain, bukan pihak kolej — akan melihat apa yang anda tulis di sini, dan ia tidak akan disiarkan di mana-mana di laman ini. Memberikan nama anda adalah pilihan sepenuhnya."
    },

    academic: {
      cardTitle: { en: "Academic help", ms: "Bantuan akademik" },
      cardDesc: {
        en: "Stuck on a topic, too shy to ask in class, missing notes — anything study-related.",
        ms: "Tak faham sesuatu topik, malu nak tanya dalam kelas, nota tak lengkap — apa-apa berkaitan pelajaran."
      },
      cardCta: { en: "Tell me", ms: "Beritahu saya" },
      formHeading: { en: "Academic help", ms: "Bantuan akademik" },
      formIntro: {
        en: "Tell me what's tripping you up. Too shy to ask in class, or can't catch a lecturer during their hours? Drop it here and I'll get the explanation and ask on your behalf. If it's about one subject, pick it below — otherwise leave it general.",
        ms: "Beritahu saya apa yang menyusahkan anda. Malu nak tanya dalam kelas, atau tak sempat jumpa pensyarah? Letakkan di sini dan saya akan dapatkan penjelasan serta tanya bagi pihak anda. Jika ia berkaitan satu subjek, pilih di bawah — jika tidak, biarkan sebagai umum."
      },
      subjectLabel: { en: "Subject (optional)", ms: "Subjek (pilihan)" },
      subjectNoneOption: { en: "General / not sure", ms: "Umum / tidak pasti" },
      promptLabel: { en: "What's the problem?", ms: "Apa masalahnya?" },
      promptPlaceholder: {
        en: "e.g. I don't understand how stoichiometry works, or there's no note yet for Chapter 6…",
        ms: "cth: Saya tak faham cara stoikiometri berfungsi, atau belum ada nota untuk Bab 6…"
      },
      thanksHeading: { en: "Got it.", ms: "Diterima." },
      thanksText: { en: "Thanks for telling me — I read every one of these myself.", ms: "Terima kasih kerana beritahu saya — saya baca setiap satu sendiri." }
    },

    idea: {
      cardTitle: { en: "Suggest something", ms: "Cadangkan sesuatu" },
      cardDesc: {
        en: "Want something added, built, or changed on this site or how things run? Drop it here.",
        ms: "Nak sesuatu ditambah, dibina, atau diubah di laman ini atau cara sesuatu dijalankan? Letakkan di sini."
      },
      cardCta: { en: "Suggest it", ms: "Cadangkan" },
      formHeading: { en: "Suggest something", ms: "Cadangkan sesuatu" },
      formIntro: {
        en: "“I want X done,” “I think X is needed,” “I think X should change to Y” — whatever it is, say it here.",
        ms: "“Saya nak X dibuat,” “Saya rasa X diperlukan,” “Saya rasa X patut ditukar kepada Y” — apa sahaja, beritahu di sini."
      },
      promptLabel: { en: "What's the idea?", ms: "Apakah cadangannya?" },
      promptPlaceholder: {
        en: "e.g. I think there should be past-year papers for Chapter 6, or the notes page needs a dark mode toggle…",
        ms: "cth: Saya rasa patut ada kertas tahun lepas untuk Bab 6, atau halaman nota perlukan suis mod gelap…"
      },
      thanksHeading: { en: "Got it.", ms: "Diterima." },
      thanksText: { en: "Thanks for the suggestion — I read every one of these myself.", ms: "Terima kasih atas cadangan — saya baca setiap satu sendiri." }
    },

    contactLabel: { en: "Want a reply? Leave a way to reach you (optional)", ms: "Nak balasan? Tinggalkan cara untuk hubungi anda (pilihan)" },
    contactPlaceholder: { en: "email, phone, whatever's easiest — leave blank to stay anonymous", ms: "e-mel, telefon, atau apa-apa cara — biarkan kosong untuk kekal tanpa nama" },

    submitLabel: { en: "Send", ms: "Hantar" },
    sendingLabel: { en: "Sending…", ms: "Menghantar…" },
    errorHeading: { en: "Couldn't send that", ms: "Tidak dapat menghantar" },
    errorText: { en: "Nothing was sent. Please check your connection and try again.", ms: "Tiada apa dihantar. Sila semak sambungan anda dan cuba lagi." }
  }
};
