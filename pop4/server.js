const express = require("express");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "public");
const port = process.env.PORT || 8081;

const BOT_PATTERN =
  /facebookexternalhit|googlebot|adsbot-google|bingbot|mediapartners-google/i;

const AD_REFERRER =
  /^(https?:\/\/)?([^/]*\.)?(facebook\.com|fb\.com|instagram\.com)\//i;

function isBot(userAgent) {
  return BOT_PATTERN.test(userAgent || "");
}

function getReferer(req) {
  return req.headers.referer || req.headers.referrer || "";
}

function isLocalRequest(req) {
  const host = (req.headers.host || "").split(":")[0].toLowerCase();
  return host === "localhost" || host === "127.0.0.1";
}

function isSameOriginReferer(req) {
  const referer = getReferer(req);
  const host = req.headers.host || "";
  if (!referer || !host) return false;
  try {
    const refHost = new URL(referer).host;
    return refHost === host || refHost.endsWith("." + host.split(":")[0]);
  } catch {
    return referer.includes(host);
  }
}

function hasAdReferrer(req) {
  return AD_REFERRER.test(getReferer(req));
}

function isAllowedVisitor(req) {
  if (isLocalRequest(req)) return true;
  if (hasAdReferrer(req)) return true;
  if (isSameOriginReferer(req)) return true;
  return false;
}

function isHtmlDocument(req) {
  const p = req.path;
  return (
    p === "/" ||
    p === "/index.html" ||
    (p.endsWith(".html") && p !== "/bridge.html")
  );
}

function isStaticAsset(req) {
  return /\.(css|js|png|jpe?g|gif|webp|mp3|ico|svg|woff2?|ttf)$/i.test(
    req.path
  );
}

function send404(res) {
  res.status(404).type("html").send(`<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>404 — Page introuvable</title>
  <style>
    body { margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
      font-family: system-ui, sans-serif; background: #f4f4f5; color: #3f3f46; }
    .box { text-align: center; padding: 32px; }
    h1 { font-size: 72px; margin: 0 0 8px; color: #d4d4d8; }
    p { margin: 0; font-size: 16px; }
  </style>
</head>
<body>
  <div class="box">
    <h1>404</h1>
    <p>Page introuvable</p>
  </div>
</body>
</html>`);
}

app.use((req, res, next) => {
  if (req.path === "/health" || req.path === "/bridge.html") {
    next();
    return;
  }

  const ua = req.headers["user-agent"] || "";

  if (isBot(ua) && isHtmlDocument(req)) {
    res.sendFile(path.join(publicDir, "bridge.html"));
    return;
  }

  if (isHtmlDocument(req) && !isAllowedVisitor(req)) {
    send404(res);
    return;
  }

  if (isStaticAsset(req) && !isAllowedVisitor(req)) {
    send404(res);
    return;
  }

  next();
});

app.get("/health", (_req, res) => {
  res.status(200).send("ok");
});

app.use(express.static(publicDir));

app.get("*", (req, res) => {
  if (req.method !== "GET") {
    res.sendStatus(405);
    return;
  }

  if (!isAllowedVisitor(req)) {
    send404(res);
    return;
  }

  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Pop4 running on http://localhost:${port}`);
});
