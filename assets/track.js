// Counts CV downloads in Google Analytics as a "cv_download" event.
// One listener covers every CV link on the page: buttons, the preview image, footers.
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href*="Fares_Tinakiche_CV"]');
  if (!a || typeof window.gtag !== 'function') return;
  var href = a.getAttribute('href');
  window.gtag('event', 'cv_download', {
    cv_language: /_FR\.pdf$/i.test(href) ? 'fr' : 'en',
    link_type: a.hasAttribute('download') ? 'download' : 'open',
    link_location: a.closest('footer') ? 'footer' : ((a.closest('section[id]') || {}).id || 'page'),
    transport_type: 'beacon'
  });
});
