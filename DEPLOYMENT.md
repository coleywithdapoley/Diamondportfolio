# Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### 1. Update Domain & URLs
- [ ] Update `metadataBase` in `app/layout.tsx` with your actual domain
- [ ] Update `baseUrl` in `app/sitemap.ts` with your actual domain
- [ ] Update `baseUrl` in `app/robots.ts` with your actual domain
- [ ] Update social media links with your actual handles

### 2. Create Required Images

#### Favicon Files (Place in `/public/`)
- [ ] `favicon.ico` (16x16, 32x32, 48x48)
- [ ] `favicon-16x16.png`
- [ ] `favicon-32x32.png`
- [ ] `apple-touch-icon.png` (180x180)
- [ ] `android-chrome-192x192.png`
- [ ] `android-chrome-512x512.png`

#### Open Graph Image (Place in `/public/images/`)
- [ ] `og-image.jpg` (1200x630px) - For social media sharing

**Quick Tip:** Use a tool like [Favicon Generator](https://realfavicongenerator.net/) to generate all favicon sizes from one image.

### 3. Environment Variables
Create `.env.local` (don't commit this):
```env
NEXT_PUBLIC_SITE_URL=https://diamondbazile.com
```

### 4. Test Production Build
```bash
npm run build
npm start
```

## 📦 Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys
4. Add custom domain in Vercel settings

### Netlify
1. Push code to GitHub
2. Connect repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms
- **Railway**: Connect GitHub repo
- **AWS Amplify**: Connect GitHub repo
- **DigitalOcean App Platform**: Connect GitHub repo

## 🔍 SEO Checklist

- [x] Meta tags configured
- [x] Open Graph tags added
- [x] Twitter Card tags added
- [x] Schema.org markup (JSON-LD)
- [x] Sitemap generated
- [x] Robots.txt configured
- [x] Semantic HTML structure
- [x] Alt text on all images
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

## 🎨 Performance Optimization

- [x] Font optimization (next/font)
- [x] Image optimization (Next.js Image)
- [x] Lazy loading for images
- [x] Bundle size optimization
- [x] Code splitting
- [x] Compression enabled
- [ ] Test with Lighthouse (aim for 90+ scores)

## 📱 Mobile Optimization

- [x] Responsive design
- [x] Touch-friendly buttons (44px min)
- [x] Viewport meta tag
- [x] Mobile menu
- [x] Optimized images for mobile
- [ ] Test on real devices

## 🔒 Security

- [x] Remove `X-Powered-By` header
- [x] HTTPS enabled (automatic on Vercel/Netlify)
- [ ] Add security headers (if needed)
- [ ] Review and secure API routes (if any)

## 📊 Analytics (Optional)

Consider adding:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

## 🎯 Post-Deployment

1. Test all pages and links
2. Verify images load correctly
3. Test contact form
4. Check mobile responsiveness
5. Test PDF downloads
6. Verify social sharing (Open Graph)
7. Submit to search engines
8. Monitor performance with Lighthouse

## 🐛 Troubleshooting

### Images not loading
- Check file paths in `/public/`
- Verify Next.js Image configuration
- Check browser console for errors

### Fonts not loading
- Fonts are loaded via `next/font/google` - should work automatically
- Check network tab for font requests

### Build errors
- Run `npm run build` locally to catch errors
- Check for TypeScript errors
- Verify all imports are correct

---

**Your portfolio is production-ready!** 🎉

