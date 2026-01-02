# Google OAuth Setup Guide

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to **APIs & Services** > **Credentials**
4. Click **Create Credentials** > **OAuth client ID**
5. Configure the OAuth consent screen if prompted:

   - Choose "External" for testing
   - Fill in app name: "BearTron"
   - Add your email as support email
   - Add authorized domains (optional for local dev)
   - Save and continue

6. Create OAuth Client ID:

   - Application type: **Web application**
   - Name: "BearTron Web App"
   - Authorized JavaScript origins:
     - `http://localhost:3000`
     - `http://localhost:3001`
   - Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `http://localhost:3001/api/auth/callback/google`
   - Click **Create**

7. Copy the **Client ID** and **Client Secret**

## Step 2: Configure Environment Variables

1. Create a `.env.local` file in the `frontend` directory:

```bash
cp .env.local.example .env.local
```

2. Edit `.env.local` and add your credentials:

```env
AUTH_SECRET=generate-a-random-secret-key-here
NEXTAUTH_URL=http://localhost:3001
GOOGLE_CLIENT_ID=your-google-client-id-here
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
NEXT_PUBLIC_API_URL=http://localhost:5000
```

To generate a secure `AUTH_SECRET`, run:

```bash
openssl rand -base64 32
```

Or use PowerShell:

```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Minimum 0 -Maximum 256 }))
```

## Step 3: Restart Development Server

```bash
cd frontend
pnpm dev
```

## Step 4: Test Google OAuth

1. Navigate to `http://localhost:3001/signin`
2. Click "Sign in with Google"
3. Select your Google account
4. Grant permissions
5. You should be redirected to the dashboard

## How It Works

### Frontend Flow:

1. User clicks "Sign in with Google" button
2. NextAuth redirects to Google OAuth consent screen
3. User authorizes the app
4. Google redirects back with authorization code
5. NextAuth exchanges code for user info
6. User data sent to backend `/api/auth/google`
7. Backend creates/updates user and returns JWT token
8. User is authenticated and redirected to dashboard

### Backend Flow:

- New endpoint: `POST /api/auth/google`
- Accepts: `{ email, name, googleId, image }`
- Creates user if new, or updates existing user
- Returns JWT token for session management

### Database Changes:

- Added `googleId` field (unique, optional)
- Added `image` field for profile picture
- Added `authProvider` field ('local' | 'google')
- Password is now optional (required only for local auth)

## Security Notes

- Never commit `.env.local` to version control
- Use different OAuth credentials for production
- Enable additional security features in Google Cloud Console for production
- Consider adding email verification for local signups
- Monitor OAuth usage in Google Cloud Console

## Troubleshooting

### "Redirect URI mismatch" error:

- Verify the redirect URI in Google Cloud Console matches exactly
- Check if you're using the correct port (3000 or 3001)

### "Invalid client" error:

- Double-check your Client ID and Client Secret
- Ensure they're properly set in `.env.local`

### User not being created:

- Check backend console for errors
- Verify MongoDB connection is working
- Check backend route `/api/auth/google` is accessible
