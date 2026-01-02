# Payment Gateway Setup Guide

## Prerequisites

Before you can accept payments, you'll need to set up accounts with both Stripe and PayPal, and obtain their API credentials.

---

## 🔷 Stripe Setup

### Step 1: Create a Stripe Account

1. Go to [https://stripe.com](https://stripe.com)
2. Click "Sign up" in the top right
3. Fill in your business details
4. Complete the verification process

### Step 2: Get Your API Keys

1. Log in to your Stripe Dashboard: [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Click on "Developers" in the left sidebar
3. Click on "API keys"
4. You'll see two types of keys:
   - **Publishable key** (starts with `pk_test_` for test mode or `pk_live_` for live mode)
   - **Secret key** (starts with `sk_test_` for test mode or `sk_live_` for live mode)

### Step 3: Copy Your Keys

1. Copy the **Publishable key** and add it to `frontend/.env.local`:

   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   ```

2. Copy the **Secret key** and add it to `backend/.env`:
   ```
   STRIPE_SECRET_KEY=sk_test_your_key_here
   ```

⚠️ **Important**: Keep your secret key private! Never commit it to Git or expose it in frontend code.

### Step 4: Set Up Webhook (Optional but Recommended)

1. In Stripe Dashboard, go to "Developers" → "Webhooks"
2. Click "Add endpoint"
3. Enter your webhook URL: `https://yourdomain.com/api/payment/webhook`
   - For local testing: `http://localhost:5000/api/payment/webhook`
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click "Add endpoint"
6. Copy the "Signing secret" (starts with `whsec_`)
7. Add it to `backend/.env`:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_your_secret_here
   ```

### Step 5: Test Mode vs Live Mode

- **Test Mode**: Use test API keys (pk*test* and sk*test*) for development

  - Use test card: `4242 4242 4242 4242`
  - Any future expiry date
  - Any 3-digit CVC
  - Any postal code

- **Live Mode**: Switch to live keys when ready for production
  - Toggle "Test mode" in the Stripe Dashboard
  - Copy the live API keys and replace the test keys

### Step 6: Enable Payment Methods (India-specific)

1. Go to "Settings" → "Payment methods" in Stripe Dashboard
2. Enable:
   - **Cards** (Visa, Mastercard, Amex, etc.)
   - **UPI** (PhonePe, Google Pay, Paytm)
   - **Wallets** (if needed)
3. Configure currency: **INR** (Indian Rupee)

---

## 💙 PayPal Setup

### Step 1: Create a PayPal Business Account

1. Go to [https://www.paypal.com/in/business](https://www.paypal.com/in/business)
2. Click "Sign Up"
3. Choose "Business Account"
4. Fill in your business information
5. Verify your email and complete the setup

### Step 2: Access PayPal Developer Dashboard

1. Go to [https://developer.paypal.com](https://developer.paypal.com)
2. Log in with your PayPal account
3. Click "Dashboard" in the top menu

### Step 3: Create an App

1. Click "My Apps & Credentials" in the left sidebar
2. Make sure you're on the "Sandbox" tab (for testing)
3. Click "Create App" button
4. Enter an app name (e.g., "BullTron Payment")
5. Click "Create App"

### Step 4: Get Your Credentials

After creating the app, you'll see:

- **Client ID**: A long string starting with `A...`
- **Secret**: Click "Show" to reveal it

### Step 5: Copy Your Credentials

1. Copy the **Client ID** and add it to BOTH files:

   In `frontend/.env.local`:

   ```
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id_here
   ```

   In `backend/.env`:

   ```
   PAYPAL_CLIENT_ID=your_client_id_here
   ```

2. Copy the **Secret** and add it to `backend/.env`:

   ```
   PAYPAL_CLIENT_SECRET=your_secret_here
   ```

3. Set the mode in `backend/.env`:
   ```
   PAYPAL_MODE=sandbox
   ```

### Step 6: Test with Sandbox Accounts

1. In PayPal Developer Dashboard, go to "Sandbox" → "Accounts"
2. You'll see pre-created test accounts:
   - **Business Account**: For receiving payments
   - **Personal Account**: For testing as a buyer
3. Click on a personal account and note the email/password
4. Use these credentials to test PayPal payments in your app

### Step 7: Switch to Live Mode (Production)

When ready for production:

1. Go back to "My Apps & Credentials"
2. Switch to the **"Live"** tab
3. Create a new app or use the existing one
4. Get your **Live** Client ID and Secret
5. Update your `.env` files with live credentials:
   ```
   PAYPAL_MODE=production
   ```

---

## 🔐 Security Best Practices

### Environment Variables

✅ **DO:**

- Keep `.env` files in `.gitignore`
- Use different credentials for development and production
- Rotate keys periodically
- Use environment variable management tools (AWS Secrets Manager, etc.) in production

❌ **DON'T:**

- Commit `.env` files to Git
- Share your secret keys
- Use production keys in development
- Hardcode credentials in code

### Frontend vs Backend Keys

- **Frontend** (`.env.local`): Only public keys

  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - `NEXT_PUBLIC_PAYPAL_CLIENT_ID`

- **Backend** (`.env`): Secret keys
  - `STRIPE_SECRET_KEY`
  - `STRIPE_WEBHOOK_SECRET`
  - `PAYPAL_CLIENT_SECRET`

---

## 📝 Final Environment Files

### `frontend/.env.local`

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3001
NEXTAUTH_SECRET=your-nextauth-secret-here

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# API URL
NEXT_PUBLIC_API_URL=http://localhost:5000

# MongoDB
MONGODB_URI=mongodb+srv://...

# JWT
JWT_SECRET=your-jwt-secret

# Stripe (Public Key)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here

# PayPal (Public Client ID)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id_here
```

### `backend/.env`

```env
# MongoDB Connection
MONGODB_URI=mongodb+srv://...

# JWT Secret
JWT_SECRET=joj84446mkklksp

# Server Port
PORT=5000

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3001

# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# PayPal Configuration
PAYPAL_CLIENT_ID=your_paypal_client_id_here
PAYPAL_CLIENT_SECRET=your_paypal_client_secret_here
PAYPAL_MODE=sandbox
```

---

## 🧪 Testing Your Setup

### Test Stripe Payment

1. Fill in all billing details in your app
2. Agree to terms
3. Select "Credit/Debit Card"
4. Click "Continue to Payment"
5. Use test card: `4242 4242 4242 4242`
6. Complete the payment

### Test PayPal Payment

1. Fill in all billing details
2. Select "PayPal"
3. Click the PayPal button
4. Log in with your sandbox personal account
5. Complete the payment

---

## 🚀 Going Live

### Before Going Live:

1. ✅ Test all payment flows thoroughly
2. ✅ Set up proper error handling
3. ✅ Configure webhooks for payment confirmations
4. ✅ Implement payment failure handling
5. ✅ Set up email notifications
6. ✅ Add payment receipts
7. ✅ Configure refund policies
8. ✅ Set up SSL certificate (HTTPS required for production)

### Switching to Production:

1. Replace all test keys with live keys
2. Change `PAYPAL_MODE` from `sandbox` to `production`
3. Update webhook URLs to production domain
4. Test with real small-amount transactions
5. Monitor initial transactions closely

---

## 📞 Support

### Stripe Support

- Documentation: [https://stripe.com/docs](https://stripe.com/docs)
- Support: [https://support.stripe.com](https://support.stripe.com)

### PayPal Support

- Documentation: [https://developer.paypal.com/docs](https://developer.paypal.com/docs)
- Support: [https://www.paypal.com/in/smarthelp/contact-us](https://www.paypal.com/in/smarthelp/contact-us)

---

## ⚠️ Common Issues

### Stripe

- **"No such publishable key"**: Check if you're using the correct key format (pk*test* or pk*live*)
- **CORS errors**: Make sure `FRONTEND_URL` in backend `.env` matches your frontend URL
- **Webhook not receiving events**: Verify webhook URL and signing secret

### PayPal

- **"Client ID not found"**: Ensure you're using the correct mode (sandbox vs live)
- **Payment buttons not showing**: Check if `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set correctly
- **Currency not supported**: Make sure PayPal account supports INR

---

**Need help?** Check the error logs in your browser console and backend terminal for specific error messages.
