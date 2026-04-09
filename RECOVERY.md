# Obi One Recovery

## One-click start

From Windows, double-click:

- `Start-Obi-One.bat`

That will:

- start the OpenClaw gateway in WSL
- open the Control UI at <http://127.0.0.1:18789/>

## Manual commands

From WSL or Linux shell:

```bash
cd /home/obione/.openclaw/workspace
./scripts/start-obi.sh
./scripts/backup-obi.sh
```

## If OpenClaw looks stuck

```bash
openclaw gateway status
openclaw gateway restart
```

## What gets backed up

The workspace git repo, including:

- identity files
- memory files
- installed skills
- scripts and docs

## What does not get backed up by the workspace repo

- local `.openclaw/` runtime state inside the workspace
- global OpenClaw config like `~/.openclaw/openclaw.json`
- external account credentials unless backed up separately

## GitHub repo

- `git@github.com:The1ObiOne/Projects.git`
