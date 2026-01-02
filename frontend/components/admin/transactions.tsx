"use client"

import { Card } from "@/components/ui/card"

export default function AdminTransactions() {
  const transactions = [
    {
      id: "TXN001",
      user: "Amit Kumar",
      amount: "₹46,000",
      type: "Buy Challenge",
      status: "Completed",
      date: "Nov 1, 2025",
    },
    {
      id: "TXN002",
      user: "Priya Singh",
      amount: "₹22,500",
      type: "Buy Challenge",
      status: "Completed",
      date: "Oct 31, 2025",
    },
    {
      id: "TXN003",
      user: "Rahul Patel",
      amount: "₹149",
      type: "Competition",
      status: "Completed",
      date: "Oct 31, 2025",
    },
    {
      id: "TXN004",
      user: "Neha Gupta",
      amount: "₹115,000",
      type: "Buy Challenge",
      status: "Processing",
      date: "Oct 31, 2025",
    },
    {
      id: "TXN005",
      user: "Vikram Das",
      amount: "₹9,000",
      type: "Buy Challenge",
      status: "Completed",
      date: "Oct 30, 2025",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Transactions</h1>
        <p className="text-muted-foreground">All payment transactions and receipts</p>
      </div>

      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Recent Transactions</h2>
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm">Export CSV</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">TXN ID</th>
                <th className="text-left py-3 px-4 font-semibold">User</th>
                <th className="text-left py-3 px-4 font-semibold">Amount</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 font-mono text-xs">{txn.id}</td>
                  <td className="py-3 px-4">{txn.user}</td>
                  <td className="py-3 px-4 font-bold">{txn.amount}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 px-2 py-1 rounded">
                      {txn.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        txn.status === "Completed"
                          ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                          : "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {txn.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{txn.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
