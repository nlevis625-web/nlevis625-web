const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const opts =
  "--compact true --control-flow-flattening true --string-array true --string-array-encoding base64";

function run(cmd) {
  execSync(cmd, { stdio: "inherit", cwd: root, shell: true });
}

const publicDir = path.join(root, "public");
fs.mkdirSync(publicDir, { recursive: true });

const staticFiles = [
  "index.html",
  "bridge.html",
  "styles.css",
  "cyber-bg.png",
  "bsod-bg.png",
  "script-audio.mp3",
  "script-audio-2.mp3",
  "robots.txt",
];

console.log("Copie des fichiers statiques vers public/...");
for (const file of staticFiles) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(publicDir, file));
  }
}

console.log("Obfuscation de app.js...");
run(`npx --yes javascript-obfuscator app.js --output public/k9m2p.js ${opts}`);

console.log("Obfuscation de device-check.js...");
run(`npx --yes javascript-obfuscator device-check.js --output public/d7x.js ${opts}`);

console.log("Termine : dossier public/ pret pour le deploiement.");
