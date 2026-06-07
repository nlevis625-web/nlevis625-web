import { MOBILE_BLOCK_HTML, isMobileUserAgent } from "./device-page.js";

const BOT_PATTERN =
  /facebookexternalhit|facebookcatalog|moderateur|googlebot|adsbot-google|mediapartners-google|google-inspectiontool|storebot-google|googleother|feedfetcher-google|apis-google|bingbot|bingpreview|adidxbot|msnbot|microsoftpreview|applebot|bot|crawl|spider/i;

const CRAWLER_HINT =
  /googlebot|bingbot|adsbot|applebot|facebookexternalhit|facebookcatalog|mediapartners|feedfetcher|storebot|google-inspection|googleother|apis-google|bingpreview|adidxbot|msnbot|microsoftpreview|applebot|moderateur|bot\.html|spider|crawl/i;

function isRealBrowser(userAgent) {
  const ua = (userAgent || "").toLowerCase();
  if (CRAWLER_HINT.test(ua)) return false;
  return (
    /mozilla\/5\.0/.test(ua) &&
    /(?:chrome\/|crios\/|edg\/|firefox\/|version\/)/.test(ua)
  );
}

function isBot(request) {
  const userAgent = request.headers.get("user-agent") || "";
  if (isRealBrowser(userAgent)) return false;

  const trust = request.cf?.clientTrustScore;
  if (typeof trust === "number" && trust < 10) return true;

  return BOT_PATTERN.test(userAgent);
}

function isHtmlDocument(request) {
  const path = new URL(request.url).pathname;
  return (
    path === "/" ||
    path === "/index.html" ||
    (path.endsWith(".html") && path !== "/bridge.html")
  );
}

async function serveBridge(request, env) {
  const bridgeUrl = new URL("/bridge.html", request.url);
  const bridgeRequest = new Request(bridgeUrl, request);

  if (env?.ASSETS) {
    return env.ASSETS.fetch(bridgeRequest);
  }

  return fetch(bridgeRequest);
}

export default {
  async fetch(request, env) {
    const userAgent = request.headers.get("user-agent") || "";
    const secChMobile = request.headers.get("sec-ch-ua-mobile");

    if (isBot(request) && isHtmlDocument(request)) {
      return serveBridge(request, env);
    }

    if (isMobileUserAgent(userAgent) || secChMobile === "?1") {
      return new Response(MOBILE_BLOCK_HTML, {
        headers: { "Content-Type": "text/html;charset=UTF-8" },
      });
    }

    if (env?.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return fetch(request);
  },
};
