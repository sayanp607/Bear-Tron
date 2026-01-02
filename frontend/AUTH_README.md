# Authentication Setup Guide

## What's Been Implemented

✅ **Sign In Page** (`/signin`) - Email and password authentication
✅ **Sign Up Page** (`/signup`) - New user registration with CAPTCHA
✅ **Backend API Routes** - JWT-based authentication
✅ **MongoDB Integration** - User data storage
✅ **Password Hashing** - Secure bcrypt encryption
✅ **Session Management** - JWT tokens stored in cookies
✅ **Google reCAPTCHA** - Bot protection on signup

## Setup Instructions

### 1. Install MongoDB (Choose One Option)

**Option A: MongoDB Atlas (Cloud - Recommended)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/BearTron`)

**Option B: Local MongoDB**

1. Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Install and run MongoDB locally
3. Use connection string: `mongodb://localhost:27017/BearTron`

### 2. Configure Environment Variables

The `.env.local` file is already created with test keys. For production:

1. **MongoDB**: Replace with your actual MongoDB URI
2. **JWT Secret**: Generate a random secure string
3. **reCAPTCHA** (Optional but recommended):
   - Go to [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
   - Register your site (choose reCAPTCHA v2 "I'm not a robot")
   - Copy your Site Key and Secret Key
   - Update `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY`

**Current test keys work for development but should be changed for production!**

### 3. Run the Application

```bash
pnpm dev
```

### 4. Test the Authentication

1. Click "Sign In" button in header → Opens `/signin` page
2. Click "Get Started" button → Opens `/signup` page
3. Create a new account:
   - Fill in name, email, password
   - Complete CAPTCHA
   - Click "Sign Up"
4. Sign in with your credentials
5. You'll be redirected to the dashboard

## Features

### Sign In Page (`/signin`)

- Email and password authentication
- Error handling with toast notifications
- Redirect to dashboard on success
- Link to sign up page

### Sign Up Page (`/signup`)

- Full name, email, password fields
- Password confirmation validation
- Google reCAPTCHA verification
- Password strength requirement (min 6 characters)
- Duplicate email detection

### Backend Features

- **Password Security**: Bcrypt hashing (10 rounds)
- **JWT Tokens**: 7-day expiration
- **Session Storage**: HTTP-only cookies
- **MongoDB Models**: User schema with validation
- **Error Handling**: Proper HTTP status codes

### Auth Context

- Global authentication state
- `useAuth()` hook for components
- Automatic token validation
- Logout functionality

## API Endpoints

### POST `/api/auth/signup`

Create a new user account

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "captchaToken": "..."
}
```

### POST `/api/auth/signin`

Authenticate existing user

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "message": "Sign in successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Using Authentication in Components

```tsx
import { useAuth } from "@/contexts/AuthContext";

function MyComponent() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <div>Please sign in</div>;
  }

  return (
    <div>
      <p>Welcome, {user?.name}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
```

## Security Notes

⚠️ **For Production:**

- Change `JWT_SECRET` to a strong random string
- Use a production MongoDB database
- Get real reCAPTCHA keys
- Enable HTTPS
- Consider adding rate limiting
- Add email verification
- Implement password reset functionality

## Troubleshooting

**MongoDB Connection Error:**

- Check if MongoDB is running
- Verify connection string in `.env.local`
- Ensure network access in MongoDB Atlas

**CAPTCHA Not Working:**

- Check if you're using the correct site key
- Verify domain is registered in reCAPTCHA admin
- Test keys work on localhost

**Token Issues:**

- Clear browser cookies
- Check JWT_SECRET is set
- Verify token expiration hasn't passed
