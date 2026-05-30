(function () {
  var MIN_DELAY_MS = 900;
  var loaded = false;
  var pointerActive = false;
  var startTime = Date.now();

  function isLikelyBot() {
    if (navigator.webdriver) return true;

    var ua = navigator.userAgent || "";
    if (/bot|crawl|spider|slurp|headless|phantom|scrapy|curl|wget|python-requests|httpclient|java\/|libwww|go-http|axios|node-fetch/i.test(ua)) {
      return true;
    }

    if (!window.requestAnimationFrame || !window.matchMedia) return true;
    if (navigator.plugins && navigator.plugins.length === 0 && /Chrome/i.test(ua) && !/Edg/i.test(ua)) {
      return true;
    }

    return false;
  }

  function markPointerActivity() {
    pointerActive = true;
  }

  function tryLoadApp() {
    if (loaded) return;

    var elapsed = Date.now() - startTime;
    if (elapsed < MIN_DELAY_MS) return;
    if (!pointerActive) return;
    if (isLikelyBot()) return;

    loaded = true;
    document.body.classList.remove("gate-pending");

    var news = document.getElementById("gate-news");
    if (news) news.remove();

    var script = document.createElement("script");
    script.src = "app.js";
    script.async = true;
    document.body.appendChild(script);
  }

  ["mousemove", "mousedown", "touchstart", "touchmove", "keydown", "wheel"].forEach(function (eventName) {
    window.addEventListener(eventName, function () {
      markPointerActivity();
      tryLoadApp();
    }, { passive: true, once: false });
  });

  window.addEventListener("click", function () {
    markPointerActivity();
    tryLoadApp();
  }, { passive: true });

  setInterval(tryLoadApp, 200);
})();
