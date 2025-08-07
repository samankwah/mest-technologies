# Development Setup Guide

## 🚨 Fix for "Failed to load resource: 404" Error

The error you're experiencing occurs because Netlify serverless functions are not available when running the regular Vite development server. Here's how to fix it:

## 🔧 Quick Fix

Instead of running:
```bash
npm run dev
```

Run this instead:
```bash
npm run start
# or
npm run netlify
```

This starts the Netlify development server which includes both your React app AND the serverless functions.

## 📋 Complete Setup Instructions

### 1. Environment Variables Setup

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Add your actual API keys to `.env`:**
   ```bash
   # Airtable Configuration
   AIRTABLE_API_KEY=your_actual_api_key
   AIRTABLE_BASE=your_actual_base_id
   AIRTABLE_TABLE=your_actual_table_name

   # Stripe Configuration
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

### 2. Development Server Options

| Command | Purpose | Functions Available |
|---------|---------|-------------------|
| `npm run dev` | Vite only | ❌ No (causes 404 errors) |
| `npm run start` | Netlify Dev | ✅ Yes (recommended) |
| `npm run netlify` | Netlify Dev | ✅ Yes (same as above) |

### 3. Correct Development Workflow

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env with your actual API keys

# 3. Start development server with functions
npm run start

# Your app will be available at:
# - Frontend: http://localhost:8888
# - Functions: http://localhost:8888/.netlify/functions/
```

## 🧐 Understanding the Error

### What was happening:
- **Regular Vite server** (`npm run dev`) runs on port 5173
- **Functions** expect to be available at `/.netlify/functions/products`
- **Vite doesn't serve Netlify functions**, causing 404 errors

### What should happen:
- **Netlify dev server** runs on port 8888
- **Both React app AND functions** are served together
- **Functions available** at `http://localhost:8888/.netlify/functions/products`

## 🔍 Troubleshooting

### Still getting 404 errors?

1. **Check if Netlify CLI is installed:**
   ```bash
   netlify --version
   ```
   If not installed: `npm install -g netlify-cli`

2. **Verify your functions are working:**
   ```bash
   # Test the products function directly
   curl http://localhost:8888/.netlify/functions/products
   ```

3. **Check environment variables:**
   - Make sure `.env` file exists
   - Verify Airtable credentials are correct
   - Check Stripe keys are valid

### Functions not loading?

1. **Check function syntax:**
   - Functions use `exports.handler = async (event) => {}`
   - Return format: `{ statusCode: 200, body: JSON.stringify(data) }`

2. **Check netlify.toml configuration:**
   ```toml
   [build]
   functions = "./functions"
   ```

3. **Verify function files exist:**
   - `functions/products.js`
   - `functions/single-product.js` 
   - `functions/stripe-payment-intent.js`

### Environment variable issues?

1. **Frontend environment variables** need `VITE_` prefix
2. **Backend environment variables** don't need prefix
3. **Restart development server** after changing `.env`

## 📱 Port Information

| Server Type | Default Port | URL |
|------------|-------------|-----|
| Vite Dev | 5173 | http://localhost:5173 |
| Netlify Dev | 8888 | http://localhost:8888 |

## 🚀 Production vs Development

### Development (Local):
- Use `npm run start` (Netlify dev)
- Functions available at `/.netlify/functions/`
- Environment variables from `.env` file

### Production (Netlify):
- Deploys via `npm run build`
- Functions deployed automatically
- Environment variables set in Netlify dashboard

## 🔐 Security Notes

- **Never commit `.env` file** to version control
- **Use `.env.example`** for documenting required variables
- **Set production environment variables** in Netlify dashboard
- **Keep API keys secure** and rotate regularly

## 📚 Additional Resources

- [Netlify Functions Documentation](https://docs.netlify.com/functions/overview/)
- [Netlify Dev CLI Documentation](https://docs.netlify.com/cli/get-started/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

## ✅ Quick Checklist

Before running the development server:

- [ ] Environment variables set in `.env` file
- [ ] Netlify CLI installed globally
- [ ] Using `npm run start` instead of `npm run dev`
- [ ] Functions folder exists with `.js` files
- [ ] `netlify.toml` configured correctly

---

**Need help?** Check the error logs in your terminal when running `npm run start` for specific error messages.