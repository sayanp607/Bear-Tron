"use client"

import { Card } from "@/components/ui/card"

export default function TradingHistory() {
  const trades = [
    {
      date: "10/31/2025, 20:26",
      symbol: "XAUUSD",
      type: "Buy",
      open: 4020.01,
      close: 4020.68,
      pnl: "+67",
      status: "Closed",
    },
    {
      date: "10/31/2025, 17:45",
      symbol: "XAUUSD",
      type: "Buy",
      open: 4012.91,
      close: 4013.35,
      pnl: "+44",
      status: "Closed",
    },
    {
      date: "10/31/2025, 17:00",
      symbol: "XAUUSD",
      type: "Buy",
      open: 4006.26,
      close: 4007.06,
      pnl: "+80",
      status: "Closed",
    },
    {
      date: "10/31/2025, 16:47",
      symbol: "XAUUSD",
      type: "Buy",
      open: 4005.05,
      close: 4002.64,
      pnl: "-241",
      status: "Closed",
    },
    {
      date: "10/31/2025, 16:46",
      symbol: "XAUUSD",
      type: "Buy",
      open: 4006.34,
      close: 4002.63,
      pnl: "-371",
      status: "Closed",
    },
    {
      date: "10/31/2025, 15:07",
      symbol: "XAUUSD",
      type: "Buy",
      open: 4005.98,
      close: 4006.6,
      pnl: "+62",
      status: "Closed",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Trading History</h1>
        <p className="text-muted-foreground">View all your executed trades</p>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left px-4 py-3 font-semibold">Share</th>
                <th className="text-left px-4 py-3 font-semibold">Symbol</th>
                <th className="text-left px-4 py-3 font-semibold">Type</th>
                <th className="text-right px-4 py-3 font-semibold">Open Date</th>
                <th className="text-right px-4 py-3 font-semibold">Open</th>
                <th className="text-right px-4 py-3 font-semibold">Closed Date</th>
                <th className="text-right px-4 py-3 font-semibold">Closed</th>
                <th className="text-right px-4 py-3 font-semibold">TP</th>
                <th className="text-right px-4 py-3 font-semibold">SL</th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50">
                  <td className="px-4 py-3">📊</td>
                  <td className="px-4 py-3">{trade.symbol}</td>
                  <td className="px-4 py-3">
                    <span className={trade.type === "Buy" ? "text-green-600" : "text-red-600"}>{trade.type}</span>
                  </td>
                  <td className="text-right px-4 py-3 text-sm">{trade.date}</td>
                  <td className="text-right px-4 py-3 text-sm">{trade.open}</td>
                  <td className="text-right px-4 py-3 text-sm">{trade.date}</td>
                  <td className="text-right px-4 py-3 text-sm">{trade.close}</td>
                  <td
                    className={`text-right px-4 py-3 text-sm font-semibold ${Number.parseFloat(trade.pnl) > 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {trade.pnl}
                  </td>
                  <td className="text-right px-4 py-3 text-sm">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
