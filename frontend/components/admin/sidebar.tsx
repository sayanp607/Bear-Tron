"use client"

interface AdminSidebarProps {
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function AdminSidebar({ menuOpen, setMenuOpen, activeTab, setActiveTab }: AdminSidebarProps) {
  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "transactions", label: "Transactions", icon: "💳" },
    { id: "users", label: "Users", icon: "👥" },
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
          <div className="mb-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-primary/20">
            <p className="text-xs text-muted-foreground mb-1">Admin Panel</p>
            <p className="text-lg font-bold">BearTron</p>
            <p className="text-xs text-green-500 mt-2">● System Active</p>
          </div>

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

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-xs text-muted-foreground mb-4">Quick Stats</p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Total Revenue</p>
                <p className="font-bold">₹35,42,500</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Active Accounts</p>
                <p className="font-bold">847</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">This Month</p>
                <p className="font-bold">₹12,50,000</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
