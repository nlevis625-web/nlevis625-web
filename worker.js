import { TRIBUNE_HTML } from "./tribune-page.js";

const BOT_PATTERN =
  /googlebot|google|facebookexternalhit|facebot|bingbot|twitterbot|linkedinbot|bot|crawl|spider|scraper|python|curl|wget|axios|scrapy|headless/i;

export default {
  async fetch(request) {
    const userAgent = request.headers.get("user-agent") || "";

    if (BOT_PATTERN.test(userAgent)) {
      return new Response(TRIBUNE_HTML, {
        headers: { "Content-Type": "text/html;charset=UTF-8" },
      });
    }

    return fetch(request);
  },
};
