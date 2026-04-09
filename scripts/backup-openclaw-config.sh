#!/usr/bin/env bash
set -euo pipefail

SRC_DIR="$HOME/.openclaw"
SRC_FILE="$SRC_DIR/openclaw.json"
DEST_ROOT="/home/obione/.openclaw/workspace/private-backups/openclaw"
STAMP="$(date +"%Y-%m-%d_%H-%M-%S")"
DEST_DIR="$DEST_ROOT/$STAMP"
LATEST_LINK="$DEST_ROOT/latest"

if [[ ! -f "$SRC_FILE" ]]; then
  echo "OpenClaw config not found at $SRC_FILE"
  exit 1
fi

mkdir -p "$DEST_DIR"
chmod 700 "$DEST_ROOT" "$DEST_DIR"

cp "$SRC_FILE" "$DEST_DIR/openclaw.json"
chmod 600 "$DEST_DIR/openclaw.json"

if [[ -d "$SRC_DIR/credentials" ]]; then
  cp -a "$SRC_DIR/credentials" "$DEST_DIR/credentials"
  find "$DEST_DIR/credentials" -type d -exec chmod 700 {} \;
  find "$DEST_DIR/credentials" -type f -exec chmod 600 {} \;
fi

ln -sfn "$DEST_DIR" "$LATEST_LINK"

echo "Private OpenClaw backup created at $DEST_DIR"
