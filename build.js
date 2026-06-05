const { execSync } = require("child_process");
const path = require("path");

const root = __dirname;
const opts =
  "--compact true --control-flow-flattening true --string-array true --string-array-encoding base64";

function run(cmd) {
  execSync(cmd, { stdio: "inherit", cwd: root, shell: true });
}

console.log("Obfuscation de app.js...");
run(`npx --yes javascript-obfuscator app.js --output k9m2p.js ${opts}`);

console.log("Obfuscation de device-check.js...");
run(`npx --yes javascript-obfuscator device-check.js --output d7x.js ${opts}`);

console.log("Termine : k9m2p.js et d7x.js sont a jour.");
