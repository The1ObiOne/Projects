#!/usr/bin/env bash
set -euo pipefail

WORKSPACE="/home/obione/.openclaw/workspace"
cd "$WORKSPACE"

BRANCH="$(git branch --show-current 2>/dev/null || echo master)"
STAMP="$(date +"%Y-%m-%d %H:%M:%S %Z")"

# Stage workspace changes. Local OpenClaw runtime state is ignored via .gitignore.
git add -A :/

if git diff --cached --quiet; then
  echo "No backup changes to commit."
  exit 0
fi

git commit -m "Backup workspace ${STAMP}"
git push -u origin "$BRANCH"

echo "Backup complete on ${BRANCH}."
