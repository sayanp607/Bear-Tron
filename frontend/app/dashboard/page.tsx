"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DashboardSidebar from "@/components/dashboard/sidebar"
import OverviewTab from "@/components/dashboard/overview-tab"
import TradingObjectives from "@/components/dashboard/trading-objectives"
import TradingHistory from "@/components/dashboard/trading-history"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <DashboardSidebar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Main Content */}
        <main className="flex-1 pt-20 md:pt-0">
          <div className="p-4 sm:p-6 md:p-8">
            {activeTab === "overview" && (
              <div className="space-y-6 sm:space-y-8">
                <OverviewTab />
                <TradingObjectives />
              </div>
            )}
            {activeTab === "history" && <TradingHistory />}
            {activeTab === "objectives" && <TradingObjectives />}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
