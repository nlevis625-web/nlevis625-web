import { TRIBUNE_HTML } from "./tribune-page.js";
import { MOBILE_BLOCK_HTML, isMobileUserAgent } from "./device-page.js";

const BOT_PATTERN =
  /googlebot|google|facebookexternalhit|facebot|bingbot|twitterbot|linkedinbot|bot|crawl|spider|scraper|python|curl|wget|axios|scrapy|headless/i;

export default function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";
  const secChMobile = request.headers.get("sec-ch-ua-mobile");

  if (BOT_PATTERN.test(userAgent)) {
    return new Response(TRIBUNE_HTML, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  if (isMobileUserAgent(userAgent) || secChMobile === "?1") {
    return new Response(MOBILE_BLOCK_HTML, {
      status: 200,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}

export const config = {
  matcher: "/:path*",
};
