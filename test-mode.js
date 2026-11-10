/*
 * LEADFUSE test mode. One rule for every funnel page (apply.leadfuse.co,
 * roadmap.leadfuse.co, leadfuse.co/apply): add ?test=1 to any link and
 * NOTHING from that visit reaches Meta.
 *
 *   ?test=1  turns it on for the rest of the visit (sessionStorage "lf_test",
 *            the same key the roadmap quiz has used since Nov 8 2026)
 *   ?test=0  turns it off again in the same tab
 *
 * What it does when on:
 *   1. Defines a do-nothing window.fbq BEFORE meta-pixel.js runs. Meta's own
 *      loader starts with "if (window.fbq) return", so fbevents.js is never
 *      even downloaded, by our code or by anyone else's copy of the snippet.
 *      meta-pixel.js also checks window.LF_TEST and bails out first.
 *   2. Keeps test=1 in the address bar, so every redirect that copies the
 *      query string (/book -> /confirmation, the leadfuse.co hand-back, the
 *      Typeform hidden fields, the booking calendar) carries it.
 *   3. Adds test=1 to every click on a link to a LEADFUSE site, so the next
 *      page (even on another subdomain, where sessionStorage is empty) is in
 *      test mode too.
 *   4. Shows a small "TEST MODE: nothing sent to Meta" badge.
 *
 * Load it FIRST in <head>, before attribution.js and meta-pixel.js.
 * The server side (LEADFUSE OS) separately skips every Conversions API event
 * for test contacts; see TEST-MODE.md.
 */
(function () {
  var KEY = 'lf_test';
  var on = false;
  var param = null;
  try { param = new URLSearchParams(window.location.search).get('test'); } catch (e) {}
  try {
    if (param === '1') { sessionStorage.setItem(KEY, '1'); on = true; }
    else if (param === '0') { sessionStorage.removeItem(KEY); on = false; }
    else on = sessionStorage.getItem(KEY) === '1';
  } catch (e) { on = param === '1'; }

  window.LF_TEST = on;
  if (!on) return;

  // 1. No pixel. A stub fbq makes any Meta base code return before it loads fbevents.js.
  if (!window.fbq) {
    var stub = function () {
      try { console.info('[LEADFUSE test mode] blocked Meta pixel call:', Array.prototype.slice.call(arguments)); } catch (e) {}
    };
    stub.lfTestStub = true;
    stub.loaded = true;
    stub.version = '2.0';
    stub.queue = [];
    stub.push = stub;
    stub.callMethod = null;
    window.fbq = stub;
    window._fbq = stub;
  }
  window.LF_SKIP_PAGEVIEW = true;
  window.lfMetaTrack = function (event) {
    try { console.info('[LEADFUSE test mode] blocked Meta event:', event); } catch (e) {}
  };

  // Hosts that get test=1 carried to them on click.
  var OURS = /(^|\.)leadfuse\.co$|^localhost$|^127\.0\.0\.1$/;

  /* Add test=1 to a URL if it points at one of our sites. Exposed for page scripts. */
  window.LF_TEST_URL = function (href) {
    var u;
    try { u = new URL(href, window.location.href); } catch (e) { return href; }
    if (!/^https?:$/.test(u.protocol) || !OURS.test(u.hostname)) return href;
    if (u.searchParams.get('test') !== '1') u.searchParams.set('test', '1');
    return u.toString();
  };

  // 2. Keep test=1 on the address bar (no reload, no history entry).
  try {
    var here = new URL(window.location.href);
    if (here.searchParams.get('test') !== '1') {
      here.searchParams.set('test', '1');
      window.history.replaceState(window.history.state, '', here.toString());
    }
  } catch (e) {}

  // 3. Carry it on every click to a LEADFUSE link (capture phase: before navigation).
  function carry(ev) {
    var a = ev.target && ev.target.closest ? ev.target.closest('a[href]') : null;
    if (!a) return;
    var raw = a.getAttribute('href') || '';
    if (!raw || raw.charAt(0) === '#' || /^(mailto|tel|sms|javascript):/i.test(raw)) return;
    var next = window.LF_TEST_URL(a.href);
    if (next !== a.href) a.href = next;
  }
  document.addEventListener('click', carry, true);
  document.addEventListener('auxclick', carry, true);

  // 4. The badge. Fixed, small, never covers the form's buttons on a phone.
  function badge() {
    if (document.getElementById('lf-test-badge')) return;
    var b = document.createElement('div');
    b.id = 'lf-test-badge';
    b.setAttribute('role', 'status');
    b.textContent = 'TEST MODE: nothing sent to Meta';
    b.style.cssText = [
      'position:fixed', 'top:8px', 'left:50%', 'transform:translateX(-50%)', 'z-index:2147483647',
      'background:#FFD400', 'color:#111', 'font:700 12px/1.2 system-ui,-apple-system,Segoe UI,Roboto,sans-serif',
      'letter-spacing:.04em', 'padding:6px 12px', 'border-radius:999px', 'box-shadow:0 2px 10px rgba(0,0,0,.35)',
      'pointer-events:none', 'white-space:nowrap', 'max-width:calc(100vw - 32px)', 'overflow:hidden', 'text-overflow:ellipsis'
    ].join(';');
    (document.body || document.documentElement).appendChild(b);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', badge);
  else badge();
})();
