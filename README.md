# 🚀 BearTron Trading Platform

A professional trading platform with separate frontend and backend architecture.

## 📁 Project Structure

```
BearTron/
├── frontend/           ← Next.js Frontend Application (Port 3000)
│   ├── app/           ← Next.js App Router pages
│   ├── components/    ← React components
│   ├── contexts/      ← React contexts (Auth)
│   ├── hooks/         ← Custom React hooks
│   ├── lib/           ← Utilities
│   ├── public/        ← Static assets
│   ├── styles/        ← Global styles
│   └── package.json   ← Frontend dependencies
│
├── backend/           ← Express.js Backend API (Port 5000)
│   ├── src/
│   │   ├── server.ts      ← Main Express server
│   │   ├── models/        ← MongoDB models
│   │   └── routes/        ← API routes
│   ├── .env              ← Backend environment variables
│   └── package.json      ← Backend dependencies
│
└── start-dev.ps1     ← Script to run both servers
```

## 🚀 Quick Start

### Option 1: Run Both Servers Together (Recommended)

```powershell
.\start-dev.ps1
```

This will open two terminal windows:

- Backend server on `http://localhost:5000`
- Frontend app on `http://localhost:3000`

### Option 2: Run Servers Separately

**Terminal 1 - Backend:**

```bash
cd backend
pnpm install  # First time only
pnpm dev
```

**Terminal 2 - Frontend:**

```bash
cd frontend
pnpm install  # First time only
pnpm dev
```

## 🔧 Initial Setup

### 1. Install Dependencies

**Backend:**

```bash
cd backend
pnpm install
```

**Frontend:**

```bash
cd frontend
pnpm install
```

### 2. Configure Environment Variables

**Backend** (`backend/.env`):

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`frontend/.env.local`):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

### 3. Run the Application

```powershell
.\start-dev.ps1
```

Or run each server separately in different terminals.

## 📡 API Endpoints

**Base URL:** `http://localhost:5000`

- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/signin` - Authenticate user
- `GET /health` - Server health check

## 🎨 Frontend Routes

- `/` - Homepage
- `/signin` - Sign in page
- `/signup` - Sign up page
- `/dashboard` - User dashboard
- `/buy-challenge` - Purchase trading challenges
- `/competition` - Trading competitions
- `/admin` - Admin panel

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - UI components
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing

## 📚 Documentation

- [Frontend README](frontend/README.md) - Frontend specific docs
- [Backend README](backend/README.md) - Backend API docs
- [Auth Guide](frontend/AUTH_README.md) - Authentication setup
- [Separation Guide](frontend/SEPARATION_GUIDE.md) - Architecture details

## 🔐 Authentication

The platform uses JWT-based authentication with:

- Secure password hashing (bcrypt)
- HTTP-only cookies for token storage
- Google reCAPTCHA protection
- 7-day token expiration

## 🌐 CORS Configuration

Backend allows requests from `http://localhost:3000` (configurable in `.env`)

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
cd frontend
pnpm build
```

### Backend (Railway/Render/DigitalOcean)

```bash
cd backend
pnpm build
pnpm start
```

## 📝 Development

- Backend auto-reloads with `nodemon`
- Frontend auto-reloads with Next.js Fast Refresh
- TypeScript provides type safety across the stack

## ✅ Features

- ✅ User authentication (Sign up/Sign in)
- ✅ Trading challenges purchase system
- ✅ User dashboard
- ✅ Trading competitions
- ✅ Admin panel
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Real-time form validation
- ✅ CAPTCHA protection

## 🐛 Troubleshooting

**Port already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000

# Kill process on port 5000
npx kill-port 5000
```

**MongoDB connection error:**

- Check if MongoDB is running
- Verify connection string in `backend/.env`

**CORS errors:**

- Ensure `FRONTEND_URL` in backend matches your frontend URL
- Check backend console for CORS configuration

## 📄 License

MIT

## 👨‍💻 Author

BearTron Trading Platform

---

**Happy Trading! 🚀📈**
