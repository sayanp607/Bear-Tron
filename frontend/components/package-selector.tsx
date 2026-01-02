"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Package {
  id: string
  accountSize: string
  accountSizeRupees: number
  price: number
  priceLakh: string
  features: string[]
  popular?: boolean
}

const packages: Package[] = [
  {
    id: "starter",
    accountSize: "₹1 Lakh",
    accountSizeRupees: 100000,
    price: 5000,
    priceLakh: "5K",
    features: ["Max Loss: ₹8,000", "Daily Loss: ₹4,000", "Profit Target (Student): ₹15,000", "Min Trading Days: 10"],
  },
  {
    id: "growth",
    accountSize: "₹2 Lakh",
    accountSizeRupees: 200000,
    price: 9000,
    priceLakh: "9K",
    features: ["Max Loss: ₹16,000", "Daily Loss: ₹8,000", "Profit Target (Student): ₹30,000", "Min Trading Days: 10"],
  },
  {
    id: "pro",
    accountSize: "₹5 Lakh",
    accountSizeRupees: 500000,
    price: 22500,
    priceLakh: "22.5K",
    features: ["Max Loss: ₹40,000", "Daily Loss: ₹20,000", "Profit Target (Student): ₹75,000", "Min Trading Days: 10"],
    popular: true,
  },
  {
    id: "elite",
    accountSize: "₹10 Lakh",
    accountSizeRupees: 1000000,
    price: 46000,
    priceLakh: "46K",
    features: [
      "Max Loss: ₹80,000",
      "Daily Loss: ₹40,000",
      "Profit Target (Student): ₹1,50,000",
      "Min Trading Days: 10",
    ],
  },
  {
    id: "premium",
    accountSize: "₹25 Lakh",
    accountSizeRupees: 2500000,
    price: 115000,
    priceLakh: "1,15K",
    features: [
      "Max Loss: ₹2,00,000",
      "Daily Loss: ₹1,00,000",
      "Profit Target (Student): ₹3,75,000",
      "Min Trading Days: 10",
    ],
  },
  {
    id: "ultimate",
    accountSize: "₹50 Lakh",
    accountSizeRupees: 5000000,
    price: 210000,
    priceLakh: "2,10K",
    features: [
      "Max Loss: ₹4,00,000",
      "Daily Loss: ₹2,00,000",
      "Profit Target (Student): ₹7,50,000",
      "Min Trading Days: 10",
    ],
  },
]

export default function PackageSelector({
  selectedPackage,
  onSelect,
}: {
  selectedPackage: string | null
  onSelect: (id: string) => void
}) {
  return (
    <div className="space-y-12">
      {/* Account Size Grid */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Select Account Size</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-6 cursor-pointer transition-all ${
                selectedPackage === pkg.id
                  ? "border-2 border-primary bg-primary/5"
                  : "border border-border hover:border-primary/50"
              }`}
              onClick={() => onSelect(pkg.id)}
            >
              {pkg.popular && (
                <div className="mb-4">
                  <Badge className="bg-blue-500">Most Popular</Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">{pkg.accountSize}</h3>
                <p className="text-2xl font-bold text-primary">₹{pkg.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground mt-1">One-time challenge fee</p>
              </div>

              <div className="space-y-3">
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full mt-6" variant={selectedPackage === pkg.id ? "default" : "outline"}>
                {selectedPackage === pkg.id ? "Selected" : "Choose"}
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Level Comparison */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Challenge Levels</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Criteria</th>
                <th className="text-center py-4 px-4 font-semibold">Student Level</th>
                <th className="text-center py-4 px-4 font-semibold">Practitioner Level</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border hover:bg-muted/50">
                <td className="py-4 px-4">Profit Target</td>
                <td className="text-center py-4 px-4">15% of Account</td>
                <td className="text-center py-4 px-4">12% of Account</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50">
                <td className="py-4 px-4">Maximum Loss</td>
                <td className="text-center py-4 px-4">8% of Account</td>
                <td className="text-center py-4 px-4">8% of Account</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50">
                <td className="py-4 px-4">Daily Loss Limit</td>
                <td className="text-center py-4 px-4">4% of Account</td>
                <td className="text-center py-4 px-4">4% of Account</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50">
                <td className="py-4 px-4">Minimum Trading Days</td>
                <td className="text-center py-4 px-4">10 Days</td>
                <td className="text-center py-4 px-4">Unlimited</td>
              </tr>
              <tr className="border-b border-border hover:bg-muted/50">
                <td className="py-4 px-4">Allowed Instruments</td>
                <td className="text-center py-4 px-4">Futures, Options, Intraday</td>
                <td className="text-center py-4 px-4">Futures, Options, Intraday</td>
              </tr>
              <tr className="hover:bg-muted/50">
                <td className="py-4 px-4">Funded Account</td>
                <td className="text-center py-4 px-4">After Student completion</td>
                <td className="text-center py-4 px-4">Unlimited Trading</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA Section */}
      {selectedPackage && (
        <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-primary/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to get funded?</h3>
              <p className="text-muted-foreground">
                Complete the payment and start trading on our demo account tracking system
              </p>
            </div>
            <Link href={`/payment?package=${selectedPackage}`}>
              <Button size="lg">Proceed to Payment</Button>
            </Link>
          </div>
        </Card>
      )}

      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Common Questions</h2>
        <div className="space-y-4">
          <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
            <summary className="font-semibold">What happens after I buy the challenge?</summary>
            <p className="text-muted-foreground mt-4">
              After payment, you'll be redirected to your dashboard where you can connect your demo account to an Indian
              broker via API. You'll then trade with demo money while we track all your positions.
            </p>
          </details>
          <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
            <summary className="font-semibold">What's the difference between Student and Practitioner?</summary>
            <p className="text-muted-foreground mt-4">
              Student requires 15% profit target with a 10-day minimum. Practitioner requires 12% profit with no minimum
              trading days. You advance to Practitioner after completing Student level.
            </p>
          </details>
          <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
            <summary className="font-semibold">Which Indian brokers are supported?</summary>
            <p className="text-muted-foreground mt-4">
              We support integration with popular Indian brokers like Zerodha, Angel Broking, Shoonya, and others via
              their trading APIs. Details will be provided in your dashboard.
            </p>
          </details>
          <details className="border border-border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
            <summary className="font-semibold">Is there support and monitoring?</summary>
            <p className="text-muted-foreground mt-4">
              Yes! We provide 24/7 community support and real-time monitoring of your trades. We'll automatically exit
              positions if you breach the daily loss or maximum loss limits.
            </p>
          </details>
        </div>
      </div>
    </div>
  )
}
