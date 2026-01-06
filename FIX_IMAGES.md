# Fix Images Not Showing

## Quick Fix Steps

### 1. Copy Your Logo File

The Hero section needs `logo.jpg`. Copy it manually:

```bash
cp ~/Downloads/LOGO.JPG /Users/coley/Documents/GitHub/Diamondportfolio/public/images/logo.jpg
```

Or drag and drop:
- **From:** `~/Downloads/LOGO.JPG`
- **To:** `/Users/coley/Documents/GitHub/Diamondportfolio/public/images/logo.jpg`

### 2. Restart Development Server

After copying the logo file:

1. Stop the server (Ctrl+C in terminal)
2. Restart it:
   ```bash
   npm run dev
   ```
3. Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)

### 3. Verify Images Are in Place

Check that these files exist:
- ✅ `/public/images/about-photo.jpg` (for About section)
- ✅ `/public/images/logo.jpg` (for Hero section - needs to be added)
- ✅ `/public/images/headshot.jpg` (backup)

### 4. If Images Still Don't Show

**Option A: Check Browser Console**
- Open browser DevTools (F12)
- Check Console tab for image errors
- Check Network tab to see if images are loading

**Option B: Use Regular img Tag (Temporary)**
If Next.js Image component has issues, we can temporarily use regular `<img>` tags.

**Option C: Check File Permissions**
```bash
chmod 644 /Users/coley/Documents/GitHub/Diamondportfolio/public/images/*.jpg
```

## Current Image Status

- ✅ About Photo: `/public/images/about-photo.jpg` (exists)
- ❌ Logo: `/public/images/logo.jpg` (needs to be copied)
- ✅ Headshot: `/public/images/headshot.jpg` (exists as backup)

## After Adding Logo

1. Copy `LOGO.JPG` to `public/images/logo.jpg`
2. Restart dev server
3. Refresh browser
4. Images should appear!

