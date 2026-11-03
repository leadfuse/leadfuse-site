/* LEADFUSE Home. Small vanilla script: no framework, no build step. */
(function () {
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasIO = 'IntersectionObserver' in window;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  /* Mobile menu (shared nav) */
  var nav = $('#nav'), burger = $('#burger');
  if (nav && burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $('#menu').addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    });
  }

  /* utm_* / fbclid on the Home URL ride along to /apply/, so a lead from a tagged link keeps its source. */
  try {
    var q = new URLSearchParams(location.search), keep = new URLSearchParams();
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'].forEach(function (k) {
      var v = (q.get(k) || '').trim(); if (v) keep.set(k, v);
    });
    var qs = keep.toString();
    if (qs) $$('.js-apply').forEach(function (a) { a.href = '/apply/?' + qs; });
  } catch (e) {}

  /* Reveal on scroll */
  var rv = $$('.rv');
  if (!hasIO || reduce) rv.forEach(function (el) { el.classList.add('in'); });
  else {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
    rv.forEach(function (el) { ro.observe(el); });
  }

  /* Stats count up once, when visible */
  function countUp(el) {
    var to = +el.getAttribute('data-count'), pre = el.getAttribute('data-pre') || '', post = el.getAttribute('data-post') || '';
    var t0 = null, dur = 1600;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + Math.round(to * e) + post;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  var counters = $$('[data-count]');
  if (hasIO && !reduce) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { co.observe(el); });
  }

  /* "In his words": the quote nearest the middle of the screen lights up */
  var quotes = $$('.quote');
  if (hasIO && !reduce) {
    var qo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle('on', e.isIntersecting); });
    }, { rootMargin: '-38% 0px -38% 0px' });
    quotes.forEach(function (el) { qo.observe(el); });
  }

  /* Fast wins strip: arrow buttons for mouse users */
  var wins = $('#wins'), prev = $('#wins-prev'), next = $('#wins-next');
  if (wins && prev && next) {
    function by() { var c = wins.querySelector('.win'); return c ? c.getBoundingClientRect().width + 14 : 320; }
    function sync() {
      prev.disabled = wins.scrollLeft < 8;
      next.disabled = wins.scrollLeft + wins.clientWidth > wins.scrollWidth - 8;
    }
    prev.addEventListener('click', function () { wins.scrollBy({ left: -by(), behavior: reduce ? 'auto' : 'smooth' }); });
    next.addEventListener('click', function () { wins.scrollBy({ left: by(), behavior: reduce ? 'auto' : 'smooth' }); });
    wins.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    sync();
  }

  /* Screenshot viewer */
  var dlg = $('#shot'), img = $('#shot-img'), cap = $('#shot-cap');
  $$('[data-shot]').forEach(function (b) {
    b.addEventListener('click', function () {
      img.src = b.getAttribute('data-shot');
      img.width = +b.getAttribute('data-w'); img.height = +b.getAttribute('data-h');
      img.alt = b.getAttribute('data-alt') || '';
      cap.textContent = b.getAttribute('data-cap') || '';
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    });
  });
  function closeDlg() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  $('#shot-x').addEventListener('click', closeDlg);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDlg(); });

  /* How it works: the phone shows the step you are reading (desktop), or plays through on its own (phone) */
  var screens = $$('.scr'), steps = $$('.sstep'), dots = $$('#dots i'), cur = 1;
  function show(n) {
    if (n === cur) return;
    cur = n;
    screens.forEach(function (s) { s.classList.toggle('on', +s.getAttribute('data-scr') === n); });
    steps.forEach(function (s) { s.classList.toggle('on', +s.getAttribute('data-step') === n); });
    dots.forEach(function (d, i) { d.classList.toggle('on', i + 1 === n); });
  }
  var wide = matchMedia('(min-width: 960px)'), timer = null, stageSeen = false;
  if (reduce) { /* no motion: show the text thread, the clearest single picture */
    cur = 0; show(3);
  } else if (hasIO) {
    var so = new IntersectionObserver(function (es) {
      if (!wide.matches) return;
      es.forEach(function (e) { if (e.isIntersecting) show(+e.target.parentNode.getAttribute('data-step')); });
    }, { rootMargin: '-42% 0px -42% 0px' });
    steps.forEach(function (s) { so.observe(s.querySelector('.sstep__in') || s); });

    var stage = $('.story__stage');
    var po = new IntersectionObserver(function (es) { stageSeen = es[0].isIntersecting; }, { threshold: 0.4 });
    po.observe(stage);
    timer = setInterval(function () {
      if (wide.matches || !stageSeen || document.hidden) return;
      show(cur % 4 + 1);
    }, 3800);
  }

  /* Calculator: what one customer costs, and what each $1 on ads brings back */
  var fT = $('#c-ticket'), fS = $('#c-spend'), fC = $('#c-cust');
  var oCac = $('#o-cac'), oRet = $('#o-ret'), oSay = $('#o-say');
  function num(el) { var v = parseFloat(el.value); return isFinite(v) && v > 0 ? v : 0; }
  function money(v, dec) {
    return '$' + v.toLocaleString('en-US', { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  }
  function paint(range) {
    var min = +range.min, max = +range.max, v = Math.min(max, Math.max(min, +range.value));
    range.style.setProperty('--p', ((v - min) / (max - min) * 100) + '%');
  }
  function word(el, on) { el.classList.toggle('out__v--word', on); }
  function calc() {
    word(oCac, false); word(oRet, false);
    var t = num(fT), s = num(fS), c = Math.floor(num(fC)), rev = t * c;
    if (c === 0) {
      oCac.textContent = s > 0 ? 'No customers' : '$0'; word(oCac, s > 0);
      oRet.textContent = '$0.00';
      oSay.textContent = s > 0 ? 'You spent ' + money(s) + ' and the ads brought no paying customers. That is the leak to fix first.' : 'Put in your numbers above.';
      return;
    }
    oCac.textContent = money(s / c);
    if (s === 0) {
      oRet.textContent = 'No spend'; word(oRet, true);
      oSay.textContent = 'Your ads brought in ' + money(rev) + ' last month with no ad spend entered.';
      return;
    }
    var r = rev / s;
    oRet.textContent = money(r, 2);
    var line = 'Your ads brought in ' + money(rev) + ' last month. ';
    if (r < 1) line += 'Right now the ads cost more than they bring back.';
    else if (r < 3) line += 'They pay for themselves, but not by much once you count your job costs.';
    else line += 'That is a healthy return. The real question is whether it holds when you spend more.';
    oSay.textContent = line;
  }
  $$('#calc-form input[type=range]').forEach(function (r) {
    var box = document.getElementById(r.getAttribute('data-for'));
    r.addEventListener('input', function () { box.value = r.value; paint(r); calc(); });
    box.addEventListener('input', function () { r.value = box.value; paint(r); calc(); });
    paint(r);
  });
  if (fT) calc();
})();
