document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  //  Theme: auto by time, with manual toggle
  let manualOverride = null;

  function getAutoDark() {
    const h = new Date().getHours();
    return h >= 18 || h < 6;
  }

  function applyTheme(dark) {
    body.classList.toggle("dark", dark);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = "◐";
  }

  function updateTheme() {
    if (manualOverride === null) applyTheme(getAutoDark());
  }

  updateTheme();
  setInterval(updateTheme, 60000);

  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const isDark = body.classList.contains("dark");
      manualOverride = !isDark;
      applyTheme(manualOverride);
    });
  }

  //  Terminal typing animation
  const lines = [
    {
      t: '<span class="t-prompt">&gt; </span><span class="t-kw">import</span> math, plot, draw',
      ms: 0,
    },
    { t: "", ms: 350 },
    {
      t: '<span class="t-prompt">&gt; </span><span class="t-kw">let</span> x = math.linspace(<span class="t-num">0</span>, <span class="t-num">2</span> * math.PI, <span class="t-num">100</span>)',
      ms: 600,
    },
    {
      t: '<span class="t-prompt">&gt; </span><span class="t-kw">let</span> y = math.sin(x)',
      ms: 1000,
    },
    { t: "", ms: 1300 },
    {
      t: '<span class="t-prompt">&gt; </span><span class="t-kw">let</span> ctx = draw.canvas(<span class="t-num">520</span>, <span class="t-num">480</span>, <span class="t-str">"PiLang demo"</span>)',
      ms: 1550,
    },
    {
      t: '<span class="t-prompt">&gt; </span><span class="t-kw">let</span> chart = plot.chart(ctx)',
      ms: 1950,
    },
    {
      t: '<span class="t-prompt">&gt; </span>plot.line(chart, x, y, <span class="t-str">"#4a9fe8"</span>)',
      ms: 2350,
    },
    {
      t: '<span class="t-prompt">&gt; </span>plot.title(chart, <span class="t-str">"Draw line"</span>)',
      ms: 2700,
    },
    { t: '<span class="t-prompt">&gt; </span>plot.show(chart)', ms: 3050 },
    { t: '<span class="t-prompt">&gt; </span>draw.run(ctx)', ms: 3350 },
    {
      t: '<span class="t-out">[canvas opened — sine wave rendered]</span>',
      ms: 3900,
    },
  ];

  const out = document.getElementById("typed-output");
  if (out) {
    lines.forEach(({ t, ms }) => {
      setTimeout(() => {
        const d = document.createElement("div");
        d.innerHTML = t === "" ? "&nbsp;" : t;
        out.appendChild(d);
      }, ms + 500);
    });
  }

  //  Scroll fade-in
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("visible");
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  //  Active nav link
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  window.addEventListener(
    "scroll",
    () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const atBottom = scrollBottom >= pageHeight - 10;

      let cur = "";

      if (atBottom) {
        // Force the last section active when at the bottom
        cur = sections[sections.length - 1].id;
      } else {
        sections.forEach((s) => {
          if (window.scrollY >= s.offsetTop - 80) cur = s.id;
        });
      }

      navLinks.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
      });
    },
    { passive: true },
  );
});

//  Pi-Script carousel
const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".carousel-dot");
if (track && dots.length) {
  let current = 0;
  const total = dots.length;
  function goTo(n) {
    current = (n + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }
  setInterval(() => goTo(current + 1), 5000);
}
