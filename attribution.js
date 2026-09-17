/*
 * LEADFUSE funnel attribution relay.
 *
 * The funnel hands the visitor between three hosts — this site, Typeform, and the
 * GHL calendar — and every hop is a chance to drop the ad attribution. Typeform
 * only appends the UTMs to its redirect URL if each one is mapped as a hidden
 * field, and any link that still points at a `.html` path gets a `cleanUrls`
 * 301 that strips the query string outright.
 *
 * So we stop relying on the URL alone: the first page that sees the params
 * stashes them for the tab, and later pages read them back when their own URL
 * came through empty. Attribution only — contact details stay in the URL where
 * Typeform put them, rather than being copied into browser storage.
 */
(function () {
  var KEY = 'lf_attr';
  var ATTR_KEYS = [
    'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
    'fbclid', 'gclid', 'ttclid',
    // Where a non-paid lead came from: the link posted in a YouTube description,
    // a Skool post, a DM, a bio. Paid traffic is described by the utm_* pair
    // above; formsource is the same question asked of everywhere else, so it
    // gets the same treatment — carried across every hop, never overwritten by
    // a later page that happens to arrive without it.
    'formsource'
  ];

  function read() {
    try { return JSON.parse(sessionStorage.getItem(KEY) || '{}') || {}; }
    catch (e) { return {}; }
  }

  var stored = read();
  var incoming = new URLSearchParams(window.location.search);
  var merged = {};
  var dirty = false;

  ATTR_KEYS.forEach(function (k) {
    // A param on the current URL is the freshest truth; otherwise fall back to
    // whatever an earlier page in this tab captured.
    var fromUrl = incoming.get(k);
    var val = (fromUrl && fromUrl.trim()) || stored[k] || '';
    if (val) {
      merged[k] = val;
      if (stored[k] !== val) dirty = true;
    }
  });

  if (dirty) {
    try { sessionStorage.setItem(KEY, JSON.stringify(merged)); } catch (e) {}
  }

  window.LF_ATTR = merged;

  /*
   * Put the attribution back on the address bar when this page was reached
   * without it. The relay above is enough for anything we build the URL for
   * ourselves, but GHL's own capture reads the *parent page* URL through
   * form_embed.js rather than the widget's query string — so a Typeform
   * redirect that arrives here bare gets the booking recorded as untracked
   * even though the widget iframe was handed the UTMs. Restoring them here,
   * from <head>, means the URL is already correct before form_embed.js or the
   * widget iframe exist. replaceState only rewrites the query string: no
   * reload, no extra history entry, and params already present are left alone.
   */
  (function () {
    var keys = Object.keys(merged);
    if (!keys.length || !window.history || !window.history.replaceState) return;
    var url;
    try { url = new URL(window.location.href); } catch (e) { return; }
    var added = false;
    keys.forEach(function (k) {
      if (!url.searchParams.has(k)) { url.searchParams.set(k, merged[k]); added = true; }
    });
    if (added) {
      try { window.history.replaceState(window.history.state, '', url.toString()); } catch (e) {}
    }
  })();

  /* Merge stored attribution into a URL without clobbering params already on it. */
  window.LF_ATTR_APPLY = function (url) {
    var u;
    try { u = new URL(url, window.location.href); } catch (e) { return url; }
    Object.keys(merged).forEach(function (k) {
      if (!u.searchParams.has(k)) u.searchParams.set(k, merged[k]);
    });
    return u.toString();
  };

  /* Query string for the stored attribution, e.g. "?utm_source=meta". */
  window.LF_ATTR_QS = function () {
    var qs = new URLSearchParams(merged).toString();
    return qs ? '?' + qs : '';
  };
})();
