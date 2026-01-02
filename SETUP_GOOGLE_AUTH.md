# 🔐 How to Set Up Google OAuth

## Quick Setup (5 minutes)

### Step 1: Go to Google Cloud Console

Visit: https://console.cloud.google.com/apis/credentials

### Step 2: Create OAuth Credentials

1. **Create a Project** (if you don't have one)

   - Click "Select a project" → "New Project"
   - Name: "BearTron"
   - Click "Create"

2. **Configure OAuth Consent Screen**

   - Click "OAuth consent screen" in the left sidebar
   - Choose "External"
   - Fill in:
     - App name: **BearTron**
     - User support email: **your-email@gmail.com**
     - Developer contact: **your-email@gmail.com**
   - Click "Save and Continue" (skip optional fields)
   - Click "Save and Continue" again

3. **Create OAuth Client ID**

   - Click "Credentials" in the left sidebar
   - Click "+ CREATE CREDENTIALS" → "OAuth client ID"
   - Application type: **Web application**
   - Name: **BearTron Web**
   - Under "Authorized redirect URIs", click "+ ADD URI" and add:
     ```
     http://localhost:3001/api/auth/callback/google
     ```
   - Click "CREATE"

4. **Copy Your Credentials**
   - A popup will show your **Client ID** and **Client Secret**
   - Keep this window open or download the JSON

### Step 3: Update .env.local File

Open `frontend/.env.local` and replace these lines:

```env
AUTH_SECRET=your-random-secret-key-here-change-in-production
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

**With your actual values:**

1. **AUTH_SECRET** - Generate a random string:
   ```powershell
   # Run this in PowerShell to generate a secure secret:
   [Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
   ```
2. **GOOGLE_CLIENT_ID** - Paste the Client ID from Google Cloud Console

3. **GOOGLE_CLIENT_SECRET** - Paste the Client Secret from Google Cloud Console

### Example (DO NOT USE THESE VALUES):

```env
AUTH_SECRET=AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
GOOGLE_CLIENT_ID=123456789-abc123def456.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-AbCdEfGhIjKlMnOpQrStUvWxYz
```

### Step 4: Restart Your Server

```bash
cd frontend
pnpm dev
```

### Step 5: Test It!

1. Go to: http://localhost:3001/signin
2. Click "Sign in with Google"
3. Select your Google account
4. Done! 🎉

---

## That's It!

Your Google OAuth is now working. Users can sign up and sign in using their Google accounts.

## Troubleshooting

**Error: "Redirect URI mismatch"**

- Make sure you added: `http://localhost:3001/api/auth/callback/google` to authorized redirect URIs
- Check if your server is running on port 3001 (not 3000)

**Error: "Invalid client"**

- Double-check your GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET
- Make sure there are no extra spaces in .env.local
