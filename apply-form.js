/*
 * LEADFUSE application form (our own, replaces the Typeform). See APPLY-FORM.md at the repo root.
 *
 * One question per screen, then one contact screen. On submit it:
 *   1. grades the answers in the browser with the App's rule (green / yellow / red),
 *   2. POSTs one JSON object to the App inbound webhook (apply-config.js WEBHOOK_URL),
 *   3. sends the visitor where the Typeform did: green/yellow -> /book?email=..., red -> /book-red,
 *      with the contact fields, grade, attribution and test=1 carried on the URL.
 * It fires no Meta event of its own. /book keeps firing Lead exactly as it does after the Typeform.
 *
 * Load after test-mode.js, attribution.js and apply-config.js. Same file on leadfuse.co/apply
 * (copied by the site repo's apply/_src/port.py): keep the two identical, change it here.
 *
 * Page API:
 *   LFApplyForm.mode()            'own' or 'typeform' for this visit (see APPLY-FORM.md "The switch")
 *   LFApplyForm.mount(el, opts)   draws the form into el. opts:
 *       funnel   value of lead_funnel, e.g. 'Apply (Meta ads)'
 *       bookUrl  where green/yellow go (default '/book')
 *       redUrl   where red goes (default '/book-red')
 *       tags     attribution this page sets itself (wins over attribution.js), e.g. the site's formsource
 *       source   source slug ('' on apply.leadfuse.co)
 */
