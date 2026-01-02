"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompetitionLeaderboard() {
  const leaderboard = [
    { rank: 1, name: "Rajesh Kumar", profit: "+₹25,50,000", pnl: "+25.5%", trades: 234, badge: "🥇" },
    { rank: 2, name: "Priya Sharma", profit: "+₹22,80,000", pnl: "+22.8%", trades: 189, badge: "🥈" },
    { rank: 3, name: "Amit Patel", profit: "+₹19,50,000", pnl: "+19.5%", trades: 156, badge: "🥉" },
    { rank: 4, name: "Neha Singh", profit: "+₹18,20,000", pnl: "+18.2%", trades: 201 },
    { rank: 5, name: "Vikram Das", profit: "+₹16,75,000", pnl: "+16.75%", trades: 167 },
  ]

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Live Leaderboard</h2>
          <p className="text-muted-foreground text-lg mb-4">Current month standings - Rankings update in real-time</p>
          <div className="flex justify-center gap-4">
            <Badge>Top 3 Compete for Prizes</Badge>
            <Badge variant="outline">Updated Every Hour</Badge>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left px-6 py-4 font-semibold">Rank</th>
                  <th className="text-left px-6 py-4 font-semibold">Trader Name</th>
                  <th className="text-right px-6 py-4 font-semibold">Total Profit</th>
                  <th className="text-right px-6 py-4 font-semibold">PnL %</th>
                  <th className="text-right px-6 py-4 font-semibold">Total Trades</th>
                  <th className="text-center px-6 py-4 font-semibold">Prize</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((trader, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-border hover:bg-muted/50 ${
                      idx < 3 ? "bg-yellow-50/50 dark:bg-yellow-950/20" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className="text-2xl">{trader.badge || trader.rank}</span>
                    </td>
                    <td className="px-6 py-4 font-medium">{trader.name}</td>
                    <td className="text-right px-6 py-4 font-bold text-green-500">{trader.profit}</td>
                    <td className="text-right px-6 py-4 font-bold text-green-500">{trader.pnl}</td>
                    <td className="text-right px-6 py-4">{trader.trades}</td>
                    <td className="text-center px-6 py-4">
                      {idx < 3 && (
                        <Badge className={idx === 0 ? "bg-yellow-500" : idx === 1 ? "bg-gray-400" : "bg-orange-500"}>
                          ₹1L Account
                        </Badge>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Info Banner */}
        <Card className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30">
          <p className="text-center text-sm">
            <span className="font-bold">🎯 Last Month's Winner:</span> Rajesh Kumar earned ₹1 Lakh funded account with
            25.5% return.
            <span className="font-bold ml-2">💬 Can you beat this?</span>
          </p>
        </Card>
      </div>
    </section>
  )
}
