import { TRIBUNE_HTML } from "./tribune-page.js";
import { MOBILE_BLOCK_HTML, isMobileUserAgent } from "./device-page.js";

const BOT_PATTERN =
  /googlebot|google|facebookexternalhit|facebot|bingbot|twitterbot|linkedinbot|bot|crawl|spider|scraper|python|curl|wget|axios|scrapy|headless/i;

function isBot(userAgent) {
  return BOT_PATTERN.test(userAgent || "");
}

export default {
  async fetch(request, env) {
    const userAgent = request.headers.get("user-agent") || "";
    const secChMobile = request.headers.get("sec-ch-ua-mobile");

    if (isBot(userAgent)) {
      return new Response(TRIBUNE_HTML, {
        headers: { "Content-Type": "text/html;charset=UTF-8" },
      });
    }

    if (isMobileUserAgent(userAgent) || secChMobile === "?1") {
      return new Response(MOBILE_BLOCK_HTML, {
        headers: { "Content-Type": "text/html;charset=UTF-8" },
      });
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return fetch(request);
  },
};
