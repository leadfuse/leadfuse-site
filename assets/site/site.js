/* LEADFUSE site: shared behavior for /services/, /results/, /resources/.
   Mobile menu, fade-in on scroll, count-up numbers, the compare tabs and the screenshot lightbox.
   No libraries. Everything still reads fine with JS off. */
(function () {
  var doc = document, root = doc.documentElement;
  var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile menu */
  var nav = doc.getElementById('nav'), burger = doc.getElementById('burger');
  if (nav && burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    doc.getElementById('menu').addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    });
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
    });
  }

  /* Count-up: <span data-count="100" data-prefix="" data-suffix="+">100+</span>. The final number is already in the HTML. */
  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function countUp(el) {
    var end = parseFloat(el.getAttribute('data-count')), pre = el.getAttribute('data-prefix') || '', suf = el.getAttribute('data-suffix') || '';
    if (still || !isFinite(end)) return;
    var dur = 1600, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
      el.textContent = pre + fmt(Math.round(end * e)) + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = pre + '0' + suf;
    requestAnimationFrame(step);
  }

  /* Fade-in and count-up when a block reaches the screen */
  var targets = doc.querySelectorAll('[data-reveal],[data-count]');
  if ('IntersectionObserver' in window && !still) {
    root.classList.add('js');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target;
        el.classList.add('is-in');
        if (el.hasAttribute('data-count')) countUp(el);
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* Compare tabs (phone): switch which column of the table shows */
  doc.querySelectorAll('[data-tabs]').forEach(function (box) {
    var tabs = box.querySelectorAll('[role="tab"]');
    function pick(tab) {
      tabs.forEach(function (t) { var on = t === tab; t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1; });
      box.setAttribute('data-show', tab.getAttribute('data-col'));
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { pick(t); });
      t.addEventListener('keydown', function (e) {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        var n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
        pick(n); n.focus(); e.preventDefault();
      });
    });
  });

  /* Lightbox: any <button data-lb="group" data-full="url" data-cap="text"> opens it */
  var items = doc.querySelectorAll('[data-lb]');
  if (!items.length) return;
  var lb = doc.createElement('div');
  lb.className = 'lb'; lb.hidden = true;
  lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Screenshot');
  lb.innerHTML =
    '<span class="lb__count" aria-live="polite"></span>' +
    '<figure class="lb__fig"><img class="lb__img" alt=""><figcaption class="lb__cap"></figcaption></figure>' +
    '<button class="lb__btn lb__prev" type="button" aria-label="Previous screenshot"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M12.5 4 6.5 10l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '<button class="lb__btn lb__next" type="button" aria-label="Next screenshot"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m7.5 4 6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '<button class="lb__btn lb__close" type="button" aria-label="Close"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 3l12 12M15 3 3 15" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>';
  doc.body.appendChild(lb);
  var img = lb.querySelector('.lb__img'), cap = lb.querySelector('.lb__cap'), count = lb.querySelector('.lb__count');
  var bPrev = lb.querySelector('.lb__prev'), bNext = lb.querySelector('.lb__next'), bClose = lb.querySelector('.lb__close');
  var group = [], idx = 0, opener = null;

  function show(i) {
    idx = (i + group.length) % group.length;
    var el = group[idx], thumb = el.querySelector('img');
    img.src = el.getAttribute('data-full');
    img.alt = thumb ? thumb.alt : '';
    cap.textContent = el.getAttribute('data-cap') || '';
    count.textContent = (idx + 1) + ' / ' + group.length;
    var many = group.length > 1;
    bPrev.hidden = !many; bNext.hidden = !many; count.hidden = !many;
  }
  function open(el) {
    var g = el.getAttribute('data-lb');
    group = Array.prototype.filter.call(items, function (x) { return x.getAttribute('data-lb') === g; });
    opener = el;
    show(group.indexOf(el));
    lb.hidden = false;
    doc.body.classList.add('lb-lock');
    requestAnimationFrame(function () { lb.classList.add('is-open'); });
    bClose.focus();
  }
  function close() {
    lb.classList.remove('is-open');
    doc.body.classList.remove('lb-lock');
    setTimeout(function () { lb.hidden = true; img.removeAttribute('src'); }, still ? 0 : 260);
    if (opener) opener.focus();
  }
  items.forEach(function (el) { el.addEventListener('click', function () { open(el); }); });
  bClose.addEventListener('click', close);
  bPrev.addEventListener('click', function () { show(idx - 1); });
  bNext.addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb || e.target.classList.contains('lb__fig')) close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'ArrowRight' && group.length > 1) show(idx + 1);
    if (e.key === 'ArrowLeft' && group.length > 1) show(idx - 1);
    if (e.key === 'Tab') { /* keep focus inside the viewer */
      var f = [bPrev, bNext, bClose].filter(function (b) { return !b.hidden; });
      var at = f.indexOf(doc.activeElement);
      if (e.shiftKey && at <= 0) { f[f.length - 1].focus(); e.preventDefault(); }
      else if (!e.shiftKey && at === f.length - 1) { f[0].focus(); e.preventDefault(); }
    }
  });
  /* Swipe: left or right moves, a swipe down closes */
  var sx = 0, sy = 0;
  lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  lb.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) { if (group.length > 1) show(idx + (dx < 0 ? 1 : -1)); else close(); }
    else if (dy > 70 && Math.abs(dy) > Math.abs(dx)) close();
  }, { passive: true });
})();