(function () {
  'use strict';

  /* ---------- Questions. Labels are the exact App field options: never change one without the App field.
     Questions 1 to 4 are word for word the roadmap quiz's (roadmap-source/src/lib/quiz-data.ts q0, qe, q1, qa):
     change them in both places. ---------- */
  var SERVICE = ['Detailing', 'Ceramic coating / paint correction', 'PPF / window tint', 'Wraps', 'Something else'];
  var OTHER = 'Something else'; /* opens a short "What do you offer?" box, sent as lead_other_service */
  var TEAM = ['Just me, no revenue yet', 'Just me, with some revenue', '2 to 3', '4 to 9', '10 or more'];
  var REVENUE = ['Under $5K', '$5K to $10K', '$10K to $15K', '$15K to $25K', '$25K to $50K', 'Over $50K'];
  var AD_SPEND = ['Nothing yet', 'Under $1K', '$1K to $3K', '$3K to $5K', 'Over $5K'];
  var READY = ['Yes, has money or credit', 'Maybe, needs to see the plan', 'No way to invest right now'];
  /* Grade lines: revenue from REVENUE[REV_FLOOR] ($10K to $15K) up, ads from AD_SPEND[ADS_FLOOR] ($1K to $3K) up. */
  var REV_FLOOR = 2, ADS_FLOOR = 2;

  var QUESTIONS = [
    { key: 'lead_main_service', title: 'What do you mainly offer?', options: SERVICE },
    { key: 'lead_team_size', title: 'How many full-time technicians do you have, counting you?', options: TEAM },
    { key: 'lead_revenue', title: 'Monthly revenue (approximate)', options: REVENUE },
    { key: 'lead_ad_spend', title: 'Monthly ad spend (approximate)', options: AD_SPEND },
    { key: 'lead_ready_to_invest', title: 'If we show you a plan that makes sense, are you ready to put money behind it?', sub: 'Savings, card, or financing is okay.', options: READY }
  ];

  /* ---------- Grade: the App's rule, word for word (BUILD-SPEC Nov 9 2026, same as the roadmap quiz). ----------
     red    = technicians "Just me, no revenue yet", OR revenue "Under $5K" / "$5K to $10K", OR "Something else",
              OR "No way to invest right now"
     green  = revenue "$10K to $15K" and up AND ads "$1K to $3K" and up
     yellow = revenue "$10K to $15K" and up, ads "Nothing yet" / "Under $1K"
     Team size only counts for "Just me, no revenue yet".
     score  = the old Typeform score, kept so the App's "Application Score" reads the same:
              revenue $10K+ adds 3, ads $1K+ adds 6, any red answer makes it 0. So red 0, yellow 3, green 9. */
  function grade(a) {
    var revOk = REVENUE.indexOf(a.lead_revenue) >= REV_FLOOR;
    var adsOk = AD_SPEND.indexOf(a.lead_ad_spend) >= ADS_FLOOR;
    var red = !revOk || a.lead_team_size === TEAM[0] || a.lead_main_service === OTHER || a.lead_ready_to_invest === 'No way to invest right now';
    if (red) return { grade: 'red', score: 0 };
    return adsOk ? { grade: 'green', score: 9 } : { grade: 'yellow', score: 3 };
  }

  /* ---------- Settings + the switch ---------- */
  var CFG = window.LF_APPLY_CONFIG || {};
  var PLACEHOLDER = 'APPLY_WEBHOOK_URL';
  var LOCAL = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

  function qp(k) { try { return new URLSearchParams(location.search).get(k); } catch (e) { return null; } }
  function isTest() { return !!window.LF_TEST; }

  /* Webhook for this visit. On localhost only, ?apply_hook=<url> points it at a local echo for testing. */
  function webhookUrl() {
    var o = LOCAL ? qp('apply_hook') : null;
    if (o) return o;
    var u = (CFG.WEBHOOK_URL || '').trim();
    return u && u !== PLACEHOLDER && /^https:\/\//.test(u) ? u : '';
  }

  /* ?form=own / ?form=typeform picks the form for this tab (remembered on refresh); otherwise DEFAULT_FORM.
     The own form never shows to a real visitor while the webhook is not set: they get the Typeform. */
  function mode() {
    var want = qp('form');
    try {
      if (want === 'own' || want === 'typeform') sessionStorage.setItem('lf_form', want);
      else want = sessionStorage.getItem('lf_form');
    } catch (e) {}
    if (want !== 'own' && want !== 'typeform') want = CFG.DEFAULT_FORM === 'own' ? 'own' : 'typeform';
    if (want === 'own' && !webhookUrl() && !isTest()) {
      try { console.warn('[LEADFUSE apply] own form asked for, but WEBHOOK_URL is not set: showing the Typeform.'); } catch (e) {}
      return 'typeform';
    }
    return want;
  }

  /* ---------- Validation ---------- */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  /* US/CA (NANP): 10 digits, or 11 starting with 1; area code and exchange can't start with 0 or 1. Returns +1XXXXXXXXXX or ''. */
  function phoneE164(raw) {
    var d = String(raw || '').replace(/\D/g, '');
    if (d.length === 11 && d.charAt(0) === '1') d = d.slice(1);
    if (d.length !== 10 || !/^[2-9]\d{2}[2-9]\d{6}$/.test(d)) return '';
    return '+1' + d;
  }

  /* Never send a placeholder (Typeform's "_____" or an unfilled {{merge}}); send empty instead. */
  function clean(v) {
    v = v == null ? '' : String(v).trim();
    if (!v || /^_+$/.test(v) || /\{\{.*\}\}/.test(v) || /^(undefined|null)$/i.test(v)) return '';
    return v;
  }
  function cookie(name) {
    try { var m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)')); return m ? decodeURIComponent(m[1]) : ''; } catch (e) { return ''; }
  }

  /* ---------- Look (scoped under .lfa; matches the roadmap quiz box) ---------- */
  var CSS = [
    '.lfa{box-sizing:border-box;background:#fff;color:#111;padding:20px 18px 22px;min-height:460px;display:flex;flex-direction:column;font-family:var(--font-sans,Poppins,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif);-webkit-font-smoothing:antialiased;text-align:left}',
    '.lfa *,.lfa *:before,.lfa *:after{box-sizing:border-box}',
    '@media(min-width:640px){.lfa{padding:28px 28px 26px}}',
    '.lfa-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;color:#6B6B70;font-size:11px;font-weight:500;letter-spacing:.12em;text-transform:uppercase}',
    '.lfa-bar{height:6px;border-radius:999px;background:#ECECEE;overflow:hidden;margin-bottom:22px}',
    '.lfa-bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#E50011,#F53D00);transition:width .3s ease}',
    '.lfa-body{flex:1;display:flex;flex-direction:column;justify-content:center}',
    '.lfa-step{animation:lfaIn .25s ease both}',
    '.lfa-step.back{animation-name:lfaBack}',
    '@keyframes lfaIn{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:none}}',
    '@keyframes lfaBack{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:none}}',
    '.lfa h3{margin:0 0 6px;font-size:19px;line-height:1.3;font-weight:700;letter-spacing:-.01em;text-align:center;color:#111}',
    '@media(min-width:640px){.lfa h3{font-size:21px}}',
    '.lfa-sub{margin:0 0 4px;text-align:center;font-size:14px;color:#6B6B70}',
    '.lfa-opts{display:flex;flex-direction:column;gap:8px;margin-top:14px}',
    '.lfa-opt{width:100%;min-height:54px;padding:14px 16px;border-radius:12px;border:1px solid #E3E3E6;background:#F6F6F7;color:#111;font-family:inherit;font-size:15.5px;font-weight:500;line-height:1.35;text-align:left;cursor:pointer;transition:background .15s,border-color .15s,transform .1s;-webkit-tap-highlight-color:transparent}',
    '.lfa-opt:hover{border-color:#C9C9CE}',
    '.lfa-opt:active{transform:scale(.99)}',
    '.lfa-opt.on{background:rgba(229,0,17,.08);border-color:#E50011}',
    '.lfa-opt:focus-visible,.lfa-in:focus-visible,.lfa-go:focus-visible,.lfa-prev:focus-visible{outline:2px solid #E50011;outline-offset:2px}',
    '.lfa-prev{display:flex;align-items:center;gap:6px;margin:14px auto 0;padding:8px 10px;background:none;border:0;color:#6B6B70;font-family:inherit;font-size:13px;font-weight:400;cursor:pointer}',
    '.lfa-prev:hover{color:#111}',
    '.lfa-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}',
    '.lfa-fields{display:flex;flex-direction:column;gap:10px;margin-top:14px}',
    '.lfa-in{width:100%;height:56px;padding:0 16px;border-radius:10px;border:1px solid #D4D4D8;background:#fff;color:#111;font-size:16px;font-family:inherit;-webkit-appearance:none;appearance:none}',
    '.lfa-in::placeholder{color:#9A9AA0}',
    '.lfa-in.bad{border-color:#E50011;background:#FFF7F7}',
    '.lfa-err{margin:2px 0 0;color:#C4000F;font-size:13px;line-height:1.35;text-align:left;min-height:0}',
    '.lfa-go{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:60px;margin-top:16px;padding:18px 24px;border:0;border-radius:10px;background:#E50011;color:#fff;font-family:inherit;font-size:15px;font-weight:600;line-height:1;letter-spacing:.05em;text-transform:uppercase;cursor:pointer;box-shadow:0 0 40px rgba(229,0,17,.35);transition:background .2s,transform .2s}',
    '.lfa-go:hover{background:#FF1524;transform:translateY(-1px)}',
    '.lfa-go:active{background:#AB000C;transform:none}',
    '.lfa-go[disabled]{opacity:.7;cursor:default}',
    '.lfa-fine{margin:10px 0 0;text-align:center;font-size:11px;color:#8A8A90}',
    '.lfa-wait{position:fixed;inset:0;z-index:99999;background:rgba(8,8,10,.94);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;color:#fff;font:600 17px/1.4 system-ui,-apple-system,sans-serif;text-align:center;padding:24px}',
    '.lfa-wait span{width:34px;height:34px;border:3px solid rgba(255,255,255,.2);border-top-color:#fff;border-radius:50%;animation:lfaSpin .8s linear infinite}',
    '.lfa-wait small{font-weight:400;font-size:14px;color:rgba(255,255,255,.6)}',
    '@keyframes lfaSpin{to{transform:rotate(360deg)}}',
    '@media(prefers-reduced-motion:reduce){.lfa-step{animation:none}.lfa-bar i{transition:none}}'
  ].join('\n');

  function injectCss() {
    if (document.getElementById('lfa-css')) return;
    var s = document.createElement('style');
    s.id = 'lfa-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') el.textContent = attrs[k];
      else if (k === 'class') el.className = attrs[k];
      else if (k.slice(0, 2) === 'on') el.addEventListener(k.slice(2), attrs[k]);
      else el.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) el.appendChild(c); });
    return el;
  }

  /* ---------- The form ---------- */
  function mount(root, opts) {
    if (!root || root.getAttribute('data-lfa') === '1') return;
    root.setAttribute('data-lfa', '1');
    opts = opts || {};
    injectCss();

    var answers = {};
    var otherService = '';
    var contact = { first_name: '', last_name: '', business_name: '', email: '', phone: '' };
    var step = 0;
    var total = QUESTIONS.length + 1;
    var sending = false;

    var box = h('div', { class: 'lfa', id: 'lf-apply-form' });
    var topLeft = h('span');
    var topRight = h('span');
    var fill = h('i');
    var body = h('div', { class: 'lfa-body', 'aria-live': 'polite' });
    box.appendChild(h('div', { class: 'lfa-top' }, [topLeft, topRight]));
    box.appendChild(h('div', { class: 'lfa-bar', 'aria-hidden': 'true' }, [fill]));
    box.appendChild(body);
    root.innerHTML = '';
    root.appendChild(box);

    function prevBtn(onClick) {
      return h('button', { type: 'button', class: 'lfa-prev', onclick: onClick, text: '← Previous' });
    }

    function draw(dir) {
      var pct = Math.round(((step + 1) / total) * 100);
      topLeft.textContent = step < QUESTIONS.length ? 'Question ' + (step + 1) + ' of ' + QUESTIONS.length : 'Last step';
      topRight.textContent = pct + '%';
      fill.style.width = pct + '%';
      body.innerHTML = '';
      var wrap = h('div', { class: 'lfa-step' + (dir < 0 ? ' back' : '') });
      if (step < QUESTIONS.length) drawQuestion(wrap); else drawContact(wrap);
      body.appendChild(wrap);
    }

    function drawQuestion(wrap) {
      var q = QUESTIONS[step];
      var id = 'lfa-q' + step;
      wrap.appendChild(h('h3', { id: id, text: q.title }));
      if (q.sub) wrap.appendChild(h('p', { class: 'lfa-sub', text: q.sub }));
      var list = h('div', { class: 'lfa-opts', role: 'group', 'aria-labelledby': id });
      q.options.forEach(function (label) {
        var on = answers[q.key] === label;
        list.appendChild(h('button', {
          type: 'button', class: 'lfa-opt' + (on ? ' on' : ''), 'aria-pressed': on ? 'true' : 'false', text: label,
          onclick: function (ev) {
            if (wrap.getAttribute('data-done')) return; /* one tap per screen, no double-advance */
            answers[q.key] = label;
            Array.prototype.forEach.call(list.children, function (b) { b.className = 'lfa-opt'; b.setAttribute('aria-pressed', 'false'); });
            ev.currentTarget.className = 'lfa-opt on';
            ev.currentTarget.setAttribute('aria-pressed', 'true');
            if (q.key === 'lead_main_service' && label === OTHER) { showOther(); return; }
            if (other) { other.remove(); other = null; }
            wrap.setAttribute('data-done', '1');
            setTimeout(function () { step += 1; draw(1); }, 180);
          }
        }));
      });
      wrap.appendChild(list);
      /* "Something else": a short "What do you offer?" box, then Continue. */
      var other = null;
      function showOther() {
        if (other) return;
        var box = h('input', { class: 'lfa-in', name: 'other_service', id: 'lfa-other_service', type: 'text', placeholder: 'What do you offer?', 'aria-label': 'What do you offer?', maxlength: '200' });
        box.value = otherService;
        var go = h('button', { type: 'submit', class: 'lfa-go', text: 'Continue' });
        var sync = function () { otherService = box.value; if (box.value.trim().length >= 2) go.removeAttribute('disabled'); else go.setAttribute('disabled', 'disabled'); };
        box.addEventListener('input', sync);
        other = h('form', { class: 'lfa-fields', novalidate: 'novalidate', onsubmit: function (ev) {
          ev.preventDefault();
          if (otherService.trim().length < 2 || wrap.getAttribute('data-done')) return;
          wrap.setAttribute('data-done', '1');
          step += 1; draw(1);
        } }, [box, go]);
        list.parentNode.insertBefore(other, list.nextSibling);
        sync();
        try { box.focus(); } catch (e) {}
      }
      if (q.key === 'lead_main_service' && answers[q.key] === OTHER) showOther();
      if (step > 0) wrap.appendChild(prevBtn(function () { step -= 1; draw(-1); }));
    }

    function input(name, attrs) {
      var el = h('input', Object.assign({ class: 'lfa-in', name: name, id: 'lfa-' + name }, attrs));
      el.value = contact[name] || '';
      el.addEventListener('input', function () { contact[name] = el.value; el.classList.remove('bad'); err.textContent = ''; });
      return el;
    }
    var err = h('p', { class: 'lfa-err', role: 'alert' });

    function drawContact(wrap) {
      err.textContent = '';
      var f = h('form', { novalidate: 'novalidate', onsubmit: function (ev) { ev.preventDefault(); submit(f); } });
      f.appendChild(h('h3', { text: 'Last step. Where do we reach you?' }));
      var first = input('first_name', { type: 'text', autocomplete: 'given-name', placeholder: 'First name', maxlength: '50', 'aria-label': 'First name' });
      var last = input('last_name', { type: 'text', autocomplete: 'family-name', placeholder: 'Last name', maxlength: '50', 'aria-label': 'Last name' });
      var biz = input('business_name', { type: 'text', autocomplete: 'organization', placeholder: 'Business name', maxlength: '100', 'aria-label': 'Business name' });
      var em = input('email', { type: 'email', inputmode: 'email', autocomplete: 'email', autocapitalize: 'off', spellcheck: 'false', placeholder: 'Email', maxlength: '255', 'aria-label': 'Email' });
      var ph = input('phone', { type: 'tel', inputmode: 'tel', autocomplete: 'tel', placeholder: 'Cell phone (US or Canada)', maxlength: '20', 'aria-label': 'Cell phone' });
      f.appendChild(h('div', { class: 'lfa-fields' }, [h('div', { class: 'lfa-grid' }, [first, last]), biz, em, ph, err]));
      f.appendChild(h('button', { type: 'submit', class: 'lfa-go', text: 'Submit my application' }));
      f.appendChild(h('p', { class: 'lfa-fine', text: 'We will never sell or spam your information.' }));
      f.appendChild(prevBtn(function () { step -= 1; draw(-1); }));
      wrap.appendChild(f);
    }

    function fail(f, name, msg) {
      var el = f.querySelector('[name="' + name + '"]');
      if (el) { el.classList.add('bad'); el.focus(); }
      err.textContent = msg;
      return false;
    }

    function validate(f) {
      Array.prototype.forEach.call(f.querySelectorAll('.lfa-in'), function (el) { el.classList.remove('bad'); });
      if (!contact.first_name.trim()) return fail(f, 'first_name', 'Enter your first name.');
      if (!contact.last_name.trim()) return fail(f, 'last_name', 'Enter your last name.');
      if (!contact.business_name.trim()) return fail(f, 'business_name', 'Enter your business name.');
      if (!EMAIL_RE.test(contact.email.trim())) return fail(f, 'email', 'Enter a real email, like name@business.com.');
      if (!phoneE164(contact.phone)) return fail(f, 'phone', 'Enter a 10-digit US or Canada cell number, like (209) 555-0123.');
      return true;
    }

    function attribution() {
      var a = Object.assign({}, window.LF_ATTR || {}, opts.tags || {});
      var out = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid', 'formsource'].forEach(function (k) { out[k] = clean(a[k]); });
      return out;
    }

    function payload(g) {
      var test = isTest();
      var attr = attribution();
      var id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now() + '-' + Math.random().toString(16).slice(2);
      var p = {
        submission_id: id,
        submitted_at: new Date().toISOString(),
        first_name: clean(contact.first_name),
        last_name: clean(contact.last_name),
        email: clean(contact.email).toLowerCase(),
        phone: phoneE164(contact.phone),
        business_name: clean(contact.business_name),
        lead_main_service: answers.lead_main_service || '',
        lead_team_size: answers.lead_team_size || '',
        lead_revenue: answers.lead_revenue || '',
        lead_ad_spend: answers.lead_ad_spend || '',
        lead_ready_to_invest: answers.lead_ready_to_invest || '',
        lead_other_service: answers.lead_main_service === OTHER ? clean(otherService).slice(0, 200) : '',
        lead_funnel: opts.funnel || 'Apply (Meta ads)',
        grade: g.grade,
        score: g.score,
        qualified: g.grade === 'red' ? 'no' : 'yes'
      };
      Object.keys(attr).forEach(function (k) { p[k] = attr[k]; });
      p.source = clean(opts.source != null ? opts.source : attr.formsource);
      p.landing_url = location.origin + location.pathname;
      p.referrer = clean(document.referrer);
      /* Meta browser ids, for the App's Conversions API match. Never in test mode. */
      p.fbc = test ? '' : clean(cookie('_fbc'));
      p.fbp = test ? '' : clean(cookie('_fbp'));
      p.test = test ? '1' : '';
      p.tags = test ? ['test | lead'] : [];
      return p;
    }

    function post(url, data) {
      function once() {
        var ctl = window.AbortController ? new AbortController() : null;
        var t = ctl ? setTimeout(function () { ctl.abort(); }, 6000) : null;
        return fetch(url, {
          method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
          keepalive: true, signal: ctl ? ctl.signal : undefined
        }).then(function (r) { if (t) clearTimeout(t); if (!r.ok) throw new Error('HTTP ' + r.status); return true; });
      }
      return once().catch(function (e) {
        try { console.warn('[LEADFUSE apply] webhook failed, retrying once:', e && e.message); } catch (x) {}
        return once();
      });
    }

    function nextUrl(g, p) {
      var base = g.grade === 'red' ? (opts.redUrl || '/book-red') : (opts.bookUrl || '/book');
      var u = new URL(base, location.href);
      var q = { first_name: p.first_name, last_name: p.last_name, email: p.email, phone: p.phone, grade: g.grade };
      Object.keys(q).forEach(function (k) { if (q[k]) u.searchParams.set(k, q[k]); });
      ['formsource', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'fbclid'].forEach(function (k) {
        if (p[k] && !u.searchParams.has(k)) u.searchParams.set(k, p[k]);
      });
      var s = u.toString();
      if (window.LF_ATTR_APPLY) s = window.LF_ATTR_APPLY(s);
      /* attribution.js carries whatever the ad link had, placeholders too: drop "_____" and unfilled {{...}}. */
      try {
        var v = new URL(s);
        Array.from(v.searchParams.keys()).forEach(function (k) { if (!clean(v.searchParams.get(k))) v.searchParams.delete(k); });
        s = v.toString();
      } catch (e) {}
      if (isTest()) s = window.LF_TEST_URL ? window.LF_TEST_URL(s) : s + (s.indexOf('?') < 0 ? '?' : '&') + 'test=1';
      return s;
    }

    function overlay() {
      if (document.querySelector('.lfa-wait')) return;
      var d = h('div', { class: 'lfa-wait', role: 'status' }, [h('span'), h('div', { text: 'Got it. Checking your answers…' }), h('small', { text: 'Your next step loads in a second.' })]);
      document.body.appendChild(d);
    }

    function submit(f) {
      if (sending) return;
      if (!validate(f)) return;
      sending = true;
      var btn = f.querySelector('.lfa-go');
      if (btn) btn.setAttribute('disabled', 'disabled');
      var g = grade(answers);
      var p = payload(g);
      var to = nextUrl(g, p);
      overlay();
      var url = webhookUrl();
      var go = function () { window.LF_APPLY_LAST = { payload: p, next: to }; if (!window.LF_APPLY_NO_REDIRECT) location.href = to; };
      if (!url) {
        /* Only reachable in test mode before the App webhook exists: send nothing, show what would have gone. */
        try { console.info('[LEADFUSE apply] test mode, no WEBHOOK_URL yet: nothing sent. Payload:', p); } catch (e) {}
        setTimeout(go, 400);
        return;
      }
      /* Wait for the App (so the contact exists before /book), but never strand the visitor: go after 8s at most. */
      var done = false;
      var finish = function () { if (done) return; done = true; go(); };
      post(url, p).then(finish, function (e) { try { console.error('[LEADFUSE apply] webhook failed:', e && e.message); } catch (x) {} finish(); });
      setTimeout(finish, 8000);
    }

    draw(1);
  }

  window.LFApplyForm = { mode: mode, mount: mount, grade: grade, _phone: phoneE164, QUESTIONS: QUESTIONS };
})();
