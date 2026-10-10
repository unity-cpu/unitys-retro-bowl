# Retro Bowl

## Deploy to Vercel

1. Upload this folder to [vercel.com/new](https://vercel.com/new)
2. **Set the admin password** in Vercel project settings:
   - Go to Project → Settings → Environment Variables
   - Add: `ADMIN_PASSWORD` = your secret password
   - Redeploy

If `ADMIN_PASSWORD` is not set, it defaults to `admin123`.

## Local

```bash
npx serve .
# or
python -m http.server 8000
```

Local fallback password is still `admin123` (API may not run locally without `vercel dev`).
