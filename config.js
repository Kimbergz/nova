/* ============================================================
   cairn — site settings  (THIS FILE IS SAFE FOR YOU TO EDIT)

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
  }
};
