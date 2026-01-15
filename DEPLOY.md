# Quick Deployment Guide

**Status**: ✅ Ready to deploy immediately  
**Last Updated**: January 15, 2026

---

## 🚀 Deploy in 5 Minutes

### Prerequisites
- GitHub account
- Vercel/Netlify account (free tier works)

---

## Option 1: Vercel (Recommended) ⚡

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Production-ready refactor complete"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. Import your GitHub repository
4. Vercel auto-detects settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**

### Step 3: Done!
Your app will be live at: `https://your-project.vercel.app`

**Features**:
- ✅ Automatic HTTPS
- ✅ CDN distribution
- ✅ Auto-deploy on git push
- ✅ Preview deployments
- ✅ SPA routing works out of the box

---

## Option 2: Netlify 🌐

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Production-ready refactor complete"
git push origin main
```

### Step 2: Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect to GitHub
4. Select your repository
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy site"**

### Step 3: Done!
Your app will be live at: `https://your-project.netlify.app`

**Features**:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Continuous deployment
- ✅ `_redirects` file already configured
- ✅ Form handling (if needed later)

---

## Option 3: Render 🔧

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Production-ready refactor complete"
git push origin main
```

### Step 2: Deploy to Render
1. Go to [render.com](https://render.com)
2. Click **"New"** → **"Static Site"**
3. Connect your repository
4. Settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. **IMPORTANT**: Add rewrite rule
   - Source: `/*`
   - Destination: `/index.html`
   - Action: Rewrite
6. Click **"Create Static Site"**

### Step 3: Done!
Your app will be live at: `https://your-project.onrender.com`

---

## 🔍 Verify Deployment

After deployment, test these routes:

```
✅ https://your-domain.com/
✅ https://your-domain.com/services/cloud-practice
✅ https://your-domain.com/ai
✅ https://your-domain.com/products/agent-studio
✅ https://your-domain.com/who-we-are/our-team
✅ https://your-domain.com/case-studies
```

**Test**:
1. Visit each URL directly (not by clicking)
2. Refresh the page (should not 404)
3. Use browser back/forward buttons
4. Check mobile navigation

**Expected**: ✅ All routes work, no 404 errors

---

## 📊 Build Verification

Before deploying, verify locally:

```bash
# 1. Build the project
npm run build

# Expected output:
# ✓ built in XXX ms
# ✓ XX modules transformed

# 2. Preview the build
npm run preview

# 3. Test in browser
# Visit: http://localhost:4173
# Test all routes
# Check for console errors

# 4. If everything works:
# Push to GitHub and deploy!
```

---

## 🐛 Troubleshooting

### Issue: 404 on Refresh

**Solution**: Check SPA routing configuration

**Vercel**: Already handled (no action needed)

**Netlify**: Verify `public/_redirects` file exists:
```
/*    /index.html   200
```

**Render**: Add rewrite rule in dashboard:
- Source: `/*`
- Destination: `/index.html`

### Issue: Build Fails

**Check**:
1. `npm install` completes without errors
2. `npm run build` works locally
3. Node version matches (check `package.json`)

**Vercel/Netlify auto-use**: Latest Node LTS

### Issue: Images Don't Load

**Current**: Using data URI placeholders (always work)

**If replacing with real images**:
- Ensure images are in `/src/assets/images/`
- Update imports in `/src/assets/images/home.ts`
- Rebuild and redeploy

---

## 🎨 Custom Domain (Optional)

### Vercel
1. Go to project settings
2. Click **"Domains"**
3. Add your domain
4. Update DNS records as shown
5. Wait for SSL (automatic)

### Netlify
1. Go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Follow DNS instructions
4. HTTPS auto-configured

---

## 📈 Performance Tips

### After First Deploy

1. **Run Lighthouse**:
   - Open DevTools
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ scores

2. **Enable Compression**:
   - Vercel/Netlify do this automatically
   - Check response headers for `gzip` or `br`

3. **Monitor Build Time**:
   - Current: ~20-30 seconds
   - If slower, check for large dependencies

---

## 🔐 Environment Variables (If Needed)

### Local (.env)
```bash
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=UA-XXXXXX
```

### Vercel
1. Project Settings → Environment Variables
2. Add each variable
3. Redeploy

### Netlify
1. Site Settings → Environment Variables
2. Add each variable
3. Redeploy

**Access in code**:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## ✅ Deployment Checklist

Before going live:

- [ ] Code pushed to GitHub
- [ ] Build succeeds locally (`npm run build`)
- [ ] All routes tested locally
- [ ] No console errors
- [ ] Platform connected (Vercel/Netlify/Render)
- [ ] Build succeeds on platform
- [ ] Production URL accessible
- [ ] All 22 routes work on live site
- [ ] Refresh works on deep routes
- [ ] Mobile navigation tested
- [ ] Footer links work
- [ ] No 404 errors

---

## 🎉 You're Live!

Once deployed, your app will be:

✅ Accessible worldwide  
✅ Fast (CDN-delivered)  
✅ Secure (HTTPS)  
✅ Auto-deploying on git push  
✅ Production-ready

**Share your live URL**:
```
🌐 https://your-project.vercel.app
```

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com
- **Render Docs**: https://render.com/docs
- **Vite Docs**: https://vitejs.dev

---

**Deployment time**: ~5 minutes  
**Cost**: $0 (free tier)  
**Complexity**: Low

🚀 **Ready to ship!**
