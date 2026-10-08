(function () {
  const root = document.body.dataset.root || ".";
  const page = document.body.dataset.page || "";
  const mark = `${root}/mark.svg`;

  const zh = (codes) => String.fromCharCode.apply(null, codes);
  const t = {
    product: zh([0x4ea7, 0x54c1]),
    citta: zh([0x5c5e, 0x4e8e, 0x4f60, 0x7684]) + " AI",
    cosmo: zh([0x4f60, 0x7684, 0x667a, 0x80fd, 0x8f7d, 0x4f53]),
    spaces: zh([0x4eba, 0x4e0e]) + " AI " + zh([0x534f, 0x4f5c]),
    workspace: "AI-native " + zh([0x5de5, 0x4f5c, 0x7a7a, 0x95f4]),
    explore: zh([0x63a2, 0x7d22]),
    scenes: zh([0x573a, 0x666f]),
    stories: zh([0x6545, 0x4e8b]),
    about: zh([0x5173, 0x4e8e]),
    start: zh([0x5f00, 0x59cb, 0x4f7f, 0x7528]),
    download: zh([0x4e0b, 0x8f7d]),
    menu: zh([0x6253, 0x5f00, 0x83dc, 0x5355]),
    resources: zh([0x8d44, 0x6e90]),
    docs: zh([0x6587, 0x6863]),
    help: zh([0x5e2e, 0x52a9, 0x4e2d, 0x5fc3]),
    company: zh([0x516c, 0x53f8]),
    careers: zh([0x52a0, 0x5165, 0x6211, 0x4eec]),
    contact: zh([0x8054, 0x7cfb]),
    legal: zh([0x6cd5, 0x5f8b]),
    privacy: zh([0x9690, 0x79c1]),
    terms: zh([0x6761, 0x6b3e]),
    // Footer CTA. Deliberately not the brand tagline or the hero line: those
    // already play on the homepage, and the closing card should give a reason
    // to act rather than restate the thesis a third time.
    // 你的判断，可以被复用。
    ctaLead: zh([0x4f60, 0x7684, 0x5224, 0x65ad, 0xff0c, 0x53ef, 0x4ee5, 0x88ab, 0x590d, 0x7528, 0x3002]),
    // 从第一个 Cosmo 开始。
    ctaStep: zh([0x4ece, 0x7b2c, 0x4e00, 0x4e2a]) + " Cosmo " + zh([0x5f00, 0x59cb, 0x3002])
  };

  const header = `
    <a class="wordmark" href="${root}/index.html">
      <img src="${mark}" width="28" height="28" alt="">
      <span>Symbion</span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="${root}/product/citta.html">Citta</a>
      <a href="${root}/product/cosmo.html">Cosmo</a>
      <a href="${root}/product/spaces.html">Spaces</a>
      <a href="${root}/company/about.html">${t.about}</a>
      <a class="nav-extra" href="${root}/download.html">${t.download}</a>
      <a class="nav-extra" href="${root}/login.html">${t.start}</a>
    </nav>
    <div class="nav-end">
      <a class="btn btn-ghost" href="${root}/download.html">${t.download}</a>
      <a class="btn btn-ink" href="${root}/login.html">${t.start}</a>
      <button class="burger" type="button" id="burger" aria-label="${t.menu}"><span></span><span></span></button>
    </div>`;

  const footer = `
    <div class="foot-wash" aria-hidden="true"></div>
    <div class="foot-inner">
      <div class="foot-top">
        <nav class="foot-cols" aria-label="${zh([0x9875, 0x811a, 0x5bfc, 0x822a])}">
          <div class="foot-col">
            <h4>${t.product}</h4>
            <a href="${root}/product/citta.html">Citta</a>
            <a href="${root}/product/cosmo.html">Cosmo</a>
            <a href="${root}/product/spaces.html">Spaces</a>
            <a href="${root}/download.html">${t.download} App</a>
          </div>
          <div class="foot-col">
            <h4>${t.company}</h4>
            <a href="${root}/company/about.html">${t.about}</a>
            <a href="${root}/company/contact.html">${t.contact}</a>
            <a href="https://www.symbionspace.com">symbionspace.com</a>
          </div>
          <div class="foot-col">
            <h4>${t.legal}</h4>
            <a href="${root}/legal/privacy.html">${t.privacy}</a>
            <a href="${root}/legal/terms.html">${t.terms}</a>
          </div>
        </nav>
      </div>
      <p class="foot-legal">&copy; 2026 Symbion. All rights reserved.</p>
      <aside class="foot-card">
        <p class="foot-card-copy">
          <span class="foot-card-lead">${t.ctaLead}</span>
          <span class="foot-card-step">${t.ctaStep}</span>
        </p>
      </aside>
      <div class="foot-wordmark" aria-hidden="true">
        <span class="foot-wordmark-text">symbion</span>
        <img class="foot-wordmark-glyph" src="${mark}" alt="">
      </div>
    </div>`;

  const navEl = document.getElementById("site-nav");
  const footEl = document.getElementById("site-foot");
  if (navEl) navEl.innerHTML = header;
  if (footEl) footEl.innerHTML = footer;

  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a, .nav-end a.btn-ghost").forEach((a) => {
    const file = (a.getAttribute("href") || "").split("/").pop().toLowerCase();
    if (!file || file !== here) return;
    a.classList.add("is-current");
    a.setAttribute("aria-current", "page");
  });

  const burger = document.getElementById("burger");
  if (burger && navEl) {
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-controls", "navLinks");
    const setMenu = (open) => {
      navEl.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    };
    burger.addEventListener("click", () => setMenu(!navEl.classList.contains("open")));
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape" || !navEl.classList.contains("open")) return;
      setMenu(false);
      burger.focus();
    });
    navEl.querySelectorAll(".nav-links a").forEach((a) => {
      a.addEventListener("click", () => setMenu(false));
    });
  }

  const reveals = [...document.querySelectorAll("[data-reveal]")];
  if (reveals.length) {
    const reduceReveal = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceReveal.matches) {
      reveals.forEach((el) => el.classList.add("is-in"));
    } else if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add("is-in"));
    }
  }

  document.querySelectorAll(".drop").forEach((d) => {
    d.addEventListener("toggle", () => {
      if (d.open) document.querySelectorAll(".drop").forEach((x) => { if (x !== d) x.removeAttribute("open"); });
    });
    if (window.matchMedia("(pointer: fine)").matches) {
      let leaveTimer = 0;
      d.addEventListener("mouseenter", () => {
        window.clearTimeout(leaveTimer);
        document.querySelectorAll(".drop").forEach((x) => { if (x !== d) x.removeAttribute("open"); });
        d.setAttribute("open", "");
      });
      d.addEventListener("mouseleave", () => {
        leaveTimer = window.setTimeout(() => d.removeAttribute("open"), 120);
      });
    }
  });

  const form = document.getElementById("start-form");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    form.hidden = true;
    document.getElementById("form-ok").hidden = false;
  });

  const authEmail = document.getElementById("auth-email");
  document.getElementById("auth-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (authEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(authEmail.value)) return;
    sessionStorage.setItem("sb-veil", "1");
    window.location.href = `${root}/index.html`;
  });
  document.querySelectorAll("[data-sso]").forEach((btn) => {
    btn.addEventListener("click", () => {
      sessionStorage.setItem("sb-veil", "1");
      window.location.href = `${root}/index.html`;
    });
  });

  const steps = [...document.querySelectorAll(".step")];
  const nowTitle = document.getElementById("citta-now-title");
  const nowNote = document.getElementById("citta-now-note");
  function setStep(i) {
    steps.forEach((s, n) => {
      s.classList.toggle("on", n === i);
      s.classList.toggle("done", n < i);
    });
    const current = steps[i];
    if (current && nowTitle) {
      const label = current.querySelector("span:not(.n)");
      nowTitle.textContent = label ? label.textContent.trim() : "";
    }
    if (current && nowNote) nowNote.textContent = current.dataset.note || "";
  }
  let stepIndex = 0;
  let stepTimer = 0;
  function playSteps() {
    window.clearInterval(stepTimer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 720px)").matches) return;
    stepTimer = window.setInterval(() => {
      stepIndex = (stepIndex + 1) % steps.length;
      setStep(stepIndex);
    }, 2400);
  }
  steps.forEach((s, i) => s.addEventListener("click", () => {
    stepIndex = i;
    setStep(i);
    playSteps();
  }));
  if (steps.length) {
    setStep(0);
    playSteps();
  }

  const layers = [...document.querySelectorAll(".cosmo-layer")];
  const layerTitle = document.getElementById("cosmo-now-title");
  const layerNote = document.getElementById("cosmo-now-note");
  const layerStage = document.querySelector("[data-page='cosmo'] .media-slot-stage");
  const layerCap = document.querySelector("[data-page='cosmo'] .media-slot figcaption");
  function setLayer(i) {
    layers.forEach((el, n) => {
      const on = n === i;
      el.classList.toggle("is-on", on);
      el.setAttribute("aria-selected", on ? "true" : "false");
      el.setAttribute("tabindex", on ? "0" : "-1");
    });
    const current = layers[i];
    if (!current) return;
    const en = current.querySelector(".layer-en");
    const name = en ? en.textContent.trim() : "";
    if (layerTitle) layerTitle.textContent = name;
    if (layerNote) layerNote.textContent = current.dataset.note || "";
    if (layerStage) layerStage.setAttribute("data-label", name);
    if (layerCap) layerCap.textContent = name + " 影像";
  }
  let layerIndex = 0;
  let layerTimer = 0;
  function playLayers() {
    window.clearInterval(layerTimer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 720px)").matches) return;
    layerTimer = window.setInterval(() => {
      layerIndex = (layerIndex + 1) % layers.length;
      setLayer(layerIndex);
    }, 2800);
  }
  const layerList = layers[0]?.parentElement;
  if (layerList) layerList.setAttribute("role", "tablist");
  layers.forEach((el, i) => {
    el.setAttribute("role", "tab");
    el.addEventListener("click", () => {
      layerIndex = i;
      setLayer(i);
      playLayers();
    });
    // Arrow keys move between layers, and any deliberate focus stops the
    // carousel so a keyboard user is not fighting the auto-advance.
    el.addEventListener("keydown", (e) => {
      const step = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      layerIndex = (i + step + layers.length) % layers.length;
      setLayer(layerIndex);
      layers[layerIndex].focus();
    });
    el.addEventListener("focus", () => {
      window.clearInterval(layerTimer);
      layerIndex = i;
      setLayer(i);
    });
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      el.addEventListener("mouseenter", () => {
        window.clearInterval(layerTimer);
        layerIndex = i;
        setLayer(i);
      });
      el.addEventListener("mouseleave", playLayers);
    }
  });
  if (layers.length) {
    setLayer(0);
    playLayers();
  }

  if (page === "home") {
    document.body.classList.add("nav-dark");
    const phoneQ = window.matchMedia("(max-width: 720px)");
    let phoneNow = phoneQ.matches;
    phoneQ.addEventListener("change", () => {
      if (phoneQ.matches !== phoneNow) window.location.reload();
    });
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const veil = document.createElement("div");
  veil.className = "page-veil";
  veil.setAttribute("aria-hidden", "true");
  document.body.appendChild(veil);

  const veilMode = sessionStorage.getItem("sb-veil");
  if (veilMode) {
    sessionStorage.removeItem("sb-veil");
    document.documentElement.classList.add("veil-in");
    if (veilMode === "fly") document.documentElement.classList.add("veil-fly");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => document.documentElement.classList.add("veil-settle"));
    });
    window.setTimeout(() => {
      document.documentElement.classList.remove("veil-in", "veil-settle", "veil-fly");
    }, 900);
  }

  function sameOrigin(href) {
    try {
      const url = new URL(href, window.location.href);
      return url.origin === window.location.origin;
    } catch {
      return false;
    }
  }

  document.addEventListener("click", (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest("a[href]");
    if (!a || a.target === "_blank" || a.hasAttribute("download") || a.dataset.noVeil != null) return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
    if (!sameOrigin(href)) return;
    const next = new URL(href, window.location.href);
    if (next.pathname === window.location.pathname && next.hash && next.search === window.location.search) return;
    if (next.href === window.location.href) return;
    if (reduce.matches) return;
    // Nav labels should change pages, not lift off and fly toward the next title.
    if (a.closest(".nav")) return;

    e.preventDefault();

    // Shared-element handoff: the clicked label detaches, flies to where the
    // next page's title will sit, and the veil closes behind it.
    // textContent is doubled on char-flip links (base + hover copy per glyph),
    // so the aria-label holds the only clean copy of the text.
    const label = (a.dataset.flyLabel || a.getAttribute("aria-label") || a.textContent || "").trim();
    if (window.gsap && label && label.length <= 24 && !a.closest(".site-foot")) {
      const rect = a.getBoundingClientRect();
      const cs = getComputedStyle(a);
      const fly = document.createElement("span");
      fly.className = "page-fly";
      fly.setAttribute("aria-hidden", "true");
      fly.textContent = label;
      document.body.appendChild(fly);
      sessionStorage.setItem("sb-veil", "fly");
      veil.classList.add("is-fly");
      gsap.set(fly, {
        left: rect.left,
        top: rect.top,
        fontSize: cs.fontSize,
        fontFamily: cs.fontFamily,
        fontWeight: cs.fontWeight,
        letterSpacing: cs.letterSpacing,
        opacity: 1
      });
      a.style.visibility = "hidden";
      const tl = gsap.timeline();
      tl.to(veil, { opacity: 1, duration: 0.55, ease: "power2.inOut" }, 0);
      tl.to(fly, {
        left: "var(--pad)",
        top: "calc(var(--header) + 5rem)",
        fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
        letterSpacing: "-.02em",
        duration: 0.8,
        ease: "power3.inOut"
      }, 0.08);
      tl.add(() => { window.location.href = next.href; }, 0.78);
      return;
    }

    sessionStorage.setItem("sb-veil", "1");
    const x = (e.clientX / Math.max(window.innerWidth, 1)) * 100;
    const y = (e.clientY / Math.max(window.innerHeight, 1)) * 100;
    veil.style.setProperty("--vx", `${x}%`);
    veil.style.setProperty("--vy", `${y}%`);
    veil.classList.add("on");
    window.setTimeout(() => { window.location.href = next.href; }, 520);
  });

  function mountHandScramble(section) {
    const leftEl = section.querySelector("#ascii-left");
    const rightEl = section.querySelector("#ascii-right");
    if (!leftEl || !rightEl) return;
    const POOLS = [
      " ",
      "\u00b7.,",
      ":;`-~^",
      "=+<>?!:;",
      "|/\\()[]{}\u00ab\u00bb",
      "\u00f7\u00d7\u00b1\u2248\u2260\u2264\u2265\u221e\u2211\u220f\u221a\u222b",
      "\u00a4\u2020\u2021\u00a7\u00b6\u00a9\u00ae\u2122\u00b0\u00ac",
      "%&#$@\u00a5\u20ac\u00a3\u00a2"
    ];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(pointer: fine)");
    let seed = 42;
    function rand() {
      seed = (seed * 16807 + 0) % 2147483647;
      return seed / 2147483647;
    }
    function imageToAscii(img, cols) {
      seed = 42;
      const c = document.createElement("canvas");
      const ctx = c.getContext("2d");
      const rows = Math.round(cols * (img.height / img.width));
      c.width = cols;
      c.height = rows;
      ctx.drawImage(img, 0, 0, cols, rows);
      const data = ctx.getImageData(0, 0, cols, rows).data;
      const lines = [];
      const poolGrid = [];
      for (let y = 0; y < rows; y++) {
        let line = "";
        const poolRow = [];
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4;
          const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
          if (a < 15) { line += " "; poolRow.push(-1); continue; }
          let brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
          brightness *= a / 255;
          let pi = Math.floor(brightness * (POOLS.length - 1) * 0.8);
          pi = Math.min(pi, POOLS.length - 1);
          const pool = POOLS[pi];
          line += pool[Math.floor(rand() * pool.length)];
          poolRow.push(pi);
        }
        lines.push(line);
        poolGrid.push(poolRow);
      }
      return { text: lines.join("\n"), poolGrid };
    }
    function setupHover(preEl, poolGrid, accent) {
      if (!fine.matches || reduce.matches) return;
      const mark = accent || "#74c1e6";
      let origLines = null;
      let origGrid = null;
      const radius = 2.5;
      const cols = poolGrid[0] ? poolGrid[0].length : 1;
      const rows = poolGrid.length;
      const noise = [];
      const hitTime = [];
      const cellDuration = [];
      for (let ny = 0; ny < rows; ny++) {
        const nr = [], ht = [], cd = [];
        for (let nx = 0; nx < cols; nx++) {
          const h = (Math.sin(nx * 12.9898 + ny * 78.233) * 43758.5453 % 1 + 1) % 1;
          nr.push(h * 5 - 2.5);
          ht.push(0);
          cd.push(h > 0.5 ? 200 : 100);
        }
        noise.push(nr);
        hitTime.push(ht);
        cellDuration.push(cd);
      }
      let animating = false;
      function init() {
        origLines = preEl.textContent.split("\n");
        origGrid = origLines.map((l) => l.split(""));
      }
      preEl.addEventListener("mousemove", (e) => {
        if (!origGrid) init();
        const rect = preEl.getBoundingClientRect();
        const charW = rect.width / cols;
        const charH = rect.height / rows;
        const mxC = (e.clientX - rect.left) / charW;
        const myC = (e.clientY - rect.top) / charH;
        const col = Math.floor(mxC);
        const row = Math.floor(myC);
        if (row < 0 || col < 0 || row >= rows || col >= cols) return;
        if (poolGrid[row][col] <= 0) return;
        const now = performance.now();
        const maxR = radius + 3;
        const yMin = Math.max(0, Math.floor(myC - maxR));
        const yMax = Math.min(rows - 1, Math.ceil(myC + maxR));
        const xMin = Math.max(0, Math.floor(mxC - maxR));
        const xMax = Math.min(cols - 1, Math.ceil(mxC + maxR));
        for (let y = yMin; y <= yMax; y++) {
          for (let x = xMin; x <= xMax; x++) {
            if (poolGrid[y][x] <= 0) continue;
            const dx = x - mxC, dy = y - myC;
            const rad = radius + noise[y][x];
            if (dx * dx + dy * dy < rad * rad) hitTime[y][x] = now;
          }
        }
        if (!animating) { animating = true; tick(); }
      });
      function esc(ch) {
        if (ch === "<") return "&lt;";
        if (ch === ">") return "&gt;";
        if (ch === "&") return "&amp;";
        return ch;
      }
      function tick() {
        const now = performance.now();
        let anyActive = false;
        let html = "";
        for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
            const pi = poolGrid[y][x];
            if (pi < 0 || pi === 0) { html += " "; continue; }
            const elapsed = now - hitTime[y][x];
            if (hitTime[y][x] > 0 && elapsed < cellDuration[y][x]) {
              anyActive = true;
              const idx = (POOLS.length - 1) - pi;
              const pool = POOLS[idx];
              const ch = pool[Math.floor(Math.random() * pool.length)];
              html += '<span style="color:#05070a;background:' + mark + '">' + esc(ch) + "</span>";
            } else {
              html += esc(origGrid[y][x]);
            }
          }
          html += "\n";
        }
        preEl.innerHTML = html;
        if (anyActive) requestAnimationFrame(tick);
        else {
          animating = false;
          if (origLines) preEl.textContent = origLines.join("\n");
        }
      }
    }
    function loadAndRender(src, el, accent) {
      const img = new Image();
      img.onload = () => {
        const result = imageToAscii(img, 80);
        el.textContent = result.text;
        setupHover(el, result.poolGrid, accent);
      };
      img.src = src;
    }
    const root = document.body.dataset.root || ".";
    loadAndRender(`${root}/assets/hand-left.png`, leftEl, "#dceef7");
    loadAndRender(`${root}/assets/hand-right.png`, rightEl, "#74c1e6");
  }

  function mountOrbit(root) {
    const nodes = [...root.querySelectorAll(".orbit-node")];
    const host = root.closest(".hero-copy") || root;
    const en = host.querySelector(".orbit-en");
    const zh = host.querySelector(".orbit-zh");
    const tracer = root.querySelector(".orbit-tracer");
    if (!nodes.length || !en || !zh) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    let i = -1;
    let timer = 0;
    let len = 0;
    let scrambleTween;
    if (tracer && tracer.getTotalLength) {
      len = tracer.getTotalLength();
      tracer.style.strokeDasharray = `80 ${Math.max(len, 1)}`;
    }
    function scramble(el, next) {
      if (reduce || !window.gsap) {
        el.textContent = next;
        return;
      }
      const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      const obj = { p: 0 };
      if (scrambleTween) scrambleTween.kill();
      scrambleTween = gsap.to(obj, {
        p: 1,
        duration: 0.48,
        ease: "power2.out",
        onUpdate() {
          const p = obj.p;
          const n = next.length;
          let out = "";
          for (let k = 0; k < n; k++) {
            const ch = next[k];
            if (k < p * n) out += ch;
            else if (/[A-Za-z]/.test(ch)) out += glyphs[(k * 7 + Math.floor(p * 31)) % glyphs.length];
            else out += ch;
          }
          el.textContent = out;
        },
        onComplete() { el.textContent = next; }
      });
    }
    function restart() {
      if (reduce) return;
      clearInterval(timer);
      timer = setInterval(() => go(i + 1, false), 4200);
    }
    function go(n, fromUser) {
      n = (n + nodes.length) % nodes.length;
      if (n === i) {
        if (fromUser) {
          clearInterval(timer);
          if (!fine) restart();
        }
        return;
      }
      const first = i < 0;
      i = n;
      nodes.forEach((node, idx) => node.classList.toggle("is-on", idx === i));
      nodes.forEach((node) => node.setAttribute("aria-pressed", node.classList.contains("is-on") ? "true" : "false"));
      const node = nodes[i];
      if (first) {
        en.textContent = node.dataset.en || "";
        zh.textContent = node.dataset.zh || "";
      } else {
        scramble(en, node.dataset.en || "");
        zh.textContent = node.dataset.zh || "";
        if (window.gsap && !reduce) {
          gsap.killTweensOf(zh);
          gsap.fromTo(zh, { autoAlpha: 0.35, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" });
        }
      }
      if (tracer && len) tracer.style.strokeDashoffset = String(-(len / nodes.length) * i);
      if (fromUser) {
        clearInterval(timer);
        if (!fine) restart();
      }
    }
    nodes.forEach((node, idx) => {
      node.setAttribute("aria-pressed", idx === 0 ? "true" : "false");
      node.addEventListener("click", () => go(idx, true));
      if (fine) node.addEventListener("mouseenter", () => go(idx, true));
    });
    root.addEventListener("mouseenter", () => clearInterval(timer));
    root.addEventListener("mouseleave", restart);
    go(0, false);
    restart();
  }

  const homeOrbit = document.querySelector("[data-orbit]");
  if (homeOrbit) mountOrbit(homeOrbit);

  function meltFade(el, f, blur) {
    if (!el) return;
    if (f >= 1) {
      el.style.filter = "none";
      el.style.opacity = "1";
    } else if (f <= 0) {
      el.style.filter = "none";
      el.style.opacity = "0";
    } else {
      el.style.filter = `blur(${Math.min(blur / f - blur, 100)}px)`;
      el.style.opacity = `${Math.pow(f, 0.4)}`;
    }
  }

  function mountMeltHero(root) {
    if (!root) return null;
    const out = root.querySelector("#melt-out");
    const inn = root.querySelector("#melt-in");
    const goo = root.querySelector("#melt-goo");
    const live = root.querySelector("#melt-live");
    if (!out || !inn || !goo) return null;
    const phrases = [
      "人与 <span class=\"melt-en\">AI</span>，<br><em>共生</em>智能。",
      "人定义<br><em>智能</em>。"
    ];
    const blur = 18;
    const soften = 0.35;
    let lastI = -1;
    const spoken = (s) => s.replace(/<[^>]+>/g, "").replace(/\n/g, "");
    const apply = (progress) => {
      const max = phrases.length - 1;
      const x = Math.max(0, Math.min(1, progress)) * max;
      const i = Math.min(max, Math.floor(x + 1e-6));
      let t = 1;
      if (i < max) {
        const local = x - i;
        const hold = 0.22;
        const settle = 0.86;
        if (local <= hold) t = 0;
        else if (local >= settle) t = 1;
        else t = (local - hold) / (settle - hold);
      }
      const from = phrases[i];
      const to = phrases[Math.min(max, i + 1)];
      if (i !== lastI) {
        out.innerHTML = from;
        inn.innerHTML = to;
        lastI = i;
      }
      if (i >= max || t <= 0.002) {
        meltFade(out, 1, blur);
        meltFade(inn, 0, blur);
        goo.style.filter = "none";
        if (live) live.textContent = spoken(from);
        return;
      }
      if (t >= 0.998) {
        meltFade(out, 0, blur);
        meltFade(inn, 1, blur);
        goo.style.filter = "none";
        if (live) live.textContent = spoken(to);
        return;
      }
      meltFade(out, 1 - t, blur);
      meltFade(inn, t, blur);
      goo.style.filter = `url(#name-goo) blur(${soften}px)`;
      if (live) live.textContent = spoken(t < 0.5 ? from : to);
    };
    apply(0);
    return apply;
  }

  const meltApply = mountMeltHero(document.querySelector("#hero.hero-melt"));

  const mountIndexHover = () => {
    const index = document.querySelector(".home-index");
    if (!index || !window.gsap) return;
    const items = gsap.utils.toArray(".home-index-item");
    if (!items.length) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const OPEN = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    const closed = (fromLeft) => fromLeft
      ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
      : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    const sideOf = (item, e) => {
      const r = item.getBoundingClientRect();
      return (e.clientX - r.left) < r.width * 0.5;
    };
    items.forEach((item) => {
      const fill = item.querySelector(".home-index-fill");
      if (!fill) return;
      gsap.set(fill, { clipPath: closed(true) });
      const paint = (open, fromLeft, instant) => {
        item.classList.toggle("is-on", open);
        gsap.to(fill, {
          clipPath: open ? OPEN : closed(fromLeft),
          duration: instant || reduce ? 0 : 0.5,
          ease: "power3.inOut",
          overwrite: "auto"
        });
      };
      // Keyboard gets the same sweep as the pointer, coarse devices included.
      item.addEventListener("focus", () => paint(true, true));
      item.addEventListener("blur", () => paint(false, true));
      if (!fine) return;
      item.addEventListener("mouseenter", (e) => paint(true, sideOf(item, e)));
      item.addEventListener("mouseleave", (e) => paint(false, sideOf(item, e)));
    });
    if (fine) index.classList.add("is-live");
  };

  if (!window.gsap) {
    const creation = document.querySelector("#creation");
    if (creation) {
      mountHandScramble(creation);
      creation.querySelectorAll(".creation-hand").forEach((el) => { el.style.transform = "none"; });
      creation.classList.add("is-armed");
    }
    document.getElementById("intro-bg")?.remove();
    document.getElementById("transition-panel")?.remove();
    document.body.classList.remove("is-intro");
    const navFallback = document.getElementById("site-nav");
    if (navFallback) {
      navFallback.classList.add("is-ready", "is-docked");
      navFallback.style.top = "0px";
    }
    const heroFallback = document.getElementById("hero");
    if (heroFallback) heroFallback.style.opacity = "1";
    return;
  }
  const homeCreation = document.querySelector("#creation");
  if (homeCreation) mountHandScramble(homeCreation);
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // Lenis drives the scroll position; ScrollTrigger reads from it instead of
  // the native scroll event, so pinned/scrubbed timelines stay in sync.
  let lenis = null;
  if (window.Lenis && !reduce.matches && window.matchMedia("(min-width: 721px)").matches) {
    lenis = new Lenis({ lerp: 0.075, wheelMultiplier: 0.9 });
    // Must not contain the substring "lenis": Lenis rewrites the root
    // className with a plain string replace and would corrupt the token.
    document.documentElement.classList.add("sb-smooth");
    if (window.ScrollTrigger) lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    // Native smooth-scroll and hash jumps have to go through Lenis now.
    document.addEventListener("click", (e) => {
      if (e.defaultPrevented || e.button !== 0) return;
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header"), 10) || 56) - 12 });
    });
    window.__sbLenis = lenis;
  }

  mountIndexHover();

  // Copy resolves word by word as it crosses the upper third of the viewport:
  // each word owns a short scrubbed trigger, so reading pace drives the reveal.
  const mountWordReveal = () => {
    if (!window.ScrollTrigger) return;
    const hosts = document.querySelectorAll([
      "[data-words]",
      "main.page > h1",
      "main.page > .lead",
      ".prose > p",
      ".prose > h2",
      ".case > p",
      ".band .wrap > h2",
      ".band .wrap > .lead"
    ].join(","));
    if (!hosts.length) return;
    const coarse = !window.matchMedia("(min-width: 721px)").matches;
    hosts.forEach((host) => {
      if (host.dataset.wordsDone) return;
      host.dataset.wordsDone = "1";
      // Per-glyph spans always read as separate words, whatever their display,
      // so the real sentence is kept for assistive tech and the animated copy
      // is hidden from it.
      const label = host.textContent;
      const shell = document.createElement("span");
      shell.setAttribute("aria-hidden", "true");
      while (host.firstChild) shell.appendChild(host.firstChild);
      const sr = document.createElement("span");
      sr.className = "sr-only";
      sr.textContent = label;
      host.appendChild(sr);
      host.appendChild(shell);
      const walker = document.createTreeWalker(shell, NodeFilter.SHOW_TEXT);
      const texts = [];
      while (walker.nextNode()) {
        if (walker.currentNode.nodeValue.trim()) texts.push(walker.currentNode);
      }
      // Chinese has no word spaces, so CJK resolves one glyph at a time while
      // Latin runs stay whole. Whitespace is left as plain text so lines wrap.
      const token = /[\u3000-\u303f\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]|[^\s\u3000-\u303f\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]+|\s+/g;
      texts.forEach((node) => {
        const frag = document.createDocumentFragment();
        (node.nodeValue.match(token) || []).forEach((chunk) => {
          if (!chunk.trim()) {
            frag.appendChild(document.createTextNode(chunk));
            return;
          }
          const span = document.createElement("span");
          span.className = "word";
          span.textContent = chunk;
          frag.appendChild(span);
        });
        node.parentNode.replaceChild(frag, node);
      });
      const words = host.querySelectorAll(".word");
      if (!words.length) return;
      gsap.set(words, coarse ? { opacity: 0.18 } : { opacity: 0.18, filter: "blur(6px)" });
      const resolved = {
        opacity: 1,
        ...(coarse ? {} : { filter: "blur(0px)" })
      };
      // Copy already on screen at load has no scroll distance left to scrub
      // against, so it plays once on its own clock instead.
      if (host.getBoundingClientRect().top < window.innerHeight * 0.85) {
        gsap.to(words, {
          ...resolved,
          duration: 0.5,
          ease: "power2.out",
          stagger: { amount: Math.min(0.9, words.length * 0.02) },
          delay: 0.15
        });
        return;
      }
      // One scrubbed timeline per block: a trigger per glyph would be hundreds.
      gsap.to(words, {
        ...resolved,
        ease: "none",
        duration: 0.25,
        stagger: { amount: 0.75 },
        scrollTrigger: { trigger: host, start: "top 88%", end: "top 52%", scrub: true }
      });
    });
  };

  // Each character carries a second copy of itself; hovering wipes the copy up
  // over the original, so the label re-types itself left to right.
  const mountCharFlip = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const targets = document.querySelectorAll(".nav-links a, .foot-col a, .nav-end a.btn-ghost");
    targets.forEach((el) => {
      if (el.dataset.flip || el.children.length) return;
      const raw = el.textContent;
      if (!raw.trim() || raw.length > 24) return;
      el.dataset.flip = "1";
      el.classList.add("chr-flip");
      // Per-character spans make assistive tech spell the label out, so the
      // real text moves to aria-label and the glyphs become presentational.
      if (!el.getAttribute("aria-label")) el.setAttribute("aria-label", raw.trim());
      el.textContent = "";
      const tops = [];
      [...raw].forEach((ch) => {
        const wrap = document.createElement("span");
        wrap.className = "ch-wrap";
        wrap.setAttribute("aria-hidden", "true");
        const base = document.createElement("span");
        base.className = "ch-base";
        base.textContent = ch === " " ? "\u00a0" : ch;
        const top = document.createElement("span");
        top.className = "ch-flip-top";
        top.setAttribute("aria-hidden", "true");
        top.textContent = ch === " " ? "\u00a0" : ch;
        wrap.appendChild(base);
        wrap.appendChild(top);
        el.appendChild(wrap);
        tops.push(top);
      });
      gsap.set(tops, { clipPath: "inset(100% 0 0 0)" });
      const tl = gsap.timeline({ paused: true });
      tops.forEach((top, i) => {
        tl.to(top, { clipPath: "inset(0% 0 0 0)", duration: 0.45, ease: "power3.out" }, i * 0.028);
      });
      el.addEventListener("mouseenter", () => tl.play());
      el.addEventListener("mouseleave", () => tl.reverse());
      el.addEventListener("focus", () => tl.play());
      el.addEventListener("blur", () => tl.reverse());
    });
  };

  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    mountWordReveal();
    mountCharFlip();
    gsap.utils.toArray(".reveal").forEach((el) => {
      const kids = el.querySelectorAll(":scope > .kicker, :scope > .head-split, :scope > h2, :scope > .lead, :scope > p, :scope > .split, :scope > .product-frame, :scope > .cosmo-map, :scope > .roles, :scope > .chain, :scope > .chat, :scope > .os, :scope > .tools, :scope > .cases, :scope > .people, :scope > .cta-row, :scope > a, :scope > .note, :scope > div");
      gsap.from(kids.length ? kids : el, {
        y: 22, autoAlpha: 0, duration: 0.85, stagger: 0.06, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 86%" }
      });
    });

    const splitIntoChars = (el) => {
      const raw = el.textContent;
      el.innerHTML = "";
      const inners = [];
      [...raw].forEach((ch) => {
        const outer = document.createElement("span");
        outer.className = "ch-mask";
        const inner = document.createElement("span");
        inner.className = "ch";
        inner.textContent = ch === " " ? "\u00a0" : ch;
        outer.appendChild(inner);
        el.appendChild(outer);
        inners.push(inner);
      });
      return inners;
    };

    const bootHomeIntro = () => {
      const nameLayer = document.getElementById("name-layer");
      const pContent = document.getElementById("preloader-content");
      const pGong = document.getElementById("name-gong");
      const pSym = document.getElementById("name-sym");
      const introBg = document.getElementById("intro-bg");
      const hero = document.getElementById("hero");
      const nav = document.getElementById("site-nav");
      const tagline = document.getElementById("hero-tagline");
      const line = document.getElementById("hero-line");
      const wash = document.getElementById("hero-wash");
      if (!pContent || !pGong || !pSym || !hero) return false;

      const gongChars = splitIntoChars(pGong);
      const symChars = splitIntoChars(pSym);
      const allChars = gongChars.concat(symChars);

      const homeEdge = () => {
        const raw = getComputedStyle(document.body).getPropertyValue("--home-edge") || "2rem";
        const n = parseFloat(raw);
        if (!n) return 32;
        return raw.includes("rem") ? n * parseFloat(getComputedStyle(document.documentElement).fontSize) : n;
      };
      // The two words only, plus room for the italic overhang on the final
      // glyph. Measured off the words rather than pContent because pContent now
      // spans the viewport regardless of how wide the glyphs actually are.
      const getTotalWidth = () => {
        const w = ((pGong && pGong.offsetWidth) || 0) + ((pSym && pSym.offsetWidth) || 0);
        return (w || 1) * 1.03;
      };
      // Everything that belongs to the resting hero — tagline, rule, nav —
      // clears out on the same beat, the first .04 of the hero score.
      const heroExitPx = () => Math.round(window.innerHeight * 3 * 0.04);
      const nameBottomPad = () => {
        const navH = (nav && nav.offsetHeight) || 56;
        return navH + homeEdge() * 2;
      };
      const computeSettle = () => {
        // Read back off the rendered box: --hero-gutter is a plain length today
        // but sits next to clamp()-valued gutters, and a custom-property lookup
        // hands those back unresolved.
        const pad = parseFloat(getComputedStyle(pContent).paddingLeft) || 0;
        const scale = Math.min(1, (window.innerWidth - pad * 2) / Math.max(getTotalWidth(), 1));
        const y = window.innerHeight / 2 - nameBottomPad() - (pContent.offsetHeight * scale) / 2;
        return { scale, x: 0, y };
      };
      const placeAtBottom = () => {
        gsap.set(pContent, Object.assign({ force3D: true }, computeSettle()));
      };
      // How far each word sits inboard of its gutter when the title is still
      // one centred lockup. The intro shows that shape first and only parts to
      // the gutters afterwards, so the split reads as a move rather than as
      // the layout the title happened to load in.
      const computeJoin = () => {
        const pad = parseFloat(getComputedStyle(pContent).paddingLeft) || 0;
        const gongW = (pGong && pGong.offsetWidth) || 0;
        const symW = (pSym && pSym.offsetWidth) || 0;
        const fs = parseFloat(getComputedStyle(pGong).fontSize) || 0;
        const restGap = window.innerWidth - pad * 2 - gongW - symW;
        // .34em apart is what the pair used to be set at as a single lockup.
        return Math.max(0, (restGap - fs * 0.34) / 2);
      };

      const startWash = () => {
        if (!wash || wash.dataset.armed === "1") return;
        wash.dataset.armed = "1";
        const container = document.getElementById("hero-canvas");
        if (!container || !window.CoreRenderer || !window._heroProjectData) return;
        const data = JSON.parse(JSON.stringify(window._heroProjectData));
        (data.layers || []).forEach((layer) => {
          if (layer.src && !/^(https?:|blob:|data:)/.test(layer.src)) {
            layer.src = new URL(layer.src, window.location.href).href;
          }
        });
        const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
        const blobUrl = URL.createObjectURL(blob);
        container.setAttribute("data-cr-project-src", blobUrl);
        window.CoreRenderer.init().then(() => {
          URL.revokeObjectURL(blobUrl);
          window.dispatchEvent(new MouseEvent("mousemove", {
            clientX: window.innerWidth * 0.68,
            clientY: window.innerHeight * 0.4,
            bubbles: true
          }));
        }).catch(() => {
          URL.revokeObjectURL(blobUrl);
        });
      };

      const mountNavRise = () => {
        if (!nav || !window.ScrollTrigger) return;
        const wrap = document.getElementById("scroll-wrap") || hero;
        const startTop = () => Math.max(window.innerHeight - ((nav.offsetHeight) || 56) - homeEdge(), 0);
        const lerp = (a, b, t) => a + (b - a) * t;
        const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
        // Smoothstep on a sub-range of the rise, so every one of these curves
        // starts and ends at zero velocity instead of cornering.
        const ramp = (p, a, b) => {
          const t = clamp01((p - a) / (b - a));
          return t * t * (3 - 2 * t);
        };
        const applyNavScale = (p) => {
          nav.style.setProperty("--nav-fs", lerp(17.6, 15, p) + "px");
          nav.style.setProperty("--nav-wm", lerp(18.4, 17, p) + "px");
          nav.style.setProperty("--nav-gap", lerp(24, 8, p) + "px");
          nav.style.setProperty("--nav-logo", lerp(32, 28, p) + "px");
          // Frost is absent over the lockup and washes in across the back half
          // of the trip, so it reads as the bar arriving rather than as a
          // panel that was always there.
          nav.style.setProperty("--nav-glass", ramp(p, 0.45, 1).toFixed(4));
          // Labels leave almost immediately and only return once docked. They
          // are fully out well before the bar reaches the title, which is the
          // whole point: the crossing is never seen.
          const ink = clamp01(1 - ramp(p, 0.03, 0.26) + ramp(p, 0.7, 1));
          nav.style.setProperty("--nav-ink", ink.toFixed(4));
          nav.classList.toggle("is-ink-out", ink < 0.06);
          // Flipped while the labels are still invisible, so the pill-button
          // morph that rides on this class is never caught mid-change.
          nav.classList.toggle("is-docked", p > 0.66);
        };
        applyNavScale(0);
        gsap.set(nav, { top: startTop() });
        ScrollTrigger.create({
          trigger: wrap,
          // Held at the bottom until the bar has faded out, so it never lurches
          // upward mid-fade. The whole rise then happens while it is invisible,
          // which is fine: all it has to do is be docked by the time the hands
          // bring it back.
          start: () => "top top-=" + heroExitPx(),
          end: () => "+=" + Math.round(window.innerHeight * 0.8),
          scrub: 0.6,
          invalidateOnRefresh: true,
          // The inline top written at mount outranks the CSS calc() forever, so
          // a viewport-height change (resize, rotate, mobile browser chrome)
          // would otherwise leave the bar stranded mid-lockup.
          onRefresh: (self) => {
            nav.style.top = (startTop() * (1 - self.progress)) + "px";
            applyNavScale(self.progress);
          },
          onUpdate: (self) => {
            const p = self.progress;
            nav.style.top = (startTop() * (1 - p)) + "px";
            applyNavScale(p);
          },
          onLeaveBack: () => {
            nav.style.top = startTop() + "px";
            applyNavScale(0);
          }
        });
      };

      // The bar leaves the moment the page moves and does not come back until
      // the hands are on screen, so the split, the frame, the phrase and the
      // black beat after them all play with nothing laid over the top.
      //
      // Deliberately not a tween on the scrubbed hero timeline: that timeline
      // ends at 300vh, and any ScrollTrigger.refresh() re-applies its end
      // state, which would snap the bar back to hidden while the hands are
      // already on screen.
      const mountNavVisibility = () => {
        if (!nav || !window.ScrollTrigger) return;
        const wrap = document.getElementById("scroll-wrap");
        if (!wrap) return;
        // Gone as soon as the page moves, on the same beat as the rule, and it
        // stays gone for the whole title sequence. The hands sit immediately
        // after the wrap, which is never pinned, so its box stays a stable
        // reference to measure against.
        const hideAt = heroExitPx;
        const showAt = () => wrap.offsetTop + wrap.offsetHeight;
        let shown = null;
        const apply = (instant) => {
          const y = window.scrollY;
          const next = y < hideAt() || y >= showAt();
          if (next === shown) return;
          shown = next;
          if (instant) gsap.set(nav, { autoAlpha: next ? 1 : 0 });
          else gsap.to(nav, {
            autoAlpha: next ? 1 : 0,
            duration: next ? 0.45 : 0.28,
            ease: "power2.out",
            overwrite: "auto"
          });
        };
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: () => apply(false),
          onRefresh: () => { shown = null; apply(true); }
        });
      };

      // Scroll score for the hero. One continuous move, linear throughout —
      // the long overlapping spans are what create the sense of pause, not
      // literal holds between cuts.
      //
      //   .00-.04  tagline + rule leave
      //   .00-.14  lockup rises to dead centre
      //   .14-.82  frame opens from zero to full screen while 共生 / symbion.
      //            slide out left and right, fully faded by .53
      //   .14-.45  scrim darkens the wash
      //   .62-.71  phrase resolves
      //   .90-1.0  phrase, frame and scrim leave
      // Nav visibility is not part of this score; see mountNavVisibility.
      const mountScrollReveal = () => {
        if (!window.ScrollTrigger) return;
        const revealWrap = document.getElementById("reveal-image-wrap");
        const panel = document.getElementById("reveal-panel");
        const scrim = document.getElementById("reveal-scrim");
        const phraseEl = document.getElementById("reveal-phrase");
        const wrap = document.getElementById("scroll-wrap");
        if (!revealWrap || !panel || !wrap) return;

        const mobile = window.innerWidth <= 768;
        if (phraseEl) {
          const raw = phraseEl.textContent;
          phraseEl.innerHTML = [...raw].map((ch) =>
            "<span class=\"rp-char\">" + (ch === " " ? "\u00a0" : ch) + "</span>"
          ).join("");
        }
        const phraseChars = phraseEl ? phraseEl.querySelectorAll(".rp-char") : [];

        const sc = Number(gsap.getProperty(pContent, "scale")) || 1;
        const exitLeft = ((mobile ? -60 : -80) / sc) + "vw";
        const exitRight = ((mobile ? 60 : 80) / sc) + "vw";

        gsap.set([pGong, pSym], { x: 0, opacity: 1, force3D: true });
        gsap.set(revealWrap, { autoAlpha: 0 });
        gsap.set(panel, { scale: 0, autoAlpha: 1 });
        if (scrim) gsap.set(scrim, { opacity: 0 });
        gsap.set(phraseChars, mobile ? { opacity: 0, y: 14 } : { opacity: 0, y: 14, filter: "blur(8px)" });

        const tl = gsap.timeline({ paused: true });

        // Rhythm comes from long linear spans, not from stepped beats with
        // holds: every tween is ease "none" and the scrub does the smoothing,
        // so scroll distance maps straight onto motion. The frame opens while
        // the name is still leaving, which is what makes the two read as one
        // move rather than a sequence of cuts.
        // Both gone inside the first ~80px of scroll: the rule wiping away is
        // the signal that the page has started moving.
        if (tagline) tl.fromTo(tagline, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.04, ease: "none" }, 0);
        if (line) tl.fromTo(line, { autoAlpha: 1, scaleX: 1 }, { autoAlpha: 0, scaleX: 0, duration: 0.04, ease: "none" }, 0);

        tl.fromTo(pContent,
          { y: () => computeSettle().y },
          { y: 0, duration: 0.14, ease: "none" },
          0);

        // The lockup reaches centre and parts immediately, so the split is
        // what the first half-screen of scroll is about. OPEN_FOR absorbs the
        // change to keep the frame full at .82 as before.
        const OPEN_AT = 0.14;
        const OPEN_FOR = 0.68;

        tl.to(revealWrap, { autoAlpha: 1, duration: 0.01, ease: "none" }, OPEN_AT);
        tl.fromTo(panel, { scale: 0 }, { scale: 1, duration: OPEN_FOR, ease: "none" }, OPEN_AT);
        if (scrim) tl.fromTo(scrim, { opacity: 0 }, { opacity: 0.88, duration: OPEN_FOR * 0.45, ease: "none" }, OPEN_AT);

        tl.fromTo(pGong, { x: 0 }, { x: exitLeft, duration: OPEN_FOR, ease: "none" }, OPEN_AT);
        tl.fromTo(pSym, { x: 0 }, { x: exitRight, duration: OPEN_FOR, ease: "none" }, OPEN_AT);
        // Opacity lands well before the travel does, otherwise a sliver of the
        // italic s is still clinging to the right edge when the phrase starts.
        tl.fromTo([pGong, pSym], { opacity: 1 }, { opacity: 0, duration: OPEN_FOR * 0.58, ease: "none" }, OPEN_AT);
        if (nameLayer) tl.set(nameLayer, { autoAlpha: 0 }, OPEN_AT + OPEN_FOR * 0.6);

        if (phraseChars.length) {
          tl.to(phraseChars, {
            opacity: 1,
            y: 0,
            ...(mobile ? {} : { filter: "blur(0px)" }),
            duration: 0.09,
            ease: "none",
            stagger: { each: 0.007, from: "start" }
          }, 0.62);
        }

        // Nav visibility lives in mountNavVisibility, not here: it has to stay
        // gone past the end of this timeline, all the way to the hands.

        if (phraseChars.length) tl.to(phraseChars, { opacity: 0, duration: 0.05, ease: "none" }, 0.9);
        tl.to(panel, { scale: 1.05, autoAlpha: 0, duration: 0.08, ease: "none" }, 0.91);
        if (scrim) tl.to(scrim, { opacity: 0, duration: 0.08, ease: "none" }, 0.91);
        tl.to(revealWrap, { autoAlpha: 0, duration: 0.01, ease: "none" }, 0.995);
        // Dumped early, while the scrim is already at full strength and the
        // panel is mid-open, so the fade itself is never seen. It has to be
        // gone well before the sticky hero unsticks at 230vh, otherwise the
        // blue plate visibly slides up the screen on the way out.
        if (wash) tl.to(wash, { opacity: 0, duration: 0.1, ease: "none" }, 0.54);

        ScrollTrigger.create({
          trigger: wrap,
          start: "top top",
          // Pinned to 300vh rather than "bottom bottom" so the wrap's height
          // sets only the length of the black beat that follows, and can be
          // tuned without changing the pace of anything above.
          end: () => "+=" + Math.round(window.innerHeight * 3),
          scrub: 0.5,
          invalidateOnRefresh: true,
          animation: tl
        });
      };

      const finish = () => {
        document.body.classList.remove("is-intro");
        document.documentElement.style.overflow = "";
        if (introBg) introBg.remove();
        if (nameLayer) {
          // Drop below the nav (50) now that the intro curtain is gone.
          nameLayer.style.zIndex = "45";
        }
        if (nav) nav.classList.add("is-ready");
        placeAtBottom();
        startWash();
        mountNavRise();
        mountScrollReveal();
        mountNavVisibility();
        if (window.ScrollTrigger) ScrollTrigger.refresh();
        // Webfonts may still be swapping in; re-fit once the real faces land.
        // fonts.ready alone is not enough: the title faces arrive via an
        // @import, so they are not in document.fonts when it resolves and the
        // lockup would be measured against a fallback. Ask for them by name.
        if (document.fonts && document.fonts.ready) {
          const titleFaces = ["500 200px \"Noto Sans SC\"", "italic 400px Newsreader"];
          Promise.all(titleFaces.map((f) => document.fonts.load(f).catch(() => null)))
            .then(() => document.fonts.ready)
            .then(() => {
              if (window.scrollY < 8) placeAtBottom();
              if (window.ScrollTrigger) ScrollTrigger.refresh();
            });
        }
      };

      gsap.set([pGong, pSym], { opacity: 1 });
      gsap.set(allChars, { yPercent: 110 });
      gsap.set(pContent, { x: 0, transformOrigin: "50% 50%", force3D: true });
      gsap.set(nav, { autoAlpha: 0 });
      if (tagline) gsap.set(tagline, { opacity: 0, clipPath: "inset(0 0 100% 0)" });
      if (line) gsap.set(line, { opacity: 0, scaleX: 0, transformOrigin: "left center" });
      if (introBg) gsap.set(introBg, { autoAlpha: 1 });

      document.body.classList.add("is-intro");
      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0);

      const master = gsap.timeline({ delay: 0.18, onComplete: finish });
      master.add(() => {
        gsap.set(pContent, { x: 0, transformOrigin: "50% 50%" });
        // Joined before the glyphs are let out of their masks, so the title is
        // never seen in the parted layout it actually lives in.
        const d = computeJoin();
        gsap.set(pGong, { x: d, force3D: true });
        gsap.set(pSym, { x: -d, force3D: true });
      });
      master.to(allChars, {
        yPercent: 0,
        duration: 0.42,
        ease: "power3.out",
        stagger: { each: 0.022, from: "center" }
      });
      master.to({}, { duration: 0.22 });
      master.add(() => startWash());
      // Part to the gutters. from is a function so the joined width is read at
      // the moment this starts, not at build time when the webfonts may still
      // be swapping and both words measure narrower than they will end up.
      master.fromTo([pGong, pSym],
        { x: (i) => (i === 0 ? computeJoin() : -computeJoin()) },
        { x: 0, duration: 0.86, ease: "power3.inOut", force3D: true });
      master.to({}, { duration: 0.1 });
      master.add(() => {
        gsap.set(pContent, { transformOrigin: "50% 50%" });
        const settle = computeSettle();
        return gsap.to(pContent, {
          scale: settle.scale,
          x: settle.x,
          y: settle.y,
          duration: 0.8,
          ease: "power3.inOut",
          force3D: true
        });
      });
      if (introBg) master.to(introBg, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, "<+=0.08");
      if (tagline) {
        master.to(tagline, {
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.9,
          ease: "power3.inOut"
        }, "-=0.28");
      }
      if (nav) master.to(nav, { autoAlpha: 1, duration: 0.7, ease: "power3.out" }, "-=0.65");
      if (line) {
        master.fromTo(line, { opacity: 1, scaleX: 0 }, { scaleX: 1, duration: 0.8, ease: "power3.inOut" }, "<");
      }
      window.addEventListener("resize", () => {
        if (document.body.classList.contains("is-intro")) return;
        placeAtBottom();
      });
      return true;
    };

    const phoneHome = page === "home" && window.matchMedia("(max-width: 720px)").matches;
    if (phoneHome) {
      document.documentElement.classList.add("is-phone");
      document.body.classList.add("is-phone");
      document.getElementById("intro-bg")?.remove();
      document.body.classList.remove("is-intro");
      document.documentElement.style.overflow = "";
      const hero = document.getElementById("hero");
      const nameLayer = document.getElementById("name-layer");
      const tagline = document.getElementById("hero-tagline");
      if (hero && nameLayer && tagline) hero.insertBefore(nameLayer, tagline.nextSibling);
      const nav = document.getElementById("site-nav");
      if (nav) {
        nav.classList.add("is-ready", "is-docked");
        nav.style.top = "0px";
        gsap.set(nav, { autoAlpha: 1 });
      }
      ["name-gong", "name-sym"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.style.opacity = "1";
      });
      if (tagline) {
        tagline.style.opacity = "1";
        tagline.style.clipPath = "none";
      }
      return;
    }

    let introStarted = false;
    const startIntro = () => {
      if (introStarted) return;
      introStarted = true;
      bootHomeIntro();
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(startIntro);
    window.setTimeout(startIntro, 900);

    const index = document.querySelector(".home-index");
    if (index) {
      gsap.from(index.querySelectorAll(".home-index-label"), {
        yPercent: 110,
        duration: 1,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: index, start: "top 78%" }
      });
    }

    const creation = document.querySelector("#creation");
    const handL = document.querySelector(".creation-hand.is-left");
    const handR = document.querySelector(".creation-hand.is-right");
    if (creation && handL && handR) {
      const aside = document.querySelector("#creation-aside");
      gsap.set(handL, { xPercent: -108, x: 0, force3D: true });
      gsap.set(handR, { xPercent: 108, x: 0, force3D: true });
      if (aside) gsap.set(aside, { autoAlpha: 0, y: 10 });
      creation.classList.add("is-armed");
      const meet = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: creation,
          start: "top top",
          // 217% against a timeline of duration 1.55 keeps the hands meeting
          // over the same 140% of scroll they always did, and spends the
          // remaining 77% holding the finished frame.
          end: "+=217%",
          pin: true,
          scrub: 1.25,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true
        }
      });
      meet
        .to(handL, { xPercent: 0, duration: 1 }, 0)
        .to(handR, { xPercent: 0, duration: 1 }, 0);
      if (aside) meet.to(aside, { autoAlpha: 1, y: 0, duration: 0.28 }, 0.72);
      // Dead air on purpose: the hands stay met and the mouse parallax is
      // still live, so the section dwells instead of leaving on arrival.
      meet.to({}, { duration: 0.55 });
      const asciiLeftPre = document.getElementById("ascii-left");
      const asciiRightPre = document.getElementById("ascii-right");
      let mx = 0, my = 0, sx = 0, sy = 0;
      window.addEventListener("mousemove", (e) => {
        mx = (e.clientX / Math.max(window.innerWidth, 1) - 0.5) * 2;
        my = (e.clientY / Math.max(window.innerHeight, 1) - 0.5) * 2;
      }, { passive: true });
      const parallaxLoop = () => {
        sx += (mx - sx) * 0.05;
        sy += (my - sy) * 0.05;
        if (creation.classList.contains("is-armed")) {
          const lx = Math.min(0, sx * -15 - 15);
          const rx = Math.max(0, sx * 15 + 15);
          const py = sy * -10;
          if (asciiLeftPre) asciiLeftPre.style.transform = "translate(" + lx + "px," + py + "px)";
          if (asciiRightPre) asciiRightPre.style.transform = "translate(" + rx + "px," + py + "px)";
        }
        requestAnimationFrame(parallaxLoop);
      };
      parallaxLoop();
    }
  });
  mm.add("(prefers-reduced-motion: reduce)", () => {
    const creation = document.querySelector("#creation");
    if (creation) creation.classList.add("is-armed");
    if (meltApply) meltApply(0);
    document.getElementById("intro-bg")?.remove();
    document.getElementById("transition-panel")?.remove();
    document.body.classList.remove("is-intro");
    const navReduce = document.getElementById("site-nav");
    if (navReduce) {
      navReduce.classList.add("is-ready", "is-docked");
      navReduce.style.top = "0px";
    }
    const heroReduce = document.getElementById("hero");
    if (heroReduce) heroReduce.style.opacity = "1";
    const gongReduce = document.getElementById("name-gong");
    const symReduce = document.getElementById("name-sym");
    if (gongReduce) gongReduce.style.opacity = "1";
    if (symReduce) symReduce.style.opacity = "1";
    const tagReduce = document.getElementById("hero-tagline");
    const lineReduce = document.getElementById("hero-line");
    if (tagReduce) {
      tagReduce.style.opacity = "1";
      tagReduce.style.clipPath = "none";
    }
    if (lineReduce) {
      lineReduce.style.opacity = "1";
      lineReduce.style.transform = "none";
    }
  });
})();
