/* ============================================================
   NOVA — site settings  (THIS FILE IS SAFE FOR YOU TO EDIT)

   Plain-English guide:
   - siteName ......... the name shown in the header and footer.
   - subjects ......... the order subjects appear in on the site.
                        A subject only shows content once a folder
                        with the SAME name exists under
                        content/lectures/ (or quizzes/exam-papers).
                        Add or reorder lines freely.
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
     "Talk to us" — private message box (vent / academic help)

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
      vent: "https://formspree.io/f/xdenjpln"
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
        en: "Stuck on a topic, missing notes, exam stress — anything study-related.",
        ms: "Tak faham sesuatu topik, nota tak lengkap, tertekan sebab peperiksaan — apa-apa berkaitan pelajaran."
      },
      cardCta: { en: "Tell me", ms: "Beritahu saya" },
      formHeading: { en: "Academic help", ms: "Bantuan akademik" },
      formIntro: {
        en: "Tell me what's tripping you up. If it's about one subject, pick it below — otherwise leave it general.",
        ms: "Beritahu saya apa yang menyusahkan anda. Jika ia berkaitan satu subjek, pilih di bawah — jika tidak, biarkan sebagai umum."
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

    vent: {
      cardTitle: { en: "Just need to vent", ms: "Cuma nak luahkan" },
      cardDesc: {
        en: "Anything else on your mind? — stress, a rough week, whatever. No topic required.",
        ms: "Apa-apa lagi di fikiran anda? — tekanan, minggu yang sukar, apa sahaja. Tiada topik diperlukan."
      },
      cardCta: { en: "Let it out", ms: "Luahkan" },
      formHeading: { en: "Just need to vent", ms: "Cuma nak luahkan" },
      formIntro: { en: "Say whatever you need to. There's no right way to fill this in.", ms: "Katakan apa sahaja yang anda perlu. Tiada cara yang betul untuk mengisi ini." },
      promptLabel: { en: "What's going on?", ms: "Apa yang berlaku?" },
      promptPlaceholder: { en: "Write as much or as little as you want…", ms: "Tulis sebanyak atau seringkas mana yang anda mahu…" },
      thanksHeading: { en: "Heard.", ms: "Didengari." },
      thanksText: { en: "Thank you for trusting me with this.", ms: "Terima kasih kerana mempercayai saya dengan ini." }
    },

    contactLabel: { en: "Want a reply? Leave a way to reach you (optional)", ms: "Nak balasan? Tinggalkan cara untuk hubungi anda (pilihan)" },
    contactPlaceholder: { en: "email, phone, whatever's easiest — leave blank to stay anonymous", ms: "e-mel, telefon, atau apa-apa cara — biarkan kosong untuk kekal tanpa nama" },

    submitLabel: { en: "Send", ms: "Hantar" },
    sendingLabel: { en: "Sending…", ms: "Menghantar…" },
    errorHeading: { en: "Couldn't send that", ms: "Tidak dapat menghantar" },
    errorText: { en: "Nothing was sent. Please check your connection and try again.", ms: "Tiada apa dihantar. Sila semak sambungan anda dan cuba lagi." }
  }
};
