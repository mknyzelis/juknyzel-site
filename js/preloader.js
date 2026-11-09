(function () {
  var preloader = document.getElementById('preloader');
  var content = document.getElementById('homeContent');
  var SESSION_KEY = 'juknyzel-preloader-seen';
  var seen = false;

  try {
    seen = sessionStorage.getItem(SESSION_KEY) === '1';
  } catch (e) {
    // storage unavailable (private mode etc.) — fall back to always showing it
  }

  if (seen) {
    preloader.classList.add('is-hidden');
    preloader.style.display = 'none';
    content.classList.add('is-visible');
    return;
  }

  var MIN_DISPLAY_MS = 1800;
  var start = Date.now();

  function reveal() {
    var elapsed = Date.now() - start;
    var wait = Math.max(0, MIN_DISPLAY_MS - elapsed);
    setTimeout(function () {
      preloader.classList.add('is-hidden');
      content.classList.add('is-visible');
      try {
        sessionStorage.setItem(SESSION_KEY, '1');
      } catch (e) {}
    }, wait);
  }

  if (document.readyState === 'complete') {
    reveal();
  } else {
    window.addEventListener('load', reveal);
  }
})();
