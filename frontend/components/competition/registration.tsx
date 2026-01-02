"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function CompetitionRegistration() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegister = () => {
    if (!email) return

    setLoading(true)
    setTimeout(() => {
      alert(`Registration link sent to ${email}`)
      setEmail("")
      setLoading(false)
    }, 1500)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-muted/30">
      <div className="mx-auto max-w-4xl px-6">
        <Card className="p-12 text-center border-2 border-primary">
          <h2 className="text-4xl font-bold mb-4">Ready to Compete?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of Indian traders competing for real funded accounts
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-8 rounded-lg mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-purple-500">₹149</p>
                <p className="text-sm text-muted-foreground mt-2">Entry Fee</p>
              </div>
              <div>
                <p className="text-3xl font-bold">₹1 Cr</p>
                <p className="text-sm text-muted-foreground mt-2">Demo Capital</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-500">₹3L</p>
                <p className="text-sm text-muted-foreground mt-2">Prize Pool</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="md:flex-1"
            />
            <Button size="lg" onClick={handleRegister} disabled={!email || loading}>
              {loading ? "Processing..." : "Register Now"}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            ✓ No credit card required • ✓ Instant demo account • ✓ Start trading immediately
          </p>
        </Card>

        {/* How to Register */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-12">3 Simple Steps to Get Started</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">Register & Pay ₹149</h4>
              <p className="text-sm text-muted-foreground">Fill your details and complete the payment securely</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">Connect Your Broker</h4>
              <p className="text-sm text-muted-foreground">Link to your Indian broker account via API</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">Start Trading</h4>
              <p className="text-sm text-muted-foreground">Trade with ₹1 crore demo capital. Compete for prizes.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Competition FAQs</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
              <summary className="font-semibold">Is there a minimum profit requirement?</summary>
              <p className="text-muted-foreground mt-4">
                No. All traders compete together. The 3 traders with the highest profits win. There's no minimum.
              </p>
            </details>
            <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
              <summary className="font-semibold">When does the competition start?</summary>
              <p className="text-muted-foreground mt-4">
                Competitions run monthly from the 1st to the 30th. You can register anytime and join the current month.
              </p>
            </details>
            <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
              <summary className="font-semibold">Can I withdraw during the competition?</summary>
              <p className="text-muted-foreground mt-4">
                No. It's a demo account. The ₹1 crore is demo capital only. You can trade freely without real money
                risk.
              </p>
            </details>
            <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
              <summary className="font-semibold">What if I lose all my capital?</summary>
              <p className="text-muted-foreground mt-4">
                Contact support to reset your account. You'll get a fresh ₹1 crore capital to continue competing.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  )
}
