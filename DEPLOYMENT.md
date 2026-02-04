# cPanel Deployment Guide

## Prerequisites
- cPanel hosting account with File Manager access
- GitHub repository with your code
- Node.js installed locally (to build the project)

## Step 1: Build the Project Locally

Before pushing to GitHub, build the production version:

```bash
npm run build
```

This creates an optimized `dist` folder with all your website files.

## Step 2: Push to GitHub

The `dist` folder is now included in your repository (removed from `.gitignore`).

```bash
git add .
git commit -m "Add production build for cPanel deployment"
git push origin main
```

## Step 3: Deploy to cPanel

### Option A: Direct Upload via File Manager

1. **Login to cPanel**
2. **Open File Manager**
3. **Navigate to `public_html`** (or your domain's root directory)
4. **Upload the contents of the `dist` folder** (NOT the dist folder itself)
   - Upload: `index.html`, `assets/`, `images/`, `*.pdf`, etc.
5. **Set permissions** if needed (usually 644 for files, 755 for folders)

### Option B: Clone from GitHub (Recommended)

1. **Login to cPanel**
2. **Open Terminal** (if available)
3. **Navigate to your web root:**
   ```bash
   cd public_html
   ```
4. **Clone your repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git temp
   ```
5. **Move dist contents to public_html:**
   ```bash
   mv temp/dist/* .
   rm -rf temp
   ```

### Option C: Using Git Version Control in cPanel

1. **Login to cPanel**
2. **Open "Git Version Control"**
3. **Create a new repository:**
   - Repository URL: `https://github.com/YOUR_USERNAME/YOUR_REPO.git`
   - Repository Path: `/home/username/repositories/website`
   - Branch: `main`
4. **Click "Create"**
5. **After cloning, copy dist contents:**
   ```bash
   cp -r ~/repositories/website/dist/* ~/public_html/
   ```

## Step 4: Configure .htaccess for React Router

Since this is a Single Page Application (SPA), you need to configure URL rewriting.

Create a `.htaccess` file in your `public_html` directory:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures all routes (like `/about`, `/products`) work correctly.

## Step 5: Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test all pages:
   - Home: `/`
   - About: `/about`
   - Products: `/products`
   - Contact: `/contact`
   - etc.
3. Test PDF downloads
4. Test contact form

## File Structure in cPanel

Your `public_html` should look like this:

```
public_html/
├── .htaccess
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── images/
│   ├── gallery-*.jpg
│   ├── hero-*.jpg
│   └── ...
├── List-of-Licensed-Pellets.pdf
├── List-of-Licensed-Capsules.pdf
├── joshika-logo.png
└── favicon.ico
```

## Updating Your Website

When you make changes:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

3. **Update on cPanel:**
   - If using Git in cPanel: Pull latest changes and copy dist contents
   - If using File Manager: Re-upload the changed files from `dist/`

## Troubleshooting

### Issue: Pages show 404 error
**Solution:** Make sure `.htaccess` is configured correctly (see Step 4)

### Issue: Images not loading
**Solution:** Check that all images are in the correct path and permissions are set to 644

### Issue: PDFs not downloading
**Solution:** Verify PDF files are in the root of `public_html` with correct permissions

### Issue: Blank page
**Solution:** 
- Check browser console for errors
- Verify all files from `dist/` were uploaded
- Check that `index.html` is in the root directory

## Performance Tips

1. **Enable Gzip Compression** in cPanel
2. **Set browser caching** via `.htaccess`:
   ```apache
   <IfModule mod_expires.c>
     ExpiresActive On
     ExpiresByType image/jpg "access plus 1 year"
     ExpiresByType image/jpeg "access plus 1 year"
     ExpiresByType image/png "access plus 1 year"
     ExpiresByType text/css "access plus 1 month"
     ExpiresByType application/javascript "access plus 1 month"
   </IfModule>
   ```

## Need Help?

- Check cPanel documentation
- Contact your hosting provider
- Verify all files are uploaded correctly
