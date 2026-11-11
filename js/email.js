/* Assembles the contact e-mail in the browser so it never appears as plain
   text or a mailto: link in the page source (keeps it away from simple
   scrapers). Without JavaScript the footer shows a short notice instead. */
(function () {
  var els = document.querySelectorAll('a.js-email[data-e]');
  for (var i = 0; i < els.length; i++) {
    var addr = els[i].getAttribute('data-e').split('').reverse().join('');
    els[i].setAttribute('href', 'mailto:' + addr);
    els[i].textContent = addr;
    els[i].removeAttribute('data-e');
  }
})();
