/* ============================================================
   cairn — asset version (cache-busting)

   WHAT THIS IS
   Browsers keep a saved copy ("cache") of styles.css, app.js and
   config.js so pages load fast. When one of those files changes,
   this number must go UP BY ONE so every visitor's browser knows
   to fetch the fresh copy.

   RULE (also written in CLAUDE.md):
   - Changed app.js, styles.css or config.js?  ->  bump this number.
   - Only added/edited files inside content/ ?  ->  do NOT touch this.
   ============================================================ */
window.ASSET_V = "3";
