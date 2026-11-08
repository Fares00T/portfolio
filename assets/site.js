document.documentElement.classList.add('js');
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.rv');
  if (!('IntersectionObserver' in window) || reduce) { els.forEach(function (e) { e.classList.add('in'); }); }
  else {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px', threshold: .06 });
    els.forEach(function (e) { io.observe(e); });
  }
  var nav = document.getElementById('nav'), first = document.querySelector('main > *');
  if (nav && first) new IntersectionObserver(function (e) { nav.classList.toggle('scrolled', !e[0].isIntersecting); }, { rootMargin: '-64px 0px 0px 0px' }).observe(first);
})();

(function () {
  var hero = document.querySelector('.cs-hero'), tl = document.getElementById('tl3d');
  if (!hero || !tl || matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(hover: hover)').matches) return;
  hero.addEventListener('pointermove', function (e) {
    var r = hero.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    tl.style.setProperty('--tx', (x * 16).toFixed(2) + 'deg'); tl.style.setProperty('--ty', (-y * 10).toFixed(2) + 'deg');
  });
  hero.addEventListener('pointerleave', function () { tl.style.setProperty('--tx', '0deg'); tl.style.setProperty('--ty', '0deg'); });
})();
(function () {
  // end the case-study timeline line exactly on the last dot
  var ol = document.querySelector('.tl3d ol'); if (!ol) return;
  function fit() { var last = ol.lastElementChild; if (last) ol.style.setProperty('--tail', (last.offsetHeight - 20) + 'px'); }
  fit(); addEventListener('resize', fit); if (document.fonts) document.fonts.ready.then(fit);
})();
