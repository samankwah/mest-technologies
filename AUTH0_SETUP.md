# Auth0 Dashboard Configuration Guide

## Current Error
```
unauthorized_client: Callback URL mismatch.
http://localhost:5175/callback is not in the list of allowed callback URLs
```

## Required Auth0 Dashboard Settings

### 1. Navigate to Your Application
- Go to [Auth0 Dashboard](https://manage.auth0.com/)
- Applications → Your Application → Settings

### 2. Critical Application Configuration
**Application Type:** Single Page Application (SPA) - MUST be SPA, not Regular Web App
**Token Endpoint Authentication Method:** None
**OIDC Conformant:** Enabled (recommended)
**JSON Web Token Signature Algorithm:** RS256

### 2.1 Advanced Settings (IMPORTANT)
**Cross-Origin Authentication:** Enabled
**Refresh Token Settings:**
- Rotation: Enabled
- Expiration: Enabled
- Idle expiration: 7 days (or as needed)

**Grant Types:** (Ensure these are selected)
- Authorization Code
- Refresh Token
- Implicit (for compatibility)

### 3. Allowed URLs Configuration

**Allowed Callback URLs** (Add all of these for flexibility):
```
http://localhost:5173/login/callback,
http://localhost:5174/login/callback,
http://localhost:5175/login/callback,
http://localhost:5176/login/callback
```

**Allowed Logout URLs:**
```
http://localhost:5173,
http://localhost:5174,
http://localhost:5175,
http://localhost:5176
```

**Allowed Web Origins:**
```
http://localhost:5173,
http://localhost:5174,
http://localhost:5175,
http://localhost:5176
```

### 4. Current Environment Configuration
- **Domain:** `dev-e0issy0ofaxs0vjc.us.auth0.com`
- **Client ID:** `W2HfX3Ge1BfLZSutEmjdSVjrcfbLCyBH`
- **Current Redirect:** `http://localhost:5175/login/callback`

### 5. Save Changes
1. Click **"Save Changes"** in Auth0 Dashboard
2. Wait 2-3 minutes for changes to propagate
3. Test authentication at `http://localhost:5175/auth`

## Troubleshooting

### Common Errors and Solutions

#### 1. "Oops, something went wrong" (Session Error)
**Symptoms:** Auth0 error page after successful Google OAuth
**Causes:**
- Application Type is not set to "Single Page Application"
- Cross-Origin Authentication disabled
- Incorrect callback URL configuration

**Solutions:**
1. Verify Application Type is SPA (not Regular Web App)
2. Enable Cross-Origin Authentication in Advanced Settings
3. Ensure callback URLs exactly match what's configured

#### 2. "Callback URL mismatch"
**Symptoms:** unauthorized_client error
**Solutions:**
1. Add exact callback URL to Auth0 dashboard
2. Ensure port numbers match between dev server and configuration
3. Include both `/callback` and `/login/callback` if needed

#### 3. CORS/Network Errors
**Symptoms:** Fetch/network errors during authentication
**Solutions:**
1. Add localhost to Allowed Web Origins
2. Enable Cross-Origin Authentication
3. Check browser console for CORS errors

### General Troubleshooting Steps
- If port changes, update the callback URL accordingly
- Ensure HTTPS is NOT used for localhost in development
- Check that Social Connections (Google) are enabled if using OAuth
- Clear browser cache and Auth0 session storage if issues persist
- Check browser console for detailed error messages

## Production Deployment
When deploying to production, add your production URLs:
- `https://yourdomain.com/login/callback`
- `https://yourdomain.com`