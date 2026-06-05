export const MOBILE_UA_PATTERN =
  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|phone|tablet|kindle|silk|fennec|windows phone|windows ce|playbook|bb10|meego|mobi|palm|symbian/i;

export function isMobileUserAgent(userAgent) {
  return MOBILE_UA_PATTERN.test(userAgent || "");
}

export const MOBILE_BLOCK_HTML = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Accès ordinateur uniquement</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f4f6;
      font-family: "Segoe UI", Arial, sans-serif;
      color: #1f2937;
      padding: 24px;
    }
    .box {
      max-width: 420px;
      background: #fff;
      border: 1px solid #e5e7eb;
      border-top: 4px solid #FF7900;
      border-radius: 12px;
      padding: 28px;
      text-align: center;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    }
    h1 { font-size: 20px; margin-bottom: 12px; color: #FF7900; }
    p { font-size: 15px; line-height: 1.55; color: #4b5563; }
  </style>
</head>
<body>
  <main class="box">
    <h1>Ordinateur requis</h1>
    <p>Ce site est accessible uniquement depuis un ordinateur (PC ou Mac). Veuillez ouvrir cette page sur un poste fixe ou portable.</p>
  </main>
</body>
</html>`;
