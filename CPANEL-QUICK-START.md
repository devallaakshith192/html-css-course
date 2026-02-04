# Quick cPanel Deployment Steps

## ✅ What's Ready

1. ✅ **Production build created** - `dist` folder contains all website files
2. ✅ **`.htaccess` file added** - Handles React Router URLs
3. ✅ **`.gitignore` updated** - `dist` folder will now be pushed to GitHub
4. ✅ **All assets included** - Images, PDFs, CSS, JavaScript

## 🚀 Deploy to cPanel in 3 Steps

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Add production build for cPanel deployment"
git push origin main
```

### Step 2: Upload to cPanel

**Option A - File Manager (Easiest):**
1. Login to cPanel
2. Open **File Manager**
3. Go to `public_html` folder
4. Upload **ALL contents** from your `dist` folder:
   - `.htaccess`
   - `index.html`
   - `assets/` folder
   - `images/` folder
   - `*.pdf` files
   - `*.png` files
   - `favicon.ico`

**Option B - Git Clone:**
1. Login to cPanel Terminal
2. Run:
```bash
cd public_html
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git temp
cp -r temp/dist/* .
rm -rf temp
```

### Step 3: Test Your Website

Visit your domain and test:
- ✅ Home page loads
- ✅ All navigation links work
- ✅ PDF downloads work
- ✅ Contact form works
- ✅ Images display correctly

## 📁 What Gets Uploaded

From your `dist` folder, upload these to `public_html`:

```
public_html/
├── .htaccess                    ← Important for routing!
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
├── images/                      ← All 48 images
├── List-of-Licensed-Pellets.pdf
├── List-of-Licensed-Capsules.pdf
├── joshika-logo.png
├── favicon.ico
└── vite.svg
```

## ⚠️ Important Notes

1. **Upload CONTENTS of `dist` folder**, not the `dist` folder itself
2. **Include the `.htaccess` file** - it's hidden but essential
3. **Set correct permissions** - Files: 644, Folders: 755
4. **Clear browser cache** after uploading to see changes

## 🔄 Updating Your Website

When you make changes:

1. Build: `npm run build`
2. Commit: `git add . && git commit -m "Update" && git push`
3. Re-upload changed files from `dist/` to cPanel

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| 404 on routes | Upload `.htaccess` file |
| Blank page | Check browser console, verify all files uploaded |
| Images missing | Upload entire `images/` folder |
| PDFs not downloading | Upload PDF files to root of `public_html` |

## 📞 Need More Help?

See the full guide: [DEPLOYMENT.md](file:///c:/Users/Deval/Desktop/html-css-course/DEPLOYMENT.md)
