"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const packages: Record<string, any> = {
  starter: { size: "₹1 Lakh", price: 5000 },
  growth: { size: "₹2 Lakh", price: 9000 },
  pro: { size: "₹5 Lakh", price: 22500 },
  elite: { size: "₹10 Lakh", price: 46000 },
  premium: { size: "₹25 Lakh", price: 115000 },
  ultimate: { size: "₹50 Lakh", price: 210000 },
}

export default function PaymentForm({ packageId }: { packageId: string | null }) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const pkg = packageId && packages[packageId]

  const handlePayment = async () => {
    if (!email || !pkg) return

    setLoading(true)
    // Simulate payment processing
    setTimeout(() => {
      alert(`Payment of ₹${pkg.price} initiated for ${pkg.size} account`)
      setLoading(false)
      // In production, redirect to dashboard after successful payment
    }, 2000)
  }

  if (!pkg) {
    return (
      <Card className="p-8">
        <p className="text-red-500">Please select a package first</p>
      </Card>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Order Summary */}
      <Card className="md:col-span-1 h-fit sticky top-24 p-6">
        <h3 className="font-bold mb-4">Order Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Account Size</span>
            <span className="font-semibold">{pkg.size}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">Challenge Fee</span>
            <span className="font-semibold">₹{pkg.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-border">
            <span className="text-muted-foreground">GST (18%)</span>
            <span className="font-semibold">₹{Math.round(pkg.price * 0.18).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-3 bg-muted p-3 rounded-lg">
            <span className="font-bold">Total</span>
            <span className="font-bold text-primary">₹{Math.round(pkg.price * 1.18).toLocaleString()}</span>
          </div>
        </div>
      </Card>

      {/* Payment Form */}
      <Card className="md:col-span-2 p-8">
        <h3 className="text-2xl font-bold mb-6">Payment Details</h3>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handlePayment()
          }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <Input type="text" placeholder="John Doe" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Phone Number</label>
            <Input type="tel" placeholder="+91 98765 43210" required />
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-sm text-blue-900 dark:text-blue-200">
              💳 Payment will be processed securely using industry-standard encryption. After successful payment, you'll
              be redirected to your trading dashboard.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" className="text-sm">
              I agree to the Terms of Use and understand the trading rules
            </label>
          </div>

          <Button size="lg" className="w-full" onClick={handlePayment} disabled={!email || loading}>
            {loading ? "Processing..." : `Pay ₹${Math.round(pkg.price * 1.18).toLocaleString()}`}
          </Button>

          <p className="text-xs text-center text-muted-foreground">Your payment is secure and encrypted</p>
        </form>
      </Card>
    </div>
  )
}
