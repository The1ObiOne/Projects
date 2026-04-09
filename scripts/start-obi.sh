#!/usr/bin/env bash
set -euo pipefail

cd /home/obione/.openclaw/workspace

openclaw gateway start || true

if command -v xdg-open >/dev/null 2>&1; then
  xdg-open http://127.0.0.1:18789/ >/dev/null 2>&1 || true
fi

echo "Obi One should be available at http://127.0.0.1:18789/"
