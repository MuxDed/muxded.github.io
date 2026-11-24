/* Departures Board: split-flap reveals, a live clock, and a background board
   that loses rows as you scroll until one departure remains. */
(() => {
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const rnd = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];
  const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';

  const flip = (el, ch) => {
    el.textContent = ch;
    if (!reduce && el.animate) {
      el.animate(
        [{ transform: 'rotateX(-75deg)', opacity: 0.35 }, { transform: 'none', opacity: 1 }],
        { duration: 90, easing: EASE }
      );
    }
  };

  /* ---------- live Dublin clock ---------- */
  const clock = document.querySelector('[data-clock]');
  if (clock) {
    const fmt = new Intl.DateTimeFormat('en-IE', { timeZone: 'Europe/Dublin', hour: '2-digit', minute: '2-digit', hour12: false });
    const tick = () => { const s = fmt.format(new Date()); clock.textContent = s; clock.dateTime = s; };
    tick();
    setInterval(tick, 15000);
  }

  /* ---------- split flap text ---------- */
  const flaps = [];
  document.querySelectorAll('[data-flap]').forEach((el) => {
    const text = el.textContent.trim();
    const boxed = !!el.closest('.tiles');
    el.textContent = '';
    if (!el.closest('[aria-label]')) {
      const sr = document.createElement('span');
      sr.className = 'sr';
      sr.textContent = text;
      el.append(sr);
    }
    const vis = document.createElement('span');
    vis.setAttribute('aria-hidden', 'true');
    vis.style.display = 'contents';
    const cells = [];
    text.split(/\s+/).forEach((word, wi) => {
      if (wi) {
        if (boxed) { const g = document.createElement('span'); g.className = 't gap'; vis.append(g); }
        else vis.append(document.createTextNode(' '));
      }
      const w = document.createElement('span');
      w.className = 'w';
      for (const ch of word) {
        const i = document.createElement('i');
        i.textContent = ch;
        if (boxed) {
          const t = document.createElement('span');
          t.className = 't';
          t.append(i);
          w.append(t);
        } else {
          i.className = 'ch';
          w.append(i);
        }
        cells.push({ el: i, ch });
      }
      vis.append(w);
    });
    el.append(vis);
    flaps.push({ el, cells, boxed, done: false });
  });

  const blank = (f) => f.cells.forEach((c) => {
    if (f.boxed) c.el.textContent = '';
    else c.el.style.visibility = 'hidden';
  });

  const run = (f) => {
    if (f.done) return;
    f.done = true;
    f.cells.forEach((c, i) => {
      const steps = 3 + ((Math.random() * 5) | 0);
      const start = i * 26 + Math.random() * 40;
      let n = 0;
      setTimeout(function step() {
        c.el.style.visibility = '';
        if (n < steps) { flip(c.el, rnd()); n += 1; setTimeout(step, 55); }
        else flip(c.el, c.ch);
      }, start);
    });
  };

  /* ---------- slide-in prose ---------- */
  document.querySelectorAll('.rows tbody').forEach((tb) => {
    tb.querySelectorAll('tr').forEach((tr, i) => tr.querySelectorAll('.slide').forEach((s) => s.style.setProperty('--d', `${i * 70 + 80}ms`)));
  });

  if (!reduce && 'IntersectionObserver' in window) {
    flaps.forEach(blank);
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        if (e.target._flap) run(e.target._flap);
        if (e.target._slides) e.target._slides.forEach((s) => s.classList.add('is-in'));
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.15 });
    flaps.forEach((f) => { f.el._flap = f; io.observe(f.el); });
    /* a fully clipped element never intersects, so watch its parent */
    document.querySelectorAll('.slide').forEach((s) => {
      const p = s.parentElement;
      (p._slides = p._slides || []).push(s);
      io.observe(p);
    });
  } else {
    document.querySelectorAll('.slide').forEach((s) => s.classList.add('is-in'));
  }

  /* ---------- background board ---------- */
  const bg = document.querySelector('.bgboard');
  if (!bg) return;
  const LINES = [
    'PAY 0412 SETTLED      LHR ON TIME', 'RFD 2219 REVERSED     JFK DELAYED',
    'TOK 0087 FAILOVER     BOS BOARDING', 'CCA 0170 PAID OUT     MAD LANDED',
    'WHK 3341 RECEIVED     CDG ON TIME', 'PCI 0006 ENCRYPTED    ORD GATE 12',
    'SCA 1180 VERIFIED     AMS ON TIME', 'REV 0030 CAPTURED     FAO BOARDING',
    'IDM 7712 DEDUPED      LIS LANDED', 'AWS 0410 DEPLOYED     MUC ON TIME',
    'BAT 0001 COMPLETE     ZRH DELAYED', 'SPEC 042 APPROVED     BCN ON TIME',
  ];
  const FINAL = 'NEXT  YOUR PROJECT  GATE 1  BOARDING';
  let rows = [];
  let cols = 0;
  let lastKept = -1;

  const line = (s) => (s + ' '.repeat(cols)).slice(0, cols);

  const build = () => {
    bg.textContent = '';
    const n = Math.max(5, Math.ceil(window.innerHeight / 62));
    cols = Math.ceil((window.innerWidth - 40) / 24);
    rows = [];
    for (let r = 0; r < n; r += 1) {
      const row = document.createElement('div');
      row.className = 'bgrow';
      const text = line(LINES[(r * 5) % LINES.length]);
      const cells = [];
      for (const ch of text) {
        const t = document.createElement('span');
        t.className = 't';
        const i = document.createElement('i');
        i.textContent = ch.trim();
        t.append(i);
        row.append(t);
        cells.push(i);
      }
      bg.append(row);
      rows.push({ row, cells });
    }
    lastKept = -1;
    thin();
  };

  const progress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  };

  const writeRow = (r, text) => {
    const target = line(text);
    r.cells.forEach((c, i) => {
      const ch = target[i].trim();
      c._want = ch; /* the latest write wins over flips still in flight */
      if (c.textContent === ch) return;
      if (reduce) { c.textContent = ch; return; }
      setTimeout(() => { if (c._want === ch && c.textContent !== ch) flip(c, ch); }, i * 18);
    });
  };

  /* the last departure settles into the empty band above the final board */
  const finalEl = document.querySelector('.final');
  const place = (row) => {
    if (!finalEl) return;
    const pad = parseFloat(getComputedStyle(finalEl).paddingTop) || 0;
    const band = finalEl.getBoundingClientRect().top + pad / 2 - row.offsetHeight / 2;
    const y = Math.min(window.innerHeight - row.offsetHeight - 24, Math.max(24, band));
    row.style.transform = `translateY(${Math.round(y - row.offsetTop)}px)`;
  };

  const thin = () => {
    const n = rows.length;
    const p = progress();
    const keep = Math.max(1, Math.round(n * Math.pow(1 - p, 1.6)));
    const c = Math.floor(n / 2);
    if (keep === 1) place(rows[c].row);
    if (keep === lastKept) return;
    rows.forEach((r, i) => {
      const d = Math.abs(i - c);
      const visible = keep === 1 ? i === c : d <= (keep - 1) / 2;
      r.row.classList.toggle('is-gone', !visible);
      r.row.classList.toggle('is-last', keep === 1 && i === c);
    });
    if (keep === 1 && lastKept !== 1) writeRow(rows[c], cols >= FINAL.length ? FINAL : 'YOUR PROJECT');
    if (keep > 1 && lastKept === 1) {
      writeRow(rows[c], LINES[(c * 5) % LINES.length]);
      rows[c].row.style.transform = '';
    }
    lastKept = keep;
  };

  let queued = false;
  window.addEventListener('scroll', () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; thin(); });
  }, { passive: true });

  let resizeT;
  window.addEventListener('resize', () => { clearTimeout(resizeT); resizeT = setTimeout(build, 200); });
  build();

  if (reduce) return;
  /* departures keep updating; the board slows as it converges */
  setInterval(() => {
    if (document.hidden || lastKept <= 1) return;
    if (Math.random() < progress() * 0.8) return;
    const live = rows.filter((r) => !r.row.classList.contains('is-gone'));
    const r = live[(Math.random() * live.length) | 0];
    if (!r) return;
    writeRow(r, LINES[(Math.random() * LINES.length) | 0]);
  }, 1400);
})();
