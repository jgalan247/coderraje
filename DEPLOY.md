# Deploy to DigitalOcean

## Quick Setup

1. Go to: https://cloud.digitalocean.com/apps/new
2. Select: **GitHub** → **jgalan247/coderraje**
3. Branch: **main**
4. Click **Next**

## App Settings

### Resources
- **Type**: Static Site
- **Source Directory**: `public`
- **Build Command**: (leave empty)
- **Output Directory**: `/` (or leave empty)

### Plan
- Select: **Starter** (FREE - $0/month)

### Info
- **App Name**: `coderra` (or your choice)
- **Region**: Any (closest to your users)

### Review & Launch
- Click **Create Resources**
- Wait 1-2 minutes

## After Deployment

Your site will be live at: `https://coderra-xxxxx.ondigitalocean.app`

### Add Custom Domain (coderra.je)

1. In your app dashboard → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `coderra.je`
4. Update your DNS:
   - Add CNAME: `www.coderra.je` → `coderra-xxxxx.ondigitalocean.app`
   - Add A record: `coderra.je` → IP provided by DO

## Troubleshooting

**Site shows blank page?**
- Check that Source Directory is: `public` (not `public/`)
- Output Directory should be: `/` or empty
- Build Command should be: empty (no build needed)

**404 errors?**
- Verify files exist in `public/` folder on GitHub
- Check: https://github.com/jgalan247/coderraje/tree/main/public

**Still not working?**
Try deploying the app spec file:
```bash
doctl apps create --spec .do/app.yaml
```

## Alternative: GitHub Pages

If DigitalOcean doesn't work, use GitHub Pages:

1. Go to: https://github.com/jgalan247/coderraje/settings/pages
2. Source: **Deploy from a branch**
3. Branch: **main**, Folder: **/public**
4. Click **Save**

Live at: `https://jgalan247.github.io/coderraje/`
