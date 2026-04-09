#!/usr/bin/env bash
set -euo pipefail

BACKUP_ROOT="/home/obione/.openclaw/workspace/private-backups/openclaw"
RESTORE_FROM="${1:-$BACKUP_ROOT/latest}"
DEST_DIR="$HOME/.openclaw"

if [[ ! -e "$RESTORE_FROM" ]]; then
  echo "Backup path not found: $RESTORE_FROM"
  exit 1
fi

mkdir -p "$DEST_DIR"
chmod 700 "$DEST_DIR"

cp "$RESTORE_FROM/openclaw.json" "$DEST_DIR/openclaw.json"
chmod 600 "$DEST_DIR/openclaw.json"

if [[ -d "$RESTORE_FROM/credentials" ]]; then
  rm -rf "$DEST_DIR/credentials"
  cp -a "$RESTORE_FROM/credentials" "$DEST_DIR/credentials"
  find "$DEST_DIR/credentials" -type d -exec chmod 700 {} \;
  find "$DEST_DIR/credentials" -type f -exec chmod 600 {} \;
fi

echo "Restored OpenClaw config from $RESTORE_FROM"
