/* ═══════════════════════════════════════════════════════════════════════════
   DS-NEXUS — "Brass on paper" shared runtime (interior pages)
   Theme toggle (localStorage key "portfolio-tema", shared with the whole
   portfolio) + ambient neural-constellation background. The pre-paint theme
   GUARD stays inline in each page's <head> (it must run before first paint);
   this file only wires the toggle button and draws the canvas.
   ═══════════════════════════════════════════════════════════════════════════ */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ── dark / light (same key as the whole portfolio: the theme travels with the visitor) ──
  try {
    var root = document.documentElement;
    var btn = document.getElementById("themeToggle");
    var CLAVE = "portfolio-tema";
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    function aplicar(t) {
      if (t === "dark") { root.setAttribute("data-theme", "dark"); if (btn) btn.setAttribute("aria-label", "Switch to light mode"); }
      else { root.removeAttribute("data-theme"); if (btn) btn.setAttribute("aria-label", "Switch to dark mode"); }
    }
    function guardado() { try { return localStorage.getItem(CLAVE); } catch (e) { return null; } }
    aplicar(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        aplicar(next);
        try { localStorage.setItem(CLAVE, next); } catch (e) {}
      });
    }
    var onMq = function (e) { if (!guardado()) aplicar(e.matches ? "dark" : "light"); };
    if (mq.addEventListener) mq.addEventListener("change", onMq);
    else if (mq.addListener) mq.addListener(onMq); // older Safari / WebKit
  } catch (e) {}

  // ── ambient neural constellation (theme-aware, pauses when the tab is hidden) ──
  try {
    var cv = document.getElementById("net");
    if (!cv || reduce) return;
    var ctx = cv.getContext("2d");
    var dpr = Math.min(2, window.devicePixelRatio || 1);
    var pts = [], W = 0, H = 0, colLine = "#1E3A34", colNode = "#9A7420", rafId = null;
    function colors() {
      var cs = getComputedStyle(document.documentElement);
      colLine = (cs.getPropertyValue("--pine").trim()) || colLine;
      colNode = (cs.getPropertyValue("--brass").trim()) || colNode;
    }
    function size() {
      var r = cv.getBoundingClientRect();
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function build() {
      var N = Math.max(30, Math.min(80, Math.round(W / 28)));
      pts = [];
      for (var i = 0; i < N; i++) {
        var a = Math.random() * 6.28, sp = 0.07 + Math.random() * 0.12;
        pts.push({ x: Math.random() * W, y: Math.random() * H, ph: Math.random() * 6.28, r: Math.random() < 0.22 ? 3.2 : 2.0, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp });
      }
    }
    function frame(t) {
      ctx.clearRect(0, 0, W, H);
      for (var k = 0; k < pts.length; k++) { var p = pts[k]; p.x += p.vx; p.y += p.vy;
        if (p.x < -12) p.x = W + 12; else if (p.x > W + 12) p.x = -12;
        if (p.y < -12) p.y = H + 12; else if (p.y > H + 12) p.y = -12; }
      var maxd = Math.min(150, W * 0.14);
      ctx.strokeStyle = colLine; ctx.lineWidth = 0.7;
      for (var i = 0; i < pts.length; i++) for (var j = i + 1; j < pts.length; j++) {
        var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.hypot(dx, dy);
        if (d < maxd) { ctx.globalAlpha = 0.16 * (1 - d / maxd); ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke(); }
      }
      ctx.fillStyle = colNode;
      for (var m = 0; m < pts.length; m++) { var q = pts[m], tw = (Math.sin(t / 1000 + q.ph) + 1) / 2;
        ctx.globalAlpha = 0.25 + tw * 0.30; ctx.beginPath(); ctx.arc(q.x, q.y, q.r, 0, 6.28); ctx.fill(); }
      ctx.globalAlpha = 1; rafId = requestAnimationFrame(frame);
    }
    function start() { if (rafId == null) rafId = requestAnimationFrame(frame); }
    function stop() { if (rafId != null) { cancelAnimationFrame(rafId); rafId = null; } }
    colors(); size(); build(); cv.classList.add("on"); start();
    var rz;
    window.addEventListener("resize", function () { clearTimeout(rz); rz = setTimeout(function () { size(); build(); }, 200); }, { passive: true });
    new MutationObserver(colors).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
  } catch (e) {}
})();
