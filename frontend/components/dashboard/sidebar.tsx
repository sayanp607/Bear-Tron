"use client"

import Link from "next/link"

interface SidebarProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function DashboardSidebar({ menuOpen, setMenuOpen, activeTab, setActiveTab }: SidebarProps) {
  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "history", label: "Trading History", icon: "📈" },
    { id: "objectives", label: "Objectives", icon: "🎯" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="fixed top-20 left-4 z-40 md:hidden bg-primary text-primary-foreground p-2 rounded-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 w-64 h-[calc(100vh-64px)] bg-card border-r border-border overflow-y-auto transition-transform md:translate-x-0 z-30 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Account Info */}
          <div className="mb-8 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Account #</p>
            <p className="text-xl font-bold">10755638</p>
            <p className="text-xs text-green-500 mt-2">● Ongoing</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id)
                  setMenuOpen(false)
                }}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Account Stats */}
          <div className="mt-8 border-t border-border pt-6">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Account Size</p>
                <p className="font-bold text-lg">₹5,00,000</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Current Balance</p>
                <p className="font-bold text-lg text-green-500">₹4,82,221</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">PnL</p>
                <p className="font-bold text-lg text-red-500">-₹17,779</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-2">
            <Link
              href="/dashboard/api-setup"
              className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-center text-sm font-medium hover:bg-primary/90"
            >
              Connect Broker API
            </Link>
            <button className="w-full px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted">
              Download Reports
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
