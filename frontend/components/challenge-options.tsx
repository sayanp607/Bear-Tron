"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ChallengeOptions() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-muted-foreground text-lg">Get funded or compete for prizes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Buy Challenge Card */}
          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <div className="mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 mb-4">
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Buy Funded Challenge</h3>
              <p className="text-muted-foreground">Pay one-time fee. Trade with funded capital. Earn real profits.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Starting from ₹5,000</p>
                  <p className="text-sm text-muted-foreground">For ₹1 Lakh account</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Two-Step Process</p>
                  <p className="text-sm text-muted-foreground">Student → Practitioner</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Clear Rules</p>
                  <p className="text-sm text-muted-foreground">Max 8% loss, 4% daily limit</p>
                </div>
              </div>
            </div>

            <Link href="/buy-challenge">
              <Button className="w-full">Explore Packages</Button>
            </Link>
          </Card>

          {/* Trading Competition Card */}
          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <div className="mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 mb-4">
                <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Trading Championship</h3>
              <p className="text-muted-foreground">
                Compete with other traders. Win funded accounts. Prove your skills.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Entry: ₹149</p>
                  <p className="text-sm text-muted-foreground">Compete with ₹1 crore demo capital</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Win ₹1 Lakh Account</p>
                  <p className="text-sm text-muted-foreground">Top 3 traders get funded</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-500 mt-1">✓</span>
                <div>
                  <p className="font-semibold">Real Competition</p>
                  <p className="text-sm text-muted-foreground">Monthly leaderboard rankings</p>
                </div>
              </div>
            </div>

            <Link href="/competition">
              <Button variant="outline" className="w-full bg-transparent">
                Join Competition
              </Button>
            </Link>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-500">500+</p>
            <p className="text-muted-foreground mt-2">Active Traders</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-500">₹50 Cr+</p>
            <p className="text-muted-foreground mt-2">Total Capital</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-500">24/7</p>
            <p className="text-muted-foreground mt-2">Support & Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  )
}
