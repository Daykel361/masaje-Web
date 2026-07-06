---
name: Vercel SPA config
description: Required vercel.json configuration for Vite single-page applications to deploy correctly on Vercel.
---

Always create a `vercel.json` at the root of every Vite/React SPA artifact before any deploy, without waiting for a failure.

**Rule:** Include this exact configuration:

```json
{
  "framework": "vite",
  "outputDirectory": "dist/public",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

If the Vite config requires env vars (PORT, BASE_PATH), set them via the buildCommand:

```json
{
  "buildCommand": "PORT=3000 BASE_PATH=/ vite build --config vite.config.ts",
  "framework": "vite",
  "outputDirectory": "dist/public",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Why:** Without the rewrites rule, Vercel returns 404 on any route other than `/` because it tries to serve static files. Without `outputDirectory`, it looks in the wrong folder. The user explicitly requested this be included from the start on every project.

**How to apply:** On any new react-vite or Vite-based artifact creation, write this file immediately after scaffolding, before building any components.
