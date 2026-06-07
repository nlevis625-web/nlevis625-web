const JavaScriptObfuscator = require("javascript-obfuscator");
const fs = require("fs");
const path = require("path");

const root = __dirname;

const obfuscatorOptions = {
  compact: true,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  deadCodeInjection: true,
  deadCodeInjectionThreshold: 0.4,
  stringArray: true,
  stringArrayEncoding: ["rc4"],
  stringArrayThreshold: 1,
  stringArrayRotate: true,
  stringArrayShuffle: true,
  stringArrayIndexShift: true,
  stringArrayWrappersCount: 2,
  stringArrayWrappersChainedCalls: true,
  stringArrayCallsTransform: true,
  stringArrayCallsTransformThreshold: 1,
  splitStrings: true,
  splitStringsChunkLength: 2,
  unicodeEscapeSequence: true,
  identifierNamesGenerator: "hexadecimal",
  renameGlobals: true,
  transformObjectKeys: true,
  numbersToExpressions: true,
  disableConsoleOutput: true,
  seed: 0,
};

function obfuscateFile(inputPath, outputPath) {
  const code = fs.readFileSync(inputPath, "utf8");
  const result = JavaScriptObfuscator.obfuscate(code, obfuscatorOptions);
  fs.writeFileSync(outputPath, result.getObfuscatedCode(), "utf8");
}

function randomScriptName() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let name = "";
  for (let i = 0; i < 10; i++) {
    name += chars[Math.floor(Math.random() * chars.length)];
  }
  return name + ".js";
}

const publicDir = path.join(root, "public");
fs.mkdirSync(publicDir, { recursive: true });

const loaderName = randomScriptName();
const appName = randomScriptName();

const staticFiles = [
  "bridge.html",
  "security-bg.png",
  "script-audio.mp3",
  "script-audio-2.mp3",
  "robots.txt",
];

console.log("Preparation des fichiers...");
let indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
indexHtml = indexHtml.replace(/__LOADER_SCRIPT__/g, loaderName);
fs.writeFileSync(path.join(publicDir, "index.html"), indexHtml);

let deviceCheck = fs.readFileSync(path.join(root, "device-check.js"), "utf8");
deviceCheck = deviceCheck.replace(/__APP_BUNDLE__/g, appName);
const deviceTmp = path.join(root, ".device-check.build.js");
fs.writeFileSync(deviceTmp, deviceCheck);

let styles = fs.readFileSync(path.join(root, "styles.css"), "utf8");
styles = styles.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\s+/g, " ").trim();
fs.writeFileSync(path.join(publicDir, "styles.css"), styles);

for (const file of staticFiles) {
  const src = path.join(root, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(publicDir, file));
  }
}

console.log(`Obfuscation loader -> ${loaderName}...`);
obfuscateFile(deviceTmp, path.join(publicDir, loaderName));

console.log(`Obfuscation app -> ${appName}...`);
obfuscateFile(path.join(root, "app.js"), path.join(publicDir, appName));

fs.unlinkSync(deviceTmp);

const oldJs = fs.readdirSync(publicDir).filter((f) => {
  return f.endsWith(".js") && f !== loaderName && f !== appName;
});
for (const f of oldJs) {
  fs.unlinkSync(path.join(publicDir, f));
}

console.log("Termine : code obfusque et noms de fichiers regeneres.");
