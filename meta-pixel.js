/*
 * LEADFUSE Meta Pixel.
 *
 * The pixel is the little piece of Meta code that watches the funnel and
 * whispers back to Facebook/Instagram what a visitor did — landed on the page,
 * became a lead, booked a call. Without it, Meta is optimizing blind: it was
 * reporting 4 leads on real traffic of dozens because the funnel never told it
 * anything. This file is loaded in the <head> of every funnel page, right after
 * attribution.js, so window.LF_ATTR (the captured utm_* / fbclid) already exists.
 *
 * WHERE EACH EVENT FIRES (no reliance on catching the Typeform submit inside its
 * cross-origin iframe — instead we use the page the visitor LANDS on, which is
 * bulletproof because every completed Typeform redirects to one of these):
 *   index.html      -> PageView            (they saw the offer)
 *   booking.html    -> PageView + Lead     (green/yellow: a real, bookable lead)
 *   book-red.html   -> PageView only       (red/DQ: never a Lead; PageView kept so ads can EXCLUDE these visitors)
 *   confirmation.html -> PageView + Schedule (they actually booked the call)
 *
 * The "Qualified / Unqualified" signal from the closer intake form is a separate,
 * server-side Conversions API event that GHL sends — it does not live here.
 *
 * TO GO LIVE: paste your Dataset/Pixel ID from Meta Events Manager below. Until
 * then PIXEL_ID is a placeholder and the pixel is intentionally inert.
 */
(function () {
  var PIXEL_ID = '1122537676630550'; // LEADFUSE - VSL PIXEL (Events Manager dataset)

  /* NO META FROM THE BROWSER for the 4-Week Test Drive (Sebastian, Oct 27 2026). That campaign goes to people already in the
     App by email and text, not to ad traffic, so it must not teach Meta anything: no PageView, no Lead, no Schedule (and no
     "Booked Call" custom conversion, which is a PageView on /confirmation). The only Meta signal it may create is the
     closer's Qualified on the intake form, sent server-side by the OS. formsource=test-drive rides every page of that path:
     the offer page, /apply/book, /apply/confirmation and /apply/not-ready. Re-applied by apply/_src/port.py. */
  try {
    var lfq = new URLSearchParams(location.search);
    if (location.pathname.indexOf('/apply/test-drive') === 0 || lfq.get('formsource') === 'test-drive' || lfq.get('utm_campaign') === 'test-drive') {
      window.lfMetaTrack = function () {};
      window.fbq = window.fbq || function () {};
      return;
    }
  } catch (e) {}

  if (!PIXEL_ID || PIXEL_ID === 'PIXEL_ID_HERE') {
    // No ID yet: expose a no-op so page scripts calling lfMetaTrack don't error.
    window.lfMetaTrack = function () {};
    return;
  }

  // --- Standard Meta base code: loads fbevents.js and defines window.fbq ---
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  /*
   * Advanced matching. Typeform hands the contact fields to /book and /book-red
   * in the URL; giving them to the pixel lets Meta match the browser Lead /
   * Schedule to a real person (the pixel hashes them before they leave the
   * browser). Nothing is stored. Pages reached without them just send none.
   */
  var am = {};
  try {
    var q = new URLSearchParams(window.location.search);
    var em = (q.get('email') || '').trim().toLowerCase();
    var ph = (q.get('phone') || '').replace(/\D/g, '');
    var fn = (q.get('first_name') || '').trim().toLowerCase();
    var ln = (q.get('last_name') || '').trim().toLowerCase();
    if (em.indexOf('@') > 0) am.em = em;
    if (ph.length >= 10) am.ph = ph.length === 10 ? '1' + ph : ph;
    if (fn) am.fn = fn;
    if (ln) am.ln = ln;
  } catch (e) {}

  fbq('init', PIXEL_ID, am);
  /*
   * A page can opt out of the automatic PageView (window.LF_SKIP_PAGEVIEW).
   * confirmation.html does this when the visit is NOT a fresh booking — e.g. a
   * lead re-opening it from a reminder text — because the "Booked Call" custom
   * conversion is literally "a PageView on /confirmation", and every re-visit
   * was being counted as another booked call.
   */
  if (!window.LF_SKIP_PAGEVIEW) fbq('track', 'PageView');

  /*
   * Fire a conversion event once per browser tab. The guard stops a page refresh
   * (or the visitor hitting back) from counting a second Lead/Schedule. Standard
   * events: 'Lead' (submitted the form), 'Schedule' (booked the call).
   */
  window.lfMetaTrack = function (event, params) {
    if (!event || typeof fbq !== 'function') return;
    var flag = 'lf_evt_' + event;
    try { if (sessionStorage.getItem(flag)) return; } catch (e) {}
    fbq('track', event, params || {});
    try { sessionStorage.setItem(flag, '1'); } catch (e) {}
  };
})();
