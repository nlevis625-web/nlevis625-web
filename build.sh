#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

OPTS="--compact true --control-flow-flattening true --string-array true --string-array-encoding base64"

echo "Obfuscation de app.js..."
npx --yes javascript-obfuscator app.js --output k9m2p.js $OPTS

echo "Obfuscation de device-check.js..."
npx --yes javascript-obfuscator device-check.js --output d7x.js $OPTS

echo "Termine : k9m2p.js et d7x.js sont a jour."
