/* LEADFUSE careers application: one question per screen.
   Roles, their status and their Loom questions come from /careers/roles.js.
   Where answers go comes from /careers/config.js (window.LF_CAREERS.webhookUrl).
   Answers live in sessionStorage while the applicant fills the form and are cleared on submit. */
(function () {
  'use strict';

  var ROLES = window.LF_ROLES || [];
  var STATUS = window.LF_ROLE_STATUS || {};
  var CFG = window.LF_CAREERS || {};
  var KEY = 'lf_careers_form_v1';
  var UTM_KEY = 'lf_careers_utm';
  var MIN_MS = 20000; /* faster than this from first screen to submit = a bot */
  var UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

  var ENGLISH = ['Native US English', 'Fluent. Customers never ask me to repeat myself.', 'Good. I have an accent some customers notice.', 'Still learning.'];
  var EXPERIENCE = ['None yet', 'Under 1 year', '1 to 3 years', 'More than 3 years'];
  var HEARD = ['Someone referred me', 'A Skool community', 'A Facebook group', 'Instagram', 'LinkedIn', 'OnlineJobs.ph', 'Another job board', 'Other'];
  var FOLLOW = {
    'Someone referred me': { id: 'heard_ref', ph: 'Who referred you?', err: 'Tell us who referred you.' },
    'Other': { id: 'heard_other', ph: 'Where did you hear about it?', err: 'Tell us where you heard about it.' }
  };
  var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var HOURS = ['Morning (8 AM to 12 PM)', 'Afternoon (12 PM to 5 PM)', 'Evening (5 PM to 8 PM)'];

  function roleBy(slug) { for (var i = 0; i < ROLES.length; i++) if (ROLES[i].slug === slug) return ROLES[i]; return null; }
  function cur() { return roleBy(st.a.role) || roleBy('other') || {}; }
  function val(v) { return typeof v === 'function' ? v() : v; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  /* The questions, in order. Text that depends on the role is a function. */
  var STEPS = [
    { id: 'role', kind: 'choice', req: true, q: 'Which role are you applying for?',
      hint: 'About 10 minutes. Near the end you paste the link to a short Loom.',
      options: function () { return ROLES.map(function (r) { return { v: r.slug, l: r.label, tag: STATUS[r.slug] === 'open' ? 'Open now' : '' }; }); } },
    { id: 'full_name', kind: 'text', req: true, q: "What's your full name?", ph: 'First and last name', ac: 'name' },
    { id: 'email', kind: 'email', req: true, q: "What's your email?", hint: 'Your group call invite goes here.', ph: 'name@example.com', ac: 'email', im: 'email' },
    { id: 'phone', kind: 'tel', req: true, q: "What's your phone number?", hint: 'US number? Just type it. Outside the US? Start with + and your country code.', ph: '(555) 555 0123', ac: 'tel', im: 'tel' },
    { id: 'location', kind: 'text', req: true, q: "Where do you live, and what's your time zone?", hint: 'City, country and time zone. For example: Dallas, USA, Central.', ph: 'City, country, time zone' },
    { id: 'english', kind: 'choice', req: function () { return cur().english !== 'optional'; }, q: "How's your English on a call with a US business owner?", options: ENGLISH },
    { id: 'experience', kind: 'choice', req: true, q: 'How much experience do you have in this role?', hint: "Experience helps. It's not what we hire on.", options: EXPERIENCE },
    { id: 'last_role', kind: 'long', req: true, q: "What's your current or last job? What did you do, and for who?", ph: 'Type your answer here' },
    { id: 'proof', kind: 'long', req: false, q: function () { return (cur().proof || {}).q || 'Got proof of your work? Link it or describe it.'; }, hint: function () { return (cur().proof || {}).hint || ''; }, ph: 'Type your answer here' },
    { id: 'why', kind: 'long', req: true, q: 'Why this role, and why now?', ph: 'Type your answer here' },
    { id: 'besides_money', kind: 'long', req: true, q: 'What else do you want from this job besides money?', ph: 'Type your answer here' },
    { id: 'loom_url', kind: 'url', req: true, q: 'Paste the link to your Loom.', ph: 'https://www.loom.com/share/', loom: true },
    { id: 'resume_url', kind: 'url', req: false, q: 'Your LinkedIn or resume link', ph: 'https://' },
    { id: 'heard', kind: 'choice', req: true, q: 'How did you hear about this role?', options: HEARD, follow: FOLLOW },
    { id: 'days', kind: 'multi', req: true, q: 'Which days can you work?', hint: 'Pick every day that works.', options: DAYS },
    { id: 'hours', kind: 'multi', req: true, q: 'Which hours can you work, US Central time?', hint: 'Pick every block that works.', options: HOURS }
  ];

  /* ---------- state ---------- */
  function load() { try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
  function save() { try { sessionStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }
  var st = load();
  if (!st || typeof st !== 'object' || !st.a) st = { a: {}, step: 0 };
  if (!st.t0) st.t0 = Date.now();
  var params = new URLSearchParams(location.search);
  var urlRole = params.get('role');
  if (urlRole && roleBy(urlRole) && st.a.role !== urlRole) { st.a.role = urlRole; st.step = 0; }
  if (typeof st.step !== 'number' || st.step < 0 || st.step >= STEPS.length) st.step = 0;
  save();

  /* utm_* from this link. If the link has none, the ones the careers page saw (the applicant came through it). */
  var utm = {};
  UTM.forEach(function (k) { var v = (params.get(k) || '').trim(); if (v) utm[k] = v; });
  if (!Object.keys(utm).length) {
    try { (JSON.parse(sessionStorage.getItem(UTM_KEY) || '[]') || []).forEach(function (kv) { utm[kv[0]] = kv[1]; }); } catch (e) {}
  }

  /* ---------- helpers ---------- */
  function normPhone(raw) {
    var s = String(raw || '').trim();
    var plus = s.charAt(0) === '+' || s.indexOf('00') === 0;
    var d = s.replace(/\D/g, '');
    if (s.indexOf('00') === 0) d = d.slice(2);
    if (plus) return d.length >= 7 && d.length <= 15 ? '+' + d : null;
    if (d.length === 10) return '+1' + d;
    if (d.length === 11 && d.charAt(0) === '1') return '+' + d;
    return null;
  }
  function normUrl(raw) {
    var s = String(raw || '').trim();
    if (!s) return '';
    if (!/^https?:\/\//i.test(s)) s = 'https://' + s.replace(/^\/+/, '');
    try { var u = new URL(s); return /\./.test(u.hostname) && !/\s/.test(s) ? u.href : null; } catch (e) { return null; }
  }
  function isEmail(s) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(s || '').trim()); }
  function required(step) { return !!val(step.req); }

  /* ---------- render ---------- */
  var box = document.getElementById('q');
  var bar = document.getElementById('bar');
  var progress = document.getElementById('progress');
  var count = document.getElementById('count');
  var ARROW = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h9M7.5 3.5 11 7l-3.5 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var TICK = '<svg class="opt__ok" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3.5 9.5l3.6 3.6L14.5 5.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var OK = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.5l3 3L11.5 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function optionsOf(step) {
    return (val(step.options) || []).map(function (o) { return typeof o === 'string' ? { v: o, l: o } : o; });
  }

  function render(opts) {
    opts = opts || {};
    var i = st.step, step = STEPS[i], a = st.a, r = cur();
    var last = i === STEPS.length - 1;
    var hint = val(step.hint) || '';
    var h = '<div class="q' + (opts.still ? ' q--still' : '') + '" data-step="' + step.id + '">';
    h += '<div class="q__num">' + (i + 1) + ' ' + ARROW + (required(step) ? '' : '<span class="q__opt">Optional</span>') + '</div>';
    h += '<h1 class="q__title" id="qt">' + esc(val(step.q)) + '</h1>';
    if (hint) h += '<p class="q__hint">' + esc(hint) + '</p>';

    if (step.loom) {
      h += '<div class="pre"><div class="pre__h">Answer these 3 in your Loom</div><ol>' +
        (r.loom || []).map(function (t, n) { return '<li><b>' + (n + 1) + '</b>' + esc(t) + '</li>'; }).join('') + '</ol>' +
        '<p class="pre__meta">3 minutes max. Set the link so anyone with it can watch. No Loom yet? It\'s free at <a href="https://www.loom.com/" target="_blank" rel="noopener">loom.com</a>. Record it in a new tab. Your answers here stay put.</p></div>';
    }

    if (step.kind === 'choice' || step.kind === 'multi') {
      var multi = step.kind === 'multi';
      var chosen = multi ? (a[step.id] || []) : [a[step.id]];
      h += '<div class="opts" role="' + (multi ? 'group' : 'radiogroup') + '" aria-labelledby="qt">';
      optionsOf(step).forEach(function (o, n) {
        var on = chosen.indexOf(o.v) > -1;
        h += '<button type="button" class="opt" role="' + (multi ? 'checkbox' : 'radio') + '" aria-checked="' + on + '" data-v="' + esc(o.v) + '">' +
          '<kbd>' + String.fromCharCode(65 + n) + '</kbd><span class="opt__l">' + esc(o.l) + '</span>' +
          (o.tag ? '<span class="opt__tag">' + esc(o.tag) + '</span>' : '') + TICK + '</button>';
      });
      h += '</div>';
      if (step.follow && step.follow[a[step.id]]) {
        var f = step.follow[a[step.id]];
        h += '<input class="in in--follow" id="follow" type="text" aria-label="' + esc(f.ph) + '" placeholder="' + esc(f.ph) + '" value="' + esc(a[f.id] || '') + '" autocomplete="off">';
      }
      if (step.id === 'role' && a.role && STATUS[a.role] !== 'open') {
        h += '<p class="poolnote">Not hiring for this seat right now. Apply anyway and we\'ll reach out when a seat opens.</p>';
      }
    } else {
      var v = a[step.id] || '';
      var type = { email: 'email', tel: 'tel', url: 'url' }[step.kind] || 'text';
      var attrs = ' id="in" aria-labelledby="qt" placeholder="' + esc(step.ph || '') + '"' +
        (step.ac ? ' autocomplete="' + step.ac + '"' : ' autocomplete="off"') +
        (step.im ? ' inputmode="' + step.im + '"' : '') +
        (step.kind === 'url' ? ' inputmode="url" autocapitalize="off" autocorrect="off" spellcheck="false"' : '') +
        (step.kind === 'email' ? ' autocapitalize="off" autocorrect="off" spellcheck="false"' : '');
      if (step.kind === 'long') h += '<textarea class="in in--long" rows="1"' + attrs + '>' + esc(v) + '</textarea>';
      else h += '<input class="in" type="' + type + '"' + attrs + ' value="' + esc(v) + '"' + (step.kind === 'text' ? ' autocapitalize="words"' : '') + '>';
    }

    h += '<p class="err" id="err" role="alert"></p>';
    h += '<div class="act"><button type="button" class="btn btn--solid btn--md" id="next">' + (last ? 'Submit application' : 'Next ' + OK) + '</button>';
    if (!last) h += '<span class="act__hint">' + (step.kind === 'long' ? 'press <b>Enter</b> &#8629; &nbsp;&middot;&nbsp; <b>Shift + Enter</b> for a new line' : 'press <b>Enter</b> &#8629;') + '</span>';
    if (i > 0) h += '<button type="button" class="back" id="back"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M12 7H3M6.5 3.5 3 7l3.5 3.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>Back</button>';
    h += '</div></div>';
    box.innerHTML = h;

    var pct = Math.round((i / STEPS.length) * 100);
    bar.style.width = pct + '%';
    progress.setAttribute('aria-valuenow', String(pct));
    count.textContent = (i + 1) + ' of ' + STEPS.length;
    document.title = 'Apply' + (a.role && roleBy(a.role) ? ': ' + roleBy(a.role).label : '') + ' | Careers at LEADFUSE';

    var input = document.getElementById('in');
    if (input && input.tagName === 'TEXTAREA') grow(input);
    if (opts.focus !== false) {
      var target = input || document.getElementById('follow');
      if (target && (!coarse || opts.gesture)) { try { target.focus({ preventScroll: true }); var L = target.value.length; target.setSelectionRange && target.setSelectionRange(L, L); } catch (e) {} }
      else if (!target && coarse && document.activeElement && document.activeElement.blur) document.activeElement.blur();
    }
    if (!opts.keepScroll) window.scrollTo(0, 0);
  }

  function grow(t) { t.style.height = 'auto'; t.style.height = Math.min(t.scrollHeight + 2, 320) + 'px'; t.style.overflowY = t.scrollHeight > 318 ? 'auto' : 'hidden'; }

  function showErr(msg) { var e = document.getElementById('err'); if (e) e.textContent = msg || ''; }

  /* ---------- validate the current screen ---------- */
  function check() {
    var step = STEPS[st.step], a = st.a, v = a[step.id];
    var req = required(step);
    if (step.kind === 'choice') {
      if (req && !v) return 'Pick one to keep going.';
      if (step.follow && step.follow[v]) {
        var f = step.follow[v];
        if (!String(a[f.id] || '').trim()) return f.err;
      }
      return '';
    }
    if (step.kind === 'multi') return req && !(v && v.length) ? 'Pick at least one.' : '';
    var s = String(v || '').trim();
    if (!s) return req ? "This one's required." : '';
    if (step.id === 'full_name' && s.length < 2) return 'Type your full name.';
    if (step.kind === 'email') return isEmail(s) ? '' : "That email doesn't look right.";
    if (step.kind === 'tel') {
      var p = normPhone(s);
      if (!p) return "That number doesn't look right. US numbers have 10 digits. Outside the US, start with + and your country code.";
      a.phone = p; return '';
    }
    if (step.kind === 'url') {
      var u = normUrl(s);
      if (u === null) return step.loom ? 'Paste the full link to your Loom. It starts with https://' : "That link doesn't look right. Paste the full link, or leave it empty.";
      a[step.id] = u; return '';
    }
    a[step.id] = s;
    return '';
  }

  /* ---------- navigation (each screen is a history entry, so the phone's back gesture goes back one question) ---------- */
  var pushed = 0, done = false, sending = false, autoTimer = null;

  function go(n, how, gesture) {
    clearTimeout(autoTimer);
    st.step = Math.max(0, Math.min(STEPS.length - 1, n));
    save();
    if (how === 'push') { history.pushState({ lfStep: st.step }, ''); pushed++; }
    else if (how === 'replace') history.replaceState({ lfStep: st.step }, '');
    render({ gesture: gesture });
  }

  function next(gesture) {
    if (sending) return;
    var msg = check();
    save();
    if (msg) { showErr(msg); var el = document.getElementById('follow') || document.getElementById('in'); if (el && !coarse) el.focus(); return; }
    if (st.step === STEPS.length - 1) return submit();
    go(st.step + 1, 'push', gesture);
  }

  function back() {
    if (st.step === 0) return;
    if (pushed > 0) history.back();
    else go(st.step - 1, 'replace', true);
  }

  window.addEventListener('popstate', function (e) {
    if (done) { history.replaceState({ lfStep: 'done' }, ''); return; }
    pushed = Math.max(0, pushed - 1);
    var s = e.state && typeof e.state.lfStep === 'number' ? e.state.lfStep : 0;
    st.step = s; save(); render({ gesture: false });
  });

  /* ---------- events ---------- */
  box.addEventListener('click', function (e) {
    var opt = e.target.closest('.opt');
    if (opt) return pick(opt.getAttribute('data-v'));
    if (e.target.closest('#next')) return next(true);
    if (e.target.closest('#back')) return back();
  });

  function pick(v) {
    var step = STEPS[st.step], a = st.a;
    if (step.kind === 'multi') {
      var list = (a[step.id] || []).slice(), k = list.indexOf(v);
      if (k > -1) list.splice(k, 1); else list.push(v);
      a[step.id] = optionsOf(step).map(function (o) { return o.v; }).filter(function (x) { return list.indexOf(x) > -1; });
      save();
      Array.prototype.forEach.call(box.querySelectorAll('.opt'), function (b) { b.setAttribute('aria-checked', String(a[step.id].indexOf(b.getAttribute('data-v')) > -1)); });
      showErr('');
      return;
    }
    a[step.id] = v;
    save();
    var hasFollow = step.follow && step.follow[v];
    render({ keepScroll: true, still: true, focus: !!hasFollow, gesture: true });
    if (!hasFollow) autoTimer = setTimeout(function () { if (STEPS[st.step] === step) next(false); }, 320);
  }

  box.addEventListener('input', function (e) {
    var step = STEPS[st.step];
    if (e.target.id === 'in') { st.a[step.id] = e.target.value; if (e.target.tagName === 'TEXTAREA') grow(e.target); }
    else if (e.target.id === 'follow') st.a[step.follow[st.a[step.id]].id] = e.target.value;
    else return;
    showErr('');
    save();
  });

  document.addEventListener('keydown', function (e) {
    if (done || e.isComposing) return;
    var t = e.target, step = STEPS[st.step];
    if (e.key === 'Enter') {
      if (t.classList && t.classList.contains('opt')) return; /* Enter on a focused option picks it */
      if (t.tagName === 'A' || (t.tagName === 'BUTTON' && t.id === 'back')) return;
      if (t.tagName === 'TEXTAREA' && (e.shiftKey || coarse)) return; /* new line */
      e.preventDefault();
      next(true);
      return;
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if ((step.kind === 'choice' || step.kind === 'multi') && t.tagName !== 'INPUT' && t.tagName !== 'TEXTAREA' && /^[a-z]$/i.test(e.key)) {
      var o = optionsOf(step)[e.key.toUpperCase().charCodeAt(0) - 65];
      if (o) { e.preventDefault(); pick(o.v); }
    }
  });

  document.getElementById('form').addEventListener('submit', function (e) { e.preventDefault(); next(true); });

  /* ---------- submit ---------- */
  function payload() {
    var a = st.a, r = cur();
    var name = String(a.full_name || '').trim().replace(/\s+/g, ' ');
    var sp = name.indexOf(' ');
    var heard = a.heard || '';
    if (FOLLOW[heard] && String(a[FOLLOW[heard].id] || '').trim()) heard += ': ' + String(a[FOLLOW[heard].id]).trim();
    var p = {
      role: a.role || 'other',
      role_label: r.label || '',
      full_name: name,
      first_name: sp > 0 ? name.slice(0, sp) : name,
      last_name: sp > 0 ? name.slice(sp + 1) : '',
      email: String(a.email || '').trim().toLowerCase(),
      phone: normPhone(a.phone) || String(a.phone || '').trim(),
      location: String(a.location || '').trim(),
      english: a.english || '',
      experience: a.experience || '',
      last_role: String(a.last_role || '').trim(),
      proof: String(a.proof || '').trim(),
      why: String(a.why || '').trim(),
      besides_money: String(a.besides_money || '').trim(),
      loom_url: a.loom_url || '',
      resume_url: a.resume_url || '',
      heard: heard,
      days: (a.days || []).join(', '),
      hours: (a.hours || []).join(', '),
      source: 'careers_page',
      page_url: location.href,
      submitted_at: new Date().toISOString()
    };
    UTM.forEach(function (k) { p[k] = utm[k] || ''; });
    p.tags = ['talent | applicant', 'talent | ' + p.role];
    return p;
  }

  function send(url, body) {
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body, keepalive: true })
      .then(function (res) { if (!res.ok) { var err = new Error('HTTP ' + res.status); err.http = true; throw err; } })
      .catch(function (err) {
        if (err && err.http) throw err;
        /* The browser blocked reading the reply (CORS). Send it again as a simple request we can't read but the App still receives. */
        return fetch(url, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=UTF-8' }, body: body, keepalive: true }).then(function () {});
      });
  }

  function setSending(on) {
    sending = on;
    var b = document.getElementById('next');
    if (!b) return;
    b.disabled = on;
    b.innerHTML = on ? '<span class="spin" aria-hidden="true"></span>Sending' : 'Submit application';
  }

  function submit() {
    var p = payload();
    var hp = (document.getElementById('hp_site') || {}).value;
    if (hp || Date.now() - st.t0 < MIN_MS) {
      console.warn('[careers] Not sent: spam guard (' + (hp ? 'hidden field was filled' : 'finished too fast') + ').');
      return finish();
    }
    var url = String(CFG.webhookUrl || '').trim();
    if (!url) {
      console.warn('[careers] window.LF_CAREERS.webhookUrl is empty in /careers/config.js, so nothing was sent. This is what would have been sent:', p);
      return finish();
    }
    setSending(true);
    send(url, JSON.stringify(p)).then(finish, function (err) {
      setSending(false);
      console.error('[careers] Submit failed:', err);
      showErr("That didn't go through. Check your connection and hit Submit again. Still stuck? Email info@leadfuse.co.");
    });
  }

  function finish() {
    done = true; sending = false;
    try { sessionStorage.removeItem(KEY); } catch (e) {}
    document.getElementById('form').hidden = true;
    document.querySelector('.top__count').textContent = 'Done';
    bar.style.width = '100%';
    progress.setAttribute('aria-valuenow', '100');
    document.getElementById('done').hidden = false;
    document.title = 'Thanks for applying | Careers at LEADFUSE';
    window.scrollTo(0, 0);
    try { document.getElementById('done-h').focus({ preventScroll: true }); } catch (e) {}
    /* Collapse the per-question history so Back leaves the page instead of stepping through blank questions. */
    if (pushed > 0) { var n = pushed; pushed = 0; history.go(-n); } else history.replaceState({ lfStep: 'done' }, '');
  }

  /* ---------- start ---------- */
  history.replaceState({ lfStep: st.step }, '');
  render({ gesture: false });
})();
