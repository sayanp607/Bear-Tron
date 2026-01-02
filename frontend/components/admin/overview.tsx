"use client"

import { Card } from "@/components/ui/card"

export default function AdminOverview() {
  const stats = [
    { label: "Total Users", value: "1,250", change: "+12%", icon: "👥" },
    { label: "Active Accounts", value: "847", change: "+8%", icon: "💼" },
    { label: "Total Revenue", value: "₹35.42 Cr", change: "+25%", icon: "💰" },
    { label: "Avg Account Size", value: "₹15.2 Lakh", change: "+5%", icon: "📊" },
  ]

  const recentRegistrations = [
    { name: "Amit Verma", email: "amit@email.com", package: "₹5 Lakh", status: "Paid", date: "Nov 1, 2025" },
    { name: "Sarah Khan", email: "sarah@email.com", package: "₹10 Lakh", status: "Paid", date: "Oct 31, 2025" },
    { name: "Rohit Singh", email: "rohit@email.com", package: "₹2 Lakh", status: "Pending", date: "Oct 31, 2025" },
    { name: "Priya Desai", email: "priya@email.com", package: "₹1 Lakh", status: "Paid", date: "Oct 30, 2025" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Platform overview and key metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <Card key={idx} className="p-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">Recent Registrations</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Name</th>
                <th className="text-left py-3 px-4 font-semibold">Email</th>
                <th className="text-left py-3 px-4 font-semibold">Package</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentRegistrations.map((reg, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4">{reg.name}</td>
                  <td className="py-3 px-4">{reg.email}</td>
                  <td className="py-3 px-4">{reg.package}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        reg.status === "Paid"
                          ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                          : "bg-yellow-100 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100"
                      }`}
                    >
                      {reg.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{reg.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Channel Performance */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Buy Challenge Performance</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">₹1 Lakh</span>
                <span className="text-sm font-bold">285 accounts</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">₹5 Lakh</span>
                <span className="text-sm font-bold">180 accounts</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "41%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">₹10 Lakh</span>
                <span className="text-sm font-bold">195 accounts</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "44%" }} />
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-bold mb-6">Revenue Breakdown</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Buy Challenge</span>
                <span className="text-sm font-bold">₹28.5 Cr</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Trading Competition</span>
                <span className="text-sm font-bold">₹6.92 Cr</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "20%" }} />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
