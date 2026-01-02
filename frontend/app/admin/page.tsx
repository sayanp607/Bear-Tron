"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AdminSidebar from "@/components/admin/sidebar"
import AdminOverview from "@/components/admin/overview"
import AdminTransactions from "@/components/admin/transactions"
import AdminUsers from "@/components/admin/users"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <AdminSidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className="flex-1 pt-20 md:pt-0">
          <div className="p-6 md:p-8">
            {activeTab === "overview" && <AdminOverview />}
            {activeTab === "transactions" && <AdminTransactions />}
            {activeTab === "users" && <AdminUsers />}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
