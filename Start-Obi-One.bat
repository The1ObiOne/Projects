@echo off
setlocal

echo Backing up OpenClaw config...
wsl bash -lc "cd /home/obione/.openclaw/workspace && ./scripts/backup-openclaw-config.sh"

echo Starting Obi One...
wsl bash -lc "cd /home/obione/.openclaw/workspace && ./scripts/start-obi.sh"
start http://127.0.0.1:18789/

echo.
echo Obi One should be opening in your browser.
pause
