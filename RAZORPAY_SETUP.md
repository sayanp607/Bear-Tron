# 🔷 Razorpay Setup Guide - Quick & Easy!

## Why Razorpay?

- ✅ **Made for India** - Supports UPI, Cards, NetBanking, Wallets
- ✅ **Instant Setup** - Get test keys in 2 minutes
- ✅ **No Documents Required** - Test mode works without verification
- ✅ **Free Testing** - Unlimited test transactions

---

## Step 1: Sign Up (2 minutes)

1. Go to: **https://dashboard.razorpay.com/signup**
2. Fill in:
   - Email
   - Password
   - Click "Sign Up"
3. Verify your email (check inbox)

---

## Step 2: Get Test API Keys (1 minute)

1. After login, you'll see the Razorpay Dashboard
2. In the left sidebar, click **"Settings"** (gear icon)
3. Click **"API Keys"** under "Website and app settings"
4. You'll see **"Test Mode"** (should be ON by default)
5. Click **"Generate Test Key"** button

You'll get two keys:

**Key ID** (starts with `rzp_test_`)

```
Example: rzp_test_1234567890abcd
```

**Key Secret** (click "eye icon" to reveal)

```
Example: xyzABC123secretKEY456
```

---

## Step 3: Add Keys to Your Project

### **Frontend** (`frontend/.env.local`):

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_1234567890abcd
```

### **Backend** (`backend/.env`):

```env
RAZORPAY_KEY_ID=rzp_test_1234567890abcd
RAZORPAY_KEY_SECRET=xyzABC123secretKEY456
```

---

## Step 4: Restart Servers

**Backend:**

```powershell
cd backend
pnpm run dev
```

**Frontend:**

```powershell
cd frontend
pnpm run dev
```

---

## Step 5: Test Payment

1. Go to: http://localhost:3001
2. Sign in
3. Click "Buy Challenge"
4. Fill billing details
5. Click "Proceed to Payment"
6. Razorpay popup will open

### Test Payment Methods:

**Test Card:**

- Card Number: `4111 1111 1111 1111`
- CVV: `123`
- Expiry: Any future date (e.g., `12/28`)
- Name: Any name

**Test UPI:**

- UPI ID: `success@razorpay`
- (Will auto-succeed)

**Test NetBanking:**

- Select any bank
- Use: Success / Failure buttons in test mode

---

## Common Test Scenarios:

| Test Case              | How to Test                    |
| ---------------------- | ------------------------------ |
| **Successful Payment** | Use card `4111 1111 1111 1111` |
| **Failed Payment**     | Use card `4000 0000 0000 0002` |
| **UPI Success**        | Use UPI: `success@razorpay`    |
| **UPI Failure**        | Use UPI: `failure@razorpay`    |

---

## Going Live (Later)

When ready for real payments:

1. **Complete KYC** in Razorpay Dashboard
2. Submit business documents
3. Wait for approval (1-2 days)
4. Switch to **"Live Mode"** in API Keys section
5. Get **Live** API keys (start with `rzp_live_`)
6. Replace test keys with live keys in `.env` files

---

## Features You Get:

✅ **Payment Methods:**

- Credit/Debit Cards (Visa, Mastercard, RuPay, Amex)
- UPI (Google Pay, PhonePe, Paytm, BHIM)
- NetBanking (All major banks)
- Wallets (Paytm, PhonePe, Freecharge)
- EMI, Pay Later

✅ **Automatic:**

- Payment verification
- Refunds
- Webhooks for notifications
- Dashboard for tracking

---

## Pricing (For Live Mode):

- **No Setup Fee**
- **2% per transaction** (for most payment methods)
- **No monthly charges**
- **Instant settlements** available

---

## Support:

- **Dashboard:** https://dashboard.razorpay.com
- **Docs:** https://razorpay.com/docs/
- **Test Cards:** https://razorpay.com/docs/payments/payments/test-card-details/

---

## 🎉 You're Ready!

**That's it!** Your payment system is now ready with Razorpay. Just add the test keys and start testing payments immediately!

**No verification needed for testing** - You can test unlimited payments with test cards/UPI right away! 🚀
