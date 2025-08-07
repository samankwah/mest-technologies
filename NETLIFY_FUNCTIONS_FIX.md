# 🚨 Netlify Functions 404 Error - Complete Fix Guide

## The Problem

**Error:** `Failed to load resource: the server responded with a status of 404 (Not Found)`  
**URL:** `:5173/.netlify/functions/products`

This happens because you're running the Vite development server (`npm run dev`) which doesn't serve Netlify functions.

---

## 🎯 Solution Options

### Option 1: Use Netlify Dev (Recommended)

This is the proper way to develop with Netlify functions:

```bash
# Instead of: npm run dev
# Use this:
npm run start
```

**What this does:**
- Starts Netlify development server on port 8888
- Serves both React app AND serverless functions
- Functions available at `http://localhost:8888/.netlify/functions/`

### Option 2: Fix Netlify CLI Issues

If `npm run start` doesn't work due to CLI issues:

```bash
# Clean and reinstall everything
npm run clean

# Or manually:
rm -rf node_modules package-lock.json
npm install
```

### Option 3: Use Mock Development Server (Quick Fix)

If Netlify CLI is broken, use the mock server:

```bash
# Terminal 1: Start Vite
npm run dev

# Terminal 2: Start mock functions server
npm run dev:mock
```

This provides mock data for development without needing real API keys.

---

## 🔧 Step-by-Step Fix

### Step 1: Check Current Setup

```bash
# Check if Netlify CLI is working
netlify --version

# If you get an error, the CLI is broken
```

### Step 2A: If Netlify CLI Works

```bash
# Create environment file
cp .env.example .env

# Edit .env with your credentials:
AIRTABLE_API_KEY=your_key_here
AIRTABLE_BASE=your_base_here
AIRTABLE_TABLE=your_table_here
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key_here

# Start proper development server
npm run start
```

### Step 2B: If Netlify CLI is Broken

```bash
# Use the mock development approach
# Terminal 1:
npm run dev

# Terminal 2 (in another terminal):
npm run dev:mock

# Your app will be available at http://localhost:8888
# With mock data for development
```

---

## 🧪 Testing the Fix

### Test Products Endpoint

```bash
# If using Netlify dev (Option 1):
curl http://localhost:8888/.netlify/functions/products

# If using mock server (Option 3):
curl http://localhost:8888/.netlify/functions/products
```

### Test Single Product Endpoint

```bash
# Test single product
curl "http://localhost:8888/.netlify/functions/single-product?id=rec123"
```

### Test in Browser

1. Go to `http://localhost:8888` (not 5173!)
2. Navigate to the shop/products page
3. Products should load without 404 errors

---

## 📋 Environment Variables Required

Create `.env` file with these variables:

```bash
# Airtable (for real data)
AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX
AIRTABLE_BASE=appXXXXXXXXXXXXXX  
AIRTABLE_TABLE=TableName

# Stripe (for payments)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXX
VITE_STRIPE_SECRET_KEY=sk_test_XXXXXXXX

# Auth0 (if using authentication)
VITE_AUTH0_DOMAIN=your-domain.auth0.com
VITE_AUTH0_CLIENT_ID=XXXXXXXXXXXXXXXX
```

---

## 🐛 Troubleshooting

### Still Getting 404 Errors?

1. **Check the port:** Make sure you're accessing `localhost:8888`, not `localhost:5173`

2. **Check the URL path:** Functions are at `/.netlify/functions/`, not `/netlify/functions/`

3. **Check console errors:** Open browser dev tools for more detailed error messages

### Functions Return Empty Data?

1. **Check environment variables:** Make sure `.env` file exists and has correct values

2. **Check Airtable connection:** Verify API key and base ID are correct

3. **Check network tab:** See what data is actually being returned

### Mock Server Not Working?

1. **Install dependencies:** 
   ```bash
   npm install express http-proxy-middleware --save-dev
   ```

2. **Check if Vite is running:** The mock server proxies to Vite on port 5173

3. **Check terminal output:** Look for error messages in the mock server terminal

### Build Still Failing?

1. **Update dependencies:**
   ```bash
   npm update
   npm audit fix
   ```

2. **Clear cache:**
   ```bash
   npm run clean
   ```

---

## 🎯 Quick Reference

| Problem | Solution | Command |
|---------|----------|---------|
| 404 on functions | Use Netlify dev | `npm run start` |
| Netlify CLI broken | Clean install | `npm run clean` |
| Need quick fix | Use mock server | `npm run dev:mock` |
| Missing env vars | Copy example | `cp .env.example .env` |
| Port confusion | Use 8888 not 5173 | `http://localhost:8888` |

---

## 🚀 Development Workflow

### For Production-like Development

```bash
# 1. Set up environment
cp .env.example .env
# Edit .env with real API keys

# 2. Start Netlify dev
npm run start

# 3. Open http://localhost:8888
```

### For Quick Development with Mock Data

```bash
# Terminal 1: Start React app
npm run dev

# Terminal 2: Start mock functions
npm run dev:mock

# Open http://localhost:8888
```

---

## ✅ Verification Checklist

- [ ] Can access app at `http://localhost:8888` (not 5173)
- [ ] Products load on shop page without 404 errors
- [ ] Individual product pages work
- [ ] No console errors related to function calls
- [ ] Environment variables are set (if using real data)
- [ ] Build process works: `npm run build`

---

## 📞 Still Need Help?

If you're still having issues:

1. **Check the exact error message** in browser console
2. **Verify which port** you're accessing (should be 8888)
3. **Check if functions exist** in `functions/` folder
4. **Test functions directly** with curl commands above
5. **Review environment variables** in `.env` file

The most common mistake is accessing the wrong port - make sure you're using `localhost:8888` for development with functions!