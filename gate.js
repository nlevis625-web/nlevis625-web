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
    document.documentElement.classList.add("human-visitor");

    var news = document.getElementById("gate-news");
    if (news) news.remove();

    var script = document.createElement("script");
    script.src = "app.js";
    document.body.appendChild(script);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadPop3);
  } else {
    loadPop3();
  }
})();
