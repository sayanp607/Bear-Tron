"use client"

import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function OverviewTab() {
  const router = useRouter()

  const handleBuyChallenge = () => {
    router.push("/new-challenge")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Hey, Divyansh</h1>
          <p className="text-muted-foreground">Welcome back to your trading dashboard</p>
        </div>
        <div className="inline-flex gap-2">
          <Button 
            onClick={handleBuyChallenge}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Buy Challenge
          </Button>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">All Types ▼</button>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted">All Phases ▼</button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">📅 Trading Days</p>
          <p className="text-2xl font-bold">16</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1"># Total Trades</p>
          <p className="text-2xl font-bold">142</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">📊 Lots Used</p>
          <p className="text-2xl font-bold">8.58</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-muted-foreground mb-1">💰 Account Balance</p>
          <p className="text-2xl font-bold text-green-500">₹4,82,221</p>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Biggest Win/Loss */}
        <Card className="p-6">
          <h3 className="font-bold mb-4">Biggest Win</h3>
          <p className="text-3xl font-bold text-green-500">+₹11,260</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold mb-4">Biggest Loss</h3>
          <p className="text-3xl font-bold text-red-500">-₹8,860</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold mb-4">Win Rate</h3>
          <p className="text-3xl font-bold text-blue-500">54.93%</p>
        </Card>
      </div>

      {/* Analysis Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-bold mb-4">Short Analysis</h3>
          <div className="relative pt-8">
            <svg viewBox="0 0 200 200" className="w-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="20" />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#ef4444"
                strokeWidth="20"
                strokeDasharray="150 502.65"
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#22c55e"
                strokeWidth="20"
                strokeDasharray="352.65 502.65"
                strokeLinecap="round"
                strokeDashoffset="-150"
                transform="rotate(-90 100 100)"
              />
              <text x="100" y="110" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
                -₹177.79
              </text>
            </svg>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold mb-4">Profitability</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Wins</span>
                <span className="font-bold">78</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span>Losses</span>
                <span className="font-bold">64</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Total Trades: 142</p>
              <p className="text-lg font-bold text-blue-500 mt-2">54.93% Win Rate</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold mb-4">Long Analysis</h3>
          <div className="relative pt-8">
            <svg viewBox="0 0 200 200" className="w-full">
              <circle cx="100" cy="100" r="80" fill="none" stroke="#e5e7eb" strokeWidth="20" />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#ef4444"
                strokeWidth="20"
                strokeDasharray="112.65 502.65"
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#22c55e"
                strokeWidth="20"
                strokeDasharray="390 502.65"
                strokeLinecap="round"
                strokeDashoffset="-112.65"
                transform="rotate(-90 100 100)"
              />
              <text x="100" y="110" textAnchor="middle" className="text-lg font-bold" fill="currentColor">
                -₹177.79
              </text>
            </svg>
          </div>
        </Card>
      </div>
    </div>
  )
}
