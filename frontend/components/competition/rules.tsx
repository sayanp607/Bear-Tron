"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompetitionRules() {
  const rules = [
    {
      title: "Entry Fee",
      description: "Pay ₹149 to participate in the championship",
      icon: "💳",
    },
    {
      title: "Demo Capital",
      description: "Trade with ₹1 crore (₹10,000,000) demo money",
      icon: "💰",
    },
    {
      title: "Trading Period",
      description: "One month competition - trades are tracked daily",
      icon: "📅",
    },
    {
      title: "Prize Distribution",
      description: "1st, 2nd, 3rd place get ₹1 lakh funded accounts each",
      icon: "🏆",
    },
    {
      title: "Fair Play",
      description: "No restrictions on positions, all instruments allowed",
      icon: "⚖️",
    },
    {
      title: "Real Monitoring",
      description: "All trades monitored in real-time with full transparency",
      icon: "👁️",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">Simple rules. Fair competition. Real prizes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {rules.map((rule, idx) => (
            <Card key={idx} className="p-6">
              <div className="text-4xl mb-4">{rule.icon}</div>
              <h3 className="font-bold mb-2">{rule.title}</h3>
              <p className="text-sm text-muted-foreground">{rule.description}</p>
            </Card>
          ))}
        </div>

        {/* Detailed Rules */}
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Competition Details</h3>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Badge className="bg-green-500">What You Get</Badge>
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>₹1 Crore demo trading capital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Real-time P&L tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Live leaderboard rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Trading history & analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>24/7 community support</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Badge className="bg-blue-500">Allowed Instruments</Badge>
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">📈</span>
                    <span>Stock Futures (All Scripts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">📊</span>
                    <span>Index Futures (Nifty, Sensex)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">⚡</span>
                    <span>Options (Calls & Puts)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">💱</span>
                    <span>Intraday Trading (Equity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">🔄</span>
                    <span>Positional Trading</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Badge className="bg-red-500">Restrictions</Badge>
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>No hedging with same instrument</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>No margin misuse</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>No manipulation attempts</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Badge className="bg-yellow-500">Prize Breakdown</Badge>
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-between justify-between">
                    <span>🥇 1st Place:</span>
                    <span className="font-bold">₹1,00,000 Funded Account</span>
                  </li>
                  <li className="flex items-between justify-between">
                    <span>🥈 2nd Place:</span>
                    <span className="font-bold">₹1,00,000 Funded Account</span>
                  </li>
                  <li className="flex items-between justify-between">
                    <span>🥉 3rd Place:</span>
                    <span className="font-bold">₹1,00,000 Funded Account</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
