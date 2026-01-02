import { Router } from 'express'
import Razorpay from 'razorpay'
import crypto from 'crypto'

const router = Router()

// Initialize Razorpay (only if keys are provided)
let razorpay: Razorpay | null = null
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET && 
    process.env.RAZORPAY_KEY_ID !== 'your_razorpay_key_id_here') {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })
  console.log('✅ Razorpay initialized successfully')
} else {
  console.log('⚠️ Razorpay not initialized. KEY_ID:', process.env.RAZORPAY_KEY_ID, 'KEY_SECRET:', process.env.RAZORPAY_KEY_SECRET ? 'present' : 'missing')
}

// Create Razorpay Order
router.post('/create-order', async (req, res) => {
  try {
    if (!razorpay) {
      return res.status(500).json({ message: 'Razorpay is not configured. Please add API keys to environment variables.' })
    }

    const { amount, challengeType, accountSize, platform, billingInfo, userEmail } = req.body

    const options = {
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        challengeType,
        accountSize,
        platform,
        userEmail,
        ...billingInfo,
      },
    }

    const order = await razorpay.orders.create(options)
    res.json({ 
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    })
  } catch (error) {
    console.error('Razorpay order creation error:', error)
    res.status(500).json({ message: 'Failed to create payment order' })
  }
})

// Verify Razorpay Payment
router.post('/verify-payment', async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

    const sign = razorpay_order_id + '|' + razorpay_payment_id
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(sign.toString())
      .digest('hex')

    if (razorpay_signature === expectedSign) {
      // Payment is verified
      // TODO: Save payment details to database
      res.json({ 
        success: true, 
        message: 'Payment verified successfully',
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      })
    } else {
      res.status(400).json({ success: false, message: 'Invalid signature' })
    }
  } catch (error) {
    console.error('Payment verification error:', error)
    res.status(500).json({ success: false, message: 'Payment verification failed' })
  }
})

export default router
