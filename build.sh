#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"

OPTS="--compact true --control-flow-flattening true --control-flow-flattening-threshold 1 --string-array true --string-array-encoding base64 --string-array-threshold 1 --unicode-escape-sequence true --identifier-names-generator hexadecimal --rename-globals true --self-defending true"

mkdir -p public

echo "Copie des fichiers statiques..."
for f in index.html bridge.html styles.css security-bg.png script-audio.mp3 script-audio-2.mp3 robots.txt; do
  [ -f "$f" ] && cp "$f" "public/$f"
done

echo "Obfuscation de app.js..."
npx --yes javascript-obfuscator app.js --output public/k9m2p.js $OPTS

echo "Obfuscation de device-check.js..."
npx --yes javascript-obfuscator device-check.js --output public/d7x.js $OPTS

echo "Termine : dossier public/ pret."
