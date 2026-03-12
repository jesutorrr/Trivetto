---
description: Deploy Trivetto site to GitHub Pages
---

# Deploy to GitHub Pages

Run these steps in order to deploy the latest changes to https://jesutorrr.github.io/Trivetto/

## 1. Build the project
// turbo
```bash
cd /Users/jesutorr/Desktop/AlePage && npm run build && touch dist/.nojekyll
```

## 2. Prepare clean deploy directory
// turbo
```bash
TMPDIR=$(mktemp -d) && cp dist/index.html "$TMPDIR/" && cp -r dist/assets "$TMPDIR/" && cp dist/.nojekyll "$TMPDIR/" && echo "Deploy dir ready: $TMPDIR" && ls -la "$TMPDIR/"
```

## 3. Push to gh-pages branch
Use the temp directory path from step 2. Run from inside that temp dir:
```bash
cd <TMPDIR_PATH> && git init && git add -A && git commit -m "deploy: update site" && git branch -M gh-pages && git remote add origin https://github.com/jesutorrr/Trivetto.git && git push origin gh-pages --force
```

## 4. Switch back to main branch
// turbo
```bash
cd /Users/jesutorr/Desktop/AlePage && git checkout main
```

## 5. Verify
Wait ~1 minute, then open https://jesutorrr.github.io/Trivetto/ (Cmd+Shift+R for hard refresh).

## Notes
- Vite `base` must be `'./'` (relative paths) — never use `'/Trivetto/'`
- `.nojekyll` is required to prevent GitHub's Jekyll from interfering
- Never use `npx gh-pages` — it's unreliable and uploads working dir files
- GitHub Pages source must be set to: Deploy from branch > `gh-pages` > `/ (root)`
