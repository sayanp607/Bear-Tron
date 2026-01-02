"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AdminUsers() {
  const users = [
    {
      id: "#10755638",
      name: "Divyansh Sharma",
      email: "divyansh@email.com",
      type: "Buy Challenge",
      status: "Active",
      joinDate: "Oct 2, 2025",
    },
    {
      id: "#10755639",
      name: "Rajesh Kumar",
      email: "rajesh@email.com",
      type: "Competition",
      status: "Active",
      joinDate: "Oct 15, 2025",
    },
    {
      id: "#10755640",
      name: "Priya Desai",
      email: "priya@email.com",
      type: "Buy Challenge",
      status: "Active",
      joinDate: "Oct 20, 2025",
    },
    {
      id: "#10755641",
      name: "Amit Patel",
      email: "amit@email.com",
      type: "Buy Challenge",
      status: "Paused",
      joinDate: "Oct 25, 2025",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Users</h1>
        <p className="text-muted-foreground">Manage all traders and accounts</p>
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">Active Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold">Account ID</th>
                <th className="text-left py-3 px-4 font-semibold">Name</th>
                <th className="text-left py-3 px-4 font-semibold">Email</th>
                <th className="text-left py-3 px-4 font-semibold">Type</th>
                <th className="text-left py-3 px-4 font-semibold">Status</th>
                <th className="text-left py-3 px-4 font-semibold">Join Date</th>
                <th className="text-left py-3 px-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx} className="border-b border-border hover:bg-muted/50">
                  <td className="py-3 px-4 font-mono text-xs">{user.id}</td>
                  <td className="py-3 px-4 font-medium">{user.name}</td>
                  <td className="py-3 px-4">{user.email}</td>
                  <td className="py-3 px-4">
                    <Badge variant={user.type === "Buy Challenge" ? "default" : "secondary"}>{user.type}</Badge>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100"
                          : "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{user.joinDate}</td>
                  <td className="py-3 px-4">
                    <button className="text-blue-500 hover:underline text-xs">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
